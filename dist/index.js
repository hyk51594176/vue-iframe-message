/*!
 * WeierVueIframeMessage.js v0.0.1
 * undefined
 *
 * Copyright 2015-present 51594176@qq.com
 * Released under the ISC license
 *
 * Date: 2018-09-08T16:30:21.808Z
 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.WeierVueIframeMessage=t()}(this,function(){"use strict";function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}return{install:function(e){var n=[];window.addEventListener("message",function(e){var t=e.data;t&&"object"===o(t)&&t.type&&n.forEach(function(e){t.type===e.type&&e.callback(t)})}),e.mixin({created:function(){var t=this,o=this.$options.message;o&&Object.keys(o).forEach(function(e){"function"==typeof o[e]&&n.push({type:e,callback:o[e].bind(t)})})},beforeDestroy:function(){var e=this,o=this.$options.message;o&&Object.keys(o).forEach(function(t){n=n.filter(function(e){return e.callback===o[t]}),delete e.$options.message[t]})}})}}});
