<template>
  <div class="checkoutView">

    <h1>
      Checkout
    </h1>

    <div v-if="!productsInCart || productsInCart.length > 0">
      <table>
        <thead>
          <tr>
            <th>
              Product
            </th>
            <th>
              Amount
            </th>
            <th>
              Price
            </th>
          </tr>
        </thead>

        <tbody>
          <ProductsListItem v-for="product in productsInCart"
                            :product="product"
                            :productAmount="cart.products[product.name] || 0"
          />
        </tbody>

      </table>
    </div>


    <div
        v-if="!productsInCart || productsInCart.length === 0"
    >
      Your cart is empty.
    </div>

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
import {mapGetters, mapState} from "vuex";
import ProductsListItem from "../components/ProductsListItem";

export default {
  name: "CheckoutView",
  components: {
    ProductsListItem
  },
  computed: {
    // mapState selects a specific part of the state.
    ...mapState([
      'cart'
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
  border: 1px solid lightgrey;
}

th,
td {
  min-width: 150px;
  text-align: left;
  padding: 8px;
  margin: 10px;
  border: 1px solid lightgrey;
}

tr:nth-child(even) {
  background-color: #dddddd;
}

thead tr {
  background-color: #dddddd;
}

.totalPrice {
  font-size: 24px;
  text-align: right;
}
</style>