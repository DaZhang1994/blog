import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdbFileUploadModule } from 'mdb-file-upload';
import { QuillModule } from 'ngx-quill';
import { MDBBootstrapModulesPro, MDBSpinningPreloader, ToastModule, ToastService } from 'ng-uikit-pro-standard';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { ContactModule } from './contact/contact.module';
import { ErrorModule } from './error/error.module';
import { HeaderModule } from './header/header.module';
import { LandingModule } from './landing/landing.module';
import { ResumeModule } from './resume/resume.module';
import { PostModule } from './post/post.module';
import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';
import { ThreadModule } from './thread/thread.module';


@NgModule({
  declarations: [AppComponent],
  imports: [
    AmplifyUIAngularModule,
    QuillModule.forRoot({

    }),
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModulesPro.forRoot(),
    ToastModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HeaderModule,
    ErrorModule,
    LandingModule,
    CommonModule,
    PostModule,
    ContactModule,
    MdbFileUploadModule,
    ResumeModule,
    AuthModule,
    ThreadModule
  ],
  providers: [
    MDBSpinningPreloader,
    ToastService],
  bootstrap: [AppComponent],
})

export class AppModule { }
