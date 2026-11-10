import { DOCUMENT, Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { CERTS, EDUCATION, EXPERIENCE, GROVIC, Lang, OG_IMAGE, PERSON, PHOTO, SITE_URL, SKILLS } from '../data/content';

export interface PageSeo {
  lang: Lang;
  title: string;
  description: string;
  /** Path for this language, e.g. "/projetos/g2-boost/". */
  path: string;
  alternates: Record<Lang, string>;
  image?: string;
  imageAlt?: string;
  type?: 'website' | 'profile' | 'article';
  jsonLd: object[];
}

const abs = (p: string) => (p.startsWith('http') ? p : SITE_URL + p);

/** Shared JSON-LD nodes (referenced by @id from every page). */
export function personNode(lang: Lang) {
  return {
    '@type': 'Person',
    '@id': `${SITE_URL}/#person`,
    name: PERSON.name,
    givenName: PERSON.givenName,
    familyName: PERSON.familyName,
    alternateName: PERSON.alternateName,
    jobTitle: PERSON.jobTitle[lang],
    description: lang === 'pt'
      ? 'Engenheiro de dados e desenvolvedor full stack em Brasília, cofundador da Grovic Data e criador do G2 Boost.'
      : 'Data engineer and full stack developer in Brasília, Brazil; co-founder of Grovic Data and creator of G2 Boost.',
    url: SITE_URL + '/',
    image: { '@type': 'ImageObject', url: abs(`${PHOTO}.jpg`), width: 600, height: 600, caption: PERSON.name },
    email: `mailto:${PERSON.email}`,
    address: { '@type': 'PostalAddress', addressLocality: PERSON.city, addressRegion: PERSON.region, addressCountry: PERSON.country },
    nationality: { '@type': 'Country', name: 'Brazil' },
    worksFor: [
      { '@type': 'Organization', name: 'Brasal Participações' },
      { '@id': `${GROVIC.url}/#organization` },
    ],
    alumniOf: { '@type': 'CollegeOrUniversity', name: EDUCATION.school, url: 'https://www.iesb.br' },
    knowsAbout: SKILLS.flatMap((s) => s.items).slice(0, 30),
    knowsLanguage: ['pt-BR', 'en', 'es'],
    hasCredential: CERTS.map((c) => ({
      '@type': 'EducationalOccupationalCredential',
      name: c.name,
      credentialCategory: 'certificate',
      recognizedBy: { '@type': 'Organization', name: c.issuer },
      url: c.url,
    })),
    award: EXPERIENCE.flatMap((x) => (x.awards ?? []).map((a) => `${a.title[lang]}, ${x.org}`)),
    sameAs: [PERSON.linkedin, PERSON.github],
  };
}

export function grovicNode() {
  return {
    '@type': 'Organization',
    '@id': `${GROVIC.url}/#organization`,
    name: GROVIC.name,
    url: GROVIC.url,
    slogan: GROVIC.tagline.pt,
    founder: { '@id': `${SITE_URL}/#person` },
  };
}

export function websiteNode(lang: Lang) {
  return {
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL + '/',
    name: PERSON.name,
    alternateName: ['G2 Portfolio', 'Portfólio Gustavo Martins Gripaldi'],
    inLanguage: ['pt-BR', 'en'],
    publisher: { '@id': `${SITE_URL}/#person` },
    description: lang === 'pt' ? 'Portfólio de Gustavo Martins Gripaldi' : 'Portfolio of Gustavo Martins Gripaldi',
  };
}

export function breadcrumbs(items: { name: string; path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: abs(it.path) })),
  };
}

@Injectable({ providedIn: 'root' })
export class Seo {
  private doc = inject(DOCUMENT);
  private meta = inject(Meta);
  private title = inject(Title);

  set(p: PageSeo) {
    const url = abs(p.path);
    const image = abs(p.image ?? OG_IMAGE);
    const locale = p.lang === 'pt' ? 'pt_BR' : 'en_US';

    this.doc.documentElement.lang = p.lang === 'pt' ? 'pt-BR' : 'en';
    this.title.setTitle(p.title);

    const tags: Record<string, string> = {
      description: p.description,
      'og:type': p.type ?? 'website',
      'og:site_name': PERSON.name,
      'og:title': p.title,
      'og:description': p.description,
      'og:url': url,
      'og:image': image,
      'og:image:alt': p.imageAlt ?? p.title,
      'og:locale': locale,
      'og:locale:alternate': p.lang === 'pt' ? 'en_US' : 'pt_BR',
      'twitter:card': 'summary_large_image',
      'twitter:title': p.title,
      'twitter:description': p.description,
      'twitter:image': image,
    };
    for (const [key, content] of Object.entries(tags)) {
      const attr = key.startsWith('og:') ? 'property' : 'name';
      this.meta.updateTag({ [attr]: key, content }, `${attr}="${key}"`);
    }
    if (p.type === 'profile') {
      this.meta.updateTag({ property: 'profile:first_name', content: PERSON.givenName });
      this.meta.updateTag({ property: 'profile:last_name', content: PERSON.familyName });
    } else {
      this.meta.removeTag('property="profile:first_name"');
      this.meta.removeTag('property="profile:last_name"');
    }

    this.link('canonical', url);
    this.link('alternate', abs(p.alternates.pt), 'pt-BR');
    this.link('alternate', abs(p.alternates.en), 'en');
    this.link('alternate', abs(p.alternates.pt), 'x-default');

    let ld = this.doc.getElementById('ld-json');
    if (!ld) {
      ld = this.doc.createElement('script');
      ld.id = 'ld-json';
      ld.setAttribute('type', 'application/ld+json');
      this.doc.head.appendChild(ld);
    }
    // Escape "<" so no string in the data can close the script element.
    ld.textContent = JSON.stringify({ '@context': 'https://schema.org', '@graph': p.jsonLd }).replace(/</g, '\\u003c');
  }

  private link(rel: string, href: string, hreflang?: string) {
    const sel = hreflang ? `link[rel="${rel}"][hreflang="${hreflang}"]` : `link[rel="${rel}"]:not([hreflang])`;
    let el = this.doc.head.querySelector<HTMLLinkElement>(sel);
    if (!el) {
      el = this.doc.createElement('link');
      el.setAttribute('rel', rel);
      if (hreflang) el.setAttribute('hreflang', hreflang);
      this.doc.head.appendChild(el);
    }
    el.setAttribute('href', href);
  }
}
