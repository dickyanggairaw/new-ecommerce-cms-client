<template>
  <div>
    <h2 class="container">Login</h2><br>
    <form id="form-login" class="container" @submit.prevent="login">
        <div class="form-group">
          <input
            type="email"
            class="form-control"
            v-model="email_login"
            placeholder="Type an email"
            required
          />
        </div>
        <div class="form-group">
          <input
            type="password"
            class="form-control"
            v-model="password_login"
            placeholder="Type password"
            required
          />
        </div>
        <button type="submit" class="btn btn-dark w-20">Login</button>
      </form>
      <div class="container">
        <GoogleLogin :params="params" :renderParams="renderParams" :onSuccess="onSuccess" :onFailure="onFailure"></GoogleLogin>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
