import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// This is where we create the app itself. We give this new instance of Vue:
// - router, so that we can route between views
// - store, so that our store is available to the whole app
// - App; our App component, which contains our main design and RouterView.
// This will be rendered to the #app div in index.html
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

