import { Injectable } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class LoadingIndicatorService {
  isLoading$: Observable<boolean>;
  constructor(private router: Router) {
    this.isLoading$ = this.router.events.pipe(
      filter(
        event =>
          event instanceof NavigationStart || event instanceof NavigationEnd
      ),
      map(event => !!(event instanceof NavigationStart))
    );
  }
}
