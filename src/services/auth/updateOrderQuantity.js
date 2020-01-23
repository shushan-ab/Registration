import Axios from 'axios';

export default (context, id, quantity) => Axios.put(`user/${id}`, quantity).then((response) => {
  if (response && response.status === 200) {
    context.$toasted.success(response.data.status);
    console.log('Quantity updated', response);
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
