# CV (fonte)

**Última revisão:** 2026-11-10

Fonte dos PDFs do currículo servidos pelo site:

| Arquivo | Saída |
| --- | --- |
| `pt.json` | `public/cv/gustavo-martins-gripaldi-cv.pdf` |
| `en.json` | `public/cv/gustavo-martins-gripaldi-cv-en.pdf` |

- `pt.json` / `en.json`: todo o conteúdo (texto, links, metadados do PDF). Editar aqui.
- `template.html`: layout + CSS (Jinja2). Uma coluna, A4, Carlito, azul `#14345c`.
- `fonts/`: Carlito Regular/Bold (OFL, ver `fonts/OFL.txt`), métrica do Calibri.
- `build.py`: renderiza com Playwright Chromium (`page.pdf`, A4, texto selecionável, fontes embutidas, links clicáveis) e grava os metadados (Title, Author, Subject, Keywords, Lang) via PyPDF2.

## Rebuild

Rodar de dentro de `cv/` (o caminho do repo tem "Programação" e o argv do Python no Windows estraga caracteres não ASCII):

```sh
cd cv
python -I build.py        # PT + EN
python -I build.py en     # só um idioma
```

Requisitos: `pip install playwright jinja2 PyPDF2 pypdfium2` e `python -m playwright install chromium`.

O build já confere cada PDF e falha se: o cargo atual não aparece no texto, há travessão "—", passa de 2 páginas ou falta algum link. Também escreve em `.preview/` (ignorado pelo git) o HTML renderizado e um PNG por página para conferência visual.

## Regras de conteúdo

- Sem travessão "—". Use ":", ",", "." ou "·". Meia-risca em intervalo de datas ("Set/2025 – Atual") pode.
- Não inventar conquistas, números, datas ou skills. Os dois idiomas dizem a mesma coisa.
- Ao mudar o CV, conferir `src/app/data/content.ts` (EXPERIENCE, SKILLS, CERTS) para o site não divergir.
