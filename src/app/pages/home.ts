import { ChangeDetectionStrategy, Component, computed, effect, inject, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  CERTS, EDUCATION, EXPERIENCE, G2BOOST, GROVIC, LANGUAGES, Lang, MEDIA, PERSON, PHOTO, SEO, SITE_URL, SKILLS, UI, cvPath, g2boostAsset, homePath, projectPath,
} from '../data/content';
import { CATEGORIES, Category, PROJECTS } from '../data/projects';
import { Cover } from '../shared/cover';
import { Icon } from '../shared/icon';
import { Reveal } from '../shared/reveal';
import { Seo, breadcrumbs, grovicNode, personNode, websiteNode } from '../shared/seo';

@Component({
  selector: 'app-home',
  imports: [RouterLink, Icon, Reveal, Cover],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home.html',
})
export class Home {
  lang = input<Lang>('pt');

  protected readonly ui = UI;
  protected readonly person = PERSON;
  protected readonly grovic = GROVIC;
  protected readonly boost = G2BOOST;
  protected readonly boostProject = PROJECTS.find((p) => p.slug === 'g2-boost')!;
  protected readonly grovicProjects = PROJECTS.filter((p) => p.group === 'grovic');
  protected readonly experience = EXPERIENCE;
  protected readonly skills = SKILLS;
  protected readonly languages = LANGUAGES;
  protected readonly education = EDUCATION;
  protected readonly certs = CERTS;
  protected readonly cv = computed(() => cvPath(this.lang()));
  protected readonly media = MEDIA;
  protected readonly photo = PHOTO;
  protected readonly categories = Object.entries(CATEGORIES) as [Category, (typeof CATEGORIES)[Category]][];
  protected readonly asset = g2boostAsset;
  protected readonly projectPath = projectPath;

  protected readonly heroWords = PERSON.name.split(' ');
  protected readonly wa = computed(() => `${PERSON.whatsapp}?text=${encodeURIComponent(UI.contact.wa[this.lang()])}`);
  protected filter = signal<Category | 'all'>('all');
  protected shot = signal(0);
  protected copied = signal(false);

  protected copyEmail() {
    navigator.clipboard?.writeText(PERSON.email).then(() => {
      this.copied.set(true);
      setTimeout(() => this.copied.set(false), 1800);
    });
  }
  protected projects = computed(() => {
    const f = this.filter();
    return PROJECTS.filter((p) => p.group === 'main' && (f === 'all' || p.category === f));
  });

  constructor() {
    const seo = inject(Seo);
    effect(() => {
      const lang = this.lang();
      seo.set({
        lang,
        title: SEO.home.title[lang],
        description: SEO.home.description[lang],
        path: homePath(lang),
        alternates: { pt: homePath('pt'), en: homePath('en') },
        type: 'profile',
        imageAlt: PERSON.name,
        jsonLd: [
          websiteNode(lang),
          {
            '@type': 'ProfilePage',
            '@id': `${SITE_URL}${homePath(lang)}#profile`,
            url: `${SITE_URL}${homePath(lang)}`,
            name: SEO.home.title[lang],
            inLanguage: lang === 'pt' ? 'pt-BR' : 'en',
            isPartOf: { '@id': `${SITE_URL}/#website` },
            mainEntity: { '@id': `${SITE_URL}/#person` },
            dateModified: new Date().toISOString().slice(0, 10),
          },
          personNode(lang),
          grovicNode(),
          {
            '@type': 'ItemList',
            name: lang === 'pt' ? 'Projetos de Gustavo Martins Gripaldi' : 'Projects by Gustavo Martins Gripaldi',
            itemListElement: PROJECTS.map((p, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              name: p.title,
              url: `${SITE_URL}${projectPath(lang, p.slug)}`,
            })),
          },
          breadcrumbs([{ name: PERSON.name, path: homePath(lang) }]),
        ],
      });
    });
  }

  protected catLabel(c: Category) {
    return CATEGORIES[c][this.lang()];
  }
}
