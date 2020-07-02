import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { PageNotFound } from './error/page_not_found/page_not_found.component';
import { HeaderComponent } from './header/header.component';
import { LandingComponent } from './landing/landing.component';
import { ResumeComponent } from './resume/resume.component';
import { PostComposeComponent } from './post/post-compose/post-compose.component';
import { PostDetailComponent } from './post/post-detail/post-detail.component';
import { PostLandingComponent } from './post/post-landing/post-landing.component';

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
        path: 'compose/:id',
        component: PostComposeComponent,
        pathMatch: 'full'
      },
      {
        path: '**',
        component: PageNotFound,
      },
    ],
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
  },
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
