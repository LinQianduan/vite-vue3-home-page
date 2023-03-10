import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import App from './App.vue'
import '@/styles/index.scss'
// pinia store
import pinia from "@/stores/index";

import router from '@/routers/index'

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(pinia).use(ElementPlus).use(router).mount('#app');
