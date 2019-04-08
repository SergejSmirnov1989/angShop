import { STORAGE_CART_NAME, STORAGE_ORDER_NAME } from '../../const';

export default ['cartCtrl', ($scope) => {

  $scope.myFilter = (item) => {
    if ($scope.cart.indexOf(item.id) > -1) {
      return item;
    }
  };

  $scope.saveOrder = () => {

    const order = {};

    order.items = $scope.product.filter(item => $scope.cart.indexOf(item.id) !== -1);
    order.createdAt = Date.now().valueOf();
    order.orderCost = $scope.getCartCost();

    $scope.order.push(order);

    localStorage.setItem(STORAGE_ORDER_NAME, JSON.stringify($scope.order));
  };

  $scope.cleanOrder = () => {
    $scope.order.splice(0);
    localStorage.setItem(STORAGE_ORDER_NAME, JSON.stringify($scope.order));
  };

  $scope.getOrderLength = () => {
    return Object.keys($scope.order).length
  };

  $scope.removeFromCart = (id) => {

    $scope.cart = $scope.cart.filter(item => item !== id);

    localStorage.setItem(STORAGE_CART_NAME, JSON.stringify($scope.cart));

    $scope.$emit('cartItems', {
      cartItems: $scope.cart,
    });
  };

  $scope.$on('load', (e, arg) => {
    $scope.cartItem = arg.itemsLoad.filter(item => $scope.cart.indexOf(item.id) !== -1);
  });
}];

