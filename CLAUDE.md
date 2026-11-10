# CLAUDE.md, G2 Portfolio

> **Spec viva.** Porta de entrada lida pelo agente toda sessão. Não duplica o [README.md](README.md), **aponta** pra ele. Atualize quando uma regra, comando, módulo ou armadilha mudar.
>
> **Última revisão:** 2026-11-10
> **Rodar, estrutura, SEO e deploy em detalhe:** [README.md](README.md)

---

## 1. O que é

Portfólio pessoal de **Gustavo Martins Gripaldi** (engenheiro de dados e dev full stack, Brasília), no ar em **<https://g2portfolio.grovicdata.com>** (GitHub Pages + CNAME). Objetivo: ranquear em primeiro para "Gustavo Martins Gripaldi" e converter recrutador (CV em PDF, contato, projetos com demo ao vivo). PT-BR (`/`) + EN (`/en`), tema claro e escuro.

## 2. Stack + Comandos

Angular 21 standalone + zoneless + signals, SSG (`outputMode: "static"`, 44 rotas), Tailwind CSS v4, Geist/Geist Mono. Node 22.18+ (scripts `.ts` com type stripping nativo).

```bash
npm start            # seo + ng serve (dev)
npm run seo          # gera public/sitemap.xml, llms.txt e llms-full.txt a partir dos dados
npm run build        # seo + ng build (prerender de todas as rotas)
npm run check        # valida cada URL do sitemap: 1 h1, canonical, description, hreflang, JSON-LD, imagens existentes
npm run build:pages  # build + copia dist pra docs/ (publicação)
```

## 3. Mapa de módulos

| Caminho | Responsabilidade |
| --- | --- |
| `src/app/data/content.ts` | Fonte única de textos: pessoa, SEO, UI (PT/EN), experiência, skills, formação, certificados, G2 Boost |
| `src/app/data/projects.ts` | Catálogo de projetos (slug, textos PT/EN, stack, links, imagens) |
| `src/app/pages/home.*` | Home: hero, card "Agora", G2 Boost, Grovic, projetos (filtro), experiência, sobre, formação, contato |
| `src/app/pages/project.*` | Página de cada projeto, JSON-LD (SoftwareApplication/SourceCode/WebApplication) |
| `src/app/shared/seo.ts` | Title, meta, OG, canonical, hreflang, JSON-LD `@graph` (Person, WebSite, Organization) |
| `src/app/shared/cover.ts`, `reveal.ts`, `icon.ts` | Imagem WebP 640/1280 com fallback, reveal-on-scroll, ícones SVG inline |
| `scripts/seo.ts`, `check.ts`, `pages.ts` | Sitemap + llms.txt, verificação de SEO, cópia pra `docs/` |
| `public/` | CV em PDF, OG, ícones, `img/projects/<slug>-{640,1280}.webp`, CNAME, robots |

## 4. Regras SEMPRE-ATIVAS

- **Conteúdo só em `content.ts` e `projects.ts`**, sem imports de runtime (o Node lê esses arquivos direto nos scripts).
- **Grovic Data: só links de site**, nunca GitHub (repos privados). Exceções autorizadas: ProntuSMART e Routify (repos públicos). G2Cord fica privado, sem link.
- **Cada projeto com demo vive no próprio repo** (`G:\1. Projetos\2.Projetos_Programação\<Projeto>`), publicado no GitHub Pages dele. Aqui só a ficha: textos, prints (`<slug>`, `<slug>-2..4`) e link do site. Ao publicar um projeto: atualizar a ficha e o "About" do repo no GitHub (descrição com o link, homepage, tópicos).
- **Sem travessão "—" em texto visível** (copy, alt, títulos, llms.txt, manifest, OG, metadados do PDF). Usar ":", ",", "." ou "·".
- **Sem pronome em texto na terceira pessoa** sobre o Gustavo (llms.txt etc.): usar o nome ou frase sem sujeito.
- **Toda rota pré-renderizada.** APIs do browser só em `afterNextRender` ou eventos.
- **Animação só `transform`/`opacity`**, respeitando `prefers-reduced-motion`; conteúdo visível sem JS (gate `.js` em `styles.css`).
- **Design = linguagem Valerium** (`G:\1. Projetos\6. Grovic Data\Valerium-Portal` é a referência): papel quente, acento `#003ADD`, eyebrow mono, cards "well", out-expo.
- **Antes de publicar:** `npm run build:pages` e `npm run check` verdes. `docs/` é saída de build: nunca editar à mão (por isso não existe pasta `Docs/`, colide no Windows).
- **Docs vivas:** mudou comportamento, atualiza README e este arquivo no mesmo commit.

## 5. Segurança

- Site 100% estático, sem backend nem formulário. Contato por e-mail, WhatsApp (`wa.me` com mensagem pronta) e LinkedIn.
- JSON-LD montado em objeto e serializado com `<` escapado. Nada de `innerHTML` com texto de fora.
- Nenhum segredo neste repo. Conferir `.gitignore` antes de stage.

## 6. Common Hurdles (armadilhas conhecidas)

- **`cpSync` do Node 22 sai com código 127 em silêncio** no caminho com "Programação". `pages.ts` usa `fs/promises` `cp`.
- **EBUSY no `build:pages`:** algum shell ou servidor local com cwd dentro de `docs/`. Fechar antes.
- **Python com caminho não-ASCII via argumento** chega corrompido. Rodar de dentro da pasta, com caminho relativo, ou caminho literal no próprio script.
- **Hidratação incremental foi rejeitada** aqui: quebra o scroll para âncora (`/#projetos`) vindo das páginas de projeto.
- **Lighthouse local:** o Kaspersky injeta um script bloqueante; usar `--blocked-url-patterns="*kaspersky-labs.com*"`.
- **Favicon, ícones e OG** derivam do SVG do G2 Boost (`G2 Boost/src-tauri/icons/g2boost.svg`), renderizados com Playwright (fontes Geist embutidas em base64, senão o Chromium não carrega via `file://`).
- **CV em PDF** é o arquivo original do Gustavo: só os metadados foram alterados (PyPDF2, copiando página a página; `clone_reader_document_root` gera PDF quebrado). Conteúdo novo exige PDF novo dele.
