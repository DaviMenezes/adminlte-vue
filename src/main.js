import Vue from 'vue'
import App from './App.vue'
import router from './router'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import $ from 'jquery/dist/jquery.min'
window.$ = window.jQuery = $
$.extend(require('jquery-ui'))
// import 'daterangepicker/daterangepicker.js'
// jQuery.widget.bridge('uibutton', jQuery.ui.button)
// require('bootstrap/dist/js/bootstrap.bundle.min')
// require('jqvmap/dist/jquery.vmap.min')
// require('jqvmap/dist/maps/jquery.vmap.usa')
// require('jquery-knob/dist/jquery.knob.min')
// require('moment/min/moment.min')
// require('tempusdominus-bootstrap-4/src/js/tempusdominus-bootstrap-4')
// require('summernote/dist/summernote-bs4.min')
// require('overlayscrollbars/js/jquery.overlayScrollbars.min')
// require('chart.js/dist/Chart.min')
// require('sparklines/source/sparkline')
// require('../src/views/themes/admin-lte/dist/js/adminlte')
// require('../public/dist/js/pages/dashboard')

Vue.config.productionTip = false
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
