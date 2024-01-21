import PublicLayout from '@/layouts/PublicLayout.vue'
const routes = [
    {
        path: '/',
        name: 'public',
        component: PublicLayout,
        children: [
            {
                path: '/',
                name: 'Home',
                component: () => import('../views/Home.vue'),
                meta: {
                    pageTitle: 'home'
                }
            },
            {
                path: '/about',
                name: 'About',
                component: () => import('../views/About.vue'),
                meta: {
                    pageTitle: 'about'
                }
            },
            {
                path: '/myskill',
                name: 'Myskill',
                component: () => import('../views/Myskill.vue'),
                meta: {
                    pageTitle: 'skills'
                }
            },
            {
                path: '/project',
                name: 'Project',
                component: () => import('../views/Project.vue'),
                meta: {
                    pageTitle: 'projects'
                },


            },

            {
                path: '/project/project-detail/:id',
                name: 'project.detail',
                component: () => import('../views/projectDetail/projectDetail.vue'),
                meta: {
                    pageTitle: 'projectdetail'
                },
            },
            {
                path: '/contact',
                name: 'Contect',
                component: () => import('../views/Contact.vue'),
                meta: {
                    pageTitle: 'contact'
                }
            },
            {
                path: '/:pathMatch(.*)*',
                name: 'routeChecker',
                component: () => import('../views/NotFound.vue'),
            }
        ]
    }
]

export default routes

