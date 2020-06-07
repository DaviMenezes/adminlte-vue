<template>
  <div class="info-box">
    <span :class="getIconClass()">
      <i :class="icon"></i>
    </span>

    <div class="info-box-content">
      <span class="info-box-text">{{text}}</span>
      <span class="info-box-number">{{number}}</span>
      <slot name="content_footer"></slot>
    </div>
  </div>
</template>
<script>
export default {
  data () { return { } },
  props: {
    icon: {},
    icon_class: {},
    text: {},
    number: {},
    no_elevation: { type: Boolean, default: true },
    elevation: { default: 'elevation-1' }
  },
  methods: {
    getIconClass () {
      return 'info-box-icon ' + this.icon_class + ' ' + (this.no_elevation ? '' : this.elevation)
    }
  }
}
</script>
