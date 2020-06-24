<template>
  <div id="interactive" style="height: 300px;"></div>
</template>
<script>
import $ from 'jquery'
require('flot')
window.jQuery = $
export default {
  name: 'AChartFlotInteractiveArea',
  data () {
    return {
      data_local: this.chart_data,
      interactive_plot: undefined,
      grid: {
        borderColor: this.grid_borderColor,
        borderWidth: this.grid_borderWidth,
        tickColor: this.grid_tickColor
      },
      series: {
        color: this.series_color,
        lines: {
          width: this.series_line_width,
          show: this.series_line_show,
          fill: this.series_line_fill
        }
      },
      yaxis: {
        min: this.yaxis_min,
        max: this.yaxis_max,
        show: this.yaxis_show
      },
      xaxis: {
        show: this.xaxis_show
      }
    }
  },
  inject: ['eventBus'],
  props: {
    // eslint-disable-next-line vue/require-valid-default-prop
    chart_data: { type: Array, default: () => [] },
    realtime: { type: Boolean, default: true },
    grid_borderColor: { type: String, default: '#f3f3f3' },
    grid_borderWidth: { type: Number, default: 1 },
    grid_tickColor: { type: String, default: '#f3f3f3' },
    series_color: { type: String, default: '#3c8dbc' },
    series_line_width: { type: Number, default: 2 },
    series_line_show: { type: Boolean, default: true },
    series_line_fill: { type: Boolean, default: true },
    yaxis_min: { type: Number, default: 0 },
    yaxis_max: { type: Number, default: 100 },
    yaxis_show: { type: Boolean, default: true },
    xaxis_show: { type: Boolean, default: true }
  },
  mounted () {
    this.interactive_plot = $.plot('#interactive', [
      {
        data: this.data_local
      }
    ],
    {
      grid: {
        borderColor: this.grid.borderColor,
        borderWidth: this.grid.borderWidth,
        tickColor: this.grid.tickColor
      },
      series: {
        color: this.series.color,
        lines: {
          lineWidth: this.series.lines.width,
          show: this.series.lines.show,
          fill: this.series.lines.fill
        }
      },
      yaxis: {
        min: this.yaxis.min,
        max: this.yaxis.max,
        show: this.yaxis.show
      },
      xaxis: {
        show: this.xaxis.show
      }
    }
    )

    this.eventBus.$on('chartDataUpdated', (value) => {
      this.interactive_plot.setData([value])

      // Since the axes don't change, we don't need to call plot.setupGrid()
      this.interactive_plot.draw()
    })
  },
  methods: {
    update () {
      this.interactive_plot.setData([this.getChartInteractiveRandomData()])

      // Since the axes don't change, we don't need to call plot.setupGrid()
      this.interactive_plot.draw()

      if (this.realtime) {
        setTimeout(this.update, 500) // Fetch data ever x milliseconds
      }
    }
  }
}
</script>
