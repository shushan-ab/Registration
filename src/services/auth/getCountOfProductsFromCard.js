import Axios from 'axios';

export default (context) => Axios.get('getProductsFromCard').then((response) => {
  if (response && response.status === 200) {
    context.selectedProducts.map((item) => {
      context.productCount += item.product_quantity;
    });
  }
}).catch((error) => {
  if (error && error.response && error.response.data) {
    if (error.response.data.status) {
      console.log('error message', error.response.data.status);
    }
  }
});
