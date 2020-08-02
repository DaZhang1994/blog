import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';
import { Config } from '../../../config';
import { ContactComponent } from './contact.component';
import { AgmCoreModule } from '@agm/core';
import { ContactRoutingModule } from './contact-routing.module';


@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    MDBBootstrapModulesPro.forRoot(),
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: Config.googleMapAPIKey
    }),
    ContactRoutingModule
  ]
})
export class ContactModule { }
