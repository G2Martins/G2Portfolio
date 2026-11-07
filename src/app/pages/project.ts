import { ChangeDetectionStrategy, Component, computed, effect, inject, input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { G2BOOST, Lang, PERSON, SITE_URL, UI, g2boostAsset, homePath, projectPath } from '../data/content';
import { CATEGORIES, PROJECTS, Project } from '../data/projects';
import { Cover } from '../shared/cover';
import { Icon } from '../shared/icon';
import { Reveal } from '../shared/reveal';
import { Seo, breadcrumbs, grovicNode, personNode, websiteNode } from '../shared/seo';

function projectNode(p: Project, lang: Lang) {
  const url = SITE_URL + projectPath(lang, p.slug);
  const base = {
    '@id': `${url}#work`,
    name: p.title,
    description: p.summary[lang],
    url,
    image: p.images.map((i) => `${SITE_URL}/img/projects/${i}-1280.webp`),
    inLanguage: lang === 'pt' ? 'pt-BR' : 'en',
    dateCreated: p.year.slice(0, 4),
    keywords: p.stack.join(', '),
    author: { '@id': `${SITE_URL}/#person` },
    creator: { '@id': `${SITE_URL}/#person` },
    ...(p.group === 'grovic' ? { publisher: { '@id': 'https://grovicdata.com/#organization' } } : {}),
    ...(p.links.site ? { sameAs: p.links.site } : {}),
  };
  if (p.slug === 'g2-boost') {
    return {
      ...base,
      '@type': 'SoftwareApplication',
      applicationCategory: 'UtilitiesApplication',
      applicationSubCategory: 'Game performance optimizer',
      operatingSystem: 'Windows 10, Windows 11',
      softwareVersion: G2BOOST.version,
      datePublished: G2BOOST.date,
      downloadUrl: g2boostAsset(G2BOOST.assets[0].file),
      installUrl: G2BOOST.latest,
      fileSize: G2BOOST.assets[0].size.replace(',', '.'),
      featureList: p.highlights[lang],
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'BRL' },
    };
  }
  if (p.links.repo && !p.links.site) {
    return { ...base, '@type': 'SoftwareSourceCode', codeRepository: p.links.repo, programmingLanguage: p.stack.slice(0, 3) };
  }
  if (p.links.site) return { ...base, '@type': 'WebApplication', applicationCategory: 'BusinessApplication', browserRequirements: 'Requires JavaScript' };
  return { ...base, '@type': 'CreativeWork' };
}

@Component({
  selector: 'app-project',
  imports: [RouterLink, Icon, Reveal, Cover],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './project.html',
})
export class ProjectPage {
  lang = input<Lang>('pt');
  slug = input<string>('');

  protected readonly ui = UI;
  protected readonly person = PERSON;
  protected readonly boost = G2BOOST;
  protected readonly asset = g2boostAsset;
  protected readonly projectPath = projectPath;

  protected index = computed(() => PROJECTS.findIndex((p) => p.slug === this.slug()));
  protected p = computed(() => PROJECTS[this.index()]);
  protected prev = computed(() => PROJECTS[(this.index() - 1 + PROJECTS.length) % PROJECTS.length]);
  protected next = computed(() => PROJECTS[(this.index() + 1) % PROJECTS.length]);
  protected home = computed(() => (this.lang() === 'pt' ? '/' : '/en'));
  protected category = computed(() => CATEGORIES[this.p().category][this.lang()]);

  constructor() {
    const seo = inject(Seo);
    const router = inject(Router);
    effect(() => {
      const lang = this.lang();
      const p = this.p();
      if (!p) {
        router.navigateByUrl(homePath(lang));
        return;
      }
      seo.set({
        lang,
        title: `${p.title} | ${PERSON.name}`,
        description: `${p.summary[lang]} ${lang === 'pt' ? 'Projeto de' : 'A project by'} ${PERSON.name}.`,
        path: projectPath(lang, p.slug),
        alternates: { pt: projectPath('pt', p.slug), en: projectPath('en', p.slug) },
        image: p.images[0] ? `/img/projects/${p.images[0]}-1280.webp` : undefined,
        imageAlt: p.title,
        type: 'article',
        jsonLd: [
          websiteNode(lang),
          personNode(lang),
          ...(p.group === 'grovic' ? [grovicNode()] : []),
          projectNode(p, lang),
          breadcrumbs([
            { name: PERSON.name, path: homePath(lang) },
            { name: lang === 'pt' ? 'Projetos' : 'Projects', path: `${homePath(lang)}#projetos` },
            { name: p.title, path: projectPath(lang, p.slug) },
          ]),
        ],
      });
    });
  }
}
