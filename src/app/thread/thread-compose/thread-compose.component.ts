import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Storage } from 'aws-amplify';
import { MdbFileUploadComponent } from 'mdb-file-upload';
import { v4 as uuidv4 } from 'uuid';
import { APIService } from '../../API.service';

@Component({
  selector: 'app-thread-compose',
  templateUrl: './thread-compose.component.html',
  styleUrls: ['./thread-compose.component.scss']
})
export class ThreadComposeComponent implements OnInit, AfterViewInit {

  @ViewChild('threadFeaturedImg')
  threadFeaturedImgEl: MdbFileUploadComponent;

  composeThreadForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private apiService: APIService) {

  }

  async ngOnInit(): Promise<void> {
    this.composeThreadForm = this.formBuilder.group({
      threadSubject: [ null, [ Validators.required ] ],
      threadFeaturedImg: [ null, [ Validators.required ] ]
    });
  }

  get threadSubject() {
    return this.composeThreadForm.get('threadSubject');
  }

  get threadFeaturedImg() {
    return this.composeThreadForm.get('threadFeaturedImg');
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.threadFeaturedImgEl.textTranslation.fileText = 'Drag and drop or click to add your thread featured image.';
      this.threadFeaturedImgEl.textTranslation.imageFileText = 'Drag and drop or click to replace your thread featured image.';
    })
  }

  onFileAdd(file: File) {
    this.threadFeaturedImg.setValue(file);
  }

  onFileRemove() {
    this.threadFeaturedImg.setValue(null);
  }

  async onSubmit(composeThreadForm: any) {
    try {
      let fileName = null;
      if(composeThreadForm.threadFeaturedImg) {
        fileName = uuidv4() + '.' + composeThreadForm.threadFeaturedImg.name;
        await Storage.put(fileName, composeThreadForm.threadFeaturedImg, {
          contentType: 'image/jpeg',
          acl: 'public-read'
        });
      }

      await this.apiService.CreateThread({
        subject: composeThreadForm.threadSubject,
        featuredImg: fileName ? { bucket: 'blog181257-env', region: 'us-west-2', path: 'public', fileName: fileName } : null
      });
    }
    catch (e) {
      alert('Thread composed failed! Please try again later!');
      console.error(e);
      return;
    }

    alert('Thread composed successfully!');
    this.composeThreadForm.reset();
    this.threadFeaturedImgEl.reset();
  }

}
