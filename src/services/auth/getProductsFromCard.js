import Axios from 'axios';

export default (context) => Axios.get('getProductsFromCard').then((response) => {
  if (response && response.status === 200) {
    // eslint-disable-next-line no-console
    console.log('All products from card', response.data.product);
    context.selectedProducts = response.data.product;
    context.selectedProducts.map((item) => {
      context.totalPrice += item.product.price * item.product_quantity;
    });
    context.PriceAndShipping = context.shipping + context.totalPrice;
  }
}).catch((error) => {
  // eslint-disable-next-line no-console
  console.log('error from prouct', error.response);
});
