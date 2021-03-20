import Vue from 'vue'
import Vuex from 'vuex'
import axios from '@/axios/axios'
import router from '../router/index'
import swal from 'sweetalert'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    product: {},
    isLogin: false
  },
  mutations: {
    fetchProducts (state, data) {
      state.products = data
    },
    findProduct (state, data) {
      state.product = data
    },
    isLogin (state, data) {
      state.isLogin = data
    }
  },
  actions: {
    fetchProduct (context) {
      axios({
        method: 'GET',
        url: '/products',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          context.commit('fetchProducts', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    editProduct (context, id) {
      axios({
        method: 'GET',
        url: `/products/${id}`,
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          context.commit('findProduct', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    login (context, payload) {
      axios({
        url: '/login',
        method: 'POST',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(response => {
          console.log(response)
          localStorage.setItem('access_token', response.data.access_token)
          context.dispatch('isLogin')
          router.push('/')
        })
        .catch(err => {
          swal('error ' + err.response.data.errors)
        })
    },
    addProduct (context, payload) {
      return axios({
        url: '/products',
        method: 'POST',
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          name: payload.name,
          image_url: payload.image_url,
          price: payload.price,
          stock: payload.stock
        }
      })
    },
    editProductDetail (context, payload) {
      axios({
        url: '/products/' + payload.id,
        method: 'PUT',
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          name: payload.name,
          image_url: payload.image_url,
          price: payload.price,
          stock: payload.stock
        }
      })
        .then(() => {
          router.push('/')
        })
        .catch(err => {
          swal('error ' + err.response.data.errors)
        })
    },
    deleteProduct (context, id) {
      return axios({
        method: 'DELETE',
        url: `/products/${id}`,
        headers: {
          access_token: localStorage.access_token
        }
      })
    },
    isLogin (context) {
      if (localStorage.access_token) {
        context.commit('isLogin', true)
      } else {
        context.commit('isLogin', false)
      }
    },
    logout (context) {
      localStorage.removeItem('access_token')
      context.commit('isLogin', false)
    }
  },
  modules: {
  }
})
