<template>
  <Card class="bg-gradient-success" >
    <template slot="card_header">
      <CardHeader class="border-0" title="Calendar">
        <template slot="title_icon"><i class="far fa-calendar-alt"></i></template>
        <template slot="card_tools">
          <div class="btn-group">
            <button type="button" class="btn btn-success btn-sm dropdown-toggle" data-toggle="dropdown" data-offset="-52">
              <i class="fas fa-bars"></i></button>
            <div class="dropdown-menu" role="menu">
              <a href="#" class="dropdown-item">Add new event</a>
              <a href="#" class="dropdown-item">Clear events</a>
              <div class="dropdown-divider"></div>
              <a href="#" class="dropdown-item">View calendar</a>
            </div>
          </div>
          <button type="button" class="btn btn-success btn-sm" data-card-widget="collapse">
            <i class="fas fa-minus"></i>
          </button>
          <button type="button" class="btn btn-success btn-sm" data-card-widget="remove">
            <i class="fas fa-times"></i>
          </button>
        </template>
      </CardHeader>
    </template>
    <template slot="card_body">
      <CardBody class="pt-0">
        <div id="calendar" style="width: 100%"></div>
        <b-calendar v-model="value" @context="onContext" locale="en-US" width="100%" class="bg-transparent"></b-calendar>
      </CardBody>
    </template>
  </Card>
</template>
<script>
import Card from '../../../../adminlte-vue/Widget/Card/Card'
import CardHeader from '../../../../adminlte-vue/Widget/Card/CardHeader'
import CardBody from '../../../../adminlte-vue/Widget/Card/CardBody'
import $ from 'jquery'
window.jQuery = window.$ = $
require('bootstrap-datepicker')
require('moment')

export default {
  components: {
    Card,
    CardHeader,
    CardBody
  },
  data () {
    return {
      value: '',
      context: null
    }
  },
  props: {},
  mounted () {
    // $(document).ready(function () {
    //   $(function () {
    //     $('#calendar').datetimepicker({
    //       format: 'L',
    //       inline: true
    //     })
    //   })
    // })
  },
  methods: {
    onContext (ctx) {
      this.context = ctx
    }
  }
}
</script>
