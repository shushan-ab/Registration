import Axios from 'axios';

export default (data, context) => Axios.post('user', data).then((response) => {
  if (response && response.status === 200) {
    context.$toasted.success(response.data.status);
    if (response.data && response.data.product) {
      context.user.orders_count = response.data.quantity;
    }
  } else {
    context.$toasted.error(response.data.status);
  }
}).catch((error) => {
  if (error && error.response && error.response.data) {
    if (error.response.data.status) {
      console.log('error message', error.response.data.status);
      context.$toasted.error(error.response.data.status);
    }
  }
});
