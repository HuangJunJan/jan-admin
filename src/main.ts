import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
// 样式重置
import 'normalize.css/normalize.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/theme-chalk/dark/css-vars.css'
// 统一自定义ele样式
import '@/assets/style/customerElement.scss'
import '@/mock/index'
const app = createApp(App)
// 注册所有ele icon
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
// 全局变量

app.use(createPinia())
app.use(router)

app.mount('#app')
