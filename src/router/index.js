import DashboardVue from '@/views/DashboardVue.vue'
import HomeView from '@/views/HomeView.vue'
import LoginVue from '@/views/LoginVue.vue'
import SignupVue from '@/views/SignupVue.vue'
import NewNote from '@/views/NewNote.vue'
import SetNote from '@/views/SetNote.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    //routes in here
    {
      path: '/',
      redirect:'/home'
    },
    {
      path:'/home',
      name:'home',
      component: HomeView,
      meta:{
        authRequired: false
      }
    },
    {
      path:'/login',
      name:'login',
      component: LoginVue,
      meta:{
        authRequired: false
      }
    },
    {
      path:'/signup',
      name:'signup',
      component:SignupVue,
      meta:{
        authRequired: false
      }
    },
    {
      path:'/dashboard',
      name:'dashboard',
      component:DashboardVue,
      meta:{
        authRequired: true
      }
    },
    {
      path:'/new',
      name:'new',
      component:NewNote,
      meta:{
        authRequired: true
      }
    },
    {
      path:'/set/:id',
      name:'set',
      component:SetNote,
      meta:{
        authRequired: true
      }
    }
  ]
})

//funcion de guarda para establecer una proteccion sobre las rutas del sistema
//args: to->wish_path from:origin_path next->destiny_path
//return: void
router.beforeEach((to,from,next)=>{
  const authStore = useAuthStore()
  const token = authStore.token
  const needAuth = to.meta.authRequired

  if(needAuth && !token){
    next('login')
  }
  else{
    next()
  }
})
export default router
