class CategoriesService {
  constructor() {
  }
  getCategories() {
    return [
      {
        'name':'Їжа',
        'id': 1
      },
      {
        'name':'Транспорт',
        'id': 2
      },
      {
        'name':'Одяг',
        'id': 3
      },
      {
        'name':'Розваги',
        'id': 4
      },
      {
        'name':'Інше',
        'id': 5
      }
    ];
  }
}

CategoriesService.$inject = [];

angular.module('myExesApp')
  .service('categoriesService', CategoriesService);
