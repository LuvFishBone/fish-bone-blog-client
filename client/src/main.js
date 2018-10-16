require("babel-polyfill")

import Vue from 'vue'
import App from '@/App'
import router from './router'
import store from './store'
import moment from 'moment'
import Toasted from 'vue-toasted'
import '@/utils/axios.config.js'
import '@/assets/style/app.less'
import '@/directives'

// 解决移动端300ms延迟问题
// if (typeof window !== 'undefined') {
//     const Fastclick = require('fastclick');
//     Fastclick.attach(document.body);
// }

Vue.use(Toasted, { 
    theme: "primary", 
    position: "top-center", 
    duration : 3000
})

moment.locale('zh-cn')

router.beforeEach((to, from, next) => {
    next();
});

router.afterEach((to, from, next) => {
    window.scrollTo(0, 0)
});

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})
