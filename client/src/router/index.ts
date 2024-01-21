import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import adminRoutes from '../admin/router/admin_routes'
import { useAuthStore } from '@/admin/stores/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...routes, ...adminRoutes],
})

router.beforeResolve(async (to, from, next) => {
  const authStore = useAuthStore()
  if (to.meta.requireAuth && !authStore.isAuthenticated) {
    return next({ name: 'core.login', query: { redirect: to.fullPath } })
  } else if (to.meta.requireGuest && authStore.isAuthenticated) {
    return next({ name: 'core.admin.dashboard' })
  } else {
    return next()
  }
})

export default router
