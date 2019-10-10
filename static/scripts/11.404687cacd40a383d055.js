(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"+7vx":function(e,t,i){"use strict";var n=i("1OyB"),o=i("vuIU"),r=i("md7G"),a=i("foSv"),s=i("ReuC"),l=i("Ji7U"),c=i("K7jV"),u=i("S2EH"),d=i("C7oE");i.d(t,"a",(function(){return p}));var h=[0,0,0,255],g={radiusScale:{type:"number",min:0,value:1},radiusMinPixels:{type:"number",min:0,value:0},radiusMaxPixels:{type:"number",min:0,value:Number.MAX_SAFE_INTEGER},lineWidthUnits:"meters",lineWidthScale:{type:"number",min:0,value:1},lineWidthMinPixels:{type:"number",min:0,value:0},lineWidthMaxPixels:{type:"number",min:0,value:Number.MAX_SAFE_INTEGER},stroked:!1,filled:!0,getPosition:{type:"accessor",value:function(e){return e.position}},getRadius:{type:"accessor",value:1},getFillColor:{type:"accessor",value:h},getLineColor:{type:"accessor",value:h},getLineWidth:{type:"accessor",value:1},strokeWidth:{deprecatedFor:"getLineWidth"},outline:{deprecatedFor:"stroked"},getColor:{deprecatedFor:["getFillColor","getLineColor"]}},p=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(a.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(o.a)(t,[{key:"getShaders",value:function(e){return Object(s.a)(Object(a.a)(t.prototype),"getShaders",this).call(this,{vs:"#define SHADER_NAME scatterplot-layer-vertex-shader\n\nattribute vec3 positions;\n\nattribute vec3 instancePositions;\nattribute vec2 instancePositions64xyLow;\nattribute float instanceRadius;\nattribute float instanceLineWidths;\nattribute vec4 instanceFillColors;\nattribute vec4 instanceLineColors;\nattribute vec3 instancePickingColors;\n\nuniform float opacity;\nuniform float radiusScale;\nuniform float radiusMinPixels;\nuniform float radiusMaxPixels;\nuniform float lineWidthScale;\nuniform float lineWidthMinPixels;\nuniform float lineWidthMaxPixels;\nuniform float stroked;\nuniform bool filled;\n\nvarying vec4 vFillColor;\nvarying vec4 vLineColor;\nvarying vec2 unitPosition;\nvarying float innerUnitRadius;\n\nvoid main(void) {\n  geometry.worldPosition = instancePositions;\n  float outerRadiusPixels = clamp(\n    project_size_to_pixel(radiusScale * instanceRadius),\n    radiusMinPixels, radiusMaxPixels\n  );\n  float lineWidthPixels = clamp(\n    project_size_to_pixel(lineWidthScale * instanceLineWidths),\n    lineWidthMinPixels, lineWidthMaxPixels\n  );\n  outerRadiusPixels += stroked * lineWidthPixels / 2.0;\n  unitPosition = positions.xy;\n  geometry.uv = unitPosition;\n\n  innerUnitRadius = 1.0 - stroked * lineWidthPixels / outerRadiusPixels;\n  \n  vec3 offset = positions * project_pixel_size(outerRadiusPixels);\n  DECKGL_FILTER_SIZE(offset, geometry);\n  gl_Position = project_position_to_clipspace(instancePositions, instancePositions64xyLow, offset, geometry.position);\n  DECKGL_FILTER_GL_POSITION(gl_Position, geometry);\n  vFillColor = vec4(instanceFillColors.rgb, instanceFillColors.a * opacity);\n  DECKGL_FILTER_COLOR(vFillColor, geometry);\n  vLineColor = vec4(instanceLineColors.rgb, instanceLineColors.a * opacity);\n  DECKGL_FILTER_COLOR(vLineColor, geometry);\n  picking_setPickingColor(instancePickingColors);\n}\n",fs:"#define SHADER_NAME scatterplot-layer-fragment-shader\n\nprecision highp float;\n\nuniform bool filled;\n\nvarying vec4 vFillColor;\nvarying vec4 vLineColor;\nvarying vec2 unitPosition;\nvarying float innerUnitRadius;\n\nvoid main(void) {\n  geometry.uv = unitPosition;\n\n  float distToCenter = length(unitPosition);\n\n  if (distToCenter > 1.0) {\n    discard;\n  } \n  if (distToCenter > innerUnitRadius) {\n    gl_FragColor = vLineColor;\n  } else if (filled) {\n    gl_FragColor = vFillColor;\n  } else {\n    discard;\n  }\n\n  DECKGL_FILTER_COLOR(gl_FragColor, geometry);\n}\n",modules:["project32","picking"]})}},{key:"initializeState",value:function(){this.getAttributeManager().addInstanced({instancePositions:{size:3,type:5130,fp64:this.use64bitPositions(),transition:!0,accessor:"getPosition"},instanceRadius:{size:1,transition:!0,accessor:"getRadius",defaultValue:1},instanceFillColors:{size:this.props.colorFormat.length,transition:!0,normalized:!0,type:5121,accessor:"getFillColor",defaultValue:[0,0,0,255]},instanceLineColors:{size:this.props.colorFormat.length,transition:!0,normalized:!0,type:5121,accessor:"getLineColor",defaultValue:[0,0,0,255]},instanceLineWidths:{size:1,transition:!0,accessor:"getLineWidth",defaultValue:1}})}},{key:"updateState",value:function(e){var i=e.props,n=e.oldProps,o=e.changeFlags;if(Object(s.a)(Object(a.a)(t.prototype),"updateState",this).call(this,{props:i,oldProps:n,changeFlags:o}),o.extensionsChanged){var r=this.context.gl;this.state.model&&this.state.model.delete(),this.setState({model:this._getModel(r)}),this.getAttributeManager().invalidateAll()}}},{key:"draw",value:function(e){var t=e.uniforms,i=this.context.viewport,n=this.props,o=n.radiusScale,r=n.radiusMinPixels,a=n.radiusMaxPixels,s=n.stroked,l=n.filled,c=n.lineWidthUnits,u=n.lineWidthScale,d=n.lineWidthMinPixels,h=n.lineWidthMaxPixels,g="pixels"===c?i.distanceScales.metersPerPixel[2]:1;this.state.model.setUniforms(Object.assign({},t,{stroked:s?1:0,filled:l,radiusScale:o,radiusMinPixels:r,radiusMaxPixels:a,lineWidthScale:u*g,lineWidthMinPixels:d,lineWidthMaxPixels:h})).draw()}},{key:"_getModel",value:function(e){return new u.a(e,Object.assign(this.getShaders(),{id:this.props.id,geometry:new d.a({drawMode:6,vertexCount:4,attributes:{positions:{size:3,value:new Float32Array([-1,-1,0,-1,1,0,1,1,0,1,-1,0])}}}),isInstanced:!0}))}}]),t}(c.a);p.layerName="ScatterplotLayer",p.defaultProps=g},0:function(e,t){},1:function(e,t){},Al62:function(e,t,i){"use strict";i.d(t,"a",(function(){return n})),i.d(t,"b",(function(){return r}));var n=function(e,t){if(void 0===t&&(t={}),!e)return null;function i(e){}e.addEventListener("webglcontextcreationerror",i,!1);var n=e.getContext("webgl2",t);return(n=n||e.getContext("experimental-webgl2",t))||(n=(n=e.getContext("webgl",t))||e.getContext("experimental-webgl",t)),e.removeEventListener("webglcontextcreationerror",i,!1),n},o=window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI;function r(){return Math.ceil(o)||1}},cwYr:function(e,t,i){"use strict";var n=i("1OyB"),o=i("vuIU"),r=i("md7G"),a=i("foSv"),s=i("Ji7U"),l=i("5lV4"),c=i("+7vx"),u=i("ctuC"),d=i("2tSu"),h=i("KHNG"),g=i("Im0j"),p=i("Jh/b");function f(e,t){for(var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n={pointFeatures:[],lineFeatures:[],polygonFeatures:[],polygonOutlineFeatures:[]},o=i.startRow,r=void 0===o?0:o,a=i.endRow,s=void 0===a?e.length:a,l=r;l<s;l++){var c=e[l];p.a.assert(c&&c.geometry,"GeoJSON does not have geometry");var u=c.geometry;if("GeometryCollection"===u.type){p.a.assert(Array.isArray(u.geometries),"GeoJSON does not have geometries array");for(var d=u.geometries,h=0;h<d.length;h++)v(d[h],n,t,c,l)}else v(u,n,t,c,l)}return n}function v(e,t,i,n,o){var r=e.type,a=e.coordinates,s=t.pointFeatures,l=t.lineFeatures,c=t.polygonFeatures,u=t.polygonOutlineFeatures;if(function(e,t){var i=y[e];for(p.a.assert(i,"Unknown GeoJSON type ".concat(e));t&&--i>0;)t=t[0];return t&&Number.isFinite(t[0])}(r,a))switch(r){case"Point":s.push(i({geometry:e},n,o));break;case"MultiPoint":a.forEach((function(e){s.push(i({geometry:{type:"Point",coordinates:e}},n,o))}));break;case"LineString":l.push(i({geometry:e},n,o));break;case"MultiLineString":a.forEach((function(e){l.push(i({geometry:{type:"LineString",coordinates:e}},n,o))}));break;case"Polygon":c.push(i({geometry:e},n,o)),a.forEach((function(e){u.push(i({geometry:{type:"LineString",coordinates:e}},n,o))}));break;case"MultiPolygon":a.forEach((function(e){c.push(i({geometry:{type:"Polygon",coordinates:e}},n,o)),e.forEach((function(e){u.push(i({geometry:{type:"LineString",coordinates:e}},n,o))}))}))}else p.a.warn("".concat(r," coordinates are malformed"))()}var y={Point:1,MultiPoint:2,LineString:2,MultiLineString:3,Polygon:3,MultiPolygon:4};i.d(t,"a",(function(){return b}));var m=new d.a,L={stroked:!0,filled:!0,extruded:!1,wireframe:!1,lineWidthUnits:"meters",lineWidthScale:1,lineWidthMinPixels:0,lineWidthMaxPixels:Number.MAX_SAFE_INTEGER,lineJointRounded:!1,lineMiterLimit:4,elevationScale:1,pointRadiusScale:1,pointRadiusMinPixels:0,pointRadiusMaxPixels:Number.MAX_SAFE_INTEGER,lineDashJustified:!1,getLineColor:{type:"accessor",value:[0,0,0,255]},getFillColor:{type:"accessor",value:[0,0,0,255]},getRadius:{type:"accessor",value:1},getLineWidth:{type:"accessor",value:1},getLineDashArray:{type:"accessor",value:[0,0]},getElevation:{type:"accessor",value:1e3},material:m};function C(e){return e.geometry.coordinates}var b=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(a.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(o.a)(t,[{key:"initializeState",value:function(){this.state={features:{}}}},{key:"updateState",value:function(e){var t=e.props,i=e.changeFlags;if(i.dataChanged){var n=function(e){if(Array.isArray(e))return e;switch(p.a.assert(e.type,"GeoJSON does not have type"),e.type){case"Feature":return[e];case"FeatureCollection":return p.a.assert(Array.isArray(e.features),"GeoJSON does not have features array"),e.features;default:return[{geometry:e}]}}(t.data),o=this.getSubLayerRow.bind(this);if(Array.isArray(i.dataChanged)){var r=this.state.features,a={},s={};for(var l in r)a[l]=r[l].slice(),s[l]=[];var c=!0,u=!1,d=void 0;try{for(var h,v=i.dataChanged[Symbol.iterator]();!(c=(h=v.next()).done);c=!0){var y=h.value,m=f(n,o,y);for(var L in r)s[L].push(Object(g.a)({data:a[L],getIndex:function(e){return e.__source.index},dataRange:y,replace:m[L]}))}}catch(e){u=!0,d=e}finally{try{c||null==v.return||v.return()}finally{if(u)throw d}}this.setState({features:a,featuresDiff:s})}else this.setState({features:f(n,o),featuresDiff:{}})}}},{key:"renderLayers",value:function(){var e=this.state,t=e.features,i=e.featuresDiff,n=t.pointFeatures,o=t.lineFeatures,r=t.polygonFeatures,a=t.polygonOutlineFeatures,s=this.props,l=s.stroked,d=s.filled,g=s.extruded,p=s.wireframe,f=s.material,v=s.transitions,y=this.props,m=y.lineWidthUnits,L=y.lineWidthScale,b=y.lineWidthMinPixels,P=y.lineWidthMaxPixels,x=y.lineJointRounded,w=y.lineMiterLimit,S=y.pointRadiusScale,M=y.pointRadiusMinPixels,R=y.pointRadiusMaxPixels,_=y.elevationScale,F=y.lineDashJustified,k=this.props,E=k.getLineColor,A=k.getFillColor,W=k.getRadius,O=k.getLineWidth,D=k.getLineDashArray,j=k.getElevation,N=k.updateTriggers,I=this.getSubLayerClass("polygons-fill",h.a),T=this.getSubLayerClass("polygons-stroke",u.a),z=this.getSubLayerClass("line-strings",u.a),U=this.getSubLayerClass("points",c.a),G=this.shouldRenderSubLayer("polygons-fill",r)&&new I({_dataDiff:i.polygonFeatures&&function(){return i.polygonFeatures},extruded:g,elevationScale:_,filled:d,wireframe:p,material:f,getElevation:this.getSubLayerAccessor(j),getFillColor:this.getSubLayerAccessor(A),getLineColor:this.getSubLayerAccessor(E),transitions:v&&{getPolygon:v.geometry,getElevation:v.getElevation,getFillColor:v.getFillColor,getLineColor:v.getLineColor}},this.getSubLayerProps({id:"polygons-fill",updateTriggers:{getElevation:N.getElevation,getFillColor:N.getFillColor,getLineColor:N.getLineColor}}),{data:r,getPolygon:C});return[!g&&G,!g&&l&&this.shouldRenderSubLayer("polygons-stroke",a)&&new T({_dataDiff:i.polygonOutlineFeatures&&function(){return i.polygonOutlineFeatures},widthUnits:m,widthScale:L,widthMinPixels:b,widthMaxPixels:P,rounded:x,miterLimit:w,dashJustified:F,getColor:this.getSubLayerAccessor(E),getWidth:this.getSubLayerAccessor(O),getDashArray:this.getSubLayerAccessor(D),transitions:v&&{getPath:v.geometry,getColor:v.getLineColor,getWidth:v.getLineWidth}},this.getSubLayerProps({id:"polygons-stroke",updateTriggers:{getColor:N.getLineColor,getWidth:N.getLineWidth,getDashArray:N.getLineDashArray}}),{data:a,getPath:C}),this.shouldRenderSubLayer("linestrings",o)&&new z({_dataDiff:i.lineFeatures&&function(){return i.lineFeatures},widthUnits:m,widthScale:L,widthMinPixels:b,widthMaxPixels:P,rounded:x,miterLimit:w,dashJustified:F,getColor:this.getSubLayerAccessor(E),getWidth:this.getSubLayerAccessor(O),getDashArray:this.getSubLayerAccessor(D),transitions:v&&{getPath:v.geometry,getColor:v.getLineColor,getWidth:v.getLineWidth}},this.getSubLayerProps({id:"line-strings",updateTriggers:{getColor:N.getLineColor,getWidth:N.getLineWidth,getDashArray:N.getLineDashArray}}),{data:o,getPath:C}),this.shouldRenderSubLayer("points",n)&&new U({_dataDiff:i.pointFeatures&&function(){return i.pointFeatures},stroked:l,filled:d,radiusScale:S,radiusMinPixels:M,radiusMaxPixels:R,lineWidthUnits:m,lineWidthScale:L,lineWidthMinPixels:b,lineWidthMaxPixels:P,getFillColor:this.getSubLayerAccessor(A),getLineColor:this.getSubLayerAccessor(E),getRadius:this.getSubLayerAccessor(W),getLineWidth:this.getSubLayerAccessor(O),transitions:v&&{getPosition:v.geometry,getFillColor:v.getFillColor,getLineColor:v.getLineColor,getRadius:v.getRadius,getLineWidth:v.getLineWidth}},this.getSubLayerProps({id:"points",updateTriggers:{getFillColor:N.getFillColor,getLineColor:N.getLineColor,getRadius:N.getRadius,getLineWidth:N.getLineWidth}}),{data:n,getPosition:C}),g&&G]}}]),t}(l.a);b.layerName="GeoJsonLayer",b.defaultProps=L},gRSY:function(e,t,i){"use strict";i.r(t);var n=i("q1tI"),o=i("tjUo"),r=i("cwYr"),a=i("7GCR"),s=i("Al62"),l=function(e){function t(t,i){var n;return function(e,t,i){t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i}(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(n=e.call(this,t,i)||this),"setRef",(function(e){void 0===e&&(e=null),n.container=e})),n.state={zoom:14,fov:0,pitch:0,bearing:0},n.container=null,n.map=null,n.inited=!1,n.deckLayer=null,n}!function(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}(t,e);var i=t.prototype;return i.componentDidMount=function(){this.map=new a.Map(this.container,{center:[-74.01194070150844,40.70708981756565],zoom:5,pitch:0,bearing:0,centerCross:!0,baseLayer:new a.TileLayer("tile",{urlTemplate:"https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}"+(Object(s.b)()>1.5?"@2x":"")+"?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejh2N21nMzAxMmQzMnA5emRyN2lucW0ifQ.jSE-g2vsn48Ry928pqylcg"})}),this.deckLayer=new o.a("deck",{layers:[new r.a({data:"http://58.87.95.84:7300/mock/5b974eaa51241d6b41b178aa/learn-gis/building",stroked:!0,filled:!0,lineWidthMinPixels:2,opacity:1,getLineColor:function(){return[255,100,100]},getFillColor:function(){return[200,160,0,180]}})]},{animation:!0,renderer:"webgl"}),this.map.addLayer(this.deckLayer)},i.componentWillUnmount=function(){this.deckLayer&&this.deckLayer.remove()},i.render=function(){return n.createElement("div",{ref:this.setRef,className:"map-content"})},t}(n.Component);t.default=l},tjUo:function(e,t,i){"use strict";var n=i("zGfa"),o=i("mybv"),r=i("7GCR"),a=i("Al62");function s(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var l={registerEvents:!0,renderer:"webgl",doubleBuffer:!0,glOptions:{alpha:!0,depth:!0,antialias:!0,stencil:!0},forceRenderOnMoving:!0,forceRenderOnZooming:!0},c={useDevicePixels:!0,autoResizeDrawingBuffer:!1},u=12756274*Math.PI/(256*Math.pow(2,20));function d(e){var t=e.getResolution(),i=e.getMaxNativeZoom(),n=e.getCenter(),o=e.getPitch(),r=e.getBearing();return{latitude:n.y,longitude:n.x,zoom:function(e){return 19-Math.log(e/u)/Math.LN2}(t),bearing:r,pitch:o,maxZoom:i}}var h=function(e){function t(t,i,n){var o;return void 0===n&&(n={}),(o=e.call(this,t,Object.assign(l,n))||this).props=Object.assign({},c,i),o._isLoad=!1,o}s(t,e);var i=t.prototype;return i.setProps=function(e){return Object.assign(this.props,e,{id:this.id}),this},i.getProps=function(){return this.props},i.prepareToDraw=function(){},i.draw=function(){this.renderLayer()},i.drawOnInteracting=function(){this.renderLayer()},i.onAdd=function(){},i.onMouseClick=function(e){var t={};e.offsetCenter||(t={type:"click",offsetCenter:e.containerPoint,srcEvent:e.domEvent}),this.deck._onEvent(t)},i.onMouseMove=function(e){var t={};e.offsetCenter||(t={offsetCenter:e.containerPoint,srcEvent:e.domEvent}),this.deck._onPointerMove(t)},i.onMouseDown=function(e){var t={};e.offsetCenter||(t={offsetCenter:e.containerPoint,srcEvent:e.domEvent}),this.deck._onPointerDown(t)},i.onRemove=function(){},i.renderLayer=function(){var e=this,t=this.getMap(),i=this._getRenderer();if(i&&t){var n=this.props._customRender,r=i.gl,a=Object.assign(this.props,{gl:r,width:!1,height:!1,viewState:d(t),_customRender:function(){n&&n()},parameters:{depthMask:!0,depthTest:!0,blendFunc:[r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA],blendEquation:r.FUNC_ADD},userData:{isExternal:!1,layers:new Set},onLoad:function(){e._isLoad=!0,e._drawLayer(t)}});this.deck||this._isLoad||(this.deck=new o.a(a),this.options.registerEvents&&(t.on("mousemove",this.onMouseMove,this),t.on("mousedown",this.onMouseDown,this),t.on("click",this.onMouseClick,this))),this._isLoad&&(this.deck.setProps(a),this.deck.props.userData.isExternal=!0,this._drawLayer(t)),i.completeRender()}},i._drawLayer=function(e){var t=this.deck.props.userData.currentViewport;t||(t=function(e,t,i){return void 0===i&&(i=!0),new n.a(Object.assign({x:0,y:0,width:e.width,height:e.height},d(t),i?{nearZMultiplier:e.height?1/e.height:1,farZMultiplier:1.01}:{nearZMultiplier:.1,farZMultiplier:10}))}(this.deck,e,!0),this.deck.props.userData.currentViewport=t),this.deck.layerManager&&this.deck._drawLayers("maptalks-deck-repaint",{viewports:[t],clearCanvas:!1})},i.remove=function(){var t=this.getMap();this.deck&&t&&(this.options.registerEvents&&(t.off("mousemove",this.onMouseMove,this),t.off("mousedown",this.onMouseDown,this),t.off("click",this.onMouseClick,this)),this.deck.finalize(),delete this.deck),e.prototype.remove.call(this)},t}(r.CanvasLayer),g=function(e){function t(){return e.apply(this,arguments)||this}s(t,e);var i=t.prototype;return i.draw=function(){this.prepareCanvas(),this.prepareDrawContext(),this._drawLayer()},i.needToRedraw=function(){var t=this.getMap();return!(t.isZooming()&&!t.getPitch())&&e.prototype.needToRedraw.call(this)},i.createCanvas=function(){if(!this.canvas&&!this.gl){var e=this.getMap(),t=e.getSize(),i=(e.getDevicePixelRatio?e.getDevicePixelRatio():Object(a.b)())||1,n=[i*t.width,i*t.height],o=n[0],s=n[1];this.canvas=r.Canvas.createCanvas(o,s,e.CanvasClass),this.canvas.style&&(this.canvas.style.width=t+"px",this.canvas.style.height=t+"px"),this.gl=Object(a.a)(this.canvas,this.layer.options.glOptions),this.onCanvasCreate(),this.layer.fire("canvascreate",{context:this.context,gl:this.gl})}},i.resizeCanvas=function(e){if(this.canvas){var t=this.getMap(),i=(t.getDevicePixelRatio?t.getDevicePixelRatio():Object(a.b)())||1,n=e||t.getSize();this.canvas.width===n.width*i&&this.canvas.height===n.height*i||(this.canvas.height=i*n.height,this.canvas.width=i*n.width,this.gl.viewport(0,0,this.canvas.width,this.canvas.height))}},i.clearCanvas=function(){this.canvas&&(this.gl.clear(this.gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT),this.context&&this.context.clearRect(0,0,this.canvas.width,this.canvas.height))},i.requestMapToRender=function(){this.setToRedraw()},i.prepareCanvas=function(){this.canvas?this.clearCanvas():this.createCanvas();var t=e.prototype.prepareCanvas.call(this);return this.layer.fire("renderstart",{context:this.context,gl:this.gl}),t},i.onZoomStart=function(){for(var t=arguments.length,i=new Array(t),n=0;n<t;n++)i[n]=arguments[n];e.prototype.onZoomStart.call(this,i)},i.onZoomEnd=function(){for(var t=arguments.length,i=new Array(t),n=0;n<t;n++)i[n]=arguments[n];e.prototype.onZoomEnd.call(this,i)},i.remove=function(){e.prototype.remove.call(this)},t}(r.renderer.CanvasLayerRenderer);h.registerRenderer("webgl",g),t.a=h}}]);