<template>
  <v-app>
  <router-view></router-view>

  </v-app>
</template>

<script>
import Api from '@/services/Api'

export default {
  name: 'App',
  components: {},
  data: () => ({
    //
  }),
  mounted: function () {
    Api.getToken().then(
      response => localStorage.setItem('token', response.token))
      .catch(err => console.log(err))
  }
}
</script>
