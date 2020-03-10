<template>
  <fragment>
    <Category
      v-for="category in categories"
      :key="category.id"
      :description="category.description"
      :handleAdd="handleAdd"
      :handleEdit="handleEdit"
      :handleRemove="handleRemove"
      :id="category.id"
      :items="category.items"
      :name="category.name"
    />
  </fragment>
</template>

<script>
  import Category from '@/components/Category.vue'

  export default {
    name: 'Catalog',
    components: {
      Category
    },
    props: {
      categories: {
        required: true,
        type: Array
      },
      handleAdd: {
        type: Function
      },
      handleEdit: {
        type: Function
      },
      handleRemove: {
        type: Function
      }
    }
  }
</script>
