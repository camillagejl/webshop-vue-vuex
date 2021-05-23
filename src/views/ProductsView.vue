<template>
  <div class="productsView">

    <h1>
      Products
    </h1>

    <Products
        :products="products"
        :noProductsFound="noProductsFound"
    />
  </div>
</template>

<script>
import Products from "../components/Products";
import {mapState} from "vuex";

export default {
  name: 'ProductsView',
  components: {
    Products
  },
  computed: {
    // mapState selects a specific part of the state.
    ...mapState([
      'products',
      'productsStatus'
    ]),
    noProductsFound() {
      let statusMessage = 'No products to display.';

      // When the productsStatus changes, the message on the page changes with it.
      if (this.productsStatus === 'loading') {
        statusMessage = 'Loading products...';
      }
      else if (this.productsStatus === 'failed') {
        statusMessage = 'Sorry, there was a problem loading the products.';
      }
      else {
        statusMessage = 'No products to display.';
      }

      return statusMessage;
    }
  }
}
</script>
