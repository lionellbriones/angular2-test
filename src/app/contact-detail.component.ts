import {Component} from "angular2/core";

@Component({
  selector: "contact-detail",
  templateUrl: '/app/contact-detail.html',
  inputs: ['contact'],
  styles: [`
      label {
        display: inline-block;
        width: 140px
      }

      input {
        width: 250px;
      }
    `]
})
export class ContactDetail {
  public contact = {};
}
