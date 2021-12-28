import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    name: 'news',
    path: '/news',
    component: () => import(/* ChunkName=News */ '@/views/News.vue'),
  },
  {
    name: 'courses',
    path: '/courses',
    component: () => import(/* ChunkName=Courses */ '@/views/Courses.vue'),
  },
  {
    name: 'teachers',
    path: '/teachers',
    component: () => import(/* ChunkName=Teachers */ '@/views/Teachers.vue'),
  },
  {
    name: 'vip',
    path: '/vip',
    component: () => import(/* ChunkName=Vip */ '@/views/Vip.vue'),
  },
  {
    name: 'news-detail',
    path: '/news-detail/:nid',
    component: () => import(/* ChunkName=NewsDetail */ '@/views/NewsDetail.vue'),
  },
]

const router = new VueRouter({
  routes,
})

export default router
