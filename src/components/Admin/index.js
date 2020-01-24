import Vue from 'vue';
import { ValidationProvider } from 'vee-validate/dist/vee-validate.full.esm';
import { ValidationObserver } from 'vee-validate';
import router from '../../../router/index';
import adminService from '../../services/admin';
import userService from '../../services/user';
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
    await userService.user(this);
    adminService.getAdminsProducts(this);
    console.log('this products', this.products);
  },
  methods: {
    Logout() {
      authService.logout();
    },
    addProduct() {
      adminService.storeProduct(this, this.product);
      this.product = {
        name: null,
        price: null,
        quantity: null,
      };
      // this.$refs.observer.reset();
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
          adminService.updatePrice(this, payload, product.id);
        }
      }
    },
    updateQuantity(product) {
      const payload = {
        quantity: parseInt(product.quantity),
      };
      if (payload.quantity > 0) {
        adminService.updateQuantity(payload, product.id);
      }
    },
    removeOrder(productId, key) {
      const vm = this;
      vm.products[key].disabled = true;
      adminService.deleteProduct(this, productId);
    },
  },
};
