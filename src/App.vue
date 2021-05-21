<template>
  <div id="app" class="App">
    <header>
      <nav>
        <ul>
          <li>
            <router-link to="/" class="pageTitle">Vue Vuex Grocery Shop</router-link>
          </li>
          |
          <li>
            <router-link to="/">Products</router-link>
          </li>
          |
          <li>
            <router-link to="/cart">Cart</router-link>
          </li>
          |
          <li>
            <router-link to="/checkout">Checkout</router-link>
          </li>
        </ul>
      </nav>
    </header>

    <router-view/>
  </div>
</template>

<style lang="scss">
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
  sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
  monospace;
}


html {
  background-color: pink;
}

.App {
  background-color: #F5F5F5;
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px;
}

.products {
  margin-top: 32px;
}

h1 {
  margin: 16px 0;
}

/* NAVIGATION */

nav {
  background-color: #FEE6F7;
  padding: 16px 0;
}

.pageTitle {
  color: grey;
  font-weight: bold;
}

nav ul {
  list-style-type: none;
  margin: 0;
}

nav li {
  display: inline-block;
  padding: 0 16px;
  margin: 0;
}

nav li:first-child {
  padding: 0 16px 0 0;
}

nav a {
  text-decoration: none;
}

</style>
