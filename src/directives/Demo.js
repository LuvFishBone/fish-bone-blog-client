let Demo = {}

Demo.install = function(Vue){
    Vue.directive('demo', {
        bind: function (el, binding, vnode) {
            el.innerHTML = 'this is the demo of directive';
        },
        inserted: function () {},
        update: function () {},
        componentUpdated: function () {},
        unbind: function () {}
    })
}

export default Demo