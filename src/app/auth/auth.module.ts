import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';
import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';
import { AuthComponent } from './auth.component';


@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    MDBBootstrapModulesPro.forRoot(),
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    AmplifyUIAngularModule
  ]
})
export class AuthModule { }
