import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: '/',
            name: 'side1',
            component: () =>
                import ('../views/Side1.vue')
        },
        {
            path: '/side2',
            name: 'side2',
            component: () =>
                import ('../views/Side2.vue')
        },
        {
            path: '/side3',
            name: 'side3',
            component: () =>
                import ('../views/Side3.vue')
        }
    ]
})

export default router