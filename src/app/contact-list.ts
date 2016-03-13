import {Component, OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {ContactRoot} from './contact/contact-root.component';
import {ContactService} from './contact.service';
import {ContactDetail} from './contact-detail.component';
import {Contact} from './contact';

@Component({
  selector: 'mindspace-app',
  providers: [ContactService],
  templateUrl: 'app/mindspace.html',
  directives: [ROUTER_DIRECTIVES, ContactDetail],
  pipes: [],
  styleUrls: ['./app/mindspace.css']
})
@RouteConfig([
  {path:'/contact/...', name: 'ContactRoot', component: ContactRoot}
])
export class MindspaceApp implements OnInit {
  public contacts: Contact[];
  public selectedContact = null;

  constructor(private _contactService: ContactService){}

  getContacts(){
    this._contactService.getContacts().then((contacts: Contact[]) => this.contacts = contacts);
  }

  ngOnInit():any {
    this.getContacts();
  }
}
