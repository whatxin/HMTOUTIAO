import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '@/views/login'

import Home from '@/views/home'

import Welcome from '@/views/welcome'

import Nofund from '@/views/nofund'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { name: 'login', path: '/login', component: Login },
    {
      path: '/',
      component: Home,
      children: [
        { name: 'welcome', path: '/', component: Welcome }
      ]
    },
    // 显示404页面
    { path: '*', component: Nofund }
  ]
})
// 前置守卫
router.beforeEach((to, from, next) => {
  if (to.path === '/login') return next()
  const token = window.sessionStorage.getItem('hm-toutiao')
  if (token) {
    return next()
  }
  next('/login')
})
export default router
