<template>
  <div class="widget-user-image">
    <img :class="'img-' + type_local +' ' + elevation_local" :src="src_local" :alt="alt">
  </div>
</template>
<script>
export default {
  name: 'AUserImage',
  data () {
    return {
      type_local: this.type,
      elevation_local: this.elevation,
      src_local: this.src
    }
  },
  props: {
    type: { type: String, default: 'circle' },
    elevation: { type: String, default: 'elevation-2' },
    src: { type: String },
    alt: { type: String }
  }
}
</script>
