// Generates public/sitemap.xml, public/llms.txt and public/llms-full.txt from the same data the
// site renders (src/app/data). Run with Node >= 22.18 (native TypeScript type stripping).
import { writeFileSync } from 'node:fs';
import {
  CERTS, CV_PATH, EDUCATION, EXPERIENCE, G2BOOST, GROVIC, LANGUAGES, PERSON, SEO, SITE_URL, SKILLS, UI,
  g2boostAsset, homePath, projectPath, type Lang,
} from '../src/app/data/content.ts';
import { CATEGORIES, PROJECTS } from '../src/app/data/projects.ts';

const out = (f: string, s: string) => writeFileSync(new URL(`../public/${f}`, import.meta.url), s);
const today = new Date().toISOString().slice(0, 10);
const abs = (p: string) => SITE_URL + p;

// ---------- sitemap.xml ----------
const pages = [
  { pt: homePath('pt'), en: homePath('en'), images: ['/og/gustavo-martins-gripaldi.png'], prio: '1.0' },
  ...PROJECTS.map((p) => ({
    pt: projectPath('pt', p.slug),
    en: projectPath('en', p.slug),
    images: p.images.map((i) => `/img/projects/${i}-1280.webp`),
    prio: p.group === 'main' ? '0.6' : '0.8',
  })),
];
const urlEntry = (loc: string, alt: { pt: string; en: string }, images: string[], prio: string) => `  <url>
    <loc>${abs(loc)}</loc>
    <lastmod>${today}</lastmod>
    <priority>${prio}</priority>
    <xhtml:link rel="alternate" hreflang="pt-BR" href="${abs(alt.pt)}"/>
    <xhtml:link rel="alternate" hreflang="en" href="${abs(alt.en)}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${abs(alt.pt)}"/>
${images.map((i) => `    <image:image><image:loc>${abs(i)}</image:loc></image:image>`).join('\n')}
  </url>`;
