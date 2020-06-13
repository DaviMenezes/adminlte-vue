<template>
  <router-link :to="getRoute()" :class="isActive">
    <i :class="'nav-icon ' + icon"></i>
    <p>
      {{label_local}}
      <slot name="info">
        <span :class="infoClasses">{{info_label}}</span>
      </slot>
    </p>
  </router-link>
</template>

<script>
export default {
  name: 'ARouterLink',
  data () {
    return {
      label_local: this.label
    }
  },
  props: {
    page: { type: String },
    label: {},
    info_label: {},
    info_direction: {
      type: String,
      default: 'left',
      validator: function (direction) {
        return ['left', 'right'].indexOf(direction) !== -1
      }
    },
    icon: String,
    info_type: {
      type: String,
      default: 'primary',
      validator: function (value) {
        return ['danger', 'dark', 'info', 'light', 'pill', 'primary', 'secondary', 'success', 'warning'].indexOf(value) !== -1
      }
    }
  },
  methods: {
    getRoute () {
      return '/layout/' + (this.$route.params.layout || 'one') + '/' + this.page
    }
  },
  computed: {
    isActive () {
      return 'nav-link' + (this.$route.params.page === this.page ? ' active' : '')
    },
    infoClasses () {
      return 'badge badge-' + this.info_type + ' ' + this.info_direction
    }
  }
}
</script>
