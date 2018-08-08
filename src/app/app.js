import angular from 'angular';
import Common from './common/common';
import Components from './components/components.desktop';
import AppComponent from './app.component';


angular.module('app', [
    Common,
    Components
  ])
  .config()
  .run()

.component('app', AppComponent);
