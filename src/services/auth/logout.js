import Axios from 'axios';
import Vue from 'vue';

export default () => Axios.get('logout').then((response) => {
  if (response && response.status === 200) {
    localStorage.removeItem('token');
    localStorage.removeItem('storedData');
    Vue.router.push('/login');
  }
}).catch((error) => {
  if (error && error.response && error.response.data) {
    if (error.response.data.status) {
      console.log('error message', error.response.data.status);
    }
  }
});
