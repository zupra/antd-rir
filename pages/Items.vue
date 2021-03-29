<template lang="pug">
.p-4.bg-gray-50.min-h-screen

  .pt-8.grid.gap-7.grid-cols-4

    .p-5.bg-white.rounded.shadow-sm(
      v-for="(N,_) in Array(4)"
    )
      .text-base.text-gray-400 Total Sales
      .flex.items-center.pt-1
        .text-2xl.font-bold.text-gray-900 9850.90
        span.flex.items-center.px-2.py-1.mx-2.text-sm.text-green-600.bg-green-100.rounded-full
          svg.w-4.h-4(viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg')
            path(d='M18 15L12 9L6 15' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round')
          span 2.5%


  .flex.mt-4
    O-Metrics(
      title="Обращений"
      num="2728"
      minus="1.8%"
    )


  pre {{DATA}}

</template>

<script>
export default {

  data() {
    return {
      DATA: null,
    }
  },

  created() {
    this.DATA = Array.from({ length: 4 }, (_, idx) => ({
      // id: idx + 1,
      title: this.$faker.company.catchPhrase(),
      num1: this.$faker.commerce.price(),
      comment: this.$faker.lorem.sentences(),
    }))
  }
}
</script>

<style>

</style>