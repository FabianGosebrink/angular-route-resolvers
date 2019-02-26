import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-container',
  template: `
    <app-presentational [data]="data$ | async"></app-presentational>
  `,
  styleUrls: ['./container.component.css'],
})
export class ContainerComponent implements OnInit {
  data$: Observable<any>;

  constructor(private readonly httpClient: HttpClient) {}

  ngOnInit() {
    this.data$ = this.httpClient.get('https://swapi.co/api/people/1');
  }
}
