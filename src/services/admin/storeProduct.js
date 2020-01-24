import Axios from 'axios';

export default (context, data) => Axios.post('products', data).then((response) => {
  if (response && response.status === 200) {
    context.$toasted.success(response.data.status);
    context.$refs.observer.reset();
    context.products.unshift({
      id: response.data.product.id,
      name: response.data.product.name,
      price: response.data.product.price,
      quantity: response.data.product.quantity,
      newQuantity: 0,
      editing: false,
    });
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
