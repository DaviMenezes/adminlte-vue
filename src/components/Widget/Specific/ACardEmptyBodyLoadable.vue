<template>
  <a-card>
    <a-card-header :title="title_local" slot="header"/>
      <a-card-body class="text-center" slot="body">
          <div v-html="body_local"/>
      </a-card-body>
      <div :class="overlay_color ? 'overlay ' + overlay_color : 'overlay'" v-if="!loaded">
<!--        <b-overlay-->
<!--          :show="loading_local"-->
<!--          opacity="0.0"-->
<!--          spinner-variant="primary"-->
<!--        >-->
<!--          <p class="h1"-->
<!--          @click="clicked">-->
<!--            <b-icon @click="clicked" :icon="!loading_local ? 'arrow-repeat' : ''" class="rounded-circle bg-light p-2 cursor-wait" variant="light"></b-icon>-->
<!--          </p>-->
          <b-icon @click="clicked" icon="arrow-repeat" :animation="loading_local ? 'spin' : ''" shift-v="0" class="rounded-circle bg-danger p-2" variant="light" font-scale="3"></b-icon>

<!--        <b-button size="sm" variant="secondary" class="mb-2">-->
<!--        </b-button>-->

        <!--        </b-overlay>-->
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
    body_loading: { type: Boolean, default: true },
    overlay_color: { type: String, default: 'light' || 'dark' }
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
