<template>
  <div class="col-8 container">
    <form>
    <div class="form-group">
      <label>Name</label>
      <input type="text" class="form-control" :value="findProduct.name">
    </div>
    <div class="form-group">
      <label>Image Url</label>
      <input type="text" class="form-control" :value="findProduct.image_url">
    </div>
      <div class="form-group">
      <label>Price</label>
      <input type="number" class="form-control" :value="findProduct.price">
    </div>
    <div class="form-group">
      <label>Stock</label>
      <input type="number" class="form-control" :value="findProduct.stock">
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: ''
    }
  },
  computed: {
    findProduct () {
      return this.$store.state.product
    }
  }
}
</script>

<style>

</style>
