<template lang="pug">
nav.MainAside
  ul
    li(
      v-for="(It, idx) in links"
      :key="idx"
    )
      N-link.MainAside__link.flex.pt-3.pb-3.pl-7(
        :to="It.link"
      )
        img.w-4.h-4(:src="require(`~/public/aside/${It.img}.svg`)")
        p.ml-3.MainAside__link {{ It.name }}
    li.mt-3
      N-link.MainAside__link(
        to="/sandbox"
      ) Песочница

    li.mt-4
      N-link.MainAside__link(
        to="/API"
      ) Test API
    li.mt-4
      N-link.MainAside__link(
        to="/uzit"
      ) Карта территории
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          name: 'Дашборд',
          img: 'dashboard_16',
          link: '/dashboard/objects',
        },
        {
          name: 'Отчеты',
          img: 'insert_16',
          link: '/otchety',
        },
        {
          name: 'База знаний',
          img: 'knowledge_16',
          link: '/baza-znanii',
        },
        {
          name: 'Оплата',
          img: 'payment-wallet_16',
          link: '/oplata',
        },
        {
          name: 'Заявки',
          img: 'application_16',
          link: '/zayavki',
        },
      ],
    }
  },
}
</script>

<style lang="stylus" scoped>
.MainAside
  background #000
  &__link
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    opacity 0.72
    color: $clr_amelie;
    &:hover
      background: $clr_titanic
      opacity: 0.92;
      color: $clr_amelie;
    &-text
      color: $clr_amelie;
// ACTIVE LINK
  .nuxt-link-active
    opacity 1
    background: $clr_titanic
    position relative
  .nuxt-link-exact-active
    &:before
      content ''
      position absolute
      left 0
      top 0
      width 4px
      height 100%
      background $clr_rocky
</style>
