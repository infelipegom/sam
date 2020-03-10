import Vue from 'vue'
import Fragment from 'vue-fragment'

import App from '@/App.vue'
import toBRL from '@/helpers/toBRL'
import router from '@/router'
import store from '@/store'

Vue.config.productionTip = false
Vue.filter('toBRL', toBRL)
Vue.use(Fragment.Plugin)

new Vue({
  render: function(h) {
    return h(App)
  },
  router,
  store
}).$mount('#app')
