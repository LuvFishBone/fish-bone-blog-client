import moment from 'moment'

let DateInterval = {}

DateInterval.install = function(Vue){
    Vue.directive('date-interval', {
        bind: function (el, binding, vnode) {
            el.innerHTML = ` ${moment(binding.value).fromNow()}`
        },
        inserted: function () {},
        update: function () {},
        componentUpdated: function (el, binding, vnode) {
            console.log(binding.value, 'componentUpdated')
            el.innerHTML = ` ${moment(binding.value).fromNow()}`
        },
        unbind: function () {}
    })
}

export default DateInterval