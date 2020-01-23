import Axios from 'axios';

export default (context) => Axios.get('user/get-products').then((response) => {
  if (response && response.status === 200) {
    response.data.product.map((item) => {
      context.products.push({
        ...item,
        newQuantity: 1,
      });
    });
  }
}).catch((error) => {
  if (error && error.response && error.response.data) {
    if (error.response.data.status) {
      console.log('error message', error.response.data.status);
    }
  }
});
