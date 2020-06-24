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
      sin: [],
      cos: []
    }
  },
  props: {
  },
  mounted () {
    for (let i = 0; i < 14; i += 0.5) {
      this.sin.push([i, Math.sin(i)])
      this.cos.push([i, Math.cos(i)])
    }
    // eslint-disable-next-line camelcase
    const line_data1 = {
      data: this.sin,
      color: '#3c8dbc'
    }
    // eslint-disable-next-line camelcase
    const line_data2 = {
      data: this.cos,
      color: '#00c0ef'
    }
    // eslint-disable-next-line camelcase
    $.plot('#line-chart', [line_data1, line_data2], {
      grid: {
        hoverable: true,
        borderColor: '#f3f3f3',
        borderWidth: 1,
        tickColor: '#f3f3f3'
      },
      series: {
        shadowSize: 0,
        lines: {
          show: true
        },
        points: {
          show: true
        }
      },
      lines: {
        fill: false,
        color: ['#3c8dbc', '#f56954']
      },
      yaxis: {
        show: true
      },
      xaxis: {
        show: true
      }
    })
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
