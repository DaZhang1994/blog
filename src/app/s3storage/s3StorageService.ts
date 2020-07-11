import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class S3Object {
  bucket: string;
  region: string;
  path: string;
  fileName: string;
}

export class S3StorageService {

  constructor() { }

  getS3ObjectUrl(s3Object: S3Object) {
    if(s3Object == null) {
      return null;
    }
    return 'https://' + s3Object.bucket + '.s3-' + s3Object.region + '.amazonaws.com/' + s3Object.path + '/' + s3Object.fileName;
  }
}
