<template>
  <Card>
    <template slot="header">
      <CardHeader title="Browser Usage">
        <template slot="tools">
          <button type="button" class="btn btn-tool" data-card-widget="collapse"><i class="fas fa-minus"></i>
          </button>
          <button type="button" class="btn btn-tool" data-card-widget="remove"><i class="fas fa-times"></i>
          </button>
        </template>
      </CardHeader>
    </template>
    <template slot="body">
      <CardBody>
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
      </CardBody>
    </template>
    <template slot="footer">
      <CardFooter class="bg-white p-0">
        <ul class="nav nav-pills flex-column">
          <li class="nav-item">
            <a href="#" class="nav-link">
              United States of America
              <span class="float-right text-danger">
                        <i class="fas fa-arrow-down text-sm"></i>
                        12%</span>
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
      </CardFooter>
    </template>
  </Card>
</template>
<script>
import Card from '../../../Widget/Card/ACard'
import CardHeader from '../../../Widget/Card/ACardHeader'
import CardBody from '../../../Widget/Card/ACardBody'
import CardFooter from '../../../Widget/Card/ACardFooter'
import $ from 'jquery'
import Chart from 'chart.js'

export default {
  name: 'ABrowserUsage',
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
    // Get context with jQuery - using jQuery's .get() method.
    var pieChartCanvas = $('#pieChart').get(0).getContext('2d')
    var pieData = {
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
    var pieOptions = {
      legend: {
        display: false
      }
    }
    // Create pie or douhnut chart
    // You can switch between pie and douhnut using the method below.
    // eslint-disable-next-line no-unused-vars
    var pieChart = new Chart(pieChartCanvas, {
      type: 'doughnut',
      data: pieData,
      options: pieOptions
    })
  }
}
</script>
