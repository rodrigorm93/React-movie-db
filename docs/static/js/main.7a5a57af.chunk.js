(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],{150:function(e,a,t){e.exports=t(243)},155:function(e,a,t){},188:function(e,a,t){},206:function(e,a,t){},219:function(e,a,t){},220:function(e,a,t){},227:function(e,a,t){},242:function(e,a,t){},243:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(6),o=t.n(c),r=t(21),i=t(247),u=t(58),m=t(15),s=t(254),p=t(250),g=(t(155),s.a.SubMenu),E=function(e){var a=e.setPageTopRated,t=e.total_pages_topRates,n=e.setpagination,c=e.total_pages_upcoming,o=e.total_pages_top_tv,r=e.total_popular_tv;return l.a.createElement("div",{className:"menu-top"},l.a.createElement("div",{className:"menu-top__logo"}),l.a.createElement(s.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["1"],style:{lineHeight:"64px"}},l.a.createElement(g,{icon:l.a.createElement(p.a,null),title:"Movie"},l.a.createElement(s.a.ItemGroup,{title:"Category"},l.a.createElement(s.a.Item,{key:"1",onClick:function(){a(1),n(t)}},l.a.createElement(u.b,{to:"/"},"Top Rated")),l.a.createElement(s.a.Item,{key:"2",onClick:function(){a(1),n(c)}},l.a.createElement(u.b,{to:"/upcomingMovie"},"Upcoming")))),l.a.createElement(g,{icon:l.a.createElement(p.a,null),title:"TV"},l.a.createElement(s.a.ItemGroup,{title:"Category"},l.a.createElement(s.a.Item,{key:"1",onClick:function(){a(1),n(o)}},l.a.createElement(u.b,{to:"/topRatedTV"},"Top Rated")),l.a.createElement(s.a.Item,{key:"2",onClick:function(){a(1),n(r)}},l.a.createElement(u.b,{to:"/popularTV"},"Popular"))))))},d=t(249),v=t(253),f=(t(188),"https://api.themoviedb.org/3"),b="0833fefae38662aa3688515b756c9a47",_=function(e){var a=e.results;return l.a.createElement(v.a,{className:"carousels-app"},a.map((function(e){return l.a.createElement(v.a.Item,{key:e.id},l.a.createElement("img",{className:"d-block w-100",src:"".concat("https://image.tmdb.org/t/p/original").concat(e.backdrop_path),alt:e.id}),l.a.createElement(v.a.Caption,null,l.a.createElement("h3",null,e.title),l.a.createElement("p",null,e.overview)))})))},y=function(e){var a=Object(n.useRef)(!0),t=Object(n.useState)({data:null,loading:!0,error:null}),l=Object(r.a)(t,2),c=l[0],o=l[1];return Object(n.useEffect)((function(){o({data:null,loading:!0,error:null}),fetch(e).then((function(e){return e.json()})).then((function(e){a.current?o({loading:!1,error:!1,data:e}):console.log("Setstate no se llamo")})).catch((function(e){console.log(e)}))}),[e]),c},h=t(246),O=t(69),k=t(39),j=t(76),S=t(252),N=t(126),w=t.n(N);t(206);function x(e){var a=e.videoKey,t=e.isOpen,c=e.close,o=Object(n.useState)(null),i=Object(r.a)(o,2),u=i[0],m=i[1];return Object(n.useEffect)((function(){m("https://youtu.be/".concat(a))}),[a]),l.a.createElement(S.a,{className:"modal-video",visible:t,centered:!0,onCancel:c,footer:!1},l.a.createElement(w.a,{url:u,playing:t,controls:t}))}var C=t(255),T=function(e){var a=e.isOpen,t=e.close,n=e.url,c=y(n),o=c.data,r=c.loading,i=(!!o&&o).results;return l.a.createElement("div",null,r?l.a.createElement("div",null):l.a.createElement("div",null,function(e,a,t){if(e)return e.length>0?l.a.createElement(l.a.Fragment,null,l.a.createElement(x,{videoKey:e[0].key,videoPlatform:e[0].site,isOpen:a,close:t})):(console.log("otierne"),l.a.createElement(l.a.Fragment,null,l.a.createElement(S.a,{centered:!0,visible:a,onCancel:t,onOk:t},l.a.createElement(C.a,{variant:"danger"},"Trailer no Disponible"))))}(i,a,t)))},R=t(248),M=t(251),V=(t(219),function(e){var a=e.modalOverview,t=e.isCloseModalOverview,n=e.infoMovie;return l.a.createElement("div",null,l.a.createElement(S.a,{visible:a,centered:!0,onCancel:t,footer:!1},l.a.createElement("h3",null,null===n||void 0===n?void 0:n.title),l.a.createElement("h3",null,null===n||void 0===n?void 0:n.name),l.a.createElement("p",null,n.overview)))}),F=(t(220),R.a.Meta),I=function(e){var a=e.list,t=e.url,c=e.setKeyVideo,o=Object(n.useState)(!1),i=Object(r.a)(o,2),u=i[0],m=i[1],s=Object(n.useState)(!1),p=Object(r.a)(s,2),g=p[0],E=p[1],d=Object(n.useState)({title:"",overview:""}),v=Object(r.a)(d,2),f=v[0],b=v[1];console.log(a);var _=function(){E(!1)},y=function(e,a){b({title:e,overview:a}),E(!0)};return l.a.createElement("div",{className:"box-card-list"},l.a.createElement(O.a,null,a.map((function(e){return l.a.createElement(k.a,{span:4,key:e.id,className:"card-list-colum"},l.a.createElement(R.a,{className:"card-list",hoverable:!0,style:{width:220},cover:l.a.createElement("img",{alt:"example",src:"".concat("https://image.tmdb.org/t/p/original").concat(e.backdrop_path),onClick:function(){return a=e.id,c(a),void m(!0);var a}})},e.title?l.a.createElement(l.a.Fragment,null,l.a.createElement(F,{title:e.title,description:e.overview.substring(0,150)+"..."}),l.a.createElement("br",null),l.a.createElement("center",null,l.a.createElement(j.a,{onClick:function(){return y(e.title,e.overview)},className:"text-center",variant:"light"},"More..."))):l.a.createElement(l.a.Fragment,null,l.a.createElement(F,{title:e.name,description:e.overview.substring(0,150)+"..."}),l.a.createElement("br",null),l.a.createElement("center",null,l.a.createElement(j.a,{onClick:function(){return y(e.name,e.overview)},className:"text-center",variant:"light"},"More..."))),l.a.createElement(V,{modalOverview:g,isCloseModalOverview:_,infoMovie:f}),l.a.createElement("hr",null),l.a.createElement("p",{className:"text-center"},e.release_date),l.a.createElement(M.a,{allowHalf:!0,defaultValue:e.vote_average,count:10,disabled:!0})))}))),l.a.createElement(T,{isOpen:u,close:function(){return m(!1)},url:t}))},K=(t(82),function(e){var a=e.pageTopRated,t=Object(n.useState)("55"),c=Object(r.a)(t,2),o=c[0],i=c[1],u="".concat(f,"/movie/now_playing?api_key=").concat(b,"&language=es-ES&page=1"),m=y(u),s=m.data,p=m.loading,g=(!!s&&s).results,E="".concat(f,"/movie/top_rated?api_key=").concat(b,"&language=es-Es&page=").concat(a),d=y(E),v=d.data,O=d.loading,k=(!!v&&v).results,j="".concat(f,"/movie/").concat(o,"/videos?api_key=").concat(b,"&language=en-US");return l.a.createElement(l.a.Fragment,null,p?l.a.createElement("h1",null,"loafding"):l.a.createElement(_,{results:g}),O?l.a.createElement(h.a,{animation:"border",role:"status"},l.a.createElement("span",{className:"sr-only"},"Loading...")):l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",{className:"text-center"},"Top Rated"),l.a.createElement("br",null),l.a.createElement(I,{list:k,url:j,setKeyVideo:i})))}),P=function(e){var a=e.pagination,t=Object(n.useState)("55"),c=Object(r.a)(t,2),o=c[0],i=c[1],u="".concat(f,"/tv/top_rated?api_key=").concat(b,"&language=es-ES&page=").concat(a),m="".concat(f,"/tv/").concat(o,"/videos?api_key=").concat(b,"&language=en-US"),s=y(u),p=s.data,g=s.loading,E=(!!p&&p).results;return l.a.createElement("div",null,g?l.a.createElement(h.a,{animation:"border",role:"status"},l.a.createElement("span",{className:"sr-only"},"Loading...")):l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",{className:"text-center"},"Top rated"),l.a.createElement(I,{list:E,url:m,setKeyVideo:i})))},U=function(e){var a=e.pagination,t=Object(n.useState)("55"),c=Object(r.a)(t,2),o=c[0],i=c[1],u="".concat(f,"/tv/").concat(o,"/videos?api_key=").concat(b,"&language=en-US"),m="".concat(f,"/tv/popular?api_key=").concat(b,"&language=es-ES&page=").concat(a),s=y(m),p=s.data,g=s.loading,E=(!!p&&p).results;return l.a.createElement("div",null,g?l.a.createElement(h.a,{animation:"border",role:"status"},l.a.createElement("span",{className:"sr-only"},"Loading...")):l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",{className:"text-center"},"popular"),l.a.createElement(I,{list:E,url:u,setKeyVideo:i})))},L=function(e){var a=e.pagination,t=Object(n.useState)("55"),c=Object(r.a)(t,2),o=c[0],i=c[1],u="".concat(f,"/movie/upcoming?api_key=").concat(b,"&language=es-ES&page=").concat(a),m=y(u),s=m.data,p=m.loading,g=(!!s&&s).results,E="".concat(f,"/movie/").concat(o,"/videos?api_key=").concat(b,"&language=en-US");return l.a.createElement("div",null,p?l.a.createElement(h.a,{animation:"border",role:"status"},l.a.createElement("span",{className:"sr-only"},"Loading...")):l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",{className:"text-center"},"upcoming"),l.a.createElement("br",null),l.a.createElement(I,{list:g,url:E,setKeyVideo:i})))};t(227);var z=function(){var e=i.a.Header,a=i.a.Content,t=Object(n.useState)(1),c=Object(r.a)(t,2),o=c[0],s=c[1],p="".concat(f,"/movie/top_rated?api_key=").concat(b,"&language=es-Es&page=1"),g=y(p).data,v=(!!g&&g).total_pages,_="".concat(f,"/movie/upcoming?api_key=").concat(b,"&language=es-ES&page=1"),h=y(_).data,O=(!!h&&h).total_pages,k="".concat(f,"/tv/top_rated?api_key=").concat(b,"&language=es-ES&page=1"),j=y(k).data,S=(!!j&&j).total_pages,N="".concat(f,"/tv/popular?api_key=").concat(b,"&language=es-ES&page=1"),w=y(N).data,x=(!!w&&w).total_pages,C=Object(n.useState)(1),T=Object(r.a)(C,2),R=T[0],M=T[1];return Object(n.useEffect)((function(){M(v)}),[v]),console.log("totla:",v),l.a.createElement(i.a,null,l.a.createElement(u.a,null,l.a.createElement(e,{style:{zIndex:1}},l.a.createElement(E,{setPageTopRated:s,setpagination:M,total_pages_topRates:v,total_pages_upcoming:O,total_pages_top_tv:S,total_popular_tv:x})),l.a.createElement(a,null,l.a.createElement(m.a,{path:"/",exact:!0},l.a.createElement(K,{pageTopRated:o,setPageTopRated:s})),l.a.createElement(m.c,null,l.a.createElement(m.a,{path:"/upcomingMovie",exact:!0},l.a.createElement(L,{pagination:o})),l.a.createElement(m.a,{path:"/topRatedTV",exact:!0},l.a.createElement(P,{pagination:o})),l.a.createElement(m.a,{path:"/popularTV",exact:!0},l.a.createElement(U,{pagination:o})),l.a.createElement(m.a,{path:"",exact:!0}),l.a.createElement(m.a,{path:"",exact:!0}),l.a.createElement(m.a,{path:"*"}))),l.a.createElement(d.a,{className:"pagination",onChange:function(e){s(e)},defaultCurrent:1,total:R,current:o,defaultPageSize:R})))};t(240),t(241),t(242);o.a.render(l.a.createElement(z,null),document.getElementById("root"))},82:function(e,a,t){}},[[150,1,2]]]);
//# sourceMappingURL=main.7a5a57af.chunk.js.map