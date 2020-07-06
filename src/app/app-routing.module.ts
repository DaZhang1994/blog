import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFound } from './error/page_not_found/page_not_found.component';
import { HeaderComponent } from './header/header.component';
import { LandingComponent } from './landing/landing.component';
import { PostComposeComponent } from './post/post-compose/post-compose.component';
import { PostDetailComponent } from './post/post-detail/post-detail.component';
import { PostEditComponent } from './post/post-edit/post-edit.component';
import { PostLandingComponent } from './post/post-landing/post-landing.component';
import { ResumeComponent } from './resume/resume.component';
import { ThreadComposeComponent } from './thread/thread-compose/thread-compose.component';
import { ThreadEditComponent } from './thread/thread-edit/thread-edit.component';
import { ThreadPostComponent } from './thread/thread-post/thread-post.component';

const routes: Routes = [
  {
    path: '',
    component: HeaderComponent,
    children: [
      {
        path: '',
        component: LandingComponent,
        pathMatch: 'full'
      },
    ],
  },
  {
    path: 'posts',
    component: HeaderComponent,
    children: [
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
      },
    ],
  },
  {
    path: 'threads',
    component: HeaderComponent,
    children: [
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
      },
    ],
  },
  {
    path: 'auth',
    component: HeaderComponent,
    children: [
      {
        path: '',
        component: AuthComponent,
        pathMatch: 'full'
      },
      {
        path: '**',
        component: PageNotFound,
      },
    ]
  },
  {
    path: 'resume',
    component: HeaderComponent,
    children: [
      {
        path: '',
        component: ResumeComponent,
        pathMatch: 'full'
      },
      {
        path: '**',
        component: PageNotFound,
      },
    ]
  },

  {
    path: 'contact',
    component: HeaderComponent,
    children: [
      {
        path: '',
        component: ContactComponent,
        pathMatch: 'full'
      },
      {
        path: '**',
        component: PageNotFound,
      },
    ],
  },
  {
    path: '**',
    component: HeaderComponent,
    children: [
      {
        path: '',
        component: PageNotFound,
      },
    ],
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
