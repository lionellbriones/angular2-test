import {Component} from 'angular2/core';
import {RouteConfig, RouterOutlet, ROUTER_DIRECTIVES} from 'angular2/router';

import {ContactListComponent} from './contact-list.component';
import {ContactDetailComponent} from './contact-detail.component';
import {ContactService} from './contact.service';

@Component({
  template: `
    <header>
      <nav>
        <a [routerLink]="['ContactList']">Contact List</a>
        <a [routerLink]="['ContactDetail', {id: 'create'}]">Create New Contact</a>
      </nav>
    </header>
    <router-outlet></router-outlet>
  `,
  providers: [ContactService],
  directives: [RouterOutlet, ROUTER_DIRECTIVES]
})
@RouteConfig([
  {path:'/contacts', name: 'ContactList', component: ContactListComponent, useAsDefault: true},
  {path:'/contact/:id', name: 'ContactDetail', component: ContactDetailComponent}
])
export class ContactRoot {
  constructor() {}
}
