import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.min.css'
import Vue from 'vue'
import App from './App.vue'
import router from './router'

import $ from 'jquery/dist/jquery.min'
import LteComponents from './components'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

Object.keys(LteComponents).forEach(component => {
  const comp = LteComponents[component]
  Vue.component(comp.name, comp)
})

window.$ = window.jQuery = $
$.extend(require('jquery-ui'))

Vue.config.productionTip = false

Vue.use(BootstrapVue)
// Vue.use(IconsPlugin)
Vue.use(BootstrapVueIcons)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
