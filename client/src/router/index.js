import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Article from '@/pages/Article'
import About from '@/pages/About'
import Pigeonhole from '@/pages/Pigeonhole'
import Tags from '@/pages/Tags'

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
            path: '/pigeonhole',
            name: 'pigeonhole',
            component: Pigeonhole
        },
        {
            path: '/tags',
            name: 'tags',
            component: Tags
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/article',
            name: 'articleDetail',
            component: Article
        }
    ]
})

export default router