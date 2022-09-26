import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
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
