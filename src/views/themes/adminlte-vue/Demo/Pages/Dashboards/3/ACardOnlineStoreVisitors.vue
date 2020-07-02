<template>
  <a-card>
    <template slot="header">
      <a-card-header class="border-0">
        <template>
          <div class="d-flex justify-content-between">
            <h3 class="card-title">Online Store Visitors</h3>
            <a href="javascript:void(0);">View Report</a>
          </div>
        </template>
      </a-card-header>
    </template>
    <a-card-body>
      <div class="d-flex">
        <p class="d-flex flex-column">
          <span class="text-bold text-lg">820</span>
          <span>Visitors Over Time</span>
        </p>
        <p class="ml-auto d-flex flex-column text-right">
          <span class="text-success">
            <i class="fas fa-arrow-up"></i> 12.5%
          </span>
          <span class="text-muted">Since last week</span>
        </p>
      </div>
      <!-- /.d-flex -->

      <div class="position-relative mb-4">
        <canvas id="visitors-chart" height="200"></canvas>
      </div>

      <div class="d-flex flex-row justify-content-end">
                <span class="mr-2">
                  <i class="fas fa-square text-primary"></i> This Week
                </span>

        <span>
                  <i class="fas fa-square text-gray"></i> Last Week
                </span>
      </div>
    </a-card-body>
  </a-card>
</template>
<script>
import ACard from '@/components/Widget/Card/ACard'
import ACardHeader from '@/components/Widget/Card/CardHeader/ACardHeader'
import ACardBody from '@/components/Widget/Card/ACardBody'

import $ from 'jquery'
import Chart from 'chart.js'

export default {
  name: 'ACardOnlineStoreVisitors',
  components: {
    ACard,
    ACardHeader,
    ACardBody
  },
  mounted () {
    const ticksStyle = {
      fontColor: '#495057',
      fontStyle: 'bold'
    }
    const mode = 'index'
    const intersect = true

    const $visitorsChart = $('#visitors-chart')
    // eslint-disable-next-line no-unused-vars
    const visitorsChart = new Chart($visitorsChart, {
      data: {
        labels: ['18th', '20th', '22nd', '24th', '26th', '28th', '30th'],
        datasets: [
          {
            type: 'line',
            data: [100, 120, 170, 167, 180, 177, 160],
            backgroundColor: 'transparent',
            borderColor: '#007bff',
            pointBorderColor: '#007bff',
            pointBackgroundColor: '#007bff',
            fill: false
            // pointHoverBackgroundColor: '#007bff',
            // pointHoverBorderColor    : '#007bff'
          },
          {
            type: 'line',
            data: [60, 80, 70, 67, 80, 77, 100],
            backgroundColor: 'tansparent',
            borderColor: '#ced4da',
            pointBorderColor: '#ced4da',
            pointBackgroundColor: '#ced4da',
            fill: false
            // pointHoverBackgroundColor: '#ced4da',
            // pointHoverBorderColor    : '#ced4da'
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
              suggestedMax: 200
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
