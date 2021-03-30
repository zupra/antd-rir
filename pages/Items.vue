<template lang="pug">
.p-4.bg-gray-50.min-h-screen
  //- .grid.gap-7.grid-cols-4.pt-8
  .grid.grid-flow-col.auto-cols-min.gap-7
    O-Metrics.mr-3(
      v-for='(It, idx) in DATA_metrics',
      :key='idx',
      :title='It.title',
      :num='It.num',
      :plus='It.plus',
      :minus='It.minus'
    )

  //- pre {{DATA_metrics}}


  a-divider(
    orientation="left"
  ) Диаграммы

  a-radio-group(:value='chartIs', @change='handleChange')
    a-radio-button(
      v-for='(chart, idx) in ["ChartLine", "ChartBar", "ChartPie"]',
      :key='idx',
      :value="chart"
    ) {{ chart }}
  component(
    :is='chartIs',
    :chartData='DATA_chart',
    :options='{ responsive: true, maintainAspectRatio: false }',
    style='height: 460px'
  )
  //-
    ChartLine(
      :chartData="DATA_chart"
      style="height: 200px"
    )


  pre {{ this.$refs.canvas }}
</template>

<script>
function randomInt(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1)
  rand = Math.round(rand)
  return rand
}

const DATA_chart = {
  labels: Array.from({ length: 31 }, (_, idx) => idx + 1),
  datasets: [
    {
      label: 'Август',
      backgroundColor: 'rgba(61, 117, 228, .1)',
      borderColor: 'rgba(61,117,228,1)',
      borderWidth: 2,
      // pointBackgroundColor: 'rgba(43, 208, 118,1)',
      // pointBorderColor: '#fff',
      data: Array.from({ length: 31 }, (_, idx) => randomInt(0, 300)),
    },
    {
      label: 'Июль',
      backgroundColor: "rgba(253, 244, 255, .5)",
      borderColor: "rgba(232, 121, 249, 1)",    
      borderWidth: 2,

      data: Array.from({ length: 31 }, (_, idx) => randomInt(0, 300)),
    },
  ],
}

import Line from '~/components/chart/Line.js'
import Bar from '~/components/chart/Bar.js'
import Pie from '~/components/chart/Pie.js'

export default {
  components: {
    ChartLine: Line,
    ChartBar: Bar,
    ChartPie: Pie,
  },

  data() {
    return {
      chartIs: 'ChartLine',
      DATA_metrics: null,
      DATA_chart,
    }
  },

  created() {
    this.DATA_metrics = Array.from({ length: 4 }, (_, idx) => ({
      // id: idx + 1,
      title: this.$faker.finance.currencyCode(),
      num: this.$faker.commerce.price(),
      [this.$faker.datatype.boolean()
        ? 'plus'
        : 'minus']: this.$faker.commerce.price(),
    }))
  },
  methods: {
    handleChange(e) {
      this.chartIs = e.target.value
    },
  },
}
</script>

<style>
</style>