import type { RouteRecordRaw } from "vue-router";
import Layout from '@/Layout/index.vue'
const threejs: Array<RouteRecordRaw> = [
  {
    path: '/threejs',
    name: 'Threejs',
    meta: {
      title: 'Threejs',
      icon: 'link'
    },
    redirect: '/threejs/11',
    component: Layout,
    children: [
      {
        path: 'cube',
        name: 'cube',
        meta: {
          title: 'cube',
          icon: 'link'
        },
        component: () => import('@/views/dashboard.vue'),
      },
      // {
      //   path: '2',
      //   name: '2',
      //   meta: {
      //     title: '2',
      //     icon: 'link'
      //   },
      //   component: () => import('@/views/dashboard.vue'),
      // }
    ]
  }
]

export default threejs