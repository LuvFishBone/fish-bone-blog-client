import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'index',
            component: resolve =>require(['@/pages/Home'], resolve)
        },
        {
            path: '/archives',
            name: 'archives',
            component: resolve =>require(['@/pages/Archives'], resolve)
        },
        {
            path: '/tags',
            name: 'tags',
            component: resolve =>require(['@/pages/Tags'], resolve)
        },
        {
            path: '/about',
            name: 'about',
            component: resolve =>require(['@/pages/About'], resolve)
        },
        {
            path: '/tags/:tag',
            name: 'tagByTag',
            component: resolve =>require(['@/pages/Tags'], resolve)
        },
        {
            path: '/article',
            name: 'article',
            component: resolve =>require(['@/pages/Article'], resolve)
        }
    ]
})

export default router