<template>
  <section>
    <CategoryName>{{ name }}</CategoryName>
    <CategoryDescription>{{ description }}</CategoryDescription>
    <ItemList :items="items" />
  </section>
</template>

<script>
  import CategoryDescription from '@/components/CategoryDescription.vue'
  import CategoryName from '@/components/CategoryName.vue'
  import ItemList from '@/components/ItemList.vue'

  export default {
    name: 'Category',
    components: {
      CategoryDescription,
      CategoryName,
      ItemList
    },
    props: {
      description: {
        type: String,
        required: true
      },
      items: {
        type: Array,
        required: true
      },
      name: {
        type: String,
        required: true
      }
    }
  }
</script>
