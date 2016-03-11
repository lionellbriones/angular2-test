import {bootstrap} from 'angular2/platform/browser';
import {MindspaceApp} from './app/mindspace';
import {ROUTER_PROVIDERS} from 'angular2/router';

bootstrap(MindspaceApp, [
  ROUTER_PROVIDERS
]);
