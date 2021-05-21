<template>
  <div class="product">
  {{ product.name }}
  </div>
</template>

<script>
export default {
  name: "Product",
  props: {
    product: Object
  }
}
</script>

<style scoped>

</style>