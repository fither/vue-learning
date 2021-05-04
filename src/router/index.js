import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue')
  },
  {
    path: '/users',
    name: 'Users',
    component: () => import('@/views/Users.vue')
  },
  {
    path: '/users/user/:id',
    name: 'User Profile',
    component: () => import('@/views/UserProfile.vue')
  },
  {
    path: '/users/user/:userid/posts',
    name: 'User Posts',
    component: () => import('@/views/UserPosts.vue')
  },
  {
    path: '/notfound',
    name: '404',
    component: () => import('@/views/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  mode: 'history'
})

export default router
