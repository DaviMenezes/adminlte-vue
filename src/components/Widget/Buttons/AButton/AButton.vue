<template>
  <button :type="type" :class="getClasses()">
    <slot v-html="content">
      {{content}}
    </slot>
  </button>
</template>

<script>
import typeEnum from '@/components/Widget/Buttons/typeEnum'
import variantEnum from '@/components/Widget/Buttons/variantEnum'
import sizeEnum from '@/components/Widget/Buttons/sizeEnum'
export default {
  name: 'AButton',
  props: {
    /** @type String
     *  types: button, submit, reset */
    type: { type: String, default: typeEnum.button, validator: (val) => Object.keys(typeEnum).includes(val) },
    /** @type variantEnum
     * variants: danger, dark, default, flat, info, light, primary, secondary, success, warning, outline-danger, outline-dark, outline-info, outline-light, outline-primary, outline-secondary, outline-success, outline-warning */
    variant: {
      type: String,
      default: variantEnum.default,
      validator: (val) => {
        val = val.replace('_', '-')
        return Object.values(variantEnum).includes(val)
      }
    },
    content: { type: String },
    /** @type sizeEnum
     * btn-xs, btn-sm, btn-lg */
    size: { type: String, validator: (val) => Object.keys(sizeEnum).includes(val) },
    flat: { type: Boolean },
    disabled: { type: Boolean },
    block: { type: Boolean }
  },
  created () {
    if (this.flat === '') {
      this.flat = true
    }
    if (this.disabled === '') {
      this.disabled = true
    }
  },
  methods: {
    getClasses () {
      let str = 'btn'
      if (this.block) {
        str += ' btn-block'
      }
      if (this.variant !== undefined) {
        if (this.variant.indexOf('gradient') !== -1) {
          str += ' ' + this.variant
        } else {
          str += ' btn-' + this.variant
        }
      }
      if (this.size) {
        str += ' btn-' + this.size
      }
      if (this.flat) {
        str += ' btn-flat'
      }
      if (this.disabled) {
        str += ' disabled'
      }
      return str
    }
  }
}
</script>
