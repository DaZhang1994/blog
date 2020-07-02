import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { ResumeComponent } from './resume.component';

@NgModule({
  declarations: [ResumeComponent],
  imports: [
    CommonModule,
    MDBBootstrapModulesPro.forRoot(),
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    NgxExtendedPdfViewerModule,
  ],
})
export class ResumeModule { }
