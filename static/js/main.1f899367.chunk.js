(this.webpackJsonpreceip=this.webpackJsonpreceip||[]).push([[0],[,,,,,function(e,t,a){e.exports=a(14)},,,,,function(e,t,a){},,function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(4),o=a.n(r),i=(a(10),a(1)),s=a.n(i),l=a(2);var u=function(e){return c.a.createElement("div",null,c.a.createElement("h1",null,e.title),c.a.createElement("p",null,e.Calories),c.a.createElement("img",{src:e.image,alt:""}))},m=(a(12),a(13),function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(""),i=Object(l.a)(o,2),m=i[0],p=i[1],f=Object(n.useState)("chicken"),h=Object(l.a)(f,2),b=h[0],d=h[1];Object(n.useEffect)((function(){v()}),[b]);var v=function(){var e,t;return s.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,s.a.awrap(fetch("https://api.edamam.com/search?q=".concat(b,"&app_id=").concat("71e66d5c","&app_key=").concat("b71f7ed97b12c8bdfb793e11f89ed360")));case 2:return e=a.sent,a.next=5,s.a.awrap(e.json());case 5:t=a.sent,r(t.hits),console.log(t.hits);case 8:case"end":return a.stop()}}))};return c.a.createElement("div",{className:"App"},c.a.createElement("form",{className:"search-form",onSubmit:function(e){e.preventDefault(),d(m),p("")}},c.a.createElement("input",{className:"search-bar",type:"text",value:m,onChange:function(e){p(e.target.value)}}),c.a.createElement("button",{className:"search-button",type:"submit"},"Search")),a.map((function(e){return c.a.createElement(u,{title:e.recipe.label,Calories:e.recipe.calories,image:e.recipe.image})})))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[5,1,2]]]);
//# sourceMappingURL=main.1f899367.chunk.js.map