<template>
  <div>
    <h2 class="container">Login</h2><br>
    <form id="form-login" class="container">
        <div class="form-group">
          <input
            type="email"
            class="form-control"
            placeholder="Type an email"
            v-model="email"
            required
          />
        </div>
        <div class="form-group">
          <input
            type="password"
            class="form-control"
            placeholder="Type password"
            v-model="password"
            required
          />
        </div>
        <button type="submit" class="btn btn-dark w-20" @click="login">Login</button>
      </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      this.$store.dispatch('login', {
        email: this.email,
        password: this.password
      })
      this.$router.push('/')
    }
  }
}
</script>

<style>

</style>
