import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Characters from '../views/Characters.vue'
import CharacterDetails from '../views/CharacterDetails.vue'
import Comics from '../views/Comics.vue'
import ComicsDetails from '../views/ComicsDetails.vue'
import Series from '../views/Series.vue'
import SerieDetails from '../views/SerieDetails.vue'
import Stories from '../views/Stories.vue'
import StoryDetails from '../views/StoryDetails.vue'

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
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/character/:id',
    name: 'CharacterDetails',
    component: CharacterDetails
  },
  {
    path: '/characters',
    name: 'Characters',
    component: Characters
  },
  {
    path: '/comics',
    name: 'Comics',
    component: Comics
  },
  {
    path: '/comic/:id',
    name: 'ComicsDetails',
    component: ComicsDetails
  },
  {
    path: '/series',
    name: 'Series',
    component: Series
  },
  {
    path: '/serie/:id',
    name: 'SerieDetails',
    component: SerieDetails
  },
  {
    path: '/stories',
    name: 'Stories',
    component: Stories
  },
  {
    path: '/story/:id',
    name: 'StoryDetails',
    component: StoryDetails
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
