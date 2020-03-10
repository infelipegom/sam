<template>
  <div>
    <BaseButton @click="decrement">-</BaseButton>
    <span>{{ count }}</span>
    <BaseButton @click="increment">+</BaseButton>
  </div>
</template>

<script>
  import BaseButton from '@/components/BaseButton'
  import clamp from '@/helpers/clamp'

  const DECREMENT = 'decrement'
  const INCREMENT = 'increment'
  const MAX_COUNT = 99
  const MIN_COUNT = 1

  export default {
    name: 'BaseStepper',
    components: {
      BaseButton
    },
    props: {
      initialCount: {
        default: MIN_COUNT,
        type: Number
      },
      max: {
        default: MAX_COUNT,
        type: Number
      },
      min: {
        default: MIN_COUNT,
        type: Number
      }
    },
    data: function() {
      return {
        count: this.initialCount
      }
    },
    methods: {
      decrement: function() {
        this.count = clamp(this.count - 1, MIN_COUNT, MAX_COUNT)
        this.$emit(DECREMENT, this.count)
      },
      increment: function() {
        this.count = clamp(this.count + 1, MIN_COUNT, MAX_COUNT)
        this.$emit(INCREMENT, this.count)
      }
    }
  }
</script>
