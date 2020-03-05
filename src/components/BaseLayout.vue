<template>
  <fragment>
    <header>
      <router-link :to="HOME_PATH">
        <BusinessName>{{ title }}</BusinessName>
      </router-link>
    </header>
    <main :v-if="showContent">
      <slot></slot>
    </main>
  </fragment>
</template>

<script>
  import BusinessName from '@/components/BusinessName.vue'
  import { HOME_PATH } from '@/router'

  export default {
    name: 'BaseLayout',
    components: {
      BusinessName
    },
    props: {
      showContent: {
        type: Boolean,
        required: true
      },
      title: {
        type: String,
        required: true
      }
    },
    created: function() {
      this.HOME_PATH = HOME_PATH
    }
  }
</script>
