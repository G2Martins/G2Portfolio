import { ChangeDetectionStrategy, Component, DOCUMENT, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { filter, map } from 'rxjs';
import { GROVIC, Lang, PERSON, UI, cvPath } from './data/content';
import { Icon } from './shared/icon';

const langOf = (url: string): Lang => (url === '/en' || url.startsWith('/en/') || url.startsWith('/en#') ? 'en' : 'pt');

/** Same page in the other language. */
function swapLang(url: string): string {
  const path = url.split(/[?#]/)[0];
  const pt = path.match(/^\/projetos\/([^/]+)/);
  if (pt) return `/en/projects/${pt[1]}`;
  const en = path.match(/^\/en\/projects\/([^/]+)/);
  if (en) return `/projetos/${en[1]}`;
  return langOf(path) === 'en' ? '/' : '/en';
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.html',
})
export class App {
  private router = inject(Router);
  private doc = inject(DOCUMENT);

  private url = toSignal(
    this.router.events.pipe(
      filter((e): e is NavigationEnd => e instanceof NavigationEnd),
      map((e) => e.urlAfterRedirects),
    ),
    { initialValue: this.router.url },
  );

  protected lang = computed(() => langOf(this.url()));
  protected otherLang = computed(() => swapLang(this.url()));
  protected home = computed(() => (this.lang() === 'pt' ? '/' : '/en'));
  protected menuOpen = signal(false);

  protected readonly ui = UI;
  protected readonly person = PERSON;
  protected readonly grovic = GROVIC;
  protected readonly cv = computed(() => cvPath(this.lang()));
  protected readonly year = new Date().getFullYear();
  protected readonly sections = [
    { id: 'g2-boost', label: UI.nav.release },
    { id: 'grovic', label: UI.nav.grovic },
    { id: 'projetos', label: UI.nav.projects },
    { id: 'experiencia', label: UI.nav.experience },
    { id: 'contato', label: UI.nav.contact },
  ];

  protected toggleTheme() {
    const dark = this.doc.documentElement.classList.toggle('dark');
    try { localStorage.setItem('theme', dark ? 'dark' : 'light'); } catch {}
  }
}
