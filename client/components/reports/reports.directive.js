'use strict';

angular.module('myExesApp')
  .directive('reports', function() {
    return {
      templateUrl: 'components/reports/reports.html',
      restrict: 'E',
      link: function(scope, element) {
        element.addClass('reports');
      }
    };
  });
