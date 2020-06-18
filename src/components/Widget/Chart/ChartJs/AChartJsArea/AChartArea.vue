<template>
  <div class="chart">
    <canvas id="areaChart" style="min-height: 250px; height: 250px; max-height: 250px; max-width: 100%;"></canvas>
  </div>
</template>
<script>
import $ from 'jquery'
import Chart from 'chart.js'

export default {
  name: 'AChartArea',
  data () {
    return {}
  },
  props: {
    labels: Array,
    datasets: Array,
    options: Object
  },
  mounted () {
    const areaChartCanvas = $('#areaChart').get(0).getContext('2d')

    const areaChartData = {
      labels: this.labels,
      datasets: this.datasets
    }

    // This will get the first returned node in the jQuery collection.
    // eslint-disable-next-line no-new
    new Chart(areaChartCanvas, {
      type: 'line',
      data: areaChartData,
      options: this.options
    })
  }
}
</script>
