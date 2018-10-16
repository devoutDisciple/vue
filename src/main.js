import Vue from 'vue';
// import App from './App.vue';
import Layout from './Layout';
import ElementUi from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueRouter from 'vue-router';
import routers from './Router/Router'
import store from './store/index'

Vue.config.productionTip = false; // 开发环境
// Vue.config.silent = true;

Vue.use(ElementUi);
// Vue.use(VueRouter);
// Vue.use(VueRouter)

// const router = new VueRouter({
//   routers
// })

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: routers
})

new Vue({
  el: "#app",
  store,
  router,
  render: h => h(Layout)
}).$mount('#app')
