<template>
  <a-card class="card-warning">
    <a-card-header :title="title_local" slot="header"/>
    <b-overlay
      slot="body"
      :show="loading_local"
      rounded="true"
      opacity="0.10"
      variant="secondary"
      spinner-small
      :spinner-type="spinner_type"
      spinner-variant="primary"
      :class="body_class_local"
    >
      <a-card-body class="text-center">
        <b-overlay
          :show="loading_local"
          spinner-variant="primary"
          spinner-type="none"
          spinner-small
          rounded="sm"
          @hidden="onHidden"
        >
          <div v-html="body_local"/>
        </b-overlay>
        <b-button
          v-if="!loaded"
          variant="outline-primary"
          size="sm"
          :ref="btn_ref"
          @click="clicked()"
        >load</b-button>
      </a-card-body>
    </b-overlay>
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
      spinner_type: 'none'
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
    body_loading: { type: Boolean, default: true }
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

</style>
