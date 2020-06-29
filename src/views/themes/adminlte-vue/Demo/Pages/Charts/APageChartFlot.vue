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
                <a-flot-chart-line :data="charts.line.data"/>
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
                <a-flot-area-chart :data="charts.area.data"/>
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
                <a-chart-flot-bar :data="charts.bar.data" :xaxis_ticks="charts.bar.xaxis"/>
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
                <a-chart-flot-donut :data="charts.donut.data"/>
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
import AFlotChartLine from '@/components/Widget/Chart/Flot/AFlotChartLine/AFlotChartLine'
import AChartFlotInteractiveArea from '@/components/Widget/Chart/Flot/AFlotChartInteractiveArea/AChartFlotInteractiveArea'
import AFlotAreaChart from '@/components/Widget/Chart/Flot/AFlotAreaChart/AFlotAreaChart'
import AChartFlotBar from '@/components/Widget/Chart/Flot/AChartFlotBar/AChartFlotBar'
import AChartFlotDonut from '@/components/Widget/Chart/Flot/AChartFlotDonut/AChartFlotDonut'

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
        },
        bar: {
          data: [[1, 10], [2, 8], [3, 4], [4, 13], [5, 17], [6, 9]],
          xaxis: [
            [1, 'January'],
            [2, 'February'],
            [3, 'March'], [4, 'April'], [5, 'May'], [6, 'June']
          ]
        },
        donut: {
          data: [
            {
              label: 'Series2',
              data: 30,
              color: '#3c8dbc'
            },
            {
              label: 'Series3',
              data: 20,
              color: '#0073b7'
            },
            {
              label: 'Series4',
              data: 50,
              color: '#00c0ef'
            }
          ]
        },
        area: {
          data: [[2, 88.0], [3, 93.3], [4, 102.0], [5, 108.5], [6, 115.7], [7, 115.6],
            [8, 124.6], [9, 130.3], [10, 134.3], [11, 141.4], [12, 146.5], [13, 151.7], [14, 159.9],
            [15, 165.4], [16, 167.8], [17, 168.7], [18, 169.5], [19, 168.0]]
        },
        line: {
          sin: [],
          cos: [],
          data: []
        }
      }
    }
  },
  created () {
    for (let i = 0; i < 14; i += 0.5) {
      this.charts.line.sin.push([i, Math.sin(i)])
      this.charts.line.cos.push([i, Math.cos(i)])
    }
    this.charts.line.data.push({ data: this.charts.line.sin, label: 'Example 1', color: '#3c8dbc' })
    this.charts.line.data.push({ data: this.charts.line.cos, label: 'Example 2', color: '#00c0ef' })

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
