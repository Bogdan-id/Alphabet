import Vue from 'vue'
import App from './App.vue'
import { router } from './router'
import store from './store'
import './registerServiceWorker'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = true

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app') // “mount” - means the moment when your Component is inserted into the DOM
