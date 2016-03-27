'use strict';

angular.module('myExesApp.auth', [
  'myExesApp.constants',
  'myExesApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
