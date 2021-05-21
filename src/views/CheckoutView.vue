<template>
  <div class="checkoutView">
    <h1>
      Checkout
    </h1>
  </div>
</template>

<script>
export default {
  name: "CheckoutView"
}
</script>

<style scoped>
table {
  border-collapse: collapse;
}

th,
td {
  min-width: 150px;
  text-align: left;
  padding: 8px;
  margin: 10px;
  border: 1px solid lightgrey;
}

tr:nth-child(odd) {
  background-color: #dddddd;
}

.totalPrice {
  font-size: 24px;
  text-align: right;
}
</style>