<template>
  <div>
    <ItemImage :image="image" :name="name" />
    <div>
      <ItemName>{{ name }}</ItemName>
      <ItemDescription>{{ description }}</ItemDescription>
      <ItemPrice>{{ (price * quantity) | toBRL }}</ItemPrice>
    </div>
  </div>
</template>

<script>
  import ItemDescription from '@/components/ItemDescription.vue'
  import ItemImage from '@/components/ItemImage.vue'
  import ItemName from '@/components/ItemName.vue'
  import ItemPrice from '@/components/ItemPrice.vue'

  export default {
    name: 'Item',
    components: {
      ItemDescription,
      ItemImage,
      ItemName,
      ItemPrice
    },
    props: {
      description: {
        type: String,
        required: true
      },
      id: {
        type: String,
        required: true
      },
      image: {
        type: String,
        required: true
      },
      name: {
        type: String,
        required: true
      },
      quantity: {
        type: Number,
        required: true
      },
      price: {
        type: Number,
        required: true
      }
    }
  }
</script>
