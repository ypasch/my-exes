class ModalHelperService {

  constructor($uibModal, categoriesService) {
    this.$uibModal = $uibModal;
    this.categoriesService = categoriesService;
    this.animationsEnabled = true;

    this.categories = this.categoriesService.getCategories();
    console.log(this.categories);
  }

  addNewSpending(quick, description) {
    return this.$uibModal.open({
      animation: this.animationsEnabled,
      resolve: {
        quick: this.quick,
        description: this.description
      },
      template: `<add-spending quick="vm.quick" description="vm.description"></add-spending>`,
      controller: ['quick', 'description', function(quick, description) {
        this.quick = quick ? quick : false;
        this.description = description ? description : '';
      }],
      controllerAs: 'vm',
      size: 'sm'
    });
  };


  toggleAnimation() {
    this.animationsEnabled = !this.animationsEnabled;
  };

}

ModalHelperService.$inject = ['$uibModal', 'categoriesService'];

angular.module('myExesApp')
  .service('modalHelperService', ModalHelperService);
