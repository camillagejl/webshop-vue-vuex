<template>
  <div class="products">
    <div v-for="product in products">
      <Product
          :product="product"
      />
    </div>
  </div>
</template>

<script>
import Product from "./Product";

export default {
  name: "Products",
  components: {
    Product
  },
  props: {
    products: Array
  }
}
</script>

<style scoped>

</style>