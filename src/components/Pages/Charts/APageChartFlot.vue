<template>
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Flot Charts</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active">Flot</li>
            </ol>
          </div>
        </div>
      </div><!-- /.container-fluid -->
    </section>
    <!-- Main content -->
    <section class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <!-- interactive chart -->
            <div class="card card-primary card-outline">
              <div class="card-header">
                <h3 class="card-title">
                  <i class="far fa-chart-bar"></i>
                  Interactive Area Chart
                </h3>

                <div class="card-tools">
                  Real time
                  <div class="btn-group" id="realtime" data-toggle="btn-toggle">
                    <button type="button" data-toggle="on" @click="updateFlotChartRealtime(true)" class="btn btn-default btn-sm active" >On</button>
                    <button type="button" data-toggle="off" @click="updateFlotChartRealtime(false)" class="btn btn-default btn-sm" >Off</button>
                  </div>
                </div>
              </div>
              <div class="card-body">
                <a-chart-flot-interactive-area v-once :chart_data="getChartInteractiveRandomData()"/>
              </div>
              <!-- /.card-body-->
            </div>
            <!-- /.card -->

          </div>
          <!-- /.col -->
        </div>
        <!-- /.row -->

        <div class="row">
          <div class="col-md-6">
            <!-- Line chart -->
            <div class="card card-primary card-outline">
              <div class="card-header">
                <h3 class="card-title">
                  <i class="far fa-chart-bar"></i>
                  Line Chart
                </h3>

                <div class="card-tools">
                  <button type="button" class="btn btn-tool" data-card-widget="collapse"><i class="fas fa-minus"></i>
                  </button>
                  <button type="button" class="btn btn-tool" data-card-widget="remove"><i class="fas fa-times"></i>
                  </button>
                </div>
              </div>
              <div class="card-body">
                <a-flot-chart-line/>
              </div>
              <!-- /.card-body-->
            </div>
            <!-- /.card -->

            <!-- Area chart -->
            <div class="card card-primary card-outline">
              <div class="card-header">
                <h3 class="card-title">
                  <i class="far fa-chart-bar"></i>
                  Area Chart
                </h3>

                <div class="card-tools">
                  <button type="button" class="btn btn-tool" data-card-widget="collapse"><i class="fas fa-minus"></i>
                  </button>
                  <button type="button" class="btn btn-tool" data-card-widget="remove"><i class="fas fa-times"></i>
                  </button>
                </div>
              </div>
              <div class="card-body">
                <a-flot-area-chart/>
              </div>
              <!-- /.card-body-->
            </div>
            <!-- /.card -->

          </div>
          <!-- /.col -->

          <div class="col-md-6">
            <!-- Bar chart -->
            <div class="card card-primary card-outline">
              <div class="card-header">
                <h3 class="card-title">
                  <i class="far fa-chart-bar"></i>
                  Bar Chart
                </h3>

                <div class="card-tools">
                  <button type="button" class="btn btn-tool" data-card-widget="collapse">
                    <i class="fas fa-minus"></i>
                  </button>
                  <button type="button" class="btn btn-tool" data-card-widget="remove">
                    <i class="fas fa-times"></i>
                  </button>
                </div>
              </div>
              <div class="card-body">
                <a-chart-flot-bar/>
              </div>
              <!-- /.card-body-->
            </div>
            <!-- /.card -->

            <!-- Donut chart -->
            <div class="card card-primary card-outline">
              <div class="card-header">
                <h3 class="card-title">
                  <i class="far fa-chart-bar"></i>
                  Donut Chart
                </h3>

                <div class="card-tools">
                  <button type="button" class="btn btn-tool" data-card-widget="collapse"><i class="fas fa-minus"></i>
                  </button>
                  <button type="button" class="btn btn-tool" data-card-widget="remove"><i class="fas fa-times"></i>
                  </button>
                </div>
              </div>
              <div class="card-body">
                <a-chart-flot-donut/>
              </div>
              <!-- /.card-body-->
            </div>
            <!-- /.card -->
          </div>
          <!-- /.col -->
        </div>
        <!-- /.row -->
      </div><!-- /.container-fluid -->
    </section>
    <!-- /.content -->
  </div>
</template>
<script>
import Vue from 'vue'
import AFlotChartLine from '../../Widget/Chart/Flot/AFlotChartLine/AFlotChartLine'
import AChartFlotInteractiveArea from '../../Widget/Chart/Flot/AFlotChartInteractiveArea/AChartFlotInteractiveArea'
import AFlotAreaChart from '../../Widget/Chart/Flot/AFlotAreaChart/AFlotAreaChart'
import AChartFlotBar from '../../Widget/Chart/Flot/AChartFlotBar/AChartFlotBar'
import AChartFlotDonut from '../../Widget/Chart/Flot/AChartFlotDonut/AChartFlotDonut'

const eventBus = new Vue()
export default {
  name: 'APageChartFlot',
  components: { AChartFlotDonut, AChartFlotBar, AFlotAreaChart, AChartFlotInteractiveArea, AFlotChartLine },
  provide: { eventBus },
  data () {
    return {
      charts: {
        interactive: {
          totalPoints: 100,
          realtime: true, // If == to true then fetch data every x seconds. else stop fetching
          data: []
        }
      }
    }
  },
  mounted () {
    // if (this.charts.interactive.realtime) {
    // }
    this.chartUpdate()
  },
  methods: {
    updateFlotChartRealtime (value) {
      this.charts.interactive.realtime = value
      this.chartUpdate()
    },
    chartUpdate () {
      eventBus.$emit('chartDataUpdated', this.getChartInteractiveRandomData())

      if (this.charts.interactive.realtime) {
        setTimeout(this.chartUpdate, 500) // Fetch data ever x milliseconds
      }
    },
    getChartInteractiveRandomData () {
      if (this.charts.interactive.data.length > 0) {
        this.charts.interactive.data = this.charts.interactive.data.slice(1)
      }

      // Do a random walk
      while (this.charts.interactive.data.length < this.charts.interactive.totalPoints) {
        const prev = this.charts.interactive.data.length > 0 ? this.charts.interactive.data[this.charts.interactive.data.length - 1] : 50
        let y = prev + Math.random() * 10 - 5

        if (y < 0) {
          y = 0
        } else if (y > 100) {
          y = 100
        }

        this.charts.interactive.data.push(y)
      }

      // Zip the generated y values with the x values
      const res = []
      for (let i = 0; i < this.charts.interactive.data.length; ++i) {
        res.push([i, this.charts.interactive.data[i]])
      }

      return res
    }
  }
}
</script>
