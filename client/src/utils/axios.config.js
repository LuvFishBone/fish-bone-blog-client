import axios from 'axios'
import Vue from 'vue'

function displaySpin(ope){
    // const showSpinOption = {
    //     render: (h) => {
    //         return h('span', [
    //             h('Icon', {
    //                 'class': 'global-spin-icon-load',
    //                 props: {
    //                     type: 'ios-loading',
    //                     size: 18
    //                 }
    //             }),
    //             h('span', 'Loading')
    //         ])
    //     }
    // }
    ope ? Vue.prototype.$Spin.show() : Vue.prototype.$Spin.hide()
}

axios.interceptors.request.use( config => {
    //displaySpin(1)
    return config;
}, err => {
    Vue.prototype.$Message.error('请求超时!');
    return Promise.reject(err);
})

axios.interceptors.response.use(data => {
    return data;
    }, err => {
    // displaySpin()
    if (err.response.status == 504 || err.response.status == 404) {
        Vue.prototype.$Message.error('服务器错误！')
    } else if (err.response.status == 403) {
        Vue.prototype.$Message.error('权限不足,请联系管理员！')
    } else if(err.response.status == 401){
        Vue.prototype.$Message.error('token 验证失败')
    } else if(err.response.status == 500){
        Vue.prototype.$Message.error('服务器错误!');
    }else {
        Vue.prototype.$Message.error('未知错误!');
    }
    return Promise.reject(err);
})
