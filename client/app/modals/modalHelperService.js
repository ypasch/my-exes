class ModalHelperService {

  constructor($uibModal, categoriesService) {
    this.$uibModal = $uibModal;
    this.categoriesService = categoriesService;
    this.animationsEnabled = true;

    this.categories = this.categoriesService.getCategories();
    console.log(this.categories);
  }

  addNewSpending(quick, description) {
    this.quick = quick;
    this.description = description ? description : '';
    this.$uibModal.open({
      animation: this.animationsEnabled,
      template: '<add-spending quick="vm.quick" description="vm.description"></add-spending>',
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

ModalHelperService.$inject = ['$uibModal', 'categoriesService'];

angular.module('myExesApp')
  .service('modalHelperService', ModalHelperService);
