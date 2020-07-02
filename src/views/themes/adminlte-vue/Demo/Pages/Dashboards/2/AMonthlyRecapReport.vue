<template>
  <a-card>
    <a-card-header title="Monthly Recap Report" slot="header">
      <a-card-header-tools slot="tools">
        <a-card-header-tool-button-collapse/>
        <a-card-header-tool-button-remove/>
        <b-dropdown right variant="light">
          <template v-slot:button-content>
            <i class='fas fa-wrench disabled light'></i>
          </template>
        <b-dropdown-item>Action</b-dropdown-item>
        <b-dropdown-item>Another action</b-dropdown-item>
        <b-dropdown-item>Something else here</b-dropdown-item>
        <b-dropdown-divider/>
        <b-dropdown-item>Separated link</b-dropdown-item>
        </b-dropdown>
      </a-card-header-tools>
    </a-card-header>
    <a-card-body>
      <div class="row">
        <div class="col-md-8">
          <p class="text-center">
            <strong>Sales: 1 Jan, 2014 - 30 Jul, 2014</strong>
          </p>

          <div class="chart">
            <!-- Sales Chart Canvas -->
            <canvas id="salesChart" height="180" style="height: 180px;"></canvas>
          </div>
          <!-- /.chart-responsive -->
        </div>
        <!-- /.col -->
        <div class="col-md-4">
          <p class="text-center">
            <strong>Goal Completion</strong>
          </p>

          <div class="progress-group">
            Add Products to Cart
            <span class="float-right"><b>160</b>/200</span>
            <div class="progress progress-sm">
              <div class="progress-bar bg-primary" style="width: 80%"></div>
            </div>
          </div>
          <!-- /.progress-group -->

          <div class="progress-group">
            Complete Purchase
            <span class="float-right"><b>310</b>/400</span>
            <div class="progress progress-sm">
              <div class="progress-bar bg-danger" style="width: 75%"></div>
            </div>
          </div>

          <!-- /.progress-group -->
          <div class="progress-group">
            <span class="progress-text">Visit Premium Page</span>
            <span class="float-right"><b>480</b>/800</span>
            <div class="progress progress-sm">
              <div class="progress-bar bg-success" style="width: 60%"></div>
            </div>
          </div>

          <!-- /.progress-group -->
          <div class="progress-group">
            Send Inquiries
            <span class="float-right"><b>250</b>/500</span>
            <div class="progress progress-sm">
              <div class="progress-bar bg-warning" style="width: 50%"></div>
            </div>
          </div>
          <!-- /.progress-group -->
        </div>
        <!-- /.col -->
      </div>
    </a-card-body>
    <a-card-footer slot="footer">
      <div class="row">
        <div class="col-sm-3 col-6">
          <div class="description-block border-right">
            <span class="description-percentage text-success"><i class="fas fa-caret-up"></i> 17%</span>
            <h5 class="description-header">$35,210.43</h5>
            <span class="description-text">TOTAL REVENUE</span>
          </div>
          <!-- /.description-block -->
        </div>
        <!-- /.col -->
        <div class="col-sm-3 col-6">
          <div class="description-block border-right">
            <span class="description-percentage text-warning"><i class="fas fa-caret-left"></i> 0%</span>
            <h5 class="description-header">$10,390.90</h5>
            <span class="description-text">TOTAL COST</span>
          </div>
          <!-- /.description-block -->
        </div>
        <!-- /.col -->
        <div class="col-sm-3 col-6">
          <div class="description-block border-right">
            <span class="description-percentage text-success"><i class="fas fa-caret-up"></i> 20%</span>
            <h5 class="description-header">$24,813.53</h5>
            <span class="description-text">TOTAL PROFIT</span>
          </div>
          <!-- /.description-block -->
        </div>
        <!-- /.col -->
        <div class="col-sm-3 col-6">
          <div class="description-block">
            <span class="description-percentage text-danger"><i class="fas fa-caret-down"></i> 18%</span>
            <h5 class="description-header">1200</h5>
            <span class="description-text">GOAL COMPLETIONS</span>
          </div>
          <!-- /.description-block -->
        </div>
      </div>
    </a-card-footer>
  </a-card>
</template>
<script >
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
  name: 'AMonthlyRecapReport',
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
    const salesChartCanvas = $('#salesChart').get(0).getContext('2d')

    const salesChartData = {
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

    const salesChartOptions = {
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

    // This will get the first returned node in the jQuery collection.
    // eslint-disable-next-line no-new
    new Chart(salesChartCanvas, {
      type: 'line',
      data: salesChartData,
      options: salesChartOptions
    })
  }
}
</script>
