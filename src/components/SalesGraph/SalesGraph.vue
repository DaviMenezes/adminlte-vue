<template>
  <Card class="bg-gradient-info" >
    <template slot="card_header">
      <CardHeader title="Sales Graph">
        <template slot="title_icon"><i class="fas fa-th mr-1"></i></template>
        <template slot="card_tools">
          <button type="button" class="btn bg-info btn-sm" data-card-widget="collapse">
            <i class="fas fa-minus"></i>
          </button>
          <button type="button" class="btn bg-info btn-sm" data-card-widget="remove">
            <i class="fas fa-times"></i>
          </button>
        </template>
      </CardHeader>
    </template>
    <CardBody slot="card_body">
      <canvas ref="line_chart" class="chart" id="line-chart" style="min-height: 250px; height: 250px; max-height: 250px; max-width: 100%;"></canvas>
    </CardBody>
    <template slot="card_footer">
      <CardFooter class="bg-transparent">
        <div class="row">
          <div class="col-4 text-center">
            <input type="text" class="knob" data-readonly="true" value="20" data-width="60" data-height="60"
                   data-fgColor="#39CCCC">

            <div class="text-white">Mail-Orders</div>
          </div>
          <!-- ./col -->
          <div class="col-4 text-center">
            <input type="text" class="knob" data-readonly="true" value="50" data-width="60" data-height="60"
                   data-fgColor="#39CCCC">

            <div class="text-white">Online</div>
          </div>
          <!-- ./col -->
          <div class="col-4 text-center">
            <input type="text" class="knob" data-readonly="true" value="30" data-width="60" data-height="60"
                   data-fgColor="#39CCCC">

            <div class="text-white">In-Store</div>
          </div>
          <!-- ./col -->
        </div>
      </CardFooter>
    </template>
  </Card>
</template>
<script>
import Card from '../../views/themes/adminlte-vue/Widget/Card/Card'
import CardHeader from '../../views/themes/adminlte-vue/Widget/Card/CardHeader'
import CardBody from '../../views/themes/adminlte-vue/Widget/Card/CardBody'
import CardFooter from '../../views/themes/adminlte-vue/Widget/Card/CardFooter'
import Chart from 'chart.js'
import $ from 'jquery'
require('jquery-knob')

export default {
  components: {
    Card,
    CardHeader,
    CardBody,
    CardFooter
  },
  data () {
    return {}
  },
  props: {},
  mounted () {
    $('.knob').knob()

    // Sales graph chart
    const salesGraphChartCanvas = this.$refs.line_chart.getContext('2d')

    const salesGraphChartData = {
      labels: ['2011 Q1', '2011 Q2', '2011 Q3', '2011 Q4', '2012 Q1', '2012 Q2', '2012 Q3', '2012 Q4', '2013 Q1', '2013 Q2'],
      datasets: [
        {
          label: 'Digital Goods',
          fill: false,
          borderWidth: 2,
          lineTension: 0,
          spanGaps: true,
          borderColor: '#efefef',
          pointRadius: 3,
          pointHoverRadius: 7,
          pointColor: '#efefef',
          pointBackgroundColor: '#efefef',
          data: [2666, 2778, 4912, 3767, 6810, 5670, 4820, 15073, 10687, 8432]
        }
      ]
    }

    const salesGraphChartOptions = {
      maintainAspectRatio: false,
      responsive: true,
      legend: {
        display: false
      },
      scales: {
        xAxes: [{
          ticks: {
            fontColor: '#efefef'
          },
          gridLines: {
            display: false,
            color: '#efefef',
            drawBorder: false
          }
        }],
        yAxes: [{
          ticks: {
            stepSize: 5000,
            fontColor: '#efefef'
          },
          gridLines: {
            display: true,
            color: '#efefef',
            drawBorder: false
          }
        }]
      }
    }

    // This will get the first returned node in the jQuery collection.
    // eslint-disable-next-line no-unused-vars
    const salesGraphChart = new Chart(salesGraphChartCanvas, {
      type: 'line',
      data: salesGraphChartData,
      options: salesGraphChartOptions
    })
  }
}
</script>
