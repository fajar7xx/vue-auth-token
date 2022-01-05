import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Dashboard from './views/Dashboard.vue'
import RegisterUser from './views/RegisterUser'
import Loginuser from './views/LoginUser'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      meta: {
        // meta property allows developer to
        // add custom attributes to the routes
        requiresAuth: true
      }
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterUser
    },
    {
      path: '/login',
      name: 'login',
      component: Loginuser
    }
  ]
})

// global navigation guard
router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem('user')

  // if (to.matched.some(record => record.meta.requiresAuth)) {
  //   if (!loggedIn) {
  //     next('/')
  //   } else {
  //     next()
  //   }
  // } else {
  //   next()
  // }

  // refactoring
  if (to.matched.some(record => record.meta.requiresAuth) && !loggedIn) {
    next('/')
  }
  next()
})

export default router
