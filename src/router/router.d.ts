// typings.d.ts or router.ts
import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    title: string
    icon: string
    // 外链地址
    linkUrl?: string
  }
}