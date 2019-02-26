import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-presentational',
  template: `
    <p *ngIf="data; else nodata">
      {{ data | json }}
    </p>

    <ng-template #nodata>no data received yet</ng-template>
  `,
  styleUrls: ['./presentational.component.css'],
})
export class PresentationalComponent {
  @Input() data: any;
}
