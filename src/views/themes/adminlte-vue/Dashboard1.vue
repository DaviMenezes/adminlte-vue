<template>
  <div class="wrapper">
    <Navbar/>
    <MenuLeft/>
    <PageContent/>
      <Footer/>
      <MenuRight/>
  </div>
</template>
<script>
import Navbar from './Navbar'
export default {
  components: {
    Navbar,
    MenuLeft: () => import('./MenuLeft'),
    PageContent: () => import('./PageContent'),
    Footer: () => import('./Footer'),
    MenuRight: () => import('./MenuRight')
  }
}
</script>
