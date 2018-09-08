
export default {
  install (Vue) {
    let listener = []
    window.addEventListener('message', ({data}) => {
      if (data && typeof data === 'object' && data.type) {
        listener.forEach(obj => {
          if (data.type === obj.type) {
            obj.callback(data)
          }
        })
      }
    })

    Vue.mixin({
      created () {
        const message = this.$options['message']
        if (message) {
          Object.keys(message).forEach((type) => {
            if (typeof message[type] === 'function') {
              listener.push({
                type,
                callback: message[type].bind(this)
              })
            }
          })
        }
      },
      beforeDestroy () {
        const message = this.$options['message']
        if (message) {
          Object.keys(message).forEach((type) => {
            listener = listener.filter(obj => obj.callback === message[type])
            delete this.$options.message[type]
          })
        }
      }
    })
  }
}
