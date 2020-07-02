<template>
  <a-card class="bg-gradient-success" >
    <a-card-header class="border-0" title="Calendar" slot="header">
      <template slot="title_icon"><i class="far fa-calendar-alt"></i></template>
      <a-card-header-tools slot="tools">
        <b-dropdown size="sm" variant="success" right>
          <template v-slot:button-content>
            <i class="fas fa-bars"></i>
          </template>
          <b-dropdown-item>Add new event</b-dropdown-item>
          <b-dropdown-item>Clear events</b-dropdown-item>
          <b-dropdown-divider/>
          <b-dropdown-item>View calendar</b-dropdown-item>
        </b-dropdown>

        <a-card-header-tool-button-collapse/>
        <a-card-header-tool-button-remove/>
      </a-card-header-tools>
    </a-card-header>
    <a-card-body class="pt-0">
        <div id="calendar" style="width: 100%"></div>
        <b-calendar v-model="value" @context="onContext" locale="en-US" width="100%" class="bg-transparent"></b-calendar>
      </a-card-body>
  </a-card>
</template>
<script>
import ACard from '@/components/Widget/Card/ACard'
import ACardHeader from '@/components/Widget/Card/CardHeader/ACardHeader'
import ACardBody from '@/components/Widget/Card/ACardBody'
import $ from 'jquery'
import ACardHeaderTools from '@/components/Widget/Card/CardHeader/CardHeaderTools/ACardHeaderTools'
import ACardHeaderToolButtonCollapse
  from '@/components/Widget/Card/CardHeader/CardHeaderTools/ACardHeaderToolButtonCollapse'
import ACardHeaderToolButtonRemove
  from '@/components/Widget/Card/CardHeader/CardHeaderTools/ACardHeaderToolButtonRemove'
window.jQuery = window.$ = $
require('bootstrap-datepicker')
require('moment')

export default {
  name: 'ACardCalendar',
  components: {
    ACardHeaderToolButtonRemove,
    ACardHeaderToolButtonCollapse,
    ACardHeaderTools,
    ACard,
    ACardHeader,
    ACardBody
  },
  data () {
    return {
      value: '',
      context: null
    }
  },
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
