<template>
  <div>
    <BaseButton v-if="!!handleAdd" @click="handleAdd(category, item)">
      Adicionar
    </BaseButton>
    <BaseButton v-if="!!handleEdit" @click="handleEdit(category, item)">
      Editar
    </BaseButton>
    <BaseButton v-if="!!handleRemove" @click="handleRemove(category, item)">
      Remover
    </BaseButton>
  </div>
</template>

<script>
  import BaseButton from '@/components/BaseButton'

  export default {
    name: 'ItemOptions',
    components: {
      BaseButton
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
      item: {
        required: true,
        type: Object
      }
    }
  }
</script>
