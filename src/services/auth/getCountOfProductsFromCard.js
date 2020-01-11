import Axios from 'axios';

export default (context) => Axios.get('getProductsFromCard').then((response) => {
  if (response && response.status === 200) {
    context.selectedProducts.map((item) => {
      context.productCount += item.product_quantity;
    });
  }
}).catch((error) => {
  // eslint-disable-next-line no-console
  console.log('error from prouct', error.response);
});
