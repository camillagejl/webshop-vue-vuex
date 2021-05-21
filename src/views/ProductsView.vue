<template>
  <div class="productsView">
      <Products
          :products="products"
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
    ...mapState([
        'products'
    ]),
  }
}
</script>
