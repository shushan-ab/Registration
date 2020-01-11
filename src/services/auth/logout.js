import Axios from 'axios';
import Vue from 'vue';

export default () => Axios.get('logout').then((response) => {
  if (response && response.status === 200) {
    localStorage.removeItem('token');
    Vue.router.push('/login');
  }
}).catch((error) => {
  console.log('error', error.response);
});
