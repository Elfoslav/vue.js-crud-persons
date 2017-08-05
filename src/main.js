// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vueResource from 'vue-resource'
import VeeValidate from 'vee-validate'
import _ from 'lodash'
require('./styles.css')
import '@/assets/semantic-ui/semantic.css'

Vue.config.productionTip = false
Vue.use(vueResource)
Vue.use(VeeValidate)
Vue.use(_) // not used in app, just used as an example how to include it

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
