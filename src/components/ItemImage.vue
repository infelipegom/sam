<template>
  <img :alt="name" :src="image" />
</template>

<script>
  export default {
    name: 'ItemImage',
    props: {
      image: {
        type: String,
        required: true
      },
      name: {
        type: String,
        required: true
      }
    }
  }
</script>
