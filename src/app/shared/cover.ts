import { ChangeDetectionStrategy, Component, input } from '@angular/core';

// Project screenshot (16:10 WebP, 640w + 1280w). Falls back to a typographic cover.
@Component({
  selector: 'app-cover',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block overflow-hidden bg-surface aspect-[16/10]' },
  template: `
    @if (img()) {
      <img class="block h-full w-full object-cover object-top"
           [src]="'/img/projects/' + img() + '-1280.webp'"
           [attr.srcset]="'/img/projects/' + img() + '-640.webp 640w, /img/projects/' + img() + '-1280.webp 1280w'"
           [attr.sizes]="sizes()" [alt]="alt()" width="1280" height="800"
           [attr.loading]="eager() ? 'eager' : 'lazy'" [attr.fetchpriority]="eager() ? 'high' : null" decoding="async" />
    } @else {
      <div class="dotgrid grid h-full w-full place-items-center p-6 text-center">
        <div>
          <p class="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-2">{{ kicker() }}</p>
          <p class="h2 mt-2 text-2xl sm:text-3xl"><span class="grad">{{ title() }}</span></p>
        </div>
      </div>
    }
  `,
})
export class Cover {
  img = input<string | undefined>();
  alt = input('');
  title = input('');
  kicker = input('');
  eager = input(false);
  sizes = input('(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw');
}
