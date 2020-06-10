import Vue from 'vue'
import App from './App.vue'
import router from './router'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import $ from 'jquery/dist/jquery.min'
import LteComponents from './components'

window.$ = window.jQuery = $
$.extend(require('jquery-ui'))

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

// register lte-vue-components
const components = {}
Object.keys(LteComponents).forEach(component => {
  const comp = LteComponents[component]

  components[comp.name] = Vue.component(comp.name, comp)
})
console.log(components)
new Vue({
  components: {
    ...components
  },
  router,
  render: h => h(App)
}).$mount('#app')
