import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Dashboard1 from '../views/themes/adminlte-vue/Dashboard1.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/theme', component: Dashboard1
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
