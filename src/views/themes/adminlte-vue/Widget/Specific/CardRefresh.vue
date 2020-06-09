<template>
  <Card class="card-primary">
    <CardHeader :title="title" slot="header">
      <template slot="tools">
        <button type="button" @click="refreshBody" class="btn btn-tool"><i class="fas fa-sync-alt"></i></button>
      </template>
    </CardHeader>
    <CardBody slot="body" class="text-center">
      <div class="spinner-border" role="status" v-if="loadingLocal">
        <span class="sr-only">Loading...</span>
      </div>
      <span v-else>{{bodyLocal}}</span>
    </CardBody>
  </Card>
</template>
<script>
import Card from '../Card/Card'
import CardHeader from '../Card/CardHeader'
import CardBody from '../Card/CardBody'

export default {
  components: {
    Card,
    CardHeader,
    CardBody
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
    loading: { type: Boolean, default: false }
  },
  inject: ['eventBus'],
  created () {
    this.eventBus.$on('updatingBody', () => {
      this.setLoading(true)
    })

    this.eventBus.$on('updateBody', (body) => {
      this.bodyLocal = body
      this.loadingLocal = false
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
