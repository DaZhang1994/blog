import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { MdbFileUploadModule } from 'mdb-file-upload';
import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';
import { EditorModule } from '../editor/editor.module';
import { S3storageModule } from '../s3storage/s3storage.module';
import { PostComposeComponent } from './post-compose/post-compose.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { PostLandingComponent } from './post-landing/post-landing.component';
import { PostRoutingModule } from './post-routing.module';

@NgModule({
  declarations: [PostLandingComponent, PostDetailComponent, PostComposeComponent, PostEditComponent],
  imports: [
    CommonModule,
    MDBBootstrapModulesPro.forRoot(),
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    MdbFileUploadModule,
    EditorModule,
    S3storageModule,
    PostRoutingModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
  ],
})
export class PostModule { }
