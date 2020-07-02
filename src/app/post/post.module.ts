import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MdbFileUploadModule } from 'mdb-file-upload';
import { QuillModule } from 'ngx-quill';
import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';
import { PostComposeComponent } from './post-compose/post-compose.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostLandingComponent } from './post-landing/post-landing.component';
import { PostCategoryComponent } from './post-category/post-category.component';
import { PostEditComponent } from './post-edit/post-edit.component';

@NgModule({
  declarations: [PostLandingComponent, PostDetailComponent, PostComposeComponent, PostCategoryComponent, PostEditComponent],
  imports: [
    CommonModule,
    MDBBootstrapModulesPro.forRoot(),
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    MdbFileUploadModule,
    QuillModule.forRoot()
  ]
})
export class PostModule { }
