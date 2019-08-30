const install = (Vue) => {
  if (install.installed) return
  install.installed = true
  Vue.mixin({
    beforeCreate () {
      document.addEventListener('apiready', () => {
        this.$options.onReady && this.$options.onReady.bind(this).call()
      })
      document.addEventListener('updateOrientation', () => {
        this.$options.onWindowChange && this.$options.onWindowChange.bind(this).call()
      })
    }
  })
}
export default {
  install
}
