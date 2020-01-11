import Axios from 'axios';

export default (context, data) => Axios.post('auth/signup', data).then((response) => {
  if (response && response.status === 200) {
    // eslint-disable-next-line no-console
    console.log(response, 'ryesyesyesyes');
  }
}).catch((error) => {
  // eslint-disable-next-line no-console
  console.log(error.response, 'errooooor');
});
