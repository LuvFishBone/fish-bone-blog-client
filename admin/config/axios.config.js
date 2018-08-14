import axios from 'axios'

axios.interceptors.request.use(config=> {
    return config;
}, err=> {
    console.log({message: '请求超时!'});
    return Promise.resolve(err);
})

axios.interceptors.response.use(data => {
    if (data.status && data.status == 200 && data.data.status == 'error') {
        console.log({message: data.data.msg});
        return;
    }
    return data;
    }, err => {
    if (err.response.status == 504 || err.response.status == 404) {
        console.log({message: '服务器被吃了⊙﹏⊙∥'});
    } else if (err.response.status == 403) {
        console.log({message: '权限不足,请联系管理员!'});
    } else if(err.response.status == 401){
        console.log({message: '权限不足,请联系管理员!'});
    }else {
        console.log({message: '未知错误!'});
    }
    return Promise.resolve(err);
})
