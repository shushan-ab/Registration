import Axios from 'axios';

export default (quantity, id) => Axios.put(`products/${id}`, quantity).then((response) => {
  if (response && response.status === 200) {
    console.log('Quantity updated', response);
  }
}).catch((error) => {
  console.log('Error from product', error.response);
});
