(function () {
    'use strict';

    angular.module('MenuApp')
    .component('categories', {
        templateUrl: 'categories.template.html',
        controller: CategoriesComponentController,
        bindings: {
            categories: '<'
        }
    });

    function CategoriesComponentController() {
        var $ctrl = this;
    }
})();
