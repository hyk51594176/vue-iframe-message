export let _Vue
const install = Vue => {
  let listener = []
  if (install.installed && _Vue === Vue) return
  install.installed = true
  _Vue = Vue
  window.addEventListener('message', (res) => {
    const {data} = res
    if (data && typeof data === 'object' && data.type) {
      listener.forEach(obj => {
        if (data.type === obj.type) {
          obj.callback(res)
        }
      })
    }
  })

  Vue.mixin({
    created () {
      const message = this.$options.message
      if (message) {
        Object.keys(message).forEach((type) => {
          if (typeof message[type] === 'function') {
            listener.push({
              type,
              callback: message[type].bind(this),
              _uid: this._uid
            })
          }
        })
      }
    },
    beforeDestroy () {
      const message = this.$options.message
      if (message) {
        listener = listener.filter(obj => obj._uid !== this._uid)
        delete this.$options.message
      }
    }
  })
}
if (window && window.Vue)window.Vue.use(install)
export default {install}
