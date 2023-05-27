import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import Layout from '@/Layout/index.vue'
import multistage from './modules/multistage'
import threejs from './modules/threejs'

export const baseRouter: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: '仪表盘',
        meta: { title: '仪表盘', icon: 'HomeFilled' },
        component: () => import('@/views/dashboard.vue'),
      }
    ]
  },

  {
    path: '/form',
    name: '表单组件',
    meta: { title: '表单组件', icon: 'Grid' },
    component: Layout,
    redirect: '/form/basic',
    children: [
      {
        path: 'basic',
        name: '基础表单',
        meta: { title: '基础表单', icon: 'plus' },
        component: () => import('@/views/AboutView.vue')
      },
      {
        path: 'step',
        name: '分步表单',
        meta: { title: '分步表单', icon: 'plus' },
        component: () => import('@/views/AboutView.vue')
      }
    ]
  },
  ...threejs,
  ...multistage,
  {
    path: '/external-link',
    name: '外链',
    meta: { title: '外链', icon: 'link' },
    component: Layout,
    redirect: '/external-link/bilibili',
    children: [
      {
        path: 'bilibili',
        name: 'bilibili',
        meta: { title: 'Bilibili(内嵌)', icon: 'link', linkUrl: 'https://bilibili.com' },
        component: () => import('@/views/AboutView.vue')
      }
    ]
  },
]

const router = createRouter({
  
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: baseRouter
})

// router.beforeEach((to, from, next)=>{
//   console.log(to, from, next);
//   next()
// })
export default router
