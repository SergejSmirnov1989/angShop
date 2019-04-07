import { module, controller } from 'angular';
import 'bootstrap/dist/css/bootstrap.min.css';

module('appShop', [])
  .controller('itemsCtrl', ($scope, $http) => {

      $scope.product = [];

      $http.get('/product.json')
        .then((result) => {
          $scope.product = result.data.product;
          console.log($scope);
        })
        .catch((result) => {
          console.log(`${result.status} errors`);
        });

      $scope.isLast = function(check) {
        let cssClass = check ? 'mr-auto' : null;
        return cssClass;
      };
    },
  );