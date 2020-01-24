import Axios from 'axios';

export default (context) => Axios.get('products').then((response) => {
  if (response && response.status === 200) {
    context.products = response.data.product.map((item) => ({
      ...item,
      editing: false,
      disabled: false,
    }));
  }
}).catch((error) => {
  if (error && error.response && error.response.data) {
    if (error.response.data.status) {
      console.log('error message', error.response.data.status);
    }
  }
});
