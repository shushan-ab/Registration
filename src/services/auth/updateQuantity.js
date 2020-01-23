import Axios from 'axios';

export default (quantity, id) => Axios.put(`products/${id}`, quantity).then((response) => {
  if (response && response.status === 200) {
    console.log('Quantity updated', response);
  }
}).catch((error) => {
  if (error && error.response && error.response.data) {
    if (error.response.data.status) {
      console.log('error message', error.response.data.status);
    }
  }
});
