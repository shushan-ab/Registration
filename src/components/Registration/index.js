import { ValidationProvider } from 'vee-validate/dist/vee-validate.full.esm';
import { ValidationObserver, ValidationProvider as ValidationProviderConfirm, extend } from 'vee-validate';
import Vue from 'vue';
import authService from '../../services/auth';

extend('confirmedBy', {
  params: ['target'],
  // Target here is the value of the target field
  validate(value, { target }) {
    return value === target;
  },
  // here it is its name, because we are generating a message
  message: 'The {_field_} does not match the {target}',
});
export default {
  name: 'registration',
  data() {
    return {
      user: {
        name: '',
        surname: '',
        email: '',
        password: '',
        address: '',
        confirmation: '',
        role: '',
      },
    };
  },
  components: {
    ValidationProvider,
    ValidationObserver,
    ValidationProviderConfirm,
  },
  mounted() {

    // this.userInfo();
  },
  methods: {
    userInfo() { // eslint-disable-next-line no-console
      // console.log(this.errors);
      authService.register(this, this.user);
      Vue.router.push('/login');
      // alert('Form has been submitted!');
    },
  },

};
