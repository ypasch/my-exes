'use strict';

(function() {

class MainController {

  constructor($http, $scope, socket, modalHelperService) {
    this.$http = $http;
    this.$scope = $scope;
    this.socket = socket;
    this.modalHelperService = modalHelperService;
    this.awesomeThings = [];


    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('thing');
    });
  }

  $onInit() {
    this.$http.get('/api/things').then(response => {
      this.awesomeThings = response.data;
      this.socket.syncUpdates('thing', this.awesomeThings);
    });
  }

  addThing() {
    if (this.newThing) {
      this.$http.post('/api/things', { name: this.newThing });
      this.newThing = '';
    }
  }

  deleteThing(thing) {
    this.$http.delete('/api/things/' + thing._id);
  }

  addNewThing(quick, description) {
    return this.modalHelperService.addNewSpending(quick, description);
  }

}


angular.module('myExesApp')
  .component('main', {
    templateUrl: 'app/main/main.html',
    controller: MainController,
    controllerAs: 'vm'
  });

})();
