<template>
  <div class="card-header">
    <h3 class="card-title">
      <slot name="title_icon"/>
      {{title}}
    </h3>
    <div class="card-tools">
      <slot name="card_tools"/>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  props: { title: { type: String } }
}
</script>
