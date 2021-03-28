<template lang="pug">
.h-screen.flex

  .m-auto(
    style="width:300px"
  )
    pre.overflow-x-auto {{error}}

    //- N-link.text-2xl(to='/API') API
    a-button(type='primary', @click='reload') Обновить

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