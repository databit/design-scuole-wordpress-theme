var $usermenu=$(".menu-user-wrapper"),$searchfilters=($usermenu.responsiveDom({appendTo:".menu-user-mobile",mediaQuery:"(max-width: 1200px)"}),$(".search-results-filters"));function isIE(){var e=(t=window.navigator.userAgent).indexOf("MSIE "),t=t.indexOf("Trident/");return 0<e||0<t}function getZoomBrowser(){var t,n,a,e=-1<navigator.userAgent.toLowerCase().indexOf("firefox"),o=(a=window.matchMedia||(r=document.getElementsByTagName("head")[0],t=document.createElement("style"),r.appendChild(t),(n=document.createElement("div")).className="mediaQueryBinarySearch",n.style.display="none",document.body.appendChild(n),function(e){return t.sheet.insertRule("@media "+e+"{.mediaQueryBinarySearch {text-decoration: underline} }",0),e="underline"==getComputedStyle(n,null).textDecoration,t.sheet.deleteRule(0),{matches:e}}),i=function e(t,n,o){var r=(t+n)/2;return o<=0||n-t<1e-4?r:a("(min--moz-device-pixel-ratio:"+r+")").matches?e(r,n,o-1):e(t,r,o-1)}(0,10,20),n&&(r.removeChild(t),document.body.removeChild(n)),i),o=Math.round(100*o)/100,r=Math.round(document.documentElement.offsetHeight/window.innerHeight*100)/100,i=Math.round(window.outerWidth/window.innerWidth*100)/100;return e?o:isIE()?r:i}$searchfilters.responsiveDom({appendTo:".search-results-filters-mobile",mediaQuery:"(max-width: 992px)"}),jQuery(document).ready(function(e){e(".toggle-menu").jPushMenu({closeOnClickLink:!1,activeClass:"is-active"}),e(".close-user-menu").jPushMenu({closeOnClickLink:!1,activeClass:"is-active"}),e(".menu-mobile-close").click(function(){e(".push-body").removeClass("push-body-search"),e(".push-body").removeClass("push-body-toleft"),e(".push-body").removeClass("push-body-toright"),e(".cbp-spmenu-search").removeClass("menu-open")}),e(document).on("click",function(){e(".push-body").removeClass("push-body-search"),e(".push-body").removeClass("push-body-toleft"),e(".push-body").removeClass("push-body-toright"),e(".cbp-spmenu-search").removeClass("menu-open")})}),$(document).ready(function(e){e(".perfect-scrollbar").perfectScrollbar(),e(".map-aside").perfectScrollbar()}),$(document).ready(function(){function e(){var e=$(window).scrollTop(),t=$("#main-wrapper").offset().top;Math.round(100*window.devicePixelRatio)<250?t<e?($("#main-header").addClass("is-sticky"),$("#main-wrapper").addClass("sticked-menu"),$("body").addClass("sticked-menu-body"),$(".nav-list-secondary a").attr("tabindex","-1")):($("#main-header").removeClass("is-sticky"),$("#main-wrapper").removeClass("sticked-menu"),$("body").removeClass("sticked-menu-body"),$(".nav-list-secondary a").removeAttr("tabindex")):($("#main-header").addClass("zoom"),$(".cbp-spmenu-vertical.cbp-spmenu-left").addClass("zoom"))}$(function(){$(window).scroll(e),e()})}),jQuery(window).resize(function(){250<=Math.round(100*window.devicePixelRatio)?($("#main-header").addClass("zoom"),$(".cbp-spmenu-vertical.cbp-spmenu-left").addClass("zoom")):($("#main-header").removeClass("zoom"),$(".cbp-spmenu-vertical.cbp-spmenu-left").removeClass("zoom"))}),$(document).ready(function(){$(".nav-list").length&&($(".nav-list .toggle-dropdown").on("click",function(e){$(this).next(".menu-dropdown").hasClass("active")?($(this).next(".menu-dropdown").slideUp(100),$(this).next(".menu-dropdown").removeClass("active"),$(this).removeClass("active"),$(this).attr("aria-expanded","false")):($(this).parent().parent().find(".toggle-dropdown").removeClass("active"),$(this).parent().parent().find(".toggle-dropdown").attr("aria-expanded","false"),$(this).addClass("active"),$(this).attr("aria-expanded","true"),$(this).parent().parent().find(".menu-dropdown").removeClass("active"),$(this).parent().parent().find(".menu-dropdown").slideUp(100),$(this).next(".menu-dropdown").slideDown(100),$(this).next(".menu-dropdown").addClass("active")),e.stopPropagation(),e.preventDefault()}),$(document).click(function(e){$(".menu-dropdown").slideUp(100),$(".menu-dropdown").removeClass("active"),$(".toggle-dropdown").removeClass("active"),$(".toggle-dropdown").attr("aria-expanded","false")}),$(".menu-dropdown").click(function(e){e.stopPropagation()}))}),$(function(){$(".scroll-anchor-offset").bind("click",function(e){var t=$(this);$("html, body").stop().animate({scrollTop:$(t.attr("href")).offset().top-150},200,"easeInOutExpo"),e.preventDefault()})}),$(document).ready(function(){$(".accordion-wrapper").length&&accordion()}),document.addEventListener("DOMContentLoaded",function(){function e(){var e=document.querySelector(".hamburger.toggle-menu"),t=document.querySelector(".cbp-spmenu.cbp-spmenu-vertical.cbp-spmenu-left").querySelectorAll('a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])');window.matchMedia("(min-width: 1200px)").matches?(t.forEach(e=>{e.setAttribute("aria-hidden","true"),e.setAttribute("tabindex","-1")}),e.setAttribute("aria-hidden","true"),e.setAttribute("tabindex","-1")):(t.forEach(e=>{e.removeAttribute("aria-hidden"),e.removeAttribute("tabindex")}),e.removeAttribute("aria-hidden"),e.removeAttribute("tabindex"))}let t;window.addEventListener("resize",()=>{clearTimeout(t),t=setTimeout(e(),500)}),e()}),document.addEventListener("DOMContentLoaded",function(){var e=document.querySelector(".history-carousel"),t=document.querySelector(".year-carousel");e&&t&&(e=new Splide(e,{pagination:!1,arrows:!1,perPage:3,perMove:1,gap:"1rem",speed:number=800,slideFocus:!1,breakpoints:{800:{pagination:!1,slideFocus:!1,perPage:2},520:{pagination:!1,slideFocus:!1,perPage:1}}}).mount(),t=new Splide(t,{pagination:!1,perPage:3,perMove:1,speed:number=800,cloneStatus:!1,slideFocus:!1,gap:0,breakpoints:{800:{gap:"0rem",pagination:!1,slideFocus:!1,perPage:2},520:{gap:"0rem",pagination:!1,slideFocus:!1,perPage:1}}}).mount(),e.sync(t))}),document.addEventListener("DOMContentLoaded",function(){var e=document.querySelectorAll(".splide-double"),t=document.querySelectorAll(".carousel-cards");e.length&&e.forEach(e=>{new Splide(e,{pagination:!0,arrows:!0,gap:"2rem",perPage:2,perMove:1,speed:number=800,slideFocus:!1,breakpoints:{1300:{arrows:!1,pagination:!0,slideFocus:!1},768:{perPage:1,arrows:!1,pagination:!0,slideFocus:!1}}}).mount()}),t.length&&t.forEach(e=>{new Splide(e,{destroy:!0,breakpoints:{992:{destroy:!1,arrows:!1,pagination:!1,perPage:2,perMove:1,speed:number=800,slideFocus:!1,gap:"2rem"},600:{slideFocus:!1,pagination:!1,arrows:!1,perPage:1}}}).mount()})}),document.addEventListener("DOMContentLoaded",function(){const e=document.querySelectorAll(".carousel-classroom"),t=document.querySelectorAll(".simple-two-carousel"),n=document.querySelectorAll(".inside-carousel");e.length&&setTimeout(()=>{e.forEach(e=>{new Splide(e,{gap:"1.5rem",arrows:!0,pagination:!1,slideFocus:!1,perMove:1,perPage:3,padding:{left:"200px",right:"200px"},breakpoints:{1200:{slideFocus:!1,perPage:2,padding:{left:"120px",right:"120px"}},768:{slideFocus:!1,padding:{left:"120px",right:"120px"}},550:{slideFocus:!1,gap:"0.5rem",perPage:1,padding:{left:"80px",right:"80px"}}}}).mount()})},600),t.length&&setTimeout(()=>{t.forEach(e=>{new Splide(e,{gap:"2rem",arrows:!0,perPage:2,perMove:1,pagination:!1,slideFocus:!1,breakpoints:{1300:{arrows:!1,slideFocus:!1},768:{arrows:!1,slideFocus:!1,perPage:1,perMove:1}}}).mount()})},800),n.length&&setTimeout(()=>{n.forEach(e=>{new Splide(e,{gap:"50px",arrows:!0,perPage:2,slideFocus:!1,perMove:1,padding:{left:"50px",right:"50px"},breakpoints:{1300:{slideFocus:!1,arrows:!1,padding:{left:"0",right:"0"}},768:{arrows:!1,slideFocus:!1,padding:{left:"0",right:"0"},perPage:1,perMove:1}}}).mount()})},800)}),$(".responsive-tabs").responsiveTabs({startCollapsed:"accordion"}),$(document).ready(function(){$(".video-container ").fitVids()}),jQuery(document).ready(function(e){function t(){jQuery(".sticky-sidebar").stick_in_parent({parent:".sticky-sidebar-container",offset_top:100}),jQuery(".sticky-sidebar").on("sticky_kit:bottom",function(e){jQuery(this).parent().css("position","static")}).on("sticky_kit:unbottom",function(e){jQuery(this).parent().css("position","relative")})}e(".sticky-sidebar").length&&(jQuery(window).width()<992?jQuery(".sticky-sidebar").trigger("sticky_kit:detach"):t(),jQuery(window).resize(function(){jQuery(window).width()<992?jQuery(".sticky-sidebar").trigger("sticky_kit:detach"):t()}))}),$(document).ready(function(){$(".dropdown-toggle").length&&($(".dropdown-toggle").click(function(e){}),$(document).click(function(e){$(".dropdown-toggle").removeClass("show")}))}),$(document).ready(function(){(document.querySelector(".skiplink")?.querySelector('[href="#menu-principale"]')).addEventListener("click",()=>{var e=document.querySelector(".sticky-main-nav");setTimeout(()=>{e.querySelector("#menu-principale a").focus()},100)})}),$(document).ready(function(){function e(){var e=$(window).scrollTop(),t=$("#main-wrapper").offset().top,n=document.querySelector(".sticky-main-nav"),o=document.querySelector("#sub-nav .nav-container"),r=document.querySelector("#sub-nav .nav-container .main-nav"),a=document.querySelector(".header-bottom .dl-menu.nav-list-primary"),i=document.querySelector(".header-top .sticky-main-nav .main-nav"),s=document.querySelectorAll(".sticky-main-nav a");window.matchMedia("(min-width: 1200px)").matches&&(s.forEach(e=>{e.removeAttribute("tabindex")}),t<e?($(".header-utils-wrapper").addClass("utils-moved"),i||n.insertAdjacentElement("afterbegin",r)):($(".header-utils-wrapper").removeClass("utils-moved"),a||o?.insertAdjacentElement("afterbegin",i)))}var t,o,n;$(function(){$(window).scroll(e),e()}),t=document.querySelector(".cbp-spmenu-vertical.cbp-spmenu-left"),o=document.querySelectorAll(".cbp-spmenu-vertical.cbp-spmenu-left a"),new MutationObserver(function(e,t){for(const n of e)"attributes"===n.type&&(n.target.classList.contains("menu-open")?(o.forEach(e=>{e.removeAttribute("tabindex")}),function(a){document.addEventListener("keydown",e=>{var t=document.querySelector(".toggle-user-menu-mobile"),n=document.querySelector('[data-target="#access-modal"]'),o=document.querySelector(".hamburger.is-active"),r=document.querySelector(".logo-header a");9!=e.which||e.shiftKey||document.activeElement!=a[a.length-1]||(t||n).focus(),9==e.which&&e.shiftKey&&document.activeElement===o&&r.focus()})}(o)):o.forEach(e=>{e.setAttribute("tabindex","-1")}))}).observe(t,{attributes:!0}),window.addEventListener("resize",function(){clearTimeout(n),n=setTimeout(e,200)})}),$(document).ready(function(){$(".match-height").length&&$(function(){$(".match-height").matchHeight()})});const searchModal=document.querySelector("#search-modal");function initCleanInput(){if(searchModal){const e=searchModal.querySelector(".search-form #search-input"),t=searchModal.querySelector(".search-form .clean-input");e?.addEventListener("input",()=>{0<e.value.length?t.classList.add("show"):t.classList.remove("show")}),t.addEventListener("click",()=>{e.value="",t.classList.remove("show")})}}function closeUserMenu(){var e=document.querySelector(".close-user-menu"),t=document.querySelector("body"),n=document.querySelector(".cbp-spmenu-right");e?.addEventListener("click",()=>{t.classList.remove("push-body-toleft"),n.classList.remove("menu-open")})}function tabIndexUser(){var e=document.querySelector(".cbp-spmenu-vertical.cbp-spmenu-right"),o=document.querySelectorAll(".cbp-spmenu-vertical.cbp-spmenu-right a"),r=document.querySelectorAll(".cbp-spmenu-vertical.cbp-spmenu-right button");new MutationObserver(function(e,t){for(const n of e)"attributes"===n.type&&(n.target.classList.contains("menu-open")?(o.forEach(e=>{e.removeAttribute("tabindex")}),r.forEach(e=>{e.removeAttribute("tabindex")}),catchFocusUser(o,r)):(o.forEach(e=>{e.setAttribute("tabindex","-1")}),r.forEach(e=>{e.setAttribute("tabindex","-1")})))}).observe(e,{attributes:!0})}function catchFocusUser(o,r){document.addEventListener("keydown",e=>{var t=document.querySelector(".toggle-user-menu-mobile"),n=document.querySelector(".hamburger");9!=e.which||e.shiftKey||document.activeElement!=o[o.length-1]||t.focus(),9==e.which&&e.shiftKey&&document.activeElement==r[0]&&n.focus()})}initCleanInput(),closeUserMenu(),tabIndexUser();