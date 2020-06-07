<template>
  <div class="wrapper">
    <Navbar/>
    <MenuLeft/>
    <component :is="page()"></component>
    <Footer/>
    <MenuRight/>
  </div>
</template>
<script>
import Navbar from '../Navbar'
import Dashboard1 from '../Pages/Dashboards/1/Dashboard1'
import Dashboard2 from '../Pages/Dashboards/2/Dashboard2'
import Dashboard3 from '../Pages/Dashboards/3/Dashboard3'
export default {
  components: {
    Navbar,
    MenuLeft: () => import('../MenuLeft'),
    Footer: () => import('../Footer'),
    MenuRight: () => import('../MenuRight')
  },
  methods: {
    page () {
      const page = this.$route.params.page
      switch (page) {
        case 'dashboard1':
          return Dashboard1
        case 'dashboard2':
          return Dashboard2
        case 'dashboard3':
          return Dashboard3
        default :
          return Dashboard1
      }
    }
  }
}
</script>
