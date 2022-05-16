import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router'
import VideoPlayer from '@/components/VideoPlayer'

const routes = [
    {
      path: '/',
      name: 'Home',
      component: VideoPlayer,//shsould be imported 
    },
  ]
const router = createRouter({
    history: createWebHistory(),
    routes
    })
createApp(App).use(router).mount('#app')
