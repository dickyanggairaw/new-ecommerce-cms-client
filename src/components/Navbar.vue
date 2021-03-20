<template>
  <div id="nav">
    <router-link v-if="isLoginUser" to="/">Home  | </router-link>
    <router-link to="/login" v-if="!isLoginUser">Login</router-link>
    <a href="" v-if="isLoginUser" @click="logout">Logout</a>
  </div>
</template>

<script>
export default {
  methods: {
    isLogin () {
      this.$store.dispatch('isLogin')
    },
    logout () {
      this.$store.dispatch('logout')
    }
  },
  computed: {
    isLoginUser () {
      return this.$store.state.isLogin
    }
  },
  created () {
    this.isLogin()
  }
}
</script>

<style>

</style>
