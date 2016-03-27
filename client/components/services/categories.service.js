(function () {
  'use strict';

  angular.module('myExesApp')
    .factory('CategoriesFactory', CategoriesFactory);

  CategoriesFactory.$inject = [''];

  function CategoriesFactory() {
    return {
      getCategories: function() {
        let categories = [
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
        return categories;
      }
    };
  }

})();
