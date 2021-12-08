import { Component, OnInit } from '@angular/core';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'contact-list';
  contacts: any[] = [];
  selectedContact: any = null;

  getContacts(): void {
    this.contacts = this.contactService.getContacts();
  }

  saveContacts(): void {
    this.contactService.setData(this.contacts);
  }

  selectContact(contact: any): void {
    this.selectedContact = contact;
  }

  deleteContact(contact: any): void {
    this.contacts = this.contacts.filter(c => c != contact);
    this.contactService.setData(this.contacts);
    this.selectContact(null);
  }

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.getContacts();
  }
}
