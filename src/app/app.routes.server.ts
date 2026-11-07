import { RenderMode, ServerRoute } from '@angular/ssr';
import { PROJECTS } from './data/projects';

const slugs = async () => PROJECTS.map((p) => ({ slug: p.slug }));

// Everything is prerendered to static HTML (GitHub Pages, no server).
export const serverRoutes: ServerRoute[] = [
  { path: '', renderMode: RenderMode.Prerender },
  { path: 'en', renderMode: RenderMode.Prerender },
  { path: 'projetos/:slug', renderMode: RenderMode.Prerender, getPrerenderParams: slugs },
  { path: 'en/projects/:slug', renderMode: RenderMode.Prerender, getPrerenderParams: slugs },
  { path: '**', renderMode: RenderMode.Client },
];
