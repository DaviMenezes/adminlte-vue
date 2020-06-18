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
              <b-card-body slot="body"><a-chart-area v-bind="areaChartData"/></b-card-body>
            </a-card-primary>

            <!-- DONUT CHART -->
            <a-card-danger title="Donut Chart" collapsable removable>
              <a-card-body slot="body"><a-chart-js-donut/></a-card-body>
            </a-card-danger>

            <!-- PIE CHART -->
            <a-card-danger title="Pie Chart" collapsable removable>
              <a-card-body slot="body"><a-chart-js-pie/></a-card-body>
            </a-card-danger>
          </div>
          <div class="col-md-6">
            <!-- LINE CHART -->
            <a-card-primary title="Line Chart" collapsable removable>
              <a-card-body slot="body"><a-chart-js-line/></a-card-body>
            </a-card-primary>

            <!-- BAR CHART -->
            <a-card-success title="Bar Chart" collapsable removable>
              <a-card-body slot="body"><a-chart-js-bar/></a-card-body>
            </a-card-success>

            <!-- STACKED BAR CHART -->
            <a-card-success title="Stacked Bar Chart" collapsable removable>
              <a-card-body slot="body"><a-chart-js-stacked/></a-card-body>
            </a-card-success>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>

import AChartArea from '../../Widget/Chart/ChartJs/AChartJsArea/AChartArea'
import AChartJsDonut from '../../Widget/Chart/ChartJs/AChartJsDonut/AChartJsDonut'
import AChartJsPie from '../../Widget/Chart/ChartJs/AChartJsPie/AChartJsPie'
import AChartJsLine from '../../Widget/Chart/ChartJs/AChartJsLine/AChartJsLine'
import AChartJsBar from '../../Widget/Chart/ChartJs/AChartJsBar/AChartJsBar'
import AChartJsStacked from '../../Widget/Chart/ChartJs/AChartJsStacked/AChartJsStacked'
import ACardPrimary from '../../Widget/Card/Color/ACardPrimary'
import ACardDanger from '../../Widget/Card/Color/ACardDanger'
import ACardBody from '../../Widget/Card/ACardBody'
import ACardSuccess from '../../Widget/Card/Color/ACardSuccess'
export default {
  name: 'APageChartJs',
  components: { ACardSuccess, ACardBody, ACardDanger, ACardPrimary, AChartJsStacked, AChartJsBar, AChartJsLine, AChartJsPie, AChartJsDonut, AChartArea },
  data () {
    return {
      areaChartData: {
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
        ],
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
      }
    }
  },
  props: { },
  mounted () {

  }
}
</script>
