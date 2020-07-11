import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { S3StorageService } from './s3StorageService';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [S3StorageService]
})
export class S3storageModule { }
