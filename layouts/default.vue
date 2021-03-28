<template lang="pug">
div
  .relative.shadow-md
    N-link.inline-flex.items-center.bg-gray-100.py-1.px-3.m-2(
      class="hover:bg-gray-200"
      v-for="(V, K, idx) in {'УЗит': '/', 'ИС: ТЭП': '/1_fr', 'ИС: Транспорт': '/2_fr'}"
      :key="idx"
      :to="V"
    ) {{K}}
  
  <Nuxt />
</template>

<style>
</style>
