import {Injectable} from 'angular2/core';

// export class Contact {
//   constructor(public id: number, public name: string) { }
// }

export interface Contact {
  firstName: string,
  lastName: string,
  phone: string,
  email: string
}

@Injectable()
export class ContactService {
  getAll() { return promise; }
  get(id: number) {
    return promise.then(all => all[id]);
  }
  new(contact: Contact){
    promise.then((contacts: Contact[]) => contacts.push(contact));
  }
}

let mock = [
  {firstName: "Lionell", lastName: "Briones", phone: "09355452556", email: "llen@gmail.com"},
  {firstName: "Babylo", lastName: "Amazona", phone: "09355452556", email: "ba@gmail.com"},
  {firstName: "Leo", lastName: "Briones", phone: "09355452556", email: "leo@gmail.com"},
  {firstName: "Andre", lastName: "Bayana", phone: "09355452556", email: "dre@gmail.com"},
];

let promise = Promise.resolve(mock);
