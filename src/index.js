import { module } from 'angular';
import 'angular-route';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/style.css';
import AppModel from './Component/AppModel';
import ItemsModel from './Component/ItemsModel';
import CartModel from './Component/CartModel';
import OrderModel from './Component/OrderModel';

module('appShop', ['itemsModule', 'cartModule', 'orderModule', 'ngRoute'])
  .controller(...AppModel)
  .config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider
        .when('/cart', {
          template: '<cart-view ng-controller="cartCtrl"></cart-view>',
        })
        .when('/order', {
          template: '<order-view ng-controller="orderCtrl"></order-view>',
        })
        .when('/', {
          template: '<items-view ng-controller="itemsCtrl"></items-view>',
        })
        .otherwise('/');
    },
  ]).config(
  ['$locationProvider',
    function($locationProvider) {
      $locationProvider.html5Mode({ enabled: true, requireBase: false });
    },
  ]);

module('cartModule', [])
  .controller(...CartModel)
  .directive('cartView', () => {
    return {
      templateUrl: '/src/Component/CartModel/CartView.html',
      replace: true,
    };
  });

module('itemsModule', [])
  .controller(...ItemsModel)
  .directive('itemsView', () => {
    return {
      templateUrl: '/src/Component/ItemsModel/ItemsView.html',
      replace: true,
    };
  });

module('orderModule', [])
  .controller(...OrderModel)
  .directive('orderView', () => {
    return {
      templateUrl: '/src/Component/OrderModel/OrderView.html',
      replace: true,
    };
  });

