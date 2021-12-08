import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss'],
})
export class ContactDetailComponent implements OnInit {
  @Input() contact: any = null;

  @Output() saveRequest = new EventEmitter();
  @Output() deleteRequest = new EventEmitter<any>();

  saveName(): void {
    this.saveRequest.emit();
  }

  delete(): void {
    this.deleteRequest.emit(this.contact);
  }

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {}
}
