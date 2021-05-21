import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [
      {
        name: 'apple',
        img: '../assets/apple.jpg',
        price: 2.50
      },
      {
        name: 'orange',
        img: '../assets/orange.jpg',
        price: 4
      },
      {
        name: 'pear',
        img: '../assets/pear.jpg',
        price: 3.50
      },
      {
        name: 'strawberry',
        img: '../assets/strawberry.jpg',
        price: 0.10
      },
    ],
    cart: {
      products: {}
    }
  },
  mutations: {
    productIncrement: (state, payload) => {
      const dest = state.cart.products;
      const product = payload;

      if (!dest[product]) dest[product] = 0;
      dest[product]++;
    },
    productDecrement: (state, payload) => {
      const dest = state.cart.products;
      const product = payload;

      if (!dest[product]) dest[product] = 0;
      if (dest[product] === 1) delete dest[product];
      if (dest[product] > 0) dest[product]--;
    },
    productAmountByValue: (state, payload) => {
      const dest = state.cart.products;
      const product = payload.product;
      const amount = payload.amount;

      if (amount > 0) dest[product] = amount;
      if (amount <= 0) delete dest[product];
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
  }
})

