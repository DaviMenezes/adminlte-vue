<template>
  <div :class="'callout callout-'+type">
    <slot name="title">
      <h5 v-if="title">{{title}}</h5>
    </slot>
    <slot name="text">
      <p v-html="text"></p>
    </slot>
  </div>
</template>

<script>
const TypeEnum = {
  danger: 'danger',
  info: 'info',
  warning: 'warning',
  success: 'success'
}
export default {
  name: 'ACallout',
  props: {
    /** valid values: danger, info, warning, success */
    type: { type: String, default: 'info', validator: (val) => Object.values(TypeEnum).includes(val) },
    title: String,
    text: String
  }
}
</script>
