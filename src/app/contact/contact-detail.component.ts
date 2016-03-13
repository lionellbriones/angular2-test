import {Component, OnInit} from 'angular2/core';
import {ControlGroup, FormBuilder, Validators} from 'angular2/common';
import {Contact, ContactService} from './contact.service';
import {RouteParams, Router} from 'angular2/router';
import {CanDeactivate, ComponentInstruction} from 'angular2/router';

@Component({
  templateUrl: 'app/contact/contact-detail.component.html',
  styleUrls: ['app/contact/contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit, CanDeactivate {

  contactForm: ControlGroup;
  contact: Contact;
  id: any;

  constructor(
    private _service: ContactService,
    private _router: Router,
    private _routeParams: RouteParams,
    private _formBuilder: FormBuilder
    ) { }

  ngOnInit() {
    this.id = this._routeParams.get('id');
    this.contactForm = this._formBuilder.group({
      'firstName': ['', Validators.required]
    })
    if( this.id === "create" ){
      this.contact = {
        firstName: '',
        lastName: '',
        phone: '',
        email: ''
      }
    }else{
      this._service.get(+this.id).then(contact => {
        if (contact) {
          this.contact = contact;
        } else {
          this.gotoList();
        }
      });
    }

  }

  routerCanDeactivate(next: ComponentInstruction, prev: ComponentInstruction): any {
    return true;
    //return new Promise<boolean>((resolve, reject) => resolve(window.confirm('Discard changes?')));
  }

  cancel() {
    this.gotoList();
  }

  save() {
    if( this.id === "create" ){
      this._service.new(this.contact);
      this.gotoList();
    }else{
      this.gotoList();
    }
  }

  gotoList() {
    this._router.navigate(['ContactList']);
  }
}
