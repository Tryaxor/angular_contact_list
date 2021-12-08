import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-editor',
  templateUrl: './contact-editor.component.html',
  styleUrls: ['./contact-editor.component.scss'],
})
export class ContactEditorComponent implements OnInit {
  @Output() updateRequest = new EventEmitter();

  profileForm = this.fb.group({
    name: ['', Validators.pattern('^([^0-9]*)')],
    username: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
  });

  addUser() {
    this.contactService.pushContact(this.profileForm.value);
    this.updateRequest.emit();
  }

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService
  ) {}

  ngOnInit(): void {}
}
