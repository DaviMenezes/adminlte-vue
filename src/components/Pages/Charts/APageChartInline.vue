<template>
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Inline Charts</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active">Inline Charts</li>
            </ol>
          </div>
        </div>
      </div><!-- /.container-fluid -->
    </section>

    <!-- Main content -->
    <section class="content">
      <div class="container-fluid">
        <!-- row -->
        <div class="row">
          <div class="col-12">
            <!-- jQuery Knob -->
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">
                  <i class="far fa-chart-bar"></i>
                  Knob
                </h3>

                <div class="card-tools">
                  <button type="button" class="btn btn-tool" data-card-widget="collapse"><i
                    class="fas fa-minus"></i>
                  </button>
                  <button type="button" class="btn btn-tool" data-card-widget="remove"><i class="fas fa-times"></i>
                  </button>
                </div>
              </div>
              <!-- /.card-header -->
              <div class="card-body">
                <div class="row">
                  <div class="col-6 col-md-3 text-center">
                    <VueKnobControl :value="knob['1'].value" primary-color="#3c8dbc"></VueKnobControl>
                    <div class="knob-label">New Visitors</div>
                  </div>
                  <!-- ./col -->
                  <div class="col-6 col-md-3 text-center">
                    <VueKnobControl :value="knob['2'].value" primary-color="#f56954"></VueKnobControl>
                    <div class="knob-label">Bounce Rate</div>
                  </div>
                  <!-- ./col -->
                  <div class="col-6 col-md-3 text-center">
                    <VueKnobControl :value="knob['3'].value" :min="-150" :max="150" primary-color="#00a65a"></VueKnobControl>

                    <div class="knob-label">Server Load</div>
                  </div>
                  <!-- ./col -->
                  <div class="col-6 col-md-3 text-center">
                    <VueKnobControl :value="knob['4'].value" primary-color="#00c0ef"></VueKnobControl>
                    <div class="knob-label">Disk Space</div>
                  </div>
                  <!-- ./col -->
                </div>
                <!-- /.row -->

                <div class="row">
                  <div class="col-6 text-center">
                    <VueKnobControl :value="knob['5'].value" primary-color="#932ab6"></VueKnobControl>

                    <div class="knob-label">Bandwidth</div>
                  </div>
                  <!-- ./col -->
                  <div class="col-6 text-center">
                    <VueKnobControl :value="knob['6'].value" primary-color="#39CCCC"></VueKnobControl>

                    <div class="knob-label">CPU</div>
                  </div>
                  <!-- ./col -->
                </div>
                <!-- /.row -->
              </div>
              <!-- /.card-body -->
            </div>
            <!-- /.card -->
          </div>
          <!-- /.col -->
        </div>
        <!-- /.row -->

        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">
                  <i class="far fa-chart-bar"></i>
                  Knob Different Sizes
                </h3>

                <div class="card-tools">
                  <button type="button" class="btn btn-tool" data-card-widget="collapse"><i
                    class="fas fa-minus"></i>
                  </button>
                  <button type="button" class="btn btn-tool" data-card-widget="remove"><i class="fas fa-times"></i>
                  </button>
                </div>
              </div>
              <!-- /.card-header -->
              <div class="card-body">
                <div class="row">
                  <div class="col-6 col-md-3 text-center">
                    <VueKnobControl :value="knob['7'].value" :size="90" primary-color="#3c8dbc"></VueKnobControl>

                    <div class="knob-label">data-width="90"</div>
                  </div>
                  <!-- ./col -->
                  <div class="col-6 col-md-3 text-center">
                    <VueKnobControl :value="knob['8'].value" :size="120" primary-color="#f56954"></VueKnobControl>

                    <div class="knob-label">:size="120"</div>
                  </div>
                  <!-- ./col -->
                  <div class="col-6 col-md-3 text-center">
                    <VueKnobControl :value="knob['9'].value" :stroke-width="4" primary-color="#00a65a"></VueKnobControl>
                    <div class="knob-label">:stroke-width="4"</div>
                  </div>
                  <!-- ./col -->
                  <div class="col-6 col-md-3 text-center">
                    <VueKnobControl :value="knob['10'].value" primary-color="#E844C3" secondary-color="#E7B6DC"/>
                    <div class="knob-label">secondary-color</div>
                  </div>
                  <!-- ./col -->
                </div>
                <!-- /.row -->
              </div>
              <!-- /.card-body -->
            </div>
            <!-- /.card -->
          </div>
          <!-- /.col -->
        </div>
        <!-- /.row -->

        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">
                  <i class="far fa-chart-bar"></i>
                  Sparkline Style
                </h3>

                <div class="card-tools">
                  <button type="button" class="btn btn-tool" data-card-widget="collapse"><i
                    class="fas fa-minus"></i>
                  </button>
                  <button type="button" class="btn btn-tool" data-card-widget="remove"><i class="fas fa-times"></i>
                  </button>
                </div>
              </div>
              <!-- /.card-header -->
              <div class="card-body">
                <div class="row">
                  <div class="col-6 col-md-3 text-center">
                    <div id="tron_1" class="_align_center"></div>

                    <div class="knob-label">width 90</div>
                  </div>
                  <!-- ./col -->
                  <div class="col-6 col-md-3 text-center">
                    <div id="tron_2" class="_align_center"></div>
                    <div class="knob-label">width 120</div>
                  </div>
                  <!-- ./col -->
                  <div class="col-6 col-md-3 text-center">
                    <div id="tron_3" class="_align_center"></div>
                    <div class="knob-label">margin 4</div>
                  </div>
                  <!-- ./col -->
                  <div class="col-6 col-md-3 text-center">
                    <div id="tron_4" class="_align_center"></div>
                    <div class="knob-label">label true</div>
                  </div>
                  <!-- ./col -->
                </div>
                <!-- /.row -->
              </div>
              <!-- /.card-body -->
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
import VueKnobControl from 'vue-knob-control'
import ApexCharts from 'apexcharts'

