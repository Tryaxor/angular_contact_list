import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  getContacts(): any[] {
    return this.getData();
  }

  pushContact(contact: any) {
    let contacts = this.getData();
    contacts.push(contact);
    this.setData(contacts);
  }

  deleteContact(id: number) {
    let contacts = this.getData();
    contacts = contacts.filter((t) => t.id != id);
    this.setData(contacts);
  }

  replaceContact(id: number, contact: any) {
    let contacts = this.getData();
    contacts.splice(id, 1, contact);
    this.setData(contacts);
  }

  setData(data: any[]) {
    const jsonData = JSON.stringify(data);
    localStorage.setItem('contacts', jsonData);
  }

  getData(): any[] {
    return JSON.parse(localStorage.getItem('contacts') ?? '[]');
  }
  constructor() { }
}
