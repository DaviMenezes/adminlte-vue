<template>
  <div id="line-chart" style="height: 300px;"></div>
</template>

<script>
import $ from 'jquery'
/* eslint-disable */
window.jQuery = $
// import 'imports-loader?jQuery=jquery,this=>window!flot'
require('flot')
export default {
  name: 'AFlotChartLine',
  data () {
    return {
      data_local: this.data,
      options: {
        grid: {
          hoverable: this.grid_hoverable,
          borderColor: this.grid_border_color,
          borderWidth: this.grid_border_width,
          tickColor: this.grid_tick_color
        },
        series: {
          shadowSize: this.series_shadow_size,
          lines: {
            show: this.series_lines_show
          },
          points: {
            show: this.series_points_show
          }
        },
        lines: {
          fill: this.lines_fill,
          color: this.lines_color
        },
        yaxis: {
          show: this.yaxis_show
        },
        xaxis: {
          show: this.xaxis_show
        }
      }
    }
  },
  props: {
    data: { type: Array, required: true },
    grid_hoverable: { type: Boolean, default: true },
    grid_border_color: { type: String, default: '#f3f3f3' },
    grid_border_width: { type: [String, Number], default: 1 },
    grid_tick_color: { type: String, default: '#f3f3f3' },
    series_shadowSize: { type: [String, Number], default: 0 },
    series_lines_show: { type: Boolean, default: true },
    series_points_show: { type: Boolean, default: true },
    lines_fill: { type: Boolean, default: false },
    lines_color: {
      type: Array, default: () => ['#3c8dbc', '#f56954']
    },
    yaxis_show: {
      type: Boolean, default: true
    },
    xaxis_show: {
      type: Boolean, default: true
    },
  },
  mounted () {
    $.plot('#line-chart', this.data_local, this.options)

    // Initialize tooltip on hover
    $('<div class="tooltip-inner" id="line-chart-tooltip"></div>').css({
      position: 'absolute',
      display: 'none',
      opacity: 0.8
    }).appendTo('body')
    $('#line-chart').bind('plothover', function (event, pos, item) {
      if (item) {
        const x = item.datapoint[0].toFixed(2)
        const y = item.datapoint[1].toFixed(2)

        $('#line-chart-tooltip').html(item.series.label + ' of ' + x + ' = ' + y)
          .css({
            top: item.pageY + 5,
            left: item.pageX + 5
          })
          .fadeIn(200)
      } else {
        $('#line-chart-tooltip').hide()
      }
    })
  }
}
</script>
