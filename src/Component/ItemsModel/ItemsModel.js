import { STORAGE_CART_NAME } from '../../const';

export default ['itemsCtrl', ($scope) => {

  $scope.isLast = function(check) {
    return check ? 'mr-auto' : null;

  };

  $scope.addToCart = (id) => {
    if ($scope.cart.indexOf(id) !== -1) {

      $scope.cart = $scope.cart.filter(item => item !== id);
      localStorage.setItem(STORAGE_CART_NAME, JSON.stringify($scope.cart));
      $scope.$emit('removeCart', {
        removeCart: $scope.cart,
      });
      return;
    }
    $scope.cart.push(id);
    localStorage.setItem(STORAGE_CART_NAME, JSON.stringify($scope.cart));
  };
}];

