import { Pie, mixins } from 'vue-chartjs'
import { baseOptions } from './_options.js'

const { reactiveProp } = mixins
export default {
  extends: Pie,
  mixins: [reactiveProp],
  props: ['chartData', 'options'],
  data() {
    return {
      baseOptions,
    }
  },
  mounted() {
    this.renderChart(this.chartData, { ...this.baseOptions, ...this.options })
  },
}
