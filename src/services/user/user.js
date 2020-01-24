import Axios from 'axios';
// import Vue from 'vue';
export default (context) => Axios.get('user').then((response) => {
  if (response && response.status === 200) {
    context.user = response.data.user;
  }
}).catch((error) => {
  console.log('error', error.response.data);
});
