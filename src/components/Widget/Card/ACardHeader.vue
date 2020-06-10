<template>
  <div class="card-header">
    <slot>
      <h3 class="card-title">
        <slot name="title_icon"/>
        {{title}}
      </h3>
    </slot>
    <div class="card-tools">
      <slot name="tools"/>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ACardHeader',
  props: { title: { type: String } }
}
</script>
