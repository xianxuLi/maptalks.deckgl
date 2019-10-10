(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"+7vx":function(t,n,e){"use strict";var i=e("1OyB"),r=e("vuIU"),a=e("md7G"),o=e("foSv"),s=e("ReuC"),u=e("Ji7U"),l=e("K7jV"),c=e("S2EH"),h=e("C7oE");e.d(n,"a",(function(){return d}));var f=[0,0,0,255],g={radiusScale:{type:"number",min:0,value:1},radiusMinPixels:{type:"number",min:0,value:0},radiusMaxPixels:{type:"number",min:0,value:Number.MAX_SAFE_INTEGER},lineWidthUnits:"meters",lineWidthScale:{type:"number",min:0,value:1},lineWidthMinPixels:{type:"number",min:0,value:0},lineWidthMaxPixels:{type:"number",min:0,value:Number.MAX_SAFE_INTEGER},stroked:!1,filled:!0,getPosition:{type:"accessor",value:function(t){return t.position}},getRadius:{type:"accessor",value:1},getFillColor:{type:"accessor",value:f},getLineColor:{type:"accessor",value:f},getLineWidth:{type:"accessor",value:1},strokeWidth:{deprecatedFor:"getLineWidth"},outline:{deprecatedFor:"stroked"},getColor:{deprecatedFor:["getFillColor","getLineColor"]}},d=function(t){function n(){return Object(i.a)(this,n),Object(a.a)(this,Object(o.a)(n).apply(this,arguments))}return Object(u.a)(n,t),Object(r.a)(n,[{key:"getShaders",value:function(t){return Object(s.a)(Object(o.a)(n.prototype),"getShaders",this).call(this,{vs:"#define SHADER_NAME scatterplot-layer-vertex-shader\n\nattribute vec3 positions;\n\nattribute vec3 instancePositions;\nattribute vec2 instancePositions64xyLow;\nattribute float instanceRadius;\nattribute float instanceLineWidths;\nattribute vec4 instanceFillColors;\nattribute vec4 instanceLineColors;\nattribute vec3 instancePickingColors;\n\nuniform float opacity;\nuniform float radiusScale;\nuniform float radiusMinPixels;\nuniform float radiusMaxPixels;\nuniform float lineWidthScale;\nuniform float lineWidthMinPixels;\nuniform float lineWidthMaxPixels;\nuniform float stroked;\nuniform bool filled;\n\nvarying vec4 vFillColor;\nvarying vec4 vLineColor;\nvarying vec2 unitPosition;\nvarying float innerUnitRadius;\n\nvoid main(void) {\n  geometry.worldPosition = instancePositions;\n  float outerRadiusPixels = clamp(\n    project_size_to_pixel(radiusScale * instanceRadius),\n    radiusMinPixels, radiusMaxPixels\n  );\n  float lineWidthPixels = clamp(\n    project_size_to_pixel(lineWidthScale * instanceLineWidths),\n    lineWidthMinPixels, lineWidthMaxPixels\n  );\n  outerRadiusPixels += stroked * lineWidthPixels / 2.0;\n  unitPosition = positions.xy;\n  geometry.uv = unitPosition;\n\n  innerUnitRadius = 1.0 - stroked * lineWidthPixels / outerRadiusPixels;\n  \n  vec3 offset = positions * project_pixel_size(outerRadiusPixels);\n  DECKGL_FILTER_SIZE(offset, geometry);\n  gl_Position = project_position_to_clipspace(instancePositions, instancePositions64xyLow, offset, geometry.position);\n  DECKGL_FILTER_GL_POSITION(gl_Position, geometry);\n  vFillColor = vec4(instanceFillColors.rgb, instanceFillColors.a * opacity);\n  DECKGL_FILTER_COLOR(vFillColor, geometry);\n  vLineColor = vec4(instanceLineColors.rgb, instanceLineColors.a * opacity);\n  DECKGL_FILTER_COLOR(vLineColor, geometry);\n  picking_setPickingColor(instancePickingColors);\n}\n",fs:"#define SHADER_NAME scatterplot-layer-fragment-shader\n\nprecision highp float;\n\nuniform bool filled;\n\nvarying vec4 vFillColor;\nvarying vec4 vLineColor;\nvarying vec2 unitPosition;\nvarying float innerUnitRadius;\n\nvoid main(void) {\n  geometry.uv = unitPosition;\n\n  float distToCenter = length(unitPosition);\n\n  if (distToCenter > 1.0) {\n    discard;\n  } \n  if (distToCenter > innerUnitRadius) {\n    gl_FragColor = vLineColor;\n  } else if (filled) {\n    gl_FragColor = vFillColor;\n  } else {\n    discard;\n  }\n\n  DECKGL_FILTER_COLOR(gl_FragColor, geometry);\n}\n",modules:["project32","picking"]})}},{key:"initializeState",value:function(){this.getAttributeManager().addInstanced({instancePositions:{size:3,type:5130,fp64:this.use64bitPositions(),transition:!0,accessor:"getPosition"},instanceRadius:{size:1,transition:!0,accessor:"getRadius",defaultValue:1},instanceFillColors:{size:this.props.colorFormat.length,transition:!0,normalized:!0,type:5121,accessor:"getFillColor",defaultValue:[0,0,0,255]},instanceLineColors:{size:this.props.colorFormat.length,transition:!0,normalized:!0,type:5121,accessor:"getLineColor",defaultValue:[0,0,0,255]},instanceLineWidths:{size:1,transition:!0,accessor:"getLineWidth",defaultValue:1}})}},{key:"updateState",value:function(t){var e=t.props,i=t.oldProps,r=t.changeFlags;if(Object(s.a)(Object(o.a)(n.prototype),"updateState",this).call(this,{props:e,oldProps:i,changeFlags:r}),r.extensionsChanged){var a=this.context.gl;this.state.model&&this.state.model.delete(),this.setState({model:this._getModel(a)}),this.getAttributeManager().invalidateAll()}}},{key:"draw",value:function(t){var n=t.uniforms,e=this.context.viewport,i=this.props,r=i.radiusScale,a=i.radiusMinPixels,o=i.radiusMaxPixels,s=i.stroked,u=i.filled,l=i.lineWidthUnits,c=i.lineWidthScale,h=i.lineWidthMinPixels,f=i.lineWidthMaxPixels,g="pixels"===l?e.distanceScales.metersPerPixel[2]:1;this.state.model.setUniforms(Object.assign({},n,{stroked:s?1:0,filled:u,radiusScale:r,radiusMinPixels:a,radiusMaxPixels:o,lineWidthScale:c*g,lineWidthMinPixels:h,lineWidthMaxPixels:f})).draw()}},{key:"_getModel",value:function(t){return new c.a(t,Object.assign(this.getShaders(),{id:this.props.id,geometry:new h.a({drawMode:6,vertexCount:4,attributes:{positions:{size:3,value:new Float32Array([-1,-1,0,-1,1,0,1,1,0,1,-1,0])}}}),isInstanced:!0}))}}]),n}(l.a);d.layerName="ScatterplotLayer",d.defaultProps=g},"1Ix/":function(t,n,e){"use strict";function i(t,n){switch(arguments.length){case 0:break;case 1:this.range(t);break;default:this.range(n).domain(t)}return this}e.d(n,"a",(function(){return i}))},VIqg:function(t,n,e){"use strict";var i=Math.sqrt(50),r=Math.sqrt(10),a=Math.sqrt(2),o=function(t,n,e){var i,r,a,o,u=-1;if(e=+e,(t=+t)==(n=+n)&&e>0)return[t];if((i=n<t)&&(r=t,t=n,n=r),0===(o=s(t,n,e))||!isFinite(o))return[];if(o>0)for(t=Math.ceil(t/o),n=Math.floor(n/o),a=new Array(r=Math.ceil(n-t+1));++u<r;)a[u]=(t+u)*o;else for(t=Math.floor(t*o),n=Math.ceil(n*o),a=new Array(r=Math.ceil(t-n+1));++u<r;)a[u]=(t-u)/o;return i&&a.reverse(),a};function s(t,n,e){var o=(n-t)/Math.max(0,e),s=Math.floor(Math.log(o)/Math.LN10),u=o/Math.pow(10,s);return s>=0?(u>=i?10:u>=r?5:u>=a?2:1)*Math.pow(10,s):-Math.pow(10,-s)/(u>=i?10:u>=r?5:u>=a?2:1)}var u=e("h8nK"),l=function(t,n,e){t.prototype=n.prototype=e,e.constructor=t};function c(t,n){var e=Object.create(t.prototype);for(var i in n)e[i]=n[i];return e}function h(){}var f="\\s*([+-]?\\d+)\\s*",g="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",d="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",p=/^#([0-9a-f]{3})$/,m=/^#([0-9a-f]{6})$/,y=new RegExp("^rgb\\("+[f,f,f]+"\\)$"),v=new RegExp("^rgb\\("+[d,d,d]+"\\)$"),b=new RegExp("^rgba\\("+[f,f,f,g]+"\\)$"),M=new RegExp("^rgba\\("+[d,d,d,g]+"\\)$"),w=new RegExp("^hsl\\("+[g,d,d]+"\\)$"),x=new RegExp("^hsla\\("+[g,d,d,g]+"\\)$"),k={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};function N(t){var n;return t=(t+"").trim().toLowerCase(),(n=p.exec(t))?new L((n=parseInt(n[1],16))>>8&15|n>>4&240,n>>4&15|240&n,(15&n)<<4|15&n,1):(n=m.exec(t))?P(parseInt(n[1],16)):(n=y.exec(t))?new L(n[1],n[2],n[3],1):(n=v.exec(t))?new L(255*n[1]/100,255*n[2]/100,255*n[3]/100,1):(n=b.exec(t))?C(n[1],n[2],n[3],n[4]):(n=M.exec(t))?C(255*n[1]/100,255*n[2]/100,255*n[3]/100,n[4]):(n=w.exec(t))?R(n[1],n[2]/100,n[3]/100,1):(n=x.exec(t))?R(n[1],n[2]/100,n[3]/100,n[4]):k.hasOwnProperty(t)?P(k[t]):"transparent"===t?new L(NaN,NaN,NaN,0):null}function P(t){return new L(t>>16&255,t>>8&255,255&t,1)}function C(t,n,e,i){return i<=0&&(t=n=e=NaN),new L(t,n,e,i)}function E(t){return t instanceof h||(t=N(t)),t?new L((t=t.rgb()).r,t.g,t.b,t.opacity):new L}function S(t,n,e,i){return 1===arguments.length?E(t):new L(t,n,e,null==i?1:i)}function L(t,n,e,i){this.r=+t,this.g=+n,this.b=+e,this.opacity=+i}function _(t){return((t=Math.max(0,Math.min(255,Math.round(t)||0)))<16?"0":"")+t.toString(16)}function R(t,n,e,i){return i<=0?t=n=e=NaN:e<=0||e>=1?t=n=NaN:n<=0&&(t=NaN),new A(t,n,e,i)}function F(t,n,e,i){return 1===arguments.length?function(t){if(t instanceof A)return new A(t.h,t.s,t.l,t.opacity);if(t instanceof h||(t=N(t)),!t)return new A;if(t instanceof A)return t;var n=(t=t.rgb()).r/255,e=t.g/255,i=t.b/255,r=Math.min(n,e,i),a=Math.max(n,e,i),o=NaN,s=a-r,u=(a+r)/2;return s?(o=n===a?(e-i)/s+6*(e<i):e===a?(i-n)/s+2:(n-e)/s+4,s/=u<.5?a+r:2-a-r,o*=60):s=u>0&&u<1?0:o,new A(o,s,u,t.opacity)}(t):new A(t,n,e,null==i?1:i)}function A(t,n,e,i){this.h=+t,this.s=+n,this.l=+e,this.opacity=+i}function j(t,n,e){return 255*(t<60?n+(e-n)*t/60:t<180?e:t<240?n+(e-n)*(240-t)/60:n)}l(h,N,{displayable:function(){return this.rgb().displayable()},hex:function(){return this.rgb().hex()},toString:function(){return this.rgb()+""}}),l(L,S,c(h,{brighter:function(t){return t=null==t?1/.7:Math.pow(1/.7,t),new L(this.r*t,this.g*t,this.b*t,this.opacity)},darker:function(t){return t=null==t?.7:Math.pow(.7,t),new L(this.r*t,this.g*t,this.b*t,this.opacity)},rgb:function(){return this},displayable:function(){return 0<=this.r&&this.r<=255&&0<=this.g&&this.g<=255&&0<=this.b&&this.b<=255&&0<=this.opacity&&this.opacity<=1},hex:function(){return"#"+_(this.r)+_(this.g)+_(this.b)},toString:function(){var t=this.opacity;return(1===(t=isNaN(t)?1:Math.max(0,Math.min(1,t)))?"rgb(":"rgba(")+Math.max(0,Math.min(255,Math.round(this.r)||0))+", "+Math.max(0,Math.min(255,Math.round(this.g)||0))+", "+Math.max(0,Math.min(255,Math.round(this.b)||0))+(1===t?")":", "+t+")")}})),l(A,F,c(h,{brighter:function(t){return t=null==t?1/.7:Math.pow(1/.7,t),new A(this.h,this.s,this.l*t,this.opacity)},darker:function(t){return t=null==t?.7:Math.pow(.7,t),new A(this.h,this.s,this.l*t,this.opacity)},rgb:function(){var t=this.h%360+360*(this.h<0),n=isNaN(t)||isNaN(this.s)?0:this.s,e=this.l,i=e+(e<.5?e:1-e)*n,r=2*e-i;return new L(j(t>=240?t-240:t+120,r,i),j(t,r,i),j(t<120?t+240:t-120,r,i),this.opacity)},displayable:function(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1}}));var W=Math.PI/180,I=180/Math.PI,O=.96422,z=1,X=.82521,q=4/29,T=6/29,$=3*T*T,D=T*T*T;function G(t){if(t instanceof U)return new U(t.l,t.a,t.b,t.opacity);if(t instanceof Z){if(isNaN(t.h))return new U(t.l,0,0,t.opacity);var n=t.h*W;return new U(t.l,Math.cos(n)*t.c,Math.sin(n)*t.c,t.opacity)}t instanceof L||(t=E(t));var e,i,r=H(t.r),a=H(t.g),o=H(t.b),s=V((.2225045*r+.7168786*a+.0606169*o)/z);return r===a&&a===o?e=i=s:(e=V((.4360747*r+.3850649*a+.1430804*o)/O),i=V((.0139322*r+.0971045*a+.7141733*o)/X)),new U(116*s-16,500*(e-s),200*(s-i),t.opacity)}function U(t,n,e,i){this.l=+t,this.a=+n,this.b=+e,this.opacity=+i}function V(t){return t>D?Math.pow(t,1/3):t/$+q}function Y(t){return t>T?t*t*t:$*(t-q)}function K(t){return 255*(t<=.0031308?12.92*t:1.055*Math.pow(t,1/2.4)-.055)}function H(t){return(t/=255)<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)}function J(t,n,e,i){return 1===arguments.length?function(t){if(t instanceof Z)return new Z(t.h,t.c,t.l,t.opacity);if(t instanceof U||(t=G(t)),0===t.a&&0===t.b)return new Z(NaN,0,t.l,t.opacity);var n=Math.atan2(t.b,t.a)*I;return new Z(n<0?n+360:n,Math.sqrt(t.a*t.a+t.b*t.b),t.l,t.opacity)}(t):new Z(t,n,e,null==i?1:i)}function Z(t,n,e,i){this.h=+t,this.c=+n,this.l=+e,this.opacity=+i}l(U,(function(t,n,e,i){return 1===arguments.length?G(t):new U(t,n,e,null==i?1:i)}),c(h,{brighter:function(t){return new U(this.l+18*(null==t?1:t),this.a,this.b,this.opacity)},darker:function(t){return new U(this.l-18*(null==t?1:t),this.a,this.b,this.opacity)},rgb:function(){var t=(this.l+16)/116,n=isNaN(this.a)?t:t+this.a/500,e=isNaN(this.b)?t:t-this.b/200;return new L(K(3.1338561*(n=O*Y(n))-1.6168667*(t=z*Y(t))-.4906146*(e=X*Y(e))),K(-.9787684*n+1.9161415*t+.033454*e),K(.0719453*n-.2289914*t+1.4052427*e),this.opacity)}})),l(Z,J,c(h,{brighter:function(t){return new Z(this.h,this.c,this.l+18*(null==t?1:t),this.opacity)},darker:function(t){return new Z(this.h,this.c,this.l-18*(null==t?1:t),this.opacity)},rgb:function(){return G(this).rgb()}}));var B=1.78277,Q=-.29227,tt=-.90649,nt=1.97294,et=nt*tt,it=nt*B,rt=B*Q- -.14861*tt;function at(t,n,e,i){return 1===arguments.length?function(t){if(t instanceof ot)return new ot(t.h,t.s,t.l,t.opacity);t instanceof L||(t=E(t));var n=t.r/255,e=t.g/255,i=t.b/255,r=(rt*i+et*n-it*e)/(rt+et-it),a=i-r,o=(nt*(e-r)-Q*a)/tt,s=Math.sqrt(o*o+a*a)/(nt*r*(1-r)),u=s?Math.atan2(o,a)*I-120:NaN;return new ot(u<0?u+360:u,s,r,t.opacity)}(t):new ot(t,n,e,null==i?1:i)}function ot(t,n,e,i){this.h=+t,this.s=+n,this.l=+e,this.opacity=+i}function st(t,n,e,i,r){var a=t*t,o=a*t;return((1-3*t+3*a-o)*n+(4-6*a+3*o)*e+(1+3*t+3*a-3*o)*i+o*r)/6}l(ot,at,c(h,{brighter:function(t){return t=null==t?1/.7:Math.pow(1/.7,t),new ot(this.h,this.s,this.l*t,this.opacity)},darker:function(t){return t=null==t?.7:Math.pow(.7,t),new ot(this.h,this.s,this.l*t,this.opacity)},rgb:function(){var t=isNaN(this.h)?0:(this.h+120)*W,n=+this.l,e=isNaN(this.s)?0:this.s*n*(1-n),i=Math.cos(t),r=Math.sin(t);return new L(255*(n+e*(-.14861*i+B*r)),255*(n+e*(Q*i+tt*r)),255*(n+e*(nt*i)),this.opacity)}}));var ut=function(t){return function(){return t}};function lt(t,n){return function(e){return t+e*n}}function ct(t,n){var e=n-t;return e?lt(t,e>180||e<-180?e-360*Math.round(e/360):e):ut(isNaN(t)?n:t)}function ht(t,n){var e=n-t;return e?lt(t,e):ut(isNaN(t)?n:t)}var ft=function t(n){var e=function(t){return 1==(t=+t)?ht:function(n,e){return e-n?function(t,n,e){return t=Math.pow(t,e),n=Math.pow(n,e)-t,e=1/e,function(i){return Math.pow(t+i*n,e)}}(n,e,t):ut(isNaN(n)?e:n)}}(n);function i(t,n){var i=e((t=S(t)).r,(n=S(n)).r),r=e(t.g,n.g),a=e(t.b,n.b),o=ht(t.opacity,n.opacity);return function(n){return t.r=i(n),t.g=r(n),t.b=a(n),t.opacity=o(n),t+""}}return i.gamma=t,i}(1);function gt(t){return function(n){var e,i,r=n.length,a=new Array(r),o=new Array(r),s=new Array(r);for(e=0;e<r;++e)i=S(n[e]),a[e]=i.r||0,o[e]=i.g||0,s[e]=i.b||0;return a=t(a),o=t(o),s=t(s),i.opacity=1,function(t){return i.r=a(t),i.g=o(t),i.b=s(t),i+""}}}gt((function(t){var n=t.length-1;return function(e){var i=e<=0?e=0:e>=1?(e=1,n-1):Math.floor(e*n),r=t[i],a=t[i+1],o=i>0?t[i-1]:2*r-a,s=i<n-1?t[i+2]:2*a-r;return st((e-i/n)*n,o,r,a,s)}})),gt((function(t){var n=t.length;return function(e){var i=Math.floor(((e%=1)<0?++e:e)*n),r=t[(i+n-1)%n],a=t[i%n],o=t[(i+1)%n],s=t[(i+2)%n];return st((e-i/n)*n,r,a,o,s)}}));var dt,pt,mt,yt,vt=function(t,n){return n-=t=+t,function(e){return t+n*e}},bt=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Mt=new RegExp(bt.source,"g"),wt=function(t,n){var e,i=typeof n;return null==n||"boolean"===i?ut(n):("number"===i?vt:"string"===i?(e=N(n))?(n=e,ft):function(t,n){var e,i,r,a=bt.lastIndex=Mt.lastIndex=0,o=-1,s=[],u=[];for(t+="",n+="";(e=bt.exec(t))&&(i=Mt.exec(n));)(r=i.index)>a&&(r=n.slice(a,r),s[o]?s[o]+=r:s[++o]=r),(e=e[0])===(i=i[0])?s[o]?s[o]+=i:s[++o]=i:(s[++o]=null,u.push({i:o,x:vt(e,i)})),a=Mt.lastIndex;return a<n.length&&(r=n.slice(a),s[o]?s[o]+=r:s[++o]=r),s.length<2?u[0]?function(t){return function(n){return t(n)+""}}(u[0].x):function(t){return function(){return t}}(n):(n=u.length,function(t){for(var e,i=0;i<n;++i)s[(e=u[i]).i]=e.x(t);return s.join("")})}:n instanceof N?ft:n instanceof Date?function(t,n){var e=new Date;return n-=t=+t,function(i){return e.setTime(t+n*i),e}}:Array.isArray(n)?function(t,n){var e,i=n?n.length:0,r=t?Math.min(i,t.length):0,a=new Array(r),o=new Array(i);for(e=0;e<r;++e)a[e]=wt(t[e],n[e]);for(;e<i;++e)o[e]=n[e];return function(t){for(e=0;e<r;++e)o[e]=a[e](t);return o}}:"function"!=typeof n.valueOf&&"function"!=typeof n.toString||isNaN(n)?function(t,n){var e,i={},r={};for(e in null!==t&&"object"==typeof t||(t={}),null!==n&&"object"==typeof n||(n={}),n)e in t?i[e]=wt(t[e],n[e]):r[e]=n[e];return function(t){for(e in i)r[e]=i[e](t);return r}}:vt)(t,n)},xt=function(t,n){return n-=t=+t,function(e){return Math.round(t+n*e)}},kt=180/Math.PI,Nt={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1},Pt=function(t,n,e,i,r,a){var o,s,u;return(o=Math.sqrt(t*t+n*n))&&(t/=o,n/=o),(u=t*e+n*i)&&(e-=t*u,i-=n*u),(s=Math.sqrt(e*e+i*i))&&(e/=s,i/=s,u/=s),t*i<n*e&&(t=-t,n=-n,u=-u,o=-o),{translateX:r,translateY:a,rotate:Math.atan2(n,t)*kt,skewX:Math.atan(u)*kt,scaleX:o,scaleY:s}};function Ct(t,n,e,i){function r(t){return t.length?t.pop()+" ":""}return function(a,o){var s=[],u=[];return a=t(a),o=t(o),function(t,i,r,a,o,s){if(t!==r||i!==a){var u=o.push("translate(",null,n,null,e);s.push({i:u-4,x:vt(t,r)},{i:u-2,x:vt(i,a)})}else(r||a)&&o.push("translate("+r+n+a+e)}(a.translateX,a.translateY,o.translateX,o.translateY,s,u),function(t,n,e,a){t!==n?(t-n>180?n+=360:n-t>180&&(t+=360),a.push({i:e.push(r(e)+"rotate(",null,i)-2,x:vt(t,n)})):n&&e.push(r(e)+"rotate("+n+i)}(a.rotate,o.rotate,s,u),function(t,n,e,a){t!==n?a.push({i:e.push(r(e)+"skewX(",null,i)-2,x:vt(t,n)}):n&&e.push(r(e)+"skewX("+n+i)}(a.skewX,o.skewX,s,u),function(t,n,e,i,a,o){if(t!==e||n!==i){var s=a.push(r(a)+"scale(",null,",",null,")");o.push({i:s-4,x:vt(t,e)},{i:s-2,x:vt(n,i)})}else 1===e&&1===i||a.push(r(a)+"scale("+e+","+i+")")}(a.scaleX,a.scaleY,o.scaleX,o.scaleY,s,u),a=o=null,function(t){for(var n,e=-1,i=u.length;++e<i;)s[(n=u[e]).i]=n.x(t);return s.join("")}}}function Et(t){return function(n,e){var i=t((n=F(n)).h,(e=F(e)).h),r=ht(n.s,e.s),a=ht(n.l,e.l),o=ht(n.opacity,e.opacity);return function(t){return n.h=i(t),n.s=r(t),n.l=a(t),n.opacity=o(t),n+""}}}function St(t){return function(n,e){var i=t((n=J(n)).h,(e=J(e)).h),r=ht(n.c,e.c),a=ht(n.l,e.l),o=ht(n.opacity,e.opacity);return function(t){return n.h=i(t),n.c=r(t),n.l=a(t),n.opacity=o(t),n+""}}}function Lt(t){return function n(e){function i(n,i){var r=t((n=at(n)).h,(i=at(i)).h),a=ht(n.s,i.s),o=ht(n.l,i.l),s=ht(n.opacity,i.opacity);return function(t){return n.h=r(t),n.s=a(t),n.l=o(Math.pow(t,e)),n.opacity=s(t),n+""}}return e=+e,i.gamma=n,i}(1)}Ct((function(t){return"none"===t?Nt:(dt||(dt=document.createElement("DIV"),pt=document.documentElement,mt=document.defaultView),dt.style.transform=t,t=mt.getComputedStyle(pt.appendChild(dt),null).getPropertyValue("transform"),pt.removeChild(dt),t=t.slice(7,-1).split(","),Pt(+t[0],+t[1],+t[2],+t[3],+t[4],+t[5]))}),"px, ","px)","deg)"),Ct((function(t){return null==t?Nt:(yt||(yt=document.createElementNS("http://www.w3.org/2000/svg","g")),yt.setAttribute("transform",t),(t=yt.transform.baseVal.consolidate())?(t=t.matrix,Pt(t.a,t.b,t.c,t.d,t.e,t.f)):Nt)}),", ",")",")"),Math.SQRT2,Et(ct),Et(ht),St(ct),St(ht),Lt(ct),Lt(ht);var _t=function(t){return function(){return t}},Rt=function(t){return+t},Ft=[0,1];function At(t){return t}function jt(t,n){return(n-=t=+t)?function(e){return(e-t)/n}:_t(isNaN(n)?NaN:.5)}function Wt(t,n,e){var i=t[0],r=t[1],a=n[0],o=n[1];return r<i?(i=jt(r,i),a=e(o,a)):(i=jt(i,r),a=e(a,o)),function(t){return a(i(t))}}function It(t,n,e){var i=Math.min(t.length,n.length)-1,r=new Array(i),a=new Array(i),o=-1;for(t[i]<t[0]&&(t=t.slice().reverse(),n=n.slice().reverse());++o<i;)r[o]=jt(t[o],t[o+1]),a[o]=e(n[o],n[o+1]);return function(n){var e=Object(u.a)(t,n,1,i)-1;return a[e](r[e](n))}}var Ot=e("1Ix/"),zt=function(t,n){if((e=(t=n?t.toExponential(n-1):t.toExponential()).indexOf("e"))<0)return null;var e,i=t.slice(0,e);return[i.length>1?i[0]+i.slice(2):i,+t.slice(e+1)]},Xt=function(t){return(t=zt(Math.abs(t)))?t[1]:NaN},qt=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function Tt(t){return new $t(t)}function $t(t){if(!(n=qt.exec(t)))throw new Error("invalid format: "+t);var n;this.fill=n[1]||" ",this.align=n[2]||">",this.sign=n[3]||"-",this.symbol=n[4]||"",this.zero=!!n[5],this.width=n[6]&&+n[6],this.comma=!!n[7],this.precision=n[8]&&+n[8].slice(1),this.trim=!!n[9],this.type=n[10]||""}Tt.prototype=$t.prototype,$t.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(null==this.width?"":Math.max(1,0|this.width))+(this.comma?",":"")+(null==this.precision?"":"."+Math.max(0,0|this.precision))+(this.trim?"~":"")+this.type};var Dt,Gt,Ut,Vt,Yt=function(t){t:for(var n,e=t.length,i=1,r=-1;i<e;++i)switch(t[i]){case".":r=n=i;break;case"0":0===r&&(r=i),n=i;break;default:if(r>0){if(!+t[i])break t;r=0}}return r>0?t.slice(0,r)+t.slice(n+1):t},Kt=function(t,n){var e=zt(t,n);if(!e)return t+"";var i=e[0],r=e[1];return r<0?"0."+new Array(-r).join("0")+i:i.length>r+1?i.slice(0,r+1)+"."+i.slice(r+1):i+new Array(r-i.length+2).join("0")},Ht={"%":function(t,n){return(100*t).toFixed(n)},b:function(t){return Math.round(t).toString(2)},c:function(t){return t+""},d:function(t){return Math.round(t).toString(10)},e:function(t,n){return t.toExponential(n)},f:function(t,n){return t.toFixed(n)},g:function(t,n){return t.toPrecision(n)},o:function(t){return Math.round(t).toString(8)},p:function(t,n){return Kt(100*t,n)},r:Kt,s:function(t,n){var e=zt(t,n);if(!e)return t+"";var i=e[0],r=e[1],a=r-(Dt=3*Math.max(-8,Math.min(8,Math.floor(r/3))))+1,o=i.length;return a===o?i:a>o?i+new Array(a-o+1).join("0"):a>0?i.slice(0,a)+"."+i.slice(a):"0."+new Array(1-a).join("0")+zt(t,Math.max(0,n+a-1))[0]},X:function(t){return Math.round(t).toString(16).toUpperCase()},x:function(t){return Math.round(t).toString(16)}},Jt=function(t){return t},Zt=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];Gt=function(t){var n=t.grouping&&t.thousands?function(t,n){return function(e,i){for(var r=e.length,a=[],o=0,s=t[0],u=0;r>0&&s>0&&(u+s+1>i&&(s=Math.max(1,i-u)),a.push(e.substring(r-=s,r+s)),!((u+=s+1)>i));)s=t[o=(o+1)%t.length];return a.reverse().join(n)}}(t.grouping,t.thousands):Jt,e=t.currency,i=t.decimal,r=t.numerals?function(t){return function(n){return n.replace(/[0-9]/g,(function(n){return t[+n]}))}}(t.numerals):Jt,a=t.percent||"%";function o(t){var o=(t=Tt(t)).fill,s=t.align,u=t.sign,l=t.symbol,c=t.zero,h=t.width,f=t.comma,g=t.precision,d=t.trim,p=t.type;"n"===p?(f=!0,p="g"):Ht[p]||(null==g&&(g=12),d=!0,p="g"),(c||"0"===o&&"="===s)&&(c=!0,o="0",s="=");var m="$"===l?e[0]:"#"===l&&/[boxX]/.test(p)?"0"+p.toLowerCase():"",y="$"===l?e[1]:/[%p]/.test(p)?a:"",v=Ht[p],b=/[defgprs%]/.test(p);function M(t){var e,a,l,M=m,w=y;if("c"===p)w=v(t)+w,t="";else{var x=(t=+t)<0;if(t=v(Math.abs(t),g),d&&(t=Yt(t)),x&&0==+t&&(x=!1),M=(x?"("===u?u:"-":"-"===u||"("===u?"":u)+M,w=("s"===p?Zt[8+Dt/3]:"")+w+(x&&"("===u?")":""),b)for(e=-1,a=t.length;++e<a;)if(48>(l=t.charCodeAt(e))||l>57){w=(46===l?i+t.slice(e+1):t.slice(e))+w,t=t.slice(0,e);break}}f&&!c&&(t=n(t,1/0));var k=M.length+t.length+w.length,N=k<h?new Array(h-k+1).join(o):"";switch(f&&c&&(t=n(N+t,N.length?h-w.length:1/0),N=""),s){case"<":t=M+t+w+N;break;case"=":t=M+N+t+w;break;case"^":t=N.slice(0,k=N.length>>1)+M+t+w+N.slice(k);break;default:t=N+M+t+w}return r(t)}return g=null==g?6:/[gprs]/.test(p)?Math.max(1,Math.min(21,g)):Math.max(0,Math.min(20,g)),M.toString=function(){return t+""},M}return{format:o,formatPrefix:function(t,n){var e=o(((t=Tt(t)).type="f",t)),i=3*Math.max(-8,Math.min(8,Math.floor(Xt(n)/3))),r=Math.pow(10,-i),a=Zt[8+i/3];return function(t){return e(r*t)+a}}}}({decimal:".",thousands:",",grouping:[3],currency:["$",""]}),Ut=Gt.format,Vt=Gt.formatPrefix;var Bt=function(t,n,e,o){var s,u=function(t,n,e){var o=Math.abs(n-t)/Math.max(0,e),s=Math.pow(10,Math.floor(Math.log(o)/Math.LN10)),u=o/s;return u>=i?s*=10:u>=r?s*=5:u>=a&&(s*=2),n<t?-s:s}(t,n,e);switch((o=Tt(null==o?",f":o)).type){case"s":var l=Math.max(Math.abs(t),Math.abs(n));return null!=o.precision||isNaN(s=function(t,n){return Math.max(0,3*Math.max(-8,Math.min(8,Math.floor(Xt(n)/3)))-Xt(Math.abs(t)))}(u,l))||(o.precision=s),Vt(o,l);case"":case"e":case"g":case"p":case"r":null!=o.precision||isNaN(s=function(t,n){return t=Math.abs(t),n=Math.abs(n)-t,Math.max(0,Xt(n)-Xt(t))+1}(u,Math.max(Math.abs(t),Math.abs(n))))||(o.precision=s-("e"===o.type));break;case"f":case"%":null!=o.precision||isNaN(s=function(t){return Math.max(0,-Xt(Math.abs(t)))}(u))||(o.precision=s-2*("%"===o.type))}return Ut(o)};function Qt(){var t=function(){var t,n,e,i,r,a,o=Ft,s=Ft,u=wt,l=At;function c(){var t=Math.min(o.length,s.length);return l!==At&&(l=function(t,n){var e;return t>n&&(e=t,t=n,n=e),function(e){return Math.max(t,Math.min(n,e))}}(o[0],o[t-1])),i=t>2?It:Wt,r=a=null,h}function h(n){return isNaN(n=+n)?e:(r||(r=i(o.map(t),s,u)))(t(l(n)))}return h.invert=function(e){return l(n((a||(a=i(s,o.map(t),vt)))(e)))},h.domain=function(t){return arguments.length?(o=Array.from(t,Rt),c()):o.slice()},h.range=function(t){return arguments.length?(s=Array.from(t),c()):s.slice()},h.rangeRound=function(t){return s=Array.from(t),u=xt,c()},h.clamp=function(t){return arguments.length?(l=!!t||At,c()):l!==At},h.interpolate=function(t){return arguments.length?(u=t,c()):u},h.unknown=function(t){return arguments.length?(e=t,h):e},function(e,i){return t=e,n=i,c()}}()(At,At);return t.copy=function(){return function(t,n){return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown())}(t,Qt())},Ot.a.apply(t,arguments),function(t){var n=t.domain;return t.ticks=function(t){var e=n();return o(e[0],e[e.length-1],null==t?10:t)},t.tickFormat=function(t,e){var i=n();return Bt(i[0],i[i.length-1],null==t?10:t,e)},t.nice=function(e){null==e&&(e=10);var i,r=n(),a=0,o=r.length-1,u=r[a],l=r[o];return l<u&&(i=u,u=l,l=i,i=a,a=o,o=i),(i=s(u,l,e))>0?i=s(u=Math.floor(u/i)*i,l=Math.ceil(l/i)*i,e):i<0&&(i=s(u=Math.ceil(u*i)/i,l=Math.floor(l*i)/i,e)),i>0?(r[a]=Math.floor(u/i)*i,r[o]=Math.ceil(l/i)*i,n(r)):i<0&&(r[a]=Math.ceil(u*i)/i,r[o]=Math.floor(l*i)/i,n(r)),t},t}(t)}e.d(n,"a",(function(){return Qt}))},h8nK:function(t,n,e){"use strict";var i=function(t,n){return t<n?-1:t>n?1:t>=n?0:NaN},r=function(t){return 1===t.length&&(t=function(t){return function(n,e){return i(t(n),e)}}(t)),{left:function(n,e,i,r){for(null==i&&(i=0),null==r&&(r=n.length);i<r;){var a=i+r>>>1;t(n[a],e)<0?i=a+1:r=a}return i},right:function(n,e,i,r){for(null==i&&(i=0),null==r&&(r=n.length);i<r;){var a=i+r>>>1;t(n[a],e)>0?r=a:i=a+1}return i}}}(i),a=r.right;r.left,n.a=a}}]);