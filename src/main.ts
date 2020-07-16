import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import Amplify from 'aws-amplify';
import { AppModule } from './app/app.module';
import awsconfig from './aws-exports';
import { enableProdMode } from '@angular/core';

enableProdMode();

Amplify.configure(awsconfig);

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
