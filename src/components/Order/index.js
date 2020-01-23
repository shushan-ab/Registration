import Vue from 'vue';
import router from '../../../router/index';
import authService from '../../services/auth';
// import { bus } from '../../main'
Vue.router = router;

export default {
  name: 'Order',
  data() {
    return {
      selectedProducts: {},
      totalPrice: 0,
      shipping: 6.94,
      PriceAndShipping: 0,
    };
  },
  mounted() {
    authService.getProductsFromCard(this);
  },
  methods: {
    removeOrder(productId) {
      // eslint-disable-next-line no-console
      console.log(productId);
      authService.deleteOrderedProduct(this, productId);
    },
    updateQuantity(product) {
      const payload = {
        quantity: parseInt(product.product_quantity),
      };
      authService.updateOrderQuantity(this, product.id, payload);
    },
  },
};
