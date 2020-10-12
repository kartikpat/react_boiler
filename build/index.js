!function(e){var n={};function t(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,t),a.l=!0,a.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)t.d(r,a,function(n){return e[n]}.bind(null,a));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=11)}([function(e,n){e.exports=require("react")},function(e,n){e.exports=require("styled-components")},function(e,n){e.exports=require("react-redux")},function(e,n){e.exports=require("react-router-config")},function(e,n){e.exports=require("redux")},function(e,n){e.exports=require("express")},function(e,n){e.exports=require("react-router-dom")},function(e,n){e.exports=require("react-dom/server")},function(e,n){e.exports=require("redux-thunk")},function(e,n){e.exports=require("history")},function(e,n){e.exports=require("axios")},function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),i=t(5),c=t.n(i),l=t(7),o=t.n(l),u=t(1),s=t.n(u),f=t(2),p=t(6),d=t(3);function m(){var e=function(e,n){n||(n=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(["\n    * {\n        box-sizing: border-box;\n    }\n    body {\n        margin: 0;\n        padding: 0;\n        background: #e8e8e8;\n        font-family: Open-Sans, Helvetica, Sans-Serif;\n    }\n"]);return m=function(){return e},e}var v=Object(u.createGlobalStyle)(m()),b=function(e){var n=e.store,t=e.routes,r=e.location,i=e.context,c=void 0===i?{}:i;return a.a.createElement(f.Provider,{store:n},a.a.createElement(p.StaticRouter,{location:r,context:c},a.a.createElement(v,null),a.a.createElement(p.Switch,null,Object(d.renderRoutes)(t))))},g=t(4),h=t(8),x=t.n(h),y="GET_LAUNCHES_SUCCESS",O="GET_LAUNCHES_FAIL",E="GET_LAUNCHES_REQUESTING",w="SET_SELECTED_FILTERS",j=[{id:"launch_year",label:"Launch Year",values:[2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020]},{id:"successful_launch",label:"Successful Launch",values:["True","False"]},{id:"successful_landing",label:"Successful Landing",values:["True","False"]}],S="successful_launch",P="successful_landing";function _(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function k(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?_(Object(t),!0).forEach((function(n){T(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):_(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function T(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var F={alertMsg:null,launches:null,selectedFilters:{}},L={spaceXLaunches:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case y:return k(k({},e),{},{launches:n.payload,alertMsg:null});case O:return k(k({},e),{},{alertMsg:n.payload});case E:return k(k({},e),{},{alertMsg:null});case w:return k(k({},e),{},{selectedFilters:k(k({},e.selectedFilters),{},T({},n.payload.id,n.payload.value))});default:return e}}},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(g.createStore)(Object(g.combineReducers)(L),e,Object(g.applyMiddleware)(x.a))},z=t(9),D=t(10),N=t.n(D);function M(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function q(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?M(Object(t),!0).forEach((function(n){R(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):M(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function R(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function A(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var B=function(e){var n=e.limit,t=void 0===n?100:n,r=e.isServer,a=void 0===r||r,i=A(e,["limit","isServer"]);return function(e){var n=q({limit:t},i);if(i[P]&&(n[P]="True"===i[P]),i[S]&&(n[S]="True"===i[S]),!a){var r=Object(z.createBrowserHistory)(),c=new URLSearchParams(n).toString();r.push("".concat(window.location.pathname,"?").concat(c))}return e({type:E}),N.a.get("https://api.spacexdata.com/v3/launches",{params:n}).then((function(n){e({type:y,payload:n.data})})).catch((function(n){e({type:O,payload:n})}))}};function H(){var e=G(["\n    display: flex;\n    flex-direction: row;\n    align-items: flex-end;\n    padding: 5px 0;\n\n    span {\n        display: inline-block;\n        vertical-align: top;\n    }\n"]);return H=function(){return e},e}function I(){var e=G(["\n    .pri-text {\n        font-size: 16px;\n        font-weight: bold;\n        margin-right: 5px;\n    }\n    .sec-text {\n        font-size: 14px;\n        color: #4BB7FE;\n    }\n    .title {\n        font-size: 16px;\n        color: #4BB7FE;\n        margin-bottom: 5px;\n    }\n    .mission-id-block {\n        margin-top: 15px;\n    }\n    ul {\n        margin: 10px 0; \n    }\n"]);return I=function(){return e},e}function U(){var e=G(["\n    display: flex;\n    justify-content: center;\n    background-color: #e8e8e8;\n    height: 150px;\n    margin-bottom: 20px;\n    img {\n        object-fit: cover;\n    }\n"]);return U=function(){return e},e}function X(){var e=G(["\n    display: flex;\n    background-color: #fff;\n    flex-direction: column;\n    padding: 10px;\n    width: calc(100% - 20px);\n    margin-bottom: 20px;\n    margin-right: 20px;\n\n    @media(min-width: 700px) {\n        width: calc(50% - 20px);\n    }\n\n    @media(min-width: 1024px) {\n        width: calc(25% - 20px);\n    }\n"]);return X=function(){return e},e}function G(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var Y=s.a.div(X()),J=s.a.div(U()),Q=s.a.div(I()),W=s.a.div(H()),K=function(e){var n,t,r=e.launch;return a.a.createElement(Y,null,a.a.createElement(J,null,a.a.createElement("img",{loading:"lazy",height:"150px",src:null==r||null===(n=r.links)||void 0===n?void 0:n.mission_patch_small,alt:"space shuttle with mission name ".concat(r.mission_name)})),a.a.createElement(Q,null,a.a.createElement("div",{className:"title"},"".concat(r.mission_name," #").concat(r.flight_number)),(null==r||null===(t=r.mission_id)||void 0===t?void 0:t.length)?a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"pri-text mission-id-block"},"Mission Ids:"),null==r?void 0:r.mission_id.map((function(e){return a.a.createElement("div",{key:e},a.a.createElement("ul",null,a.a.createElement("li",null,e)))}))):null,a.a.createElement(W,null,a.a.createElement("span",{className:"pri-text margin-r-5"},"Launch Year:"),a.a.createElement("span",{className:"sec-text"},null==r?void 0:r.launch_year)),a.a.createElement(W,null,a.a.createElement("span",{className:"pri-text margin-r-5"},"Successful Launch:"),a.a.createElement("span",{className:"sec-text"},(null==r?void 0:r.launch_success)?"true":"false")),a.a.createElement(W,null,a.a.createElement("span",{className:"pri-text margin-r-5"},"Successful Landing:"),a.a.createElement("span",{className:"sec-text"},(null==r?void 0:r.launch_landing)?"true":"false"))))};function V(){var e=function(e,n){n||(n=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(["\n    width: calc(50% - 5px);\n    background-color: ",";\n    color: #000;\n    padding: 5px 20px;\n    border-radius: 4px;\n    cursor: pointer;\n"]);return V=function(){return e},e}var Z=s.a.div(V(),(function(e){return e.selected?"#95C821":"#C8FE4B"})),$=function(e){var n=e.label,t=e.onClick,r=e.selected;return a.a.createElement(Z,{onClick:t,selected:r},n)};function ee(){var e=ae(["\n    display: flex;\n    flex-direction: row;\n    padding: 5px 0;\n    justify-content: space-between;\n\n    span {\n        display: inline-block;\n        vertical-align: top;\n    }\n"]);return ee=function(){return e},e}function ne(){var e=ae(["\n    font-size: 14px;\n    text-align: center;\n    border-bottom: 1px solid #4C4C4C;\n    padding: 10px 0;\n    margin-bottom: 10px;\n"]);return ne=function(){return e},e}function te(){var e=ae(["\n    font-size: 16px;\n    font-weight: bold;\n"]);return te=function(){return e},e}function re(){var e=ae(["\n    display: flex;\n    flex-direction: column;\n    background-color: #fff;\n    padding: 10px;\n    margin: 0 20px;\n    margin-bottom: 25px;\n    height: fit-content;\n"]);return re=function(){return e},e}function ae(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var ie=s.a.div(re()),ce=s.a.div(te()),le=s.a.div(ne()),oe=s.a.div(ee()),ue=function(e){var n=e.onFilterPillClick,t=e.selectedFilters;return a.a.createElement(ie,null,a.a.createElement(ce,null,"Filters"),j.map((function(e,r){return a.a.createElement("div",{key:r},a.a.createElement(le,null,e.label),e.values.reduce((function(e,n,t){return(t%2==0?e.push([n]):e[e.length-1].push(n))&&e}),[]).map((function(r,i){return a.a.createElement(oe,{key:i},r.map((function(r,i){return a.a.createElement($,{key:i,selected:!!t[e.id]&&t[e.id]===r,label:r,onClick:function(){return n(e.id,r)}})})))})))})))};function se(){var e=de(["\n    margin: 20px auto;\n    padding-left: 20px;\n    max-width: 1440px;\n"]);return se=function(){return e},e}function fe(){var e=de(["\n    display: flex;\n    flex-wrap: wrap;\n    flex: 1;\n    margin-left: 20px;\n\n    @media(min-width: 700px) {\n        margin-left: 0;\n    }\n"]);return fe=function(){return e},e}function pe(){var e=de(["\n    display: flex;\n    flex-direction: column;\n    margin: 0 auto;\n    max-width: 1440px;\n\n    @media(min-width: 700px) {\n        flex-direction: row;\n    }\n"]);return pe=function(){return e},e}function de(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var me=s.a.div(pe()),ve=s.a.div(fe()),be=s.a.h1(se()),ge=Object(f.connect)((function(e){return{alertMsg:e.spaceXLaunches.alertMsg,launches:e.spaceXLaunches.launches,selectedFilters:e.spaceXLaunches.selectedFilters}}),(function(e){return{onFilterPillClick:function(n,t){return e(function(e,n){return function(t,r){t({type:"SET_SELECTED_FILTERS",payload:{id:e,value:n}});var a=r().spaceXLaunches.selectedFilters;t(B(q(q({isServer:!1},a),{},R({},e,n))))}}(n,t))}}}))((function(e){var n=e.launches,t=e.alertMsg,r=e.onFilterPillClick,i=e.selectedFilters;return a.a.createElement(a.a.Fragment,null,a.a.createElement(be,null,"SpaceX Launch Programs"),a.a.createElement(me,null,a.a.createElement(ue,{onFilterPillClick:function(e,n){return r(e,n)},selectedFilters:i}),a.a.createElement(ve,null,(null==n?void 0:n.length)?n.map((function(e){return a.a.createElement(K,{launch:e,key:e.flight_number})})):"No Data",t&&alert(t))))}));var he=[{path:"/",exact:!0,component:function(e){return function(e){if(null==e)throw new TypeError("Cannot destructure undefined")}(e),a.a.createElement(ge,null)},loadData:function(e){return e(B({}))}}],xe=process.env.PORT||3006,ye=c()();ye.get("/",(function(e,n){try{var t=C();Promise.all(function(e){var n=e.path,t=e.store,r=e.routes,a=t.dispatch;return Object(d.matchRoutes)(r,n).map((function(e){var n=e.route;return n.loadData?n.loadData(a):null}))}({path:null==e?void 0:e.path,store:t,routes:he})).then((function(){var r=new u.ServerStyleSheet,i=r.interleaveWithNodeStream(o.a.renderToNodeStream(r.collectStyles(a.a.createElement(b,{store:t,routes:he,location:null==e?void 0:e.url,context:{}})))),c=t.getState();n.writeHead(200,{"Content-Type":"text/html","Transfer-Encoding":"chunked"}),n.write("<!doctype html>"),function(e){var n=e.appStream,t=e.title,r=e.preloadedState,a=e.res;a.write('<html lang="en">\n        <head>\n        <meta charset="utf-8">\n        <meta name="viewport" content="width=device-width, initial-scale=1">\n        <meta name="description" content="This is an example of a meta description. This will often show up in search results.">\n        <title>'.concat(t,'</title>\n        </head>\n        <body>\n        <div id="root">')),n.pipe(a,{end:!1}),n.on("end",(function(){a.write("</div>\n            <script>window.__PRELOADED_STATE__ = ".concat(JSON.stringify(r).replace(/</g,"\\u003c"),'<\/script>\n            <script src="bundle.js"><\/script></body>\n            </html>')),a.end()}))}({appStream:i,title:"server side rendered sapient project",preloadedState:c,res:n})})).catch((function(e){throw console.log(e),new Error(e)}))}catch(e){return console.error("Something went wrong:",e),n.status(500).send("Oops, better luck next time!")}})),ye.use(c.a.static("./dist")),ye.listen(xe,(function(){console.log("Server is listening on port ".concat(xe))}))}]);