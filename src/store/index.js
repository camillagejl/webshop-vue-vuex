import Vue from 'vue'
import Vuex from 'vuex'
import appleImg from '../assets/apple.jpg';
import orangeImg from '../assets/orange.jpg';
import pearImg from '../assets/pear.jpg';
import strawberryImg from '../assets/strawberry.jpg';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [
      {
        name: 'apple',
        img: appleImg,
        price: 2.50
      },
      {
        name: 'orange',
        img: orangeImg,
        price: 4
      },
      {
        name: 'pear',
        img: pearImg,
        price: 3.50
      },
      {
        name: 'strawberry',
        img: strawberryImg,
        price: 0.10
      },
    ],
    cart: {
      products: {
      }
    }
  },
  mutations: {
    productIncrement: (state, payload) => {
      const dest = state.cart.products;
      const product = payload;


      if (!dest[product]) Vue.set(dest, product, 0);
      dest[product]++;
    },
    productDecrement: (state, payload) => {
      const dest = state.cart.products;
      const product = payload;

      if (!dest[product]) Vue.set(dest, product, 0);
      if (dest[product] === 1) delete dest[product];
      if (dest[product] > 0) dest[product]--;
    },
    productAmountByValue: (state, payload) => {
      const dest = state.cart.products;
      const product = payload.product;
      const amount = payload.amount;

      if (amount > 0) Vue.set(dest, product, amount);
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

