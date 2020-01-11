import Axios from 'axios';
// import Vue from 'vue';
export default (context) => Axios.get('user').then((response) => {
  if (response && response.status === 200) {
    // eslint-disable-next-line no-console
    console.log('user is', response);
    context.user = response.data.user;
  }
}).catch((error) => {
  // eslint-disable-next-line no-console
  console.log('errorrrrrrr', error.response);
});
