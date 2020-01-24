import Axios from 'axios';

export default (context) => Axios.get('user/get-ordered-products').then((response) => {
  if (response && response.status === 200) {
    context.selectedProducts = response.data.product;
    context.selectedProducts.map((item) => {
      context.totalPrice += item.product.price * item.product_quantity;
    });
    context.PriceAndShipping = context.shipping + context.totalPrice;
  }
}).catch((error) => {
  if (error && error.response && error.response.data) {
    if (error.response.data.status) {
      console.log('error message', error.response.data.status);
    }
  }
});
