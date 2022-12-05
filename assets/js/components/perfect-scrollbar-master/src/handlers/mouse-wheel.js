import*as CSS from"../lib/css";import cls from"../lib/class-names";import updateGeometry from"../update-geometry";import{env}from"../lib/util";export default function(c){const n=c.element;function e(t){var[l,o]=function(e){let t=e.deltaX,l=-1*e.deltaY;return void 0!==t&&void 0!==l||(t=-1*e.wheelDeltaX/6,l=e.wheelDeltaY/6),e.deltaMode&&1===e.deltaMode&&(t*=10,l*=10),t!=t&&l!=l&&(t=0,l=e.wheelDelta),e.shiftKey?[-l,-t]:[t,l]}(t);if(!function(t,l,o){if(!env.isWebKit&&n.querySelector("select:focus"))return 1;if(n.contains(t)){let e=t;for(;e&&e!==n;){if(e.classList.contains(cls.element.consuming))return 1;var r=CSS.get(e);if(o&&r.overflowY.match(/(scroll|auto)/)){var s=e.scrollHeight-e.clientHeight;if(0<s&&(0<e.scrollTop&&o<0||e.scrollTop<s&&0<o))return 1}if(l&&r.overflowX.match(/(scroll|auto)/)){s=e.scrollWidth-e.clientWidth;if(0<s&&(0<e.scrollLeft&&l<0||e.scrollLeft<s&&0<l))return 1}e=e.parentNode}}}(t.target,l,o)){let e=!1;c.settings.useBothWheelAxes?c.scrollbarYActive&&!c.scrollbarXActive?(o?n.scrollTop-=o*c.settings.wheelSpeed:n.scrollTop+=l*c.settings.wheelSpeed,e=!0):c.scrollbarXActive&&!c.scrollbarYActive&&(l?n.scrollLeft+=l*c.settings.wheelSpeed:n.scrollLeft-=o*c.settings.wheelSpeed,e=!0):(n.scrollTop-=o*c.settings.wheelSpeed,n.scrollLeft+=l*c.settings.wheelSpeed),updateGeometry(c),(e=e||function(e,t){var l=Math.floor(n.scrollTop),o=0===n.scrollTop,l=l+n.offsetHeight===n.scrollHeight,r=0===n.scrollLeft,s=n.scrollLeft+n.offsetWidth===n.scrollWidth;let i;return!(i=Math.abs(t)>Math.abs(e)?o||l:r||s)||!c.settings.wheelPropagation}(l,o))&&!t.ctrlKey&&(t.stopPropagation(),t.preventDefault())}}void 0!==window.onwheel?c.event.bind(n,"wheel",e):void 0!==window.onmousewheel&&c.event.bind(n,"mousewheel",e)}