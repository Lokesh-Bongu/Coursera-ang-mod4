(function () {
    'use strict';

    angular.module('MenuApp')
    .component('items', {
        templateUrl: 'items.template.html',
        controller: ItemsComponentController,
        bindings: {
            items: '<'
        }
    });

    function ItemsComponentController() {
        var $ctrl = this;
    }
})();
