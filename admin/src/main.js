require("babel-polyfill");

import '@/assets/style/app.less'
import Vue from 'vue'
import App from '@/App'

new Vue({
    el: '#app',
    template: '<App />',
    components: {
        App
    }
})
