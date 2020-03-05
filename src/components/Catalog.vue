<template>
  <fragment>
    <Category
      v-for="category in categories"
      :key="category.id"
      :description="category.description"
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
        type: Array,
        required: true
      }
    }
  }
</script>
