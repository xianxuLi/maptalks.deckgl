(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{0:function(e,t){},1:function(e,t){},Al62:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o}));var r=function(e,t){if(void 0===t&&(t={}),!e)return null;function n(e){}e.addEventListener("webglcontextcreationerror",n,!1);var r=e.getContext("webgl2",t);return(r=r||e.getContext("experimental-webgl2",t))||(r=(r=e.getContext("webgl",t))||e.getContext("experimental-webgl",t)),e.removeEventListener("webglcontextcreationerror",n,!1),r},i=window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI;function o(){return Math.ceil(i)||1}},DRYM:function(e,t,n){"use strict";function r(){}function i(e,t){var n=new r;if(e instanceof r)e.each((function(e,t){n.set(t,e)}));else if(Array.isArray(e)){var i,o=-1,a=e.length;if(null==t)for(;++o<a;)n.set(o,e[o]);else for(;++o<a;)n.set(t(i=e[o],o,e),i)}else if(e)for(var s in e)n.set(s,e[s]);return n}n.r(t),r.prototype=i.prototype={constructor:r,has:function(e){return"$"+e in this},get:function(e){return this["$"+e]},set:function(e,t){return this["$"+e]=t,this},remove:function(e){var t="$"+e;return t in this&&delete this[t]},clear:function(){for(var e in this)"$"===e[0]&&delete this[e]},keys:function(){var e=[];for(var t in this)"$"===t[0]&&e.push(t.slice(1));return e},values:function(){var e=[];for(var t in this)"$"===t[0]&&e.push(this[t]);return e},entries:function(){var e=[];for(var t in this)"$"===t[0]&&e.push({key:t.slice(1),value:this[t]});return e},size:function(){var e=0;for(var t in this)"$"===t[0]&&++e;return e},empty:function(){for(var e in this)if("$"===e[0])return!1;return!0},each:function(e){for(var t in this)"$"===t[0]&&e(this[t],t.slice(1),this)}};var o=i;function a(){}var s=o.prototype;a.prototype=function(e,t){var n=new a;if(e instanceof a)e.each((function(e){n.add(e)}));else if(e){var r=-1,i=e.length;if(null==t)for(;++r<i;)n.add(e[r]);else for(;++r<i;)n.add(t(e[r],r,e))}return n}.prototype={constructor:a,has:s.has,add:function(e){return this["$"+(e+="")]=e,this},remove:s.remove,clear:s.clear,values:s.keys,size:s.size,empty:s.empty,each:s.each};var u={value:function(){}};function l(){for(var e,t=0,n=arguments.length,r={};t<n;++t){if(!(e=arguments[t]+"")||e in r)throw new Error("illegal type: "+e);r[e]=[]}return new c(r)}function c(e){this._=e}function h(e,t){for(var n,r=0,i=e.length;r<i;++r)if((n=e[r]).name===t)return n.value}function f(e,t,n){for(var r=0,i=e.length;r<i;++r)if(e[r].name===t){e[r]=u,e=e.slice(0,r).concat(e.slice(r+1));break}return null!=n&&e.push({name:t,value:n}),e}c.prototype=l.prototype={constructor:c,on:function(e,t){var n,r=this._,i=function(e,t){return e.trim().split(/^|\s+/).map((function(e){var n="",r=e.indexOf(".");if(r>=0&&(n=e.slice(r+1),e=e.slice(0,r)),e&&!t.hasOwnProperty(e))throw new Error("unknown type: "+e);return{type:e,name:n}}))}(e+"",r),o=-1,a=i.length;if(!(arguments.length<2)){if(null!=t&&"function"!=typeof t)throw new Error("invalid callback: "+t);for(;++o<a;)if(n=(e=i[o]).type)r[n]=f(r[n],e.name,t);else if(null==t)for(n in r)r[n]=f(r[n],e.name,null);return this}for(;++o<a;)if((n=(e=i[o]).type)&&(n=h(r[n],e.name)))return n},copy:function(){var e={},t=this._;for(var n in t)e[n]=t[n].slice();return new c(e)},call:function(e,t){if((n=arguments.length-2)>0)for(var n,r,i=new Array(n),o=0;o<n;++o)i[o]=arguments[o+2];if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(o=0,n=(r=this._[e]).length;o<n;++o)r[o].value.apply(t,i)},apply:function(e,t,n){if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(var r=this._[e],i=0,o=r.length;i<o;++i)r[i].value.apply(t,n)}};var d=l,g=function(e,t){var n,r,i,a,s=d("beforesend","progress","load","error"),u=o(),l=new XMLHttpRequest,c=null,h=null,f=0;function g(e){var t,r=l.status;if(!r&&function(e){var t=e.responseType;return t&&"text"!==t?e.response:e.responseText}(l)||r>=200&&r<300||304===r){if(i)try{t=i.call(n,l)}catch(e){return void s.call("error",n,e)}else t=l;s.call("load",n,t)}else s.call("error",n,e)}if("undefined"==typeof XDomainRequest||"withCredentials"in l||!/^(http(s)?:)?\/\//.test(e)||(l=new XDomainRequest),"onload"in l?l.onload=l.onerror=l.ontimeout=g:l.onreadystatechange=function(e){l.readyState>3&&g(e)},l.onprogress=function(e){s.call("progress",n,e)},n={header:function(e,t){return e=(e+"").toLowerCase(),arguments.length<2?u.get(e):(null==t?u.remove(e):u.set(e,t+""),n)},mimeType:function(e){return arguments.length?(r=null==e?null:e+"",n):r},responseType:function(e){return arguments.length?(a=e,n):a},timeout:function(e){return arguments.length?(f=+e,n):f},user:function(e){return arguments.length<1?c:(c=null==e?null:e+"",n)},password:function(e){return arguments.length<1?h:(h=null==e?null:e+"",n)},response:function(e){return i=e,n},get:function(e,t){return n.send("GET",e,t)},post:function(e,t){return n.send("POST",e,t)},send:function(t,i,o){return l.open(t,e,!0,c,h),null==r||u.has("accept")||u.set("accept",r+",*/*"),l.setRequestHeader&&u.each((function(e,t){l.setRequestHeader(t,e)})),null!=r&&l.overrideMimeType&&l.overrideMimeType(r),null!=a&&(l.responseType=a),f>0&&(l.timeout=f),null==o&&"function"==typeof i&&(o=i,i=null),null!=o&&1===o.length&&(o=function(e){return function(t,n){e(null==t?n:null)}}(o)),null!=o&&n.on("error",o).on("load",(function(e){o(null,e)})),s.call("beforesend",n,l),l.send(null==i?null:i),n},abort:function(){return l.abort(),n},on:function(){var e=s.on.apply(s,arguments);return e===s?n:e}},null!=t){if("function"!=typeof t)throw new Error("invalid callback: "+t);return n.get(t)}return n},p=function(e,t){return function(n,r){var i=g(n).mimeType(e).response(t);if(null!=r){if("function"!=typeof r)throw new Error("invalid callback: "+r);return i.get(r)}return i}},v=p("text/html",(function(e){return document.createRange().createContextualFragment(e.responseText)})),y=p("application/json",(function(e){return JSON.parse(e.responseText)})),m=p("text/plain",(function(e){return e.responseText})),w=p("application/xml",(function(e){var t=e.responseXML;if(!t)throw new Error("parse error");return t})),L={},b={},C=34,x=10,R=13;function S(e){return new Function("d","return {"+e.map((function(e,t){return JSON.stringify(e)+": d["+t+"]"})).join(",")+"}")}var M=function(e){var t=new RegExp('["'+e+"\n\r]"),n=e.charCodeAt(0);function r(e,t){var r,i=[],o=e.length,a=0,s=0,u=o<=0,l=!1;function c(){if(u)return b;if(l)return l=!1,L;var t,r,i=a;if(e.charCodeAt(i)===C){for(;a++<o&&e.charCodeAt(a)!==C||e.charCodeAt(++a)===C;);return(t=a)>=o?u=!0:(r=e.charCodeAt(a++))===x?l=!0:r===R&&(l=!0,e.charCodeAt(a)===x&&++a),e.slice(i+1,t-1).replace(/""/g,'"')}for(;a<o;){if((r=e.charCodeAt(t=a++))===x)l=!0;else if(r===R)l=!0,e.charCodeAt(a)===x&&++a;else if(r!==n)continue;return e.slice(i,t)}return u=!0,e.slice(i,o)}for(e.charCodeAt(o-1)===x&&--o,e.charCodeAt(o-1)===R&&--o;(r=c())!==b;){for(var h=[];r!==L&&r!==b;)h.push(r),r=c();t&&null==(h=t(h,s++))||i.push(h)}return i}function i(t){return t.map(o).join(e)}function o(e){return null==e?"":t.test(e+="")?'"'+e.replace(/"/g,'""')+'"':e}return{parse:function(e,t){var n,i,o=r(e,(function(e,r){if(n)return n(e,r-1);i=e,n=t?function(e,t){var n=S(e);return function(r,i){return t(n(r),i,e)}}(e,t):S(e)}));return o.columns=i||[],o},parseRows:r,format:function(t,n){return null==n&&(n=function(e){var t=Object.create(null),n=[];return e.forEach((function(e){for(var r in e)r in t||n.push(t[r]=r)})),n}(t)),[n.map(o).join(e)].concat(t.map((function(t){return n.map((function(e){return o(t[e])})).join(e)}))).join("\n")},formatRows:function(e){return e.map(i).join("\n")}}},P=M(","),k=P.parse,A=(P.parseRows,P.format,P.formatRows,M("\t")),E=A.parse,_=(A.parseRows,A.format,A.formatRows,function(e,t){return function(n,r,i){arguments.length<3&&(i=r,r=null);var o=g(n).mimeType(e);return o.row=function(e){return arguments.length?o.response(function(e,t){return function(n){return e(n.responseText,t)}}(t,r=e)):r},o.row(r),i?o.get(i):o}}),O=_("text/csv",k),F=_("text/tab-separated-values",E);n.d(t,"request",(function(){return g})),n.d(t,"html",(function(){return v})),n.d(t,"json",(function(){return y})),n.d(t,"text",(function(){return m})),n.d(t,"xml",(function(){return w})),n.d(t,"csv",(function(){return O})),n.d(t,"tsv",(function(){return F}))},QBNG:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),i=n("tjUo"),o=n("cwYr"),a=n("aw+z"),s=n("VIqg"),u=n("7GCR"),l=n("Al62");function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var d=Object(a.a)().domain([0,4,8,12,20,32,52,84,136,220]).range([[26,152,80],[102,189,99],[166,217,106],[217,239,139],[255,255,191],[254,224,139],[253,174,97],[244,109,67],[215,48,39],[168,0,0]]),g=Object(s.a)().clamp(!0).domain([0,200]).range([10,2e3]),p=function(e){function t(t,n){var r;return f(h(r=e.call(this,t,n)||this),"_aggregateAccidents",(function(e){var t={},n={};return e&&e.forEach((function(e){var i=t[e.year]=t[e.year]||{},o=n[e.year]=n[e.year]||{},a=r.getKey(e);i[a]=e.incidents,o[a]=e.fatalities})),{incidents:t,fatalities:n}})),f(h(r),"_getLineColor",(function(e,t){if(!t)return[200,200,200];var n=(t[r.getKey(e.properties)]||0)/e.properties.length*1e3;return d(n)})),f(h(r),"_getLineWidth",(function(e,t){if(!t)return 10;var n=(t[r.getKey(e.properties)]||0)/e.properties.length*1e3;return g(n)})),f(h(r),"formatRow",(function(e){return c({},e,{incidents:Number(e.incidents),fatalities:Number(e.fatalities)})})),f(h(r),"setRef",(function(e){void 0===e&&(e=null),r.container=e})),r.state={zoom:14,fov:0,pitch:0,bearing:0},r.container=null,r.map=null,r.inited=!1,r.deckLayer=null,r}!function(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this;this.map=new u.Map(this.container,{center:[-100,38],zoom:6.6,pitch:40.5,bearing:-27.396674584323023,centerCross:!0,spatialReference:{projection:"EPSG:3857"},baseLayer:new u.TileLayer("tile",{urlTemplate:"https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}"+(Object(l.b)()>1.5?"@2x":"")+"?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejh2N21nMzAxMmQzMnA5emRyN2lucW0ifQ.jSE-g2vsn48Ry928pqylcg",spatialReference:{projection:"EPSG:3857"}})}),n("DRYM").csv("https://raw.githubusercontent.com/uber-common/deck.gl-data/master/examples/highway/accidents.csv",this.formatRow,(function(t,n){var r=n[0].year,a=n;if(!t){var s=e._aggregateAccidents(a),u=s.fatalities,l=s.incidents;e.deckLayer=new i.a("deck",{layers:[new o.a({id:"geojson",data:"https://raw.githubusercontent.com/uber-common/deck.gl-data/master/examples/highway/roads.json",opacity:1,stroked:!1,filled:!1,lineWidthMinPixels:.5,parameters:{depthTest:!1},getLineColor:function(t){return e._getLineColor(t,u[r])},getLineWidth:function(t){return e._getLineWidth(t,l[r])},pickable:!0,updateTriggers:{getLineColor:{year:r},getLineWidth:{year:r}},transitions:{getLineColor:1e3,getLineWidth:1e3}})]},{animation:!1,renderer:"webgl"}),e.map.addLayer(e.deckLayer)}}))},a.componentWillUnmount=function(){this.deckLayer&&this.deckLayer.remove()},a.getKey=function(e){return e.state+"-"+e.type+"-"+e.id},a.render=function(){return r.createElement("div",{ref:this.setRef,className:"map-content"})},t}(r.Component);t.default=p},"aw+z":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("h8nK"),i=n("1Ix/");function o(){var e,t=[.5],n=[0,1],a=1;function s(i){return i<=i?n[Object(r.a)(t,i,0,a)]:e}return s.domain=function(e){return arguments.length?(t=Array.from(e),a=Math.min(t.length,n.length-1),s):t.slice()},s.range=function(e){return arguments.length?(n=Array.from(e),a=Math.min(t.length,n.length-1),s):n.slice()},s.invertExtent=function(e){var r=n.indexOf(e);return[t[r-1],t[r]]},s.unknown=function(t){return arguments.length?(e=t,s):e},s.copy=function(){return o().domain(t).range(n).unknown(e)},i.a.apply(s,arguments)}},cwYr:function(e,t,n){"use strict";var r=n("1OyB"),i=n("vuIU"),o=n("md7G"),a=n("foSv"),s=n("Ji7U"),u=n("5lV4"),l=n("+7vx"),c=n("ctuC"),h=n("2tSu"),f=n("KHNG"),d=n("Im0j"),g=n("Jh/b");function p(e,t){for(var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r={pointFeatures:[],lineFeatures:[],polygonFeatures:[],polygonOutlineFeatures:[]},i=n.startRow,o=void 0===i?0:i,a=n.endRow,s=void 0===a?e.length:a,u=o;u<s;u++){var l=e[u];g.a.assert(l&&l.geometry,"GeoJSON does not have geometry");var c=l.geometry;if("GeometryCollection"===c.type){g.a.assert(Array.isArray(c.geometries),"GeoJSON does not have geometries array");for(var h=c.geometries,f=0;f<h.length;f++)v(h[f],r,t,l,u)}else v(c,r,t,l,u)}return r}function v(e,t,n,r,i){var o=e.type,a=e.coordinates,s=t.pointFeatures,u=t.lineFeatures,l=t.polygonFeatures,c=t.polygonOutlineFeatures;if(function(e,t){var n=y[e];for(g.a.assert(n,"Unknown GeoJSON type ".concat(e));t&&--n>0;)t=t[0];return t&&Number.isFinite(t[0])}(o,a))switch(o){case"Point":s.push(n({geometry:e},r,i));break;case"MultiPoint":a.forEach((function(e){s.push(n({geometry:{type:"Point",coordinates:e}},r,i))}));break;case"LineString":u.push(n({geometry:e},r,i));break;case"MultiLineString":a.forEach((function(e){u.push(n({geometry:{type:"LineString",coordinates:e}},r,i))}));break;case"Polygon":l.push(n({geometry:e},r,i)),a.forEach((function(e){c.push(n({geometry:{type:"LineString",coordinates:e}},r,i))}));break;case"MultiPolygon":a.forEach((function(e){l.push(n({geometry:{type:"Polygon",coordinates:e}},r,i)),e.forEach((function(e){c.push(n({geometry:{type:"LineString",coordinates:e}},r,i))}))}))}else g.a.warn("".concat(o," coordinates are malformed"))()}var y={Point:1,MultiPoint:2,LineString:2,MultiLineString:3,Polygon:3,MultiPolygon:4};n.d(t,"a",(function(){return b}));var m=new h.a,w={stroked:!0,filled:!0,extruded:!1,wireframe:!1,lineWidthUnits:"meters",lineWidthScale:1,lineWidthMinPixels:0,lineWidthMaxPixels:Number.MAX_SAFE_INTEGER,lineJointRounded:!1,lineMiterLimit:4,elevationScale:1,pointRadiusScale:1,pointRadiusMinPixels:0,pointRadiusMaxPixels:Number.MAX_SAFE_INTEGER,lineDashJustified:!1,getLineColor:{type:"accessor",value:[0,0,0,255]},getFillColor:{type:"accessor",value:[0,0,0,255]},getRadius:{type:"accessor",value:1},getLineWidth:{type:"accessor",value:1},getLineDashArray:{type:"accessor",value:[0,0]},getElevation:{type:"accessor",value:1e3},material:m};function L(e){return e.geometry.coordinates}var b=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(a.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(i.a)(t,[{key:"initializeState",value:function(){this.state={features:{}}}},{key:"updateState",value:function(e){var t=e.props,n=e.changeFlags;if(n.dataChanged){var r=function(e){if(Array.isArray(e))return e;switch(g.a.assert(e.type,"GeoJSON does not have type"),e.type){case"Feature":return[e];case"FeatureCollection":return g.a.assert(Array.isArray(e.features),"GeoJSON does not have features array"),e.features;default:return[{geometry:e}]}}(t.data),i=this.getSubLayerRow.bind(this);if(Array.isArray(n.dataChanged)){var o=this.state.features,a={},s={};for(var u in o)a[u]=o[u].slice(),s[u]=[];var l=!0,c=!1,h=void 0;try{for(var f,v=n.dataChanged[Symbol.iterator]();!(l=(f=v.next()).done);l=!0){var y=f.value,m=p(r,i,y);for(var w in o)s[w].push(Object(d.a)({data:a[w],getIndex:function(e){return e.__source.index},dataRange:y,replace:m[w]}))}}catch(e){c=!0,h=e}finally{try{l||null==v.return||v.return()}finally{if(c)throw h}}this.setState({features:a,featuresDiff:s})}else this.setState({features:p(r,i),featuresDiff:{}})}}},{key:"renderLayers",value:function(){var e=this.state,t=e.features,n=e.featuresDiff,r=t.pointFeatures,i=t.lineFeatures,o=t.polygonFeatures,a=t.polygonOutlineFeatures,s=this.props,u=s.stroked,h=s.filled,d=s.extruded,g=s.wireframe,p=s.material,v=s.transitions,y=this.props,m=y.lineWidthUnits,w=y.lineWidthScale,b=y.lineWidthMinPixels,C=y.lineWidthMaxPixels,x=y.lineJointRounded,R=y.lineMiterLimit,S=y.pointRadiusScale,M=y.pointRadiusMinPixels,P=y.pointRadiusMaxPixels,k=y.elevationScale,A=y.lineDashJustified,E=this.props,_=E.getLineColor,O=E.getFillColor,F=E.getRadius,D=E.getLineWidth,j=E.getLineDashArray,W=E.getElevation,T=E.updateTriggers,N=this.getSubLayerClass("polygons-fill",f.a),I=this.getSubLayerClass("polygons-stroke",c.a),J=this.getSubLayerClass("line-strings",c.a),z=this.getSubLayerClass("points",l.a),G=this.shouldRenderSubLayer("polygons-fill",o)&&new N({_dataDiff:n.polygonFeatures&&function(){return n.polygonFeatures},extruded:d,elevationScale:k,filled:h,wireframe:g,material:p,getElevation:this.getSubLayerAccessor(W),getFillColor:this.getSubLayerAccessor(O),getLineColor:this.getSubLayerAccessor(_),transitions:v&&{getPolygon:v.geometry,getElevation:v.getElevation,getFillColor:v.getFillColor,getLineColor:v.getLineColor}},this.getSubLayerProps({id:"polygons-fill",updateTriggers:{getElevation:T.getElevation,getFillColor:T.getFillColor,getLineColor:T.getLineColor}}),{data:o,getPolygon:L});return[!d&&G,!d&&u&&this.shouldRenderSubLayer("polygons-stroke",a)&&new I({_dataDiff:n.polygonOutlineFeatures&&function(){return n.polygonOutlineFeatures},widthUnits:m,widthScale:w,widthMinPixels:b,widthMaxPixels:C,rounded:x,miterLimit:R,dashJustified:A,getColor:this.getSubLayerAccessor(_),getWidth:this.getSubLayerAccessor(D),getDashArray:this.getSubLayerAccessor(j),transitions:v&&{getPath:v.geometry,getColor:v.getLineColor,getWidth:v.getLineWidth}},this.getSubLayerProps({id:"polygons-stroke",updateTriggers:{getColor:T.getLineColor,getWidth:T.getLineWidth,getDashArray:T.getLineDashArray}}),{data:a,getPath:L}),this.shouldRenderSubLayer("linestrings",i)&&new J({_dataDiff:n.lineFeatures&&function(){return n.lineFeatures},widthUnits:m,widthScale:w,widthMinPixels:b,widthMaxPixels:C,rounded:x,miterLimit:R,dashJustified:A,getColor:this.getSubLayerAccessor(_),getWidth:this.getSubLayerAccessor(D),getDashArray:this.getSubLayerAccessor(j),transitions:v&&{getPath:v.geometry,getColor:v.getLineColor,getWidth:v.getLineWidth}},this.getSubLayerProps({id:"line-strings",updateTriggers:{getColor:T.getLineColor,getWidth:T.getLineWidth,getDashArray:T.getLineDashArray}}),{data:i,getPath:L}),this.shouldRenderSubLayer("points",r)&&new z({_dataDiff:n.pointFeatures&&function(){return n.pointFeatures},stroked:u,filled:h,radiusScale:S,radiusMinPixels:M,radiusMaxPixels:P,lineWidthUnits:m,lineWidthScale:w,lineWidthMinPixels:b,lineWidthMaxPixels:C,getFillColor:this.getSubLayerAccessor(O),getLineColor:this.getSubLayerAccessor(_),getRadius:this.getSubLayerAccessor(F),getLineWidth:this.getSubLayerAccessor(D),transitions:v&&{getPosition:v.geometry,getFillColor:v.getFillColor,getLineColor:v.getLineColor,getRadius:v.getRadius,getLineWidth:v.getLineWidth}},this.getSubLayerProps({id:"points",updateTriggers:{getFillColor:T.getFillColor,getLineColor:T.getLineColor,getRadius:T.getRadius,getLineWidth:T.getLineWidth}}),{data:r,getPosition:L}),d&&G]}}]),t}(u.a);b.layerName="GeoJsonLayer",b.defaultProps=w},tjUo:function(e,t,n){"use strict";var r=n("zGfa"),i=n("mybv"),o=n("7GCR"),a=n("Al62");function s(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var u={registerEvents:!0,renderer:"webgl",doubleBuffer:!0,glOptions:{alpha:!0,depth:!0,antialias:!0,stencil:!0},forceRenderOnMoving:!0,forceRenderOnZooming:!0},l={useDevicePixels:!0,autoResizeDrawingBuffer:!1},c=12756274*Math.PI/(256*Math.pow(2,20));function h(e){var t=e.getResolution(),n=e.getMaxNativeZoom(),r=e.getCenter(),i=e.getPitch(),o=e.getBearing();return{latitude:r.y,longitude:r.x,zoom:function(e){return 19-Math.log(e/c)/Math.LN2}(t),bearing:o,pitch:i,maxZoom:n}}var f=function(e){function t(t,n,r){var i;return void 0===r&&(r={}),(i=e.call(this,t,Object.assign(u,r))||this).props=Object.assign({},l,n),i._isLoad=!1,i}s(t,e);var n=t.prototype;return n.setProps=function(e){return Object.assign(this.props,e,{id:this.id}),this},n.getProps=function(){return this.props},n.prepareToDraw=function(){},n.draw=function(){this.renderLayer()},n.drawOnInteracting=function(){this.renderLayer()},n.onAdd=function(){},n.onMouseClick=function(e){var t={};e.offsetCenter||(t={type:"click",offsetCenter:e.containerPoint,srcEvent:e.domEvent}),this.deck._onEvent(t)},n.onMouseMove=function(e){var t={};e.offsetCenter||(t={offsetCenter:e.containerPoint,srcEvent:e.domEvent}),this.deck._onPointerMove(t)},n.onMouseDown=function(e){var t={};e.offsetCenter||(t={offsetCenter:e.containerPoint,srcEvent:e.domEvent}),this.deck._onPointerDown(t)},n.onRemove=function(){},n.renderLayer=function(){var e=this,t=this.getMap(),n=this._getRenderer();if(n&&t){var r=this.props._customRender,o=n.gl,a=Object.assign(this.props,{gl:o,width:!1,height:!1,viewState:h(t),_customRender:function(){r&&r()},parameters:{depthMask:!0,depthTest:!0,blendFunc:[o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA],blendEquation:o.FUNC_ADD},userData:{isExternal:!1,layers:new Set},onLoad:function(){e._isLoad=!0,e._drawLayer(t)}});this.deck||this._isLoad||(this.deck=new i.a(a),this.options.registerEvents&&(t.on("mousemove",this.onMouseMove,this),t.on("mousedown",this.onMouseDown,this),t.on("click",this.onMouseClick,this))),this._isLoad&&(this.deck.setProps(a),this.deck.props.userData.isExternal=!0,this._drawLayer(t)),n.completeRender()}},n._drawLayer=function(e){var t=this.deck.props.userData.currentViewport;t||(t=function(e,t,n){return void 0===n&&(n=!0),new r.a(Object.assign({x:0,y:0,width:e.width,height:e.height},h(t),n?{nearZMultiplier:e.height?1/e.height:1,farZMultiplier:1.01}:{nearZMultiplier:.1,farZMultiplier:10}))}(this.deck,e,!0),this.deck.props.userData.currentViewport=t),this.deck.layerManager&&this.deck._drawLayers("maptalks-deck-repaint",{viewports:[t],clearCanvas:!1})},n.remove=function(){var t=this.getMap();this.deck&&t&&(this.options.registerEvents&&(t.off("mousemove",this.onMouseMove,this),t.off("mousedown",this.onMouseDown,this),t.off("click",this.onMouseClick,this)),this.deck.finalize(),delete this.deck),e.prototype.remove.call(this)},t}(o.CanvasLayer),d=function(e){function t(){return e.apply(this,arguments)||this}s(t,e);var n=t.prototype;return n.draw=function(){this.prepareCanvas(),this.prepareDrawContext(),this._drawLayer()},n.needToRedraw=function(){var t=this.getMap();return!(t.isZooming()&&!t.getPitch())&&e.prototype.needToRedraw.call(this)},n.createCanvas=function(){if(!this.canvas&&!this.gl){var e=this.getMap(),t=e.getSize(),n=(e.getDevicePixelRatio?e.getDevicePixelRatio():Object(a.b)())||1,r=[n*t.width,n*t.height],i=r[0],s=r[1];this.canvas=o.Canvas.createCanvas(i,s,e.CanvasClass),this.canvas.style&&(this.canvas.style.width=t+"px",this.canvas.style.height=t+"px"),this.gl=Object(a.a)(this.canvas,this.layer.options.glOptions),this.onCanvasCreate(),this.layer.fire("canvascreate",{context:this.context,gl:this.gl})}},n.resizeCanvas=function(e){if(this.canvas){var t=this.getMap(),n=(t.getDevicePixelRatio?t.getDevicePixelRatio():Object(a.b)())||1,r=e||t.getSize();this.canvas.width===r.width*n&&this.canvas.height===r.height*n||(this.canvas.height=n*r.height,this.canvas.width=n*r.width,this.gl.viewport(0,0,this.canvas.width,this.canvas.height))}},n.clearCanvas=function(){this.canvas&&(this.gl.clear(this.gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT),this.context&&this.context.clearRect(0,0,this.canvas.width,this.canvas.height))},n.requestMapToRender=function(){this.setToRedraw()},n.prepareCanvas=function(){this.canvas?this.clearCanvas():this.createCanvas();var t=e.prototype.prepareCanvas.call(this);return this.layer.fire("renderstart",{context:this.context,gl:this.gl}),t},n.onZoomStart=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];e.prototype.onZoomStart.call(this,n)},n.onZoomEnd=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];e.prototype.onZoomEnd.call(this,n)},n.remove=function(){e.prototype.remove.call(this)},t}(o.renderer.CanvasLayerRenderer);f.registerRenderer("webgl",d),t.a=f}}]);