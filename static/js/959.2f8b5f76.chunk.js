(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[959],{4497:function(e,t,n){"use strict";n.d(t,{Wf:function(){return p},XT:function(){return s},YJ:function(){return f},jC:function(){return h},pP:function(){return v}});var r=n(5861),a=n(7757),c=n.n(a),u=n(4569),o=n.n(u);o().defaults.baseURL="https://api.themoviedb.org/3/";var i="3c9b3437ebab156a512248e157c99300",s=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o().get("/trending/movie/day?api_key=".concat(i));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o().get("search/movie?api_key=".concat(i,"&query=").concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o().get("movie/".concat(t,"?api_key=").concat(i));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o().get("/movie/".concat(t,"/credits?api_key=").concat(i));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o().get("/movie/".concat(t,"/reviews?api_key=").concat(i));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},8959:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var r=n(501),a=n(5861),c=n(885),u=n(7757),o=n.n(u),i=n(2791),s=n(4497),p=n(2007),f=n.n(p);function v(){var e=(0,i.useState)([]),t=(0,c.Z)(e,2),n=t[0],r=t[1];return(0,i.useEffect)((function(){function e(){return(e=(0,a.Z)(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.XT();case 3:t=e.sent,r(t.results),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),{movies:n}}var h=v;v.PropTypes={fetchMovies:f().func,movies:f().array};var l=n(184),d=function(){var e=h().movies;return(0,l.jsxs)("main",{children:[(0,l.jsx)("h1",{children:"Trending today"}),(0,l.jsx)("ul",{children:e.map((function(e){var t=e.id,n=e.title;return(0,l.jsx)("li",{children:(0,l.jsx)(r.rU,{to:"/movies/".concat(t),state:{from:"/"},children:n})},t)}))})]})}},888:function(e,t,n){"use strict";var r=n(9047);function a(){}function c(){}c.resetWarningCache=a,e.exports=function(){function e(e,t,n,a,c,u){if(u!==r){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:c,resetWarningCache:a};return n.PropTypes=n,n}},2007:function(e,t,n){e.exports=n(888)()},9047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=959.2f8b5f76.chunk.js.map