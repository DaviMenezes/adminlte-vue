<template>
  <div id="area-chart" style="height: 338px;" class="full-width-chart"></div>
</template>

<script>
import $ from 'jquery'
require('flot')
export default {
  data () {
    return {
      areaData: this.data,
      options: {
        grid: {
          borderWidth: this.grid_border_width
        },
        series: {
          shadowSize: this.series_shadow_size,
          color: this.series_color,
          lines: {
            fill: this.series_lines_fill
          }
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
    grid_border_width: { type: Number, default: 0 },
    /** Drawing is faster without shadows */
    series_shadow_size: { type: Number, default: 0 },
    series_color: { type: String, default: '#00c0ef' },
    /** Converts the line chart to area chart */
    series_lines_fill: { type: Boolean, default: true },
    yaxis_show: { type: Boolean, default: false },
    xaxis_show: { type: Boolean, default: false }
  },
  mounted () {
    $.plot('#area-chart', [this.areaData], {
      grid: {
        borderWidth: this.options.grid.borderWidth
      },
      series: {
        shadowSize: this.options.series.shadowSize,
        color: this.options.series.color,
        lines: {
          fill: this.options.series.lines.fill
        }
      },
      yaxis: {
        show: this.options.yaxis.show
      },
      xaxis: {
        show: this.options.xaxis.show
      }
    })
  }
}
</script>
