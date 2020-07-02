<template>
  <a-card>
    <a-card-header title="Browser Usage" slot="header">
      <a-card-header-tools slot="tools">
        <a-card-header-tool-button-collapse/>
        <a-card-header-tool-button-remove/>
      </a-card-header-tools>
    </a-card-header>
    <a-card-body>
      <div class="row">
        <div class="col-md-8">
          <div class="chart-responsive">
            <canvas id="pieChart" height="150"></canvas>
          </div>
          <!-- ./chart-responsive -->
        </div>
        <!-- /.col -->
        <div class="col-md-4">
          <ul class="chart-legend clearfix">
            <li><i class="far fa-circle text-danger"></i> Chrome</li>
            <li><i class="far fa-circle text-success"></i> IE</li>
            <li><i class="far fa-circle text-warning"></i> FireFox</li>
            <li><i class="far fa-circle text-info"></i> Safari</li>
            <li><i class="far fa-circle text-primary"></i> Opera</li>
            <li><i class="far fa-circle text-secondary"></i> Navigator</li>
          </ul>
        </div>
        <!-- /.col -->
      </div>
    </a-card-body>
    <a-card-footer class="bg-white p-0" slot="footer">
      <ul class="nav nav-pills flex-column">
        <li class="nav-item">
          <a href="#" class="nav-link">
            United States of America
            <span class="float-right text-danger">
              <i class="fas fa-arrow-down text-sm"></i>12%
            </span>
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">
            India
            <span class="float-right text-success">
              <i class="fas fa-arrow-up text-sm"></i> 4%
            </span>
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">
            China
            <span class="float-right text-warning">
              <i class="fas fa-arrow-left text-sm"></i> 0%
            </span>
          </a>
        </li>
      </ul>
    </a-card-footer>
  </a-card>
</template>
<script>
import ACard from '@/components/Widget/Card/ACard'
import ACardHeader from '@/components/Widget/Card/CardHeader/ACardHeader'
import ACardBody from '@/components/Widget/Card/ACardBody'
import ACardFooter from '@/components/Widget/Card/ACardFooter'
import $ from 'jquery'
import Chart from 'chart.js'
import ACardHeaderTools from '@/components/Widget/Card/CardHeader/CardHeaderTools/ACardHeaderTools'
import ACardHeaderToolButtonCollapse
  from '@/components/Widget/Card/CardHeader/CardHeaderTools/ACardHeaderToolButtonCollapse'
import ACardHeaderToolButtonRemove
  from '@/components/Widget/Card/CardHeader/CardHeaderTools/ACardHeaderToolButtonRemove'

export default {
  name: 'ABrowserUsage',
  components: {
    ACardHeaderToolButtonRemove,
    ACardHeaderToolButtonCollapse,
    ACardHeaderTools,
    ACard,
    ACardHeader,
    ACardBody,
    ACardFooter
  },
  mounted () {
    // Get context with jQuery - using jQuery's .get() method.
    const pieChartCanvas = $('#pieChart').get(0).getContext('2d')
    const pieData = {
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
      ]
    }
    const pieOptions = {
      legend: {
        display: false
      }
    }
    // Create pie or douhnut chart
    // You can switch between pie and douhnut using the method below.
    // eslint-disable-next-line no-new
    new Chart(pieChartCanvas, {
      type: 'doughnut',
      data: pieData,
      options: pieOptions
    })
  }
}
</script>
