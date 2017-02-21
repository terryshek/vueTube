// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from "vue-router";
import VueMaterial from 'vue-material'
import store from"./store"
import detail from './components/detail'
import people from './components/people'
import _ from "underscore"

Vue.use(VueRouter)
Vue.use(VueMaterial)

const routes = [
  { path: '/people', component: people, name: 'people',},
  { path: '/detail/:userId', component: detail, name:'detail'}
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  mode:"history",
  routes // short for routes: routes
})
/* eslint-disable no-new */
new Vue({
  store,
  router,
  template: '<App/>',
  components: { App }
}).$mount("#app")
