<template>
  <fragment>
    <Catalog v-if="categories" :categories="categories" />
    <router-link v-if="basket.length" :to="BASKET_PATH">Cesta</router-link>
  </fragment>
</template>

<script>
  import Catalog from '@/components/Catalog.vue'
  import { BASKET_PATH } from '@/router'

  export default {
    name: 'Home',
    components: {
      Catalog
    },
    data: function() {
      return {
        basket: this.$store.getters.basket
      }
    },
    computed: {
      categories: function() {
        return this.$store.getters.business.categories
      }
    },
    created: function() {
      this.BASKET_PATH = BASKET_PATH
    }
  }
</script>
