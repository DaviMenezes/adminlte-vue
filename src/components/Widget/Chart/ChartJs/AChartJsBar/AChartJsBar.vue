<template>
  <div class="chart">
    <canvas id="barChart" style="min-height: 250px; height: 250px; max-height: 250px; max-width: 100%;"></canvas>
  </div>
</template>

<script>
import $ from 'jquery'
import Chart from 'chart.js'
const jQuery = $
export default {
  props: {},
  mounted () {
    const areaChartData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Digital Goods',
          backgroundColor: 'rgba(60,141,188,0.9)',
          borderColor: 'rgba(60,141,188,0.8)',
          pointRadius: false,
          pointColor: '#3b8bba',
          pointStrokeColor: 'rgba(60,141,188,1)',
          pointHighlightFill: '#fff',
          pointHighlightStroke: 'rgba(60,141,188,1)',
          data: [28, 48, 40, 19, 86, 27, 90]
        },
        {
          label: 'Electronics',
          backgroundColor: 'rgba(210, 214, 222, 1)',
          borderColor: 'rgba(210, 214, 222, 1)',
          pointRadius: false,
          pointColor: 'rgba(210, 214, 222, 1)',
          pointStrokeColor: '#c1c7d1',
          pointHighlightFill: '#fff',
          pointHighlightStroke: 'rgba(220,220,220,1)',
          data: [65, 59, 80, 81, 56, 55, 40]
        }
      ]
    }
    const barChartCanvas = $('#barChart').get(0).getContext('2d')
    const barChartData = jQuery.extend(true, {}, areaChartData)
    barChartData.datasets[0] = areaChartData.datasets[1]
    barChartData.datasets[1] = areaChartData.datasets[0]

    const barChartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      datasetFill: false
    }

    // eslint-disable-next-line no-new
    new Chart(barChartCanvas, {
      type: 'bar',
      data: barChartData,
      options: barChartOptions
    })
  }
}
</script>
