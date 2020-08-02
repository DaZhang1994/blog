import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MDBBootstrapModulesPro, MDBSpinningPreloader, ToastModule, ToastService } from 'ng-uikit-pro-standard';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorModule } from './error/error.module';
import { FooterModule } from './footer/footer.module';
import { HeaderModule } from './header/header.module';
import { LandingModule } from './landing/landing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    MDBBootstrapModulesPro.forRoot(),
    ToastModule.forRoot(),
    HeaderModule,
    LandingModule,
    FooterModule,
    ErrorModule,
  ],
  providers: [
    MDBSpinningPreloader,
    ToastService],
  bootstrap: [AppComponent],
})

export class AppModule { }
