<template>
  <fragment>
    <ItemImage :image="item.image" :name="item.name" />
    <ItemName>{{ item.name }}</ItemName>
    <ItemDescription>{{ item.description }}</ItemDescription>
    <ItemPrice>{{ item.price | toBRL }}</ItemPrice>
    <div>
      <BaseStepper
        @decrement="handleDecrement"
        @increment="handleIncrement"
        :initialCount="selectedQuantity"
        :max="MAX_QUANTITY"
        :min="MIN_QUANTITY"
      />
      <BaseButton @click="addToBasket">
        Confirmar {{ (item.price * selectedQuantity) | toBRL }}
      </BaseButton>
    </div>
  </fragment>
</template>

<script>
  import BaseButton from '@/components/BaseButton.vue'
  import BaseStepper from '@/components/BaseStepper.vue'
  import ItemDescription from '@/components/ItemDescription.vue'
  import ItemImage from '@/components/ItemImage.vue'
  import ItemName from '@/components/ItemName.vue'
  import ItemPrice from '@/components/ItemPrice.vue'
  import clamp from '@/helpers/clamp'
  import { HOME_PATH } from '@/router'
  import { ADD_TO_BASKET } from '@/store'

  const MAX_QUANTITY = 99
  const MIN_QUANTITY = 1

  export default {
    name: 'Detail',
    components: {
      BaseButton,
      BaseStepper,
      ItemDescription,
      ItemImage,
      ItemName,
      ItemPrice
    },
    data: function() {
      const { category, item } = this.$route.params

      return {
        category,
        item,
        selectedQuantity: item.quantity
      }
    },
    created: function() {
      this.MAX_QUANTITY = MAX_QUANTITY
      this.MIN_QUANTITY = MIN_QUANTITY
    },
    methods: {
      addToBasket: function() {
        this.$store.dispatch(ADD_TO_BASKET, {
          category: this.category,
          item: { ...this.item, quantity: this.selectedQuantity }
        })
        this.$router.push(HOME_PATH)
      },
      handleDecrement: function() {
        this.selectedQuantity = clamp(
          this.selectedQuantity - 1,
          MIN_QUANTITY,
          MAX_QUANTITY
        )
      },
      handleIncrement: function() {
        this.selectedQuantity = clamp(
          this.selectedQuantity + 1,
          MIN_QUANTITY,
          MAX_QUANTITY
        )
      }
    }
  }
</script>
