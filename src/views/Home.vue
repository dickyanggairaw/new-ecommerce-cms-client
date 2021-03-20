<template>
  <div class="home">
    <div class="container">
      <button type="submit" class="btn btn-dark w-10" @click.prevent="addProduct" v-if="isLoginUser">Add Product</button>
    </div><br>
    <Product v-if="isLoginUser"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Product from '../components/Product'

export default {
  data () {
    return {
    }
  },
  components: {
    Product
  },
  methods: {
    addProduct () {
      this.$router.push('/create')
    },
    isLogin () {
      this.$store.dispatch('isLogin')
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
