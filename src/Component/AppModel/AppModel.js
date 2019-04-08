import { STORAGE_CART_NAME, STORAGE_ORDER_NAME } from '../../const';

export default ['appCtrl', ($scope, $http) => {

  $scope.product = [];
  $scope.cart = JSON.parse(localStorage.getItem(STORAGE_CART_NAME)) || [];
  $scope.order = JSON.parse(localStorage.getItem(STORAGE_ORDER_NAME)) || [];

  $http.get('/product.json')
    .then((result) => {
      $scope.product = result.data.product;
      $scope.$broadcast('load', {
        itemsLoad: $scope.product,
      });
    })
    .catch((result) => {
      console.log(`${result.status} errors`);
    });

  $scope.getCartCost = () => {
    return $scope.product.filter(item => $scope.cart.indexOf(item.id) !== -1)
      .reduce((sum, item) => {
        return sum + +item.price;
      }, 0);
  };

  $scope.$on('cartItems', (event, arg) => {
    $scope.cart = arg.cartItems;
  });

  $scope.$on('removeCart', (event, arg) => {
    $scope.cart = arg.removeCart
  });
}];