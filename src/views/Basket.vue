<template>
  <fragment>
    <template v-if="!!basket.length">
      <Catalog
        :categories="basket"
        :handleEdit="handleEdit"
        :handleRemove="handleRemove"
      />
      <ItemPrice>{{ totalPrice | toBRL }}</ItemPrice>
      <BaseButton @click="emptyBasket">
        Esvaziar Cesta
      </BaseButton>
    </template>
    <template v-else>
      <router-link :to="HOME_PATH">Catálogo</router-link>
    </template>
  </fragment>
</template>

<script>
  import BaseButton from '@/components/BaseButton.vue'
  import Catalog from '@/components/Catalog.vue'
  import ItemPrice from '@/components/ItemPrice.vue'
  import { DETAIL, HOME_PATH } from '@/router'
  import { EMPTY_BASKET } from '@/store'

  export default {
    name: 'Basket',
    components: {
      BaseButton,
      Catalog,
      ItemPrice
    },
    computed: {
      basket: function() {
        return this.$store.getters.basket
      },
      totalPrice: function() {
        return this.$store.getters.totalPrice
      }
    },
    created: function() {
      this.HOME_PATH = HOME_PATH
    },
    methods: {
      emptyBasket: function() {
        this.$store.dispatch(EMPTY_BASKET)
      },
      handleEdit: function(category, item) {
        this.$router.push({
          name: DETAIL,
          params: { category, item }
        })
      },
      handleRemove: function(category, item) {
        console.log(category, item)
      }
    }
  }
</script>
