import { Component } from '@angular/core';
import { LoadingIndicatorService } from './loading-indicator.service';

@Component({
  selector: 'app-root',
  template: `
    <a [routerLink]="['home']">Home</a> |
    <a [routerLink]="['container']">Container</a>

    <ng-template #loading>Loading...</ng-template>

    <router-outlet
      *ngIf="!(loadingIndicatorService.isLoading$ | async); else loading"
    ></router-outlet>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'route-resolvers';

  constructor(public loadingIndicatorService: LoadingIndicatorService) {}
}
