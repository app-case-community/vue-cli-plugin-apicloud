const install = (Vue) => {
  if (install.installed) return
  install.installed = true
  Vue.mixin({
    beforeCreate () {
      if (this.$root.$children.length > 0 && this.$root.$children[0] === this) {
        document.addEventListener('apiready', () => {
          this.$options.onReady && this.$options.onReady.bind(this).call()
        })
        document.addEventListener('updateOrientation', () => {
          this.$options.onWindowChange && this.$options.onWindowChange.bind(this).call()
        })
      }
    },
    mounted () {
      if (this.$root.$children.length > 0 && this.$root.$children[0] === this) {
        this.api && this.api.parseTapmode()
      }
    }
  })
}
export default {
  install
}
