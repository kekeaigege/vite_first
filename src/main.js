import { createApp } from 'vue'
import App from './App.vue'
import './css/base.css'
import Swiper from './components/swiper.vue'
import './assets/css/bootstrap.css'
//createApp函数 创建SPA实例
const app = createApp(App);
app.component(Swiper.name,Swiper)
//调用mount
app.mount('#app')
