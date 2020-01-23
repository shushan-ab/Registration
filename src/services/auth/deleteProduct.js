import Axios from 'axios';

export default (context, id) => Axios.delete(`photos/${id}`).then((response) => {
  if (response && response.status === 200) {
    console.log('rrrrr');
    const index = context.products.findIndex((item) => item.id === id);
    context.products.splice(index, 1);
  }
}).catch((error) => {
  // eslint-disable-next-line no-console
  console.log('deleted', error);
});
