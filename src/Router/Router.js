// import VueRouter from 'vue-router';
import Foo from './Foo';
import Bar from './Bar';
// import Vue from 'vue';

const routers = [
    { name: 'foo', path: '/foo', component: Foo },
    { name: 'bar', path: '/bar', component: Bar }
]
// Vue.use(VueRouter);
// const router = new VueRouter({
//     routers // (缩写) 相当于 routes: routes
// })

export default routers;