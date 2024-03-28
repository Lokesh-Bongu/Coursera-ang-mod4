(function () {
    'use strict';

    angular.module('MenuApp')
    .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {

        // Redirect to home page if no other URL matches
        $urlRouterProvider.otherwise('/');

        // Set up UI states
        $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'src/home.template.html'
        })
        .state('categories', {
            url: '/categories',
            templateUrl: 'src/categories.template.html',
            controller: 'CategoriesController as categoriesCtrl',
            resolve: {
                categories: ['MenuDataService', function (MenuDataService) {
                    return MenuDataService.getAllCategories();
                }]
            }
        })
        .state('items', {
            url: '/items/{categoryShortName}',
            templateUrl: 'src/items.template.html',
            controller: 'ItemsController as itemsCtrl',
            resolve: {
                items: ['MenuDataService', '$stateParams', function (MenuDataService, $stateParams) {
                    return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
                }]
            }
        });
    }
})();
