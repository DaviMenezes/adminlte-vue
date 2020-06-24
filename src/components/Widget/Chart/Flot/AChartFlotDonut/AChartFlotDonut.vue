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
      donutData: this.data,
      options: {
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
      }
    }
  },
  props: {
    data: { type: Array, required: true },
    series_pie_show: { type: Boolean, default: true },
    series_pie_radius: { type: Number, default: 1 },
    series_pie_innerRadius: { type: Number, default: 0.5 },
    series_pie_label_show: { type: Boolean, default: true },
    series_pie_label_radius: { type: Number, default: 2 / 3 },
    series_pie_label_formatter: { type: String },
    series_pie_label_threshold: { type: Number, default: 0.1 },
    legend_show: { type: Boolean, default: false }
  },
  mounted () {
    $.plot('#donut-chart', this.donutData, {
      series: {
        pie: {
          show: this.options.series.pie.show,
          radius: this.options.series.pie.radius,
          innerRadius: this.options.series.pie.innerRadius,
          label: {
            show: this.options.series.pie.label.show,
            radius: this.options.series.pie.label.radius,
            formatter: this.options.series.pie.label.formatter || this.labelFormatter,
            threshold: this.options.series.pie.label.threshold
          }

        }
      },
      legend: {
        show: this.options.legend.show
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
