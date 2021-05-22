<template>
  <tr>
    <td>
      {{ product.name.charAt(0).toUpperCase() + product.name.slice(1) }}
    </td>
    <td>
      {{ productAmount }}
    </td>
    <td>
      {{ (Math.round((product.price * productAmount) * 100) / 100).toFixed(2) }} kr
    </td>
  </tr>
</template>

<script>
export default {
  name: "ProductsListItem",
  props: {
    product: Object,
    productAmount: Number
  }
}
</script>

<style scoped>

</style>