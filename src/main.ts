/*
 * @Author: along
 * @Description:
 * @Date: 2023-05-30 21:31:24
 * @LastEditors: along
 * @LastEditTime: 2023-05-30 21:38:00
 * @FilePath: /cxy-web-tool/src/main.ts
 */
import { createApp } from 'vue'
import '@/assets/styles/global.scss'
import App from './App.vue'
import router from '@/router'
import { createPinia } from 'pinia'

const app = createApp(App)
app.use(router)
app.use(createPinia())
app.mount('#app')
