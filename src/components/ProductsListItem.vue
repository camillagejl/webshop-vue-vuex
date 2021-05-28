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

th,
td {
  min-width: 150px;
  text-align: left;
  padding: 8px;
  margin: 10px;
  border: 1px solid lightgrey;
}

</style>