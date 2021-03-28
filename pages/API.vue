<template lang="pug">
.m-3
  .flex
    a-card(size='small', title='ВОЙТИ glazov@rosatom.dev', style='width: 300px')
      a-button(slot='extra', type='link', @click='getLoginData(loginGlazov)') more
      a-input(v-model='loginGlazov.username')
      a-input.my-3(v-model='loginGlazov.password')
      a-button(type='primary', @click='logIn(loginGlazov)') loginGlazov

    a-card.ml-3(size='small', title='ВОЙТИ superadmin@rosatom.dev', style='width: 300px')
      a-button(slot='extra', type='link', @click='getLoginData(loginSuperadmin)') more
      a-input(v-model='loginSuperadmin.username')
      a-input.my-3(v-model='loginSuperadmin.password')
      a-button(type='primary', @click='logIn(loginSuperadmin)') loginSuperadmin




  //
  pre {{ $auth.loggedIn }}
  pre {{ $auth.user }}
  pre.m-2.overflow-x-auto.rounded-md.bg-gray-200 {{ loginData }}

  a-divider(orientation='left') MODEL
  a-button(type='primary', @click='GET') assetInfos
  a-button.ml-2(type='primary', @click='POST("devices")') /api/devices findByQuery

  pre {{ DATA }}
</template>

<script>
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
          .then(() =>
            this.$toast.success('success', {
              duration: 4000,
              keepOnHover: true,
            })
          )
          .catch(() =>
            this.$toast.error('error', { duration: 4000, keepOnHover: true })
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
      this.loginData = data
    },

    async GET() {
      const data = await this.$axios.$get(
        'tenant/assetInfos?pageSize=10&page=0&sortProperty=createdTime&sortOrder=DESC&type=',
        {
          params: { ...this.getParams },
        }
      )
      this.DATA = data
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