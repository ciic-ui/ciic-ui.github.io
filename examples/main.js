import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import CiicIcon from "../components/lib/ciic-icon/src/main.vue"
Vue.use(CiicIcon)
new Vue({
  render: h => h(App),
}).$mount('#app')
