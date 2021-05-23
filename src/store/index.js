import Vue from 'vue'
import Vuex from 'vuex'
import {fetchAPI} from "./productsAPI";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        productsStatus: 'idle',
        products: [],
        cart: {
            products: {}
        }
    },
    mutations: {
        // Adding products to the products state
        populateProducts: (state, payload) => {
            state.products = payload;
        },
        changeStatus: (state, payload) => {
            state.productsStatus = payload;
        },

        // Mutating cart product values
        productIncrement: (state, payload) => {
            const dest = state.cart.products;
            const product = payload;

            if (!dest[product]) Vue.set(dest, product, 0);
            dest[product]++;
        },
        productDecrement: (state, payload) => {
            const dest = state.cart.products;
            const product = payload;

            if (dest[product]) {
                if (dest[product] === 1) {
                    dest[product]--;
                    delete dest[product];
                }
                if (dest[product] > 0) dest[product]--;
            }
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
        fetchProducts(context) {
            context.commit('changeStatus', 'loading');
            fetchAPI()
                .then(response => {
                    console.log(response);

                    context.commit('populateProducts', response.data);
                    context.commit('changeStatus', 'loaded');
                })
                .catch(error => {
                    console.log('error', error);
                    context.commit('changeStatus', 'failed');
                });

        }
    },
    modules: {},
    getters: {
        productsInCart(state, getters) {
            const products = [];

            for (const [cartProduct, amount] of Object.entries(state.cart.products)) {

                // Loops over all products to find the the product information.
                state.products.forEach(product => {
                    if (product.name === cartProduct) {

                        // Adds to products array with the information for each product in the cart.
                        products.push(product);
                    }
                })
            }

            return products;
        },
        totalsInCart(state, getters) {
            let totalPrice = 0;
            let productsAmount = 0;

            for (const [cartProduct, amount] of Object.entries(state.cart.products)) {

                // Loops over all products to find the the product information.
                state.products.forEach(product => {
                    if (product.name === cartProduct) {

                        // Calculates the accumulated price for this product, and adds this to the total price.
                        totalPrice += product.price * amount;

                        // Adds the amount of this product to the total productsAmount.
                        productsAmount += amount;
                    }
                })
            }

            return {
                price: (Math.round((totalPrice) * 100) / 100).toFixed(2),
                amount: productsAmount
            }
        }
    }
})

