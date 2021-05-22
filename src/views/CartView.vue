<template>
  <div class="cartView">
    <h1>
      Cart
    </h1>

    <Products
        :products="productsInCart"
        :noProductsFound="'Your cart is empty'"
    />

    <div
        v-if="productsInCart && productsInCart.length > 0"
    >
    <div class="totalAmount">
      Total amount of products: {{ totalsInCart.amount }}
    </div>
    <div class="totalPrice">
      Total price: {{ totalsInCart.price }} kr
    </div>
    </div>

  </div>
</template>

<script>
import {mapState, mapGetters} from "vuex";
import Products from "../components/Products";

export default {
  name: "CartView",
  components: {
    Products
  },
  computed: {
    // mapState selects a specific part of the state.
    ...mapState([
      'products'
    ]),
    ...mapGetters([
        'productsInCart',
        'totalsInCart'
    ])
  }
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