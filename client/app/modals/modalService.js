(function() {
  'use strict';

  angular
    .module('myExesApp')
    .service('ModalInstanceService', ModalInstanceService);

  ModalInstanceService.$inject = ['$uibModal', '$log'];

  /* @ngInject */
  function ModalInstanceService($uibModal, $log) {

    var items = ['category1', 'category2', 'category3'];
    // passing caterogies with modal in future we will make call from controller

    this.animationsEnabled = true;

    this.open = function(size) {

      var modalInstance = $uibModal.open({
        animation: this.animationsEnabled,
        templateUrl: 'app/modals/views/quickAddModal.html',
        controller: 'ModalInstanceCtrl',
        size: size,
        resolve: {
          items: function() {
            return items;
          }
        }
      });

      modalInstance.result.then(function() {
        console.log('test');
      });

    };


    this.toggleAnimation = function() {
      this.animationsEnabled = !this.animationsEnabled;
    };

  };

})();