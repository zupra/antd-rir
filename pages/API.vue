<template lang="pug">


.m-3
  .flex
    a-card(
      size='small',
      title='ВОЙТИ glazov@rosatom.dev',
      style='width: 300px'
    )
      a-button(slot='extra', type='link', @click='getLoginData(loginGlazov)') res:login
      a-input(v-model='loginGlazov.username')
      a-input.my-3(v-model='loginGlazov.password')
      a-button(type='primary', @click='logIn(loginGlazov)') loginGlazov

    a-card.ml-3(
      size='small',
      title='ВОЙТИ superadmin@rosatom.dev',
      style='width: 300px'
    )
      a-button(
        slot='extra',
        type='link',
        @click='getLoginData(loginSuperadmin)'
      ) res:login
      a-input(v-model='loginSuperadmin.username')
      a-input.my-3(v-model='loginSuperadmin.password')
      a-button(type='primary', @click='logIn(loginSuperadmin)') loginSuperadmin

  //
  pre.mt-3 $auth.loggedIn : {{ $auth.loggedIn }}
  pre $auth.user : {{ $auth.user }}
  pre.p-2.text-xs.overflow-x-auto.rounded-md.bg-gray-200 {{ loginData }}

  a-divider(orientation='left') MODEL


  

  a-card(
    size='small',
    title='Тест API_Glazov',
  )
    a-button.mr-1(
      v-for='(K, V, idx) in API_Glazov',
      :key="idx"
      @click='GET(K)'
    ) {{ V }}

    a-button.ml-1(type='primary', @click='POST("devices")') devices(findByQuery)

  pre {{ DATA }}
</template>




<script>
const API_Glazov = {
  'tenant/devices': 'tenant/devices?pageSize=100&page=0',
  'tenant/assetInfos':
    'tenant/assetInfos?pageSize=10&page=0&sortProperty=createdTime&sortOrder=DESC&type=',
  'device/types': 'device/types',
  'entityView/types': 'entityView/types'

}

export default {
  data() {
    return {
      loginData: null,
      loginGlazov: {
        username: 'glazov@rosatom.dev',
        password: 'tenant',
      },
      loginSuperadmin: {
        username: 'superadmin@rosatom.dev',
        password: 'superadmin',
      },

      //
      API_Glazov,
      DATA: null,
      Params: {},
    }
  },

  methods: {
    async logIn(USER) {
      try {
        const response = await this.$auth
          .loginWith('local', {
            data: USER,
          })
          // .then(() =>
          //   this.$toast.success('success', {
          //     duration: 4000,
          //     keepOnHover: true,
          //   })
          // )
          // .catch(() =>
          //   this.$toast.error('error', { duration: 4000, keepOnHover: true })
          // )
          .finally(() =>
            this.$toast.success(`вход под ${USER.username}`, { duration: 4000, keepOnHover: true })
          )
        console.log(response)
      } catch (err) {
        console.log(err)
      }
    },

    async getLoginData(USER) {
      const data = await this.$axios.$post('auth/login', {
        ...USER,
      })
      // this.loginData = data
      this.loginData = {...data, USER: USER.username, 'X-Authorization': data ? `Bearer ${data.token}` : ''}
    },

    async GET(URL) {
      try {
        const data = await this.$axios.$get(`${URL}`, {
          params: { ...this.Params },
        })
        this.$toast.success('success', {
          duration: 3000,
          keepOnHover: true,
        })
        this.DATA = data
      } catch (err) {
        this.$toast.error('error', { duration: 4000, keepOnHover: true })
      }
    },
    async POST(Params = {}) {
      const data = await this.$axios.$post('', { ...this.Params })
      this.DATA = data
    },
  },
}
</script>

<style>
</style>