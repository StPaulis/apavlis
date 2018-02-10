import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { Nav1Component } from './nav1/nav1.component';
import { Nav2Component } from './nav2/nav2.component';
import { Nav3Component } from './nav3/nav3.component';
import { Nav4Component } from './nav4/nav4.component';

const appRoutes: Routes = [
  { path: 'Nav1Component', component: Nav1Component },
  { path: 'Nav2Component', component: Nav2Component },
  { path: 'Nav3Component', component: Nav3Component },
  { path: 'Nav4Component', component: Nav4Component },
  { path: '**', component: Nav1Component }
];

@NgModule({
  declarations: [
    AppComponent,
    Nav1Component,
    Nav2Component,
    Nav3Component,
    Nav4Component
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
