<template>
  <a-card>
    <template slot="header">
      <a-card-header title="Sales">
        <template slot="title_icon"><i class="fas fa-chart-pie mr-1"></i></template>
        <a-card-header-tools slot="tools">
          <ul class="nav nav-pills ml-auto">
            <li class="nav-item">
              <a class="nav-link active" href="#revenue-chart" data-toggle="tab">Area</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#sales-chart" data-toggle="tab">Donut</a>
            </li>
          </ul>
        </a-card-header-tools>
      </a-card-header>
    </template>
      <a-card-body>
        <div class="tab-content p-0">
          <!-- Morris chart - Sales -->
          <div class="chart tab-pane active" id="revenue-chart"
               style="position: relative; height: 300px;">
            <canvas ref="revenue_chart_canvas" id="revenue-chart-canvas" height="300" style="height: 300px;"></canvas>
          </div>
          <div class="chart tab-pane" id="sales-chart" style="position: relative; height: 300px;">
            <canvas ref="sales_chart_canvas" id="sales-chart-canvas" height="300" style="height: 300px;"></canvas>
          </div>
        </div>
      </a-card-body>
  </a-card>
</template>
<script>
import Chart from 'chart.js'
import salesChart from './sale_chart_data'
import pieChart from './pie_chart_data'
import ACard from '@/components/Widget/Card/ACard'
import ACardBody from '@/components/Widget/Card/ACardBody'
import ACardHeaderTools from '@/components/Widget/Card/CardHeader/CardHeaderTools/ACardHeaderTools'
import ACardHeader from '@/components/Widget/Card/CardHeader/ACardHeader'
export default {
  name: 'ASaleChart',
  components: {
    ACardHeader,
    ACardHeaderTools,
    ACardBody,
    ACard
  },
  mounted () {
    const salesChartCanvas = this.$refs.revenue_chart_canvas.getContext('2d')

    const pieChartCanvas = this.$refs.sales_chart_canvas.getContext('2d')

    // This will get the first returned node in the jQuery collection.
    // eslint-disable-next-line no-new
    new Chart(salesChartCanvas, {
      type: 'line',
      data: salesChart.data,
      options: salesChart.options
    })
    // eslint-disable-next-line no-new
    new Chart(pieChartCanvas, {
      type: 'doughnut',
      data: pieChart.data,
      options: pieChart.options
    })
  }
}
</script>
