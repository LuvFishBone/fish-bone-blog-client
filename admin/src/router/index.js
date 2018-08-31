import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login'
import Dashboard from '@/pages/Dashboard'
import ArticleList from '@/pages/ArticleList'
import PublishAnalyze from '@/pages/PublishAnalyze'
import PublishArticle from '@/pages/PublishArticle'
import Tags from '@/pages/Tags'
import Types from '@/pages/Types'
import About from '@/pages/About'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        // {
        //     path: '/dashboard',
        //     name: 'dashboard',
        //     component: Dashboard
        // },
        {
            path: '/articlelist',
            name: 'articlelist',
            component: ArticleList
        },
        {
            path: '/publishAnalyze',
            name: 'publishAnalyze',
            component: PublishAnalyze
        },
        {
            path: '/publishArticle',
            name: 'publishArticle',
            component: PublishArticle
        },
        {
            path: '/tags',
            name: 'tags',
            component: Tags
        },
        {
            path: '/types',
            name: 'types',
            component: Types
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '*',
            redirect: '/login'
        }
    ]
})

router.beforeEach((to, from, next) => {
    // redirect会重新进行路由守卫，next()不会
    if (localStorage.AuthToken) {
        axios.get(
            '/api/v1/tokens/check', {
        })
        .then(res => {
            // token验证通过
            const pathArr = ['/publishAnalyze', '/articlelist', '/publishArticle', '/tags', '/types', '/about']
            if (pathArr.indexOf(to.path) === -1) {
                next('publishAnalyze')
            }
            else {
                next()
            }
        })
        .catch(err => {
            // token验证不通过
            console.log(err)
            if (to.path !== '/login') {
                next('login')
            }
            else {
                next()
            }
        })
    }
    else {
        if (to.path !== '/login') {
            next('login')
        }
        else {
            next()
        }
    }
})

export default router