import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import MainPage from '../pages/MainPage.vue'
import TitlePage from '../pages/TitlePage.vue'
import LogInPage from '../pages/LogInPage.vue'
import SearchPage from '../pages/SearchPage.vue'
import NewItemPage from '../pages/NewItemPage.vue'


Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPage
  },
  {
    path: '/title',
    name: 'TitlePage',
    component: TitlePage,
  },
  {
    path: '/LogIn',
    name: 'LogInPage',
    component: LogInPage,
  },
  {
    path: '/Search',
    name: 'SearchPage',
    component: SearchPage,
  },
  {
    path: '/Add',
    name: 'NewItemPage',
    component: NewItemPage,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
