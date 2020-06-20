import AChartJs from './AChartJs'
export default {
  components: { AChartJs },
  data () {
    return {
      id_local: this.id,
      labels_local: this.labels,
      datasets_local: this.datasets,
      options_local: this.options
    }
  },
  props: {
    id: String,
    labels: Array,
    datasets: Array,
    options: Object
  }
}
