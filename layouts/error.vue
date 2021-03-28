<template lang="pug">
.h-screen.flex

  .m-auto(
    style="width:340px"
  )
    pre.overflow-x-auto.p-2.rounded-md.bg-gray-200 {{error}}

    .flex
      N-link(to='/')
        a-button(type='primary') На главную
      a-button.ml-3(type='primary', @click='reload') Обновить

</template>

<script>
export default {
  props: ['error'],
  asyncData() {
    throw new Error(':(')
  },
  mounted() {
    console.error('ERROR:', this.error.statusCode, this.error.message)
    console.table(this.error)
  },
  methods: {
    reload() {
      location.reload()
    }
  }
}
</script>