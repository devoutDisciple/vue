import Vuex from 'vuex';
import Vue from 'vue';
import testA from './a';
Vue.use(Vuex);
const store = new Vuex.Store({
    modules: {
        testA: testA
    }
  })

export default store;