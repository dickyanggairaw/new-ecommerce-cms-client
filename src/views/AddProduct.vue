<template>
  <div class="col-8 container">
    <form>
      <div class="form-group">
        <label>Name</label>
        <input type="text" class="form-control" v-model="name">
      </div>
      <div class="form-group">
        <label>Image Url</label>
        <input type="text" class="form-control" v-model="image_url">
      </div>
        <div class="form-group">
        <label>Price</label>
        <input type="number" class="form-control" v-model="price">
      </div>
      <div class="form-group">
        <label>Stock</label>
        <input type="number" class="form-control" v-model="stock">
      </div>
      <button type="submit" class="btn btn-primary" @click.prevent="addProduct">Submit</button>
    </form>
  </div>
</template>

<script>
import swal from 'sweetalert'

export default {
  data () {
    return {
      name: '',
      image_url: '',
      price: 0,
      stock: 0
    }
  },
  methods: {
    addProduct () {
      const data = {
        name: this.name,
        image_url: this.image_url,
        price: this.price,
        stock: this.stock
      }
      this.$store.dispatch('addProduct', data)
        .then(() => {
          swal('Success add Product')
          this.$router.push('/')
        })
        .catch((err) => {
          swal('error ' + err.response.data.errors)
          // this.$router.push('/create')
        })
      this.name = ''
      this.image_url = ''
      this.price = ''
      this.stock = ''
    }
  }
}
</script>

<style>

</style>
