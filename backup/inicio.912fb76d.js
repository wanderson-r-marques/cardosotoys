!function i(r,n,a){function s(t,e){if(!n[t]){if(!r[t]){var o="function"==typeof require&&require;if(!e&&o)return o(t,!0);if(c)return c(t,!0);throw(o=new Error("Cannot find module '"+t+"'")).code="MODULE_NOT_FOUND",o}o=n[t]={exports:{}},r[t][0].call(o.exports,function(e){return s(r[t][1][e]||e)},o,o.exports,i,r,n,a)}return n[t].exports}for(var c="function"==typeof require&&require,e=0;e<a.length;e++)s(a[e]);return s}({1:[function(e,t,o){"use strict";function i(e,t){for(var o,i=0;i<t.length;i++)(o=t[i]).enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(o){var i=u();return function(){var e,t=d(o);return e=i?(e=d(this).constructor,Reflect.construct(t,arguments,e)):t.apply(this,arguments),t=this,!(e=e)||"object"!==r(e)&&"function"!=typeof e?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t):e}}function a(e){var i="function"==typeof Map?new Map:void 0;return(a=function(e){function t(){return c(e,arguments,d(this).constructor)}if(null===e||(o=e,-1===Function.toString.call(o).indexOf("[native code]")))return e;var o;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==i){if(i.has(e))return i.get(e);i.set(e,t)}return t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),l(t,e)})(e)}function c(){return(c=u()?Reflect.construct:function(e,t,o){var i=[null];i.push.apply(i,t);i=new(Function.bind.apply(e,i));return o&&l(i,o.prototype),i}).apply(null,arguments)}function u(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var p,f,h,m="STORE20",v=3,b=function(){function e(){return s(this,e),t.apply(this,arguments)}!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(e,a(Error));var t=n(e);return e}(),g=function(e){return e.replace(/ /g,"")},y=(p=S,(f=[{key:"reinitializeStore",value:function(){return this.settings.editor.refreshAppMarketData(),this.initializeStore()}},{key:"addCartButton",value:function(){this.settings.customHeaderButtons.add("kv-ee-cart_button",'<div><i class="fa fa-shopping-cart"></i><span class="kv-ee-cartContent pl-1"></span></div>'),window.storeCartButton=!0}},{key:"onSiteChanged",value:function(){this.settings.getPageUri("store/product-detail")?this.addCartButton():(this.settings.customHeaderButtons.remove("kv-ee-cart_button"),window.storeCartButton=!1)}},{key:"initializeStore",value:function(){var o=this;this.didGetStoreInfo=!1;var e=this.settings.resolveAppmarketApp(m);return this.storeInitializingPromise=e.then(function(e){if(!e)throw new Error("Store has not been created");o.app=e,o.instanceJwt=e&&e.instance_jwt,o.instanceId=e&&e.instance_id,o.shopApiUrl=o.getUrlByAppName(e.url,"st-shop-api"),o.storeApiUrl=o.getUrlByAppName(e.url,"st-edit-api"),o.shopUrl=o.getUrlByAppName(e.url,"st-shop");var t=window.self!==window.top;if(o.settings.getPageUri("store/product-detail")&&70<=e.setup_status)o.settings.addScriptFromAppmarketApp(m),o.addCartButton(),o.settings.customHeaderButtons.forEach("kv-ee-cart_button",function(e){o.cartButton=e,o.cartButton.length=1,o.didCartInitialization||o.initializeCart()}),o.data.needToCreateStore=!1,o.data.needToSetup=!1,o.settings.getAllChildFeatures().forEach(function(e){return e.doStoreDataCall(!0)});else{if(!t)throw new b;o.settings.getAllChildFeatures().forEach(function(e){e.doStoreDataCall(!1),e.renderOverlay&&e.renderOverlay()})}}).then(function(){return Promise.all(o.app?[o.fetchStoreSettings()]:[])}).then(function(){o.didGetStoreInfo=!0,o.settings.getAllChildFeatures().forEach(function(e){return e.onDidGetStoreInfo(!0)})}).catch(function(e){o.didGetStoreInfo=!0;var t=e.constructor===b;o.data.needToCreateStore=!t,o.data.needToSetup=!0,o.settings.getAllChildFeatures().forEach(function(e){return e&&e.onInitError&&e.onInitError(t)}),t||console.warn("CATCHERR",e)}),this.storeInitializingPromise}},{key:"initializeCart",value:function(){var e;this.cartButton&&!this.didCartInitialization&&(this.didCartInitialization=!0,window.AMStore=window.AMStore||{q:[],init:function(){window.AMStore.q.push(["init",arguments])},reInit:function(){window.AMStore.q.push(["reInit",arguments])},addToCart:function(){window.AMStore.q.push(["addToCart",arguments])},openShoppingCart:function(){window.AMStore.q.push(["openShoppingCart",arguments])},closeShoppingCart:function(){window.AMStore.q.push(["closeShoppingCart",arguments])}},window.AMStore)&&(window.AMStore.init({testMode:this.isTestMode,isPublished:!1,instanceJwt:this.instanceJwt,domain:this.shopUrl,openCartAutomatically:!0,language:window._site&&window._site.language,style:this.colors,elements:{amountLabel:this.cartButton.querySelectorAll(".kv-ee-cartContent"),cart:""}}),(e=this.cartButton||document.querySelector("header .kv-ee-button-cart"))&&e.addEventListener("click",function(){window.AMStore.openShoppingCart()}))}},{key:"dispose",value:function(){this.settings.customHeaderButtons.remove("kv-ee-cart_button")}},{key:"afterRenderCustomHeaderButton",value:function(){}},{key:"getUrlByAppName",value:function(e,t){e=e.match(/^https?:\/\/[^\/]+/i);return 0<e.length?e[0].replace("st-shop",t):null}},{key:"fetchStoreSettings",value:function(){var t=this;return this.fetch("".concat(this.shopApiUrl,"/v1.0/settings?instanceId=").concat(encodeURIComponent(this.instanceId))).then(function(e){return e.json()}).then(function(e){t.data.currencySymbol=e.supportedCurrencies&&e.supportedCurrencies.items[0].symbol,t.data.currencyCode=e.supportedCurrencies&&e.supportedCurrencies.items[0].code,t.builderApi.editor&&!t.config.isThumbnail&&t.builderApi.editor.storeModelProperty("currencySymbol",t.data.currencySymbol,!1,!0)})}},{key:"formatPrice",value:function(e){var t=e.basePrice&&e.basePrice.toFixed(2),o=e.price&&e.price.toFixed(2),e=e.discountPercentage;return{productPrice:t,discountedPrice:o,discountPercentage:e=e&&!Number.isInteger(e)?e.toFixed(2):e}}},{key:"createOrSetupStoreCTA",value:function(e,t){var o=this;this.productListLoader=e.querySelector(".kv-ee-productListLoader"),this.productListRow=e.querySelector(".kv-ee-storeProductRow");var i,r=e.querySelector(".kv-ee-ui-sortable");r&&this.settings.editor&&!this.isForPreview&&(r.innerHTML+='<div class="kv-edit-selector kv-ee-d-none" data-control-type="remote-list"><div class="kv-edit-selector-buttons"><i class="material-icons kv-editor-button" data-icon-type="settings">settings</i></div></div>',i=e.querySelector(".kv-edit-selector"),r.classList.add("kv-ee-createStoreArea"),r.addEventListener("mouseover",function(){r.classList.add("kv-hover"),i.classList.remove("kv-ee-d-none")}),r.addEventListener("mouseout",function(){r.classList.remove("kv-hover"),i.classList.add("kv-ee-d-none")}),(e=e.querySelectorAll(".kv-control"))&&e.forEach(function(e){e.classList.add("kv-ee-d-none")}),(e=r.querySelectorAll(".kv-ee-content-image"))&&e.forEach(function(e){var t=e.getAttribute("data-src-retina");t&&(e.setAttribute("style",'background-image:url("'.concat(t,'")')),e.className="kv-ee-content-image")}),i&&i.addEventListener("click",function(){o.createStore(t)}))}},{key:"createStore",value:function(){var o=this,i=0<arguments.length&&void 0!==arguments[0]?arguments[0]:function(){o.reinitializeStore()};this.productListLoader&&this.productListLoader.classList.remove("kv-ee-d-none"),this.productListRow&&this.productListRow.classList.add("kv-ee-d-none");function e(){o.settings.editor.showDashboard(m,{onClose:function(){var e=o.data,t=e.needToCreateStore,e=e.needToSetup;i({needToCreateStore:t,needToSetup:e})},onSetupReady:function(){o.data.needToCreateStore=!1,o.data.needToSetup=!1},route:"",queryParams:{ee:1},fullscreen:!0})}this.data.needToCreateStore?this.settings.editor.ensureSavedSite(function(){o.settings.editor.createStore(e)}):e()}},{key:"getDemoData",value:function(){return[{id:"0000",name:this.builderApi.localize("editorTemplates.features.store.demoProductTitle"),title:this.builderApi.localize("editorTemplates.features.store.demoProductTitle"),description:this.builderApi.localize("editorTemplates.features.store.demoProductDescription"),shortDescription:this.builderApi.localize("editorTemplates.features.store.demoProductDescription"),sku:null,stock:null,discountPercentage:10,banner:this.builderApi.localize("editorTemplates.features.store.productBanner1"),image:{value:"https://images.unsplash.com/photo-1494261951946-b0c26b70410c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7148f93943d52d36939fd621c24b2d44&auto=format&fit=crop&w=500&q=60"},discountedPrice:63,productPrice:58.33,basePrice:63,price:58.33,deepLink:{title:this.builderApi.localize("editorTemplates.layouts.store.addToCart"),href:this.settings.getPageUri("store/product-detail")+"/"},isTaxable:!0,isPickup:!1,productType:1,images:[{source:"https://images.unsplash.com/photo-1494261951946-b0c26b70410c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7148f93943d52d36939fd621c24b2d44&auto=format&fit=crop&w=500&q=60",sizes:null,isStock:!0}],productCategoryIds:null,options:this.getDemoOptionData(),taxExPrice:46.5,taxExFromPrice:50,originalPrice:46.5,originalFromPrice:50},{id:"1111",name:this.builderApi.localize("editorTemplates.features.store.demoProductTitle"),title:this.builderApi.localize("editorTemplates.features.store.demoProductTitle"),description:this.builderApi.localize("editorTemplates.features.store.demoProductDescription"),shortDescription:this.builderApi.localize("editorTemplates.features.store.demoProductDescription"),sku:null,stock:null,discountPercentage:0,banner:null,image:{value:"https://images.unsplash.com/photo-1494498902093-87f291949d17?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=cc45a906096bd3d1a8ff018e75d4f43a&auto=format&fit=crop&w=500&q=60"},images:[{source:"https://images.unsplash.com/photo-1494498902093-87f291949d17?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=cc45a906096bd3d1a8ff018e75d4f43a&auto=format&fit=crop&w=500&q=60",sizes:null,isStock:!0}],deepLink:{title:this.builderApi.localize("editorTemplates.layouts.store.addToCart"),href:this.settings.getPageUri("store/product-detail")+"/"},options:null,discountedPrice:70,productPrice:58.33},{id:"0000",name:this.builderApi.localize("editorTemplates.features.store.demoProductTitle"),title:this.builderApi.localize("editorTemplates.features.store.demoProductTitle"),description:this.builderApi.localize("editorTemplates.features.store.demoProductDescription"),shortDescription:this.builderApi.localize("editorTemplates.features.store.demoProductDescription"),sku:null,stock:null,discountPercentage:null,banner:null,image:{value:"https://images.unsplash.com/photo-1494261951946-b0c26b70410c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7148f93943d52d36939fd621c24b2d44&auto=format&fit=crop&w=500&q=60"},images:[{source:"https://images.unsplash.com/photo-1494261951946-b0c26b70410c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7148f93943d52d36939fd621c24b2d44&auto=format&fit=crop&w=500&q=60",sizes:null,isStock:!0}],deepLink:{title:this.builderApi.localize("editorTemplates.layouts.store.addToCart"),href:this.settings.getPageUri("store/product-detail")+"/"},options:null,discountedPrice:100,productPrice:100}]}},{key:"getDemoOptionData",value:function(){return[{optionId:"2985",name:this.builderApi.localize("editorTemplates.features.productDemoData.variantName1"),variantType:1,choices:[{choiceId:"12058",inStock:!0,name:"#0000ff",color:"#0000ff",productId:"pv_146412_12058",selected:!1},{choiceId:"12059",inStock:!0,name:"#000",color:"#000",productId:"pv_146412_12059",selected:!1},{choiceId:"12060",inStock:!0,name:"#556b2f",color:"#556b2f",productId:"pv_146412_12060",selected:!1},{choiceId:"12061",inStock:!1,name:"#ffffff",color:"#ffffff",productId:"pv_146412_12061",selected:!1}]},{optionId:"2986",name:this.builderApi.localize("editorTemplates.features.productDemoData.variantName3"),variantType:2,choices:[{choiceId:"12062",inStock:!0,name:this.builderApi.localize("editorTemplates.features.productDemoData.variantName3Choice1"),color:"",productId:"pv_146412_12062",selected:!1,hover:null},{choiceId:"12063",inStock:!0,name:this.builderApi.localize("editorTemplates.features.productDemoData.variantName3Choice2"),color:"",productId:"pv_146412_12063",selected:!1,hover:null},{choiceId:"12064",inStock:!0,name:this.builderApi.localize("editorTemplates.features.productDemoData.variantName3Choice3"),color:"",productId:"pv_146412_12064",selected:!1,hover:null},{choiceId:"12065",inStock:!1,name:this.builderApi.localize("editorTemplates.features.productDemoData.variantName3Choice4"),color:"",productId:"pv_146412_12065",selected:!1,hover:null}]},{optionId:"2987",name:this.builderApi.localize("editorTemplates.features.productDemoData.variantName2"),variantType:3,choices:[{choiceId:"12066",inStock:!0,name:this.builderApi.localize("editorTemplates.features.productDemoData.variantName2Choice1"),color:"",productId:"pv_146412_12066",selected:!1,hover:null},{choiceId:"12067",inStock:!0,name:this.builderApi.localize("editorTemplates.features.productDemoData.variantName2Choice2"),color:"",productId:"pv_146412_12067",selected:!1,hover:null},{choiceId:"12068",inStock:!0,name:this.builderApi.localize("editorTemplates.features.productDemoData.variantName2Choice3"),color:"",productId:"pv_146412_12068",selected:!1,hover:null},{choiceId:"12069",inStock:!0,name:this.builderApi.localize("editorTemplates.features.productDemoData.variantName2Choice4"),color:"",productId:"pv_146412_12069",selected:!1,hover:null}]}]}}])&&i(p.prototype,f),h&&i(p,h),S);function S(e,t){var o=this;s(this,S),this.settings=this.builderApi=e,this.fetch=e.fetch,this.isTestMode=window.self!==window.top||!!this.settings.editor,this.isForPreview=e.isForPreview,this.isRuntimeSite=t.isRuntimeSite,this.config=t,this.localPickupFulfillmentType=v;var i,r,n,a=e.getGlobalColorsWithContrast&&e.getGlobalColorsWithContrast();a?this.colors={buttonColor:g(a.buttonBackground),buttonTextColor:g(a.buttonText),backgroundColor:g(a.background),textColor:g(a.text),title:g(a.title)}:(r=(i=e.getGlobalColors()||{}).text,n=i.background,a=(i=(a=i.accent)&&a[0])&&"rgb(".concat(a[0].join(","),")"),i=i&&e.getTextColorForBackground&&e.getTextColorForBackground(i),r=r&&"rgb(".concat(r.join(","),")"),n=n&&"rgb(".concat(n.join(","),")"),this.colors={buttonColor:a,buttonTextColor:i,backgroundColor:n,textColor:r,title:r}),this.data={needToCreateStore:!0,needToSetup:!0},t.isThumbnail?this.data.needToCreateStore=!1:setTimeout(function(){return o.initializeStore()},1),window.storeCartButton&&this.addCartButton()}window.__features=window.__features||{},window.__features["store-core"]=y},{}]},{},[1]);;!function n(o,r,a){function s(t,e){if(!r[t]){if(!o[t]){var i="function"==typeof require&&require;if(!e&&i)return i(t,!0);if(u)return u(t,!0);throw(i=new Error("Cannot find module '"+t+"'")).code="MODULE_NOT_FOUND",i}i=r[t]={exports:{}},o[t][0].call(i.exports,function(e){return s(o[t][1][e]||e)},i,i.exports,n,o,r,a)}return r[t].exports}for(var u="function"==typeof require&&require,e=0;e<a.length;e++)s(a[e]);return s}({1:[function(e,t,i){"use strict";function o(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return n(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(i="Object"===i&&e.constructor?e.constructor.name:i)||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?n(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=Array(t);i<t;i++)n[i]=e[i];return n}function r(e,t){for(var i,n=0;n<t.length;n++)(i=t[n]).enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var s,u,l,d=(s=c,(u=[{key:"registerWindowEvent",value:function(){}},{key:"unregisterWindowEvent",value:function(){var e;"undefined"==typeof window||!window._zoomUpdateEvents||0<=(e=window._zoomUpdateEvents.indexOf(this.triggerWindowEvent))&&window._zoomUpdateEvents.splice(e,1)}},{key:"dispose",value:function(){this.recheckMode=null,this.unregisterWindowEvent()}},{key:"afterRender",value:function(e,t){var i,n,o=this;!t.parentElement||((n=(i=t.parentElement.parentElement).querySelectorAll("li"))||n.length)&&(this.builderApi.isInOnboarding()?i.classList.add("kv-ee-no-animation"):i.classList.remove("kv-ee-no-animation"),this.settings.isCarouselSection?setTimeout(function(){o.checkMobileMode(i),o.setHeaderHeight(e,t)},300):!this.builderApi.isInOnboarding()||t.offsetHeight?(this.checkMobileMode(i),this.setHeaderHeight(e,t),window.addEventListener("resize",function(){o.__resizeTimeout&&window.clearTimeout(o.__resizeTimeout),o.__resizeTimeout=window.setTimeout(function(){o.checkMobileMode(i),o.setHeaderHeight(e,t)},o.resizeWaitTimeout)}),this.recheckMode=this.builderApi.debounce(function(){o.checkMobileMode(i),o.setHeaderHeight(e,t)},300)):setTimeout(function(){o.checkMobileMode(i),o.setHeaderHeight(e,t)},2e3))}},{key:"setSectionPadding",value:function(e,t){e.nextElementSibling.querySelector(".kv-background").style.top=-t+"px"}},{key:"setHeaderHeightInternal",value:function(e,t){if(0<e.offsetHeight){if("dubemo66"===this.builderApi.controller.parentController.model.layout.section.id)return i=e.querySelector("header"),void(t.style.height=i.offsetHeight+"px");var i=(i=e.querySelector(".kv-ee-navigation")||e.querySelector("header")).offsetHeight,e=Math.max(i,e.offsetHeight);t.style.height=e+"px",document.documentElement.style.setProperty("--navigation-height",e+"px")}}},{key:"setHeaderHeight",value:function(e,r){var a=this,e=e.model.isFloatingSection||!1===e.model.cover&&!0===e.model.fixedNavigation;r.parentElement&&e&&!this.settings.isCarouselSection&&function(){for(var e=r.parentElement.parentElement,t=r.querySelectorAll("img"),i=0;i<t.length;i++){var n=t[i].src,o=new window.Image;o.onload=function(){setTimeout(function(){a.setHeaderHeightInternal(r,e)})},o.src=n}a.setHeaderHeightInternal(r,e),setTimeout(function(){a.setHeaderHeightInternal(r,e)},1e3)}()}},{key:"getNavigationWidth",value:function(e){var t=0;return e.forEach(function(e){t+=e.offsetWidth}),t+40}},{key:"determineContainerWidth",value:function(e,t){var i=e.querySelector("nav")||e,n=e.querySelector('[data-dynamic-navigation-element="logo"]'),o=e.querySelector('[data-dynamic-navigation-element="calltoactionbutton"]'),o=o?o.offsetWidth:0,n=n?n.offsetWidth:0,i=i.offsetWidth-o;return{containerSize:i,logoWidth:n,ctaWidth:o,headerWith:e.offsetWidth,navigationToWide:t+n+o>=e.offsetWidth-20,headerToWide:i+n>=e.offsetWidth}}},{key:"shouldMinimizeMenu",value:function(e){if(((null==e?void 0:e.clientWidth)||window.innerWidth)<this.mobileBreakpoint)return!0;var t=e.querySelectorAll(".kv-ee-menu-item-wrapper > li");this.currentElementWidth=this.getNavigationWidth(t);var i=this.determineContainerWidth(e,this.currentElementWidth),t=i.containerSize,e=i.headerToWide,i=i.navigationToWide;return t<100&&!this.builderApi.controller.getSiteController().hasSectionBasedNavigation()||e||i}},{key:"checkMobileMode",value:function(e){var t=(t=e.querySelector(".kv-ee-check-mobile"))||e;window.innerWidth<this.mobileBreakpoint?t.classList.contains("kv-ee-mobile")||t.classList.add("kv-ee-mobile"):(t.classList.remove("kv-ee-mobile"),e=this.shouldMinimizeMenu(e),t=t.classList,e&&t.add("kv-ee-mobile"),e||t.remove("kv-ee-mobile"))}},{key:"updateProperty",value:function(e,t,i){var n;"layout.section.id"!==t||(t=o((n=document.querySelector(".kv-page-content")).classList).find(function(e){return e.includes("with-navigation")}))&&(n.classList.remove(t),n.classList.add("kv-ee-with-"+i))}}])&&r(s.prototype,u),l&&r(s,l),c);function c(e,t){var i=this;(function(e){if(!(e instanceof c))throw new TypeError("Cannot call a class as a function")})(this),a(this,"getRenderModel",function(){return{}}),a(this,"triggerWindowEvent",function(){i.recheckMode&&i.recheckMode()}),this.isRuntimeSite=t.isRuntimeSite,this.builderApi=e,this.currentElementWidth=0,this.checkTimeout=0,this.settings=t;t=!this.editor&&window.self!==window.top;this.mobileBreakpoint=991,this.resizeWaitTimeout=t?0:300,"undefined"!=typeof window&&(window._zoomUpdateEvents=window._zoomUpdateEvents||[],window._zoomUpdateEvents.push(this.triggerWindowEvent))}window.__features=window.__features||{},window.__features.navigation=d},{}]},{},[1]);;!function i(o,a,n){function s(t,e){if(!a[t]){if(!o[t]){var r="function"==typeof require&&require;if(!e&&r)return r(t,!0);if(c)return c(t,!0);throw(r=new Error("Cannot find module '"+t+"'")).code="MODULE_NOT_FOUND",r}r=a[t]={exports:{}},o[t][0].call(r.exports,function(e){return s(o[t][1][e]||e)},r,r.exports,i,o,a,n)}return a[t].exports}for(var c="function"==typeof require&&require,e=0;e<n.length;e++)s(n[e]);return s}({1:[function(e,t,r){"use strict";function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){for(var r,i=0;i<t.length;i++)(r=t[i]).enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}var a,n,s,c=(a=l,(n=[{key:"validateForm",value:function(e){var o=this,a={data:[],errors:[]};return e.forEach(function(e){var t=e.getAttribute("id"),r=e.value,i=e.dataset.namelabel;if(!t.includes("g-recaptcha-response"))if("fieldSubscribe"===t&&(r="none"===e.style.display||e.checked),o.isEmpty(r))a.errors.push({key:t,errorMessage:"required"});else{if("fieldEmail"===t){if(r="string"==typeof r&&r.replace(/\s+/g,""),!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test((r+"").toLowerCase()))return void a.errors.push({key:t,errorMessage:"invalidEmail"});r=r.replace(/\s+/g,"")}a.data.push({name:i,field:t,value:r,type:o.mapInputType(t)})}}),a}},{key:"showSuccesMessage",value:function(e){var t=e.querySelector(".kv-ee-contact-form-success");t&&t.classList.add("kv-ee-show"),this.setButtonState(e.querySelector(".kv-ee-button.kv-ee-submit"),this.builderApi.localize("editorTemplates.features.subscription.sent")),e.classList.add(this.promoCodeClass)}},{key:"handlePreview",value:function(e){var t;document.querySelector(".kv-ee-preview-form-container")||(t=e.querySelector(".kv-ee-form-container")||e)&&((e=document&&document.createElement("div")).className="preview-form-container",e.innerHTML=this.builderApi.localize("editorTemplates.features.form.preview.message"),t.querySelector(".preview-form-container")||t.appendChild(e))}},{key:"submitForm",value:function(e,r,t,i,o){var a=this,n=5<arguments.length&&void 0!==arguments[5]?arguments[5]:{};if(!this.editor&&window.self!==window.top)return this.setButtonState(i.target,this.builderApi.localize("editorTemplates.features.form.preview.button")),void this.handlePreview(r);e.forEach(function(e){e.name&&(e.name=e.name.slice(0,254))});var s=window._site&&window._site.siteId||"",c=window._site&&window._site.partnerId||0,l=window._site&&window._site.useHostingApi||!1,u=o.env.env||window._site&&window._site.environment||"",d="/v1.0/contactform";(100<=c||l)&&(d="dev"===u||"latest"===u?"https://hostingapi.latest.mywebsitebuilder.com"+d:"qa"===u?"https://hostingapi.qa.mywebsitebuilder.com"+d:"uat"===u?"https://hostingapi.uat.mywebsitebuilder.com"+d:"https://hostingapi.mywebsitebuilder.com"+d);var p=r.querySelector("form"),c=r.querySelector(".kv-ee-hidden-form-data").dataset.sectionid,l=!!r.querySelector('[data-type="subscribe"]'),u=!!r.querySelector('[data-type="promotion"]'),e={fields:e,site_id:s,recaptcha_code:t,section_id:c,form_id:c,is_subscription:l||u,contact_list_id:e.contactList};this.setButtonState(i.target,this.builderApi.localize("editorTemplates.features.subscription.sending")),o.fetch(d,{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then(function(e){if(!e.ok)throw new Error(e.statusText);var t=r.querySelector(".kv-ee-contact-form-success"),e=r.closest("section");t&&t.classList.add("kv-ee-show"),a.setButtonState(i.target,a.builderApi.localize("editorTemplates.features.subscription.sent")),p.reset(),n.promoCode?(a.useLocalStorage&&window.localStorage.setItem("showpromo",!0),e.classList.add(a.promoCodeClass)):t.addEventListener("click",function(){t.classList.remove("kv-ee-show")}),e.classList.add("submitted")}).catch(function(){a.setButtonState(i.target,a.builderApi.localize("editorTemplates.features.subscription.sendingError"))})}},{key:"clearErrors",value:function(e,t){var r=this,i=t.querySelector(".kv-ee-error-captcha-container");e&&e.length&&e.forEach(function(e){r.setErrorStyling(t.querySelector("."+e.id+"-container"),!1)}),i&&i.setAttribute("style","display: none")}},{key:"showErrors",value:function(e,t,r){var i=this;e&&e.length&&e.forEach(function(e){i.setErrorStyling(t.querySelector(".kv-ee-"+e.key+"-container"),!0,e.errorMessage)}),r||((e=t.querySelector(".kv-ee-error-captcha-container"))?e.setAttribute("style","display: block"):(r=t.querySelector(".kv-ee-captcha-field-wrapper"),(e=document.createElement("div")).className="kv-ee-error-captcha-container",e.innerHTML=this.builderApi.localize("editorTemplates.features.subscription.couldNotVerify"),r.appendChild(e)))}},{key:"isEmpty",value:function(e){return null==e||"object"===i(e)&&0===Object.keys(e).length||"string"==typeof e&&0===e.trim().length}},{key:"tryRenderCaptcha",value:function(e,t){var r,i=this;window.hasCaptcha||(window.captchaInstanceQueue=[],window.onCaptchaLoadCallback=function(){window.captchaInstanceQueue.forEach(function(e){i.renderCaptcha(e,t)})},(r=document.createElement("script")).src="https://www.google.com/recaptcha/api.js?onload=onCaptchaLoadCallback",r.setAttribute("async",!0),r.setAttribute("defer",!0),document.body.appendChild(r),window.hasCaptcha=!0),window.grecaptcha?this.renderCaptcha(e,t):window.captchaInstanceQueue.push(e)}},{key:"renderCaptcha",value:function(e,t){e=e.querySelector(".kv-ee-captcha-field-wrapper");window.grecaptcha&&e&&!e.querySelector("iframe")&&(e.innerHTML="",e=window.grecaptcha.render(e,{sitekey:"6Lewpm8UAAAAAKlR7x35yQOUTW6uJ65zbm96VqiL",callback:window.onCaptchaSubmit}),t._captchaWidgetId=e)}},{key:"validateCaptcha",value:function(e,t){return window.grecaptcha?window.grecaptcha&&window.grecaptcha.getResponse(e._captchaWidgetId):(this.tryRenderCaptcha(t,e),!1)}},{key:"setErrorStyling",value:function(e,t,r){var i;e&&(i=e.querySelector("input")||e.querySelector("textarea"),e=e.querySelector(".kv-ee-error-container"),i&&e&&(t&&i?(i.style.cssText="border: 3px solid #F44336; border-radius: .25rem; box-sizing: border-box; outline: 0;",e.innerHTML=this.builderApi.localize("editorTemplates.features.subscription.".concat(r||"required"))):(i.style.cssText="",e.innerHTML="")))}},{key:"setButtonState",value:function(e,t){e&&(e.innerHTML=t)}},{key:"mapInputType",value:function(e){return"fieldFirstName"!==e&&"fieldlastName"!==e?"fieldPhone"===e?6:"fieldDate"===e?4:"fieldEmail"===e?3:1:8}}])&&o(a.prototype,n),s&&o(a,s),l);function l(e,t){(function(e){if(!(e instanceof l))throw new TypeError("Cannot call a class as a function")})(this),this.builderApi=e,this.view=t.view,this.localStorageHelper=this.builderApi.localStorageHelper,this.isTestMode=window.self!==window.top||!!e.editor,this.useLocalStorage=this.localStorageHelper.supportsLocalStorage&&!this.isTestMode,this.promoCodeClass="show-promo-code"}window.__features=window.__features||{},window.__features["form-core"]=c},{}]},{},[1]);;!function i(n,o,s){function a(e,t){if(!o[e]){if(!n[e]){var r="function"==typeof require&&require;if(!t&&r)return r(e,!0);if(c)return c(e,!0);throw(r=new Error("Cannot find module '"+e+"'")).code="MODULE_NOT_FOUND",r}r=o[e]={exports:{}},n[e][0].call(r.exports,function(t){return a(n[e][1][t]||t)},r,r.exports,i,n,o,s)}return o[e].exports}for(var c="function"==typeof require&&require,t=0;t<s.length;t++)a(s[t]);return a}({1:[function(t,e,r){"use strict";function i(t){return function(t){if(Array.isArray(t))return n(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Map"===(r="Object"===r&&t.constructor?t.constructor.name:r)||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,i=Array(e);r<e;r++)i[r]=t[r];return i}function o(t,e){for(var r,i=0;i<e.length;i++)(r=e[i]).enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}var s,a,c,u=(s=l,(a=[{key:"initializeForSection",value:function(){}},{key:"updateProperty",value:function(){}},{key:"afterRender",value:function(t,e){var r=this,i=e.querySelector('form [data-type="button"]'),n=t.controller.parentController;!this.isForPreview&&this.isRuntimeSite&&i&&(i.removeAttribute("href"),i.dataset.href="",i.addEventListener("click",function(t){r.handleFormSubmission(t,n,e)}),e.addEventListener("click",function(){r.formCore.tryRenderCaptcha(e,n)}))}},{key:"fetchContactLists",value:function(t){return this.fetch("".concat(t).concat(this.builderApi.getSiteId(),"/lists?exclude_system_lists=true&exclude_all_contacts=true")).then(function(t){return t.json()})}},{key:"onLoadListIds",value:function(){var e=this,r={label:this.builderApi.localize("editorTemplates.features.subscription.allContacts"),value:""};return this.builderApi.getSiteId()&&this.contactsApi&&!this.contactsListsOptions?this.fetchContactLists(this.contactsApi).then(function(t){return e.contactsListsOptions=[r].concat(i(t.map(function(t){return{label:t.name,value:t.id}}))),e.contactsListsOptions}).catch(function(){return[r]}):this.contactsListsOptions?Promise.resolve(this.contactsListsOptions):Promise.resolve([r])}},{key:"handleFormSubmission",value:function(t,e,r){var i,n,o;t.preventDefault(),"localhost"!==window.location.hostname&&(n=r.querySelectorAll("input, textarea"),this.formCore.clearErrors(n,r),i=(o=this.formCore.validateForm(n)).data,n=o.errors,o=this.formCore.validateCaptcha(e,r),0<n.length||!o?this.formCore.showErrors(n,r,o):this.formCore.submitForm(i,r,o,t,this.builderApi,e.model.binding))}}])&&o(s.prototype,a),c&&o(s,c),l);function l(t,e,r){(function(t){if(!(t instanceof l))throw new TypeError("Cannot call a class as a function")})(this),this.builderApi=t,this.formCore=r["form-core"],this.isForPreview=t.isForPreview,this.isRuntimeSite=!t.editor,this.fetch=t.fetch,this.builderApi.apiUrl&&(this.contactsApi=this.builderApi.apiUrl("v2.0/","contacts"))}window.__features=window.__features||{},window.__features.subscription=u},{}]},{},[1]);;!function i(r,n,s){function l(t,e){if(!n[t]){if(!r[t]){var o="function"==typeof require&&require;if(!e&&o)return o(t,!0);if(a)return a(t,!0);throw(o=new Error("Cannot find module '"+t+"'")).code="MODULE_NOT_FOUND",o}o=n[t]={exports:{}},r[t][0].call(o.exports,function(e){return l(r[t][1][e]||e)},o,o.exports,i,r,n,s)}return n[t].exports}for(var a="function"==typeof require&&require,e=0;e<s.length;e++)l(s[e]);return l}({1:[function(e,t,o){"use strict";function i(e,t){for(var o,i=0;i<t.length;i++)(o=t[i]).enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var n,s,l,a=(n=u,(s=[{key:"dispose",value:function(){}},{key:"getDisplayTime",value:function(e){return 1e3*parseInt(e.popoverTiming)||0}},{key:"rerender",value:function(){this.view.requestRender()}},{key:"setTooltip",value:function(){var e="";this.model.showPopover&&(e="leaveSite"===this.model.popoverDisplay?this.builderApi.localize("editorTemplates.features.popover.tooltip.leaveSite"):(void 0===this.model.popoverTiming&&(this.model.popoverTiming=10),0<parseInt(this.model.popoverTiming)?this.builderApi.localize("editorTemplates.features.popover.tooltip.afterX").replace("{time}",this.model.popoverTiming):this.builderApi.localize("editorTemplates.features.popover.tooltip.immediately"))),this.editorContext.setSectionToolTip(this.builderApi.controller.parentController,e)}},{key:"showModal",value:function(e){var t=this;this.builderApi.showModal({fullScreen:!0,content:e,closeButton:e.querySelector(".kv-ee-feature-modal-close-button"),onClose:this.model.promoCode?function(){t.nextSectionElement.parentElement.insertBefore(e,t.nextSectionElement),e.classList.remove("kv-ee-popover-mode")}:null}),this.mouseLeaveListener&&document.body.removeEventListener("mouseleave",this.mouseLeaveListener),this.localStorageHelper.supportsLocalStorage&&!this.isTestMode&&window.localStorage.setItem(this.getUniqueId(),!0)}},{key:"initializeForSection",value:function(e,t){var o,i=this;this.inPopoverMode&&(o=e.domElement.parentElement.parentElement,this.nextSectionElement=o.nextElementSibling,this.hasShownPopover()?this.hasShownPopover()&&t.promoCode?this.useLocalStorage&&window.localStorage.getItem("showpromo")?this.view.features.subscription.formCore.showSuccesMessage(o):o.style.display="none":this.hasShownPopover()&&(o.style.display="none"):(o.classList.add("kv-ee-popover-mode"),"leaveSite"===t.popoverDisplay?setTimeout(function(){i.mouseLeaveListener=function(){return i.showModal(o)},i.listener=document.body.addEventListener("mouseleave",i.mouseLeaveListener)},3e3):(t=this.getDisplayTime(t),setTimeout(function(){i.showModal(o)},t))))}},{key:"updateProperty",value:function(){return this.setTooltip(),!1}},{key:"getRenderModel",value:function(){}},{key:"afterRender",value:function(){}}])&&i(n.prototype,s),l&&i(n,l),u);function u(e,t){var o=this;(function(e){if(!(e instanceof u))throw new TypeError("Cannot call a class as a function")})(this),r(this,"getUniqueId",function(){return o.builderApi.getPageUri()+"-"+o.view.id}),r(this,"hasShownPopover",function(){return!!o.useLocalStorage&&window.localStorage.getItem(o.getUniqueId())}),this.builderApi=e,this.model=e.controller.model,this.editMode=!!e.editor,this.viewerMode=!this.editMode,this.view=t.view,this.isTestMode=window.self!==window.top||!!e.editor,this.viewerMode&&this.model.showPopover&&(this.inPopoverMode=!0),this.editorContext=e.controller.editorContext,this.editMode&&this.setTooltip(),this.localStorageHelper=this.builderApi.localStorageHelper,this.useLocalStorage=this.localStorageHelper.supportsLocalStorage&&!this.isTestMode}window.__features=window.__features||{},window.__features.popover=a},{}]},{},[1]);; window._featureSettings={"store-core":{"settings":{"isGlobal":true}},"navigation":{"settings":{}},"form-core":{"settings":{}},"translations":{"editorTemplates.features.subscription.couldNotVerify":"Não foi possível verificar se você é um humano","editorTemplates.features.subscription.sent":"Enviado!","editorTemplates.features.subscription.sending":"Enviando...","editorTemplates.features.subscription.sendingError":"Erro no envio","editorTemplates.features.subscription.required":"Este campo é obrigatório.","editorTemplates.features.subscription.invalidEmail":"Formato inválido","editorTemplates.features.subscription.subscribe":"Ao marcar esta caixa e enviar suas informações, você está nos dando permissão de lhe enviar e-mails. Você pode cancelar a qualquer momento.","editorTemplates.features.subscription.subscribeToggle":"Ao selecionar esta caixa e enviar seus dados, você nos autoriza a te enviar e-mails. Você pode cancelar a qualquer momento.","editorTemplates.features.subscription.allContacts":"Todos os contatos","editorTemplates.features.form.preview.button":"Não enviado!","editorTemplates.features.form.preview.message":"Os formulários não podem ser enviados enquanto no modo de visualização"},"subscription":{"settings":{"dependingGlobalFeatures":["form-core"]}},"popover":{"settings":{}}};