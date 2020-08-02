import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFound } from './error/page_not_found/page_not_found.component';
import { LandingComponent } from './landing/landing.component';
import { PostComposeComponent } from './post/post-compose/post-compose.component';
import { PostDetailComponent } from './post/post-detail/post-detail.component';
import { PostEditComponent } from './post/post-edit/post-edit.component';
import { PostLandingComponent } from './post/post-landing/post-landing.component';
import { AboutComponent } from './about/about.component';
import { ThreadComposeComponent } from './thread/thread-compose/thread-compose.component';
import { ThreadEditComponent } from './thread/thread-edit/thread-edit.component';
import { ThreadPostComponent } from './thread/thread-post/thread-post.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    pathMatch: 'full'
  },
  {
    path: 'posts',
    component: PostLandingComponent,
    pathMatch: 'full'
  },
  {
    path: 'posts/view/:id',
    component: PostDetailComponent,
    pathMatch: 'full'
  },
  {
    path: 'posts/compose',
    component: PostComposeComponent,
    pathMatch: 'full'
  },
  {
    path: 'posts/edit/:id',
    component: PostEditComponent,
    pathMatch: 'full'
  },
  {
    path: 'threads/view/:id',
    component: ThreadPostComponent,
    pathMatch: 'full'
  },
  {
    path: 'threads/compose',
    component: ThreadComposeComponent,
    pathMatch: 'full'
  },
  {
    path: 'threads/edit/:id',
    component: ThreadEditComponent,
    pathMatch: 'full'
  },
  {
    path: 'auth',
    component: AuthComponent,
    pathMatch: 'full'
  },
  {
    path: 'about',
    component: AboutComponent,
    pathMatch: 'full'
  },
  {
    path: 'contact',
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
    RouterModule.forRoot(routes, {
      onSameUrlNavigation: 'reload'
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
