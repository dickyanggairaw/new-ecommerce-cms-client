<template>
  <div class="home">
    <div class="container">
      <button type="submit" class="btn btn-dark w-10">Add Product</button>
    </div><br>
    <CardTask/>
  </div>
</template>

<script>
// @ is an alias to /src
import CardTask from '../components/CardTask'

export default {
  name: 'Home',
  components: {
    CardTask
  }
}
</script>
