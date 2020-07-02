<template>
  <div :class="getClasses">
    <slot name="header" v-html="title">
      <a-card-header>{{title}}</a-card-header>
    </slot>

    <slot/>

    <slot name="footer"/>
  </div>
</template>
<script>
import ACardHeader from '@/components/Widget/Card/CardHeader/ACardHeader'
export default {
  name: 'ACard',
  components: { ACardHeader },
  data () {
    return {
      collapsed_local: this.collapsed
    }
  },
  props: {
    collapsed: Boolean,
    title: String
  },
  computed: {
    getClasses () {
      return 'card' + (this.collapsed_local ? ' collapsed-card' : '')
    }
  }
}
</script>
