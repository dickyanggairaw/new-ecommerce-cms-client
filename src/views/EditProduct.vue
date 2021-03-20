<template>
  <div class="col-8 container">
    <form>
      <div class="form-group">
        <label>Name</label>
        <input type="text" class="form-control" v-model="$store.state.product.name">
      </div>
      <div class="form-group">
        <label>Image Url</label>
        <input type="text" class="form-control" v-model="$store.state.product.image_url">
      </div>
        <div class="form-group">
        <label>Price</label>
        <input type="number" class="form-control" v-model="$store.state.product.price">
      </div>
      <div class="form-group">
        <label>Stock</label>
        <input type="number" class="form-control" v-model="$store.state.product.stock">
      </div>
      <button type="submit" class="btn btn-primary" @click.prevent="editProduct">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    editProduct () {
      this.$store.dispatch('editProductDetail', this.$store.state.product)
    }
  }
}
</script>

<style>

</style>
