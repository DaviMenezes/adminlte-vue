<template>
  <div class="small-box">
    <!-- Loading (remove the following to stop the loading)-->
    <div class="overlay" v-if="loading">
      <i class="fas fa-3x fa-sync-alt"></i>
    </div>
    <div class="inner">
      <slot name="value"></slot>
      <slot name="text"></slot>
    </div>
    <div class="icon">
      <i :class="icon"></i>
    </div>
    <a href="#" class="small-box-footer">{{action_text}} <i class="fas fa-arrow-circle-right"></i></a>
  </div>
</template>

<script>
export default {
  name: 'ACardIndicator',
  props: {
    action_text: { type: String, default: 'More info' },
    icon: { type: String },
    loading: { type: Boolean, default: false }
  }
}
</script>

<style scoped>

</style>
