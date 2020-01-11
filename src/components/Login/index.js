// import { ValidationProvider } from 'vee-validate';
import { extend } from 'vee-validate';
import { required, email } from 'vee-validate/dist/rules';
import { ValidationProvider } from 'vee-validate/dist/vee-validate.full.esm';
// import { ValidationObserver } from 'vee-validate';
import authService from '../../services/auth';
// import Vue from "vue/types/vue";

extend('email', email);
// Override the default message.
extend('required', {
  ...required,
  message: 'This field is required',
});
export default {
  name: 'registration',
  // component: ValidationObserver,
  data() {
    return {
      user: {
        email: '',
        password: '',
      },
    };
  },
  components: {
    ValidationProvider,
  },
  mounted() {
    // this.userInfo();
  },
  methods: {
    userInfo() {
      // eslint-disable-next-line no-console
      // console.log(this.errors);
      authService.login(this, this.user);
      // alert('Form has been submitted!');
    },
  },

};
