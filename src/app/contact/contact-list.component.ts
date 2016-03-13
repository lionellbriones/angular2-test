import {Component, OnInit} from 'angular2/core';
import {Contact, ContactService} from './contact.service';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  templateUrl: 'app/contact/contact-list.component.html',
  styleUrls: ['app/contact/contact-list.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class ContactListComponent implements OnInit {
  contacts: Contact[];
  constructor(
    private _service: ContactService) {}
  ngOnInit() {
    this._service.getAll().then(contacts => this.contacts = contacts);
  }
}
