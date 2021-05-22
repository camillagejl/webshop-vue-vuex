import Vue from 'vue'
import Vuex from 'vuex'
import appleImg from '../assets/apple.jpg';
import orangeImg from '../assets/orange.jpg';
import pearImg from '../assets/pear.jpg';
import strawberryImg from '../assets/strawberry.jpg';
import {fetchProducts} from "./productsAPI";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        products: [
            // {
            //   name: 'apple',
            //   img: appleImg,
            //   price: 2.50
            // },
            // {
            //   name: 'orange',
            //   img: orangeImg,
            //   price: 4
            // },
            // {
            //   name: 'pear',
            //   img: pearImg,
            //   price: 3.50
            // },
            // {
            //   name: 'strawberry',
            //   img: strawberryImg,
            //   price: 0.10
            // },
        ],
        cart: {
            products: {}
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
        },
        populateProducts: (state, payload) => {
            state.products = payload;
        }
    },
    actions: {
        async fetchProductsAsync(context) {

                const response = await fetchProducts();
                console.log(response);

                context.commit('populateProducts', response.data);

                return response.data;
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

