import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFound } from '../error/page_not_found/page_not_found.component';
import { AboutComponent } from './about.component';

const aboutRoutes: Routes = [
  {
    path: '',
    component: AboutComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFound,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(aboutRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AboutRoutingModule { }
