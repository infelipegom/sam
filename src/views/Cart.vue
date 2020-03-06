<template>
  <fragment>
    <ItemList :items="cart" />
    <ItemPrice>{{ totalPrice }}</ItemPrice>
  </fragment>
</template>

<script>
  import ItemList from '@/components/ItemList.vue'
  import ItemPrice from '@/components/ItemPrice.vue'

  export default {
    name: 'Cart',
    components: {
      ItemList,
      ItemPrice
    },
    data: function() {
      return {
        cart: this.$store.getters.cart,
        totalPrice: this.$store.getters.totalPrice
      }
    }
  }
</script>
