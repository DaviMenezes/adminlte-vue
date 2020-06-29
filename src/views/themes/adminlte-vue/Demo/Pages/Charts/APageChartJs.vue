<template>
  <div class="content-wrapper">
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>ChartJS</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active">ChartJS</li>
            </ol>
          </div>
        </div>
      </div>
    </section>

    <!-- Main content -->
    <section class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-6">
            <!-- AREA CHART -->
            <a-card-primary title="Area Charts" collapsable removable>
              <b-card-body slot="body"><a-chart-js-area v-bind="areaChartData"/></b-card-body>
            </a-card-primary>

            <!-- DONUT CHART -->
            <a-card-danger title="Donut Chart" collapsable removable>
              <a-card-body slot="body"><a-chart-js-donut v-bind="donutData"/></a-card-body>
            </a-card-danger>

            <!-- PIE CHART -->
            <a-card-danger title="Pie Chart" collapsable removable>
              <a-card-body slot="body"><a-chart-js-pie v-bind="pieChartData"/></a-card-body>
            </a-card-danger>
          </div>
          <div class="col-md-6">
            <!-- LINE CHART -->
            <a-card-primary title="Line Chart" collapsable removable>
              <a-card-body slot="body"><a-chart-js-line v-bind="lineChartData"/></a-card-body>
            </a-card-primary>

            <!-- BAR CHART -->
            <a-card-success title="Bar Chart" collapsable removable>
              <a-card-body slot="body"><a-chart-js-bar v-bind="barChartData"/></a-card-body>
            </a-card-success>

            <!-- STACKED BAR CHART -->
            <a-card-success title="Stacked Bar Chart" collapsable removable>
              <a-card-body slot="body"><a-chart-js-stacked v-bind="stackedChartData"/></a-card-body>
            </a-card-success>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>

import AChartJsArea from '@/components/Widget/Chart/ChartJs/AChartJsArea/AChartJsArea'
import AChartJsDonut from '@/components/Widget/Chart/ChartJs/AChartJsDonut/AChartJsDonut'
import AChartJsPie from '@/components/Widget/Chart/ChartJs/AChartJsPie/AChartJsPie'
import AChartJsLine from '@/components/Widget/Chart/ChartJs/AChartJsLine/AChartJsLine'
import AChartJsBar from '@/components/Widget/Chart/ChartJs/AChartJsBar/AChartJsBar'
import AChartJsStacked from '@/components/Widget/Chart/ChartJs/AChartJsStacked/AChartJsStacked'
import ACardPrimary from '@/components/Widget/Card/Color/ACardPrimary'
import ACardDanger from '@/components/Widget/Card/Color/ACardDanger'
import ACardBody from '@/components/Widget/Card/ACardBody'
import ACardSuccess from '@/components/Widget/Card/Color/ACardSuccess'

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July']
const browsers = [
  'Chrome',
  'IE',
  'FireFox',
  'Safari',
  'Opera',
  'Navigator'
]
const datasetDigitalGoods = {
  label: 'Digital Goods',
  backgroundColor: 'rgba(60,141,188,0.9)',
  borderColor: 'rgba(60,141,188,0.8)',
  pointRadius: false,
  pointColor: '#3b8bba',
  pointStrokeColor: 'rgba(60,141,188,1)',
  pointHighlightFill: '#fff',
  pointHighlightStroke: 'rgba(60,141,188,1)',
  data: [28, 48, 40, 19, 86, 27, 90]
}
const datasetEletronics = {
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

export default {
  name: 'APageChartJs',
  components: { AChartJsArea, ACardSuccess, ACardBody, ACardDanger, ACardPrimary, AChartJsStacked, AChartJsBar, AChartJsLine, AChartJsPie, AChartJsDonut },
  data () {
    return {
      areaChartData: {
        labels: months,
        datasets: [datasetDigitalGoods, datasetEletronics],
        options: {
          maintainAspectRatio: false,
          responsive: true,
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              gridLines: {
                display: false
              }
            }],
            yAxes: [{
              gridLines: {
                display: false
              }
            }]
          }
        }
      },
      barChartData: {
        labels: months,
        datasets: [datasetEletronics, datasetDigitalGoods],
        options: {
          maintainAspectRatio: false,
          responsive: true,
          datasetFill: false
        }
      },
      donutData: {
        labels: [
          'Chrome',
          'IE',
          'FireFox',
          'Safari',
          'Opera',
          'Navigator'
        ],
        datasets: [
          {
            data: [700, 500, 400, 600, 300, 100],
            backgroundColor: ['#f56954', '#00a65a', '#f39c12', '#00c0ef', '#3c8dbc', '#d2d6de']
          }
        ],
        options: {
          maintainAspectRatio: false,
          responsive: true
        }
      },
      lineChartData: {
        labels: months,
        datasets: [{ ...datasetDigitalGoods, fill: false }, { ...datasetEletronics, fill: false }],
        options: {
          datasetFill: false,
          maintainAspectRatio: false,
          responsive: true,
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              gridLines: {
                display: false
              }
            }],
            yAxes: [{
              gridLines: {
                display: false
              }
            }]
          }
        }
      },
      pieChartData: {
        labels: browsers,
        datasets: [
          {
            data: [700, 500, 400, 600, 300, 100],
            backgroundColor: ['#f56954', '#00a65a', '#f39c12', '#00c0ef', '#3c8dbc', '#d2d6de']
          }
        ],
        options: {
          maintainAspectRatio: false,
          responsive: true
        }
      },
      stackedChartData: {
        labels: months,
        datasets: [datasetDigitalGoods, datasetEletronics],
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            xAxes: [{
              stacked: true
            }],
            yAxes: [{
              stacked: true
            }]
          }
        }
      }
    }
  },
  props: { },
  mounted () {

  }
}
</script>
