<template>
  <blockquote :class="'quote-'+type">
    <p v-html="text"></p>
    <small>
      <span v-html="quoted_text"></span>
      <cite :title="quoted">{{quoted}}</cite>
    </small>
  </blockquote>
</template>

<script>
import typeEnum from '../typesEnum'
import BlockquoteColor from '../BlockquoteColor'
export default {
  name: 'ABlockquote',
  extends: BlockquoteColor,
  props: {
    /** valid types: blue, cyan, danger, dark, fuchsia, gray, ', green, indigo, info, light, lightblue, lime, maroon, navy, olive, purple, red, secondary, success, teal, warning, white, yellow */
    type: { type: String, default: typeEnum.primary, validator: (val) => Object.keys(typeEnum).includes(val) }
  }
}
</script>
