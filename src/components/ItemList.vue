<template>
  <ul>
    <li v-for="item in items" :key="item.id">
      <Item
        :description="item.description"
        :id="item.id"
        :image="item.image"
        :name="item.name"
        :price="item.price"
        :quantity="item.quantity || MIN_QUANTITY"
      />
      <ItemOptions
        v-if="handleAdd || handleEdit || handleRemove"
        :category="category"
        :handleAdd="handleAdd"
        :handleEdit="handleEdit"
        :handleRemove="handleRemove"
        :item="{ ...item, quantity: item.quantity || MIN_QUANTITY }"
      />
    </li>
  </ul>
</template>

<script>
  import Item from '@/components/Item'
  import ItemOptions from '@/components/ItemOptions'

  const MIN_QUANTITY = 1

  export default {
    name: 'ItemList',
    components: {
      Item,
      ItemOptions
    },
    props: {
      category: {
        required: true,
        type: Object
      },
      handleAdd: {
        type: Function
      },
      handleEdit: {
        type: Function
      },
      handleRemove: {
        type: Function
      },
      items: {
        required: true,
        type: Array
      }
    },
    created: function() {
      this.MIN_QUANTITY = MIN_QUANTITY
    }
  }
</script>
