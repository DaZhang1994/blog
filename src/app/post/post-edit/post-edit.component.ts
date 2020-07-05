import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Storage } from 'aws-amplify';
import { MdbFileUploadComponent } from 'mdb-file-upload';
import { v4 as uuidv4 } from 'uuid';
import { APIService, GetPostQuery } from '../../API.service';

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

  constructor(private readonly router: Router, private formBuilder: FormBuilder, private apiService: APIService, private readonly route: ActivatedRoute) {

  }

  async ngOnInit(): Promise<void> {

    this.editPostForm = this.formBuilder.group({
      postTitle: [ null, [ Validators.required ] ],
      postFeaturedImg: [ null, [ Validators.required ] ],
      postContent: [ null, [ Validators.required, Validators.nullValidator ] ],
      postThread: [ null, [ Validators.required, Validators.minLength(8) ] ]
    });

    this.threads = (await this.apiService.ListThreads()).items;

    this.idSub = this.route.params.subscribe(async (params: any) => {
      this.post = await this.apiService.GetPost(params.id);
      if(this.post == null) {
        await this.router.navigate(['404']);
        return;
      }
      Storage.get(this.post.featuredImg, { download: true }).then((featuredImg: any) => {
        const featuredImgFile: File = new File([featuredImg.Body], this.post.featuredImg, { type: 'image/jpeg' })
        this.postFeaturedImgEl.showPreview(featuredImgFile)
        this.postFeaturedImgEl.defaultPreview = true;
        this.postFeaturedImg.setValue(featuredImgFile);
      });
      this.postTitle.setValue(this.post.title);
      this.postContent.setValue(this.post.content);
      this.postThread.setValue(this.post.threadID);
    });
  }

  get postTitle() {
    return this.editPostForm.get('postTitle');
  }

  get postFeaturedImg() {
    return this.editPostForm.get('postFeaturedImg');
  }

  get postContent() {
    return this.editPostForm.get('postContent');
  }

  get postThread() {
    return this.editPostForm.get('postThread');
  }

  onFileAdd(file: File) {
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
      if(editorInput.postFeaturedImg) {
        fileName = uuidv4() + '.' + editorInput.postFeaturedImg.name;
        await Storage.remove(this.post.featuredImg);
        await Storage.put(fileName, editorInput.postFeaturedImg);
      }

      await this.apiService.UpdatePost({
        id: this.post.id,
        title: editorInput.postTitle,
        content: editorInput.postContent,
        featuredImg: fileName,
        threadID: editorInput.postThread,
        _version: this.post._version
      })

    }
    catch (e) {
      console.error(e);
    }

    alert('Post edited successfully!');
    location.reload();
  }

  async onDelete() {
    try {
      this.apiService.DeletePost({id: this.post.id, _version: this.post._version}).catch(e => {
        throw new Error(e);
      });
      Storage.remove(this.post.featuredImg).catch(e => {
        throw new Error(e);
      });
    }
    catch (e) {
      alert('Post deleted failed! Please try again later!');
      location.reload();
    }

    alert('Post deleted successfully!');
    await this.router.navigate(['/posts']);
  }

  ngOnDestroy() {
    this.idSub.unsubscribe();
  }
}
