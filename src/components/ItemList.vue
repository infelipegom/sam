<template>
  <ul>
    <li v-for="item in items" :key="item.id">
      <router-link
        :to="{
          name: DETAIL,
          params: {
            item: {
              ...item,
              quantity: item.quantity || MIN_QUANTITY
            }
          }
        }"
      >
        <Item
          :description="item.description"
          :id="item.id"
          :image="item.image"
          :name="item.name"
          :price="item.price"
          :quantity="item.quantity || MIN_QUANTITY"
        />
      </router-link>
    </li>
  </ul>
</template>

<script>
  import Item from '@/components/Item'
  import { DETAIL } from '@/router'

  const MIN_QUANTITY = 1

  export default {
    name: 'ItemList',
    components: {
      Item
    },
    props: {
      items: {
        type: Array,
        required: true
      }
    },
    created: function() {
      this.DETAIL = DETAIL
      this.MIN_QUANTITY = MIN_QUANTITY
    }
  }
</script>
