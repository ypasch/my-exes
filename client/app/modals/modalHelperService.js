class ModalHelperService {
  constructor($uibModal) {
    this.$uibModal = $uibModal;
    this.animationsEnabled = true;
  }


  addSpending(quick, description) {
    this.quick = quick;
    this.description = description ? description : '';
    return this.$uibModal.open({
      animation: this.animationsEnabled,
      templateUrl: `<add-spending quick="vm.quick" description="vm.description"></add-spending>`,
      controller: function(quick, description) {
        this.quick = quick;
        this.description = description;
      },
      controllerAs: 'vm',
      size: 'sm',
      resolve: {
        quick: this.quick,
        description: this.description
      }
    });
  };

  toggleAnimation() {
    this.animationsEnabled = !this.animationsEnabled;
  };

}

ModalHelperService.$inject = ['$uibModal'];

angular.module('myExesApp')
  .service('modalHelperService', ModalHelperService);
