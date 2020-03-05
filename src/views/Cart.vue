<template>
  <ItemList :items="cart" />
</template>

<script>
  import ItemList from '@/components/ItemList.vue'

  export default {
    name: 'Cart',
    components: {
      ItemList
    },
    data: function() {
      return {
        cart: this.$store.getters.cart
      }
    }
  }
</script>
