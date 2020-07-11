import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MdbFileUploadModule } from 'mdb-file-upload';
import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';
import { S3storageModule } from '../s3storage/s3storage.module';
import { ThreadComposeComponent } from './thread-compose/thread-compose.component';
import { ThreadEditComponent } from './thread-edit/thread-edit.component';
import { ThreadPostComponent } from './thread-post/thread-post.component';


@NgModule({
  declarations: [ThreadComposeComponent, ThreadPostComponent, ThreadEditComponent],
  imports: [
    CommonModule,
    MDBBootstrapModulesPro.forRoot(),
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    MdbFileUploadModule,
    S3storageModule
  ]
})
export class ThreadModule { }
