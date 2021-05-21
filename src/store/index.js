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
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})

