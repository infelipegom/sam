<template>
  <img :alt="name" :src="image" />
</template>

<script>
  export default {
    name: 'ItemImage',
    props: {
      image: {
        required: true,
        type: String
      },
      name: {
        required: true,
        type: String
      }
    }
  }
</script>