out(
  'sitemap.xml',
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${pages.flatMap((p) => [urlEntry(p.pt, p, p.images, p.prio), urlEntry(p.en, p, p.images, p.prio)]).join('\n')}
  <url>
    <loc>${abs(CV_PATH)}</loc>
    <lastmod>${today}</lastmod>
    <priority>0.7</priority>
  </url>
</urlset>
`,
);

// ---------- llms.txt (https://llmstxt.org) ----------
const intro = {
  pt: `${PERSON.name} é ${PERSON.jobTitle.pt.toLowerCase()} em Brasília (DF, Brasil). Atua como Assistente de Business Intelligence na Brasal Participações (Microsoft Fabric, PySpark, Power BI), é cofundador da Grovic Data e criador do G2 Boost. Estuda Engenharia da Computação no IESB (2023–2026).`,
  en: `${PERSON.name} is a ${PERSON.jobTitle.en.toLowerCase()} based in Brasília, Brazil. He works as a Business Intelligence Assistant at Brasal Participações (Microsoft Fabric, PySpark, Power BI), co-founded Grovic Data and created G2 Boost. Computer Engineering student at IESB (2023–2026).`,
};

out(
  'llms.txt',
  `# ${PERSON.name}

> ${intro.pt}

${intro.en}

Também conhecido como / also known as: ${PERSON.alternateName.join(', ')}. Contato: ${PERSON.email} · LinkedIn: ${PERSON.linkedin} · GitHub: ${PERSON.github}

## Perfil / Profile

- [Portfólio (PT-BR)](${abs(homePath('pt'))}): ${SEO.home.description.pt}
- [Portfolio (English)](${abs(homePath('en'))}): ${SEO.home.description.en}
- [Currículo / Résumé (PDF)](${abs(CV_PATH)}): CV completo com experiência, projetos e certificações
- [LinkedIn](${PERSON.linkedin}): perfil profissional
- [GitHub](${PERSON.github}): código-fonte público

## Grovic Data (cofundador / co-founder)

- [Grovic Data](${GROVIC.url}): ${GROVIC.tagline.pt} — ${GROVIC.about.pt.split('. ')[0]}.
${PROJECTS.filter((p) => p.group === 'grovic').map((p) => `- [${p.title}](${abs(projectPath('pt', p.slug))}): ${p.summary.pt}${p.links.site ? ` Site: ${p.links.site}` : ''}`).join('\n')}

## G2 Boost (app desktop / desktop app)

- [G2 Boost](${abs(projectPath('pt', 'g2-boost'))}): ${PROJECTS[0].summary.pt} Versão ${G2BOOST.version} (${G2BOOST.date}), Windows 10/11 x64.
- [Download v${G2BOOST.version}](${g2boostAsset(G2BOOST.assets[0].file)}): instalador oficial; releases em ${G2BOOST.releases}

## Projetos / Projects

${PROJECTS.filter((p) => p.group === 'main').map((p) => `- [${p.title}](${abs(projectPath('pt', p.slug))}): ${p.summary.pt} (${p.stack.slice(0, 4).join(', ')})`).join('\n')}

## Optional

- [llms-full.txt](${abs('/llms-full.txt')}): conteúdo completo do portfólio em PT-BR e EN (experiência, projetos, competências, certificações)
- [English project pages](${abs('/en/projects/g2-boost/')}): every project also has an English page under /en/projects/
`,
);

// ---------- llms-full.txt ----------
const full = (l: Lang) => {
  const t = (o: Record<Lang, string>) => o[l];
  return `# ${PERSON.name} — ${t(PERSON.jobTitle)}

${intro[l]}

${UI.about.body[l].join('\n\n')}

- ${l === 'pt' ? 'Site' : 'Website'}: ${abs(homePath(l))}
- E-mail: ${PERSON.email}
- LinkedIn: ${PERSON.linkedin}
- GitHub: ${PERSON.github}
- CV (PDF): ${abs(CV_PATH)}

## ${t(UI.nav.experience)}

${EXPERIENCE.map((x) => `### ${t(x.role)} — ${x.org}
${t(x.period)} · ${t(x.place)}

${x.bullets[l].map((b) => `- ${b}`).join('\n')}${x.stack.length ? `\n\nStack: ${x.stack.join(', ')}` : ''}`).join('\n\n')}

## ${l === 'pt' ? 'Projetos' : 'Projects'}

${PROJECTS.map((p) => `### ${p.title} (${p.year}) — ${t(CATEGORIES[p.category])}
URL: ${abs(projectPath(l, p.slug))}${p.links.site ? `\n${l === 'pt' ? 'Site' : 'Website'}: ${p.links.site}` : ''}${p.links.repo ? `\n${l === 'pt' ? 'Código' : 'Code'}: ${p.links.repo}` : ''}${p.links.download ? `\nDownload: ${p.links.download}` : ''}
${t(UI.project.role)}: ${t(p.role)}
Stack: ${p.stack.join(', ')}

${p.description[l].join('\n\n')}

${p.highlights[l].map((h) => `- ${h}`).join('\n')}`).join('\n\n')}

## ${l === 'pt' ? 'Competências' : 'Skills'}

${SKILLS.map((g) => `- ${t(g.label)}: ${g.items.join(', ')}`).join('\n')}

${t(UI.about.languages)}: ${LANGUAGES.map((x) => `${t(x.name)} (${t(x.level)})`).join(', ')}

## ${t(UI.education.title)}

- ${t(EDUCATION.degree)} — ${EDUCATION.school}, ${t(EDUCATION.period)}. ${t(EDUCATION.note)}
${CERTS.map((c) => `- ${c.name} — ${c.issuer} (${c.year}): ${c.url}`).join('\n')}
`;
};
out('llms-full.txt', `${full('pt')}\n\n---\n\n${full('en')}`);

console.log(`seo: sitemap (${pages.length * 2 + 1} urls), llms.txt, llms-full.txt — ${today}`);
