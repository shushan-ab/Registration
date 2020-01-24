import Axios from 'axios';
import Vue from 'vue';

export default (context, data) => Axios.post('auth/signin', data).then((response) => {
  if (response && response.status === 200) {
    debugger;
    const { token } = response.data;
    localStorage.setItem('token', token);
    // this.$router.push({ name: 'Admin' });
    console.log('dddd', response.data.user);
    if (response.data.user.role_id === 1) {
      localStorage.setItem('admin', true);
      Vue.router.push('/admin');
    } else {
      localStorage.setItem('admin', false);
      Vue.router.push('/user');
      // auth.getAdminInfo();
    }
  }
}).catch((error) => {
  if (error && error.response && error.response.data) {
    if (error.response.data.status) {
      console.log('error message', error.response.data.status);
    }
  }
});
