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
      newPrice: null,
      samePrice: null,
      disable: false,
    };
  },
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  async mounted() {
    await authService.user(this);
    authService.getAdminsProducts(this);
    console.log('this products', this.products);
  },
  methods: {
    Logout() {
      authService.logout();
    },
    addProduct() {
      authService.storeProduct(this, this.product);
      this.product = {
        name: null,
        price: null,
        quantity: null,
      };
      //this.$refs.observer.reset();
    },
    editPrice(product) {
      console.log('product editing', product);
      product.editing = true;
      this.samePrice = product.price;
      this.newPrice = product.price;
    },
    updatePrice(product) {
      console.log('product updating', product);
      if (this.newPrice == '' || this.newPrice <= 0) {
        product.price = this.samePrice;
        product.editing = false;
        this.samePrice = null;
      } else {
        product.price = this.newPrice;
        product.editing = false;
        this.newPrice = null;
        const payload = {
          price: parseInt(product.price),
        };
        if (payload.price > 0) {
          authService.updatePrice(this, payload, product.id);
        }
      }
    },
    updateQuantity(product) {
      const payload = {
        quantity: parseInt(product.quantity),
      };
      if (payload.quantity > 0) {
        authService.updateQuantity(payload, product.id);
      }
    },
    removeOrder(productId) {
      const vm = this;
     // vm.disable = true;
      authService.deleteProduct(this, productId);
      // setTimeout(function(){
      //   vm.disable = false;
      // },2000);
    },
  },
};
