import Vue from 'vue'
import VueRouter from 'vue-router'
// import LayoutDefault from '../views/themes/adminlte-vue/Layouts/LayoutDefault'
import Layout1 from '../views/themes/adminlte-vue/Layouts/Layout1'
// import Dashboard1 from '../views/themes/adminlte-vue/Pages/Dashboards/1/Dashboard1'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout1
  },
  {
    path: '/layout/',
    component: Layout1,
    children: [
      { path: ':layout/:page?', component: Layout1 }
      // { path: 'two/:page?', component: Layout2 },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
