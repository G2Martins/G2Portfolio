// Publishes the static build to /docs (GitHub Pages source: main branch, /docs folder).
import { cp, rm } from 'node:fs/promises';

const dist = new URL('../dist/g2-portfolio/browser/', import.meta.url);
const docs = new URL('../docs/', import.meta.url);

// ponytail: async cp on purpose — Node 22's native cpSync exits 127 silently on non-ASCII paths ("Programação").
await rm(docs, { recursive: true, force: true });
await cp(dist, docs, { recursive: true });
console.log('pages: dist/g2-portfolio/browser -> docs/');
