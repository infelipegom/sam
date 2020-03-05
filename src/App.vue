<template>
  <div id="app">
    <BaseLayout :showContent="!!businessName" :title="businessName">
      <router-view />
    </BaseLayout>
  </div>
</template>

<script>
  import BaseLayout from '@/components/BaseLayout'
  import { SET_BUSINESS } from '@/store'

  export default {
    name: 'App',
    components: {
      BaseLayout
    },
    computed: {
      businessName: function() {
        return this.$store.getters.business.name || ''
      }
    },
    created: function() {
      this.$store.dispatch(SET_BUSINESS)
    }
  }
</script>
