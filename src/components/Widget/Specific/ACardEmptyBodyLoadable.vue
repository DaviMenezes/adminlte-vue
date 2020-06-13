<template>
  <a-card>
    <a-card-header :title="title_local" slot="header"/>
      <a-card-body class="text-center" slot="body">
          <div v-html="body_local"/>
      </a-card-body>
      <div :class="overlay_color ? 'overlay ' + overlay_color : 'overlay'" v-if="!loaded">
        <div class="_action_">
          <b-icon @click="clicked" icon="arrow-repeat" :animation="loading_local ? 'spin' : ''" shift-v="0" :class="action_background +` rounded-circle p-1`" variant="light" font-scale="1.8"></b-icon>
          <b-progress v-if="progress" :value="progress_value" :max="progress_max" class="mt-1" height="3px"/>
        </div>
      </div>
  </a-card>
</template>

<script>
export default {
  name: 'ACardEmptyBodyLoadable',
  data () {
    return {
      body_local: this.body,
      body_class_local: this.body_class,
      loading_local: this.loading,
      body_loading_local: this.body_loading,
      loaded: false,
      title_local: this.title,
      spinner_type: 'none',
      action_local: this.action
    }
  },
  props: {
    btn_ref: {
      type: String || Number,
      required: true
    },
    title: { type: String, required: true },
    body: { },
    body_class: { type: String },
    loading: { type: Boolean, default: false },
    body_loading: { type: Boolean, default: true },
    overlay_color: {
      type: String,
      default () { return 'light' },
      validation (str) {
        return ['light', 'dark'].indexOf(str) !== -1
      }
    },
    action_background: {
      type: String,
      default () { return 'bg-gray-dark' },
      validation (strClass) {
        const bgClass = [
          'bg-indigo',
          'bg-gray',
          'bg-gray-dark',
          'bg-active',
          'bg-fuchsia',
          'bg-cyan',
          'bg-dark',
          'bg-lightblue',
          'bg-black',
          'bg-blue',
          'bg-danger',
          'bg-green',
          'bg-gray-light',
          'bg-info',
          'bg-maroon',
          'bg-navy',
          'bg-olive',
          'bg-orange',
          'bg-pink',
          'bg-primary',
          'bg-purple',
          'bg-red',
          'bg-secondary',
          'bg-success',
          'bg-teal',
          'bg-transparent',
          'bg-warning',
          'bg-white',
          'bg-yellow'
        ]
        return bgClass.indexOf(strClass) !== -1
      }
    },
    action: {
      type: Object,
      validation (obj) {
        return !isNaN(obj.progress.value)
      }
    }
  },
  computed: {
    progress () {
      return this.action_local?.progress
    },
    progress_value () {
      return this.action_local?.progress?.value
    },
    progress_max () {
      return this.action_local.progress?.max
    }
  },
  methods: {
    clicked () {
      this.spinner_type = 'grow'
      this.$emit('cardButtonClicked', { comp: this, ref: this.btn_ref })
    },
    onHidden () {
      console.log('ref hidden:', this.$refs)
    }
  }
}
</script>

<style scoped>
._action_ :hover {cursor: pointer}
</style>
