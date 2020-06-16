<template>
  <Card>
    <template slot="header">
      <CardHeader class="border-0">
        <template>
          <div class="d-flex justify-content-between">
            <h3 class="card-title">Sales</h3>
            <a href="javascript:void(0);">View Report</a>
          </div>
        </template>
      </CardHeader>
    </template>
    <template slot="body">
      <CardBody>
        <div class="d-flex">
          <p class="d-flex flex-column">
            <span class="text-bold text-lg">$18,230.00</span>
            <span>Sales Over Time</span>
          </p>
          <p class="ml-auto d-flex flex-column text-right">
                    <span class="text-success">
                      <i class="fas fa-arrow-up"></i> 33.1%
                    </span>
            <span class="text-muted">Since last month</span>
          </p>
        </div>
        <!-- /.d-flex -->

        <div class="position-relative mb-4">
          <canvas id="sales-chart" height="200"></canvas>
        </div>

        <div class="d-flex flex-row justify-content-end">
                  <span class="mr-2">
                    <i class="fas fa-square text-primary"></i> This year
                  </span>

          <span>
                    <i class="fas fa-square text-gray"></i> Last year
                  </span>
        </div>
      </CardBody>
    </template>
  </Card>
</template>
<script>
import Card from '../../../Widget/Card/ACard'
import CardHeader from '../../../Widget/Card/ACardHeader'
import CardBody from '../../../Widget/Card/ACardBody'

import $ from 'jquery'
import Chart from 'chart.js'

export default {
  name: 'ACardSales',
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
    const ticksStyle = {
      fontColor: '#495057',
      fontStyle: 'bold'
    }
    const mode = 'index'
    const intersect = true

    const $salesChart = $('#sales-chart')
    // eslint-disable-next-line no-unused-vars
    const salesChart = new Chart($salesChart, {
      type: 'bar',
      data: {
        labels: ['JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
        datasets: [
          {
            backgroundColor: '#007bff',
            borderColor: '#007bff',
            data: [1000, 2000, 3000, 2500, 2700, 2500, 3000]
          },
          {
            backgroundColor: '#ced4da',
            borderColor: '#ced4da',
            data: [700, 1700, 2700, 2000, 1800, 1500, 2000]
          }
        ]
      },
      options: {
        maintainAspectRatio: false,
        tooltips: {
          mode: mode,
          intersect: intersect
        },
        hover: {
          mode: mode,
          intersect: intersect
        },
        legend: {
          display: false
        },
        scales: {
          yAxes: [{
            // display: false,
            gridLines: {
              display: true,
              lineWidth: '4px',
              color: 'rgba(0, 0, 0, .2)',
              zeroLineColor: 'transparent'
            },
            ticks: $.extend({
              beginAtZero: true,

              // Include a dollar sign in the ticks
              callback: function (value) {
                if (value >= 1000) {
                  value /= 1000
                  value += 'k'
                }

                return '$' + value
              }
            }, ticksStyle)
          }],
          xAxes: [{
            display: true,
            gridLines: {
              display: false
            },
            ticks: ticksStyle
          }]
        }
      }
    })
  }
}
</script>
