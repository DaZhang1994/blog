import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [MDBBootstrapModulesPro.forRoot(), RouterModule],
  exports: [
    HeaderComponent,
  ],
})
export class HeaderModule {}
