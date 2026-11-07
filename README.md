# G2 Portfolio — Gustavo Martins Gripaldi

**Última revisão:** 2026-11-07

Portfólio pessoal em <https://g2portfolio.grovicdata.com> (PT-BR em `/`, inglês em `/en/`).
Angular 21 (standalone, zoneless) pré-renderizado em HTML estático e servido pelo GitHub Pages.

## Rodar

```bash
npm install
npm start            # gera SEO + dev server em http://localhost:4200
npm run build        # gera SEO + build estático em dist/g2-portfolio/browser (44 rotas)
npm run check        # smoke test do build: h1, canonical, hreflang, JSON-LD, imagens, sitemap
npm run build:pages  # build + copia para /docs (pasta publicada pelo GitHub Pages)
```

Requer Node >= 22.18 (os scripts em `scripts/*.ts` rodam com type stripping nativo).

## Onde mexer

| Quero… | Arquivo |
|---|---|
| Editar textos, experiência, skills, certificações, versão do G2 Boost | `src/app/data/content.ts` |
| Adicionar/editar projeto | `src/app/data/projects.ts` + capas em `public/img/projects/<slug>-{640,1280}.webp` (16:10) |
| Trocar o CV | `public/cv/gustavo-martins-gripaldi-cv.pdf` (manter o nome — está no sitemap e no llms.txt) |
| Visual (tokens, cards, animações) | `src/styles.css` |
| Meta tags / JSON-LD | `src/app/shared/seo.ts` (+ `projectNode` em `pages/project.ts`) |

Os dados são a **fonte única**: o app e `scripts/seo.ts` (sitemap, `llms.txt`, `llms-full.txt`) leem os mesmos arquivos.
Manter `content.ts` e `projects.ts` **sem imports de runtime** (só `import type`) para o Node conseguir executá-los.

### Novo release do G2 Boost

Atualizar `G2BOOST` em `content.ts` (versão, data, nomes e tamanhos dos arquivos) e rodar `npm run build:pages`.

## SEO

- Cada rota é HTML estático com `title`, `description`, canonical, `hreflang` (pt-BR/en/x-default), Open Graph/Twitter e JSON-LD
  (`ProfilePage` + `Person` + `Organization` Grovic Data; `SoftwareApplication` para o G2 Boost; `SoftwareSourceCode`/`WebApplication` nos projetos; `BreadcrumbList`).
- Uma página por projeto (`/projetos/<slug>/` e `/en/projects/<slug>/`).
- `robots.txt`, `sitemap.xml` (com alternates e imagens), `llms.txt` e `llms-full.txt` (padrão <https://llmstxt.org>).
- Imagem social: `public/og/gustavo-martins-gripaldi.png` (1200×630).

## Performance

- Sem CDN externo: fontes Geist/Geist Mono self-hosted (woff2), ícones SVG inline.
- CSS crítico inline; JS como módulo (não bloqueia render); imagens WebP 640/1280 com `srcset` e lazy-load.
- Animações só em `transform`/`opacity` (compositor), reveal via um único `IntersectionObserver`,
  `prefers-reduced-motion` respeitado. Conteúdo fica visível sem JS (crawlers/LLMs leem tudo).

## Design

Linguagem visual herdada do Valerium (Grovic Data): papel quente, um acento azul `#003ADD`, Geist Sans/Mono,
eyebrows mono numerados, cards com moldura dupla e ticks nos cantos, dot grid. Tema claro/escuro segue o sistema
e pode ser alternado (salvo em `localStorage`).

## Deploy

GitHub Pages publica a pasta `/docs` da branch `main` (domínio em `public/CNAME`). Fluxo: `npm run build:pages` → commit → push.
