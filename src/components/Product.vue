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
                :value="parseInt(cart.products[product.name]) || 0"
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
import {mapMutations, mapState} from "vuex";

export default {
  name: "Product",
  props: {
    product: Object,
    productAmount: Number
  },
  computed: {
      // mapState selects a specific part of the state.
      ...mapState([
        'cart'
      ]),
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

      this.$store.commit(
          'productAmountByValue',
          {
            product: this.product.name,
            amount: newAmount
          })
    }
  }
}
</script>

<style scoped>
.product {
  height: 100%;
  box-sizing: border-box;
  background-color: #FFFFFF;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.productTitle {
  font-size: 24px;
  font-weight: normal;
  margin: 0;
}

.productImage img {
  max-width: 100%;
  box-sizing: border-box;

}

.productAmountInput {
  display: flex;
}

.productAmountInput input {
  display: inline-block;
  margin: 0 8px;
}
</style>