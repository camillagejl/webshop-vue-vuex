<template>
  <div class="productsView">

    <h1>
      Products
    </h1>

    <button
    @click="fetchProductsAsync"
    >
      Click me!
    </button>

    <Products
        :products="products"
        :noProductsFound="'Your cart is empty'"
    />
  </div>
</template>

<script>
import Products from "../components/Products";
import {mapState, mapActions} from "vuex";

export default {
  name: 'ProductsView',
  components: {
    Products
  },
  computed: {
    // mapState selects a specific part of the state.
    ...mapState([
      'products'
    ]),
  },
  methods: {
    ...mapActions([
        'fetchProductsAsync'
    ])
  }
}
</script>
