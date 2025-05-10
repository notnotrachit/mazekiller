(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Jr="176",vl=0,Ea=1,yl=2,xl=0,Uo=1,Ml=2,rn=3,Mn=0,mt=1,kt=2,yn=0,di=1,Bn=2,Ta=3,ba=4,Sl=5,On=100,El=101,Tl=102,bl=103,wl=104,Al=200,Cl=201,Rl=202,Pl=203,hr=204,ur=205,Dl=206,Ll=207,Il=208,Ul=209,Nl=210,Fl=211,Ol=212,zl=213,Bl=214,dr=0,fr=1,pr=2,mi=3,mr=4,gr=5,_r=6,vr=7,No=0,kl=1,Gl=2,xn=0,Fo=1,Hl=2,Vl=3,Wl=4,Xl=5,ql=6,Yl=7,Oo=300,gi=301,_i=302,yr=303,xr=304,Es=306,Ii=1e3,kn=1001,Mr=1002,Xt=1003,jl=1004,Wi=1005,Kt=1006,Ds=1007,Gn=1008,Zt=1009,zo=1010,Bo=1011,Ui=1012,Qr=1013,Hn=1014,ln=1015,Bi=1016,ea=1017,ta=1018,Ni=1020,ko=35902,Go=1021,Ho=1022,Wt=1023,Fi=1026,Oi=1027,Vo=1028,na=1029,Wo=1030,ia=1031,sa=1033,ps=33776,ms=33777,gs=33778,_s=33779,Sr=35840,Er=35841,Tr=35842,br=35843,wr=36196,Ar=37492,Cr=37496,Rr=37808,Pr=37809,Dr=37810,Lr=37811,Ir=37812,Ur=37813,Nr=37814,Fr=37815,Or=37816,zr=37817,Br=37818,kr=37819,Gr=37820,Hr=37821,vs=36492,Vr=36494,Wr=36495,Xo=36283,Xr=36284,qr=36285,Yr=36286,Kl=3200,$l=3201,qo=0,Zl=1,vn="",Ut="srgb",vi="srgb-linear",Ms="linear",Ke="srgb",Yn=7680,wa=519,Jl=512,Ql=513,ec=514,Yo=515,tc=516,nc=517,ic=518,sc=519,Aa=35044,Ca="300 es",cn=2e3,Ss=2001;class Wn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ls=Math.PI/180,jr=180/Math.PI;function ki(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(vt[s&255]+vt[s>>8&255]+vt[s>>16&255]+vt[s>>24&255]+"-"+vt[e&255]+vt[e>>8&255]+"-"+vt[e>>16&15|64]+vt[e>>24&255]+"-"+vt[t&63|128]+vt[t>>8&255]+"-"+vt[t>>16&255]+vt[t>>24&255]+vt[n&255]+vt[n>>8&255]+vt[n>>16&255]+vt[n>>24&255]).toLowerCase()}function Oe(s,e,t){return Math.max(e,Math.min(t,s))}function rc(s,e){return(s%e+e)%e}function Is(s,e,t){return(1-t)*s+t*e}function Ti(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function bt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Fe{constructor(e=0,t=0){Fe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Oe(this.x,e.x,t.x),this.y=Oe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Oe(this.x,e,t),this.y=Oe(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Oe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Oe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Pe{constructor(e,t,n,i,r,o,l,h,u){Pe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,l,h,u)}set(e,t,n,i,r,o,l,h,u){const p=this.elements;return p[0]=e,p[1]=i,p[2]=l,p[3]=t,p[4]=r,p[5]=h,p[6]=n,p[7]=o,p[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],l=n[3],h=n[6],u=n[1],p=n[4],a=n[7],c=n[2],d=n[5],g=n[8],_=i[0],m=i[3],f=i[6],y=i[1],T=i[4],x=i[7],D=i[2],A=i[5],w=i[8];return r[0]=o*_+l*y+h*D,r[3]=o*m+l*T+h*A,r[6]=o*f+l*x+h*w,r[1]=u*_+p*y+a*D,r[4]=u*m+p*T+a*A,r[7]=u*f+p*x+a*w,r[2]=c*_+d*y+g*D,r[5]=c*m+d*T+g*A,r[8]=c*f+d*x+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],l=e[5],h=e[6],u=e[7],p=e[8];return t*o*p-t*l*u-n*r*p+n*l*h+i*r*u-i*o*h}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],l=e[5],h=e[6],u=e[7],p=e[8],a=p*o-l*u,c=l*h-p*r,d=u*r-o*h,g=t*a+n*c+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=a*_,e[1]=(i*u-p*n)*_,e[2]=(l*n-i*o)*_,e[3]=c*_,e[4]=(p*t-i*h)*_,e[5]=(i*r-l*t)*_,e[6]=d*_,e[7]=(n*h-u*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,l){const h=Math.cos(r),u=Math.sin(r);return this.set(n*h,n*u,-n*(h*o+u*l)+o+e,-i*u,i*h,-i*(-u*o+h*l)+l+t,0,0,1),this}scale(e,t){return this.premultiply(Us.makeScale(e,t)),this}rotate(e){return this.premultiply(Us.makeRotation(-e)),this}translate(e,t){return this.premultiply(Us.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Us=new Pe;function jo(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function zi(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function ac(){const s=zi("canvas");return s.style.display="block",s}const Ra={};function ys(s){s in Ra||(Ra[s]=!0,console.warn(s))}function oc(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function lc(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function cc(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Pa=new Pe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Da=new Pe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function hc(){const s={enabled:!0,workingColorSpace:vi,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Ke&&(i.r=hn(i.r),i.g=hn(i.g),i.b=hn(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ke&&(i.r=fi(i.r),i.g=fi(i.g),i.b=fi(i.b))),i},fromWorkingColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},toWorkingColorSpace:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===vn?Ms:this.spaces[i].transfer},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[vi]:{primaries:e,whitePoint:n,transfer:Ms,toXYZ:Pa,fromXYZ:Da,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ut},outputColorSpaceConfig:{drawingBufferColorSpace:Ut}},[Ut]:{primaries:e,whitePoint:n,transfer:Ke,toXYZ:Pa,fromXYZ:Da,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ut}}}),s}const We=hc();function hn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function fi(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let jn;class uc{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{jn===void 0&&(jn=zi("canvas")),jn.width=e.width,jn.height=e.height;const i=jn.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=jn}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=zi("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=hn(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(hn(t[n]/255)*255):t[n]=hn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let dc=0;class ra{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:dc++}),this.uuid=ki(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,l=i.length;o<l;o++)i[o].isDataTexture?r.push(Ns(i[o].image)):r.push(Ns(i[o]))}else r=Ns(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Ns(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?uc.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let fc=0;class Et extends Wn{constructor(e=Et.DEFAULT_IMAGE,t=Et.DEFAULT_MAPPING,n=kn,i=kn,r=Kt,o=Gn,l=Wt,h=Zt,u=Et.DEFAULT_ANISOTROPY,p=vn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fc++}),this.uuid=ki(),this.name="",this.source=new ra(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=u,this.format=l,this.internalFormat=null,this.type=h,this.offset=new Fe(0,0),this.repeat=new Fe(1,1),this.center=new Fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isTextureArray=e.isTextureArray,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Oo)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ii:e.x=e.x-Math.floor(e.x);break;case kn:e.x=e.x<0?0:1;break;case Mr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ii:e.y=e.y-Math.floor(e.y);break;case kn:e.y=e.y<0?0:1;break;case Mr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Et.DEFAULT_IMAGE=null;Et.DEFAULT_MAPPING=Oo;Et.DEFAULT_ANISOTROPY=1;class $e{constructor(e=0,t=0,n=0,i=1){$e.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const h=e.elements,u=h[0],p=h[4],a=h[8],c=h[1],d=h[5],g=h[9],_=h[2],m=h[6],f=h[10];if(Math.abs(p-c)<.01&&Math.abs(a-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(p+c)<.1&&Math.abs(a+_)<.1&&Math.abs(g+m)<.1&&Math.abs(u+d+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(u+1)/2,x=(d+1)/2,D=(f+1)/2,A=(p+c)/4,w=(a+_)/4,L=(g+m)/4;return T>x&&T>D?T<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(T),i=A/n,r=w/n):x>D?x<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(x),n=A/i,r=L/i):D<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(D),n=w/r,i=L/r),this.set(n,i,r,t),this}let y=Math.sqrt((m-g)*(m-g)+(a-_)*(a-_)+(c-p)*(c-p));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(a-_)/y,this.z=(c-p)/y,this.w=Math.acos((u+d+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Oe(this.x,e.x,t.x),this.y=Oe(this.y,e.y,t.y),this.z=Oe(this.z,e.z,t.z),this.w=Oe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Oe(this.x,e,t),this.y=Oe(this.y,e,t),this.z=Oe(this.z,e,t),this.w=Oe(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Oe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class pc extends Wn{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth?n.depth:1,this.scissor=new $e(0,0,e,t),this.scissorTest=!1,this.viewport=new $e(0,0,e,t);const i={width:e,height:t,depth:this.depth};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},n);const r=new Et(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let l=0;l<o;l++)this.textures[l]=r.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new ra(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vn extends pc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Ko extends Et{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class mc extends Et{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,l){let h=n[i+0],u=n[i+1],p=n[i+2],a=n[i+3];const c=r[o+0],d=r[o+1],g=r[o+2],_=r[o+3];if(l===0){e[t+0]=h,e[t+1]=u,e[t+2]=p,e[t+3]=a;return}if(l===1){e[t+0]=c,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(a!==_||h!==c||u!==d||p!==g){let m=1-l;const f=h*c+u*d+p*g+a*_,y=f>=0?1:-1,T=1-f*f;if(T>Number.EPSILON){const D=Math.sqrt(T),A=Math.atan2(D,f*y);m=Math.sin(m*A)/D,l=Math.sin(l*A)/D}const x=l*y;if(h=h*m+c*x,u=u*m+d*x,p=p*m+g*x,a=a*m+_*x,m===1-l){const D=1/Math.sqrt(h*h+u*u+p*p+a*a);h*=D,u*=D,p*=D,a*=D}}e[t]=h,e[t+1]=u,e[t+2]=p,e[t+3]=a}static multiplyQuaternionsFlat(e,t,n,i,r,o){const l=n[i],h=n[i+1],u=n[i+2],p=n[i+3],a=r[o],c=r[o+1],d=r[o+2],g=r[o+3];return e[t]=l*g+p*a+h*d-u*c,e[t+1]=h*g+p*c+u*a-l*d,e[t+2]=u*g+p*d+l*c-h*a,e[t+3]=p*g-l*a-h*c-u*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,l=Math.cos,h=Math.sin,u=l(n/2),p=l(i/2),a=l(r/2),c=h(n/2),d=h(i/2),g=h(r/2);switch(o){case"XYZ":this._x=c*p*a+u*d*g,this._y=u*d*a-c*p*g,this._z=u*p*g+c*d*a,this._w=u*p*a-c*d*g;break;case"YXZ":this._x=c*p*a+u*d*g,this._y=u*d*a-c*p*g,this._z=u*p*g-c*d*a,this._w=u*p*a+c*d*g;break;case"ZXY":this._x=c*p*a-u*d*g,this._y=u*d*a+c*p*g,this._z=u*p*g+c*d*a,this._w=u*p*a-c*d*g;break;case"ZYX":this._x=c*p*a-u*d*g,this._y=u*d*a+c*p*g,this._z=u*p*g-c*d*a,this._w=u*p*a+c*d*g;break;case"YZX":this._x=c*p*a+u*d*g,this._y=u*d*a+c*p*g,this._z=u*p*g-c*d*a,this._w=u*p*a-c*d*g;break;case"XZY":this._x=c*p*a-u*d*g,this._y=u*d*a-c*p*g,this._z=u*p*g+c*d*a,this._w=u*p*a+c*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],l=t[5],h=t[9],u=t[2],p=t[6],a=t[10],c=n+l+a;if(c>0){const d=.5/Math.sqrt(c+1);this._w=.25/d,this._x=(p-h)*d,this._y=(r-u)*d,this._z=(o-i)*d}else if(n>l&&n>a){const d=2*Math.sqrt(1+n-l-a);this._w=(p-h)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+u)/d}else if(l>a){const d=2*Math.sqrt(1+l-n-a);this._w=(r-u)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(h+p)/d}else{const d=2*Math.sqrt(1+a-n-l);this._w=(o-i)/d,this._x=(r+u)/d,this._y=(h+p)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Oe(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,l=t._x,h=t._y,u=t._z,p=t._w;return this._x=n*p+o*l+i*u-r*h,this._y=i*p+o*h+r*l-n*u,this._z=r*p+o*u+n*h-i*l,this._w=o*p-n*l-i*h-r*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let l=o*e._w+n*e._x+i*e._y+r*e._z;if(l<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,l=-l):this.copy(e),l>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const h=1-l*l;if(h<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}const u=Math.sqrt(h),p=Math.atan2(u,l),a=Math.sin((1-t)*p)/u,c=Math.sin(t*p)/u;return this._w=o*a+this._w*c,this._x=n*a+this._x*c,this._y=i*a+this._y*c,this._z=r*a+this._z*c,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,n=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(La.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(La.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,l=e.z,h=e.w,u=2*(o*i-l*n),p=2*(l*t-r*i),a=2*(r*n-o*t);return this.x=t+h*u+o*a-l*p,this.y=n+h*p+l*u-r*a,this.z=i+h*a+r*p-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Oe(this.x,e.x,t.x),this.y=Oe(this.y,e.y,t.y),this.z=Oe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Oe(this.x,e,t),this.y=Oe(this.y,e,t),this.z=Oe(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Oe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,l=t.y,h=t.z;return this.x=i*h-r*l,this.y=r*o-n*h,this.z=n*l-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Fs.copy(this).projectOnVector(e),this.sub(Fs)}reflect(e){return this.sub(Fs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Oe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Fs=new P,La=new Xn;class Gi{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ot.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ot.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Ot.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,l=r.count;o<l;o++)e.isMesh===!0?e.getVertexPosition(o,Ot):Ot.fromBufferAttribute(r,o),Ot.applyMatrix4(e.matrixWorld),this.expandByPoint(Ot);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Xi.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Xi.copy(n.boundingBox)),Xi.applyMatrix4(e.matrixWorld),this.union(Xi)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ot),Ot.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(bi),qi.subVectors(this.max,bi),Kn.subVectors(e.a,bi),$n.subVectors(e.b,bi),Zn.subVectors(e.c,bi),dn.subVectors($n,Kn),fn.subVectors(Zn,$n),bn.subVectors(Kn,Zn);let t=[0,-dn.z,dn.y,0,-fn.z,fn.y,0,-bn.z,bn.y,dn.z,0,-dn.x,fn.z,0,-fn.x,bn.z,0,-bn.x,-dn.y,dn.x,0,-fn.y,fn.x,0,-bn.y,bn.x,0];return!Os(t,Kn,$n,Zn,qi)||(t=[1,0,0,0,1,0,0,0,1],!Os(t,Kn,$n,Zn,qi))?!1:(Yi.crossVectors(dn,fn),t=[Yi.x,Yi.y,Yi.z],Os(t,Kn,$n,Zn,qi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ot).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ot).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Qt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Qt=[new P,new P,new P,new P,new P,new P,new P,new P],Ot=new P,Xi=new Gi,Kn=new P,$n=new P,Zn=new P,dn=new P,fn=new P,bn=new P,bi=new P,qi=new P,Yi=new P,wn=new P;function Os(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){wn.fromArray(s,r);const l=i.x*Math.abs(wn.x)+i.y*Math.abs(wn.y)+i.z*Math.abs(wn.z),h=e.dot(wn),u=t.dot(wn),p=n.dot(wn);if(Math.max(-Math.max(h,u,p),Math.min(h,u,p))>l)return!1}return!0}const gc=new Gi,wi=new P,zs=new P;class Ts{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):gc.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;wi.subVectors(e,this.center);const t=wi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(wi,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(zs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(wi.copy(e.center).add(zs)),this.expandByPoint(wi.copy(e.center).sub(zs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const en=new P,Bs=new P,ji=new P,pn=new P,ks=new P,Ki=new P,Gs=new P;class aa{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,en)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=en.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(en.copy(this.origin).addScaledVector(this.direction,t),en.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Bs.copy(e).add(t).multiplyScalar(.5),ji.copy(t).sub(e).normalize(),pn.copy(this.origin).sub(Bs);const r=e.distanceTo(t)*.5,o=-this.direction.dot(ji),l=pn.dot(this.direction),h=-pn.dot(ji),u=pn.lengthSq(),p=Math.abs(1-o*o);let a,c,d,g;if(p>0)if(a=o*h-l,c=o*l-h,g=r*p,a>=0)if(c>=-g)if(c<=g){const _=1/p;a*=_,c*=_,d=a*(a+o*c+2*l)+c*(o*a+c+2*h)+u}else c=r,a=Math.max(0,-(o*c+l)),d=-a*a+c*(c+2*h)+u;else c=-r,a=Math.max(0,-(o*c+l)),d=-a*a+c*(c+2*h)+u;else c<=-g?(a=Math.max(0,-(-o*r+l)),c=a>0?-r:Math.min(Math.max(-r,-h),r),d=-a*a+c*(c+2*h)+u):c<=g?(a=0,c=Math.min(Math.max(-r,-h),r),d=c*(c+2*h)+u):(a=Math.max(0,-(o*r+l)),c=a>0?r:Math.min(Math.max(-r,-h),r),d=-a*a+c*(c+2*h)+u);else c=o>0?-r:r,a=Math.max(0,-(o*c+l)),d=-a*a+c*(c+2*h)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,a),i&&i.copy(Bs).addScaledVector(ji,c),d}intersectSphere(e,t){en.subVectors(e.center,this.origin);const n=en.dot(this.direction),i=en.dot(en)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),l=n-o,h=n+o;return h<0?null:l<0?this.at(h,t):this.at(l,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,l,h;const u=1/this.direction.x,p=1/this.direction.y,a=1/this.direction.z,c=this.origin;return u>=0?(n=(e.min.x-c.x)*u,i=(e.max.x-c.x)*u):(n=(e.max.x-c.x)*u,i=(e.min.x-c.x)*u),p>=0?(r=(e.min.y-c.y)*p,o=(e.max.y-c.y)*p):(r=(e.max.y-c.y)*p,o=(e.min.y-c.y)*p),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),a>=0?(l=(e.min.z-c.z)*a,h=(e.max.z-c.z)*a):(l=(e.max.z-c.z)*a,h=(e.min.z-c.z)*a),n>h||l>i)||((l>n||n!==n)&&(n=l),(h<i||i!==i)&&(i=h),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,en)!==null}intersectTriangle(e,t,n,i,r){ks.subVectors(t,e),Ki.subVectors(n,e),Gs.crossVectors(ks,Ki);let o=this.direction.dot(Gs),l;if(o>0){if(i)return null;l=1}else if(o<0)l=-1,o=-o;else return null;pn.subVectors(this.origin,e);const h=l*this.direction.dot(Ki.crossVectors(pn,Ki));if(h<0)return null;const u=l*this.direction.dot(ks.cross(pn));if(u<0||h+u>o)return null;const p=-l*pn.dot(Gs);return p<0?null:this.at(p/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qe{constructor(e,t,n,i,r,o,l,h,u,p,a,c,d,g,_,m){Qe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,l,h,u,p,a,c,d,g,_,m)}set(e,t,n,i,r,o,l,h,u,p,a,c,d,g,_,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=i,f[1]=r,f[5]=o,f[9]=l,f[13]=h,f[2]=u,f[6]=p,f[10]=a,f[14]=c,f[3]=d,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Jn.setFromMatrixColumn(e,0).length(),r=1/Jn.setFromMatrixColumn(e,1).length(),o=1/Jn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),l=Math.sin(n),h=Math.cos(i),u=Math.sin(i),p=Math.cos(r),a=Math.sin(r);if(e.order==="XYZ"){const c=o*p,d=o*a,g=l*p,_=l*a;t[0]=h*p,t[4]=-h*a,t[8]=u,t[1]=d+g*u,t[5]=c-_*u,t[9]=-l*h,t[2]=_-c*u,t[6]=g+d*u,t[10]=o*h}else if(e.order==="YXZ"){const c=h*p,d=h*a,g=u*p,_=u*a;t[0]=c+_*l,t[4]=g*l-d,t[8]=o*u,t[1]=o*a,t[5]=o*p,t[9]=-l,t[2]=d*l-g,t[6]=_+c*l,t[10]=o*h}else if(e.order==="ZXY"){const c=h*p,d=h*a,g=u*p,_=u*a;t[0]=c-_*l,t[4]=-o*a,t[8]=g+d*l,t[1]=d+g*l,t[5]=o*p,t[9]=_-c*l,t[2]=-o*u,t[6]=l,t[10]=o*h}else if(e.order==="ZYX"){const c=o*p,d=o*a,g=l*p,_=l*a;t[0]=h*p,t[4]=g*u-d,t[8]=c*u+_,t[1]=h*a,t[5]=_*u+c,t[9]=d*u-g,t[2]=-u,t[6]=l*h,t[10]=o*h}else if(e.order==="YZX"){const c=o*h,d=o*u,g=l*h,_=l*u;t[0]=h*p,t[4]=_-c*a,t[8]=g*a+d,t[1]=a,t[5]=o*p,t[9]=-l*p,t[2]=-u*p,t[6]=d*a+g,t[10]=c-_*a}else if(e.order==="XZY"){const c=o*h,d=o*u,g=l*h,_=l*u;t[0]=h*p,t[4]=-a,t[8]=u*p,t[1]=c*a+_,t[5]=o*p,t[9]=d*a-g,t[2]=g*a-d,t[6]=l*p,t[10]=_*a+c}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_c,e,vc)}lookAt(e,t,n){const i=this.elements;return At.subVectors(e,t),At.lengthSq()===0&&(At.z=1),At.normalize(),mn.crossVectors(n,At),mn.lengthSq()===0&&(Math.abs(n.z)===1?At.x+=1e-4:At.z+=1e-4,At.normalize(),mn.crossVectors(n,At)),mn.normalize(),$i.crossVectors(At,mn),i[0]=mn.x,i[4]=$i.x,i[8]=At.x,i[1]=mn.y,i[5]=$i.y,i[9]=At.y,i[2]=mn.z,i[6]=$i.z,i[10]=At.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],l=n[4],h=n[8],u=n[12],p=n[1],a=n[5],c=n[9],d=n[13],g=n[2],_=n[6],m=n[10],f=n[14],y=n[3],T=n[7],x=n[11],D=n[15],A=i[0],w=i[4],L=i[8],S=i[12],M=i[1],C=i[5],k=i[9],O=i[13],V=i[2],j=i[6],X=i[10],Z=i[14],H=i[3],ie=i[7],he=i[11],_e=i[15];return r[0]=o*A+l*M+h*V+u*H,r[4]=o*w+l*C+h*j+u*ie,r[8]=o*L+l*k+h*X+u*he,r[12]=o*S+l*O+h*Z+u*_e,r[1]=p*A+a*M+c*V+d*H,r[5]=p*w+a*C+c*j+d*ie,r[9]=p*L+a*k+c*X+d*he,r[13]=p*S+a*O+c*Z+d*_e,r[2]=g*A+_*M+m*V+f*H,r[6]=g*w+_*C+m*j+f*ie,r[10]=g*L+_*k+m*X+f*he,r[14]=g*S+_*O+m*Z+f*_e,r[3]=y*A+T*M+x*V+D*H,r[7]=y*w+T*C+x*j+D*ie,r[11]=y*L+T*k+x*X+D*he,r[15]=y*S+T*O+x*Z+D*_e,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],l=e[5],h=e[9],u=e[13],p=e[2],a=e[6],c=e[10],d=e[14],g=e[3],_=e[7],m=e[11],f=e[15];return g*(+r*h*a-i*u*a-r*l*c+n*u*c+i*l*d-n*h*d)+_*(+t*h*d-t*u*c+r*o*c-i*o*d+i*u*p-r*h*p)+m*(+t*u*a-t*l*d-r*o*a+n*o*d+r*l*p-n*u*p)+f*(-i*l*p-t*h*a+t*l*c+i*o*a-n*o*c+n*h*p)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],l=e[5],h=e[6],u=e[7],p=e[8],a=e[9],c=e[10],d=e[11],g=e[12],_=e[13],m=e[14],f=e[15],y=a*m*u-_*c*u+_*h*d-l*m*d-a*h*f+l*c*f,T=g*c*u-p*m*u-g*h*d+o*m*d+p*h*f-o*c*f,x=p*_*u-g*a*u+g*l*d-o*_*d-p*l*f+o*a*f,D=g*a*h-p*_*h-g*l*c+o*_*c+p*l*m-o*a*m,A=t*y+n*T+i*x+r*D;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/A;return e[0]=y*w,e[1]=(_*c*r-a*m*r-_*i*d+n*m*d+a*i*f-n*c*f)*w,e[2]=(l*m*r-_*h*r+_*i*u-n*m*u-l*i*f+n*h*f)*w,e[3]=(a*h*r-l*c*r-a*i*u+n*c*u+l*i*d-n*h*d)*w,e[4]=T*w,e[5]=(p*m*r-g*c*r+g*i*d-t*m*d-p*i*f+t*c*f)*w,e[6]=(g*h*r-o*m*r-g*i*u+t*m*u+o*i*f-t*h*f)*w,e[7]=(o*c*r-p*h*r+p*i*u-t*c*u-o*i*d+t*h*d)*w,e[8]=x*w,e[9]=(g*a*r-p*_*r-g*n*d+t*_*d+p*n*f-t*a*f)*w,e[10]=(o*_*r-g*l*r+g*n*u-t*_*u-o*n*f+t*l*f)*w,e[11]=(p*l*r-o*a*r-p*n*u+t*a*u+o*n*d-t*l*d)*w,e[12]=D*w,e[13]=(p*_*i-g*a*i+g*n*c-t*_*c-p*n*m+t*a*m)*w,e[14]=(g*l*i-o*_*i-g*n*h+t*_*h+o*n*m-t*l*m)*w,e[15]=(o*a*i-p*l*i+p*n*h-t*a*h-o*n*c+t*l*c)*w,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,l=e.y,h=e.z,u=r*o,p=r*l;return this.set(u*o+n,u*l-i*h,u*h+i*l,0,u*l+i*h,p*l+n,p*h-i*o,0,u*h-i*l,p*h+i*o,r*h*h+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,l=t._z,h=t._w,u=r+r,p=o+o,a=l+l,c=r*u,d=r*p,g=r*a,_=o*p,m=o*a,f=l*a,y=h*u,T=h*p,x=h*a,D=n.x,A=n.y,w=n.z;return i[0]=(1-(_+f))*D,i[1]=(d+x)*D,i[2]=(g-T)*D,i[3]=0,i[4]=(d-x)*A,i[5]=(1-(c+f))*A,i[6]=(m+y)*A,i[7]=0,i[8]=(g+T)*w,i[9]=(m-y)*w,i[10]=(1-(c+_))*w,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Jn.set(i[0],i[1],i[2]).length();const o=Jn.set(i[4],i[5],i[6]).length(),l=Jn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],zt.copy(this);const u=1/r,p=1/o,a=1/l;return zt.elements[0]*=u,zt.elements[1]*=u,zt.elements[2]*=u,zt.elements[4]*=p,zt.elements[5]*=p,zt.elements[6]*=p,zt.elements[8]*=a,zt.elements[9]*=a,zt.elements[10]*=a,t.setFromRotationMatrix(zt),n.x=r,n.y=o,n.z=l,this}makePerspective(e,t,n,i,r,o,l=cn){const h=this.elements,u=2*r/(t-e),p=2*r/(n-i),a=(t+e)/(t-e),c=(n+i)/(n-i);let d,g;if(l===cn)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(l===Ss)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return h[0]=u,h[4]=0,h[8]=a,h[12]=0,h[1]=0,h[5]=p,h[9]=c,h[13]=0,h[2]=0,h[6]=0,h[10]=d,h[14]=g,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,n,i,r,o,l=cn){const h=this.elements,u=1/(t-e),p=1/(n-i),a=1/(o-r),c=(t+e)*u,d=(n+i)*p;let g,_;if(l===cn)g=(o+r)*a,_=-2*a;else if(l===Ss)g=r*a,_=-1*a;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return h[0]=2*u,h[4]=0,h[8]=0,h[12]=-c,h[1]=0,h[5]=2*p,h[9]=0,h[13]=-d,h[2]=0,h[6]=0,h[10]=_,h[14]=-g,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Jn=new P,zt=new Qe,_c=new P(0,0,0),vc=new P(1,1,1),mn=new P,$i=new P,At=new P,Ia=new Qe,Ua=new Xn;class qt{constructor(e=0,t=0,n=0,i=qt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],l=i[8],h=i[1],u=i[5],p=i[9],a=i[2],c=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(Oe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-p,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(c,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Oe(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(l,d),this._z=Math.atan2(h,u)):(this._y=Math.atan2(-a,r),this._z=0);break;case"ZXY":this._x=Math.asin(Oe(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(-a,d),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(h,r));break;case"ZYX":this._y=Math.asin(-Oe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(c,d),this._z=Math.atan2(h,r)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Oe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-p,u),this._y=Math.atan2(-a,r)):(this._x=0,this._y=Math.atan2(l,d));break;case"XZY":this._z=Math.asin(-Oe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(c,u),this._y=Math.atan2(l,r)):(this._x=Math.atan2(-p,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ia.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ia,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ua.setFromEuler(this),this.setFromQuaternion(Ua,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}qt.DEFAULT_ORDER="XYZ";class oa{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let yc=0;const Na=new P,Qn=new Xn,tn=new Qe,Zi=new P,Ai=new P,xc=new P,Mc=new Xn,Fa=new P(1,0,0),Oa=new P(0,1,0),za=new P(0,0,1),Ba={type:"added"},Sc={type:"removed"},ei={type:"childadded",child:null},Hs={type:"childremoved",child:null};class ht extends Wn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yc++}),this.uuid=ki(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ht.DEFAULT_UP.clone();const e=new P,t=new qt,n=new Xn,i=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Qe},normalMatrix:{value:new Pe}}),this.matrix=new Qe,this.matrixWorld=new Qe,this.matrixAutoUpdate=ht.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new oa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Qn.setFromAxisAngle(e,t),this.quaternion.multiply(Qn),this}rotateOnWorldAxis(e,t){return Qn.setFromAxisAngle(e,t),this.quaternion.premultiply(Qn),this}rotateX(e){return this.rotateOnAxis(Fa,e)}rotateY(e){return this.rotateOnAxis(Oa,e)}rotateZ(e){return this.rotateOnAxis(za,e)}translateOnAxis(e,t){return Na.copy(e).applyQuaternion(this.quaternion),this.position.add(Na.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Fa,e)}translateY(e){return this.translateOnAxis(Oa,e)}translateZ(e){return this.translateOnAxis(za,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(tn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Zi.copy(e):Zi.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ai.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?tn.lookAt(Ai,Zi,this.up):tn.lookAt(Zi,Ai,this.up),this.quaternion.setFromRotationMatrix(tn),i&&(tn.extractRotation(i.matrixWorld),Qn.setFromRotationMatrix(tn),this.quaternion.premultiply(Qn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ba),ei.child=e,this.dispatchEvent(ei),ei.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Sc),Hs.child=e,this.dispatchEvent(Hs),Hs.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),tn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),tn.multiply(e.parent.matrixWorld)),e.applyMatrix4(tn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ba),ei.child=e,this.dispatchEvent(ei),ei.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ai,e,xc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ai,Mc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?{min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}:void 0,boundingSphere:l.boundingSphere?{radius:l.boundingSphere.radius,center:l.boundingSphere.center.toArray()}:void 0})),i.instanceInfo=this._instanceInfo.map(l=>({...l})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function r(l,h){return l[h.uuid]===void 0&&(l[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const h=l.shapes;if(Array.isArray(h))for(let u=0,p=h.length;u<p;u++){const a=h[u];r(e.shapes,a)}else r(e.shapes,h)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let h=0,u=this.material.length;h<u;h++)l.push(r(e.materials,this.material[h]));i.material=l}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let l=0;l<this.children.length;l++)i.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let l=0;l<this.animations.length;l++){const h=this.animations[l];i.animations.push(r(e.animations,h))}}if(t){const l=o(e.geometries),h=o(e.materials),u=o(e.textures),p=o(e.images),a=o(e.shapes),c=o(e.skeletons),d=o(e.animations),g=o(e.nodes);l.length>0&&(n.geometries=l),h.length>0&&(n.materials=h),u.length>0&&(n.textures=u),p.length>0&&(n.images=p),a.length>0&&(n.shapes=a),c.length>0&&(n.skeletons=c),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(l){const h=[];for(const u in l){const p=l[u];delete p.metadata,h.push(p)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}ht.DEFAULT_UP=new P(0,1,0);ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Bt=new P,nn=new P,Vs=new P,sn=new P,ti=new P,ni=new P,ka=new P,Ws=new P,Xs=new P,qs=new P,Ys=new $e,js=new $e,Ks=new $e;class Gt{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Bt.subVectors(e,t),i.cross(Bt);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Bt.subVectors(i,t),nn.subVectors(n,t),Vs.subVectors(e,t);const o=Bt.dot(Bt),l=Bt.dot(nn),h=Bt.dot(Vs),u=nn.dot(nn),p=nn.dot(Vs),a=o*u-l*l;if(a===0)return r.set(0,0,0),null;const c=1/a,d=(u*h-l*p)*c,g=(o*p-l*h)*c;return r.set(1-d-g,g,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,sn)===null?!1:sn.x>=0&&sn.y>=0&&sn.x+sn.y<=1}static getInterpolation(e,t,n,i,r,o,l,h){return this.getBarycoord(e,t,n,i,sn)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(r,sn.x),h.addScaledVector(o,sn.y),h.addScaledVector(l,sn.z),h)}static getInterpolatedAttribute(e,t,n,i,r,o){return Ys.setScalar(0),js.setScalar(0),Ks.setScalar(0),Ys.fromBufferAttribute(e,t),js.fromBufferAttribute(e,n),Ks.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Ys,r.x),o.addScaledVector(js,r.y),o.addScaledVector(Ks,r.z),o}static isFrontFacing(e,t,n,i){return Bt.subVectors(n,t),nn.subVectors(e,t),Bt.cross(nn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bt.subVectors(this.c,this.b),nn.subVectors(this.a,this.b),Bt.cross(nn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Gt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Gt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return Gt.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Gt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Gt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,l;ti.subVectors(i,n),ni.subVectors(r,n),Ws.subVectors(e,n);const h=ti.dot(Ws),u=ni.dot(Ws);if(h<=0&&u<=0)return t.copy(n);Xs.subVectors(e,i);const p=ti.dot(Xs),a=ni.dot(Xs);if(p>=0&&a<=p)return t.copy(i);const c=h*a-p*u;if(c<=0&&h>=0&&p<=0)return o=h/(h-p),t.copy(n).addScaledVector(ti,o);qs.subVectors(e,r);const d=ti.dot(qs),g=ni.dot(qs);if(g>=0&&d<=g)return t.copy(r);const _=d*u-h*g;if(_<=0&&u>=0&&g<=0)return l=u/(u-g),t.copy(n).addScaledVector(ni,l);const m=p*g-d*a;if(m<=0&&a-p>=0&&d-g>=0)return ka.subVectors(r,i),l=(a-p)/(a-p+(d-g)),t.copy(i).addScaledVector(ka,l);const f=1/(m+_+c);return o=_*f,l=c*f,t.copy(n).addScaledVector(ti,o).addScaledVector(ni,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const $o={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gn={h:0,s:0,l:0},Ji={h:0,s:0,l:0};function $s(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class De{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ut){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,We.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=We.workingColorSpace){return this.r=e,this.g=t,this.b=n,We.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=We.workingColorSpace){if(e=rc(e,1),t=Oe(t,0,1),n=Oe(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=$s(o,r,e+1/3),this.g=$s(o,r,e),this.b=$s(o,r,e-1/3)}return We.toWorkingColorSpace(this,i),this}setStyle(e,t=Ut){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],l=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ut){const n=$o[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=hn(e.r),this.g=hn(e.g),this.b=hn(e.b),this}copyLinearToSRGB(e){return this.r=fi(e.r),this.g=fi(e.g),this.b=fi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ut){return We.fromWorkingColorSpace(yt.copy(this),e),Math.round(Oe(yt.r*255,0,255))*65536+Math.round(Oe(yt.g*255,0,255))*256+Math.round(Oe(yt.b*255,0,255))}getHexString(e=Ut){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=We.workingColorSpace){We.fromWorkingColorSpace(yt.copy(this),t);const n=yt.r,i=yt.g,r=yt.b,o=Math.max(n,i,r),l=Math.min(n,i,r);let h,u;const p=(l+o)/2;if(l===o)h=0,u=0;else{const a=o-l;switch(u=p<=.5?a/(o+l):a/(2-o-l),o){case n:h=(i-r)/a+(i<r?6:0);break;case i:h=(r-n)/a+2;break;case r:h=(n-i)/a+4;break}h/=6}return e.h=h,e.s=u,e.l=p,e}getRGB(e,t=We.workingColorSpace){return We.fromWorkingColorSpace(yt.copy(this),t),e.r=yt.r,e.g=yt.g,e.b=yt.b,e}getStyle(e=Ut){We.fromWorkingColorSpace(yt.copy(this),e);const t=yt.r,n=yt.g,i=yt.b;return e!==Ut?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(gn),this.setHSL(gn.h+e,gn.s+t,gn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(gn),e.getHSL(Ji);const n=Is(gn.h,Ji.h,t),i=Is(gn.s,Ji.s,t),r=Is(gn.l,Ji.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const yt=new De;De.NAMES=$o;let Ec=0;class Mi extends Wn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ec++}),this.uuid=ki(),this.name="",this.type="Material",this.blending=di,this.side=Mn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hr,this.blendDst=ur,this.blendEquation=On,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new De(0,0,0),this.blendAlpha=0,this.depthFunc=mi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yn,this.stencilZFail=Yn,this.stencilZPass=Yn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==di&&(n.blending=this.blending),this.side!==Mn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==hr&&(n.blendSrc=this.blendSrc),this.blendDst!==ur&&(n.blendDst=this.blendDst),this.blendEquation!==On&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==mi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wa&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Yn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Yn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const l in r){const h=r[l];delete h.metadata,o.push(h)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class an extends Mi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qt,this.combine=No,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ct=new P,Qi=new Fe;let Tc=0;class St{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Tc++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Aa,this.updateRanges=[],this.gpuType=ln,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Qi.fromBufferAttribute(this,t),Qi.applyMatrix3(e),this.setXY(t,Qi.x,Qi.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.applyMatrix3(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.applyMatrix4(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.applyNormalMatrix(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.transformDirection(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ti(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=bt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ti(t,this.array)),t}setX(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ti(t,this.array)),t}setY(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ti(t,this.array)),t}setZ(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ti(t,this.array)),t}setW(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),i=bt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),i=bt(i,this.array),r=bt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Aa&&(e.usage=this.usage),e}}class Zo extends St{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Jo extends St{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class at extends St{constructor(e,t,n){super(new Float32Array(e),t,n)}}let bc=0;const It=new Qe,Zs=new ht,ii=new P,Ct=new Gi,Ci=new Gi,ft=new P;class pt extends Wn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bc++}),this.uuid=ki(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(jo(e)?Jo:Zo)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Pe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return It.makeRotationFromQuaternion(e),this.applyMatrix4(It),this}rotateX(e){return It.makeRotationX(e),this.applyMatrix4(It),this}rotateY(e){return It.makeRotationY(e),this.applyMatrix4(It),this}rotateZ(e){return It.makeRotationZ(e),this.applyMatrix4(It),this}translate(e,t,n){return It.makeTranslation(e,t,n),this.applyMatrix4(It),this}scale(e,t,n){return It.makeScale(e,t,n),this.applyMatrix4(It),this}lookAt(e){return Zs.lookAt(e),Zs.updateMatrix(),this.applyMatrix4(Zs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ii).negate(),this.translate(ii.x,ii.y,ii.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new at(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Ct.setFromBufferAttribute(r),this.morphTargetsRelative?(ft.addVectors(this.boundingBox.min,Ct.min),this.boundingBox.expandByPoint(ft),ft.addVectors(this.boundingBox.max,Ct.max),this.boundingBox.expandByPoint(ft)):(this.boundingBox.expandByPoint(Ct.min),this.boundingBox.expandByPoint(Ct.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ts);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if(Ct.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];Ci.setFromBufferAttribute(l),this.morphTargetsRelative?(ft.addVectors(Ct.min,Ci.min),Ct.expandByPoint(ft),ft.addVectors(Ct.max,Ci.max),Ct.expandByPoint(ft)):(Ct.expandByPoint(Ci.min),Ct.expandByPoint(Ci.max))}Ct.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)ft.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(ft));if(t)for(let r=0,o=t.length;r<o;r++){const l=t[r],h=this.morphTargetsRelative;for(let u=0,p=l.count;u<p;u++)ft.fromBufferAttribute(l,u),h&&(ii.fromBufferAttribute(e,u),ft.add(ii)),i=Math.max(i,n.distanceToSquared(ft))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new St(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),l=[],h=[];for(let L=0;L<n.count;L++)l[L]=new P,h[L]=new P;const u=new P,p=new P,a=new P,c=new Fe,d=new Fe,g=new Fe,_=new P,m=new P;function f(L,S,M){u.fromBufferAttribute(n,L),p.fromBufferAttribute(n,S),a.fromBufferAttribute(n,M),c.fromBufferAttribute(r,L),d.fromBufferAttribute(r,S),g.fromBufferAttribute(r,M),p.sub(u),a.sub(u),d.sub(c),g.sub(c);const C=1/(d.x*g.y-g.x*d.y);isFinite(C)&&(_.copy(p).multiplyScalar(g.y).addScaledVector(a,-d.y).multiplyScalar(C),m.copy(a).multiplyScalar(d.x).addScaledVector(p,-g.x).multiplyScalar(C),l[L].add(_),l[S].add(_),l[M].add(_),h[L].add(m),h[S].add(m),h[M].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let L=0,S=y.length;L<S;++L){const M=y[L],C=M.start,k=M.count;for(let O=C,V=C+k;O<V;O+=3)f(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const T=new P,x=new P,D=new P,A=new P;function w(L){D.fromBufferAttribute(i,L),A.copy(D);const S=l[L];T.copy(S),T.sub(D.multiplyScalar(D.dot(S))).normalize(),x.crossVectors(A,S);const C=x.dot(h[L])<0?-1:1;o.setXYZW(L,T.x,T.y,T.z,C)}for(let L=0,S=y.length;L<S;++L){const M=y[L],C=M.start,k=M.count;for(let O=C,V=C+k;O<V;O+=3)w(e.getX(O+0)),w(e.getX(O+1)),w(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new St(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let c=0,d=n.count;c<d;c++)n.setXYZ(c,0,0,0);const i=new P,r=new P,o=new P,l=new P,h=new P,u=new P,p=new P,a=new P;if(e)for(let c=0,d=e.count;c<d;c+=3){const g=e.getX(c+0),_=e.getX(c+1),m=e.getX(c+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),p.subVectors(o,r),a.subVectors(i,r),p.cross(a),l.fromBufferAttribute(n,g),h.fromBufferAttribute(n,_),u.fromBufferAttribute(n,m),l.add(p),h.add(p),u.add(p),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(_,h.x,h.y,h.z),n.setXYZ(m,u.x,u.y,u.z)}else for(let c=0,d=t.count;c<d;c+=3)i.fromBufferAttribute(t,c+0),r.fromBufferAttribute(t,c+1),o.fromBufferAttribute(t,c+2),p.subVectors(o,r),a.subVectors(i,r),p.cross(a),n.setXYZ(c+0,p.x,p.y,p.z),n.setXYZ(c+1,p.x,p.y,p.z),n.setXYZ(c+2,p.x,p.y,p.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ft.fromBufferAttribute(e,t),ft.normalize(),e.setXYZ(t,ft.x,ft.y,ft.z)}toNonIndexed(){function e(l,h){const u=l.array,p=l.itemSize,a=l.normalized,c=new u.constructor(h.length*p);let d=0,g=0;for(let _=0,m=h.length;_<m;_++){l.isInterleavedBufferAttribute?d=h[_]*l.data.stride+l.offset:d=h[_]*p;for(let f=0;f<p;f++)c[g++]=u[d++]}return new St(c,p,a)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new pt,n=this.index.array,i=this.attributes;for(const l in i){const h=i[l],u=e(h,n);t.setAttribute(l,u)}const r=this.morphAttributes;for(const l in r){const h=[],u=r[l];for(let p=0,a=u.length;p<a;p++){const c=u[p],d=e(c,n);h.push(d)}t.morphAttributes[l]=h}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const u in h)h[u]!==void 0&&(e[u]=h[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const h in n){const u=n[h];e.data.attributes[h]=u.toJSON(e.data)}const i={};let r=!1;for(const h in this.morphAttributes){const u=this.morphAttributes[h],p=[];for(let a=0,c=u.length;a<c;a++){const d=u[a];p.push(d.toJSON(e.data))}p.length>0&&(i[h]=p,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere={center:l.center.toArray(),radius:l.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const u in i){const p=i[u];this.setAttribute(u,p.clone(t))}const r=e.morphAttributes;for(const u in r){const p=[],a=r[u];for(let c=0,d=a.length;c<d;c++)p.push(a[c].clone(t));this.morphAttributes[u]=p}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,p=o.length;u<p;u++){const a=o[u];this.addGroup(a.start,a.count,a.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ga=new Qe,An=new aa,es=new Ts,Ha=new P,ts=new P,ns=new P,is=new P,Js=new P,ss=new P,Va=new P,rs=new P;class Ue extends ht{constructor(e=new pt,t=new an){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const l=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const l=this.morphTargetInfluences;if(r&&l){ss.set(0,0,0);for(let h=0,u=r.length;h<u;h++){const p=l[h],a=r[h];p!==0&&(Js.fromBufferAttribute(a,e),o?ss.addScaledVector(Js,p):ss.addScaledVector(Js.sub(t),p))}t.add(ss)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),es.copy(n.boundingSphere),es.applyMatrix4(r),An.copy(e.ray).recast(e.near),!(es.containsPoint(An.origin)===!1&&(An.intersectSphere(es,Ha)===null||An.origin.distanceToSquared(Ha)>(e.far-e.near)**2))&&(Ga.copy(r).invert(),An.copy(e.ray).applyMatrix4(Ga),!(n.boundingBox!==null&&An.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,An)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,l=r.index,h=r.attributes.position,u=r.attributes.uv,p=r.attributes.uv1,a=r.attributes.normal,c=r.groups,d=r.drawRange;if(l!==null)if(Array.isArray(o))for(let g=0,_=c.length;g<_;g++){const m=c[g],f=o[m.materialIndex],y=Math.max(m.start,d.start),T=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let x=y,D=T;x<D;x+=3){const A=l.getX(x),w=l.getX(x+1),L=l.getX(x+2);i=as(this,f,e,n,u,p,a,A,w,L),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,f=_;m<f;m+=3){const y=l.getX(m),T=l.getX(m+1),x=l.getX(m+2);i=as(this,o,e,n,u,p,a,y,T,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(h!==void 0)if(Array.isArray(o))for(let g=0,_=c.length;g<_;g++){const m=c[g],f=o[m.materialIndex],y=Math.max(m.start,d.start),T=Math.min(h.count,Math.min(m.start+m.count,d.start+d.count));for(let x=y,D=T;x<D;x+=3){const A=x,w=x+1,L=x+2;i=as(this,f,e,n,u,p,a,A,w,L),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(h.count,d.start+d.count);for(let m=g,f=_;m<f;m+=3){const y=m,T=m+1,x=m+2;i=as(this,o,e,n,u,p,a,y,T,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function wc(s,e,t,n,i,r,o,l){let h;if(e.side===mt?h=n.intersectTriangle(o,r,i,!0,l):h=n.intersectTriangle(i,r,o,e.side===Mn,l),h===null)return null;rs.copy(l),rs.applyMatrix4(s.matrixWorld);const u=t.ray.origin.distanceTo(rs);return u<t.near||u>t.far?null:{distance:u,point:rs.clone(),object:s}}function as(s,e,t,n,i,r,o,l,h,u){s.getVertexPosition(l,ts),s.getVertexPosition(h,ns),s.getVertexPosition(u,is);const p=wc(s,e,t,n,ts,ns,is,Va);if(p){const a=new P;Gt.getBarycoord(Va,ts,ns,is,a),i&&(p.uv=Gt.getInterpolatedAttribute(i,l,h,u,a,new Fe)),r&&(p.uv1=Gt.getInterpolatedAttribute(r,l,h,u,a,new Fe)),o&&(p.normal=Gt.getInterpolatedAttribute(o,l,h,u,a,new P),p.normal.dot(n.direction)>0&&p.normal.multiplyScalar(-1));const c={a:l,b:h,c:u,normal:new P,materialIndex:0};Gt.getNormal(ts,ns,is,c.normal),p.face=c,p.barycoord=a}return p}class $t extends pt{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const l=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const h=[],u=[],p=[],a=[];let c=0,d=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(h),this.setAttribute("position",new at(u,3)),this.setAttribute("normal",new at(p,3)),this.setAttribute("uv",new at(a,2));function g(_,m,f,y,T,x,D,A,w,L,S){const M=x/w,C=D/L,k=x/2,O=D/2,V=A/2,j=w+1,X=L+1;let Z=0,H=0;const ie=new P;for(let he=0;he<X;he++){const _e=he*C-O;for(let Ne=0;Ne<j;Ne++){const Ze=Ne*M-k;ie[_]=Ze*y,ie[m]=_e*T,ie[f]=V,u.push(ie.x,ie.y,ie.z),ie[_]=0,ie[m]=0,ie[f]=A>0?1:-1,p.push(ie.x,ie.y,ie.z),a.push(Ne/w),a.push(1-he/L),Z+=1}}for(let he=0;he<L;he++)for(let _e=0;_e<w;_e++){const Ne=c+_e+j*he,Ze=c+_e+j*(he+1),q=c+(_e+1)+j*(he+1),ee=c+(_e+1)+j*he;h.push(Ne,Ze,ee),h.push(Ze,q,ee),H+=6}l.addGroup(d,H,S),d+=H,c+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $t(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function yi(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Mt(s){const e={};for(let t=0;t<s.length;t++){const n=yi(s[t]);for(const i in n)e[i]=n[i]}return e}function Ac(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Qo(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:We.workingColorSpace}const Cc={clone:yi,merge:Mt};var Rc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Pc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Sn extends Mi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rc,this.fragmentShader=Pc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=yi(e.uniforms),this.uniformsGroups=Ac(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class el extends ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qe,this.projectionMatrix=new Qe,this.projectionMatrixInverse=new Qe,this.coordinateSystem=cn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const _n=new P,Wa=new Fe,Xa=new Fe;class Rt extends el{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=jr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ls*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return jr*2*Math.atan(Math.tan(Ls*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){_n.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(_n.x,_n.y).multiplyScalar(-e/_n.z),_n.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(_n.x,_n.y).multiplyScalar(-e/_n.z)}getViewSize(e,t){return this.getViewBounds(e,Wa,Xa),t.subVectors(Xa,Wa)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ls*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const h=o.fullWidth,u=o.fullHeight;r+=o.offsetX*i/h,t-=o.offsetY*n/u,i*=o.width/h,n*=o.height/u}const l=this.filmOffset;l!==0&&(r+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const si=-90,ri=1;class Dc extends ht{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Rt(si,ri,e,t);i.layers=this.layers,this.add(i);const r=new Rt(si,ri,e,t);r.layers=this.layers,this.add(r);const o=new Rt(si,ri,e,t);o.layers=this.layers,this.add(o);const l=new Rt(si,ri,e,t);l.layers=this.layers,this.add(l);const h=new Rt(si,ri,e,t);h.layers=this.layers,this.add(h);const u=new Rt(si,ri,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,l,h]=t;for(const u of t)this.remove(u);if(e===cn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Ss)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,l,h,u,p]=this.children,a=e.getRenderTarget(),c=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,l),e.setRenderTarget(n,3,i),e.render(t,h),e.setRenderTarget(n,4,i),e.render(t,u),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,p),e.setRenderTarget(a,c,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class tl extends Et{constructor(e=[],t=gi,n,i,r,o,l,h,u,p){super(e,t,n,i,r,o,l,h,u,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Lc extends Vn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new tl(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Kt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new $t(5,5,5),r=new Sn({name:"CubemapFromEquirect",uniforms:yi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:mt,blending:yn});r.uniforms.tEquirect.value=t;const o=new Ue(i,r),l=t.minFilter;return t.minFilter===Gn&&(t.minFilter=Kt),new Dc(1,10,this).update(e,o),t.minFilter=l,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}class Ht extends ht{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ic={type:"move"};class Qs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ht,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ht,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ht,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const l=this._targetRay,h=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),f=this._getHandJoint(u,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const p=u.joints["index-finger-tip"],a=u.joints["thumb-tip"],c=p.position.distanceTo(a.position),d=.02,g=.005;u.inputState.pinching&&c>d+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&c<=d-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(h.matrix.fromArray(r.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,r.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(r.linearVelocity)):h.hasLinearVelocity=!1,r.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(r.angularVelocity)):h.hasAngularVelocity=!1));l!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(l.matrix.fromArray(i.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,i.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(i.linearVelocity)):l.hasLinearVelocity=!1,i.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(i.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(Ic)))}return l!==null&&(l.visible=i!==null),h!==null&&(h.visible=r!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ht;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class la{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new De(e),this.density=t}clone(){return new la(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Uc extends ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qt,this.environmentIntensity=1,this.environmentRotation=new qt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const er=new P,Nc=new P,Fc=new Pe;class Nn{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=er.subVectors(n,t).cross(Nc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(er),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Fc.getNormalMatrix(e),i=this.coplanarPoint(er).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Cn=new Ts,os=new P;class bs{constructor(e=new Nn,t=new Nn,n=new Nn,i=new Nn,r=new Nn,o=new Nn){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(n),l[3].copy(i),l[4].copy(r),l[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=cn){const n=this.planes,i=e.elements,r=i[0],o=i[1],l=i[2],h=i[3],u=i[4],p=i[5],a=i[6],c=i[7],d=i[8],g=i[9],_=i[10],m=i[11],f=i[12],y=i[13],T=i[14],x=i[15];if(n[0].setComponents(h-r,c-u,m-d,x-f).normalize(),n[1].setComponents(h+r,c+u,m+d,x+f).normalize(),n[2].setComponents(h+o,c+p,m+g,x+y).normalize(),n[3].setComponents(h-o,c-p,m-g,x-y).normalize(),n[4].setComponents(h-l,c-a,m-_,x-T).normalize(),t===cn)n[5].setComponents(h+l,c+a,m+_,x+T).normalize();else if(t===Ss)n[5].setComponents(l,a,_,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Cn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Cn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Cn)}intersectsSprite(e){return Cn.center.set(0,0,0),Cn.radius=.7071067811865476,Cn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Cn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(os.x=i.normal.x>0?e.max.x:e.min.x,os.y=i.normal.y>0?e.max.y:e.min.y,os.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(os)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class hi extends Mi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new De(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const qa=new Qe,Kr=new aa,ls=new Ts,cs=new P;class Di extends ht{constructor(e=new pt,t=new hi){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ls.copy(n.boundingSphere),ls.applyMatrix4(i),ls.radius+=r,e.ray.intersectsSphere(ls)===!1)return;qa.copy(i).invert(),Kr.copy(e.ray).applyMatrix4(qa);const l=r/((this.scale.x+this.scale.y+this.scale.z)/3),h=l*l,u=n.index,a=n.attributes.position;if(u!==null){const c=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let g=c,_=d;g<_;g++){const m=u.getX(g);cs.fromBufferAttribute(a,m),Ya(cs,m,h,i,e,t,this)}}else{const c=Math.max(0,o.start),d=Math.min(a.count,o.start+o.count);for(let g=c,_=d;g<_;g++)cs.fromBufferAttribute(a,g),Ya(cs,g,h,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const l=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}}function Ya(s,e,t,n,i,r,o){const l=Kr.distanceSqToPoint(s);if(l<t){const h=new P;Kr.closestPointToPoint(s,h),h.applyMatrix4(n);const u=i.ray.origin.distanceTo(h);if(u<i.near||u>i.far)return;r.push({distance:u,distanceToRay:Math.sqrt(l),point:h,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class nl extends Et{constructor(e,t,n=Hn,i,r,o,l=Xt,h=Xt,u,p=Fi){if(p!==Fi&&p!==Oi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,i,r,o,l,h,p,n,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ra(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class ws extends pt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const r=[],o=[],l=[],h=[],u=new P,p=new Fe;o.push(0,0,0),l.push(0,0,1),h.push(.5,.5);for(let a=0,c=3;a<=t;a++,c+=3){const d=n+a/t*i;u.x=e*Math.cos(d),u.y=e*Math.sin(d),o.push(u.x,u.y,u.z),l.push(0,0,1),p.x=(o[c]/e+1)/2,p.y=(o[c+1]/e+1)/2,h.push(p.x,p.y)}for(let a=1;a<=t;a++)r.push(a,a+1,0);this.setIndex(r),this.setAttribute("position",new at(o,3)),this.setAttribute("normal",new at(l,3)),this.setAttribute("uv",new at(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ws(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Vt extends pt{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,l=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:l,thetaLength:h};const u=this;i=Math.floor(i),r=Math.floor(r);const p=[],a=[],c=[],d=[];let g=0;const _=[],m=n/2;let f=0;y(),o===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(p),this.setAttribute("position",new at(a,3)),this.setAttribute("normal",new at(c,3)),this.setAttribute("uv",new at(d,2));function y(){const x=new P,D=new P;let A=0;const w=(t-e)/n;for(let L=0;L<=r;L++){const S=[],M=L/r,C=M*(t-e)+e;for(let k=0;k<=i;k++){const O=k/i,V=O*h+l,j=Math.sin(V),X=Math.cos(V);D.x=C*j,D.y=-M*n+m,D.z=C*X,a.push(D.x,D.y,D.z),x.set(j,w,X).normalize(),c.push(x.x,x.y,x.z),d.push(O,1-M),S.push(g++)}_.push(S)}for(let L=0;L<i;L++)for(let S=0;S<r;S++){const M=_[S][L],C=_[S+1][L],k=_[S+1][L+1],O=_[S][L+1];(e>0||S!==0)&&(p.push(M,C,O),A+=3),(t>0||S!==r-1)&&(p.push(C,k,O),A+=3)}u.addGroup(f,A,0),f+=A}function T(x){const D=g,A=new Fe,w=new P;let L=0;const S=x===!0?e:t,M=x===!0?1:-1;for(let k=1;k<=i;k++)a.push(0,m*M,0),c.push(0,M,0),d.push(.5,.5),g++;const C=g;for(let k=0;k<=i;k++){const V=k/i*h+l,j=Math.cos(V),X=Math.sin(V);w.x=S*X,w.y=m*M,w.z=S*j,a.push(w.x,w.y,w.z),c.push(0,M,0),A.x=j*.5+.5,A.y=X*.5*M+.5,d.push(A.x,A.y),g++}for(let k=0;k<i;k++){const O=D+k,V=C+k;x===!0?p.push(V,V+1,O):p.push(V+1,V,O),L+=3}u.addGroup(f,L,x===!0?1:2),f+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class pi extends Vt{constructor(e=1,t=1,n=32,i=1,r=!1,o=0,l=Math.PI*2){super(0,e,t,n,i,r,o,l),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:l}}static fromJSON(e){return new pi(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class As extends pt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],o=[];l(i),u(n),p(),this.setAttribute("position",new at(r,3)),this.setAttribute("normal",new at(r.slice(),3)),this.setAttribute("uv",new at(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function l(y){const T=new P,x=new P,D=new P;for(let A=0;A<t.length;A+=3)d(t[A+0],T),d(t[A+1],x),d(t[A+2],D),h(T,x,D,y)}function h(y,T,x,D){const A=D+1,w=[];for(let L=0;L<=A;L++){w[L]=[];const S=y.clone().lerp(x,L/A),M=T.clone().lerp(x,L/A),C=A-L;for(let k=0;k<=C;k++)k===0&&L===A?w[L][k]=S:w[L][k]=S.clone().lerp(M,k/C)}for(let L=0;L<A;L++)for(let S=0;S<2*(A-L)-1;S++){const M=Math.floor(S/2);S%2===0?(c(w[L][M+1]),c(w[L+1][M]),c(w[L][M])):(c(w[L][M+1]),c(w[L+1][M+1]),c(w[L+1][M]))}}function u(y){const T=new P;for(let x=0;x<r.length;x+=3)T.x=r[x+0],T.y=r[x+1],T.z=r[x+2],T.normalize().multiplyScalar(y),r[x+0]=T.x,r[x+1]=T.y,r[x+2]=T.z}function p(){const y=new P;for(let T=0;T<r.length;T+=3){y.x=r[T+0],y.y=r[T+1],y.z=r[T+2];const x=m(y)/2/Math.PI+.5,D=f(y)/Math.PI+.5;o.push(x,1-D)}g(),a()}function a(){for(let y=0;y<o.length;y+=6){const T=o[y+0],x=o[y+2],D=o[y+4],A=Math.max(T,x,D),w=Math.min(T,x,D);A>.9&&w<.1&&(T<.2&&(o[y+0]+=1),x<.2&&(o[y+2]+=1),D<.2&&(o[y+4]+=1))}}function c(y){r.push(y.x,y.y,y.z)}function d(y,T){const x=y*3;T.x=e[x+0],T.y=e[x+1],T.z=e[x+2]}function g(){const y=new P,T=new P,x=new P,D=new P,A=new Fe,w=new Fe,L=new Fe;for(let S=0,M=0;S<r.length;S+=9,M+=6){y.set(r[S+0],r[S+1],r[S+2]),T.set(r[S+3],r[S+4],r[S+5]),x.set(r[S+6],r[S+7],r[S+8]),A.set(o[M+0],o[M+1]),w.set(o[M+2],o[M+3]),L.set(o[M+4],o[M+5]),D.copy(y).add(T).add(x).divideScalar(3);const C=m(D);_(A,M+0,y,C),_(w,M+2,T,C),_(L,M+4,x,C)}}function _(y,T,x,D){D<0&&y.x===1&&(o[T]=y.x-1),x.x===0&&x.z===0&&(o[T]=D/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function f(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new As(e.vertices,e.indices,e.radius,e.details)}}class ca extends As{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ca(e.radius,e.detail)}}class ha extends As{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ha(e.radius,e.detail)}}class xi extends pt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,l=Math.floor(n),h=Math.floor(i),u=l+1,p=h+1,a=e/l,c=t/h,d=[],g=[],_=[],m=[];for(let f=0;f<p;f++){const y=f*c-o;for(let T=0;T<u;T++){const x=T*a-r;g.push(x,-y,0),_.push(0,0,1),m.push(T/l),m.push(1-f/h)}}for(let f=0;f<h;f++)for(let y=0;y<l;y++){const T=y+u*f,x=y+u*(f+1),D=y+1+u*(f+1),A=y+1+u*f;d.push(T,x,A),d.push(x,D,A)}this.setIndex(d),this.setAttribute("position",new at(g,3)),this.setAttribute("normal",new at(_,3)),this.setAttribute("uv",new at(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xi(e.width,e.height,e.widthSegments,e.heightSegments)}}class un extends pt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:l},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const h=Math.min(o+l,Math.PI);let u=0;const p=[],a=new P,c=new P,d=[],g=[],_=[],m=[];for(let f=0;f<=n;f++){const y=[],T=f/n;let x=0;f===0&&o===0?x=.5/t:f===n&&h===Math.PI&&(x=-.5/t);for(let D=0;D<=t;D++){const A=D/t;a.x=-e*Math.cos(i+A*r)*Math.sin(o+T*l),a.y=e*Math.cos(o+T*l),a.z=e*Math.sin(i+A*r)*Math.sin(o+T*l),g.push(a.x,a.y,a.z),c.copy(a).normalize(),_.push(c.x,c.y,c.z),m.push(A+x,1-T),y.push(u++)}p.push(y)}for(let f=0;f<n;f++)for(let y=0;y<t;y++){const T=p[f][y+1],x=p[f][y],D=p[f+1][y],A=p[f+1][y+1];(f!==0||o>0)&&d.push(T,x,A),(f!==n-1||h<Math.PI)&&d.push(x,D,A)}this.setIndex(d),this.setAttribute("position",new at(g,3)),this.setAttribute("normal",new at(_,3)),this.setAttribute("uv",new at(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new un(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ua extends pt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const o=[],l=[],h=[],u=[],p=new P,a=new P,c=new P;for(let d=0;d<=n;d++)for(let g=0;g<=i;g++){const _=g/i*r,m=d/n*Math.PI*2;a.x=(e+t*Math.cos(m))*Math.cos(_),a.y=(e+t*Math.cos(m))*Math.sin(_),a.z=t*Math.sin(m),l.push(a.x,a.y,a.z),p.x=e*Math.cos(_),p.y=e*Math.sin(_),c.subVectors(a,p).normalize(),h.push(c.x,c.y,c.z),u.push(g/i),u.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=i;g++){const _=(i+1)*d+g-1,m=(i+1)*(d-1)+g-1,f=(i+1)*(d-1)+g,y=(i+1)*d+g;o.push(_,m,y),o.push(m,f,y)}this.setIndex(o),this.setAttribute("position",new at(l,3)),this.setAttribute("normal",new at(h,3)),this.setAttribute("uv",new at(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ua(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class rt extends Mi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new De(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qo,this.normalScale=new Fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Oc extends rt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Fe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Oe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new De(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new De(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new De(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class zc extends Mi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Kl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Bc extends Mi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ja={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class il{constructor(e,t,n){const i=this;let r=!1,o=0,l=0,h;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(p){l++,r===!1&&i.onStart!==void 0&&i.onStart(p,o,l),r=!0},this.itemEnd=function(p){o++,i.onProgress!==void 0&&i.onProgress(p,o,l),o===l&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(p){i.onError!==void 0&&i.onError(p)},this.resolveURL=function(p){return h?h(p):p},this.setURLModifier=function(p){return h=p,this},this.addHandler=function(p,a){return u.push(p,a),this},this.removeHandler=function(p){const a=u.indexOf(p);return a!==-1&&u.splice(a,2),this},this.getHandler=function(p){for(let a=0,c=u.length;a<c;a+=2){const d=u[a],g=u[a+1];if(d.global&&(d.lastIndex=0),d.test(p))return g}return null}}}const kc=new il;class da{constructor(e){this.manager=e!==void 0?e:kc,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}da.DEFAULT_MATERIAL_NAME="__DEFAULT";class Gc extends da{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=ja.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const l=zi("img");function h(){p(),ja.add(e,this),t&&t(this),r.manager.itemEnd(e)}function u(a){p(),i&&i(a),r.manager.itemError(e),r.manager.itemEnd(e)}function p(){l.removeEventListener("load",h,!1),l.removeEventListener("error",u,!1)}return l.addEventListener("load",h,!1),l.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(l.crossOrigin=this.crossOrigin),r.manager.itemStart(e),l.src=e,l}}class ai extends da{constructor(e){super(e)}load(e,t,n,i){const r=new Et,o=new Gc(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(l){r.image=l,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class fa extends ht{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new De(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const tr=new Qe,Ka=new P,$a=new P;class sl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Fe(512,512),this.mapType=Zt,this.map=null,this.mapPass=null,this.matrix=new Qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new bs,this._frameExtents=new Fe(1,1),this._viewportCount=1,this._viewports=[new $e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Ka.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ka),$a.setFromMatrixPosition(e.target.matrixWorld),t.lookAt($a),t.updateMatrixWorld(),tr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(tr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(tr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Za=new Qe,Ri=new P,nr=new P;class Hc extends sl{constructor(){super(new Rt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Fe(4,2),this._viewportCount=6,this._viewports=[new $e(2,1,1,1),new $e(0,1,1,1),new $e(3,1,1,1),new $e(1,1,1,1),new $e(3,0,1,1),new $e(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ri.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ri),nr.copy(n.position),nr.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(nr),n.updateMatrixWorld(),i.makeTranslation(-Ri.x,-Ri.y,-Ri.z),Za.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Za)}}class on extends fa{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Hc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class rl extends el{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,l=i+t,h=i-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,o=r+u*this.view.width,l-=p*this.view.offsetY,h=l-p*this.view.height}this.projectionMatrix.makeOrthographic(r,o,l,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Vc extends sl{constructor(){super(new rl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Wc extends fa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ht.DEFAULT_UP),this.updateMatrix(),this.target=new ht,this.shadow=new Vc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ja extends fa{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}let hs,Xc=class{static getContext(){return hs===void 0&&(hs=new(window.AudioContext||window.webkitAudioContext)),hs}static setContext(e){hs=e}};class qc extends Rt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class al{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Qa(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Qa();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Qa(){return performance.now()}const Rn=new P,eo=new Xn,Yc=new P,Pn=new P;class jc extends ht{constructor(){super(),this.type="AudioListener",this.context=Xc.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new al}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const t=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(Rn,eo,Yc),Pn.set(0,0,-1).applyQuaternion(eo),t.positionX){const i=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(Rn.x,i),t.positionY.linearRampToValueAtTime(Rn.y,i),t.positionZ.linearRampToValueAtTime(Rn.z,i),t.forwardX.linearRampToValueAtTime(Pn.x,i),t.forwardY.linearRampToValueAtTime(Pn.y,i),t.forwardZ.linearRampToValueAtTime(Pn.z,i),t.upX.linearRampToValueAtTime(n.x,i),t.upY.linearRampToValueAtTime(n.y,i),t.upZ.linearRampToValueAtTime(n.z,i)}else t.setPosition(Rn.x,Rn.y,Rn.z),t.setOrientation(Pn.x,Pn.y,Pn.z,n.x,n.y,n.z)}}let Kc=class extends ht{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(e=0){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+e),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1,this._progress=0}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}copy(e,t){return super.copy(e,t),e.sourceType!=="buffer"?(console.warn("THREE.Audio: Audio source type cannot be copied."),this):(this.autoplay=e.autoplay,this.buffer=e.buffer,this.detune=e.detune,this.loop=e.loop,this.loopStart=e.loopStart,this.loopEnd=e.loopEnd,this.offset=e.offset,this.duration=e.duration,this.playbackRate=e.playbackRate,this.hasPlaybackControl=e.hasPlaybackControl,this.sourceType=e.sourceType,this.filters=e.filters.slice(),this)}clone(e){return new this.constructor(this.listener).copy(this,e)}};const Dn=new P,to=new Xn,$c=new P,Ln=new P;class Zc extends Kc{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){return super.connect(),this.panner.connect(this.gain),this}disconnect(){return super.disconnect(),this.panner.disconnect(this.gain),this}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,n){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=n,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(Dn,to,$c),Ln.set(0,0,1).applyQuaternion(to);const t=this.panner;if(t.positionX){const n=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(Dn.x,n),t.positionY.linearRampToValueAtTime(Dn.y,n),t.positionZ.linearRampToValueAtTime(Dn.z,n),t.orientationX.linearRampToValueAtTime(Ln.x,n),t.orientationY.linearRampToValueAtTime(Ln.y,n),t.orientationZ.linearRampToValueAtTime(Ln.z,n)}else t.setPosition(Dn.x,Dn.y,Dn.z),t.setOrientation(Ln.x,Ln.y,Ln.z)}}const no=new Qe;class Jc{constructor(e,t,n=0,i=1/0){this.ray=new aa(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new oa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return no.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(no),this}intersectObject(e,t=!0,n=[]){return $r(e,this,n,t),n.sort(io),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)$r(e[i],this,n,t);return n.sort(io),n}}function io(s,e){return s.distance-e.distance}function $r(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let o=0,l=r.length;o<l;o++)$r(r[o],e,t,!0)}}class Qc extends Wn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function so(s,e,t,n){const i=eh(n);switch(t){case Go:return s*e;case Vo:return s*e/i.components*i.byteLength;case na:return s*e/i.components*i.byteLength;case Wo:return s*e*2/i.components*i.byteLength;case ia:return s*e*2/i.components*i.byteLength;case Ho:return s*e*3/i.components*i.byteLength;case Wt:return s*e*4/i.components*i.byteLength;case sa:return s*e*4/i.components*i.byteLength;case ps:case ms:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case gs:case _s:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Er:case br:return Math.max(s,16)*Math.max(e,8)/4;case Sr:case Tr:return Math.max(s,8)*Math.max(e,8)/2;case wr:case Ar:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Cr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Rr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Pr:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Dr:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Lr:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Ir:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Ur:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Nr:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Fr:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Or:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case zr:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Br:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case kr:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Gr:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Hr:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case vs:case Vr:case Wr:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Xo:case Xr:return Math.ceil(s/4)*Math.ceil(e/4)*8;case qr:case Yr:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function eh(s){switch(s){case Zt:case zo:return{byteLength:1,components:1};case Ui:case Bo:case Bi:return{byteLength:2,components:1};case ea:case ta:return{byteLength:2,components:4};case Hn:case Qr:case ln:return{byteLength:4,components:1};case ko:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jr);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ol(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function th(s){const e=new WeakMap;function t(l,h){const u=l.array,p=l.usage,a=u.byteLength,c=s.createBuffer();s.bindBuffer(h,c),s.bufferData(h,u,p),l.onUploadCallback();let d;if(u instanceof Float32Array)d=s.FLOAT;else if(u instanceof Uint16Array)l.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(u instanceof Int16Array)d=s.SHORT;else if(u instanceof Uint32Array)d=s.UNSIGNED_INT;else if(u instanceof Int32Array)d=s.INT;else if(u instanceof Int8Array)d=s.BYTE;else if(u instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:c,type:d,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:a}}function n(l,h,u){const p=h.array,a=h.updateRanges;if(s.bindBuffer(u,l),a.length===0)s.bufferSubData(u,0,p);else{a.sort((d,g)=>d.start-g.start);let c=0;for(let d=1;d<a.length;d++){const g=a[c],_=a[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++c,a[c]=_)}a.length=c+1;for(let d=0,g=a.length;d<g;d++){const _=a[d];s.bufferSubData(u,_.start*p.BYTES_PER_ELEMENT,p,_.start,_.count)}h.clearUpdateRanges()}h.onUploadCallback()}function i(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function r(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=e.get(l);h&&(s.deleteBuffer(h.buffer),e.delete(l))}function o(l,h){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const p=e.get(l);(!p||p.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const u=e.get(l);if(u===void 0)e.set(l,t(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,l,h),u.version=l.version}}return{get:i,remove:r,update:o}}var nh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ih=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,sh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ah=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,oh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ch=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hh=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,uh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,dh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ph=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,mh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,gh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,_h=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,vh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Mh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Sh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Eh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Th=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,bh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,wh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ah=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ch=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Rh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ph=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Dh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Lh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ih=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Uh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Nh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Fh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Oh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Bh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,kh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vh=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Wh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Xh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qh=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Yh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,jh=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Kh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$h=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Jh=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Qh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,eu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,tu=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,nu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,iu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,su=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ru=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,au=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ou=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,lu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,uu=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,du=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,pu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,mu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,gu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_u=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,vu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,xu=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Mu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Su=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Eu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Tu=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,bu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Au=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Cu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ru=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Pu=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Du=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Lu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Iu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Uu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Nu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Fu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ou=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,zu=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Bu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ku=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Gu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hu=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Vu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Wu=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Xu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Yu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ju=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ku=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,$u=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Zu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ju=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Qu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ed=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const td=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,nd=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,id=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ad=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,od=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ld=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,cd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,hd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ud=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fd=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,pd=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,md=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,gd=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_d=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vd=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yd=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,xd=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Md=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Sd=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ed=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Td=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bd=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,wd=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ad=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cd=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rd=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Pd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Dd=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ld=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Id=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ud=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ie={alphahash_fragment:nh,alphahash_pars_fragment:ih,alphamap_fragment:sh,alphamap_pars_fragment:rh,alphatest_fragment:ah,alphatest_pars_fragment:oh,aomap_fragment:lh,aomap_pars_fragment:ch,batching_pars_vertex:hh,batching_vertex:uh,begin_vertex:dh,beginnormal_vertex:fh,bsdfs:ph,iridescence_fragment:mh,bumpmap_pars_fragment:gh,clipping_planes_fragment:_h,clipping_planes_pars_fragment:vh,clipping_planes_pars_vertex:yh,clipping_planes_vertex:xh,color_fragment:Mh,color_pars_fragment:Sh,color_pars_vertex:Eh,color_vertex:Th,common:bh,cube_uv_reflection_fragment:wh,defaultnormal_vertex:Ah,displacementmap_pars_vertex:Ch,displacementmap_vertex:Rh,emissivemap_fragment:Ph,emissivemap_pars_fragment:Dh,colorspace_fragment:Lh,colorspace_pars_fragment:Ih,envmap_fragment:Uh,envmap_common_pars_fragment:Nh,envmap_pars_fragment:Fh,envmap_pars_vertex:Oh,envmap_physical_pars_fragment:jh,envmap_vertex:zh,fog_vertex:Bh,fog_pars_vertex:kh,fog_fragment:Gh,fog_pars_fragment:Hh,gradientmap_pars_fragment:Vh,lightmap_pars_fragment:Wh,lights_lambert_fragment:Xh,lights_lambert_pars_fragment:qh,lights_pars_begin:Yh,lights_toon_fragment:Kh,lights_toon_pars_fragment:$h,lights_phong_fragment:Zh,lights_phong_pars_fragment:Jh,lights_physical_fragment:Qh,lights_physical_pars_fragment:eu,lights_fragment_begin:tu,lights_fragment_maps:nu,lights_fragment_end:iu,logdepthbuf_fragment:su,logdepthbuf_pars_fragment:ru,logdepthbuf_pars_vertex:au,logdepthbuf_vertex:ou,map_fragment:lu,map_pars_fragment:cu,map_particle_fragment:hu,map_particle_pars_fragment:uu,metalnessmap_fragment:du,metalnessmap_pars_fragment:fu,morphinstance_vertex:pu,morphcolor_vertex:mu,morphnormal_vertex:gu,morphtarget_pars_vertex:_u,morphtarget_vertex:vu,normal_fragment_begin:yu,normal_fragment_maps:xu,normal_pars_fragment:Mu,normal_pars_vertex:Su,normal_vertex:Eu,normalmap_pars_fragment:Tu,clearcoat_normal_fragment_begin:bu,clearcoat_normal_fragment_maps:wu,clearcoat_pars_fragment:Au,iridescence_pars_fragment:Cu,opaque_fragment:Ru,packing:Pu,premultiplied_alpha_fragment:Du,project_vertex:Lu,dithering_fragment:Iu,dithering_pars_fragment:Uu,roughnessmap_fragment:Nu,roughnessmap_pars_fragment:Fu,shadowmap_pars_fragment:Ou,shadowmap_pars_vertex:zu,shadowmap_vertex:Bu,shadowmask_pars_fragment:ku,skinbase_vertex:Gu,skinning_pars_vertex:Hu,skinning_vertex:Vu,skinnormal_vertex:Wu,specularmap_fragment:Xu,specularmap_pars_fragment:qu,tonemapping_fragment:Yu,tonemapping_pars_fragment:ju,transmission_fragment:Ku,transmission_pars_fragment:$u,uv_pars_fragment:Zu,uv_pars_vertex:Ju,uv_vertex:Qu,worldpos_vertex:ed,background_vert:td,background_frag:nd,backgroundCube_vert:id,backgroundCube_frag:sd,cube_vert:rd,cube_frag:ad,depth_vert:od,depth_frag:ld,distanceRGBA_vert:cd,distanceRGBA_frag:hd,equirect_vert:ud,equirect_frag:dd,linedashed_vert:fd,linedashed_frag:pd,meshbasic_vert:md,meshbasic_frag:gd,meshlambert_vert:_d,meshlambert_frag:vd,meshmatcap_vert:yd,meshmatcap_frag:xd,meshnormal_vert:Md,meshnormal_frag:Sd,meshphong_vert:Ed,meshphong_frag:Td,meshphysical_vert:bd,meshphysical_frag:wd,meshtoon_vert:Ad,meshtoon_frag:Cd,points_vert:Rd,points_frag:Pd,shadow_vert:Dd,shadow_frag:Ld,sprite_vert:Id,sprite_frag:Ud},te={common:{diffuse:{value:new De(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Pe},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Pe}},envmap:{envMap:{value:null},envMapRotation:{value:new Pe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Pe},normalScale:{value:new Fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new De(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new De(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0},uvTransform:{value:new Pe}},sprite:{diffuse:{value:new De(16777215)},opacity:{value:1},center:{value:new Fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Pe},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0}}},jt={basic:{uniforms:Mt([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.fog]),vertexShader:Ie.meshbasic_vert,fragmentShader:Ie.meshbasic_frag},lambert:{uniforms:Mt([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.fog,te.lights,{emissive:{value:new De(0)}}]),vertexShader:Ie.meshlambert_vert,fragmentShader:Ie.meshlambert_frag},phong:{uniforms:Mt([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.fog,te.lights,{emissive:{value:new De(0)},specular:{value:new De(1118481)},shininess:{value:30}}]),vertexShader:Ie.meshphong_vert,fragmentShader:Ie.meshphong_frag},standard:{uniforms:Mt([te.common,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.roughnessmap,te.metalnessmap,te.fog,te.lights,{emissive:{value:new De(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag},toon:{uniforms:Mt([te.common,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.gradientmap,te.fog,te.lights,{emissive:{value:new De(0)}}]),vertexShader:Ie.meshtoon_vert,fragmentShader:Ie.meshtoon_frag},matcap:{uniforms:Mt([te.common,te.bumpmap,te.normalmap,te.displacementmap,te.fog,{matcap:{value:null}}]),vertexShader:Ie.meshmatcap_vert,fragmentShader:Ie.meshmatcap_frag},points:{uniforms:Mt([te.points,te.fog]),vertexShader:Ie.points_vert,fragmentShader:Ie.points_frag},dashed:{uniforms:Mt([te.common,te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ie.linedashed_vert,fragmentShader:Ie.linedashed_frag},depth:{uniforms:Mt([te.common,te.displacementmap]),vertexShader:Ie.depth_vert,fragmentShader:Ie.depth_frag},normal:{uniforms:Mt([te.common,te.bumpmap,te.normalmap,te.displacementmap,{opacity:{value:1}}]),vertexShader:Ie.meshnormal_vert,fragmentShader:Ie.meshnormal_frag},sprite:{uniforms:Mt([te.sprite,te.fog]),vertexShader:Ie.sprite_vert,fragmentShader:Ie.sprite_frag},background:{uniforms:{uvTransform:{value:new Pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ie.background_vert,fragmentShader:Ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Pe}},vertexShader:Ie.backgroundCube_vert,fragmentShader:Ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ie.cube_vert,fragmentShader:Ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ie.equirect_vert,fragmentShader:Ie.equirect_frag},distanceRGBA:{uniforms:Mt([te.common,te.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ie.distanceRGBA_vert,fragmentShader:Ie.distanceRGBA_frag},shadow:{uniforms:Mt([te.lights,te.fog,{color:{value:new De(0)},opacity:{value:1}}]),vertexShader:Ie.shadow_vert,fragmentShader:Ie.shadow_frag}};jt.physical={uniforms:Mt([jt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Pe},clearcoatNormalScale:{value:new Fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Pe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Pe},sheen:{value:0},sheenColor:{value:new De(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Pe},transmissionSamplerSize:{value:new Fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Pe},attenuationDistance:{value:0},attenuationColor:{value:new De(0)},specularColor:{value:new De(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Pe},anisotropyVector:{value:new Fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Pe}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag};const us={r:0,b:0,g:0},In=new qt,Nd=new Qe;function Fd(s,e,t,n,i,r,o){const l=new De(0);let h=r===!0?0:1,u,p,a=null,c=0,d=null;function g(T){let x=T.isScene===!0?T.background:null;return x&&x.isTexture&&(x=(T.backgroundBlurriness>0?t:e).get(x)),x}function _(T){let x=!1;const D=g(T);D===null?f(l,h):D&&D.isColor&&(f(D,1),x=!0);const A=s.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(T,x){const D=g(x);D&&(D.isCubeTexture||D.mapping===Es)?(p===void 0&&(p=new Ue(new $t(1,1,1),new Sn({name:"BackgroundCubeMaterial",uniforms:yi(jt.backgroundCube.uniforms),vertexShader:jt.backgroundCube.vertexShader,fragmentShader:jt.backgroundCube.fragmentShader,side:mt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(A,w,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(p)),In.copy(x.backgroundRotation),In.x*=-1,In.y*=-1,In.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(In.y*=-1,In.z*=-1),p.material.uniforms.envMap.value=D,p.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(Nd.makeRotationFromEuler(In)),p.material.toneMapped=We.getTransfer(D.colorSpace)!==Ke,(a!==D||c!==D.version||d!==s.toneMapping)&&(p.material.needsUpdate=!0,a=D,c=D.version,d=s.toneMapping),p.layers.enableAll(),T.unshift(p,p.geometry,p.material,0,0,null)):D&&D.isTexture&&(u===void 0&&(u=new Ue(new xi(2,2),new Sn({name:"BackgroundMaterial",uniforms:yi(jt.background.uniforms),vertexShader:jt.background.vertexShader,fragmentShader:jt.background.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(u)),u.material.uniforms.t2D.value=D,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.toneMapped=We.getTransfer(D.colorSpace)!==Ke,D.matrixAutoUpdate===!0&&D.updateMatrix(),u.material.uniforms.uvTransform.value.copy(D.matrix),(a!==D||c!==D.version||d!==s.toneMapping)&&(u.material.needsUpdate=!0,a=D,c=D.version,d=s.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null))}function f(T,x){T.getRGB(us,Qo(s)),n.buffers.color.setClear(us.r,us.g,us.b,x,o)}function y(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return l},setClearColor:function(T,x=1){l.set(T),h=x,f(l,h)},getClearAlpha:function(){return h},setClearAlpha:function(T){h=T,f(l,h)},render:_,addToRenderList:m,dispose:y}}function Od(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=c(null);let r=i,o=!1;function l(M,C,k,O,V){let j=!1;const X=a(O,k,C);r!==X&&(r=X,u(r.object)),j=d(M,O,k,V),j&&g(M,O,k,V),V!==null&&e.update(V,s.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,x(M,C,k,O),V!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function h(){return s.createVertexArray()}function u(M){return s.bindVertexArray(M)}function p(M){return s.deleteVertexArray(M)}function a(M,C,k){const O=k.wireframe===!0;let V=n[M.id];V===void 0&&(V={},n[M.id]=V);let j=V[C.id];j===void 0&&(j={},V[C.id]=j);let X=j[O];return X===void 0&&(X=c(h()),j[O]=X),X}function c(M){const C=[],k=[],O=[];for(let V=0;V<t;V++)C[V]=0,k[V]=0,O[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:k,attributeDivisors:O,object:M,attributes:{},index:null}}function d(M,C,k,O){const V=r.attributes,j=C.attributes;let X=0;const Z=k.getAttributes();for(const H in Z)if(Z[H].location>=0){const he=V[H];let _e=j[H];if(_e===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(_e=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(_e=M.instanceColor)),he===void 0||he.attribute!==_e||_e&&he.data!==_e.data)return!0;X++}return r.attributesNum!==X||r.index!==O}function g(M,C,k,O){const V={},j=C.attributes;let X=0;const Z=k.getAttributes();for(const H in Z)if(Z[H].location>=0){let he=j[H];he===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(he=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(he=M.instanceColor));const _e={};_e.attribute=he,he&&he.data&&(_e.data=he.data),V[H]=_e,X++}r.attributes=V,r.attributesNum=X,r.index=O}function _(){const M=r.newAttributes;for(let C=0,k=M.length;C<k;C++)M[C]=0}function m(M){f(M,0)}function f(M,C){const k=r.newAttributes,O=r.enabledAttributes,V=r.attributeDivisors;k[M]=1,O[M]===0&&(s.enableVertexAttribArray(M),O[M]=1),V[M]!==C&&(s.vertexAttribDivisor(M,C),V[M]=C)}function y(){const M=r.newAttributes,C=r.enabledAttributes;for(let k=0,O=C.length;k<O;k++)C[k]!==M[k]&&(s.disableVertexAttribArray(k),C[k]=0)}function T(M,C,k,O,V,j,X){X===!0?s.vertexAttribIPointer(M,C,k,V,j):s.vertexAttribPointer(M,C,k,O,V,j)}function x(M,C,k,O){_();const V=O.attributes,j=k.getAttributes(),X=C.defaultAttributeValues;for(const Z in j){const H=j[Z];if(H.location>=0){let ie=V[Z];if(ie===void 0&&(Z==="instanceMatrix"&&M.instanceMatrix&&(ie=M.instanceMatrix),Z==="instanceColor"&&M.instanceColor&&(ie=M.instanceColor)),ie!==void 0){const he=ie.normalized,_e=ie.itemSize,Ne=e.get(ie);if(Ne===void 0)continue;const Ze=Ne.buffer,q=Ne.type,ee=Ne.bytesPerElement,pe=q===s.INT||q===s.UNSIGNED_INT||ie.gpuType===Qr;if(ie.isInterleavedBufferAttribute){const se=ie.data,Me=se.stride,Xe=ie.offset;if(se.isInstancedInterleavedBuffer){for(let be=0;be<H.locationSize;be++)f(H.location+be,se.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let be=0;be<H.locationSize;be++)m(H.location+be);s.bindBuffer(s.ARRAY_BUFFER,Ze);for(let be=0;be<H.locationSize;be++)T(H.location+be,_e/H.locationSize,q,he,Me*ee,(Xe+_e/H.locationSize*be)*ee,pe)}else{if(ie.isInstancedBufferAttribute){for(let se=0;se<H.locationSize;se++)f(H.location+se,ie.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let se=0;se<H.locationSize;se++)m(H.location+se);s.bindBuffer(s.ARRAY_BUFFER,Ze);for(let se=0;se<H.locationSize;se++)T(H.location+se,_e/H.locationSize,q,he,_e*ee,_e/H.locationSize*se*ee,pe)}}else if(X!==void 0){const he=X[Z];if(he!==void 0)switch(he.length){case 2:s.vertexAttrib2fv(H.location,he);break;case 3:s.vertexAttrib3fv(H.location,he);break;case 4:s.vertexAttrib4fv(H.location,he);break;default:s.vertexAttrib1fv(H.location,he)}}}}y()}function D(){L();for(const M in n){const C=n[M];for(const k in C){const O=C[k];for(const V in O)p(O[V].object),delete O[V];delete C[k]}delete n[M]}}function A(M){if(n[M.id]===void 0)return;const C=n[M.id];for(const k in C){const O=C[k];for(const V in O)p(O[V].object),delete O[V];delete C[k]}delete n[M.id]}function w(M){for(const C in n){const k=n[C];if(k[M.id]===void 0)continue;const O=k[M.id];for(const V in O)p(O[V].object),delete O[V];delete k[M.id]}}function L(){S(),o=!0,r!==i&&(r=i,u(r.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:l,reset:L,resetDefaultState:S,dispose:D,releaseStatesOfGeometry:A,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function zd(s,e,t){let n;function i(u){n=u}function r(u,p){s.drawArrays(n,u,p),t.update(p,n,1)}function o(u,p,a){a!==0&&(s.drawArraysInstanced(n,u,p,a),t.update(p,n,a))}function l(u,p,a){if(a===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,u,0,p,0,a);let d=0;for(let g=0;g<a;g++)d+=p[g];t.update(d,n,1)}function h(u,p,a,c){if(a===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<u.length;g++)o(u[g],p[g],c[g]);else{d.multiDrawArraysInstancedWEBGL(n,u,0,p,0,c,0,a);let g=0;for(let _=0;_<a;_++)g+=p[_]*c[_];t.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=l,this.renderMultiDrawInstances=h}function Bd(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(w){return!(w!==Wt&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(w){const L=w===Bi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Zt&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==ln&&!L)}function h(w){if(w==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const p=h(u);p!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",p,"instead."),u=p);const a=t.logarithmicDepthBuffer===!0,c=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),f=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),T=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),D=g>0,A=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:h,textureFormatReadable:o,textureTypeReadable:l,precision:u,logarithmicDepthBuffer:a,reverseDepthBuffer:c,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:y,maxVaryings:T,maxFragmentUniforms:x,vertexTextures:D,maxSamples:A}}function kd(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new Nn,l=new Pe,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(a,c){const d=a.length!==0||c||n!==0||i;return i=c,n=a.length,d},this.beginShadows=function(){r=!0,p(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(a,c){t=p(a,c,0)},this.setState=function(a,c,d){const g=a.clippingPlanes,_=a.clipIntersection,m=a.clipShadows,f=s.get(a);if(!i||g===null||g.length===0||r&&!m)r?p(null):u();else{const y=r?0:n,T=y*4;let x=f.clippingState||null;h.value=x,x=p(g,c,T,d);for(let D=0;D!==T;++D)x[D]=t[D];f.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function u(){h.value!==t&&(h.value=t,h.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function p(a,c,d,g){const _=a!==null?a.length:0;let m=null;if(_!==0){if(m=h.value,g!==!0||m===null){const f=d+_*4,y=c.matrixWorldInverse;l.getNormalMatrix(y),(m===null||m.length<f)&&(m=new Float32Array(f));for(let T=0,x=d;T!==_;++T,x+=4)o.copy(a[T]).applyMatrix4(y,l),o.normal.toArray(m,x),m[x+3]=o.constant}h.value=m,h.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Gd(s){let e=new WeakMap;function t(o,l){return l===yr?o.mapping=gi:l===xr&&(o.mapping=_i),o}function n(o){if(o&&o.isTexture){const l=o.mapping;if(l===yr||l===xr)if(e.has(o)){const h=e.get(o).texture;return t(h,o.mapping)}else{const h=o.image;if(h&&h.height>0){const u=new Lc(h.height);return u.fromEquirectangularTexture(s,o),e.set(o,u),o.addEventListener("dispose",i),t(u.texture,o.mapping)}else return null}}return o}function i(o){const l=o.target;l.removeEventListener("dispose",i);const h=e.get(l);h!==void 0&&(e.delete(l),h.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const ui=4,ro=[.125,.215,.35,.446,.526,.582],zn=20,ir=new rl,ao=new De;let sr=null,rr=0,ar=0,or=!1;const Fn=(1+Math.sqrt(5))/2,oi=1/Fn,oo=[new P(-Fn,oi,0),new P(Fn,oi,0),new P(-oi,0,Fn),new P(oi,0,Fn),new P(0,Fn,-oi),new P(0,Fn,oi),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],Hd=new P;class lo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,r={}){const{size:o=256,position:l=Hd}=r;sr=this._renderer.getRenderTarget(),rr=this._renderer.getActiveCubeFace(),ar=this._renderer.getActiveMipmapLevel(),or=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,n,i,h,l),t>0&&this._blur(h,0,0,t),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=uo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ho(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(sr,rr,ar),this._renderer.xr.enabled=or,e.scissorTest=!1,ds(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===gi||e.mapping===_i?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),sr=this._renderer.getRenderTarget(),rr=this._renderer.getActiveCubeFace(),ar=this._renderer.getActiveMipmapLevel(),or=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Kt,minFilter:Kt,generateMipmaps:!1,type:Bi,format:Wt,colorSpace:vi,depthBuffer:!1},i=co(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=co(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Vd(r)),this._blurMaterial=Wd(r,e,t)}return i}_compileMaterial(e){const t=new Ue(this._lodPlanes[0],e);this._renderer.compile(t,ir)}_sceneToCubeUV(e,t,n,i,r){const h=new Rt(90,1,t,n),u=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],a=this._renderer,c=a.autoClear,d=a.toneMapping;a.getClearColor(ao),a.toneMapping=xn,a.autoClear=!1;const g=new an({name:"PMREM.Background",side:mt,depthWrite:!1,depthTest:!1}),_=new Ue(new $t,g);let m=!1;const f=e.background;f?f.isColor&&(g.color.copy(f),e.background=null,m=!0):(g.color.copy(ao),m=!0);for(let y=0;y<6;y++){const T=y%3;T===0?(h.up.set(0,u[y],0),h.position.set(r.x,r.y,r.z),h.lookAt(r.x+p[y],r.y,r.z)):T===1?(h.up.set(0,0,u[y]),h.position.set(r.x,r.y,r.z),h.lookAt(r.x,r.y+p[y],r.z)):(h.up.set(0,u[y],0),h.position.set(r.x,r.y,r.z),h.lookAt(r.x,r.y,r.z+p[y]));const x=this._cubeSize;ds(i,T*x,y>2?x:0,x,x),a.setRenderTarget(i),m&&a.render(_,h),a.render(e,h)}_.geometry.dispose(),_.material.dispose(),a.toneMapping=d,a.autoClear=c,e.background=f}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===gi||e.mapping===_i;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=uo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ho());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new Ue(this._lodPlanes[0],r),l=r.uniforms;l.envMap.value=e;const h=this._cubeSize;ds(t,0,0,3*h,2*h),n.setRenderTarget(t),n.render(o,ir)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),l=oo[(i-r-1)%oo.length];this._blur(e,r-1,r,o,l)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,l){const h=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,a=new Ue(this._lodPlanes[i],u),c=u.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*zn-1),_=r/g,m=isFinite(r)?1+Math.floor(p*_):zn;m>zn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${zn}`);const f=[];let y=0;for(let w=0;w<zn;++w){const L=w/_,S=Math.exp(-L*L/2);f.push(S),w===0?y+=S:w<m&&(y+=2*S)}for(let w=0;w<f.length;w++)f[w]=f[w]/y;c.envMap.value=e.texture,c.samples.value=m,c.weights.value=f,c.latitudinal.value=o==="latitudinal",l&&(c.poleAxis.value=l);const{_lodMax:T}=this;c.dTheta.value=g,c.mipInt.value=T-n;const x=this._sizeLods[i],D=3*x*(i>T-ui?i-T+ui:0),A=4*(this._cubeSize-x);ds(t,D,A,3*x,2*x),h.setRenderTarget(t),h.render(a,ir)}}function Vd(s){const e=[],t=[],n=[];let i=s;const r=s-ui+1+ro.length;for(let o=0;o<r;o++){const l=Math.pow(2,i);t.push(l);let h=1/l;o>s-ui?h=ro[o-s+ui-1]:o===0&&(h=0),n.push(h);const u=1/(l-2),p=-u,a=1+u,c=[p,p,a,p,a,a,p,p,a,a,p,a],d=6,g=6,_=3,m=2,f=1,y=new Float32Array(_*g*d),T=new Float32Array(m*g*d),x=new Float32Array(f*g*d);for(let A=0;A<d;A++){const w=A%3*2/3-1,L=A>2?0:-1,S=[w,L,0,w+2/3,L,0,w+2/3,L+1,0,w,L,0,w+2/3,L+1,0,w,L+1,0];y.set(S,_*g*A),T.set(c,m*g*A);const M=[A,A,A,A,A,A];x.set(M,f*g*A)}const D=new pt;D.setAttribute("position",new St(y,_)),D.setAttribute("uv",new St(T,m)),D.setAttribute("faceIndex",new St(x,f)),e.push(D),i>ui&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function co(s,e,t){const n=new Vn(s,e,t);return n.texture.mapping=Es,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ds(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Wd(s,e,t){const n=new Float32Array(zn),i=new P(0,1,0);return new Sn({name:"SphericalGaussianBlur",defines:{n:zn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:pa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:yn,depthTest:!1,depthWrite:!1})}function ho(){return new Sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:yn,depthTest:!1,depthWrite:!1})}function uo(){return new Sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yn,depthTest:!1,depthWrite:!1})}function pa(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Xd(s){let e=new WeakMap,t=null;function n(l){if(l&&l.isTexture){const h=l.mapping,u=h===yr||h===xr,p=h===gi||h===_i;if(u||p){let a=e.get(l);const c=a!==void 0?a.texture.pmremVersion:0;if(l.isRenderTargetTexture&&l.pmremVersion!==c)return t===null&&(t=new lo(s)),a=u?t.fromEquirectangular(l,a):t.fromCubemap(l,a),a.texture.pmremVersion=l.pmremVersion,e.set(l,a),a.texture;if(a!==void 0)return a.texture;{const d=l.image;return u&&d&&d.height>0||p&&d&&i(d)?(t===null&&(t=new lo(s)),a=u?t.fromEquirectangular(l):t.fromCubemap(l),a.texture.pmremVersion=l.pmremVersion,e.set(l,a),l.addEventListener("dispose",r),a.texture):null}}}return l}function i(l){let h=0;const u=6;for(let p=0;p<u;p++)l[p]!==void 0&&h++;return h===u}function r(l){const h=l.target;h.removeEventListener("dispose",r);const u=e.get(h);u!==void 0&&(e.delete(h),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function qd(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&ys("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Yd(s,e,t,n){const i={},r=new WeakMap;function o(a){const c=a.target;c.index!==null&&e.remove(c.index);for(const g in c.attributes)e.remove(c.attributes[g]);c.removeEventListener("dispose",o),delete i[c.id];const d=r.get(c);d&&(e.remove(d),r.delete(c)),n.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,t.memory.geometries--}function l(a,c){return i[c.id]===!0||(c.addEventListener("dispose",o),i[c.id]=!0,t.memory.geometries++),c}function h(a){const c=a.attributes;for(const d in c)e.update(c[d],s.ARRAY_BUFFER)}function u(a){const c=[],d=a.index,g=a.attributes.position;let _=0;if(d!==null){const y=d.array;_=d.version;for(let T=0,x=y.length;T<x;T+=3){const D=y[T+0],A=y[T+1],w=y[T+2];c.push(D,A,A,w,w,D)}}else if(g!==void 0){const y=g.array;_=g.version;for(let T=0,x=y.length/3-1;T<x;T+=3){const D=T+0,A=T+1,w=T+2;c.push(D,A,A,w,w,D)}}else return;const m=new(jo(c)?Jo:Zo)(c,1);m.version=_;const f=r.get(a);f&&e.remove(f),r.set(a,m)}function p(a){const c=r.get(a);if(c){const d=a.index;d!==null&&c.version<d.version&&u(a)}else u(a);return r.get(a)}return{get:l,update:h,getWireframeAttribute:p}}function jd(s,e,t){let n;function i(c){n=c}let r,o;function l(c){r=c.type,o=c.bytesPerElement}function h(c,d){s.drawElements(n,d,r,c*o),t.update(d,n,1)}function u(c,d,g){g!==0&&(s.drawElementsInstanced(n,d,r,c*o,g),t.update(d,n,g))}function p(c,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,c,0,g);let m=0;for(let f=0;f<g;f++)m+=d[f];t.update(m,n,1)}function a(c,d,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<c.length;f++)u(c[f]/o,d[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,c,0,_,0,g);let f=0;for(let y=0;y<g;y++)f+=d[y]*_[y];t.update(f,n,1)}}this.setMode=i,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=p,this.renderMultiDrawInstances=a}function Kd(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,l){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=l*(r/3);break;case s.LINES:t.lines+=l*(r/2);break;case s.LINE_STRIP:t.lines+=l*(r-1);break;case s.LINE_LOOP:t.lines+=l*r;break;case s.POINTS:t.points+=l*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function $d(s,e,t){const n=new WeakMap,i=new $e;function r(o,l,h){const u=o.morphTargetInfluences,p=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,a=p!==void 0?p.length:0;let c=n.get(l);if(c===void 0||c.count!==a){let M=function(){L.dispose(),n.delete(l),l.removeEventListener("dispose",M)};var d=M;c!==void 0&&c.texture.dispose();const g=l.morphAttributes.position!==void 0,_=l.morphAttributes.normal!==void 0,m=l.morphAttributes.color!==void 0,f=l.morphAttributes.position||[],y=l.morphAttributes.normal||[],T=l.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),m===!0&&(x=3);let D=l.attributes.position.count*x,A=1;D>e.maxTextureSize&&(A=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const w=new Float32Array(D*A*4*a),L=new Ko(w,D,A,a);L.type=ln,L.needsUpdate=!0;const S=x*4;for(let C=0;C<a;C++){const k=f[C],O=y[C],V=T[C],j=D*A*4*C;for(let X=0;X<k.count;X++){const Z=X*S;g===!0&&(i.fromBufferAttribute(k,X),w[j+Z+0]=i.x,w[j+Z+1]=i.y,w[j+Z+2]=i.z,w[j+Z+3]=0),_===!0&&(i.fromBufferAttribute(O,X),w[j+Z+4]=i.x,w[j+Z+5]=i.y,w[j+Z+6]=i.z,w[j+Z+7]=0),m===!0&&(i.fromBufferAttribute(V,X),w[j+Z+8]=i.x,w[j+Z+9]=i.y,w[j+Z+10]=i.z,w[j+Z+11]=V.itemSize===4?i.w:1)}}c={count:a,texture:L,size:new Fe(D,A)},n.set(l,c),l.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)h.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<u.length;m++)g+=u[m];const _=l.morphTargetsRelative?1:1-g;h.getUniforms().setValue(s,"morphTargetBaseInfluence",_),h.getUniforms().setValue(s,"morphTargetInfluences",u)}h.getUniforms().setValue(s,"morphTargetsTexture",c.texture,t),h.getUniforms().setValue(s,"morphTargetsTextureSize",c.size)}return{update:r}}function Zd(s,e,t,n){let i=new WeakMap;function r(h){const u=n.render.frame,p=h.geometry,a=e.get(h,p);if(i.get(a)!==u&&(e.update(a),i.set(a,u)),h.isInstancedMesh&&(h.hasEventListener("dispose",l)===!1&&h.addEventListener("dispose",l),i.get(h)!==u&&(t.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,s.ARRAY_BUFFER),i.set(h,u))),h.isSkinnedMesh){const c=h.skeleton;i.get(c)!==u&&(c.update(),i.set(c,u))}return a}function o(){i=new WeakMap}function l(h){const u=h.target;u.removeEventListener("dispose",l),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:r,dispose:o}}const ll=new Et,fo=new nl(1,1),cl=new Ko,hl=new mc,ul=new tl,po=[],mo=[],go=new Float32Array(16),_o=new Float32Array(9),vo=new Float32Array(4);function Si(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=po[i];if(r===void 0&&(r=new Float32Array(i),po[i]=r),e!==0){n.toArray(r,0);for(let o=1,l=0;o!==e;++o)l+=t,s[o].toArray(r,l)}return r}function ut(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function dt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Cs(s,e){let t=mo[e];t===void 0&&(t=new Int32Array(e),mo[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Jd(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Qd(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ut(t,e))return;s.uniform2fv(this.addr,e),dt(t,e)}}function ef(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ut(t,e))return;s.uniform3fv(this.addr,e),dt(t,e)}}function tf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ut(t,e))return;s.uniform4fv(this.addr,e),dt(t,e)}}function nf(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(ut(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),dt(t,e)}else{if(ut(t,n))return;vo.set(n),s.uniformMatrix2fv(this.addr,!1,vo),dt(t,n)}}function sf(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(ut(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),dt(t,e)}else{if(ut(t,n))return;_o.set(n),s.uniformMatrix3fv(this.addr,!1,_o),dt(t,n)}}function rf(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(ut(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),dt(t,e)}else{if(ut(t,n))return;go.set(n),s.uniformMatrix4fv(this.addr,!1,go),dt(t,n)}}function af(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function of(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ut(t,e))return;s.uniform2iv(this.addr,e),dt(t,e)}}function lf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ut(t,e))return;s.uniform3iv(this.addr,e),dt(t,e)}}function cf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ut(t,e))return;s.uniform4iv(this.addr,e),dt(t,e)}}function hf(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function uf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ut(t,e))return;s.uniform2uiv(this.addr,e),dt(t,e)}}function df(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ut(t,e))return;s.uniform3uiv(this.addr,e),dt(t,e)}}function ff(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ut(t,e))return;s.uniform4uiv(this.addr,e),dt(t,e)}}function pf(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(fo.compareFunction=Yo,r=fo):r=ll,t.setTexture2D(e||r,i)}function mf(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||hl,i)}function gf(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||ul,i)}function _f(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||cl,i)}function vf(s){switch(s){case 5126:return Jd;case 35664:return Qd;case 35665:return ef;case 35666:return tf;case 35674:return nf;case 35675:return sf;case 35676:return rf;case 5124:case 35670:return af;case 35667:case 35671:return of;case 35668:case 35672:return lf;case 35669:case 35673:return cf;case 5125:return hf;case 36294:return uf;case 36295:return df;case 36296:return ff;case 35678:case 36198:case 36298:case 36306:case 35682:return pf;case 35679:case 36299:case 36307:return mf;case 35680:case 36300:case 36308:case 36293:return gf;case 36289:case 36303:case 36311:case 36292:return _f}}function yf(s,e){s.uniform1fv(this.addr,e)}function xf(s,e){const t=Si(e,this.size,2);s.uniform2fv(this.addr,t)}function Mf(s,e){const t=Si(e,this.size,3);s.uniform3fv(this.addr,t)}function Sf(s,e){const t=Si(e,this.size,4);s.uniform4fv(this.addr,t)}function Ef(s,e){const t=Si(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Tf(s,e){const t=Si(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function bf(s,e){const t=Si(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function wf(s,e){s.uniform1iv(this.addr,e)}function Af(s,e){s.uniform2iv(this.addr,e)}function Cf(s,e){s.uniform3iv(this.addr,e)}function Rf(s,e){s.uniform4iv(this.addr,e)}function Pf(s,e){s.uniform1uiv(this.addr,e)}function Df(s,e){s.uniform2uiv(this.addr,e)}function Lf(s,e){s.uniform3uiv(this.addr,e)}function If(s,e){s.uniform4uiv(this.addr,e)}function Uf(s,e,t){const n=this.cache,i=e.length,r=Cs(t,i);ut(n,r)||(s.uniform1iv(this.addr,r),dt(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||ll,r[o])}function Nf(s,e,t){const n=this.cache,i=e.length,r=Cs(t,i);ut(n,r)||(s.uniform1iv(this.addr,r),dt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||hl,r[o])}function Ff(s,e,t){const n=this.cache,i=e.length,r=Cs(t,i);ut(n,r)||(s.uniform1iv(this.addr,r),dt(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||ul,r[o])}function Of(s,e,t){const n=this.cache,i=e.length,r=Cs(t,i);ut(n,r)||(s.uniform1iv(this.addr,r),dt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||cl,r[o])}function zf(s){switch(s){case 5126:return yf;case 35664:return xf;case 35665:return Mf;case 35666:return Sf;case 35674:return Ef;case 35675:return Tf;case 35676:return bf;case 5124:case 35670:return wf;case 35667:case 35671:return Af;case 35668:case 35672:return Cf;case 35669:case 35673:return Rf;case 5125:return Pf;case 36294:return Df;case 36295:return Lf;case 36296:return If;case 35678:case 36198:case 36298:case 36306:case 35682:return Uf;case 35679:case 36299:case 36307:return Nf;case 35680:case 36300:case 36308:case 36293:return Ff;case 36289:case 36303:case 36311:case 36292:return Of}}class Bf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=vf(t.type)}}class kf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=zf(t.type)}}class Gf{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const l=i[r];l.setValue(e,t[l.id],n)}}}const lr=/(\w+)(\])?(\[|\.)?/g;function yo(s,e){s.seq.push(e),s.map[e.id]=e}function Hf(s,e,t){const n=s.name,i=n.length;for(lr.lastIndex=0;;){const r=lr.exec(n),o=lr.lastIndex;let l=r[1];const h=r[2]==="]",u=r[3];if(h&&(l=l|0),u===void 0||u==="["&&o+2===i){yo(t,u===void 0?new Bf(l,s,e):new kf(l,s,e));break}else{let a=t.map[l];a===void 0&&(a=new Gf(l),yo(t,a)),t=a}}}class xs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);Hf(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const l=t[r],h=n[l.id];h.needsUpdate!==!1&&l.setValue(e,h.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function xo(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const Vf=37297;let Wf=0;function Xf(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const l=o+1;n.push(`${l===e?">":" "} ${l}: ${t[o]}`)}return n.join(`
`)}const Mo=new Pe;function qf(s){We._getMatrix(Mo,We.workingColorSpace,s);const e=`mat3( ${Mo.elements.map(t=>t.toFixed(4))} )`;switch(We.getTransfer(s)){case Ms:return[e,"LinearTransferOETF"];case Ke:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function So(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+Xf(s.getShaderSource(e),o)}else return i}function Yf(s,e){const t=qf(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function jf(s,e){let t;switch(e){case Fo:t="Linear";break;case Hl:t="Reinhard";break;case Vl:t="Cineon";break;case Wl:t="ACESFilmic";break;case ql:t="AgX";break;case Yl:t="Neutral";break;case Xl:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const fs=new P;function Kf(){We.getLuminanceCoefficients(fs);const s=fs.x.toFixed(4),e=fs.y.toFixed(4),t=fs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $f(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Li).join(`
`)}function Zf(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Jf(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let l=1;r.type===s.FLOAT_MAT2&&(l=2),r.type===s.FLOAT_MAT3&&(l=3),r.type===s.FLOAT_MAT4&&(l=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:l}}return t}function Li(s){return s!==""}function Eo(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function To(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Qf=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zr(s){return s.replace(Qf,tp)}const ep=new Map;function tp(s,e){let t=Ie[e];if(t===void 0){const n=ep.get(e);if(n!==void 0)t=Ie[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Zr(t)}const np=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bo(s){return s.replace(np,ip)}function ip(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function wo(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function sp(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Uo?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Ml?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===rn&&(e="SHADOWMAP_TYPE_VSM"),e}function rp(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case gi:case _i:e="ENVMAP_TYPE_CUBE";break;case Es:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ap(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case _i:e="ENVMAP_MODE_REFRACTION";break}return e}function op(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case No:e="ENVMAP_BLENDING_MULTIPLY";break;case kl:e="ENVMAP_BLENDING_MIX";break;case Gl:e="ENVMAP_BLENDING_ADD";break}return e}function lp(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function cp(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,l=t.fragmentShader;const h=sp(t),u=rp(t),p=ap(t),a=op(t),c=lp(t),d=$f(t),g=Zf(r),_=i.createProgram();let m,f,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Li).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Li).join(`
`),f.length>0&&(f+=`
`)):(m=[wo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Li).join(`
`),f=[wo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+p:"",t.envMap?"#define "+a:"",c?"#define CUBEUV_TEXEL_WIDTH "+c.texelWidth:"",c?"#define CUBEUV_TEXEL_HEIGHT "+c.texelHeight:"",c?"#define CUBEUV_MAX_MIP "+c.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==xn?"#define TONE_MAPPING":"",t.toneMapping!==xn?Ie.tonemapping_pars_fragment:"",t.toneMapping!==xn?jf("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ie.colorspace_pars_fragment,Yf("linearToOutputTexel",t.outputColorSpace),Kf(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Li).join(`
`)),o=Zr(o),o=Eo(o,t),o=To(o,t),l=Zr(l),l=Eo(l,t),l=To(l,t),o=bo(o),l=bo(l),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===Ca?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ca?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const T=y+m+o,x=y+f+l,D=xo(i,i.VERTEX_SHADER,T),A=xo(i,i.FRAGMENT_SHADER,x);i.attachShader(_,D),i.attachShader(_,A),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function w(C){if(s.debug.checkShaderErrors){const k=i.getProgramInfoLog(_).trim(),O=i.getShaderInfoLog(D).trim(),V=i.getShaderInfoLog(A).trim();let j=!0,X=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(j=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,D,A);else{const Z=So(i,D,"vertex"),H=So(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+k+`
`+Z+`
`+H)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(O===""||V==="")&&(X=!1);X&&(C.diagnostics={runnable:j,programLog:k,vertexShader:{log:O,prefix:m},fragmentShader:{log:V,prefix:f}})}i.deleteShader(D),i.deleteShader(A),L=new xs(i,_),S=Jf(i,_)}let L;this.getUniforms=function(){return L===void 0&&w(this),L};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(_,Vf)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Wf++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=D,this.fragmentShader=A,this}let hp=0;class up{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new dp(e),t.set(e,n)),n}}class dp{constructor(e){this.id=hp++,this.code=e,this.usedTimes=0}}function fp(s,e,t,n,i,r,o){const l=new oa,h=new up,u=new Set,p=[],a=i.logarithmicDepthBuffer,c=i.vertexTextures;let d=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return u.add(S),S===0?"uv":`uv${S}`}function m(S,M,C,k,O){const V=k.fog,j=O.geometry,X=S.isMeshStandardMaterial?k.environment:null,Z=(S.isMeshStandardMaterial?t:e).get(S.envMap||X),H=Z&&Z.mapping===Es?Z.image.height:null,ie=g[S.type];S.precision!==null&&(d=i.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));const he=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,_e=he!==void 0?he.length:0;let Ne=0;j.morphAttributes.position!==void 0&&(Ne=1),j.morphAttributes.normal!==void 0&&(Ne=2),j.morphAttributes.color!==void 0&&(Ne=3);let Ze,q,ee,pe;if(ie){const je=jt[ie];Ze=je.vertexShader,q=je.fragmentShader}else Ze=S.vertexShader,q=S.fragmentShader,h.update(S),ee=h.getVertexShaderID(S),pe=h.getFragmentShaderID(S);const se=s.getRenderTarget(),Me=s.state.buffers.depth.getReversed(),Xe=O.isInstancedMesh===!0,be=O.isBatchedMesh===!0,ot=!!S.map,nt=!!S.matcap,ze=!!Z,R=!!S.aoMap,Pt=!!S.lightMap,Ge=!!S.bumpMap,Be=!!S.normalMap,ve=!!S.displacementMap,et=!!S.emissiveMap,ge=!!S.metalnessMap,b=!!S.roughnessMap,v=S.anisotropy>0,F=S.clearcoat>0,Y=S.dispersion>0,$=S.iridescence>0,W=S.sheen>0,me=S.transmission>0,re=v&&!!S.anisotropyMap,Se=F&&!!S.clearcoatMap,Ee=F&&!!S.clearcoatNormalMap,J=F&&!!S.clearcoatRoughnessMap,ue=$&&!!S.iridescenceMap,Te=$&&!!S.iridescenceThicknessMap,Ae=W&&!!S.sheenColorMap,de=W&&!!S.sheenRoughnessMap,ke=!!S.specularMap,Le=!!S.specularColorMap,Je=!!S.specularIntensityMap,I=me&&!!S.transmissionMap,ae=me&&!!S.thicknessMap,G=!!S.gradientMap,K=!!S.alphaMap,le=S.alphaTest>0,oe=!!S.alphaHash,Re=!!S.extensions;let it=xn;S.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(it=s.toneMapping);const _t={shaderID:ie,shaderType:S.type,shaderName:S.name,vertexShader:Ze,fragmentShader:q,defines:S.defines,customVertexShaderID:ee,customFragmentShaderID:pe,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:be,batchingColor:be&&O._colorsTexture!==null,instancing:Xe,instancingColor:Xe&&O.instanceColor!==null,instancingMorph:Xe&&O.morphTexture!==null,supportsVertexTextures:c,outputColorSpace:se===null?s.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:vi,alphaToCoverage:!!S.alphaToCoverage,map:ot,matcap:nt,envMap:ze,envMapMode:ze&&Z.mapping,envMapCubeUVHeight:H,aoMap:R,lightMap:Pt,bumpMap:Ge,normalMap:Be,displacementMap:c&&ve,emissiveMap:et,normalMapObjectSpace:Be&&S.normalMapType===Zl,normalMapTangentSpace:Be&&S.normalMapType===qo,metalnessMap:ge,roughnessMap:b,anisotropy:v,anisotropyMap:re,clearcoat:F,clearcoatMap:Se,clearcoatNormalMap:Ee,clearcoatRoughnessMap:J,dispersion:Y,iridescence:$,iridescenceMap:ue,iridescenceThicknessMap:Te,sheen:W,sheenColorMap:Ae,sheenRoughnessMap:de,specularMap:ke,specularColorMap:Le,specularIntensityMap:Je,transmission:me,transmissionMap:I,thicknessMap:ae,gradientMap:G,opaque:S.transparent===!1&&S.blending===di&&S.alphaToCoverage===!1,alphaMap:K,alphaTest:le,alphaHash:oe,combine:S.combine,mapUv:ot&&_(S.map.channel),aoMapUv:R&&_(S.aoMap.channel),lightMapUv:Pt&&_(S.lightMap.channel),bumpMapUv:Ge&&_(S.bumpMap.channel),normalMapUv:Be&&_(S.normalMap.channel),displacementMapUv:ve&&_(S.displacementMap.channel),emissiveMapUv:et&&_(S.emissiveMap.channel),metalnessMapUv:ge&&_(S.metalnessMap.channel),roughnessMapUv:b&&_(S.roughnessMap.channel),anisotropyMapUv:re&&_(S.anisotropyMap.channel),clearcoatMapUv:Se&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:Ee&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ue&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:de&&_(S.sheenRoughnessMap.channel),specularMapUv:ke&&_(S.specularMap.channel),specularColorMapUv:Le&&_(S.specularColorMap.channel),specularIntensityMapUv:Je&&_(S.specularIntensityMap.channel),transmissionMapUv:I&&_(S.transmissionMap.channel),thicknessMapUv:ae&&_(S.thicknessMap.channel),alphaMapUv:K&&_(S.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(Be||v),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!j.attributes.uv&&(ot||K),fog:!!V,useFog:S.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:a,reverseDepthBuffer:Me,skinning:O.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:_e,morphTextureStride:Ne,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:s.shadowMap.enabled&&C.length>0,shadowMapType:s.shadowMap.type,toneMapping:it,decodeVideoTexture:ot&&S.map.isVideoTexture===!0&&We.getTransfer(S.map.colorSpace)===Ke,decodeVideoTextureEmissive:et&&S.emissiveMap.isVideoTexture===!0&&We.getTransfer(S.emissiveMap.colorSpace)===Ke,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===kt,flipSided:S.side===mt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Re&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Re&&S.extensions.multiDraw===!0||be)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return _t.vertexUv1s=u.has(1),_t.vertexUv2s=u.has(2),_t.vertexUv3s=u.has(3),u.clear(),_t}function f(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const C in S.defines)M.push(C),M.push(S.defines[C]);return S.isRawShaderMaterial===!1&&(y(M,S),T(M,S),M.push(s.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function y(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function T(S,M){l.disableAll(),M.supportsVertexTextures&&l.enable(0),M.instancing&&l.enable(1),M.instancingColor&&l.enable(2),M.instancingMorph&&l.enable(3),M.matcap&&l.enable(4),M.envMap&&l.enable(5),M.normalMapObjectSpace&&l.enable(6),M.normalMapTangentSpace&&l.enable(7),M.clearcoat&&l.enable(8),M.iridescence&&l.enable(9),M.alphaTest&&l.enable(10),M.vertexColors&&l.enable(11),M.vertexAlphas&&l.enable(12),M.vertexUv1s&&l.enable(13),M.vertexUv2s&&l.enable(14),M.vertexUv3s&&l.enable(15),M.vertexTangents&&l.enable(16),M.anisotropy&&l.enable(17),M.alphaHash&&l.enable(18),M.batching&&l.enable(19),M.dispersion&&l.enable(20),M.batchingColor&&l.enable(21),S.push(l.mask),l.disableAll(),M.fog&&l.enable(0),M.useFog&&l.enable(1),M.flatShading&&l.enable(2),M.logarithmicDepthBuffer&&l.enable(3),M.reverseDepthBuffer&&l.enable(4),M.skinning&&l.enable(5),M.morphTargets&&l.enable(6),M.morphNormals&&l.enable(7),M.morphColors&&l.enable(8),M.premultipliedAlpha&&l.enable(9),M.shadowMapEnabled&&l.enable(10),M.doubleSided&&l.enable(11),M.flipSided&&l.enable(12),M.useDepthPacking&&l.enable(13),M.dithering&&l.enable(14),M.transmission&&l.enable(15),M.sheen&&l.enable(16),M.opaque&&l.enable(17),M.pointsUvs&&l.enable(18),M.decodeVideoTexture&&l.enable(19),M.decodeVideoTextureEmissive&&l.enable(20),M.alphaToCoverage&&l.enable(21),S.push(l.mask)}function x(S){const M=g[S.type];let C;if(M){const k=jt[M];C=Cc.clone(k.uniforms)}else C=S.uniforms;return C}function D(S,M){let C;for(let k=0,O=p.length;k<O;k++){const V=p[k];if(V.cacheKey===M){C=V,++C.usedTimes;break}}return C===void 0&&(C=new cp(s,M,S,r),p.push(C)),C}function A(S){if(--S.usedTimes===0){const M=p.indexOf(S);p[M]=p[p.length-1],p.pop(),S.destroy()}}function w(S){h.remove(S)}function L(){h.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:x,acquireProgram:D,releaseProgram:A,releaseShaderCache:w,programs:p,dispose:L}}function pp(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let l=s.get(o);return l===void 0&&(l={},s.set(o,l)),l}function n(o){s.delete(o)}function i(o,l,h){s.get(o)[l]=h}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function mp(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Ao(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Co(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(a,c,d,g,_,m){let f=s[e];return f===void 0?(f={id:a.id,object:a,geometry:c,material:d,groupOrder:g,renderOrder:a.renderOrder,z:_,group:m},s[e]=f):(f.id=a.id,f.object=a,f.geometry=c,f.material=d,f.groupOrder=g,f.renderOrder=a.renderOrder,f.z=_,f.group=m),e++,f}function l(a,c,d,g,_,m){const f=o(a,c,d,g,_,m);d.transmission>0?n.push(f):d.transparent===!0?i.push(f):t.push(f)}function h(a,c,d,g,_,m){const f=o(a,c,d,g,_,m);d.transmission>0?n.unshift(f):d.transparent===!0?i.unshift(f):t.unshift(f)}function u(a,c){t.length>1&&t.sort(a||mp),n.length>1&&n.sort(c||Ao),i.length>1&&i.sort(c||Ao)}function p(){for(let a=e,c=s.length;a<c;a++){const d=s[a];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:l,unshift:h,finish:p,sort:u}}function gp(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new Co,s.set(n,[o])):i>=r.length?(o=new Co,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function _p(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new De};break;case"SpotLight":t={position:new P,direction:new P,color:new De,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new De,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new De,groundColor:new De};break;case"RectAreaLight":t={color:new De,position:new P,halfWidth:new P,halfHeight:new P};break}return s[e.id]=t,t}}}function vp(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let yp=0;function xp(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Mp(s){const e=new _p,t=vp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new P);const i=new P,r=new Qe,o=new Qe;function l(u){let p=0,a=0,c=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let d=0,g=0,_=0,m=0,f=0,y=0,T=0,x=0,D=0,A=0,w=0;u.sort(xp);for(let S=0,M=u.length;S<M;S++){const C=u[S],k=C.color,O=C.intensity,V=C.distance,j=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)p+=k.r*O,a+=k.g*O,c+=k.b*O;else if(C.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(C.sh.coefficients[X],O);w++}else if(C.isDirectionalLight){const X=e.get(C);if(X.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const Z=C.shadow,H=t.get(C);H.shadowIntensity=Z.intensity,H.shadowBias=Z.bias,H.shadowNormalBias=Z.normalBias,H.shadowRadius=Z.radius,H.shadowMapSize=Z.mapSize,n.directionalShadow[d]=H,n.directionalShadowMap[d]=j,n.directionalShadowMatrix[d]=C.shadow.matrix,y++}n.directional[d]=X,d++}else if(C.isSpotLight){const X=e.get(C);X.position.setFromMatrixPosition(C.matrixWorld),X.color.copy(k).multiplyScalar(O),X.distance=V,X.coneCos=Math.cos(C.angle),X.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),X.decay=C.decay,n.spot[_]=X;const Z=C.shadow;if(C.map&&(n.spotLightMap[D]=C.map,D++,Z.updateMatrices(C),C.castShadow&&A++),n.spotLightMatrix[_]=Z.matrix,C.castShadow){const H=t.get(C);H.shadowIntensity=Z.intensity,H.shadowBias=Z.bias,H.shadowNormalBias=Z.normalBias,H.shadowRadius=Z.radius,H.shadowMapSize=Z.mapSize,n.spotShadow[_]=H,n.spotShadowMap[_]=j,x++}_++}else if(C.isRectAreaLight){const X=e.get(C);X.color.copy(k).multiplyScalar(O),X.halfWidth.set(C.width*.5,0,0),X.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=X,m++}else if(C.isPointLight){const X=e.get(C);if(X.color.copy(C.color).multiplyScalar(C.intensity),X.distance=C.distance,X.decay=C.decay,C.castShadow){const Z=C.shadow,H=t.get(C);H.shadowIntensity=Z.intensity,H.shadowBias=Z.bias,H.shadowNormalBias=Z.normalBias,H.shadowRadius=Z.radius,H.shadowMapSize=Z.mapSize,H.shadowCameraNear=Z.camera.near,H.shadowCameraFar=Z.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=j,n.pointShadowMatrix[g]=C.shadow.matrix,T++}n.point[g]=X,g++}else if(C.isHemisphereLight){const X=e.get(C);X.skyColor.copy(C.color).multiplyScalar(O),X.groundColor.copy(C.groundColor).multiplyScalar(O),n.hemi[f]=X,f++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=te.LTC_FLOAT_1,n.rectAreaLTC2=te.LTC_FLOAT_2):(n.rectAreaLTC1=te.LTC_HALF_1,n.rectAreaLTC2=te.LTC_HALF_2)),n.ambient[0]=p,n.ambient[1]=a,n.ambient[2]=c;const L=n.hash;(L.directionalLength!==d||L.pointLength!==g||L.spotLength!==_||L.rectAreaLength!==m||L.hemiLength!==f||L.numDirectionalShadows!==y||L.numPointShadows!==T||L.numSpotShadows!==x||L.numSpotMaps!==D||L.numLightProbes!==w)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=x+D-A,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=w,L.directionalLength=d,L.pointLength=g,L.spotLength=_,L.rectAreaLength=m,L.hemiLength=f,L.numDirectionalShadows=y,L.numPointShadows=T,L.numSpotShadows=x,L.numSpotMaps=D,L.numLightProbes=w,n.version=yp++)}function h(u,p){let a=0,c=0,d=0,g=0,_=0;const m=p.matrixWorldInverse;for(let f=0,y=u.length;f<y;f++){const T=u[f];if(T.isDirectionalLight){const x=n.directional[a];x.direction.setFromMatrixPosition(T.matrixWorld),i.setFromMatrixPosition(T.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),a++}else if(T.isSpotLight){const x=n.spot[d];x.position.setFromMatrixPosition(T.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(T.matrixWorld),i.setFromMatrixPosition(T.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),d++}else if(T.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(T.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(T.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(T.width*.5,0,0),x.halfHeight.set(0,T.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(T.isPointLight){const x=n.point[c];x.position.setFromMatrixPosition(T.matrixWorld),x.position.applyMatrix4(m),c++}else if(T.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(T.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:l,setupView:h,state:n}}function Ro(s){const e=new Mp(s),t=[],n=[];function i(p){u.camera=p,t.length=0,n.length=0}function r(p){t.push(p)}function o(p){n.push(p)}function l(){e.setup(t)}function h(p){e.setupView(t,p)}const u={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:u,setupLights:l,setupLightsView:h,pushLight:r,pushShadow:o}}function Sp(s){let e=new WeakMap;function t(i,r=0){const o=e.get(i);let l;return o===void 0?(l=new Ro(s),e.set(i,[l])):r>=o.length?(l=new Ro(s),o.push(l)):l=o[r],l}function n(){e=new WeakMap}return{get:t,dispose:n}}const Ep=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Tp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function bp(s,e,t){let n=new bs;const i=new Fe,r=new Fe,o=new $e,l=new zc({depthPacking:$l}),h=new Bc,u={},p=t.maxTextureSize,a={[Mn]:mt,[mt]:Mn,[kt]:kt},c=new Sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Fe},radius:{value:4}},vertexShader:Ep,fragmentShader:Tp}),d=c.clone();d.defines.HORIZONTAL_PASS=1;const g=new pt;g.setAttribute("position",new St(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ue(g,c),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Uo;let f=this.type;this.render=function(A,w,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const S=s.getRenderTarget(),M=s.getActiveCubeFace(),C=s.getActiveMipmapLevel(),k=s.state;k.setBlending(yn),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const O=f!==rn&&this.type===rn,V=f===rn&&this.type!==rn;for(let j=0,X=A.length;j<X;j++){const Z=A[j],H=Z.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);const ie=H.getFrameExtents();if(i.multiply(ie),r.copy(H.mapSize),(i.x>p||i.y>p)&&(i.x>p&&(r.x=Math.floor(p/ie.x),i.x=r.x*ie.x,H.mapSize.x=r.x),i.y>p&&(r.y=Math.floor(p/ie.y),i.y=r.y*ie.y,H.mapSize.y=r.y)),H.map===null||O===!0||V===!0){const _e=this.type!==rn?{minFilter:Xt,magFilter:Xt}:{};H.map!==null&&H.map.dispose(),H.map=new Vn(i.x,i.y,_e),H.map.texture.name=Z.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();const he=H.getViewportCount();for(let _e=0;_e<he;_e++){const Ne=H.getViewport(_e);o.set(r.x*Ne.x,r.y*Ne.y,r.x*Ne.z,r.y*Ne.w),k.viewport(o),H.updateMatrices(Z,_e),n=H.getFrustum(),x(w,L,H.camera,Z,this.type)}H.isPointLightShadow!==!0&&this.type===rn&&y(H,L),H.needsUpdate=!1}f=this.type,m.needsUpdate=!1,s.setRenderTarget(S,M,C)};function y(A,w){const L=e.update(_);c.defines.VSM_SAMPLES!==A.blurSamples&&(c.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,c.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Vn(i.x,i.y)),c.uniforms.shadow_pass.value=A.map.texture,c.uniforms.resolution.value=A.mapSize,c.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(w,null,L,c,_,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(w,null,L,d,_,null)}function T(A,w,L,S){let M=null;const C=L.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(C!==void 0)M=C;else if(M=L.isPointLight===!0?h:l,s.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const k=M.uuid,O=w.uuid;let V=u[k];V===void 0&&(V={},u[k]=V);let j=V[O];j===void 0&&(j=M.clone(),V[O]=j,w.addEventListener("dispose",D)),M=j}if(M.visible=w.visible,M.wireframe=w.wireframe,S===rn?M.side=w.shadowSide!==null?w.shadowSide:w.side:M.side=w.shadowSide!==null?w.shadowSide:a[w.side],M.alphaMap=w.alphaMap,M.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,M.map=w.map,M.clipShadows=w.clipShadows,M.clippingPlanes=w.clippingPlanes,M.clipIntersection=w.clipIntersection,M.displacementMap=w.displacementMap,M.displacementScale=w.displacementScale,M.displacementBias=w.displacementBias,M.wireframeLinewidth=w.wireframeLinewidth,M.linewidth=w.linewidth,L.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const k=s.properties.get(M);k.light=L}return M}function x(A,w,L,S,M){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===rn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,A.matrixWorld);const O=e.update(A),V=A.material;if(Array.isArray(V)){const j=O.groups;for(let X=0,Z=j.length;X<Z;X++){const H=j[X],ie=V[H.materialIndex];if(ie&&ie.visible){const he=T(A,ie,S,M);A.onBeforeShadow(s,A,w,L,O,he,H),s.renderBufferDirect(L,null,O,he,A,H),A.onAfterShadow(s,A,w,L,O,he,H)}}}else if(V.visible){const j=T(A,V,S,M);A.onBeforeShadow(s,A,w,L,O,j,null),s.renderBufferDirect(L,null,O,j,A,null),A.onAfterShadow(s,A,w,L,O,j,null)}}const k=A.children;for(let O=0,V=k.length;O<V;O++)x(k[O],w,L,S,M)}function D(A){A.target.removeEventListener("dispose",D);for(const L in u){const S=u[L],M=A.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const wp={[dr]:fr,[pr]:_r,[mr]:vr,[mi]:gr,[fr]:dr,[_r]:pr,[vr]:mr,[gr]:mi};function Ap(s,e){function t(){let I=!1;const ae=new $e;let G=null;const K=new $e(0,0,0,0);return{setMask:function(le){G!==le&&!I&&(s.colorMask(le,le,le,le),G=le)},setLocked:function(le){I=le},setClear:function(le,oe,Re,it,_t){_t===!0&&(le*=it,oe*=it,Re*=it),ae.set(le,oe,Re,it),K.equals(ae)===!1&&(s.clearColor(le,oe,Re,it),K.copy(ae))},reset:function(){I=!1,G=null,K.set(-1,0,0,0)}}}function n(){let I=!1,ae=!1,G=null,K=null,le=null;return{setReversed:function(oe){if(ae!==oe){const Re=e.get("EXT_clip_control");oe?Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.ZERO_TO_ONE_EXT):Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.NEGATIVE_ONE_TO_ONE_EXT),ae=oe;const it=le;le=null,this.setClear(it)}},getReversed:function(){return ae},setTest:function(oe){oe?se(s.DEPTH_TEST):Me(s.DEPTH_TEST)},setMask:function(oe){G!==oe&&!I&&(s.depthMask(oe),G=oe)},setFunc:function(oe){if(ae&&(oe=wp[oe]),K!==oe){switch(oe){case dr:s.depthFunc(s.NEVER);break;case fr:s.depthFunc(s.ALWAYS);break;case pr:s.depthFunc(s.LESS);break;case mi:s.depthFunc(s.LEQUAL);break;case mr:s.depthFunc(s.EQUAL);break;case gr:s.depthFunc(s.GEQUAL);break;case _r:s.depthFunc(s.GREATER);break;case vr:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}K=oe}},setLocked:function(oe){I=oe},setClear:function(oe){le!==oe&&(ae&&(oe=1-oe),s.clearDepth(oe),le=oe)},reset:function(){I=!1,G=null,K=null,le=null,ae=!1}}}function i(){let I=!1,ae=null,G=null,K=null,le=null,oe=null,Re=null,it=null,_t=null;return{setTest:function(je){I||(je?se(s.STENCIL_TEST):Me(s.STENCIL_TEST))},setMask:function(je){ae!==je&&!I&&(s.stencilMask(je),ae=je)},setFunc:function(je,Nt,Jt){(G!==je||K!==Nt||le!==Jt)&&(s.stencilFunc(je,Nt,Jt),G=je,K=Nt,le=Jt)},setOp:function(je,Nt,Jt){(oe!==je||Re!==Nt||it!==Jt)&&(s.stencilOp(je,Nt,Jt),oe=je,Re=Nt,it=Jt)},setLocked:function(je){I=je},setClear:function(je){_t!==je&&(s.clearStencil(je),_t=je)},reset:function(){I=!1,ae=null,G=null,K=null,le=null,oe=null,Re=null,it=null,_t=null}}}const r=new t,o=new n,l=new i,h=new WeakMap,u=new WeakMap;let p={},a={},c=new WeakMap,d=[],g=null,_=!1,m=null,f=null,y=null,T=null,x=null,D=null,A=null,w=new De(0,0,0),L=0,S=!1,M=null,C=null,k=null,O=null,V=null;const j=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,Z=0;const H=s.getParameter(s.VERSION);H.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(H)[1]),X=Z>=1):H.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),X=Z>=2);let ie=null,he={};const _e=s.getParameter(s.SCISSOR_BOX),Ne=s.getParameter(s.VIEWPORT),Ze=new $e().fromArray(_e),q=new $e().fromArray(Ne);function ee(I,ae,G,K){const le=new Uint8Array(4),oe=s.createTexture();s.bindTexture(I,oe),s.texParameteri(I,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(I,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Re=0;Re<G;Re++)I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY?s.texImage3D(ae,0,s.RGBA,1,1,K,0,s.RGBA,s.UNSIGNED_BYTE,le):s.texImage2D(ae+Re,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,le);return oe}const pe={};pe[s.TEXTURE_2D]=ee(s.TEXTURE_2D,s.TEXTURE_2D,1),pe[s.TEXTURE_CUBE_MAP]=ee(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),pe[s.TEXTURE_2D_ARRAY]=ee(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),pe[s.TEXTURE_3D]=ee(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),l.setClear(0),se(s.DEPTH_TEST),o.setFunc(mi),Ge(!1),Be(Ea),se(s.CULL_FACE),R(yn);function se(I){p[I]!==!0&&(s.enable(I),p[I]=!0)}function Me(I){p[I]!==!1&&(s.disable(I),p[I]=!1)}function Xe(I,ae){return a[I]!==ae?(s.bindFramebuffer(I,ae),a[I]=ae,I===s.DRAW_FRAMEBUFFER&&(a[s.FRAMEBUFFER]=ae),I===s.FRAMEBUFFER&&(a[s.DRAW_FRAMEBUFFER]=ae),!0):!1}function be(I,ae){let G=d,K=!1;if(I){G=c.get(ae),G===void 0&&(G=[],c.set(ae,G));const le=I.textures;if(G.length!==le.length||G[0]!==s.COLOR_ATTACHMENT0){for(let oe=0,Re=le.length;oe<Re;oe++)G[oe]=s.COLOR_ATTACHMENT0+oe;G.length=le.length,K=!0}}else G[0]!==s.BACK&&(G[0]=s.BACK,K=!0);K&&s.drawBuffers(G)}function ot(I){return g!==I?(s.useProgram(I),g=I,!0):!1}const nt={[On]:s.FUNC_ADD,[El]:s.FUNC_SUBTRACT,[Tl]:s.FUNC_REVERSE_SUBTRACT};nt[bl]=s.MIN,nt[wl]=s.MAX;const ze={[Al]:s.ZERO,[Cl]:s.ONE,[Rl]:s.SRC_COLOR,[hr]:s.SRC_ALPHA,[Nl]:s.SRC_ALPHA_SATURATE,[Il]:s.DST_COLOR,[Dl]:s.DST_ALPHA,[Pl]:s.ONE_MINUS_SRC_COLOR,[ur]:s.ONE_MINUS_SRC_ALPHA,[Ul]:s.ONE_MINUS_DST_COLOR,[Ll]:s.ONE_MINUS_DST_ALPHA,[Fl]:s.CONSTANT_COLOR,[Ol]:s.ONE_MINUS_CONSTANT_COLOR,[zl]:s.CONSTANT_ALPHA,[Bl]:s.ONE_MINUS_CONSTANT_ALPHA};function R(I,ae,G,K,le,oe,Re,it,_t,je){if(I===yn){_===!0&&(Me(s.BLEND),_=!1);return}if(_===!1&&(se(s.BLEND),_=!0),I!==Sl){if(I!==m||je!==S){if((f!==On||x!==On)&&(s.blendEquation(s.FUNC_ADD),f=On,x=On),je)switch(I){case di:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Bn:s.blendFunc(s.ONE,s.ONE);break;case Ta:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ba:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case di:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Bn:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Ta:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ba:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}y=null,T=null,D=null,A=null,w.set(0,0,0),L=0,m=I,S=je}return}le=le||ae,oe=oe||G,Re=Re||K,(ae!==f||le!==x)&&(s.blendEquationSeparate(nt[ae],nt[le]),f=ae,x=le),(G!==y||K!==T||oe!==D||Re!==A)&&(s.blendFuncSeparate(ze[G],ze[K],ze[oe],ze[Re]),y=G,T=K,D=oe,A=Re),(it.equals(w)===!1||_t!==L)&&(s.blendColor(it.r,it.g,it.b,_t),w.copy(it),L=_t),m=I,S=!1}function Pt(I,ae){I.side===kt?Me(s.CULL_FACE):se(s.CULL_FACE);let G=I.side===mt;ae&&(G=!G),Ge(G),I.blending===di&&I.transparent===!1?R(yn):R(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),r.setMask(I.colorWrite);const K=I.stencilWrite;l.setTest(K),K&&(l.setMask(I.stencilWriteMask),l.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),l.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),et(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?se(s.SAMPLE_ALPHA_TO_COVERAGE):Me(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ge(I){M!==I&&(I?s.frontFace(s.CW):s.frontFace(s.CCW),M=I)}function Be(I){I!==vl?(se(s.CULL_FACE),I!==C&&(I===Ea?s.cullFace(s.BACK):I===yl?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Me(s.CULL_FACE),C=I}function ve(I){I!==k&&(X&&s.lineWidth(I),k=I)}function et(I,ae,G){I?(se(s.POLYGON_OFFSET_FILL),(O!==ae||V!==G)&&(s.polygonOffset(ae,G),O=ae,V=G)):Me(s.POLYGON_OFFSET_FILL)}function ge(I){I?se(s.SCISSOR_TEST):Me(s.SCISSOR_TEST)}function b(I){I===void 0&&(I=s.TEXTURE0+j-1),ie!==I&&(s.activeTexture(I),ie=I)}function v(I,ae,G){G===void 0&&(ie===null?G=s.TEXTURE0+j-1:G=ie);let K=he[G];K===void 0&&(K={type:void 0,texture:void 0},he[G]=K),(K.type!==I||K.texture!==ae)&&(ie!==G&&(s.activeTexture(G),ie=G),s.bindTexture(I,ae||pe[I]),K.type=I,K.texture=ae)}function F(){const I=he[ie];I!==void 0&&I.type!==void 0&&(s.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Y(){try{s.compressedTexImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function $(){try{s.compressedTexImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function W(){try{s.texSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function me(){try{s.texSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function re(){try{s.compressedTexSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Se(){try{s.compressedTexSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ee(){try{s.texStorage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function J(){try{s.texStorage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ue(){try{s.texImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Te(){try{s.texImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ae(I){Ze.equals(I)===!1&&(s.scissor(I.x,I.y,I.z,I.w),Ze.copy(I))}function de(I){q.equals(I)===!1&&(s.viewport(I.x,I.y,I.z,I.w),q.copy(I))}function ke(I,ae){let G=u.get(ae);G===void 0&&(G=new WeakMap,u.set(ae,G));let K=G.get(I);K===void 0&&(K=s.getUniformBlockIndex(ae,I.name),G.set(I,K))}function Le(I,ae){const K=u.get(ae).get(I);h.get(ae)!==K&&(s.uniformBlockBinding(ae,K,I.__bindingPointIndex),h.set(ae,K))}function Je(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),p={},ie=null,he={},a={},c=new WeakMap,d=[],g=null,_=!1,m=null,f=null,y=null,T=null,x=null,D=null,A=null,w=new De(0,0,0),L=0,S=!1,M=null,C=null,k=null,O=null,V=null,Ze.set(0,0,s.canvas.width,s.canvas.height),q.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),l.reset()}return{buffers:{color:r,depth:o,stencil:l},enable:se,disable:Me,bindFramebuffer:Xe,drawBuffers:be,useProgram:ot,setBlending:R,setMaterial:Pt,setFlipSided:Ge,setCullFace:Be,setLineWidth:ve,setPolygonOffset:et,setScissorTest:ge,activeTexture:b,bindTexture:v,unbindTexture:F,compressedTexImage2D:Y,compressedTexImage3D:$,texImage2D:ue,texImage3D:Te,updateUBOMapping:ke,uniformBlockBinding:Le,texStorage2D:Ee,texStorage3D:J,texSubImage2D:W,texSubImage3D:me,compressedTexSubImage2D:re,compressedTexSubImage3D:Se,scissor:Ae,viewport:de,reset:Je}}function Cp(s,e,t,n,i,r,o){const l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Fe,p=new WeakMap;let a;const c=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,v){return d?new OffscreenCanvas(b,v):zi("canvas")}function _(b,v,F){let Y=1;const $=ge(b);if(($.width>F||$.height>F)&&(Y=F/Math.max($.width,$.height)),Y<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const W=Math.floor(Y*$.width),me=Math.floor(Y*$.height);a===void 0&&(a=g(W,me));const re=v?g(W,me):a;return re.width=W,re.height=me,re.getContext("2d").drawImage(b,0,0,W,me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+W+"x"+me+")."),re}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),b;return b}function m(b){return b.generateMipmaps}function f(b){s.generateMipmap(b)}function y(b){return b.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?s.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function T(b,v,F,Y,$=!1){if(b!==null){if(s[b]!==void 0)return s[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let W=v;if(v===s.RED&&(F===s.FLOAT&&(W=s.R32F),F===s.HALF_FLOAT&&(W=s.R16F),F===s.UNSIGNED_BYTE&&(W=s.R8)),v===s.RED_INTEGER&&(F===s.UNSIGNED_BYTE&&(W=s.R8UI),F===s.UNSIGNED_SHORT&&(W=s.R16UI),F===s.UNSIGNED_INT&&(W=s.R32UI),F===s.BYTE&&(W=s.R8I),F===s.SHORT&&(W=s.R16I),F===s.INT&&(W=s.R32I)),v===s.RG&&(F===s.FLOAT&&(W=s.RG32F),F===s.HALF_FLOAT&&(W=s.RG16F),F===s.UNSIGNED_BYTE&&(W=s.RG8)),v===s.RG_INTEGER&&(F===s.UNSIGNED_BYTE&&(W=s.RG8UI),F===s.UNSIGNED_SHORT&&(W=s.RG16UI),F===s.UNSIGNED_INT&&(W=s.RG32UI),F===s.BYTE&&(W=s.RG8I),F===s.SHORT&&(W=s.RG16I),F===s.INT&&(W=s.RG32I)),v===s.RGB_INTEGER&&(F===s.UNSIGNED_BYTE&&(W=s.RGB8UI),F===s.UNSIGNED_SHORT&&(W=s.RGB16UI),F===s.UNSIGNED_INT&&(W=s.RGB32UI),F===s.BYTE&&(W=s.RGB8I),F===s.SHORT&&(W=s.RGB16I),F===s.INT&&(W=s.RGB32I)),v===s.RGBA_INTEGER&&(F===s.UNSIGNED_BYTE&&(W=s.RGBA8UI),F===s.UNSIGNED_SHORT&&(W=s.RGBA16UI),F===s.UNSIGNED_INT&&(W=s.RGBA32UI),F===s.BYTE&&(W=s.RGBA8I),F===s.SHORT&&(W=s.RGBA16I),F===s.INT&&(W=s.RGBA32I)),v===s.RGB&&F===s.UNSIGNED_INT_5_9_9_9_REV&&(W=s.RGB9_E5),v===s.RGBA){const me=$?Ms:We.getTransfer(Y);F===s.FLOAT&&(W=s.RGBA32F),F===s.HALF_FLOAT&&(W=s.RGBA16F),F===s.UNSIGNED_BYTE&&(W=me===Ke?s.SRGB8_ALPHA8:s.RGBA8),F===s.UNSIGNED_SHORT_4_4_4_4&&(W=s.RGBA4),F===s.UNSIGNED_SHORT_5_5_5_1&&(W=s.RGB5_A1)}return(W===s.R16F||W===s.R32F||W===s.RG16F||W===s.RG32F||W===s.RGBA16F||W===s.RGBA32F)&&e.get("EXT_color_buffer_float"),W}function x(b,v){let F;return b?v===null||v===Hn||v===Ni?F=s.DEPTH24_STENCIL8:v===ln?F=s.DEPTH32F_STENCIL8:v===Ui&&(F=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Hn||v===Ni?F=s.DEPTH_COMPONENT24:v===ln?F=s.DEPTH_COMPONENT32F:v===Ui&&(F=s.DEPTH_COMPONENT16),F}function D(b,v){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==Xt&&b.minFilter!==Kt?Math.log2(Math.max(v.width,v.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?v.mipmaps.length:1}function A(b){const v=b.target;v.removeEventListener("dispose",A),L(v),v.isVideoTexture&&p.delete(v)}function w(b){const v=b.target;v.removeEventListener("dispose",w),M(v)}function L(b){const v=n.get(b);if(v.__webglInit===void 0)return;const F=b.source,Y=c.get(F);if(Y){const $=Y[v.__cacheKey];$.usedTimes--,$.usedTimes===0&&S(b),Object.keys(Y).length===0&&c.delete(F)}n.remove(b)}function S(b){const v=n.get(b);s.deleteTexture(v.__webglTexture);const F=b.source,Y=c.get(F);delete Y[v.__cacheKey],o.memory.textures--}function M(b){const v=n.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),n.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(v.__webglFramebuffer[Y]))for(let $=0;$<v.__webglFramebuffer[Y].length;$++)s.deleteFramebuffer(v.__webglFramebuffer[Y][$]);else s.deleteFramebuffer(v.__webglFramebuffer[Y]);v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer[Y])}else{if(Array.isArray(v.__webglFramebuffer))for(let Y=0;Y<v.__webglFramebuffer.length;Y++)s.deleteFramebuffer(v.__webglFramebuffer[Y]);else s.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&s.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let Y=0;Y<v.__webglColorRenderbuffer.length;Y++)v.__webglColorRenderbuffer[Y]&&s.deleteRenderbuffer(v.__webglColorRenderbuffer[Y]);v.__webglDepthRenderbuffer&&s.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const F=b.textures;for(let Y=0,$=F.length;Y<$;Y++){const W=n.get(F[Y]);W.__webglTexture&&(s.deleteTexture(W.__webglTexture),o.memory.textures--),n.remove(F[Y])}n.remove(b)}let C=0;function k(){C=0}function O(){const b=C;return b>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+i.maxTextures),C+=1,b}function V(b){const v=[];return v.push(b.wrapS),v.push(b.wrapT),v.push(b.wrapR||0),v.push(b.magFilter),v.push(b.minFilter),v.push(b.anisotropy),v.push(b.internalFormat),v.push(b.format),v.push(b.type),v.push(b.generateMipmaps),v.push(b.premultiplyAlpha),v.push(b.flipY),v.push(b.unpackAlignment),v.push(b.colorSpace),v.join()}function j(b,v){const F=n.get(b);if(b.isVideoTexture&&ve(b),b.isRenderTargetTexture===!1&&b.version>0&&F.__version!==b.version){const Y=b.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(F,b,v);return}}t.bindTexture(s.TEXTURE_2D,F.__webglTexture,s.TEXTURE0+v)}function X(b,v){const F=n.get(b);if(b.version>0&&F.__version!==b.version){q(F,b,v);return}t.bindTexture(s.TEXTURE_2D_ARRAY,F.__webglTexture,s.TEXTURE0+v)}function Z(b,v){const F=n.get(b);if(b.version>0&&F.__version!==b.version){q(F,b,v);return}t.bindTexture(s.TEXTURE_3D,F.__webglTexture,s.TEXTURE0+v)}function H(b,v){const F=n.get(b);if(b.version>0&&F.__version!==b.version){ee(F,b,v);return}t.bindTexture(s.TEXTURE_CUBE_MAP,F.__webglTexture,s.TEXTURE0+v)}const ie={[Ii]:s.REPEAT,[kn]:s.CLAMP_TO_EDGE,[Mr]:s.MIRRORED_REPEAT},he={[Xt]:s.NEAREST,[jl]:s.NEAREST_MIPMAP_NEAREST,[Wi]:s.NEAREST_MIPMAP_LINEAR,[Kt]:s.LINEAR,[Ds]:s.LINEAR_MIPMAP_NEAREST,[Gn]:s.LINEAR_MIPMAP_LINEAR},_e={[Jl]:s.NEVER,[sc]:s.ALWAYS,[Ql]:s.LESS,[Yo]:s.LEQUAL,[ec]:s.EQUAL,[ic]:s.GEQUAL,[tc]:s.GREATER,[nc]:s.NOTEQUAL};function Ne(b,v){if(v.type===ln&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Kt||v.magFilter===Ds||v.magFilter===Wi||v.magFilter===Gn||v.minFilter===Kt||v.minFilter===Ds||v.minFilter===Wi||v.minFilter===Gn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(b,s.TEXTURE_WRAP_S,ie[v.wrapS]),s.texParameteri(b,s.TEXTURE_WRAP_T,ie[v.wrapT]),(b===s.TEXTURE_3D||b===s.TEXTURE_2D_ARRAY)&&s.texParameteri(b,s.TEXTURE_WRAP_R,ie[v.wrapR]),s.texParameteri(b,s.TEXTURE_MAG_FILTER,he[v.magFilter]),s.texParameteri(b,s.TEXTURE_MIN_FILTER,he[v.minFilter]),v.compareFunction&&(s.texParameteri(b,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(b,s.TEXTURE_COMPARE_FUNC,_e[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Xt||v.minFilter!==Wi&&v.minFilter!==Gn||v.type===ln&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");s.texParameterf(b,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Ze(b,v){let F=!1;b.__webglInit===void 0&&(b.__webglInit=!0,v.addEventListener("dispose",A));const Y=v.source;let $=c.get(Y);$===void 0&&($={},c.set(Y,$));const W=V(v);if(W!==b.__cacheKey){$[W]===void 0&&($[W]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,F=!0),$[W].usedTimes++;const me=$[b.__cacheKey];me!==void 0&&($[b.__cacheKey].usedTimes--,me.usedTimes===0&&S(v)),b.__cacheKey=W,b.__webglTexture=$[W].texture}return F}function q(b,v,F){let Y=s.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(Y=s.TEXTURE_2D_ARRAY),v.isData3DTexture&&(Y=s.TEXTURE_3D);const $=Ze(b,v),W=v.source;t.bindTexture(Y,b.__webglTexture,s.TEXTURE0+F);const me=n.get(W);if(W.version!==me.__version||$===!0){t.activeTexture(s.TEXTURE0+F);const re=We.getPrimaries(We.workingColorSpace),Se=v.colorSpace===vn?null:We.getPrimaries(v.colorSpace),Ee=v.colorSpace===vn||re===Se?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);let J=_(v.image,!1,i.maxTextureSize);J=et(v,J);const ue=r.convert(v.format,v.colorSpace),Te=r.convert(v.type);let Ae=T(v.internalFormat,ue,Te,v.colorSpace,v.isVideoTexture);Ne(Y,v);let de;const ke=v.mipmaps,Le=v.isVideoTexture!==!0,Je=me.__version===void 0||$===!0,I=W.dataReady,ae=D(v,J);if(v.isDepthTexture)Ae=x(v.format===Oi,v.type),Je&&(Le?t.texStorage2D(s.TEXTURE_2D,1,Ae,J.width,J.height):t.texImage2D(s.TEXTURE_2D,0,Ae,J.width,J.height,0,ue,Te,null));else if(v.isDataTexture)if(ke.length>0){Le&&Je&&t.texStorage2D(s.TEXTURE_2D,ae,Ae,ke[0].width,ke[0].height);for(let G=0,K=ke.length;G<K;G++)de=ke[G],Le?I&&t.texSubImage2D(s.TEXTURE_2D,G,0,0,de.width,de.height,ue,Te,de.data):t.texImage2D(s.TEXTURE_2D,G,Ae,de.width,de.height,0,ue,Te,de.data);v.generateMipmaps=!1}else Le?(Je&&t.texStorage2D(s.TEXTURE_2D,ae,Ae,J.width,J.height),I&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,J.width,J.height,ue,Te,J.data)):t.texImage2D(s.TEXTURE_2D,0,Ae,J.width,J.height,0,ue,Te,J.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Le&&Je&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ae,Ae,ke[0].width,ke[0].height,J.depth);for(let G=0,K=ke.length;G<K;G++)if(de=ke[G],v.format!==Wt)if(ue!==null)if(Le){if(I)if(v.layerUpdates.size>0){const le=so(de.width,de.height,v.format,v.type);for(const oe of v.layerUpdates){const Re=de.data.subarray(oe*le/de.data.BYTES_PER_ELEMENT,(oe+1)*le/de.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,G,0,0,oe,de.width,de.height,1,ue,Re)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,G,0,0,0,de.width,de.height,J.depth,ue,de.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,G,Ae,de.width,de.height,J.depth,0,de.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Le?I&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,G,0,0,0,de.width,de.height,J.depth,ue,Te,de.data):t.texImage3D(s.TEXTURE_2D_ARRAY,G,Ae,de.width,de.height,J.depth,0,ue,Te,de.data)}else{Le&&Je&&t.texStorage2D(s.TEXTURE_2D,ae,Ae,ke[0].width,ke[0].height);for(let G=0,K=ke.length;G<K;G++)de=ke[G],v.format!==Wt?ue!==null?Le?I&&t.compressedTexSubImage2D(s.TEXTURE_2D,G,0,0,de.width,de.height,ue,de.data):t.compressedTexImage2D(s.TEXTURE_2D,G,Ae,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Le?I&&t.texSubImage2D(s.TEXTURE_2D,G,0,0,de.width,de.height,ue,Te,de.data):t.texImage2D(s.TEXTURE_2D,G,Ae,de.width,de.height,0,ue,Te,de.data)}else if(v.isDataArrayTexture)if(Le){if(Je&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ae,Ae,J.width,J.height,J.depth),I)if(v.layerUpdates.size>0){const G=so(J.width,J.height,v.format,v.type);for(const K of v.layerUpdates){const le=J.data.subarray(K*G/J.data.BYTES_PER_ELEMENT,(K+1)*G/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,K,J.width,J.height,1,ue,Te,le)}v.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,ue,Te,J.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ae,J.width,J.height,J.depth,0,ue,Te,J.data);else if(v.isData3DTexture)Le?(Je&&t.texStorage3D(s.TEXTURE_3D,ae,Ae,J.width,J.height,J.depth),I&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,ue,Te,J.data)):t.texImage3D(s.TEXTURE_3D,0,Ae,J.width,J.height,J.depth,0,ue,Te,J.data);else if(v.isFramebufferTexture){if(Je)if(Le)t.texStorage2D(s.TEXTURE_2D,ae,Ae,J.width,J.height);else{let G=J.width,K=J.height;for(let le=0;le<ae;le++)t.texImage2D(s.TEXTURE_2D,le,Ae,G,K,0,ue,Te,null),G>>=1,K>>=1}}else if(ke.length>0){if(Le&&Je){const G=ge(ke[0]);t.texStorage2D(s.TEXTURE_2D,ae,Ae,G.width,G.height)}for(let G=0,K=ke.length;G<K;G++)de=ke[G],Le?I&&t.texSubImage2D(s.TEXTURE_2D,G,0,0,ue,Te,de):t.texImage2D(s.TEXTURE_2D,G,Ae,ue,Te,de);v.generateMipmaps=!1}else if(Le){if(Je){const G=ge(J);t.texStorage2D(s.TEXTURE_2D,ae,Ae,G.width,G.height)}I&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ue,Te,J)}else t.texImage2D(s.TEXTURE_2D,0,Ae,ue,Te,J);m(v)&&f(Y),me.__version=W.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function ee(b,v,F){if(v.image.length!==6)return;const Y=Ze(b,v),$=v.source;t.bindTexture(s.TEXTURE_CUBE_MAP,b.__webglTexture,s.TEXTURE0+F);const W=n.get($);if($.version!==W.__version||Y===!0){t.activeTexture(s.TEXTURE0+F);const me=We.getPrimaries(We.workingColorSpace),re=v.colorSpace===vn?null:We.getPrimaries(v.colorSpace),Se=v.colorSpace===vn||me===re?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);const Ee=v.isCompressedTexture||v.image[0].isCompressedTexture,J=v.image[0]&&v.image[0].isDataTexture,ue=[];for(let K=0;K<6;K++)!Ee&&!J?ue[K]=_(v.image[K],!0,i.maxCubemapSize):ue[K]=J?v.image[K].image:v.image[K],ue[K]=et(v,ue[K]);const Te=ue[0],Ae=r.convert(v.format,v.colorSpace),de=r.convert(v.type),ke=T(v.internalFormat,Ae,de,v.colorSpace),Le=v.isVideoTexture!==!0,Je=W.__version===void 0||Y===!0,I=$.dataReady;let ae=D(v,Te);Ne(s.TEXTURE_CUBE_MAP,v);let G;if(Ee){Le&&Je&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ae,ke,Te.width,Te.height);for(let K=0;K<6;K++){G=ue[K].mipmaps;for(let le=0;le<G.length;le++){const oe=G[le];v.format!==Wt?Ae!==null?Le?I&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,le,0,0,oe.width,oe.height,Ae,oe.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,le,ke,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Le?I&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,le,0,0,oe.width,oe.height,Ae,de,oe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,le,ke,oe.width,oe.height,0,Ae,de,oe.data)}}}else{if(G=v.mipmaps,Le&&Je){G.length>0&&ae++;const K=ge(ue[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,ae,ke,K.width,K.height)}for(let K=0;K<6;K++)if(J){Le?I&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ue[K].width,ue[K].height,Ae,de,ue[K].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,ke,ue[K].width,ue[K].height,0,Ae,de,ue[K].data);for(let le=0;le<G.length;le++){const Re=G[le].image[K].image;Le?I&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,le+1,0,0,Re.width,Re.height,Ae,de,Re.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,le+1,ke,Re.width,Re.height,0,Ae,de,Re.data)}}else{Le?I&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Ae,de,ue[K]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,ke,Ae,de,ue[K]);for(let le=0;le<G.length;le++){const oe=G[le];Le?I&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,le+1,0,0,Ae,de,oe.image[K]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,le+1,ke,Ae,de,oe.image[K])}}}m(v)&&f(s.TEXTURE_CUBE_MAP),W.__version=$.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function pe(b,v,F,Y,$,W){const me=r.convert(F.format,F.colorSpace),re=r.convert(F.type),Se=T(F.internalFormat,me,re,F.colorSpace),Ee=n.get(v),J=n.get(F);if(J.__renderTarget=v,!Ee.__hasExternalTextures){const ue=Math.max(1,v.width>>W),Te=Math.max(1,v.height>>W);$===s.TEXTURE_3D||$===s.TEXTURE_2D_ARRAY?t.texImage3D($,W,Se,ue,Te,v.depth,0,me,re,null):t.texImage2D($,W,Se,ue,Te,0,me,re,null)}t.bindFramebuffer(s.FRAMEBUFFER,b),Be(v)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Y,$,J.__webglTexture,0,Ge(v)):($===s.TEXTURE_2D||$>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Y,$,J.__webglTexture,W),t.bindFramebuffer(s.FRAMEBUFFER,null)}function se(b,v,F){if(s.bindRenderbuffer(s.RENDERBUFFER,b),v.depthBuffer){const Y=v.depthTexture,$=Y&&Y.isDepthTexture?Y.type:null,W=x(v.stencilBuffer,$),me=v.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,re=Ge(v);Be(v)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,re,W,v.width,v.height):F?s.renderbufferStorageMultisample(s.RENDERBUFFER,re,W,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,W,v.width,v.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,b)}else{const Y=v.textures;for(let $=0;$<Y.length;$++){const W=Y[$],me=r.convert(W.format,W.colorSpace),re=r.convert(W.type),Se=T(W.internalFormat,me,re,W.colorSpace),Ee=Ge(v);F&&Be(v)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ee,Se,v.width,v.height):Be(v)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ee,Se,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,Se,v.width,v.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Me(b,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,b),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=n.get(v.depthTexture);Y.__renderTarget=v,(!Y.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),j(v.depthTexture,0);const $=Y.__webglTexture,W=Ge(v);if(v.depthTexture.format===Fi)Be(v)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,$,0,W):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,$,0);else if(v.depthTexture.format===Oi)Be(v)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,$,0,W):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function Xe(b){const v=n.get(b),F=b.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==b.depthTexture){const Y=b.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),Y){const $=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,Y.removeEventListener("dispose",$)};Y.addEventListener("dispose",$),v.__depthDisposeCallback=$}v.__boundDepthTexture=Y}if(b.depthTexture&&!v.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");const Y=b.texture.mipmaps;Y&&Y.length>0?Me(v.__webglFramebuffer[0],b):Me(v.__webglFramebuffer,b)}else if(F){v.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[Y]),v.__webglDepthbuffer[Y]===void 0)v.__webglDepthbuffer[Y]=s.createRenderbuffer(),se(v.__webglDepthbuffer[Y],b,!1);else{const $=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,W=v.__webglDepthbuffer[Y];s.bindRenderbuffer(s.RENDERBUFFER,W),s.framebufferRenderbuffer(s.FRAMEBUFFER,$,s.RENDERBUFFER,W)}}else{const Y=b.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=s.createRenderbuffer(),se(v.__webglDepthbuffer,b,!1);else{const $=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,W=v.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,W),s.framebufferRenderbuffer(s.FRAMEBUFFER,$,s.RENDERBUFFER,W)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function be(b,v,F){const Y=n.get(b);v!==void 0&&pe(Y.__webglFramebuffer,b,b.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),F!==void 0&&Xe(b)}function ot(b){const v=b.texture,F=n.get(b),Y=n.get(v);b.addEventListener("dispose",w);const $=b.textures,W=b.isWebGLCubeRenderTarget===!0,me=$.length>1;if(me||(Y.__webglTexture===void 0&&(Y.__webglTexture=s.createTexture()),Y.__version=v.version,o.memory.textures++),W){F.__webglFramebuffer=[];for(let re=0;re<6;re++)if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer[re]=[];for(let Se=0;Se<v.mipmaps.length;Se++)F.__webglFramebuffer[re][Se]=s.createFramebuffer()}else F.__webglFramebuffer[re]=s.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer=[];for(let re=0;re<v.mipmaps.length;re++)F.__webglFramebuffer[re]=s.createFramebuffer()}else F.__webglFramebuffer=s.createFramebuffer();if(me)for(let re=0,Se=$.length;re<Se;re++){const Ee=n.get($[re]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=s.createTexture(),o.memory.textures++)}if(b.samples>0&&Be(b)===!1){F.__webglMultisampledFramebuffer=s.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let re=0;re<$.length;re++){const Se=$[re];F.__webglColorRenderbuffer[re]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,F.__webglColorRenderbuffer[re]);const Ee=r.convert(Se.format,Se.colorSpace),J=r.convert(Se.type),ue=T(Se.internalFormat,Ee,J,Se.colorSpace,b.isXRRenderTarget===!0),Te=Ge(b);s.renderbufferStorageMultisample(s.RENDERBUFFER,Te,ue,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+re,s.RENDERBUFFER,F.__webglColorRenderbuffer[re])}s.bindRenderbuffer(s.RENDERBUFFER,null),b.depthBuffer&&(F.__webglDepthRenderbuffer=s.createRenderbuffer(),se(F.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(W){t.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture),Ne(s.TEXTURE_CUBE_MAP,v);for(let re=0;re<6;re++)if(v.mipmaps&&v.mipmaps.length>0)for(let Se=0;Se<v.mipmaps.length;Se++)pe(F.__webglFramebuffer[re][Se],b,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+re,Se);else pe(F.__webglFramebuffer[re],b,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);m(v)&&f(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(me){for(let re=0,Se=$.length;re<Se;re++){const Ee=$[re],J=n.get(Ee);t.bindTexture(s.TEXTURE_2D,J.__webglTexture),Ne(s.TEXTURE_2D,Ee),pe(F.__webglFramebuffer,b,Ee,s.COLOR_ATTACHMENT0+re,s.TEXTURE_2D,0),m(Ee)&&f(s.TEXTURE_2D)}t.unbindTexture()}else{let re=s.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(re=b.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(re,Y.__webglTexture),Ne(re,v),v.mipmaps&&v.mipmaps.length>0)for(let Se=0;Se<v.mipmaps.length;Se++)pe(F.__webglFramebuffer[Se],b,v,s.COLOR_ATTACHMENT0,re,Se);else pe(F.__webglFramebuffer,b,v,s.COLOR_ATTACHMENT0,re,0);m(v)&&f(re),t.unbindTexture()}b.depthBuffer&&Xe(b)}function nt(b){const v=b.textures;for(let F=0,Y=v.length;F<Y;F++){const $=v[F];if(m($)){const W=y(b),me=n.get($).__webglTexture;t.bindTexture(W,me),f(W),t.unbindTexture()}}}const ze=[],R=[];function Pt(b){if(b.samples>0){if(Be(b)===!1){const v=b.textures,F=b.width,Y=b.height;let $=s.COLOR_BUFFER_BIT;const W=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,me=n.get(b),re=v.length>1;if(re)for(let Ee=0;Ee<v.length;Ee++)t.bindFramebuffer(s.FRAMEBUFFER,me.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ee,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,me.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ee,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer);const Se=b.texture.mipmaps;Se&&Se.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,me.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let Ee=0;Ee<v.length;Ee++){if(b.resolveDepthBuffer&&(b.depthBuffer&&($|=s.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&($|=s.STENCIL_BUFFER_BIT)),re){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,me.__webglColorRenderbuffer[Ee]);const J=n.get(v[Ee]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,J,0)}s.blitFramebuffer(0,0,F,Y,0,0,F,Y,$,s.NEAREST),h===!0&&(ze.length=0,R.length=0,ze.push(s.COLOR_ATTACHMENT0+Ee),b.depthBuffer&&b.resolveDepthBuffer===!1&&(ze.push(W),R.push(W),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,R)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ze))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),re)for(let Ee=0;Ee<v.length;Ee++){t.bindFramebuffer(s.FRAMEBUFFER,me.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ee,s.RENDERBUFFER,me.__webglColorRenderbuffer[Ee]);const J=n.get(v[Ee]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,me.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ee,s.TEXTURE_2D,J,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&h){const v=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[v])}}}function Ge(b){return Math.min(i.maxSamples,b.samples)}function Be(b){const v=n.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function ve(b){const v=o.render.frame;p.get(b)!==v&&(p.set(b,v),b.update())}function et(b,v){const F=b.colorSpace,Y=b.format,$=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||F!==vi&&F!==vn&&(We.getTransfer(F)===Ke?(Y!==Wt||$!==Zt)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),v}function ge(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(u.width=b.naturalWidth||b.width,u.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(u.width=b.displayWidth,u.height=b.displayHeight):(u.width=b.width,u.height=b.height),u}this.allocateTextureUnit=O,this.resetTextureUnits=k,this.setTexture2D=j,this.setTexture2DArray=X,this.setTexture3D=Z,this.setTextureCube=H,this.rebindTextures=be,this.setupRenderTarget=ot,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=Pt,this.setupDepthRenderbuffer=Xe,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=Be}function Rp(s,e){function t(n,i=vn){let r;const o=We.getTransfer(i);if(n===Zt)return s.UNSIGNED_BYTE;if(n===ea)return s.UNSIGNED_SHORT_4_4_4_4;if(n===ta)return s.UNSIGNED_SHORT_5_5_5_1;if(n===ko)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===zo)return s.BYTE;if(n===Bo)return s.SHORT;if(n===Ui)return s.UNSIGNED_SHORT;if(n===Qr)return s.INT;if(n===Hn)return s.UNSIGNED_INT;if(n===ln)return s.FLOAT;if(n===Bi)return s.HALF_FLOAT;if(n===Go)return s.ALPHA;if(n===Ho)return s.RGB;if(n===Wt)return s.RGBA;if(n===Fi)return s.DEPTH_COMPONENT;if(n===Oi)return s.DEPTH_STENCIL;if(n===Vo)return s.RED;if(n===na)return s.RED_INTEGER;if(n===Wo)return s.RG;if(n===ia)return s.RG_INTEGER;if(n===sa)return s.RGBA_INTEGER;if(n===ps||n===ms||n===gs||n===_s)if(o===Ke)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ps)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ms)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===gs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===_s)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ps)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ms)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===gs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===_s)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Sr||n===Er||n===Tr||n===br)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Sr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Er)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Tr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===br)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===wr||n===Ar||n===Cr)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===wr||n===Ar)return o===Ke?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Cr)return o===Ke?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Rr||n===Pr||n===Dr||n===Lr||n===Ir||n===Ur||n===Nr||n===Fr||n===Or||n===zr||n===Br||n===kr||n===Gr||n===Hr)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Rr)return o===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Pr)return o===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Dr)return o===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Lr)return o===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ir)return o===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ur)return o===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Nr)return o===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Fr)return o===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Or)return o===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===zr)return o===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Br)return o===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===kr)return o===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Gr)return o===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Hr)return o===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===vs||n===Vr||n===Wr)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===vs)return o===Ke?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Vr)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Wr)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Xo||n===Xr||n===qr||n===Yr)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===vs)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Xr)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===qr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Yr)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ni?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const Pp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Dp=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Lp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Et,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Sn({vertexShader:Pp,fragmentShader:Dp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ue(new xi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ip extends Wn{constructor(e,t){super();const n=this;let i=null,r=1,o=null,l="local-floor",h=1,u=null,p=null,a=null,c=null,d=null,g=null;const _=new Lp,m=t.getContextAttributes();let f=null,y=null;const T=[],x=[],D=new Fe;let A=null;const w=new Rt;w.viewport=new $e;const L=new Rt;L.viewport=new $e;const S=[w,L],M=new qc;let C=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ee=T[q];return ee===void 0&&(ee=new Qs,T[q]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(q){let ee=T[q];return ee===void 0&&(ee=new Qs,T[q]=ee),ee.getGripSpace()},this.getHand=function(q){let ee=T[q];return ee===void 0&&(ee=new Qs,T[q]=ee),ee.getHandSpace()};function O(q){const ee=x.indexOf(q.inputSource);if(ee===-1)return;const pe=T[ee];pe!==void 0&&(pe.update(q.inputSource,q.frame,u||o),pe.dispatchEvent({type:q.type,data:q.inputSource}))}function V(){i.removeEventListener("select",O),i.removeEventListener("selectstart",O),i.removeEventListener("selectend",O),i.removeEventListener("squeeze",O),i.removeEventListener("squeezestart",O),i.removeEventListener("squeezeend",O),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",j);for(let q=0;q<T.length;q++){const ee=x[q];ee!==null&&(x[q]=null,T[q].disconnect(ee))}C=null,k=null,_.reset(),e.setRenderTarget(f),d=null,c=null,a=null,i=null,y=null,Ze.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){l=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(q){u=q},this.getBaseLayer=function(){return c!==null?c:d},this.getBinding=function(){return a},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(f=e.getRenderTarget(),i.addEventListener("select",O),i.addEventListener("selectstart",O),i.addEventListener("selectend",O),i.addEventListener("squeeze",O),i.addEventListener("squeezestart",O),i.addEventListener("squeezeend",O),i.addEventListener("end",V),i.addEventListener("inputsourceschange",j),m.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(D),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let pe=null,se=null,Me=null;m.depth&&(Me=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=m.stencil?Oi:Fi,se=m.stencil?Ni:Hn);const Xe={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:r};a=new XRWebGLBinding(i,t),c=a.createProjectionLayer(Xe),i.updateRenderState({layers:[c]}),e.setPixelRatio(1),e.setSize(c.textureWidth,c.textureHeight,!1),y=new Vn(c.textureWidth,c.textureHeight,{format:Wt,type:Zt,depthTexture:new nl(c.textureWidth,c.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:c.ignoreDepthValues===!1,resolveStencilBuffer:c.ignoreDepthValues===!1})}else{const pe={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,pe),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new Vn(d.framebufferWidth,d.framebufferHeight,{format:Wt,type:Zt,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(h),u=null,o=await i.requestReferenceSpace(l),Ze.setContext(i),Ze.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function j(q){for(let ee=0;ee<q.removed.length;ee++){const pe=q.removed[ee],se=x.indexOf(pe);se>=0&&(x[se]=null,T[se].disconnect(pe))}for(let ee=0;ee<q.added.length;ee++){const pe=q.added[ee];let se=x.indexOf(pe);if(se===-1){for(let Xe=0;Xe<T.length;Xe++)if(Xe>=x.length){x.push(pe),se=Xe;break}else if(x[Xe]===null){x[Xe]=pe,se=Xe;break}if(se===-1)break}const Me=T[se];Me&&Me.connect(pe)}}const X=new P,Z=new P;function H(q,ee,pe){X.setFromMatrixPosition(ee.matrixWorld),Z.setFromMatrixPosition(pe.matrixWorld);const se=X.distanceTo(Z),Me=ee.projectionMatrix.elements,Xe=pe.projectionMatrix.elements,be=Me[14]/(Me[10]-1),ot=Me[14]/(Me[10]+1),nt=(Me[9]+1)/Me[5],ze=(Me[9]-1)/Me[5],R=(Me[8]-1)/Me[0],Pt=(Xe[8]+1)/Xe[0],Ge=be*R,Be=be*Pt,ve=se/(-R+Pt),et=ve*-R;if(ee.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(et),q.translateZ(ve),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Me[10]===-1)q.projectionMatrix.copy(ee.projectionMatrix),q.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const ge=be+ve,b=ot+ve,v=Ge-et,F=Be+(se-et),Y=nt*ot/b*ge,$=ze*ot/b*ge;q.projectionMatrix.makePerspective(v,F,Y,$,ge,b),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function ie(q,ee){ee===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ee.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let ee=q.near,pe=q.far;_.texture!==null&&(_.depthNear>0&&(ee=_.depthNear),_.depthFar>0&&(pe=_.depthFar)),M.near=L.near=w.near=ee,M.far=L.far=w.far=pe,(C!==M.near||k!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),C=M.near,k=M.far),w.layers.mask=q.layers.mask|2,L.layers.mask=q.layers.mask|4,M.layers.mask=w.layers.mask|L.layers.mask;const se=q.parent,Me=M.cameras;ie(M,se);for(let Xe=0;Xe<Me.length;Xe++)ie(Me[Xe],se);Me.length===2?H(M,w,L):M.projectionMatrix.copy(w.projectionMatrix),he(q,M,se)};function he(q,ee,pe){pe===null?q.matrix.copy(ee.matrixWorld):(q.matrix.copy(pe.matrixWorld),q.matrix.invert(),q.matrix.multiply(ee.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ee.projectionMatrix),q.projectionMatrixInverse.copy(ee.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=jr*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(c===null&&d===null))return h},this.setFoveation=function(q){h=q,c!==null&&(c.fixedFoveation=q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let _e=null;function Ne(q,ee){if(p=ee.getViewerPose(u||o),g=ee,p!==null){const pe=p.views;d!==null&&(e.setRenderTargetFramebuffer(y,d.framebuffer),e.setRenderTarget(y));let se=!1;pe.length!==M.cameras.length&&(M.cameras.length=0,se=!0);for(let be=0;be<pe.length;be++){const ot=pe[be];let nt=null;if(d!==null)nt=d.getViewport(ot);else{const R=a.getViewSubImage(c,ot);nt=R.viewport,be===0&&(e.setRenderTargetTextures(y,R.colorTexture,R.depthStencilTexture),e.setRenderTarget(y))}let ze=S[be];ze===void 0&&(ze=new Rt,ze.layers.enable(be),ze.viewport=new $e,S[be]=ze),ze.matrix.fromArray(ot.transform.matrix),ze.matrix.decompose(ze.position,ze.quaternion,ze.scale),ze.projectionMatrix.fromArray(ot.projectionMatrix),ze.projectionMatrixInverse.copy(ze.projectionMatrix).invert(),ze.viewport.set(nt.x,nt.y,nt.width,nt.height),be===0&&(M.matrix.copy(ze.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),se===!0&&M.cameras.push(ze)}const Me=i.enabledFeatures;if(Me&&Me.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&a){const be=a.getDepthInformation(pe[0]);be&&be.isValid&&be.texture&&_.init(e,be,i.renderState)}}for(let pe=0;pe<T.length;pe++){const se=x[pe],Me=T[pe];se!==null&&Me!==void 0&&Me.update(se,ee,u||o)}_e&&_e(q,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),g=null}const Ze=new ol;Ze.setAnimationLoop(Ne),this.setAnimationLoop=function(q){_e=q},this.dispose=function(){}}}const Un=new qt,Up=new Qe;function Np(s,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Qo(s)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,y,T,x){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),a(m,f)):f.isMeshPhongMaterial?(r(m,f),p(m,f)):f.isMeshStandardMaterial?(r(m,f),c(m,f),f.isMeshPhysicalMaterial&&d(m,f,x)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&l(m,f)):f.isPointsMaterial?h(m,f,y,T):f.isSpriteMaterial?u(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===mt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===mt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const y=e.get(f),T=y.envMap,x=y.envMapRotation;T&&(m.envMap.value=T,Un.copy(x),Un.x*=-1,Un.y*=-1,Un.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Un.y*=-1,Un.z*=-1),m.envMapRotation.value.setFromMatrix4(Up.makeRotationFromEuler(Un)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function l(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function h(m,f,y,T){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*y,m.scale.value=T*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function p(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function a(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function c(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function d(m,f,y){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===mt&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const y=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Fp(s,e,t,n){let i={},r={},o=[];const l=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function h(y,T){const x=T.program;n.uniformBlockBinding(y,x)}function u(y,T){let x=i[y.id];x===void 0&&(g(y),x=p(y),i[y.id]=x,y.addEventListener("dispose",m));const D=T.program;n.updateUBOMapping(y,D);const A=e.render.frame;r[y.id]!==A&&(c(y),r[y.id]=A)}function p(y){const T=a();y.__bindingPointIndex=T;const x=s.createBuffer(),D=y.__size,A=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,x),s.bufferData(s.UNIFORM_BUFFER,D,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,T,x),x}function a(){for(let y=0;y<l;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function c(y){const T=i[y.id],x=y.uniforms,D=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,T);for(let A=0,w=x.length;A<w;A++){const L=Array.isArray(x[A])?x[A]:[x[A]];for(let S=0,M=L.length;S<M;S++){const C=L[S];if(d(C,A,S,D)===!0){const k=C.__offset,O=Array.isArray(C.value)?C.value:[C.value];let V=0;for(let j=0;j<O.length;j++){const X=O[j],Z=_(X);typeof X=="number"||typeof X=="boolean"?(C.__data[0]=X,s.bufferSubData(s.UNIFORM_BUFFER,k+V,C.__data)):X.isMatrix3?(C.__data[0]=X.elements[0],C.__data[1]=X.elements[1],C.__data[2]=X.elements[2],C.__data[3]=0,C.__data[4]=X.elements[3],C.__data[5]=X.elements[4],C.__data[6]=X.elements[5],C.__data[7]=0,C.__data[8]=X.elements[6],C.__data[9]=X.elements[7],C.__data[10]=X.elements[8],C.__data[11]=0):(X.toArray(C.__data,V),V+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,k,C.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(y,T,x,D){const A=y.value,w=T+"_"+x;if(D[w]===void 0)return typeof A=="number"||typeof A=="boolean"?D[w]=A:D[w]=A.clone(),!0;{const L=D[w];if(typeof A=="number"||typeof A=="boolean"){if(L!==A)return D[w]=A,!0}else if(L.equals(A)===!1)return L.copy(A),!0}return!1}function g(y){const T=y.uniforms;let x=0;const D=16;for(let w=0,L=T.length;w<L;w++){const S=Array.isArray(T[w])?T[w]:[T[w]];for(let M=0,C=S.length;M<C;M++){const k=S[M],O=Array.isArray(k.value)?k.value:[k.value];for(let V=0,j=O.length;V<j;V++){const X=O[V],Z=_(X),H=x%D,ie=H%Z.boundary,he=H+ie;x+=ie,he!==0&&D-he<Z.storage&&(x+=D-he),k.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=x,x+=Z.storage}}}const A=x%D;return A>0&&(x+=D-A),y.__size=x,y.__cache={},this}function _(y){const T={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(T.boundary=4,T.storage=4):y.isVector2?(T.boundary=8,T.storage=8):y.isVector3||y.isColor?(T.boundary=16,T.storage=12):y.isVector4?(T.boundary=16,T.storage=16):y.isMatrix3?(T.boundary=48,T.storage=48):y.isMatrix4?(T.boundary=64,T.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),T}function m(y){const T=y.target;T.removeEventListener("dispose",m);const x=o.indexOf(T.__bindingPointIndex);o.splice(x,1),s.deleteBuffer(i[T.id]),delete i[T.id],delete r[T.id]}function f(){for(const y in i)s.deleteBuffer(i[y]);o=[],i={},r={}}return{bind:h,update:u,dispose:f}}class Op{constructor(e={}){const{canvas:t=ac(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:l=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:u=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:a=!1,reverseDepthBuffer:c=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,f=null;const y=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=xn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let D=!1;this._outputColorSpace=Ut;let A=0,w=0,L=null,S=-1,M=null;const C=new $e,k=new $e;let O=null;const V=new De(0);let j=0,X=t.width,Z=t.height,H=1,ie=null,he=null;const _e=new $e(0,0,X,Z),Ne=new $e(0,0,X,Z);let Ze=!1;const q=new bs;let ee=!1,pe=!1;const se=new Qe,Me=new Qe,Xe=new P,be=new $e,ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let nt=!1;function ze(){return L===null?H:1}let R=n;function Pt(E,U){return t.getContext(E,U)}try{const E={alpha:!0,depth:i,stencil:r,antialias:l,premultipliedAlpha:h,preserveDrawingBuffer:u,powerPreference:p,failIfMajorPerformanceCaveat:a};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Jr}`),t.addEventListener("webglcontextlost",K,!1),t.addEventListener("webglcontextrestored",le,!1),t.addEventListener("webglcontextcreationerror",oe,!1),R===null){const U="webgl2";if(R=Pt(U,E),R===null)throw Pt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Ge,Be,ve,et,ge,b,v,F,Y,$,W,me,re,Se,Ee,J,ue,Te,Ae,de,ke,Le,Je,I;function ae(){Ge=new qd(R),Ge.init(),Le=new Rp(R,Ge),Be=new Bd(R,Ge,e,Le),ve=new Ap(R,Ge),Be.reverseDepthBuffer&&c&&ve.buffers.depth.setReversed(!0),et=new Kd(R),ge=new pp,b=new Cp(R,Ge,ve,ge,Be,Le,et),v=new Gd(x),F=new Xd(x),Y=new th(R),Je=new Od(R,Y),$=new Yd(R,Y,et,Je),W=new Zd(R,$,Y,et),Ae=new $d(R,Be,b),J=new kd(ge),me=new fp(x,v,F,Ge,Be,Je,J),re=new Np(x,ge),Se=new gp,Ee=new Sp(Ge),Te=new Fd(x,v,F,ve,W,d,h),ue=new bp(x,W,Be),I=new Fp(R,et,Be,ve),de=new zd(R,Ge,et),ke=new jd(R,Ge,et),et.programs=me.programs,x.capabilities=Be,x.extensions=Ge,x.properties=ge,x.renderLists=Se,x.shadowMap=ue,x.state=ve,x.info=et}ae();const G=new Ip(x,R);this.xr=G,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const E=Ge.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Ge.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(E){E!==void 0&&(H=E,this.setSize(X,Z,!1))},this.getSize=function(E){return E.set(X,Z)},this.setSize=function(E,U,z=!0){if(G.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=E,Z=U,t.width=Math.floor(E*H),t.height=Math.floor(U*H),z===!0&&(t.style.width=E+"px",t.style.height=U+"px"),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(X*H,Z*H).floor()},this.setDrawingBufferSize=function(E,U,z){X=E,Z=U,H=z,t.width=Math.floor(E*z),t.height=Math.floor(U*z),this.setViewport(0,0,E,U)},this.getCurrentViewport=function(E){return E.copy(C)},this.getViewport=function(E){return E.copy(_e)},this.setViewport=function(E,U,z,B){E.isVector4?_e.set(E.x,E.y,E.z,E.w):_e.set(E,U,z,B),ve.viewport(C.copy(_e).multiplyScalar(H).round())},this.getScissor=function(E){return E.copy(Ne)},this.setScissor=function(E,U,z,B){E.isVector4?Ne.set(E.x,E.y,E.z,E.w):Ne.set(E,U,z,B),ve.scissor(k.copy(Ne).multiplyScalar(H).round())},this.getScissorTest=function(){return Ze},this.setScissorTest=function(E){ve.setScissorTest(Ze=E)},this.setOpaqueSort=function(E){ie=E},this.setTransparentSort=function(E){he=E},this.getClearColor=function(E){return E.copy(Te.getClearColor())},this.setClearColor=function(){Te.setClearColor(...arguments)},this.getClearAlpha=function(){return Te.getClearAlpha()},this.setClearAlpha=function(){Te.setClearAlpha(...arguments)},this.clear=function(E=!0,U=!0,z=!0){let B=0;if(E){let N=!1;if(L!==null){const Q=L.texture.format;N=Q===sa||Q===ia||Q===na}if(N){const Q=L.texture.type,ne=Q===Zt||Q===Hn||Q===Ui||Q===Ni||Q===ea||Q===ta,ce=Te.getClearColor(),fe=Te.getClearAlpha(),Ce=ce.r,we=ce.g,ye=ce.b;ne?(g[0]=Ce,g[1]=we,g[2]=ye,g[3]=fe,R.clearBufferuiv(R.COLOR,0,g)):(_[0]=Ce,_[1]=we,_[2]=ye,_[3]=fe,R.clearBufferiv(R.COLOR,0,_))}else B|=R.COLOR_BUFFER_BIT}U&&(B|=R.DEPTH_BUFFER_BIT),z&&(B|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",K,!1),t.removeEventListener("webglcontextrestored",le,!1),t.removeEventListener("webglcontextcreationerror",oe,!1),Te.dispose(),Se.dispose(),Ee.dispose(),ge.dispose(),v.dispose(),F.dispose(),W.dispose(),Je.dispose(),I.dispose(),me.dispose(),G.dispose(),G.removeEventListener("sessionstart",ga),G.removeEventListener("sessionend",_a),En.stop()};function K(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function le(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const E=et.autoReset,U=ue.enabled,z=ue.autoUpdate,B=ue.needsUpdate,N=ue.type;ae(),et.autoReset=E,ue.enabled=U,ue.autoUpdate=z,ue.needsUpdate=B,ue.type=N}function oe(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Re(E){const U=E.target;U.removeEventListener("dispose",Re),it(U)}function it(E){_t(E),ge.remove(E)}function _t(E){const U=ge.get(E).programs;U!==void 0&&(U.forEach(function(z){me.releaseProgram(z)}),E.isShaderMaterial&&me.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,z,B,N,Q){U===null&&(U=ot);const ne=N.isMesh&&N.matrixWorld.determinant()<0,ce=dl(E,U,z,B,N);ve.setMaterial(B,ne);let fe=z.index,Ce=1;if(B.wireframe===!0){if(fe=$.getWireframeAttribute(z),fe===void 0)return;Ce=2}const we=z.drawRange,ye=z.attributes.position;let He=we.start*Ce,qe=(we.start+we.count)*Ce;Q!==null&&(He=Math.max(He,Q.start*Ce),qe=Math.min(qe,(Q.start+Q.count)*Ce)),fe!==null?(He=Math.max(He,0),qe=Math.min(qe,fe.count)):ye!=null&&(He=Math.max(He,0),qe=Math.min(qe,ye.count));const lt=qe-He;if(lt<0||lt===1/0)return;Je.setup(N,B,ce,z,fe);let st,Ve=de;if(fe!==null&&(st=Y.get(fe),Ve=ke,Ve.setIndex(st)),N.isMesh)B.wireframe===!0?(ve.setLineWidth(B.wireframeLinewidth*ze()),Ve.setMode(R.LINES)):Ve.setMode(R.TRIANGLES);else if(N.isLine){let xe=B.linewidth;xe===void 0&&(xe=1),ve.setLineWidth(xe*ze()),N.isLineSegments?Ve.setMode(R.LINES):N.isLineLoop?Ve.setMode(R.LINE_LOOP):Ve.setMode(R.LINE_STRIP)}else N.isPoints?Ve.setMode(R.POINTS):N.isSprite&&Ve.setMode(R.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)ys("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ve.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Ge.get("WEBGL_multi_draw"))Ve.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const xe=N._multiDrawStarts,gt=N._multiDrawCounts,Ye=N._multiDrawCount,Ft=fe?Y.get(fe).bytesPerElement:1,qn=ge.get(B).currentProgram.getUniforms();for(let wt=0;wt<Ye;wt++)qn.setValue(R,"_gl_DrawID",wt),Ve.render(xe[wt]/Ft,gt[wt])}else if(N.isInstancedMesh)Ve.renderInstances(He,lt,N.count);else if(z.isInstancedBufferGeometry){const xe=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,gt=Math.min(z.instanceCount,xe);Ve.renderInstances(He,lt,gt)}else Ve.render(He,lt)};function je(E,U,z){E.transparent===!0&&E.side===kt&&E.forceSinglePass===!1?(E.side=mt,E.needsUpdate=!0,Vi(E,U,z),E.side=Mn,E.needsUpdate=!0,Vi(E,U,z),E.side=kt):Vi(E,U,z)}this.compile=function(E,U,z=null){z===null&&(z=E),f=Ee.get(z),f.init(U),T.push(f),z.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),E!==z&&E.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),f.setupLights();const B=new Set;return E.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const Q=N.material;if(Q)if(Array.isArray(Q))for(let ne=0;ne<Q.length;ne++){const ce=Q[ne];je(ce,z,N),B.add(ce)}else je(Q,z,N),B.add(Q)}),f=T.pop(),B},this.compileAsync=function(E,U,z=null){const B=this.compile(E,U,z);return new Promise(N=>{function Q(){if(B.forEach(function(ne){ge.get(ne).currentProgram.isReady()&&B.delete(ne)}),B.size===0){N(E);return}setTimeout(Q,10)}Ge.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let Nt=null;function Jt(E){Nt&&Nt(E)}function ga(){En.stop()}function _a(){En.start()}const En=new ol;En.setAnimationLoop(Jt),typeof self<"u"&&En.setContext(self),this.setAnimationLoop=function(E){Nt=E,G.setAnimationLoop(E),E===null?En.stop():En.start()},G.addEventListener("sessionstart",ga),G.addEventListener("sessionend",_a),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),G.enabled===!0&&G.isPresenting===!0&&(G.cameraAutoUpdate===!0&&G.updateCamera(U),U=G.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,U,L),f=Ee.get(E,T.length),f.init(U),T.push(f),Me.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),q.setFromProjectionMatrix(Me),pe=this.localClippingEnabled,ee=J.init(this.clippingPlanes,pe),m=Se.get(E,y.length),m.init(),y.push(m),G.enabled===!0&&G.isPresenting===!0){const Q=x.xr.getDepthSensingMesh();Q!==null&&Rs(Q,U,-1/0,x.sortObjects)}Rs(E,U,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(ie,he),nt=G.enabled===!1||G.isPresenting===!1||G.hasDepthSensing()===!1,nt&&Te.addToRenderList(m,E),this.info.render.frame++,ee===!0&&J.beginShadows();const z=f.state.shadowsArray;ue.render(z,E,U),ee===!0&&J.endShadows(),this.info.autoReset===!0&&this.info.reset();const B=m.opaque,N=m.transmissive;if(f.setupLights(),U.isArrayCamera){const Q=U.cameras;if(N.length>0)for(let ne=0,ce=Q.length;ne<ce;ne++){const fe=Q[ne];ya(B,N,E,fe)}nt&&Te.render(E);for(let ne=0,ce=Q.length;ne<ce;ne++){const fe=Q[ne];va(m,E,fe,fe.viewport)}}else N.length>0&&ya(B,N,E,U),nt&&Te.render(E),va(m,E,U);L!==null&&w===0&&(b.updateMultisampleRenderTarget(L),b.updateRenderTargetMipmap(L)),E.isScene===!0&&E.onAfterRender(x,E,U),Je.resetDefaultState(),S=-1,M=null,T.pop(),T.length>0?(f=T[T.length-1],ee===!0&&J.setGlobalState(x.clippingPlanes,f.state.camera)):f=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function Rs(E,U,z,B){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)z=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)f.pushLight(E),E.castShadow&&f.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||q.intersectsSprite(E)){B&&be.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Me);const ne=W.update(E),ce=E.material;ce.visible&&m.push(E,ne,ce,z,be.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||q.intersectsObject(E))){const ne=W.update(E),ce=E.material;if(B&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),be.copy(E.boundingSphere.center)):(ne.boundingSphere===null&&ne.computeBoundingSphere(),be.copy(ne.boundingSphere.center)),be.applyMatrix4(E.matrixWorld).applyMatrix4(Me)),Array.isArray(ce)){const fe=ne.groups;for(let Ce=0,we=fe.length;Ce<we;Ce++){const ye=fe[Ce],He=ce[ye.materialIndex];He&&He.visible&&m.push(E,ne,He,z,be.z,ye)}}else ce.visible&&m.push(E,ne,ce,z,be.z,null)}}const Q=E.children;for(let ne=0,ce=Q.length;ne<ce;ne++)Rs(Q[ne],U,z,B)}function va(E,U,z,B){const N=E.opaque,Q=E.transmissive,ne=E.transparent;f.setupLightsView(z),ee===!0&&J.setGlobalState(x.clippingPlanes,z),B&&ve.viewport(C.copy(B)),N.length>0&&Hi(N,U,z),Q.length>0&&Hi(Q,U,z),ne.length>0&&Hi(ne,U,z),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function ya(E,U,z,B){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[B.id]===void 0&&(f.state.transmissionRenderTarget[B.id]=new Vn(1,1,{generateMipmaps:!0,type:Ge.has("EXT_color_buffer_half_float")||Ge.has("EXT_color_buffer_float")?Bi:Zt,minFilter:Gn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:We.workingColorSpace}));const Q=f.state.transmissionRenderTarget[B.id],ne=B.viewport||C;Q.setSize(ne.z*x.transmissionResolutionScale,ne.w*x.transmissionResolutionScale);const ce=x.getRenderTarget();x.setRenderTarget(Q),x.getClearColor(V),j=x.getClearAlpha(),j<1&&x.setClearColor(16777215,.5),x.clear(),nt&&Te.render(z);const fe=x.toneMapping;x.toneMapping=xn;const Ce=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),f.setupLightsView(B),ee===!0&&J.setGlobalState(x.clippingPlanes,B),Hi(E,z,B),b.updateMultisampleRenderTarget(Q),b.updateRenderTargetMipmap(Q),Ge.has("WEBGL_multisampled_render_to_texture")===!1){let we=!1;for(let ye=0,He=U.length;ye<He;ye++){const qe=U[ye],lt=qe.object,st=qe.geometry,Ve=qe.material,xe=qe.group;if(Ve.side===kt&&lt.layers.test(B.layers)){const gt=Ve.side;Ve.side=mt,Ve.needsUpdate=!0,xa(lt,z,B,st,Ve,xe),Ve.side=gt,Ve.needsUpdate=!0,we=!0}}we===!0&&(b.updateMultisampleRenderTarget(Q),b.updateRenderTargetMipmap(Q))}x.setRenderTarget(ce),x.setClearColor(V,j),Ce!==void 0&&(B.viewport=Ce),x.toneMapping=fe}function Hi(E,U,z){const B=U.isScene===!0?U.overrideMaterial:null;for(let N=0,Q=E.length;N<Q;N++){const ne=E[N],ce=ne.object,fe=ne.geometry,Ce=ne.group;let we=ne.material;we.allowOverride===!0&&B!==null&&(we=B),ce.layers.test(z.layers)&&xa(ce,U,z,fe,we,Ce)}}function xa(E,U,z,B,N,Q){E.onBeforeRender(x,U,z,B,N,Q),E.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),N.onBeforeRender(x,U,z,B,E,Q),N.transparent===!0&&N.side===kt&&N.forceSinglePass===!1?(N.side=mt,N.needsUpdate=!0,x.renderBufferDirect(z,U,B,N,E,Q),N.side=Mn,N.needsUpdate=!0,x.renderBufferDirect(z,U,B,N,E,Q),N.side=kt):x.renderBufferDirect(z,U,B,N,E,Q),E.onAfterRender(x,U,z,B,N,Q)}function Vi(E,U,z){U.isScene!==!0&&(U=ot);const B=ge.get(E),N=f.state.lights,Q=f.state.shadowsArray,ne=N.state.version,ce=me.getParameters(E,N.state,Q,U,z),fe=me.getProgramCacheKey(ce);let Ce=B.programs;B.environment=E.isMeshStandardMaterial?U.environment:null,B.fog=U.fog,B.envMap=(E.isMeshStandardMaterial?F:v).get(E.envMap||B.environment),B.envMapRotation=B.environment!==null&&E.envMap===null?U.environmentRotation:E.envMapRotation,Ce===void 0&&(E.addEventListener("dispose",Re),Ce=new Map,B.programs=Ce);let we=Ce.get(fe);if(we!==void 0){if(B.currentProgram===we&&B.lightsStateVersion===ne)return Sa(E,ce),we}else ce.uniforms=me.getUniforms(E),E.onBeforeCompile(ce,x),we=me.acquireProgram(ce,fe),Ce.set(fe,we),B.uniforms=ce.uniforms;const ye=B.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(ye.clippingPlanes=J.uniform),Sa(E,ce),B.needsLights=pl(E),B.lightsStateVersion=ne,B.needsLights&&(ye.ambientLightColor.value=N.state.ambient,ye.lightProbe.value=N.state.probe,ye.directionalLights.value=N.state.directional,ye.directionalLightShadows.value=N.state.directionalShadow,ye.spotLights.value=N.state.spot,ye.spotLightShadows.value=N.state.spotShadow,ye.rectAreaLights.value=N.state.rectArea,ye.ltc_1.value=N.state.rectAreaLTC1,ye.ltc_2.value=N.state.rectAreaLTC2,ye.pointLights.value=N.state.point,ye.pointLightShadows.value=N.state.pointShadow,ye.hemisphereLights.value=N.state.hemi,ye.directionalShadowMap.value=N.state.directionalShadowMap,ye.directionalShadowMatrix.value=N.state.directionalShadowMatrix,ye.spotShadowMap.value=N.state.spotShadowMap,ye.spotLightMatrix.value=N.state.spotLightMatrix,ye.spotLightMap.value=N.state.spotLightMap,ye.pointShadowMap.value=N.state.pointShadowMap,ye.pointShadowMatrix.value=N.state.pointShadowMatrix),B.currentProgram=we,B.uniformsList=null,we}function Ma(E){if(E.uniformsList===null){const U=E.currentProgram.getUniforms();E.uniformsList=xs.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function Sa(E,U){const z=ge.get(E);z.outputColorSpace=U.outputColorSpace,z.batching=U.batching,z.batchingColor=U.batchingColor,z.instancing=U.instancing,z.instancingColor=U.instancingColor,z.instancingMorph=U.instancingMorph,z.skinning=U.skinning,z.morphTargets=U.morphTargets,z.morphNormals=U.morphNormals,z.morphColors=U.morphColors,z.morphTargetsCount=U.morphTargetsCount,z.numClippingPlanes=U.numClippingPlanes,z.numIntersection=U.numClipIntersection,z.vertexAlphas=U.vertexAlphas,z.vertexTangents=U.vertexTangents,z.toneMapping=U.toneMapping}function dl(E,U,z,B,N){U.isScene!==!0&&(U=ot),b.resetTextureUnits();const Q=U.fog,ne=B.isMeshStandardMaterial?U.environment:null,ce=L===null?x.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:vi,fe=(B.isMeshStandardMaterial?F:v).get(B.envMap||ne),Ce=B.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,we=!!z.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),ye=!!z.morphAttributes.position,He=!!z.morphAttributes.normal,qe=!!z.morphAttributes.color;let lt=xn;B.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(lt=x.toneMapping);const st=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Ve=st!==void 0?st.length:0,xe=ge.get(B),gt=f.state.lights;if(ee===!0&&(pe===!0||E!==M)){const xt=E===M&&B.id===S;J.setState(B,E,xt)}let Ye=!1;B.version===xe.__version?(xe.needsLights&&xe.lightsStateVersion!==gt.state.version||xe.outputColorSpace!==ce||N.isBatchedMesh&&xe.batching===!1||!N.isBatchedMesh&&xe.batching===!0||N.isBatchedMesh&&xe.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&xe.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&xe.instancing===!1||!N.isInstancedMesh&&xe.instancing===!0||N.isSkinnedMesh&&xe.skinning===!1||!N.isSkinnedMesh&&xe.skinning===!0||N.isInstancedMesh&&xe.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&xe.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&xe.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&xe.instancingMorph===!1&&N.morphTexture!==null||xe.envMap!==fe||B.fog===!0&&xe.fog!==Q||xe.numClippingPlanes!==void 0&&(xe.numClippingPlanes!==J.numPlanes||xe.numIntersection!==J.numIntersection)||xe.vertexAlphas!==Ce||xe.vertexTangents!==we||xe.morphTargets!==ye||xe.morphNormals!==He||xe.morphColors!==qe||xe.toneMapping!==lt||xe.morphTargetsCount!==Ve)&&(Ye=!0):(Ye=!0,xe.__version=B.version);let Ft=xe.currentProgram;Ye===!0&&(Ft=Vi(B,U,N));let qn=!1,wt=!1,Ei=!1;const tt=Ft.getUniforms(),Dt=xe.uniforms;if(ve.useProgram(Ft.program)&&(qn=!0,wt=!0,Ei=!0),B.id!==S&&(S=B.id,wt=!0),qn||M!==E){ve.buffers.depth.getReversed()?(se.copy(E.projectionMatrix),lc(se),cc(se),tt.setValue(R,"projectionMatrix",se)):tt.setValue(R,"projectionMatrix",E.projectionMatrix),tt.setValue(R,"viewMatrix",E.matrixWorldInverse);const Tt=tt.map.cameraPosition;Tt!==void 0&&Tt.setValue(R,Xe.setFromMatrixPosition(E.matrixWorld)),Be.logarithmicDepthBuffer&&tt.setValue(R,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&tt.setValue(R,"isOrthographic",E.isOrthographicCamera===!0),M!==E&&(M=E,wt=!0,Ei=!0)}if(N.isSkinnedMesh){tt.setOptional(R,N,"bindMatrix"),tt.setOptional(R,N,"bindMatrixInverse");const xt=N.skeleton;xt&&(xt.boneTexture===null&&xt.computeBoneTexture(),tt.setValue(R,"boneTexture",xt.boneTexture,b))}N.isBatchedMesh&&(tt.setOptional(R,N,"batchingTexture"),tt.setValue(R,"batchingTexture",N._matricesTexture,b),tt.setOptional(R,N,"batchingIdTexture"),tt.setValue(R,"batchingIdTexture",N._indirectTexture,b),tt.setOptional(R,N,"batchingColorTexture"),N._colorsTexture!==null&&tt.setValue(R,"batchingColorTexture",N._colorsTexture,b));const Lt=z.morphAttributes;if((Lt.position!==void 0||Lt.normal!==void 0||Lt.color!==void 0)&&Ae.update(N,z,Ft),(wt||xe.receiveShadow!==N.receiveShadow)&&(xe.receiveShadow=N.receiveShadow,tt.setValue(R,"receiveShadow",N.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(Dt.envMap.value=fe,Dt.flipEnvMap.value=fe.isCubeTexture&&fe.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&U.environment!==null&&(Dt.envMapIntensity.value=U.environmentIntensity),wt&&(tt.setValue(R,"toneMappingExposure",x.toneMappingExposure),xe.needsLights&&fl(Dt,Ei),Q&&B.fog===!0&&re.refreshFogUniforms(Dt,Q),re.refreshMaterialUniforms(Dt,B,H,Z,f.state.transmissionRenderTarget[E.id]),xs.upload(R,Ma(xe),Dt,b)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(xs.upload(R,Ma(xe),Dt,b),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&tt.setValue(R,"center",N.center),tt.setValue(R,"modelViewMatrix",N.modelViewMatrix),tt.setValue(R,"normalMatrix",N.normalMatrix),tt.setValue(R,"modelMatrix",N.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const xt=B.uniformsGroups;for(let Tt=0,Ps=xt.length;Tt<Ps;Tt++){const Tn=xt[Tt];I.update(Tn,Ft),I.bind(Tn,Ft)}}return Ft}function fl(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function pl(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(E,U,z){const B=ge.get(E);B.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),ge.get(E.texture).__webglTexture=U,ge.get(E.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:z,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,U){const z=ge.get(E);z.__webglFramebuffer=U,z.__useDefaultFramebuffer=U===void 0};const ml=R.createFramebuffer();this.setRenderTarget=function(E,U=0,z=0){L=E,A=U,w=z;let B=!0,N=null,Q=!1,ne=!1;if(E){const fe=ge.get(E);if(fe.__useDefaultFramebuffer!==void 0)ve.bindFramebuffer(R.FRAMEBUFFER,null),B=!1;else if(fe.__webglFramebuffer===void 0)b.setupRenderTarget(E);else if(fe.__hasExternalTextures)b.rebindTextures(E,ge.get(E.texture).__webglTexture,ge.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const ye=E.depthTexture;if(fe.__boundDepthTexture!==ye){if(ye!==null&&ge.has(ye)&&(E.width!==ye.image.width||E.height!==ye.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(E)}}const Ce=E.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(ne=!0);const we=ge.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(we[U])?N=we[U][z]:N=we[U],Q=!0):E.samples>0&&b.useMultisampledRTT(E)===!1?N=ge.get(E).__webglMultisampledFramebuffer:Array.isArray(we)?N=we[z]:N=we,C.copy(E.viewport),k.copy(E.scissor),O=E.scissorTest}else C.copy(_e).multiplyScalar(H).floor(),k.copy(Ne).multiplyScalar(H).floor(),O=Ze;if(z!==0&&(N=ml),ve.bindFramebuffer(R.FRAMEBUFFER,N)&&B&&ve.drawBuffers(E,N),ve.viewport(C),ve.scissor(k),ve.setScissorTest(O),Q){const fe=ge.get(E.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+U,fe.__webglTexture,z)}else if(ne){const fe=ge.get(E.texture),Ce=U;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,fe.__webglTexture,z,Ce)}else if(E!==null&&z!==0){const fe=ge.get(E.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,fe.__webglTexture,z)}S=-1},this.readRenderTargetPixels=function(E,U,z,B,N,Q,ne){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ce=ge.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ne!==void 0&&(ce=ce[ne]),ce){ve.bindFramebuffer(R.FRAMEBUFFER,ce);try{const fe=E.texture,Ce=fe.format,we=fe.type;if(!Be.textureFormatReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Be.textureTypeReadable(we)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-B&&z>=0&&z<=E.height-N&&R.readPixels(U,z,B,N,Le.convert(Ce),Le.convert(we),Q)}finally{const fe=L!==null?ge.get(L).__webglFramebuffer:null;ve.bindFramebuffer(R.FRAMEBUFFER,fe)}}},this.readRenderTargetPixelsAsync=async function(E,U,z,B,N,Q,ne){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ce=ge.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ne!==void 0&&(ce=ce[ne]),ce)if(U>=0&&U<=E.width-B&&z>=0&&z<=E.height-N){ve.bindFramebuffer(R.FRAMEBUFFER,ce);const fe=E.texture,Ce=fe.format,we=fe.type;if(!Be.textureFormatReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Be.textureTypeReadable(we))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ye=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,ye),R.bufferData(R.PIXEL_PACK_BUFFER,Q.byteLength,R.STREAM_READ),R.readPixels(U,z,B,N,Le.convert(Ce),Le.convert(we),0);const He=L!==null?ge.get(L).__webglFramebuffer:null;ve.bindFramebuffer(R.FRAMEBUFFER,He);const qe=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await oc(R,qe,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,ye),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,Q),R.deleteBuffer(ye),R.deleteSync(qe),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,U=null,z=0){const B=Math.pow(2,-z),N=Math.floor(E.image.width*B),Q=Math.floor(E.image.height*B),ne=U!==null?U.x:0,ce=U!==null?U.y:0;b.setTexture2D(E,0),R.copyTexSubImage2D(R.TEXTURE_2D,z,0,0,ne,ce,N,Q),ve.unbindTexture()};const gl=R.createFramebuffer(),_l=R.createFramebuffer();this.copyTextureToTexture=function(E,U,z=null,B=null,N=0,Q=null){Q===null&&(N!==0?(ys("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Q=N,N=0):Q=0);let ne,ce,fe,Ce,we,ye,He,qe,lt;const st=E.isCompressedTexture?E.mipmaps[Q]:E.image;if(z!==null)ne=z.max.x-z.min.x,ce=z.max.y-z.min.y,fe=z.isBox3?z.max.z-z.min.z:1,Ce=z.min.x,we=z.min.y,ye=z.isBox3?z.min.z:0;else{const Lt=Math.pow(2,-N);ne=Math.floor(st.width*Lt),ce=Math.floor(st.height*Lt),E.isDataArrayTexture?fe=st.depth:E.isData3DTexture?fe=Math.floor(st.depth*Lt):fe=1,Ce=0,we=0,ye=0}B!==null?(He=B.x,qe=B.y,lt=B.z):(He=0,qe=0,lt=0);const Ve=Le.convert(U.format),xe=Le.convert(U.type);let gt;U.isData3DTexture?(b.setTexture3D(U,0),gt=R.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(b.setTexture2DArray(U,0),gt=R.TEXTURE_2D_ARRAY):(b.setTexture2D(U,0),gt=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,U.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,U.unpackAlignment);const Ye=R.getParameter(R.UNPACK_ROW_LENGTH),Ft=R.getParameter(R.UNPACK_IMAGE_HEIGHT),qn=R.getParameter(R.UNPACK_SKIP_PIXELS),wt=R.getParameter(R.UNPACK_SKIP_ROWS),Ei=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,st.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,st.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Ce),R.pixelStorei(R.UNPACK_SKIP_ROWS,we),R.pixelStorei(R.UNPACK_SKIP_IMAGES,ye);const tt=E.isDataArrayTexture||E.isData3DTexture,Dt=U.isDataArrayTexture||U.isData3DTexture;if(E.isDepthTexture){const Lt=ge.get(E),xt=ge.get(U),Tt=ge.get(Lt.__renderTarget),Ps=ge.get(xt.__renderTarget);ve.bindFramebuffer(R.READ_FRAMEBUFFER,Tt.__webglFramebuffer),ve.bindFramebuffer(R.DRAW_FRAMEBUFFER,Ps.__webglFramebuffer);for(let Tn=0;Tn<fe;Tn++)tt&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,ge.get(E).__webglTexture,N,ye+Tn),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,ge.get(U).__webglTexture,Q,lt+Tn)),R.blitFramebuffer(Ce,we,ne,ce,He,qe,ne,ce,R.DEPTH_BUFFER_BIT,R.NEAREST);ve.bindFramebuffer(R.READ_FRAMEBUFFER,null),ve.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(N!==0||E.isRenderTargetTexture||ge.has(E)){const Lt=ge.get(E),xt=ge.get(U);ve.bindFramebuffer(R.READ_FRAMEBUFFER,gl),ve.bindFramebuffer(R.DRAW_FRAMEBUFFER,_l);for(let Tt=0;Tt<fe;Tt++)tt?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Lt.__webglTexture,N,ye+Tt):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Lt.__webglTexture,N),Dt?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,xt.__webglTexture,Q,lt+Tt):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,xt.__webglTexture,Q),N!==0?R.blitFramebuffer(Ce,we,ne,ce,He,qe,ne,ce,R.COLOR_BUFFER_BIT,R.NEAREST):Dt?R.copyTexSubImage3D(gt,Q,He,qe,lt+Tt,Ce,we,ne,ce):R.copyTexSubImage2D(gt,Q,He,qe,Ce,we,ne,ce);ve.bindFramebuffer(R.READ_FRAMEBUFFER,null),ve.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else Dt?E.isDataTexture||E.isData3DTexture?R.texSubImage3D(gt,Q,He,qe,lt,ne,ce,fe,Ve,xe,st.data):U.isCompressedArrayTexture?R.compressedTexSubImage3D(gt,Q,He,qe,lt,ne,ce,fe,Ve,st.data):R.texSubImage3D(gt,Q,He,qe,lt,ne,ce,fe,Ve,xe,st):E.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,Q,He,qe,ne,ce,Ve,xe,st.data):E.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,Q,He,qe,st.width,st.height,Ve,st.data):R.texSubImage2D(R.TEXTURE_2D,Q,He,qe,ne,ce,Ve,xe,st);R.pixelStorei(R.UNPACK_ROW_LENGTH,Ye),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Ft),R.pixelStorei(R.UNPACK_SKIP_PIXELS,qn),R.pixelStorei(R.UNPACK_SKIP_ROWS,wt),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Ei),Q===0&&U.generateMipmaps&&R.generateMipmap(gt),ve.unbindTexture()},this.copyTextureToTexture3D=function(E,U,z=null,B=null,N=0){return ys('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,U,z,B,N)},this.initRenderTarget=function(E){ge.get(E).__webglFramebuffer===void 0&&b.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?b.setTextureCube(E,0):E.isData3DTexture?b.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?b.setTexture2DArray(E,0):b.setTexture2D(E,0),ve.unbindTexture()},this.resetState=function(){A=0,w=0,L=null,ve.reset(),Je.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return cn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=We._getDrawingBufferColorSpace(e),t.unpackColorSpace=We._getUnpackColorSpace()}}class zp{constructor(){this.renderer=null,this.rendererInitialized=!1,this.domElement=null}async initialize(){return this.renderer=await this.createRenderer(),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=xl,this.renderer.toneMapping=Fo,this.renderer.toneMappingExposure=1,this.renderer.powerPreference="high-performance",this.renderer.precision="mediump",document.body.appendChild(this.renderer.domElement),this.domElement=this.renderer.domElement,this.domElement.setAttribute("tabindex","0"),this.domElement.style.outline="none",this.rendererInitialized=!0,this}async createRenderer(){if(navigator.gpu)try{const e=new(void 0)({antialias:!0});return await e.init(),console.log("Using WebGPU renderer"),e}catch(e){console.warn("WebGPU initialization failed:",e),console.warn("Falling back to WebGL renderer")}else console.warn("WebGPU not supported by this browser, using WebGL instead");return new Op({antialias:!0})}handleResize(){this.renderer&&this.renderer.setSize(window.innerWidth,window.innerHeight)}render(e,t){this.renderer&&this.renderer.render(e,t)}getCanvas(){return this.domElement}isInitialized(){return this.rendererInitialized}}class Bp{constructor(){this.state={difficulty:"normal",serumCollected:0,totalSerum:5,notesFound:0,totalNotes:8,gameStarted:!1,gamePaused:!1,gameOver:!1,noteReading:!1,startTime:0,elapsedTime:0,pausedTime:0,pauseStartTime:0,timeLimit:300,objectives:["Find serum vials to slow the infection","Collect information about the maze","Find the exit before time runs out","Watch out for Grievers at night"],currentObjective:0,objectiveTimer:0,objectiveDisplayTime:10,environmentStatus:{isNight:!1,isTransitioning:!1}}}startGame(){this.state.gameStarted=!0,this.state.startTime=Date.now()}pauseGame(){this.state.gamePaused||(this.state.gamePaused=!0,this.state.pauseStartTime=Date.now())}resumeGame(){this.state.gamePaused&&(this.state.gamePaused=!1,this.state.pauseStartTime>0&&(this.state.pausedTime+=Date.now()-this.state.pauseStartTime,this.state.pauseStartTime=0))}endGame(){this.state.gameOver=!0}get difficulty(){return this.state.difficulty}get serumCollected(){return this.state.serumCollected}get totalSerum(){return this.state.totalSerum}get notesFound(){return this.state.notesFound}get totalNotes(){return this.state.totalNotes}get gameStarted(){return this.state.gameStarted}get gamePaused(){return this.state.gamePaused}get gameOver(){return this.state.gameOver}get noteReading(){return this.state.noteReading}get elapsedTime(){return this.state.elapsedTime}get timeLimit(){return this.state.timeLimit}get objectives(){return this.state.objectives}get currentObjective(){return this.state.currentObjective}get objectiveTimer(){return this.state.objectiveTimer}get objectiveDisplayTime(){return this.state.objectiveDisplayTime}get environmentStatus(){return this.state.environmentStatus}get currentObjectiveText(){return this.state.objectives[this.state.currentObjective]}set difficulty(e){this.state.difficulty=e,this.updateTimeLimitBasedOnDifficulty()}set serumCollected(e){this.state.serumCollected=e}set notesFound(e){this.state.notesFound=e}set gameStarted(e){this.state.gameStarted=e}set gamePaused(e){this.state.gamePaused=e}set gameOver(e){this.state.gameOver=e}set noteReading(e){this.state.noteReading=e}set objectiveTimer(e){this.state.objectiveTimer=e}set environmentStatus(e){this.state.environmentStatus=e}updateElapsedTime(){if(this.state.gameStarted){if(this.state.gamePaused)return this.state.elapsedTime;this.state.elapsedTime=Date.now()-this.state.startTime-this.state.pausedTime}return this.state.elapsedTime}getRemainingTime(){return Math.max(0,this.state.timeLimit-this.state.elapsedTime/1e3)}cycleObjective(){return this.state.currentObjective=(this.state.currentObjective+1)%this.state.objectives.length,this.state.objectiveTimer=0,this.currentObjectiveText}incrementSerum(){return this.state.serumCollected++,this.state.serumCollected}incrementNotes(){return this.state.notesFound++,this.state.notesFound}setDifficulty(e){this.state.difficulty=e,this.updateTimeLimitBasedOnDifficulty()}updateTimeLimitBasedOnDifficulty(){switch(this.state.difficulty){case"easy":this.state.timeLimit=420;break;case"normal":this.state.timeLimit=300;break;case"hard":this.state.timeLimit=180;break}return this.state.timeLimit}reset(){this.state.serumCollected=0,this.state.notesFound=0,this.state.gameOver=!1,this.state.gamePaused=!1,this.state.startTime=Date.now(),this.state.elapsedTime=0,this.state.pausedTime=0,this.state.pauseStartTime=0,this.state.currentObjective=0,this.state.objectiveTimer=0}}class kp{constructor(e){this.gameState=e,this.loadingScreen=document.querySelector(".loading-screen"),this.loadingBar=document.querySelector(".loading-bar"),this.introScreen=document.querySelector(".intro-screen"),this.startGameBtn=document.getElementById("start-game"),this.difficultyBtns=document.querySelectorAll(".difficulty-btn"),this.gameUI=document.querySelector(".game-ui"),this.objectiveElement=document.getElementById("objective"),this.pauseMenu=document.querySelector(".pause-menu"),this.resumeBtn=document.getElementById("resume"),this.restartFromPauseBtn=document.getElementById("restart-from-pause"),this.gameOverScreen=document.querySelector(".game-over"),this.gameOverMessage=document.getElementById("game-over-message"),this.restartBtn=document.getElementById("restart"),this.winScreen=document.querySelector(".win-screen"),this.playAgainBtn=document.getElementById("play-again"),this.finalTimeElement=document.getElementById("final-time"),this.finalInfectionElement=document.getElementById("final-infection"),this.storyNotePanel=document.querySelector(".story-note"),this.noteTitle=document.querySelector(".note-content h3"),this.noteContent=document.querySelector(".note-content p"),this.closeNoteBtn=document.querySelector(".close-note"),this.interactionPrompt=document.querySelector(".interaction-prompt"),this.instructionsPanel=document.querySelector(".instructions"),this.vignetteOverlay=document.createElement("div"),this.infectionOverlay=document.createElement("div"),this.timeWarningOverlay=document.createElement("div"),this.initializeOverlays(),this.startCallback=null,this.restartCallback=null,this.resumeCallback=null,this.closeNoteCallback=null}initializeOverlays(){this.vignetteOverlay.className="vignette-overlay",this.infectionOverlay.className="infection-overlay",this.timeWarningOverlay.className="time-warning-overlay",document.body.appendChild(this.vignetteOverlay),document.body.appendChild(this.infectionOverlay),document.body.appendChild(this.timeWarningOverlay)}setupEventListeners(e){this.startCallback=e.onStart,this.restartCallback=e.onRestart,this.resumeCallback=e.onResume,this.closeNoteCallback=e.onCloseNote,this.difficultyBtns.forEach(t=>{t.addEventListener("click",()=>{this.difficultyBtns.forEach(n=>n.classList.remove("active")),t.classList.add("active"),this.gameState.setDifficulty(t.dataset.difficulty)})}),this.startGameBtn.addEventListener("click",()=>{this.startCallback&&this.startCallback()}),this.restartBtn.addEventListener("click",()=>{window.location.reload()}),this.restartFromPauseBtn.addEventListener("click",()=>{window.location.reload()}),this.playAgainBtn.addEventListener("click",()=>{window.location.reload()}),this.resumeBtn.addEventListener("click",t=>{t.preventDefault(),this.pauseMenu.style.display="none",this.pauseMenu.style.visibility="hidden",this.resumeCallback&&this.resumeCallback(),t.stopPropagation()}),this.closeNoteBtn.addEventListener("click",()=>{this.closeNoteCallback&&this.closeNoteCallback()})}updateObjectiveDisplay(){this.objectiveElement.textContent=this.gameState.currentObjectiveText}updateInfectionOverlay(e){if(e>70){const t=(e-70)/30*.6;this.infectionOverlay.style.backgroundColor=`rgba(230, 57, 70, ${t})`,this.infectionOverlay.style.animation="heartbeat 1s infinite"}else this.infectionOverlay.style.backgroundColor="rgba(230, 57, 70, 0)",this.infectionOverlay.style.animation="none"}updateTimeWarningOverlay(){const e=this.gameState.getRemainingTime();if(e<30){const t=(1-e/30)*.3;this.timeWarningOverlay.style.backgroundColor=`rgba(255, 183, 3, ${t})`,this.timeWarningOverlay.style.animation="timeWarning 0.5s infinite"}else this.timeWarningOverlay.style.backgroundColor="rgba(255, 183, 3, 0)",this.timeWarningOverlay.style.animation="none"}formatTime(e){const t=Math.floor(e/60),n=Math.floor(e%60);return`${t.toString().padStart(2,"0")}:${n.toString().padStart(2,"0")}`}updateTimerDisplay(){const e=this.gameState.getRemainingTime();document.getElementById("timer").textContent=`Time: ${this.formatTime(e)}`}updateSerumCountDisplay(){document.getElementById("serum-count").textContent=`Serum: ${this.gameState.serumCollected}/${this.gameState.totalSerum}`}showStartScreen(){this.loadingScreen.style.display="none",this.introScreen.style.display="flex",this.gameUI.style.display="none",this.pauseMenu.style.display="none",this.gameOverScreen.style.display="none",this.winScreen.style.display="none"}startGameUI(){this.introScreen.style.opacity="0",setTimeout(()=>{this.introScreen.style.display="none",this.gameUI.style.display="block",this.instructionsPanel.style.display="block",setTimeout(()=>{this.instructionsPanel.style.opacity="0",setTimeout(()=>{this.instructionsPanel.style.display="none"},500)},1e4)},500)}showPauseMenu(){this.pauseMenu.style.opacity="1",this.pauseMenu.style.visibility="visible",this.pauseMenu.style.display="flex",this.pauseMenu.offsetWidth}hidePauseMenu(){this.pauseMenu.style.display="none",this.pauseMenu.style.visibility="hidden"}showGameOverScreen(e){let t="";switch(e){case"time":t="Time has run out. The maze walls have closed.";break;case"infected":t="The infection has taken over your body.";break;case"griever":t="You have been killed by a Griever.";break;default:t="Game Over"}const n=this.gameOverScreen.querySelector("p");n&&(n.textContent=t),this.gameOverScreen.style.zIndex="1100",this.gameOverScreen.style.display="flex"}showWinScreen(e,t){const n=this.formatTime(e),i=Math.floor(t);this.finalTimeElement&&(this.finalTimeElement.textContent=n),this.finalInfectionElement&&(this.finalInfectionElement.textContent=`${i}%`);const r=this.winScreen.querySelector("p");r&&(r.textContent=`You've successfully navigated the maze and controlled the infection. Time: ${n}, Final Infection: ${i}%`),this.winScreen.style.zIndex="1100",this.winScreen.style.display="flex"}showStoryNote(e){this.noteTitle.textContent=e.title,this.noteContent.textContent=e.content,this.storyNotePanel.style.display="flex",this._noteKeyListener=this._handleNoteKeyPress.bind(this),document.addEventListener("keydown",this._noteKeyListener);const t=document.createElement("div");t.className="key-hint",t.textContent="Press X to close",t.style.position="absolute",t.style.bottom="15px",t.style.right="15px",t.style.fontSize="0.8rem",t.style.color="rgba(255, 255, 255, 0.7)",this.storyNotePanel.appendChild(t),setTimeout(()=>{this.storyNotePanel.classList.add("visible")},10)}_handleNoteKeyPress(e){(e.key==="x"||e.key==="X")&&this.closeNoteCallback&&this.closeNoteCallback()}showNoteContent(e){this.showStoryNote(e)}hideStoryNote(){this.storyNotePanel.classList.remove("visible"),this._noteKeyListener&&(document.removeEventListener("keydown",this._noteKeyListener),this._noteKeyListener=null);const e=this.storyNotePanel.querySelector(".key-hint");e&&this.storyNotePanel.removeChild(e),setTimeout(()=>{this.storyNotePanel.style.display="none"},500)}hideAllScreens(){this.pauseMenu.style.display="none",this.gameOverScreen.style.display="none",this.winScreen.style.display="none"}showLoadingScreen(){this.loadingScreen.style.opacity="1",this.loadingScreen.style.display="flex",this.loadingBar.style.width="0%"}updateLoadingProgress(e){this.loadingBar.style.width=`${e}%`}dismissLoadingScreen(){this.loadingScreen.style.opacity!=="0"&&setTimeout(()=>{this.loadingScreen.style.opacity="0",setTimeout(()=>{this.loadingScreen.style.display="none",this.introScreen.style.display="flex"},500)},1e3)}}class Gp{constructor(e,t={}){this.domElement=e,this.callbacks={onEscape:t.onEscape||(()=>{}),onInteract:t.onInteract||(()=>{}),onToggleMinimap:t.onToggleMinimap||(()=>{}),onToggleFPS:t.onToggleFPS||(()=>{})},this.lastKeysPressed=[],this.cheatCodeSequence=["KeyM","KeyA","KeyP"],this.setupEventListeners()}setupEventListeners(){document.addEventListener("keydown",e=>this.handleKeyDown(e)),this.domElement&&(this.domElement.addEventListener("mousedown",()=>{this.domElement.focus()}),this.domElement.setAttribute("tabindex","0"),this.domElement.style.outline="none",this.domElement.addEventListener("blur",()=>{console.log("[DEBUG] Canvas lost focus")}),this.domElement.addEventListener("focus",()=>{console.log("[DEBUG] Canvas gained focus")}))}handleKeyDown(e){e.code==="Escape"&&this.callbacks.onEscape(),e.code==="KeyE"&&this.callbacks.onInteract(),e.code==="KeyF"&&this.callbacks.onToggleFPS(),this.trackCheatCode(e.code)}trackCheatCode(e){this.lastKeysPressed.push(e),this.lastKeysPressed.length>this.cheatCodeSequence.length&&this.lastKeysPressed.shift(),this.isCheatCodeActivated()&&(console.log("Cheat code activated: Mini-map toggled"),this.callbacks.onToggleMinimap(),this.lastKeysPressed=[])}isCheatCodeActivated(){if(this.lastKeysPressed.length!==this.cheatCodeSequence.length)return!1;for(let e=0;e<this.cheatCodeSequence.length;e++)if(this.lastKeysPressed[e]!==this.cheatCodeSequence[e])return!1;return!0}}const li=new qt(0,0,0,"YXZ"),ci=new P,Hp={type:"change"},Vp={type:"lock"},Wp={type:"unlock"},Po=.002,Do=Math.PI/2;class Xp extends Qc{constructor(e,t=null){super(e,t),this.isLocked=!1,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.pointerSpeed=1,this._onMouseMove=qp.bind(this),this._onPointerlockChange=Yp.bind(this),this._onPointerlockError=jp.bind(this),this.domElement!==null&&this.connect(this.domElement)}connect(e){super.connect(e),this.domElement.ownerDocument.addEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.addEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.addEventListener("pointerlockerror",this._onPointerlockError)}disconnect(){this.domElement.ownerDocument.removeEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.removeEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.removeEventListener("pointerlockerror",this._onPointerlockError)}dispose(){this.disconnect()}getObject(){return console.warn("THREE.PointerLockControls: getObject() has been deprecated. Use controls.object instead."),this.object}getDirection(e){return e.set(0,0,-1).applyQuaternion(this.object.quaternion)}moveForward(e){if(this.enabled===!1)return;const t=this.object;ci.setFromMatrixColumn(t.matrix,0),ci.crossVectors(t.up,ci),t.position.addScaledVector(ci,e)}moveRight(e){if(this.enabled===!1)return;const t=this.object;ci.setFromMatrixColumn(t.matrix,0),t.position.addScaledVector(ci,e)}lock(e=!1){this.domElement.requestPointerLock({unadjustedMovement:e})}unlock(){this.domElement.ownerDocument.exitPointerLock()}}function qp(s){if(this.enabled===!1||this.isLocked===!1)return;const e=this.object;li.setFromQuaternion(e.quaternion),li.y-=s.movementX*Po*this.pointerSpeed,li.x-=s.movementY*Po*this.pointerSpeed,li.x=Math.max(Do-this.maxPolarAngle,Math.min(Do-this.minPolarAngle,li.x)),e.quaternion.setFromEuler(li),this.dispatchEvent(Hp)}function Yp(){this.domElement.ownerDocument.pointerLockElement===this.domElement?(this.dispatchEvent(Vp),this.isLocked=!0):(this.dispatchEvent(Wp),this.isLocked=!1)}function jp(){console.error("THREE.PointerLockControls: Unable to use Pointer Lock API")}class Lo{constructor(e,t,n,i){this.scene=e,this.camera=t,this.domElement=n,this.soundManager=i||null,this.moveForward=!1,this.moveBackward=!1,this.moveLeft=!1,this.moveRight=!1,this.sprint=!1,this.canJump=!1,this.isJumping=!1,this.speed=6,this.sprintSpeed=12,this.height=1.6,this.jumpHeight=20,this.gravity=30,this.health=100,this.maxHealth=100,this.stamina=100,this.maxStamina=100,this.staminaRegenRate=10,this.staminaDrainRate=20,this.infection=0,this.maxInfection=100,this.infectionRate=.2,this.velocity=new P,this.direction=new P,this.tempVector=new P,this.forward=new P,this.right=new P,console.log("[DEBUG] Camera initial state:",{position:t.position,quaternion:t.quaternion,matrix:t.matrix}),console.log("[DEBUG] Initializing PointerLockControls with:",{domElement:n,camera:t}),this.controls=new Xp(t,n),e.add(this.controls.object),console.log("[DEBUG] Controls object state:",{isLocked:this.controls.isLocked,object:this.controls.object.position});const r=this.controls.object;console.log("[DEBUG] Controls-Camera connection:",{controlsHasCamera:r.children.includes(t),cameraParent:t.parent,controlsParent:r.parent}),this.domElement&&document.activeElement!==this.domElement&&(console.log("Focusing game canvas"),this.domElement.focus()),this.camera=t,t.position.y=this.height,this.controls.isLocked=!1,this.footstepTimer=0,this.footstepInterval=.5,this.isMoving=!1,this.wasMoving=!1,this.setupEventListeners(),this.createPlayerModel(),this.keyDebug=!0,console.log("Player initialized with controls")}setupEventListeners(){this._onKeyDown&&document.removeEventListener("keydown",this._onKeyDown),this._onKeyUp&&document.removeEventListener("keyup",this._onKeyUp);const e=n=>{if(!n.repeat){switch(console.log(`[DEBUG] KeyDown Event - Code: ${n.code}`),n.code){case"KeyW":case"ArrowUp":this.moveForward=!0,console.log("[DEBUG] moveForward set to true");break;case"KeyA":case"ArrowLeft":this.moveLeft=!0,console.log("[DEBUG] moveLeft set to true");break;case"KeyS":case"ArrowDown":this.moveBackward=!0,console.log("[DEBUG] moveBackward set to true");break;case"KeyD":case"ArrowRight":this.moveRight=!0,console.log("[DEBUG] moveRight set to true");break;case"Space":this.canJump&&(this.velocity.y+=this.jumpHeight,this.canJump=!1,this.isJumping=!0,this.soundManager&&this.soundManager.play("jump"));break;case"ShiftLeft":case"ShiftRight":this.stamina>10&&(this.sprint=!0);break}this.keyDebug&&console.log(`Key press: ${n.code}, moveForward: ${this.moveForward}, moveBackward: ${this.moveBackward}, moveLeft: ${this.moveLeft}, moveRight: ${this.moveRight}`)}},t=n=>{switch(n.code){case"KeyW":case"ArrowUp":this.moveForward=!1;break;case"KeyA":case"ArrowLeft":this.moveLeft=!1;break;case"KeyS":case"ArrowDown":this.moveBackward=!1;break;case"KeyD":case"ArrowRight":this.moveRight=!1;break;case"ShiftLeft":case"ShiftRight":this.sprint=!1;break}this.keyDebug&&console.log(`Key release: ${n.code}, moveForward: ${this.moveForward}, moveBackward: ${this.moveBackward}, moveLeft: ${this.moveLeft}, moveRight: ${this.moveRight}`)};this._onKeyDown=e,this._onKeyUp=t,document.addEventListener("keydown",this._onKeyDown),document.addEventListener("keyup",this._onKeyUp),console.log("Player event listeners set up"),setTimeout(()=>{console.log("Testing keyboard event handling...");const n=new KeyboardEvent("keydown",{code:"KeyW"});document.dispatchEvent(n),setTimeout(()=>{const i=new KeyboardEvent("keyup",{code:"KeyW"});document.dispatchEvent(i)},100)},2e3)}createPlayerModel(){const e=new Vt(.4,.4,this.height,16),t=new an({color:0,transparent:!0,opacity:0,depthWrite:!1});this.playerModel=new Ue(e,t),this.playerModel.position.y=this.height/2,this.playerModel.castShadow=!0,this.controls.object.add(this.playerModel)}update(e,t){const n=this.controls.object;if(!n)return console.error("[MOVEMENT-DEBUG] Controls object is null"),null;this.velocity.y-=this.gravity*e;let i=0,r=0;if(this.moveForward&&(r-=1),this.moveBackward&&(r+=1),this.moveLeft&&(i-=1),this.moveRight&&(i+=1),i!==0&&r!==0){const u=Math.sqrt(i*i+r*r);i/=u,r/=u}if(i!==0||r!==0){const u=this.sprint&&this.stamina>0?this.sprintSpeed:this.speed,p=new P;this.camera.getWorldDirection(p);const a=new P(p.x,0,p.z).normalize(),c=new P(-a.z,0,a.x),d=new P;d.addScaledVector(a,-r),d.addScaledVector(c,i);const g=d.multiplyScalar(u*e);this._tempVector||(this._tempVector=new P);const _=this._tempVector.copy(n.position).add(g);if(t&&typeof t=="function")if(!t(_))n.position.copy(_);else{this._tempVectorX||(this._tempVectorX=new P),this._tempVectorZ||(this._tempVectorZ=new P);const f=this._tempVectorX.copy(n.position);f.x+=g.x,t(f)||n.position.copy(f);const y=this._tempVectorZ.copy(n.position);y.z+=g.z,t(y)||n.position.copy(y)}else n.position.copy(_)}n.position.y+=this.velocity.y*e,n.position.y<this.height&&(this.velocity.y=0,n.position.y=this.height,this.canJump=!0,this.isJumping&&(this.soundManager&&this.soundManager.play("land"),this.isJumping=!1));const o=this.stamina<this.maxStamina*.3,l=!this.sprint||!(this.moveForward||this.moveBackward||this.moveLeft||this.moveRight);this.sprint&&(this.moveForward||this.moveBackward||this.moveLeft||this.moveRight)?(this.stamina=Math.max(0,this.stamina-this.staminaDrainRate*e),this.stamina<=0&&(this.sprint=!1)):this.stamina=Math.min(this.maxStamina,this.stamina+this.staminaRegenRate*e);const h=this.stamina/this.maxStamina*100;if(this.frameCount=(this.frameCount||0)+1,this.frameCount%3===0){const u=document.querySelector(".stamina-bar");u&&(u.style.width=`${h}%`,l&&o?u.classList.add("recovering"):u.classList.remove("recovering"));const p=document.getElementById("stamina-percentage");p&&(p.textContent=`${Math.floor(h)}%`)}if(this.infection=Math.min(this.maxInfection,this.infection+this.infectionRate*e),this.frameCount%5===0){const u=document.getElementById("infection");u&&(u.textContent=`Infection: ${Math.floor(this.infection)}%`);const p=document.getElementById("infection-overlay");if(p&&(this.infection>90?(p.classList.add("critical-flicker"),p.classList.remove("severe-flicker"),u&&(u.style.color="#ff0000",u.style.fontWeight="bold")):this.infection>75?(p.classList.add("severe-flicker"),p.classList.remove("critical-flicker"),u&&(u.style.color="#ff6600",u.style.fontWeight="bold")):(p.classList.remove("severe-flicker"),p.classList.remove("critical-flicker"),u&&(u.style.color="",u.style.fontWeight=""))),this.infection>0){const a=document.getElementById("infection-overlay");this.infection>=75?a.className="infection-overlay critical":this.infection>=50?a.className="infection-overlay severe":this.infection>=25?a.className="infection-overlay moderate":a.className="infection-overlay mild"}}return this.infection>=this.maxInfection?"infected":null}takeDamage(e){this.health=Math.max(0,this.health-e);const t=this.health/this.maxHealth*100;document.querySelector(".health-bar").style.width=`${t}%`;const n=document.getElementById("health-percentage");n&&(n.textContent=`${Math.floor(t)}%`);const i=document.querySelector(".health-bar");return i&&(t<30?i.classList.add("low"):i.classList.remove("low")),this.soundManager&&this.soundManager.play("playerHurt"),this.shakeCamera(.5,.5),this.health<=0}heal(e){this.health=Math.min(this.maxHealth,this.health+e);const t=this.health/this.maxHealth*100;document.querySelector(".health-bar").style.width=`${t}%`;const n=document.getElementById("health-percentage");n&&(n.textContent=`${Math.floor(t)}%`);const i=document.querySelector(".health-bar");i&&t>=30&&i.classList.remove("low")}reduceInfection(e){this.infection=Math.max(0,this.infection-e),document.getElementById("infection").textContent=`Infection: ${Math.floor(this.infection)}%`;const t=document.getElementById("infection-overlay");this.infection>=75?t.className="infection-overlay critical":this.infection>=50?t.className="infection-overlay high":this.infection>=25?t.className="infection-overlay medium":this.infection>0?t.className="infection-overlay low":t.className="infection-overlay"}shakeCamera(e,t){const n=this.camera.position.clone(),i=Date.now(),r=()=>{const o=(Date.now()-i)/1e3;if(o<t){const l=e*(1-o/t);this.camera.position.x=n.x+(Math.random()-.5)*l,this.camera.position.y=n.y+(Math.random()-.5)*l,this.camera.position.z=n.z+(Math.random()-.5)*l,requestAnimationFrame(r)}else this.camera.position.copy(n)};r()}getPosition(){return this.controls.object.position}getDirection(){return new P(0,0,-1).applyQuaternion(this.camera.quaternion)}lock(){this.controls.isLocked||(console.log("[DEBUG] Requesting pointer lock"),this.domElement&&document.activeElement!==this.domElement&&this.domElement.focus(),setTimeout(()=>{try{console.log("[DEBUG] Actually calling lock() on controls"),this.controls.lock(),!this.controls.isLocked&&this.domElement.requestPointerLock&&(console.log("[DEBUG] Fallback: directly calling requestPointerLock"),this.domElement.requestPointerLock())}catch(e){console.error("[DEBUG] Error locking controls:",e),this.domElement.requestPointerLock&&(console.log("[DEBUG] Trying fallback after error"),this.domElement.requestPointerLock())}},100))}unlock(e=!1){if(this.controls.isLocked){console.log("[DEBUG] Releasing pointer lock"+(e?" for interaction":""));try{this.controls.unlock(),e&&(this._isInteractionUnlock=!0)}catch(t){console.error("[DEBUG] Error unlocking controls:",t)}}}isLocked(){return this.controls.isLocked}addEventListener(e,t){this.controls.addEventListener(e,t)}reset(){this.health=this.maxHealth,this.stamina=this.maxStamina,this.infection=0,document.querySelector(".health-bar").style.width="100%",document.querySelector(".health-bar").classList.remove("low");const e=document.getElementById("health-percentage");e&&(e.textContent="100%"),document.querySelector(".stamina-bar").style.width="100%",document.querySelector(".stamina-bar").classList.remove("recovering");const t=document.getElementById("stamina-percentage");t&&(t.textContent="100%"),document.getElementById("infection").textContent="Infection: 0%",document.getElementById("infection-overlay").className="infection-overlay",this.velocity.set(0,0,0),this.moveForward=!1,this.moveBackward=!1,this.moveLeft=!1,this.moveRight=!1,this.sprint=!1}}class Kp{constructor(e,t){this.width=e,this.height=t,this.grid=[],this.init()}init(){for(let e=0;e<this.height;e++){this.grid[e]=[];for(let t=0;t<this.width;t++)this.grid[e][t]=1}}generate(){const e=Math.floor(Math.random()*Math.floor(this.width/2))*2+1,t=Math.floor(Math.random()*Math.floor(this.height/2))*2+1;this.grid[t][e]=0,this.carve(e,t);for(let n=0;n<this.width;n++)this.grid[0][n]=1,this.grid[this.height-1][n]=1;for(let n=0;n<this.height;n++)this.grid[n][0]=1,this.grid[n][this.width-1]=1;return this.grid[1][1]=0,this.grid[this.height-2][this.width-2]=0,this.grid}carve(e,t){const n=[[1,0],[0,1],[-1,0],[0,-1]];this.shuffleArray(n);for(let i=0;i<n.length;i++){const[r,o]=n[i],l=e+r*2,h=t+o*2;l>0&&l<this.width-1&&h>0&&h<this.height-1&&this.grid[h][l]===1&&(this.grid[t+o][e+r]=0,this.grid[h][l]=0,this.carve(l,h))}}shuffleArray(e){for(let t=e.length-1;t>0;t--){const n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}return e}}class $p{constructor(e,t=null){this.scene=e,this.mazeSize=21,this.cellSize=4,this.wallHeight=5,this.loadingManager=t,this.walls=new Ht,this.keys=[],this.portal=null,this.keyCount=5,this.maze=null,this.textureLoader=t?new ai(t):new ai,this.textureLoader.crossOrigin="anonymous",this.isDaytime=!0,this.timeOfDay=.2,this.dayDuration=300,this.dayStartTime=Date.now(),this.isRaining=!0,this.fogDensity=.08,this.rainIntensity=.5,this.trees=[],this.rocks=[],this.vines=[],this.raindrops=[],this.dynamicWalls=[],this.dynamicWallsTimer=0,this.dynamicWallChangeInterval=30,this.collectionEffectsQueue=[],this.initialize()}initialize(){this.scene.fog=new la(3487040,this.fogDensity*.6),this.globalAmbient=new Ja(16777215,1.2),this.scene.add(this.globalAmbient),this.createGround();const e=new Kp(this.mazeSize,this.mazeSize);this.maze=e.generate(),this.markDynamicWalls(),this.createWalls(),this.scene.add(this.walls),this.createKeys(),this.createPortal(),this.createSkybox(),this.addEnvironmentalDetails(),this.setupNightLighting()}createGround(){const e=this.mazeSize*this.cellSize*1.5,t=new xi(e,e,32,32),n=new rt({color:3355443,roughness:.9,metalness:.1});this.textureLoader.load("https://threejs.org/examples/textures/terrain/grasslight-big.jpg",i=>{i.wrapS=i.wrapT=Ii,i.repeat.set(this.mazeSize,this.mazeSize),i.anisotropy=16;const r=new rt({map:i,roughness:.8,metalness:.1,color:4473924}),o=new Ue(t,r);o.rotation.x=-Math.PI/2,o.receiveShadow=!0,this.scene.add(o),(this.loadingManager?new ai(this.loadingManager):new ai).load("https://threejs.org/examples/textures/terrain/grasslight-big-nm.jpg",h=>{r.displacementMap=h,r.displacementScale=.3,r.needsUpdate=!0})},void 0,i=>{console.error("Error loading ground texture:",i);const r=new Ue(t,n);r.rotation.x=-Math.PI/2,r.receiveShadow=!0,this.scene.add(r)})}createWalls(){const e=new rt({color:3355443,roughness:.8,metalness:.2});this.textureLoader.load("https://threejs.org/examples/textures/brick_diffuse.jpg",t=>{t.wrapS=t.wrapT=Ii,t.repeat.set(1,2),(this.loadingManager?new ai(this.loadingManager):new ai).load("https://threejs.org/examples/textures/brick_bump.jpg",i=>{const r=new rt({map:t,bumpMap:i,bumpScale:.2,roughness:.8,metalness:.2,color:4473924});this.createWallMeshes(r)})},void 0,t=>{console.error("Error loading wall texture:",t),this.createWallMeshes(e)})}createWallMeshes(e){const t=new $t(this.cellSize,this.wallHeight,this.cellSize);for(let n=0;n<this.mazeSize;n++)for(let i=0;i<this.mazeSize;i++)if(this.maze[n][i]===1){const r=new Ue(t,e);if(r.position.set((i-this.mazeSize/2)*this.cellSize,this.wallHeight/2,(n-this.mazeSize/2)*this.cellSize),r.castShadow=!0,r.receiveShadow=!0,this.dynamicWalls.some(l=>l.i===n&&l.j===i)){r.userData.isDynamic=!0,r.userData.originalPosition={x:r.position.x,y:r.position.y,z:r.position.z},r.userData.gridPosition={x:i,z:n},r.userData.originalGridPosition={x:i,z:n};const l=e.clone();l.color.set(5592405),l.emissive.set(1118481),r.material=l,this.animateDynamicWall(r)}this.walls.add(r)}this.addMossToWalls()}addMossToWalls(){const e=new xi(this.cellSize*.8,this.wallHeight*.4),t=new De(2969374),n=new rt({color:t,roughness:1,metalness:0,transparent:!0,opacity:.9,side:kt});this.walls.children.forEach((i,r)=>{if(Math.random()>.85){const o=new Ue(e,n),l=Math.floor(Math.random()*4),h=(Math.random()*.6-.3)*this.wallHeight;switch(l){case 0:o.position.set(0,h,this.cellSize/2+.05);break;case 1:o.position.set(0,h,-this.cellSize/2-.05),o.rotation.y=Math.PI;break;case 2:o.position.set(-this.cellSize/2-.05,h,0),o.rotation.y=-Math.PI/2;break;case 3:o.position.set(this.cellSize/2+.05,h,0),o.rotation.y=Math.PI/2;break}i.add(o),this.vines.push(o)}})}markDynamicWalls(){const e=[];for(let n=2;n<this.mazeSize-2;n++)for(let i=2;i<this.mazeSize-2;i++)if(this.maze[n][i]===1){let r=0;this.maze[n-1][i]===1&&r++,this.maze[n+1][i]===1&&r++,this.maze[n][i-1]===1&&r++,this.maze[n][i+1]===1&&r++,r<3&&e.push({i:n,j:i})}const t=Math.floor(e.length*.1);for(let n=0;n<t;n++){const i=Math.floor(Math.random()*e.length);this.dynamicWalls.push(e[i]),e.splice(i,1)}}animateDynamicWall(e){const t=e.position.y,n=Math.random()*Math.PI*2,i=.1,r=.5+Math.random()*.5;e.userData.animate=function(o){e.position.y=t+Math.sin(o*r+n)*i}}updateDynamicWalls(e){e<=0||(this.dynamicWallsTimer+=e,this.dynamicWallsTimer>this.dynamicWallChangeInterval&&(this.dynamicWallsTimer=0,this.timeOfDay<.3&&this.walls.children.forEach(t=>{if(t.userData.isDynamic)if(Math.random()>.5){if(t.userData.gridPosition){const l=t.userData.gridPosition;this.maze[l.z][l.x]=0}const n=Math.floor(Math.random()*4),i=this.cellSize;switch(n){case 0:t.position.z-=i;break;case 1:t.position.z+=i;break;case 2:t.position.x-=i;break;case 3:t.position.x+=i;break}const r=Math.floor((t.position.x+this.mazeSize*this.cellSize/2)/this.cellSize),o=Math.floor((t.position.z+this.mazeSize*this.cellSize/2)/this.cellSize);t.userData.gridPosition={x:r,z:o},r>=0&&r<this.mazeSize&&o>=0&&o<this.mazeSize&&(this.maze[o][r]=1)}else{const n=t.userData.originalPosition;if(t.position.set(n.x,n.y,n.z),t.userData.originalGridPosition){const i=t.userData.originalGridPosition;this.maze[i.z][i.x]=1,t.userData.gridPosition={...i}}}})))}createKeys(){const e=[];for(let n=1;n<this.mazeSize-1;n++)for(let i=1;i<this.mazeSize-1;i++)if(this.maze[n][i]===0){if(n===1&&i===1||n===this.mazeSize-2&&i===this.mazeSize-2)continue;e.push({x:i,z:n})}this.shuffleArray(e);const t=e.slice(0,this.keyCount);for(let n=0;n<t.length;n++){const i=t[n];this.createSerumVial((i.x-this.mazeSize/2)*this.cellSize,1,(i.z-this.mazeSize/2)*this.cellSize)}}createSerumVial(e,t,n){const i=new Ht,r=new Vt(.3,.3,.8,16),o=new Oc({color:16777215,transparent:!0,opacity:.3,roughness:.1,metalness:.1,clearcoat:1,clearcoatRoughness:.1,transmission:.9}),l=new Ue(r,o);i.add(l);const h=new Vt(.2,.2,.6,16),u=new rt({color:30719,transparent:!0,opacity:.8,emissive:17595,emissiveIntensity:.5,roughness:.3}),p=new Ue(h,u);p.position.y=-.05,i.add(p);const a=new Vt(.32,.32,.1,16),c=new rt({color:8947848,metalness:.8,roughness:.2}),d=new Ue(a,c);d.position.y=.45,i.add(d);const g=new on(26367,2,2);g.position.set(0,0,0),i.add(g),i.position.set(e,t,n),i.userData={floatOffset:Math.random()*Math.PI*2,rotationSpeed:.5+Math.random()*.5,collected:!1},this.scene.add(i),this.keys.push(i)}createPortal(){const e=new Ht,t=new ua(1.5,.2,16,32),n=new rt({color:3355443,metalness:.8,roughness:.2,emissive:2236962,emissiveIntensity:.2}),i=new Ue(t,n);e.add(i);const r=new ws(1.3,32),o=new an({color:43588,side:kt,transparent:!0,opacity:.7});this.portal=new Ue(r,o),e.add(this.portal);const l=new pt,h=200,u=new Float32Array(h*3);for(let d=0;d<h*3;d++){const g=Math.random()*Math.PI*2,_=Math.random()*1.3;u[d*3]=Math.cos(g)*_,u[d*3+1]=Math.sin(g)*_,u[d*3+2]=(Math.random()-.5)*.1}l.setAttribute("position",new St(u,3));const p=new hi({size:.05,color:65382,transparent:!0,blending:Bn}),a=new Di(l,p);e.add(a);const c=new on(65382,2,10);c.position.set(0,0,.5),e.add(c),e.position.set((this.mazeSize-2-this.mazeSize/2)*this.cellSize,1.5,(this.mazeSize-2-this.mazeSize/2)*this.cellSize),e.rotation.x=Math.PI/2,this.scene.add(e),this.portalGroup=e}createSkybox(){const e=new un(500,32,32);this.daySkyMaterial=new an({color:8900331,side:mt,fog:!1}),this.nightSkyMaterial=new an({color:657940,side:mt,fog:!1}),this.eveningSkyMaterial=new an({color:13922125,side:mt,fog:!1}),this.skybox=new Ue(e,this.eveningSkyMaterial),this.scene.add(this.skybox),this.addStars()}addStars(){const e=new pt,t=1e3,n=new Float32Array(t*3);for(let r=0;r<t*3;r+=3){const o=Math.random()*Math.PI*2,l=Math.random()*Math.PI,h=490;n[r]=h*Math.sin(l)*Math.cos(o),n[r+1]=h*Math.sin(l)*Math.sin(o),n[r+2]=h*Math.cos(l)}e.setAttribute("position",new St(n,3));const i=new hi({size:1,color:16777215,transparent:!0,opacity:0,blending:Bn});this.stars=new Di(e,i),this.scene.add(this.stars)}setupNightLighting(){this.moonLight=new Wc(8947967,1),this.moonLight.position.set(0,10,-10).normalize(),this.moonLight.castShadow=!0,this.moonLight.shadow.mapSize.width=1024,this.moonLight.shadow.mapSize.height=1024,this.scene.add(this.moonLight),this.nightAmbient=new Ja(5596791,.7),this.scene.add(this.nightAmbient),this.addMazeLights()}addMazeLights(){const e=this.mazeSize*this.cellSize,t=e/3;for(let n=-e/2+t/2;n<=e/2;n+=t)for(let i=-e/2+t/2;i<=e/2;i+=t){const r=new on(13421823,.4,e/2);r.position.set(n,this.wallHeight+2,i),r.castShadow=!1,this.scene.add(r)}}addEnvironmentalDetails(){this.addTrees(),this.addRocks()}addTrees(){const t=this.mazeSize*this.cellSize*.8;for(let n=0;n<50;n++){const i=Math.random()*Math.PI*2,r=t+Math.random()*30,o=Math.cos(i)*r,l=Math.sin(i)*r;this.createTree(o,0,l)}}createTree(e,t,n){const i=new Ht,r=new Vt(.5,.7,5,8),o=new rt({color:5253674,roughness:1,metalness:0}),l=new Ue(r,o);l.position.y=2.5,l.castShadow=!0,i.add(l);const h=new pi(2,6,8),u=new rt({color:927505,roughness:1,metalness:0}),p=new Ue(h,u);p.position.y=7,p.castShadow=!0,i.add(p),i.position.set(e,t,n),i.rotation.y=Math.random()*Math.PI*2;const a=.8+Math.random()*.5;i.scale.set(a,a,a),this.scene.add(i),this.trees.push(i)}addRocks(){const t=[];for(let i=1;i<this.mazeSize-1;i++)for(let r=1;r<this.mazeSize-1;r++)if(this.maze[i][r]===0){let o=!1;for(const l of this.keys){const h=(r-this.mazeSize/2)*this.cellSize,u=(i-this.mazeSize/2)*this.cellSize;if(Math.abs(l.position.x-h)<1&&Math.abs(l.position.z-u)<1){o=!0;break}}o||t.push({x:r,z:i})}this.shuffleArray(t),t.slice(0,40).forEach(i=>{const r=(i.x-this.mazeSize/2)*this.cellSize,o=(i.z-this.mazeSize/2)*this.cellSize;this.createRock(r,0,o)})}createRock(e,t,n){const i=new Ht,r=1+Math.floor(Math.random()*2);for(let o=0;o<r;o++){const l=Math.floor(Math.random()*3);let h;switch(l){case 0:h=new ca((.3+Math.random()*.3)*.5,1);break;case 1:h=new ha((.3+Math.random()*.3)*.5,1);break;case 2:h=new Vt((.4+Math.random()*.3)*.5,(.3+Math.random()*.3)*.5,(.2+Math.random()*.2)*.5,6);break}const u=new rt({color:5592405,roughness:.9,metalness:.1}),p=new Ue(h,u);p.position.set((Math.random()-.5)*.15,Math.random()*.1,(Math.random()-.5)*.15),p.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),p.castShadow=!0,p.receiveShadow=!0,i.add(p)}i.position.set(e,t,n),i.rotation.y=Math.random()*Math.PI*2,this.scene.add(i),this.rocks.push(i)}updateTimeOfDay(e){const t=e%this.dayDuration/this.dayDuration;this.timeOfDay=.35+(Math.sin(t*Math.PI*2)+1)*.075;const n=new De(13922125),i=new De(1710638),r=new De;return r.lerpColors(i,n,this.timeOfDay),this.skybox.material.color.copy(r),this.stars.material.opacity=this.lerpValue(.5,.1,this.timeOfDay),this.fogDensity=.02+this.lerpValue(.02,0,this.timeOfDay),this.scene.fog.density=this.fogDensity,this.scene.fog.color.setHex(1381413),this.moonLight.intensity=.3,this.moonLight.color.setHex(16756812),this.nightAmbient.intensity=.25,this.nightAmbient.color.setHex(5070202),{isNight:!1,isTransitioning:!0}}lerpValue(e,t,n){return e+(t-e)*n}checkWallCollision(e){const i=Math.floor((e.x+this.mazeSize*this.cellSize/2)/this.cellSize),r=Math.floor((e.z+this.mazeSize*this.cellSize/2)/this.cellSize),o=[{x:0,z:0},{x:1,z:0},{x:-1,z:0},{x:0,z:1},{x:0,z:-1},{x:1,z:1},{x:-1,z:1},{x:1,z:-1},{x:-1,z:-1}];for(const l of o){const h=i+l.x,u=r+l.z;if(!(h<0||h>=this.mazeSize||u<0||u>=this.mazeSize)&&this.maze[u][h]===1){const p=(h-this.mazeSize/2)*this.cellSize,a=(u-this.mazeSize/2)*this.cellSize,c=e.x-.5,d=e.x+.5,g=e.z-.5,_=e.z+.5,m=p-this.cellSize/2+.01,f=p+this.cellSize/2-.01,y=a-this.cellSize/2+.01,T=a+this.cellSize/2-.01;if(d>m&&c<f&&_>y&&g<T)return!0}}if(this.walls&&this.walls.children&&this.walls.children.length>0)for(let l=0;l<this.walls.children.length;l++){const h=this.walls.children[l];if(!h.userData.isDynamic)continue;const u=Math.abs(e.x-h.position.x),p=Math.abs(e.z-h.position.z);if(u>this.cellSize||p>this.cellSize)continue;const a=e.x-.5,c=e.x+.5,d=e.z-.5,g=e.z+.5,_=h.position.x-this.cellSize/2+.01,m=h.position.x+this.cellSize/2-.01,f=h.position.z-this.cellSize/2+.01,y=h.position.z+this.cellSize/2-.01;if(c>_&&a<m&&g>f&&d<y)return!0}return!1}checkKeyCollection(e){if(window.performance&&window.performance.now){const l=window.performance.now();if(this._lastKeyCheck&&l-this._lastKeyCheck<50)return!1;this._lastKeyCheck=l}const t=e.x,n=e.z,i=2,r=Math.min(2,this.keys.length),o=this.frameCount%this.keys.length;for(let l=0;l<r;l++){const h=(o+l)%this.keys.length,u=this.keys[h];if(u.userData.collected)continue;const p=Math.abs(t-u.position.x),a=Math.abs(n-u.position.z);if(p<i&&a<i){const c=t-u.position.x,d=n-u.position.z;if(c*c+d*d<2.25)return u.userData.collected=!0,u.visible=!1,u.children.forEach(m=>{m instanceof on&&(m.intensity=0)}),this.collectionEffectsQueue.length<2?this.collectionEffectsQueue.push({key:u,position:u.position.clone(),time:performance.now(),processed:!1}):this.collectionEffectsQueue.push({key:u,position:u.position.clone(),time:performance.now(),processed:!1,reducedEffects:!0}),!0}}return!1}checkExit(e,t){if(t>=3){const i=this.portalGroup?this.portalGroup.position:this.portal.position,r=e.distanceTo(i);return r<6&&(console.log(`Near exit portal! Distance: ${r.toFixed(2)}, need to be closer than 4.0`),console.log(`Serum collected: ${t}/3 required`)),r<4}return!1}resetKeys(){this.keys.forEach(e=>{e.visible=!0})}processCollectionEffects(){if(this.collectionEffectsQueue.length===0)return;const e=this.collectionEffectsQueue[0];if(e.processed){this.collectionEffectsQueue.shift();return}if(e.processed=!0,e.key&&e.key.position){const t=new on(43775,5,8);t.position.copy(e.key.position),t.userData={creationTime:Date.now(),lifetime:500,isFlash:!0},this.scene.add(t),this.collectionParticles||(this.collectionParticles=[]),this.collectionParticles.push(t);const n=20,i=new pt,r=new hi({color:30719,size:.15,transparent:!0,opacity:.9,blending:Bn}),o=new Float32Array(n*3);for(let f=0;f<n;f++){const y=Math.random()*Math.PI*2,T=Math.random()*Math.PI,x=.2+Math.random()*.2;o[f*3]=e.key.position.x+x*Math.sin(T)*Math.cos(y),o[f*3+1]=e.key.position.y+x*Math.sin(T)*Math.sin(y),o[f*3+2]=e.key.position.z+x*Math.cos(T)}i.setAttribute("position",new St(o,3));const l=new Di(i,r);l.userData={creationTime:Date.now(),lifetime:1e3,velocities:new Float32Array(n*3),type:"burst"};for(let f=0;f<n;f++){const y=new P(o[f*3]-e.key.position.x,o[f*3+1]-e.key.position.y,o[f*3+2]-e.key.position.z).normalize(),T=.8+Math.random()*.8;l.userData.velocities[f*3]=y.x*T,l.userData.velocities[f*3+1]=y.y*T+.3,l.userData.velocities[f*3+2]=y.z*T}this.scene.add(l),this.collectionParticles.push(l);const h=15,u=new pt,p=new hi({color:56831,size:.1,transparent:!0,opacity:.7,blending:Bn}),a=new Float32Array(h*3);for(let f=0;f<h;f++){const y=f/h*Math.PI*2,T=.3,x=f*.05;a[f*3]=e.key.position.x+Math.cos(y)*T,a[f*3+1]=e.key.position.y+x,a[f*3+2]=e.key.position.z+Math.sin(y)*T}u.setAttribute("position",new St(a,3));const c=new Di(u,p);c.userData={creationTime:Date.now(),lifetime:1200,velocities:new Float32Array(h*3),angles:new Float32Array(h),radii:new Float32Array(h),type:"spiral"};for(let f=0;f<h;f++)c.userData.angles[f]=f/h*Math.PI*2,c.userData.radii[f]=.2+f/h*.3,c.userData.velocities[f*3+1]=.2+Math.random()*.2;this.scene.add(c),this.collectionParticles.push(c);const d=new un(.1,8,8),g=new an({color:35071,transparent:!0,opacity:.7}),_=new Ue(d,g);_.position.copy(e.key.position),_.userData={creationTime:Date.now(),lifetime:800,type:"sphere",initialScale:.1,targetScale:1.5},this.scene.add(_),this.collectionParticles.push(_),window.soundManager?window.soundManager.play("serumCollect"):window.gameInstance&&window.gameInstance.soundManager&&window.gameInstance.soundManager.play("serumCollect");const m=document.getElementById("serum-counter");m&&(m.classList.add("flash-effect"),setTimeout(()=>{m.classList.remove("flash-effect")},500))}}cleanupParticleEffects(){if(!this.collectionParticles||this.collectionParticles.length===0)return;const e=Date.now();for(let t=this.collectionParticles.length-1;t>=0;t--){const n=this.collectionParticles[t],i=e-n.userData.creationTime;if(i>n.userData.lifetime)this.scene.remove(n),n.geometry&&n.geometry.dispose(),n.material&&(Array.isArray(n.material)?n.material.forEach(r=>r.dispose()):n.material.dispose()),this.collectionParticles.splice(t,1);else{const r=i/n.userData.lifetime,o=1-r;if(n.userData.type==="burst"){if(n.geometry&&n.userData.velocities){const l=n.geometry.attributes.position.array,h=n.userData.velocities;for(let u=0;u<l.length/3;u++)l[u*3]+=h[u*3]*.016,l[u*3+1]+=h[u*3+1]*.016,l[u*3+2]+=h[u*3+2]*.016,h[u*3+1]-=.01;n.geometry.attributes.position.needsUpdate=!0}n.material&&(n.material.opacity=o*.9,n.material.size=.15*(1-r*.5))}else if(n.userData.type==="spiral"){if(n.geometry&&n.userData.angles&&n.userData.radii){const l=n.geometry.attributes.position.array,h=n.userData.velocities,u=n.userData.angles,p=n.userData.radii;for(let a=0;a<l.length/3;a++){u[a]+=.1,p[a]+=.02;const c=l[a*3]-Math.cos(u[a]-.1)*(p[a]-.02),d=l[a*3+2]-Math.sin(u[a]-.1)*(p[a]-.02);l[a*3]=c+Math.cos(u[a])*p[a],l[a*3+1]+=h[a*3+1]*.016,l[a*3+2]=d+Math.sin(u[a])*p[a]}n.geometry.attributes.position.needsUpdate=!0}n.material&&(n.material.opacity=o*.7)}else if(n.userData.type==="sphere"){const l=n.userData.initialScale+(n.userData.targetScale-n.userData.initialScale)*r;n.scale.set(l,l,l),n.material&&(n.material.opacity=o*.7)}else n.userData.isFlash&&(n.intensity=5*(1-r))}}}update(e,t=!1){if(this.frameCount=(this.frameCount||0)+1,this.frameCount%2===0&&!t&&this.keys.forEach(n=>{n.visible&&(n.rotation.z+=e*2)}),this.processCollectionEffects(),this.cleanupParticleEffects(),this.portal&&this.frameCount%2===0&&!t&&(this.portal.rotation.z+=e*.5),this.frameCount%3===0&&!t){const n=performance.now()*.001;this.walls.children.forEach(i=>{i.userData.isDynamic&&i.userData.animate&&i.userData.animate(n)})}t||this.updateDynamicWalls(e)}shuffleArray(e){for(let t=e.length-1;t>0;t--){const n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}return e}getKeyPositions(){return this.keys.filter(e=>!e.userData.collected).map(e=>e.position)}getExitPosition(){return this.portalGroup?this.portalGroup.position:new P((this.mazeSize-2-this.mazeSize/2)*this.cellSize,1.5,(this.mazeSize-2-this.mazeSize/2)*this.cellSize)}}var Pi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},cr={};/*!
 *  howler.js v2.2.4
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */var Io;function Zp(){return Io||(Io=1,function(s){(function(){var e=function(){this.init()};e.prototype={init:function(){var a=this||t;return a._counter=1e3,a._html5AudioPool=[],a.html5PoolSize=10,a._codecs={},a._howls=[],a._muted=!1,a._volume=1,a._canPlayEvent="canplaythrough",a._navigator=typeof window<"u"&&window.navigator?window.navigator:null,a.masterGain=null,a.noAudio=!1,a.usingWebAudio=!0,a.autoSuspend=!0,a.ctx=null,a.autoUnlock=!0,a._setup(),a},volume:function(a){var c=this||t;if(a=parseFloat(a),c.ctx||p(),typeof a<"u"&&a>=0&&a<=1){if(c._volume=a,c._muted)return c;c.usingWebAudio&&c.masterGain.gain.setValueAtTime(a,t.ctx.currentTime);for(var d=0;d<c._howls.length;d++)if(!c._howls[d]._webAudio)for(var g=c._howls[d]._getSoundIds(),_=0;_<g.length;_++){var m=c._howls[d]._soundById(g[_]);m&&m._node&&(m._node.volume=m._volume*a)}return c}return c._volume},mute:function(a){var c=this||t;c.ctx||p(),c._muted=a,c.usingWebAudio&&c.masterGain.gain.setValueAtTime(a?0:c._volume,t.ctx.currentTime);for(var d=0;d<c._howls.length;d++)if(!c._howls[d]._webAudio)for(var g=c._howls[d]._getSoundIds(),_=0;_<g.length;_++){var m=c._howls[d]._soundById(g[_]);m&&m._node&&(m._node.muted=a?!0:m._muted)}return c},stop:function(){for(var a=this||t,c=0;c<a._howls.length;c++)a._howls[c].stop();return a},unload:function(){for(var a=this||t,c=a._howls.length-1;c>=0;c--)a._howls[c].unload();return a.usingWebAudio&&a.ctx&&typeof a.ctx.close<"u"&&(a.ctx.close(),a.ctx=null,p()),a},codecs:function(a){return(this||t)._codecs[a.replace(/^x-/,"")]},_setup:function(){var a=this||t;if(a.state=a.ctx&&a.ctx.state||"suspended",a._autoSuspend(),!a.usingWebAudio)if(typeof Audio<"u")try{var c=new Audio;typeof c.oncanplaythrough>"u"&&(a._canPlayEvent="canplay")}catch{a.noAudio=!0}else a.noAudio=!0;try{var c=new Audio;c.muted&&(a.noAudio=!0)}catch{}return a.noAudio||a._setupCodecs(),a},_setupCodecs:function(){var a=this||t,c=null;try{c=typeof Audio<"u"?new Audio:null}catch{return a}if(!c||typeof c.canPlayType!="function")return a;var d=c.canPlayType("audio/mpeg;").replace(/^no$/,""),g=a._navigator?a._navigator.userAgent:"",_=g.match(/OPR\/(\d+)/g),m=_&&parseInt(_[0].split("/")[1],10)<33,f=g.indexOf("Safari")!==-1&&g.indexOf("Chrome")===-1,y=g.match(/Version\/(.*?) /),T=f&&y&&parseInt(y[1],10)<15;return a._codecs={mp3:!!(!m&&(d||c.canPlayType("audio/mp3;").replace(/^no$/,""))),mpeg:!!d,opus:!!c.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,""),ogg:!!c.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),oga:!!c.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),wav:!!(c.canPlayType('audio/wav; codecs="1"')||c.canPlayType("audio/wav")).replace(/^no$/,""),aac:!!c.canPlayType("audio/aac;").replace(/^no$/,""),caf:!!c.canPlayType("audio/x-caf;").replace(/^no$/,""),m4a:!!(c.canPlayType("audio/x-m4a;")||c.canPlayType("audio/m4a;")||c.canPlayType("audio/aac;")).replace(/^no$/,""),m4b:!!(c.canPlayType("audio/x-m4b;")||c.canPlayType("audio/m4b;")||c.canPlayType("audio/aac;")).replace(/^no$/,""),mp4:!!(c.canPlayType("audio/x-mp4;")||c.canPlayType("audio/mp4;")||c.canPlayType("audio/aac;")).replace(/^no$/,""),weba:!!(!T&&c.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),webm:!!(!T&&c.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),dolby:!!c.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/,""),flac:!!(c.canPlayType("audio/x-flac;")||c.canPlayType("audio/flac;")).replace(/^no$/,"")},a},_unlockAudio:function(){var a=this||t;if(!(a._audioUnlocked||!a.ctx)){a._audioUnlocked=!1,a.autoUnlock=!1,!a._mobileUnloaded&&a.ctx.sampleRate!==44100&&(a._mobileUnloaded=!0,a.unload()),a._scratchBuffer=a.ctx.createBuffer(1,1,22050);var c=function(d){for(;a._html5AudioPool.length<a.html5PoolSize;)try{var g=new Audio;g._unlocked=!0,a._releaseHtml5Audio(g)}catch{a.noAudio=!0;break}for(var _=0;_<a._howls.length;_++)if(!a._howls[_]._webAudio)for(var m=a._howls[_]._getSoundIds(),f=0;f<m.length;f++){var y=a._howls[_]._soundById(m[f]);y&&y._node&&!y._node._unlocked&&(y._node._unlocked=!0,y._node.load())}a._autoResume();var T=a.ctx.createBufferSource();T.buffer=a._scratchBuffer,T.connect(a.ctx.destination),typeof T.start>"u"?T.noteOn(0):T.start(0),typeof a.ctx.resume=="function"&&a.ctx.resume(),T.onended=function(){T.disconnect(0),a._audioUnlocked=!0,document.removeEventListener("touchstart",c,!0),document.removeEventListener("touchend",c,!0),document.removeEventListener("click",c,!0),document.removeEventListener("keydown",c,!0);for(var x=0;x<a._howls.length;x++)a._howls[x]._emit("unlock")}};return document.addEventListener("touchstart",c,!0),document.addEventListener("touchend",c,!0),document.addEventListener("click",c,!0),document.addEventListener("keydown",c,!0),a}},_obtainHtml5Audio:function(){var a=this||t;if(a._html5AudioPool.length)return a._html5AudioPool.pop();var c=new Audio().play();return c&&typeof Promise<"u"&&(c instanceof Promise||typeof c.then=="function")&&c.catch(function(){console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")}),new Audio},_releaseHtml5Audio:function(a){var c=this||t;return a._unlocked&&c._html5AudioPool.push(a),c},_autoSuspend:function(){var a=this;if(!(!a.autoSuspend||!a.ctx||typeof a.ctx.suspend>"u"||!t.usingWebAudio)){for(var c=0;c<a._howls.length;c++)if(a._howls[c]._webAudio){for(var d=0;d<a._howls[c]._sounds.length;d++)if(!a._howls[c]._sounds[d]._paused)return a}return a._suspendTimer&&clearTimeout(a._suspendTimer),a._suspendTimer=setTimeout(function(){if(a.autoSuspend){a._suspendTimer=null,a.state="suspending";var g=function(){a.state="suspended",a._resumeAfterSuspend&&(delete a._resumeAfterSuspend,a._autoResume())};a.ctx.suspend().then(g,g)}},3e4),a}},_autoResume:function(){var a=this;if(!(!a.ctx||typeof a.ctx.resume>"u"||!t.usingWebAudio))return a.state==="running"&&a.ctx.state!=="interrupted"&&a._suspendTimer?(clearTimeout(a._suspendTimer),a._suspendTimer=null):a.state==="suspended"||a.state==="running"&&a.ctx.state==="interrupted"?(a.ctx.resume().then(function(){a.state="running";for(var c=0;c<a._howls.length;c++)a._howls[c]._emit("resume")}),a._suspendTimer&&(clearTimeout(a._suspendTimer),a._suspendTimer=null)):a.state==="suspending"&&(a._resumeAfterSuspend=!0),a}};var t=new e,n=function(a){var c=this;if(!a.src||a.src.length===0){console.error("An array of source files must be passed with any new Howl.");return}c.init(a)};n.prototype={init:function(a){var c=this;return t.ctx||p(),c._autoplay=a.autoplay||!1,c._format=typeof a.format!="string"?a.format:[a.format],c._html5=a.html5||!1,c._muted=a.mute||!1,c._loop=a.loop||!1,c._pool=a.pool||5,c._preload=typeof a.preload=="boolean"||a.preload==="metadata"?a.preload:!0,c._rate=a.rate||1,c._sprite=a.sprite||{},c._src=typeof a.src!="string"?a.src:[a.src],c._volume=a.volume!==void 0?a.volume:1,c._xhr={method:a.xhr&&a.xhr.method?a.xhr.method:"GET",headers:a.xhr&&a.xhr.headers?a.xhr.headers:null,withCredentials:a.xhr&&a.xhr.withCredentials?a.xhr.withCredentials:!1},c._duration=0,c._state="unloaded",c._sounds=[],c._endTimers={},c._queue=[],c._playLock=!1,c._onend=a.onend?[{fn:a.onend}]:[],c._onfade=a.onfade?[{fn:a.onfade}]:[],c._onload=a.onload?[{fn:a.onload}]:[],c._onloaderror=a.onloaderror?[{fn:a.onloaderror}]:[],c._onplayerror=a.onplayerror?[{fn:a.onplayerror}]:[],c._onpause=a.onpause?[{fn:a.onpause}]:[],c._onplay=a.onplay?[{fn:a.onplay}]:[],c._onstop=a.onstop?[{fn:a.onstop}]:[],c._onmute=a.onmute?[{fn:a.onmute}]:[],c._onvolume=a.onvolume?[{fn:a.onvolume}]:[],c._onrate=a.onrate?[{fn:a.onrate}]:[],c._onseek=a.onseek?[{fn:a.onseek}]:[],c._onunlock=a.onunlock?[{fn:a.onunlock}]:[],c._onresume=[],c._webAudio=t.usingWebAudio&&!c._html5,typeof t.ctx<"u"&&t.ctx&&t.autoUnlock&&t._unlockAudio(),t._howls.push(c),c._autoplay&&c._queue.push({event:"play",action:function(){c.play()}}),c._preload&&c._preload!=="none"&&c.load(),c},load:function(){var a=this,c=null;if(t.noAudio){a._emit("loaderror",null,"No audio support.");return}typeof a._src=="string"&&(a._src=[a._src]);for(var d=0;d<a._src.length;d++){var g,_;if(a._format&&a._format[d])g=a._format[d];else{if(_=a._src[d],typeof _!="string"){a._emit("loaderror",null,"Non-string found in selected audio sources - ignoring.");continue}g=/^data:audio\/([^;,]+);/i.exec(_),g||(g=/\.([^.]+)$/.exec(_.split("?",1)[0])),g&&(g=g[1].toLowerCase())}if(g||console.warn('No file extension was found. Consider using the "format" property or specify an extension.'),g&&t.codecs(g)){c=a._src[d];break}}if(!c){a._emit("loaderror",null,"No codec support for selected audio sources.");return}return a._src=c,a._state="loading",window.location.protocol==="https:"&&c.slice(0,5)==="http:"&&(a._html5=!0,a._webAudio=!1),new i(a),a._webAudio&&o(a),a},play:function(a,c){var d=this,g=null;if(typeof a=="number")g=a,a=null;else{if(typeof a=="string"&&d._state==="loaded"&&!d._sprite[a])return null;if(typeof a>"u"&&(a="__default",!d._playLock)){for(var _=0,m=0;m<d._sounds.length;m++)d._sounds[m]._paused&&!d._sounds[m]._ended&&(_++,g=d._sounds[m]._id);_===1?a=null:g=null}}var f=g?d._soundById(g):d._inactiveSound();if(!f)return null;if(g&&!a&&(a=f._sprite||"__default"),d._state!=="loaded"){f._sprite=a,f._ended=!1;var y=f._id;return d._queue.push({event:"play",action:function(){d.play(y)}}),y}if(g&&!f._paused)return c||d._loadQueue("play"),f._id;d._webAudio&&t._autoResume();var T=Math.max(0,f._seek>0?f._seek:d._sprite[a][0]/1e3),x=Math.max(0,(d._sprite[a][0]+d._sprite[a][1])/1e3-T),D=x*1e3/Math.abs(f._rate),A=d._sprite[a][0]/1e3,w=(d._sprite[a][0]+d._sprite[a][1])/1e3;f._sprite=a,f._ended=!1;var L=function(){f._paused=!1,f._seek=T,f._start=A,f._stop=w,f._loop=!!(f._loop||d._sprite[a][2])};if(T>=w){d._ended(f);return}var S=f._node;if(d._webAudio){var M=function(){d._playLock=!1,L(),d._refreshBuffer(f);var V=f._muted||d._muted?0:f._volume;S.gain.setValueAtTime(V,t.ctx.currentTime),f._playStart=t.ctx.currentTime,typeof S.bufferSource.start>"u"?f._loop?S.bufferSource.noteGrainOn(0,T,86400):S.bufferSource.noteGrainOn(0,T,x):f._loop?S.bufferSource.start(0,T,86400):S.bufferSource.start(0,T,x),D!==1/0&&(d._endTimers[f._id]=setTimeout(d._ended.bind(d,f),D)),c||setTimeout(function(){d._emit("play",f._id),d._loadQueue()},0)};t.state==="running"&&t.ctx.state!=="interrupted"?M():(d._playLock=!0,d.once("resume",M),d._clearTimer(f._id))}else{var C=function(){S.currentTime=T,S.muted=f._muted||d._muted||t._muted||S.muted,S.volume=f._volume*t.volume(),S.playbackRate=f._rate;try{var V=S.play();if(V&&typeof Promise<"u"&&(V instanceof Promise||typeof V.then=="function")?(d._playLock=!0,L(),V.then(function(){d._playLock=!1,S._unlocked=!0,c?d._loadQueue():d._emit("play",f._id)}).catch(function(){d._playLock=!1,d._emit("playerror",f._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."),f._ended=!0,f._paused=!0})):c||(d._playLock=!1,L(),d._emit("play",f._id)),S.playbackRate=f._rate,S.paused){d._emit("playerror",f._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");return}a!=="__default"||f._loop?d._endTimers[f._id]=setTimeout(d._ended.bind(d,f),D):(d._endTimers[f._id]=function(){d._ended(f),S.removeEventListener("ended",d._endTimers[f._id],!1)},S.addEventListener("ended",d._endTimers[f._id],!1))}catch(j){d._emit("playerror",f._id,j)}};S.src==="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA"&&(S.src=d._src,S.load());var k=window&&window.ejecta||!S.readyState&&t._navigator.isCocoonJS;if(S.readyState>=3||k)C();else{d._playLock=!0,d._state="loading";var O=function(){d._state="loaded",C(),S.removeEventListener(t._canPlayEvent,O,!1)};S.addEventListener(t._canPlayEvent,O,!1),d._clearTimer(f._id)}}return f._id},pause:function(a){var c=this;if(c._state!=="loaded"||c._playLock)return c._queue.push({event:"pause",action:function(){c.pause(a)}}),c;for(var d=c._getSoundIds(a),g=0;g<d.length;g++){c._clearTimer(d[g]);var _=c._soundById(d[g]);if(_&&!_._paused&&(_._seek=c.seek(d[g]),_._rateSeek=0,_._paused=!0,c._stopFade(d[g]),_._node))if(c._webAudio){if(!_._node.bufferSource)continue;typeof _._node.bufferSource.stop>"u"?_._node.bufferSource.noteOff(0):_._node.bufferSource.stop(0),c._cleanBuffer(_._node)}else(!isNaN(_._node.duration)||_._node.duration===1/0)&&_._node.pause();arguments[1]||c._emit("pause",_?_._id:null)}return c},stop:function(a,c){var d=this;if(d._state!=="loaded"||d._playLock)return d._queue.push({event:"stop",action:function(){d.stop(a)}}),d;for(var g=d._getSoundIds(a),_=0;_<g.length;_++){d._clearTimer(g[_]);var m=d._soundById(g[_]);m&&(m._seek=m._start||0,m._rateSeek=0,m._paused=!0,m._ended=!0,d._stopFade(g[_]),m._node&&(d._webAudio?m._node.bufferSource&&(typeof m._node.bufferSource.stop>"u"?m._node.bufferSource.noteOff(0):m._node.bufferSource.stop(0),d._cleanBuffer(m._node)):(!isNaN(m._node.duration)||m._node.duration===1/0)&&(m._node.currentTime=m._start||0,m._node.pause(),m._node.duration===1/0&&d._clearSound(m._node))),c||d._emit("stop",m._id))}return d},mute:function(a,c){var d=this;if(d._state!=="loaded"||d._playLock)return d._queue.push({event:"mute",action:function(){d.mute(a,c)}}),d;if(typeof c>"u")if(typeof a=="boolean")d._muted=a;else return d._muted;for(var g=d._getSoundIds(c),_=0;_<g.length;_++){var m=d._soundById(g[_]);m&&(m._muted=a,m._interval&&d._stopFade(m._id),d._webAudio&&m._node?m._node.gain.setValueAtTime(a?0:m._volume,t.ctx.currentTime):m._node&&(m._node.muted=t._muted?!0:a),d._emit("mute",m._id))}return d},volume:function(){var a=this,c=arguments,d,g;if(c.length===0)return a._volume;if(c.length===1||c.length===2&&typeof c[1]>"u"){var _=a._getSoundIds(),m=_.indexOf(c[0]);m>=0?g=parseInt(c[0],10):d=parseFloat(c[0])}else c.length>=2&&(d=parseFloat(c[0]),g=parseInt(c[1],10));var f;if(typeof d<"u"&&d>=0&&d<=1){if(a._state!=="loaded"||a._playLock)return a._queue.push({event:"volume",action:function(){a.volume.apply(a,c)}}),a;typeof g>"u"&&(a._volume=d),g=a._getSoundIds(g);for(var y=0;y<g.length;y++)f=a._soundById(g[y]),f&&(f._volume=d,c[2]||a._stopFade(g[y]),a._webAudio&&f._node&&!f._muted?f._node.gain.setValueAtTime(d,t.ctx.currentTime):f._node&&!f._muted&&(f._node.volume=d*t.volume()),a._emit("volume",f._id))}else return f=g?a._soundById(g):a._sounds[0],f?f._volume:0;return a},fade:function(a,c,d,g){var _=this;if(_._state!=="loaded"||_._playLock)return _._queue.push({event:"fade",action:function(){_.fade(a,c,d,g)}}),_;a=Math.min(Math.max(0,parseFloat(a)),1),c=Math.min(Math.max(0,parseFloat(c)),1),d=parseFloat(d),_.volume(a,g);for(var m=_._getSoundIds(g),f=0;f<m.length;f++){var y=_._soundById(m[f]);if(y){if(g||_._stopFade(m[f]),_._webAudio&&!y._muted){var T=t.ctx.currentTime,x=T+d/1e3;y._volume=a,y._node.gain.setValueAtTime(a,T),y._node.gain.linearRampToValueAtTime(c,x)}_._startFadeInterval(y,a,c,d,m[f],typeof g>"u")}}return _},_startFadeInterval:function(a,c,d,g,_,m){var f=this,y=c,T=d-c,x=Math.abs(T/.01),D=Math.max(4,x>0?g/x:g),A=Date.now();a._fadeTo=d,a._interval=setInterval(function(){var w=(Date.now()-A)/g;A=Date.now(),y+=T*w,y=Math.round(y*100)/100,T<0?y=Math.max(d,y):y=Math.min(d,y),f._webAudio?a._volume=y:f.volume(y,a._id,!0),m&&(f._volume=y),(d<c&&y<=d||d>c&&y>=d)&&(clearInterval(a._interval),a._interval=null,a._fadeTo=null,f.volume(d,a._id),f._emit("fade",a._id))},D)},_stopFade:function(a){var c=this,d=c._soundById(a);return d&&d._interval&&(c._webAudio&&d._node.gain.cancelScheduledValues(t.ctx.currentTime),clearInterval(d._interval),d._interval=null,c.volume(d._fadeTo,a),d._fadeTo=null,c._emit("fade",a)),c},loop:function(){var a=this,c=arguments,d,g,_;if(c.length===0)return a._loop;if(c.length===1)if(typeof c[0]=="boolean")d=c[0],a._loop=d;else return _=a._soundById(parseInt(c[0],10)),_?_._loop:!1;else c.length===2&&(d=c[0],g=parseInt(c[1],10));for(var m=a._getSoundIds(g),f=0;f<m.length;f++)_=a._soundById(m[f]),_&&(_._loop=d,a._webAudio&&_._node&&_._node.bufferSource&&(_._node.bufferSource.loop=d,d&&(_._node.bufferSource.loopStart=_._start||0,_._node.bufferSource.loopEnd=_._stop,a.playing(m[f])&&(a.pause(m[f],!0),a.play(m[f],!0)))));return a},rate:function(){var a=this,c=arguments,d,g;if(c.length===0)g=a._sounds[0]._id;else if(c.length===1){var _=a._getSoundIds(),m=_.indexOf(c[0]);m>=0?g=parseInt(c[0],10):d=parseFloat(c[0])}else c.length===2&&(d=parseFloat(c[0]),g=parseInt(c[1],10));var f;if(typeof d=="number"){if(a._state!=="loaded"||a._playLock)return a._queue.push({event:"rate",action:function(){a.rate.apply(a,c)}}),a;typeof g>"u"&&(a._rate=d),g=a._getSoundIds(g);for(var y=0;y<g.length;y++)if(f=a._soundById(g[y]),f){a.playing(g[y])&&(f._rateSeek=a.seek(g[y]),f._playStart=a._webAudio?t.ctx.currentTime:f._playStart),f._rate=d,a._webAudio&&f._node&&f._node.bufferSource?f._node.bufferSource.playbackRate.setValueAtTime(d,t.ctx.currentTime):f._node&&(f._node.playbackRate=d);var T=a.seek(g[y]),x=(a._sprite[f._sprite][0]+a._sprite[f._sprite][1])/1e3-T,D=x*1e3/Math.abs(f._rate);(a._endTimers[g[y]]||!f._paused)&&(a._clearTimer(g[y]),a._endTimers[g[y]]=setTimeout(a._ended.bind(a,f),D)),a._emit("rate",f._id)}}else return f=a._soundById(g),f?f._rate:a._rate;return a},seek:function(){var a=this,c=arguments,d,g;if(c.length===0)a._sounds.length&&(g=a._sounds[0]._id);else if(c.length===1){var _=a._getSoundIds(),m=_.indexOf(c[0]);m>=0?g=parseInt(c[0],10):a._sounds.length&&(g=a._sounds[0]._id,d=parseFloat(c[0]))}else c.length===2&&(d=parseFloat(c[0]),g=parseInt(c[1],10));if(typeof g>"u")return 0;if(typeof d=="number"&&(a._state!=="loaded"||a._playLock))return a._queue.push({event:"seek",action:function(){a.seek.apply(a,c)}}),a;var f=a._soundById(g);if(f)if(typeof d=="number"&&d>=0){var y=a.playing(g);y&&a.pause(g,!0),f._seek=d,f._ended=!1,a._clearTimer(g),!a._webAudio&&f._node&&!isNaN(f._node.duration)&&(f._node.currentTime=d);var T=function(){y&&a.play(g,!0),a._emit("seek",g)};if(y&&!a._webAudio){var x=function(){a._playLock?setTimeout(x,0):T()};setTimeout(x,0)}else T()}else if(a._webAudio){var D=a.playing(g)?t.ctx.currentTime-f._playStart:0,A=f._rateSeek?f._rateSeek-f._seek:0;return f._seek+(A+D*Math.abs(f._rate))}else return f._node.currentTime;return a},playing:function(a){var c=this;if(typeof a=="number"){var d=c._soundById(a);return d?!d._paused:!1}for(var g=0;g<c._sounds.length;g++)if(!c._sounds[g]._paused)return!0;return!1},duration:function(a){var c=this,d=c._duration,g=c._soundById(a);return g&&(d=c._sprite[g._sprite][1]/1e3),d},state:function(){return this._state},unload:function(){for(var a=this,c=a._sounds,d=0;d<c.length;d++)c[d]._paused||a.stop(c[d]._id),a._webAudio||(a._clearSound(c[d]._node),c[d]._node.removeEventListener("error",c[d]._errorFn,!1),c[d]._node.removeEventListener(t._canPlayEvent,c[d]._loadFn,!1),c[d]._node.removeEventListener("ended",c[d]._endFn,!1),t._releaseHtml5Audio(c[d]._node)),delete c[d]._node,a._clearTimer(c[d]._id);var g=t._howls.indexOf(a);g>=0&&t._howls.splice(g,1);var _=!0;for(d=0;d<t._howls.length;d++)if(t._howls[d]._src===a._src||a._src.indexOf(t._howls[d]._src)>=0){_=!1;break}return r&&_&&delete r[a._src],t.noAudio=!1,a._state="unloaded",a._sounds=[],a=null,null},on:function(a,c,d,g){var _=this,m=_["_on"+a];return typeof c=="function"&&m.push(g?{id:d,fn:c,once:g}:{id:d,fn:c}),_},off:function(a,c,d){var g=this,_=g["_on"+a],m=0;if(typeof c=="number"&&(d=c,c=null),c||d)for(m=0;m<_.length;m++){var f=d===_[m].id;if(c===_[m].fn&&f||!c&&f){_.splice(m,1);break}}else if(a)g["_on"+a]=[];else{var y=Object.keys(g);for(m=0;m<y.length;m++)y[m].indexOf("_on")===0&&Array.isArray(g[y[m]])&&(g[y[m]]=[])}return g},once:function(a,c,d){var g=this;return g.on(a,c,d,1),g},_emit:function(a,c,d){for(var g=this,_=g["_on"+a],m=_.length-1;m>=0;m--)(!_[m].id||_[m].id===c||a==="load")&&(setTimeout((function(f){f.call(this,c,d)}).bind(g,_[m].fn),0),_[m].once&&g.off(a,_[m].fn,_[m].id));return g._loadQueue(a),g},_loadQueue:function(a){var c=this;if(c._queue.length>0){var d=c._queue[0];d.event===a&&(c._queue.shift(),c._loadQueue()),a||d.action()}return c},_ended:function(a){var c=this,d=a._sprite;if(!c._webAudio&&a._node&&!a._node.paused&&!a._node.ended&&a._node.currentTime<a._stop)return setTimeout(c._ended.bind(c,a),100),c;var g=!!(a._loop||c._sprite[d][2]);if(c._emit("end",a._id),!c._webAudio&&g&&c.stop(a._id,!0).play(a._id),c._webAudio&&g){c._emit("play",a._id),a._seek=a._start||0,a._rateSeek=0,a._playStart=t.ctx.currentTime;var _=(a._stop-a._start)*1e3/Math.abs(a._rate);c._endTimers[a._id]=setTimeout(c._ended.bind(c,a),_)}return c._webAudio&&!g&&(a._paused=!0,a._ended=!0,a._seek=a._start||0,a._rateSeek=0,c._clearTimer(a._id),c._cleanBuffer(a._node),t._autoSuspend()),!c._webAudio&&!g&&c.stop(a._id,!0),c},_clearTimer:function(a){var c=this;if(c._endTimers[a]){if(typeof c._endTimers[a]!="function")clearTimeout(c._endTimers[a]);else{var d=c._soundById(a);d&&d._node&&d._node.removeEventListener("ended",c._endTimers[a],!1)}delete c._endTimers[a]}return c},_soundById:function(a){for(var c=this,d=0;d<c._sounds.length;d++)if(a===c._sounds[d]._id)return c._sounds[d];return null},_inactiveSound:function(){var a=this;a._drain();for(var c=0;c<a._sounds.length;c++)if(a._sounds[c]._ended)return a._sounds[c].reset();return new i(a)},_drain:function(){var a=this,c=a._pool,d=0,g=0;if(!(a._sounds.length<c)){for(g=0;g<a._sounds.length;g++)a._sounds[g]._ended&&d++;for(g=a._sounds.length-1;g>=0;g--){if(d<=c)return;a._sounds[g]._ended&&(a._webAudio&&a._sounds[g]._node&&a._sounds[g]._node.disconnect(0),a._sounds.splice(g,1),d--)}}},_getSoundIds:function(a){var c=this;if(typeof a>"u"){for(var d=[],g=0;g<c._sounds.length;g++)d.push(c._sounds[g]._id);return d}else return[a]},_refreshBuffer:function(a){var c=this;return a._node.bufferSource=t.ctx.createBufferSource(),a._node.bufferSource.buffer=r[c._src],a._panner?a._node.bufferSource.connect(a._panner):a._node.bufferSource.connect(a._node),a._node.bufferSource.loop=a._loop,a._loop&&(a._node.bufferSource.loopStart=a._start||0,a._node.bufferSource.loopEnd=a._stop||0),a._node.bufferSource.playbackRate.setValueAtTime(a._rate,t.ctx.currentTime),c},_cleanBuffer:function(a){var c=this,d=t._navigator&&t._navigator.vendor.indexOf("Apple")>=0;if(!a.bufferSource)return c;if(t._scratchBuffer&&a.bufferSource&&(a.bufferSource.onended=null,a.bufferSource.disconnect(0),d))try{a.bufferSource.buffer=t._scratchBuffer}catch{}return a.bufferSource=null,c},_clearSound:function(a){var c=/MSIE |Trident\//.test(t._navigator&&t._navigator.userAgent);c||(a.src="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")}};var i=function(a){this._parent=a,this.init()};i.prototype={init:function(){var a=this,c=a._parent;return a._muted=c._muted,a._loop=c._loop,a._volume=c._volume,a._rate=c._rate,a._seek=0,a._paused=!0,a._ended=!0,a._sprite="__default",a._id=++t._counter,c._sounds.push(a),a.create(),a},create:function(){var a=this,c=a._parent,d=t._muted||a._muted||a._parent._muted?0:a._volume;return c._webAudio?(a._node=typeof t.ctx.createGain>"u"?t.ctx.createGainNode():t.ctx.createGain(),a._node.gain.setValueAtTime(d,t.ctx.currentTime),a._node.paused=!0,a._node.connect(t.masterGain)):t.noAudio||(a._node=t._obtainHtml5Audio(),a._errorFn=a._errorListener.bind(a),a._node.addEventListener("error",a._errorFn,!1),a._loadFn=a._loadListener.bind(a),a._node.addEventListener(t._canPlayEvent,a._loadFn,!1),a._endFn=a._endListener.bind(a),a._node.addEventListener("ended",a._endFn,!1),a._node.src=c._src,a._node.preload=c._preload===!0?"auto":c._preload,a._node.volume=d*t.volume(),a._node.load()),a},reset:function(){var a=this,c=a._parent;return a._muted=c._muted,a._loop=c._loop,a._volume=c._volume,a._rate=c._rate,a._seek=0,a._rateSeek=0,a._paused=!0,a._ended=!0,a._sprite="__default",a._id=++t._counter,a},_errorListener:function(){var a=this;a._parent._emit("loaderror",a._id,a._node.error?a._node.error.code:0),a._node.removeEventListener("error",a._errorFn,!1)},_loadListener:function(){var a=this,c=a._parent;c._duration=Math.ceil(a._node.duration*10)/10,Object.keys(c._sprite).length===0&&(c._sprite={__default:[0,c._duration*1e3]}),c._state!=="loaded"&&(c._state="loaded",c._emit("load"),c._loadQueue()),a._node.removeEventListener(t._canPlayEvent,a._loadFn,!1)},_endListener:function(){var a=this,c=a._parent;c._duration===1/0&&(c._duration=Math.ceil(a._node.duration*10)/10,c._sprite.__default[1]===1/0&&(c._sprite.__default[1]=c._duration*1e3),c._ended(a)),a._node.removeEventListener("ended",a._endFn,!1)}};var r={},o=function(a){var c=a._src;if(r[c]){a._duration=r[c].duration,u(a);return}if(/^data:[^;]+;base64,/.test(c)){for(var d=atob(c.split(",")[1]),g=new Uint8Array(d.length),_=0;_<d.length;++_)g[_]=d.charCodeAt(_);h(g.buffer,a)}else{var m=new XMLHttpRequest;m.open(a._xhr.method,c,!0),m.withCredentials=a._xhr.withCredentials,m.responseType="arraybuffer",a._xhr.headers&&Object.keys(a._xhr.headers).forEach(function(f){m.setRequestHeader(f,a._xhr.headers[f])}),m.onload=function(){var f=(m.status+"")[0];if(f!=="0"&&f!=="2"&&f!=="3"){a._emit("loaderror",null,"Failed loading audio file with status: "+m.status+".");return}h(m.response,a)},m.onerror=function(){a._webAudio&&(a._html5=!0,a._webAudio=!1,a._sounds=[],delete r[c],a.load())},l(m)}},l=function(a){try{a.send()}catch{a.onerror()}},h=function(a,c){var d=function(){c._emit("loaderror",null,"Decoding audio data failed.")},g=function(_){_&&c._sounds.length>0?(r[c._src]=_,u(c,_)):d()};typeof Promise<"u"&&t.ctx.decodeAudioData.length===1?t.ctx.decodeAudioData(a).then(g).catch(d):t.ctx.decodeAudioData(a,g,d)},u=function(a,c){c&&!a._duration&&(a._duration=c.duration),Object.keys(a._sprite).length===0&&(a._sprite={__default:[0,a._duration*1e3]}),a._state!=="loaded"&&(a._state="loaded",a._emit("load"),a._loadQueue())},p=function(){if(t.usingWebAudio){try{typeof AudioContext<"u"?t.ctx=new AudioContext:typeof webkitAudioContext<"u"?t.ctx=new webkitAudioContext:t.usingWebAudio=!1}catch{t.usingWebAudio=!1}t.ctx||(t.usingWebAudio=!1);var a=/iP(hone|od|ad)/.test(t._navigator&&t._navigator.platform),c=t._navigator&&t._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),d=c?parseInt(c[1],10):null;if(a&&d&&d<9){var g=/safari/.test(t._navigator&&t._navigator.userAgent.toLowerCase());t._navigator&&!g&&(t.usingWebAudio=!1)}t.usingWebAudio&&(t.masterGain=typeof t.ctx.createGain>"u"?t.ctx.createGainNode():t.ctx.createGain(),t.masterGain.gain.setValueAtTime(t._muted?0:t._volume,t.ctx.currentTime),t.masterGain.connect(t.ctx.destination)),t._setup()}};s.Howler=t,s.Howl=n,typeof Pi<"u"?(Pi.HowlerGlobal=e,Pi.Howler=t,Pi.Howl=n,Pi.Sound=i):typeof window<"u"&&(window.HowlerGlobal=e,window.Howler=t,window.Howl=n,window.Sound=i)})();/*!
 *  Spatial Plugin - Adds support for stereo and 3D audio where Web Audio is supported.
 *  
 *  howler.js v2.2.4
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */(function(){HowlerGlobal.prototype._pos=[0,0,0],HowlerGlobal.prototype._orientation=[0,0,-1,0,1,0],HowlerGlobal.prototype.stereo=function(t){var n=this;if(!n.ctx||!n.ctx.listener)return n;for(var i=n._howls.length-1;i>=0;i--)n._howls[i].stereo(t);return n},HowlerGlobal.prototype.pos=function(t,n,i){var r=this;if(!r.ctx||!r.ctx.listener)return r;if(n=typeof n!="number"?r._pos[1]:n,i=typeof i!="number"?r._pos[2]:i,typeof t=="number")r._pos=[t,n,i],typeof r.ctx.listener.positionX<"u"?(r.ctx.listener.positionX.setTargetAtTime(r._pos[0],Howler.ctx.currentTime,.1),r.ctx.listener.positionY.setTargetAtTime(r._pos[1],Howler.ctx.currentTime,.1),r.ctx.listener.positionZ.setTargetAtTime(r._pos[2],Howler.ctx.currentTime,.1)):r.ctx.listener.setPosition(r._pos[0],r._pos[1],r._pos[2]);else return r._pos;return r},HowlerGlobal.prototype.orientation=function(t,n,i,r,o,l){var h=this;if(!h.ctx||!h.ctx.listener)return h;var u=h._orientation;if(n=typeof n!="number"?u[1]:n,i=typeof i!="number"?u[2]:i,r=typeof r!="number"?u[3]:r,o=typeof o!="number"?u[4]:o,l=typeof l!="number"?u[5]:l,typeof t=="number")h._orientation=[t,n,i,r,o,l],typeof h.ctx.listener.forwardX<"u"?(h.ctx.listener.forwardX.setTargetAtTime(t,Howler.ctx.currentTime,.1),h.ctx.listener.forwardY.setTargetAtTime(n,Howler.ctx.currentTime,.1),h.ctx.listener.forwardZ.setTargetAtTime(i,Howler.ctx.currentTime,.1),h.ctx.listener.upX.setTargetAtTime(r,Howler.ctx.currentTime,.1),h.ctx.listener.upY.setTargetAtTime(o,Howler.ctx.currentTime,.1),h.ctx.listener.upZ.setTargetAtTime(l,Howler.ctx.currentTime,.1)):h.ctx.listener.setOrientation(t,n,i,r,o,l);else return u;return h},Howl.prototype.init=function(t){return function(n){var i=this;return i._orientation=n.orientation||[1,0,0],i._stereo=n.stereo||null,i._pos=n.pos||null,i._pannerAttr={coneInnerAngle:typeof n.coneInnerAngle<"u"?n.coneInnerAngle:360,coneOuterAngle:typeof n.coneOuterAngle<"u"?n.coneOuterAngle:360,coneOuterGain:typeof n.coneOuterGain<"u"?n.coneOuterGain:0,distanceModel:typeof n.distanceModel<"u"?n.distanceModel:"inverse",maxDistance:typeof n.maxDistance<"u"?n.maxDistance:1e4,panningModel:typeof n.panningModel<"u"?n.panningModel:"HRTF",refDistance:typeof n.refDistance<"u"?n.refDistance:1,rolloffFactor:typeof n.rolloffFactor<"u"?n.rolloffFactor:1},i._onstereo=n.onstereo?[{fn:n.onstereo}]:[],i._onpos=n.onpos?[{fn:n.onpos}]:[],i._onorientation=n.onorientation?[{fn:n.onorientation}]:[],t.call(this,n)}}(Howl.prototype.init),Howl.prototype.stereo=function(t,n){var i=this;if(!i._webAudio)return i;if(i._state!=="loaded")return i._queue.push({event:"stereo",action:function(){i.stereo(t,n)}}),i;var r=typeof Howler.ctx.createStereoPanner>"u"?"spatial":"stereo";if(typeof n>"u")if(typeof t=="number")i._stereo=t,i._pos=[t,0,0];else return i._stereo;for(var o=i._getSoundIds(n),l=0;l<o.length;l++){var h=i._soundById(o[l]);if(h)if(typeof t=="number")h._stereo=t,h._pos=[t,0,0],h._node&&(h._pannerAttr.panningModel="equalpower",(!h._panner||!h._panner.pan)&&e(h,r),r==="spatial"?typeof h._panner.positionX<"u"?(h._panner.positionX.setValueAtTime(t,Howler.ctx.currentTime),h._panner.positionY.setValueAtTime(0,Howler.ctx.currentTime),h._panner.positionZ.setValueAtTime(0,Howler.ctx.currentTime)):h._panner.setPosition(t,0,0):h._panner.pan.setValueAtTime(t,Howler.ctx.currentTime)),i._emit("stereo",h._id);else return h._stereo}return i},Howl.prototype.pos=function(t,n,i,r){var o=this;if(!o._webAudio)return o;if(o._state!=="loaded")return o._queue.push({event:"pos",action:function(){o.pos(t,n,i,r)}}),o;if(n=typeof n!="number"?0:n,i=typeof i!="number"?-.5:i,typeof r>"u")if(typeof t=="number")o._pos=[t,n,i];else return o._pos;for(var l=o._getSoundIds(r),h=0;h<l.length;h++){var u=o._soundById(l[h]);if(u)if(typeof t=="number")u._pos=[t,n,i],u._node&&((!u._panner||u._panner.pan)&&e(u,"spatial"),typeof u._panner.positionX<"u"?(u._panner.positionX.setValueAtTime(t,Howler.ctx.currentTime),u._panner.positionY.setValueAtTime(n,Howler.ctx.currentTime),u._panner.positionZ.setValueAtTime(i,Howler.ctx.currentTime)):u._panner.setPosition(t,n,i)),o._emit("pos",u._id);else return u._pos}return o},Howl.prototype.orientation=function(t,n,i,r){var o=this;if(!o._webAudio)return o;if(o._state!=="loaded")return o._queue.push({event:"orientation",action:function(){o.orientation(t,n,i,r)}}),o;if(n=typeof n!="number"?o._orientation[1]:n,i=typeof i!="number"?o._orientation[2]:i,typeof r>"u")if(typeof t=="number")o._orientation=[t,n,i];else return o._orientation;for(var l=o._getSoundIds(r),h=0;h<l.length;h++){var u=o._soundById(l[h]);if(u)if(typeof t=="number")u._orientation=[t,n,i],u._node&&(u._panner||(u._pos||(u._pos=o._pos||[0,0,-.5]),e(u,"spatial")),typeof u._panner.orientationX<"u"?(u._panner.orientationX.setValueAtTime(t,Howler.ctx.currentTime),u._panner.orientationY.setValueAtTime(n,Howler.ctx.currentTime),u._panner.orientationZ.setValueAtTime(i,Howler.ctx.currentTime)):u._panner.setOrientation(t,n,i)),o._emit("orientation",u._id);else return u._orientation}return o},Howl.prototype.pannerAttr=function(){var t=this,n=arguments,i,r,o;if(!t._webAudio)return t;if(n.length===0)return t._pannerAttr;if(n.length===1)if(typeof n[0]=="object")i=n[0],typeof r>"u"&&(i.pannerAttr||(i.pannerAttr={coneInnerAngle:i.coneInnerAngle,coneOuterAngle:i.coneOuterAngle,coneOuterGain:i.coneOuterGain,distanceModel:i.distanceModel,maxDistance:i.maxDistance,refDistance:i.refDistance,rolloffFactor:i.rolloffFactor,panningModel:i.panningModel}),t._pannerAttr={coneInnerAngle:typeof i.pannerAttr.coneInnerAngle<"u"?i.pannerAttr.coneInnerAngle:t._coneInnerAngle,coneOuterAngle:typeof i.pannerAttr.coneOuterAngle<"u"?i.pannerAttr.coneOuterAngle:t._coneOuterAngle,coneOuterGain:typeof i.pannerAttr.coneOuterGain<"u"?i.pannerAttr.coneOuterGain:t._coneOuterGain,distanceModel:typeof i.pannerAttr.distanceModel<"u"?i.pannerAttr.distanceModel:t._distanceModel,maxDistance:typeof i.pannerAttr.maxDistance<"u"?i.pannerAttr.maxDistance:t._maxDistance,refDistance:typeof i.pannerAttr.refDistance<"u"?i.pannerAttr.refDistance:t._refDistance,rolloffFactor:typeof i.pannerAttr.rolloffFactor<"u"?i.pannerAttr.rolloffFactor:t._rolloffFactor,panningModel:typeof i.pannerAttr.panningModel<"u"?i.pannerAttr.panningModel:t._panningModel});else return o=t._soundById(parseInt(n[0],10)),o?o._pannerAttr:t._pannerAttr;else n.length===2&&(i=n[0],r=parseInt(n[1],10));for(var l=t._getSoundIds(r),h=0;h<l.length;h++)if(o=t._soundById(l[h]),o){var u=o._pannerAttr;u={coneInnerAngle:typeof i.coneInnerAngle<"u"?i.coneInnerAngle:u.coneInnerAngle,coneOuterAngle:typeof i.coneOuterAngle<"u"?i.coneOuterAngle:u.coneOuterAngle,coneOuterGain:typeof i.coneOuterGain<"u"?i.coneOuterGain:u.coneOuterGain,distanceModel:typeof i.distanceModel<"u"?i.distanceModel:u.distanceModel,maxDistance:typeof i.maxDistance<"u"?i.maxDistance:u.maxDistance,refDistance:typeof i.refDistance<"u"?i.refDistance:u.refDistance,rolloffFactor:typeof i.rolloffFactor<"u"?i.rolloffFactor:u.rolloffFactor,panningModel:typeof i.panningModel<"u"?i.panningModel:u.panningModel};var p=o._panner;p||(o._pos||(o._pos=t._pos||[0,0,-.5]),e(o,"spatial"),p=o._panner),p.coneInnerAngle=u.coneInnerAngle,p.coneOuterAngle=u.coneOuterAngle,p.coneOuterGain=u.coneOuterGain,p.distanceModel=u.distanceModel,p.maxDistance=u.maxDistance,p.refDistance=u.refDistance,p.rolloffFactor=u.rolloffFactor,p.panningModel=u.panningModel}return t},Sound.prototype.init=function(t){return function(){var n=this,i=n._parent;n._orientation=i._orientation,n._stereo=i._stereo,n._pos=i._pos,n._pannerAttr=i._pannerAttr,t.call(this),n._stereo?i.stereo(n._stereo):n._pos&&i.pos(n._pos[0],n._pos[1],n._pos[2],n._id)}}(Sound.prototype.init),Sound.prototype.reset=function(t){return function(){var n=this,i=n._parent;return n._orientation=i._orientation,n._stereo=i._stereo,n._pos=i._pos,n._pannerAttr=i._pannerAttr,n._stereo?i.stereo(n._stereo):n._pos?i.pos(n._pos[0],n._pos[1],n._pos[2],n._id):n._panner&&(n._panner.disconnect(0),n._panner=void 0,i._refreshBuffer(n)),t.call(this)}}(Sound.prototype.reset);var e=function(t,n){n=n||"spatial",n==="spatial"?(t._panner=Howler.ctx.createPanner(),t._panner.coneInnerAngle=t._pannerAttr.coneInnerAngle,t._panner.coneOuterAngle=t._pannerAttr.coneOuterAngle,t._panner.coneOuterGain=t._pannerAttr.coneOuterGain,t._panner.distanceModel=t._pannerAttr.distanceModel,t._panner.maxDistance=t._pannerAttr.maxDistance,t._panner.refDistance=t._pannerAttr.refDistance,t._panner.rolloffFactor=t._pannerAttr.rolloffFactor,t._panner.panningModel=t._pannerAttr.panningModel,typeof t._panner.positionX<"u"?(t._panner.positionX.setValueAtTime(t._pos[0],Howler.ctx.currentTime),t._panner.positionY.setValueAtTime(t._pos[1],Howler.ctx.currentTime),t._panner.positionZ.setValueAtTime(t._pos[2],Howler.ctx.currentTime)):t._panner.setPosition(t._pos[0],t._pos[1],t._pos[2]),typeof t._panner.orientationX<"u"?(t._panner.orientationX.setValueAtTime(t._orientation[0],Howler.ctx.currentTime),t._panner.orientationY.setValueAtTime(t._orientation[1],Howler.ctx.currentTime),t._panner.orientationZ.setValueAtTime(t._orientation[2],Howler.ctx.currentTime)):t._panner.setOrientation(t._orientation[0],t._orientation[1],t._orientation[2])):(t._panner=Howler.ctx.createStereoPanner(),t._panner.pan.setValueAtTime(t._stereo,Howler.ctx.currentTime)),t._panner.connect(t._node),t._paused||t._parent.pause(t._id,!0).play(t._id,!0)}})()}(cr)),cr}var Yt=Zp();class Jp{constructor(e,t=null){this.camera=e,this.listener=new jc,this.camera.add(this.listener),this.loadingManager=t,this.sounds={},this.music={},this.ambientSounds={},this.cinematicSounds={},this.masterVolume=1,this.musicVolume=.5,this.sfxVolume=.8,this.ambientVolume=.6,this.narrativeVolume=.9,this.loadErrors=!1,this.initialized=!1,this.createFallbackSounds()}initializeAfterUserInteraction(){if(!this.initialized)try{console.log("Initializing audio after user interaction"),Yt.Howler.volume(this.masterVolume),this.loadSounds(),this.loadMusic(),this.loadAmbientSounds(),this.loadSfx(),this.loadCinematicSounds(),this.initialized=!0}catch(e){console.error("Error initializing SoundManager:",e),this.loadErrors=!0}}initialize(){}createFallbackSounds(){const e={play:()=>this,stop:()=>{},pause:()=>{},volume:()=>this,fade:()=>{},playing:()=>!1};["click","hover","footsteps","sprint","jump","land","collectSerum","collectNote","doorOpen","doorLocked","grieverNear","grieverAttack","playerHurt","gameOver","victory","heartbeat","collectMedkit","intro_maze","intro_drpaige","intro_infection","intro_mission","memory_flash","objective","story_reveal"].forEach(o=>{this.sounds[o]=e}),["main","chase","menu","cinematic"].forEach(o=>{this.music[o]=e}),["wind","night","rain","thunder"].forEach(o=>{this.ambientSounds[o]=e});const r=["intro_maze","intro_drpaige","intro_infection","intro_mission","memory_flash","objective"];this.cinematicSounds={},r.forEach(o=>{this.cinematicSounds[o]=e})}loadSounds(){Object.entries({click:{url:"assets/sounds/click.mp3",volume:.5},hover:{url:"assets/sounds/hover.mp3",volume:.3},footsteps:{url:"assets/sounds/footstep.mp3",volume:.4,loop:!0},sprint:{url:"assets/sounds/sprint.mp3",volume:.5,loop:!0,rate:1.5},jump:{url:"assets/sounds/jump.mp3",volume:.5},land:{url:"assets/sounds/land.mp3",volume:.6},collectSerum:{url:"assets/sounds/collect.mp3",volume:.7},collectNote:{url:"assets/sounds/paper.mp3",volume:.6},collectMedkit:{url:"assets/sounds/collect.mp3",volume:.7},doorOpen:{url:"assets/sounds/door_open.mp3",volume:.7},doorLocked:{url:"assets/sounds/door_locked.mp3",volume:.6},grieverNear:{url:"assets/sounds/monster_near.mp3",volume:.7,loop:!0},grieverAttack:{url:"assets/sounds/monster_attack.mp3",volume:.8},playerHurt:{url:"assets/sounds/hurt.mp3",volume:.6},gameOver:{url:"assets/sounds/game_over.mp3",volume:.7},victory:{url:"assets/sounds/victory.mp3",volume:.8},heartbeat:{url:"assets/sounds/heartbeat.mp3",volume:0,loop:!0}}).forEach(([t,n])=>{try{this.loadingManager&&this.loadingManager.itemStart(n.url),this.sounds[t]=new Yt.Howl({src:[n.url],volume:n.volume*this.sfxVolume,loop:n.loop||!1,rate:n.rate||1,onload:()=>{this.loadingManager&&this.loadingManager.itemEnd(n.url)},onloaderror:(i,r)=>{console.warn(`Failed to load sound: ${t}`,r),this.sounds[t]=this.createSilentSound(),this.loadingManager&&this.loadingManager.itemError(n.url)}})}catch(i){console.error(`Error creating sound ${t}:`,i),this.sounds[t]=this.createSilentSound(),this.loadingManager&&this.loadingManager.itemError(n.url)}})}loadMusic(){Object.entries({main:{url:"assets/music/ambient_music.mp3",volume:.4,loop:!0},chase:{url:"assets/music/chase_music.mp3",volume:0,loop:!0},menu:{url:"assets/music/menu_music.mp3",volume:.5,loop:!0}}).forEach(([t,n])=>{try{this.loadingManager&&this.loadingManager.itemStart(n.url),this.music[t]=new Yt.Howl({src:[n.url],volume:n.volume*this.musicVolume,loop:n.loop||!0,onload:()=>{this.loadingManager&&this.loadingManager.itemEnd(n.url)},onloaderror:(i,r)=>{console.warn(`Failed to load music: ${t}`,r),this.music[t]=this.createSilentSound(),this.loadingManager&&this.loadingManager.itemError(n.url)}})}catch(i){console.error(`Error creating music ${t}:`,i),this.music[t]=this.createSilentSound(),this.loadingManager&&this.loadingManager.itemError(n.url)}})}loadAmbientSounds(){const e={wind:{url:"assets/ambient/wind.mp3",volume:.4,loop:!0},night:{url:"assets/ambient/night_ambient.mp3",volume:0,loop:!0},rain:{url:"assets/ambient/rain.mp3",volume:0,loop:!0}};this.ambientSounds.thunder=this.createSilentSound(),Object.entries(e).forEach(([t,n])=>{try{this.loadingManager&&this.loadingManager.itemStart(n.url),this.ambientSounds[t]=new Yt.Howl({src:[n.url],volume:n.volume*this.ambientVolume,loop:n.loop||!1,onload:()=>{this.loadingManager&&this.loadingManager.itemEnd(n.url)},onloaderror:(i,r)=>{console.warn(`Failed to load ambient sound: ${t}`,r),this.ambientSounds[t]=this.createSilentSound(),this.loadingManager&&this.loadingManager.itemError(n.url)}})}catch(i){console.error(`Error creating ambient sound ${t}:`,i),this.ambientSounds[t]=this.createSilentSound(),this.loadingManager&&this.loadingManager.itemError(n.url)}})}loadSfx(){Object.entries({collect:{url:"assets/sfx/collect.mp3",volume:.7},step:{url:"assets/sfx/step.mp3",volume:.3},jump:{url:"assets/sfx/jump.mp3",volume:.5},land:{url:"assets/sfx/land.mp3",volume:.5},hurt:{url:"assets/sfx/hurt.mp3",volume:.7},death:{url:"assets/sfx/death.mp3",volume:1},error:{url:"assets/sfx/error.mp3",volume:.5},menu_open:{url:"assets/sfx/menu_open.mp3",volume:.5},menu_close:{url:"assets/sfx/menu_close.mp3",volume:.5},button:{url:"assets/sfx/button.mp3",volume:.5},note_open:{url:"assets/sfx/note_open.mp3",volume:.5},note_close:{url:"assets/sfx/note_close.mp3",volume:.5},griever_nearby:{url:"assets/sfx/griever_nearby.mp3",volume:.7},griever_attack:{url:"assets/sfx/griever_attack.mp3",volume:.8},portal:{url:"assets/sfx/portal.mp3",volume:.7},wall_move:{url:"assets/sfx/wall_move.mp3",volume:.6},infection_pulse:{url:"assets/sfx/infection_pulse.mp3",volume:.5},intro_drpaige:{url:"assets/sfx/intro_drpaige.mp3",volume:.9},intro_maze:{url:"assets/sfx/intro_maze.mp3",volume:.9},intro_infection:{url:"assets/sfx/intro_infection.mp3",volume:.9},intro_mission:{url:"assets/sfx/intro_mission.mp3",volume:.9},memory_flash:{url:"assets/sfx/memory_flash.mp3",volume:.8},objective:{url:"assets/sfx/objective.mp3",volume:.7},story_reveal:{url:"assets/sfx/story_reveal.mp3",volume:.8},cinematic_transition:{url:"assets/sfx/cinematic_transition.mp3",volume:.7}}).forEach(([t,n])=>{try{this.loadingManager&&this.loadingManager.itemStart(n.url),this.sounds[t]=new Yt.Howl({src:[n.url],volume:n.volume*this.sfxVolume,loop:n.loop||!1,rate:n.rate||1,onload:()=>{this.loadingManager&&this.loadingManager.itemEnd(n.url)},onloaderror:(i,r)=>{console.warn(`Failed to load sound effect: ${t}`,r),this.sounds[t]=this.createSilentSound(),this.loadingManager&&this.loadingManager.itemError(n.url)}})}catch(i){console.error(`Error creating sound effect ${t}:`,i),this.sounds[t]=this.createSilentSound(),this.loadingManager&&this.loadingManager.itemError(n.url)}})}loadCinematicSounds(){Object.entries({intro_maze:{url:"assets/narrative/intro_maze.mp3",volume:1},intro_drpaige:{url:"assets/narrative/intro_drpaige.mp3",volume:1},intro_infection:{url:"assets/narrative/intro_infection.mp3",volume:1},intro_mission:{url:"assets/narrative/intro_mission.mp3",volume:1},memory_flash:{url:"assets/narrative/memory_flash.mp3",volume:.9},objective:{url:"assets/narrative/objective.mp3",volume:.9},cinematic_main:{url:"assets/music/cinematic_main.mp3",volume:.7,loop:!0},transition_in:{url:"assets/sfx/transition_in.mp3",volume:.8},transition_out:{url:"assets/sfx/transition_out.mp3",volume:.8}}).forEach(([t,n])=>{try{this.loadingManager&&this.loadingManager.itemStart(n.url),this.cinematicSounds[t]=new Yt.Howl({src:[n.url],volume:n.volume*this.narrativeVolume,loop:n.loop||!1,onload:()=>{this.loadingManager&&this.loadingManager.itemEnd(n.url)},onloaderror:(i,r)=>{console.warn(`Failed to load cinematic sound: ${t}`,r),this.cinematicSounds[t]=this.createSilentSound(),this.loadingManager&&this.loadingManager.itemError(n.url)}})}catch(i){console.error(`Error creating cinematic sound ${t}:`,i),this.cinematicSounds[t]=this.createSilentSound(),this.loadingManager&&this.loadingManager.itemError(n.url)}})}createSilentSound(){return{play:()=>this,stop:()=>{},pause:()=>{},volume:()=>this,fade:()=>{},playing:()=>!1}}play(e,t=1){this.initialized||this.initializeAfterUserInteraction();try{const n=this.sounds[e];if(n){if(typeof n.rate=="function"?n.rate(t):t!==1&&console.warn(`Sound ${e} does not support playback rate changes.`),typeof n.play=="function")return n.play(),n;console.warn(`Sound ${e} does not have a play method.`)}else console.warn(`Sound ${e} not found.`)}catch(n){console.warn(`Error playing sound ${e}:`,n)}return null}playSfx(e,t=1){this.initialized||this.initializeAfterUserInteraction();try{if(this.cinematicSounds[e]){const n=this.cinematicSounds[e];return typeof n.rate=="function"&&n.rate(t),n.play(),n}if(this.sounds[e]){const n=this.sounds[e];return typeof n.rate=="function"&&n.rate(t),n.play(),n}else console.warn(`Sound effect ${e} not found.`)}catch(n){console.warn(`Error playing sound effect ${e}:`,n)}return null}stop(e){this.sounds[e]&&this.sounds[e].stop()}stopSfx(e){this.cinematicSounds[e]?this.cinematicSounds[e].stop():this.sounds[e]&&this.sounds[e].stop()}playMusic(e){this.initialized||this.initializeAfterUserInteraction(),Object.keys(this.music).forEach(t=>{this.music[t].stop()}),this.music[e]&&this.music[e].play()}fadeToMusic(e,t=2e3){if(Object.keys(this.music).forEach(n=>{this.music[n].playing()&&(this.music[n].fade(this.music[n].volume(),0,t),setTimeout(()=>{this.music[n].stop()},t))}),this.music[e]){const n=e==="main"?.4*this.musicVolume:e==="chase"?.6*this.musicVolume:.5*this.musicVolume;this.music[e].volume(0),this.music[e].play(),this.music[e].fade(0,n,t)}}playCinematicMusic(){Object.keys(this.music).forEach(e=>{this.music[e].stop()}),this.cinematicSounds.cinematic_main&&this.cinematicSounds.cinematic_main.play()}stopCinematicMusic(){this.cinematicSounds.cinematic_main&&this.cinematicSounds.cinematic_main.stop()}fadeToCinematicMusic(e=2e3){Object.keys(this.music).forEach(t=>{this.music[t].playing()&&(this.music[t].fade(this.music[t].volume(),0,e),setTimeout(()=>{this.music[t].stop()},e))}),this.cinematicSounds.cinematic_main&&(this.cinematicSounds.cinematic_main.volume(0),this.cinematicSounds.cinematic_main.play(),this.cinematicSounds.cinematic_main.fade(0,.7*this.narrativeVolume,e))}playAmbient(e){this.ambientSounds[e]&&this.ambientSounds[e].play()}stopAmbient(e){this.ambientSounds[e]&&this.ambientSounds[e].stop()}fadeInAmbient(e,t,n=2e3){this.ambientSounds[e]&&(this.ambientSounds[e].volume(0),this.ambientSounds[e].play(),this.ambientSounds[e].fade(0,t*this.ambientVolume,n))}fadeOutAmbient(e,t=2e3){this.ambientSounds[e]&&this.ambientSounds[e].playing()&&(this.ambientSounds[e].fade(this.ambientSounds[e].volume(),0,t),setTimeout(()=>{this.ambientSounds[e].stop()},t))}createPositionalSound(e,t,n=5,i=30){const r=new Zc(this.listener),o=new Yt.Howl({src:[`assets/sounds/${e}.mp3`],volume:.7*this.sfxVolume});return r.position.copy(t),r.setRefDistance(n),r.setMaxDistance(i),{sound:r,howl:o}}updatePositionalSounds(e,t){t.forEach(n=>{const i=e.distanceTo(n.sound.position),r=Math.max(0,1-i/n.sound.getMaxDistance());n.howl.volume(r*.7*this.sfxVolume)})}setMasterVolume(e){this.masterVolume=Math.max(0,Math.min(1,e)),Yt.Howler.volume(this.masterVolume)}setMusicVolume(e){this.musicVolume=Math.max(0,Math.min(1,e)),Object.keys(this.music).forEach(t=>{const n=this.music[t].volume()/(this.musicVolume||1);this.music[t].volume(n*this.musicVolume)})}setSfxVolume(e){this.sfxVolume=Math.max(0,Math.min(1,e)),Object.keys(this.sounds).forEach(t=>{const n=this.sounds[t].volume()/(this.sfxVolume||1);this.sounds[t].volume(n*this.sfxVolume)})}setAmbientVolume(e){this.ambientVolume=Math.max(0,Math.min(1,e)),Object.keys(this.ambientSounds).forEach(t=>{const n=this.ambientSounds[t].volume()/(this.ambientVolume||1);this.ambientSounds[t].volume(n*this.ambientVolume)})}setNarrativeVolume(e){this.narrativeVolume=Math.max(0,Math.min(1,e)),Object.keys(this.cinematicSounds).forEach(t=>{const n=this.cinematicSounds[t].volume()/(this.narrativeVolume||1);this.cinematicSounds[t].volume(n*this.narrativeVolume)})}mute(e){Yt.Howler.mute(e)}dispose(){Object.keys(this.sounds).forEach(e=>{this.sounds[e].stop()}),Object.keys(this.music).forEach(e=>{this.music[e].stop()}),Object.keys(this.ambientSounds).forEach(e=>{this.ambientSounds[e].stop()}),Object.keys(this.cinematicSounds).forEach(e=>{this.cinematicSounds[e].stop()}),Yt.Howler.unload()}}class Qp{constructor(){this.storyNotes=[{id:1,title:"Lab Entry #143",content:`DATE: March 15, 2042

The research team has made a breakthrough with Compound X-37. The regenerative properties are exceeding all expectations. Dr. Paige believes we can begin human trials within months, not years as initially projected.

However, I've noticed some concerning behavior in the lab rats from batch 12. Their aggression has increased, and their tissue seems to be mutating in unexpected ways. I've flagged this for review, but everyone's too excited about the progress to pay much attention to my concerns.`,found:!1},{id:2,title:"Security Alert",content:`DATE: March 30, 2042

ATTENTION ALL PERSONNEL:

A containment breach has occurred in Lab Block C. All personnel must evacuate immediately following biohazard protocols. Security teams will escort scientists to decontamination.

ANY CONTACT with escaped test subjects must be reported immediately. Do NOT attempt to handle subjects on your own.

Security Level: ALPHA RED
Authorization: Director Hammond`,found:!1},{id:3,title:"Audio Transcript: Emergency Broadcast",content:`DATE: April 2, 2042

[Static]...repeat, this is not a drill. The facility is under complete lockdown. The infection has spread beyond containment measures. If you're hearing this, proceed to emergency extraction point Delta.

Military forces have been dispatched and will arrive in [static]...hours. They are authorized to use lethal force to prevent spread to civilian populations.

All research data on Compound X-37 must be preserved. Dr. Paige has the prototype serum that may slow the infection. Find her if you can. God help us all.`,found:!1},{id:4,title:"Dr. Paige's Journal",content:`DATE: April 3, 2042

I should have listened to Marcus. The warning signs were there in the data, but I was too focused on the breakthrough to see the danger.

I've developed a serum that seems to slow the progression of the infection - not a cure, but it buys time. I've synthesized a limited batch and hidden vials throughout the facility in secure locations. The keycard to the emergency exit is locked in my office safe.

I'm exhibiting early symptoms now. Memory lapses. Tremors. I need to record what I know before I forget who I am. The entities we're calling "Grievers" seem drawn to sound and movement. They used to be my colleagues. My friends.`,found:!1},{id:5,title:"Final Protocol",content:`DATE: April 5, 2042

To whoever finds this:

If you're reading this, you've survived longer than most. The maze-like layout of this facility was intentional - designed to contain any outbreak and slow its spread. Now it's your prison too.

To escape:
1. Collect the serum vials - they'll slow your infection and are needed to power the emergency exit portal
2. Avoid the Grievers - they're faster in darkness
3. Find the exit in the northeast quadrant

I'm securing this note near the entrance. I hope it helps someone survive this nightmare.

- Dr. Marcus Chen, Lead Security Officer`,found:!1},{id:6,title:"Memory Fragment",content:`I remember the day I joined the research team. The promise of changing the world. Dr. Paige's inspiring speech about healing the unhealable.

Now look at us. I'm the only one left who still looks human. The infection is spreading though. I can feel it in my blood.

The serum works, temporarily. Three doses should be enough to power the emergency evacuation system. If anyone reads this - there's still hope. The military will want to burn this place to the ground, but the research could still save lives if it reaches the right hands.

I'm leaving this note and continuing my search for more serum. If you find this... I'm sorry for what we created.`,found:!1}],this.introStory={statusLine:"SUBJECT STATUS: INFECTED (42%)",mainText:["You awaken in the maze, disoriented and alone. Your memory is fragmented.","You are a <span class='highlight'>Runner</span> - one of the few who venture into the maze to map its ever-changing corridors.","The evening shadows grow longer. <span class='danger-text'>Grievers</span> have been spotted as daylight fades.","Your body is fighting an unknown infection. Find the <span class='serum-text'>blue serum vials</span> to slow its progress.","WARNING: The maze walls shift in darkness. Find the exit before night falls completely."]},this.introCinematicSequence=[{type:"background",backgroundImage:"url('/src/assets/3.png')",duration:5e3,title:"WCKD Research Facility",subtitle:"Three Days Ago",text:"",audio:"alarm",voiceName:""},{type:"dialogue",backgroundImage:"url('/src/assets/2.png')",duration:6e3,title:"",subtitle:"",text:"Emergency protocols activated. Biohazard containment breach in Laboratory B. All personnel evacuate immediately.",audio:"alarm_distant",voiceName:"WCKD Security System"},{type:"dialogue",backgroundImage:"url('/src/assets/3.png')",duration:6e3,title:"",subtitle:"",text:"We need to lock down the serum samples! The compound is unstable - if it gets out...",audio:"panic",voiceName:"Dr. Paige"},{type:"background",backgroundImage:"url('/src/assets/1.png')",duration:5e3,title:"",subtitle:"",text:"Warning: Test subjects exhibiting advanced symptoms. Aggression levels rising. Cognitive functions deteriorating.",audio:"monster_distant",voiceName:"WCKD Monitoring System"},{type:"dialogue",backgroundImage:"url('/src/assets/8.png')",duration:6e3,title:"",subtitle:"",text:"We don't have much time. Take these serum vials - they'll slow the infection. The maze protocol is our only option now.",audio:"serious",voiceName:"Chief Security Officer"},{type:"memory",backgroundImage:"url('/src/assets/4.png')",duration:7e3,title:"Present Day",subtitle:"",text:"Your memory fades in and out. Images from the past blur with the present. The infection is spreading through your system.",audio:"heartbeat",memoryFlash:"high",voiceName:""},{type:"dialogue",backgroundImage:"url('/src/assets/1.png')",duration:5e3,title:"",subtitle:"",text:"I need to find those serum vials before it's too late. The lab's emergency exit should still be operational...",audio:"ambient_eerie",voiceName:"You"},{type:"background",backgroundImage:"url('/src/assets/5.png')",duration:6e3,title:"",subtitle:"",text:"But I'm not alone in here. The infected researchers - what the security team called 'Grievers' - they're hunting in the darkness.",audio:"monster_near",memoryFlash:"medium",voiceName:""},{type:"finale",backgroundImage:"url('/src/assets/10.png')",duration:5e3,title:"THE MAZE",subtitle:"Find the serum. Escape the facility. Survive.",text:"",audio:"dramatic_impact",voiceName:""}],this.act2CinematicSequence=[{type:"background",backgroundImage:"url('/src/assets/7.png')",duration:1e3,title:"",subtitle:"",text:"",audio:null},{type:"dialogue",backgroundImage:"url('/src/assets/7.png')",duration:7e3,title:"",subtitle:"",text:"Memories are returning... you were one of the researchers working on Project Lazarus.",audio:"act2_revelation",voiceName:"Your Thoughts"},{type:"dialogue",backgroundImage:"url('/src/assets/1.png')",duration:6e3,title:"",subtitle:"",text:"The infection is accelerating. You need to find the remaining serum vials.",audio:"act2_warning",voiceName:"Your Thoughts",memoryFlash:"medium"}],this.act3CinematicSequence=[{type:"background",backgroundImage:"url('/src/assets/6.png')",duration:1e3,title:"",subtitle:"",text:"",audio:null},{type:"dialogue",backgroundImage:"url('/src/assets/7.png')",duration:7e3,title:"",subtitle:"",text:"You remember everything now. You were Dr. Paige's assistant, entrusted with the final specimens.",audio:"act3_finalstage",voiceName:"Your Thoughts"},{type:"dialogue",backgroundImage:"url('/src/assets/9.png')",duration:6e3,title:"",subtitle:"",text:"The exit is near. Gather the remaining serum to power the portal and escape with the research.",audio:"act3_escape",voiceName:"Your Thoughts",memoryFlash:"high"}],this.transitionSettings={dialogue:{backgroundTransition:"transition-fade",textAnimationClass:"dialogue-text-reveal",portraitAnimationClass:"portrait-reveal",voiceAnimationClass:"voice-reveal",transitionDuration:1200},memory:{backgroundTransition:"transition-fade-slow",textAnimationClass:"text-reveal",transitionDuration:1800},background:{backgroundTransition:"transition-fade",textAnimationClass:"text-reveal",transitionDuration:1200},finale:{backgroundTransition:"transition-fade-fast",textAnimationClass:"text-reveal",transitionDuration:900,additionalClass:"finale-transition"}}}getStoryNotes(){return this.storyNotes}getTotalNotes(){return this.storyNotes.length}getStoryNoteById(e){return this.storyNotes.find(t=>t.id===e)}getIntroStory(){return this.introStory}getIntroCinematicSequence(){return this.introCinematicSequence}getActCinematicSequence(e){switch(e){case 2:return this.act2CinematicSequence;case 3:return this.act3CinematicSequence;default:return[]}}getTransitionSettings(){return this.transitionSettings}}class em{constructor(e,t){this.soundManager=e,this.storyContent=t,this.cinematicActive=!1,this.cinematicStep=0,this.skipRequested=!1,this.cinematicSequence=[],this.introCinematicPlayed=!1,this.cinematicContainer=null,this.cinematicBackground=null,this.cinematicTitle=null,this.cinematicSubtitle=null,this.cinematicText=null,this.cinematicSkipBtn=null,this.characterPortrait=null,this.cinematicProgress=null,this.voiceName=null,this.memoryFlashback=null}initialize(){this.cinematicContainer=document.getElementById("cinematic-container"),this.cinematicBackground=document.getElementById("cinematic-background"),this.cinematicTitle=document.getElementById("cinematic-title"),this.cinematicSubtitle=document.getElementById("cinematic-subtitle"),this.cinematicText=document.getElementById("cinematic-text"),this.cinematicSkipBtn=document.getElementById("cinematic-skip"),this.characterPortrait=document.getElementById("character-portrait"),this.cinematicProgress=document.getElementById("cinematic-progress"),this.voiceName=document.getElementById("voice-name"),this.memoryFlashback=document.getElementById("memory-flashback"),this.cinematicContainer&&(this.cinematicContainer.style.display="none",this.cinematicContainer.style.opacity="0"),document.addEventListener("keydown",e=>{(e.key==="Escape"||e.key===" ")&&this.cinematicActive&&this.skipCinematic()}),this.cinematicSkipBtn&&this.cinematicSkipBtn.addEventListener("click",()=>{this.skipCinematic()}),console.log("CinematicManager initialized")}startIntroCinematic(){this.introCinematicPlayed||(this.cinematicSequence=this.storyContent.getIntroCinematicSequence(),this.playCinematicSequence(),this.introCinematicPlayed=!0)}playActTransition(e){if(!this.cinematicActive)return this.cinematicSequence=this.storyContent.getActCinematicSequence(e),this.cinematicSequence.length>0?(this.playCinematicSequence(),!0):!1}playCinematicSequence(){this.cinematicActive=!0,this.cinematicStep=0,this.skipRequested=!1,this.cinematicContainer&&(this.cinematicContainer.style.display="flex",setTimeout(()=>{this.cinematicContainer.style.opacity="1"},100)),this.soundManager&&this.soundManager.fadeToCinematicMusic(2e3),this.processCinematicStep()}processCinematicStep(){if(this.cinematicStep>=this.cinematicSequence.length||this.skipRequested){this.endCinematicSequence();return}const e=this.cinematicSequence[this.cinematicStep],t=this.storyContent.getTransitionSettings(),n=t[e.type]||t.background;this.characterPortrait&&(this.characterPortrait.style.opacity="0",this.characterPortrait.classList.remove(n.portraitAnimationClass)),this.voiceName&&(this.voiceName.parentElement.style.opacity="0",this.voiceName.classList.remove(n.voiceAnimationClass)),this.cinematicTitle&&(this.cinematicTitle.style.opacity="0",this.cinematicTitle.classList.remove("title-reveal")),this.cinematicSubtitle&&(this.cinematicSubtitle.style.opacity="0",this.cinematicSubtitle.classList.remove("subtitle-reveal")),this.cinematicText&&(this.cinematicText.style.opacity="0",this.cinematicText.classList.remove(n.textAnimationClass));let i=document.querySelector(".cinematic-transition-container");if(!i&&this.cinematicContainer&&(i=document.createElement("div"),i.className="cinematic-transition-container",this.cinematicContainer.appendChild(i)),e.backgroundImage&&i){const r=document.createElement("div");r.className="cinematic-image cinematic-fade-enter",r.style.backgroundImage=e.backgroundImage,r.classList.add(n.backgroundTransition),(e.type==="memory"||e.type==="finale")&&r.classList.add("parallax-background"),i.appendChild(r),r.offsetWidth,r.classList.remove("cinematic-fade-enter"),r.classList.add("cinematic-fade-enter-active","cinematic-image-active"),i.querySelectorAll(".cinematic-image-active:not(:last-child)").forEach(l=>{l.classList.remove("cinematic-image-active","cinematic-fade-enter-active"),l.classList.add("cinematic-fade-exit-active"),setTimeout(()=>{l.parentElement&&l.parentElement.removeChild(l)},n.transitionDuration)}),this.cinematicBackground=r,(e.type==="finale"||e.memoryFlash&&e.memoryFlash==="high")&&setTimeout(()=>{r.classList.add("cinematic-pulse")},600),(e.type==="memory"||e.type==="finale")&&setTimeout(()=>{r.style.transform="scale(1.05) translateZ(-10px)",setTimeout(()=>{r.style.transform="scale(1) translateZ(0px)"},3e3)},200)}setTimeout(()=>{if(this.characterPortrait&&(this.characterPortrait.style.display="none",this.characterPortrait.style.backgroundImage="none",this.characterPortrait.style.opacity="0"),this.voiceName&&(this.voiceName.textContent="",this.voiceName.parentElement.style.opacity="0"),this.cinematicTitle&&(this.cinematicTitle.textContent=e.title||"",this.cinematicTitle.classList.remove("title-reveal"),e.title&&(this.cinematicTitle.offsetWidth,this.cinematicTitle.classList.add("title-reveal"))),this.cinematicSubtitle&&(this.cinematicSubtitle.textContent=e.subtitle||"",this.cinematicSubtitle.classList.remove("subtitle-reveal"),e.subtitle&&(this.cinematicSubtitle.offsetWidth,this.cinematicSubtitle.classList.add("subtitle-reveal"))),this.cinematicText&&(this.cinematicText.textContent=e.text||"",this.cinematicText.classList.remove("text-reveal","dialogue-text-reveal"),e.text&&(this.cinematicText.offsetWidth,this.cinematicText.classList.add(n.textAnimationClass))),e.type==="dialogue"&&this.characterPortrait?e.portrait?(this.characterPortrait.style.display="block",this.characterPortrait.style.backgroundImage=e.portrait,this.characterPortrait.classList.remove("portrait-reveal"),this.characterPortrait.offsetWidth,this.characterPortrait.classList.add("portrait-reveal"),this.voiceName&&e.voiceName&&(this.voiceName.textContent=e.voiceName,this.voiceName.classList.remove("voice-reveal"),this.voiceName.offsetWidth,this.voiceName.classList.add("voice-reveal"),this.voiceName.parentElement.style.opacity="1")):(this.characterPortrait.style.display="none",this.characterPortrait.style.opacity="0",this.characterPortrait.style.backgroundImage="none",this.voiceName&&e.voiceName&&(this.voiceName.textContent=e.voiceName,this.voiceName.classList.remove("voice-reveal"),this.voiceName.classList.add("voice-reveal"),this.voiceName.parentElement.style.opacity="1",this.voiceName.parentElement&&(this.voiceName.parentElement.style.left="80px"))):this.characterPortrait&&(this.characterPortrait.style.display="none",this.characterPortrait.style.opacity="0"),e.memoryFlash&&this.memoryFlashback&&(this.memoryFlashback.classList.remove("low-intensity","medium-intensity","high-intensity"),this.memoryFlashback.classList.add(`${e.memoryFlash}-intensity`),setTimeout(()=>{this.memoryFlashback.classList.add("memory-active")},300),setTimeout(()=>{this.memoryFlashback.classList.remove("memory-active"),this.memoryFlashback.classList.remove(`${e.memoryFlash}-intensity`)},e.type==="memory"?3e3:2e3)),e.audio&&this.soundManager&&setTimeout(()=>{this.soundManager.playSfx(e.audio)},200),this.cinematicProgress){const r=(this.cinematicStep+1)/this.cinematicSequence.length*100;this.cinematicProgress.style.width=`${r}%`,this.cinematicProgress.style.transition=`width ${e.duration}ms cubic-bezier(0.19, 1, 0.22, 1)`}setTimeout(()=>{this.cinematicStep++,this.processCinematicStep()},e.duration)},1e3)}endCinematicSequence(){this.cinematicActive=!1,this.skipRequested=!1,this.cinematicContainer&&(this.cinematicContainer.style.opacity="0",setTimeout(()=>{this.cinematicContainer.style.display="none";const e=new CustomEvent("cinematicsComplete");document.dispatchEvent(e)},1e3)),this.soundManager&&(this.soundManager.stopCinematicMusic(),this.soundManager.playMusic("main"))}skipCinematic(){this.skipRequested=!0,this.endCinematicSequence()}isCinematicActive(){return this.cinematicActive}hasPlayedIntroCinematic(){return this.introCinematicPlayed}}class tm{constructor(e){this.soundManager=e,this.memoryFlashback=null,this.durations={low:1e3,medium:1500,high:2500}}initialize(){this.memoryFlashback=document.getElementById("memory-flashback"),this.memoryFlashback||console.error("Memory flashback element not found in the DOM")}triggerMemoryFlashback(e="medium"){if(this.memoryFlashback){if(this.memoryFlashback.classList.remove("low-intensity","medium-intensity","high-intensity"),this.memoryFlashback.classList.add(`${e}-intensity`),this.soundManager)switch(e){case"low":this.soundManager.playSfx("memory_flash_low");break;case"high":this.soundManager.playSfx("memory_flash_high");break;case"medium":default:this.soundManager.playSfx("memory_flash");break}this.memoryFlashback.classList.add("memory-active"),setTimeout(()=>{this.memoryFlashback.classList.remove("memory-active")},this.durations[e]||1500)}}}class nm{constructor(e,t,n){this.soundManager=e,this.storyContent=t,this.memoryEffects=n,this.notesFound=0,this.totalNotes=t.getTotalNotes(),this.currentObjective="",this.currentAct=1,this.storyBeats=new Map,this.triggeredBeats=new Set,this.objectiveTimers=[]}initialize(){console.log("StoryProgress initialized")}setIntroStoryText(){const e=document.querySelector(".intro-screen .story-text");if(!e){console.error("Story text element not found in the DOM");return}const t=this.storyContent.getIntroStory();e.innerHTML="";const n=document.createElement("p");n.className="typewriter",n.textContent=t.statusLine,e.appendChild(n),t.mainText.forEach((i,r)=>{const o=document.createElement("p");o.innerHTML=i,o.className="text-reveal",r===t.mainText.length-1&&(o.className="warning-text text-reveal"),o.style.animationDelay=`${(r+1)*.5}s`,e.appendChild(o)}),console.log("Intro story text has been set")}showObjectiveNotification(e){this.objectiveTimers.forEach(i=>clearTimeout(i)),this.objectiveTimers=[],this.currentObjective=e;let t=document.getElementById("objective-notification");if(!t){console.error("Objective notification element not found");return}t.textContent=e,t.classList.add("active"),this.soundManager&&this.soundManager.playSfx("objective");const n=setTimeout(()=>{t.classList.remove("active")},5e3);this.objectiveTimers.push(n)}updateStoryProgress(e){const t=this.storyContent.getStoryNoteById(e);if(t&&!t.found){t.found=!0,this.notesFound++;const n=this.currentAct;return this.notesFound>=this.totalNotes*.75?this.currentAct=3:this.notesFound>=this.totalNotes*.3&&(this.currentAct=2),{act:this.currentAct,transitioned:n!==this.currentAct,note:t}}return{act:this.currentAct,transitioned:!1,note:null}}registerStoryBeat(e,t,n,i){this.storyBeats.set(e,{position:t,radius:n,callback:i,triggered:!1})}checkStoryBeatTriggers(e,t){if(!t)for(const[n,i]of this.storyBeats.entries()){if(this.triggeredBeats.has(n))continue;const r=i.position.x-e.x,o=i.position.z-e.z;r*r+o*o<=i.radius*i.radius&&(this.triggeredBeats.add(n),i.callback())}}initializeStoryBeats(e){e.mazeSize;const t=e.cellSize;this.registerStoryBeat("center_revelation",{x:0,y:1.6,z:0},t*1.5,()=>{this.soundManager&&this.soundManager.playSfx("whispers"),this.memoryEffects.triggerMemoryFlashback("low"),this.showObjectiveNotification("Something is watching you...")});const r=e.getExitPosition();if(r){const o=r.x-t*3,l=r.z-t*3;this.registerStoryBeat("exit_approach",{x:o,y:1.6,z:l},t*2,()=>{this.soundManager&&this.soundManager.playSfx("heartbeat"),this.memoryEffects.triggerMemoryFlashback("high"),this.showObjectiveNotification("You're close to the exit. Gather all serum vials!")})}console.log("Story beats initialized")}getCurrentObjective(){return this.currentObjective}getCurrentAct(){return this.currentAct}getNotesFound(){return this.notesFound}getTotalNotes(){return this.totalNotes}dispose(){this.objectiveTimers.forEach(e=>clearTimeout(e)),this.objectiveTimers=[]}}document.documentElement.style.setProperty("--fade-transition-time","1200ms");document.documentElement.style.setProperty("--fade-transition-time-slow","1800ms");document.documentElement.style.setProperty("--fade-transition-time-fast","900ms");document.documentElement.style.setProperty("--memory-flash-duration","2.5s");class im{constructor(e){this.storyContent=new Qp,this.memoryEffects=new tm(e),this.cinematicManager=new em(e,this.storyContent),this.storyProgress=new nm(e,this.storyContent,this.memoryEffects),this.soundManager=e}initialize(){this.memoryEffects.initialize(),this.cinematicManager.initialize(),this.storyProgress.initialize(),this.storyProgress.setIntroStoryText(),console.log("StoryManager initialized")}startIntroCinematic(){this.cinematicManager.startIntroCinematic()}setIntroStoryText(){this.storyProgress.setIntroStoryText()}showObjectiveNotification(e){this.storyProgress.showObjectiveNotification(e)}getStoryNotes(){return this.storyContent.getStoryNotes()}updateStoryProgress(e){const t=this.storyProgress.updateStoryProgress(e);if(t.note){let n="medium";return t.note.id===4||t.note.id===5?n="high":(t.note.id===1||t.note.id===2)&&(n="low"),this.memoryEffects.triggerMemoryFlashback(n),t.transitioned&&this.triggerActTransition(t.act),!0}return!1}triggerActTransition(e){if(this.cinematicManager.playActTransition(e)){const t=()=>{e===2?this.storyProgress.showObjectiveNotification("Find the remaining serum vials before time runs out"):e===3&&this.storyProgress.showObjectiveNotification("Find the exit portal and escape the facility"),document.removeEventListener("cinematicsComplete",t)};document.addEventListener("cinematicsComplete",t)}}initializeStoryBeats(e){this.storyProgress.initializeStoryBeats(e)}checkStoryBeatTriggers(e){this.storyProgress.checkStoryBeatTriggers(e,this.cinematicManager.isCinematicActive())}triggerMemoryFlashback(e="medium"){this.memoryEffects.triggerMemoryFlashback(e)}getCurrentStatus(){return{act:this.storyProgress.getCurrentAct(),notesFound:this.storyProgress.getNotesFound(),totalNotes:this.storyProgress.getTotalNotes(),objective:this.storyProgress.getCurrentObjective(),cinematicActive:this.cinematicManager.isCinematicActive()}}isCinematicActive(){return this.cinematicManager.isCinematicActive()}skipCinematic(){this.cinematicManager.skipCinematic()}dispose(){this.storyProgress.dispose()}}class sm{constructor(e,t){this.scene=e,this.soundManager=t,this.storyNotes=[],this.collectibleItems=[],this.noteCollectionQueue=[],this.noteCollectionParticles=[],this.noteContent=[{title:"Lab Report #437-A",content:"The maze is a test. We're monitoring how subjects navigate under stress while infected. The changing walls are intentional - we're testing adaptation abilities."},{title:"Dr. Paige's Notes",content:"The serum works temporarily, but we need a more permanent solution. Grievers are becoming more aggressive at night. Subject 16 shows promise."},{title:"Teresa's Message",content:"Thomas, if you find this - I remember now. We helped build this place. WCKD isn't what we thought. The maze is just the beginning. There are more trials."},{title:"Runner's Map Fragment",content:"Section 7 changes every 3 days. Section 8 never changes. Found a pattern in the movement - it's not random. The exit only appears when all sections have been mapped."},{title:"Medical Report",content:"The infection reaches critical levels at 100%. The blue serum reduces it by ~15%. Symptoms accelerate after 70% - disorientation, aggression, memory loss."},{title:"Minho's Log",content:"Day 42: Found another dead Griever. They seem to malfunction near the outer walls. There's something about Section 5 that affects them. Could be useful."},{title:"WCKD Memo",content:"PRIORITY ALERT: Subject A2 has escaped containment. Security protocols at maximum. All personnel report to emergency stations. The maze trial must continue."},{title:"Newt's Journal",content:"I know now why we were sent here. The maze isn't just a test—it's a way to stimulate our brains while infected. They're studying our responses, our immunity."}]}createStoryNotes(e,t=null){this.storyNotes.forEach(i=>{i.mesh&&this.scene.remove(i.mesh)}),this.storyNotes=[];const n=t||this.noteContent;e.forEach((i,r)=>{const o=this.createNoteMesh(i,n[r%n.length]);this.storyNotes.push({mesh:o,position:i,collected:!1,content:n[r%n.length],id:r}),this.scene.add(o)})}createNoteMesh(e,t){const n=new Ht;let i,r,o;t.title.includes("Medical")||t.title.includes("Lab Report")?(i=15790320,r=2258892,o=11197951):t.title.includes("Security")||t.title.includes("WCKD Memo")?(i=16768477,r=13378048,o=16755370):t.title.includes("Message")||t.content.includes("Journal")?(i=16119260,r=5592405,o=16777130):(i=16119260,r=364249,o=16777130);const l=new $t(.5,.02,.7),h=new rt({color:i,roughness:.9,metalness:.1}),u=new Ue(l,h);n.add(u),new $t(.4,.01,.03);const p=new rt({color:3355443,roughness:1,metalness:0}),a=t.title.includes("Report")?8:6,c=.6/a;for(let f=0;f<a;f++){const y=.2+Math.random()*.2,T=new $t(y,.01,.03),x=new Ue(T,p);x.position.y=.015,x.position.z=-.25+f*c,x.position.x=-.15+Math.random()*.05,n.add(x)}const d=new ws(.08,16),g=new rt({color:r,roughness:.5,metalness:.5}),_=new Ue(d,g);_.position.y=.015,_.position.z=-.27,_.position.x=.17,_.rotation.x=-Math.PI/2,n.add(_);const m=new on(o,.5,2);return m.position.set(0,.2,0),n.add(m),n.position.copy(e),n.position.y=.2,n.userData={originalY:e.y+.2,floatOffset:Math.random()*Math.PI*2,rotationSpeed:.2+Math.random()*.3},n}createSerum(e,t){const n=new un(.3,16,16),i=new rt({color:this.getSerumColor(t),emissive:this.getSerumColor(t),emissiveIntensity:.8,metalness:.9,roughness:.2,transparent:!0,opacity:.9}),r=new Ue(n,i);r.position.copy(e),r.position.y=.5;const o=new on(this.getSerumColor(t),1.5,4);o.position.copy(r.position),this.scene.add(o);const l=new un(.5,16,16),h=new an({color:this.getSerumColor(t),transparent:!0,opacity:.3,side:mt}),u=new Ue(l,h);return u.position.copy(r.position),this.scene.add(u),this.animateSerum(r,u,o),this.scene.add(r),{mesh:r,light:o,glow:u,id:t,collected:!1}}getSerumColor(e){const t=[16733440,65535,16711935,16776960,65280];return t[e%t.length]}animateSerum(e,t,n){const i=e.position.y,r=Date.now(),o=()=>{if(!e.parent)return;const l=Date.now()-r;e.position.y=i+Math.sin(l*.002)*.2,t.position.y=e.position.y,n.position.y=e.position.y;const h=.7+Math.sin(l*.003)*.3;t.scale.set(h,h,h),n.intensity=1.5*h,requestAnimationFrame(o)};o()}update(e,t){if(this.processNoteCollectionEffects(),this.noteCollectionParticles.length>0){const o=Date.now();for(let l=this.noteCollectionParticles.length-1;l>=0;l--){const h=this.noteCollectionParticles[l],u=o-h.userData.creationTime;if(u>h.userData.lifetime)this.scene.remove(h),h.geometry.dispose(),h.material.dispose(),this.noteCollectionParticles.splice(l,1);else{const p=1-u/h.userData.lifetime;if(h.material.opacity=p*.7,h.userData.velocities){const a=h.geometry.attributes.position.array,c=h.userData.velocities,d=a.length/3,g=Math.min(d,10),_=Math.floor(Math.random()*(d-g));for(let m=0;m<g;m++){const y=(_+m)%d*3;a[y]+=c[y]*e,a[y+1]+=c[y+1]*e,a[y+2]+=c[y+2]*e}h.geometry.attributes.position.needsUpdate=!0}}}}if(this._frameCounter||(this._frameCounter=0),this._frameCounter++,this._frameCounter%3!==0)return;const n=performance.now()*.001,i=Math.min(3,this.storyNotes.length),r=Math.floor(n*3)%Math.max(1,this.storyNotes.length-i);for(let o=0;o<i;o++){const l=(r+o)%this.storyNotes.length,h=this.storyNotes[l];if(!h.collected&&h.mesh&&(!t||this.isInView(h.mesh,t))){const u=Math.sin(n+h.mesh.userData.floatOffset);h.mesh.position.y=h.mesh.userData.originalY+u*.1,h.mesh.rotation.y+=e*.3}}if(!(this.noteCollectionParticles.length>0)&&this.collectibleItems.length>0){const o=Math.min(2,this.collectibleItems.length);for(let l=0;l<o;l++){const h=(r+l)%this.collectibleItems.length,u=this.collectibleItems[h];!u.collected&&u.mesh&&(!t||this.isInView(u.mesh,t))}}}isInView(e,t){return!e||!e.geometry?!1:(e.geometry.boundingSphere||e.geometry.computeBoundingSphere(),e.geometry.boundingSphere&&t.intersectsObject(e))}checkCollisions(e){const t={note:null};if(window.performance&&window.performance.now){const h=window.performance.now();if(this._lastCollisionCheck&&h-this._lastCollisionCheck<200)return t;this._lastCollisionCheck=h}const n=1.5,i=e.x,r=e.z,o=Math.min(3,this.storyNotes.length),l=Math.floor(Math.random()*this.storyNotes.length);for(let h=0;h<o;h++){const u=(l+h)%this.storyNotes.length,p=this.storyNotes[u];if(!p.collected&&p.mesh){const a=Math.abs(i-p.position.x),c=Math.abs(r-p.position.z);if(a<n&&c<n){const d=i-p.position.x,g=r-p.position.z;if(d*d+g*g<2.25){p.collected=!0,p.mesh.visible=!1,p.mesh.children&&p.mesh.children.forEach(f=>{f instanceof on&&(f.intensity=0)});const m=p.content;this.noteCollectionQueue.push({note:p,time:performance.now(),processed:!1,reducedEffects:!0}),this.soundManager&&setTimeout(()=>{this.soundManager.play("note_open")},100),t.note=m;break}}}}return t}processNoteCollectionEffects(){if(this.noteCollectionQueue.length===0)return;const e=this.noteCollectionQueue[0];if(e.processed){this.noteCollectionQueue.shift();return}if(e.processed=!0,e.note&&e.note.position){const n=new pt;let i;e.note.content.title.includes("Medical")||e.note.content.title.includes("Lab")?i=4500223:e.note.content.title.includes("Security")||e.note.content.title.includes("WCKD")?i=16729156:i=16772676;const r=new hi({color:i,size:.08,transparent:!0,opacity:.7,blending:Bn}),o=new Float32Array(5*3);for(let h=0;h<5;h++){const u=h/5*Math.PI*2,p=.2;o[h*3]=e.note.position.x+p*Math.cos(u),o[h*3+1]=e.note.position.y+.3,o[h*3+2]=e.note.position.z+p*Math.sin(u)}n.setAttribute("position",new St(o,3));const l=new Di(n,r);l.userData={creationTime:Date.now(),lifetime:600,initialPositions:o.slice(),velocities:new Float32Array(5*3)};for(let h=0;h<5;h++)l.userData.velocities[h*3]=(Math.random()-.5)*.1,l.userData.velocities[h*3+1]=.2+Math.random()*.2,l.userData.velocities[h*3+2]=(Math.random()-.5)*.1;this.scene.add(l),this.noteCollectionParticles.push(l)}}reset(){this.storyNotes.forEach(e=>{e.collected=!1,e.mesh&&(e.mesh.visible=!0)}),this.collectibleItems.forEach(e=>{e.collected=!1,e.mesh&&(e.mesh.visible=!0)}),this.noteCollectionQueue=[],this.noteCollectionParticles.forEach(e=>{this.scene.remove(e),e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()}),this.noteCollectionParticles=[]}getNotePositions(){return this.storyNotes.filter(e=>!e.collected).map(e=>e.position)}}class rm{constructor(e,t,n,i,r,o){this.scene=e,this.maze=t,this.mazeSize=n,this.cellSize=i,this.position=r.clone(),this.soundManager=o||null,this.speed=2,this.detectionRange=15,this.chaseRange=30,this.damageRange=2.5,this.rotationSpeed=2,this.state="patrol",this.patrolTarget=null,this.pathTimer=0,this.pathUpdateInterval=2,this.lastKnownTargetPosition=new P,this.targetVisible=!1,this.alertTime=0,this.lastSoundTime=0,this.soundInterval=5,this.createGrieverMesh()}createGrieverMesh(){this.mesh=new Ht;const e=new un(1.2,16,16),t=new rt({color:2236962,roughness:.7,metalness:.5}),n=new Ue(e,t);n.castShadow=!0,this.mesh.add(n),this.createAppendages(),this.createEyes(),this.createSpikes(),this.mesh.position.copy(this.position),this.scene.add(this.mesh)}createAppendages(){const e=new rt({color:5592405,roughness:.3,metalness:.8}),t=6;for(let r=0;r<t;r++){const o=r/t*Math.PI*2,l=new Vt(.2,.15,1.4,8),h=new Ue(l,e);h.position.set(Math.cos(o)*1.2,0,Math.sin(o)*1.2),h.rotation.z=Math.PI/2,h.rotation.y=-o,h.castShadow=!0,this.mesh.add(h);const u=new Vt(.15,.1,1.6,8),p=new Ue(u,e);p.position.set(Math.cos(o)*2.5,-.2+Math.sin(r*1.3)*.2,Math.sin(o)*2.5),p.rotation.z=Math.PI/2+Math.PI/6,p.rotation.y=-o,p.castShadow=!0,this.mesh.add(p);const a=new pi(.15,.5,8),c=new rt({color:8947848,roughness:.2,metalness:.9}),d=new Ue(a,c);d.position.set(Math.cos(o)*3.5,-.6+Math.sin(r*1.7)*.3,Math.sin(o)*3.5),d.rotation.x=Math.PI/2,d.rotation.y=-o,d.castShadow=!0,this.mesh.add(d)}const n=5,i=3;for(let r=0;r<n;r++){const o=r/n,l=.35-o*.2,h=new un(l,12,12),u=new Ue(h,e);if(u.position.set(-1.2-o*i*.7,.8+o*.8,0),u.castShadow=!0,this.mesh.add(u),r===n-1){const p=new pi(.15,.8,8),a=new rt({color:11154227,roughness:.2,metalness:.7,emissive:3346705,emissiveIntensity:.3}),c=new Ue(p,a);c.position.set(u.position.x-.6,u.position.y+.2,0),c.rotation.z=-Math.PI/4,c.castShadow=!0,this.mesh.add(c)}}}createEyes(){const e=new un(.2,12,12),t=new rt({color:16724736,emissive:16711680,emissiveIntensity:1,roughness:.2,metalness:.3}),n=new Ue(e,t);n.position.set(.8,.5,.6),this.mesh.add(n);const i=new Ue(e,t);i.position.set(.8,.5,-.6),this.mesh.add(i);const r=new on(16720384,1,5);r.position.set(.8,.5,0),this.mesh.add(r),this.leftEye=n,this.rightEye=i,this.eyeLight=r}createSpikes(){const e=new rt({color:3355443,roughness:.5,metalness:.7}),t=8;for(let n=0;n<t;n++){const i=n/t*Math.PI-Math.PI/2,r=.5+Math.random()*.5,o=new pi(.15,r,8),l=new Ue(o,e);l.position.set(Math.cos(i)*.8,1+Math.random()*.2,Math.sin(i)*.8),l.rotation.x=Math.PI/2,l.rotation.z=-i+Math.PI/2,l.castShadow=!0,this.mesh.add(l)}}update(e,t,n=1){this.speed=2*n,this.detectionRange=15*n,this.chaseRange=30*n;const i=this.position.distanceTo(t);switch(i<this.detectionRange?this.canSeePlayer(t)?(this.state="chase",this.lastKnownTargetPosition.copy(t),this.targetVisible=!0,this.alertTime=0,i<this.detectionRange/2&&this.soundManager&&(this.soundManager.fadeToMusic("chase",3e3),this.state!=="chase"&&this.soundManager.play("grieverAlert"))):this.state==="chase"&&(this.state="alert",this.targetVisible=!1,this.alertTime=0):(this.state==="chase"||this.state==="alert")&&(this.alertTime+=e,this.alertTime>10&&(this.state="patrol",this.soundManager&&this.soundManager.fadeToMusic("main",5e3))),this.state){case"patrol":this.updatePatrolMovement(e);break;case"alert":this.updateAlertMovement(e);break;case"chase":this.updateChaseMovement(e,t);break}this.mesh.position.copy(this.position),this.updateSounds(i,e),this.animateEyes(e)}updateSimple(e){this.animateEyes(e),Math.random()<.01&&(this.mesh.rotation.y+=(Math.random()-.5)*Math.PI*.5),this.alertTime+=e,this.state==="alert"&&this.alertTime>this.alertDuration&&(this.state="patrol",this.alertTime=0)}updatePatrolMovement(e){(!this.patrolTarget||this.position.distanceTo(this.patrolTarget)<1)&&(this.patrolTarget=this.getRandomNavigablePosition()),this.moveToward(this.patrolTarget,e*this.speed*.5)}updateAlertMovement(e){this.position.distanceTo(this.lastKnownTargetPosition)>1?this.moveToward(this.lastKnownTargetPosition,e*this.speed*.7):this.mesh.rotation.y+=e*this.rotationSpeed*2}updateChaseMovement(e,t){this.moveToward(t,e*this.speed)}moveToward(e,t){const n=new P().subVectors(e,this.position).normalize(),i=this.position.clone().add(n.multiplyScalar(t));if(!this.checkWallCollision(i))this.position.copy(i);else{const r=new P(-n.z,0,n.x).multiplyScalar(t),o=this.position.clone().add(r);this.checkWallCollision(o)||this.position.copy(o)}if(n.length()>.1){const r=Math.atan2(n.x,n.z);let o=this.mesh.rotation.y,h=r-o;for(;h>Math.PI;)h-=Math.PI*2;for(;h<-Math.PI;)h+=Math.PI*2;this.mesh.rotation.y+=h*.1}}getRandomNavigablePosition(){let e,t;for(let n=0;n<20;n++){const i=Math.floor(Math.random()*(this.mazeSize-2))+1,r=Math.floor(Math.random()*(this.mazeSize-2))+1;if(this.maze[i][r]===0){e=(r-this.mazeSize/2)*this.cellSize,t=(i-this.mazeSize/2)*this.cellSize;break}}return e===void 0||t===void 0?this.position.clone():new P(e,this.position.y,t)}checkWallCollision(e){const n=Math.floor((e.x+this.mazeSize*this.cellSize/2)/this.cellSize),i=Math.floor((e.z+this.mazeSize*this.cellSize/2)/this.cellSize);for(let r=-1;r<=1;r++)for(let o=-1;o<=1;o++){const l=n+r,h=i+o;if(!(l<0||l>=this.mazeSize||h<0||h>=this.mazeSize)&&this.maze[h][l]===1){const u=(l-this.mazeSize/2)*this.cellSize,p=(h-this.mazeSize/2)*this.cellSize,a=e.x-u,c=e.z-p;if(Math.abs(a)<this.cellSize/2+1.5&&Math.abs(c)<this.cellSize/2+1.5)return!0}}return!1}canSeePlayer(e){const t=new P().subVectors(e,this.position).normalize(),n=new Jc(this.position.clone(),t,0,this.position.distanceTo(e)),i=[];for(let o=0;o<this.mazeSize;o++)for(let l=0;l<this.mazeSize;l++)if(this.maze[o][l]===1){const h=new $t(this.cellSize,this.cellSize*2,this.cellSize),u=new Ue(h);u.position.set((l-this.mazeSize/2)*this.cellSize,this.cellSize,(o-this.mazeSize/2)*this.cellSize),i.push(u)}return n.intersectObjects(i).length===0}checkPlayerCollision(e){return this.position.distanceTo(e)<this.damageRange}updateSounds(e,t){this.soundManager&&(this.lastSoundTime+=t,this.lastSoundTime>this.soundInterval&&(this.lastSoundTime=0,e<this.chaseRange&&(1-e/this.chaseRange,this.state==="chase"?this.soundManager.play("grieverAttack",1):this.soundManager.play("grieverNear",1))))}animateEyes(e){let t=1,n=.5,i=1;switch(this.state){case"patrol":t=.5,n=.3,i=.7;break;case"alert":t=2,n=.5,i=1;break;case"chase":t=4,n=.8,i=1.2;break}const r=n+(Math.sin(Date.now()*.001*t)+1)/2*(i-n);this.eyeLight.intensity=r,this.leftEye.material.emissiveIntensity=r,this.rightEye.material.emissiveIntensity=r,this.mesh.children.forEach((o,l)=>{if(l<18){const h=l%6/6*Math.PI*2,u=this.state==="chase"?10:5;o.position.y+=Math.sin(Date.now()*.01+h)*.01*u*e}})}}class am{constructor(e,t,n){this.scene=e,this.gameWorld=t,this.soundManager=n,this.grievers=[]}addGrievers(e){this.clearGrievers();let t;switch(e){case"easy":t=1;break;case"normal":t=2;break;case"hard":t=3;break;default:t=1}for(let n=0;n<t;n++){const i=this.findGrieverStartPosition(),r=new rm(this.scene,this.gameWorld.maze,this.gameWorld.mazeSize,this.gameWorld.cellSize,i,this.soundManager);this.grievers.push(r)}}clearGrievers(){this.grievers.forEach(e=>{this.scene.remove(e.mesh)}),this.grievers=[]}getGrievers(){return this.grievers}updateGrievers(e,t,n,i,r){const o={playerDied:!1,playerWasHit:!1,damage:0};if(!this.grievers||this.grievers.length===0)return o;this.grieverFrameCount=(this.grieverFrameCount||0)+1;const l=Math.min(1+Math.floor(this.grieverFrameCount%this.grievers.length),this.grievers.length);let h=0,u=1/0;for(let g=0;g<this.grievers.length;g++){const _=this.grievers[g].position.distanceTo(t);_<u&&(u=_,h=g)}const p=this.grievers[h],a=n.isNight?2:n.isTransitioning?1.5:1;u<30?(p.update(e,t,a),u<3&&p.checkPlayerCollision(t)&&(o.playerWasHit=!0,o.damage=34,this.soundManager&&this.soundManager.play("grieverAttack",1))):p.updateSimple(e);let c=1;const d=this.grieverFrameCount%this.grievers.length;for(let g=1;c<l&&g<this.grievers.length;g++){const _=(d+g)%this.grievers.length;if(_===h)continue;const m=this.grievers[_],f=m.position.distanceTo(t);f>50?m.animateEyes(e):f<30?(m.updateSimple(e),f<5&&m.checkPlayerCollision(t)&&(o.playerWasHit=!0,o.damage=34,this.soundManager&&this.soundManager.play("grieverAttack",1))):m.animateEyes(e),c++}return o}findGrieverStartPosition(){const e=(-this.gameWorld.mazeSize/2+1)*this.gameWorld.cellSize,t=(-this.gameWorld.mazeSize/2+1)*this.gameWorld.cellSize;let n,i,r,o=this.gameWorld.mazeSize*this.gameWorld.cellSize*.5;do{const l=Math.floor(Math.random()*(this.gameWorld.mazeSize-2))+1,h=Math.floor(Math.random()*(this.gameWorld.mazeSize-2))+1;this.gameWorld.maze[l][h]===0?(n=(h-this.gameWorld.mazeSize/2)*this.gameWorld.cellSize,i=(l-this.gameWorld.mazeSize/2)*this.gameWorld.cellSize,r=Math.sqrt(Math.pow(n-e,2)+Math.pow(i-t,2))):r=0}while(r<o);return new P(n,1.5,i)}}class ma{static generateRandomPositions(e,t,n,i){const r=[],o=[];for(let h=1;h<n-1;h++)for(let u=1;u<n-1;u++)if(t[h][u]===0){if(h===1&&u===1||h===n-2&&u===n-2)continue;o.push({x:u,z:h})}return ma.shuffleArray(o),o.slice(0,e).forEach(h=>{r.push(new P((h.x-n/2)*i,.5,(h.z-n/2)*i))}),r}static shuffleArray(e){for(let t=e.length-1;t>0;t--){const n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}return e}static formatTime(e){const t=Math.floor(e/60),n=Math.floor(e%60);return`${t.toString().padStart(2,"0")}:${n.toString().padStart(2,"0")}`}static distance(e,t){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2)+Math.pow(t.z-e.z,2))}static clamp(e,t,n){return Math.max(t,Math.min(n,e))}static lerp(e,t,n){return e+(t-e)*n}}class om{constructor(){this.isVisible=!1,this.createMinimap()}createMinimap(){this.container=document.createElement("div"),this.container.className="minimap-container",this.canvas=document.createElement("canvas"),this.canvas.className="minimap-canvas",this.canvas.width=200,this.canvas.height=200,this.ctx=this.canvas.getContext("2d"),this.legend=document.createElement("div"),this.legend.className="minimap-legend",[{class:"legend-player",text:"Player"},{class:"legend-griever",text:"Griever"},{class:"legend-serum",text:"Serum"},{class:"legend-note",text:"Note"},{class:"legend-exit",text:"Exit"}].forEach(t=>{const n=document.createElement("div"),i=document.createElement("span");i.className=t.class,n.appendChild(i),n.appendChild(document.createTextNode(t.text)),this.legend.appendChild(n)}),this.container.appendChild(this.canvas),this.container.appendChild(this.legend),document.body.appendChild(this.container)}toggle(){this.isVisible=!this.isVisible,this.container.style.display=this.isVisible?"block":"none"}render(e,t){if(!this.isVisible)return;const n=this.ctx,i=this.canvas.width,r=this.canvas.height,o=e.length;n.fillStyle="#000",n.fillRect(0,0,i,r);const l=Math.min(i/o,r/o);n.fillStyle="#444";for(let u=0;u<o;u++)for(let p=0;p<o;p++)e[u][p]===1&&n.fillRect(p*l,u*l,l,l);const h=(u,p)=>{const c=Math.floor(u/4+o/2),d=Math.floor(p/4+o/2);return{x:c*l+l/2,y:d*l+l/2}};if(t){if(t.exit){const u=h(t.exit.x,t.exit.z);n.fillStyle="#4CAF50",n.beginPath(),n.arc(u.x,u.y,l/2,0,Math.PI*2),n.fill()}if(t.serums&&t.serums.length>0&&(n.fillStyle="#2196F3",t.serums.forEach(u=>{const p=h(u.x,u.z);n.beginPath(),n.arc(p.x,p.y,l/3,0,Math.PI*2),n.fill()})),t.notes&&t.notes.length>0&&(n.fillStyle="#FFC107",t.notes.forEach(u=>{const p=h(u.x,u.z);n.beginPath(),n.arc(p.x,p.y,l/3,0,Math.PI*2),n.fill()})),t.grievers&&t.grievers.length>0&&(n.fillStyle="#F44336",t.grievers.forEach(u=>{const p=h(u.x,u.z);n.beginPath(),n.arc(p.x,p.y,l/2.5,0,Math.PI*2),n.fill()})),t.player){const u=h(t.player.x,t.player.z);if(n.fillStyle="#FFFFFF",n.beginPath(),n.arc(u.x,u.y,l/2,0,Math.PI*2),n.fill(),t.playerDirection){const p=t.playerDirection,a=l*.8;n.strokeStyle="#FFFFFF",n.lineWidth=2,n.beginPath(),n.moveTo(u.x,u.y),n.lineTo(u.x+p.x*a,u.y+p.z*a),n.stroke()}}}}}class lm{constructor(){this.gameState=new Bp,this.scene=new Uc,this.scene.background=new De(526344),this.clock=new al,this.frameRateLimit=60,this.lastTime=0,this.lastRenderTime=0,this.frameCount=0,this.fpsDisplayEnabled=!1,this.fpsUpdateInterval=.5,this.fpsTimer=0,this.framesSinceLastFPSUpdate=0,this.camera=new Rt(75,window.innerWidth/window.innerHeight,.1,1e3),this.camera.position.y=1.6,this.loadingManager=new il,this.setupLoadingManager(),this.loadingTimeout=setTimeout(()=>{console.log("Loading timeout reached, dismissing loading screen anyway"),this.ui.dismissLoadingScreen()},5e3),this.minimapEnabled=!1,this.cinematicsShown=!1,this.introPlayed=!1}async initialize(){this.renderer=new zp,await this.renderer.initialize(),this.ui=new kp(this.gameState),this.minimap=new om;try{this.soundManager=new Jp(this.camera,this.loadingManager),this.soundManager&&this.soundManager.setMasterVolume(.7)}catch(i){console.error("Failed to initialize sound manager:",i),this.soundManager=null}this.storyManager=new im(this.soundManager),this.storyManager.initialize(),this.gameWorld=new $p(this.scene,this.loadingManager);const e=(-this.gameWorld.mazeSize/2+1)*this.gameWorld.cellSize,t=(-this.gameWorld.mazeSize/2+1)*this.gameWorld.cellSize;this.startPosition={x:e,y:1.6,z:t},this.player=new Lo(this.scene,this.camera,document.body,this.soundManager),this.player.controls.getObject().position.set(e,1.6,t),this.entityManager=new am(this.scene,this.gameWorld,this.soundManager),this.collectibles=new sm(this.scene,this.soundManager);const n=this.storyManager.getStoryNotes();return this.collectibles.createStoryNotes(this.generateRandomPositions(n.length,this.gameWorld.maze,this.gameWorld.mazeSize,this.gameWorld.cellSize),n),this.setupEvents(),this.inputManager=new Gp(this.renderer.getCanvas(),{onEscape:()=>this.handleEscapeKey(),onInteract:()=>this.checkInteractions(),onToggleMinimap:()=>this.toggleMinimap(),onToggleFPS:()=>this.toggleFPSDisplay()}),document.addEventListener("cinematicsComplete",()=>{this.onCinematicsComplete()}),this.lastTime=performance.now(),this.animate(),window.addEventListener("resize",()=>this.handleResize()),this}onCinematicsComplete(){this.cinematicsShown=!0,setTimeout(()=>{this.storyManager.showObjectiveNotification("Find serum vials to slow the infection")},1e3),this.player&&(this.player.unlock(),setTimeout(()=>{this.renderer.getCanvas().focus(),this.player.lock(),this.entityManager.addGrievers(this.gameState.difficulty),this.soundManager&&(this.soundManager.playMusic("main"),this.soundManager.fadeInAmbient("wind",.5))},500)),this.gameState.resumeGame()}handleResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.handleResize()}toggleMinimap(){this.minimapEnabled=!this.minimapEnabled,this.minimap.toggle(),this.showCheatNotification("Minimap "+(this.minimapEnabled?"Activated":"Deactivated"))}showCheatNotification(e){const t=document.createElement("div");t.className="cheat-notification",t.textContent=e,document.body.appendChild(t),setTimeout(()=>{document.body.removeChild(t)},2e3)}updateMinimap(){if(!this.minimapEnabled||!this.minimap)return;const e=this.player.getPosition(),t=this.player.getDirection(),n=this.entityManager.getGrievers().map(h=>h.position),i=this.gameWorld.getKeyPositions(),r=this.collectibles.getNotePositions(),o=this.gameWorld.getExitPosition(),l={player:e,playerDirection:t,grievers:n,serums:i,notes:r,exit:o};this.minimap.render(this.gameWorld.maze,l)}setupLoadingManager(){this.loadingManager.itemStart("mazekiller-init"),this.loadingManager.onProgress=(e,t,n)=>{const i=t/n*100;this.ui&&this.ui.updateLoadingProgress(i),console.log(`Loading: ${i.toFixed(2)}% - ${e}`)},this.loadingManager.onLoad=()=>{console.log("All resources loaded"),this.ui&&this.ui.dismissLoadingScreen()},this.loadingManager.onError=e=>{console.error("Error loading:",e),this.ui&&this.ui.dismissLoadingScreen()}}setupEvents(){this.ui.setupEventListeners({onStart:()=>this.startGame(),onRestart:()=>this.resetGame(),onResume:()=>this.resumeGame(),onCloseNote:()=>this.hideStoryNote()}),this.player.addEventListener("lock",()=>{this.gameState.gameStarted||this.gameState.startGame(),this.gameState.gamePaused=!1,this.ui.hidePauseMenu()}),this.player.addEventListener("unlock",()=>{if(this.player._isInteractionUnlock){this.player._isInteractionUnlock=!1;return}this.gameState.gameStarted&&!this.gameState.gameOver&&!this.gameState.noteReading&&this.showPauseMenu()})}reinitializePlayer(){try{let e=null;this.player&&this.player.controls&&(e=this.player.controls.getObject().position.clone()),console.log("[DEBUG] Re-creating player with canvas element");const t=new Lo(this.scene,this.camera,this.renderer.getCanvas(),this.soundManager);window.player=t,this.player=t,e?this.player.controls.getObject().position.copy(e):this.player.controls.getObject().position.set(this.startPosition.x,this.startPosition.y,this.startPosition.z),this.setupEvents(),console.log("[DEBUG] Player successfully recreated with canvas:",{controls:this.player.controls?"Controls attached":"No controls",position:this.player.controls.getObject().position.toArray()})}catch(e){console.error("[FATAL] Error recreating player:",e)}}startGame(){if(this.ui.startGameUI(),!this.cinematicsShown&&!this.introPlayed){this.introPlayed=!0,this.gameState.pauseGame(),setTimeout(()=>{this.storyManager.startIntroCinematic()},1e3);return}this.renderer.getCanvas().focus(),console.log("Game started, canvas focused"),this.player.lock(),this.entityManager.addGrievers(this.gameState.difficulty),this.soundManager&&(this.soundManager.playMusic("main"),this.soundManager.fadeInAmbient("wind",.5)),this.gameState.startGame()}resumeGame(){this.ui.hidePauseMenu(),this.gameState.resumeGame(),setTimeout(()=>{try{this.player.lock()}catch(e){console.error("[DEBUG] Error in first lock attempt:",e)}},50),setTimeout(()=>{if(!this.player.isLocked())try{this.player.lock()}catch(e){console.error("[DEBUG] Error in second lock attempt:",e)}},150),setTimeout(()=>{if(!this.player.isLocked())try{const e=this.renderer.getCanvas();e&&e.requestPointerLock&&e.requestPointerLock()}catch(e){console.error("[DEBUG] Error in third lock attempt:",e)}},300)}showPauseMenu(){this.ui.showPauseMenu(),this.gameState.pauseGame(),this.player.unlock()}handleEscapeKey(){this.gameState.gameStarted&&!this.gameState.gameOver&&(this.gameState.gamePaused?this.resumeGame():this.showPauseMenu())}checkInteractions(){const e=this.player.getPosition(),t=this.collectibles.checkCollisions(e);t.note&&(this.gameState.incrementNotes(),this.showStoryNote(t.note),this.soundManager&&this.soundManager.playSfx("story_reveal"),this.storyManager.triggerMemoryFlashback())}showStoryNote(e){this.gameState.noteReading=!0,this.player.unlock(!0),this.ui.showStoryNote(e)}hideStoryNote(){this.ui.hideStoryNote(),this.gameState.noteReading=!1,this.gameState.gamePaused=!1,this.player.lock()}gameWin(){this.gameState.endGame(),this.player.unlock(),this.soundManager&&this.soundManager.playMusic("victory"),this.ui.showWinScreen(this.gameState.elapsedTime/1e3,this.player.infection)}gameLose(e){this.gameState.endGame(),this.player.unlock(),this.soundManager&&this.soundManager.playMusic("gameOver"),this.ui.showGameOverScreen(e)}resetGame(){this.ui.hideAllScreens(),this.gameState.reset(),this.ui.updateObjectiveDisplay(),this.player.reset(),this.player.controls.getObject().position.set(this.startPosition.x,this.startPosition.y,this.startPosition.z),this.gameWorld.resetKeys(),this.collectibles.reset(),this.ui.updateSerumCountDisplay(),this.entityManager.addGrievers(this.gameState.difficulty),this.soundManager&&this.soundManager.playMusic("main"),this.player.lock()}generateRandomPositions(e,t,n,i){return ma.generateRandomPositions(e,t,n,i)}animate(){if(requestAnimationFrame(()=>this.animate()),!this.renderer.isInitialized()){console.warn("[DEBUG] Skipping animation frame - renderer not ready");return}const e=performance.now(),t=Math.min((e-this.lastTime)/1e3,.1);if(this.lastTime=e,this.frameCount=(this.frameCount||0)+1,this.fpsDisplayEnabled&&this.updateFPSCounter(t),this.gameState.gameStarted)if(this.gameState.updateElapsedTime(),!this.gameState.gameOver&&!this.gameState.gamePaused){if(this.ui.updateTimerDisplay(),this.gameState.getRemainingTime()<=0){this.gameLose("time");return}if(this.frameCount%15===0){const o=this.gameWorld.updateTimeOfDay(this.gameState.elapsedTime/1e3);this.gameState.environmentStatus=o}this.frameCount%5===0&&(this.ui.updateTimeWarningOverlay(),this.ui.updateInfectionOverlay(this.player.infection)),this.gameState.objectiveTimer+=t,this.gameState.objectiveTimer>this.gameState.objectiveDisplayTime&&(this.gameState.cycleObjective(),this.ui.updateObjectiveDisplay());try{if(this.player.update(t,l=>l.distanceTo(this.player.getPosition())>.01?this.gameWorld.checkWallCollision(l):!1)==="infected"){this.gameLose("infected");return}}catch(o){console.error("[DEBUG] Error in player update:",o)}this.gameWorld.update(t,this.gameState.gamePaused);try{const o=this.frameCount%3===0;let l=null;if(o){l=new bs;const h=new Qe().multiplyMatrices(this.camera.projectionMatrix,this.camera.matrixWorldInverse);l.setFromProjectionMatrix(h)}this.collectibles.update(t,l)}catch(o){console.error("[DEBUG] Error in collectibles update:",o)}const n=this.player.getPosition(),i=this.entityManager.updateGrievers(t,n,this.gameState.environmentStatus,!1,this.gameState.serumCollected);if(i.playerWasHit&&i.damage>0&&this.player.takeDamage(i.damage)){this.gameLose("griever");return}this.gameWorld.checkKeyCollection(n)&&(console.log("[DEBUG] Key collected!"),this.gameState.serumCollected++,this.ui.updateSerumCountDisplay(),this.soundManager.play("collect"),this.gameState.currentObjective==="collect"&&(this.gameState.cycleObjective(),this.ui.updateObjectiveDisplay()));const r=this.collectibles.checkCollisions(n);if(r.note&&(console.log("[DEBUG] Note found:",r.note),this.ui.showNoteContent(r.note)),this.frameCount%3===0&&this.updateMinimap(),this.gameWorld.checkExit(n,this.gameState.serumCollected)){this.gameWin();return}}else this.gameWorld.update(0,!0);this.renderer.render(this.scene,this.camera)}toggleFPSDisplay(){this.fpsDisplayEnabled=!this.fpsDisplayEnabled;const e=document.getElementById("fps-counter");e&&(this.fpsDisplayEnabled?(e.classList.remove("hidden"),this.showCheatNotification("FPS Counter Enabled")):(e.classList.add("hidden"),this.showCheatNotification("FPS Counter Disabled")))}updateFPSCounter(e){if(this.framesSinceLastFPSUpdate++,this.fpsTimer+=e,this.fpsTimer>=this.fpsUpdateInterval){const t=Math.round(this.framesSinceLastFPSUpdate/this.fpsTimer),n=document.getElementById("fps-counter");n&&(n.textContent=`FPS: ${t}`,n.classList.remove("fps-good","fps-medium","fps-bad"),t>=50?n.classList.add("fps-good"):t>=30?n.classList.add("fps-medium"):n.classList.add("fps-bad")),this.framesSinceLastFPSUpdate=0,this.fpsTimer=0}}}document.addEventListener("DOMContentLoaded",async()=>{console.log("Initializing Maze Killer game...");try{const s=new lm;await s.initialize(),console.log("Game initialized successfully!"),window.game=s}catch(s){console.error("Error initializing game:",s)}});
