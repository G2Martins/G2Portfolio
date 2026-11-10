"""Build the CV PDFs from template.html + pt.json / en.json.

Run from inside cv/ (argv mangles the non-ASCII repo path on Windows):
    cd cv && python -I build.py          # both languages
    cd cv && python -I build.py en       # one language
"""
import io
import json
import sys
from pathlib import Path

from jinja2 import Environment, FileSystemLoader, select_autoescape
from playwright.sync_api import sync_playwright
from PyPDF2 import PdfReader, PdfWriter
from PyPDF2.generic import NameObject, TextStringObject

HERE = Path(__file__).resolve().parent
ROOT = HERE.parent
PREVIEW = HERE / ".preview"
AUTHOR = "Gustavo Martins Gripaldi"

env = Environment(loader=FileSystemLoader(HERE), autoescape=select_autoescape(["html"]))


def render(page, lang):
    data = json.loads((HERE / f"{lang}.json").read_text(encoding="utf-8"))
    html = PREVIEW / f"cv-{lang}.html"  # kept for quick browser preview
    html.write_text(env.get_template("template.html").render(**data), encoding="utf-8")
    page.goto(html.as_uri())
    page.evaluate("document.fonts.ready")
    pdf = page.pdf(format="A4", print_background=True, prefer_css_page_size=True)

    # ponytail: copy pages into a fresh writer; clone_reader_document_root gave a broken file before.
    reader, writer = PdfReader(io.BytesIO(pdf)), PdfWriter()
    for p in reader.pages:
        writer.add_page(p)
    m = data["meta"]
    writer.add_metadata({
        "/Title": m["title"], "/Author": AUTHOR, "/Subject": m["subject"],
        "/Keywords": m["keywords"], "/Creator": "g2portfolio.grovicdata.com",
    })
    writer._root_object[NameObject("/Lang")] = TextStringObject(data["lang"])
    out = ROOT / data["out"]
    with open(out, "wb") as f:
        writer.write(f)
    return out, data


def check(out, data):
    """Fail loudly on the things that matter: role, no em dash, links, page count."""
    import pypdfium2 as pdfium  # Chrome's PDF engine; PyPDF2's extract_text adds bogus spaces

    r = PdfReader(str(out))
    doc = pdfium.PdfDocument(str(out))
    text = " ".join(pg.get_textpage().get_text_bounded().replace("\r\n", " ") for pg in doc)
    links = [a.get_object()["/A"]["/URI"] for p in r.pages for a in (p.get("/Annots") or [])
             if a.get_object().get("/Subtype") == "/Link"]
    role = data["experience"][0]["role"]
    assert role in text, f"role missing: {role}"
    assert "—" not in text, "em dash found"
    assert len(r.pages) <= 2, f"{len(r.pages)} pages"
    assert len(links) == len(data["links"]) + len(data["certs"]), links
    print(f"{out.name}: {len(r.pages)} pages, {len(links)} links, {out.stat().st_size} bytes")
    for u in links:
        print("  ", u)
    for i, pg in enumerate(doc, 1):  # PNG preview of each page
        pg.render(scale=2).to_pil().save(PREVIEW / f"{out.stem}-p{i}.png")


def main():
    PREVIEW.mkdir(exist_ok=True)
    langs = sys.argv[1:] or ["pt", "en"]
    with sync_playwright() as pw:
        browser = pw.chromium.launch()
        page = browser.new_page()
        built = [render(page, lang) for lang in langs]
        browser.close()
    for out, data in built:
        check(out, data)


if __name__ == "__main__":
    main()
