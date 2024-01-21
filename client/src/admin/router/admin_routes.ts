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
                        path: '/core/admin/dasboard',
                        name: 'core.admin.dashboard',
                        component: () => import('@/admin/views/admin/dashboard/Dashboard.vue'),
                        meta: {
                            pageTitle: 'Dashboard',
                            icon: 'bi bi-speedometer'
                        },
                    },
                    {
                        path: '/core/admin/profile',
                        name: 'core.admin.profile',
                        component: () => import('@/admin/views/admin/auth/Profile.vue'),
                        meta: {
                            pageTitle: 'Profile',
                        },
                    },


                    // category route
                    {
                        path: '/core/admin/category/index',
                        name: 'core.admin.category.index',
                        component: () => import('@/admin/views/admin/category/IndexCategory.vue'),
                        meta: {
                            pageTitle: 'Category',
                        },
                    },
                    {
                        path: '/core/admin/category/create',
                        name: 'core.admin.category.create',
                        component: () => import('@/admin/views/admin/category/CreateCategory.vue'),
                        meta: {
                            pageTitle: 'Create Category',
                        },
                    },
                    {
                        path: '/core/admin/category/edit/:id',
                        name: 'core.admin.editCategory',
                        component: () => import('@/admin/views/admin/category/EditCategory.vue'),
                        meta: {
                            pageTitle: 'Edit Category',
                        },
                    },
                    // subCategory route
                    {
                        path: '/core/admin/sub-category/index',
                        name: 'core.admin.indexSubCategory',
                        component: () => import('@/admin/views/admin/subCategory/indexSubCategory.vue'),
                        meta: {
                            pageTitle: 'SubCategory',
                        },
                    },
                    {
                        path: '/core/admin/sub-category/create',
                        name: 'core.admin.createSubCategory',
                        component: () => import('@/admin/views/admin/subCategory/createSubCategory.vue'),
                        meta: {
                            pageTitle: 'Create SubCategory',
                        },
                    },
                    {
                        path: '/core/admin/sub-category/edit/:id',
                        name: 'core.admin.editSubCategory',
                        component: () => import('@/admin/views/admin/subCategory/editSubCategory.vue'),
                        meta: {
                            pageTitle: 'Edit SubCategory',
                        },
                    },
                    //project route
                    {
                        path: '/core/admin/project/index',
                        name: 'core.admin.projectIndex',
                        component: () => import('@/admin/views/admin/project/projectIndex.vue'),
                        meta: {
                            pageTitle: 'Project',
                            icon: 'bi bi-projector-fill'
                        },
                    },
                    {
                        path: '/core/admin/project/create',
                        name: 'core.admin.projectCreate',
                        component: () => import('@/admin/views/admin/project/createProject.vue'),
                        meta: {
                            pageTitle: 'Create project',
                        },
                    },
                    {
                        path: '/core/admin/project/edit/:id',
                        name: 'core.admin.projectEdit',
                        component: () => import('@/admin/views/admin/project/editProject.vue'),
                        meta: {
                            pageTitle: 'Edit Project',
                        },
                    },
                ]
            }
        ]
    },

]


export default adminRoutes