<template>
  <a-blockquote :type="getType()" :text="text" :quoted="quoted" :quoted_text="quoted_text" />
</template>

<script>
import ABlockquote from '../ABlockquote/ABlockquote'
import BlockquoteColorMixin from '../BlockquoteColor'
export default {
  name: 'ABlockquoteColor',
  components: { ABlockquote },
  mixins: [BlockquoteColorMixin],
  methods: {
    getType: () => new DOMException('please call a especific component color as a <a-blockquote-secondary>')
  }
}
</script>
