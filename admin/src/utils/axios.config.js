import axios from 'axios'
import Vue from 'vue'

const AuthToken = 'AuthToken'

axios.interceptors.request.use( config => {
    config.headers[AuthToken] = `Bearer ${localStorage.AuthToken}`
    return config;
}, err => {
    console.log({message: '请求超时!'});
    return Promise.reject(err);
})

axios.interceptors.response.use(data => {
    //console.log(data)
    return data;
    }, err => {
        console.log(err)
    if (err.response.status == 504 || err.response.status == 404) {
        console.log({message: '服务器被吃了⊙﹏⊙∥'});
    } else if (err.response.status == 403) {
        console.log({message: '权限不足,请联系管理员!'});
    } else if(err.response.status == 401){
        Vue.prototype.$Notice.error({
            title: '处理失败',
            desc: 'token验证失败'
        })
    }
    else if(err.response.status == 500){
        console.log({message: '服务器错误!'});
        return Promise.resolve({message: '服务器错误!'});
    }else {
        console.log({message: '未知错误!'});
    }
    return Promise.resolve(err);
})
