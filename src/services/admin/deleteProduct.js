import Axios from 'axios';

export default (context, id) => Axios.delete(`products/${id}`).then((response) => {
  if (response && response.status === 200) {
    context.$toasted.success(response.data.status); // todo: ugjhgjh
    const index = context.products.findIndex((item) => item.id === id);
    context.products.splice(index, 1);
  } else {
    context.disable = false;
  }
}).catch((error) => {
  if (error && error.response && error.response.data) {
    if (error.response.data.status) {
      console.log('error message', error.response.data.status);
    }
  }
});
