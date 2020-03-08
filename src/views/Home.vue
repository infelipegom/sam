<template>
  <fragment>
    <section v-for="category in categories" :key="category.id">
      <CategoryName>{{ category.name }}</CategoryName>
      <CategoryDescription>{{ category.description }}</CategoryDescription>
      <ItemList :items="category.items" />
    </section>
    <router-link v-if="basket.length" :to="BASKET_PATH">Cesta</router-link>
  </fragment>
</template>

<script>
  import CategoryDescription from '@/components/CategoryDescription.vue'
  import CategoryName from '@/components/CategoryName.vue'
  import ItemList from '@/components/ItemList.vue'
  import { BASKET_PATH } from '@/router'

  export default {
    name: 'Home',
    components: {
      CategoryDescription,
      CategoryName,
      ItemList
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
