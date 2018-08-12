require("babel-polyfill")

import Vue from 'vue'
import iView from 'iview'
import App from '@/App'
import router from './router'
import store from './store'

import '@/assets/style/app.less'
import 'iview/dist/styles/iview.css'


router.beforeEach((to, from, next) => {
    iView.LoadingBar.start();
    next();
});

router.afterEach((to, from, next) => {
    iView.LoadingBar.finish()
    window.scrollTo(0, 0)
});

Vue.use(iView);

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})
