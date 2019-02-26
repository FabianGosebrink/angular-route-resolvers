import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { DataResolver } from './first.resolver';
import { HomeComponent } from './home/home.component';
import { PresentationalComponent } from './presentational/presentational.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    PresentationalComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'container',
        component: ContainerComponent,
        resolve: {
          resolverData: DataResolver,
        },
      },
    ]),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
