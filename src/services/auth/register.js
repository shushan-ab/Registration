import Axios from 'axios';

export default (context, data) => Axios.post('auth/signup', data).then((response) => {
  if (response && response.status === 200) {
    console.log(response.data.status);
  }
}).catch((error) => {
  if (error && error.response && error.response.data) {
    if (error.response.data.status) {
      console.log('error message', error.response.data.status);
    }
  }
});
