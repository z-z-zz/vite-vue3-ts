import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementIcon from '@element-plus/icons' // 引入el图标 
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import App from './App.vue'
import Router from './router/index'
import { store, key } from './store'

const app = createApp(App)
app.use(Router)
app.use(store, key)
app.use(ElementPlus, {
  locale: zhCn,
})
Object.keys(ElementIcon).forEach(key => {
  app.component(key, ElementIcon[key])
})
app.mount('#app')
