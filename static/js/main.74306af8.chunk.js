(this["webpackJsonpmovie-noms"]=this["webpackJsonpmovie-noms"]||[]).push([[0],{12:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(1),r=n.n(s),a=n(5),i=n.n(a),o=(n(12),n(3)),u=n.n(o),j=n(6),l=n(4),m=(n(14),n(15),function(e){return Object(c.jsx)(c.Fragment,{children:e.movies.map((function(e,t){return Object(c.jsx)("div",{className:"d-flex justify-content-start m-3",children:Object(c.jsx)("img",{src:"N/A"===e.Poster?"src/images/stock-movie-poster.jpg":e.Poster,alt:"movie poster"})})}))})}),h=function(e){return Object(c.jsx)("div",{className:"col",children:Object(c.jsx)("h1",{children:e.heading})})},d=function(e){return Object(c.jsx)("div",{className:"col col-sm-4",children:Object(c.jsx)("input",{className:"form-control",value:e.value,onChange:function(t){return e.setSearchValue(t.target.value)},placeholder:"Type to search"})})},b=function(){var e=Object(s.useState)([]),t=Object(l.a)(e,2),n=t[0],r=t[1],a=Object(s.useState)(""),i=Object(l.a)(a,2),o=i[0],b=i[1],f=function(){var e=Object(j.a)(u.a.mark((function e(t){var n,c,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://www.omdbapi.com/?apikey=b1f40189&s=".concat(t),e.next=3,fetch(n);case 3:return c=e.sent,e.next=6,c.json();case 6:(s=e.sent).Search&&r(s.Search);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){f(o)}),[o]),Object(c.jsxs)("div",{className:"container-fluid movie-app",children:[Object(c.jsxs)("div",{className:"row d-flex align-items-center mt-4 mb-4",children:[Object(c.jsx)(h,{heading:"Movies"}),Object(c.jsx)(d,{searchValue:o,setSearchValue:b})]}),Object(c.jsx)("div",{className:"row",children:Object(c.jsx)(m,{movies:n})})]})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),r(e),a(e)}))};i.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(b,{})}),document.getElementById("root")),f()}},[[16,1,2]]]);
//# sourceMappingURL=main.74306af8.chunk.js.map