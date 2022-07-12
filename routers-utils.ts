import { inject } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';

export function onNavigationStart() {
  const router = inject(Router);

  return router.events.pipe(
    filter(
      (event): event is NavigationStart => event instanceof NavigationStart
    )
  );
}
