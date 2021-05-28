<template>
  <div>
    <div
        v-if="products.length !== 0"
        class="products"
    >
      <div v-for="product in products">
        <Product
            :product="product"
            :productAmount="cart.products[product.name] || 0"
        />
      </div>

    </div>

    <div
        v-if="!products || products.length === 0"
    >
      {{ noProductsFound }}
    </div>

  </div>
</template>

<script>
import Product from "./Product";
import {mapState} from "vuex";

export default {
  name: "Products",
  components: {
    Product
  },
  props: {
    products: Array,
    noProductsFound: String
  },
  computed: {
    // mapState selects a specific part of the state.
    ...mapState([
      'cart'
    ]),
  }
}
</script>

<style scoped>
.products {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 16px;
  margin: 0;
}
</style>