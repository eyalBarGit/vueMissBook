import Vue from 'vue'
import VueRouter from 'vue-router'
import homePage from '../views/Home.vue'
import bookApp from '../views/bookApp.vue'
import bookDetails from '../views/bookDetails.vue';

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'home',
    component: homePage
  },
  {
    path: '/book',
    name: 'bookList',
    component: bookApp
  },
  {
    path: '/book/:id',
    name: 'bookDetails',
    component: bookDetails
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router