(function(t){function e(e){for(var n,i,s=e[0],c=e[1],l=e[2],d=0,v=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&v.push(r[i][0]),r[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(v.length)v.shift()();return a.push.apply(a,l||[]),o()}function o(){for(var t,e=0;e<a.length;e++){for(var o=a[e],n=!0,s=1;s<o.length;s++){var c=o[s];0!==r[c]&&(n=!1)}n&&(a.splice(e--,1),t=i(i.s=o[0]))}return t}var n={},r={app:0},a=[];function i(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=n,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(o,n,function(e){return t[e]}.bind(null,n));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;a.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"0fa2":function(t,e,o){},"15db":function(t,e,o){"use strict";var n=o("3b31"),r=o.n(n);r.a},"21bb":function(t,e,o){"use strict";var n=o("d63f"),r=o.n(n);r.a},"27c8":function(t,e,o){},"37e5":function(t,e,o){"use strict";var n=o("d78e"),r=o.n(n);r.a},"3b31":function(t,e,o){},"4e88":function(t,e,o){"use strict";var n=o("27c8"),r=o.n(n);r.a},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",[o("navBar"),o("v-main",[t.isSnackBarShown?o("userMessage"):t._e(),o("router-view")],1)],1)},a=[],i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"text-center user-message"},[t.chip3?o("v-chip",{staticClass:"ma-4",attrs:{"x-large":"",close:"",color:"green",outlined:""},on:{"click:close":function(e){t.chip3=!t.chip3}}},[t._v(" Success ")]):t._e()],1)},s=[],c={name:"userMessage",data:function(){return{chip3:!0}},props:{},mounted:function(){var t=this;setTimeout((function(){t.$store.dispatch("updateSnackBarStatus",!1)}),3e3)}},l=c,u=(o("15db"),o("2877")),d=o("6544"),v=o.n(d),f=o("cc20"),p=Object(u["a"])(l,i,s,!1,null,null,null),m=p.exports;v()(p,{VChip:f["a"]});var h=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app-bar",{attrs:{app:"",fixed:"",color:"deep-purple accent-4"}},[o("v-spacer"),o("router-link",{staticClass:"links",attrs:{to:"/"}},[o("v-toolbar-title",{staticClass:"white--text"},[t._v("Home")])],1),o("v-divider",{staticClass:"mx-5",attrs:{color:"white",vertical:""}}),o("router-link",{staticClass:"links",attrs:{to:"/book"}},[o("v-toolbar-title",{staticClass:"white--text"},[t._v("Books")])],1),o("v-divider",{staticClass:"mx-5",attrs:{color:"white",vertical:""}}),o("router-link",{staticClass:"links",attrs:{to:"/about"}},[o("v-toolbar-title",{staticClass:"white--text"},[t._v("About")])],1),o("v-spacer")],1)},g=[],b=(o("4e88"),o("40dc")),k=o("ce7e"),_=o("2fa4"),w=o("2a7f"),x={},y=Object(u["a"])(x,h,g,!1,null,null,null),B=y.exports;v()(y,{VAppBar:b["a"],VDivider:k["a"],VSpacer:_["a"],VToolbarTitle:w["a"]});var C={name:"App",components:{navBar:B,userMessage:m},computed:{isSnackBarShown:function(){return this.$store.getters.getSnackBarStatus}}},S=C,R=o("7496"),P=o("f6c4"),j=Object(u["a"])(S,r,a,!1,null,null,null),O=j.exports;v()(j,{VApp:R["a"],VMain:P["a"]});var $=o("9483");Object($["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var I=o("8c4f"),T=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"home d-flex flex-column"},[o("div",{staticClass:"main-container d-flex "},[o("div",{staticClass:"details"}),o("bookHomePage",{attrs:{books:t.books}})],1),o("div",{staticClass:"triangle-bottomright"})])},N=[],V=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"cover"},[o("div",{staticClass:"book"},[t._m(0),t._m(1),o("input",{attrs:{type:"radio",name:"page",id:"page-1"}}),o("input",{attrs:{type:"radio",name:"page",id:"page-2"}}),o("label",{staticClass:"book__page book__page--2"},[o("div",{staticClass:"book__page-front"},[o("div",{staticClass:"page__content"},[o("h1",{staticClass:"page__content-book-title"},[t._v("Welcome!")]),o("h2",{staticClass:"page__content-author"},[t._v("Eyal Bar")]),o("p",{staticClass:"page__content-credits"},[t._v(" Hello and welcome to miss book website. Here you'll be able to find all books you're looking for. ")]),o("p",{staticClass:"page__content-credits"},[t._v(" All you got to do is simply click on "),o("span",[o("router-link",{attrs:{to:"/book"}},[o("v-btn",{staticClass:"books-btn",attrs:{color:"deep-purple accent-1"}},[t._v(" books")])],1)],1),t._v(" and get yourself a book. ")]),t._m(2)])]),t._m(3)])])])},A=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("label",{staticClass:"book__page book__page--1",attrs:{for:"page-1"}},[o("img",{attrs:{src:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/193203/1111.jpg",alt:""}})])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("label",{staticClass:"book__page book__page--4",attrs:{for:"page-2"}},[o("div",{staticClass:"page__content"},[o("h1",{staticClass:"page__content-title"},[t._v("I")]),o("div",{staticClass:"page__content-blockquote"},[o("img",{attrs:{src:"",alt:""}}),o("p",{staticClass:"page__content-blockquote-text"},[t._v(" HARI SELDON — . . . born in the 11,988th year of the Galactic Era; died 12,069. The dates are more commonly given in terms of the current Foundational Era as -79 to the year 1 F.E. Born to middle-class parents on Helicon, Arcturus sector (where his father, in a legend of doubtful authenticity, was a tobacco grower in the hydroponic plants of the planet), he early showed amazing ability in mathematics. Anecdotes concerning his ability are innumerable, and some are contradictory. At the age of two, he is said to have. . . ")]),o("p",{staticClass:"page__content-blockquote-text"},[t._v(" . . . Undoubtedly his greatest contributions were in the field of psychohistory. Seldon found the field little more than a set of vague axioms; he left it a profound statistical science. . . . ")]),o("p",{staticClass:"page__content-blockquote-text"},[t._v(" . . . The best existing authority we have for the details of his life is the biography written by Gaal Dornick who, as a young man, met Seldon two years before the great mathematician's death. The story of the meeting . . . ")])]),o("div",{staticClass:"page__number"},[t._v("3")])])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"page__content-copyright"},[o("p",[t._v("The Folio Society")]),o("p",[t._v("London - MMXII")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"book__page-back"},[o("div",{staticClass:"page__content"},[o("h1",{staticClass:"page__content-title"},[t._v("Contents")]),o("table",{staticClass:"page__content-table"},[o("tr",[o("td",{attrs:{align:"left"}},[t._v("Part I")]),o("td",{attrs:{align:"left"}},[t._v("The Psycohistorians")]),o("td",{attrs:{align:"right"}},[t._v("3")])]),o("tr",[o("td",{attrs:{align:"left"}},[t._v("Part II")]),o("td",{attrs:{align:"left"}},[t._v("The Encyclopedists")]),o("td",{attrs:{align:"right"}},[t._v("43")])]),o("tr",[o("td",{attrs:{align:"left"}},[t._v("Part III")]),o("td",{attrs:{align:"left"}},[t._v("The Mayors")]),o("td",{attrs:{align:"right"}},[t._v("87")])]),o("tr",[o("td",{attrs:{align:"left"}},[t._v("Part IV")]),o("td",{attrs:{align:"left"}},[t._v("The Traders")]),o("td",{attrs:{align:"right"}},[t._v("147")])]),o("tr",[o("td",{attrs:{align:"left"}},[t._v("Part V")]),o("td",{attrs:{align:"left"}},[t._v("The Merchant Princes")]),o("td",{attrs:{align:"right"}},[t._v("173")])])]),o("div",{staticClass:"page__number"},[t._v("2")])])])}],E={name:"book-home-page",data:function(){return{}},props:{books:{type:Array,required:!0}}},F=E,D=(o("d3b6"),o("8336")),L=Object(u["a"])(F,V,A,!1,null,null,null),M=L.exports;v()(L,{VBtn:D["a"]});o("a4d3"),o("e01a"),o("7db0"),o("c740"),o("a434"),o("d3b7"),o("96cf");var q=o("1da1"),G=(o("99af"),o("25f0"),{saveToStorage:H,loadFromStorage:J,getRandomId:U});function H(t,e){localStorage.setItem(t,JSON.stringify(e)||null)}function J(t){var e=localStorage.getItem(t);return e?JSON.parse(e):void 0}function U(){var t=Date.now().toString(16),e=Y(1e3,9999).toString(16),o=Y(1e3,9999).toString(16);return"".concat(o,"-").concat(t,"-").concat(e).toUpperCase()}function Y(t,e){var o=t>=e?t+1:e+1,n=t<=e?t:e;return Math.floor(Math.random()*(o-n))+n}var z=o("bc3a"),X=o.n(z),W={books:Z,query:tt,getById:it,addReview:ot,removeReview:rt,addGoogleBook:ct,findNextBook:dt},K="books",Q="http://localhost:3030/api/books",Z=null;function tt(){return et.apply(this,arguments)}function et(){return et=Object(q["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,G.loadFromStorage(K);case 2:if(e=t.sent,!e){t.next=10;break}return console.log("Storage"),Z=e,G.saveToStorage(K,Z),t.abrupt("return",Z);case 10:return t.next=12,X.a.get(Q);case 12:return e=t.sent,console.log("returnedBooks: ",e),Z=e.data,G.saveToStorage(K,Z),t.abrupt("return",Z);case 17:case"end":return t.stop()}}),t)}))),et.apply(this,arguments)}function ot(t,e){return nt.apply(this,arguments)}function nt(){return nt=Object(q["a"])(regeneratorRuntime.mark((function t(e,o){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,it(e);case 2:n=t.sent,o.id=G.getRandomId(),n.reviews?(n.reviews.push(o),G.saveToStorage(K,Z),console.log("books after review save are: ",Z)):(n.reviews=[o],G.saveToStorage(K,Z),console.log("no prev Reviews books: ",Z));case 5:case"end":return t.stop()}}),t)}))),nt.apply(this,arguments)}function rt(t,e){return at.apply(this,arguments)}function at(){return at=Object(q["a"])(regeneratorRuntime.mark((function t(e,o){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,it(e);case 2:return n=t.sent,console.log("removeReview-bookId: ",e),console.log("removeReview-currBook: ",n),r=n.reviews.findIndex((function(t){return t.id===o.id})),n.reviews.splice(r,1),G.saveToStorage(K,Z),t.abrupt("return");case 9:case"end":return t.stop()}}),t)}))),at.apply(this,arguments)}function it(t){return st.apply(this,arguments)}function st(){return st=Object(q["a"])(regeneratorRuntime.mark((function t(e){var o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Z.find((function(t){return t.id===e}));case 2:return o=t.sent,t.abrupt("return",Promise.resolve(o));case 4:case"end":return t.stop()}}),t)}))),st.apply(this,arguments)}function ct(t){return lt.apply(this,arguments)}function lt(){return lt=Object(q["a"])(regeneratorRuntime.mark((function t(e){var o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,new ut(e);case 2:return o=t.sent,Z.push(o),G.saveToStorage(K,Z),t.abrupt("return",o);case 6:case"end":return t.stop()}}),t)}))),lt.apply(this,arguments)}function ut(t){var e={};return e.id=t.id,e.title=t.volumeInfo.title,e.subtitle=t.volumeInfo.subtitle,e.authors=t.volumeInfo.authors,e.publishedDate=t.volumeInfo.publishedDate,e.description=t.volumeInfo.description,e.pageCount=t.volumeInfo.pageCount,e.categories=t.volumeInfo.categories,e.listPrice={isOnSale:"FREE"===t.saleInfo.saleability&&"free",currencyCode:t.saleInfo.country,amount:t.saleInfo.listPrice?t.saleInfo.listPrice.amount:""},t.volumeInfo.imageLinks&&(e.thumbnail=t.volumeInfo.imageLinks.thumbnail),e.language=t.volumeInfo.language,e}function dt(t){return vt.apply(this,arguments)}function vt(){return vt=Object(q["a"])(regeneratorRuntime.mark((function t(e){var o,n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,it(e);case 2:return o=t.sent,n=Z.findIndex((function(t){return t.id===o.id})),r=Z[n+1],t.abrupt("return",r);case 6:case"end":return t.stop()}}),t)}))),vt.apply(this,arguments)}var ft={name:"Home",data:function(){return{books:null}},components:{bookHomePage:M},props:{},created:function(){this.books=W.books}},pt=ft,mt=(o("21bb"),Object(u["a"])(pt,T,N,!1,null,null,null)),ht=mt.exports,gt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("addBook"),o("bookFilter"),o("bookList",{on:{selected:t.selectBook}})],1)},bt=[],kt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"book-filter d-flex justify-space-between align-center flex-wrap"},[o("div",{staticClass:"search-line"},[o("label",{attrs:{for:"title"}},[t._v("Search Title:")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.filterBy.byName,expression:"filterBy.byName"}],attrs:{type:"text",name:"title",placeholder:"Title"},domProps:{value:t.filterBy.byName},on:{input:function(e){e.target.composing||t.$set(t.filterBy,"byName",e.target.value)}}})]),o("div",{staticClass:"search-line"},[o("label",{attrs:{for:"from-price"}},[t._v("From Price:")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.filterBy.fromPrice,expression:"filterBy.fromPrice"}],attrs:{name:"from-price",type:"text",placeholder:"0"},domProps:{value:t.filterBy.fromPrice},on:{input:function(e){e.target.composing||t.$set(t.filterBy,"fromPrice",e.target.value)}}})]),o("div",{staticClass:"search-line"},[o("label",{attrs:{for:"to-price"}},[t._v("To Price:")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.filterBy.toPrice,expression:"filterBy.toPrice"}],attrs:{name:"to-price",type:"number",placeholder:"0"},domProps:{value:t.filterBy.toPrice},on:{input:function(e){e.target.composing||t.$set(t.filterBy,"toPrice",e.target.value)}}})]),o("v-btn",{attrs:{color:"success"},on:{click:t.emitFilter}},[t._v("Filter")])],1)},_t=[],wt={name:"bookFilter",data:function(){return{filterBy:{byName:"",fromPrice:"",toPrice:""}}},watch:{filterBy:{deep:!0,handler:function(t){this.$store.dispatch("updateFilterBy",t)}}},methods:{emitFilter:function(){this.$store.dispatch("updateFilterBy",this.filterBy)}}},xt=wt,yt=(o("37e5"),Object(u["a"])(xt,kt,_t,!1,null,null,null)),Bt=yt.exports;v()(yt,{VBtn:D["a"]});var Ct=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{},[o("div",{staticClass:"bookList d-flex flex-wrap"},t._l(t.books,(function(e,n){return o("bookPreview",{key:n,staticClass:"mb-5",attrs:{book:e},nativeOn:{click:function(o){return t.selectBook(e.id)}}})})),1)])},St=[],Rt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-card",{staticClass:"mx-auto text-truncate",attrs:{"max-width":"300px"}},[o("v-img",{attrs:{src:t.book.thumbnail,width:"300px",height:"200px"}}),o("v-card-title",[t._v(" "+t._s(t.book.title.toUpperCase())+" ")]),o("v-card-subtitle",{staticClass:"text-truncate"},[t._v(" "+t._s(t.book.subtitle)+" ")]),o("v-card-actions",[o("v-spacer"),t.book.listPrice?o("span",[t._v(t._s(t.book.listPrice.amount))]):o("span",[t._v("unknown")]),t.book.listPrice?o("span",[t._v(t._s(t.book.listPrice.currencyCode))]):o("span",[t._v(t._s(t.book.currencyCode))])],1)],1)},Pt=[],jt={name:"bookPreview",data:function(){return{}},props:{book:{type:Object,required:!0}}},Ot=jt,$t=o("b0af"),It=o("99d9"),Tt=o("adda"),Nt=Object(u["a"])(Ot,Rt,Pt,!1,null,null,null),Vt=Nt.exports;v()(Nt,{VCard:$t["a"],VCardActions:It["a"],VCardSubtitle:It["b"],VCardTitle:It["d"],VImg:Tt["a"],VSpacer:_["a"]});var At={name:"bookList",data:function(){return{}},components:{bookPreview:Vt},methods:{selectBook:function(t){this.$emit("selected",t)}},computed:{books:function(){var t=this.$store.getters.getBooks;return t}}},Et=At,Ft=(o("e8f2"),Object(u["a"])(Et,Ct,St,!1,null,null,null)),Dt=Ft.exports,Lt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"add-book d-flex justify-center"},[o("div",{staticClass:"search-input"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.searchBy,expression:"searchBy"}],attrs:{type:"text",placeholder:"Search a book"},domProps:{value:t.searchBy},on:{input:[function(e){e.target.composing||(t.searchBy=e.target.value)},function(e){return t.getGoogleBooks(t.searchBy)}]}})]),o("div",{staticClass:"books-container"},t._l(t.books,(function(e,n){return o("div",{key:n,staticClass:"book-list"},[o("ul",[o("li",{staticClass:"book-list-details d-flex justify-space-between"},[o("div",{staticClass:"book-title"},[t._v(t._s(e.volumeInfo.title))]),o("v-btn",{attrs:{small:""},on:{click:function(o){return t.onAddBook(e)}}},[t._v("+")])],1)])])})),0)])},Mt=[];function qt(t){return Gt.apply(this,arguments)}function Gt(){return Gt=Object(q["a"])(regeneratorRuntime.mark((function t(e){var o,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,X.a.get("https://www.googleapis.com/books/v1/volumes?printType=books&q=".concat(e));case 4:return o=t.sent,n=o.data,t.abrupt("return",n.items);case 7:case"end":return t.stop()}}),t)}))),Gt.apply(this,arguments)}var Ht={getGoogleBooksList:qt},Jt={name:"addBook",data:function(){return{books:[],searchBy:""}},methods:{getGoogleBooks:function(t){var e=this;return Object(q["a"])(regeneratorRuntime.mark((function o(){var n;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return o.next=2,Ht.getGoogleBooksList(t);case 2:n=o.sent,e.books=n;case 4:case"end":return o.stop()}}),o)})))()},onAddBook:function(t){this.setNotificationActive(),this.$store.dispatch("addGoogleBook",t)},setNotificationActive:function(){this.$store.dispatch("updateSnackBarStatus",!0)}},mounted:function(){this.getGoogleBooks()}},Ut=Jt,Yt=(o("9986"),Object(u["a"])(Ut,Lt,Mt,!1,null,null,null)),zt=Yt.exports;v()(Yt,{VBtn:D["a"]});var Xt={name:"bookApp",components:{bookFilter:Bt,bookList:Dt,addBook:zt},methods:{selectBook:function(t){this.$router.push({name:"bookDetails",params:{id:t}})}},created:function(){this.$store.dispatch("loadBooks")}},Wt=Xt,Kt=Object(u["a"])(Wt,gt,bt,!1,null,null,null),Qt=Kt.exports,Zt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.book?o("div",{staticClass:"bookDetails d-flex flex-column align-center justify-space-around"},[o("v-card",{staticClass:"mx-auto my-12",attrs:{"max-width":"800",width:"100%"}},[o("v-img",{attrs:{height:"300",src:t.book.thumbnail}},[t.book.listPrice.isOnSale?o("v-chip",{staticClass:"ma-4",attrs:{color:"red","text-color":"white"}},[o("v-avatar",{attrs:{left:""}},[o("v-icon",[t._v("mdi-sale")])],1),o("span",{staticClass:"font-weight-bold subtitle-1"},[t._v("On Sale!")])],1):t._e()],1),o("v-card-title",[t._v(" "+t._s(t.book.title.toUpperCase())+" "),o("v-spacer"),t.checkNan()?o("div",[t._v(t._s(t.bookAge))]):t._e()],1),t.book.authors?o("v-card-subtitle",[o("span",{staticClass:"font-weight-bold"},[t._v("Authors:")]),t._v(" "+t._s(t.book.authors.join(" "))+" "),t.book.categories?o("div",[o("span",{staticClass:"font-weight-bold"},[t._v("Categories:")]),t._v(" "+t._s(t.book.categories.join(" "))+" ")]):t._e()]):t._e(),t.book.description?o("v-card-text",[o("span",{staticClass:"font-weight-bold"},[t._v("Description:")]),o("long-text",{attrs:{txt:t.book.description}}),o("div",[o("span",{staticClass:"font-weight-bold"},[t._v("Language:")]),t._v(" "+t._s(t.book.language)+" ")])],1):t._e(),o("v-card-actions",[o("span",[t._v(t._s(t.readStatus))]),o("v-spacer"),o("span",{staticClass:"font-weight-bold"},[t._v("Price:")]),o("span",{staticClass:"font-weight-bold",class:{redColor:t.book.listPrice.amount>150,greenColor:t.book.listPrice.amount<20}},[t._v(t._s(t.book.listPrice.amount))])],1)],1),o("div",{staticClass:"reviews-container"},[o("div",{staticClass:"add-review-container d-flex justify-center"},[o("div",[o("v-btn",{on:{click:function(e){t.showReview=!t.showReview}}},[t._v("Add-Review")])],1),t.showReview?o("addReview",{on:{addReview:t.addReview}}):t._e()],1),t.reviews?o("div",t._l(t.reviews,(function(e,n){return o("div",{key:n,staticClass:"review-card d-flex justify-space-between"},[o("div",{staticClass:"d-flex flex-column"},[o("div",{staticClass:"name-date d-flex justify-space-between"},[o("div",{staticClass:"d-flex"},[o("p",{staticClass:"bold"},[t._v("name:")]),o("p",[t._v(t._s(e.name))])]),o("div",{staticClass:"d-flex"},[o("p",{staticClass:"bold"},[t._v("date:")]),o("p",[t._v(t._s(e.date))])])]),o("div",{staticClass:"d-flex"},[o("p",{staticClass:"bold"},[t._v("review:")]),o("p",[t._v(t._s(e.txt))])])]),o("div",{staticClass:"div"},[o("v-btn",{on:{click:function(o){return t.removeReview(e)}}},[t._v("X")])],1)])})),0):t._e()]),o("v-btn",{on:{click:t.goToNextBook}},[t._v("Next-Book")])],1):o("p",[t._v("loading...")])},te=[],ee=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"description-container"},[o("div",{staticClass:"description-text"},[o("p",[t._v(t._s(t.getLength))])]),o("div",[t.toggleShowButton()?o("v-btn",{staticClass:"length-btn",attrs:{color:"success"},on:{click:t.setTextLength}},[t._v(t._s(t.toggleReadbtn()))]):t._e()],1)])},oe=[],ne={name:"longText",data:function(){return{isTextShort:!0}},props:{txt:{type:String,required:!0}},methods:{setTextLength:function(){this.isTextShort=!this.isTextShort},toggleReadbtn:function(){return this.isTextShort?"Read More":"Read Less"},toggleShowButton:function(){return this.txt.length>100}},computed:{getLength:function(){var t=this.txt,e=t.substr(0,99);return this.isTextShort?e:t}},mounted:function(){this.getLength},created:function(){}},re=ne,ae=(o("b4ac"),Object(u["a"])(re,ee,oe,!1,null,null,null)),ie=ae.exports;v()(ae,{VBtn:D["a"]});var se=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("form",{staticClass:"d-flex flex-column",on:{submit:function(t){t.preventDefault()}}},[o("v-rating",{model:{value:t.review.stars,callback:function(e){t.$set(t.review,"stars",e)},expression:"review.stars"}}),o("input",{directives:[{name:"model",rawName:"v-model",value:t.review.name,expression:"review.name"}],attrs:{type:"text",placeholder:"Your-name"},domProps:{value:t.review.name},on:{input:function(e){e.target.composing||t.$set(t.review,"name",e.target.value)}}}),o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.review.txt,expression:"review.txt"}],attrs:{type:"text",placeholder:"Enter your review"},domProps:{value:t.review.txt},on:{input:function(e){e.target.composing||t.$set(t.review,"txt",e.target.value)}}}),t._v(" "),o("v-btn",{on:{click:function(e){return e.preventDefault(),t.addReview(e)}}},[t._v("Save")])],1)},ce=[],le=(o("b0c0"),o("4d90"),{name:"add-review",data:function(){return{review:{name:"",date:this.getFullDate(),stars:null,txt:""}}},methods:{addReview:function(){this.review.name||(this.review.name="BookReader"),this.$emit("addReview",this.review)},getFullDate:function(){var t=new Date,e=String(t.getDate()).padStart(2,"0"),o=String(t.getMonth()+1).padStart(2,"0"),n=t.getFullYear();return o+"/"+e+"/"+n}}}),ue=le,de=o("1d4d"),ve=Object(u["a"])(ue,se,ce,!1,null,null,null),fe=ve.exports;v()(ve,{VBtn:D["a"],VRating:de["a"]});var pe={name:"bookDetails",data:function(){return{book:null,showReview:!1,reviews:[],nextBook:!1}},components:{longText:ie,addReview:fe},methods:{addReview:function(t){this.setNotificationActive();var e=this.$route.params.id;W.addReview(e,t),this.showReview=!1,this.reviews.push(t),console.log("added review: ",this.reviews)},removeReview:function(t){this.setNotificationActive();var e=this.$route.params.id;W.removeReview(e,t),this.getCurrReviews(),console.log("this.reviews: ",this.reviews)},setNotificationActive:function(){this.$store.dispatch("updateSnackBarStatus",!0)},getCurrReviews:function(){!this.book.reviews||(this.reviews=this.book.reviews)},checkNan:function(){return!isNaN(this.book.publishedDate)},goToNextBook:function(){this.$router.push({name:"bookDetails",params:{id:this.$store.getters.getNextBook}})}},watch:{"$route.params.id":function(t,e){var o=this;console.log("newVal",t),console.log("oldVal",e);var n=this.$route.params.id;W.getById(n).then((function(t){o.book=t,o.getCurrReviews()}))}},computed:{readStatus:function(){var t=this.book.pageCount;return t>500?"Long reading":t>200?"Decent Reading":t<100?"Light Reading":"Medium Reading"},bookAge:function(){var t=this.book.publishedDate,e=(new Date).getFullYear(),o=e-t;return o>10?"Veteran":o<1?"New":o+" years ago"}},mounted:function(){},created:function(){var t=this;return Object(q["a"])(regeneratorRuntime.mark((function e(){var o,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return o=t.$route.params.id,e.next=3,W.getById(o);case 3:n=e.sent,t.book=n,t.getCurrReviews(),t.$store.dispatch("updateCurrBook",t.book),console.log(t.$store.getters.getCurrBook);case 8:case"end":return e.stop()}}),e)})))()}},me=pe,he=(o("c3a3"),o("8212")),ge=o("132d"),be=Object(u["a"])(me,Zt,te,!1,null,null,null),ke=be.exports;v()(be,{VAvatar:he["a"],VBtn:D["a"],VCard:$t["a"],VCardActions:It["a"],VCardSubtitle:It["b"],VCardText:It["c"],VCardTitle:It["d"],VChip:f["a"],VIcon:ge["a"],VImg:Tt["a"],VSpacer:_["a"]}),n["default"].use(I["a"]);var _e=[{path:"/",name:"home",component:ht},{path:"/book",name:"bookList",component:Qt},{path:"/book/:id",name:"bookDetails",component:ke}],we=new I["a"]({mode:"history",base:"/",routes:_e}),xe=we,ye=o("2f62"),Be={isSnackBarActive:!1},Ce={setSnackBarStatus:function(t,e){t.isSnackBarActive=e}},Se={getSnackBarStatus:function(t){return t.isSnackBarActive}},Re={updateSnackBarStatus:function(t,e){t.commit("setSnackBarStatus",e)}},Pe={state:Be,mutations:Ce,getters:Se,actions:Re},je=(o("4de4"),o("caad"),o("2532"),{books:[],filterBy:{byName:"",fromPrice:"",toPrice:""},prevBook:{},currBook:{},nextBook:{}}),Oe={setBooks:function(t,e){t.books=e},addBook:function(t,e){t.books.unshift(e)},setFilterBy:function(t,e){t.filterBy=e},setCurrBook:function(t,e){t.currBook=e,console.log("state: ",t)},setNextBook:function(t,e){t.currBook=e},setPrevBook:function(t,e){t.currBook=e}},$e={getBooks:function(t){var e=t.books;return t.filterBy.byName&&(e=e.filter((function(e){return e.title.toLowerCase().includes(t.filterBy.byName.toLowerCase())}))),t.filterBy.fromPrice&&(e=e.filter((function(e){return e.listPrice.amount>=t.filterBy.fromPrice}))),t.filterBy.toPrice&&(e=e.filter((function(e){return e.listPrice.amount<=t.filterBy.toPrice}))),e},getPrevBook:function(){return je.prevBook},getCurrBook:function(t){return t.currBook},getNextBook:function(){var t=je.books.find((function(t){return t.id===je.currBook.id})),e=je.books.findIndex((function(e){return e.id===t.id})),o=je.books[e+1];return o.id}},Ie={loadBooks:function(t){return Object(q["a"])(regeneratorRuntime.mark((function e(){var o,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return o=t.commit,e.next=3,W.query();case 3:n=e.sent,o("setBooks",n);case 5:case"end":return e.stop()}}),e)})))()},addGoogleBook:function(t,e){return Object(q["a"])(regeneratorRuntime.mark((function o(){var n,r;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return n=t.commit,o.next=3,W.addGoogleBook(e);case 3:r=o.sent,n("addBook",r);case 5:case"end":return o.stop()}}),o)})))()},updateFilterBy:function(t,e){var o=t.commit;o("setFilterBy",e)},updateCurrBook:function(t,e){var o=t.commit;o("setCurrBook",e)},updateNextBook:function(t){return Object(q["a"])(regeneratorRuntime.mark((function e(){var o,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return o=t.commit,e.next=3,W.findNextBook(je.currBook.id);case 3:n=e.sent,console.log("this is nextBookId:",n),o("setNextBook",n);case 6:case"end":return e.stop()}}),e)})))()},updatePrevBook:function(t,e){var o=t.commit;console.log("this is prevBook:",e),o("setPrevBook",e)}},Te={state:je,mutations:Oe,getters:$e,actions:Ie};n["default"].use(ye["a"]);var Ne=new ye["a"].Store({modules:{snackBarStore:Pe,booksStore:Te}}),Ve=o("ce5b"),Ae=o.n(Ve);o("bf40");n["default"].use(Ae.a);var Ee={},Fe=new Ae.a(Ee);window.axios=o("bc3a"),n["default"].config.productionTip=!1,new n["default"]({router:xe,store:Ne,vuetify:Fe,render:function(t){return t(O)}}).$mount("#app")},5846:function(t,e,o){},"63c0":function(t,e,o){},9986:function(t,e,o){"use strict";var n=o("b7eb"),r=o.n(n);r.a},"9daa":function(t,e,o){},b4ac:function(t,e,o){"use strict";var n=o("63c0"),r=o.n(n);r.a},b7eb:function(t,e,o){},c3a3:function(t,e,o){"use strict";var n=o("0fa2"),r=o.n(n);r.a},d3b6:function(t,e,o){"use strict";var n=o("9daa"),r=o.n(n);r.a},d63f:function(t,e,o){},d78e:function(t,e,o){},e8f2:function(t,e,o){"use strict";var n=o("5846"),r=o.n(n);r.a}});
//# sourceMappingURL=app.bff6378c.js.map