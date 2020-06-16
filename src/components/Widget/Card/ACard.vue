<template>
  <div :class="getClasses">
    <slot name="header"/>

    <slot name="body"/>

    <slot name="footer"/>

    <slot/>
  </div>
</template>
<script>
export default {
  name: 'ACard',
  data () {
    return {
      collapsed_local: this.collapsed
    }
  },
  props: {
    collapsed: Boolean
  },
  computed: {
    getClasses () {
      return 'card' + (this.collapsed_local ? ' collapsed-card' : '')
    }
  }
}
</script>
