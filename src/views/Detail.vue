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
      <BaseButton @click="addToCart">
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
  import { HOME_PATH } from '@/router'
  import { ADD_TO_CART } from '@/store'

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
      const { item } = this.$route.params

      return {
        item,
        selectedQuantity: item.quantity
      }
    },
    created: function() {
      this.MAX_QUANTITY = MAX_QUANTITY
      this.MIN_QUANTITY = MIN_QUANTITY
    },
    methods: {
      addToCart: function() {
        this.$store.dispatch(ADD_TO_CART, {
          ...this.item,
          quantity: this.selectedQuantity
        })
        this.$router.push(HOME_PATH)
      },
      handleDecrement: function() {
        this.selectedQuantity =
          this.selectedQuantity === MIN_QUANTITY
            ? MIN_QUANTITY
            : this.selectedQuantity - 1
      },
      handleIncrement: function() {
        this.selectedQuantity =
          this.selectedQuantity === MAX_QUANTITY
            ? MAX_QUANTITY
            : this.selectedQuantity + 1
      }
    }
  }
</script>
