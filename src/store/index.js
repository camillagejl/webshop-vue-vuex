import Vue from 'vue'
import Vuex from 'vuex'
import {fetchProducts} from "./productsAPI";

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

        // Changes the productsStatus, so that we can display the relevant status message in productsView.
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
        fetchProductsAsync(context) {
            // When the function is first called, it changes the productsStatus to loading.
            context.commit('changeStatus', 'loading');

            // Fetches data from the API. As the API returns a promise, this function is async.
            fetchProducts()

                // If the data is fetched successfully:
                .then(response => {

                    context.commit('populateProducts', response.data);
                    context.commit('changeStatus', 'loaded');
                })

                // If an error occurs:
                .catch(error => {
                    context.commit('changeStatus', 'failed');
                });
        }
    },
    getters: {
        productsInCart(state, getters) {
            const products = [];

            // Loops over all products in the cart
            for (const [cartProduct, amount] of Object.entries(state.cart.products)) {

                // Loops over all products in store to find the the product information for the products in cart.
                state.products.forEach(product => {
                    if (product.name === cartProduct) {

                        // If a product is in the cart, the information about the product is added to the array.
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

