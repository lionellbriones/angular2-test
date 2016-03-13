import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {ContactRoot} from './contact/contact-root.component';

@Component({
  selector: 'mindspace-app',
  templateUrl: 'app/mindspace.html',
  directives: [ROUTER_DIRECTIVES],
  pipes: [],
  styleUrls: ['./app/mindspace.css']
})
@RouteConfig([
  {path:'/contact/...', name: 'ContactRoot', component: ContactRoot}
])
export class MindspaceApp {
}
