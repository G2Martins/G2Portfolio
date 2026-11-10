// Post-build smoke check: every prerendered page must carry the SEO essentials and reference only
// files that exist. Run after `npm run build`: `npm run check`. Exits 1 on any failure.
import { existsSync, readFileSync } from 'node:fs';
import { SITE_URL } from '../src/app/data/content.ts';

const root = new URL('../dist/g2-portfolio/browser/', import.meta.url);
const file = (p: string) => new URL(p.replace(/^\//, ''), root);
const fails: string[] = [];
const must = (ok: unknown, msg: string) => ok || fails.push(msg);

const sitemap = readFileSync(file('sitemap.xml'), 'utf8');
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].replace(SITE_URL, ''));
must(urls.length > 40, `sitemap has only ${urls.length} urls`);

for (const u of urls) {
  if (u.endsWith('.pdf')) { must(existsSync(file(u)), `missing ${u}`); continue; }
  const path = file(`${u}index.html`);
  if (!existsSync(path)) { fails.push(`not prerendered: ${u}`); continue; }
  const html = readFileSync(path, 'utf8');
  must((html.match(/<h1[\s>]/g) ?? []).length === 1, `${u}: expected exactly one <h1>`);
  must(html.includes(`<link rel="canonical" href="${SITE_URL}${u}">`), `${u}: canonical mismatch`);
  must(/<meta name="description" content="[^"]{60,}/.test(html), `${u}: description missing/short`);
  must(html.includes('hreflang="en"') && html.includes('hreflang="pt-BR"'), `${u}: hreflang missing`);
  must(html.includes('Gustavo Martins Gripaldi'), `${u}: name missing`);
  const ld = html.match(/<script id="ld-json" type="application\/ld\+json">(.*?)<\/script>/s)?.[1];
  try { must(JSON.parse(ld ?? '')['@graph'].length >= 3, `${u}: thin JSON-LD`); } catch { fails.push(`${u}: invalid JSON-LD`); }
  for (const [, src] of html.matchAll(/(?:src|href)="(\/(?:img|cv|og)\/[^"]+)"/g)) must(existsSync(file(src)), `${u}: broken ${src}`);
  // Internal page links must end in '/': GitHub Pages answers /path with a 301 to /path/.
  for (const [, href] of html.matchAll(/href="(\/[^"#?]*)/g))
    must(href.endsWith('/') || /\.[a-z0-9]+$/i.test(href), `${u}: link without trailing slash ${href}`);
  for (const [, set] of html.matchAll(/srcset="([^"]+)"/g))
    for (const part of set.split(',')) { const s = part.trim().split(' ')[0]; must(existsSync(file(s)), `${u}: broken ${s}`); }
}
for (const f of ['robots.txt', 'llms.txt', 'llms-full.txt', 'site.webmanifest', 'favicon.svg', 'favicon.ico', '404.html', 'CNAME', '.nojekyll', 'og/gustavo-martins-gripaldi.png'])
  must(existsSync(file(f)), `missing /${f}`);

if (fails.length) { console.error(`check: ${fails.length} problem(s)\n- ` + [...new Set(fails)].join('\n- ')); process.exit(1); }
console.log(`check: ${urls.length} urls OK`);
