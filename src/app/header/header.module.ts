import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, MDBBootstrapModulesPro.forRoot(), RouterModule],
  exports: [
    HeaderComponent,
  ],
})
export class HeaderModule {}
