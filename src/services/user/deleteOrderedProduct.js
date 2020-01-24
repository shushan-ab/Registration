import Axios from 'axios';

export default (context, id) => Axios.delete(`user/${id}`).then((response) => {
  if (response && response.status === 200) {
    context.$toasted.success(response.data.status);
    const index = context.selectedProducts.findIndex((item) => item.id === id);
    context.selectedProducts.splice(index, 1);
    context.totalPrice = 0;
    context.productCount = 0;
    context.selectedProducts.map((item) => {
      context.totalPrice += item.product_quantity * item.product.price;
    });
    context.PriceAndShipping = context.shipping + context.totalPrice;
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
