import Vue from 'vue';
import { ValidationProvider } from 'vee-validate/dist/vee-validate.full.esm';
import { ValidationObserver } from 'vee-validate';
import router from '../../../router/index';
import authService from '../../services/auth';
// import { bus } from '../../main'
Vue.router = router;

export default {
  name: 'User',
  data() {
    return {
      user: {},
      product: {
        name: null,
        price: null,
        quantity: null,
      },
      number: 0,
      products: [],
    };
  },
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  async mounted() {
    await authService.user(this);
    authService.getAllProducts(this);
    // if(this.user.orders_count === 0) {
    //   this.user.orders_count = '';
    // }
  },
  methods: {
    Logout() {
      authService.logout();
    },
    addToCard(product) {
      authService.storeToCard({
        user_id: this.user.id,
        product_id: product.id,
        number: parseInt(product.newQuantity),
      }, this);
      console.log('myAlls', product);
    },
    orders() {
      Vue.router.push({ name: 'Order' });
    },
  },
};
