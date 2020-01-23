import Axios from 'axios';

export default (product) => Axios.put(`updatePrice/${product.id}`, product).then((response) => {
  if (response && response.status === 201) {
    // eslint-disable-next-line no-console
    console.log('upeeeeeeeeeeee', response);
    // context.products.unshift({
    //   name: response.data.product.name,
    //   price: response.data.product.price,
    //   quantity: response.data.product.quantity,
    //   newQuantity: 0,
    //   editing: false,
    // });
  }
}).catch((error) => {
  // eslint-disable-next-line no-console
  console.log('error from prouct', error.response);
});
