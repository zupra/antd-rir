<template lang="pug" functional>
.p-5.bg-white.rounded.shadow-sm
  .text-base.text-gray-400 {{props.title}}
  .flex.items-center.pt-1
    .text-2xl.font-bold.text-gray-900 {{props.num}}
    
    // plus
    .flex.items-center.px-2.py-1.mx-2.text-sm.text-green-600.bg-green-100.rounded-full(
      v-if="props.plus"
    )
      svg.w-4.h-4(viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg')
        path(d='M18 15L12 9L6 15' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round')
      span {{props.plus}}

    // minus
    .flex.items-center.px-2.py-1.mx-2.text-sm.text-red-600.bg-red-100.rounded-full(
      v-if="props.minus"
    )
      svg.w-4.h-4(viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg')
        path(d='M6 9L12 15L18 9' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round')
      span {{props.minus}}

</template>



<script>
export default {

  props: {
    title: {
      type: String,
      default: 'Title',
    },
    num: {
      type: String,
      default: 'Num',
    },
    plus: {
      type: [String, Boolean],
      default: false,
    },
    minus: {
      type: [String, Boolean],
      default: false,
    },
  },

}
</script>

<style>

</style>