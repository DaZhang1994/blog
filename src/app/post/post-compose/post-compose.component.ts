import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Storage } from 'aws-amplify';
import { MdbFileUploadComponent } from 'mdb-file-upload';
import { v4 as uuidv4 } from 'uuid';
import { APIService } from '../../API.service';
import { EditorService } from '../../editor/editor.service';

@Component({
  selector: 'app-compose-post',
  templateUrl: './post-compose.component.html',
  styleUrls: ['./post-compose.component.scss']
})
export class PostComposeComponent implements OnInit, AfterViewInit {

  @ViewChild('postFeaturedImg')
  postFeaturedImgEl: MdbFileUploadComponent;

  composePostForm: FormGroup;

  postComposeEditor: any;

  threads: any;

  constructor(private formBuilder: FormBuilder,
              private apiService: APIService,
              private readonly editorService: EditorService) {
  }

  async ngOnInit(): Promise<void> {
    this.composePostForm = this.formBuilder.group({
      postTitle: [ null, [ Validators.required ] ],
      postFeaturedImg: [ null, [ Validators.required ] ],
      postThread: [ null, [ Validators.required, Validators.minLength(8) ] ]
    });

    this.postComposeEditor = await this.editorService.buildEditorAsync('div#post-compose-editor');

    this.apiService.ListThreads().then(({ items }) => this.threads = items);
  }

  get postTitle() {
    return this.composePostForm.get('postTitle');
  }

  get postFeaturedImg() {
    return this.composePostForm.get('postFeaturedImg');
  }

  get postThread() {
    return this.composePostForm.get('postThread');
  }

  get postContent() {
    return this.postComposeEditor.html.get();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.postFeaturedImgEl.textTranslation.fileText = 'Drag and drop or click to add your post featured image.';
      this.postFeaturedImgEl.textTranslation.imageFileText = 'Drag and drop or click to replace your post featured image.';
    })
  }

  onFileAdd(file: File) {
    this.postFeaturedImg.setValue(file);
  }

  onFileRemove() {
    this.postFeaturedImg.setValue(null);
  }

  async onSubmit(editorInput: any) {
    try {
      let fileName = null;
      if(editorInput.postFeaturedImg) {
        fileName = uuidv4() + '.' + editorInput.postFeaturedImg.name;
        await Storage.put(fileName, editorInput.postFeaturedImg, {
          contentType: 'image/jpeg',
          acl: 'public-read'
        });
      }

      await this.apiService.CreatePost({
        title: editorInput.postTitle,
        content: this.postContent,
        featuredImg: fileName ? { bucket: 'blog181257-env', region: 'us-west-2', path: 'public', fileName: fileName } : null,
        threadID: editorInput.postThread
      });
    }
    catch (e) {
      console.error(e);
      alert('Post composed failed! Please try again later!');
      return;
    }

    alert('Post composed successfully!');
    this.composePostForm.reset();
    this.postComposeEditor.html.set(null);
    this.postFeaturedImgEl.reset();
  }

}
