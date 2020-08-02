import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFound } from '../error/page_not_found/page_not_found.component';
import { ContactComponent } from './contact.component';

const contactRoutes: Routes = [
  {
    path: '',
    component: ContactComponent,
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
    RouterModule.forChild(contactRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ContactRoutingModule { }
