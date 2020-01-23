import Axios from 'axios';

export default (context) => Axios.get('getProducts').then((response) => {
  if (response && response.status === 200) {
    // eslint-disable-next-line no-console
    console.log('get all products', response.data.product);
    response.data.product.map((item) => {
      context.products.push({
        ...item,
        newQuantity: 1,
      });
    });
  }
}).catch((error) => {
  // eslint-disable-next-line no-console
  console.log('error from prouct', error);
});
