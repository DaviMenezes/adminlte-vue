<template>
  <ol class="breadcrumb float-sm-right">
    <li v-for="(item, index) in items" :key="index"
        :class="item.class ? 'breadcrumb-item ' + item.class : 'breadcrumb-item '">
      <a href="#" v-if="item.url">
        <span v-if="item.label">{{item.label}}</span>
        <span v-else>Home</span>
      </a>
      <span v-else>
        <span v-if="item.label">{{item.label}}</span>
        <span v-else>Home</span>
      </span>
    </li>
  </ol>
</template>
<script>
export default {
  props: {
    items: { type: Array }
  }
}
</script>

<style scoped>

</style>
