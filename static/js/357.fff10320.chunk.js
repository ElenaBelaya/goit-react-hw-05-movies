"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[357,866,992],{8866:function(e,t,n){n.r(t);var r=n(4772),a=n(184);t.default=function(){return(0,a.jsx)(r.W0,{height:"50",width:"50",color:"#ff1693"})}},6357:function(e,t,n){n.r(t);var r=n(5861),a=n(885),c=n(7757),u=n.n(c),s=n(6871),i=n(2791),o=n(2992),f=n(8866),p=n(184);t.default=function(){var e=(0,s.UO)().moviesId,t=(0,i.useState)(""),n=(0,a.Z)(t,2),c=n[0],v=n[1],h=(0,i.useState)(!1),d=(0,a.Z)(h,2),l=d[0],w=d[1];return(0,i.useEffect)((function(){function t(){return(t=(0,r.Z)(u().mark((function t(){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return w(!0),t.prev=1,t.next=4,o.getMoviesForReviews(e);case 4:n=t.sent,v(n),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0.message);case 11:return t.prev=11,w(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[1,8,11,14]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]),(0,p.jsxs)("main",{children:[l&&(0,p.jsx)(f.default,{}),c&&(0,p.jsx)("ul",{children:c.results.map((function(e){return(0,p.jsxs)("li",{children:[(0,p.jsx)("b",{children:e.author}),(0,p.jsx)("p",{children:e.content})]},e.id)}))}),0===c.total_results&&(0,p.jsx)("p",{children:"We don't have any reviews for this movie"})]})}},2992:function(e,t,n){n.r(t),n.d(t,{getMovies:function(){return o},getMoviesById:function(){return p},getMoviesByQuery:function(){return f},getMoviesForCast:function(){return v},getMoviesForReviews:function(){return h}});var r=n(5861),a=n(7757),c=n.n(a),u=n(4569),s=n.n(u);s().defaults.baseURL="https://api.themoviedb.org/3/";var i="3c9b3437ebab156a512248e157c99300",o=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("/trending/movie/day?api_key=".concat(i));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("search/movie?api_key=".concat(i,"&query=").concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("movie/".concat(t,"?api_key=").concat(i));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("/movie/".concat(t,"/credits?api_key=").concat(i));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("/movie/".concat(t,"/reviews?api_key=").concat(i));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=357.fff10320.chunk.js.map