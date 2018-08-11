import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login'
import Dashboard from '@/pages/Dashboard'
import ArticleList from '@/pages/ArticleList'
import PublishAnalyze from '@/pages/PublishAnalyze'
import PublishArticle from '@/pages/PublishArticle'
import Tags from '@/pages/Tags'
import About from '@/pages/About'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/login',
            component: Login
        },
        {
            path: '/dashboard',
            component: Dashboard
        },
        {
            path: '/articlelist',
            component: ArticleList
        },
        {
            path: '/publishAnalyze',
            component: PublishAnalyze
        },
        {
            path: '/publishArticle',
            component: PublishArticle
        },
        {
            path: '/tags',
            component: Tags
        },
        {
            path: '/about',
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
    if (localStorage.fishboneToken) {
        axios.get(
                '/api/v1/tokens/check', {
                    headers: {
                        Authorization: `Bearer ${localStorage.fishboneToken}`
                    }
            })
            .then(res => {
                // token验证通过
                const pathArr = ['/dashboard', '/articlelist', '/publishAnalyze', '/publishArticle', '/tags', '/about']
                if (pathArr.indexOf(to.path) === -1) {
                    next('dashboard')
                }
                else {
                    next()
                }
            })
            .catch(err => {
                // token验证不通过
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