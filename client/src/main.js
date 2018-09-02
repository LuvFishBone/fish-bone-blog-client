require("babel-polyfill")

import Vue from 'vue'
import App from '@/App'
import router from './router'
// import store from './store'
import '@/utils/axios.config.js'
import '@/assets/style/app.less'


router.beforeEach((to, from, next) => {
    next();
});

router.afterEach((to, from, next) => {
    window.scrollTo(0, 0)
});

new Vue({
    el: '#app',
    router,
    // store,
    render: h => h(App)
})
