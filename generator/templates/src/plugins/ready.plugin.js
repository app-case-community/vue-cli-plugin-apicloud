const install = (Vue) => {
  if (install.installed) return
  install.installed = true
  Vue.mixin({
    beforeCreate () {
      this._isApiready = false
      document.addEventListener('apiready', () => {
        if ('apiEvent' in this.$options) {
          const apiEvent = this.$options.apiEvent
          for (const key in apiEvent) {
            if (apiEvent.hasOwnProperty(key)) {
              const eventListener = apiEvent[key]
              if (typeof eventListener === 'function') {
                window.api.addEventListener({ name: key }, (ret, err) => {
                  eventListener.bind(this).call(this, ret, err)
                })
              }
            }
          }
        }
        this._isApiready = true
        if (this._isMounted) {
          this.$options.onReady && this.$options.onReady.bind(this).call()
        }
      })
      document.addEventListener('updateOrientation', () => {
        this.$options.onWindowChange && this.$options.onWindowChange.bind(this).call()
      })
    },
    mounted () {
      if (this._isApiready) {
        this.$options.onReady && this.$options.onReady.bind(this).call()
      }
    }
  })
}
export default {
  install
}
