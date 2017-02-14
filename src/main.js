import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import { store } from './store'
import App from './App.vue'
import Active from './components/Active.vue'
import Completed from './components/Completed.vue'

Vue.use(Vuex)
Vue.use(VueRouter)

const routes = [{
    path: '/',
    component: Active
  },
  {
    path: '/completed',
    component: Completed
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  router,
  store,
  computed: Vuex.mapGetters([
    'items'
  ]),
  render: h => h(App)
})
