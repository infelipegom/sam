<template>
  <fragment>
    <ItemList :items="basket" />
    <ItemPrice>{{ totalPrice }}</ItemPrice>
  </fragment>
</template>

<script>
  import ItemList from '@/components/ItemList.vue'
  import ItemPrice from '@/components/ItemPrice.vue'

  export default {
    name: 'Basket',
    components: {
      ItemList,
      ItemPrice
    },
    data: function() {
      return {
        basket: this.$store.getters.basket,
        totalPrice: this.$store.getters.totalPrice
      }
    }
  }
</script>
