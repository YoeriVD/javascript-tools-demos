/// <reference path="../../.tmp/typings/tsd.d.ts" />

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { contactNameFilter } from './components/contactName.filter';
import { feedBackDirective } from './components/feedback.directive';

module demoApp {
  'use strict';

  angular.module('demoApp', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ngResource', 'ngRoute', 'toastr'])
    .config(config)
    .config(routerConfig)
    .run(runBlock)
    .controller('MainController', MainController)
    .filter('contactName', contactNameFilter)
    .directive('feedback', feedBackDirective    );
}
