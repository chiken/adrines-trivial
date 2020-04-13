import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Difficulty from '../views/Difficulty.vue'
import Category from '../views/Category.vue'
import Questions from '../views/Questions.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About
  },
  {
    path: '/difficulty',
    name: 'Difficulty',
    component: Difficulty
  },
  {
    path: '/category',
    name: 'Category',
    component: Category
  },
  {
    path: '/questions',
    name: 'Questions',
    component: Questions
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
