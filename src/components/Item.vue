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
        required: true,
        type: String
      },
      id: {
        required: true,
        type: String
      },
      image: {
        required: true,
        type: String
      },
      name: {
        required: true,
        type: String
      },
      price: {
        required: true,
        type: Number
      },
      quantity: {
        required: true,
        type: Number
      }
    }
  }
</script>
