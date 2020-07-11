import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Storage } from 'aws-amplify';
import { MdbFileUploadComponent } from 'mdb-file-upload';
import { Subscription } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import { APIService, GetThreadQuery } from '../../API.service';
import { S3StorageService } from '../../s3storage/s3StorageService';

@Component({
  selector: 'app-thread-edit',
  templateUrl: './thread-edit.component.html',
  styleUrls: ['./thread-edit.component.scss']
})
export class ThreadEditComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('threadFeaturedImg')
  threadFeaturedImgEl: MdbFileUploadComponent;

  idSub: Subscription;

  editThreadForm: FormGroup;

  thread: GetThreadQuery;

  featuredImageChanged: boolean = false;

  constructor(private readonly router: Router,
              private readonly formBuilder: FormBuilder,
              private readonly apiService: APIService,
              private readonly route: ActivatedRoute,
              private readonly s3StorageService: S3StorageService) {

  }

  async ngOnInit(): Promise<void> {

    this.editThreadForm = this.formBuilder.group({
      threadSubject: [ null, [ Validators.required ] ],
      threadFeaturedImg: [ null, [ Validators.required ] ]
    });

    this.idSub = this.route.params.subscribe(async (params: any) => {
      this.thread = await this.apiService.GetThread(params.id);

      if(this.thread == null) {
        await this.router.navigate(['404']);
        return;
      }

      this.threadFeaturedImgEl.defaultFile = this.s3StorageService.getS3ObjectUrl(this.thread.featuredImg);
      this.threadSubject.setValue(this.thread.subject);
    });
  }

  get threadSubject() {
    return this.editThreadForm.get('threadSubject');
  }

  get threadFeaturedImg() {
    return this.editThreadForm.get('threadFeaturedImg');
  }

  onFileAdd(file: File) {
    this.featuredImageChanged = true;
    this.threadFeaturedImg.setValue(file);
  }

  onFileRemove() {
    this.threadFeaturedImg.setValue(null);
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.threadFeaturedImgEl.textTranslation.fileText = 'Drag and drop or click to add your thread featured image.';
      this.threadFeaturedImgEl.textTranslation.imageFileText = 'Drag and drop or click to replace your thread featured image.';
    })
  }

  async onSubmit(editThreadForm: any) {
    try {

      let fileName = null;
      if(this.featuredImageChanged && editThreadForm.threadFeaturedImg){
        fileName = uuidv4() + '.' + editThreadForm.threadFeaturedImg.name;
        try{
          await Storage.remove(this.thread.featuredImg.fileName);
        }
        catch (e) {

        }
        await Storage.put(fileName, editThreadForm.threadFeaturedImg);
      }

      await this.apiService.UpdateThread({
        id: this.thread.id,
        subject: editThreadForm.threadSubject,
        featuredImg: fileName ? { bucket: 'blog181257-env', region: 'us-west-2', path: 'public', fileName: fileName } : { bucket: 'blog181257-env', region: 'us-west-2', path: 'public', fileName: this.thread.featuredImg.fileName },
        _version: this.thread._version
      })

    }
    catch (e) {
      alert('Thread edited failed! Please try again later!');
      console.error(e);
      return;
    }

    alert('Thread edited successfully!');
    location.reload();
  }

  async onDelete() {
    if(confirm('Are you sure to delete this thread?')) {
      try {
        this.apiService.DeleteThread({id: this.thread.id, _version: this.thread._version}).catch(e => {
          throw new Error(e);
        });
        Storage.remove(this.thread.featuredImg?.fileName).catch(_e => {

        });
      }
      catch (e) {
        alert('Thread deleted failed! Please try again later!');
        return;
      }

      alert('Thread deleted successfully!');
      await this.router.navigate(['/posts']);
    }

  }

  ngOnDestroy() {
    this.idSub.unsubscribe();
  }
}
