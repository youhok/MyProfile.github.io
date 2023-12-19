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

  console.log("🚀 ~ file: main.ts:78 ~ router.beforeEach ~ to.meta.requireAuth:", to.meta)
  console.log("🚀 ~ file: main.ts:79 ~ router.beforeEach ~ authStore.isAuthenticated:", authStore.isAuthenticated)
  if (to.meta.requireAuth && !authStore.isAuthenticated) {
    console.log('1')
    return next({ name: 'core.login', query: { redirect: to.fullPath } })
  } else if (to.meta.requireGuest && authStore.isAuthenticated) {
    console.log('2')
    return next({ name: 'core.admin.dashboard' })
  } else {
    console.log('3')
    return next()
  }
})

export default router
