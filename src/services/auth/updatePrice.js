import Axios from 'axios';

export default (context, price, id) => Axios.put(`products/${id}`, price).then((response) => {
  if (response && response.status === 200) {
    context.$toasted.success(response.data.status);
  } else {
    context.$toasted.error(response.data.status);
  }
}).catch((error) => {
  if (error && error.response && error.response.data) {
    if (error.response.data.status) {
      console.log('error message', error.response.data.status);
    }
  }
});