export default {
  name: 'APageChartInline',
  components: { VueKnobControl },
  data () {
    return {
      knob: {
        1: { value: 30 },
        2: { value: 70 },
        3: { value: -80 },
        4: { value: 40 },
        5: { value: 38 },
        6: { value: 50 },
        7: { value: 30 },
        8: { value: 30 },
        9: { value: 30 },
        10: { value: 30 }
      },
      tron: {
        1: {
          data: { value: 30 },
          options: {
            series: [53, 67],
            chart: {
              type: 'radialBar',
              width: 90,
              height: 90,
              sparkline: {
                enabled: true
              }
            },
            dataLabels: {
              enabled: false
            },
            plotOptions: {
              radialBar: {
                hollow: {
                  margin: 0,
                  size: '50%'
                },
                track: {
                  margin: 1
                },
                dataLabels: {
                  show: false
                }
              }
            }
          }
        },
        2: {
          data: { value: 30 },
          options: {
            series: [53, 67],
            chart: {
              type: 'radialBar',
              width: 120,
              height: 120,
              sparkline: {
                enabled: true
              }
            },
            dataLabels: {
              enabled: false
            },
            plotOptions: {
              radialBar: {
                hollow: {
                  margin: 0,
                  size: '50%'
                },
                track: {
                  margin: 1
                },
                dataLabels: {
                  show: false
                }
              }
            }
          }
        },
        3: {
          data: { value: 30 },
          options: {
            series: [53, 67],
            chart: {
              type: 'radialBar',
              width: 90,
              height: 90,
              sparkline: {
                enabled: true
              }
            },
            dataLabels: {
              enabled: false
            },
            plotOptions: {
              radialBar: {
                hollow: {
                  margin: 0,
                  size: '50%'
                },
                track: {
                  margin: 4
                },
                dataLabels: {
                  show: false
                }
              }
            }
          }
        },
        4: {
          data: { value: 30 },
          options: {
            series: [53, 67],
            chart: {
              type: 'radialBar',
              width: 120,
              height: 120,
              sparkline: {
                enabled: true
              }
            },
            dataLabels: {
              enabled: false
            },
            plotOptions: {
              radialBar: {
                hollow: {
                  margin: 0,
                  size: '50%'
                },
                track: {
                  margin: 3
                },
                dataLabels: {
                  show: true
                }
              }
            }
          }
        }
      }
    }
  },
  props: {},
  mounted () {
    new ApexCharts(document.querySelector('#tron_1'), this.tron['1'].options).render()
    new ApexCharts(document.querySelector('#tron_2'), this.tron['2'].options).render()
    new ApexCharts(document.querySelector('#tron_3'), this.tron['3'].options).render()
    new ApexCharts(document.querySelector('#tron_4'), this.tron['4'].options).render()
  }
}
</script>
<style scoped>
  ._align_center {
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
