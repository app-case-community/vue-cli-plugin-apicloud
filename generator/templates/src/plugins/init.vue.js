import Vue from 'vue'
import ReadyPlugin from './ready.plugin'

Vue.config.productionTip = false

Vue.use(ReadyPlugin)

Object.defineProperty(Vue.prototype, 'api', {
  get: function () {
    return window.api
  }
})

Object.defineProperty(Vue.prototype, '$api', {
  get: function () {
    return window.$api
  }
})

// 打开页面
var _openw = null
Vue.prototype.$page = {
  open (url, { title, anim, titleBarOpts, winOpts } = {}) {
    if (_openw) { return } // 防止快速点击
    url = url.endsWith('.html') ? url : url + '.html'
    var api = window.api
    if (!api) {
      window.location.href = url
      return
    }
    var name = `win_${url}`
    var params = {
      name,
      url,
      pageParam: {
        title,
        titleBarOpts
      },
      ...(winOpts || {})
    }
    if (anim) {
      params.animation = {
        type: anim,
        subType: 'from_right',
        duration: 300
      }
    }
    api.openWin(params)
  },
  close () {
    if (!window.api) {
      window.history.back()
      return
    }
    window.api.closeWin()
  }
}

const initApp = (App, opts = {}) => {
  new Vue({
    ...opts,
    render: h => h(App)
  }).$mount('#app')
}
export default initApp
