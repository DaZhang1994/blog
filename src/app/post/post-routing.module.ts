import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFound } from '../error/page_not_found/page_not_found.component';
import { PostComposeComponent } from './post-compose/post-compose.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { PostLandingComponent } from './post-landing/post-landing.component';

const postRoutes: Routes = [
  {
    path: '',
    component: PostLandingComponent,
    pathMatch: 'full'
  },
  {
    path: 'view/:id',
    component: PostDetailComponent,
    pathMatch: 'full'
  },
  {
    path: 'compose',
    component: PostComposeComponent,
    pathMatch: 'full'
  },
  {
    path: 'edit/:id',
    component: PostEditComponent,
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
    RouterModule.forChild(postRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PostRoutingModule { }
