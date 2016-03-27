'use strict';

angular.module('myExesApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        template: '<main></main>'
      })
      .state('reports', {
        url: '/reports',
        template: '<reports></reports>'
      });
  });
