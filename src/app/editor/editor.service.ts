import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Config } from '../../../config';
import FroalaEditor from 'node_modules/froala-editor/js/froala_editor.pkgd.min';

@Injectable({
  providedIn: 'root'
})
export class EditorService {

  constructor(private readonly httpClient: HttpClient) {

  }

  async getUploadConfig() {
    return this.httpClient.get(Config.getS3SignatureAPIUrl).toPromise();
  }

  async buildEditorAsync(identifier: string, minHeight?: number) {
    const uploadConfig = await this.getUploadConfig();

    // div#froala-editor
    const editor = new FroalaEditor(identifier);

    editor.opts.heightMin = minHeight || 500;

    editor.opts.tabSpaces = 4;

    editor.opts.imageUploadToS3 = uploadConfig;
    editor.opts.videoUploadToS3 = uploadConfig;

    editor.opts.events = {
      'image.error': () => {
        this.httpClient.get('https://tks8xzz7ud.execute-api.us-west-2.amazonaws.com/blog_env/getS3Signature')
          .subscribe(config => editor.opts.imageUploadToS3 = config);
      },
      'video.error': () => {
        this.httpClient.get('https://tks8xzz7ud.execute-api.us-west-2.amazonaws.com/blog_env/getS3Signature')
          .subscribe(config => editor.opts.videoUploadToS3 = config);
      }
    }

    return editor;
  }

}
