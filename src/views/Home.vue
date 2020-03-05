<template>
  <fragment>
    <Catalog v-if="categories" :categories="categories" />
    <router-link v-if="cart.length" :to="CART_PATH">Cart</router-link>
  </fragment>
</template>

<script>
  import Catalog from '@/components/Catalog.vue'
  import { CART_PATH } from '@/router'

  export default {
    name: 'Home',
    components: {
      Catalog
    },
    data: function() {
      return {
        cart: this.$store.getters.cart
      }
    },
    computed: {
      categories: function() {
        return this.$store.getters.business.categories
      }
    },
    created: function() {
      this.CART_PATH = CART_PATH
    }
  }
</script>
