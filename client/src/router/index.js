import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Article from '@/pages/Article'
import About from '@/pages/About'
import Archives from '@/pages/Archives'
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
            path: '/archives',
            name: 'archives',
            component: Archives
        },
        {
            path: '/tags',
            name: 'tags',
            component: Tags
        },
        {
            path: '/tags/:tag',
            name: 'tagByTag',
            component: Tags
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        // {
        //     path: '/article/:id',
        //     name: 'article',
        //     component: Article
        // },
        {
            path: '/article/:uniqueMark',
            name: 'article',
            component: Article
        }
    ]
})

export default router