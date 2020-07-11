import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Storage } from 'aws-amplify';
import { MdbFileUploadComponent } from 'mdb-file-upload';
import { v4 as uuidv4 } from 'uuid';
import { APIService, GetPostQuery } from '../../API.service';
import { EditorService } from '../../editor/editor.service';
import { S3StorageService } from '../../s3storage/s3StorageService';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.scss']
})
export class PostEditComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('postFeaturedImg')
  postFeaturedImgEl: MdbFileUploadComponent;

  idSub: any;

  editPostForm: FormGroup;

  threads: any;

  post: GetPostQuery;

  postComposeEditor: any;

  featuredImageChanged: boolean = false;

  constructor(private readonly router: Router,
              private formBuilder: FormBuilder,
              private apiService: APIService,
              private readonly route: ActivatedRoute,
              private readonly editorService: EditorService,
              private readonly s3StorageService: S3StorageService) {

  }

  async ngOnInit(): Promise<void> {

    this.editPostForm = this.formBuilder.group({
      postTitle: [ null, [ Validators.required ] ],
      postFeaturedImg: [ null, [ Validators.required ] ],
      postThread: [ null, [ Validators.required, Validators.minLength(8) ] ]
    });

    this.postComposeEditor = await this.editorService.buildEditorAsync('div#post-edit-editor');

    this.apiService.ListThreads().then(({ items }) => this.threads = items);

    this.idSub = this.route.params.subscribe(async (params: any) => {
      this.post = await this.apiService.GetPost(params.id);

      if(this.post == null) {
        await this.router.navigate(['404']);
        return;
      }

      this.postFeaturedImgEl.defaultFile = this.s3StorageService.getS3ObjectUrl(this.post.featuredImg);
      this.postTitle.setValue(this.post.title);
      this.postThread.setValue(this.post.threadID);
      this.postComposeEditor.html.set(this.post.content);
    });

  }

  get postTitle() {
    return this.editPostForm.get('postTitle');
  }

  get postFeaturedImg() {
    return this.editPostForm.get('postFeaturedImg');
  }

  get postContent() {
    return this.postComposeEditor.html.get();
  }

  get postThread() {
    return this.editPostForm.get('postThread');
  }

  onFileAdd(file: File) {
    this.featuredImageChanged = true;
    this.postFeaturedImg.setValue(file);
  }

  onFileRemove() {
    this.postFeaturedImg.setValue(null);
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.postFeaturedImgEl.textTranslation.fileText = 'Drag and drop or click to add your post featured image.';
      this.postFeaturedImgEl.textTranslation.imageFileText = 'Drag and drop or click to replace your post featured image.';
    })
  }

  async onSubmit(editorInput: any) {
    try {

      let fileName = null;
      if(this.featuredImageChanged && editorInput.postFeaturedImg) {
        fileName = uuidv4() + '.' + editorInput.postFeaturedImg.name;
        try {
          await Storage.remove(this.post.featuredImg.fileName);
        }
        catch (e) {

        }
        await Storage.put(fileName, editorInput.postFeaturedImg, {
          contentType: 'image/jpeg',
          acl: 'public-read'
        });
      }

      await this.apiService.UpdatePost({
        id: this.post.id,
        title: editorInput.postTitle,
        content: this.postContent,
        featuredImg: fileName ? { bucket: 'blog181257-env', region: 'us-west-2', path: 'public', fileName: fileName } : { bucket: 'blog181257-env', region: 'us-west-2', path: 'public', fileName: this.post.featuredImg.fileName },
        threadID: editorInput.postThread,
        _version: this.post._version
      })

    }
    catch (e) {
      alert('Post edited failed! Please try again later!');
      console.error(e);
      return;
    }

    alert('Post edited successfully!');
    location.reload();
  }

  async onDelete() {
    if(confirm('Are you sure to delete this post?')) {
      try {
        this.apiService.DeletePost({id: this.post.id, _version: this.post._version}).catch(e => {
          throw new Error(e);
        });
        Storage.remove(this.post.featuredImg?.fileName).catch(_e => {

        });
      }
      catch (e) {
        alert('Post deleted failed! Please try again later!');
        return;
      }

      alert('Post deleted successfully!');
      await this.router.navigate(['/posts']);
    }
  }

  ngOnDestroy() {
    this.idSub.unsubscribe();
  }
}
