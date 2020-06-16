<template>
  <div class="wrapper">
    <Navbar/>
    <MenuLeft/>
    <Dashboard1/>
    <Footer/>
    <MenuRight/>
  </div>
</template>
<script>
export default {
  components: {
    Navbar: () => import('../../../../../src/components/Navbar'),
    MenuLeft: () => import('../MenuLeft'),
    Dashboard1: () => import('../../../../../src/components/Pages/Dashboards/1/Dashboard1'),
    Footer: () => import('../Footer'),
    MenuRight: () => import('../MenuRight')
  },
  data () { return { } },
  props: { }
}
</script>
