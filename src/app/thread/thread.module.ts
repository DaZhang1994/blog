import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MdbFileUploadModule } from 'mdb-file-upload';
import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';
import { ThreadComposeComponent } from './thread-compose/thread-compose.component';
import { ThreadPostComponent } from './thread-post/thread-post.component';
import { ThreadEditComponent } from './thread-edit/thread-edit.component';


@NgModule({
  declarations: [ThreadComposeComponent, ThreadPostComponent, ThreadEditComponent],
  imports: [
    CommonModule,
    MDBBootstrapModulesPro.forRoot(),
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    MdbFileUploadModule,
  ]
})
export class ThreadModule { }
