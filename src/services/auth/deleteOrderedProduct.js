import Axios from 'axios';

export default (context, id) => Axios.delete(`deleteOrderedProduct/${id}`).then((response) => {
  if (response && response.status === 200) {
    const index = context.selectedProducts.findIndex((item) => item.id === id);
    context.selectedProducts.splice(index, 1);
    context.totalPrice = 0;
    context.productCount = 0;
    context.selectedProducts.map((item) => {
      context.totalPrice += item.product_quantity * item.product.price;
    });
    context.PriceAndShipping = context.shipping + context.totalPrice;
  }
}).catch((error) => {
  // eslint-disable-next-line no-console
  console.log('deleted', error);
});
