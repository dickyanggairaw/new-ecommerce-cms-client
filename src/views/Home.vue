<template>
  <div class="home">
    <div class="container">
      <button type="submit" class="btn btn-dark w-10" @click="addProduct">Add Product</button>
    </div><br>
    <div class="container">
      <div class="row" v-for="product in products" :key="product.id">
        <ProductTask :title="product.name" :image_url="product.image_url" :price="product.price" :stock="product.stock" :id="product.id" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ProductTask from '../components/ProductTask'

export default {
  data () {
    return {
    }
  },
  components: {
    ProductTask
  },
  methods: {
    fetchAll () {
      this.$store.dispatch('fetchProduct')
    },
    addProduct () {
      this.$router.push('/create')
    }
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  created () {
    this.fetchAll()
  }
}
</script>
