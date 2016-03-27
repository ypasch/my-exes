class AddSpendingCtrl {

  constructor($uibModalInstance, items) {
    this.$uibModalInstance = $uibModalInstance;
    this.category = items;
    this.title = this.quick ? 'Add quick spending' : 'Add new spending';
  }

    ok() {
      this.$uibModalInstance.close();
    };

    cancel() {
      this.$uibModalInstance.dismiss('cancel');
    };

}

AddSpendingCtrl.$inject = ['$uibModalInstance', 'items'];

angular.module('myExesApp')
  .directive('addSpending', {
    scope: {
      quick: '=',
      description: '='
    },
    restrict: 'E',
    controller: AddSpendingCtrl,
    controllerAs: 'vm',
    bindToController: true,
    templateUrl: './addSpending.html'
});
