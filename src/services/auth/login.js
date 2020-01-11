import Axios from 'axios';
import Vue from 'vue';

export default (context, data) => Axios.post('auth/signin', data).then((response) => {
  if (response && response.status === 200) {
    const { token } = response.data;
    localStorage.setItem('token', token);
    // this.$router.push({ name: 'Admin'});
    if(response.data.user.roll === 'Admin') {
      localStorage.setItem('admin', true);
      Vue.router.push('/admin');
    } else {
      localStorage.setItem('admin', false);
      Vue.router.push('/user');
      // auth.getAdminInfo();
    }
  }
}).catch((error) => {
  // eslint-disable-next-line no-console
  console.log('error', error.response);
});
