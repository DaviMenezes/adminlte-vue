<template>
  <div class="small-box">
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
  props: {
    action_text: { type: String, default: 'More info' },
    icon: { type: String }
  }
}
</script>

<style scoped>

</style>
