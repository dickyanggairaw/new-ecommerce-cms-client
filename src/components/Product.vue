<template>
  <div class="container">
    <div class="row">
      <div class="col-4" v-for="product in products" :key="product.id">
        <ProductTask :title="product.name" :image_url="product.image_url" :price="product.price" :stock="product.stock" :id="product.id" />
      </div>
    </div>
  </div>
</template>

<script>
import ProductTask from './ProductTask'

export default {
  components: {
    ProductTask
  },
  methods: {
    fetchAll () {
      this.$store.dispatch('fetchProduct')
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

<style>

</style>
