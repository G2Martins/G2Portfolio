import { Routes } from '@angular/router';
import { Home } from './pages/home';
import { ProjectPage } from './pages/project';

// PT at the root, EN under /en. Route `data.lang` binds to the components' `lang` input.
export const routes: Routes = [
  { path: '', component: Home, data: { lang: 'pt' } },
  { path: 'en', component: Home, data: { lang: 'en' } },
  { path: 'projetos/:slug', component: ProjectPage, data: { lang: 'pt' } },
  { path: 'en/projects/:slug', component: ProjectPage, data: { lang: 'en' } },
  { path: '**', redirectTo: '' },
];
