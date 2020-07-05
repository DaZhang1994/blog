import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Storage } from 'aws-amplify';
import { MdbFileUploadComponent } from 'mdb-file-upload';
import { v4 as uuidv4 } from 'uuid';
import { APIService } from '../../API.service';

@Component({
  selector: 'app-thread-edit',
  templateUrl: './thread-edit.component.html',
  styleUrls: ['./thread-edit.component.scss']
})
export class ThreadEditComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('threadFeaturedImg')
  threadFeaturedImgEl: MdbFileUploadComponent;

  idSub: any;

  editThreadForm: FormGroup;

  thread: any;

  constructor(private readonly router: Router, private formBuilder: FormBuilder, private apiService: APIService, private readonly route: ActivatedRoute) {

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

      Storage.get(this.thread.featuredImg, { download: true }).then((featuredImg: any) => {
        const featuredImgFile: File = new File([featuredImg.Body], this.thread.featuredImg, { type: 'image/jpeg' })
        this.threadFeaturedImgEl.showPreview(featuredImgFile);
        this.threadFeaturedImgEl.defaultPreview = true;
        this.threadFeaturedImg.setValue(featuredImgFile);
      });

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
      if(editThreadForm.threadFeaturedImg) {
        fileName = uuidv4() + '.' + editThreadForm.threadFeaturedImg.name;
        await Storage.remove(this.thread.featuredImg);
        await Storage.put(fileName, editThreadForm.threadFeaturedImg);
      }

      await this.apiService.UpdateThread({
        id: this.thread.id,
        subject: editThreadForm.threadSubject,
        featuredImg: fileName,
        _version: this.thread._version
      })

    }
    catch (e) {
      console.error(e);
    }

    alert('Thread edited successfully!');
    location.reload();
  }

  async onDelete() {
    try {
      this.apiService.DeleteThread({id: this.thread.id, _version: this.thread._version}).catch(e => {
        throw new Error(e);
      });
      Storage.remove(this.thread.featuredImg).catch(e => {
        throw new Error(e);
      });
    }
    catch (e) {
      alert('Thread deleted failed! Please try again later!');
      location.reload();
    }

    alert('Thread deleted successfully!');
    await this.router.navigate(['/posts']);
  }

  ngOnDestroy() {
    this.idSub.unsubscribe();
  }
}
