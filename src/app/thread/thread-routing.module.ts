import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFound } from '../error/page_not_found/page_not_found.component';
import { ThreadComposeComponent } from './thread-compose/thread-compose.component';
import { ThreadEditComponent } from './thread-edit/thread-edit.component';
import { ThreadPostComponent } from './thread-post/thread-post.component';


const threadRoutes: Routes = [
  {
    path: 'view/:id',
    component: ThreadPostComponent,
    pathMatch: 'full'
  },
  {
    path: 'compose',
    component: ThreadComposeComponent,
    pathMatch: 'full'
  },
  {
    path: 'edit/:id',
    component: ThreadEditComponent,
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
    RouterModule.forChild(threadRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ThreadRoutingModule { }
