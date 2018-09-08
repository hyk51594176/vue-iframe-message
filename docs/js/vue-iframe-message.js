/*!
 * vue-iframe-message.js v0.0.1
 * undefined
 *
 * Copyright 2015-present 51594176@qq.com
 * Released under the ISC license
 *
 * Date: 2018-09-08T15:37:35.545Z
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global['vue-iframe-message'] = factory());
}(this, (function () { 'use strict';

  var index = {
    install(Vue) {
      let listener = [];

      window.onmessage = ({
        data
      }) => {
        if (data && typeof data === 'object' && data.type) {
          listener.forEach(obj => {
            if (data.type === obj.type) {
              obj.callback(data);
            }
          });
        }
      };

      Vue.mixin({
        created() {
          const message = this.$options['message'];

          if (message) {
            Object.keys(message).forEach(type => {
              if (typeof message[type] === 'function') {
                listener.push({
                  type,
                  callback: message[type].bind(this)
                });
              }
            });
          }
        },

        beforeDestroy() {
          const message = this.$options['message'];

          if (message) {
            Object.keys(message).forEach(type => {
              listener = listener.filter(obj => obj.type === type);
              delete this.$options.message[type];
            });
          }
        }

      });
    }

  };

  return index;

})));
