(function() {
    'use strict';

    angular
        .module('myExesApp')
        .controller('ModalInstanceCtrl', ModalInstanceCtrl);

    ModalInstanceCtrl.$inject = ['$scope', '$uibModalInstance', 'items'];

    /* @ngInject */
    function ModalInstanceCtrl($scope, $uibModalInstance, items) {
        $scope.title = 'ModalInstanceCtrl';
        $scope.category = items;

        $scope.ok = function() {
            $uibModalInstance.close();
        };

        $scope.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        };
        
        activate();

        function activate() {
            console.log('app call to categories when we have them');
            // categoryService.getCategories();
        }
    }
})();