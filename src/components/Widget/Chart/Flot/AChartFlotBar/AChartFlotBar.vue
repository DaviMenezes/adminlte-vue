<template>
  <div id="bar-chart" style="height: 300px;"></div>
</template>

<script>
import $ from 'jquery'
require('flot')
export default {
  name: 'AChartFlotBar',
  data () {
    return {
      bar_data: this.data,
      grid: {
        borderWidth: this.grid_border_width,
        borderColor: this.grid_border_color,
        tickColor: this.grid_tick_color
      },
      series: {
        bars: {
          show: this.series_bars_show, barWidth: this.series_bar_width, align: this.series_bars_show
        }
      },
      colors_local: this.colors,
      xaxis: {
        ticks: this.xaxis_ticks
      }
    }
  },
  props: {
    data: { type: Array, default: () => [], required: true },
    grid_border_width: { type: [String, Number], default: 1 },
    grid_border_color: { type: String, default: '#f3f3f3' },
    grid_tick_color: { type: String, default: '#f3f3f3' },
    series_bars_show: { type: Boolean, default: true },
    series_bar_width: { type: Number, default: 0.5 },
    series_bar_align: { type: String, default: 'center' },
    colors: { type: Array, default: () => ['#3c8dbc'] },
    xaxis_ticks: {
      type: Array,
      required: true
    }

  },
  mounted () {
    $.plot('#bar-chart', [{
      data: this.bar_data, bars: { show: true }
    }], {
      grid: {
        borderWidth: this.grid.borderWidth,
        borderColor: this.grid.borderColor,
        tickColor: this.grid.tickColor
      },
      series: {
        bars: {
          show: this.series.bars.show, barWidth: this.series.bars.barWidth, align: this.series.bars.show
        }
      },
      colors: this.colors_local,
      xaxis: {
        ticks: this.xaxis.ticks
      }
    })
  }
}
</script>
