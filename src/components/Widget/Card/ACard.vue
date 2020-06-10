<template>
  <div class="card">
    <slot name="header"/>

    <slot name="body"/>

    <slot name="footer"/>
  </div>
</template>
<script>
export default {
  name: 'ACard'
}
</script>
