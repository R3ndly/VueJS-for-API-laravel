import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LoginView from '../views/auth/LoginView.vue'
import RegisterView from '../views/auth/RegisterView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: { guestOnly: true }
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
      meta: { guestOnly: true }
    }
  ],
})

router.beforeEach(async (to, from, next) => {
  const isAuthenticated = checkAuthStatus()

  if (to.meta.requiresAuth && !isAuthenticated) {
    return next('/about')
  }

  if (to.meta.guestOnly && isAuthenticated) {
    return next('/')
  }

  next()
})

function checkAuthStatus() {
  const token = localStorage.getItem('auth_token')

  return !!token
}

export default router
