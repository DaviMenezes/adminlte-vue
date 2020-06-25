<template>
  <div :class="getClass()">
    <div :class="'progress-bar bg-'+type+' '+getStripedClass()" role="progressbar"
         :aria-valuenow="value" :aria-valuemin="min" :aria-valuemax="max" :style="'height: '+value+'%'">
      <span class="sr-only">{{value}}%</span>
    </div>
  </div>
</template>

<script>
const typeEnum = {
  primary: 'primary',
  success: 'success',
  info: 'info',
  warning: 'warning',
  danger: 'danger'
}
const sizeEnum = {
  sm: 'progress-sm',
  xs: 'progress-xs',
  xxs: 'progress-xxs'
}
export default {
  name: 'AProgressbar',
  props: {
    vertical: Boolean,
    /** valid types: primary, 'success', info, warning, danger */
    type: {
      type: String,
      default: typeEnum.primary,
      validator: (val) => Object.values(typeEnum).includes(val)
    },
    /** valida sizes: sm, xs, xxs */
    size: { type: String, required: false, validator: (val) => Object.keys(sizeEnum).includes(val) },
    striped: Boolean,
    value: { type: [String, Number] },
    min: { type: [String, Number], default: 0 },
    max: { type: [String, Number], default: 100 }
  },
  methods: {
    getClass () {
      return 'progress active' + (this.vertical ? ' vertical' : '') + ' ' + this.size
    },
    getStripedClass () {
      return this.striped ? 'progress-bar-striped' : ''
    }
  }
}
</script>
