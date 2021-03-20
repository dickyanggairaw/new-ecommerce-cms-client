<template>
  <div>
    <div>
    <!-- Content here -->
      <div class="card">
        <div class="card-body">
          <img :src="image_url" class="card-img-top" alt="...">
          <h5 class="card-title">{{ title }}</h5>
          <h6 class="card-subtitle mb-2 text-muted">Rp <span>{{ price }}</span></h6>
          <p class="card-text">Stock: <span>{{ stock }}</span></p>
          <button class="btn btn-sm btn-danger w-20" @click="deleteProduct">Delete</button>
          <button class="btn btn-sm btn-primary w-20" @click="editProduct">Edit</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import swal from 'sweetalert'

export default {
  props: ['title', 'image_url', 'price', 'stock', 'id'],
  methods: {
    editProduct () {
      this.$store.dispatch('editProduct', this.id)
      this.$router.push('/edit/' + this.id)
    },
    deleteProduct () {
      this.$store.dispatch('deleteProduct', this.id)
        .then(() => {
          this.$store.dispatch('fetchProduct')
          swal('Sukses delete Product ' + this.title)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style scoped>
    button{
      margin: 10px;
    }
</style>
