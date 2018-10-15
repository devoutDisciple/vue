import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
Vue.config.silent = true

new Vue({
  render: h => h(App),
  renderError (h, err) { // 该函数只在开发环境中使用
    return h('pre', { style: { color: 'red' }}, err.stack)
  }
}).$mount('#app')
