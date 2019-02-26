import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-presentational',
  template: `
    <p *ngIf="data">
      {{ data | json }}
    </p>
  `,
  styleUrls: ['./presentational.component.css'],
})
export class PresentationalComponent {
  @Input() data: any;
}
