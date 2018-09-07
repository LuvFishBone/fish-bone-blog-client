import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Article from '@/pages/Article'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'index',
            component: Home
        },
        {
            path: '/article',
            name: 'articleDetail',
            component: Article
        }
    ]
})

export default router