<template>
  <div :class="'alert '+getType+' '+getDismissible">
    <button v-if="dismissible" type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
    <h5><i :class="'icon '+icon+' mr-2'"></i> {{getTitle}}</h5>
    <div v-html="text"></div>
  </div>
</template>

<script>
const typeEnum = {
  danger: 'danger',
  info: 'info',
  warning: 'warning',
  success: 'success'
}
export default {
  name: 'AAlert',
  data () {
    return {
      type_local: this.type,
      dismissible_local: this.dismissible
    }
  },
  props: {
    /** valida values: danger, info, warning, success */
    type: { type: String, validator: (val) => ['danger'].includes(val) },
    dismissible: { type: Boolean, default: true },
    icon: { type: String, default: 'fas fa-ban' },
    title: { type: String },
    text: String
  },
  computed: {
    getType () {
      return this.type_local ? 'alert-' + this.type_local : ''
    },
    getDismissible () {
      return this.dismissible_local ? 'alert-dismissible' : ''
    },
    getTitle () {
      if (this.type === typeEnum.danger) {
        return 'Danger!'
      }
      if (this.type === typeEnum.info) {
        return 'Info'
      }
      if (this.type === typeEnum.warning) {
        return 'Warning'
      }
      if (this.type === typeEnum.success) {
        return 'Success'
      }
      return ''
    }
  }
}
</script>
