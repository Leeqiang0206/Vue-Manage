import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    redirect:'/home',
    children:[
      {
        path:'/home',
        name:'home',
        component:()=>import('../views/home/idnex.vue')
      },
      {
        path:'/user',
        name:'user',
        component:()=>import('../views/User/index.vue')
      },
      {
        path:'/mall',
        name:'mall',
        component:()=>import('../views/mall/index.vue')
      },
      {
        path:'/page1',
        name:'page1',
        component:()=>import('../views/other/PageO.vue')
      },
      {
        path:'/page2',
        name:'page2',
        component:()=>import('../views/other/PageT.vue')
      }
      
    ]
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
