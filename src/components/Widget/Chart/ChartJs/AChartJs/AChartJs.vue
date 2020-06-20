<template>
  <div class="chart">
    <canvas :id="id_local" class="AChartJs"
      :style="'min-height:'+ min_height+'px; height:'+height+'px; max-height:'+max_height+'px; max-width:'+max_width+'%;'"
    />
  </div>
</template>

<script>
import $ from 'jquery'
import Chart from 'chart.js'
export default {
  name: 'AChartJs',
  data () {
    return {
      id_local: this.id,
      type_local: this.type
    }
  },
  props: {
    id: { type: [String, Number], default: Math.floor(Math.random() * 1000) },
    type: { type: String, required: true },
    labels: Array,
    datasets: Array,
    options: Object,
    min_height: { type: [String, Number], default: 250 },
    height: { type: [String, Number], default: 250 },
    max_height: { type: [String, Number], default: 250 },
    max_width: { type: [String, Number], default: 100 }

  },
  mounted () {
    // This will get the first returned node in the jQuery collection.
    const canvas = $('#' + this.id_local).get(0).getContext('2d')
    // eslint-disable-next-line no-new
    new Chart(canvas, {
      type: this.type_local,
      data: { labels: this.labels, datasets: this.datasets },
      options: this.options
    })
  }
}
</script>
