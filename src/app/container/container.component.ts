import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-container',
  template: `
    <app-presentational [data]="data$ | async"></app-presentational>
  `,
  styleUrls: ['./container.component.css'],
})
export class ContainerComponent implements OnInit {
  data$: Observable<any>;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.data$ = this.activatedRoute.data.pipe(map(data => data.resolverData));
  }
}
