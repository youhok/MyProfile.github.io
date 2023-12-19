const adminRoutes = [
    {
        path: '/core',
        name: 'core',
        component: () => import('@/admin/layouts/CoreLayout.vue'),
        meta: { name: 'core' },
        redirect: { name: "core.login" },
        children: [
            {
                path: '/core/register',
                name: 'core.register',
                meta: {
                    pageTitle: 'Register',
                    requireGuest: true
                },
                component: () => import('@/admin/views/admin/auth/Register.vue')
            },
            {
                path: '/core/login',
                name: 'core.login',
                meta: {
                    pageTitle: 'Login',
                    requireGuest: true
                },
                component: () => import('@/admin/views/admin/auth/Login.vue')
            },
            {
                path: '/core/admin',
                name: 'core.admin',
                component: () => import('@/admin/layouts/AdminLayout.vue'),
                meta: { requireAuth: true },
                children: [
                    {
                        path: '/core/admin/profile',
                        name: 'core.admin.profile',
                        meta: {
                            pageTitle: 'Profile',
                        },
                        component: () => import('@/admin/views/admin/auth/Profile.vue')
                    },
                    {
                        path: '/core/admin/dasboard',
                        name: 'core.admin.dashboard',
                        component: () => import('@/admin/views/admin/dashboard/Dashboard.vue'),
                    },

                    // category route
                    {
                        path: '/core/admin/category/index',
                        name: 'core.admin.category.index',
                        component: () => import('@/admin/views/admin/category/IndexCategory.vue'),
                    },
                    {
                        path: '/core/admin/category/create',
                        name: 'core.admin.category.create',
                        component: () => import('@/admin/views/admin/category/CreateCategory.vue')
                    },
                    {
                        path: '/core/admin/category/edit/:id',
                        name: 'core.admin.editCategory',
                        component: () => import('@/admin/views/admin/category/EditCategory.vue')
                    },
                    // subCategory route
                    {
                        path: '/core/admin/sub-category/index',
                        name: 'core.admin.indexSubCategory',
                        component: () => import('@/admin/views/admin/subCategory/indexSubCategory.vue')
                    },
                    {
                        path: '/core/admin/sub-category/create',
                        name: 'core.admin.createSubCategory',
                        component: () => import('@/admin/views/admin/subCategory/createSubCategory.vue')
                    },
                    {
                        path: '/core/admin/sub-category/edit/:id',
                        name: 'core.admin.editSubCategory',
                        component: () => import('@/admin/views/admin/subCategory/editSubCategory.vue')
                    },
                ]
            }
        ]
    },

]


export default adminRoutes