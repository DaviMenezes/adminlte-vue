<template>
  <a-card :class="color">
    <a-card-header :title="title" slot="header">
      <a-card-header-tools slot="tools">
        <a-card-header-tool-button-refresh ref="btn" v-on:click="refreshBody" :updating="loadingLocal"/>
      </a-card-header-tools>
    </a-card-header>
    <a-card-body class="text-center">
      <div class="spinner-border" role="status" v-if="loadingLocal">
        <span class="sr-only">Loading...</span>
      </div>
      <span v-else>{{bodyLocal}}</span>
    </a-card-body>
  </a-card>
</template>
<script>
import ACard from '../Card/ACard'
import ACardHeader from '../Card/CardHeader/ACardHeader'
import ACardBody from '../Card/ACardBody'
import colorProps from '@/components/Widget/Card/Color/Props'
import ACardHeaderTools from '@/components/Widget/Card/CardHeader/CardHeaderTools/ACardHeaderTools'
import ACardHeaderToolButtonRefresh from '@/components/Widget/Card/CardHeader/CardHeaderTools/ACardHeaderToolButtonRefresh'

export default {
  name: 'ACardRefresh',
  components: {
    ACardHeaderToolButtonRefresh,
    ACardHeaderTools,
    ACard,
    ACardHeader,
    ACardBody
  },
  data () {
    return {
      bodyLocal: this.body,
      loadingLocal: this.loading
    }
  },
  props: {
    title: { type: String },
    body: { type: String },
    loading: { type: Boolean, default: false },
    ...colorProps.props
  },
  mounted () {
    this.$on('updatingBody', () => {
      this.loadingLocal = true
    })

    this.$on('updateBody', (body) => {
      this.bodyLocal = body
      this.loadingLocal = false
      this.$refs.btn.$emit('updated')
    })
  },
  methods: {
    refreshBody () {
      this.$emit('refreshBody')
    },
    setLoading (value) {
      this.loadingLocal = value
    }
  }

}
</script>
