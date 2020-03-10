<template>
  <section>
    <CategoryName>{{ name }}</CategoryName>
    <CategoryDescription v-if="!!description">
      {{ description }}
    </CategoryDescription>
    <ItemList
      :category="{ id, name }"
      :handleAdd="handleAdd"
      :handleEdit="handleEdit"
      :handleRemove="handleRemove"
      :items="items"
    />
  </section>
</template>

<script>
  import CategoryDescription from '@/components/CategoryDescription'
  import CategoryName from '@/components/CategoryName'
  import ItemList from '@/components/ItemList'

  export default {
    name: 'Category',
    components: {
      CategoryDescription,
      CategoryName,
      ItemList
    },
    props: {
      description: {
        default: '',
        type: String
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
      id: {
        required: true,
        type: String
      },
      items: {
        required: true,
        type: Array
      },
      name: {
        required: true,
        type: String
      }
    }
  }
</script>
