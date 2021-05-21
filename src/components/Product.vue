<template>
  <div class="product">

    <h2 class="productTitle">
      {{ product.name.charAt(0).toUpperCase() + product.name.slice(1) }}
    </h2>
    <div class="productImage">
      <img :src="product.img" :alt="'Image of product: ' + product.name"/>
    </div>
    <div class="productBottom">
      <div class="productPrice">
        {{ priceFixed }} kr
      </div>
      <div class="productAmount">
        <label>
          Product amount
          <div class="productAmountInput">

            <button
                id="decrement"
                @click="productDecrement(product.name)"
            >
              -
            </button>
            <input
                type="text"
                name="productAmount"
                value="0"
                @change="updateAmount"
            />
            <button
                id="increment"
                @click="productIncrement(product.name)"
            >
              +
            </button>
          </div>
        </label>
      </div>
    </div>

  </div>
</template>

<script>
import {mapMutations} from "vuex";

export default {
  name: "Product",
  props: {
    product: Object
  },
  computed: {
    priceFixed() {
      // The price is taken from the product prop, but "beautified" here to have two decimals.
      return (Math.round((this.product.price) * 100) / 100).toFixed(2);
    }
  },
  methods: {
    ...mapMutations([
      'productIncrement',
      'productDecrement'
    ]),
    updateAmount(e) {
      // We use parseInt to be sure that the value is an integer.
      let newAmount = parseInt(e.target.value);

      // This makes sure that the amount will never be NaN (meaning the field can't be empty).
      // If the user deletes the number, it will become 0, so our reducer can handle the number properly.
      if (isNaN(newAmount)) newAmount = 0;

      // Dispatches the reducer with the product and the new amount.
      // dispatch(productAmountByValue({product: product.name, amount: newAmount}))
      console.log(newAmount);
    }
  }
}
</script>

<style scoped>

</style>