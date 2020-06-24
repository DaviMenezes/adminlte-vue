<template>
  <div id="donut-chart" style="height: 300px;"></div>
</template>

<script>
import $ from 'jquery'
require('flot')
require('flot/source/jquery.flot.resize')
require('flot/source/jquery.flot.pie')
export default {
  name: 'AChartFlotDonut',
  data () {
    return {
      donutData: [
        {
          label: 'Series2',
          data: 30,
          color: '#3c8dbc'
        },
        {
          label: 'Series3',
          data: 20,
          color: '#0073b7'
        },
        {
          label: 'Series4',
          data: 50,
          color: '#00c0ef'
        }
      ]
    }
  },
  props: {
  },
  mounted () {
    $.plot('#donut-chart', this.donutData, {
      series: {
        pie: {
          show: true,
          radius: 1,
          innerRadius: 0.5,
          label: {
            show: true,
            radius: 2 / 3,
            formatter: this.labelFormatter,
            threshold: 0.1
          }

        }
      },
      legend: {
        show: false
      }
    })
  },
  methods: {
    labelFormatter (label, series) {
      return '<div style="font-size:13px; text-align:center; padding:2px; color: #fff; font-weight: 600;">' +
        label +
        '<br>' +
        Math.round(series.percent) + '%</div>'
    }
  }
}
</script>
