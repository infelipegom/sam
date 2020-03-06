<template>
  <fragment>
    <template v-if="!!basket.length">
      <ItemList :items="basket" />
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
  import ItemList from '@/components/ItemList.vue'
  import ItemPrice from '@/components/ItemPrice.vue'
  import { HOME_PATH } from '@/router'
  import { EMPTY_BASKET } from '@/store'

  export default {
    name: 'Basket',
    components: {
      BaseButton,
      ItemList,
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
      }
    }
  }
</script>
