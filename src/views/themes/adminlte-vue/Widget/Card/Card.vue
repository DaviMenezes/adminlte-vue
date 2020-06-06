<template>
  <div class="card">
    <slot name="card_header"/>

    <slot name="card_body"/>

    <slot name="card_footer"/>
  </div>
</template>
<script>
export default {
  props: {
    title: { type: String }
  }
}
</script>

<style scoped>

</style>
