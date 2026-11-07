# CLAUDE.md — G2 Portfolio

**Última revisão:** 2026-11-07

Spec viva. Detalhes de rodar/estrutura/SEO/deploy: [README.md](README.md). Não duplicar aqui.

## Regras do projeto

- Conteúdo só em `src/app/data/content.ts` e `src/app/data/projects.ts` (fonte única do app + `scripts/seo.ts`).
  Esses arquivos não podem ter imports de runtime (Node executa com type stripping).
- Projetos da Grovic Data: **só links de site**, nunca GitHub (repos privados). Exceção: ProntuSMART (repo público, autorizado).
- Toda rota é pré-renderizada (`outputMode: "static"`). Nada de APIs do browser fora de `afterNextRender`/eventos.
- Animação só `transform`/`opacity`; respeitar `prefers-reduced-motion`; conteúdo visível sem JS (`.js` gate em `styles.css`).
- Antes de publicar: `npm run build && npm run check` verdes, depois `npm run build:pages`.
- `docs/` é saída de build (GitHub Pages). Não editar à mão. Por isso não existe pasta `Docs/` (colide no Windows).
