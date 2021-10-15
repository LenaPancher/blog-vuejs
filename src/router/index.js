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
    component: () => import('../views/About.vue')
  },
  {
    path: '/article/:id',
    name: 'Article',
    component: () => import('../views/Article.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/Admin.vue')
  },
  {
    path: '/admin/dashboard',
    name: 'AdminDashboard',
    component: () => import('../components/AdminSectionListing')
  },
  {
    path: '/admin/edit/:id',
    name: 'AdminEdit',
    component: () => import('../components/AdminSectionEdit')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
