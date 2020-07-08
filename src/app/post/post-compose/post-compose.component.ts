import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Storage } from 'aws-amplify';
import { MdbFileUploadComponent } from 'mdb-file-upload';
import { v4 as uuidv4 } from 'uuid';
import { APIService } from '../../API.service';

@Component({
  selector: 'app-compose-post',
  templateUrl: './post-compose.component.html',
  styleUrls: ['./post-compose.component.scss']
})
export class PostComposeComponent implements OnInit, AfterViewInit {

  @ViewChild('postFeaturedImg')
  postFeaturedImgEl: MdbFileUploadComponent;

  composePostForm: FormGroup;

  threads: any;

  constructor(private formBuilder: FormBuilder, private apiService: APIService) {
  }

  async ngOnInit(): Promise<void> {
    this.composePostForm = this.formBuilder.group({
      postTitle: [ null, [ Validators.required ] ],
      postFeaturedImg: [ null, [ Validators.required ] ],
      postContent: [ null, [ Validators.required, Validators.nullValidator ] ],
      postThread: [ null, [ Validators.required, Validators.minLength(8) ] ]
    });

    this.threads = (await this.apiService.ListThreads()).items;
  }

  get postTitle() {
    return this.composePostForm.get('postTitle');
  }

  get postFeaturedImg() {
    return this.composePostForm.get('postFeaturedImg');
  }

  get postContent() {
    return this.composePostForm.get('postContent');
  }

  get postThread() {
    return this.composePostForm.get('postThread');
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
          contentType: 'image/jpeg'
        });
      }

      await this.apiService.CreatePost({
        title: editorInput.postTitle,
        content: editorInput.postContent,
        featuredImg: fileName,
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
    this.postFeaturedImgEl.reset();
  }

}
