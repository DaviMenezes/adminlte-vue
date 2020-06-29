<template>
  <Card>
    <template slot="header">
      <CardHeader title="Sales">
        <template slot="title_icon"><i class="fas fa-chart-pie mr-1"></i></template>
        <template slot="tools">
          <ul class="nav nav-pills ml-auto">
            <li class="nav-item">
              <a class="nav-link active" href="#revenue-chart" data-toggle="tab">Area</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#sales-chart" data-toggle="tab">Donut</a>
            </li>
          </ul>
        </template>
      </CardHeader>
    </template>
    <template slot="body">
      <CardBody>
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
      </CardBody>
    </template>
  </Card>
</template>
<script>
import Card from '../../../../../../../../components/Widget/Card/ACard'
import CardHeader from '../../../../../../../../components/Widget/Card/ACardHeader'
import CardBody from '../../../../../../../../components/Widget/Card/ACardBody'
import Chart from 'chart.js'
import salesChart from './sale_chart_data'
import pieChart from './pie_chart_data'
export default {
  name: 'ASaleChart',
  components: {
    Card,
    CardHeader,
    CardBody
  },
  data () {
    return {}
  },
  props: {},
  mounted () {
    const salesChartCanvas = this.$refs.revenue_chart_canvas.getContext('2d')

    const pieChartCanvas = this.$refs.sales_chart_canvas.getContext('2d')

    // This will get the first returned node in the jQuery collection.
    // eslint-disable-next-line no-unused-vars
    const sale = new Chart(salesChartCanvas, {
      type: 'line',
      data: salesChart.data,
      options: salesChart.options
    })
    // eslint-disable-next-line no-unused-vars
    var pie = new Chart(pieChartCanvas, {
      type: 'doughnut',
      data: pieChart.data,
      options: pieChart.options
    })
  }
}
</script>
