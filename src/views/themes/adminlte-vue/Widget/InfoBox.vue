<template>
  <div class="info-box">
    <span :class="'info-box-icon ' + icon_class + ' ' + elevation">
      <i :class="icon"></i>
    </span>

    <div class="info-box-content">
      <span class="info-box-text">{{text}}</span>
      <span class="info-box-number">{{number}}</span>
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
    elevation: { default: 'elevation-1' }
  }
}
</script>
