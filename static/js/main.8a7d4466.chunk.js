(this["webpackJsonpsimple-image-search-app"]=this["webpackJsonpsimple-image-search-app"]||[]).push([[0],{1:function(e,a,t){e.exports={searchBarBoxShadow:"Gallery_searchBarBoxShadow__1y5Wc",container:"Gallery_container__hvh6T",searchGroup:"Gallery_searchGroup__1gByK",imagesHeaderContainer:"Gallery_imagesHeaderContainer__3cTgk",dropdown:"Gallery_dropdown__8xIwX",dropdownContent:"Gallery_dropdownContent__3Wd2v",listAlign:"Gallery_listAlign__1pFjh",loaderContainer:"Gallery_loaderContainer__1NDdG",loader:"Gallery_loader__3ZFMk",imagesPosition:"Gallery_imagesPosition__WJjHV",images:"Gallery_images__2IYjd"}},12:function(e,a,t){e.exports=t.p+"static/media/loader.aee4facb.gif"},19:function(e,a,t){e.exports=t(32)},24:function(e,a,t){},32:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(4),c=t.n(o),l=(t(24),t(7)),i=t(1),s=t.n(i),u=t(16),m=t(12),d=t.n(m),p=t(6),h=t(18),E=t(14),f=t.n(E),_=function(e){return{type:"ADD_QUERY",payload:Object(h.a)({id:f()()},e)}},y=function(e){return{type:"DELETE_QUERY",payload:{id:e}}},v=Object(p.b)((function(e){return{queries:(a=e,a.queries)};var a}),(function(e){return{addQuery:function(a){return e(_(a))},deleteQuery:function(a){return e(y(a))}}}))((function(e){var a=e.queries,t=e.addQuery,o=e.deleteQuery,c=Object(n.useState)(""),i=Object(l.a)(c,2),m=i[0],p=i[1],h=Object(n.useState)([]),E=Object(l.a)(h,2),f=E[0],_=E[1],y=Object(n.useState)(!1),v=Object(l.a)(y,2),g=v[0],b=v[1],w=function(e){fetch("https://api.unsplash.com/search/photos/?client_id=Ytv2tQ9muH96PcLfrpaCN3dMus95Z5vdFWmgKjdisqE&query=".concat(e)).then((function(e){return e.json()})).then((function(a){b(!1),0!==a.results.length?_(a.results):window.confirm("ohh.. sorry, we didn't found ".concat(e))})),b(!0)};return r.a.createElement("div",null,r.a.createElement("div",{className:"container ".concat(s.a.searchBarBoxShadow)},r.a.createElement("form",{className:s.a.container,onSubmit:function(e){e.preventDefault(),t({title:m})}},r.a.createElement("span",null,"FIND AMAZING IMAGE"),r.a.createElement("div",{className:s.a.searchGroup},r.a.createElement(u.a,null),r.a.createElement("input",{type:"text",value:m,onChange:function(e){return p(e.target.value)},placeholder:"Search free images"})),r.a.createElement("button",{className:"btn",type:"submit",onClick:function(){return w(m)}},"Search"))),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:s.a.imagesHeaderContainer},r.a.createElement("h1",null,"Gallery"),r.a.createElement("div",{className:s.a.dropdown},r.a.createElement("button",{className:"btn"},"Saved Queries"),a.queries.length>0?r.a.createElement("div",{className:s.a.dropdownContent},a.queries.map((function(e){var a=e.id,t=e.title;return r.a.createElement("div",{key:a},r.a.createElement("div",{className:s.a.listAlign,key:a},r.a.createElement("button",{className:"btn btn--blank",type:"submit",onClick:function(){return w(t)}},t),r.a.createElement("button",{className:"btn btn--sm",onClick:function(){return function(e){o(e)}(a)}},"Delete")))}))):r.a.createElement("div",{className:s.a.dropdownContent},r.a.createElement("span",null,"Empty")))),g?r.a.createElement("div",{className:s.a.loaderContainer},r.a.createElement("img",{src:d.a,alt:"",className:s.a.loader})):r.a.createElement("div",{className:s.a.imagesPosition},f.map((function(e){return r.a.createElement("img",{key:e.id,src:e.urls.regular,alt:"",className:s.a.images})})))))})),g=function(){return r.a.createElement("div",null,r.a.createElement(v,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var b=t(2),w=t(17),N={queries:[]},G=Object(b.combineReducers)({queries:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_QUERY":return{queries:[].concat(Object(w.a)(e.queries),[a.payload])};case"DELETE_QUERY":return{queries:e.queries.filter((function(e){return e.id!==a.payload.id}))};default:return e}}}),j=t(15),C=Object(b.createStore)(G,Object(j.composeWithDevTools)());c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p.a,{store:C},r.a.createElement(g,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.8a7d4466.chunk.js.map