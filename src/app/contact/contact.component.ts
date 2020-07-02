import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Contact } from '../../models';
import { APIService } from '../API.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  map = {
    lat: 34.1275606,
    lng: -118.0648808,
  };

  contactForm: any;

  constructor(private formBuilder: FormBuilder, private readonly apiService: APIService) {
    this.contactForm = this.formBuilder.group({
      name: [null, Validators.required],
      email: [
        null,
        [
          Validators.required,
          Validators.pattern(
            /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)])/
          ),
        ]
      ],
      subject: [null, Validators.required],
      content: [null, Validators.required]
    });
  }

  get name() {
    return this.contactForm.get('name');
  }
  get email() {
    return this.contactForm.get('email');
  }
  get subject() {
    return this.contactForm.get('subject');
  }
  get content() {
    return this.contactForm.get('content');
  }

  ngOnInit(): void {

  }

  async onSubmit(contact: Contact) {
    try {
      await this.apiService.CreateContact(contact);
      this.contactForm.reset();
      alert('Message sent successfully!');
    }
    catch {
      alert("Message sent failed! Please try again later!");
    }
  }
}
