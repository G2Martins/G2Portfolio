// Pings IndexNow (Bing, Yandex, Seznam, Naver...) with every URL in the sitemap. Run after a deploy is live:
//   npm run indexnow
// The key is public by design: search engines fetch https://<host>/<key>.txt to verify ownership.
import { readFileSync } from 'node:fs';

const KEY = '5f40df46ce255836c6e515acf37f39a3';
const HOST = 'g2portfolio.grovicdata.com';
const sitemap = readFileSync(new URL('../public/sitemap.xml', import.meta.url), 'utf8');
const urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'content-type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList }),
});
console.log(`indexnow: ${res.status} ${res.statusText} (${urlList.length} urls)`);
