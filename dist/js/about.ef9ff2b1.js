(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"1a4d":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"trivia-card",attrs:{flat:""}},[r("QuestionCard")],1)},i=[],o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{staticClass:"trivia-container my-0 py-0"},[r("v-overlay",{attrs:{value:t.endOfTrivia}},[r("p",{staticClass:"font-weight-black"},[t._v("Score: "+t._s(t.score))]),r("router-link",{attrs:{to:"/"}},[r("v-btn",{attrs:{color:"orange lighten-2"},on:{click:t.done}},[t._v(" Done ")])],1)],1),r("v-card",{staticClass:"mx-auto my-12 py",attrs:{elevation:"18"}},[r("v-container",{staticClass:"d-flex flex-row-reverse my-0"},[r("v-card-text",{staticClass:"score font-weight-black"},[t._v("Score: "+t._s(t.score))])],1),r("v-progress-linear",{staticClass:"progress-bar",attrs:{height:"20",rounded:""},model:{value:t.scoreBar,callback:function(e){t.scoreBar=e},expression:"scoreBar"}}),r("v-card-title",[t._v(t._s(t.currenQuestion.question))]),r("v-divider",{staticClass:"mx-4 pb-10"}),t._l(t.currenQuestion.choices,(function(e,n){return r("v-container",{key:n,staticClass:"d-flex flex-column",attrs:{column:""},on:{click:function(r){return t.selected(e,n)}}},[r("v-chip",{ref:"optionChosen",refInFor:!0,staticClass:"my-0"},[t._v(t._s(e))])],1)})),r("v-card-actions",{staticClass:"d-flex flex-column justify-center"},[r("span",{staticClass:"card-line-steps"}),r("span",[t._v(t._s(t.questionCounter)+"/"+t._s(t.questions.length))])])],2)],1)},a=[];r("d3b7");function s(t,e,r,n,i,o,a){try{var s=t[o](a),c=s.value}catch(l){return void r(l)}s.done?e(c):Promise.resolve(c).then(n,i)}function c(t){return function(){var e=this,r=arguments;return new Promise((function(n,i){var o=t.apply(e,r);function a(t){s(o,n,i,a,c,"next",t)}function c(t){s(o,n,i,a,c,"throw",t)}a(void 0)}))}}r("96cf"),r("d81d"),r("a434");var l,u={data:function(){return{endOfTrivia:!1,questionCounter:0,itemsRef:[],canClick:!0,score:0,scoreBar:100,currenQuestion:{question:"",correct_answer:0,choices:[]},questions:[]}},methods:{getQuestionsFromServer:function(){var t=this;return c(regeneratorRuntime.mark((function e(){var r,n,i,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=[],e.next=3,fetch("https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple");case 3:return n=e.sent,e.next=6,n.json();case 6:i=e.sent,o=i.results,o.map((function(t){var e={question:t.question,correct_answer:"",choices:[]},n=t.incorrect_answers;e.correct_answer=Math.floor(4*Math.random()+1),n.splice(e.correct_answer-1,0,t.correct_answer),e.choices=n,r.push(e)})),t.questions=r,t.loadQuestion(),t.countDownTimer();case 12:case"end":return e.stop()}}),e)})))()},loadQuestion:function(){this.canClick=!0,this.questions.length>this.questionCounter?(this.currenQuestion=this.questions[this.questionCounter],this.questionCounter++,this.scoreBar=102):(this.endOfTrivia=!0,this.scoreBar=0)},clearSelected:function(t,e){var r=this;setTimeout((function(){t.classList.remove("question-correct"),t.classList.remove("question-incorrect"),e.classList.remove("question-correct-fail"),r.loadQuestion()}),1e3)},selected:function(t,e){if(this.canClick){var r=this.$refs.optionChosen[e].$el,n=this.$refs.optionChosen[this.currenQuestion.correct_answer-1].$el;this.currenQuestion.correct_answer===e+1?(r.classList.add("question-correct"),this.score+=10):(n.classList.add("question-correct-fail"),r.classList.add("question-incorrect")),this.scoreBar=150,this.canClick=!1,this.clearSelected(r,n)}},countDownTimer:function(){var t=this,e=setInterval((function(){t.scoreBar>0?t.scoreBar--:(t.loadQuestion(),t.countDownTimer(),clearInterval(e))}),150)},done:function(){this.endOfTrivia=!1}},mounted:function(){this.getQuestionsFromServer()}},h=u,f=(r("6921"),r("2877")),d=r("6544"),p=r.n(d),v=r("8336"),g=r("b0af"),m=r("99d9"),y=r("3835"),b=r("5530"),w=(r("4de4"),r("8adc"),r("58df")),C=r("0789"),x=(r("c96a"),r("caad"),r("2532"),r("a9e3"),r("498a"),r("7db0"),r("fb6a"),r("4804"),r("7e2b")),_=r("a9ad"),L=r("af2b"),k=r("7560"),O=r("80d2"),S=r("2b0e");function j(t){return["fas","far","fal","fab","fad","fak"].some((function(e){return t.includes(e)}))}function $(t){return/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(t)&&/[\dz]$/i.test(t)&&t.length>4}(function(t){t["xSmall"]="12px",t["small"]="16px",t["default"]="24px",t["medium"]="28px",t["large"]="36px",t["xLarge"]="40px"})(l||(l={}));var B=Object(w["a"])(x["a"],_["a"],L["a"],k["a"]).extend({name:"v-icon",props:{dense:Boolean,disabled:Boolean,left:Boolean,right:Boolean,size:[Number,String],tag:{type:String,required:!1,default:"i"}},computed:{medium:function(){return!1},hasClickListener:function(){return Boolean(this.listeners$.click||this.listeners$["!click"])}},methods:{getIcon:function(){var t="";return this.$slots.default&&(t=this.$slots.default[0].text.trim()),Object(O["n"])(this,t)},getSize:function(){var t={xSmall:this.xSmall,small:this.small,medium:this.medium,large:this.large,xLarge:this.xLarge},e=Object(O["k"])(t).find((function(e){return t[e]}));return e&&l[e]||Object(O["d"])(this.size)},getDefaultData:function(){return{staticClass:"v-icon notranslate",class:{"v-icon--disabled":this.disabled,"v-icon--left":this.left,"v-icon--link":this.hasClickListener,"v-icon--right":this.right,"v-icon--dense":this.dense},attrs:Object(b["a"])({"aria-hidden":!this.hasClickListener,disabled:this.hasClickListener&&this.disabled,type:this.hasClickListener?"button":void 0},this.attrs$),on:this.listeners$}},getSvgWrapperData:function(){var t=this.getSize(),e=Object(b["a"])(Object(b["a"])({},this.getDefaultData()),{},{style:t?{fontSize:t,height:t,width:t}:void 0});return this.applyColors(e),e},applyColors:function(t){t.class=Object(b["a"])(Object(b["a"])({},t.class),this.themeClasses),this.setTextColor(this.color,t)},renderFontIcon:function(t,e){var r=[],n=this.getDefaultData(),i="material-icons",o=t.indexOf("-"),a=o<=-1;a?r.push(t):(i=t.slice(0,o),j(i)&&(i="")),n.class[i]=!0,n.class[t]=!a;var s=this.getSize();return s&&(n.style={fontSize:s}),this.applyColors(n),e(this.hasClickListener?"button":this.tag,n,r)},renderSvgIcon:function(t,e){var r={class:"v-icon__svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":!0}},n=this.getSize();return n&&(r.style={fontSize:n,height:n,width:n}),e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e("svg",r,[e("path",{attrs:{d:t}})])])},renderSvgIconComponent:function(t,e){var r={class:{"v-icon__component":!0}},n=this.getSize();n&&(r.style={fontSize:n,height:n,width:n}),this.applyColors(r);var i=t.component;return r.props=t.props,r.nativeOn=r.on,e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e(i,r)])}},render:function(t){var e=this.getIcon();return"string"===typeof e?$(e)?this.renderSvgIcon(e,t):this.renderFontIcon(e,t):this.renderSvgIconComponent(e,t)}}),E=S["default"].extend({name:"v-icon",$_wrapperFor:B,functional:!0,render:function(t,e){var r=e.data,n=e.children,i="";return r.domProps&&(i=r.domProps.textContent||r.domProps.innerHTML||i,delete r.domProps.textContent,delete r.domProps.innerHTML),t(B,r,i?[i]:n)}}),q=E,I=r("4e82c"),z=r("f2e7"),T=r("1c87"),P=r("d9bd"),D=Object(w["a"])(_["a"],L["a"],T["a"],k["a"],Object(I["a"])("chipGroup"),Object(z["b"])("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default:function(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:function(){return{proxyClass:"v-chip--active"}},computed:{classes:function(){return Object(b["a"])(Object(b["a"])(Object(b["a"])(Object(b["a"])({"v-chip":!0},T["a"].options.computed.classes.call(this)),{},{"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose},this.themeClasses),this.sizeableClasses),this.groupClasses)},hasClose:function(){return Boolean(this.close)},isClickable:function(){return Boolean(T["a"].options.computed.isClickable.call(this)||this.chipGroup)}},created:function(){var t=this,e=[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]];e.forEach((function(e){var r=Object(y["a"])(e,2),n=r[0],i=r[1];t.$attrs.hasOwnProperty(n)&&Object(P["a"])(n,i,t)}))},methods:{click:function(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter:function(){var t=[];return this.isActive&&t.push(this.$createElement(q,{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(C["a"],t)},genClose:function(){var t=this;return this.$createElement(q,{staticClass:"v-chip__close",props:{right:!0,size:18},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.$emit("click:close"),t.$emit("update:active",!1)}}},this.closeIcon)},genContent:function(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render:function(t){var e=[this.genContent()],r=this.generateRouteLink(),n=r.tag,i=r.data;i.attrs=Object(b["a"])(Object(b["a"])({},i.attrs),{},{draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:i.attrs.tabindex}),i.directives.push({name:"show",value:this.active}),i=this.setBackgroundColor(this.color,i);var o=this.textColor||this.outlined&&this.color;return t(n,this.setTextColor(o,i),e)}}),F=r("a523"),G=(r("8ce9"),k["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:Object(b["a"])({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:Object(b["a"])({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}})),Q=(r("3c93"),Object(w["a"])(_["a"],k["a"],z["a"]).extend({name:"v-overlay",props:{absolute:Boolean,color:{type:String,default:"#212121"},dark:{type:Boolean,default:!0},opacity:{type:[Number,String],default:.46},value:{default:!0},zIndex:{type:[Number,String],default:5}},computed:{__scrim:function(){var t=this.setBackgroundColor(this.color,{staticClass:"v-overlay__scrim",style:{opacity:this.computedOpacity}});return this.$createElement("div",t)},classes:function(){return Object(b["a"])({"v-overlay--absolute":this.absolute,"v-overlay--active":this.isActive},this.themeClasses)},computedOpacity:function(){return Number(this.isActive?this.opacity:0)},styles:function(){return{zIndex:this.zIndex}}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-overlay__content"},this.$slots.default)}},render:function(t){var e=[this.__scrim];return this.isActive&&e.push(this.genContent()),t("div",{staticClass:"v-overlay",class:this.classes,style:this.styles},e)}})),N=r("8e36"),V=Object(f["a"])(h,o,a,!1,null,null,null),A=V.exports;p()(V,{VBtn:v["a"],VCard:g["a"],VCardActions:m["a"],VCardText:m["c"],VCardTitle:m["d"],VChip:D,VContainer:F["a"],VDivider:G,VOverlay:Q,VProgressLinear:N["a"]});var R={components:{QuestionCard:A}},M=R,W=Object(f["a"])(M,n,i,!1,null,null,null);e["default"]=W.exports},"3c93":function(t,e,r){},4804:function(t,e,r){},6921:function(t,e,r){"use strict";r("d1f8")},"8adc":function(t,e,r){},"8ce9":function(t,e,r){},"96cf":function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(q){c=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var i=e&&e.prototype instanceof g?e:g,o=Object.create(i.prototype),a=new $(n||[]);return o._invoke=k(t,r,a),o}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(q){return{type:"throw",arg:q}}}t.wrap=l;var h="suspendedStart",f="suspendedYield",d="executing",p="completed",v={};function g(){}function m(){}function y(){}var b={};b[o]=function(){return this};var w=Object.getPrototypeOf,C=w&&w(w(B([])));C&&C!==r&&n.call(C,o)&&(b=C);var x=y.prototype=g.prototype=Object.create(b);function _(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function r(i,o,a,s){var c=u(t[i],t,o);if("throw"!==c.type){var l=c.arg,h=l.value;return h&&"object"===typeof h&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,a,s)}),(function(t){r("throw",t,a,s)})):e.resolve(h).then((function(t){l.value=t,a(l)}),(function(t){return r("throw",t,a,s)}))}s(c.arg)}var i;function o(t,n){function o(){return new e((function(e,i){r(t,n,e,i)}))}return i=i?i.then(o,o):o()}this._invoke=o}function k(t,e,r){var n=h;return function(i,o){if(n===d)throw new Error("Generator is already running");if(n===p){if("throw"===i)throw o;return E()}r.method=i,r.arg=o;while(1){var a=r.delegate;if(a){var s=O(a,r);if(s){if(s===v)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===h)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var c=u(t,e,r);if("normal"===c.type){if(n=r.done?p:f,c.arg===v)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=p,r.method="throw",r.arg=c.arg)}}}function O(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,O(t,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=u(n,t.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,v;var o=i.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function $(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function B(t){if(t){var r=t[o];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var i=-1,a=function r(){while(++i<t.length)if(n.call(t,i))return r.value=t[i],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:E}}function E(){return{value:e,done:!0}}return m.prototype=x.constructor=y,y.constructor=m,m.displayName=c(y,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,c(t,s,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},_(L.prototype),L.prototype[a]=function(){return this},t.AsyncIterator=L,t.async=function(e,r,n,i,o){void 0===o&&(o=Promise);var a=new L(l(e,r,n,i),o);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},_(x),c(x,s,"Generator"),x[o]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=B,$.prototype={constructor:$,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(j),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function i(n,i){return s.type="throw",s.arg=t,r.next=n,i&&(r.method="next",r.arg=e),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;j(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:B(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=n}catch(i){Function("r","regeneratorRuntime = r")(n)}},d1f8:function(t,e,r){}}]);
//# sourceMappingURL=about.ef9ff2b1.js.map