<template>
  <fragment>
    <Catalog
      v-if="categories"
      :categories="categories"
      :handleAdd="handleAdd"
    />
    <router-link v-if="basket.length" :to="BASKET_PATH">Cesta</router-link>
  </fragment>
</template>

<script>
  import Catalog from '@/components/Catalog.vue'
  import { BASKET_PATH, DETAIL } from '@/router'

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
      this.DETAIL = DETAIL
    },
    methods: {
      handleAdd: function(category, item) {
        this.$router.push({
          name: DETAIL,
          params: { category, item }
        })
      }
    }
  }
</script>
