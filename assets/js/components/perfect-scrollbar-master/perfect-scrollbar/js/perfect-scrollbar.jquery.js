!function r(o,i,l){function s(n,t){if(!i[n]){if(!o[n]){var e="function"==typeof require&&require;if(!t&&e)return e(n,!0);if(a)return a(n,!0);t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t}e=i[n]={exports:{}};o[n][0].call(e.exports,function(t){var e=o[n][1][t];return s(e||t)},e,e.exports,r,o,i,l)}return i[n].exports}for(var a="function"==typeof require&&require,t=0;t<l.length;t++)s(l[t]);return s}({1:[function(t,e,n){"use strict";var r=t("../main"),o=t("../plugin/instances");function i(t){t.fn.perfectScrollbar=function(e){return this.each(function(){var t;"object"==typeof e||void 0===e?(t=e,o.get(this)||r.initialize(this,t)):"update"===(t=e)?r.update(this):"destroy"===t&&r.destroy(this)})}}"function"==typeof define&&define.amd?define(["jquery"],i):void 0!==(t=window.jQuery||window.$)&&i(t),e.exports=i},{"../main":7,"../plugin/instances":18}],2:[function(t,e,n){"use strict";n.add=function(t,e){var n;t.classList?t.classList.add(e):(e=e,(n=(t=t).className.split(" ")).indexOf(e)<0&&n.push(e),t.className=n.join(" "))},n.remove=function(t,e){var n;t.classList?t.classList.remove(e):(e=e,n=(t=t).className.split(" "),0<=(e=n.indexOf(e))&&n.splice(e,1),t.className=n.join(" "))},n.list=function(t){return t.classList?Array.prototype.slice.apply(t.classList):t.className.split(" ")}},{}],3:[function(t,e,n){"use strict";var r={};r.e=function(t,e){t=document.createElement(t);return t.className=e,t},r.appendTo=function(t,e){return e.appendChild(t),t},r.css=function(t,e,n){if("object"!=typeof e)return void 0===n?(i=e,window.getComputedStyle(t)[i]):(i=t,o=e,"number"==typeof(n=n)&&(n=n.toString()+"px"),i.style[o]=n,i);var r,o,i,l=t,s=e;for(r in s){var a=s[r];"number"==typeof a&&(a=a.toString()+"px"),l.style[r]=a}return l},r.matches=function(t,e){return void 0!==t.matches?t.matches(e):void 0!==t.matchesSelector?t.matchesSelector(e):void 0!==t.webkitMatchesSelector?t.webkitMatchesSelector(e):void 0!==t.mozMatchesSelector?t.mozMatchesSelector(e):void 0!==t.msMatchesSelector?t.msMatchesSelector(e):void 0},r.remove=function(t){void 0!==t.remove?t.remove():t.parentNode&&t.parentNode.removeChild(t)},r.queryChildren=function(t,e){return Array.prototype.filter.call(t.childNodes,function(t){return r.matches(t,e)})},e.exports=r},{}],4:[function(t,e,n){"use strict";function r(t){this.element=t,this.events={}}function o(){this.eventElements=[]}r.prototype.bind=function(t,e){void 0===this.events[t]&&(this.events[t]=[]),this.events[t].push(e),this.element.addEventListener(t,e,!1)},r.prototype.unbind=function(e,n){var r=void 0!==n;this.events[e]=this.events[e].filter(function(t){return r&&t!==n||(this.element.removeEventListener(e,t,!1),!1)},this)},r.prototype.unbindAll=function(){for(var t in this.events)this.unbind(t)};o.prototype.eventElement=function(e){var t=this.eventElements.filter(function(t){return t.element===e})[0];return void 0===t&&(t=new r(e),this.eventElements.push(t)),t},o.prototype.bind=function(t,e,n){this.eventElement(t).bind(e,n)},o.prototype.unbind=function(t,e,n){this.eventElement(t).unbind(e,n)},o.prototype.unbindAll=function(){for(var t=0;t<this.eventElements.length;t++)this.eventElements[t].unbindAll()},o.prototype.once=function(t,e,n){var r=this.eventElement(t),o=function(t){r.unbind(e,o),n(t)};r.bind(e,o)},e.exports=o},{}],5:[function(t,e,n){"use strict";function r(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}e.exports=function(){return r()+r()+"-"+r()+"-"+r()+"-"+r()+"-"+r()+r()+r()}},{}],6:[function(t,e,n){"use strict";var o=t("./class"),r=t("./dom"),i=n.toInt=function(t){return parseInt(t,10)||0},l=n.clone=function(t){if(null===t)return null;if(t.constructor===Array)return t.map(l);if("object"!=typeof t)return t;var e,n={};for(e in t)n[e]=l(t[e]);return n};n.extend=function(t,e){var n,r=l(t);for(n in e)r[n]=l(e[n]);return r},n.isEditable=function(t){return r.matches(t,"input,[contenteditable]")||r.matches(t,"select,[contenteditable]")||r.matches(t,"textarea,[contenteditable]")||r.matches(t,"button,[contenteditable]")},n.removePsClasses=function(t){for(var e=o.list(t),n=0;n<e.length;n++){var r=e[n];0===r.indexOf("ps-")&&o.remove(t,r)}},n.outerWidth=function(t){return i(r.css(t,"width"))+i(r.css(t,"paddingLeft"))+i(r.css(t,"paddingRight"))+i(r.css(t,"borderLeftWidth"))+i(r.css(t,"borderRightWidth"))},n.startScrolling=function(t,e){o.add(t,"ps-in-scrolling"),void 0!==e?o.add(t,"ps-"+e):(o.add(t,"ps-x"),o.add(t,"ps-y"))},n.stopScrolling=function(t,e){o.remove(t,"ps-in-scrolling"),void 0!==e?o.remove(t,"ps-"+e):(o.remove(t,"ps-x"),o.remove(t,"ps-y"))},n.env={isWebKit:"WebkitAppearance"in document.documentElement.style,supportsTouch:"ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch,supportsIePointer:null!==window.navigator.msMaxTouchPoints}},{"./class":2,"./dom":3}],7:[function(t,e,n){"use strict";var r=t("./plugin/destroy"),o=t("./plugin/initialize"),t=t("./plugin/update");e.exports={initialize:o,update:t,destroy:r}},{"./plugin/destroy":9,"./plugin/initialize":17,"./plugin/update":21}],8:[function(t,e,n){"use strict";e.exports={handlers:["click-rail","drag-scrollbar","keyboard","wheel","touch"],maxScrollbarLength:null,minScrollbarLength:null,scrollXMarginOffset:0,scrollYMarginOffset:0,stopPropagationOnClick:!0,suppressScrollX:!1,suppressScrollY:!1,swipePropagation:!0,useBothWheelAxes:!1,wheelPropagation:!1,wheelSpeed:1,theme:"default"}},{}],9:[function(t,e,n){"use strict";var r=t("../lib/helper"),o=t("../lib/dom"),i=t("./instances");e.exports=function(t){var e=i.get(t);e&&(e.event.unbindAll(),o.remove(e.scrollbarX),o.remove(e.scrollbarY),o.remove(e.scrollbarXRail),o.remove(e.scrollbarYRail),r.removePsClasses(t),i.remove(t))}},{"../lib/dom":3,"../lib/helper":6,"./instances":18}],10:[function(t,e,n){"use strict";var i=t("../../lib/helper"),r=t("../instances"),l=t("../update-geometry"),s=t("../update-scroll");function o(n,r){function o(t){return t.getBoundingClientRect()}function t(t){t.stopPropagation()}r.settings.stopPropagationOnClick&&r.event.bind(r.scrollbarY,"click",t),r.event.bind(r.scrollbarYRail,"click",function(t){var e=i.toInt(r.scrollbarYHeight/2),e=r.railYRatio*(t.pageY-window.pageYOffset-o(r.scrollbarYRail).top-e)/(r.railYRatio*(r.railYHeight-r.scrollbarYHeight));e<0?e=0:1<e&&(e=1),s(n,"top",(r.contentHeight-r.containerHeight)*e),l(n),t.stopPropagation()}),r.settings.stopPropagationOnClick&&r.event.bind(r.scrollbarX,"click",t),r.event.bind(r.scrollbarXRail,"click",function(t){var e=i.toInt(r.scrollbarXWidth/2),e=r.railXRatio*(t.pageX-window.pageXOffset-o(r.scrollbarXRail).left-e)/(r.railXRatio*(r.railXWidth-r.scrollbarXWidth));e<0?e=0:1<e&&(e=1),s(n,"left",(r.contentWidth-r.containerWidth)*e-r.negativeScrollAdjustment),l(n),t.stopPropagation()})}e.exports=function(t){o(t,r.get(t))}},{"../../lib/helper":6,"../instances":18,"../update-geometry":19,"../update-scroll":20}],11:[function(t,e,n){"use strict";var s=t("../../lib/helper"),a=t("../../lib/dom"),r=t("../instances"),c=t("../update-geometry"),u=t("../update-scroll");function o(r,o){var i,l=null;function e(t){var e,n;e=t.pageX-i,e=l+e*o.railXRatio,n=Math.max(0,o.scrollbarXRail.getBoundingClientRect().left)+o.railXRatio*(o.railXWidth-o.scrollbarXWidth),o.scrollbarXLeft=e<0?0:n<e?n:e,n=s.toInt(o.scrollbarXLeft*(o.contentWidth-o.containerWidth)/(o.containerWidth-o.railXRatio*o.scrollbarXWidth))-o.negativeScrollAdjustment,u(r,"left",n),c(r),t.stopPropagation(),t.preventDefault()}function n(){s.stopScrolling(r,"x"),o.event.unbind(o.ownerDocument,"mousemove",e)}o.event.bind(o.scrollbarX,"mousedown",function(t){i=t.pageX,l=s.toInt(a.css(o.scrollbarX,"left"))*o.railXRatio,s.startScrolling(r,"x"),o.event.bind(o.ownerDocument,"mousemove",e),o.event.once(o.ownerDocument,"mouseup",n),t.stopPropagation(),t.preventDefault()})}function i(r,o){var i,l=null;function e(t){var e,n;e=t.pageY-i,e=l+e*o.railYRatio,n=Math.max(0,o.scrollbarYRail.getBoundingClientRect().top)+o.railYRatio*(o.railYHeight-o.scrollbarYHeight),o.scrollbarYTop=e<0?0:n<e?n:e,n=s.toInt(o.scrollbarYTop*(o.contentHeight-o.containerHeight)/(o.containerHeight-o.railYRatio*o.scrollbarYHeight)),u(r,"top",n),c(r),t.stopPropagation(),t.preventDefault()}function n(){s.stopScrolling(r,"y"),o.event.unbind(o.ownerDocument,"mousemove",e)}o.event.bind(o.scrollbarY,"mousedown",function(t){i=t.pageY,l=s.toInt(a.css(o.scrollbarY,"top"))*o.railYRatio,s.startScrolling(r,"y"),o.event.bind(o.ownerDocument,"mousemove",e),o.event.once(o.ownerDocument,"mouseup",n),t.stopPropagation(),t.preventDefault()})}e.exports=function(t){var e=r.get(t);o(t,e),i(t,e)}},{"../../lib/dom":3,"../../lib/helper":6,"../instances":18,"../update-geometry":19,"../update-scroll":20}],12:[function(t,e,n){"use strict";var a=t("../../lib/helper"),c=t("../../lib/dom"),r=t("../instances"),u=t("../update-geometry"),d=t("../update-scroll");function o(i,l){var s=!1;l.event.bind(i,"mouseenter",function(){s=!0}),l.event.bind(i,"mouseleave",function(){s=!1});l.event.bind(l.ownerDocument,"keydown",function(t){if(!t.isDefaultPrevented||!t.isDefaultPrevented()){var e=c.matches(l.scrollbarX,":focus")||c.matches(l.scrollbarY,":focus");if(s||e){var n=document.activeElement||l.ownerDocument.activeElement;if(n){if("IFRAME"===n.tagName)n=n.contentDocument.activeElement;else for(;n.shadowRoot;)n=n.shadowRoot.activeElement;if(a.isEditable(n))return}var r=0,o=0;switch(t.which){case 37:r=-30;break;case 38:o=30;break;case 39:r=30;break;case 40:o=-30;break;case 33:o=90;break;case 32:o=t.shiftKey?90:-90;break;case 34:o=-90;break;case 35:o=t.ctrlKey?-l.contentHeight:-l.containerHeight;break;case 36:o=t.ctrlKey?i.scrollTop:l.containerHeight;break;default:return}d(i,"top",i.scrollTop-o),d(i,"left",i.scrollLeft+r),u(i),function(t,e){var n=i.scrollTop;if(0===t){if(!l.scrollbarYActive)return!1;if(0===n&&0<e||n>=l.contentHeight-l.containerHeight&&e<0)return!l.settings.wheelPropagation}if(n=i.scrollLeft,0===e){if(!l.scrollbarXActive)return!1;if(0===n&&t<0||n>=l.contentWidth-l.containerWidth&&0<t)return!l.settings.wheelPropagation}return!0}(r,o)&&t.preventDefault()}}})}e.exports=function(t){o(t,r.get(t))}},{"../../lib/dom":3,"../../lib/helper":6,"../instances":18,"../update-geometry":19,"../update-scroll":20}],13:[function(t,e,n){"use strict";var r=t("../instances"),s=t("../update-geometry"),a=t("../update-scroll");function o(o,i){var l=!1;function t(t){n=(e=t).deltaX,r=-1*e.deltaY,void 0!==n&&void 0!==r||(n=-1*e.wheelDeltaX/6,r=e.wheelDeltaY/6),e.deltaMode&&1===e.deltaMode&&(n*=10,r*=10),n!=n&&r!=r&&(n=0,r=e.wheelDelta);var e=[n,r],n=e[0],r=e[1];!function(t,e){var n=o.querySelector("textarea:hover, .ps-child:hover");if(n){if("TEXTAREA"!==n.tagName&&!window.getComputedStyle(n).overflow.match(/(scroll|auto)/))return;var r=n.scrollHeight-n.clientHeight;if(0<r&&!(0===n.scrollTop&&0<e||n.scrollTop===r&&e<0))return 1;r=n.scrollLeft-n.clientWidth;if(0<r&&!(0===n.scrollLeft&&t<0||n.scrollLeft===r&&0<t))return 1}}(n,r)&&(l=!1,i.settings.useBothWheelAxes?i.scrollbarYActive&&!i.scrollbarXActive?(a(o,"top",r?o.scrollTop-r*i.settings.wheelSpeed:o.scrollTop+n*i.settings.wheelSpeed),l=!0):i.scrollbarXActive&&!i.scrollbarYActive&&(a(o,"left",n?o.scrollLeft+n*i.settings.wheelSpeed:o.scrollLeft-r*i.settings.wheelSpeed),l=!0):(a(o,"top",o.scrollTop-r*i.settings.wheelSpeed),a(o,"left",o.scrollLeft+n*i.settings.wheelSpeed)),s(o),l=l||function(t,e){var n=o.scrollTop;if(0===t){if(!i.scrollbarYActive)return!1;if(0===n&&0<e||n>=i.contentHeight-i.containerHeight&&e<0)return!i.settings.wheelPropagation}if(n=o.scrollLeft,0===e){if(!i.scrollbarXActive)return!1;if(0===n&&t<0||n>=i.contentWidth-i.containerWidth&&0<t)return!i.settings.wheelPropagation}return!0}(n,r))&&(t.stopPropagation(),t.preventDefault())}void 0!==window.onwheel?i.event.bind(o,"wheel",t):void 0!==window.onmousewheel&&i.event.bind(o,"mousewheel",t)}e.exports=function(t){o(t,r.get(t))}},{"../instances":18,"../update-geometry":19,"../update-scroll":20}],14:[function(t,e,n){"use strict";var r=t("../instances"),o=t("../update-geometry");e.exports=function(t){var e,n=r.get(t);e=t,n.event.bind(e,"scroll",function(){o(e)})}},{"../instances":18,"../update-geometry":19}],15:[function(t,e,n){"use strict";var d=t("../../lib/helper"),p=t("../instances"),h=t("../update-geometry"),f=t("../update-scroll");function r(l,t){var s=null,a={top:0,left:0};function c(){s&&(clearInterval(s),s=null),d.stopScrolling(l)}var u=!1;t.event.bind(t.ownerDocument,"selectionchange",function(){var t;l.contains(0===(t=window.getSelection?window.getSelection():document.getSelection?document.getSelection():"").toString().length?null:t.getRangeAt(0).commonAncestorContainer)?u=!0:(u=!1,c())}),t.event.bind(window,"mouseup",function(){u&&(u=!1,c())}),t.event.bind(window,"mousemove",function(t){var e,n,r,o,i;u&&(e=t.pageX,t=t.pageY,n=l.offsetLeft,r=l.offsetLeft+l.offsetWidth,o=l.offsetTop,i=l.offsetTop+l.offsetHeight,e<n+3?(a.left=-5,d.startScrolling(l,"x")):r-3<e?(a.left=5,d.startScrolling(l,"x")):a.left=0,t<o+3?(a.top=o+3-t<5?-5:-20,d.startScrolling(l,"y")):i-3<t?(a.top=t-i+3<5?5:20,d.startScrolling(l,"y")):a.top=0,0===a.top&&0===a.left?c():s=s||setInterval(function(){p.get(l)?(f(l,"top",l.scrollTop+a.top),f(l,"left",l.scrollLeft+a.left),h(l)):clearInterval(s)},50))})}e.exports=function(t){r(t,p.get(t))}},{"../../lib/helper":6,"../instances":18,"../update-geometry":19,"../update-scroll":20}],16:[function(t,e,n){"use strict";var r=t("../../lib/helper"),m=t("../instances"),Y=t("../update-geometry"),w=t("../update-scroll");function o(l,s,t,e){function i(t,e){w(l,"top",l.scrollTop-e),w(l,"left",l.scrollLeft-t),Y(l)}var a={},c=0,u={},n=null,d=!1,p=!1;function r(){d=!0}function o(){d=!1}function h(t){return t.targetTouches?t.targetTouches[0]:t}function f(t){return t.targetTouches&&1===t.targetTouches.length||!(!t.pointerType||"mouse"===t.pointerType||t.pointerType===t.MSPOINTER_TYPE_MOUSE)}function b(t){var e;f(t)&&(p=!0,e=h(t),a.pageX=e.pageX,a.pageY=e.pageY,c=(new Date).getTime(),null!==n&&clearInterval(n),t.stopPropagation())}function v(t){var e,n,r,o;!p&&s.settings.swipePropagation&&b(t),!d&&p&&f(t)&&(i(e=(r={pageX:(r=h(t)).pageX,pageY:r.pageY}).pageX-a.pageX,n=r.pageY-a.pageY),a=r,0<(o=(r=(new Date).getTime())-c)&&(u.x=e/o,u.y=n/o,c=r),function(t,e){var n=l.scrollTop,r=l.scrollLeft,o=Math.abs(t),i=Math.abs(e);if(o<i){if(e<0&&n===s.contentHeight-s.containerHeight||0<e&&0===n)return!s.settings.swipePropagation}else if(i<o&&(t<0&&r===s.contentWidth-s.containerWidth||0<t&&0===r))return!s.settings.swipePropagation;return 1}(e,n))&&(t.stopPropagation(),t.preventDefault())}function g(){!d&&p&&(p=!1,clearInterval(n),n=setInterval(function(){!m.get(l)||Math.abs(u.x)<.01&&Math.abs(u.y)<.01?clearInterval(n):(i(30*u.x,30*u.y),u.x*=.8,u.y*=.8)},10))}t&&(s.event.bind(window,"touchstart",r),s.event.bind(window,"touchend",o),s.event.bind(l,"touchstart",b),s.event.bind(l,"touchmove",v),s.event.bind(l,"touchend",g)),e&&(window.PointerEvent?(s.event.bind(window,"pointerdown",r),s.event.bind(window,"pointerup",o),s.event.bind(l,"pointerdown",b),s.event.bind(l,"pointermove",v),s.event.bind(l,"pointerup",g)):window.MSPointerEvent&&(s.event.bind(window,"MSPointerDown",r),s.event.bind(window,"MSPointerUp",o),s.event.bind(l,"MSPointerDown",b),s.event.bind(l,"MSPointerMove",v),s.event.bind(l,"MSPointerUp",g)))}e.exports=function(t){(r.env.supportsTouch||r.env.supportsIePointer)&&o(t,m.get(t),r.env.supportsTouch,r.env.supportsIePointer)}},{"../../lib/helper":6,"../instances":18,"../update-geometry":19,"../update-scroll":20}],17:[function(t,e,n){"use strict";var r=t("../lib/helper"),o=t("../lib/class"),i=t("./instances"),l=t("./update-geometry"),s={"click-rail":t("./handler/click-rail"),"drag-scrollbar":t("./handler/drag-scrollbar"),keyboard:t("./handler/keyboard"),wheel:t("./handler/mouse-wheel"),touch:t("./handler/touch"),selection:t("./handler/selection")},a=t("./handler/native-scroll");e.exports=function(e,t){t="object"==typeof t?t:{},o.add(e,"ps-container");var n=i.add(e);n.settings=r.extend(n.settings,t),o.add(e,"ps-theme-"+n.settings.theme),n.settings.handlers.forEach(function(t){s[t](e)}),a(e),l(e)}},{"../lib/class":2,"../lib/helper":6,"./handler/click-rail":10,"./handler/drag-scrollbar":11,"./handler/keyboard":12,"./handler/mouse-wheel":13,"./handler/native-scroll":14,"./handler/selection":15,"./handler/touch":16,"./instances":18,"./update-geometry":19}],18:[function(t,e,n){"use strict";var l=t("../lib/helper"),s=t("../lib/class"),a=t("./default-setting"),c=t("../lib/dom"),u=t("../lib/event-manager"),r=t("../lib/guid"),o={};function i(t){var e,n,r=this;function o(){s.add(t,"ps-focus")}function i(){s.remove(t,"ps-focus")}r.settings=l.clone(a),r.containerWidth=null,r.containerHeight=null,r.contentWidth=null,r.contentHeight=null,r.isRtl="rtl"===c.css(t,"direction"),r.isNegativeScroll=(n=t.scrollLeft,t.scrollLeft=-1,e=t.scrollLeft<0,t.scrollLeft=n,e),r.negativeScrollAdjustment=r.isNegativeScroll?t.scrollWidth-t.clientWidth:0,r.event=new u,r.ownerDocument=t.ownerDocument||document,r.scrollbarXRail=c.appendTo(c.e("div","ps-scrollbar-x-rail"),t),r.scrollbarX=c.appendTo(c.e("div","ps-scrollbar-x"),r.scrollbarXRail),r.scrollbarX.setAttribute("tabindex",0),r.event.bind(r.scrollbarX,"focus",o),r.event.bind(r.scrollbarX,"blur",i),r.scrollbarXActive=null,r.scrollbarXWidth=null,r.scrollbarXLeft=null,r.scrollbarXBottom=l.toInt(c.css(r.scrollbarXRail,"bottom")),r.isScrollbarXUsingBottom=r.scrollbarXBottom==r.scrollbarXBottom,r.scrollbarXTop=r.isScrollbarXUsingBottom?null:l.toInt(c.css(r.scrollbarXRail,"top")),r.railBorderXWidth=l.toInt(c.css(r.scrollbarXRail,"borderLeftWidth"))+l.toInt(c.css(r.scrollbarXRail,"borderRightWidth")),c.css(r.scrollbarXRail,"display","block"),r.railXMarginWidth=l.toInt(c.css(r.scrollbarXRail,"marginLeft"))+l.toInt(c.css(r.scrollbarXRail,"marginRight")),c.css(r.scrollbarXRail,"display",""),r.railXWidth=null,r.railXRatio=null,r.scrollbarYRail=c.appendTo(c.e("div","ps-scrollbar-y-rail"),t),r.scrollbarY=c.appendTo(c.e("div","ps-scrollbar-y"),r.scrollbarYRail),r.scrollbarY.setAttribute("tabindex",0),r.event.bind(r.scrollbarY,"focus",o),r.event.bind(r.scrollbarY,"blur",i),r.scrollbarYActive=null,r.scrollbarYHeight=null,r.scrollbarYTop=null,r.scrollbarYRight=l.toInt(c.css(r.scrollbarYRail,"right")),r.isScrollbarYUsingRight=r.scrollbarYRight==r.scrollbarYRight,r.scrollbarYLeft=r.isScrollbarYUsingRight?null:l.toInt(c.css(r.scrollbarYRail,"left")),r.scrollbarYOuterWidth=r.isRtl?l.outerWidth(r.scrollbarY):null,r.railBorderYWidth=l.toInt(c.css(r.scrollbarYRail,"borderTopWidth"))+l.toInt(c.css(r.scrollbarYRail,"borderBottomWidth")),c.css(r.scrollbarYRail,"display","block"),r.railYMarginHeight=l.toInt(c.css(r.scrollbarYRail,"marginTop"))+l.toInt(c.css(r.scrollbarYRail,"marginBottom")),c.css(r.scrollbarYRail,"display",""),r.railYHeight=null,r.railYRatio=null}function d(t){return t.getAttribute("data-ps-id")}n.add=function(t){var e=r();return t.setAttribute("data-ps-id",e),o[e]=new i(t),o[e]},n.remove=function(t){delete o[d(t)],t.removeAttribute("data-ps-id")},n.get=function(t){return o[d(t)]}},{"../lib/class":2,"../lib/dom":3,"../lib/event-manager":4,"../lib/guid":5,"../lib/helper":6,"./default-setting":8}],19:[function(t,e,n){"use strict";var i=t("../lib/helper"),l=t("../lib/class"),s=t("../lib/dom"),a=t("./instances"),c=t("./update-scroll");function u(t,e){return t.settings.minScrollbarLength&&(e=Math.max(e,t.settings.minScrollbarLength)),e=t.settings.maxScrollbarLength?Math.min(e,t.settings.maxScrollbarLength):e}e.exports=function(t){var e,n,r,o=a.get(t);o.containerWidth=t.clientWidth,o.containerHeight=t.clientHeight,o.contentWidth=t.scrollWidth,o.contentHeight=t.scrollHeight,t.contains(o.scrollbarXRail)||(0<(e=s.queryChildren(t,".ps-scrollbar-x-rail")).length&&e.forEach(function(t){s.remove(t)}),s.appendTo(o.scrollbarXRail,t)),t.contains(o.scrollbarYRail)||(0<(e=s.queryChildren(t,".ps-scrollbar-y-rail")).length&&e.forEach(function(t){s.remove(t)}),s.appendTo(o.scrollbarYRail,t)),!o.settings.suppressScrollX&&o.containerWidth+o.settings.scrollXMarginOffset<o.contentWidth?(o.scrollbarXActive=!0,o.railXWidth=o.containerWidth-o.railXMarginWidth,o.railXRatio=o.containerWidth/o.railXWidth,o.scrollbarXWidth=u(o,i.toInt(o.railXWidth*o.containerWidth/o.contentWidth)),o.scrollbarXLeft=i.toInt((o.negativeScrollAdjustment+t.scrollLeft)*(o.railXWidth-o.scrollbarXWidth)/(o.contentWidth-o.containerWidth))):o.scrollbarXActive=!1,!o.settings.suppressScrollY&&o.containerHeight+o.settings.scrollYMarginOffset<o.contentHeight?(o.scrollbarYActive=!0,o.railYHeight=o.containerHeight-o.railYMarginHeight,o.railYRatio=o.containerHeight/o.railYHeight,o.scrollbarYHeight=u(o,i.toInt(o.railYHeight*o.containerHeight/o.contentHeight)),o.scrollbarYTop=i.toInt(t.scrollTop*(o.railYHeight-o.scrollbarYHeight)/(o.contentHeight-o.containerHeight))):o.scrollbarYActive=!1,o.scrollbarXLeft>=o.railXWidth-o.scrollbarXWidth&&(o.scrollbarXLeft=o.railXWidth-o.scrollbarXWidth),o.scrollbarYTop>=o.railYHeight-o.scrollbarYHeight&&(o.scrollbarYTop=o.railYHeight-o.scrollbarYHeight),e=t,r={width:(n=o).railXWidth},n.isRtl?r.left=n.negativeScrollAdjustment+e.scrollLeft+n.containerWidth-n.contentWidth:r.left=e.scrollLeft,n.isScrollbarXUsingBottom?r.bottom=n.scrollbarXBottom-e.scrollTop:r.top=n.scrollbarXTop+e.scrollTop,s.css(n.scrollbarXRail,r),r={top:e.scrollTop,height:n.railYHeight},n.isScrollbarYUsingRight?n.isRtl?r.right=n.contentWidth-(n.negativeScrollAdjustment+e.scrollLeft)-n.scrollbarYRight-n.scrollbarYOuterWidth:r.right=n.scrollbarYRight-e.scrollLeft:n.isRtl?r.left=n.negativeScrollAdjustment+e.scrollLeft+2*n.containerWidth-n.contentWidth-n.scrollbarYLeft-n.scrollbarYOuterWidth:r.left=n.scrollbarYLeft+e.scrollLeft,s.css(n.scrollbarYRail,r),s.css(n.scrollbarX,{left:n.scrollbarXLeft,width:n.scrollbarXWidth-n.railBorderXWidth}),s.css(n.scrollbarY,{top:n.scrollbarYTop,height:n.scrollbarYHeight-n.railBorderYWidth}),o.scrollbarXActive?l.add(t,"ps-active-x"):(l.remove(t,"ps-active-x"),o.scrollbarXWidth=0,o.scrollbarXLeft=0,c(t,"left",0)),o.scrollbarYActive?l.add(t,"ps-active-y"):(l.remove(t,"ps-active-y"),o.scrollbarYHeight=0,o.scrollbarYTop=0,c(t,"top",0))}},{"../lib/class":2,"../lib/dom":3,"../lib/helper":6,"./instances":18,"./update-scroll":20}],20:[function(t,e,n){"use strict";var o,i,l=t("./instances"),s=document.createEvent("Event"),a=document.createEvent("Event"),c=document.createEvent("Event"),u=document.createEvent("Event"),d=document.createEvent("Event"),p=document.createEvent("Event"),h=document.createEvent("Event"),f=document.createEvent("Event"),b=document.createEvent("Event"),v=document.createEvent("Event");s.initEvent("ps-scroll-up",!0,!0),a.initEvent("ps-scroll-down",!0,!0),c.initEvent("ps-scroll-left",!0,!0),u.initEvent("ps-scroll-right",!0,!0),d.initEvent("ps-scroll-y",!0,!0),p.initEvent("ps-scroll-x",!0,!0),h.initEvent("ps-x-reach-start",!0,!0),f.initEvent("ps-x-reach-end",!0,!0),b.initEvent("ps-y-reach-start",!0,!0),v.initEvent("ps-y-reach-end",!0,!0),e.exports=function(t,e,n){if(void 0===t)throw"You must provide an element to the update-scroll function";if(void 0===e)throw"You must provide an axis to the update-scroll function";if(void 0===n)throw"You must provide a value to the update-scroll function";"top"===e&&n<=0&&(t.scrollTop=n=0,t.dispatchEvent(b)),"left"===e&&n<=0&&(t.scrollLeft=n=0,t.dispatchEvent(h));var r=l.get(t);"top"===e&&n>=r.contentHeight-r.containerHeight&&((n=r.contentHeight-r.containerHeight)-t.scrollTop<=1?n=t.scrollTop:t.scrollTop=n,t.dispatchEvent(v)),"left"===e&&n>=r.contentWidth-r.containerWidth&&((n=r.contentWidth-r.containerWidth)-t.scrollLeft<=1?n=t.scrollLeft:t.scrollLeft=n,t.dispatchEvent(f)),o=o||t.scrollTop,i=i||t.scrollLeft,"top"===e&&n<o&&t.dispatchEvent(s),"top"===e&&o<n&&t.dispatchEvent(a),"left"===e&&n<i&&t.dispatchEvent(c),"left"===e&&i<n&&t.dispatchEvent(u),"top"===e&&(t.scrollTop=o=n,t.dispatchEvent(d)),"left"===e&&(t.scrollLeft=i=n,t.dispatchEvent(p))}},{"./instances":18}],21:[function(t,e,n){"use strict";var r=t("../lib/helper"),o=t("../lib/dom"),i=t("./instances"),l=t("./update-geometry"),s=t("./update-scroll");e.exports=function(t){var e=i.get(t);e&&(e.negativeScrollAdjustment=e.isNegativeScroll?t.scrollWidth-t.clientWidth:0,o.css(e.scrollbarXRail,"display","block"),o.css(e.scrollbarYRail,"display","block"),e.railXMarginWidth=r.toInt(o.css(e.scrollbarXRail,"marginLeft"))+r.toInt(o.css(e.scrollbarXRail,"marginRight")),e.railYMarginHeight=r.toInt(o.css(e.scrollbarYRail,"marginTop"))+r.toInt(o.css(e.scrollbarYRail,"marginBottom")),o.css(e.scrollbarXRail,"display","none"),o.css(e.scrollbarYRail,"display","none"),l(t),s(t,"top",t.scrollTop),s(t,"left",t.scrollLeft),o.css(e.scrollbarXRail,"display",""),o.css(e.scrollbarYRail,"display",""))}},{"../lib/dom":3,"../lib/helper":6,"./instances":18,"./update-geometry":19,"./update-scroll":20}]},{},[1]);