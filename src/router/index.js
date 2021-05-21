import Vue from 'vue'
import VueRouter from 'vue-router'
import ProductsView from "../views/ProductsView";
import CheckoutView from "../views/CheckoutView";
import CartView from "../views/CartView";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'ProductsView',
    component: ProductsView
  },
  {
    path: '/cart',
    name: 'CartView',
    component: CartView
  },
  {
    path: '/checkout',
    name: 'CheckoutView',
    component: CheckoutView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
