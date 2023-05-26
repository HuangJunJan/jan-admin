import type { RouteRecordRaw } from "vue-router";
import Layout from '@/Layout/index.vue'
const multistage: Array<RouteRecordRaw> = [
  {
    path: '/multistage',
    name: '多级菜单',
    meta: {
      title: '多级菜单',
      icon: 'link'
    },
    redirect: '/multistage/1',
    component: Layout,
    children: [
      {
        path: '1',
        name: '1',
        meta: {
          title: '1',
          icon: 'link'
        },
        redirect: '/multistage/1/1-1',
        children: [
          {
            path: '1-1',
            name: '1-1',
            meta: {
              title: '1-1',
              icon: 'link'
            },
            redirect: '/multistage/1/1-1/1-1-1',
            children: [
              {
                path: '1-1-1',
                name: '1-1-1',
                meta: {
                  title: '1-1-1',
                  icon: 'link'
                },
                component: () => import('@/views/multistage/one-one-one.vue')
              },
              {
                path: '1-1-2',
                name: '1-1-2',
                meta: {
                  title: '1-1-2',
                  icon: 'link'
                },
                component: () => import('@/views/multistage/one-one-two.vue')
              }
            ]
          },
          {
            path: '1-2',
            name: '1-2',
            meta: {
              title: '1-2',
              icon: 'link'
            },
            component: () => import('@/views/multistage/one-two.vue'),
          }
        ]
      },
      {
        path: '2',
        name: '2',
        meta: {
          title: '2',
          icon: 'link'
        },
        component: () => import('@/views/multistage/two.vue'),
      }
    ]
  }
]

export default multistage