/*!
 * VueIframeMessage.js v0.0.3
 * https://github.com/hyk51594176/vue-iframe-message
 *
 * Copyright 2015-present 51594176@qq.com
 * Released under the ISC license
 *
 * Date: 2018-09-20T11:59:16.706Z
 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t(e.VueIframeMessage={})}(this,function(o){"use strict";function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var e=function e(t){var n=[];e.installed&&o._Vue===t||(e.installed=!0,o._Vue=t,window.addEventListener("message",function(t){var o=t.data;o&&"object"===i(o)&&o.type&&n.forEach(function(e){o.type===e.type&&e.callback(t)})}),t.mixin({created:function(){var t=this,o=this.$options.message;o&&Object.keys(o).forEach(function(e){"function"==typeof o[e]&&n.push({type:e,callback:o[e].bind(t),_uid:t._uid})})},beforeDestroy:function(){var t=this;this.$options.message&&(n=n.filter(function(e){return e._uid!==t._uid}),delete this.$options.message)}}))};window&&window.Vue&&window.Vue.use(e);var t={install:e};o.default=t,Object.defineProperty(o,"__esModule",{value:!0})});
