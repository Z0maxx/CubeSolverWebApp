(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(i){if(i.ep)return;i.ep=!0;const a=t(i);fetch(i.href,a)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const REVISION="155",MOUSE={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},TOUCH={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},CullFaceNone=0,CullFaceBack=1,CullFaceFront=2,PCFShadowMap=1,PCFSoftShadowMap=2,VSMShadowMap=3,FrontSide=0,BackSide=1,DoubleSide=2,NoBlending=0,NormalBlending=1,AdditiveBlending=2,SubtractiveBlending=3,MultiplyBlending=4,CustomBlending=5,AddEquation=100,SubtractEquation=101,ReverseSubtractEquation=102,MinEquation=103,MaxEquation=104,ZeroFactor=200,OneFactor=201,SrcColorFactor=202,OneMinusSrcColorFactor=203,SrcAlphaFactor=204,OneMinusSrcAlphaFactor=205,DstAlphaFactor=206,OneMinusDstAlphaFactor=207,DstColorFactor=208,OneMinusDstColorFactor=209,SrcAlphaSaturateFactor=210,NeverDepth=0,AlwaysDepth=1,LessDepth=2,LessEqualDepth=3,EqualDepth=4,GreaterEqualDepth=5,GreaterDepth=6,NotEqualDepth=7,MultiplyOperation=0,MixOperation=1,AddOperation=2,NoToneMapping=0,LinearToneMapping=1,ReinhardToneMapping=2,CineonToneMapping=3,ACESFilmicToneMapping=4,CustomToneMapping=5,UVMapping=300,CubeReflectionMapping=301,CubeRefractionMapping=302,EquirectangularReflectionMapping=303,EquirectangularRefractionMapping=304,CubeUVReflectionMapping=306,RepeatWrapping=1e3,ClampToEdgeWrapping=1001,MirroredRepeatWrapping=1002,NearestFilter=1003,NearestMipmapNearestFilter=1004,NearestMipmapLinearFilter=1005,LinearFilter=1006,LinearMipmapNearestFilter=1007,LinearMipmapLinearFilter=1008,UnsignedByteType=1009,ByteType=1010,ShortType=1011,UnsignedShortType=1012,IntType=1013,UnsignedIntType=1014,FloatType=1015,HalfFloatType=1016,UnsignedShort4444Type=1017,UnsignedShort5551Type=1018,UnsignedInt248Type=1020,AlphaFormat=1021,RGBAFormat=1023,LuminanceFormat=1024,LuminanceAlphaFormat=1025,DepthFormat=1026,DepthStencilFormat=1027,RedFormat=1028,RedIntegerFormat=1029,RGFormat=1030,RGIntegerFormat=1031,RGBAIntegerFormat=1033,RGB_S3TC_DXT1_Format=33776,RGBA_S3TC_DXT1_Format=33777,RGBA_S3TC_DXT3_Format=33778,RGBA_S3TC_DXT5_Format=33779,RGB_PVRTC_4BPPV1_Format=35840,RGB_PVRTC_2BPPV1_Format=35841,RGBA_PVRTC_4BPPV1_Format=35842,RGBA_PVRTC_2BPPV1_Format=35843,RGB_ETC1_Format=36196,RGB_ETC2_Format=37492,RGBA_ETC2_EAC_Format=37496,RGBA_ASTC_4x4_Format=37808,RGBA_ASTC_5x4_Format=37809,RGBA_ASTC_5x5_Format=37810,RGBA_ASTC_6x5_Format=37811,RGBA_ASTC_6x6_Format=37812,RGBA_ASTC_8x5_Format=37813,RGBA_ASTC_8x6_Format=37814,RGBA_ASTC_8x8_Format=37815,RGBA_ASTC_10x5_Format=37816,RGBA_ASTC_10x6_Format=37817,RGBA_ASTC_10x8_Format=37818,RGBA_ASTC_10x10_Format=37819,RGBA_ASTC_12x10_Format=37820,RGBA_ASTC_12x12_Format=37821,RGBA_BPTC_Format=36492,RED_RGTC1_Format=36283,SIGNED_RED_RGTC1_Format=36284,RED_GREEN_RGTC2_Format=36285,SIGNED_RED_GREEN_RGTC2_Format=36286,LinearEncoding=3e3,sRGBEncoding=3001,BasicDepthPacking=3200,RGBADepthPacking=3201,TangentSpaceNormalMap=0,ObjectSpaceNormalMap=1,NoColorSpace="",SRGBColorSpace="srgb",LinearSRGBColorSpace="srgb-linear",DisplayP3ColorSpace="display-p3",KeepStencilOp=7680,AlwaysStencilFunc=519,NeverCompare=512,LessCompare=513,EqualCompare=514,LessEqualCompare=515,GreaterCompare=516,NotEqualCompare=517,GreaterEqualCompare=518,AlwaysCompare=519,StaticDrawUsage=35044,GLSL3="300 es",_SRGBAFormat=1035,WebGLCoordinateSystem=2e3,WebGPUCoordinateSystem=2001;class EventDispatcher{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const a=i.indexOf(t);a!==-1&&i.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let a=0,s=i.length;a<s;a++)i[a].call(this,e);e.target=null}}}const _lut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let _seed=1234567;const DEG2RAD=Math.PI/180,RAD2DEG=180/Math.PI;function generateUUID(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(_lut[r&255]+_lut[r>>8&255]+_lut[r>>16&255]+_lut[r>>24&255]+"-"+_lut[e&255]+_lut[e>>8&255]+"-"+_lut[e>>16&15|64]+_lut[e>>24&255]+"-"+_lut[t&63|128]+_lut[t>>8&255]+"-"+_lut[t>>16&255]+_lut[t>>24&255]+_lut[n&255]+_lut[n>>8&255]+_lut[n>>16&255]+_lut[n>>24&255]).toLowerCase()}function clamp$1(r,e,t){return Math.max(e,Math.min(t,r))}function euclideanModulo(r,e){return(r%e+e)%e}function mapLinear(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function inverseLerp(r,e,t){return r!==e?(t-r)/(e-r):0}function lerp(r,e,t){return(1-t)*r+t*e}function damp(r,e,t,n){return lerp(r,e,1-Math.exp(-t*n))}function pingpong(r,e=1){return e-Math.abs(euclideanModulo(r,e*2)-e)}function smoothstep(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function smootherstep(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function randInt(r,e){return r+Math.floor(Math.random()*(e-r+1))}function randFloat(r,e){return r+Math.random()*(e-r)}function randFloatSpread(r){return r*(.5-Math.random())}function seededRandom(r){r!==void 0&&(_seed=r);let e=_seed+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function degToRad(r){return r*DEG2RAD}function radToDeg(r){return r*RAD2DEG}function isPowerOfTwo(r){return(r&r-1)===0&&r!==0}function ceilPowerOfTwo(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function floorPowerOfTwo(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function setQuaternionFromProperEuler(r,e,t,n,i){const a=Math.cos,s=Math.sin,o=a(t/2),l=s(t/2),c=a((e+n)/2),u=s((e+n)/2),h=a((e-n)/2),d=s((e-n)/2),f=a((n-e)/2),g=s((n-e)/2);switch(i){case"XYX":r.set(o*u,l*h,l*d,o*c);break;case"YZY":r.set(l*d,o*u,l*h,o*c);break;case"ZXZ":r.set(l*h,l*d,o*u,o*c);break;case"XZX":r.set(o*u,l*g,l*f,o*c);break;case"YXY":r.set(l*f,o*u,l*g,o*c);break;case"ZYZ":r.set(l*g,l*f,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function denormalize(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function normalize$1(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const MathUtils={DEG2RAD,RAD2DEG,generateUUID,clamp:clamp$1,euclideanModulo,mapLinear,inverseLerp,lerp,damp,pingpong,smoothstep,smootherstep,randInt,randFloat,randFloatSpread,seededRandom,degToRad,radToDeg,isPowerOfTwo,ceilPowerOfTwo,floorPowerOfTwo,setQuaternionFromProperEuler,normalize:normalize$1,denormalize};class Vector2{constructor(e=0,t=0){Vector2.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(clamp$1(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),a=this.x-e.x,s=this.y-e.y;return this.x=a*n-s*i+e.x,this.y=a*i+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Matrix3{constructor(e,t,n,i,a,s,o,l,c){Matrix3.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,a,s,o,l,c)}set(e,t,n,i,a,s,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=a,u[5]=l,u[6]=n,u[7]=s,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,a=this.elements,s=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],_=i[0],m=i[3],p=i[6],v=i[1],T=i[4],x=i[7],y=i[2],A=i[5],b=i[8];return a[0]=s*_+o*v+l*y,a[3]=s*m+o*T+l*A,a[6]=s*p+o*x+l*b,a[1]=c*_+u*v+h*y,a[4]=c*m+u*T+h*A,a[7]=c*p+u*x+h*b,a[2]=d*_+f*v+g*y,a[5]=d*m+f*T+g*A,a[8]=d*p+f*x+g*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*s*u-t*o*c-n*a*u+n*o*l+i*a*c-i*s*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*s-o*c,d=o*l-u*a,f=c*a-s*l,g=t*h+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(i*c-u*n)*_,e[2]=(o*n-i*s)*_,e[3]=d*_,e[4]=(u*t-i*l)*_,e[5]=(i*a-o*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(s*t-n*a)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,a,s,o){const l=Math.cos(a),c=Math.sin(a);return this.set(n*l,n*c,-n*(l*s+c*o)+s+e,-i*c,i*l,-i*(-c*s+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(_m3.makeScale(e,t)),this}rotate(e){return this.premultiply(_m3.makeRotation(-e)),this}translate(e,t){return this.premultiply(_m3.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const _m3=new Matrix3;function arrayNeedsUint32(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function createElementNS(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}const _cache={};function warnOnce(r){r in _cache||(_cache[r]=!0,console.warn(r))}function SRGBToLinear(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function LinearToSRGB(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const LINEAR_SRGB_TO_LINEAR_DISPLAY_P3=new Matrix3().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),LINEAR_DISPLAY_P3_TO_LINEAR_SRGB=new Matrix3().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function DisplayP3ToLinearSRGB(r){return r.convertSRGBToLinear().applyMatrix3(LINEAR_DISPLAY_P3_TO_LINEAR_SRGB)}function LinearSRGBToDisplayP3(r){return r.applyMatrix3(LINEAR_SRGB_TO_LINEAR_DISPLAY_P3).convertLinearToSRGB()}const TO_LINEAR={[LinearSRGBColorSpace]:r=>r,[SRGBColorSpace]:r=>r.convertSRGBToLinear(),[DisplayP3ColorSpace]:DisplayP3ToLinearSRGB},FROM_LINEAR={[LinearSRGBColorSpace]:r=>r,[SRGBColorSpace]:r=>r.convertLinearToSRGB(),[DisplayP3ColorSpace]:LinearSRGBToDisplayP3},ColorManagement={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(r){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!r},get workingColorSpace(){return LinearSRGBColorSpace},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=TO_LINEAR[e],i=FROM_LINEAR[t];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}};let _canvas;class ImageUtils{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{_canvas===void 0&&(_canvas=createElementNS("canvas")),_canvas.width=e.width,_canvas.height=e.height;const n=_canvas.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=_canvas}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=createElementNS("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),a=i.data;for(let s=0;s<a.length;s++)a[s]=SRGBToLinear(a[s]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(SRGBToLinear(t[n]/255)*255):t[n]=SRGBToLinear(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let sourceId=0;class Source{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:sourceId++}),this.uuid=generateUUID(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let a;if(Array.isArray(i)){a=[];for(let s=0,o=i.length;s<o;s++)i[s].isDataTexture?a.push(serializeImage(i[s].image)):a.push(serializeImage(i[s]))}else a=serializeImage(i);n.url=a}return t||(e.images[this.uuid]=n),n}}function serializeImage(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?ImageUtils.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let textureId=0;class Texture extends EventDispatcher{constructor(e=Texture.DEFAULT_IMAGE,t=Texture.DEFAULT_MAPPING,n=ClampToEdgeWrapping,i=ClampToEdgeWrapping,a=LinearFilter,s=LinearMipmapLinearFilter,o=RGBAFormat,l=UnsignedByteType,c=Texture.DEFAULT_ANISOTROPY,u=NoColorSpace){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:textureId++}),this.uuid=generateUUID(),this.name="",this.source=new Source(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=a,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Vector2(0,0),this.repeat=new Vector2(1,1),this.center=new Vector2(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Matrix3,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(warnOnce("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===sRGBEncoding?SRGBColorSpace:NoColorSpace),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==UVMapping)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case RepeatWrapping:e.x=e.x-Math.floor(e.x);break;case ClampToEdgeWrapping:e.x=e.x<0?0:1;break;case MirroredRepeatWrapping:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case RepeatWrapping:e.y=e.y-Math.floor(e.y);break;case ClampToEdgeWrapping:e.y=e.y<0?0:1;break;case MirroredRepeatWrapping:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return warnOnce("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===SRGBColorSpace?sRGBEncoding:LinearEncoding}set encoding(e){warnOnce("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===sRGBEncoding?SRGBColorSpace:NoColorSpace}}Texture.DEFAULT_IMAGE=null;Texture.DEFAULT_MAPPING=UVMapping;Texture.DEFAULT_ANISOTROPY=1;class Vector4{constructor(e=0,t=0,n=0,i=1){Vector4.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,a=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i+s[12]*a,this.y=s[1]*t+s[5]*n+s[9]*i+s[13]*a,this.z=s[2]*t+s[6]*n+s[10]*i+s[14]*a,this.w=s[3]*t+s[7]*n+s[11]*i+s[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,a;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(c+1)/2,x=(f+1)/2,y=(p+1)/2,A=(u+d)/4,b=(h+_)/4,w=(g+m)/4;return T>x&&T>y?T<.01?(n=0,i=.707106781,a=.707106781):(n=Math.sqrt(T),i=A/n,a=b/n):x>y?x<.01?(n=.707106781,i=0,a=.707106781):(i=Math.sqrt(x),n=A/i,a=w/i):y<.01?(n=.707106781,i=.707106781,a=0):(a=Math.sqrt(y),n=b/a,i=w/a),this.set(n,i,a,t),this}let v=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(h-_)/v,this.z=(d-u)/v,this.w=Math.acos((c+f+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class RenderTarget extends EventDispatcher{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Vector4(0,0,e,t),this.scissorTest=!1,this.viewport=new Vector4(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(warnOnce("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===sRGBEncoding?SRGBColorSpace:NoColorSpace),this.texture=new Texture(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:LinearFilter,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Source(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class WebGLRenderTarget extends RenderTarget{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class DataArrayTexture extends Texture{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=NearestFilter,this.minFilter=NearestFilter,this.wrapR=ClampToEdgeWrapping,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Data3DTexture extends Texture{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=NearestFilter,this.minFilter=NearestFilter,this.wrapR=ClampToEdgeWrapping,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Quaternion{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,a,s,o){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const d=a[s+0],f=a[s+1],g=a[s+2],_=a[s+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==d||c!==f||u!==g){let m=1-o;const p=l*d+c*f+u*g+h*_,v=p>=0?1:-1,T=1-p*p;if(T>Number.EPSILON){const y=Math.sqrt(T),A=Math.atan2(y,p*v);m=Math.sin(m*A)/y,o=Math.sin(o*A)/y}const x=o*v;if(l=l*m+d*x,c=c*m+f*x,u=u*m+g*x,h=h*m+_*x,m===1-o){const y=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=y,c*=y,u*=y,h*=y}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,a,s){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=a[s],d=a[s+1],f=a[s+2],g=a[s+3];return e[t]=o*g+u*h+l*f-c*d,e[t+1]=l*g+u*d+c*h-o*f,e[t+2]=c*g+u*f+o*d-l*h,e[t+3]=u*g-o*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,a=e._z,s=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),h=o(a/2),d=l(n/2),f=l(i/2),g=l(a/2);switch(s){case"XYZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"YZX":this._x=d*u*h+c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h-d*f*g;break;case"XZY":this._x=d*u*h-c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],a=t[8],s=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(a-c)*f,this._z=(s-i)*f}else if(n>o&&n>h){const f=2*Math.sqrt(1+n-o-h);this._w=(u-l)/f,this._x=.25*f,this._y=(i+s)/f,this._z=(a+c)/f}else if(o>h){const f=2*Math.sqrt(1+o-n-h);this._w=(a-c)/f,this._x=(i+s)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-n-o);this._w=(s-i)/f,this._x=(a+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(clamp$1(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,a=e._z,s=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+s*o+i*c-a*l,this._y=i*u+s*l+a*o-n*c,this._z=a*u+s*c+n*l-i*o,this._w=s*u-n*o-i*l-a*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,a=this._z,s=this._w;let o=s*e._w+n*e._x+i*e._y+a*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=n,this._y=i,this._z=a,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-t;return this._w=f*s+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*a+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=s*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=a*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(a),n*Math.cos(a),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Vector3{constructor(e=0,t=0,n=0){Vector3.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(_quaternion$4.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(_quaternion$4.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*i,this.y=a[1]*t+a[4]*n+a[7]*i,this.z=a[2]*t+a[5]*n+a[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,a=e.elements,s=1/(a[3]*t+a[7]*n+a[11]*i+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*i+a[12])*s,this.y=(a[1]*t+a[5]*n+a[9]*i+a[13])*s,this.z=(a[2]*t+a[6]*n+a[10]*i+a[14])*s,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,a=e.x,s=e.y,o=e.z,l=e.w,c=l*t+s*i-o*n,u=l*n+o*t-a*i,h=l*i+a*n-s*t,d=-a*t-s*n-o*i;return this.x=c*l+d*-a+u*-o-h*-s,this.y=u*l+d*-s+h*-a-c*-o,this.z=h*l+d*-o+c*-s-u*-a,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i,this.y=a[1]*t+a[5]*n+a[9]*i,this.z=a[2]*t+a[6]*n+a[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,a=e.z,s=t.x,o=t.y,l=t.z;return this.x=i*l-a*o,this.y=a*s-n*l,this.z=n*o-i*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return _vector$b.copy(this).projectOnVector(e),this.sub(_vector$b)}reflect(e){return this.sub(_vector$b.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(clamp$1(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _vector$b=new Vector3,_quaternion$4=new Quaternion;class Box3{constructor(e=new Vector3(1/0,1/0,1/0),t=new Vector3(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(_vector$a.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(_vector$a.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=_vector$a.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),_box$3.copy(e.boundingBox),_box$3.applyMatrix4(e.matrixWorld),this.union(_box$3);else{const i=e.geometry;if(i!==void 0)if(t&&i.attributes!==void 0&&i.attributes.position!==void 0){const a=i.attributes.position;for(let s=0,o=a.count;s<o;s++)_vector$a.fromBufferAttribute(a,s).applyMatrix4(e.matrixWorld),this.expandByPoint(_vector$a)}else i.boundingBox===null&&i.computeBoundingBox(),_box$3.copy(i.boundingBox),_box$3.applyMatrix4(e.matrixWorld),this.union(_box$3)}const n=e.children;for(let i=0,a=n.length;i<a;i++)this.expandByObject(n[i],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,_vector$a),_vector$a.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_center),_extents.subVectors(this.max,_center),_v0$2.subVectors(e.a,_center),_v1$7.subVectors(e.b,_center),_v2$4.subVectors(e.c,_center),_f0.subVectors(_v1$7,_v0$2),_f1.subVectors(_v2$4,_v1$7),_f2.subVectors(_v0$2,_v2$4);let t=[0,-_f0.z,_f0.y,0,-_f1.z,_f1.y,0,-_f2.z,_f2.y,_f0.z,0,-_f0.x,_f1.z,0,-_f1.x,_f2.z,0,-_f2.x,-_f0.y,_f0.x,0,-_f1.y,_f1.x,0,-_f2.y,_f2.x,0];return!satForAxes(t,_v0$2,_v1$7,_v2$4,_extents)||(t=[1,0,0,0,1,0,0,0,1],!satForAxes(t,_v0$2,_v1$7,_v2$4,_extents))?!1:(_triangleNormal.crossVectors(_f0,_f1),t=[_triangleNormal.x,_triangleNormal.y,_triangleNormal.z],satForAxes(t,_v0$2,_v1$7,_v2$4,_extents))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_vector$a).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(_vector$a).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_points[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_points[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_points[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_points[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_points[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_points[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_points[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_points[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_points),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const _points=[new Vector3,new Vector3,new Vector3,new Vector3,new Vector3,new Vector3,new Vector3,new Vector3],_vector$a=new Vector3,_box$3=new Box3,_v0$2=new Vector3,_v1$7=new Vector3,_v2$4=new Vector3,_f0=new Vector3,_f1=new Vector3,_f2=new Vector3,_center=new Vector3,_extents=new Vector3,_triangleNormal=new Vector3,_testAxis=new Vector3;function satForAxes(r,e,t,n,i){for(let a=0,s=r.length-3;a<=s;a+=3){_testAxis.fromArray(r,a);const o=i.x*Math.abs(_testAxis.x)+i.y*Math.abs(_testAxis.y)+i.z*Math.abs(_testAxis.z),l=e.dot(_testAxis),c=t.dot(_testAxis),u=n.dot(_testAxis);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const _box$2=new Box3,_v1$6=new Vector3,_v2$3=new Vector3;class Sphere{constructor(e=new Vector3,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):_box$2.setFromPoints(e).getCenter(n);let i=0;for(let a=0,s=e.length;a<s;a++)i=Math.max(i,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_v1$6.subVectors(e,this.center);const t=_v1$6.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(_v1$6,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_v2$3.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_v1$6.copy(e.center).add(_v2$3)),this.expandByPoint(_v1$6.copy(e.center).sub(_v2$3))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const _vector$9=new Vector3,_segCenter=new Vector3,_segDir=new Vector3,_diff=new Vector3,_edge1=new Vector3,_edge2=new Vector3,_normal$1=new Vector3;class Ray{constructor(e=new Vector3,t=new Vector3(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_vector$9)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=_vector$9.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(_vector$9.copy(this.origin).addScaledVector(this.direction,t),_vector$9.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){_segCenter.copy(e).add(t).multiplyScalar(.5),_segDir.copy(t).sub(e).normalize(),_diff.copy(this.origin).sub(_segCenter);const a=e.distanceTo(t)*.5,s=-this.direction.dot(_segDir),o=_diff.dot(this.direction),l=-_diff.dot(_segDir),c=_diff.lengthSq(),u=Math.abs(1-s*s);let h,d,f,g;if(u>0)if(h=s*l-o,d=s*o-l,g=a*u,h>=0)if(d>=-g)if(d<=g){const _=1/u;h*=_,d*=_,f=h*(h+s*d+2*o)+d*(s*h+d+2*l)+c}else d=a,h=Math.max(0,-(s*d+o)),f=-h*h+d*(d+2*l)+c;else d=-a,h=Math.max(0,-(s*d+o)),f=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-s*a+o)),d=h>0?-a:Math.min(Math.max(-a,-l),a),f=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-a,-l),a),f=d*(d+2*l)+c):(h=Math.max(0,-(s*a+o)),d=h>0?a:Math.min(Math.max(-a,-l),a),f=-h*h+d*(d+2*l)+c);else d=s>0?-a:a,h=Math.max(0,-(s*d+o)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(_segCenter).addScaledVector(_segDir,d),f}intersectSphere(e,t){_vector$9.subVectors(e.center,this.origin);const n=_vector$9.dot(this.direction),i=_vector$9.dot(_vector$9)-n*n,a=e.radius*e.radius;if(i>a)return null;const s=Math.sqrt(a-i),o=n-s,l=n+s;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,a,s,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(a=(e.min.y-d.y)*u,s=(e.max.y-d.y)*u):(a=(e.max.y-d.y)*u,s=(e.min.y-d.y)*u),n>s||a>i||((a>n||isNaN(n))&&(n=a),(s<i||isNaN(i))&&(i=s),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,_vector$9)!==null}intersectTriangle(e,t,n,i,a){_edge1.subVectors(t,e),_edge2.subVectors(n,e),_normal$1.crossVectors(_edge1,_edge2);let s=this.direction.dot(_normal$1),o;if(s>0){if(i)return null;o=1}else if(s<0)o=-1,s=-s;else return null;_diff.subVectors(this.origin,e);const l=o*this.direction.dot(_edge2.crossVectors(_diff,_edge2));if(l<0)return null;const c=o*this.direction.dot(_edge1.cross(_diff));if(c<0||l+c>s)return null;const u=-o*_diff.dot(_normal$1);return u<0?null:this.at(u/s,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Matrix4{constructor(e,t,n,i,a,s,o,l,c,u,h,d,f,g,_,m){Matrix4.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,a,s,o,l,c,u,h,d,f,g,_,m)}set(e,t,n,i,a,s,o,l,c,u,h,d,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=a,p[5]=s,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Matrix4().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/_v1$5.setFromMatrixColumn(e,0).length(),a=1/_v1$5.setFromMatrixColumn(e,1).length(),s=1/_v1$5.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,a=e.z,s=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(a),h=Math.sin(a);if(e.order==="XYZ"){const d=s*u,f=s*h,g=o*u,_=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+g*c,t[5]=d-_*c,t[9]=-o*l,t[2]=_-d*c,t[6]=g+f*c,t[10]=s*l}else if(e.order==="YXZ"){const d=l*u,f=l*h,g=c*u,_=c*h;t[0]=d+_*o,t[4]=g*o-f,t[8]=s*c,t[1]=s*h,t[5]=s*u,t[9]=-o,t[2]=f*o-g,t[6]=_+d*o,t[10]=s*l}else if(e.order==="ZXY"){const d=l*u,f=l*h,g=c*u,_=c*h;t[0]=d-_*o,t[4]=-s*h,t[8]=g+f*o,t[1]=f+g*o,t[5]=s*u,t[9]=_-d*o,t[2]=-s*c,t[6]=o,t[10]=s*l}else if(e.order==="ZYX"){const d=s*u,f=s*h,g=o*u,_=o*h;t[0]=l*u,t[4]=g*c-f,t[8]=d*c+_,t[1]=l*h,t[5]=_*c+d,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=s*l}else if(e.order==="YZX"){const d=s*l,f=s*c,g=o*l,_=o*c;t[0]=l*u,t[4]=_-d*h,t[8]=g*h+f,t[1]=h,t[5]=s*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*h+g,t[10]=d-_*h}else if(e.order==="XZY"){const d=s*l,f=s*c,g=o*l,_=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+_,t[5]=s*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=o*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_zero,e,_one)}lookAt(e,t,n){const i=this.elements;return _z.subVectors(e,t),_z.lengthSq()===0&&(_z.z=1),_z.normalize(),_x.crossVectors(n,_z),_x.lengthSq()===0&&(Math.abs(n.z)===1?_z.x+=1e-4:_z.z+=1e-4,_z.normalize(),_x.crossVectors(n,_z)),_x.normalize(),_y.crossVectors(_z,_x),i[0]=_x.x,i[4]=_y.x,i[8]=_z.x,i[1]=_x.y,i[5]=_y.y,i[9]=_z.y,i[2]=_x.z,i[6]=_y.z,i[10]=_z.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,a=this.elements,s=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],v=n[3],T=n[7],x=n[11],y=n[15],A=i[0],b=i[4],w=i[8],S=i[12],C=i[1],k=i[5],Z=i[9],N=i[13],B=i[2],I=i[6],Y=i[10],H=i[14],V=i[3],K=i[7],j=i[11],F=i[15];return a[0]=s*A+o*C+l*B+c*V,a[4]=s*b+o*k+l*I+c*K,a[8]=s*w+o*Z+l*Y+c*j,a[12]=s*S+o*N+l*H+c*F,a[1]=u*A+h*C+d*B+f*V,a[5]=u*b+h*k+d*I+f*K,a[9]=u*w+h*Z+d*Y+f*j,a[13]=u*S+h*N+d*H+f*F,a[2]=g*A+_*C+m*B+p*V,a[6]=g*b+_*k+m*I+p*K,a[10]=g*w+_*Z+m*Y+p*j,a[14]=g*S+_*N+m*H+p*F,a[3]=v*A+T*C+x*B+y*V,a[7]=v*b+T*k+x*I+y*K,a[11]=v*w+T*Z+x*Y+y*j,a[15]=v*S+T*N+x*H+y*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],a=e[12],s=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+a*l*h-i*c*h-a*o*d+n*c*d+i*o*f-n*l*f)+_*(+t*l*f-t*c*d+a*s*d-i*s*f+i*c*u-a*l*u)+m*(+t*c*h-t*o*f-a*s*h+n*s*f+a*o*u-n*c*u)+p*(-i*o*u-t*l*h+t*o*d+i*s*h-n*s*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],v=h*m*c-_*d*c+_*l*f-o*m*f-h*l*p+o*d*p,T=g*d*c-u*m*c-g*l*f+s*m*f+u*l*p-s*d*p,x=u*_*c-g*h*c+g*o*f-s*_*f-u*o*p+s*h*p,y=g*h*l-u*_*l-g*o*d+s*_*d+u*o*m-s*h*m,A=t*v+n*T+i*x+a*y;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/A;return e[0]=v*b,e[1]=(_*d*a-h*m*a-_*i*f+n*m*f+h*i*p-n*d*p)*b,e[2]=(o*m*a-_*l*a+_*i*c-n*m*c-o*i*p+n*l*p)*b,e[3]=(h*l*a-o*d*a-h*i*c+n*d*c+o*i*f-n*l*f)*b,e[4]=T*b,e[5]=(u*m*a-g*d*a+g*i*f-t*m*f-u*i*p+t*d*p)*b,e[6]=(g*l*a-s*m*a-g*i*c+t*m*c+s*i*p-t*l*p)*b,e[7]=(s*d*a-u*l*a+u*i*c-t*d*c-s*i*f+t*l*f)*b,e[8]=x*b,e[9]=(g*h*a-u*_*a-g*n*f+t*_*f+u*n*p-t*h*p)*b,e[10]=(s*_*a-g*o*a+g*n*c-t*_*c-s*n*p+t*o*p)*b,e[11]=(u*o*a-s*h*a-u*n*c+t*h*c+s*n*f-t*o*f)*b,e[12]=y*b,e[13]=(u*_*i-g*h*i+g*n*d-t*_*d-u*n*m+t*h*m)*b,e[14]=(g*o*i-s*_*i-g*n*l+t*_*l+s*n*m-t*o*m)*b,e[15]=(s*h*i-u*o*i+u*n*l-t*h*l-s*n*d+t*o*d)*b,this}scale(e){const t=this.elements,n=e.x,i=e.y,a=e.z;return t[0]*=n,t[4]*=i,t[8]*=a,t[1]*=n,t[5]*=i,t[9]*=a,t[2]*=n,t[6]*=i,t[10]*=a,t[3]*=n,t[7]*=i,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),a=1-n,s=e.x,o=e.y,l=e.z,c=a*s,u=a*o;return this.set(c*s+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*s,0,c*l-i*o,u*l+i*s,a*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,a,s){return this.set(1,n,a,0,e,1,s,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,a=t._x,s=t._y,o=t._z,l=t._w,c=a+a,u=s+s,h=o+o,d=a*c,f=a*u,g=a*h,_=s*u,m=s*h,p=o*h,v=l*c,T=l*u,x=l*h,y=n.x,A=n.y,b=n.z;return i[0]=(1-(_+p))*y,i[1]=(f+x)*y,i[2]=(g-T)*y,i[3]=0,i[4]=(f-x)*A,i[5]=(1-(d+p))*A,i[6]=(m+v)*A,i[7]=0,i[8]=(g+T)*b,i[9]=(m-v)*b,i[10]=(1-(d+_))*b,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let a=_v1$5.set(i[0],i[1],i[2]).length();const s=_v1$5.set(i[4],i[5],i[6]).length(),o=_v1$5.set(i[8],i[9],i[10]).length();this.determinant()<0&&(a=-a),e.x=i[12],e.y=i[13],e.z=i[14],_m1$2.copy(this);const c=1/a,u=1/s,h=1/o;return _m1$2.elements[0]*=c,_m1$2.elements[1]*=c,_m1$2.elements[2]*=c,_m1$2.elements[4]*=u,_m1$2.elements[5]*=u,_m1$2.elements[6]*=u,_m1$2.elements[8]*=h,_m1$2.elements[9]*=h,_m1$2.elements[10]*=h,t.setFromRotationMatrix(_m1$2),n.x=a,n.y=s,n.z=o,this}makePerspective(e,t,n,i,a,s,o=WebGLCoordinateSystem){const l=this.elements,c=2*a/(t-e),u=2*a/(n-i),h=(t+e)/(t-e),d=(n+i)/(n-i);let f,g;if(o===WebGLCoordinateSystem)f=-(s+a)/(s-a),g=-2*s*a/(s-a);else if(o===WebGPUCoordinateSystem)f=-s/(s-a),g=-s*a/(s-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,a,s,o=WebGLCoordinateSystem){const l=this.elements,c=1/(t-e),u=1/(n-i),h=1/(s-a),d=(t+e)*c,f=(n+i)*u;let g,_;if(o===WebGLCoordinateSystem)g=(s+a)*h,_=-2*h;else if(o===WebGPUCoordinateSystem)g=a*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const _v1$5=new Vector3,_m1$2=new Matrix4,_zero=new Vector3(0,0,0),_one=new Vector3(1,1,1),_x=new Vector3,_y=new Vector3,_z=new Vector3,_matrix=new Matrix4,_quaternion$3=new Quaternion;class Euler{constructor(e=0,t=0,n=0,i=Euler.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,a=i[0],s=i[4],o=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(clamp$1(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-clamp$1(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,a),this._z=0);break;case"ZXY":this._x=Math.asin(clamp$1(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-clamp$1(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(clamp$1(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,a)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-clamp$1(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return _matrix.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_matrix,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return _quaternion$3.setFromEuler(this),this.setFromQuaternion(_quaternion$3,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Euler.DEFAULT_ORDER="XYZ";class Layers{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let _object3DId=0;const _v1$4=new Vector3,_q1=new Quaternion,_m1$1=new Matrix4,_target=new Vector3,_position$3=new Vector3,_scale$2=new Vector3,_quaternion$2=new Quaternion,_xAxis=new Vector3(1,0,0),_yAxis=new Vector3(0,1,0),_zAxis=new Vector3(0,0,1),_addedEvent={type:"added"},_removedEvent={type:"removed"};class Object3D extends EventDispatcher{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_object3DId++}),this.uuid=generateUUID(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Object3D.DEFAULT_UP.clone();const e=new Vector3,t=new Euler,n=new Quaternion,i=new Vector3(1,1,1);function a(){n.setFromEuler(t,!1)}function s(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Matrix4},normalMatrix:{value:new Matrix3}}),this.matrix=new Matrix4,this.matrixWorld=new Matrix4,this.matrixAutoUpdate=Object3D.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Object3D.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Layers,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return _q1.setFromAxisAngle(e,t),this.quaternion.multiply(_q1),this}rotateOnWorldAxis(e,t){return _q1.setFromAxisAngle(e,t),this.quaternion.premultiply(_q1),this}rotateX(e){return this.rotateOnAxis(_xAxis,e)}rotateY(e){return this.rotateOnAxis(_yAxis,e)}rotateZ(e){return this.rotateOnAxis(_zAxis,e)}translateOnAxis(e,t){return _v1$4.copy(e).applyQuaternion(this.quaternion),this.position.add(_v1$4.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(_xAxis,e)}translateY(e){return this.translateOnAxis(_yAxis,e)}translateZ(e){return this.translateOnAxis(_zAxis,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_m1$1.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?_target.copy(e):_target.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),_position$3.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_m1$1.lookAt(_position$3,_target,this.up):_m1$1.lookAt(_target,_position$3,this.up),this.quaternion.setFromRotationMatrix(_m1$1),i&&(_m1$1.extractRotation(i.matrixWorld),_q1.setFromRotationMatrix(_m1$1),this.quaternion.premultiply(_q1.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(_addedEvent)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(_removedEvent)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(_removedEvent)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),_m1$1.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_m1$1.multiply(e.parent.matrixWorld)),e.applyMatrix4(_m1$1),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,a=this.children.length;i<a;i++){const s=this.children[i].getObjectsByProperty(e,t);s.length>0&&(n=n.concat(s))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_position$3,e,_scale$2),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_position$3,_quaternion$2,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const a=t[n];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let a=0,s=i.length;a<s;a++){const o=i[a];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];a(e.shapes,h)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(e.materials,this.material[l]));i.material=o}else i.material=a(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(a(e.animations,l))}}if(t){const o=s(e.geometries),l=s(e.materials),c=s(e.textures),u=s(e.images),h=s(e.shapes),d=s(e.skeletons),f=s(e.animations),g=s(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function s(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Object3D.DEFAULT_UP=new Vector3(0,1,0);Object3D.DEFAULT_MATRIX_AUTO_UPDATE=!0;Object3D.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const _v0$1=new Vector3,_v1$3=new Vector3,_v2$2=new Vector3,_v3$1=new Vector3,_vab=new Vector3,_vac=new Vector3,_vbc=new Vector3,_vap=new Vector3,_vbp=new Vector3,_vcp=new Vector3;let warnedGetUV=!1;class Triangle{constructor(e=new Vector3,t=new Vector3,n=new Vector3){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),_v0$1.subVectors(e,t),i.cross(_v0$1);const a=i.lengthSq();return a>0?i.multiplyScalar(1/Math.sqrt(a)):i.set(0,0,0)}static getBarycoord(e,t,n,i,a){_v0$1.subVectors(i,t),_v1$3.subVectors(n,t),_v2$2.subVectors(e,t);const s=_v0$1.dot(_v0$1),o=_v0$1.dot(_v1$3),l=_v0$1.dot(_v2$2),c=_v1$3.dot(_v1$3),u=_v1$3.dot(_v2$2),h=s*c-o*o;if(h===0)return a.set(-2,-1,-1);const d=1/h,f=(c*l-o*u)*d,g=(s*u-o*l)*d;return a.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,_v3$1),_v3$1.x>=0&&_v3$1.y>=0&&_v3$1.x+_v3$1.y<=1}static getUV(e,t,n,i,a,s,o,l){return warnedGetUV===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),warnedGetUV=!0),this.getInterpolation(e,t,n,i,a,s,o,l)}static getInterpolation(e,t,n,i,a,s,o,l){return this.getBarycoord(e,t,n,i,_v3$1),l.setScalar(0),l.addScaledVector(a,_v3$1.x),l.addScaledVector(s,_v3$1.y),l.addScaledVector(o,_v3$1.z),l}static isFrontFacing(e,t,n,i){return _v0$1.subVectors(n,t),_v1$3.subVectors(e,t),_v0$1.cross(_v1$3).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _v0$1.subVectors(this.c,this.b),_v1$3.subVectors(this.a,this.b),_v0$1.cross(_v1$3).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Triangle.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Triangle.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,a){return warnedGetUV===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),warnedGetUV=!0),Triangle.getInterpolation(e,this.a,this.b,this.c,t,n,i,a)}getInterpolation(e,t,n,i,a){return Triangle.getInterpolation(e,this.a,this.b,this.c,t,n,i,a)}containsPoint(e){return Triangle.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Triangle.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,a=this.c;let s,o;_vab.subVectors(i,n),_vac.subVectors(a,n),_vap.subVectors(e,n);const l=_vab.dot(_vap),c=_vac.dot(_vap);if(l<=0&&c<=0)return t.copy(n);_vbp.subVectors(e,i);const u=_vab.dot(_vbp),h=_vac.dot(_vbp);if(u>=0&&h<=u)return t.copy(i);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return s=l/(l-u),t.copy(n).addScaledVector(_vab,s);_vcp.subVectors(e,a);const f=_vab.dot(_vcp),g=_vac.dot(_vcp);if(g>=0&&f<=g)return t.copy(a);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(_vac,o);const m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return _vbc.subVectors(a,i),o=(h-u)/(h-u+(f-g)),t.copy(i).addScaledVector(_vbc,o);const p=1/(m+_+d);return s=_*p,o=d*p,t.copy(n).addScaledVector(_vab,s).addScaledVector(_vac,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let materialId=0;class Material extends EventDispatcher{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:materialId++}),this.uuid=generateUUID(),this.name="",this.type="Material",this.blending=NormalBlending,this.side=FrontSide,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=SrcAlphaFactor,this.blendDst=OneMinusSrcAlphaFactor,this.blendEquation=AddEquation,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=LessEqualDepth,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=AlwaysStencilFunc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=KeepStencilOp,this.stencilZFail=KeepStencilOp,this.stencilZPass=KeepStencilOp,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==NormalBlending&&(n.blending=this.blending),this.side!==FrontSide&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(a){const s=[];for(const o in a){const l=a[o];delete l.metadata,s.push(l)}return s}if(t){const a=i(e.textures),s=i(e.images);a.length>0&&(n.textures=a),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let a=0;a!==i;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const _colorKeywords={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_hslA={h:0,s:0,l:0},_hslB={h:0,s:0,l:0};function hue2rgb(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}let Color$1=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=SRGBColorSpace){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ColorManagement.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=ColorManagement.workingColorSpace){return this.r=e,this.g=t,this.b=n,ColorManagement.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=ColorManagement.workingColorSpace){if(e=euclideanModulo(e,1),t=clamp$1(t,0,1),n=clamp$1(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,s=2*n-a;this.r=hue2rgb(s,a,e+1/3),this.g=hue2rgb(s,a,e),this.b=hue2rgb(s,a,e-1/3)}return ColorManagement.toWorkingColorSpace(this,i),this}setStyle(e,t=SRGBColorSpace){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const s=i[1],o=i[2];switch(s){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=i[1],s=a.length;if(s===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=SRGBColorSpace){const n=_colorKeywords[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=SRGBToLinear(e.r),this.g=SRGBToLinear(e.g),this.b=SRGBToLinear(e.b),this}copyLinearToSRGB(e){return this.r=LinearToSRGB(e.r),this.g=LinearToSRGB(e.g),this.b=LinearToSRGB(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=SRGBColorSpace){return ColorManagement.fromWorkingColorSpace(_color.copy(this),e),Math.round(clamp$1(_color.r*255,0,255))*65536+Math.round(clamp$1(_color.g*255,0,255))*256+Math.round(clamp$1(_color.b*255,0,255))}getHexString(e=SRGBColorSpace){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ColorManagement.workingColorSpace){ColorManagement.fromWorkingColorSpace(_color.copy(this),t);const n=_color.r,i=_color.g,a=_color.b,s=Math.max(n,i,a),o=Math.min(n,i,a);let l,c;const u=(o+s)/2;if(o===s)l=0,c=0;else{const h=s-o;switch(c=u<=.5?h/(s+o):h/(2-s-o),s){case n:l=(i-a)/h+(i<a?6:0);break;case i:l=(a-n)/h+2;break;case a:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ColorManagement.workingColorSpace){return ColorManagement.fromWorkingColorSpace(_color.copy(this),t),e.r=_color.r,e.g=_color.g,e.b=_color.b,e}getStyle(e=SRGBColorSpace){ColorManagement.fromWorkingColorSpace(_color.copy(this),e);const t=_color.r,n=_color.g,i=_color.b;return e!==SRGBColorSpace?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(_hslA),_hslA.h+=e,_hslA.s+=t,_hslA.l+=n,this.setHSL(_hslA.h,_hslA.s,_hslA.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(_hslA),e.getHSL(_hslB);const n=lerp(_hslA.h,_hslB.h,t),i=lerp(_hslA.s,_hslB.s,t),a=lerp(_hslA.l,_hslB.l,t);return this.setHSL(n,i,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*i,this.g=a[1]*t+a[4]*n+a[7]*i,this.b=a[2]*t+a[5]*n+a[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const _color=new Color$1;Color$1.NAMES=_colorKeywords;class MeshBasicMaterial extends Material{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Color$1(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=MultiplyOperation,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _vector$8=new Vector3,_vector2$1=new Vector2;class BufferAttribute{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=StaticDrawUsage,this.updateRange={offset:0,count:-1},this.gpuType=FloatType,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,a=this.itemSize;i<a;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)_vector2$1.fromBufferAttribute(this,t),_vector2$1.applyMatrix3(e),this.setXY(t,_vector2$1.x,_vector2$1.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)_vector$8.fromBufferAttribute(this,t),_vector$8.applyMatrix3(e),this.setXYZ(t,_vector$8.x,_vector$8.y,_vector$8.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)_vector$8.fromBufferAttribute(this,t),_vector$8.applyMatrix4(e),this.setXYZ(t,_vector$8.x,_vector$8.y,_vector$8.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)_vector$8.fromBufferAttribute(this,t),_vector$8.applyNormalMatrix(e),this.setXYZ(t,_vector$8.x,_vector$8.y,_vector$8.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)_vector$8.fromBufferAttribute(this,t),_vector$8.transformDirection(e),this.setXYZ(t,_vector$8.x,_vector$8.y,_vector$8.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=denormalize(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=normalize$1(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=denormalize(t,this.array)),t}setX(e,t){return this.normalized&&(t=normalize$1(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=denormalize(t,this.array)),t}setY(e,t){return this.normalized&&(t=normalize$1(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=denormalize(t,this.array)),t}setZ(e,t){return this.normalized&&(t=normalize$1(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=denormalize(t,this.array)),t}setW(e,t){return this.normalized&&(t=normalize$1(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=normalize$1(t,this.array),n=normalize$1(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=normalize$1(t,this.array),n=normalize$1(n,this.array),i=normalize$1(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,a){return e*=this.itemSize,this.normalized&&(t=normalize$1(t,this.array),n=normalize$1(n,this.array),i=normalize$1(i,this.array),a=normalize$1(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==StaticDrawUsage&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Uint16BufferAttribute extends BufferAttribute{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Uint32BufferAttribute extends BufferAttribute{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Float32BufferAttribute extends BufferAttribute{constructor(e,t,n){super(new Float32Array(e),t,n)}}let _id$1=0;const _m1=new Matrix4,_obj=new Object3D,_offset=new Vector3,_box$1=new Box3,_boxMorphTargets=new Box3,_vector$7=new Vector3;class BufferGeometry extends EventDispatcher{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_id$1++}),this.uuid=generateUUID(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(arrayNeedsUint32(e)?Uint32BufferAttribute:Uint16BufferAttribute)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new Matrix3().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return _m1.makeRotationFromQuaternion(e),this.applyMatrix4(_m1),this}rotateX(e){return _m1.makeRotationX(e),this.applyMatrix4(_m1),this}rotateY(e){return _m1.makeRotationY(e),this.applyMatrix4(_m1),this}rotateZ(e){return _m1.makeRotationZ(e),this.applyMatrix4(_m1),this}translate(e,t,n){return _m1.makeTranslation(e,t,n),this.applyMatrix4(_m1),this}scale(e,t,n){return _m1.makeScale(e,t,n),this.applyMatrix4(_m1),this}lookAt(e){return _obj.lookAt(e),_obj.updateMatrix(),this.applyMatrix4(_obj.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_offset).negate(),this.translate(_offset.x,_offset.y,_offset.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const a=e[n];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new Float32BufferAttribute(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Box3);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new Vector3(-1/0,-1/0,-1/0),new Vector3(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const a=t[n];_box$1.setFromBufferAttribute(a),this.morphTargetsRelative?(_vector$7.addVectors(this.boundingBox.min,_box$1.min),this.boundingBox.expandByPoint(_vector$7),_vector$7.addVectors(this.boundingBox.max,_box$1.max),this.boundingBox.expandByPoint(_vector$7)):(this.boundingBox.expandByPoint(_box$1.min),this.boundingBox.expandByPoint(_box$1.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sphere);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new Vector3,1/0);return}if(e){const n=this.boundingSphere.center;if(_box$1.setFromBufferAttribute(e),t)for(let a=0,s=t.length;a<s;a++){const o=t[a];_boxMorphTargets.setFromBufferAttribute(o),this.morphTargetsRelative?(_vector$7.addVectors(_box$1.min,_boxMorphTargets.min),_box$1.expandByPoint(_vector$7),_vector$7.addVectors(_box$1.max,_boxMorphTargets.max),_box$1.expandByPoint(_vector$7)):(_box$1.expandByPoint(_boxMorphTargets.min),_box$1.expandByPoint(_boxMorphTargets.max))}_box$1.getCenter(n);let i=0;for(let a=0,s=e.count;a<s;a++)_vector$7.fromBufferAttribute(e,a),i=Math.max(i,n.distanceToSquared(_vector$7));if(t)for(let a=0,s=t.length;a<s;a++){const o=t[a],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)_vector$7.fromBufferAttribute(o,c),l&&(_offset.fromBufferAttribute(e,c),_vector$7.add(_offset)),i=Math.max(i,n.distanceToSquared(_vector$7))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,a=t.normal.array,s=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new BufferAttribute(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let C=0;C<o;C++)c[C]=new Vector3,u[C]=new Vector3;const h=new Vector3,d=new Vector3,f=new Vector3,g=new Vector2,_=new Vector2,m=new Vector2,p=new Vector3,v=new Vector3;function T(C,k,Z){h.fromArray(i,C*3),d.fromArray(i,k*3),f.fromArray(i,Z*3),g.fromArray(s,C*2),_.fromArray(s,k*2),m.fromArray(s,Z*2),d.sub(h),f.sub(h),_.sub(g),m.sub(g);const N=1/(_.x*m.y-m.x*_.y);isFinite(N)&&(p.copy(d).multiplyScalar(m.y).addScaledVector(f,-_.y).multiplyScalar(N),v.copy(f).multiplyScalar(_.x).addScaledVector(d,-m.x).multiplyScalar(N),c[C].add(p),c[k].add(p),c[Z].add(p),u[C].add(v),u[k].add(v),u[Z].add(v))}let x=this.groups;x.length===0&&(x=[{start:0,count:n.length}]);for(let C=0,k=x.length;C<k;++C){const Z=x[C],N=Z.start,B=Z.count;for(let I=N,Y=N+B;I<Y;I+=3)T(n[I+0],n[I+1],n[I+2])}const y=new Vector3,A=new Vector3,b=new Vector3,w=new Vector3;function S(C){b.fromArray(a,C*3),w.copy(b);const k=c[C];y.copy(k),y.sub(b.multiplyScalar(b.dot(k))).normalize(),A.crossVectors(w,k);const N=A.dot(u[C])<0?-1:1;l[C*4]=y.x,l[C*4+1]=y.y,l[C*4+2]=y.z,l[C*4+3]=N}for(let C=0,k=x.length;C<k;++C){const Z=x[C],N=Z.start,B=Z.count;for(let I=N,Y=N+B;I<Y;I+=3)S(n[I+0]),S(n[I+1]),S(n[I+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new BufferAttribute(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new Vector3,a=new Vector3,s=new Vector3,o=new Vector3,l=new Vector3,c=new Vector3,u=new Vector3,h=new Vector3;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),a.fromBufferAttribute(t,_),s.fromBufferAttribute(t,m),u.subVectors(s,a),h.subVectors(i,a),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),a.fromBufferAttribute(t,d+1),s.fromBufferAttribute(t,d+2),u.subVectors(s,a),h.subVectors(i,a),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)_vector$7.fromBufferAttribute(e,t),_vector$7.normalize(),e.setXYZ(t,_vector$7.x,_vector$7.y,_vector$7.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*u;for(let p=0;p<u;p++)d[g++]=c[f++]}return new BufferAttribute(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new BufferGeometry,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const a=this.morphAttributes;for(const o in a){const l=[],c=a[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(i[l]=u,a=!0)}a&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const a=e.morphAttributes;for(const c in a){const u=[],h=a[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,u=s.length;c<u;c++){const h=s[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const _inverseMatrix$3=new Matrix4,_ray$3=new Ray,_sphere$5=new Sphere,_sphereHitAt=new Vector3,_vA$1=new Vector3,_vB$1=new Vector3,_vC$1=new Vector3,_tempA=new Vector3,_morphA=new Vector3,_uvA$1=new Vector2,_uvB$1=new Vector2,_uvC$1=new Vector2,_normalA=new Vector3,_normalB=new Vector3,_normalC=new Vector3,_intersectionPoint=new Vector3,_intersectionPointWorld=new Vector3;class Mesh extends Object3D{constructor(e=new BufferGeometry,t=new MeshBasicMaterial){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=i.length;a<s;a++){const o=i[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,a=n.morphAttributes.position,s=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(a&&o){_morphA.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const u=o[l],h=a[l];u!==0&&(_tempA.fromBufferAttribute(h,e),s?_morphA.addScaledVector(_tempA,u):_morphA.addScaledVector(_tempA.sub(t),u))}t.add(_morphA)}return t}raycast(e,t){const n=this.geometry,i=this.material,a=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),_sphere$5.copy(n.boundingSphere),_sphere$5.applyMatrix4(a),_ray$3.copy(e.ray).recast(e.near),!(_sphere$5.containsPoint(_ray$3.origin)===!1&&(_ray$3.intersectSphere(_sphere$5,_sphereHitAt)===null||_ray$3.origin.distanceToSquared(_sphereHitAt)>(e.far-e.near)**2))&&(_inverseMatrix$3.copy(a).invert(),_ray$3.copy(e.ray).applyMatrix4(_inverseMatrix$3),!(n.boundingBox!==null&&_ray$3.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,_ray$3)))}_computeIntersections(e,t,n){let i;const a=this.geometry,s=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,u=a.attributes.uv1,h=a.attributes.normal,d=a.groups,f=a.drawRange;if(o!==null)if(Array.isArray(s))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=s[m.materialIndex],v=Math.max(m.start,f.start),T=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let x=v,y=T;x<y;x+=3){const A=o.getX(x),b=o.getX(x+1),w=o.getX(x+2);i=checkGeometryIntersection(this,p,e,n,c,u,h,A,b,w),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const v=o.getX(m),T=o.getX(m+1),x=o.getX(m+2);i=checkGeometryIntersection(this,s,e,n,c,u,h,v,T,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(s))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=s[m.materialIndex],v=Math.max(m.start,f.start),T=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=v,y=T;x<y;x+=3){const A=x,b=x+1,w=x+2;i=checkGeometryIntersection(this,p,e,n,c,u,h,A,b,w),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const v=m,T=m+1,x=m+2;i=checkGeometryIntersection(this,s,e,n,c,u,h,v,T,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function checkIntersection(r,e,t,n,i,a,s,o){let l;if(e.side===BackSide?l=n.intersectTriangle(s,a,i,!0,o):l=n.intersectTriangle(i,a,s,e.side===FrontSide,o),l===null)return null;_intersectionPointWorld.copy(o),_intersectionPointWorld.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(_intersectionPointWorld);return c<t.near||c>t.far?null:{distance:c,point:_intersectionPointWorld.clone(),object:r}}function checkGeometryIntersection(r,e,t,n,i,a,s,o,l,c){r.getVertexPosition(o,_vA$1),r.getVertexPosition(l,_vB$1),r.getVertexPosition(c,_vC$1);const u=checkIntersection(r,e,t,n,_vA$1,_vB$1,_vC$1,_intersectionPoint);if(u){i&&(_uvA$1.fromBufferAttribute(i,o),_uvB$1.fromBufferAttribute(i,l),_uvC$1.fromBufferAttribute(i,c),u.uv=Triangle.getInterpolation(_intersectionPoint,_vA$1,_vB$1,_vC$1,_uvA$1,_uvB$1,_uvC$1,new Vector2)),a&&(_uvA$1.fromBufferAttribute(a,o),_uvB$1.fromBufferAttribute(a,l),_uvC$1.fromBufferAttribute(a,c),u.uv1=Triangle.getInterpolation(_intersectionPoint,_vA$1,_vB$1,_vC$1,_uvA$1,_uvB$1,_uvC$1,new Vector2),u.uv2=u.uv1),s&&(_normalA.fromBufferAttribute(s,o),_normalB.fromBufferAttribute(s,l),_normalC.fromBufferAttribute(s,c),u.normal=Triangle.getInterpolation(_intersectionPoint,_vA$1,_vB$1,_vC$1,_normalA,_normalB,_normalC,new Vector3),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new Vector3,materialIndex:0};Triangle.getNormal(_vA$1,_vB$1,_vC$1,h.normal),u.face=h}return u}class BoxGeometry extends BufferGeometry{constructor(e=1,t=1,n=1,i=1,a=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:a,depthSegments:s};const o=this;i=Math.floor(i),a=Math.floor(a),s=Math.floor(s);const l=[],c=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,s,a,0),g("z","y","x",1,-1,n,t,-e,s,a,1),g("x","z","y",1,1,e,n,t,i,s,2),g("x","z","y",1,-1,e,n,-t,i,s,3),g("x","y","z",1,-1,e,t,n,i,a,4),g("x","y","z",-1,-1,e,t,-n,i,a,5),this.setIndex(l),this.setAttribute("position",new Float32BufferAttribute(c,3)),this.setAttribute("normal",new Float32BufferAttribute(u,3)),this.setAttribute("uv",new Float32BufferAttribute(h,2));function g(_,m,p,v,T,x,y,A,b,w,S){const C=x/b,k=y/w,Z=x/2,N=y/2,B=A/2,I=b+1,Y=w+1;let H=0,V=0;const K=new Vector3;for(let j=0;j<Y;j++){const F=j*k-N;for(let X=0;X<I;X++){const oe=X*C-Z;K[_]=oe*v,K[m]=F*T,K[p]=B,c.push(K.x,K.y,K.z),K[_]=0,K[m]=0,K[p]=A>0?1:-1,u.push(K.x,K.y,K.z),h.push(X/b),h.push(1-j/w),H+=1}}for(let j=0;j<w;j++)for(let F=0;F<b;F++){const X=d+F+I*j,oe=d+F+I*(j+1),re=d+(F+1)+I*(j+1),ee=d+(F+1)+I*j;l.push(X,oe,ee),l.push(oe,re,ee),V+=6}o.addGroup(f,V,S),f+=V,d+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new BoxGeometry(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function cloneUniforms(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function mergeUniforms(r){const e={};for(let t=0;t<r.length;t++){const n=cloneUniforms(r[t]);for(const i in n)e[i]=n[i]}return e}function cloneUniformsGroups(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function getUnlitUniformColorSpace(r){return r.getRenderTarget()===null?r.outputColorSpace:LinearSRGBColorSpace}const UniformsUtils={clone:cloneUniforms,merge:mergeUniforms};var default_vertex=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,default_fragment=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ShaderMaterial extends Material{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=default_vertex,this.fragmentShader=default_fragment,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=cloneUniforms(e.uniforms),this.uniformsGroups=cloneUniformsGroups(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const s=this.uniforms[i].value;s&&s.isTexture?t.uniforms[i]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[i]={type:"m4",value:s.toArray()}:t.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Camera extends Object3D{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Matrix4,this.projectionMatrix=new Matrix4,this.projectionMatrixInverse=new Matrix4,this.coordinateSystem=WebGLCoordinateSystem}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class PerspectiveCamera extends Camera{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=RAD2DEG*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(DEG2RAD*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return RAD2DEG*2*Math.atan(Math.tan(DEG2RAD*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,a,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(DEG2RAD*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,a=-.5*i;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;a+=s.offsetX*i/l,t-=s.offsetY*n/c,i*=s.width/l,n*=s.height/c}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const fov=-90,aspect=1;class CubeCamera extends Object3D{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null;const i=new PerspectiveCamera(fov,aspect,e,t);i.layers=this.layers,this.add(i);const a=new PerspectiveCamera(fov,aspect,e,t);a.layers=this.layers,this.add(a);const s=new PerspectiveCamera(fov,aspect,e,t);s.layers=this.layers,this.add(s);const o=new PerspectiveCamera(fov,aspect,e,t);o.layers=this.layers,this.add(o);const l=new PerspectiveCamera(fov,aspect,e,t);l.layers=this.layers,this.add(l);const c=new PerspectiveCamera(fov,aspect,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,a,s,o,l]=t;for(const c of t)this.remove(c);if(e===WebGLCoordinateSystem)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===WebGPUCoordinateSystem)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[i,a,s,o,l,c]=this.children,u=e.getRenderTarget(),h=e.xr.enabled;e.xr.enabled=!1;const d=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,a),e.setRenderTarget(n,2),e.render(t,s),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=d,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.xr.enabled=h,n.texture.needsPMREMUpdate=!0}}class CubeTexture extends Texture{constructor(e,t,n,i,a,s,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:CubeReflectionMapping,super(e,t,n,i,a,s,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class WebGLCubeRenderTarget extends WebGLRenderTarget{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(warnOnce("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===sRGBEncoding?SRGBColorSpace:NoColorSpace),this.texture=new CubeTexture(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:LinearFilter}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new BoxGeometry(5,5,5),a=new ShaderMaterial({name:"CubemapFromEquirect",uniforms:cloneUniforms(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:BackSide,blending:NoBlending});a.uniforms.tEquirect.value=t;const s=new Mesh(i,a),o=t.minFilter;return t.minFilter===LinearMipmapLinearFilter&&(t.minFilter=LinearFilter),new CubeCamera(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,n,i){const a=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,i);e.setRenderTarget(a)}}const _vector1=new Vector3,_vector2=new Vector3,_normalMatrix=new Matrix3;class Plane{constructor(e=new Vector3(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=_vector1.subVectors(n,t).cross(_vector2.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(_vector1),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/i;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||_normalMatrix.getNormalMatrix(e),i=this.coplanarPoint(_vector1).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _sphere$4=new Sphere,_vector$6=new Vector3;class Frustum{constructor(e=new Plane,t=new Plane,n=new Plane,i=new Plane,a=new Plane,s=new Plane){this.planes=[e,t,n,i,a,s]}set(e,t,n,i,a,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(a),o[5].copy(s),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=WebGLCoordinateSystem){const n=this.planes,i=e.elements,a=i[0],s=i[1],o=i[2],l=i[3],c=i[4],u=i[5],h=i[6],d=i[7],f=i[8],g=i[9],_=i[10],m=i[11],p=i[12],v=i[13],T=i[14],x=i[15];if(n[0].setComponents(l-a,d-c,m-f,x-p).normalize(),n[1].setComponents(l+a,d+c,m+f,x+p).normalize(),n[2].setComponents(l+s,d+u,m+g,x+v).normalize(),n[3].setComponents(l-s,d-u,m-g,x-v).normalize(),n[4].setComponents(l-o,d-h,m-_,x-T).normalize(),t===WebGLCoordinateSystem)n[5].setComponents(l+o,d+h,m+_,x+T).normalize();else if(t===WebGPUCoordinateSystem)n[5].setComponents(o,h,_,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_sphere$4.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),_sphere$4.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_sphere$4)}intersectsSprite(e){return _sphere$4.center.set(0,0,0),_sphere$4.radius=.7071067811865476,_sphere$4.applyMatrix4(e.matrixWorld),this.intersectsSphere(_sphere$4)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(_vector$6.x=i.normal.x>0?e.max.x:e.min.x,_vector$6.y=i.normal.y>0?e.max.y:e.min.y,_vector$6.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(_vector$6)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function WebGLAnimation(){let r=null,e=!1,t=null,n=null;function i(a,s){t(a,s),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){r=a}}}function WebGLAttributes(r,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const h=c.array,d=c.usage,f=r.createBuffer();r.bindBuffer(u,f),r.bufferData(u,h,d),c.onUploadCallback();let g;if(h instanceof Float32Array)g=r.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)g=r.SHORT;else if(h instanceof Uint32Array)g=r.UNSIGNED_INT;else if(h instanceof Int32Array)g=r.INT;else if(h instanceof Int8Array)g=r.BYTE;else if(h instanceof Uint8Array)g=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)g=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:f,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function a(c,u,h){const d=u.array,f=u.updateRange;r.bindBuffer(h,c),f.count===-1?r.bufferSubData(h,0,d):(t?r.bufferSubData(h,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):r.bufferSubData(h,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),u.onUploadCallback()}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(r.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,i(c,u)):h.version<c.version&&(a(h.buffer,c,u),h.version=c.version)}return{get:s,remove:o,update:l}}class PlaneGeometry extends BufferGeometry{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const a=e/2,s=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,h=e/o,d=t/l,f=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const v=p*d-s;for(let T=0;T<c;T++){const x=T*h-a;g.push(x,-v,0),_.push(0,0,1),m.push(T/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<o;v++){const T=v+c*p,x=v+c*(p+1),y=v+1+c*(p+1),A=v+1+c*p;f.push(T,x,A),f.push(x,y,A)}this.setIndex(f),this.setAttribute("position",new Float32BufferAttribute(g,3)),this.setAttribute("normal",new Float32BufferAttribute(_,3)),this.setAttribute("uv",new Float32BufferAttribute(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new PlaneGeometry(e.width,e.height,e.widthSegments,e.heightSegments)}}var alphahash_fragment=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment=`#ifdef USE_ALPHAHASH
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
#endif`,alphamap_fragment=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,alphatest_pars_fragment=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,begin_vertex=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iridescence_fragment=`#ifdef USE_IRIDESCENCE
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
#endif`,bumpmap_pars_fragment=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,clipping_planes_pars_fragment=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,common=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,cube_uv_reflection_fragment=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,defaultnormal_vertex=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment="gl_FragColor = linearToOutputTexel( gl_FragColor );",colorspace_pars_fragment=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,envmap_common_pars_fragment=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment=`#ifdef USE_ENVMAP
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
#endif`,envmap_pars_vertex=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_vertex=`#ifdef USE_ENVMAP
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
#endif`,fog_vertex=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment=`#ifdef USE_GRADIENTMAP
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
}`,lightmap_fragment=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,lightmap_pars_fragment=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,envmap_physical_pars_fragment=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,lights_toon_fragment=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
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
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,lights_fragment_begin=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,logdepthbuf_fragment=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,logdepthbuf_vertex=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,map_fragment=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,map_pars_fragment=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,map_particle_pars_fragment=`#if defined( USE_POINTS_UV )
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
#endif`,metalnessmap_fragment=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphcolor_vertex=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,morphtarget_pars_vertex=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,morphtarget_vertex=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,normal_fragment_begin=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,normal_fragment_maps=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,normal_pars_fragment=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment=`#ifdef USE_NORMALMAP
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
#endif`,clearcoat_normal_fragment_begin=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,clearcoat_normal_fragment_maps=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,premultiplied_alpha_fragment=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment=`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,shadowmap_pars_vertex=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,shadowmask_pars_fragment=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,skinning_vertex=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex=`#ifdef USE_SKINNING
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
#endif`,specularmap_fragment=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_pars_vertex=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_vertex=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,worldpos_vertex=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vertex$h=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fragment$h=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vertex$g=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fragment$g=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vertex$f=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fragment$f=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vertex$e=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,fragment$e=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
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
	#endif
}`,vertex$d=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,fragment$d=`#define DISTANCE
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,vertex$c=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fragment$c=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vertex$b=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fragment$b=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vertex$a=`#include <common>
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
	#include <morphcolor_vertex>
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
}`,fragment$a=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,vertex$9=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
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
}`,fragment$9=`#define LAMBERT
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,vertex$8=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,fragment$8=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,vertex$7=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,fragment$7=`#define NORMAL
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,vertex$6=`#define PHONG
varying vec3 vViewPosition;
#include <common>
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
}`,fragment$6=`#define PHONG
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,vertex$5=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
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
	#include <morphcolor_vertex>
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
}`,fragment$5=`#define STANDARD
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vertex$4=`#define TOON
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,fragment$4=`#define TOON
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,vertex$3=`uniform float size;
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
}`,fragment$3=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,vertex$2=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
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
}`,fragment$2=`uniform vec3 color;
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
}`,vertex$1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,fragment$1=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,ShaderChunk={alphahash_fragment,alphahash_pars_fragment,alphamap_fragment,alphamap_pars_fragment,alphatest_fragment,alphatest_pars_fragment,aomap_fragment,aomap_pars_fragment,begin_vertex,beginnormal_vertex,bsdfs,iridescence_fragment,bumpmap_pars_fragment,clipping_planes_fragment,clipping_planes_pars_fragment,clipping_planes_pars_vertex,clipping_planes_vertex,color_fragment,color_pars_fragment,color_pars_vertex,color_vertex,common,cube_uv_reflection_fragment,defaultnormal_vertex,displacementmap_pars_vertex,displacementmap_vertex,emissivemap_fragment,emissivemap_pars_fragment,colorspace_fragment,colorspace_pars_fragment,envmap_fragment,envmap_common_pars_fragment,envmap_pars_fragment,envmap_pars_vertex,envmap_physical_pars_fragment,envmap_vertex,fog_vertex,fog_pars_vertex,fog_fragment,fog_pars_fragment,gradientmap_pars_fragment,lightmap_fragment,lightmap_pars_fragment,lights_lambert_fragment,lights_lambert_pars_fragment,lights_pars_begin,lights_toon_fragment,lights_toon_pars_fragment,lights_phong_fragment,lights_phong_pars_fragment,lights_physical_fragment,lights_physical_pars_fragment,lights_fragment_begin,lights_fragment_maps,lights_fragment_end,logdepthbuf_fragment,logdepthbuf_pars_fragment,logdepthbuf_pars_vertex,logdepthbuf_vertex,map_fragment,map_pars_fragment,map_particle_fragment,map_particle_pars_fragment,metalnessmap_fragment,metalnessmap_pars_fragment,morphcolor_vertex,morphnormal_vertex,morphtarget_pars_vertex,morphtarget_vertex,normal_fragment_begin,normal_fragment_maps,normal_pars_fragment,normal_pars_vertex,normal_vertex,normalmap_pars_fragment,clearcoat_normal_fragment_begin,clearcoat_normal_fragment_maps,clearcoat_pars_fragment,iridescence_pars_fragment,opaque_fragment,packing,premultiplied_alpha_fragment,project_vertex,dithering_fragment,dithering_pars_fragment,roughnessmap_fragment,roughnessmap_pars_fragment,shadowmap_pars_fragment,shadowmap_pars_vertex,shadowmap_vertex,shadowmask_pars_fragment,skinbase_vertex,skinning_pars_vertex,skinning_vertex,skinnormal_vertex,specularmap_fragment,specularmap_pars_fragment,tonemapping_fragment,tonemapping_pars_fragment,transmission_fragment,transmission_pars_fragment,uv_pars_fragment,uv_pars_vertex,uv_vertex,worldpos_vertex,background_vert:vertex$h,background_frag:fragment$h,backgroundCube_vert:vertex$g,backgroundCube_frag:fragment$g,cube_vert:vertex$f,cube_frag:fragment$f,depth_vert:vertex$e,depth_frag:fragment$e,distanceRGBA_vert:vertex$d,distanceRGBA_frag:fragment$d,equirect_vert:vertex$c,equirect_frag:fragment$c,linedashed_vert:vertex$b,linedashed_frag:fragment$b,meshbasic_vert:vertex$a,meshbasic_frag:fragment$a,meshlambert_vert:vertex$9,meshlambert_frag:fragment$9,meshmatcap_vert:vertex$8,meshmatcap_frag:fragment$8,meshnormal_vert:vertex$7,meshnormal_frag:fragment$7,meshphong_vert:vertex$6,meshphong_frag:fragment$6,meshphysical_vert:vertex$5,meshphysical_frag:fragment$5,meshtoon_vert:vertex$4,meshtoon_frag:fragment$4,points_vert:vertex$3,points_frag:fragment$3,shadow_vert:vertex$2,shadow_frag:fragment$2,sprite_vert:vertex$1,sprite_frag:fragment$1},UniformsLib={common:{diffuse:{value:new Color$1(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Matrix3},alphaMap:{value:null},alphaMapTransform:{value:new Matrix3},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Matrix3}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Matrix3}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Matrix3}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Matrix3},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Matrix3},normalScale:{value:new Vector2(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Matrix3},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Matrix3}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Matrix3}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Matrix3}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Color$1(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Color$1(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Matrix3},alphaTest:{value:0},uvTransform:{value:new Matrix3}},sprite:{diffuse:{value:new Color$1(16777215)},opacity:{value:1},center:{value:new Vector2(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Matrix3},alphaMap:{value:null},alphaMapTransform:{value:new Matrix3},alphaTest:{value:0}}},ShaderLib={basic:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.specularmap,UniformsLib.envmap,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.fog]),vertexShader:ShaderChunk.meshbasic_vert,fragmentShader:ShaderChunk.meshbasic_frag},lambert:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.specularmap,UniformsLib.envmap,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.emissivemap,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,UniformsLib.fog,UniformsLib.lights,{emissive:{value:new Color$1(0)}}]),vertexShader:ShaderChunk.meshlambert_vert,fragmentShader:ShaderChunk.meshlambert_frag},phong:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.specularmap,UniformsLib.envmap,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.emissivemap,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,UniformsLib.fog,UniformsLib.lights,{emissive:{value:new Color$1(0)},specular:{value:new Color$1(1118481)},shininess:{value:30}}]),vertexShader:ShaderChunk.meshphong_vert,fragmentShader:ShaderChunk.meshphong_frag},standard:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.envmap,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.emissivemap,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,UniformsLib.roughnessmap,UniformsLib.metalnessmap,UniformsLib.fog,UniformsLib.lights,{emissive:{value:new Color$1(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ShaderChunk.meshphysical_vert,fragmentShader:ShaderChunk.meshphysical_frag},toon:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.emissivemap,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,UniformsLib.gradientmap,UniformsLib.fog,UniformsLib.lights,{emissive:{value:new Color$1(0)}}]),vertexShader:ShaderChunk.meshtoon_vert,fragmentShader:ShaderChunk.meshtoon_frag},matcap:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,UniformsLib.fog,{matcap:{value:null}}]),vertexShader:ShaderChunk.meshmatcap_vert,fragmentShader:ShaderChunk.meshmatcap_frag},points:{uniforms:mergeUniforms([UniformsLib.points,UniformsLib.fog]),vertexShader:ShaderChunk.points_vert,fragmentShader:ShaderChunk.points_frag},dashed:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ShaderChunk.linedashed_vert,fragmentShader:ShaderChunk.linedashed_frag},depth:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.displacementmap]),vertexShader:ShaderChunk.depth_vert,fragmentShader:ShaderChunk.depth_frag},normal:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,{opacity:{value:1}}]),vertexShader:ShaderChunk.meshnormal_vert,fragmentShader:ShaderChunk.meshnormal_frag},sprite:{uniforms:mergeUniforms([UniformsLib.sprite,UniformsLib.fog]),vertexShader:ShaderChunk.sprite_vert,fragmentShader:ShaderChunk.sprite_frag},background:{uniforms:{uvTransform:{value:new Matrix3},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ShaderChunk.background_vert,fragmentShader:ShaderChunk.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ShaderChunk.backgroundCube_vert,fragmentShader:ShaderChunk.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ShaderChunk.cube_vert,fragmentShader:ShaderChunk.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ShaderChunk.equirect_vert,fragmentShader:ShaderChunk.equirect_frag},distanceRGBA:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.displacementmap,{referencePosition:{value:new Vector3},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ShaderChunk.distanceRGBA_vert,fragmentShader:ShaderChunk.distanceRGBA_frag},shadow:{uniforms:mergeUniforms([UniformsLib.lights,UniformsLib.fog,{color:{value:new Color$1(0)},opacity:{value:1}}]),vertexShader:ShaderChunk.shadow_vert,fragmentShader:ShaderChunk.shadow_frag}};ShaderLib.physical={uniforms:mergeUniforms([ShaderLib.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Matrix3},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Matrix3},clearcoatNormalScale:{value:new Vector2(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Matrix3},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Matrix3},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Matrix3},sheen:{value:0},sheenColor:{value:new Color$1(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Matrix3},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Matrix3},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Matrix3},transmissionSamplerSize:{value:new Vector2},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Matrix3},attenuationDistance:{value:0},attenuationColor:{value:new Color$1(0)},specularColor:{value:new Color$1(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Matrix3},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Matrix3},anisotropyVector:{value:new Vector2},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Matrix3}}]),vertexShader:ShaderChunk.meshphysical_vert,fragmentShader:ShaderChunk.meshphysical_frag};const _rgb={r:0,b:0,g:0};function WebGLBackground(r,e,t,n,i,a,s){const o=new Color$1(0);let l=a===!0?0:1,c,u,h=null,d=0,f=null;function g(m,p){let v=!1,T=p.isScene===!0?p.background:null;switch(T&&T.isTexture&&(T=(p.backgroundBlurriness>0?t:e).get(T)),T===null?_(o,l):T&&T.isColor&&(_(T,1),v=!0),r.xr.getEnvironmentBlendMode()){case"opaque":v=!0;break;case"additive":n.buffers.color.setClear(0,0,0,1,s),v=!0;break;case"alpha-blend":n.buffers.color.setClear(0,0,0,0,s),v=!0;break}(r.autoClear||v)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),T&&(T.isCubeTexture||T.mapping===CubeUVReflectionMapping)?(u===void 0&&(u=new Mesh(new BoxGeometry(1,1,1),new ShaderMaterial({name:"BackgroundCubeMaterial",uniforms:cloneUniforms(ShaderLib.backgroundCube.uniforms),vertexShader:ShaderLib.backgroundCube.vertexShader,fragmentShader:ShaderLib.backgroundCube.fragmentShader,side:BackSide,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,b,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=T,u.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=T.colorSpace!==SRGBColorSpace,(h!==T||d!==T.version||f!==r.toneMapping)&&(u.material.needsUpdate=!0,h=T,d=T.version,f=r.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new Mesh(new PlaneGeometry(2,2),new ShaderMaterial({name:"BackgroundMaterial",uniforms:cloneUniforms(ShaderLib.background.uniforms),vertexShader:ShaderLib.background.vertexShader,fragmentShader:ShaderLib.background.fragmentShader,side:FrontSide,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=T.colorSpace!==SRGBColorSpace,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(h!==T||d!==T.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,h=T,d=T.version,f=r.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,p){m.getRGB(_rgb,getUnlitUniformColorSpace(r)),n.buffers.color.setClear(_rgb.r,_rgb.g,_rgb.b,p,s)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),l=p,_(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(o,l)},render:g}}function WebGLBindingStates(r,e,t,n){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),a=n.isWebGL2?null:e.get("OES_vertex_array_object"),s=n.isWebGL2||a!==null,o={},l=m(null);let c=l,u=!1;function h(B,I,Y,H,V){let K=!1;if(s){const j=_(H,Y,I);c!==j&&(c=j,f(c.object)),K=p(B,H,Y,V),K&&v(B,H,Y,V)}else{const j=I.wireframe===!0;(c.geometry!==H.id||c.program!==Y.id||c.wireframe!==j)&&(c.geometry=H.id,c.program=Y.id,c.wireframe=j,K=!0)}V!==null&&t.update(V,r.ELEMENT_ARRAY_BUFFER),(K||u)&&(u=!1,w(B,I,Y,H),V!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function d(){return n.isWebGL2?r.createVertexArray():a.createVertexArrayOES()}function f(B){return n.isWebGL2?r.bindVertexArray(B):a.bindVertexArrayOES(B)}function g(B){return n.isWebGL2?r.deleteVertexArray(B):a.deleteVertexArrayOES(B)}function _(B,I,Y){const H=Y.wireframe===!0;let V=o[B.id];V===void 0&&(V={},o[B.id]=V);let K=V[I.id];K===void 0&&(K={},V[I.id]=K);let j=K[H];return j===void 0&&(j=m(d()),K[H]=j),j}function m(B){const I=[],Y=[],H=[];for(let V=0;V<i;V++)I[V]=0,Y[V]=0,H[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:Y,attributeDivisors:H,object:B,attributes:{},index:null}}function p(B,I,Y,H){const V=c.attributes,K=I.attributes;let j=0;const F=Y.getAttributes();for(const X in F)if(F[X].location>=0){const re=V[X];let ee=K[X];if(ee===void 0&&(X==="instanceMatrix"&&B.instanceMatrix&&(ee=B.instanceMatrix),X==="instanceColor"&&B.instanceColor&&(ee=B.instanceColor)),re===void 0||re.attribute!==ee||ee&&re.data!==ee.data)return!0;j++}return c.attributesNum!==j||c.index!==H}function v(B,I,Y,H){const V={},K=I.attributes;let j=0;const F=Y.getAttributes();for(const X in F)if(F[X].location>=0){let re=K[X];re===void 0&&(X==="instanceMatrix"&&B.instanceMatrix&&(re=B.instanceMatrix),X==="instanceColor"&&B.instanceColor&&(re=B.instanceColor));const ee={};ee.attribute=re,re&&re.data&&(ee.data=re.data),V[X]=ee,j++}c.attributes=V,c.attributesNum=j,c.index=H}function T(){const B=c.newAttributes;for(let I=0,Y=B.length;I<Y;I++)B[I]=0}function x(B){y(B,0)}function y(B,I){const Y=c.newAttributes,H=c.enabledAttributes,V=c.attributeDivisors;Y[B]=1,H[B]===0&&(r.enableVertexAttribArray(B),H[B]=1),V[B]!==I&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](B,I),V[B]=I)}function A(){const B=c.newAttributes,I=c.enabledAttributes;for(let Y=0,H=I.length;Y<H;Y++)I[Y]!==B[Y]&&(r.disableVertexAttribArray(Y),I[Y]=0)}function b(B,I,Y,H,V,K,j){j===!0?r.vertexAttribIPointer(B,I,Y,V,K):r.vertexAttribPointer(B,I,Y,H,V,K)}function w(B,I,Y,H){if(n.isWebGL2===!1&&(B.isInstancedMesh||H.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;T();const V=H.attributes,K=Y.getAttributes(),j=I.defaultAttributeValues;for(const F in K){const X=K[F];if(X.location>=0){let oe=V[F];if(oe===void 0&&(F==="instanceMatrix"&&B.instanceMatrix&&(oe=B.instanceMatrix),F==="instanceColor"&&B.instanceColor&&(oe=B.instanceColor)),oe!==void 0){const re=oe.normalized,ee=oe.itemSize,fe=t.get(oe);if(fe===void 0)continue;const _e=fe.buffer,pe=fe.type,Le=fe.bytesPerElement,Ue=n.isWebGL2===!0&&(pe===r.INT||pe===r.UNSIGNED_INT||oe.gpuType===IntType);if(oe.isInterleavedBufferAttribute){const Se=oe.data,O=Se.stride,Fe=oe.offset;if(Se.isInstancedInterleavedBuffer){for(let ge=0;ge<X.locationSize;ge++)y(X.location+ge,Se.meshPerAttribute);B.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let ge=0;ge<X.locationSize;ge++)x(X.location+ge);r.bindBuffer(r.ARRAY_BUFFER,_e);for(let ge=0;ge<X.locationSize;ge++)b(X.location+ge,ee/X.locationSize,pe,re,O*Le,(Fe+ee/X.locationSize*ge)*Le,Ue)}else{if(oe.isInstancedBufferAttribute){for(let Se=0;Se<X.locationSize;Se++)y(X.location+Se,oe.meshPerAttribute);B.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Se=0;Se<X.locationSize;Se++)x(X.location+Se);r.bindBuffer(r.ARRAY_BUFFER,_e);for(let Se=0;Se<X.locationSize;Se++)b(X.location+Se,ee/X.locationSize,pe,re,ee*Le,ee/X.locationSize*Se*Le,Ue)}}else if(j!==void 0){const re=j[F];if(re!==void 0)switch(re.length){case 2:r.vertexAttrib2fv(X.location,re);break;case 3:r.vertexAttrib3fv(X.location,re);break;case 4:r.vertexAttrib4fv(X.location,re);break;default:r.vertexAttrib1fv(X.location,re)}}}}A()}function S(){Z();for(const B in o){const I=o[B];for(const Y in I){const H=I[Y];for(const V in H)g(H[V].object),delete H[V];delete I[Y]}delete o[B]}}function C(B){if(o[B.id]===void 0)return;const I=o[B.id];for(const Y in I){const H=I[Y];for(const V in H)g(H[V].object),delete H[V];delete I[Y]}delete o[B.id]}function k(B){for(const I in o){const Y=o[I];if(Y[B.id]===void 0)continue;const H=Y[B.id];for(const V in H)g(H[V].object),delete H[V];delete Y[B.id]}}function Z(){N(),u=!0,c!==l&&(c=l,f(c.object))}function N(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:Z,resetDefaultState:N,dispose:S,releaseStatesOfGeometry:C,releaseStatesOfProgram:k,initAttributes:T,enableAttribute:x,disableUnusedAttributes:A}}function WebGLBufferRenderer(r,e,t,n){const i=n.isWebGL2;let a;function s(c){a=c}function o(c,u){r.drawArrays(a,c,u),t.update(u,a,1)}function l(c,u,h){if(h===0)return;let d,f;if(i)d=r,f="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[f](a,c,u,h),t.update(u,a,h)}this.setMode=s,this.render=o,this.renderInstances=l}function WebGLCapabilities(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(b){if(b==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=a(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=s||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),m=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),p=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),T=d>0,x=s||e.has("OES_texture_float"),y=T&&x,A=s?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:s,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:a,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:v,vertexTextures:T,floatFragmentTextures:x,floatVertexTextures:y,maxSamples:A}}function WebGLClipping(r){const e=this;let t=null,n=0,i=!1,a=!1;const s=new Plane,o=new Matrix3,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||i;return i=d,n=h.length,f},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=r.get(h);if(!i||g===null||g.length===0||a&&!m)a?u(null):c();else{const v=a?0:n,T=v*4;let x=p.clippingState||null;l.value=x,x=u(g,d,T,f);for(let y=0;y!==T;++y)x[y]=t[y];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,v=d.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let T=0,x=f;T!==_;++T,x+=4)s.copy(h[T]).applyMatrix4(v,o),s.normal.toArray(m,x),m[x+3]=s.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function WebGLCubeMaps(r){let e=new WeakMap;function t(s,o){return o===EquirectangularReflectionMapping?s.mapping=CubeReflectionMapping:o===EquirectangularRefractionMapping&&(s.mapping=CubeRefractionMapping),s}function n(s){if(s&&s.isTexture&&s.isRenderTargetTexture===!1){const o=s.mapping;if(o===EquirectangularReflectionMapping||o===EquirectangularRefractionMapping)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new WebGLCubeRenderTarget(l.height/2);return c.fromEquirectangularTexture(r,s),e.set(s,c),s.addEventListener("dispose",i),t(c.texture,s.mapping)}else return null}}return s}function i(s){const o=s.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}class OrthographicCamera extends Camera{constructor(e=-1,t=1,n=1,i=-1,a=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=a,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,a,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let a=n-e,s=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,s=a+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(a,s,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const LOD_MIN=4,EXTRA_LOD_SIGMA=[.125,.215,.35,.446,.526,.582],MAX_SAMPLES=20,_flatCamera=new OrthographicCamera,_clearColor=new Color$1;let _oldTarget=null;const PHI=(1+Math.sqrt(5))/2,INV_PHI=1/PHI,_axisDirections=[new Vector3(1,1,1),new Vector3(-1,1,1),new Vector3(1,1,-1),new Vector3(-1,1,-1),new Vector3(0,PHI,INV_PHI),new Vector3(0,PHI,-INV_PHI),new Vector3(INV_PHI,0,PHI),new Vector3(-INV_PHI,0,PHI),new Vector3(PHI,INV_PHI,0),new Vector3(-PHI,INV_PHI,0)];class PMREMGenerator{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){_oldTarget=this._renderer.getRenderTarget(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,n,i,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_getCubemapMaterial(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_getEquirectMaterial(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(_oldTarget),e.scissorTest=!1,_setViewport(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===CubeReflectionMapping||e.mapping===CubeRefractionMapping?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_oldTarget=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:LinearFilter,minFilter:LinearFilter,generateMipmaps:!1,type:HalfFloatType,format:RGBAFormat,colorSpace:LinearSRGBColorSpace,depthBuffer:!1},i=_createRenderTarget(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_createRenderTarget(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_createPlanes(a)),this._blurMaterial=_getBlurShader(a,e,t)}return i}_compileMaterial(e){const t=new Mesh(this._lodPlanes[0],e);this._renderer.compile(t,_flatCamera)}_sceneToCubeUV(e,t,n,i){const o=new PerspectiveCamera(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(_clearColor),u.toneMapping=NoToneMapping,u.autoClear=!1;const f=new MeshBasicMaterial({name:"PMREM.Background",side:BackSide,depthWrite:!1,depthTest:!1}),g=new Mesh(new BoxGeometry,f);let _=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,_=!0):(f.color.copy(_clearColor),_=!0);for(let p=0;p<6;p++){const v=p%3;v===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):v===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const T=this._cubeSize;_setViewport(i,v*T,p>2?T:0,T,T),u.setRenderTarget(i),_&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===CubeReflectionMapping||e.mapping===CubeRefractionMapping;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=_getCubemapMaterial()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_getEquirectMaterial());const a=i?this._cubemapMaterial:this._equirectMaterial,s=new Mesh(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=e;const l=this._cubeSize;_setViewport(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(s,_flatCamera)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const a=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),s=_axisDirections[(i-1)%_axisDirections.length];this._blur(e,i-1,i,a,s)}t.autoClear=n}_blur(e,t,n,i,a){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,n,i,"latitudinal",a),this._halfBlur(s,e,n,n,i,"longitudinal",a)}_halfBlur(e,t,n,i,a,s,o){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Mesh(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(a)?Math.PI/(2*f):2*Math.PI/(2*MAX_SAMPLES-1),_=a/g,m=isFinite(a)?1+Math.floor(u*_):MAX_SAMPLES;m>MAX_SAMPLES&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${MAX_SAMPLES}`);const p=[];let v=0;for(let b=0;b<MAX_SAMPLES;++b){const w=b/_,S=Math.exp(-w*w/2);p.push(S),b===0?v+=S:b<m&&(v+=2*S)}for(let b=0;b<p.length;b++)p[b]=p[b]/v;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=s==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:T}=this;d.dTheta.value=g,d.mipInt.value=T-n;const x=this._sizeLods[i],y=3*x*(i>T-LOD_MIN?i-T+LOD_MIN:0),A=4*(this._cubeSize-x);_setViewport(t,y,A,3*x,2*x),l.setRenderTarget(t),l.render(h,_flatCamera)}}function _createPlanes(r){const e=[],t=[],n=[];let i=r;const a=r-LOD_MIN+1+EXTRA_LOD_SIGMA.length;for(let s=0;s<a;s++){const o=Math.pow(2,i);t.push(o);let l=1/o;s>r-LOD_MIN?l=EXTRA_LOD_SIGMA[s-r+LOD_MIN-1]:s===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,_=3,m=2,p=1,v=new Float32Array(_*g*f),T=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let A=0;A<f;A++){const b=A%3*2/3-1,w=A>2?0:-1,S=[b,w,0,b+2/3,w,0,b+2/3,w+1,0,b,w,0,b+2/3,w+1,0,b,w+1,0];v.set(S,_*g*A),T.set(d,m*g*A);const C=[A,A,A,A,A,A];x.set(C,p*g*A)}const y=new BufferGeometry;y.setAttribute("position",new BufferAttribute(v,_)),y.setAttribute("uv",new BufferAttribute(T,m)),y.setAttribute("faceIndex",new BufferAttribute(x,p)),e.push(y),i>LOD_MIN&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function _createRenderTarget(r,e,t){const n=new WebGLRenderTarget(r,e,t);return n.texture.mapping=CubeUVReflectionMapping,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function _setViewport(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function _getBlurShader(r,e,t){const n=new Float32Array(MAX_SAMPLES),i=new Vector3(0,1,0);return new ShaderMaterial({name:"SphericalGaussianBlur",defines:{n:MAX_SAMPLES,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:_getCommonVertexShader(),fragmentShader:`

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
		`,blending:NoBlending,depthTest:!1,depthWrite:!1})}function _getEquirectMaterial(){return new ShaderMaterial({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_getCommonVertexShader(),fragmentShader:`

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
		`,blending:NoBlending,depthTest:!1,depthWrite:!1})}function _getCubemapMaterial(){return new ShaderMaterial({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_getCommonVertexShader(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:NoBlending,depthTest:!1,depthWrite:!1})}function _getCommonVertexShader(){return`

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
	`}function WebGLCubeUVMaps(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===EquirectangularReflectionMapping||l===EquirectangularRefractionMapping,u=l===CubeReflectionMapping||l===CubeRefractionMapping;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return t===null&&(t=new PMREMGenerator(r)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{const h=o.image;if(c&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new PMREMGenerator(r));const d=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",a),d.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function a(o){const l=o.target;l.removeEventListener("dispose",a);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:s}}function WebGLExtensions(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function WebGLGeometries(r,e,t,n){const i={},a=new WeakMap;function s(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}d.removeEventListener("dispose",s),delete i[d.id];const f=a.get(d);f&&(e.remove(f),a.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return i[d.id]===!0||(d.addEventListener("dispose",s),i[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const g in d)e.update(d[g],r.ARRAY_BUFFER);const f=h.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],r.ARRAY_BUFFER)}}function c(h){const d=[],f=h.index,g=h.attributes.position;let _=0;if(f!==null){const v=f.array;_=f.version;for(let T=0,x=v.length;T<x;T+=3){const y=v[T+0],A=v[T+1],b=v[T+2];d.push(y,A,A,b,b,y)}}else if(g!==void 0){const v=g.array;_=g.version;for(let T=0,x=v.length/3-1;T<x;T+=3){const y=T+0,A=T+1,b=T+2;d.push(y,A,A,b,b,y)}}else return;const m=new(arrayNeedsUint32(d)?Uint32BufferAttribute:Uint16BufferAttribute)(d,1);m.version=_;const p=a.get(h);p&&e.remove(p),a.set(h,m)}function u(h){const d=a.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return a.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function WebGLIndexedBufferRenderer(r,e,t,n){const i=n.isWebGL2;let a;function s(d){a=d}let o,l;function c(d){o=d.type,l=d.bytesPerElement}function u(d,f){r.drawElements(a,f,o,d*l),t.update(f,a,1)}function h(d,f,g){if(g===0)return;let _,m;if(i)_=r,m="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[m](a,f,o,d*l,g),t.update(f,a,g)}this.setMode=s,this.setIndex=c,this.render=u,this.renderInstances=h}function WebGLInfo(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,s,o){switch(t.calls++,s){case r.TRIANGLES:t.triangles+=o*(a/3);break;case r.LINES:t.lines+=o*(a/2);break;case r.LINE_STRIP:t.lines+=o*(a-1);break;case r.LINE_LOOP:t.lines+=o*a;break;case r.POINTS:t.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function numericalSort(r,e){return r[0]-e[0]}function absNumericalSort(r,e){return Math.abs(e[1])-Math.abs(r[1])}function WebGLMorphtargets(r,e,t){const n={},i=new Float32Array(8),a=new WeakMap,s=new Vector4,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,h){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const f=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=f!==void 0?f.length:0;let _=a.get(u);if(_===void 0||_.count!==g){let B=function(){Z.dispose(),a.delete(u),u.removeEventListener("dispose",B)};_!==void 0&&_.texture.dispose();const v=u.morphAttributes.position!==void 0,T=u.morphAttributes.normal!==void 0,x=u.morphAttributes.color!==void 0,y=u.morphAttributes.position||[],A=u.morphAttributes.normal||[],b=u.morphAttributes.color||[];let w=0;v===!0&&(w=1),T===!0&&(w=2),x===!0&&(w=3);let S=u.attributes.position.count*w,C=1;S>e.maxTextureSize&&(C=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const k=new Float32Array(S*C*4*g),Z=new DataArrayTexture(k,S,C,g);Z.type=FloatType,Z.needsUpdate=!0;const N=w*4;for(let I=0;I<g;I++){const Y=y[I],H=A[I],V=b[I],K=S*C*4*I;for(let j=0;j<Y.count;j++){const F=j*N;v===!0&&(s.fromBufferAttribute(Y,j),k[K+F+0]=s.x,k[K+F+1]=s.y,k[K+F+2]=s.z,k[K+F+3]=0),T===!0&&(s.fromBufferAttribute(H,j),k[K+F+4]=s.x,k[K+F+5]=s.y,k[K+F+6]=s.z,k[K+F+7]=0),x===!0&&(s.fromBufferAttribute(V,j),k[K+F+8]=s.x,k[K+F+9]=s.y,k[K+F+10]=s.z,k[K+F+11]=V.itemSize===4?s.w:1)}}_={count:g,texture:Z,size:new Vector2(S,C)},a.set(u,_),u.addEventListener("dispose",B)}let m=0;for(let v=0;v<d.length;v++)m+=d[v];const p=u.morphTargetsRelative?1:1-m;h.getUniforms().setValue(r,"morphTargetBaseInfluence",p),h.getUniforms().setValue(r,"morphTargetInfluences",d),h.getUniforms().setValue(r,"morphTargetsTexture",_.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",_.size)}else{const f=d===void 0?0:d.length;let g=n[u.id];if(g===void 0||g.length!==f){g=[];for(let T=0;T<f;T++)g[T]=[T,0];n[u.id]=g}for(let T=0;T<f;T++){const x=g[T];x[0]=T,x[1]=d[T]}g.sort(absNumericalSort);for(let T=0;T<8;T++)T<f&&g[T][1]?(o[T][0]=g[T][0],o[T][1]=g[T][1]):(o[T][0]=Number.MAX_SAFE_INTEGER,o[T][1]=0);o.sort(numericalSort);const _=u.morphAttributes.position,m=u.morphAttributes.normal;let p=0;for(let T=0;T<8;T++){const x=o[T],y=x[0],A=x[1];y!==Number.MAX_SAFE_INTEGER&&A?(_&&u.getAttribute("morphTarget"+T)!==_[y]&&u.setAttribute("morphTarget"+T,_[y]),m&&u.getAttribute("morphNormal"+T)!==m[y]&&u.setAttribute("morphNormal"+T,m[y]),i[T]=A,p+=A):(_&&u.hasAttribute("morphTarget"+T)===!0&&u.deleteAttribute("morphTarget"+T),m&&u.hasAttribute("morphNormal"+T)===!0&&u.deleteAttribute("morphNormal"+T),i[T]=0)}const v=u.morphTargetsRelative?1:1-p;h.getUniforms().setValue(r,"morphTargetBaseInfluence",v),h.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function WebGLObjects(r,e,t,n){let i=new WeakMap;function a(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return h}function s(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:a,dispose:s}}const emptyTexture=new Texture,emptyArrayTexture=new DataArrayTexture,empty3dTexture=new Data3DTexture,emptyCubeTexture=new CubeTexture,arrayCacheF32=[],arrayCacheI32=[],mat4array=new Float32Array(16),mat3array=new Float32Array(9),mat2array=new Float32Array(4);function flatten(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let a=arrayCacheF32[i];if(a===void 0&&(a=new Float32Array(i),arrayCacheF32[i]=a),e!==0){n.toArray(a,0);for(let s=1,o=0;s!==e;++s)o+=t,r[s].toArray(a,o)}return a}function arraysEqual(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function copyArray(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function allocTexUnits(r,e){let t=arrayCacheI32[e];t===void 0&&(t=new Int32Array(e),arrayCacheI32[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function setValueV1f(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function setValueV2f(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(arraysEqual(t,e))return;r.uniform2fv(this.addr,e),copyArray(t,e)}}function setValueV3f(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(arraysEqual(t,e))return;r.uniform3fv(this.addr,e),copyArray(t,e)}}function setValueV4f(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(arraysEqual(t,e))return;r.uniform4fv(this.addr,e),copyArray(t,e)}}function setValueM2(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(arraysEqual(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),copyArray(t,e)}else{if(arraysEqual(t,n))return;mat2array.set(n),r.uniformMatrix2fv(this.addr,!1,mat2array),copyArray(t,n)}}function setValueM3(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(arraysEqual(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),copyArray(t,e)}else{if(arraysEqual(t,n))return;mat3array.set(n),r.uniformMatrix3fv(this.addr,!1,mat3array),copyArray(t,n)}}function setValueM4(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(arraysEqual(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),copyArray(t,e)}else{if(arraysEqual(t,n))return;mat4array.set(n),r.uniformMatrix4fv(this.addr,!1,mat4array),copyArray(t,n)}}function setValueV1i(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function setValueV2i(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(arraysEqual(t,e))return;r.uniform2iv(this.addr,e),copyArray(t,e)}}function setValueV3i(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(arraysEqual(t,e))return;r.uniform3iv(this.addr,e),copyArray(t,e)}}function setValueV4i(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(arraysEqual(t,e))return;r.uniform4iv(this.addr,e),copyArray(t,e)}}function setValueV1ui(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function setValueV2ui(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(arraysEqual(t,e))return;r.uniform2uiv(this.addr,e),copyArray(t,e)}}function setValueV3ui(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(arraysEqual(t,e))return;r.uniform3uiv(this.addr,e),copyArray(t,e)}}function setValueV4ui(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(arraysEqual(t,e))return;r.uniform4uiv(this.addr,e),copyArray(t,e)}}function setValueT1(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||emptyTexture,i)}function setValueT3D1(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||empty3dTexture,i)}function setValueT6(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||emptyCubeTexture,i)}function setValueT2DArray1(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||emptyArrayTexture,i)}function getSingularSetter(r){switch(r){case 5126:return setValueV1f;case 35664:return setValueV2f;case 35665:return setValueV3f;case 35666:return setValueV4f;case 35674:return setValueM2;case 35675:return setValueM3;case 35676:return setValueM4;case 5124:case 35670:return setValueV1i;case 35667:case 35671:return setValueV2i;case 35668:case 35672:return setValueV3i;case 35669:case 35673:return setValueV4i;case 5125:return setValueV1ui;case 36294:return setValueV2ui;case 36295:return setValueV3ui;case 36296:return setValueV4ui;case 35678:case 36198:case 36298:case 36306:case 35682:return setValueT1;case 35679:case 36299:case 36307:return setValueT3D1;case 35680:case 36300:case 36308:case 36293:return setValueT6;case 36289:case 36303:case 36311:case 36292:return setValueT2DArray1}}function setValueV1fArray(r,e){r.uniform1fv(this.addr,e)}function setValueV2fArray(r,e){const t=flatten(e,this.size,2);r.uniform2fv(this.addr,t)}function setValueV3fArray(r,e){const t=flatten(e,this.size,3);r.uniform3fv(this.addr,t)}function setValueV4fArray(r,e){const t=flatten(e,this.size,4);r.uniform4fv(this.addr,t)}function setValueM2Array(r,e){const t=flatten(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function setValueM3Array(r,e){const t=flatten(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function setValueM4Array(r,e){const t=flatten(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function setValueV1iArray(r,e){r.uniform1iv(this.addr,e)}function setValueV2iArray(r,e){r.uniform2iv(this.addr,e)}function setValueV3iArray(r,e){r.uniform3iv(this.addr,e)}function setValueV4iArray(r,e){r.uniform4iv(this.addr,e)}function setValueV1uiArray(r,e){r.uniform1uiv(this.addr,e)}function setValueV2uiArray(r,e){r.uniform2uiv(this.addr,e)}function setValueV3uiArray(r,e){r.uniform3uiv(this.addr,e)}function setValueV4uiArray(r,e){r.uniform4uiv(this.addr,e)}function setValueT1Array(r,e,t){const n=this.cache,i=e.length,a=allocTexUnits(t,i);arraysEqual(n,a)||(r.uniform1iv(this.addr,a),copyArray(n,a));for(let s=0;s!==i;++s)t.setTexture2D(e[s]||emptyTexture,a[s])}function setValueT3DArray(r,e,t){const n=this.cache,i=e.length,a=allocTexUnits(t,i);arraysEqual(n,a)||(r.uniform1iv(this.addr,a),copyArray(n,a));for(let s=0;s!==i;++s)t.setTexture3D(e[s]||empty3dTexture,a[s])}function setValueT6Array(r,e,t){const n=this.cache,i=e.length,a=allocTexUnits(t,i);arraysEqual(n,a)||(r.uniform1iv(this.addr,a),copyArray(n,a));for(let s=0;s!==i;++s)t.setTextureCube(e[s]||emptyCubeTexture,a[s])}function setValueT2DArrayArray(r,e,t){const n=this.cache,i=e.length,a=allocTexUnits(t,i);arraysEqual(n,a)||(r.uniform1iv(this.addr,a),copyArray(n,a));for(let s=0;s!==i;++s)t.setTexture2DArray(e[s]||emptyArrayTexture,a[s])}function getPureArraySetter(r){switch(r){case 5126:return setValueV1fArray;case 35664:return setValueV2fArray;case 35665:return setValueV3fArray;case 35666:return setValueV4fArray;case 35674:return setValueM2Array;case 35675:return setValueM3Array;case 35676:return setValueM4Array;case 5124:case 35670:return setValueV1iArray;case 35667:case 35671:return setValueV2iArray;case 35668:case 35672:return setValueV3iArray;case 35669:case 35673:return setValueV4iArray;case 5125:return setValueV1uiArray;case 36294:return setValueV2uiArray;case 36295:return setValueV3uiArray;case 36296:return setValueV4uiArray;case 35678:case 36198:case 36298:case 36306:case 35682:return setValueT1Array;case 35679:case 36299:case 36307:return setValueT3DArray;case 35680:case 36300:case 36308:case 36293:return setValueT6Array;case 36289:case 36303:case 36311:case 36292:return setValueT2DArrayArray}}class SingleUniform{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=getSingularSetter(t.type)}}class PureArrayUniform{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=getPureArraySetter(t.type)}}class StructuredUniform{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let a=0,s=i.length;a!==s;++a){const o=i[a];o.setValue(e,t[o.id],n)}}}const RePathPart=/(\w+)(\])?(\[|\.)?/g;function addUniform(r,e){r.seq.push(e),r.map[e.id]=e}function parseUniform(r,e,t){const n=r.name,i=n.length;for(RePathPart.lastIndex=0;;){const a=RePathPart.exec(n),s=RePathPart.lastIndex;let o=a[1];const l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===i){addUniform(t,c===void 0?new SingleUniform(o,r,e):new PureArrayUniform(o,r,e));break}else{let h=t.map[o];h===void 0&&(h=new StructuredUniform(o),addUniform(t,h)),t=h}}}class WebGLUniforms{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const a=e.getActiveUniform(t,i),s=e.getUniformLocation(t,a.name);parseUniform(a,s,this)}}setValue(e,t,n,i){const a=this.map[t];a!==void 0&&a.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let a=0,s=t.length;a!==s;++a){const o=t[a],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,a=e.length;i!==a;++i){const s=e[i];s.id in t&&n.push(s)}return n}}function WebGLShader(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}let programIdCount=0;function handleSource(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let s=i;s<a;s++){const o=s+1;n.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return n.join(`
`)}function getEncodingComponents(r){switch(r){case LinearSRGBColorSpace:return["Linear","( value )"];case SRGBColorSpace:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),["Linear","( value )"]}}function getShaderErrors(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const a=/ERROR: 0:(\d+)/.exec(i);if(a){const s=parseInt(a[1]);return t.toUpperCase()+`

`+i+`

`+handleSource(r.getShaderSource(e),s)}else return i}function getTexelEncodingFunction(r,e){const t=getEncodingComponents(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function getToneMappingFunction(r,e){let t;switch(e){case LinearToneMapping:t="Linear";break;case ReinhardToneMapping:t="Reinhard";break;case CineonToneMapping:t="OptimizedCineon";break;case ACESFilmicToneMapping:t="ACESFilmic";break;case CustomToneMapping:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function generateExtensions(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(filterEmptyLine).join(`
`)}function generateDefines(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function fetchAttributeLocations(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const a=r.getActiveAttrib(e,i),s=a.name;let o=1;a.type===r.FLOAT_MAT2&&(o=2),a.type===r.FLOAT_MAT3&&(o=3),a.type===r.FLOAT_MAT4&&(o=4),t[s]={type:a.type,location:r.getAttribLocation(e,s),locationSize:o}}return t}function filterEmptyLine(r){return r!==""}function replaceLightNums(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function replaceClippingPlaneNums(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const includePattern=/^[ \t]*#include +<([\w\d./]+)>/gm;function resolveIncludes(r){return r.replace(includePattern,includeReplacer)}const shaderChunkMap=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function includeReplacer(r,e){let t=ShaderChunk[e];if(t===void 0){const n=shaderChunkMap.get(e);if(n!==void 0)t=ShaderChunk[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return resolveIncludes(t)}const unrollLoopPattern=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function unrollLoops(r){return r.replace(unrollLoopPattern,loopReplacer)}function loopReplacer(r,e,t,n){let i="";for(let a=parseInt(e);a<parseInt(t);a++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return i}function generatePrecision(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function generateShadowMapTypeDefine(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===PCFShadowMap?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===PCFSoftShadowMap?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===VSMShadowMap&&(e="SHADOWMAP_TYPE_VSM"),e}function generateEnvMapTypeDefine(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case CubeReflectionMapping:case CubeRefractionMapping:e="ENVMAP_TYPE_CUBE";break;case CubeUVReflectionMapping:e="ENVMAP_TYPE_CUBE_UV";break}return e}function generateEnvMapModeDefine(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case CubeRefractionMapping:e="ENVMAP_MODE_REFRACTION";break}return e}function generateEnvMapBlendingDefine(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case MultiplyOperation:e="ENVMAP_BLENDING_MULTIPLY";break;case MixOperation:e="ENVMAP_BLENDING_MIX";break;case AddOperation:e="ENVMAP_BLENDING_ADD";break}return e}function generateCubeUVSize(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function WebGLProgram(r,e,t,n){const i=r.getContext(),a=t.defines;let s=t.vertexShader,o=t.fragmentShader;const l=generateShadowMapTypeDefine(t),c=generateEnvMapTypeDefine(t),u=generateEnvMapModeDefine(t),h=generateEnvMapBlendingDefine(t),d=generateCubeUVSize(t),f=t.isWebGL2?"":generateExtensions(t),g=generateDefines(a),_=i.createProgram();let m,p,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(filterEmptyLine).join(`
`),m.length>0&&(m+=`
`),p=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(filterEmptyLine).join(`
`),p.length>0&&(p+=`
`)):(m=[generatePrecision(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(filterEmptyLine).join(`
`),p=[f,generatePrecision(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==NoToneMapping?"#define TONE_MAPPING":"",t.toneMapping!==NoToneMapping?ShaderChunk.tonemapping_pars_fragment:"",t.toneMapping!==NoToneMapping?getToneMappingFunction("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ShaderChunk.colorspace_pars_fragment,getTexelEncodingFunction("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(filterEmptyLine).join(`
`)),s=resolveIncludes(s),s=replaceLightNums(s,t),s=replaceClippingPlaneNums(s,t),o=resolveIncludes(o),o=replaceLightNums(o,t),o=replaceClippingPlaneNums(o,t),s=unrollLoops(s),o=unrollLoops(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===GLSL3?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===GLSL3?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const T=v+m+s,x=v+p+o,y=WebGLShader(i,i.VERTEX_SHADER,T),A=WebGLShader(i,i.FRAGMENT_SHADER,x);if(i.attachShader(_,y),i.attachShader(_,A),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_),r.debug.checkShaderErrors){const S=i.getProgramInfoLog(_).trim(),C=i.getShaderInfoLog(y).trim(),k=i.getShaderInfoLog(A).trim();let Z=!0,N=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(Z=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,y,A);else{const B=getShaderErrors(i,y,"vertex"),I=getShaderErrors(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Program Info Log: `+S+`
`+B+`
`+I)}else S!==""?console.warn("THREE.WebGLProgram: Program Info Log:",S):(C===""||k==="")&&(N=!1);N&&(this.diagnostics={runnable:Z,programLog:S,vertexShader:{log:C,prefix:m},fragmentShader:{log:k,prefix:p}})}i.deleteShader(y),i.deleteShader(A);let b;this.getUniforms=function(){return b===void 0&&(b=new WebGLUniforms(i,_)),b};let w;return this.getAttributes=function(){return w===void 0&&(w=fetchAttributeLocations(i,_)),w},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=programIdCount++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=y,this.fragmentShader=A,this}let _id=0;class WebGLShaderCache{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),a=this._getShaderStage(n),s=this._getShaderCacheForMaterial(e);return s.has(i)===!1&&(s.add(i),i.usedTimes++),s.has(a)===!1&&(s.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new WebGLShaderStage(e),t.set(e,n)),n}}class WebGLShaderStage{constructor(e){this.id=_id++,this.code=e,this.usedTimes=0}}function WebGLPrograms(r,e,t,n,i,a,s){const o=new Layers,l=new WebGLShaderCache,c=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return S===0?"uv":`uv${S}`}function m(S,C,k,Z,N){const B=Z.fog,I=N.geometry,Y=S.isMeshStandardMaterial?Z.environment:null,H=(S.isMeshStandardMaterial?t:e).get(S.envMap||Y),V=H&&H.mapping===CubeUVReflectionMapping?H.image.height:null,K=g[S.type];S.precision!==null&&(f=i.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const j=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,F=j!==void 0?j.length:0;let X=0;I.morphAttributes.position!==void 0&&(X=1),I.morphAttributes.normal!==void 0&&(X=2),I.morphAttributes.color!==void 0&&(X=3);let oe,re,ee,fe;if(K){const Ve=ShaderLib[K];oe=Ve.vertexShader,re=Ve.fragmentShader}else oe=S.vertexShader,re=S.fragmentShader,l.update(S),ee=l.getVertexShaderID(S),fe=l.getFragmentShaderID(S);const _e=r.getRenderTarget(),pe=N.isInstancedMesh===!0,Le=!!S.map,Ue=!!S.matcap,Se=!!H,O=!!S.aoMap,Fe=!!S.lightMap,ge=!!S.bumpMap,xe=!!S.normalMap,ve=!!S.displacementMap,Be=!!S.emissiveMap,Ae=!!S.metalnessMap,Ee=!!S.roughnessMap,Ne=S.anisotropy>0,Xe=S.clearcoat>0,$e=S.iridescence>0,L=S.sheen>0,M=S.transmission>0,z=Ne&&!!S.anisotropyMap,ne=Xe&&!!S.clearcoatMap,Q=Xe&&!!S.clearcoatNormalMap,ie=Xe&&!!S.clearcoatRoughnessMap,me=$e&&!!S.iridescenceMap,ae=$e&&!!S.iridescenceThicknessMap,W=L&&!!S.sheenColorMap,R=L&&!!S.sheenRoughnessMap,J=!!S.specularMap,de=!!S.specularColorMap,se=!!S.specularIntensityMap,ue=M&&!!S.transmissionMap,Ce=M&&!!S.thicknessMap,De=!!S.gradientMap,P=!!S.alphaMap,le=S.alphaTest>0,G=!!S.alphaHash,te=!!S.extensions,ce=!!I.attributes.uv1,we=!!I.attributes.uv2,Ie=!!I.attributes.uv3;let Ge=NoToneMapping;return S.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(Ge=r.toneMapping),{isWebGL2:u,shaderID:K,shaderType:S.type,shaderName:S.name,vertexShader:oe,fragmentShader:re,defines:S.defines,customVertexShaderID:ee,customFragmentShaderID:fe,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,instancing:pe,instancingColor:pe&&N.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:_e===null?r.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:LinearSRGBColorSpace,map:Le,matcap:Ue,envMap:Se,envMapMode:Se&&H.mapping,envMapCubeUVHeight:V,aoMap:O,lightMap:Fe,bumpMap:ge,normalMap:xe,displacementMap:d&&ve,emissiveMap:Be,normalMapObjectSpace:xe&&S.normalMapType===ObjectSpaceNormalMap,normalMapTangentSpace:xe&&S.normalMapType===TangentSpaceNormalMap,metalnessMap:Ae,roughnessMap:Ee,anisotropy:Ne,anisotropyMap:z,clearcoat:Xe,clearcoatMap:ne,clearcoatNormalMap:Q,clearcoatRoughnessMap:ie,iridescence:$e,iridescenceMap:me,iridescenceThicknessMap:ae,sheen:L,sheenColorMap:W,sheenRoughnessMap:R,specularMap:J,specularColorMap:de,specularIntensityMap:se,transmission:M,transmissionMap:ue,thicknessMap:Ce,gradientMap:De,opaque:S.transparent===!1&&S.blending===NormalBlending,alphaMap:P,alphaTest:le,alphaHash:G,combine:S.combine,mapUv:Le&&_(S.map.channel),aoMapUv:O&&_(S.aoMap.channel),lightMapUv:Fe&&_(S.lightMap.channel),bumpMapUv:ge&&_(S.bumpMap.channel),normalMapUv:xe&&_(S.normalMap.channel),displacementMapUv:ve&&_(S.displacementMap.channel),emissiveMapUv:Be&&_(S.emissiveMap.channel),metalnessMapUv:Ae&&_(S.metalnessMap.channel),roughnessMapUv:Ee&&_(S.roughnessMap.channel),anisotropyMapUv:z&&_(S.anisotropyMap.channel),clearcoatMapUv:ne&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:Q&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:W&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:R&&_(S.sheenRoughnessMap.channel),specularMapUv:J&&_(S.specularMap.channel),specularColorMapUv:de&&_(S.specularColorMap.channel),specularIntensityMapUv:se&&_(S.specularIntensityMap.channel),transmissionMapUv:ue&&_(S.transmissionMap.channel),thicknessMapUv:Ce&&_(S.thicknessMap.channel),alphaMapUv:P&&_(S.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(xe||Ne),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,vertexUv1s:ce,vertexUv2s:we,vertexUv3s:Ie,pointsUvs:N.isPoints===!0&&!!I.attributes.uv&&(Le||P),fog:!!B,useFog:S.fog===!0,fogExp2:B&&B.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:N.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:X,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:S.dithering,shadowMapEnabled:r.shadowMap.enabled&&k.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ge,useLegacyLights:r._useLegacyLights,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===DoubleSide,flipSided:S.side===BackSide,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:te&&S.extensions.derivatives===!0,extensionFragDepth:te&&S.extensions.fragDepth===!0,extensionDrawBuffers:te&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:te&&S.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:S.customProgramCacheKey()}}function p(S){const C=[];if(S.shaderID?C.push(S.shaderID):(C.push(S.customVertexShaderID),C.push(S.customFragmentShaderID)),S.defines!==void 0)for(const k in S.defines)C.push(k),C.push(S.defines[k]);return S.isRawShaderMaterial===!1&&(v(C,S),T(C,S),C.push(r.outputColorSpace)),C.push(S.customProgramCacheKey),C.join()}function v(S,C){S.push(C.precision),S.push(C.outputColorSpace),S.push(C.envMapMode),S.push(C.envMapCubeUVHeight),S.push(C.mapUv),S.push(C.alphaMapUv),S.push(C.lightMapUv),S.push(C.aoMapUv),S.push(C.bumpMapUv),S.push(C.normalMapUv),S.push(C.displacementMapUv),S.push(C.emissiveMapUv),S.push(C.metalnessMapUv),S.push(C.roughnessMapUv),S.push(C.anisotropyMapUv),S.push(C.clearcoatMapUv),S.push(C.clearcoatNormalMapUv),S.push(C.clearcoatRoughnessMapUv),S.push(C.iridescenceMapUv),S.push(C.iridescenceThicknessMapUv),S.push(C.sheenColorMapUv),S.push(C.sheenRoughnessMapUv),S.push(C.specularMapUv),S.push(C.specularColorMapUv),S.push(C.specularIntensityMapUv),S.push(C.transmissionMapUv),S.push(C.thicknessMapUv),S.push(C.combine),S.push(C.fogExp2),S.push(C.sizeAttenuation),S.push(C.morphTargetsCount),S.push(C.morphAttributeCount),S.push(C.numDirLights),S.push(C.numPointLights),S.push(C.numSpotLights),S.push(C.numSpotLightMaps),S.push(C.numHemiLights),S.push(C.numRectAreaLights),S.push(C.numDirLightShadows),S.push(C.numPointLightShadows),S.push(C.numSpotLightShadows),S.push(C.numSpotLightShadowsWithMaps),S.push(C.shadowMapType),S.push(C.toneMapping),S.push(C.numClippingPlanes),S.push(C.numClipIntersection),S.push(C.depthPacking)}function T(S,C){o.disableAll(),C.isWebGL2&&o.enable(0),C.supportsVertexTextures&&o.enable(1),C.instancing&&o.enable(2),C.instancingColor&&o.enable(3),C.matcap&&o.enable(4),C.envMap&&o.enable(5),C.normalMapObjectSpace&&o.enable(6),C.normalMapTangentSpace&&o.enable(7),C.clearcoat&&o.enable(8),C.iridescence&&o.enable(9),C.alphaTest&&o.enable(10),C.vertexColors&&o.enable(11),C.vertexAlphas&&o.enable(12),C.vertexUv1s&&o.enable(13),C.vertexUv2s&&o.enable(14),C.vertexUv3s&&o.enable(15),C.vertexTangents&&o.enable(16),C.anisotropy&&o.enable(17),S.push(o.mask),o.disableAll(),C.fog&&o.enable(0),C.useFog&&o.enable(1),C.flatShading&&o.enable(2),C.logarithmicDepthBuffer&&o.enable(3),C.skinning&&o.enable(4),C.morphTargets&&o.enable(5),C.morphNormals&&o.enable(6),C.morphColors&&o.enable(7),C.premultipliedAlpha&&o.enable(8),C.shadowMapEnabled&&o.enable(9),C.useLegacyLights&&o.enable(10),C.doubleSided&&o.enable(11),C.flipSided&&o.enable(12),C.useDepthPacking&&o.enable(13),C.dithering&&o.enable(14),C.transmission&&o.enable(15),C.sheen&&o.enable(16),C.opaque&&o.enable(17),C.pointsUvs&&o.enable(18),S.push(o.mask)}function x(S){const C=g[S.type];let k;if(C){const Z=ShaderLib[C];k=UniformsUtils.clone(Z.uniforms)}else k=S.uniforms;return k}function y(S,C){let k;for(let Z=0,N=c.length;Z<N;Z++){const B=c[Z];if(B.cacheKey===C){k=B,++k.usedTimes;break}}return k===void 0&&(k=new WebGLProgram(r,C,S,a),c.push(k)),k}function A(S){if(--S.usedTimes===0){const C=c.indexOf(S);c[C]=c[c.length-1],c.pop(),S.destroy()}}function b(S){l.remove(S)}function w(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:y,releaseProgram:A,releaseShaderCache:b,programs:c,dispose:w}}function WebGLProperties(){let r=new WeakMap;function e(a){let s=r.get(a);return s===void 0&&(s={},r.set(a,s)),s}function t(a){r.delete(a)}function n(a,s,o){r.get(a)[s]=o}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function painterSortStable(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function reversePainterSortStable(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function WebGLRenderList(){const r=[];let e=0;const t=[],n=[],i=[];function a(){e=0,t.length=0,n.length=0,i.length=0}function s(h,d,f,g,_,m){let p=r[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},r[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),e++,p}function o(h,d,f,g,_,m){const p=s(h,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function l(h,d,f,g,_,m){const p=s(h,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function c(h,d){t.length>1&&t.sort(h||painterSortStable),n.length>1&&n.sort(d||reversePainterSortStable),i.length>1&&i.sort(d||reversePainterSortStable)}function u(){for(let h=e,d=r.length;h<d;h++){const f=r[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:a,push:o,unshift:l,finish:u,sort:c}}function WebGLRenderLists(){let r=new WeakMap;function e(n,i){const a=r.get(n);let s;return a===void 0?(s=new WebGLRenderList,r.set(n,[s])):i>=a.length?(s=new WebGLRenderList,a.push(s)):s=a[i],s}function t(){r=new WeakMap}return{get:e,dispose:t}}function UniformsCache(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Vector3,color:new Color$1};break;case"SpotLight":t={position:new Vector3,direction:new Vector3,color:new Color$1,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Vector3,color:new Color$1,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Vector3,skyColor:new Color$1,groundColor:new Color$1};break;case"RectAreaLight":t={color:new Color$1,position:new Vector3,halfWidth:new Vector3,halfHeight:new Vector3};break}return r[e.id]=t,t}}}function ShadowUniformsCache(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vector2};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vector2};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vector2,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let nextVersion=0;function shadowCastingAndTexturingLightsFirst(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function WebGLLights(r,e){const t=new UniformsCache,n=ShadowUniformsCache(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new Vector3);const a=new Vector3,s=new Matrix4,o=new Matrix4;function l(u,h){let d=0,f=0,g=0;for(let k=0;k<9;k++)i.probe[k].set(0,0,0);let _=0,m=0,p=0,v=0,T=0,x=0,y=0,A=0,b=0,w=0;u.sort(shadowCastingAndTexturingLightsFirst);const S=h===!0?Math.PI:1;for(let k=0,Z=u.length;k<Z;k++){const N=u[k],B=N.color,I=N.intensity,Y=N.distance,H=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)d+=B.r*I*S,f+=B.g*I*S,g+=B.b*I*S;else if(N.isLightProbe)for(let V=0;V<9;V++)i.probe[V].addScaledVector(N.sh.coefficients[V],I);else if(N.isDirectionalLight){const V=t.get(N);if(V.color.copy(N.color).multiplyScalar(N.intensity*S),N.castShadow){const K=N.shadow,j=n.get(N);j.shadowBias=K.bias,j.shadowNormalBias=K.normalBias,j.shadowRadius=K.radius,j.shadowMapSize=K.mapSize,i.directionalShadow[_]=j,i.directionalShadowMap[_]=H,i.directionalShadowMatrix[_]=N.shadow.matrix,x++}i.directional[_]=V,_++}else if(N.isSpotLight){const V=t.get(N);V.position.setFromMatrixPosition(N.matrixWorld),V.color.copy(B).multiplyScalar(I*S),V.distance=Y,V.coneCos=Math.cos(N.angle),V.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),V.decay=N.decay,i.spot[p]=V;const K=N.shadow;if(N.map&&(i.spotLightMap[b]=N.map,b++,K.updateMatrices(N),N.castShadow&&w++),i.spotLightMatrix[p]=K.matrix,N.castShadow){const j=n.get(N);j.shadowBias=K.bias,j.shadowNormalBias=K.normalBias,j.shadowRadius=K.radius,j.shadowMapSize=K.mapSize,i.spotShadow[p]=j,i.spotShadowMap[p]=H,A++}p++}else if(N.isRectAreaLight){const V=t.get(N);V.color.copy(B).multiplyScalar(I),V.halfWidth.set(N.width*.5,0,0),V.halfHeight.set(0,N.height*.5,0),i.rectArea[v]=V,v++}else if(N.isPointLight){const V=t.get(N);if(V.color.copy(N.color).multiplyScalar(N.intensity*S),V.distance=N.distance,V.decay=N.decay,N.castShadow){const K=N.shadow,j=n.get(N);j.shadowBias=K.bias,j.shadowNormalBias=K.normalBias,j.shadowRadius=K.radius,j.shadowMapSize=K.mapSize,j.shadowCameraNear=K.camera.near,j.shadowCameraFar=K.camera.far,i.pointShadow[m]=j,i.pointShadowMap[m]=H,i.pointShadowMatrix[m]=N.shadow.matrix,y++}i.point[m]=V,m++}else if(N.isHemisphereLight){const V=t.get(N);V.skyColor.copy(N.color).multiplyScalar(I*S),V.groundColor.copy(N.groundColor).multiplyScalar(I*S),i.hemi[T]=V,T++}}v>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=UniformsLib.LTC_FLOAT_1,i.rectAreaLTC2=UniformsLib.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=UniformsLib.LTC_HALF_1,i.rectAreaLTC2=UniformsLib.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=g;const C=i.hash;(C.directionalLength!==_||C.pointLength!==m||C.spotLength!==p||C.rectAreaLength!==v||C.hemiLength!==T||C.numDirectionalShadows!==x||C.numPointShadows!==y||C.numSpotShadows!==A||C.numSpotMaps!==b)&&(i.directional.length=_,i.spot.length=p,i.rectArea.length=v,i.point.length=m,i.hemi.length=T,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=A+b-w,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=w,C.directionalLength=_,C.pointLength=m,C.spotLength=p,C.rectAreaLength=v,C.hemiLength=T,C.numDirectionalShadows=x,C.numPointShadows=y,C.numSpotShadows=A,C.numSpotMaps=b,i.version=nextVersion++)}function c(u,h){let d=0,f=0,g=0,_=0,m=0;const p=h.matrixWorldInverse;for(let v=0,T=u.length;v<T;v++){const x=u[v];if(x.isDirectionalLight){const y=i.directional[d];y.direction.setFromMatrixPosition(x.matrixWorld),a.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(a),y.direction.transformDirection(p),d++}else if(x.isSpotLight){const y=i.spot[g];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(x.matrixWorld),a.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(a),y.direction.transformDirection(p),g++}else if(x.isRectAreaLight){const y=i.rectArea[_];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(p),o.identity(),s.copy(x.matrixWorld),s.premultiply(p),o.extractRotation(s),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),_++}else if(x.isPointLight){const y=i.point[f];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(p),f++}else if(x.isHemisphereLight){const y=i.hemi[m];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:i}}function WebGLRenderState(r,e){const t=new WebGLLights(r,e),n=[],i=[];function a(){n.length=0,i.length=0}function s(h){n.push(h)}function o(h){i.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:a,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:s,pushShadow:o}}function WebGLRenderStates(r,e){let t=new WeakMap;function n(a,s=0){const o=t.get(a);let l;return o===void 0?(l=new WebGLRenderState(r,e),t.set(a,[l])):s>=o.length?(l=new WebGLRenderState(r,e),o.push(l)):l=o[s],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class MeshDepthMaterial extends Material{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=BasicDepthPacking,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class MeshDistanceMaterial extends Material{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const vertex=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fragment=`uniform sampler2D shadow_pass;
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
}`;function WebGLShadowMap(r,e,t){let n=new Frustum;const i=new Vector2,a=new Vector2,s=new Vector4,o=new MeshDepthMaterial({depthPacking:RGBADepthPacking}),l=new MeshDistanceMaterial,c={},u=t.maxTextureSize,h={[FrontSide]:BackSide,[BackSide]:FrontSide,[DoubleSide]:DoubleSide},d=new ShaderMaterial({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Vector2},radius:{value:4}},vertexShader:vertex,fragmentShader:fragment}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new BufferGeometry;g.setAttribute("position",new BufferAttribute(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Mesh(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=PCFShadowMap;let p=this.type;this.render=function(y,A,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||y.length===0)return;const w=r.getRenderTarget(),S=r.getActiveCubeFace(),C=r.getActiveMipmapLevel(),k=r.state;k.setBlending(NoBlending),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const Z=p!==VSMShadowMap&&this.type===VSMShadowMap,N=p===VSMShadowMap&&this.type!==VSMShadowMap;for(let B=0,I=y.length;B<I;B++){const Y=y[B],H=Y.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);const V=H.getFrameExtents();if(i.multiply(V),a.copy(H.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/V.x),i.x=a.x*V.x,H.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/V.y),i.y=a.y*V.y,H.mapSize.y=a.y)),H.map===null||Z===!0||N===!0){const j=this.type!==VSMShadowMap?{minFilter:NearestFilter,magFilter:NearestFilter}:{};H.map!==null&&H.map.dispose(),H.map=new WebGLRenderTarget(i.x,i.y,j),H.map.texture.name=Y.name+".shadowMap",H.camera.updateProjectionMatrix()}r.setRenderTarget(H.map),r.clear();const K=H.getViewportCount();for(let j=0;j<K;j++){const F=H.getViewport(j);s.set(a.x*F.x,a.y*F.y,a.x*F.z,a.y*F.w),k.viewport(s),H.updateMatrices(Y,j),n=H.getFrustum(),x(A,b,H.camera,Y,this.type)}H.isPointLightShadow!==!0&&this.type===VSMShadowMap&&v(H,b),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(w,S,C)};function v(y,A){const b=e.update(_);d.defines.VSM_SAMPLES!==y.blurSamples&&(d.defines.VSM_SAMPLES=y.blurSamples,f.defines.VSM_SAMPLES=y.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new WebGLRenderTarget(i.x,i.y)),d.uniforms.shadow_pass.value=y.map.texture,d.uniforms.resolution.value=y.mapSize,d.uniforms.radius.value=y.radius,r.setRenderTarget(y.mapPass),r.clear(),r.renderBufferDirect(A,null,b,d,_,null),f.uniforms.shadow_pass.value=y.mapPass.texture,f.uniforms.resolution.value=y.mapSize,f.uniforms.radius.value=y.radius,r.setRenderTarget(y.map),r.clear(),r.renderBufferDirect(A,null,b,f,_,null)}function T(y,A,b,w){let S=null;const C=b.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(C!==void 0)S=C;else if(S=b.isPointLight===!0?l:o,r.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const k=S.uuid,Z=A.uuid;let N=c[k];N===void 0&&(N={},c[k]=N);let B=N[Z];B===void 0&&(B=S.clone(),N[Z]=B),S=B}if(S.visible=A.visible,S.wireframe=A.wireframe,w===VSMShadowMap?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:h[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,b.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const k=r.properties.get(S);k.light=b}return S}function x(y,A,b,w,S){if(y.visible===!1)return;if(y.layers.test(A.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&S===VSMShadowMap)&&(!y.frustumCulled||n.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,y.matrixWorld);const Z=e.update(y),N=y.material;if(Array.isArray(N)){const B=Z.groups;for(let I=0,Y=B.length;I<Y;I++){const H=B[I],V=N[H.materialIndex];if(V&&V.visible){const K=T(y,V,w,S);r.renderBufferDirect(b,null,Z,K,y,H)}}}else if(N.visible){const B=T(y,N,w,S);r.renderBufferDirect(b,null,Z,B,y,null)}}const k=y.children;for(let Z=0,N=k.length;Z<N;Z++)x(k[Z],A,b,w,S)}}function WebGLState(r,e,t){const n=t.isWebGL2;function i(){let P=!1;const le=new Vector4;let G=null;const te=new Vector4(0,0,0,0);return{setMask:function(ce){G!==ce&&!P&&(r.colorMask(ce,ce,ce,ce),G=ce)},setLocked:function(ce){P=ce},setClear:function(ce,we,Ie,Ge,Qe){Qe===!0&&(ce*=Ge,we*=Ge,Ie*=Ge),le.set(ce,we,Ie,Ge),te.equals(le)===!1&&(r.clearColor(ce,we,Ie,Ge),te.copy(le))},reset:function(){P=!1,G=null,te.set(-1,0,0,0)}}}function a(){let P=!1,le=null,G=null,te=null;return{setTest:function(ce){ce?_e(r.DEPTH_TEST):pe(r.DEPTH_TEST)},setMask:function(ce){le!==ce&&!P&&(r.depthMask(ce),le=ce)},setFunc:function(ce){if(G!==ce){switch(ce){case NeverDepth:r.depthFunc(r.NEVER);break;case AlwaysDepth:r.depthFunc(r.ALWAYS);break;case LessDepth:r.depthFunc(r.LESS);break;case LessEqualDepth:r.depthFunc(r.LEQUAL);break;case EqualDepth:r.depthFunc(r.EQUAL);break;case GreaterEqualDepth:r.depthFunc(r.GEQUAL);break;case GreaterDepth:r.depthFunc(r.GREATER);break;case NotEqualDepth:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}G=ce}},setLocked:function(ce){P=ce},setClear:function(ce){te!==ce&&(r.clearDepth(ce),te=ce)},reset:function(){P=!1,le=null,G=null,te=null}}}function s(){let P=!1,le=null,G=null,te=null,ce=null,we=null,Ie=null,Ge=null,Qe=null;return{setTest:function(Ve){P||(Ve?_e(r.STENCIL_TEST):pe(r.STENCIL_TEST))},setMask:function(Ve){le!==Ve&&!P&&(r.stencilMask(Ve),le=Ve)},setFunc:function(Ve,Ze,qe){(G!==Ve||te!==Ze||ce!==qe)&&(r.stencilFunc(Ve,Ze,qe),G=Ve,te=Ze,ce=qe)},setOp:function(Ve,Ze,qe){(we!==Ve||Ie!==Ze||Ge!==qe)&&(r.stencilOp(Ve,Ze,qe),we=Ve,Ie=Ze,Ge=qe)},setLocked:function(Ve){P=Ve},setClear:function(Ve){Qe!==Ve&&(r.clearStencil(Ve),Qe=Ve)},reset:function(){P=!1,le=null,G=null,te=null,ce=null,we=null,Ie=null,Ge=null,Qe=null}}}const o=new i,l=new a,c=new s,u=new WeakMap,h=new WeakMap;let d={},f={},g=new WeakMap,_=[],m=null,p=!1,v=null,T=null,x=null,y=null,A=null,b=null,w=null,S=!1,C=null,k=null,Z=null,N=null,B=null;const I=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,H=0;const V=r.getParameter(r.VERSION);V.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(V)[1]),Y=H>=1):V.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),Y=H>=2);let K=null,j={};const F=r.getParameter(r.SCISSOR_BOX),X=r.getParameter(r.VIEWPORT),oe=new Vector4().fromArray(F),re=new Vector4().fromArray(X);function ee(P,le,G,te){const ce=new Uint8Array(4),we=r.createTexture();r.bindTexture(P,we),r.texParameteri(P,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(P,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ie=0;Ie<G;Ie++)n&&(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)?r.texImage3D(le,0,r.RGBA,1,1,te,0,r.RGBA,r.UNSIGNED_BYTE,ce):r.texImage2D(le+Ie,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ce);return we}const fe={};fe[r.TEXTURE_2D]=ee(r.TEXTURE_2D,r.TEXTURE_2D,1),fe[r.TEXTURE_CUBE_MAP]=ee(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(fe[r.TEXTURE_2D_ARRAY]=ee(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),fe[r.TEXTURE_3D]=ee(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),_e(r.DEPTH_TEST),l.setFunc(LessEqualDepth),ve(!1),Be(CullFaceBack),_e(r.CULL_FACE),ge(NoBlending);function _e(P){d[P]!==!0&&(r.enable(P),d[P]=!0)}function pe(P){d[P]!==!1&&(r.disable(P),d[P]=!1)}function Le(P,le){return f[P]!==le?(r.bindFramebuffer(P,le),f[P]=le,n&&(P===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=le),P===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=le)),!0):!1}function Ue(P,le){let G=_,te=!1;if(P)if(G=g.get(le),G===void 0&&(G=[],g.set(le,G)),P.isWebGLMultipleRenderTargets){const ce=P.texture;if(G.length!==ce.length||G[0]!==r.COLOR_ATTACHMENT0){for(let we=0,Ie=ce.length;we<Ie;we++)G[we]=r.COLOR_ATTACHMENT0+we;G.length=ce.length,te=!0}}else G[0]!==r.COLOR_ATTACHMENT0&&(G[0]=r.COLOR_ATTACHMENT0,te=!0);else G[0]!==r.BACK&&(G[0]=r.BACK,te=!0);te&&(t.isWebGL2?r.drawBuffers(G):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(G))}function Se(P){return m!==P?(r.useProgram(P),m=P,!0):!1}const O={[AddEquation]:r.FUNC_ADD,[SubtractEquation]:r.FUNC_SUBTRACT,[ReverseSubtractEquation]:r.FUNC_REVERSE_SUBTRACT};if(n)O[MinEquation]=r.MIN,O[MaxEquation]=r.MAX;else{const P=e.get("EXT_blend_minmax");P!==null&&(O[MinEquation]=P.MIN_EXT,O[MaxEquation]=P.MAX_EXT)}const Fe={[ZeroFactor]:r.ZERO,[OneFactor]:r.ONE,[SrcColorFactor]:r.SRC_COLOR,[SrcAlphaFactor]:r.SRC_ALPHA,[SrcAlphaSaturateFactor]:r.SRC_ALPHA_SATURATE,[DstColorFactor]:r.DST_COLOR,[DstAlphaFactor]:r.DST_ALPHA,[OneMinusSrcColorFactor]:r.ONE_MINUS_SRC_COLOR,[OneMinusSrcAlphaFactor]:r.ONE_MINUS_SRC_ALPHA,[OneMinusDstColorFactor]:r.ONE_MINUS_DST_COLOR,[OneMinusDstAlphaFactor]:r.ONE_MINUS_DST_ALPHA};function ge(P,le,G,te,ce,we,Ie,Ge){if(P===NoBlending){p===!0&&(pe(r.BLEND),p=!1);return}if(p===!1&&(_e(r.BLEND),p=!0),P!==CustomBlending){if(P!==v||Ge!==S){if((T!==AddEquation||A!==AddEquation)&&(r.blendEquation(r.FUNC_ADD),T=AddEquation,A=AddEquation),Ge)switch(P){case NormalBlending:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case AdditiveBlending:r.blendFunc(r.ONE,r.ONE);break;case SubtractiveBlending:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case MultiplyBlending:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case NormalBlending:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case AdditiveBlending:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case SubtractiveBlending:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case MultiplyBlending:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}x=null,y=null,b=null,w=null,v=P,S=Ge}return}ce=ce||le,we=we||G,Ie=Ie||te,(le!==T||ce!==A)&&(r.blendEquationSeparate(O[le],O[ce]),T=le,A=ce),(G!==x||te!==y||we!==b||Ie!==w)&&(r.blendFuncSeparate(Fe[G],Fe[te],Fe[we],Fe[Ie]),x=G,y=te,b=we,w=Ie),v=P,S=!1}function xe(P,le){P.side===DoubleSide?pe(r.CULL_FACE):_e(r.CULL_FACE);let G=P.side===BackSide;le&&(G=!G),ve(G),P.blending===NormalBlending&&P.transparent===!1?ge(NoBlending):ge(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),o.setMask(P.colorWrite);const te=P.stencilWrite;c.setTest(te),te&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Ee(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?_e(r.SAMPLE_ALPHA_TO_COVERAGE):pe(r.SAMPLE_ALPHA_TO_COVERAGE)}function ve(P){C!==P&&(P?r.frontFace(r.CW):r.frontFace(r.CCW),C=P)}function Be(P){P!==CullFaceNone?(_e(r.CULL_FACE),P!==k&&(P===CullFaceBack?r.cullFace(r.BACK):P===CullFaceFront?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):pe(r.CULL_FACE),k=P}function Ae(P){P!==Z&&(Y&&r.lineWidth(P),Z=P)}function Ee(P,le,G){P?(_e(r.POLYGON_OFFSET_FILL),(N!==le||B!==G)&&(r.polygonOffset(le,G),N=le,B=G)):pe(r.POLYGON_OFFSET_FILL)}function Ne(P){P?_e(r.SCISSOR_TEST):pe(r.SCISSOR_TEST)}function Xe(P){P===void 0&&(P=r.TEXTURE0+I-1),K!==P&&(r.activeTexture(P),K=P)}function $e(P,le,G){G===void 0&&(K===null?G=r.TEXTURE0+I-1:G=K);let te=j[G];te===void 0&&(te={type:void 0,texture:void 0},j[G]=te),(te.type!==P||te.texture!==le)&&(K!==G&&(r.activeTexture(G),K=G),r.bindTexture(P,le||fe[P]),te.type=P,te.texture=le)}function L(){const P=j[K];P!==void 0&&P.type!==void 0&&(r.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function M(){try{r.compressedTexImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function z(){try{r.compressedTexImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ne(){try{r.texSubImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Q(){try{r.texSubImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ie(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function me(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ae(){try{r.texStorage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function W(){try{r.texStorage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function R(){try{r.texImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function J(){try{r.texImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function de(P){oe.equals(P)===!1&&(r.scissor(P.x,P.y,P.z,P.w),oe.copy(P))}function se(P){re.equals(P)===!1&&(r.viewport(P.x,P.y,P.z,P.w),re.copy(P))}function ue(P,le){let G=h.get(le);G===void 0&&(G=new WeakMap,h.set(le,G));let te=G.get(P);te===void 0&&(te=r.getUniformBlockIndex(le,P.name),G.set(P,te))}function Ce(P,le){const te=h.get(le).get(P);u.get(le)!==te&&(r.uniformBlockBinding(le,te,P.__bindingPointIndex),u.set(le,te))}function De(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),d={},K=null,j={},f={},g=new WeakMap,_=[],m=null,p=!1,v=null,T=null,x=null,y=null,A=null,b=null,w=null,S=!1,C=null,k=null,Z=null,N=null,B=null,oe.set(0,0,r.canvas.width,r.canvas.height),re.set(0,0,r.canvas.width,r.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:_e,disable:pe,bindFramebuffer:Le,drawBuffers:Ue,useProgram:Se,setBlending:ge,setMaterial:xe,setFlipSided:ve,setCullFace:Be,setLineWidth:Ae,setPolygonOffset:Ee,setScissorTest:Ne,activeTexture:Xe,bindTexture:$e,unbindTexture:L,compressedTexImage2D:M,compressedTexImage3D:z,texImage2D:R,texImage3D:J,updateUBOMapping:ue,uniformBlockBinding:Ce,texStorage2D:ae,texStorage3D:W,texSubImage2D:ne,texSubImage3D:Q,compressedTexSubImage2D:ie,compressedTexSubImage3D:me,scissor:de,viewport:se,reset:De}}function WebGLTextures(r,e,t,n,i,a,s){const o=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let _;const m=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(L,M){return p?new OffscreenCanvas(L,M):createElementNS("canvas")}function T(L,M,z,ne){let Q=1;if((L.width>ne||L.height>ne)&&(Q=ne/Math.max(L.width,L.height)),Q<1||M===!0)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap){const ie=M?floorPowerOfTwo:Math.floor,me=ie(Q*L.width),ae=ie(Q*L.height);_===void 0&&(_=v(me,ae));const W=z?v(me,ae):_;return W.width=me,W.height=ae,W.getContext("2d").drawImage(L,0,0,me,ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+me+"x"+ae+")."),W}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),L;return L}function x(L){return isPowerOfTwo(L.width)&&isPowerOfTwo(L.height)}function y(L){return o?!1:L.wrapS!==ClampToEdgeWrapping||L.wrapT!==ClampToEdgeWrapping||L.minFilter!==NearestFilter&&L.minFilter!==LinearFilter}function A(L,M){return L.generateMipmaps&&M&&L.minFilter!==NearestFilter&&L.minFilter!==LinearFilter}function b(L){r.generateMipmap(L)}function w(L,M,z,ne,Q=!1){if(o===!1)return M;if(L!==null){if(r[L]!==void 0)return r[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ie=M;return M===r.RED&&(z===r.FLOAT&&(ie=r.R32F),z===r.HALF_FLOAT&&(ie=r.R16F),z===r.UNSIGNED_BYTE&&(ie=r.R8)),M===r.RED_INTEGER&&(z===r.UNSIGNED_BYTE&&(ie=r.R8UI),z===r.UNSIGNED_SHORT&&(ie=r.R16UI),z===r.UNSIGNED_INT&&(ie=r.R32UI),z===r.BYTE&&(ie=r.R8I),z===r.SHORT&&(ie=r.R16I),z===r.INT&&(ie=r.R32I)),M===r.RG&&(z===r.FLOAT&&(ie=r.RG32F),z===r.HALF_FLOAT&&(ie=r.RG16F),z===r.UNSIGNED_BYTE&&(ie=r.RG8)),M===r.RGBA&&(z===r.FLOAT&&(ie=r.RGBA32F),z===r.HALF_FLOAT&&(ie=r.RGBA16F),z===r.UNSIGNED_BYTE&&(ie=ne===SRGBColorSpace&&Q===!1?r.SRGB8_ALPHA8:r.RGBA8),z===r.UNSIGNED_SHORT_4_4_4_4&&(ie=r.RGBA4),z===r.UNSIGNED_SHORT_5_5_5_1&&(ie=r.RGB5_A1)),(ie===r.R16F||ie===r.R32F||ie===r.RG16F||ie===r.RG32F||ie===r.RGBA16F||ie===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function S(L,M,z){return A(L,z)===!0||L.isFramebufferTexture&&L.minFilter!==NearestFilter&&L.minFilter!==LinearFilter?Math.log2(Math.max(M.width,M.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?M.mipmaps.length:1}function C(L){return L===NearestFilter||L===NearestMipmapNearestFilter||L===NearestMipmapLinearFilter?r.NEAREST:r.LINEAR}function k(L){const M=L.target;M.removeEventListener("dispose",k),N(M),M.isVideoTexture&&g.delete(M)}function Z(L){const M=L.target;M.removeEventListener("dispose",Z),I(M)}function N(L){const M=n.get(L);if(M.__webglInit===void 0)return;const z=L.source,ne=m.get(z);if(ne){const Q=ne[M.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&B(L),Object.keys(ne).length===0&&m.delete(z)}n.remove(L)}function B(L){const M=n.get(L);r.deleteTexture(M.__webglTexture);const z=L.source,ne=m.get(z);delete ne[M.__cacheKey],s.memory.textures--}function I(L){const M=L.texture,z=n.get(L),ne=n.get(M);if(ne.__webglTexture!==void 0&&(r.deleteTexture(ne.__webglTexture),s.memory.textures--),L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(z.__webglFramebuffer[Q]))for(let ie=0;ie<z.__webglFramebuffer[Q].length;ie++)r.deleteFramebuffer(z.__webglFramebuffer[Q][ie]);else r.deleteFramebuffer(z.__webglFramebuffer[Q]);z.__webglDepthbuffer&&r.deleteRenderbuffer(z.__webglDepthbuffer[Q])}else{if(Array.isArray(z.__webglFramebuffer))for(let Q=0;Q<z.__webglFramebuffer.length;Q++)r.deleteFramebuffer(z.__webglFramebuffer[Q]);else r.deleteFramebuffer(z.__webglFramebuffer);if(z.__webglDepthbuffer&&r.deleteRenderbuffer(z.__webglDepthbuffer),z.__webglMultisampledFramebuffer&&r.deleteFramebuffer(z.__webglMultisampledFramebuffer),z.__webglColorRenderbuffer)for(let Q=0;Q<z.__webglColorRenderbuffer.length;Q++)z.__webglColorRenderbuffer[Q]&&r.deleteRenderbuffer(z.__webglColorRenderbuffer[Q]);z.__webglDepthRenderbuffer&&r.deleteRenderbuffer(z.__webglDepthRenderbuffer)}if(L.isWebGLMultipleRenderTargets)for(let Q=0,ie=M.length;Q<ie;Q++){const me=n.get(M[Q]);me.__webglTexture&&(r.deleteTexture(me.__webglTexture),s.memory.textures--),n.remove(M[Q])}n.remove(M),n.remove(L)}let Y=0;function H(){Y=0}function V(){const L=Y;return L>=l&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l),Y+=1,L}function K(L){const M=[];return M.push(L.wrapS),M.push(L.wrapT),M.push(L.wrapR||0),M.push(L.magFilter),M.push(L.minFilter),M.push(L.anisotropy),M.push(L.internalFormat),M.push(L.format),M.push(L.type),M.push(L.generateMipmaps),M.push(L.premultiplyAlpha),M.push(L.flipY),M.push(L.unpackAlignment),M.push(L.colorSpace),M.join()}function j(L,M){const z=n.get(L);if(L.isVideoTexture&&Xe(L),L.isRenderTargetTexture===!1&&L.version>0&&z.__version!==L.version){const ne=L.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Le(z,L,M);return}}t.bindTexture(r.TEXTURE_2D,z.__webglTexture,r.TEXTURE0+M)}function F(L,M){const z=n.get(L);if(L.version>0&&z.__version!==L.version){Le(z,L,M);return}t.bindTexture(r.TEXTURE_2D_ARRAY,z.__webglTexture,r.TEXTURE0+M)}function X(L,M){const z=n.get(L);if(L.version>0&&z.__version!==L.version){Le(z,L,M);return}t.bindTexture(r.TEXTURE_3D,z.__webglTexture,r.TEXTURE0+M)}function oe(L,M){const z=n.get(L);if(L.version>0&&z.__version!==L.version){Ue(z,L,M);return}t.bindTexture(r.TEXTURE_CUBE_MAP,z.__webglTexture,r.TEXTURE0+M)}const re={[RepeatWrapping]:r.REPEAT,[ClampToEdgeWrapping]:r.CLAMP_TO_EDGE,[MirroredRepeatWrapping]:r.MIRRORED_REPEAT},ee={[NearestFilter]:r.NEAREST,[NearestMipmapNearestFilter]:r.NEAREST_MIPMAP_NEAREST,[NearestMipmapLinearFilter]:r.NEAREST_MIPMAP_LINEAR,[LinearFilter]:r.LINEAR,[LinearMipmapNearestFilter]:r.LINEAR_MIPMAP_NEAREST,[LinearMipmapLinearFilter]:r.LINEAR_MIPMAP_LINEAR},fe={[NeverCompare]:r.NEVER,[AlwaysCompare]:r.ALWAYS,[LessCompare]:r.LESS,[LessEqualCompare]:r.LEQUAL,[EqualCompare]:r.EQUAL,[GreaterEqualCompare]:r.GEQUAL,[GreaterCompare]:r.GREATER,[NotEqualCompare]:r.NOTEQUAL};function _e(L,M,z){if(z?(r.texParameteri(L,r.TEXTURE_WRAP_S,re[M.wrapS]),r.texParameteri(L,r.TEXTURE_WRAP_T,re[M.wrapT]),(L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY)&&r.texParameteri(L,r.TEXTURE_WRAP_R,re[M.wrapR]),r.texParameteri(L,r.TEXTURE_MAG_FILTER,ee[M.magFilter]),r.texParameteri(L,r.TEXTURE_MIN_FILTER,ee[M.minFilter])):(r.texParameteri(L,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(L,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY)&&r.texParameteri(L,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(M.wrapS!==ClampToEdgeWrapping||M.wrapT!==ClampToEdgeWrapping)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(L,r.TEXTURE_MAG_FILTER,C(M.magFilter)),r.texParameteri(L,r.TEXTURE_MIN_FILTER,C(M.minFilter)),M.minFilter!==NearestFilter&&M.minFilter!==LinearFilter&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(r.texParameteri(L,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(L,r.TEXTURE_COMPARE_FUNC,fe[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ne=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===NearestFilter||M.minFilter!==NearestMipmapLinearFilter&&M.minFilter!==LinearMipmapLinearFilter||M.type===FloatType&&e.has("OES_texture_float_linear")===!1||o===!1&&M.type===HalfFloatType&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||n.get(M).__currentAnisotropy)&&(r.texParameterf(L,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy)}}function pe(L,M){let z=!1;L.__webglInit===void 0&&(L.__webglInit=!0,M.addEventListener("dispose",k));const ne=M.source;let Q=m.get(ne);Q===void 0&&(Q={},m.set(ne,Q));const ie=K(M);if(ie!==L.__cacheKey){Q[ie]===void 0&&(Q[ie]={texture:r.createTexture(),usedTimes:0},s.memory.textures++,z=!0),Q[ie].usedTimes++;const me=Q[L.__cacheKey];me!==void 0&&(Q[L.__cacheKey].usedTimes--,me.usedTimes===0&&B(M)),L.__cacheKey=ie,L.__webglTexture=Q[ie].texture}return z}function Le(L,M,z){let ne=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ne=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ne=r.TEXTURE_3D);const Q=pe(L,M),ie=M.source;t.bindTexture(ne,L.__webglTexture,r.TEXTURE0+z);const me=n.get(ie);if(ie.version!==me.__version||Q===!0){t.activeTexture(r.TEXTURE0+z),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.NONE);const ae=y(M)&&x(M.image)===!1;let W=T(M.image,ae,!1,u);W=$e(M,W);const R=x(W)||o,J=a.convert(M.format,M.colorSpace);let de=a.convert(M.type),se=w(M.internalFormat,J,de,M.colorSpace);_e(ne,M,R);let ue;const Ce=M.mipmaps,De=o&&M.isVideoTexture!==!0,P=me.__version===void 0||Q===!0,le=S(M,W,R);if(M.isDepthTexture)se=r.DEPTH_COMPONENT,o?M.type===FloatType?se=r.DEPTH_COMPONENT32F:M.type===UnsignedIntType?se=r.DEPTH_COMPONENT24:M.type===UnsignedInt248Type?se=r.DEPTH24_STENCIL8:se=r.DEPTH_COMPONENT16:M.type===FloatType&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===DepthFormat&&se===r.DEPTH_COMPONENT&&M.type!==UnsignedShortType&&M.type!==UnsignedIntType&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=UnsignedIntType,de=a.convert(M.type)),M.format===DepthStencilFormat&&se===r.DEPTH_COMPONENT&&(se=r.DEPTH_STENCIL,M.type!==UnsignedInt248Type&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=UnsignedInt248Type,de=a.convert(M.type))),P&&(De?t.texStorage2D(r.TEXTURE_2D,1,se,W.width,W.height):t.texImage2D(r.TEXTURE_2D,0,se,W.width,W.height,0,J,de,null));else if(M.isDataTexture)if(Ce.length>0&&R){De&&P&&t.texStorage2D(r.TEXTURE_2D,le,se,Ce[0].width,Ce[0].height);for(let G=0,te=Ce.length;G<te;G++)ue=Ce[G],De?t.texSubImage2D(r.TEXTURE_2D,G,0,0,ue.width,ue.height,J,de,ue.data):t.texImage2D(r.TEXTURE_2D,G,se,ue.width,ue.height,0,J,de,ue.data);M.generateMipmaps=!1}else De?(P&&t.texStorage2D(r.TEXTURE_2D,le,se,W.width,W.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,W.width,W.height,J,de,W.data)):t.texImage2D(r.TEXTURE_2D,0,se,W.width,W.height,0,J,de,W.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){De&&P&&t.texStorage3D(r.TEXTURE_2D_ARRAY,le,se,Ce[0].width,Ce[0].height,W.depth);for(let G=0,te=Ce.length;G<te;G++)ue=Ce[G],M.format!==RGBAFormat?J!==null?De?t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,G,0,0,0,ue.width,ue.height,W.depth,J,ue.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,G,se,ue.width,ue.height,W.depth,0,ue.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?t.texSubImage3D(r.TEXTURE_2D_ARRAY,G,0,0,0,ue.width,ue.height,W.depth,J,de,ue.data):t.texImage3D(r.TEXTURE_2D_ARRAY,G,se,ue.width,ue.height,W.depth,0,J,de,ue.data)}else{De&&P&&t.texStorage2D(r.TEXTURE_2D,le,se,Ce[0].width,Ce[0].height);for(let G=0,te=Ce.length;G<te;G++)ue=Ce[G],M.format!==RGBAFormat?J!==null?De?t.compressedTexSubImage2D(r.TEXTURE_2D,G,0,0,ue.width,ue.height,J,ue.data):t.compressedTexImage2D(r.TEXTURE_2D,G,se,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?t.texSubImage2D(r.TEXTURE_2D,G,0,0,ue.width,ue.height,J,de,ue.data):t.texImage2D(r.TEXTURE_2D,G,se,ue.width,ue.height,0,J,de,ue.data)}else if(M.isDataArrayTexture)De?(P&&t.texStorage3D(r.TEXTURE_2D_ARRAY,le,se,W.width,W.height,W.depth),t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,W.width,W.height,W.depth,J,de,W.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,se,W.width,W.height,W.depth,0,J,de,W.data);else if(M.isData3DTexture)De?(P&&t.texStorage3D(r.TEXTURE_3D,le,se,W.width,W.height,W.depth),t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,W.width,W.height,W.depth,J,de,W.data)):t.texImage3D(r.TEXTURE_3D,0,se,W.width,W.height,W.depth,0,J,de,W.data);else if(M.isFramebufferTexture){if(P)if(De)t.texStorage2D(r.TEXTURE_2D,le,se,W.width,W.height);else{let G=W.width,te=W.height;for(let ce=0;ce<le;ce++)t.texImage2D(r.TEXTURE_2D,ce,se,G,te,0,J,de,null),G>>=1,te>>=1}}else if(Ce.length>0&&R){De&&P&&t.texStorage2D(r.TEXTURE_2D,le,se,Ce[0].width,Ce[0].height);for(let G=0,te=Ce.length;G<te;G++)ue=Ce[G],De?t.texSubImage2D(r.TEXTURE_2D,G,0,0,J,de,ue):t.texImage2D(r.TEXTURE_2D,G,se,J,de,ue);M.generateMipmaps=!1}else De?(P&&t.texStorage2D(r.TEXTURE_2D,le,se,W.width,W.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,J,de,W)):t.texImage2D(r.TEXTURE_2D,0,se,J,de,W);A(M,R)&&b(ne),me.__version=ie.version,M.onUpdate&&M.onUpdate(M)}L.__version=M.version}function Ue(L,M,z){if(M.image.length!==6)return;const ne=pe(L,M),Q=M.source;t.bindTexture(r.TEXTURE_CUBE_MAP,L.__webglTexture,r.TEXTURE0+z);const ie=n.get(Q);if(Q.version!==ie.__version||ne===!0){t.activeTexture(r.TEXTURE0+z),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.NONE);const me=M.isCompressedTexture||M.image[0].isCompressedTexture,ae=M.image[0]&&M.image[0].isDataTexture,W=[];for(let G=0;G<6;G++)!me&&!ae?W[G]=T(M.image[G],!1,!0,c):W[G]=ae?M.image[G].image:M.image[G],W[G]=$e(M,W[G]);const R=W[0],J=x(R)||o,de=a.convert(M.format,M.colorSpace),se=a.convert(M.type),ue=w(M.internalFormat,de,se,M.colorSpace),Ce=o&&M.isVideoTexture!==!0,De=ie.__version===void 0||ne===!0;let P=S(M,R,J);_e(r.TEXTURE_CUBE_MAP,M,J);let le;if(me){Ce&&De&&t.texStorage2D(r.TEXTURE_CUBE_MAP,P,ue,R.width,R.height);for(let G=0;G<6;G++){le=W[G].mipmaps;for(let te=0;te<le.length;te++){const ce=le[te];M.format!==RGBAFormat?de!==null?Ce?t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+G,te,0,0,ce.width,ce.height,de,ce.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+G,te,ue,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ce?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+G,te,0,0,ce.width,ce.height,de,se,ce.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+G,te,ue,ce.width,ce.height,0,de,se,ce.data)}}}else{le=M.mipmaps,Ce&&De&&(le.length>0&&P++,t.texStorage2D(r.TEXTURE_CUBE_MAP,P,ue,W[0].width,W[0].height));for(let G=0;G<6;G++)if(ae){Ce?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,0,0,W[G].width,W[G].height,de,se,W[G].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,ue,W[G].width,W[G].height,0,de,se,W[G].data);for(let te=0;te<le.length;te++){const we=le[te].image[G].image;Ce?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+G,te+1,0,0,we.width,we.height,de,se,we.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+G,te+1,ue,we.width,we.height,0,de,se,we.data)}}else{Ce?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,0,0,de,se,W[G]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,ue,de,se,W[G]);for(let te=0;te<le.length;te++){const ce=le[te];Ce?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+G,te+1,0,0,de,se,ce.image[G]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+G,te+1,ue,de,se,ce.image[G])}}}A(M,J)&&b(r.TEXTURE_CUBE_MAP),ie.__version=Q.version,M.onUpdate&&M.onUpdate(M)}L.__version=M.version}function Se(L,M,z,ne,Q,ie){const me=a.convert(z.format,z.colorSpace),ae=a.convert(z.type),W=w(z.internalFormat,me,ae,z.colorSpace);if(!n.get(M).__hasExternalTextures){const J=Math.max(1,M.width>>ie),de=Math.max(1,M.height>>ie);Q===r.TEXTURE_3D||Q===r.TEXTURE_2D_ARRAY?t.texImage3D(Q,ie,W,J,de,M.depth,0,me,ae,null):t.texImage2D(Q,ie,W,J,de,0,me,ae,null)}t.bindFramebuffer(r.FRAMEBUFFER,L),Ne(M)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ne,Q,n.get(z).__webglTexture,0,Ee(M)):(Q===r.TEXTURE_2D||Q>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ne,Q,n.get(z).__webglTexture,ie),t.bindFramebuffer(r.FRAMEBUFFER,null)}function O(L,M,z){if(r.bindRenderbuffer(r.RENDERBUFFER,L),M.depthBuffer&&!M.stencilBuffer){let ne=r.DEPTH_COMPONENT16;if(z||Ne(M)){const Q=M.depthTexture;Q&&Q.isDepthTexture&&(Q.type===FloatType?ne=r.DEPTH_COMPONENT32F:Q.type===UnsignedIntType&&(ne=r.DEPTH_COMPONENT24));const ie=Ee(M);Ne(M)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ie,ne,M.width,M.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,ie,ne,M.width,M.height)}else r.renderbufferStorage(r.RENDERBUFFER,ne,M.width,M.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,L)}else if(M.depthBuffer&&M.stencilBuffer){const ne=Ee(M);z&&Ne(M)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ne,r.DEPTH24_STENCIL8,M.width,M.height):Ne(M)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ne,r.DEPTH24_STENCIL8,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,L)}else{const ne=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let Q=0;Q<ne.length;Q++){const ie=ne[Q],me=a.convert(ie.format,ie.colorSpace),ae=a.convert(ie.type),W=w(ie.internalFormat,me,ae,ie.colorSpace),R=Ee(M);z&&Ne(M)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,R,W,M.width,M.height):Ne(M)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,R,W,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,W,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Fe(L,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,L),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),j(M.depthTexture,0);const ne=n.get(M.depthTexture).__webglTexture,Q=Ee(M);if(M.depthTexture.format===DepthFormat)Ne(M)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ne,0,Q):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ne,0);else if(M.depthTexture.format===DepthStencilFormat)Ne(M)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ne,0,Q):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function ge(L){const M=n.get(L),z=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!M.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");Fe(M.__webglFramebuffer,L)}else if(z){M.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[ne]),M.__webglDepthbuffer[ne]=r.createRenderbuffer(),O(M.__webglDepthbuffer[ne],L,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=r.createRenderbuffer(),O(M.__webglDepthbuffer,L,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function xe(L,M,z){const ne=n.get(L);M!==void 0&&Se(ne.__webglFramebuffer,L,L.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),z!==void 0&&ge(L)}function ve(L){const M=L.texture,z=n.get(L),ne=n.get(M);L.addEventListener("dispose",Z),L.isWebGLMultipleRenderTargets!==!0&&(ne.__webglTexture===void 0&&(ne.__webglTexture=r.createTexture()),ne.__version=M.version,s.memory.textures++);const Q=L.isWebGLCubeRenderTarget===!0,ie=L.isWebGLMultipleRenderTargets===!0,me=x(L)||o;if(Q){z.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(o&&M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer[ae]=[];for(let W=0;W<M.mipmaps.length;W++)z.__webglFramebuffer[ae][W]=r.createFramebuffer()}else z.__webglFramebuffer[ae]=r.createFramebuffer()}else{if(o&&M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer=[];for(let ae=0;ae<M.mipmaps.length;ae++)z.__webglFramebuffer[ae]=r.createFramebuffer()}else z.__webglFramebuffer=r.createFramebuffer();if(ie)if(i.drawBuffers){const ae=L.texture;for(let W=0,R=ae.length;W<R;W++){const J=n.get(ae[W]);J.__webglTexture===void 0&&(J.__webglTexture=r.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&L.samples>0&&Ne(L)===!1){const ae=ie?M:[M];z.__webglMultisampledFramebuffer=r.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let W=0;W<ae.length;W++){const R=ae[W];z.__webglColorRenderbuffer[W]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,z.__webglColorRenderbuffer[W]);const J=a.convert(R.format,R.colorSpace),de=a.convert(R.type),se=w(R.internalFormat,J,de,R.colorSpace,L.isXRRenderTarget===!0),ue=Ee(L);r.renderbufferStorageMultisample(r.RENDERBUFFER,ue,se,L.width,L.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+W,r.RENDERBUFFER,z.__webglColorRenderbuffer[W])}r.bindRenderbuffer(r.RENDERBUFFER,null),L.depthBuffer&&(z.__webglDepthRenderbuffer=r.createRenderbuffer(),O(z.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Q){t.bindTexture(r.TEXTURE_CUBE_MAP,ne.__webglTexture),_e(r.TEXTURE_CUBE_MAP,M,me);for(let ae=0;ae<6;ae++)if(o&&M.mipmaps&&M.mipmaps.length>0)for(let W=0;W<M.mipmaps.length;W++)Se(z.__webglFramebuffer[ae][W],L,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,W);else Se(z.__webglFramebuffer[ae],L,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);A(M,me)&&b(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ie){const ae=L.texture;for(let W=0,R=ae.length;W<R;W++){const J=ae[W],de=n.get(J);t.bindTexture(r.TEXTURE_2D,de.__webglTexture),_e(r.TEXTURE_2D,J,me),Se(z.__webglFramebuffer,L,J,r.COLOR_ATTACHMENT0+W,r.TEXTURE_2D,0),A(J,me)&&b(r.TEXTURE_2D)}t.unbindTexture()}else{let ae=r.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(o?ae=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ae,ne.__webglTexture),_e(ae,M,me),o&&M.mipmaps&&M.mipmaps.length>0)for(let W=0;W<M.mipmaps.length;W++)Se(z.__webglFramebuffer[W],L,M,r.COLOR_ATTACHMENT0,ae,W);else Se(z.__webglFramebuffer,L,M,r.COLOR_ATTACHMENT0,ae,0);A(M,me)&&b(ae),t.unbindTexture()}L.depthBuffer&&ge(L)}function Be(L){const M=x(L)||o,z=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let ne=0,Q=z.length;ne<Q;ne++){const ie=z[ne];if(A(ie,M)){const me=L.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,ae=n.get(ie).__webglTexture;t.bindTexture(me,ae),b(me),t.unbindTexture()}}}function Ae(L){if(o&&L.samples>0&&Ne(L)===!1){const M=L.isWebGLMultipleRenderTargets?L.texture:[L.texture],z=L.width,ne=L.height;let Q=r.COLOR_BUFFER_BIT;const ie=[],me=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ae=n.get(L),W=L.isWebGLMultipleRenderTargets===!0;if(W)for(let R=0;R<M.length;R++)t.bindFramebuffer(r.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+R,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ae.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+R,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let R=0;R<M.length;R++){ie.push(r.COLOR_ATTACHMENT0+R),L.depthBuffer&&ie.push(me);const J=ae.__ignoreDepthValues!==void 0?ae.__ignoreDepthValues:!1;if(J===!1&&(L.depthBuffer&&(Q|=r.DEPTH_BUFFER_BIT),L.stencilBuffer&&(Q|=r.STENCIL_BUFFER_BIT)),W&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ae.__webglColorRenderbuffer[R]),J===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[me]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[me])),W){const de=n.get(M[R]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,de,0)}r.blitFramebuffer(0,0,z,ne,0,0,z,ne,Q,r.NEAREST),f&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ie)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),W)for(let R=0;R<M.length;R++){t.bindFramebuffer(r.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+R,r.RENDERBUFFER,ae.__webglColorRenderbuffer[R]);const J=n.get(M[R]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ae.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+R,r.TEXTURE_2D,J,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}}function Ee(L){return Math.min(h,L.samples)}function Ne(L){const M=n.get(L);return o&&L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Xe(L){const M=s.render.frame;g.get(L)!==M&&(g.set(L,M),L.update())}function $e(L,M){const z=L.colorSpace,ne=L.format,Q=L.type;return L.isCompressedTexture===!0||L.format===_SRGBAFormat||z!==LinearSRGBColorSpace&&z!==NoColorSpace&&(z===SRGBColorSpace?o===!1?e.has("EXT_sRGB")===!0&&ne===RGBAFormat?(L.format=_SRGBAFormat,L.minFilter=LinearFilter,L.generateMipmaps=!1):M=ImageUtils.sRGBToLinear(M):(ne!==RGBAFormat||Q!==UnsignedByteType)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),M}this.allocateTextureUnit=V,this.resetTextureUnits=H,this.setTexture2D=j,this.setTexture2DArray=F,this.setTexture3D=X,this.setTextureCube=oe,this.rebindTextures=xe,this.setupRenderTarget=ve,this.updateRenderTargetMipmap=Be,this.updateMultisampleRenderTarget=Ae,this.setupDepthRenderbuffer=ge,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=Ne}function WebGLUtils(r,e,t){const n=t.isWebGL2;function i(a,s=NoColorSpace){let o;if(a===UnsignedByteType)return r.UNSIGNED_BYTE;if(a===UnsignedShort4444Type)return r.UNSIGNED_SHORT_4_4_4_4;if(a===UnsignedShort5551Type)return r.UNSIGNED_SHORT_5_5_5_1;if(a===ByteType)return r.BYTE;if(a===ShortType)return r.SHORT;if(a===UnsignedShortType)return r.UNSIGNED_SHORT;if(a===IntType)return r.INT;if(a===UnsignedIntType)return r.UNSIGNED_INT;if(a===FloatType)return r.FLOAT;if(a===HalfFloatType)return n?r.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(a===AlphaFormat)return r.ALPHA;if(a===RGBAFormat)return r.RGBA;if(a===LuminanceFormat)return r.LUMINANCE;if(a===LuminanceAlphaFormat)return r.LUMINANCE_ALPHA;if(a===DepthFormat)return r.DEPTH_COMPONENT;if(a===DepthStencilFormat)return r.DEPTH_STENCIL;if(a===_SRGBAFormat)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(a===RedFormat)return r.RED;if(a===RedIntegerFormat)return r.RED_INTEGER;if(a===RGFormat)return r.RG;if(a===RGIntegerFormat)return r.RG_INTEGER;if(a===RGBAIntegerFormat)return r.RGBA_INTEGER;if(a===RGB_S3TC_DXT1_Format||a===RGBA_S3TC_DXT1_Format||a===RGBA_S3TC_DXT3_Format||a===RGBA_S3TC_DXT5_Format)if(s===SRGBColorSpace)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(a===RGB_S3TC_DXT1_Format)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===RGBA_S3TC_DXT1_Format)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===RGBA_S3TC_DXT3_Format)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===RGBA_S3TC_DXT5_Format)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(a===RGB_S3TC_DXT1_Format)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===RGBA_S3TC_DXT1_Format)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===RGBA_S3TC_DXT3_Format)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===RGBA_S3TC_DXT5_Format)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===RGB_PVRTC_4BPPV1_Format||a===RGB_PVRTC_2BPPV1_Format||a===RGBA_PVRTC_4BPPV1_Format||a===RGBA_PVRTC_2BPPV1_Format)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(a===RGB_PVRTC_4BPPV1_Format)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===RGB_PVRTC_2BPPV1_Format)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===RGBA_PVRTC_4BPPV1_Format)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===RGBA_PVRTC_2BPPV1_Format)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===RGB_ETC1_Format)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===RGB_ETC2_Format||a===RGBA_ETC2_EAC_Format)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(a===RGB_ETC2_Format)return s===SRGBColorSpace?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(a===RGBA_ETC2_EAC_Format)return s===SRGBColorSpace?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===RGBA_ASTC_4x4_Format||a===RGBA_ASTC_5x4_Format||a===RGBA_ASTC_5x5_Format||a===RGBA_ASTC_6x5_Format||a===RGBA_ASTC_6x6_Format||a===RGBA_ASTC_8x5_Format||a===RGBA_ASTC_8x6_Format||a===RGBA_ASTC_8x8_Format||a===RGBA_ASTC_10x5_Format||a===RGBA_ASTC_10x6_Format||a===RGBA_ASTC_10x8_Format||a===RGBA_ASTC_10x10_Format||a===RGBA_ASTC_12x10_Format||a===RGBA_ASTC_12x12_Format)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(a===RGBA_ASTC_4x4_Format)return s===SRGBColorSpace?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===RGBA_ASTC_5x4_Format)return s===SRGBColorSpace?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===RGBA_ASTC_5x5_Format)return s===SRGBColorSpace?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===RGBA_ASTC_6x5_Format)return s===SRGBColorSpace?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===RGBA_ASTC_6x6_Format)return s===SRGBColorSpace?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===RGBA_ASTC_8x5_Format)return s===SRGBColorSpace?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===RGBA_ASTC_8x6_Format)return s===SRGBColorSpace?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===RGBA_ASTC_8x8_Format)return s===SRGBColorSpace?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===RGBA_ASTC_10x5_Format)return s===SRGBColorSpace?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===RGBA_ASTC_10x6_Format)return s===SRGBColorSpace?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===RGBA_ASTC_10x8_Format)return s===SRGBColorSpace?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===RGBA_ASTC_10x10_Format)return s===SRGBColorSpace?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===RGBA_ASTC_12x10_Format)return s===SRGBColorSpace?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===RGBA_ASTC_12x12_Format)return s===SRGBColorSpace?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===RGBA_BPTC_Format)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(a===RGBA_BPTC_Format)return s===SRGBColorSpace?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(a===RED_RGTC1_Format||a===SIGNED_RED_RGTC1_Format||a===RED_GREEN_RGTC2_Format||a===SIGNED_RED_GREEN_RGTC2_Format)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(a===RGBA_BPTC_Format)return o.COMPRESSED_RED_RGTC1_EXT;if(a===SIGNED_RED_RGTC1_Format)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===RED_GREEN_RGTC2_Format)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===SIGNED_RED_GREEN_RGTC2_Format)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===UnsignedInt248Type?n?r.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):r[a]!==void 0?r[a]:null}return{convert:i}}class ArrayCamera extends PerspectiveCamera{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Group extends Object3D{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _moveEvent={type:"move"};class WebXRController{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Group,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Group,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Vector3,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Vector3),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Group,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Vector3,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Vector3),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,a=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&a!==null&&(i=a),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(_moveEvent)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Group;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class DepthTexture extends Texture{constructor(e,t,n,i,a,s,o,l,c,u){if(u=u!==void 0?u:DepthFormat,u!==DepthFormat&&u!==DepthStencilFormat)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===DepthFormat&&(n=UnsignedIntType),n===void 0&&u===DepthStencilFormat&&(n=UnsignedInt248Type),super(null,i,a,s,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:NearestFilter,this.minFilter=l!==void 0?l:NearestFilter,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class WebXRManager extends EventDispatcher{constructor(e,t){super();const n=this;let i=null,a=1,s=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,g=null;const _=t.getContextAttributes();let m=null,p=null;const v=[],T=[],x=new PerspectiveCamera;x.layers.enable(1),x.viewport=new Vector4;const y=new PerspectiveCamera;y.layers.enable(2),y.viewport=new Vector4;const A=[x,y],b=new ArrayCamera;b.layers.enable(1),b.layers.enable(2);let w=null,S=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let X=v[F];return X===void 0&&(X=new WebXRController,v[F]=X),X.getTargetRaySpace()},this.getControllerGrip=function(F){let X=v[F];return X===void 0&&(X=new WebXRController,v[F]=X),X.getGripSpace()},this.getHand=function(F){let X=v[F];return X===void 0&&(X=new WebXRController,v[F]=X),X.getHandSpace()};function C(F){const X=T.indexOf(F.inputSource);if(X===-1)return;const oe=v[X];oe!==void 0&&(oe.update(F.inputSource,F.frame,c||s),oe.dispatchEvent({type:F.type,data:F.inputSource}))}function k(){i.removeEventListener("select",C),i.removeEventListener("selectstart",C),i.removeEventListener("selectend",C),i.removeEventListener("squeeze",C),i.removeEventListener("squeezestart",C),i.removeEventListener("squeezeend",C),i.removeEventListener("end",k),i.removeEventListener("inputsourceschange",Z);for(let F=0;F<v.length;F++){const X=T[F];X!==null&&(T[F]=null,v[F].disconnect(X))}w=null,S=null,e.setRenderTarget(m),f=null,d=null,h=null,i=null,p=null,j.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){a=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){o=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(F){c=F},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(F){if(i=F,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",C),i.addEventListener("selectstart",C),i.addEventListener("selectend",C),i.addEventListener("squeeze",C),i.addEventListener("squeezestart",C),i.addEventListener("squeezeend",C),i.addEventListener("end",k),i.addEventListener("inputsourceschange",Z),_.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const X={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:a};f=new XRWebGLLayer(i,t,X),i.updateRenderState({baseLayer:f}),p=new WebGLRenderTarget(f.framebufferWidth,f.framebufferHeight,{format:RGBAFormat,type:UnsignedByteType,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let X=null,oe=null,re=null;_.depth&&(re=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,X=_.stencil?DepthStencilFormat:DepthFormat,oe=_.stencil?UnsignedInt248Type:UnsignedIntType);const ee={colorFormat:t.RGBA8,depthFormat:re,scaleFactor:a};h=new XRWebGLBinding(i,t),d=h.createProjectionLayer(ee),i.updateRenderState({layers:[d]}),p=new WebGLRenderTarget(d.textureWidth,d.textureHeight,{format:RGBAFormat,type:UnsignedByteType,depthTexture:new DepthTexture(d.textureWidth,d.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,X),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const fe=e.properties.get(p);fe.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await i.requestReferenceSpace(o),j.setContext(i),j.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function Z(F){for(let X=0;X<F.removed.length;X++){const oe=F.removed[X],re=T.indexOf(oe);re>=0&&(T[re]=null,v[re].disconnect(oe))}for(let X=0;X<F.added.length;X++){const oe=F.added[X];let re=T.indexOf(oe);if(re===-1){for(let fe=0;fe<v.length;fe++)if(fe>=T.length){T.push(oe),re=fe;break}else if(T[fe]===null){T[fe]=oe,re=fe;break}if(re===-1)break}const ee=v[re];ee&&ee.connect(oe)}}const N=new Vector3,B=new Vector3;function I(F,X,oe){N.setFromMatrixPosition(X.matrixWorld),B.setFromMatrixPosition(oe.matrixWorld);const re=N.distanceTo(B),ee=X.projectionMatrix.elements,fe=oe.projectionMatrix.elements,_e=ee[14]/(ee[10]-1),pe=ee[14]/(ee[10]+1),Le=(ee[9]+1)/ee[5],Ue=(ee[9]-1)/ee[5],Se=(ee[8]-1)/ee[0],O=(fe[8]+1)/fe[0],Fe=_e*Se,ge=_e*O,xe=re/(-Se+O),ve=xe*-Se;X.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(ve),F.translateZ(xe),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert();const Be=_e+xe,Ae=pe+xe,Ee=Fe-ve,Ne=ge+(re-ve),Xe=Le*pe/Ae*Be,$e=Ue*pe/Ae*Be;F.projectionMatrix.makePerspective(Ee,Ne,Xe,$e,Be,Ae),F.projectionMatrixInverse.copy(F.projectionMatrix).invert()}function Y(F,X){X===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(X.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(i===null)return;b.near=y.near=x.near=F.near,b.far=y.far=x.far=F.far,(w!==b.near||S!==b.far)&&(i.updateRenderState({depthNear:b.near,depthFar:b.far}),w=b.near,S=b.far);const X=F.parent,oe=b.cameras;Y(b,X);for(let re=0;re<oe.length;re++)Y(oe[re],X);oe.length===2?I(b,x,y):b.projectionMatrix.copy(x.projectionMatrix),H(F,b,X)};function H(F,X,oe){oe===null?F.matrix.copy(X.matrixWorld):(F.matrix.copy(oe.matrixWorld),F.matrix.invert(),F.matrix.multiply(X.matrixWorld)),F.matrix.decompose(F.position,F.quaternion,F.scale),F.updateMatrixWorld(!0);const re=F.children;for(let ee=0,fe=re.length;ee<fe;ee++)re[ee].updateMatrixWorld(!0);F.projectionMatrix.copy(X.projectionMatrix),F.projectionMatrixInverse.copy(X.projectionMatrixInverse),F.isPerspectiveCamera&&(F.fov=RAD2DEG*2*Math.atan(1/F.projectionMatrix.elements[5]),F.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(F){l=F,d!==null&&(d.fixedFoveation=F),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=F)};let V=null;function K(F,X){if(u=X.getViewerPose(c||s),g=X,u!==null){const oe=u.views;f!==null&&(e.setRenderTargetFramebuffer(p,f.framebuffer),e.setRenderTarget(p));let re=!1;oe.length!==b.cameras.length&&(b.cameras.length=0,re=!0);for(let ee=0;ee<oe.length;ee++){const fe=oe[ee];let _e=null;if(f!==null)_e=f.getViewport(fe);else{const Le=h.getViewSubImage(d,fe);_e=Le.viewport,ee===0&&(e.setRenderTargetTextures(p,Le.colorTexture,d.ignoreDepthValues?void 0:Le.depthStencilTexture),e.setRenderTarget(p))}let pe=A[ee];pe===void 0&&(pe=new PerspectiveCamera,pe.layers.enable(ee),pe.viewport=new Vector4,A[ee]=pe),pe.matrix.fromArray(fe.transform.matrix),pe.matrix.decompose(pe.position,pe.quaternion,pe.scale),pe.projectionMatrix.fromArray(fe.projectionMatrix),pe.projectionMatrixInverse.copy(pe.projectionMatrix).invert(),pe.viewport.set(_e.x,_e.y,_e.width,_e.height),ee===0&&(b.matrix.copy(pe.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),re===!0&&b.cameras.push(pe)}}for(let oe=0;oe<v.length;oe++){const re=T[oe],ee=v[oe];re!==null&&ee!==void 0&&ee.update(re,X,c||s)}V&&V(F,X),X.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:X}),g=null}const j=new WebGLAnimation;j.setAnimationLoop(K),this.setAnimationLoop=function(F){V=F},this.dispose=function(){}}}function WebGLMaterials(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,getUnlitUniformColorSpace(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,v,T,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?a(m,p):p.isMeshToonMaterial?(a(m,p),h(m,p)):p.isMeshPhongMaterial?(a(m,p),u(m,p)):p.isMeshStandardMaterial?(a(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(a(m,p),g(m,p)):p.isMeshDepthMaterial?a(m,p):p.isMeshDistanceMaterial?(a(m,p),_(m,p)):p.isMeshNormalMaterial?a(m,p):p.isLineBasicMaterial?(s(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,v,T):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function a(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===BackSide&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===BackSide&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=e.get(p).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const T=r._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*T,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function s(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,v,T){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=T*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===BackSide&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const v=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function WebGLUniformsGroups(r,e,t,n){let i={},a={},s=[];const o=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,T){const x=T.program;n.uniformBlockBinding(v,x)}function c(v,T){let x=i[v.id];x===void 0&&(g(v),x=u(v),i[v.id]=x,v.addEventListener("dispose",m));const y=T.program;n.updateUBOMapping(v,y);const A=e.render.frame;a[v.id]!==A&&(d(v),a[v.id]=A)}function u(v){const T=h();v.__bindingPointIndex=T;const x=r.createBuffer(),y=v.__size,A=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,x),r.bufferData(r.UNIFORM_BUFFER,y,A),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,T,x),x}function h(){for(let v=0;v<o;v++)if(s.indexOf(v)===-1)return s.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const T=i[v.id],x=v.uniforms,y=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,T);for(let A=0,b=x.length;A<b;A++){const w=x[A];if(f(w,A,y)===!0){const S=w.__offset,C=Array.isArray(w.value)?w.value:[w.value];let k=0;for(let Z=0;Z<C.length;Z++){const N=C[Z],B=_(N);typeof N=="number"?(w.__data[0]=N,r.bufferSubData(r.UNIFORM_BUFFER,S+k,w.__data)):N.isMatrix3?(w.__data[0]=N.elements[0],w.__data[1]=N.elements[1],w.__data[2]=N.elements[2],w.__data[3]=N.elements[0],w.__data[4]=N.elements[3],w.__data[5]=N.elements[4],w.__data[6]=N.elements[5],w.__data[7]=N.elements[0],w.__data[8]=N.elements[6],w.__data[9]=N.elements[7],w.__data[10]=N.elements[8],w.__data[11]=N.elements[0]):(N.toArray(w.__data,k),k+=B.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,S,w.__data)}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(v,T,x){const y=v.value;if(x[T]===void 0){if(typeof y=="number")x[T]=y;else{const A=Array.isArray(y)?y:[y],b=[];for(let w=0;w<A.length;w++)b.push(A[w].clone());x[T]=b}return!0}else if(typeof y=="number"){if(x[T]!==y)return x[T]=y,!0}else{const A=Array.isArray(x[T])?x[T]:[x[T]],b=Array.isArray(y)?y:[y];for(let w=0;w<A.length;w++){const S=A[w];if(S.equals(b[w])===!1)return S.copy(b[w]),!0}}return!1}function g(v){const T=v.uniforms;let x=0;const y=16;let A=0;for(let b=0,w=T.length;b<w;b++){const S=T[b],C={boundary:0,storage:0},k=Array.isArray(S.value)?S.value:[S.value];for(let Z=0,N=k.length;Z<N;Z++){const B=k[Z],I=_(B);C.boundary+=I.boundary,C.storage+=I.storage}if(S.__data=new Float32Array(C.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=x,b>0){A=x%y;const Z=y-A;A!==0&&Z-C.boundary<0&&(x+=y-A,S.__offset=x)}x+=C.storage}return A=x%y,A>0&&(x+=y-A),v.__size=x,v.__cache={},this}function _(v){const T={boundary:0,storage:0};return typeof v=="number"?(T.boundary=4,T.storage=4):v.isVector2?(T.boundary=8,T.storage=8):v.isVector3||v.isColor?(T.boundary=16,T.storage=12):v.isVector4?(T.boundary=16,T.storage=16):v.isMatrix3?(T.boundary=48,T.storage=48):v.isMatrix4?(T.boundary=64,T.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),T}function m(v){const T=v.target;T.removeEventListener("dispose",m);const x=s.indexOf(T.__bindingPointIndex);s.splice(x,1),r.deleteBuffer(i[T.id]),delete i[T.id],delete a[T.id]}function p(){for(const v in i)r.deleteBuffer(i[v]);s=[],i={},a={}}return{bind:l,update:c,dispose:p}}function createCanvasElement(){const r=createElementNS("canvas");return r.style.display="block",r}class WebGLRenderer{constructor(e={}){const{canvas:t=createCanvasElement(),context:n=null,depth:i=!0,stencil:a=!0,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=s;const f=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const p=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=SRGBColorSpace,this._useLegacyLights=!1,this.toneMapping=NoToneMapping,this.toneMappingExposure=1;const T=this;let x=!1,y=0,A=0,b=null,w=-1,S=null;const C=new Vector4,k=new Vector4;let Z=null;const N=new Color$1(0);let B=0,I=t.width,Y=t.height,H=1,V=null,K=null;const j=new Vector4(0,0,I,Y),F=new Vector4(0,0,I,Y);let X=!1;const oe=new Frustum;let re=!1,ee=!1,fe=null;const _e=new Matrix4,pe=new Vector2,Le=new Vector3,Ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Se(){return b===null?H:1}let O=n;function Fe(E,U){for(let q=0;q<E.length;q++){const D=E[q],$=t.getContext(D,U);if($!==null)return $}return null}try{const E={alpha:!0,depth:i,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${REVISION}`),t.addEventListener("webglcontextlost",le,!1),t.addEventListener("webglcontextrestored",G,!1),t.addEventListener("webglcontextcreationerror",te,!1),O===null){const U=["webgl2","webgl","experimental-webgl"];if(T.isWebGL1Renderer===!0&&U.shift(),O=Fe(U,E),O===null)throw Fe(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&O instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),O.getShaderPrecisionFormat===void 0&&(O.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let ge,xe,ve,Be,Ae,Ee,Ne,Xe,$e,L,M,z,ne,Q,ie,me,ae,W,R,J,de,se,ue,Ce;function De(){ge=new WebGLExtensions(O),xe=new WebGLCapabilities(O,ge,e),ge.init(xe),se=new WebGLUtils(O,ge,xe),ve=new WebGLState(O,ge,xe),Be=new WebGLInfo(O),Ae=new WebGLProperties,Ee=new WebGLTextures(O,ge,ve,Ae,xe,se,Be),Ne=new WebGLCubeMaps(T),Xe=new WebGLCubeUVMaps(T),$e=new WebGLAttributes(O,xe),ue=new WebGLBindingStates(O,ge,$e,xe),L=new WebGLGeometries(O,$e,Be,ue),M=new WebGLObjects(O,L,$e,Be),R=new WebGLMorphtargets(O,xe,Ee),me=new WebGLClipping(Ae),z=new WebGLPrograms(T,Ne,Xe,ge,xe,ue,me),ne=new WebGLMaterials(T,Ae),Q=new WebGLRenderLists,ie=new WebGLRenderStates(ge,xe),W=new WebGLBackground(T,Ne,Xe,ve,M,d,l),ae=new WebGLShadowMap(T,M,xe),Ce=new WebGLUniformsGroups(O,Be,xe,ve),J=new WebGLBufferRenderer(O,ge,Be,xe),de=new WebGLIndexedBufferRenderer(O,ge,Be,xe),Be.programs=z.programs,T.capabilities=xe,T.extensions=ge,T.properties=Ae,T.renderLists=Q,T.shadowMap=ae,T.state=ve,T.info=Be}De();const P=new WebXRManager(T,O);this.xr=P,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const E=ge.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=ge.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(E){E!==void 0&&(H=E,this.setSize(I,Y,!1))},this.getSize=function(E){return E.set(I,Y)},this.setSize=function(E,U,q=!0){if(P.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=E,Y=U,t.width=Math.floor(E*H),t.height=Math.floor(U*H),q===!0&&(t.style.width=E+"px",t.style.height=U+"px"),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(I*H,Y*H).floor()},this.setDrawingBufferSize=function(E,U,q){I=E,Y=U,H=q,t.width=Math.floor(E*q),t.height=Math.floor(U*q),this.setViewport(0,0,E,U)},this.getCurrentViewport=function(E){return E.copy(C)},this.getViewport=function(E){return E.copy(j)},this.setViewport=function(E,U,q,D){E.isVector4?j.set(E.x,E.y,E.z,E.w):j.set(E,U,q,D),ve.viewport(C.copy(j).multiplyScalar(H).floor())},this.getScissor=function(E){return E.copy(F)},this.setScissor=function(E,U,q,D){E.isVector4?F.set(E.x,E.y,E.z,E.w):F.set(E,U,q,D),ve.scissor(k.copy(F).multiplyScalar(H).floor())},this.getScissorTest=function(){return X},this.setScissorTest=function(E){ve.setScissorTest(X=E)},this.setOpaqueSort=function(E){V=E},this.setTransparentSort=function(E){K=E},this.getClearColor=function(E){return E.copy(W.getClearColor())},this.setClearColor=function(){W.setClearColor.apply(W,arguments)},this.getClearAlpha=function(){return W.getClearAlpha()},this.setClearAlpha=function(){W.setClearAlpha.apply(W,arguments)},this.clear=function(E=!0,U=!0,q=!0){let D=0;if(E){let $=!1;if(b!==null){const he=b.texture.format;$=he===RGBAIntegerFormat||he===RGIntegerFormat||he===RedIntegerFormat}if($){const he=b.texture.type,Te=he===UnsignedByteType||he===UnsignedIntType||he===UnsignedShortType||he===UnsignedInt248Type||he===UnsignedShort4444Type||he===UnsignedShort5551Type,ye=W.getClearColor(),be=W.getClearAlpha(),Pe=ye.r,Me=ye.g,Re=ye.b;Te?(f[0]=Pe,f[1]=Me,f[2]=Re,f[3]=be,O.clearBufferuiv(O.COLOR,0,f)):(g[0]=Pe,g[1]=Me,g[2]=Re,g[3]=be,O.clearBufferiv(O.COLOR,0,g))}else D|=O.COLOR_BUFFER_BIT}U&&(D|=O.DEPTH_BUFFER_BIT),q&&(D|=O.STENCIL_BUFFER_BIT),O.clear(D)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",le,!1),t.removeEventListener("webglcontextrestored",G,!1),t.removeEventListener("webglcontextcreationerror",te,!1),Q.dispose(),ie.dispose(),Ae.dispose(),Ne.dispose(),Xe.dispose(),M.dispose(),ue.dispose(),Ce.dispose(),z.dispose(),P.dispose(),P.removeEventListener("sessionstart",Ve),P.removeEventListener("sessionend",Ze),fe&&(fe.dispose(),fe=null),qe.stop()};function le(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function G(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const E=Be.autoReset,U=ae.enabled,q=ae.autoUpdate,D=ae.needsUpdate,$=ae.type;De(),Be.autoReset=E,ae.enabled=U,ae.autoUpdate=q,ae.needsUpdate=D,ae.type=$}function te(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ce(E){const U=E.target;U.removeEventListener("dispose",ce),we(U)}function we(E){Ie(E),Ae.remove(E)}function Ie(E){const U=Ae.get(E).programs;U!==void 0&&(U.forEach(function(q){z.releaseProgram(q)}),E.isShaderMaterial&&z.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,q,D,$,he){U===null&&(U=Ue);const Te=$.isMesh&&$.matrixWorld.determinant()<0,ye=_t(E,U,q,D,$);ve.setMaterial(D,Te);let be=q.index,Pe=1;if(D.wireframe===!0){if(be=L.getWireframeAttribute(q),be===void 0)return;Pe=2}const Me=q.drawRange,Re=q.attributes.position;let ze=Me.start*Pe,He=(Me.start+Me.count)*Pe;he!==null&&(ze=Math.max(ze,he.start*Pe),He=Math.min(He,(he.start+he.count)*Pe)),be!==null?(ze=Math.max(ze,0),He=Math.min(He,be.count)):Re!=null&&(ze=Math.max(ze,0),He=Math.min(He,Re.count));const je=He-ze;if(je<0||je===1/0)return;ue.setup($,D,ye,q,be);let Je,ke=J;if(be!==null&&(Je=$e.get(be),ke=de,ke.setIndex(Je)),$.isMesh)D.wireframe===!0?(ve.setLineWidth(D.wireframeLinewidth*Se()),ke.setMode(O.LINES)):ke.setMode(O.TRIANGLES);else if($.isLine){let Oe=D.linewidth;Oe===void 0&&(Oe=1),ve.setLineWidth(Oe*Se()),$.isLineSegments?ke.setMode(O.LINES):$.isLineLoop?ke.setMode(O.LINE_LOOP):ke.setMode(O.LINE_STRIP)}else $.isPoints?ke.setMode(O.POINTS):$.isSprite&&ke.setMode(O.TRIANGLES);if($.isInstancedMesh)ke.renderInstances(ze,je,$.count);else if(q.isInstancedBufferGeometry){const Oe=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,at=Math.min(q.instanceCount,Oe);ke.renderInstances(ze,je,at)}else ke.render(ze,je)},this.compile=function(E,U){function q(D,$,he){D.transparent===!0&&D.side===DoubleSide&&D.forceSinglePass===!1?(D.side=BackSide,D.needsUpdate=!0,rt(D,$,he),D.side=FrontSide,D.needsUpdate=!0,rt(D,$,he),D.side=DoubleSide):rt(D,$,he)}m=ie.get(E),m.init(),v.push(m),E.traverseVisible(function(D){D.isLight&&D.layers.test(U.layers)&&(m.pushLight(D),D.castShadow&&m.pushShadow(D))}),m.setupLights(T._useLegacyLights),E.traverse(function(D){const $=D.material;if($)if(Array.isArray($))for(let he=0;he<$.length;he++){const Te=$[he];q(Te,E,D)}else q($,E,D)}),v.pop(),m=null};let Ge=null;function Qe(E){Ge&&Ge(E)}function Ve(){qe.stop()}function Ze(){qe.start()}const qe=new WebGLAnimation;qe.setAnimationLoop(Qe),typeof self<"u"&&qe.setContext(self),this.setAnimationLoop=function(E){Ge=E,P.setAnimationLoop(E),E===null?qe.stop():qe.start()},P.addEventListener("sessionstart",Ve),P.addEventListener("sessionend",Ze),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),P.enabled===!0&&P.isPresenting===!0&&(P.cameraAutoUpdate===!0&&P.updateCamera(U),U=P.getCamera()),E.isScene===!0&&E.onBeforeRender(T,E,U,b),m=ie.get(E,v.length),m.init(),v.push(m),_e.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),oe.setFromProjectionMatrix(_e),ee=this.localClippingEnabled,re=me.init(this.clippingPlanes,ee),_=Q.get(E,p.length),_.init(),p.push(_),ct(E,U,0,T.sortObjects),_.finish(),T.sortObjects===!0&&_.sort(V,K),this.info.render.frame++,re===!0&&me.beginShadows();const q=m.state.shadowsArray;if(ae.render(q,E,U),re===!0&&me.endShadows(),this.info.autoReset===!0&&this.info.reset(),W.render(_,E),m.setupLights(T._useLegacyLights),U.isArrayCamera){const D=U.cameras;for(let $=0,he=D.length;$<he;$++){const Te=D[$];ut(_,E,Te,Te.viewport)}}else ut(_,E,U);b!==null&&(Ee.updateMultisampleRenderTarget(b),Ee.updateRenderTargetMipmap(b)),E.isScene===!0&&E.onAfterRender(T,E,U),ue.resetDefaultState(),w=-1,S=null,v.pop(),v.length>0?m=v[v.length-1]:m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function ct(E,U,q,D){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)q=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||oe.intersectsSprite(E)){D&&Le.setFromMatrixPosition(E.matrixWorld).applyMatrix4(_e);const Te=M.update(E),ye=E.material;ye.visible&&_.push(E,Te,ye,q,Le.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||oe.intersectsObject(E))){const Te=M.update(E),ye=E.material;if(D&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Le.copy(E.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),Le.copy(Te.boundingSphere.center)),Le.applyMatrix4(E.matrixWorld).applyMatrix4(_e)),Array.isArray(ye)){const be=Te.groups;for(let Pe=0,Me=be.length;Pe<Me;Pe++){const Re=be[Pe],ze=ye[Re.materialIndex];ze&&ze.visible&&_.push(E,Te,ze,q,Le.z,Re)}}else ye.visible&&_.push(E,Te,ye,q,Le.z,null)}}const he=E.children;for(let Te=0,ye=he.length;Te<ye;Te++)ct(he[Te],U,q,D)}function ut(E,U,q,D){const $=E.opaque,he=E.transmissive,Te=E.transparent;m.setupLightsView(q),re===!0&&me.setGlobalState(T.clippingPlanes,q),he.length>0&&mt($,he,U,q),D&&ve.viewport(C.copy(D)),$.length>0&&it($,U,q),he.length>0&&it(he,U,q),Te.length>0&&it(Te,U,q),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function mt(E,U,q,D){const $=xe.isWebGL2;fe===null&&(fe=new WebGLRenderTarget(1,1,{generateMipmaps:!0,type:ge.has("EXT_color_buffer_half_float")?HalfFloatType:UnsignedByteType,minFilter:LinearMipmapLinearFilter,samples:$?4:0})),T.getDrawingBufferSize(pe),$?fe.setSize(pe.x,pe.y):fe.setSize(floorPowerOfTwo(pe.x),floorPowerOfTwo(pe.y));const he=T.getRenderTarget();T.setRenderTarget(fe),T.getClearColor(N),B=T.getClearAlpha(),B<1&&T.setClearColor(16777215,.5),T.clear();const Te=T.toneMapping;T.toneMapping=NoToneMapping,it(E,q,D),Ee.updateMultisampleRenderTarget(fe),Ee.updateRenderTargetMipmap(fe);let ye=!1;for(let be=0,Pe=U.length;be<Pe;be++){const Me=U[be],Re=Me.object,ze=Me.geometry,He=Me.material,je=Me.group;if(He.side===DoubleSide&&Re.layers.test(D.layers)){const Je=He.side;He.side=BackSide,He.needsUpdate=!0,dt(Re,q,D,ze,He,je),He.side=Je,He.needsUpdate=!0,ye=!0}}ye===!0&&(Ee.updateMultisampleRenderTarget(fe),Ee.updateRenderTargetMipmap(fe)),T.setRenderTarget(he),T.setClearColor(N,B),T.toneMapping=Te}function it(E,U,q){const D=U.isScene===!0?U.overrideMaterial:null;for(let $=0,he=E.length;$<he;$++){const Te=E[$],ye=Te.object,be=Te.geometry,Pe=D===null?Te.material:D,Me=Te.group;ye.layers.test(q.layers)&&dt(ye,U,q,be,Pe,Me)}}function dt(E,U,q,D,$,he){E.onBeforeRender(T,U,q,D,$,he),E.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),$.onBeforeRender(T,U,q,D,E,he),$.transparent===!0&&$.side===DoubleSide&&$.forceSinglePass===!1?($.side=BackSide,$.needsUpdate=!0,T.renderBufferDirect(q,U,D,$,E,he),$.side=FrontSide,$.needsUpdate=!0,T.renderBufferDirect(q,U,D,$,E,he),$.side=DoubleSide):T.renderBufferDirect(q,U,D,$,E,he),E.onAfterRender(T,U,q,D,$,he)}function rt(E,U,q){U.isScene!==!0&&(U=Ue);const D=Ae.get(E),$=m.state.lights,he=m.state.shadowsArray,Te=$.state.version,ye=z.getParameters(E,$.state,he,U,q),be=z.getProgramCacheKey(ye);let Pe=D.programs;D.environment=E.isMeshStandardMaterial?U.environment:null,D.fog=U.fog,D.envMap=(E.isMeshStandardMaterial?Xe:Ne).get(E.envMap||D.environment),Pe===void 0&&(E.addEventListener("dispose",ce),Pe=new Map,D.programs=Pe);let Me=Pe.get(be);if(Me!==void 0){if(D.currentProgram===Me&&D.lightsStateVersion===Te)return ht(E,ye),Me}else ye.uniforms=z.getUniforms(E),E.onBuild(q,ye,T),E.onBeforeCompile(ye,T),Me=z.acquireProgram(ye,be),Pe.set(be,Me),D.uniforms=ye.uniforms;const Re=D.uniforms;(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Re.clippingPlanes=me.uniform),ht(E,ye),D.needsLights=Tt(E),D.lightsStateVersion=Te,D.needsLights&&(Re.ambientLightColor.value=$.state.ambient,Re.lightProbe.value=$.state.probe,Re.directionalLights.value=$.state.directional,Re.directionalLightShadows.value=$.state.directionalShadow,Re.spotLights.value=$.state.spot,Re.spotLightShadows.value=$.state.spotShadow,Re.rectAreaLights.value=$.state.rectArea,Re.ltc_1.value=$.state.rectAreaLTC1,Re.ltc_2.value=$.state.rectAreaLTC2,Re.pointLights.value=$.state.point,Re.pointLightShadows.value=$.state.pointShadow,Re.hemisphereLights.value=$.state.hemi,Re.directionalShadowMap.value=$.state.directionalShadowMap,Re.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Re.spotShadowMap.value=$.state.spotShadowMap,Re.spotLightMatrix.value=$.state.spotLightMatrix,Re.spotLightMap.value=$.state.spotLightMap,Re.pointShadowMap.value=$.state.pointShadowMap,Re.pointShadowMatrix.value=$.state.pointShadowMatrix);const ze=Me.getUniforms(),He=WebGLUniforms.seqWithValue(ze.seq,Re);return D.currentProgram=Me,D.uniformsList=He,Me}function ht(E,U){const q=Ae.get(E);q.outputColorSpace=U.outputColorSpace,q.instancing=U.instancing,q.instancingColor=U.instancingColor,q.skinning=U.skinning,q.morphTargets=U.morphTargets,q.morphNormals=U.morphNormals,q.morphColors=U.morphColors,q.morphTargetsCount=U.morphTargetsCount,q.numClippingPlanes=U.numClippingPlanes,q.numIntersection=U.numClipIntersection,q.vertexAlphas=U.vertexAlphas,q.vertexTangents=U.vertexTangents,q.toneMapping=U.toneMapping}function _t(E,U,q,D,$){U.isScene!==!0&&(U=Ue),Ee.resetTextureUnits();const he=U.fog,Te=D.isMeshStandardMaterial?U.environment:null,ye=b===null?T.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:LinearSRGBColorSpace,be=(D.isMeshStandardMaterial?Xe:Ne).get(D.envMap||Te),Pe=D.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Me=!!q.attributes.tangent&&(!!D.normalMap||D.anisotropy>0),Re=!!q.morphAttributes.position,ze=!!q.morphAttributes.normal,He=!!q.morphAttributes.color;let je=NoToneMapping;D.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(je=T.toneMapping);const Je=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ke=Je!==void 0?Je.length:0,Oe=Ae.get(D),at=m.state.lights;if(re===!0&&(ee===!0||E!==S)){const Ye=E===S&&D.id===w;me.setState(D,E,Ye)}let We=!1;D.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==at.state.version||Oe.outputColorSpace!==ye||$.isInstancedMesh&&Oe.instancing===!1||!$.isInstancedMesh&&Oe.instancing===!0||$.isSkinnedMesh&&Oe.skinning===!1||!$.isSkinnedMesh&&Oe.skinning===!0||$.isInstancedMesh&&Oe.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Oe.instancingColor===!1&&$.instanceColor!==null||Oe.envMap!==be||D.fog===!0&&Oe.fog!==he||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==me.numPlanes||Oe.numIntersection!==me.numIntersection)||Oe.vertexAlphas!==Pe||Oe.vertexTangents!==Me||Oe.morphTargets!==Re||Oe.morphNormals!==ze||Oe.morphColors!==He||Oe.toneMapping!==je||xe.isWebGL2===!0&&Oe.morphTargetsCount!==ke)&&(We=!0):(We=!0,Oe.__version=D.version);let et=Oe.currentProgram;We===!0&&(et=rt(D,U,$));let ft=!1,nt=!1,st=!1;const Ke=et.getUniforms(),tt=Oe.uniforms;if(ve.useProgram(et.program)&&(ft=!0,nt=!0,st=!0),D.id!==w&&(w=D.id,nt=!0),ft||S!==E){if(Ke.setValue(O,"projectionMatrix",E.projectionMatrix),xe.logarithmicDepthBuffer&&Ke.setValue(O,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),S!==E&&(S=E,nt=!0,st=!0),D.isShaderMaterial||D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshStandardMaterial||D.envMap){const Ye=Ke.map.cameraPosition;Ye!==void 0&&Ye.setValue(O,Le.setFromMatrixPosition(E.matrixWorld))}(D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshLambertMaterial||D.isMeshBasicMaterial||D.isMeshStandardMaterial||D.isShaderMaterial)&&Ke.setValue(O,"isOrthographic",E.isOrthographicCamera===!0),(D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshLambertMaterial||D.isMeshBasicMaterial||D.isMeshStandardMaterial||D.isShaderMaterial||D.isShadowMaterial||$.isSkinnedMesh)&&Ke.setValue(O,"viewMatrix",E.matrixWorldInverse)}if($.isSkinnedMesh){Ke.setOptional(O,$,"bindMatrix"),Ke.setOptional(O,$,"bindMatrixInverse");const Ye=$.skeleton;Ye&&(xe.floatVertexTextures?(Ye.boneTexture===null&&Ye.computeBoneTexture(),Ke.setValue(O,"boneTexture",Ye.boneTexture,Ee),Ke.setValue(O,"boneTextureSize",Ye.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const ot=q.morphAttributes;if((ot.position!==void 0||ot.normal!==void 0||ot.color!==void 0&&xe.isWebGL2===!0)&&R.update($,q,et),(nt||Oe.receiveShadow!==$.receiveShadow)&&(Oe.receiveShadow=$.receiveShadow,Ke.setValue(O,"receiveShadow",$.receiveShadow)),D.isMeshGouraudMaterial&&D.envMap!==null&&(tt.envMap.value=be,tt.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),nt&&(Ke.setValue(O,"toneMappingExposure",T.toneMappingExposure),Oe.needsLights&&gt(tt,st),he&&D.fog===!0&&ne.refreshFogUniforms(tt,he),ne.refreshMaterialUniforms(tt,D,H,Y,fe),WebGLUniforms.upload(O,Oe.uniformsList,tt,Ee)),D.isShaderMaterial&&D.uniformsNeedUpdate===!0&&(WebGLUniforms.upload(O,Oe.uniformsList,tt,Ee),D.uniformsNeedUpdate=!1),D.isSpriteMaterial&&Ke.setValue(O,"center",$.center),Ke.setValue(O,"modelViewMatrix",$.modelViewMatrix),Ke.setValue(O,"normalMatrix",$.normalMatrix),Ke.setValue(O,"modelMatrix",$.matrixWorld),D.isShaderMaterial||D.isRawShaderMaterial){const Ye=D.uniformsGroups;for(let lt=0,St=Ye.length;lt<St;lt++)if(xe.isWebGL2){const pt=Ye[lt];Ce.update(pt,et),Ce.bind(pt,et)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return et}function gt(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function Tt(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return y},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(E,U,q){Ae.get(E.texture).__webglTexture=U,Ae.get(E.depthTexture).__webglTexture=q;const D=Ae.get(E);D.__hasExternalTextures=!0,D.__hasExternalTextures&&(D.__autoAllocateDepthBuffer=q===void 0,D.__autoAllocateDepthBuffer||ge.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),D.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,U){const q=Ae.get(E);q.__webglFramebuffer=U,q.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(E,U=0,q=0){b=E,y=U,A=q;let D=!0,$=null,he=!1,Te=!1;if(E){const be=Ae.get(E);be.__useDefaultFramebuffer!==void 0?(ve.bindFramebuffer(O.FRAMEBUFFER,null),D=!1):be.__webglFramebuffer===void 0?Ee.setupRenderTarget(E):be.__hasExternalTextures&&Ee.rebindTextures(E,Ae.get(E.texture).__webglTexture,Ae.get(E.depthTexture).__webglTexture);const Pe=E.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(Te=!0);const Me=Ae.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Me[U])?$=Me[U][q]:$=Me[U],he=!0):xe.isWebGL2&&E.samples>0&&Ee.useMultisampledRTT(E)===!1?$=Ae.get(E).__webglMultisampledFramebuffer:Array.isArray(Me)?$=Me[q]:$=Me,C.copy(E.viewport),k.copy(E.scissor),Z=E.scissorTest}else C.copy(j).multiplyScalar(H).floor(),k.copy(F).multiplyScalar(H).floor(),Z=X;if(ve.bindFramebuffer(O.FRAMEBUFFER,$)&&xe.drawBuffers&&D&&ve.drawBuffers(E,$),ve.viewport(C),ve.scissor(k),ve.setScissorTest(Z),he){const be=Ae.get(E.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+U,be.__webglTexture,q)}else if(Te){const be=Ae.get(E.texture),Pe=U||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,be.__webglTexture,q||0,Pe)}w=-1},this.readRenderTargetPixels=function(E,U,q,D,$,he,Te){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=Ae.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Te!==void 0&&(ye=ye[Te]),ye){ve.bindFramebuffer(O.FRAMEBUFFER,ye);try{const be=E.texture,Pe=be.format,Me=be.type;if(Pe!==RGBAFormat&&se.convert(Pe)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Re=Me===HalfFloatType&&(ge.has("EXT_color_buffer_half_float")||xe.isWebGL2&&ge.has("EXT_color_buffer_float"));if(Me!==UnsignedByteType&&se.convert(Me)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Me===FloatType&&(xe.isWebGL2||ge.has("OES_texture_float")||ge.has("WEBGL_color_buffer_float")))&&!Re){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-D&&q>=0&&q<=E.height-$&&O.readPixels(U,q,D,$,se.convert(Pe),se.convert(Me),he)}finally{const be=b!==null?Ae.get(b).__webglFramebuffer:null;ve.bindFramebuffer(O.FRAMEBUFFER,be)}}},this.copyFramebufferToTexture=function(E,U,q=0){const D=Math.pow(2,-q),$=Math.floor(U.image.width*D),he=Math.floor(U.image.height*D);Ee.setTexture2D(U,0),O.copyTexSubImage2D(O.TEXTURE_2D,q,0,0,E.x,E.y,$,he),ve.unbindTexture()},this.copyTextureToTexture=function(E,U,q,D=0){const $=U.image.width,he=U.image.height,Te=se.convert(q.format),ye=se.convert(q.type);Ee.setTexture2D(q,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,q.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,q.unpackAlignment),U.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,D,E.x,E.y,$,he,Te,ye,U.image.data):U.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,D,E.x,E.y,U.mipmaps[0].width,U.mipmaps[0].height,Te,U.mipmaps[0].data):O.texSubImage2D(O.TEXTURE_2D,D,E.x,E.y,Te,ye,U.image),D===0&&q.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),ve.unbindTexture()},this.copyTextureToTexture3D=function(E,U,q,D,$=0){if(T.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const he=E.max.x-E.min.x+1,Te=E.max.y-E.min.y+1,ye=E.max.z-E.min.z+1,be=se.convert(D.format),Pe=se.convert(D.type);let Me;if(D.isData3DTexture)Ee.setTexture3D(D,0),Me=O.TEXTURE_3D;else if(D.isDataArrayTexture)Ee.setTexture2DArray(D,0),Me=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,D.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,D.unpackAlignment);const Re=O.getParameter(O.UNPACK_ROW_LENGTH),ze=O.getParameter(O.UNPACK_IMAGE_HEIGHT),He=O.getParameter(O.UNPACK_SKIP_PIXELS),je=O.getParameter(O.UNPACK_SKIP_ROWS),Je=O.getParameter(O.UNPACK_SKIP_IMAGES),ke=q.isCompressedTexture?q.mipmaps[0]:q.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,ke.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ke.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,E.min.x),O.pixelStorei(O.UNPACK_SKIP_ROWS,E.min.y),O.pixelStorei(O.UNPACK_SKIP_IMAGES,E.min.z),q.isDataTexture||q.isData3DTexture?O.texSubImage3D(Me,$,U.x,U.y,U.z,he,Te,ye,be,Pe,ke.data):q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),O.compressedTexSubImage3D(Me,$,U.x,U.y,U.z,he,Te,ye,be,ke.data)):O.texSubImage3D(Me,$,U.x,U.y,U.z,he,Te,ye,be,Pe,ke),O.pixelStorei(O.UNPACK_ROW_LENGTH,Re),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ze),O.pixelStorei(O.UNPACK_SKIP_PIXELS,He),O.pixelStorei(O.UNPACK_SKIP_ROWS,je),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Je),$===0&&D.generateMipmaps&&O.generateMipmap(Me),ve.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?Ee.setTextureCube(E,0):E.isData3DTexture?Ee.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Ee.setTexture2DArray(E,0):Ee.setTexture2D(E,0),ve.unbindTexture()},this.resetState=function(){y=0,A=0,b=null,ve.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return WebGLCoordinateSystem}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===SRGBColorSpace?sRGBEncoding:LinearEncoding}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===sRGBEncoding?SRGBColorSpace:LinearSRGBColorSpace}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class WebGL1Renderer extends WebGLRenderer{}WebGL1Renderer.prototype.isWebGL1Renderer=!0;class Scene extends Object3D{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class DataTexture extends Texture{constructor(e=null,t=1,n=1,i,a,s,o,l,c=NearestFilter,u=NearestFilter,h,d){super(null,s,o,l,c,u,i,a,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class CompressedTexture extends Texture{constructor(e,t,n,i,a,s,o,l,c,u,h,d){super(null,s,o,l,c,u,i,a,h,d),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class Curve{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),a=0;t.push(0);for(let s=1;s<=e;s++)n=this.getPoint(s/e),a+=n.distanceTo(i),t.push(a),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const a=n.length;let s;t?s=t:s=e*n[a-1];let o=0,l=a-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-s,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===s)return i/(a-1);const u=n[i],d=n[i+1]-u,f=(s-u)/d;return(i+f)/(a-1)}getTangent(e,t){let i=e-1e-4,a=e+1e-4;i<0&&(i=0),a>1&&(a=1);const s=this.getPoint(i),o=this.getPoint(a),l=t||(s.isVector2?new Vector2:new Vector3);return l.copy(o).sub(s).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new Vector3,i=[],a=[],s=[],o=new Vector3,l=new Matrix4;for(let f=0;f<=e;f++){const g=f/e;i[f]=this.getTangentAt(g,new Vector3)}a[0]=new Vector3,s[0]=new Vector3;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),d=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),a[0].crossVectors(i[0],o),s[0].crossVectors(i[0],a[0]);for(let f=1;f<=e;f++){if(a[f]=a[f-1].clone(),s[f]=s[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(clamp$1(i[f-1].dot(i[f]),-1,1));a[f].applyMatrix4(l.makeRotationAxis(o,g))}s[f].crossVectors(i[f],a[f])}if(t===!0){let f=Math.acos(clamp$1(a[0].dot(a[e]),-1,1));f/=e,i[0].dot(o.crossVectors(a[0],a[e]))>0&&(f=-f);for(let g=1;g<=e;g++)a[g].applyMatrix4(l.makeRotationAxis(i[g],f*g)),s[g].crossVectors(i[g],a[g])}return{tangents:i,normals:a,binormals:s}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class EllipseCurve extends Curve{constructor(e=0,t=0,n=1,i=1,a=0,s=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=a,this.aEndAngle=s,this.aClockwise=o,this.aRotation=l}getPoint(e,t){const n=t||new Vector2,i=Math.PI*2;let a=this.aEndAngle-this.aStartAngle;const s=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=i;for(;a>i;)a-=i;a<Number.EPSILON&&(s?a=0:a=i),this.aClockwise===!0&&!s&&(a===i?a=-i:a=a-i);const o=this.aStartAngle+e*a;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class ArcCurve extends EllipseCurve{constructor(e,t,n,i,a,s){super(e,t,n,n,i,a,s),this.isArcCurve=!0,this.type="ArcCurve"}}function CubicPoly(){let r=0,e=0,t=0,n=0;function i(a,s,o,l){r=a,e=o,t=-3*a+3*s-2*o-l,n=2*a-2*s+o+l}return{initCatmullRom:function(a,s,o,l,c){i(s,o,c*(o-a),c*(l-s))},initNonuniformCatmullRom:function(a,s,o,l,c,u,h){let d=(s-a)/c-(o-a)/(c+u)+(o-s)/u,f=(o-s)/u-(l-s)/(u+h)+(l-o)/h;d*=u,f*=u,i(s,o,d,f)},calc:function(a){const s=a*a,o=s*a;return r+e*a+t*s+n*o}}}const tmp=new Vector3,px=new CubicPoly,py=new CubicPoly,pz=new CubicPoly;class CatmullRomCurve3 extends Curve{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new Vector3){const n=t,i=this.points,a=i.length,s=(a-(this.closed?0:1))*e;let o=Math.floor(s),l=s-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/a)+1)*a:l===0&&o===a-1&&(o=a-2,l=1);let c,u;this.closed||o>0?c=i[(o-1)%a]:(tmp.subVectors(i[0],i[1]).add(i[0]),c=tmp);const h=i[o%a],d=i[(o+1)%a];if(this.closed||o+2<a?u=i[(o+2)%a]:(tmp.subVectors(i[a-1],i[a-2]).add(i[a-1]),u=tmp),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),f),_=Math.pow(h.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(u),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),px.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,g,_,m),py.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,g,_,m),pz.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(px.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),py.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),pz.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(px.calc(l),py.calc(l),pz.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new Vector3().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function CatmullRom(r,e,t,n,i){const a=(n-e)*.5,s=(i-t)*.5,o=r*r,l=r*o;return(2*t-2*n+a+s)*l+(-3*t+3*n-2*a-s)*o+a*r+t}function QuadraticBezierP0(r,e){const t=1-r;return t*t*e}function QuadraticBezierP1(r,e){return 2*(1-r)*r*e}function QuadraticBezierP2(r,e){return r*r*e}function QuadraticBezier(r,e,t,n){return QuadraticBezierP0(r,e)+QuadraticBezierP1(r,t)+QuadraticBezierP2(r,n)}function CubicBezierP0(r,e){const t=1-r;return t*t*t*e}function CubicBezierP1(r,e){const t=1-r;return 3*t*t*r*e}function CubicBezierP2(r,e){return 3*(1-r)*r*r*e}function CubicBezierP3(r,e){return r*r*r*e}function CubicBezier(r,e,t,n,i){return CubicBezierP0(r,e)+CubicBezierP1(r,t)+CubicBezierP2(r,n)+CubicBezierP3(r,i)}class CubicBezierCurve extends Curve{constructor(e=new Vector2,t=new Vector2,n=new Vector2,i=new Vector2){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new Vector2){const n=t,i=this.v0,a=this.v1,s=this.v2,o=this.v3;return n.set(CubicBezier(e,i.x,a.x,s.x,o.x),CubicBezier(e,i.y,a.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class CubicBezierCurve3 extends Curve{constructor(e=new Vector3,t=new Vector3,n=new Vector3,i=new Vector3){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new Vector3){const n=t,i=this.v0,a=this.v1,s=this.v2,o=this.v3;return n.set(CubicBezier(e,i.x,a.x,s.x,o.x),CubicBezier(e,i.y,a.y,s.y,o.y),CubicBezier(e,i.z,a.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class LineCurve extends Curve{constructor(e=new Vector2,t=new Vector2){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Vector2){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Vector2){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class LineCurve3 extends Curve{constructor(e=new Vector3,t=new Vector3){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new Vector3){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Vector3){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class QuadraticBezierCurve extends Curve{constructor(e=new Vector2,t=new Vector2,n=new Vector2){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Vector2){const n=t,i=this.v0,a=this.v1,s=this.v2;return n.set(QuadraticBezier(e,i.x,a.x,s.x),QuadraticBezier(e,i.y,a.y,s.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class QuadraticBezierCurve3 extends Curve{constructor(e=new Vector3,t=new Vector3,n=new Vector3){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Vector3){const n=t,i=this.v0,a=this.v1,s=this.v2;return n.set(QuadraticBezier(e,i.x,a.x,s.x),QuadraticBezier(e,i.y,a.y,s.y),QuadraticBezier(e,i.z,a.z,s.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class SplineCurve extends Curve{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Vector2){const n=t,i=this.points,a=(i.length-1)*e,s=Math.floor(a),o=a-s,l=i[s===0?s:s-1],c=i[s],u=i[s>i.length-2?i.length-1:s+1],h=i[s>i.length-3?i.length-1:s+2];return n.set(CatmullRom(o,l.x,c.x,u.x,h.x),CatmullRom(o,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new Vector2().fromArray(i))}return this}}var Curves=Object.freeze({__proto__:null,ArcCurve,CatmullRomCurve3,CubicBezierCurve,CubicBezierCurve3,EllipseCurve,LineCurve,LineCurve3,QuadraticBezierCurve,QuadraticBezierCurve3,SplineCurve});class CurvePath extends Curve{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new LineCurve(t,e))}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let a=0;for(;a<i.length;){if(i[a]>=n){const s=i[a]-n,o=this.curves[a],l=o.getLength(),c=l===0?0:1-s/l;return o.getPointAt(c,t)}a++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,a=this.curves;i<a.length;i++){const s=a[i],o=s.isEllipseCurve?e*2:s.isLineCurve||s.isLineCurve3?1:s.isSplineCurve?e*s.points.length:e,l=s.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Curves[i.type]().fromJSON(i))}return this}}class Path extends CurvePath{constructor(e){super(),this.type="Path",this.currentPoint=new Vector2,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new LineCurve(this.currentPoint.clone(),new Vector2(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const a=new QuadraticBezierCurve(this.currentPoint.clone(),new Vector2(e,t),new Vector2(n,i));return this.curves.push(a),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,a,s){const o=new CubicBezierCurve(this.currentPoint.clone(),new Vector2(e,t),new Vector2(n,i),new Vector2(a,s));return this.curves.push(o),this.currentPoint.set(a,s),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new SplineCurve(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,a,s){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,i,a,s),this}absarc(e,t,n,i,a,s){return this.absellipse(e,t,n,n,i,a,s),this}ellipse(e,t,n,i,a,s,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,i,a,s,o,l),this}absellipse(e,t,n,i,a,s,o,l){const c=new EllipseCurve(e,t,n,i,a,s,o,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Shape extends Path{constructor(e){super(e),this.uuid=generateUUID(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new Path().fromJSON(i))}return this}}const Earcut={triangulate:function(r,e,t=2){const n=e&&e.length,i=n?e[0]*t:r.length;let a=linkedList(r,0,i,t,!0);const s=[];if(!a||a.next===a.prev)return s;let o,l,c,u,h,d,f;if(n&&(a=eliminateHoles(r,e,a,t)),r.length>80*t){o=c=r[0],l=u=r[1];for(let g=t;g<i;g+=t)h=r[g],d=r[g+1],h<o&&(o=h),d<l&&(l=d),h>c&&(c=h),d>u&&(u=d);f=Math.max(c-o,u-l),f=f!==0?32767/f:0}return earcutLinked(a,s,t,o,l,f,0),s}};function linkedList(r,e,t,n,i){let a,s;if(i===signedArea(r,e,t,n)>0)for(a=e;a<t;a+=n)s=insertNode(a,r[a],r[a+1],s);else for(a=t-n;a>=e;a-=n)s=insertNode(a,r[a],r[a+1],s);return s&&equals(s,s.next)&&(removeNode(s),s=s.next),s}function filterPoints(r,e){if(!r)return r;e||(e=r);let t=r,n;do if(n=!1,!t.steiner&&(equals(t,t.next)||area(t.prev,t,t.next)===0)){if(removeNode(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function earcutLinked(r,e,t,n,i,a,s){if(!r)return;!s&&a&&indexCurve(r,n,i,a);let o=r,l,c;for(;r.prev!==r.next;){if(l=r.prev,c=r.next,a?isEarHashed(r,n,i,a):isEar(r)){e.push(l.i/t|0),e.push(r.i/t|0),e.push(c.i/t|0),removeNode(r),r=c.next,o=c.next;continue}if(r=c,r===o){s?s===1?(r=cureLocalIntersections(filterPoints(r),e,t),earcutLinked(r,e,t,n,i,a,2)):s===2&&splitEarcut(r,e,t,n,i,a):earcutLinked(filterPoints(r),e,t,n,i,a,1);break}}}function isEar(r){const e=r.prev,t=r,n=r.next;if(area(e,t,n)>=0)return!1;const i=e.x,a=t.x,s=n.x,o=e.y,l=t.y,c=n.y,u=i<a?i<s?i:s:a<s?a:s,h=o<l?o<c?o:c:l<c?l:c,d=i>a?i>s?i:s:a>s?a:s,f=o>l?o>c?o:c:l>c?l:c;let g=n.next;for(;g!==e;){if(g.x>=u&&g.x<=d&&g.y>=h&&g.y<=f&&pointInTriangle(i,o,a,l,s,c,g.x,g.y)&&area(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function isEarHashed(r,e,t,n){const i=r.prev,a=r,s=r.next;if(area(i,a,s)>=0)return!1;const o=i.x,l=a.x,c=s.x,u=i.y,h=a.y,d=s.y,f=o<l?o<c?o:c:l<c?l:c,g=u<h?u<d?u:d:h<d?h:d,_=o>l?o>c?o:c:l>c?l:c,m=u>h?u>d?u:d:h>d?h:d,p=zOrder(f,g,e,t,n),v=zOrder(_,m,e,t,n);let T=r.prevZ,x=r.nextZ;for(;T&&T.z>=p&&x&&x.z<=v;){if(T.x>=f&&T.x<=_&&T.y>=g&&T.y<=m&&T!==i&&T!==s&&pointInTriangle(o,u,l,h,c,d,T.x,T.y)&&area(T.prev,T,T.next)>=0||(T=T.prevZ,x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==i&&x!==s&&pointInTriangle(o,u,l,h,c,d,x.x,x.y)&&area(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;T&&T.z>=p;){if(T.x>=f&&T.x<=_&&T.y>=g&&T.y<=m&&T!==i&&T!==s&&pointInTriangle(o,u,l,h,c,d,T.x,T.y)&&area(T.prev,T,T.next)>=0)return!1;T=T.prevZ}for(;x&&x.z<=v;){if(x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==i&&x!==s&&pointInTriangle(o,u,l,h,c,d,x.x,x.y)&&area(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function cureLocalIntersections(r,e,t){let n=r;do{const i=n.prev,a=n.next.next;!equals(i,a)&&intersects(i,n,n.next,a)&&locallyInside(i,a)&&locallyInside(a,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(a.i/t|0),removeNode(n),removeNode(n.next),n=r=a),n=n.next}while(n!==r);return filterPoints(n)}function splitEarcut(r,e,t,n,i,a){let s=r;do{let o=s.next.next;for(;o!==s.prev;){if(s.i!==o.i&&isValidDiagonal(s,o)){let l=splitPolygon(s,o);s=filterPoints(s,s.next),l=filterPoints(l,l.next),earcutLinked(s,e,t,n,i,a,0),earcutLinked(l,e,t,n,i,a,0);return}o=o.next}s=s.next}while(s!==r)}function eliminateHoles(r,e,t,n){const i=[];let a,s,o,l,c;for(a=0,s=e.length;a<s;a++)o=e[a]*n,l=a<s-1?e[a+1]*n:r.length,c=linkedList(r,o,l,n,!1),c===c.next&&(c.steiner=!0),i.push(getLeftmost(c));for(i.sort(compareX),a=0;a<i.length;a++)t=eliminateHole(i[a],t);return t}function compareX(r,e){return r.x-e.x}function eliminateHole(r,e){const t=findHoleBridge(r,e);if(!t)return e;const n=splitPolygon(t,r);return filterPoints(n,n.next),filterPoints(t,t.next)}function findHoleBridge(r,e){let t=e,n=-1/0,i;const a=r.x,s=r.y;do{if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=a&&d>n&&(n=d,i=t.x<t.next.x?t:t.next,d===a))return i}t=t.next}while(t!==e);if(!i)return null;const o=i,l=i.x,c=i.y;let u=1/0,h;t=i;do a>=t.x&&t.x>=l&&a!==t.x&&pointInTriangle(s<c?a:n,s,l,c,s<c?n:a,s,t.x,t.y)&&(h=Math.abs(s-t.y)/(a-t.x),locallyInside(t,r)&&(h<u||h===u&&(t.x>i.x||t.x===i.x&&sectorContainsSector(i,t)))&&(i=t,u=h)),t=t.next;while(t!==o);return i}function sectorContainsSector(r,e){return area(r.prev,r,e.prev)<0&&area(e.next,r,r.next)<0}function indexCurve(r,e,t,n){let i=r;do i.z===0&&(i.z=zOrder(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,sortLinked(i)}function sortLinked(r){let e,t,n,i,a,s,o,l,c=1;do{for(t=r,r=null,a=null,s=0;t;){for(s++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,o--):(i=n,n=n.nextZ,l--),a?a.nextZ=i:r=i,i.prevZ=a,a=i;t=n}a.nextZ=null,c*=2}while(s>1);return r}function zOrder(r,e,t,n,i){return r=(r-t)*i|0,e=(e-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function getLeftmost(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function pointInTriangle(r,e,t,n,i,a,s,o){return(i-s)*(e-o)>=(r-s)*(a-o)&&(r-s)*(n-o)>=(t-s)*(e-o)&&(t-s)*(a-o)>=(i-s)*(n-o)}function isValidDiagonal(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!intersectsPolygon(r,e)&&(locallyInside(r,e)&&locallyInside(e,r)&&middleInside(r,e)&&(area(r.prev,r,e.prev)||area(r,e.prev,e))||equals(r,e)&&area(r.prev,r,r.next)>0&&area(e.prev,e,e.next)>0)}function area(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function equals(r,e){return r.x===e.x&&r.y===e.y}function intersects(r,e,t,n){const i=sign(area(r,e,t)),a=sign(area(r,e,n)),s=sign(area(t,n,r)),o=sign(area(t,n,e));return!!(i!==a&&s!==o||i===0&&onSegment(r,t,e)||a===0&&onSegment(r,n,e)||s===0&&onSegment(t,r,n)||o===0&&onSegment(t,e,n))}function onSegment(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function sign(r){return r>0?1:r<0?-1:0}function intersectsPolygon(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&intersects(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function locallyInside(r,e){return area(r.prev,r,r.next)<0?area(r,e,r.next)>=0&&area(r,r.prev,e)>=0:area(r,e,r.prev)<0||area(r,r.next,e)<0}function middleInside(r,e){let t=r,n=!1;const i=(r.x+e.x)/2,a=(r.y+e.y)/2;do t.y>a!=t.next.y>a&&t.next.y!==t.y&&i<(t.next.x-t.x)*(a-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function splitPolygon(r,e){const t=new Node(r.i,r.x,r.y),n=new Node(e.i,e.x,e.y),i=r.next,a=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,a.next=n,n.prev=a,n}function insertNode(r,e,t,n){const i=new Node(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function removeNode(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Node(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function signedArea(r,e,t,n){let i=0;for(let a=e,s=t-n;a<t;a+=n)i+=(r[s]-r[a])*(r[a+1]+r[s+1]),s=a;return i}class ShapeUtils{static area(e){const t=e.length;let n=0;for(let i=t-1,a=0;a<t;i=a++)n+=e[i].x*e[a].y-e[a].x*e[i].y;return n*.5}static isClockWise(e){return ShapeUtils.area(e)<0}static triangulateShape(e,t){const n=[],i=[],a=[];removeDupEndPts(e),addContour(n,e);let s=e.length;t.forEach(removeDupEndPts);for(let l=0;l<t.length;l++)i.push(s),s+=t[l].length,addContour(n,t[l]);const o=Earcut.triangulate(n,i);for(let l=0;l<o.length;l+=3)a.push(o.slice(l,l+3));return a}}function removeDupEndPts(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function addContour(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class ShapeGeometry extends BufferGeometry{constructor(e=new Shape([new Vector2(0,.5),new Vector2(-.5,-.5),new Vector2(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],a=[],s=[];let o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(o,l,u),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Float32BufferAttribute(i,3)),this.setAttribute("normal",new Float32BufferAttribute(a,3)),this.setAttribute("uv",new Float32BufferAttribute(s,2));function c(u){const h=i.length/3,d=u.extractPoints(t);let f=d.shape;const g=d.holes;ShapeUtils.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){const v=g[m];ShapeUtils.isClockWise(v)===!0&&(g[m]=v.reverse())}const _=ShapeUtils.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){const v=g[m];f=f.concat(v)}for(let m=0,p=f.length;m<p;m++){const v=f[m];i.push(v.x,v.y,0),a.push(0,0,1),s.push(v.x,v.y)}for(let m=0,p=_.length;m<p;m++){const v=_[m],T=v[0]+h,x=v[1]+h,y=v[2]+h;n.push(T,x,y),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return toJSON(t,e)}static fromJSON(e,t){const n=[];for(let i=0,a=e.shapes.length;i<a;i++){const s=t[e.shapes[i]];n.push(s)}return new ShapeGeometry(n,e.curveSegments)}}function toJSON(r,e){if(e.shapes=[],Array.isArray(r))for(let t=0,n=r.length;t<n;t++){const i=r[t];e.shapes.push(i.uuid)}else e.shapes.push(r.uuid);return e}class MeshStandardMaterial extends Material{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Color$1(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Color$1(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=TangentSpaceNormalMap,this.normalScale=new Vector2(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Cache={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class LoadingManager{constructor(e,t,n){const i=this;let a=!1,s=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,a===!1&&i.onStart!==void 0&&i.onStart(u,s,o),a=!0},this.itemEnd=function(u){s++,i.onProgress!==void 0&&i.onProgress(u,s,o),s===o&&(a=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const f=c[h],g=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null}}}const DefaultLoadingManager=new LoadingManager;class Loader{constructor(e){this.manager=e!==void 0?e:DefaultLoadingManager,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,a){n.load(e,i,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Loader.DEFAULT_MATERIAL_NAME="__DEFAULT";const loading={};class HttpError extends Error{constructor(e,t){super(e),this.response=t}}class FileLoader extends Loader{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=Cache.get(e);if(a!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(a),this.manager.itemEnd(e)},0),a;if(loading[e]!==void 0){loading[e].push({onLoad:t,onProgress:n,onError:i});return}loading[e]=[],loading[e].push({onLoad:t,onProgress:n,onError:i});const s=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(s).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=loading[e],h=c.body.getReader(),d=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),f=d?parseInt(d):0,g=f!==0;let _=0;const m=new ReadableStream({start(p){v();function v(){h.read().then(({done:T,value:x})=>{if(T)p.close();else{_+=x.byteLength;const y=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let A=0,b=u.length;A<b;A++){const w=u[A];w.onProgress&&w.onProgress(y)}p.enqueue(x),v()}})}}});return new Response(m)}else throw new HttpError(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{Cache.add(e,c);const u=loading[e];delete loading[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{const u=loading[e];if(u===void 0)throw this.manager.itemError(e),c;delete loading[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class CompressedTextureLoader extends Loader{constructor(e){super(e)}load(e,t,n,i){const a=this,s=[],o=new CompressedTexture,l=new FileLoader(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(a.withCredentials);let c=0;function u(h){l.load(e[h],function(d){const f=a.parse(d,!0);s[h]={width:f.width,height:f.height,format:f.format,mipmaps:f.mipmaps},c+=1,c===6&&(f.mipmapCount===1&&(o.minFilter=LinearFilter),o.image=s,o.format=f.format,o.needsUpdate=!0,t&&t(o))},n,i)}if(Array.isArray(e))for(let h=0,d=e.length;h<d;++h)u(h);else l.load(e,function(h){const d=a.parse(h,!0);if(d.isCubemap){const f=d.mipmaps.length/d.mipmapCount;for(let g=0;g<f;g++){s[g]={mipmaps:[]};for(let _=0;_<d.mipmapCount;_++)s[g].mipmaps.push(d.mipmaps[g*d.mipmapCount+_]),s[g].format=d.format,s[g].width=d.width,s[g].height=d.height}o.image=s}else o.image.width=d.width,o.image.height=d.height,o.mipmaps=d.mipmaps;d.mipmapCount===1&&(o.minFilter=LinearFilter),o.format=d.format,o.needsUpdate=!0,t&&t(o)},n,i);return o}}class ImageLoader extends Loader{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,s=Cache.get(e);if(s!==void 0)return a.manager.itemStart(e),setTimeout(function(){t&&t(s),a.manager.itemEnd(e)},0),s;const o=createElementNS("img");function l(){u(),Cache.add(e,this),t&&t(this),a.manager.itemEnd(e)}function c(h){u(),i&&i(h),a.manager.itemError(e),a.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),a.manager.itemStart(e),o.src=e,o}}class TextureLoader extends Loader{constructor(e){super(e)}load(e,t,n,i){const a=new Texture,s=new ImageLoader(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(o){a.image=o,a.needsUpdate=!0,t!==void 0&&t(a)},n,i),a}}class Light extends Object3D{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Color$1(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const _projScreenMatrix$1=new Matrix4,_lightPositionWorld$1=new Vector3,_lookTarget$1=new Vector3;class LightShadow{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Vector2(512,512),this.map=null,this.mapPass=null,this.matrix=new Matrix4,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Frustum,this._frameExtents=new Vector2(1,1),this._viewportCount=1,this._viewports=[new Vector4(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;_lightPositionWorld$1.setFromMatrixPosition(e.matrixWorld),t.position.copy(_lightPositionWorld$1),_lookTarget$1.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(_lookTarget$1),t.updateMatrixWorld(),_projScreenMatrix$1.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_projScreenMatrix$1),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(_projScreenMatrix$1)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const _projScreenMatrix=new Matrix4,_lightPositionWorld=new Vector3,_lookTarget=new Vector3;class PointLightShadow extends LightShadow{constructor(){super(new PerspectiveCamera(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Vector2(4,2),this._viewportCount=6,this._viewports=[new Vector4(2,1,1,1),new Vector4(0,1,1,1),new Vector4(3,1,1,1),new Vector4(1,1,1,1),new Vector4(3,0,1,1),new Vector4(1,0,1,1)],this._cubeDirections=[new Vector3(1,0,0),new Vector3(-1,0,0),new Vector3(0,0,1),new Vector3(0,0,-1),new Vector3(0,1,0),new Vector3(0,-1,0)],this._cubeUps=[new Vector3(0,1,0),new Vector3(0,1,0),new Vector3(0,1,0),new Vector3(0,1,0),new Vector3(0,0,1),new Vector3(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,a=e.distance||n.far;a!==n.far&&(n.far=a,n.updateProjectionMatrix()),_lightPositionWorld.setFromMatrixPosition(e.matrixWorld),n.position.copy(_lightPositionWorld),_lookTarget.copy(n.position),_lookTarget.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(_lookTarget),n.updateMatrixWorld(),i.makeTranslation(-_lightPositionWorld.x,-_lightPositionWorld.y,-_lightPositionWorld.z),_projScreenMatrix.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_projScreenMatrix)}}class PointLight extends Light{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new PointLightShadow}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class AmbientLight extends Light{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Spherical{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(clamp$1(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:REVISION}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=REVISION);class AssertionError extends Error{constructor(e,t){if(t instanceof HTMLElement){const n=Array.from(t.attributes).find(i=>i.name==="id");t=`${t.constructor.name}${n?"#"+n:""}`}super(`Not a ${e}: `+t)}}function isDefined(r){if(r==null||r==null)throw new Error("Value is not defined")}function isHTMLCanvasElement(r){if(!(r instanceof HTMLCanvasElement))throw new AssertionError(HTMLCanvasElement.name,r)}function isHTMLVideoElement(r){if(!(r instanceof HTMLVideoElement))throw new AssertionError(HTMLVideoElement.name,r)}function isHTMLDialogElement(r){if(!(r instanceof HTMLDialogElement))throw new AssertionError(HTMLDialogElement.name,r)}function isHTMLInputElement(r){if(!(r instanceof HTMLInputElement))throw new AssertionError(HTMLInputElement.name,r)}function isColorString(r){if(!(typeof r=="string"&&["red","orange","blue","white","green","yellow"].includes(r)))throw new AssertionError("ColorString",r)}function assertExists(r){return isDefined(r),r}function assertHTMLCanvasElement(r){return isHTMLCanvasElement(r),r}function assertHTMLVideoElement(r){return isHTMLVideoElement(r),r}function assertHTMLDialogElement(r){return isHTMLDialogElement(r),r}function assertHTMLInputElement(r){return isHTMLInputElement(r),r}function assertColorString(r){return isColorString(r),r}const Side={RIGHT:0,LEFT:1,TOP:2,BOTTOM:3,FRONT:4,BACK:5},Orientation={X:"x",Y:"y",Z:"z"},CubeLayer={FRONT:"front",BACK:"back",LEFT:"left",RIGHT:"right",TOP:"top",BOTTOM:"bottom",M:"m",E:"e",S:"s"},Direction={UP:"up",DOWN:"down",LEFT:"left",RIGHT:"right",TILT_LEFT:"tilt-left",TILT_RIGHT:"tilt-right"},Cube={TOP_LEFT:0,TOP:1,TOP_RIGHT:2,LEFT:3,CENTER:4,RIGHT:5,BOTTOM_LEFT:6,BOTTOM:7,BOTTOM_RIGHT:8},Layer={FRONT:0,MIDDLE:1,BACK:2},Color={BLACK:[0,0,0],WHITE:[1,1,1],RED:[1,0,0],GREEN:[0,1,0],BLUE:[0,.2,1],YELLOW:[1,1,0],ORANGE:[1,.5,0]},ColorNumber={BLACK:0,WHITE:1,RED:2,GREEN:3,BLUE:4,YELLOW:5,ORANGE:6},Notation={NONE:0,L:1,Lp:2,L2:3,R:4,Rp:5,R2:6,F:7,Fp:8,F2:9,B:10,Bp:11,B2:12,U:13,Up:14,U2:15,D:16,Dp:17,D2:18,M:19,Mp:20,M2:21,E:22,Ep:23,E2:24,S:25,Sp:26,S2:27,x:28,xp:29,x2:30,y:31,yp:32,y2:33,z:34,zp:35,z2:36},next=assertExists(document.getElementById("next")),cubeColors=[],innerCubeMaterials=[],layers=new Group,autoplay=assertHTMLInputElement(document.getElementById("autoplay"));function _assertThisInitialized(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function _inheritsLoose(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var _config={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},_defaults={duration:.5,overwrite:!1,delay:0},_suppressOverwrites,_reverting$1,_context,_bigNum$1=1e8,_tinyNum=1/_bigNum$1,_2PI=Math.PI*2,_HALF_PI=_2PI/4,_gsID=0,_sqrt=Math.sqrt,_cos=Math.cos,_sin=Math.sin,_isString=function(e){return typeof e=="string"},_isFunction=function(e){return typeof e=="function"},_isNumber=function(e){return typeof e=="number"},_isUndefined=function(e){return typeof e>"u"},_isObject=function(e){return typeof e=="object"},_isNotFalse=function(e){return e!==!1},_windowExists$1=function(){return typeof window<"u"},_isFuncOrString=function(e){return _isFunction(e)||_isString(e)},_isTypedArray=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},_isArray=Array.isArray,_strictNumExp=/(?:-?\.?\d|\.)+/gi,_numExp=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,_numWithUnitExp=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,_complexStringNumExp=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,_relExp=/[+-]=-?[.\d]+/,_delimitedValueExp=/[^,'"\[\]\s]+/gi,_unitExp=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,_globalTimeline,_win$1,_coreInitted,_doc$1,_globals={},_installScope={},_coreReady,_install=function(e){return(_installScope=_merge(e,_globals))&&gsap},_missingPlugin=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},_warn=function(e,t){return!t&&console.warn(e)},_addGlobal=function(e,t){return e&&(_globals[e]=t)&&_installScope&&(_installScope[e]=t)||_globals},_emptyFunc=function(){return 0},_startAtRevertConfig={suppressEvents:!0,isStart:!0,kill:!1},_revertConfigNoKill={suppressEvents:!0,kill:!1},_revertConfig={suppressEvents:!0},_reservedProps={},_lazyTweens=[],_lazyLookup={},_lastRenderedFrame,_plugins={},_effects={},_nextGCFrame=30,_harnessPlugins=[],_callbackNames="",_harness=function(e){var t=e[0],n,i;if(_isObject(t)||_isFunction(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=_harnessPlugins.length;i--&&!_harnessPlugins[i].targetTest(t););n=_harnessPlugins[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new GSCache(e[i],n)))||e.splice(i,1);return e},_getCache=function(e){return e._gsap||_harness(toArray(e))[0]._gsap},_getProperty=function(e,t,n){return(n=e[t])&&_isFunction(n)?e[t]():_isUndefined(n)&&e.getAttribute&&e.getAttribute(t)||n},_forEachName=function(e,t){return(e=e.split(",")).forEach(t)||e},_round=function(e){return Math.round(e*1e5)/1e5||0},_roundPrecise=function(e){return Math.round(e*1e7)/1e7||0},_parseRelative=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},_arrayContainsAny=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},_lazyRender=function(){var e=_lazyTweens.length,t=_lazyTweens.slice(0),n,i;for(_lazyLookup={},_lazyTweens.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},_lazySafeRender=function(e,t,n,i){_lazyTweens.length&&!_reverting$1&&_lazyRender(),e.render(t,n,i||_reverting$1&&t<0&&(e._initted||e._startAt)),_lazyTweens.length&&!_reverting$1&&_lazyRender()},_numericIfPossible=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(_delimitedValueExp).length<2?t:_isString(e)?e.trim():e},_passThrough=function(e){return e},_setDefaults=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},_setKeyframeDefaults=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},_merge=function(e,t){for(var n in t)e[n]=t[n];return e},_mergeDeep=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=_isObject(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},_copyExcluding=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},_inheritDefaults=function(e){var t=e.parent||_globalTimeline,n=e.keyframes?_setKeyframeDefaults(_isArray(e.keyframes)):_setDefaults;if(_isNotFalse(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},_arraysMatch=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},_addLinkedListItem=function(e,t,n,i,a){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e[i],o;if(a)for(o=t[a];s&&s[a]>o;)s=s._prev;return s?(t._next=s._next,s._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=s,t.parent=t._dp=e,t},_removeLinkedListItem=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=t._prev,s=t._next;a?a._next=s:e[n]===t&&(e[n]=s),s?s._prev=a:e[i]===t&&(e[i]=a),t._next=t._prev=t.parent=null},_removeFromParent=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},_uncache=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},_recacheAncestors=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},_rewindStartAt=function(e,t,n,i){return e._startAt&&(_reverting$1?e._startAt.revert(_revertConfigNoKill):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},_hasNoPausedAncestors=function r(e){return!e||e._ts&&r(e.parent)},_elapsedCycleDuration=function(e){return e._repeat?_animationCycle(e._tTime,e=e.duration()+e._rDelay)*e:0},_animationCycle=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},_parentToChildTotalTime=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},_setEnd=function(e){return e._end=_roundPrecise(e._start+(e._tDur/Math.abs(e._ts||e._rts||_tinyNum)||0))},_alignPlayhead=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=_roundPrecise(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),_setEnd(e),n._dirty||_uncache(n,e)),e},_postAddChecks=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=_parentToChildTotalTime(e.rawTime(),t),(!t._dur||_clamp(0,t.totalDuration(),n)-t._tTime>_tinyNum)&&t.render(n,!0)),_uncache(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-_tinyNum}},_addToTimeline=function(e,t,n,i){return t.parent&&_removeFromParent(t),t._start=_roundPrecise((_isNumber(n)?n:n||e!==_globalTimeline?_parsePosition(e,n,t):e._time)+t._delay),t._end=_roundPrecise(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),_addLinkedListItem(e,t,"_first","_last",e._sort?"_start":0),_isFromOrFromStart(t)||(e._recent=t),i||_postAddChecks(e,t),e._ts<0&&_alignPlayhead(e,e._tTime),e},_scrollTrigger=function(e,t){return(_globals.ScrollTrigger||_missingPlugin("scrollTrigger",t))&&_globals.ScrollTrigger.create(t,e)},_attemptInitTween=function(e,t,n,i,a){if(_initTween(e,t,a),!e._initted)return 1;if(!n&&e._pt&&!_reverting$1&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&_lastRenderedFrame!==_ticker.frame)return _lazyTweens.push(e),e._lazy=[a,i],1},_parentPlayheadIsBeforeStart=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},_isFromOrFromStart=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},_renderZeroDurationTween=function(e,t,n,i){var a=e.ratio,s=t<0||!t&&(!e._start&&_parentPlayheadIsBeforeStart(e)&&!(!e._initted&&_isFromOrFromStart(e))||(e._ts<0||e._dp._ts<0)&&!_isFromOrFromStart(e))?0:1,o=e._rDelay,l=0,c,u,h;if(o&&e._repeat&&(l=_clamp(0,e._tDur,t),u=_animationCycle(l,o),e._yoyo&&u&1&&(s=1-s),u!==_animationCycle(e._tTime,o)&&(a=1-s,e.vars.repeatRefresh&&e._initted&&e.invalidate())),s!==a||_reverting$1||i||e._zTime===_tinyNum||!t&&e._zTime){if(!e._initted&&_attemptInitTween(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?_tinyNum:0),n||(n=t&&!h),e.ratio=s,e._from&&(s=1-s),e._time=0,e._tTime=l,c=e._pt;c;)c.r(s,c.d),c=c._next;t<0&&_rewindStartAt(e,t,n,!0),e._onUpdate&&!n&&_callback(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&_callback(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===s&&(s&&_removeFromParent(e,1),!n&&!_reverting$1&&(_callback(e,s?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},_findNextPauseTween=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},_setDuration=function(e,t,n,i){var a=e._repeat,s=_roundPrecise(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=s/e._dur),e._dur=s,e._tDur=a?a<0?1e10:_roundPrecise(s*(a+1)+e._rDelay*a):s,o>0&&!i&&_alignPlayhead(e,e._tTime=e._tDur*o),e.parent&&_setEnd(e),n||_uncache(e.parent,e),e},_onUpdateTotalDuration=function(e){return e instanceof Timeline?_uncache(e):_setDuration(e,e._dur)},_zeroPosition={_start:0,endTime:_emptyFunc,totalDuration:_emptyFunc},_parsePosition=function r(e,t,n){var i=e.labels,a=e._recent||_zeroPosition,s=e.duration()>=_bigNum$1?a.endTime(!1):e._dur,o,l,c;return _isString(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?a._start:a.endTime(a._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?a:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=s),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(_isArray(n)?n[0]:n).totalDuration()),o>1?r(e,t.substr(0,o-1),n)+l:s+l)):t==null?s:+t},_createTweenType=function(e,t,n){var i=_isNumber(t[1]),a=(i?2:1)+(e<2?0:1),s=t[a],o,l;if(i&&(s.duration=t[1]),s.parent=n,e){for(o=s,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=_isNotFalse(l.vars.inherit)&&l.parent;s.immediateRender=_isNotFalse(o.immediateRender),e<2?s.runBackwards=1:s.startAt=t[a-1]}return new Tween(t[0],s,t[a+1])},_conditionalReturn=function(e,t){return e||e===0?t(e):t},_clamp=function(e,t,n){return n<e?e:n>t?t:n},getUnit=function(e,t){return!_isString(e)||!(t=_unitExp.exec(e))?"":t[1]},clamp=function(e,t,n){return _conditionalReturn(n,function(i){return _clamp(e,t,i)})},_slice=[].slice,_isArrayLike=function(e,t){return e&&_isObject(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&_isObject(e[0]))&&!e.nodeType&&e!==_win$1},_flatten=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var a;return _isString(i)&&!t||_isArrayLike(i,1)?(a=n).push.apply(a,toArray(i)):n.push(i)})||n},toArray=function(e,t,n){return _context&&!t&&_context.selector?_context.selector(e):_isString(e)&&!n&&(_coreInitted||!_wake())?_slice.call((t||_doc$1).querySelectorAll(e),0):_isArray(e)?_flatten(e,n):_isArrayLike(e)?_slice.call(e,0):e?[e]:[]},selector=function(e){return e=toArray(e)[0]||_warn("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return toArray(t,n.querySelectorAll?n:n===e?_warn("Invalid scope")||_doc$1.createElement("div"):e)}},shuffle=function(e){return e.sort(function(){return .5-Math.random()})},distribute=function(e){if(_isFunction(e))return e;var t=_isObject(e)?e:{each:e},n=_parseEase(t.ease),i=t.from||0,a=parseFloat(t.base)||0,s={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,u=i,h=i;return _isString(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],h=i[1]),function(d,f,g){var _=(g||t).length,m=s[_],p,v,T,x,y,A,b,w,S;if(!m){if(S=t.grid==="auto"?0:(t.grid||[1,_bigNum$1])[1],!S){for(b=-_bigNum$1;b<(b=g[S++].getBoundingClientRect().left)&&S<_;);S--}for(m=s[_]=[],p=l?Math.min(S,_)*u-.5:i%S,v=S===_bigNum$1?0:l?_*h/S-.5:i/S|0,b=0,w=_bigNum$1,A=0;A<_;A++)T=A%S-p,x=v-(A/S|0),m[A]=y=c?Math.abs(c==="y"?x:T):_sqrt(T*T+x*x),y>b&&(b=y),y<w&&(w=y);i==="random"&&shuffle(m),m.max=b-w,m.min=w,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(S>_?_-1:c?c==="y"?_/S:S:Math.max(S,_/S))||0)*(i==="edges"?-1:1),m.b=_<0?a-_:a,m.u=getUnit(t.amount||t.each)||0,n=n&&_<0?_invertEase(n):n}return _=(m[d]-m.min)/m.max||0,_roundPrecise(m.b+(n?n(_):_)*m.v)+m.u}},_roundModifier=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=_roundPrecise(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(_isNumber(n)?0:getUnit(n))}},snap=function(e,t){var n=_isArray(e),i,a;return!n&&_isObject(e)&&(i=n=e.radius||_bigNum$1,e.values?(e=toArray(e.values),(a=!_isNumber(e[0]))&&(i*=i)):e=_roundModifier(e.increment)),_conditionalReturn(t,n?_isFunction(e)?function(s){return a=e(s),Math.abs(a-s)<=i?a:s}:function(s){for(var o=parseFloat(a?s.x:s),l=parseFloat(a?s.y:0),c=_bigNum$1,u=0,h=e.length,d,f;h--;)a?(d=e[h].x-o,f=e[h].y-l,d=d*d+f*f):d=Math.abs(e[h]-o),d<c&&(c=d,u=h);return u=!i||c<=i?e[u]:s,a||u===s||_isNumber(s)?u:u+getUnit(s)}:_roundModifier(e))},random=function(e,t,n,i){return _conditionalReturn(_isArray(e)?!t:n===!0?!!(n=0):!i,function(){return _isArray(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},pipe=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(a,s){return s(a)},i)}},unitize=function(e,t){return function(n){return e(parseFloat(n))+(t||getUnit(n))}},normalize=function(e,t,n){return mapRange(e,t,0,1,n)},_wrapArray=function(e,t,n){return _conditionalReturn(n,function(i){return e[~~t(i)]})},wrap=function r(e,t,n){var i=t-e;return _isArray(e)?_wrapArray(e,r(0,e.length),t):_conditionalReturn(n,function(a){return(i+(a-e)%i)%i+e})},wrapYoyo=function r(e,t,n){var i=t-e,a=i*2;return _isArray(e)?_wrapArray(e,r(0,e.length-1),t):_conditionalReturn(n,function(s){return s=(a+(s-e)%a)%a||0,e+(s>i?a-s:s)})},_replaceRandom=function(e){for(var t=0,n="",i,a,s,o;~(i=e.indexOf("random(",t));)s=e.indexOf(")",i),o=e.charAt(i+7)==="[",a=e.substr(i+7,s-i-7).match(o?_delimitedValueExp:_strictNumExp),n+=e.substr(t,i-t)+random(o?a:+a[0],o?0:+a[1],+a[2]||1e-5),t=s+1;return n+e.substr(t,e.length-t)},mapRange=function(e,t,n,i,a){var s=t-e,o=i-n;return _conditionalReturn(a,function(l){return n+((l-e)/s*o||0)})},interpolate=function r(e,t,n,i){var a=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!a){var s=_isString(e),o={},l,c,u,h,d;if(n===!0&&(i=1)&&(n=null),s)e={p:e},t={p:t};else if(_isArray(e)&&!_isArray(t)){for(u=[],h=e.length,d=h-2,c=1;c<h;c++)u.push(r(e[c-1],e[c]));h--,a=function(g){g*=h;var _=Math.min(d,~~g);return u[_](g-_)},n=t}else i||(e=_merge(_isArray(e)?[]:{},e));if(!u){for(l in t)_addPropTween.call(o,e,l,"get",t[l]);a=function(g){return _renderPropTweens(g,o)||(s?e.p:e)}}}return _conditionalReturn(n,a)},_getLabelInDirection=function(e,t,n){var i=e.labels,a=_bigNum$1,s,o,l;for(s in i)o=i[s]-t,o<0==!!n&&o&&a>(o=Math.abs(o))&&(l=s,a=o);return l},_callback=function(e,t,n){var i=e.vars,a=i[t],s=_context,o=e._ctx,l,c,u;if(a)return l=i[t+"Params"],c=i.callbackScope||e,n&&_lazyTweens.length&&_lazyRender(),o&&(_context=o),u=l?a.apply(c,l):a.call(c),_context=s,u},_interrupt=function(e){return _removeFromParent(e),e.scrollTrigger&&e.scrollTrigger.kill(!!_reverting$1),e.progress()<1&&_callback(e,"onInterrupt"),e},_quickTween,_registerPluginQueue=[],_createPlugin=function(e){if(_windowExists$1()&&e){e=!e.name&&e.default||e;var t=e.name,n=_isFunction(e),i=t&&!n&&e.init?function(){this._props=[]}:e,a={init:_emptyFunc,render:_renderPropTweens,add:_addPropTween,kill:_killPropTweensOf,modifier:_addPluginModifier,rawVars:0},s={targetTest:0,get:0,getSetter:_getSetter,aliases:{},register:0};if(_wake(),e!==i){if(_plugins[t])return;_setDefaults(i,_setDefaults(_copyExcluding(e,a),s)),_merge(i.prototype,_merge(a,_copyExcluding(e,s))),_plugins[i.prop=t]=i,e.targetTest&&(_harnessPlugins.push(i),_reservedProps[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}_addGlobal(t,i),e.register&&e.register(gsap,i,PropTween)}else e&&_registerPluginQueue.push(e)},_255=255,_colorLookup={aqua:[0,_255,_255],lime:[0,_255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,_255],navy:[0,0,128],white:[_255,_255,_255],olive:[128,128,0],yellow:[_255,_255,0],orange:[_255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[_255,0,0],pink:[_255,192,203],cyan:[0,_255,_255],transparent:[_255,_255,_255,0]},_hue=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*_255+.5|0},splitColor=function(e,t,n){var i=e?_isNumber(e)?[e>>16,e>>8&_255,e&_255]:0:_colorLookup.black,a,s,o,l,c,u,h,d,f,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),_colorLookup[e])i=_colorLookup[e];else if(e.charAt(0)==="#"){if(e.length<6&&(a=e.charAt(1),s=e.charAt(2),o=e.charAt(3),e="#"+a+a+s+s+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&_255,i&_255,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&_255,e&_255]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(_strictNumExp),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,s=u<=.5?u*(c+1):u+c-u*c,a=u*2-s,i.length>3&&(i[3]*=1),i[0]=_hue(l+1/3,a,s),i[1]=_hue(l,a,s),i[2]=_hue(l-1/3,a,s);else if(~e.indexOf("="))return i=e.match(_numExp),n&&i.length<4&&(i[3]=1),i}else i=e.match(_strictNumExp)||_colorLookup.transparent;i=i.map(Number)}return t&&!g&&(a=i[0]/_255,s=i[1]/_255,o=i[2]/_255,h=Math.max(a,s,o),d=Math.min(a,s,o),u=(h+d)/2,h===d?l=c=0:(f=h-d,c=u>.5?f/(2-h-d):f/(h+d),l=h===a?(s-o)/f+(s<o?6:0):h===s?(o-a)/f+2:(a-s)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},_colorOrderData=function(e){var t=[],n=[],i=-1;return e.split(_colorExp).forEach(function(a){var s=a.match(_numWithUnitExp)||[];t.push.apply(t,s),n.push(i+=s.length+1)}),t.c=n,t},_formatColors=function(e,t,n){var i="",a=(e+i).match(_colorExp),s=t?"hsla(":"rgba(",o=0,l,c,u,h;if(!a)return e;if(a=a.map(function(d){return(d=splitColor(d,t,1))&&s+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(u=_colorOrderData(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(_colorExp,"1").split(_numWithUnitExp),h=c.length-1;o<h;o++)i+=c[o]+(~l.indexOf(o)?a.shift()||s+"0,0,0,0)":(u.length?u:a.length?a:n).shift());if(!c)for(c=e.split(_colorExp),h=c.length-1;o<h;o++)i+=c[o]+a[o];return i+c[h]},_colorExp=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in _colorLookup)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),_hslExp=/hsl[a]?\(/,_colorStringFilter=function(e){var t=e.join(" "),n;if(_colorExp.lastIndex=0,_colorExp.test(t))return n=_hslExp.test(t),e[1]=_formatColors(e[1],n),e[0]=_formatColors(e[0],n,_colorOrderData(e[1])),!0},_tickerActive,_ticker=function(){var r=Date.now,e=500,t=33,n=r(),i=n,a=1e3/240,s=a,o=[],l,c,u,h,d,f,g=function _(m){var p=r()-i,v=m===!0,T,x,y,A;if(p>e&&(n+=p-t),i+=p,y=i-n,T=y-s,(T>0||v)&&(A=++h.frame,d=y-h.time*1e3,h.time=y=y/1e3,s+=T+(T>=a?4:a-T),x=1),v||(l=c(_)),x)for(f=0;f<o.length;f++)o[f](y,d,A,m)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){_coreReady&&(!_coreInitted&&_windowExists$1()&&(_win$1=_coreInitted=window,_doc$1=_win$1.document||{},_globals.gsap=gsap,(_win$1.gsapVersions||(_win$1.gsapVersions=[])).push(gsap.version),_install(_installScope||_win$1.GreenSockGlobals||!_win$1.gsap&&_win$1||{}),u=_win$1.requestAnimationFrame,_registerPluginQueue.forEach(_createPlugin)),l&&h.sleep(),c=u||function(m){return setTimeout(m,s-h.time*1e3+1|0)},_tickerActive=1,g(2))},sleep:function(){(u?_win$1.cancelAnimationFrame:clearTimeout)(l),_tickerActive=0,c=_emptyFunc},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){a=1e3/(m||240),s=h.time*1e3+a},add:function(m,p,v){var T=p?function(x,y,A,b){m(x,y,A,b),h.remove(T)}:m;return h.remove(m),o[v?"unshift":"push"](T),_wake(),T},remove:function(m,p){~(p=o.indexOf(m))&&o.splice(p,1)&&f>=p&&f--},_listeners:o},h}(),_wake=function(){return!_tickerActive&&_ticker.wake()},_easeMap={},_customEaseExp=/^[\d.\-M][\d.\-,\s]/,_quotesExp=/["']/g,_parseObjectInString=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],a=1,s=n.length,o,l,c;a<s;a++)l=n[a],o=a!==s-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(_quotesExp,"").trim():+c,i=l.substr(o+1).trim();return t},_valueInParentheses=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},_configEaseFromString=function(e){var t=(e+"").split("("),n=_easeMap[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[_parseObjectInString(t[1])]:_valueInParentheses(e).split(",").map(_numericIfPossible)):_easeMap._CE&&_customEaseExp.test(e)?_easeMap._CE("",e):n},_invertEase=function(e){return function(t){return 1-e(1-t)}},_propagateYoyoEase=function r(e,t){for(var n=e._first,i;n;)n instanceof Timeline?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},_parseEase=function(e,t){return e&&(_isFunction(e)?e:_easeMap[e]||_configEaseFromString(e))||t},_insertEase=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var a={easeIn:t,easeOut:n,easeInOut:i},s;return _forEachName(e,function(o){_easeMap[o]=_globals[o]=a,_easeMap[s=o.toLowerCase()]=n;for(var l in a)_easeMap[s+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=_easeMap[o+"."+l]=a[l]}),a},_easeInOutFromOut=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},_configElastic=function r(e,t,n){var i=t>=1?t:1,a=(n||(e?.3:.45))/(t<1?t:1),s=a/_2PI*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*_sin((u-s)*a)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:_easeInOutFromOut(o);return a=_2PI/a,l.config=function(c,u){return r(e,c,u)},l},_configBack=function r(e,t){t===void 0&&(t=1.70158);var n=function(s){return s?--s*s*((t+1)*s+t)+1:0},i=e==="out"?n:e==="in"?function(a){return 1-n(1-a)}:_easeInOutFromOut(n);return i.config=function(a){return r(e,a)},i};_forEachName("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;_insertEase(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});_easeMap.Linear.easeNone=_easeMap.none=_easeMap.Linear.easeIn;_insertEase("Elastic",_configElastic("in"),_configElastic("out"),_configElastic());(function(r,e){var t=1/e,n=2*t,i=2.5*t,a=function(o){return o<t?r*o*o:o<n?r*Math.pow(o-1.5/e,2)+.75:o<i?r*(o-=2.25/e)*o+.9375:r*Math.pow(o-2.625/e,2)+.984375};_insertEase("Bounce",function(s){return 1-a(1-s)},a)})(7.5625,2.75);_insertEase("Expo",function(r){return r?Math.pow(2,10*(r-1)):0});_insertEase("Circ",function(r){return-(_sqrt(1-r*r)-1)});_insertEase("Sine",function(r){return r===1?1:-_cos(r*_HALF_PI)+1});_insertEase("Back",_configBack("in"),_configBack("out"),_configBack());_easeMap.SteppedEase=_easeMap.steps=_globals.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),a=t?1:0,s=1-_tinyNum;return function(o){return((i*_clamp(0,s,o)|0)+a)*n}}};_defaults.ease=_easeMap["quad.out"];_forEachName("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return _callbackNames+=r+","+r+"Params,"});var GSCache=function(e,t){this.id=_gsID++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:_getProperty,this.set=t?t.getSetter:_getSetter},Animation=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,_setDuration(this,+t.duration,1,1),this.data=t.data,_context&&(this._ctx=_context,_context.data.push(this)),_tickerActive||_ticker.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,_setDuration(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(_wake(),!arguments.length)return this._tTime;var a=this._dp;if(a&&a.smoothChildTiming&&this._ts){for(_alignPlayhead(this,n),!a._dp||a.parent||_postAddChecks(a,this);a&&a.parent;)a.parent._time!==a._start+(a._ts>=0?a._tTime/a._ts:(a.totalDuration()-a._tTime)/-a._ts)&&a.totalTime(a._tTime,!0),a=a.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&_addToTimeline(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===_tinyNum||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),_lazySafeRender(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+_elapsedCycleDuration(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+_elapsedCycleDuration(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(n,i){var a=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*a,i):this._repeat?_animationCycle(this._tTime,a)+1:1},e.timeScale=function(n){if(!arguments.length)return this._rts===-_tinyNum?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?_parentToChildTotalTime(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-_tinyNum?0:this._rts,this.totalTime(_clamp(-Math.abs(this._delay),this._tDur,i),!0),_setEnd(this),_recacheAncestors(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(_wake(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==_tinyNum&&(this._tTime-=_tinyNum)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&_addToTimeline(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(_isNotFalse(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?_parentToChildTotalTime(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=_revertConfig);var i=_reverting$1;return _reverting$1=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),_reverting$1=i,this},e.globalTime=function(n){for(var i=this,a=arguments.length?n:i.rawTime();i;)a=i._start+a/(i._ts||1),i=i._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1/0:this._sat.globalTime(n):a},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,_onUpdateTotalDuration(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,_onUpdateTotalDuration(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(_parsePosition(this,n),_isNotFalse(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,_isNotFalse(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-_tinyNum:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-_tinyNum,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,a;return!!(!n||this._ts&&this._initted&&n.isActive()&&(a=n.rawTime(!0))>=i&&a<this.endTime(!0)-_tinyNum)},e.eventCallback=function(n,i,a){var s=this.vars;return arguments.length>1?(i?(s[n]=i,a&&(s[n+"Params"]=a),n==="onUpdate"&&(this._onUpdate=i)):delete s[n],this):s[n]},e.then=function(n){var i=this;return new Promise(function(a){var s=_isFunction(n)?n:_passThrough,o=function(){var c=i.then;i.then=null,_isFunction(s)&&(s=s(i))&&(s.then||s===i)&&(i.then=c),a(s),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?o():i._prom=o})},e.kill=function(){_interrupt(this)},r}();_setDefaults(Animation.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-_tinyNum,_prom:0,_ps:!1,_rts:1});var Timeline=function(r){_inheritsLoose(e,r);function e(n,i){var a;return n===void 0&&(n={}),a=r.call(this,n)||this,a.labels={},a.smoothChildTiming=!!n.smoothChildTiming,a.autoRemoveChildren=!!n.autoRemoveChildren,a._sort=_isNotFalse(n.sortChildren),_globalTimeline&&_addToTimeline(n.parent||_globalTimeline,_assertThisInitialized(a),i),n.reversed&&a.reverse(),n.paused&&a.paused(!0),n.scrollTrigger&&_scrollTrigger(_assertThisInitialized(a),n.scrollTrigger),a}var t=e.prototype;return t.to=function(i,a,s){return _createTweenType(0,arguments,this),this},t.from=function(i,a,s){return _createTweenType(1,arguments,this),this},t.fromTo=function(i,a,s,o){return _createTweenType(2,arguments,this),this},t.set=function(i,a,s){return a.duration=0,a.parent=this,_inheritDefaults(a).repeatDelay||(a.repeat=0),a.immediateRender=!!a.immediateRender,new Tween(i,a,_parsePosition(this,s),1),this},t.call=function(i,a,s){return _addToTimeline(this,Tween.delayedCall(0,i,a),s)},t.staggerTo=function(i,a,s,o,l,c,u){return s.duration=a,s.stagger=s.stagger||o,s.onComplete=c,s.onCompleteParams=u,s.parent=this,new Tween(i,s,_parsePosition(this,l)),this},t.staggerFrom=function(i,a,s,o,l,c,u){return s.runBackwards=1,_inheritDefaults(s).immediateRender=_isNotFalse(s.immediateRender),this.staggerTo(i,a,s,o,l,c,u)},t.staggerFromTo=function(i,a,s,o,l,c,u,h){return o.startAt=s,_inheritDefaults(o).immediateRender=_isNotFalse(o.immediateRender),this.staggerTo(i,a,o,l,c,u,h)},t.render=function(i,a,s){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:_roundPrecise(i),h=this._zTime<0!=i<0&&(this._initted||!c),d,f,g,_,m,p,v,T,x,y,A,b;if(this!==_globalTimeline&&u>l&&i>=0&&(u=l),u!==this._tTime||s||h){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),d=u,x=this._start,T=this._ts,p=!T,h&&(c||(o=this._zTime),(i||!a)&&(this._zTime=i)),this._repeat){if(A=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,a,s);if(d=_roundPrecise(u%m),u===l?(_=this._repeat,d=c):(_=~~(u/m),_&&_===u/m&&(d=c,_--),d>c&&(d=c)),y=_animationCycle(this._tTime,m),!o&&this._tTime&&y!==_&&this._tTime-y*m-this._dur<=0&&(y=_),A&&_&1&&(d=c-d,b=1),_!==y&&!this._lock){var w=A&&y&1,S=w===(A&&_&1);if(_<y&&(w=!w),o=w?0:u%c?c:u,this._lock=1,this.render(o||(b?0:_roundPrecise(_*m)),a,!c)._lock=0,this._tTime=u,!a&&this.parent&&_callback(this,"onRepeat"),this.vars.repeatRefresh&&!b&&(this.invalidate()._lock=1),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,S&&(this._lock=2,o=w?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!b&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;_propagateYoyoEase(this,b)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=_findNextPauseTween(this,_roundPrecise(o),_roundPrecise(d)),v&&(u-=d-(d=v._start))),this._tTime=u,this._time=d,this._act=!T,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&d&&!a&&!_&&(_callback(this,"onStart"),this._tTime!==u))return this;if(d>=o&&i>=0)for(f=this._first;f;){if(g=f._next,(f._act||d>=f._start)&&f._ts&&v!==f){if(f.parent!==this)return this.render(i,a,s);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,a,s),d!==this._time||!this._ts&&!p){v=0,g&&(u+=this._zTime=-_tinyNum);break}}f=g}else{f=this._last;for(var C=i<0?i:d;f;){if(g=f._prev,(f._act||C<=f._end)&&f._ts&&v!==f){if(f.parent!==this)return this.render(i,a,s);if(f.render(f._ts>0?(C-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(C-f._start)*f._ts,a,s||_reverting$1&&(f._initted||f._startAt)),d!==this._time||!this._ts&&!p){v=0,g&&(u+=this._zTime=C?-_tinyNum:_tinyNum);break}}f=g}}if(v&&!a&&(this.pause(),v.render(d>=o?0:-_tinyNum)._zTime=d>=o?1:-1,this._ts))return this._start=x,_setEnd(this),this.render(i,a,s);this._onUpdate&&!a&&_callback(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(x===this._start||Math.abs(T)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&_removeFromParent(this,1),!a&&!(i<0&&!o)&&(u||o||!l)&&(_callback(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,a){var s=this;if(_isNumber(a)||(a=_parsePosition(this,a,i)),!(i instanceof Animation)){if(_isArray(i))return i.forEach(function(o){return s.add(o,a)}),this;if(_isString(i))return this.addLabel(i,a);if(_isFunction(i))i=Tween.delayedCall(0,i);else return this}return this!==i?_addToTimeline(this,i,a):this},t.getChildren=function(i,a,s,o){i===void 0&&(i=!0),a===void 0&&(a=!0),s===void 0&&(s=!0),o===void 0&&(o=-_bigNum$1);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Tween?a&&l.push(c):(s&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,a,s)))),c=c._next;return l},t.getById=function(i){for(var a=this.getChildren(1,1,1),s=a.length;s--;)if(a[s].vars.id===i)return a[s]},t.remove=function(i){return _isString(i)?this.removeLabel(i):_isFunction(i)?this.killTweensOf(i):(_removeLinkedListItem(this,i),i===this._recent&&(this._recent=this._last),_uncache(this))},t.totalTime=function(i,a){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=_roundPrecise(_ticker.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,a),this._forcing=0,this):this._tTime},t.addLabel=function(i,a){return this.labels[i]=_parsePosition(this,a),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,a,s){var o=Tween.delayedCall(0,a||_emptyFunc,s);return o.data="isPause",this._hasPause=1,_addToTimeline(this,o,_parsePosition(this,i))},t.removePause=function(i){var a=this._first;for(i=_parsePosition(this,i);a;)a._start===i&&a.data==="isPause"&&_removeFromParent(a),a=a._next},t.killTweensOf=function(i,a,s){for(var o=this.getTweensOf(i,s),l=o.length;l--;)_overwritingTween!==o[l]&&o[l].kill(i,a);return this},t.getTweensOf=function(i,a){for(var s=[],o=toArray(i),l=this._first,c=_isNumber(a),u;l;)l instanceof Tween?_arrayContainsAny(l._targets,o)&&(c?(!_overwritingTween||l._initted&&l._ts)&&l.globalTime(0)<=a&&l.globalTime(l.totalDuration())>a:!a||l.isActive())&&s.push(l):(u=l.getTweensOf(o,a)).length&&s.push.apply(s,u),l=l._next;return s},t.tweenTo=function(i,a){a=a||{};var s=this,o=_parsePosition(s,i),l=a,c=l.startAt,u=l.onStart,h=l.onStartParams,d=l.immediateRender,f,g=Tween.to(s,_setDefaults({ease:a.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:a.duration||Math.abs((o-(c&&"time"in c?c.time:s._time))/s.timeScale())||_tinyNum,onStart:function(){if(s.pause(),!f){var m=a.duration||Math.abs((o-(c&&"time"in c?c.time:s._time))/s.timeScale());g._dur!==m&&_setDuration(g,m,0,1).render(g._time,!0,!0),f=1}u&&u.apply(g,h||[])}},a));return d?g.render(0):g},t.tweenFromTo=function(i,a,s){return this.tweenTo(a,_setDefaults({startAt:{time:_parsePosition(this,i)}},s))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),_getLabelInDirection(this,_parsePosition(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),_getLabelInDirection(this,_parsePosition(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+_tinyNum)},t.shiftChildren=function(i,a,s){s===void 0&&(s=0);for(var o=this._first,l=this.labels,c;o;)o._start>=s&&(o._start+=i,o._end+=i),o=o._next;if(a)for(c in l)l[c]>=s&&(l[c]+=i);return _uncache(this)},t.invalidate=function(i){var a=this._first;for(this._lock=0;a;)a.invalidate(i),a=a._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var a=this._first,s;a;)s=a._next,this.remove(a),a=s;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),_uncache(this)},t.totalDuration=function(i){var a=0,s=this,o=s._last,l=_bigNum$1,c,u,h;if(arguments.length)return s.timeScale((s._repeat<0?s.duration():s.totalDuration())/(s.reversed()?-i:i));if(s._dirty){for(h=s.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&s._sort&&o._ts&&!s._lock?(s._lock=1,_addToTimeline(s,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(a-=u,(!h&&!s._dp||h&&h.smoothChildTiming)&&(s._start+=u/s._ts,s._time-=u,s._tTime-=u),s.shiftChildren(-u,!1,-1/0),l=0),o._end>a&&o._ts&&(a=o._end),o=c;_setDuration(s,s===_globalTimeline&&s._time>a?s._time:a,1,1),s._dirty=0}return s._tDur},e.updateRoot=function(i){if(_globalTimeline._ts&&(_lazySafeRender(_globalTimeline,_parentToChildTotalTime(i,_globalTimeline)),_lastRenderedFrame=_ticker.frame),_ticker.frame>=_nextGCFrame){_nextGCFrame+=_config.autoSleep||120;var a=_globalTimeline._first;if((!a||!a._ts)&&_config.autoSleep&&_ticker._listeners.length<2){for(;a&&!a._ts;)a=a._next;a||_ticker.sleep()}}},e}(Animation);_setDefaults(Timeline.prototype,{_lock:0,_hasPause:0,_forcing:0});var _addComplexStringPropTween=function(e,t,n,i,a,s,o){var l=new PropTween(this._pt,e,t,0,1,_renderComplexString,null,a),c=0,u=0,h,d,f,g,_,m,p,v;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=_replaceRandom(i)),s&&(v=[n,i],s(v,e,t),n=v[0],i=v[1]),d=n.match(_complexStringNumExp)||[];h=_complexStringNumExp.exec(i);)g=h[0],_=i.substring(c,h.index),f?f=(f+1)%5:_.substr(-5)==="rgba("&&(f=1),g!==d[u++]&&(m=parseFloat(d[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:m,c:g.charAt(1)==="="?_parseRelative(m,g)-m:parseFloat(g)-m,m:f&&f<4?Math.round:0},c=_complexStringNumExp.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(_relExp.test(i)||p)&&(l.e=0),this._pt=l,l},_addPropTween=function(e,t,n,i,a,s,o,l,c,u){_isFunction(i)&&(i=i(a||0,e,s));var h=e[t],d=n!=="get"?n:_isFunction(h)?c?e[t.indexOf("set")||!_isFunction(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,f=_isFunction(h)?c?_setterFuncWithParam:_setterFunc:_setterPlain,g;if(_isString(i)&&(~i.indexOf("random(")&&(i=_replaceRandom(i)),i.charAt(1)==="="&&(g=_parseRelative(d,i)+(getUnit(d)||0),(g||g===0)&&(i=g))),!u||d!==i||_forceAllPropTweens)return!isNaN(d*i)&&i!==""?(g=new PropTween(this._pt,e,t,+d||0,i-(d||0),typeof h=="boolean"?_renderBoolean:_renderPlain,0,f),c&&(g.fp=c),o&&g.modifier(o,this,e),this._pt=g):(!h&&!(t in e)&&_missingPlugin(t,i),_addComplexStringPropTween.call(this,e,t,d,i,f,l||_config.stringFilter,c))},_processVars=function(e,t,n,i,a){if(_isFunction(e)&&(e=_parseFuncOrString(e,a,t,n,i)),!_isObject(e)||e.style&&e.nodeType||_isArray(e)||_isTypedArray(e))return _isString(e)?_parseFuncOrString(e,a,t,n,i):e;var s={},o;for(o in e)s[o]=_parseFuncOrString(e[o],a,t,n,i);return s},_checkPlugin=function(e,t,n,i,a,s){var o,l,c,u;if(_plugins[e]&&(o=new _plugins[e]).init(a,o.rawVars?t[e]:_processVars(t[e],i,a,s,n),n,i,s)!==!1&&(n._pt=l=new PropTween(n._pt,a,e,0,1,o.render,o,0,o.priority),n!==_quickTween))for(c=n._ptLookup[n._targets.indexOf(a)],u=o._props.length;u--;)c[o._props[u]]=l;return o},_overwritingTween,_forceAllPropTweens,_initTween=function r(e,t,n){var i=e.vars,a=i.ease,s=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.onUpdateParams,h=i.callbackScope,d=i.runBackwards,f=i.yoyoEase,g=i.keyframes,_=i.autoRevert,m=e._dur,p=e._startAt,v=e._targets,T=e.parent,x=T&&T.data==="nested"?T.vars.targets:v,y=e._overwrite==="auto"&&!_suppressOverwrites,A=e.timeline,b,w,S,C,k,Z,N,B,I,Y,H,V,K;if(A&&(!g||!a)&&(a="none"),e._ease=_parseEase(a,_defaults.ease),e._yEase=f?_invertEase(_parseEase(f===!0?a:f,_defaults.ease)):0,f&&e._yoyo&&!e._repeat&&(f=e._yEase,e._yEase=e._ease,e._ease=f),e._from=!A&&!!i.runBackwards,!A||g&&!i.stagger){if(B=v[0]?_getCache(v[0]).harness:0,V=B&&i[B.prop],b=_copyExcluding(i,_reservedProps),p&&(p._zTime<0&&p.progress(1),t<0&&d&&o&&!_?p.render(-1,!0):p.revert(d&&m?_revertConfigNoKill:_startAtRevertConfig),p._lazy=0),s){if(_removeFromParent(e._startAt=Tween.set(v,_setDefaults({data:"isStart",overwrite:!1,parent:T,immediateRender:!0,lazy:!p&&_isNotFalse(l),startAt:null,delay:0,onUpdate:c,onUpdateParams:u,callbackScope:h,stagger:0},s))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(_reverting$1||!o&&!_)&&e._startAt.revert(_revertConfigNoKill),o&&m&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(d&&m&&!p){if(t&&(o=!1),S=_setDefaults({overwrite:!1,data:"isFromStart",lazy:o&&!p&&_isNotFalse(l),immediateRender:o,stagger:0,parent:T},b),V&&(S[B.prop]=V),_removeFromParent(e._startAt=Tween.set(v,S)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(_reverting$1?e._startAt.revert(_revertConfigNoKill):e._startAt.render(-1,!0)),e._zTime=t,!o)r(e._startAt,_tinyNum,_tinyNum);else if(!t)return}for(e._pt=e._ptCache=0,l=m&&_isNotFalse(l)||l&&!m,w=0;w<v.length;w++){if(k=v[w],N=k._gsap||_harness(v)[w]._gsap,e._ptLookup[w]=Y={},_lazyLookup[N.id]&&_lazyTweens.length&&_lazyRender(),H=x===v?w:x.indexOf(k),B&&(I=new B).init(k,V||b,e,H,x)!==!1&&(e._pt=C=new PropTween(e._pt,k,I.name,0,1,I.render,I,0,I.priority),I._props.forEach(function(j){Y[j]=C}),I.priority&&(Z=1)),!B||V)for(S in b)_plugins[S]&&(I=_checkPlugin(S,b,e,H,k,x))?I.priority&&(Z=1):Y[S]=C=_addPropTween.call(e,k,S,"get",b[S],H,x,0,i.stringFilter);e._op&&e._op[w]&&e.kill(k,e._op[w]),y&&e._pt&&(_overwritingTween=e,_globalTimeline.killTweensOf(k,Y,e.globalTime(t)),K=!e.parent,_overwritingTween=0),e._pt&&l&&(_lazyLookup[N.id]=1)}Z&&_sortPropTweensByPriority(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!K,g&&t<=0&&A.render(_bigNum$1,!0,!0)},_updatePropTweens=function(e,t,n,i,a,s,o){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,u,h,d;if(!l)for(l=e._ptCache[t]=[],h=e._ptLookup,d=e._targets.length;d--;){if(c=h[d][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return _forceAllPropTweens=1,e.vars[t]="+=0",_initTween(e,o),_forceAllPropTweens=0,1;l.push(c)}for(d=l.length;d--;)u=l[d],c=u._pt||u,c.s=(i||i===0)&&!a?i:c.s+(i||0)+s*c.c,c.c=n-c.s,u.e&&(u.e=_round(n)+getUnit(u.e)),u.b&&(u.b=c.s+getUnit(u.b))},_addAliasesToVars=function(e,t){var n=e[0]?_getCache(e[0]).harness:0,i=n&&n.aliases,a,s,o,l;if(!i)return t;a=_merge({},t);for(s in i)if(s in a)for(l=i[s].split(","),o=l.length;o--;)a[l[o]]=a[s];return a},_parseKeyframe=function(e,t,n,i){var a=t.ease||i||"power1.inOut",s,o;if(_isArray(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:a})});else for(s in t)o=n[s]||(n[s]=[]),s==="ease"||o.push({t:parseFloat(e),v:t[s],e:a})},_parseFuncOrString=function(e,t,n,i,a){return _isFunction(e)?e.call(t,n,i,a):_isString(e)&&~e.indexOf("random(")?_replaceRandom(e):e},_staggerTweenProps=_callbackNames+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",_staggerPropsToSkip={};_forEachName(_staggerTweenProps+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return _staggerPropsToSkip[r]=1});var Tween=function(r){_inheritsLoose(e,r);function e(n,i,a,s){var o;typeof i=="number"&&(a.duration=i,i=a,a=null),o=r.call(this,s?i:_inheritDefaults(i))||this;var l=o.vars,c=l.duration,u=l.delay,h=l.immediateRender,d=l.stagger,f=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,v=i.parent||_globalTimeline,T=(_isArray(n)||_isTypedArray(n)?_isNumber(n[0]):"length"in i)?[n]:toArray(n),x,y,A,b,w,S,C,k;if(o._targets=T.length?_harness(T):_warn("GSAP target "+n+" not found. https://greensock.com",!_config.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=f,g||d||_isFuncOrString(c)||_isFuncOrString(u)){if(i=o.vars,x=o.timeline=new Timeline({data:"nested",defaults:_||{},targets:v&&v.data==="nested"?v.vars.targets:T}),x.kill(),x.parent=x._dp=_assertThisInitialized(o),x._start=0,d||_isFuncOrString(c)||_isFuncOrString(u)){if(b=T.length,C=d&&distribute(d),_isObject(d))for(w in d)~_staggerTweenProps.indexOf(w)&&(k||(k={}),k[w]=d[w]);for(y=0;y<b;y++)A=_copyExcluding(i,_staggerPropsToSkip),A.stagger=0,p&&(A.yoyoEase=p),k&&_merge(A,k),S=T[y],A.duration=+_parseFuncOrString(c,_assertThisInitialized(o),y,S,T),A.delay=(+_parseFuncOrString(u,_assertThisInitialized(o),y,S,T)||0)-o._delay,!d&&b===1&&A.delay&&(o._delay=u=A.delay,o._start+=u,A.delay=0),x.to(S,A,C?C(y,S,T):0),x._ease=_easeMap.none;x.duration()?c=u=0:o.timeline=0}else if(g){_inheritDefaults(_setDefaults(x.vars.defaults,{ease:"none"})),x._ease=_parseEase(g.ease||i.ease||"none");var Z=0,N,B,I;if(_isArray(g))g.forEach(function(Y){return x.to(T,Y,">")}),x.duration();else{A={};for(w in g)w==="ease"||w==="easeEach"||_parseKeyframe(w,g[w],A,g.easeEach);for(w in A)for(N=A[w].sort(function(Y,H){return Y.t-H.t}),Z=0,y=0;y<N.length;y++)B=N[y],I={ease:B.e,duration:(B.t-(y?N[y-1].t:0))/100*c},I[w]=B.v,x.to(T,I,Z),Z+=I.duration;x.duration()<c&&x.to({},{duration:c-x.duration()})}}c||o.duration(c=x.duration())}else o.timeline=0;return f===!0&&!_suppressOverwrites&&(_overwritingTween=_assertThisInitialized(o),_globalTimeline.killTweensOf(T),_overwritingTween=0),_addToTimeline(v,_assertThisInitialized(o),a),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(h||!c&&!g&&o._start===_roundPrecise(v._time)&&_isNotFalse(h)&&_hasNoPausedAncestors(_assertThisInitialized(o))&&v.data!=="nested")&&(o._tTime=-_tinyNum,o.render(Math.max(0,-u)||0)),m&&_scrollTrigger(_assertThisInitialized(o),m),o}var t=e.prototype;return t.render=function(i,a,s){var o=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-_tinyNum&&!u?l:i<_tinyNum?0:i,d,f,g,_,m,p,v,T,x;if(!c)_renderZeroDurationTween(this,i,a,s);else if(h!==this._tTime||!i||s||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(d=h,T=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,a,s);if(d=_roundPrecise(h%_),h===l?(g=this._repeat,d=c):(g=~~(h/_),g&&g===h/_&&(d=c,g--),d>c&&(d=c)),p=this._yoyo&&g&1,p&&(x=this._yEase,d=c-d),m=_animationCycle(this._tTime,_),d===o&&!s&&this._initted)return this._tTime=h,this;g!==m&&(T&&this._yEase&&_propagateYoyoEase(T,p),this.vars.repeatRefresh&&!p&&!this._lock&&(this._lock=s=1,this.render(_roundPrecise(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(_attemptInitTween(this,u?i:d,s,a,h))return this._tTime=0,this;if(o!==this._time)return this;if(c!==this._dur)return this.render(i,a,s)}if(this._tTime=h,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=v=(x||this._ease)(d/c),this._from&&(this.ratio=v=1-v),d&&!o&&!a&&!g&&(_callback(this,"onStart"),this._tTime!==h))return this;for(f=this._pt;f;)f.r(v,f.d),f=f._next;T&&T.render(i<0?i:!d&&p?-_tinyNum:T._dur*T._ease(d/this._dur),a,s)||this._startAt&&(this._zTime=i),this._onUpdate&&!a&&(u&&_rewindStartAt(this,i,a,s),_callback(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!a&&this.parent&&_callback(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&_rewindStartAt(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&_removeFromParent(this,1),!a&&!(u&&!o)&&(h||o||p)&&(_callback(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,a,s,o){_tickerActive||_ticker.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||_initTween(this,l),c=this._ease(l/this._dur),_updatePropTweens(this,i,a,s,o,c,l)?this.resetTo(i,a,s,o):(_alignPlayhead(this,0),this.parent||_addLinkedListItem(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,a){if(a===void 0&&(a="all"),!i&&(!a||a==="all"))return this._lazy=this._pt=0,this.parent?_interrupt(this):this;if(this.timeline){var s=this.timeline.totalDuration();return this.timeline.killTweensOf(i,a,_overwritingTween&&_overwritingTween.vars.overwrite!==!0)._first||_interrupt(this),this.parent&&s!==this.timeline.totalDuration()&&_setDuration(this,this._dur*this.timeline._tDur/s,0,1),this}var o=this._targets,l=i?toArray(i):o,c=this._ptLookup,u=this._pt,h,d,f,g,_,m,p;if((!a||a==="all")&&_arraysMatch(o,l))return a==="all"&&(this._pt=0),_interrupt(this);for(h=this._op=this._op||[],a!=="all"&&(_isString(a)&&(_={},_forEachName(a,function(v){return _[v]=1}),a=_),a=_addAliasesToVars(o,a)),p=o.length;p--;)if(~l.indexOf(o[p])){d=c[p],a==="all"?(h[p]=a,g=d,f={}):(f=h[p]=h[p]||{},g=a);for(_ in g)m=d&&d[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&_removeLinkedListItem(this,m,"_pt"),delete d[_]),f!=="all"&&(f[_]=1)}return this._initted&&!this._pt&&u&&_interrupt(this),this},e.to=function(i,a){return new e(i,a,arguments[2])},e.from=function(i,a){return _createTweenType(1,arguments)},e.delayedCall=function(i,a,s,o){return new e(a,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:a,onReverseComplete:a,onCompleteParams:s,onReverseCompleteParams:s,callbackScope:o})},e.fromTo=function(i,a,s){return _createTweenType(2,arguments)},e.set=function(i,a){return a.duration=0,a.repeatDelay||(a.repeat=0),new e(i,a)},e.killTweensOf=function(i,a,s){return _globalTimeline.killTweensOf(i,a,s)},e}(Animation);_setDefaults(Tween.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});_forEachName("staggerTo,staggerFrom,staggerFromTo",function(r){Tween[r]=function(){var e=new Timeline,t=_slice.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var _setterPlain=function(e,t,n){return e[t]=n},_setterFunc=function(e,t,n){return e[t](n)},_setterFuncWithParam=function(e,t,n,i){return e[t](i.fp,n)},_setterAttribute=function(e,t,n){return e.setAttribute(t,n)},_getSetter=function(e,t){return _isFunction(e[t])?_setterFunc:_isUndefined(e[t])&&e.setAttribute?_setterAttribute:_setterPlain},_renderPlain=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},_renderBoolean=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},_renderComplexString=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},_renderPropTweens=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},_addPluginModifier=function(e,t,n,i){for(var a=this._pt,s;a;)s=a._next,a.p===i&&a.modifier(e,t,n),a=s},_killPropTweensOf=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?_removeLinkedListItem(this,t,"_pt"):t.dep||(n=1),t=i;return!n},_setterWithModifier=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},_sortPropTweensByPriority=function(e){for(var t=e._pt,n,i,a,s;t;){for(n=t._next,i=a;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:s)?t._prev._next=t:a=t,(t._next=i)?i._prev=t:s=t,t=n}e._pt=a},PropTween=function(){function r(t,n,i,a,s,o,l,c,u){this.t=n,this.s=a,this.c=s,this.p=i,this.r=o||_renderPlain,this.d=l||this,this.set=c||_setterPlain,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,a){this.mSet=this.mSet||this.set,this.set=_setterWithModifier,this.m=n,this.mt=a,this.tween=i},r}();_forEachName(_callbackNames+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return _reservedProps[r]=1});_globals.TweenMax=_globals.TweenLite=Tween;_globals.TimelineLite=_globals.TimelineMax=Timeline;_globalTimeline=new Timeline({sortChildren:!1,defaults:_defaults,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});_config.stringFilter=_colorStringFilter;var _media=[],_listeners={},_emptyArray=[],_lastMediaTime=0,_contextID=0,_dispatch=function(e){return(_listeners[e]||_emptyArray).map(function(t){return t()})},_onMediaChange=function(){var e=Date.now(),t=[];e-_lastMediaTime>2&&(_dispatch("matchMediaInit"),_media.forEach(function(n){var i=n.queries,a=n.conditions,s,o,l,c;for(o in i)s=_win$1.matchMedia(i[o]).matches,s&&(l=1),s!==a[o]&&(a[o]=s,c=1);c&&(n.revert(),l&&t.push(n))}),_dispatch("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n)}),_lastMediaTime=e,_dispatch("matchMedia"))},Context=function(){function r(t,n){this.selector=n&&selector(n),this.data=[],this._r=[],this.isReverted=!1,this.id=_contextID++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,a){_isFunction(n)&&(a=i,i=n,n=_isFunction);var s=this,o=function(){var c=_context,u=s.selector,h;return c&&c!==s&&c.data.push(s),a&&(s.selector=selector(a)),_context=s,h=i.apply(s,arguments),_isFunction(h)&&s._r.push(h),_context=c,s.selector=u,s.isReverted=!1,h};return s.last=o,n===_isFunction?o(s):n?s[n]=o:o},e.ignore=function(n){var i=_context;_context=null,n(this),_context=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Tween&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var a=this;if(n){var s=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(c){return s.splice(s.indexOf(c),1)}))}),s.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,c){return c.g-l.g||-1/0}).forEach(function(l){return l.t.revert(n)}),this.data.forEach(function(l){return!(l instanceof Tween)&&l.revert&&l.revert(n)}),this._r.forEach(function(l){return l(n,a)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),i)for(var o=_media.length;o--;)_media[o].id===this.id&&_media.splice(o,1)},e.revert=function(n){this.kill(n||{})},r}(),MatchMedia=function(){function r(t){this.contexts=[],this.scope=t}var e=r.prototype;return e.add=function(n,i,a){_isObject(n)||(n={matches:n});var s=new Context(0,a||this.scope),o=s.conditions={},l,c,u;_context&&!s.selector&&(s.selector=_context.selector),this.contexts.push(s),i=s.add("onMatch",i),s.queries=n;for(c in n)c==="all"?u=1:(l=_win$1.matchMedia(n[c]),l&&(_media.indexOf(s)<0&&_media.push(s),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(_onMediaChange):l.addEventListener("change",_onMediaChange)));return u&&i(s),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),_gsap={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return _createPlugin(i)})},timeline:function(e){return new Timeline(e)},getTweensOf:function(e,t){return _globalTimeline.getTweensOf(e,t)},getProperty:function(e,t,n,i){_isString(e)&&(e=toArray(e)[0]);var a=_getCache(e||{}).get,s=n?_passThrough:_numericIfPossible;return n==="native"&&(n=""),e&&(t?s((_plugins[t]&&_plugins[t].get||a)(e,t,n,i)):function(o,l,c){return s((_plugins[o]&&_plugins[o].get||a)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=toArray(e),e.length>1){var i=e.map(function(u){return gsap.quickSetter(u,t,n)}),a=i.length;return function(u){for(var h=a;h--;)i[h](u)}}e=e[0]||{};var s=_plugins[t],o=_getCache(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=s?function(u){var h=new s;_quickTween._pt=0,h.init(e,n?u+n:u,_quickTween,0,[e]),h.render(1,h),_quickTween._pt&&_renderPropTweens(1,_quickTween)}:o.set(e,l);return s?c:function(u){return c(e,l,n?u+n:u,o,1)}},quickTo:function(e,t,n){var i,a=gsap.to(e,_merge((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),s=function(l,c,u){return a.resetTo(t,l,c,u)};return s.tween=a,s},isTweening:function(e){return _globalTimeline.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=_parseEase(e.ease,_defaults.ease)),_mergeDeep(_defaults,e||{})},config:function(e){return _mergeDeep(_config,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,a=e.defaults,s=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!_plugins[o]&&!_globals[o]&&_warn(t+" effect requires "+o+" plugin.")}),_effects[t]=function(o,l,c){return n(toArray(o),_setDefaults(l||{},a),c)},s&&(Timeline.prototype[t]=function(o,l,c){return this.add(_effects[t](o,_isObject(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){_easeMap[e]=_parseEase(t)},parseEase:function(e,t){return arguments.length?_parseEase(e,t):_easeMap},getById:function(e){return _globalTimeline.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Timeline(e),i,a;for(n.smoothChildTiming=_isNotFalse(e.smoothChildTiming),_globalTimeline.remove(n),n._dp=0,n._time=n._tTime=_globalTimeline._time,i=_globalTimeline._first;i;)a=i._next,(t||!(!i._dur&&i instanceof Tween&&i.vars.onComplete===i._targets[0]))&&_addToTimeline(n,i,i._start-i._delay),i=a;return _addToTimeline(_globalTimeline,n,0),n},context:function(e,t){return e?new Context(e,t):_context},matchMedia:function(e){return new MatchMedia(e)},matchMediaRefresh:function(){return _media.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||_onMediaChange()},addEventListener:function(e,t){var n=_listeners[e]||(_listeners[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=_listeners[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap,wrapYoyo,distribute,random,snap,normalize,getUnit,clamp,splitColor,toArray,selector,mapRange,pipe,unitize,interpolate,shuffle},install:_install,effects:_effects,ticker:_ticker,updateRoot:Timeline.updateRoot,plugins:_plugins,globalTimeline:_globalTimeline,core:{PropTween,globals:_addGlobal,Tween,Timeline,Animation,getCache:_getCache,_removeLinkedListItem,reverting:function(){return _reverting$1},context:function(e){return e&&_context&&(_context.data.push(e),e._ctx=_context),_context},suppressOverwrites:function(e){return _suppressOverwrites=e}}};_forEachName("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return _gsap[r]=Tween[r]});_ticker.add(Timeline.updateRoot);_quickTween=_gsap.to({},{duration:0});var _getPluginPropTween=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},_addModifiers=function(e,t){var n=e._targets,i,a,s;for(i in t)for(a=n.length;a--;)s=e._ptLookup[a][i],s&&(s=s.d)&&(s._pt&&(s=_getPluginPropTween(s,i)),s&&s.modifier&&s.modifier(t[i],e,n[a],i))},_buildModifierPlugin=function(e,t){return{name:e,rawVars:1,init:function(i,a,s){s._onInit=function(o){var l,c;if(_isString(a)&&(l={},_forEachName(a,function(u){return l[u]=1}),a=l),t){l={};for(c in a)l[c]=t(a[c]);a=l}_addModifiers(o,a)}}}},gsap=_gsap.registerPlugin({name:"attr",init:function(e,t,n,i,a){var s,o,l;this.tween=n;for(s in t)l=e.getAttribute(s)||"",o=this.add(e,"setAttribute",(l||0)+"",t[s],i,a,0,0,s),o.op=s,o.b=l,this._props.push(s)},render:function(e,t){for(var n=t._pt;n;)_reverting$1?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},_buildModifierPlugin("roundProps",_roundModifier),_buildModifierPlugin("modifiers"),_buildModifierPlugin("snap",snap))||_gsap;Tween.version=Timeline.version=gsap.version="3.12.2";_coreReady=1;_windowExists$1()&&_wake();_easeMap.Power0;_easeMap.Power1;_easeMap.Power2;_easeMap.Power3;_easeMap.Power4;_easeMap.Linear;_easeMap.Quad;_easeMap.Cubic;_easeMap.Quart;_easeMap.Quint;_easeMap.Strong;_easeMap.Elastic;_easeMap.Back;_easeMap.SteppedEase;_easeMap.Bounce;_easeMap.Sine;_easeMap.Expo;_easeMap.Circ;/*!
 * CSSPlugin 3.12.2
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var _win,_doc,_docElement,_pluginInitted,_tempDiv,_recentSetterPlugin,_reverting,_windowExists=function(){return typeof window<"u"},_transformProps={},_RAD2DEG=180/Math.PI,_DEG2RAD=Math.PI/180,_atan2=Math.atan2,_bigNum=1e8,_capsExp=/([A-Z])/g,_horizontalExp=/(left|right|width|margin|padding|x)/i,_complexExp=/[\s,\(]\S/,_propertyAliases={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},_renderCSSProp=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},_renderPropWithEnd=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},_renderCSSPropWithBeginning=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},_renderRoundedCSSProp=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},_renderNonTweeningValue=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},_renderNonTweeningValueOnlyAtEnd=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},_setterCSSStyle=function(e,t,n){return e.style[t]=n},_setterCSSProp=function(e,t,n){return e.style.setProperty(t,n)},_setterTransform=function(e,t,n){return e._gsap[t]=n},_setterScale=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},_setterScaleWithRender=function(e,t,n,i,a){var s=e._gsap;s.scaleX=s.scaleY=n,s.renderTransform(a,s)},_setterTransformWithRender=function(e,t,n,i,a){var s=e._gsap;s[t]=n,s.renderTransform(a,s)},_transformProp="transform",_transformOriginProp=_transformProp+"Origin",_saveStyle=function r(e,t){var n=this,i=this.target,a=i.style;if(e in _transformProps&&a){if(this.tfm=this.tfm||{},e!=="transform")e=_propertyAliases[e]||e,~e.indexOf(",")?e.split(",").forEach(function(s){return n.tfm[s]=_get(i,s)}):this.tfm[e]=i._gsap.x?i._gsap[e]:_get(i,e);else return _propertyAliases.transform.split(",").forEach(function(s){return r.call(n,s,t)});if(this.props.indexOf(_transformProp)>=0)return;i._gsap.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(_transformOriginProp,t,"")),e=_transformProp}(a||t)&&this.props.push(e,t,a[e])},_removeIndependentTransforms=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},_revertStyle=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,a,s;for(a=0;a<e.length;a+=3)e[a+1]?t[e[a]]=e[a+2]:e[a+2]?n[e[a]]=e[a+2]:n.removeProperty(e[a].substr(0,2)==="--"?e[a]:e[a].replace(_capsExp,"-$1").toLowerCase());if(this.tfm){for(s in this.tfm)i[s]=this.tfm[s];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),a=_reverting(),(!a||!a.isStart)&&!n[_transformProp]&&(_removeIndependentTransforms(n),i.uncache=1)}},_getStyleSaver=function(e,t){var n={target:e,props:[],revert:_revertStyle,save:_saveStyle};return e._gsap||gsap.core.getCache(e),t&&t.split(",").forEach(function(i){return n.save(i)}),n},_supports3D,_createElement=function(e,t){var n=_doc.createElementNS?_doc.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):_doc.createElement(e);return n.style?n:_doc.createElement(e)},_getComputedProperty=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(_capsExp,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,_checkPropPrefix(t)||t,1)||""},_prefixes="O,Moz,ms,Ms,Webkit".split(","),_checkPropPrefix=function(e,t,n){var i=t||_tempDiv,a=i.style,s=5;if(e in a&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);s--&&!(_prefixes[s]+e in a););return s<0?null:(s===3?"ms":s>=0?_prefixes[s]:"")+e},_initCore=function(){_windowExists()&&window.document&&(_win=window,_doc=_win.document,_docElement=_doc.documentElement,_tempDiv=_createElement("div")||{style:{}},_createElement("div"),_transformProp=_checkPropPrefix(_transformProp),_transformOriginProp=_transformProp+"Origin",_tempDiv.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",_supports3D=!!_checkPropPrefix("perspective"),_reverting=gsap.core.reverting,_pluginInitted=1)},_getBBoxHack=function r(e){var t=_createElement("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,a=this.style.cssText,s;if(_docElement.appendChild(t),t.appendChild(this),this.style.display="block",e)try{s=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=r}catch{}else this._gsapBBox&&(s=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),_docElement.removeChild(t),this.style.cssText=a,s},_getAttributeFallbacks=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},_getBBox=function(e){var t;try{t=e.getBBox()}catch{t=_getBBoxHack.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===_getBBoxHack||(t=_getBBoxHack.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+_getAttributeFallbacks(e,["x","cx","x1"])||0,y:+_getAttributeFallbacks(e,["y","cy","y1"])||0,width:0,height:0}:t},_isSVG=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&_getBBox(e))},_removeProperty=function(e,t){if(t){var n=e.style;t in _transformProps&&t!==_transformOriginProp&&(t=_transformProp),n.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(t.replace(_capsExp,"-$1").toLowerCase())):n.removeAttribute(t)}},_addNonTweeningPT=function(e,t,n,i,a,s){var o=new PropTween(e._pt,t,n,0,1,s?_renderNonTweeningValueOnlyAtEnd:_renderNonTweeningValue);return e._pt=o,o.b=i,o.e=a,e._props.push(n),o},_nonConvertibleUnits={deg:1,rad:1,turn:1},_nonStandardLayouts={grid:1,flex:1},_convertToUnit=function r(e,t,n,i){var a=parseFloat(n)||0,s=(n+"").trim().substr((a+"").length)||"px",o=_tempDiv.style,l=_horizontalExp.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,d=i==="px",f=i==="%",g,_,m,p;return i===s||!a||_nonConvertibleUnits[i]||_nonConvertibleUnits[s]?a:(s!=="px"&&!d&&(a=r(e,t,n,"px")),p=e.getCTM&&_isSVG(e),(f||s==="%")&&(_transformProps[t]||~t.indexOf("adius"))?(g=p?e.getBBox()[l?"width":"height"]:e[u],_round(f?a/g*h:a/100*g)):(o[l?"width":"height"]=h+(d?s:i),_=~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===_doc||!_.appendChild)&&(_=_doc.body),m=_._gsap,m&&f&&m.width&&l&&m.time===_ticker.time&&!m.uncache?_round(a/m.width*h):((f||s==="%")&&!_nonStandardLayouts[_getComputedProperty(_,"display")]&&(o.position=_getComputedProperty(e,"position")),_===e&&(o.position="static"),_.appendChild(_tempDiv),g=_tempDiv[u],_.removeChild(_tempDiv),o.position="absolute",l&&f&&(m=_getCache(_),m.time=_ticker.time,m.width=_[u]),_round(d?g*a/h:g&&a?h/g*a:0))))},_get=function(e,t,n,i){var a;return _pluginInitted||_initCore(),t in _propertyAliases&&t!=="transform"&&(t=_propertyAliases[t],~t.indexOf(",")&&(t=t.split(",")[0])),_transformProps[t]&&t!=="transform"?(a=_parseTransform(e,i),a=t!=="transformOrigin"?a[t]:a.svg?a.origin:_firstTwoOnly(_getComputedProperty(e,_transformOriginProp))+" "+a.zOrigin+"px"):(a=e.style[t],(!a||a==="auto"||i||~(a+"").indexOf("calc("))&&(a=_specialProps[t]&&_specialProps[t](e,t,n)||_getComputedProperty(e,t)||_getProperty(e,t)||(t==="opacity"?1:0))),n&&!~(a+"").trim().indexOf(" ")?_convertToUnit(e,t,a,n)+n:a},_tweenComplexCSSString=function(e,t,n,i){if(!n||n==="none"){var a=_checkPropPrefix(t,e,1),s=a&&_getComputedProperty(e,a,1);s&&s!==n?(t=a,n=s):t==="borderColor"&&(n=_getComputedProperty(e,"borderTopColor"))}var o=new PropTween(this._pt,e.style,t,0,1,_renderComplexString),l=0,c=0,u,h,d,f,g,_,m,p,v,T,x,y;if(o.b=n,o.e=i,n+="",i+="",i==="auto"&&(e.style[t]=i,i=_getComputedProperty(e,t)||i,e.style[t]=n),u=[n,i],_colorStringFilter(u),n=u[0],i=u[1],d=n.match(_numWithUnitExp)||[],y=i.match(_numWithUnitExp)||[],y.length){for(;h=_numWithUnitExp.exec(i);)m=h[0],v=i.substring(l,h.index),g?g=(g+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(g=1),m!==(_=d[c++]||"")&&(f=parseFloat(_)||0,x=_.substr((f+"").length),m.charAt(1)==="="&&(m=_parseRelative(f,m)+x),p=parseFloat(m),T=m.substr((p+"").length),l=_numWithUnitExp.lastIndex-T.length,T||(T=T||_config.units[t]||x,l===i.length&&(i+=T,o.e+=T)),x!==T&&(f=_convertToUnit(e,t,_,T)||0),o._pt={_next:o._pt,p:v||c===1?v:",",s:f,c:p-f,m:g&&g<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?_renderNonTweeningValueOnlyAtEnd:_renderNonTweeningValue;return _relExp.test(i)&&(o.e=0),this._pt=o,o},_keywordToPercent={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},_convertKeywordsToPercentages=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=_keywordToPercent[n]||n,t[1]=_keywordToPercent[i]||i,t.join(" ")},_renderClearProps=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,a=t.u,s=n._gsap,o,l,c;if(a==="all"||a===!0)i.cssText="",l=1;else for(a=a.split(","),c=a.length;--c>-1;)o=a[c],_transformProps[o]&&(l=1,o=o==="transformOrigin"?_transformOriginProp:_transformProp),_removeProperty(n,o);l&&(_removeProperty(n,_transformProp),s&&(s.svg&&n.removeAttribute("transform"),_parseTransform(n,1),s.uncache=1,_removeIndependentTransforms(i)))}},_specialProps={clearProps:function(e,t,n,i,a){if(a.data!=="isFromStart"){var s=e._pt=new PropTween(e._pt,t,n,0,0,_renderClearProps);return s.u=i,s.pr=-10,s.tween=a,e._props.push(n),1}}},_identity2DMatrix=[1,0,0,1,0,0],_rotationalProperties={},_isNullTransform=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},_getComputedTransformMatrixAsArray=function(e){var t=_getComputedProperty(e,_transformProp);return _isNullTransform(t)?_identity2DMatrix:t.substr(7).match(_numExp).map(_round)},_getMatrix=function(e,t){var n=e._gsap||_getCache(e),i=e.style,a=_getComputedTransformMatrixAsArray(e),s,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,a=[l.a,l.b,l.c,l.d,l.e,l.f],a.join(",")==="1,0,0,1,0,0"?_identity2DMatrix:a):(a===_identity2DMatrix&&!e.offsetParent&&e!==_docElement&&!n.svg&&(l=i.display,i.display="block",s=e.parentNode,(!s||!e.offsetParent)&&(c=1,o=e.nextElementSibling,_docElement.appendChild(e)),a=_getComputedTransformMatrixAsArray(e),l?i.display=l:_removeProperty(e,"display"),c&&(o?s.insertBefore(e,o):s?s.appendChild(e):_docElement.removeChild(e))),t&&a.length>6?[a[0],a[1],a[4],a[5],a[12],a[13]]:a)},_applySVGOrigin=function(e,t,n,i,a,s){var o=e._gsap,l=a||_getMatrix(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,h=o.xOffset||0,d=o.yOffset||0,f=l[0],g=l[1],_=l[2],m=l[3],p=l[4],v=l[5],T=t.split(" "),x=parseFloat(T[0])||0,y=parseFloat(T[1])||0,A,b,w,S;n?l!==_identity2DMatrix&&(b=f*m-g*_)&&(w=x*(m/b)+y*(-_/b)+(_*v-m*p)/b,S=x*(-g/b)+y*(f/b)-(f*v-g*p)/b,x=w,y=S):(A=_getBBox(e),x=A.x+(~T[0].indexOf("%")?x/100*A.width:x),y=A.y+(~(T[1]||T[0]).indexOf("%")?y/100*A.height:y)),i||i!==!1&&o.smooth?(p=x-c,v=y-u,o.xOffset=h+(p*f+v*_)-p,o.yOffset=d+(p*g+v*m)-v):o.xOffset=o.yOffset=0,o.xOrigin=x,o.yOrigin=y,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[_transformOriginProp]="0px 0px",s&&(_addNonTweeningPT(s,o,"xOrigin",c,x),_addNonTweeningPT(s,o,"yOrigin",u,y),_addNonTweeningPT(s,o,"xOffset",h,o.xOffset),_addNonTweeningPT(s,o,"yOffset",d,o.yOffset)),e.setAttribute("data-svg-origin",x+" "+y)},_parseTransform=function(e,t){var n=e._gsap||new GSCache(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,a=n.scaleX<0,s="px",o="deg",l=getComputedStyle(e),c=_getComputedProperty(e,_transformOriginProp)||"0",u,h,d,f,g,_,m,p,v,T,x,y,A,b,w,S,C,k,Z,N,B,I,Y,H,V,K,j,F,X,oe,re,ee;return u=h=d=_=m=p=v=T=x=0,f=g=1,n.svg=!!(e.getCTM&&_isSVG(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[_transformProp]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[_transformProp]!=="none"?l[_transformProp]:"")),i.scale=i.rotate=i.translate="none"),b=_getMatrix(e,n.svg),n.svg&&(n.uncache?(V=e.getBBox(),c=n.xOrigin-V.x+"px "+(n.yOrigin-V.y)+"px",H=""):H=!t&&e.getAttribute("data-svg-origin"),_applySVGOrigin(e,H||c,!!H||n.originIsAbsolute,n.smooth!==!1,b)),y=n.xOrigin||0,A=n.yOrigin||0,b!==_identity2DMatrix&&(k=b[0],Z=b[1],N=b[2],B=b[3],u=I=b[4],h=Y=b[5],b.length===6?(f=Math.sqrt(k*k+Z*Z),g=Math.sqrt(B*B+N*N),_=k||Z?_atan2(Z,k)*_RAD2DEG:0,v=N||B?_atan2(N,B)*_RAD2DEG+_:0,v&&(g*=Math.abs(Math.cos(v*_DEG2RAD))),n.svg&&(u-=y-(y*k+A*N),h-=A-(y*Z+A*B))):(ee=b[6],oe=b[7],j=b[8],F=b[9],X=b[10],re=b[11],u=b[12],h=b[13],d=b[14],w=_atan2(ee,X),m=w*_RAD2DEG,w&&(S=Math.cos(-w),C=Math.sin(-w),H=I*S+j*C,V=Y*S+F*C,K=ee*S+X*C,j=I*-C+j*S,F=Y*-C+F*S,X=ee*-C+X*S,re=oe*-C+re*S,I=H,Y=V,ee=K),w=_atan2(-N,X),p=w*_RAD2DEG,w&&(S=Math.cos(-w),C=Math.sin(-w),H=k*S-j*C,V=Z*S-F*C,K=N*S-X*C,re=B*C+re*S,k=H,Z=V,N=K),w=_atan2(Z,k),_=w*_RAD2DEG,w&&(S=Math.cos(w),C=Math.sin(w),H=k*S+Z*C,V=I*S+Y*C,Z=Z*S-k*C,Y=Y*S-I*C,k=H,I=V),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),f=_round(Math.sqrt(k*k+Z*Z+N*N)),g=_round(Math.sqrt(Y*Y+ee*ee)),w=_atan2(I,Y),v=Math.abs(w)>2e-4?w*_RAD2DEG:0,x=re?1/(re<0?-re:re):0),n.svg&&(H=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!_isNullTransform(_getComputedProperty(e,_transformProp)),H&&e.setAttribute("transform",H))),Math.abs(v)>90&&Math.abs(v)<270&&(a?(f*=-1,v+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,v+=v<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+s,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+s,n.z=d+s,n.scaleX=_round(f),n.scaleY=_round(g),n.rotation=_round(_)+o,n.rotationX=_round(m)+o,n.rotationY=_round(p)+o,n.skewX=v+o,n.skewY=T+o,n.transformPerspective=x+s,(n.zOrigin=parseFloat(c.split(" ")[2])||0)&&(i[_transformOriginProp]=_firstTwoOnly(c)),n.xOffset=n.yOffset=0,n.force3D=_config.force3D,n.renderTransform=n.svg?_renderSVGTransforms:_supports3D?_renderCSSTransforms:_renderNon3DTransforms,n.uncache=0,n},_firstTwoOnly=function(e){return(e=e.split(" "))[0]+" "+e[1]},_addPxTranslate=function(e,t,n){var i=getUnit(t);return _round(parseFloat(t)+parseFloat(_convertToUnit(e,"x",n+"px",i)))+i},_renderNon3DTransforms=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,_renderCSSTransforms(e,t)},_zeroDeg="0deg",_zeroPx="0px",_endParenthesis=") ",_renderCSSTransforms=function(e,t){var n=t||this,i=n.xPercent,a=n.yPercent,s=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,d=n.skewX,f=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,p=n.force3D,v=n.target,T=n.zOrigin,x="",y=p==="auto"&&e&&e!==1||p===!0;if(T&&(h!==_zeroDeg||u!==_zeroDeg)){var A=parseFloat(u)*_DEG2RAD,b=Math.sin(A),w=Math.cos(A),S;A=parseFloat(h)*_DEG2RAD,S=Math.cos(A),s=_addPxTranslate(v,s,b*S*-T),o=_addPxTranslate(v,o,-Math.sin(A)*-T),l=_addPxTranslate(v,l,w*S*-T+T)}m!==_zeroPx&&(x+="perspective("+m+_endParenthesis),(i||a)&&(x+="translate("+i+"%, "+a+"%) "),(y||s!==_zeroPx||o!==_zeroPx||l!==_zeroPx)&&(x+=l!==_zeroPx||y?"translate3d("+s+", "+o+", "+l+") ":"translate("+s+", "+o+_endParenthesis),c!==_zeroDeg&&(x+="rotate("+c+_endParenthesis),u!==_zeroDeg&&(x+="rotateY("+u+_endParenthesis),h!==_zeroDeg&&(x+="rotateX("+h+_endParenthesis),(d!==_zeroDeg||f!==_zeroDeg)&&(x+="skew("+d+", "+f+_endParenthesis),(g!==1||_!==1)&&(x+="scale("+g+", "+_+_endParenthesis),v.style[_transformProp]=x||"translate(0, 0)"},_renderSVGTransforms=function(e,t){var n=t||this,i=n.xPercent,a=n.yPercent,s=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,d=n.scaleY,f=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,p=n.yOffset,v=n.forceCSS,T=parseFloat(s),x=parseFloat(o),y,A,b,w,S;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=_DEG2RAD,c*=_DEG2RAD,y=Math.cos(l)*h,A=Math.sin(l)*h,b=Math.sin(l-c)*-d,w=Math.cos(l-c)*d,c&&(u*=_DEG2RAD,S=Math.tan(c-u),S=Math.sqrt(1+S*S),b*=S,w*=S,u&&(S=Math.tan(u),S=Math.sqrt(1+S*S),y*=S,A*=S)),y=_round(y),A=_round(A),b=_round(b),w=_round(w)):(y=h,w=d,A=b=0),(T&&!~(s+"").indexOf("px")||x&&!~(o+"").indexOf("px"))&&(T=_convertToUnit(f,"x",s,"px"),x=_convertToUnit(f,"y",o,"px")),(g||_||m||p)&&(T=_round(T+g-(g*y+_*b)+m),x=_round(x+_-(g*A+_*w)+p)),(i||a)&&(S=f.getBBox(),T=_round(T+i/100*S.width),x=_round(x+a/100*S.height)),S="matrix("+y+","+A+","+b+","+w+","+T+","+x+")",f.setAttribute("transform",S),v&&(f.style[_transformProp]=S)},_addRotationalPropTween=function(e,t,n,i,a){var s=360,o=_isString(a),l=parseFloat(a)*(o&&~a.indexOf("rad")?_RAD2DEG:1),c=l-i,u=i+c+"deg",h,d;return o&&(h=a.split("_")[1],h==="short"&&(c%=s,c!==c%(s/2)&&(c+=c<0?s:-s)),h==="cw"&&c<0?c=(c+s*_bigNum)%s-~~(c/s)*s:h==="ccw"&&c>0&&(c=(c-s*_bigNum)%s-~~(c/s)*s)),e._pt=d=new PropTween(e._pt,t,n,i,c,_renderPropWithEnd),d.e=u,d.u="deg",e._props.push(n),d},_assign=function(e,t){for(var n in t)e[n]=t[n];return e},_addRawTransformPTs=function(e,t,n){var i=_assign({},n._gsap),a="perspective,force3D,transformOrigin,svgOrigin",s=n.style,o,l,c,u,h,d,f,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),s[_transformProp]=t,o=_parseTransform(n,1),_removeProperty(n,_transformProp),n.setAttribute("transform",c)):(c=getComputedStyle(n)[_transformProp],s[_transformProp]=t,o=_parseTransform(n,1),s[_transformProp]=c);for(l in _transformProps)c=i[l],u=o[l],c!==u&&a.indexOf(l)<0&&(f=getUnit(c),g=getUnit(u),h=f!==g?_convertToUnit(n,l,c,g):parseFloat(c),d=parseFloat(u),e._pt=new PropTween(e._pt,o,l,h,d-h,_renderCSSProp),e._pt.u=g||0,e._props.push(l));_assign(o,i)};_forEachName("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",a="Left",s=(e<3?[t,n,i,a]:[t+a,t+n,i+n,i+a]).map(function(o){return e<2?r+o:"border"+o+r});_specialProps[e>1?"border"+r:r]=function(o,l,c,u,h){var d,f;if(arguments.length<4)return d=s.map(function(g){return _get(o,g,c)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(u+"").split(" "),f={},s.forEach(function(g,_){return f[g]=d[_]=d[_]||d[(_-1)/2|0]}),o.init(l,f,h)}});var CSSPlugin={name:"css",register:_initCore,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,a){var s=this._props,o=e.style,l=n.vars.startAt,c,u,h,d,f,g,_,m,p,v,T,x,y,A,b,w;_pluginInitted||_initCore(),this.styles=this.styles||_getStyleSaver(e),w=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(_plugins[_]&&_checkPlugin(_,t,n,i,e,a)))){if(f=typeof u,g=_specialProps[_],f==="function"&&(u=u.call(n,i,e,a),f=typeof u),f==="string"&&~u.indexOf("random(")&&(u=_replaceRandom(u)),g)g(this,e,_,u,n)&&(b=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",_colorExp.lastIndex=0,_colorExp.test(c)||(m=getUnit(c),p=getUnit(u)),p?m!==p&&(c=_convertToUnit(e,_,c,p)+p):m&&(u+=m),this.add(o,"setProperty",c,u,i,a,0,0,_),s.push(_),w.push(_,0,o[_]);else if(f!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,a):l[_],_isString(c)&&~c.indexOf("random(")&&(c=_replaceRandom(c)),getUnit(c+"")||(c+=_config.units[_]||getUnit(_get(e,_))||""),(c+"").charAt(1)==="="&&(c=_get(e,_))):c=_get(e,_),d=parseFloat(c),v=f==="string"&&u.charAt(1)==="="&&u.substr(0,2),v&&(u=u.substr(2)),h=parseFloat(u),_ in _propertyAliases&&(_==="autoAlpha"&&(d===1&&_get(e,"visibility")==="hidden"&&h&&(d=0),w.push("visibility",0,o.visibility),_addNonTweeningPT(this,o,"visibility",d?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=_propertyAliases[_],~_.indexOf(",")&&(_=_.split(",")[0]))),T=_ in _transformProps,T){if(this.styles.save(_),x||(y=e._gsap,y.renderTransform&&!t.parseTransform||_parseTransform(e,t.parseTransform),A=t.smoothOrigin!==!1&&y.smooth,x=this._pt=new PropTween(this._pt,o,_transformProp,0,1,y.renderTransform,y,0,-1),x.dep=1),_==="scale")this._pt=new PropTween(this._pt,y,"scaleY",y.scaleY,(v?_parseRelative(y.scaleY,v+h):h)-y.scaleY||0,_renderCSSProp),this._pt.u=0,s.push("scaleY",_),_+="X";else if(_==="transformOrigin"){w.push(_transformOriginProp,0,o[_transformOriginProp]),u=_convertKeywordsToPercentages(u),y.svg?_applySVGOrigin(e,u,0,A,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==y.zOrigin&&_addNonTweeningPT(this,y,"zOrigin",y.zOrigin,p),_addNonTweeningPT(this,o,_,_firstTwoOnly(c),_firstTwoOnly(u)));continue}else if(_==="svgOrigin"){_applySVGOrigin(e,u,1,A,0,this);continue}else if(_ in _rotationalProperties){_addRotationalPropTween(this,y,_,d,v?_parseRelative(d,v+u):u);continue}else if(_==="smoothOrigin"){_addNonTweeningPT(this,y,"smooth",y.smooth,u);continue}else if(_==="force3D"){y[_]=u;continue}else if(_==="transform"){_addRawTransformPTs(this,u,e);continue}}else _ in o||(_=_checkPropPrefix(_)||_);if(T||(h||h===0)&&(d||d===0)&&!_complexExp.test(u)&&_ in o)m=(c+"").substr((d+"").length),h||(h=0),p=getUnit(u)||(_ in _config.units?_config.units[_]:m),m!==p&&(d=_convertToUnit(e,_,c,p)),this._pt=new PropTween(this._pt,T?y:o,_,d,(v?_parseRelative(d,v+h):h)-d,!T&&(p==="px"||_==="zIndex")&&t.autoRound!==!1?_renderRoundedCSSProp:_renderCSSProp),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=_renderCSSPropWithBeginning);else if(_ in o)_tweenComplexCSSString.call(this,e,_,c,v?v+u:u);else if(_ in e)this.add(e,_,c||e[_],v?v+u:u,i,a);else if(_!=="parseTransform"){_missingPlugin(_,u);continue}T||(_ in o?w.push(_,0,o[_]):w.push(_,1,c||e[_])),s.push(_)}}b&&_sortPropTweensByPriority(this)},render:function(e,t){if(t.tween._time||!_reverting())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:_get,aliases:_propertyAliases,getSetter:function(e,t,n){var i=_propertyAliases[t];return i&&i.indexOf(",")<0&&(t=i),t in _transformProps&&t!==_transformOriginProp&&(e._gsap.x||_get(e,"x"))?n&&_recentSetterPlugin===n?t==="scale"?_setterScale:_setterTransform:(_recentSetterPlugin=n||{})&&(t==="scale"?_setterScaleWithRender:_setterTransformWithRender):e.style&&!_isUndefined(e.style[t])?_setterCSSStyle:~t.indexOf("-")?_setterCSSProp:_getSetter(e,t)},core:{_removeProperty,_getMatrix}};gsap.utils.checkPrefix=_checkPropPrefix;gsap.core.getStyleSaver=_getStyleSaver;(function(r,e,t,n){var i=_forEachName(r+","+e+","+t,function(a){_transformProps[a]=1});_forEachName(e,function(a){_config.units[a]="deg",_rotationalProperties[a]=1}),_propertyAliases[i[13]]=r+","+e,_forEachName(n,function(a){var s=a.split(":");_propertyAliases[s[1]]=i[s[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");_forEachName("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){_config.units[r]="px"});gsap.registerPlugin(CSSPlugin);var gsapWithCSS=gsap.registerPlugin(CSSPlugin)||gsap;gsapWithCSS.core.Tween;const cubeTextureUrl="/assets/metal-a26f45b7.jpg",cubeMapNormalUrl="/assets/metal_normal-cc90ad0b.png",cubeRoughnessMapUrl="/assets/metal_roughness-8fde5b22.jpg",cubeAlphaMapUrl="/assets/cube_alpha-3405247e.png",cubeCenterTextureUrl="/assets/metal_center-70d8f050.jpg",cubeCenterNormalMapUrl="/assets/metal_center_normal-b94ddce7.png",cubeCenterRoughnessMapUrl="/assets/metal_center_roughness-4da90205.jpg",edgeTextureUrl="/assets/metal_edge-40b7d4b6.jpg",edgeRoughnessMapUrl="/assets/metal_edge_roughness-fd64a48b.jpg",edgeNormalMapUrl="/assets/metal_edge_normal-28813bbd.png";var fragment_default=`varying vec3 vViewDirTangent;
varying vec2 vUv;

uniform samplerCube cubeMap;

float min3 (vec3 v) {
  return min (min (v.x, v.y), v.z);
}

void main()
{
    vec2 uv = fract(vUv); 
    vec3 sampleDir = normalize(vViewDirTangent);

    sampleDir *= vec3(-1.,-1.,1.);
    vec3 viewInv = 1. / sampleDir;

    vec3 pos = vec3(uv * 2.0 - 1.0, -1.0);
    
    float fmin = min3(abs(viewInv) - viewInv * pos);
    sampleDir = sampleDir * fmin + pos;

    gl_FragColor = texture(cubeMap, sampleDir);
}`,vertex_default=`attribute vec4 tangent;

varying vec3 vViewDirTangent;
varying vec2 vUv;

void main()
{
    vUv = uv;
    vec3 vNormal = normalMatrix * normal;
    vec3 vTangent = normalMatrix * tangent.xyz;
    vec3 vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );

    mat3 mTBN = transpose(mat3(vTangent, vBitangent, vNormal));
    
    vec4 mvPos = modelViewMatrix * vec4( position, 1.0 );
    vec3 viewDir = -mvPos.xyz;
    vViewDirTangent = mTBN * viewDir;

    gl_Position = projectionMatrix * mvPos;
}`;const redDds="/assets/red_cube-75f490bb.dds",whiteDds="/assets/white_cube-85a9ba05.dds",blueDds="/assets/blue_cube-d54f7c27.dds",orangeDds="/assets/orange_cube-7c8645b4.dds",yellowDds="/assets/yellow_cube-f728ebc9.dds",greenDds="/assets/green_cube-d9a4f484.dds",blackDds="/assets/black_cube-f10d9ed2.dds";class DDSLoader extends CompressedTextureLoader{constructor(e){super(e)}parse(e,t){const n={mipmaps:[],width:0,height:0,format:null,mipmapCount:1},i=542327876,a=131072,s=512,o=1024,l=2048,c=4096,u=8192,h=16384,d=32768;function f(ee){return ee.charCodeAt(0)+(ee.charCodeAt(1)<<8)+(ee.charCodeAt(2)<<16)+(ee.charCodeAt(3)<<24)}function g(ee){return String.fromCharCode(ee&255,ee>>8&255,ee>>16&255,ee>>24&255)}function _(ee,fe,_e,pe){const Le=_e*pe*4,Ue=new Uint8Array(ee,fe,Le),Se=new Uint8Array(Le);let O=0,Fe=0;for(let ge=0;ge<pe;ge++)for(let xe=0;xe<_e;xe++){const ve=Ue[Fe];Fe++;const Be=Ue[Fe];Fe++;const Ae=Ue[Fe];Fe++;const Ee=Ue[Fe];Fe++,Se[O]=Ae,O++,Se[O]=Be,O++,Se[O]=ve,O++,Se[O]=Ee,O++}return Se}const m=f("DXT1"),p=f("DXT3"),v=f("DXT5"),T=f("ETC1"),x=31,y=0,A=1,b=2,w=3,S=4,C=7,k=21,Z=22,N=23,B=24,I=25,Y=26,H=28,V=new Int32Array(e,0,x);if(V[y]!==i)return console.error("THREE.DDSLoader.parse: Invalid magic number in DDS header."),n;let K;const j=V[k];let F=!1;switch(j){case m:K=8,n.format=RGB_S3TC_DXT1_Format;break;case p:K=16,n.format=RGBA_S3TC_DXT3_Format;break;case v:K=16,n.format=RGBA_S3TC_DXT5_Format;break;case T:K=8,n.format=RGB_ETC1_Format;break;default:if(V[Z]===32&&V[N]&16711680&&V[B]&65280&&V[I]&255&&V[Y]&4278190080)F=!0,K=64,n.format=RGBAFormat;else return console.error("THREE.DDSLoader.parse: Unsupported FourCC code ",g(j)),n}n.mipmapCount=1,V[b]&a&&t!==!1&&(n.mipmapCount=Math.max(1,V[C]));const X=V[H];if(n.isCubemap=!!(X&s),n.isCubemap&&(!(X&o)||!(X&l)||!(X&c)||!(X&u)||!(X&h)||!(X&d)))return console.error("THREE.DDSLoader.parse: Incomplete cubemap faces"),n;n.width=V[S],n.height=V[w];let oe=V[A]+4;const re=n.isCubemap?6:1;for(let ee=0;ee<re;ee++){let fe=n.width,_e=n.height;for(let pe=0;pe<n.mipmapCount;pe++){let Le,Ue;F?(Le=_(e,oe,fe,_e),Ue=Le.length):(Ue=Math.max(4,fe)/4*Math.max(4,_e)/4*K,Le=new Uint8Array(e,oe,Ue));const Se={data:Le,width:fe,height:_e};n.mipmaps.push(Se),oe+=Ue,fe=Math.max(fe>>1,1),_e=Math.max(_e>>1,1)}}return n}}const cubeAlphaMap=new TextureLoader().load(cubeAlphaMapUrl),cubeCenterTexture=new TextureLoader().load(cubeCenterTextureUrl),cubeCenterNormalMap=new TextureLoader().load(cubeCenterNormalMapUrl),cubeCenterRougnessMap=new TextureLoader().load(cubeCenterRoughnessMapUrl),cubeNormalMaterial=new MeshStandardMaterial({transparent:!0,alphaMap:cubeAlphaMap,alphaToCoverage:!0,vertexColors:!0,map:cubeCenterTexture,normalMap:cubeCenterNormalMap,roughnessMap:cubeCenterRougnessMap,precision:"highp"}),cubeTexture1=new TextureLoader().load(cubeTextureUrl),cubeNormalMap1=new TextureLoader().load(cubeMapNormalUrl),cubeRoughnessMap1=new TextureLoader().load(cubeRoughnessMapUrl),cubeMaterial1=new MeshStandardMaterial({transparent:!0,alphaMap:cubeAlphaMap,alphaToCoverage:!0,vertexColors:!0,map:cubeTexture1,normalMap:cubeNormalMap1,roughnessMap:cubeRoughnessMap1,precision:"highp"}),cubeTexture2=new TextureLoader().load(cubeTextureUrl);cubeTexture2.center.set(.5,.5);cubeTexture2.rotation=-Math.PI/2;const cubeNormalMap2=new TextureLoader().load(cubeMapNormalUrl);cubeNormalMap2.center.set(.5,.5);cubeNormalMap2.rotation=-Math.PI/2;const cubeRoughnessMap2=new TextureLoader().load(cubeRoughnessMapUrl);cubeRoughnessMap2.center.set(.5,.5);cubeRoughnessMap2.rotation=-Math.PI/2;const cubeMaterial2=new MeshStandardMaterial({transparent:!0,alphaMap:cubeAlphaMap,alphaToCoverage:!0,vertexColors:!0,map:cubeTexture2,normalMap:cubeNormalMap2,roughnessMap:cubeRoughnessMap2,precision:"highp"}),cubeTexture3=new TextureLoader().load(cubeTextureUrl);cubeTexture3.center.set(.5,.5);cubeTexture3.rotation=-Math.PI;const cubeNormalMap3=new TextureLoader().load(cubeMapNormalUrl);cubeNormalMap3.center.set(.5,.5);cubeNormalMap3.rotation=-Math.PI;const cubeRoughnessMap3=new TextureLoader().load(cubeRoughnessMapUrl);cubeRoughnessMap3.center.set(.5,.5);cubeRoughnessMap3.rotation=-Math.PI;const cubeMaterial3=new MeshStandardMaterial({transparent:!0,alphaMap:cubeAlphaMap,alphaToCoverage:!0,vertexColors:!0,map:cubeTexture3,normalMap:cubeNormalMap3,roughnessMap:cubeRoughnessMap3,precision:"highp"}),cubeTexture4=new TextureLoader().load(cubeTextureUrl);cubeTexture4.center.set(.5,.5);cubeTexture4.rotation=-Math.PI*1.5;const cubeNormalMap4=new TextureLoader().load(cubeMapNormalUrl);cubeNormalMap4.center.set(.5,.5);cubeNormalMap4.rotation=-Math.PI*1.5;const cubeRoughnessMap4=new TextureLoader().load(cubeRoughnessMapUrl);cubeRoughnessMap4.center.set(.5,.5);cubeRoughnessMap4.rotation=-Math.PI*1.5;const cubeMaterial4=new MeshStandardMaterial({transparent:!0,alphaMap:cubeAlphaMap,alphaToCoverage:!0,vertexColors:!0,map:cubeTexture4,normalMap:cubeNormalMap4,roughnessMap:cubeRoughnessMap4,precision:"highp"}),cubeMaterials=[[[cubeNormalMaterial,cubeMaterial2,cubeMaterial4,cubeNormalMaterial,cubeMaterial1,cubeNormalMaterial],[cubeNormalMaterial,cubeNormalMaterial,cubeMaterial3,cubeNormalMaterial,cubeMaterial1,cubeNormalMaterial],[cubeMaterial1,cubeNormalMaterial,cubeMaterial3,cubeNormalMaterial,cubeMaterial2,cubeNormalMaterial],[cubeNormalMaterial,cubeMaterial2,cubeNormalMaterial,cubeNormalMaterial,cubeMaterial4,cubeNormalMaterial],[cubeNormalMaterial,cubeNormalMaterial,cubeNormalMaterial,cubeNormalMaterial,cubeNormalMaterial,cubeNormalMaterial],[cubeMaterial4,cubeNormalMaterial,cubeNormalMaterial,cubeNormalMaterial,cubeMaterial2,cubeNormalMaterial],[cubeNormalMaterial,cubeMaterial3,cubeNormalMaterial,cubeMaterial1,cubeMaterial4,cubeNormalMaterial],[cubeNormalMaterial,cubeNormalMaterial,cubeNormalMaterial,cubeMaterial1,cubeMaterial3,cubeNormalMaterial],[cubeMaterial4,cubeNormalMaterial,cubeNormalMaterial,cubeMaterial2,cubeMaterial3,cubeNormalMaterial]],[[cubeNormalMaterial,cubeMaterial1,cubeMaterial4,cubeNormalMaterial,cubeNormalMaterial,cubeNormalMaterial],[cubeNormalMaterial,cubeNormalMaterial,cubeNormalMaterial,cubeNormalMaterial,cubeNormalMaterial,cubeNormalMaterial],[cubeMaterial1,cubeNormalMaterial,cubeMaterial2,cubeNormalMaterial,cubeNormalMaterial,cubeNormalMaterial],[cubeNormalMaterial,cubeNormalMaterial,cubeNormalMaterial,cubeNormalMaterial,cubeNormalMaterial,cubeNormalMaterial],[cubeNormalMaterial,cubeNormalMaterial,cubeNormalMaterial,cubeNormalMaterial,cubeNormalMaterial,cubeNormalMaterial],[cubeNormalMaterial,cubeNormalMaterial,cubeNormalMaterial,cubeNormalMaterial,cubeNormalMaterial,cubeNormalMaterial],[cubeNormalMaterial,cubeMaterial3,cubeNormalMaterial,cubeMaterial4,cubeNormalMaterial,cubeNormalMaterial],[cubeNormalMaterial,cubeNormalMaterial,cubeNormalMaterial,cubeNormalMaterial,cubeNormalMaterial,cubeNormalMaterial],[cubeMaterial3,cubeNormalMaterial,cubeNormalMaterial,cubeMaterial2,cubeNormalMaterial,cubeNormalMaterial]],[[cubeNormalMaterial,cubeMaterial1,cubeMaterial1,cubeNormalMaterial,cubeNormalMaterial,cubeMaterial2],[cubeNormalMaterial,cubeNormalMaterial,cubeMaterial1,cubeNormalMaterial,cubeNormalMaterial,cubeMaterial1],[cubeMaterial2,cubeNormalMaterial,cubeMaterial2,cubeNormalMaterial,cubeNormalMaterial,cubeMaterial1],[cubeNormalMaterial,cubeMaterial4,cubeNormalMaterial,cubeNormalMaterial,cubeNormalMaterial,cubeMaterial2],[cubeNormalMaterial,cubeNormalMaterial,cubeNormalMaterial,cubeNormalMaterial,cubeNormalMaterial,cubeNormalMaterial],[cubeMaterial2,cubeNormalMaterial,cubeNormalMaterial,cubeNormalMaterial,cubeNormalMaterial,cubeMaterial4],[cubeNormalMaterial,cubeMaterial4,cubeNormalMaterial,cubeMaterial4,cubeNormalMaterial,cubeMaterial3],[cubeNormalMaterial,cubeNormalMaterial,cubeNormalMaterial,cubeMaterial3,cubeNormalMaterial,cubeMaterial3],[cubeMaterial3,cubeNormalMaterial,cubeNormalMaterial,cubeMaterial3,cubeNormalMaterial,cubeMaterial4]]],edgeColor="darkslategray",edgeTexture=new TextureLoader().load(edgeTextureUrl),edgeRoughnessMap=new TextureLoader().load(edgeRoughnessMapUrl),edgeNormalMap=new TextureLoader().load(edgeNormalMapUrl),edgeMaterial=new MeshStandardMaterial({color:edgeColor,map:edgeTexture,normalMap:edgeNormalMap,roughnessMap:edgeRoughnessMap,precision:"highp"});class CubeEdge extends Group{static edgeShape=new Shape().moveTo(-.001,.05).lineTo(1.001,.05).lineTo(.951,0).lineTo(.0499,0);edge;get meshes(){return this.edge.children}constructor(e){const t=new Mesh(new ShapeGeometry(CubeEdge.edgeShape),edgeMaterial),n=new Mesh(new ShapeGeometry(CubeEdge.edgeShape),edgeMaterial),i=new Mesh(new ShapeGeometry(CubeEdge.edgeShape),edgeMaterial),a=new Mesh(new ShapeGeometry(CubeEdge.edgeShape),edgeMaterial),s=new Mesh(new ShapeGeometry(CubeEdge.edgeShape),edgeMaterial),o=new Mesh(new ShapeGeometry(CubeEdge.edgeShape),edgeMaterial),l=new Mesh(new ShapeGeometry(CubeEdge.edgeShape),edgeMaterial),c=new Mesh(new ShapeGeometry(CubeEdge.edgeShape),edgeMaterial);n.rotateY(Math.PI).position.setX(1),i.rotateX(Math.PI/2).position.setY(e).setZ(-e),a.rotateX(Math.PI/2).rotateY(Math.PI).position.setY(e).setZ(-e).setX(1),s.rotateX(-Math.PI/2),o.rotateX(-Math.PI/2).rotateY(Math.PI).position.setX(1),l.rotateX(Math.PI).position.setY(e).setZ(-e),c.rotateX(Math.PI).rotateY(Math.PI).position.set(1,e,-e),super(),this.edge=new Group,this.edge.position.set(-.5,-.5*e,.5*e),this.edge.add(t,n,l,c,i,a,s,o),this.add(this.edge),this.rotation.y+=Math.PI/2}}const whitePromise=new Promise(r=>{new DDSLoader().load(whiteDds,e=>{r(e)})}),whiteCubeMap=await whitePromise,innerCubeWhiteMaterial=new ShaderMaterial({uniforms:{cubeMap:{value:whiteCubeMap}},vertexShader:vertex_default,fragmentShader:fragment_default}),redPromise=new Promise(r=>{new DDSLoader().load(redDds,e=>{r(e)})}),redCubeMap=await redPromise,innerCubeRedMaterial=new ShaderMaterial({uniforms:{cubeMap:{value:redCubeMap}},vertexShader:vertex_default,fragmentShader:fragment_default}),orangePromise=new Promise(r=>{new DDSLoader().load(orangeDds,e=>{r(e)})}),orangeCubeMap=await orangePromise,innerCubeOrangeMaterial=new ShaderMaterial({uniforms:{cubeMap:{value:orangeCubeMap}},vertexShader:vertex_default,fragmentShader:fragment_default}),bluePromise=new Promise(r=>{new DDSLoader().load(blueDds,e=>{r(e)})}),blueCubeMap=await bluePromise,innerCubeBlueMaterial=new ShaderMaterial({uniforms:{cubeMap:{value:blueCubeMap}},vertexShader:vertex_default,fragmentShader:fragment_default}),greenPromise=new Promise(r=>{new DDSLoader().load(greenDds,e=>{r(e)})}),greenCubeMap=await greenPromise,innerCubeGreenMaterial=new ShaderMaterial({uniforms:{cubeMap:{value:greenCubeMap}},vertexShader:vertex_default,fragmentShader:fragment_default}),yellowPromise=new Promise(r=>{new DDSLoader().load(yellowDds,e=>{r(e)})}),yellowCubeMap=await yellowPromise,innerCubeYellowMaterial=new ShaderMaterial({uniforms:{cubeMap:{value:yellowCubeMap}},vertexShader:vertex_default,fragmentShader:fragment_default}),blackPromise=new Promise(r=>{new DDSLoader().load(blackDds,e=>{r(e)})}),blackCubeMap=await blackPromise,innerCubeBlackMaterial=new ShaderMaterial({uniforms:{cubeMap:{value:blackCubeMap}},vertexShader:vertex_default,fragmentShader:fragment_default}),rotateLayerColorsRightCornerMoves=[{targetCube:Cube.TOP_LEFT,targetSides:[Side.LEFT,Side.TOP],originCube:Cube.BOTTOM_LEFT,originSides:[Side.BOTTOM,Side.LEFT]},{targetCube:Cube.TOP_RIGHT,targetSides:[Side.TOP,Side.RIGHT],originCube:Cube.TOP_LEFT,originSides:[Side.LEFT,Side.TOP]},{targetCube:Cube.BOTTOM_LEFT,targetSides:[Side.BOTTOM,Side.LEFT],originCube:Cube.BOTTOM_RIGHT,originSides:[Side.RIGHT,Side.BOTTOM]},{targetCube:Cube.BOTTOM_RIGHT,targetSides:[Side.RIGHT,Side.BOTTOM],originCube:Cube.TOP_RIGHT,originSides:[Side.TOP,Side.RIGHT]}],rotateLayerColorsRightEgdeMoves=[{targetCube:Cube.TOP,targetSides:[Side.TOP],originCube:Cube.LEFT,originSides:[Side.LEFT]},{targetCube:Cube.LEFT,targetSides:[Side.LEFT],originCube:Cube.BOTTOM,originSides:[Side.BOTTOM]},{targetCube:Cube.RIGHT,targetSides:[Side.RIGHT],originCube:Cube.TOP,originSides:[Side.TOP]},{targetCube:Cube.BOTTOM,targetSides:[Side.BOTTOM],originCube:Cube.RIGHT,originSides:[Side.RIGHT]}],rotateLayerColorsLeftCornerMoves=[{targetCube:Cube.TOP_LEFT,targetSides:[Side.LEFT,Side.TOP],originCube:Cube.TOP_RIGHT,originSides:[Side.TOP,Side.RIGHT]},{targetCube:Cube.TOP_RIGHT,targetSides:[Side.TOP,Side.RIGHT],originCube:Cube.BOTTOM_RIGHT,originSides:[Side.RIGHT,Side.BOTTOM]},{targetCube:Cube.BOTTOM_LEFT,targetSides:[Side.BOTTOM,Side.LEFT],originCube:Cube.TOP_LEFT,originSides:[Side.LEFT,Side.TOP]},{targetCube:Cube.BOTTOM_RIGHT,targetSides:[Side.RIGHT,Side.BOTTOM],originCube:Cube.BOTTOM_LEFT,originSides:[Side.BOTTOM,Side.LEFT]}],rotateLayerColorsLeftEgdeMoves=[{targetCube:Cube.TOP,targetSides:[Side.TOP],originCube:Cube.RIGHT,originSides:[Side.RIGHT]},{targetCube:Cube.LEFT,targetSides:[Side.LEFT],originCube:Cube.TOP,originSides:[Side.TOP]},{targetCube:Cube.RIGHT,targetSides:[Side.RIGHT],originCube:Cube.BOTTOM,originSides:[Side.BOTTOM]},{targetCube:Cube.BOTTOM,targetSides:[Side.BOTTOM],originCube:Cube.LEFT,originSides:[Side.LEFT]}],rotateFaceColorsYRightCornerMoves=[{targetLayer:Layer.FRONT,targetCube:Cube.TOP_LEFT,targetSides:[Side.FRONT,Side.LEFT],originLayer:Layer.BACK,originCube:Cube.TOP_LEFT,originSides:[Side.LEFT,Side.BACK]},{targetLayer:Layer.FRONT,targetCube:Cube.TOP_RIGHT,targetSides:[Side.FRONT,Side.RIGHT],originLayer:Layer.FRONT,originCube:Cube.TOP_LEFT,originSides:[Side.LEFT,Side.FRONT]},{targetLayer:Layer.FRONT,targetCube:Cube.BOTTOM_LEFT,targetSides:[Side.FRONT,Side.LEFT],originLayer:Layer.BACK,originCube:Cube.BOTTOM_LEFT,originSides:[Side.LEFT,Side.BACK]},{targetLayer:Layer.FRONT,targetCube:Cube.BOTTOM_RIGHT,targetSides:[Side.FRONT,Side.RIGHT],originLayer:Layer.FRONT,originCube:Cube.BOTTOM_LEFT,originSides:[Side.LEFT,Side.FRONT]},{targetLayer:Layer.BACK,targetCube:Cube.TOP_LEFT,targetSides:[Side.LEFT,Side.BACK],originLayer:Layer.BACK,originCube:Cube.TOP_RIGHT,originSides:[Side.BACK,Side.RIGHT]},{targetLayer:Layer.BACK,targetCube:Cube.TOP_RIGHT,targetSides:[Side.RIGHT,Side.BACK],originLayer:Layer.FRONT,originCube:Cube.TOP_RIGHT,originSides:[Side.FRONT,Side.RIGHT]},{targetLayer:Layer.BACK,targetCube:Cube.BOTTOM_LEFT,targetSides:[Side.LEFT,Side.BACK],originLayer:Layer.BACK,originCube:Cube.BOTTOM_RIGHT,originSides:[Side.BACK,Side.RIGHT]},{targetLayer:Layer.BACK,targetCube:Cube.BOTTOM_RIGHT,targetSides:[Side.RIGHT,Side.BACK],originLayer:Layer.FRONT,originCube:Cube.BOTTOM_RIGHT,originSides:[Side.FRONT,Side.RIGHT]}],rotateFaceColorsYRightEdgeMoves=[{targetLayer:Layer.FRONT,targetCube:Cube.TOP,targetSides:[Side.FRONT],originLayer:Layer.MIDDLE,originCube:Cube.TOP_LEFT,originSides:[Side.LEFT]},{targetLayer:Layer.FRONT,targetCube:Cube.LEFT,targetSides:[Side.LEFT,Side.FRONT],originLayer:Layer.BACK,originCube:Cube.LEFT,originSides:[Side.BACK,Side.LEFT]},{targetLayer:Layer.FRONT,targetCube:Cube.RIGHT,targetSides:[Side.FRONT,Side.RIGHT],originLayer:Layer.FRONT,originCube:Cube.LEFT,originSides:[Side.LEFT,Side.FRONT]},{targetLayer:Layer.FRONT,targetCube:Cube.BOTTOM,targetSides:[Side.FRONT],originLayer:Layer.MIDDLE,originCube:Cube.BOTTOM_LEFT,originSides:[Side.LEFT]},{targetLayer:Layer.MIDDLE,targetCube:Cube.TOP_LEFT,targetSides:[Side.LEFT],originLayer:Layer.BACK,originCube:Cube.TOP,originSides:[Side.BACK]},{targetLayer:Layer.MIDDLE,targetCube:Cube.TOP_RIGHT,targetSides:[Side.RIGHT],originLayer:Layer.FRONT,originCube:Cube.TOP,originSides:[Side.FRONT]},{targetLayer:Layer.MIDDLE,targetCube:Cube.BOTTOM_LEFT,targetSides:[Side.LEFT],originLayer:Layer.BACK,originCube:Cube.BOTTOM,originSides:[Side.BACK]},{targetLayer:Layer.MIDDLE,targetCube:Cube.BOTTOM_RIGHT,targetSides:[Side.RIGHT],originLayer:Layer.FRONT,originCube:Cube.BOTTOM,originSides:[Side.FRONT]},{targetLayer:Layer.BACK,targetCube:Cube.TOP,targetSides:[Side.BACK],originLayer:Layer.MIDDLE,originCube:Cube.TOP_RIGHT,originSides:[Side.RIGHT]},{targetLayer:Layer.BACK,targetCube:Cube.LEFT,targetSides:[Side.LEFT,Side.BACK],originLayer:Layer.BACK,originCube:Cube.RIGHT,originSides:[Side.BACK,Side.RIGHT]},{targetLayer:Layer.BACK,targetCube:Cube.RIGHT,targetSides:[Side.RIGHT,Side.BACK],originLayer:Layer.FRONT,originCube:Cube.RIGHT,originSides:[Side.FRONT,Side.RIGHT]},{targetLayer:Layer.BACK,targetCube:Cube.BOTTOM,targetSides:[Side.BACK],originLayer:Layer.MIDDLE,originCube:Cube.BOTTOM_RIGHT,originSides:[Side.RIGHT]}],rotateFaceColorsYRightCenterMoves=[{targetLayer:Layer.FRONT,targetCube:Cube.CENTER,targetSides:[Side.FRONT],originLayer:Layer.MIDDLE,originCube:Cube.LEFT,originSides:[Side.LEFT]},{targetLayer:Layer.MIDDLE,targetCube:Cube.LEFT,targetSides:[Side.LEFT],originLayer:Layer.BACK,originCube:Cube.CENTER,originSides:[Side.BACK]},{targetLayer:Layer.MIDDLE,targetCube:Cube.RIGHT,targetSides:[Side.RIGHT],originLayer:Layer.FRONT,originCube:Cube.CENTER,originSides:[Side.FRONT]},{targetLayer:Layer.BACK,targetCube:Cube.CENTER,targetSides:[Side.BACK],originLayer:Layer.MIDDLE,originCube:Cube.RIGHT,originSides:[Side.RIGHT]},{targetLayer:Layer.MIDDLE,targetCube:Cube.TOP,targetSides:[Side.TOP],originLayer:Layer.MIDDLE,originCube:Cube.TOP,originSides:[Side.TOP]},{targetLayer:Layer.MIDDLE,targetCube:Cube.BOTTOM,targetSides:[Side.BOTTOM],originLayer:Layer.MIDDLE,originCube:Cube.BOTTOM,originSides:[Side.BOTTOM]}],rotateFaceColorsYLeftCornerMoves=[{targetLayer:Layer.FRONT,targetCube:Cube.TOP_LEFT,targetSides:[Side.FRONT,Side.LEFT],originLayer:Layer.FRONT,originCube:Cube.TOP_RIGHT,originSides:[Side.RIGHT,Side.FRONT]},{targetLayer:Layer.FRONT,targetCube:Cube.TOP_RIGHT,targetSides:[Side.FRONT,Side.RIGHT],originLayer:Layer.BACK,originCube:Cube.TOP_RIGHT,originSides:[Side.RIGHT,Side.BACK]},{targetLayer:Layer.FRONT,targetCube:Cube.BOTTOM_LEFT,targetSides:[Side.FRONT,Side.LEFT],originLayer:Layer.FRONT,originCube:Cube.BOTTOM_RIGHT,originSides:[Side.RIGHT,Side.FRONT]},{targetLayer:Layer.FRONT,targetCube:Cube.BOTTOM_RIGHT,targetSides:[Side.FRONT,Side.RIGHT],originLayer:Layer.BACK,originCube:Cube.BOTTOM_RIGHT,originSides:[Side.RIGHT,Side.BACK]},{targetLayer:Layer.BACK,targetCube:Cube.TOP_LEFT,targetSides:[Side.LEFT,Side.BACK],originLayer:Layer.FRONT,originCube:Cube.TOP_LEFT,originSides:[Side.FRONT,Side.LEFT]},{targetLayer:Layer.BACK,targetCube:Cube.TOP_RIGHT,targetSides:[Side.RIGHT,Side.BACK],originLayer:Layer.BACK,originCube:Cube.TOP_LEFT,originSides:[Side.BACK,Side.LEFT]},{targetLayer:Layer.BACK,targetCube:Cube.BOTTOM_LEFT,targetSides:[Side.LEFT,Side.BACK],originLayer:Layer.FRONT,originCube:Cube.BOTTOM_LEFT,originSides:[Side.FRONT,Side.LEFT]},{targetLayer:Layer.BACK,targetCube:Cube.BOTTOM_RIGHT,targetSides:[Side.RIGHT,Side.BACK],originLayer:Layer.BACK,originCube:Cube.BOTTOM_LEFT,originSides:[Side.BACK,Side.LEFT]}],rotateFaceColorsYLeftEdgeMoves=[{targetLayer:Layer.FRONT,targetCube:Cube.TOP,targetSides:[Side.FRONT],originLayer:Layer.MIDDLE,originCube:Cube.TOP_RIGHT,originSides:[Side.RIGHT]},{targetLayer:Layer.FRONT,targetCube:Cube.LEFT,targetSides:[Side.LEFT,Side.FRONT],originLayer:Layer.FRONT,originCube:Cube.RIGHT,originSides:[Side.FRONT,Side.RIGHT]},{targetLayer:Layer.FRONT,targetCube:Cube.RIGHT,targetSides:[Side.FRONT,Side.RIGHT],originLayer:Layer.BACK,originCube:Cube.RIGHT,originSides:[Side.RIGHT,Side.BACK]},{targetLayer:Layer.FRONT,targetCube:Cube.BOTTOM,targetSides:[Side.FRONT],originLayer:Layer.MIDDLE,originCube:Cube.BOTTOM_RIGHT,originSides:[Side.RIGHT]},{targetLayer:Layer.MIDDLE,targetCube:Cube.TOP_LEFT,targetSides:[Side.LEFT],originLayer:Layer.FRONT,originCube:Cube.TOP,originSides:[Side.FRONT]},{targetLayer:Layer.MIDDLE,targetCube:Cube.TOP_RIGHT,targetSides:[Side.RIGHT],originLayer:Layer.BACK,originCube:Cube.TOP,originSides:[Side.BACK]},{targetLayer:Layer.MIDDLE,targetCube:Cube.BOTTOM_LEFT,targetSides:[Side.LEFT],originLayer:Layer.FRONT,originCube:Cube.BOTTOM,originSides:[Side.FRONT]},{targetLayer:Layer.MIDDLE,targetCube:Cube.BOTTOM_RIGHT,targetSides:[Side.RIGHT],originLayer:Layer.BACK,originCube:Cube.BOTTOM,originSides:[Side.BACK]},{targetLayer:Layer.BACK,targetCube:Cube.TOP,targetSides:[Side.BACK],originLayer:Layer.MIDDLE,originCube:Cube.TOP_LEFT,originSides:[Side.LEFT]},{targetLayer:Layer.BACK,targetCube:Cube.LEFT,targetSides:[Side.LEFT,Side.BACK],originLayer:Layer.FRONT,originCube:Cube.LEFT,originSides:[Side.FRONT,Side.LEFT]},{targetLayer:Layer.BACK,targetCube:Cube.RIGHT,targetSides:[Side.RIGHT,Side.BACK],originLayer:Layer.BACK,originCube:Cube.LEFT,originSides:[Side.BACK,Side.LEFT]},{targetLayer:Layer.BACK,targetCube:Cube.BOTTOM,targetSides:[Side.BACK],originLayer:Layer.MIDDLE,originCube:Cube.BOTTOM_LEFT,originSides:[Side.LEFT]}],rotateFaceColorsYLeftCenterMoves=[{targetLayer:Layer.FRONT,targetCube:Cube.CENTER,targetSides:[Side.FRONT],originLayer:Layer.MIDDLE,originCube:Cube.RIGHT,originSides:[Side.RIGHT]},{targetLayer:Layer.MIDDLE,targetCube:Cube.LEFT,targetSides:[Side.LEFT],originLayer:Layer.FRONT,originCube:Cube.CENTER,originSides:[Side.FRONT]},{targetLayer:Layer.MIDDLE,targetCube:Cube.RIGHT,targetSides:[Side.RIGHT],originLayer:Layer.BACK,originCube:Cube.CENTER,originSides:[Side.BACK]},{targetLayer:Layer.BACK,targetCube:Cube.CENTER,targetSides:[Side.BACK],originLayer:Layer.MIDDLE,originCube:Cube.LEFT,originSides:[Side.LEFT]},{targetLayer:Layer.MIDDLE,targetCube:Cube.TOP,targetSides:[Side.TOP],originLayer:Layer.MIDDLE,originCube:Cube.TOP,originSides:[Side.TOP]},{targetLayer:Layer.MIDDLE,targetCube:Cube.BOTTOM,targetSides:[Side.BOTTOM],originLayer:Layer.MIDDLE,originCube:Cube.BOTTOM,originSides:[Side.BOTTOM]}],rotateFaceColorsXUpCornerMoves=[{targetLayer:Layer.FRONT,targetCube:Cube.TOP_LEFT,targetSides:[Side.FRONT,Side.TOP],originLayer:Layer.FRONT,originCube:Cube.BOTTOM_LEFT,originSides:[Side.BOTTOM,Side.FRONT]},{targetLayer:Layer.FRONT,targetCube:Cube.TOP_RIGHT,targetSides:[Side.FRONT,Side.TOP],originLayer:Layer.FRONT,originCube:Cube.BOTTOM_RIGHT,originSides:[Side.BOTTOM,Side.FRONT]},{targetLayer:Layer.FRONT,targetCube:Cube.BOTTOM_LEFT,targetSides:[Side.FRONT,Side.BOTTOM],originLayer:Layer.BACK,originCube:Cube.BOTTOM_LEFT,originSides:[Side.BOTTOM,Side.BACK]},{targetLayer:Layer.FRONT,targetCube:Cube.BOTTOM_RIGHT,targetSides:[Side.FRONT,Side.BOTTOM],originLayer:Layer.BACK,originCube:Cube.BOTTOM_RIGHT,originSides:[Side.BOTTOM,Side.BACK]},{targetLayer:Layer.BACK,targetCube:Cube.TOP_LEFT,targetSides:[Side.TOP,Side.BACK],originLayer:Layer.FRONT,originCube:Cube.TOP_LEFT,originSides:[Side.FRONT,Side.TOP]},{targetLayer:Layer.BACK,targetCube:Cube.TOP_RIGHT,targetSides:[Side.TOP,Side.BACK],originLayer:Layer.FRONT,originCube:Cube.TOP_RIGHT,originSides:[Side.FRONT,Side.TOP]},{targetLayer:Layer.BACK,targetCube:Cube.BOTTOM_LEFT,targetSides:[Side.BACK,Side.BOTTOM],originLayer:Layer.BACK,originCube:Cube.TOP_LEFT,originSides:[Side.TOP,Side.BACK]},{targetLayer:Layer.BACK,targetCube:Cube.BOTTOM_RIGHT,targetSides:[Side.BACK,Side.BOTTOM],originLayer:Layer.BACK,originCube:Cube.TOP_RIGHT,originSides:[Side.TOP,Side.BACK]}],rotateFaceColorsXUpEdgeMoves=[{targetLayer:Layer.FRONT,targetCube:Cube.TOP,targetSides:[Side.FRONT,Side.TOP],originLayer:Layer.FRONT,originCube:Cube.BOTTOM,originSides:[Side.BOTTOM,Side.FRONT]},{targetLayer:Layer.FRONT,targetCube:Cube.LEFT,targetSides:[Side.FRONT],originLayer:Layer.MIDDLE,originCube:Cube.BOTTOM_LEFT,originSides:[Side.BOTTOM]},{targetLayer:Layer.FRONT,targetCube:Cube.RIGHT,targetSides:[Side.FRONT],originLayer:Layer.MIDDLE,originCube:Cube.BOTTOM_RIGHT,originSides:[Side.BOTTOM]},{targetLayer:Layer.FRONT,targetCube:Cube.BOTTOM,targetSides:[Side.FRONT,Side.BOTTOM],originLayer:Layer.BACK,originCube:Cube.BOTTOM,originSides:[Side.BOTTOM,Side.BACK]},{targetLayer:Layer.MIDDLE,targetCube:Cube.TOP_LEFT,targetSides:[Side.TOP],originLayer:Layer.FRONT,originCube:Cube.LEFT,originSides:[Side.FRONT]},{targetLayer:Layer.MIDDLE,targetCube:Cube.TOP_RIGHT,targetSides:[Side.TOP],originLayer:Layer.FRONT,originCube:Cube.RIGHT,originSides:[Side.FRONT]},{targetLayer:Layer.MIDDLE,targetCube:Cube.BOTTOM_LEFT,targetSides:[Side.BOTTOM],originLayer:Layer.BACK,originCube:Cube.LEFT,originSides:[Side.BACK]},{targetLayer:Layer.MIDDLE,targetCube:Cube.BOTTOM_RIGHT,targetSides:[Side.BOTTOM],originLayer:Layer.BACK,originCube:Cube.RIGHT,originSides:[Side.BACK]},{targetLayer:Layer.BACK,targetCube:Cube.TOP,targetSides:[Side.TOP,Side.BACK],originLayer:Layer.FRONT,originCube:Cube.TOP,originSides:[Side.FRONT,Side.TOP]},{targetLayer:Layer.BACK,targetCube:Cube.LEFT,targetSides:[Side.BACK],originLayer:Layer.MIDDLE,originCube:Cube.TOP_LEFT,originSides:[Side.TOP]},{targetLayer:Layer.BACK,targetCube:Cube.RIGHT,targetSides:[Side.BACK],originLayer:Layer.MIDDLE,originCube:Cube.TOP_RIGHT,originSides:[Side.TOP]},{targetLayer:Layer.BACK,targetCube:Cube.BOTTOM,targetSides:[Side.BACK,Side.BOTTOM],originLayer:Layer.BACK,originCube:Cube.TOP,originSides:[Side.TOP,Side.BACK]}],rotateFaceColorsXUpCenterMoves=[{targetLayer:Layer.FRONT,targetCube:Cube.CENTER,targetSides:[Side.FRONT],originLayer:Layer.MIDDLE,originCube:Cube.BOTTOM,originSides:[Side.BOTTOM]},{targetLayer:Layer.MIDDLE,targetCube:Cube.TOP,targetSides:[Side.TOP],originLayer:Layer.FRONT,originCube:Cube.CENTER,originSides:[Side.FRONT]},{targetLayer:Layer.MIDDLE,targetCube:Cube.BOTTOM,targetSides:[Side.BOTTOM],originLayer:Layer.BACK,originCube:Cube.CENTER,originSides:[Side.BACK]},{targetLayer:Layer.BACK,targetCube:Cube.CENTER,targetSides:[Side.BACK],originLayer:Layer.MIDDLE,originCube:Cube.TOP,originSides:[Side.TOP]},{targetLayer:Layer.MIDDLE,targetCube:Cube.LEFT,targetSides:[Side.LEFT],originLayer:Layer.MIDDLE,originCube:Cube.LEFT,originSides:[Side.LEFT]},{targetLayer:Layer.MIDDLE,targetCube:Cube.RIGHT,targetSides:[Side.RIGHT],originLayer:Layer.MIDDLE,originCube:Cube.RIGHT,originSides:[Side.RIGHT]}],rotateFaceColorsXDownCornerMoves=[{targetLayer:Layer.FRONT,targetCube:Cube.TOP_LEFT,targetSides:[Side.FRONT,Side.TOP],originLayer:Layer.BACK,originCube:Cube.TOP_LEFT,originSides:[Side.TOP,Side.BACK]},{targetLayer:Layer.FRONT,targetCube:Cube.TOP_RIGHT,targetSides:[Side.FRONT,Side.TOP],originLayer:Layer.BACK,originCube:Cube.TOP_RIGHT,originSides:[Side.TOP,Side.BACK]},{targetLayer:Layer.FRONT,targetCube:Cube.BOTTOM_LEFT,targetSides:[Side.FRONT,Side.BOTTOM],originLayer:Layer.FRONT,originCube:Cube.TOP_LEFT,originSides:[Side.TOP,Side.FRONT]},{targetLayer:Layer.FRONT,targetCube:Cube.BOTTOM_RIGHT,targetSides:[Side.FRONT,Side.BOTTOM],originLayer:Layer.FRONT,originCube:Cube.TOP_RIGHT,originSides:[Side.TOP,Side.FRONT]},{targetLayer:Layer.BACK,targetCube:Cube.TOP_LEFT,targetSides:[Side.TOP,Side.BACK],originLayer:Layer.BACK,originCube:Cube.BOTTOM_LEFT,originSides:[Side.BACK,Side.BOTTOM]},{targetLayer:Layer.BACK,targetCube:Cube.TOP_RIGHT,targetSides:[Side.TOP,Side.BACK],originLayer:Layer.BACK,originCube:Cube.BOTTOM_RIGHT,originSides:[Side.BACK,Side.BOTTOM]},{targetLayer:Layer.BACK,targetCube:Cube.BOTTOM_LEFT,targetSides:[Side.BACK,Side.BOTTOM],originLayer:Layer.FRONT,originCube:Cube.BOTTOM_LEFT,originSides:[Side.BOTTOM,Side.FRONT]},{targetLayer:Layer.BACK,targetCube:Cube.BOTTOM_RIGHT,targetSides:[Side.BACK,Side.BOTTOM],originLayer:Layer.FRONT,originCube:Cube.BOTTOM_RIGHT,originSides:[Side.BOTTOM,Side.FRONT]}],rotateFaceColorsXDownEdgeMoves=[{targetLayer:Layer.FRONT,targetCube:Cube.TOP,targetSides:[Side.FRONT,Side.TOP],originLayer:Layer.BACK,originCube:Cube.TOP,originSides:[Side.TOP,Side.BACK]},{targetLayer:Layer.FRONT,targetCube:Cube.LEFT,targetSides:[Side.FRONT],originLayer:Layer.MIDDLE,originCube:Cube.TOP_LEFT,originSides:[Side.TOP]},{targetLayer:Layer.FRONT,targetCube:Cube.RIGHT,targetSides:[Side.FRONT],originLayer:Layer.MIDDLE,originCube:Cube.TOP_RIGHT,originSides:[Side.TOP]},{targetLayer:Layer.FRONT,targetCube:Cube.BOTTOM,targetSides:[Side.FRONT,Side.BOTTOM],originLayer:Layer.FRONT,originCube:Cube.TOP,originSides:[Side.TOP,Side.FRONT]},{targetLayer:Layer.MIDDLE,targetCube:Cube.TOP_LEFT,targetSides:[Side.TOP],originLayer:Layer.BACK,originCube:Cube.LEFT,originSides:[Side.BACK]},{targetLayer:Layer.MIDDLE,targetCube:Cube.TOP_RIGHT,targetSides:[Side.TOP],originLayer:Layer.BACK,originCube:Cube.RIGHT,originSides:[Side.BACK]},{targetLayer:Layer.MIDDLE,targetCube:Cube.BOTTOM_LEFT,targetSides:[Side.BOTTOM],originLayer:Layer.FRONT,originCube:Cube.LEFT,originSides:[Side.FRONT]},{targetLayer:Layer.MIDDLE,targetCube:Cube.BOTTOM_RIGHT,targetSides:[Side.BOTTOM],originLayer:Layer.FRONT,originCube:Cube.RIGHT,originSides:[Side.FRONT]},{targetLayer:Layer.BACK,targetCube:Cube.TOP,targetSides:[Side.TOP,Side.BACK],originLayer:Layer.BACK,originCube:Cube.BOTTOM,originSides:[Side.BACK,Side.BOTTOM]},{targetLayer:Layer.BACK,targetCube:Cube.LEFT,targetSides:[Side.BACK],originLayer:Layer.MIDDLE,originCube:Cube.BOTTOM_LEFT,originSides:[Side.BOTTOM]},{targetLayer:Layer.BACK,targetCube:Cube.RIGHT,targetSides:[Side.BACK],originLayer:Layer.MIDDLE,originCube:Cube.BOTTOM_RIGHT,originSides:[Side.BOTTOM]},{targetLayer:Layer.BACK,targetCube:Cube.BOTTOM,targetSides:[Side.BACK,Side.BOTTOM],originLayer:Layer.FRONT,originCube:Cube.BOTTOM,originSides:[Side.BOTTOM,Side.FRONT]}],rotateFaceColorsXDownCenterMoves=[{targetLayer:Layer.FRONT,targetCube:Cube.CENTER,targetSides:[Side.FRONT],originLayer:Layer.MIDDLE,originCube:Cube.TOP,originSides:[Side.TOP]},{targetLayer:Layer.MIDDLE,targetCube:Cube.TOP,targetSides:[Side.TOP],originLayer:Layer.BACK,originCube:Cube.CENTER,originSides:[Side.BACK]},{targetLayer:Layer.MIDDLE,targetCube:Cube.BOTTOM,targetSides:[Side.BOTTOM],originLayer:Layer.FRONT,originCube:Cube.CENTER,originSides:[Side.FRONT]},{targetLayer:Layer.BACK,targetCube:Cube.CENTER,targetSides:[Side.BACK],originLayer:Layer.MIDDLE,originCube:Cube.BOTTOM,originSides:[Side.BOTTOM]},{targetLayer:Layer.MIDDLE,targetCube:Cube.LEFT,targetSides:[Side.LEFT],originLayer:Layer.MIDDLE,originCube:Cube.LEFT,originSides:[Side.LEFT]},{targetLayer:Layer.MIDDLE,targetCube:Cube.RIGHT,targetSides:[Side.RIGHT],originLayer:Layer.MIDDLE,originCube:Cube.RIGHT,originSides:[Side.RIGHT]}];let turnTime=.3,turnEnabled=!0,currentOrientation=Orientation.Z;function setTurnTime(r){turnTime=r}let wasTwiceCube;function turnCube(direction,twice){if(turnEnabled){turnEnabled=!1;let axis,degree;if(direction==Direction.UP||direction==Direction.DOWN)axis=Orientation.X;else if(direction==Direction.LEFT||direction==Direction.RIGHT)axis=Orientation.Y;else if(direction==Direction.TILT_LEFT||direction==Direction.TILT_RIGHT)axis=Orientation.Z;else throw new Error;if(direction==Direction.UP||direction==Direction.LEFT||direction==Direction.TILT_RIGHT)degree=-Math.PI/2;else if(direction==Direction.DOWN||direction==Direction.RIGHT||direction==Direction.TILT_LEFT)degree=Math.PI/2;else throw new Error;orientLayersZ(),twice&&(setTurnTime(turnTime*.7),wasTwiceCube=!0),eval(`gsap.to(layers.rotation, {
            duration: ${turnTime},
            ${axis}: ${degree}
        })`),setTimeout(()=>{layers.rotation.set(0,0,0),direction==Direction.UP?rotateFaceColorsXUp():direction==Direction.DOWN?rotateFaceColorsXDown():direction==Direction.LEFT?rotateFaceColorsYLeft():direction==Direction.RIGHT?rotateFaceColorsYRight():direction==Direction.TILT_LEFT?rotateFaceColorsZLeft():direction==Direction.TILT_RIGHT&&rotateFaceColorsZRight(),turnEnabled=!0,!twice&&autoplay.checked&&next.dispatchEvent(new InputEvent("input")),twice&&turnCube(direction),wasTwiceCube&&(setTurnTime(turnTime/.7),wasTwiceCube=!1)},turnTime*1100)}}let wasTwiceLayer;function turn(r,e,t){turnEnabled=!1,r==CubeLayer.FRONT||r==CubeLayer.BACK||r==CubeLayer.S?orientLayersZ():r==CubeLayer.TOP||r==CubeLayer.BOTTOM||r==CubeLayer.E?orientLayersY():(r==CubeLayer.RIGHT||r==CubeLayer.LEFT||r==CubeLayer.M)&&orientLayersX();let n=0;r==CubeLayer.BACK||r==CubeLayer.BOTTOM||r==CubeLayer.RIGHT?n=2:(r==CubeLayer.E||r==CubeLayer.M||r==CubeLayer.S)&&(n=1);let i=Math.PI/2;(r==CubeLayer.FRONT&&e==Direction.RIGHT||r==CubeLayer.BACK&&e==Direction.RIGHT||r==CubeLayer.LEFT&&e==Direction.DOWN||r==CubeLayer.RIGHT&&e==Direction.DOWN||r==CubeLayer.TOP&&e==Direction.LEFT||r==CubeLayer.BOTTOM&&e==Direction.LEFT||r==CubeLayer.M&&e==Direction.DOWN||r==CubeLayer.E&&e==Direction.LEFT||r==CubeLayer.S&&e==Direction.RIGHT)&&(i=-Math.PI/2);const a=layers.children[n];t&&(setTurnTime(turnTime*.7),wasTwiceLayer=!0),gsapWithCSS.to(a.rotation,{duration:turnTime,z:i}),setTimeout(()=>{i==-Math.PI/2?rotateLayerColorsRight(n,a):rotateLayerColorsLeft(n,a),a.rotation.z=0,turnEnabled=!0,orientLayersZ(),!t&&autoplay.checked&&next.dispatchEvent(new InputEvent("input")),t&&turn(r,e),wasTwiceLayer&&(setTurnTime(turnTime/.7),wasTwiceLayer=!1)},turnTime*1100)}function orientLayersZ(){(currentOrientation==Orientation.X||currentOrientation==Orientation.Y)&&(currentOrientation==Orientation.X?rotateFaceColorsYLeft():currentOrientation==Orientation.Y&&rotateFaceColorsXUp(),currentOrientation=Orientation.Z,layers.rotation.set(0,0,0))}function orientLayersY(){(currentOrientation==Orientation.Z||currentOrientation==Orientation.X)&&(currentOrientation==Orientation.X&&rotateFaceColorsYLeft(),rotateFaceColorsXDown(),currentOrientation=Orientation.Y,layers.rotation.set(-Math.PI/2,0,0))}function orientLayersX(){(currentOrientation==Orientation.Y||currentOrientation==Orientation.Z)&&(currentOrientation==Orientation.Y&&rotateFaceColorsXUp(),rotateFaceColorsYRight(),currentOrientation=Orientation.X,layers.rotation.set(0,-Math.PI/2,0))}function rotateLayerColorsRight(r,e){rotateLayerColors(rotateLayerColorsRightCornerMoves,rotateLayerColorsRightEgdeMoves,e,r,[Side.FRONT,Side.BACK])}function rotateLayerColorsLeft(r,e){rotateLayerColors(rotateLayerColorsLeftCornerMoves,rotateLayerColorsLeftEgdeMoves,e,r,[Side.FRONT,Side.BACK])}function rotateFaceColorsZRight(){for(let r=0;r<3;r++)rotateLayerColorsRight(r,layers.children[r])}function rotateFaceColorsZLeft(){for(let r=0;r<3;r++)rotateLayerColorsLeft(r,layers.children[r])}function rotateFaceColorsYRight(){rotateFaceColors(rotateFaceColorsYRightCornerMoves,rotateFaceColorsYRightEdgeMoves,rotateFaceColorsYRightCenterMoves,[Side.TOP,Side.BOTTOM])}function rotateFaceColorsYLeft(){rotateFaceColors(rotateFaceColorsYLeftCornerMoves,rotateFaceColorsYLeftEdgeMoves,rotateFaceColorsYLeftCenterMoves,[Side.TOP,Side.BOTTOM])}function rotateFaceColorsXUp(){rotateFaceColors(rotateFaceColorsXUpCornerMoves,rotateFaceColorsXUpEdgeMoves,rotateFaceColorsXUpCenterMoves,[Side.LEFT,Side.RIGHT])}function rotateFaceColorsXDown(){rotateFaceColors(rotateFaceColorsXDownCornerMoves,rotateFaceColorsXDownEdgeMoves,rotateFaceColorsXDownCenterMoves,[Side.LEFT,Side.RIGHT])}function rotateLayerColors(r,e,t,n,i){const a=[],s=[];for(let h=0;h<9;h++){const d=[],f=[];for(let g=0;g<6;g++)d.push(Color.BLACK),f.push(innerCubeBlackMaterial);a.push(d),s.push(f)}const o=cubeColors[n],l=innerCubeMaterials[n];r.forEach(h=>{for(let d=0;d<h.targetSides.length;d++)a[h.targetCube][h.targetSides[d]]=o[h.originCube][h.originSides[d]],s[h.targetCube][h.targetSides[d]]=l[h.originCube][h.originSides[d]];for(let d=0;d<i.length;d++)a[h.targetCube][i[d]]=o[h.originCube][i[d]],s[h.targetCube][i[d]]=l[h.originCube][i[d]]}),e.forEach(h=>{for(let d=0;d<h.targetSides.length;d++)a[h.targetCube][h.targetSides[d]]=o[h.originCube][h.originSides[d]],s[h.targetCube][h.targetSides[d]]=l[h.originCube][h.originSides[d]];for(let d=0;d<i.length;d++)a[h.targetCube][i[d]]=o[h.originCube][i[d]],s[h.targetCube][i[d]]=l[h.originCube][i[d]]});for(let h=0;h<i.length;h++)a[Cube.CENTER][i[h]]=o[Cube.CENTER][i[h]],s[Cube.CENTER][i[h]]=l[Cube.CENTER][i[h]];cubeColors[n]=a,innerCubeMaterials[n]=s;const c=[],u=[];t.children.forEach(h=>{const d=h.children.filter(f=>f.type=="Mesh");d[0]&&c.push(d[0]),d[1]&&u.push(d[1])});for(let h=0;h<a.length;h++){const d=a[h],f=[];for(let g=0;g<6;g++)for(let _=0;_<6;_++)f.push(...d[g]);c[h].geometry.setAttribute("color",new Float32BufferAttribute(f,3)),u[h].material=s[h]}}function rotateFaceColors(r,e,t,n){const i=[],a=[];for(let l=0;l<3;l++){const c=[],u=[];for(let h=0;h<9;h++){const d=[],f=[];for(let g=0;g<6;g++)d.push(Color.BLACK),f.push(innerCubeBlackMaterial);c.push(d),u.push(f)}i.push(c),a.push(u)}r.forEach(l=>{for(let c=0;c<l.targetSides.length;c++)i[l.targetLayer][l.targetCube][l.targetSides[c]]=cubeColors[l.originLayer][l.originCube][l.originSides[c]],a[l.targetLayer][l.targetCube][l.targetSides[c]]=innerCubeMaterials[l.originLayer][l.originCube][l.originSides[c]];for(let c=0;c<n.length;c++)i[l.targetLayer][l.targetCube][n[c]]=cubeColors[l.originLayer][l.originCube][n[c]],a[l.targetLayer][l.targetCube][n[c]]=innerCubeMaterials[l.originLayer][l.originCube][n[c]]}),e.forEach(l=>{for(let c=0;c<l.targetSides.length;c++)i[l.targetLayer][l.targetCube][l.targetSides[c]]=cubeColors[l.originLayer][l.originCube][l.originSides[c]],a[l.targetLayer][l.targetCube][l.targetSides[c]]=innerCubeMaterials[l.originLayer][l.originCube][l.originSides[c]];for(let c=0;c<n.length;c++)i[l.targetLayer][l.targetCube][n[c]]=cubeColors[l.originLayer][l.originCube][n[c]],a[l.targetLayer][l.targetCube][n[c]]=innerCubeMaterials[l.originLayer][l.originCube][n[c]]}),t.forEach(l=>{for(let c=0;c<l.targetSides.length;c++)i[l.targetLayer][l.targetCube][l.targetSides[c]]=cubeColors[l.originLayer][l.originCube][l.originSides[c]],a[l.targetLayer][l.targetCube][l.targetSides[c]]=innerCubeMaterials[l.originLayer][l.originCube][l.originSides[c]]});const s=[],o=[];layers.children.forEach(l=>{const c=[],u=[];l.children.forEach(h=>{const d=h.children.filter(f=>f.type=="Mesh");d[0]&&c.push(d[0]),d[1]&&u.push(d[1])}),s.push(c),o.push(u)});for(let l=0;l<i.length;l++){const c=i[l];for(let u=0;u<c.length;u++){const h=c[u],d=[];for(let f=0;f<6;f++)for(let g=0;g<6;g++)d.push(...h[f]);s[l][u].geometry.setAttribute("color",new Float32BufferAttribute(d,3)),o[l][u].material=a[l][u]}}cubeColors.splice(0,cubeColors.length,...i),innerCubeMaterials.splice(0,innerCubeMaterials.length,...a)}const solveSteps=assertExists(document.getElementById("solve-steps")),previousStep=assertExists(document.getElementById("previous-step")),currentStep=assertExists(document.getElementById("current-step")),nextStep=assertExists(document.getElementById("next-step"));function stringNotation(r){switch(r){case Notation.L:return"L";case Notation.Lp:return"L'";case Notation.L2:return"L2";case Notation.R:return"R";case Notation.Rp:return"R'";case Notation.R2:return"R2";case Notation.F:return"F";case Notation.Fp:return"F'";case Notation.F2:return"F2";case Notation.B:return"B";case Notation.Bp:return"B'";case Notation.B2:return"B2";case Notation.U:return"U";case Notation.Up:return"U'";case Notation.U2:return"U2";case Notation.D:return"D";case Notation.Dp:return"D'";case Notation.D2:return"D2";case Notation.M:return"M";case Notation.Mp:return"M'";case Notation.M2:return"M2";case Notation.E:return"E";case Notation.Ep:return"M'";case Notation.E2:return"E2";case Notation.S:return"S";case Notation.Sp:return"S'";case Notation.S2:return"S2";case Notation.x:return"X";case Notation.xp:return"X'";case Notation.x2:return"X2";case Notation.y:return"Y";case Notation.yp:return"Y'";case Notation.y2:return"Y2";case Notation.z:return"Z";case Notation.zp:return"Z'";case Notation.z2:return"Z2";default:return""}}function translateNotation(r){switch(r){case Notation.L:return{layer:!0,twice:!1,direction:Direction.DOWN,cubeLayer:CubeLayer.LEFT};case Notation.Lp:return{layer:!0,twice:!1,direction:Direction.UP,cubeLayer:CubeLayer.LEFT};case Notation.L2:return{layer:!0,twice:!0,direction:Direction.UP,cubeLayer:CubeLayer.LEFT};case Notation.R:return{layer:!0,twice:!1,direction:Direction.UP,cubeLayer:CubeLayer.RIGHT};case Notation.Rp:return{layer:!0,twice:!1,direction:Direction.DOWN,cubeLayer:CubeLayer.RIGHT};case Notation.R2:return{layer:!0,twice:!0,direction:Direction.DOWN,cubeLayer:CubeLayer.RIGHT};case Notation.F:return{layer:!0,twice:!1,direction:Direction.RIGHT,cubeLayer:CubeLayer.FRONT};case Notation.Fp:return{layer:!0,twice:!1,direction:Direction.LEFT,cubeLayer:CubeLayer.FRONT};case Notation.F2:return{layer:!0,twice:!0,direction:Direction.LEFT,cubeLayer:CubeLayer.FRONT};case Notation.B:return{layer:!0,twice:!1,direction:Direction.LEFT,cubeLayer:CubeLayer.BACK};case Notation.Bp:return{layer:!0,twice:!1,direction:Direction.RIGHT,cubeLayer:CubeLayer.BACK};case Notation.B2:return{layer:!0,twice:!0,direction:Direction.RIGHT,cubeLayer:CubeLayer.BACK};case Notation.U:return{layer:!0,twice:!1,direction:Direction.LEFT,cubeLayer:CubeLayer.TOP};case Notation.Up:return{layer:!0,twice:!1,direction:Direction.RIGHT,cubeLayer:CubeLayer.TOP};case Notation.U2:return{layer:!0,twice:!0,direction:Direction.RIGHT,cubeLayer:CubeLayer.TOP};case Notation.D:return{layer:!0,twice:!1,direction:Direction.RIGHT,cubeLayer:CubeLayer.BOTTOM};case Notation.Dp:return{layer:!0,twice:!1,direction:Direction.LEFT,cubeLayer:CubeLayer.BOTTOM};case Notation.D2:return{layer:!0,twice:!0,direction:Direction.LEFT,cubeLayer:CubeLayer.BOTTOM};case Notation.M:return{layer:!0,twice:!1,direction:Direction.DOWN,cubeLayer:CubeLayer.M};case Notation.Mp:return{layer:!0,twice:!1,direction:Direction.UP,cubeLayer:CubeLayer.M};case Notation.M2:return{layer:!0,twice:!0,direction:Direction.UP,cubeLayer:CubeLayer.M};case Notation.E:return{layer:!0,twice:!1,direction:Direction.RIGHT,cubeLayer:CubeLayer.E};case Notation.Ep:return{layer:!0,twice:!1,direction:Direction.LEFT,cubeLayer:CubeLayer.E};case Notation.E2:return{layer:!0,twice:!0,direction:Direction.LEFT,cubeLayer:CubeLayer.E};case Notation.S:return{layer:!0,twice:!1,direction:Direction.LEFT,cubeLayer:CubeLayer.S};case Notation.Sp:return{layer:!0,twice:!1,direction:Direction.RIGHT,cubeLayer:CubeLayer.S};case Notation.S2:return{layer:!0,twice:!0,direction:Direction.RIGHT,cubeLayer:CubeLayer.S};case Notation.x:return{layer:!1,twice:!1,direction:Direction.UP};case Notation.xp:return{layer:!1,twice:!1,direction:Direction.DOWN};case Notation.x2:return{layer:!1,twice:!0,direction:Direction.DOWN};case Notation.y:return{layer:!1,twice:!1,direction:Direction.LEFT};case Notation.yp:return{layer:!1,twice:!1,direction:Direction.RIGHT};case Notation.y2:return{layer:!1,twice:!0,direction:Direction.RIGHT};case Notation.z:return{layer:!1,twice:!1,direction:Direction.TILT_RIGHT};case Notation.zp:return{layer:!1,twice:!1,direction:Direction.TILT_LEFT};case Notation.z2:return{layer:!1,twice:!0,direction:Direction.TILT_LEFT};default:throw new Error}}function reversedDirection(r){switch(r){case Direction.DOWN:return Direction.UP;case Direction.UP:return Direction.DOWN;case Direction.LEFT:return Direction.RIGHT;case Direction.RIGHT:return Direction.LEFT;case Direction.TILT_LEFT:return Direction.TILT_RIGHT;case Direction.TILT_RIGHT:return Direction.TILT_LEFT}}let sequenceIdx=0,currentSequence;function setSolveStepsText(){previousStep.innerHTML="&#11164;",sequenceIdx>0&&(previousStep.innerText+=` ${stringNotation(currentSequence[sequenceIdx-1])}`),currentStep.innerHTML=stringNotation(currentSequence[sequenceIdx]),nextStep.innerHTML="&#11166;",sequenceIdx<currentSequence.length-1&&(nextStep.innerText=`${stringNotation(currentSequence[sequenceIdx+1])} ${nextStep.innerText}`)}function executeNextStep(){if(currentSequence&&sequenceIdx<currentSequence.length&&turnEnabled){const r=translateNotation(currentSequence[sequenceIdx]);if(r.layer){const e=assertExists(r.cubeLayer);turn(e,r.direction,r.twice)}else turnCube(r.direction,r.twice);sequenceIdx++,setSolveStepsText()}}function executePreviousStep(){if(currentSequence&&sequenceIdx>0&&turnEnabled){sequenceIdx--,setSolveStepsText();const r=translateNotation(currentSequence[sequenceIdx]);if(r.direction=reversedDirection(r.direction),r.layer){const e=assertExists(r.cubeLayer);turn(e,r.direction,r.twice)}else turnCube(r.direction,r.twice)}}previousStep.addEventListener("click",r=>{autoplay.checked=!1,executePreviousStep()});nextStep.addEventListener("click",executeNextStep);autoplay.addEventListener("change",r=>{autoplay.checked&&executeNextStep()});next.addEventListener("input",executeNextStep);function setupSequence(r){sequenceIdx=0,currentSequence=r,solveSteps.style.display="flex",setSolveStepsText(),autoplay.checked&&executeNextStep()}const solveErrorElement=assertExists(document.getElementById("solve-error"));function initCubeSolver(){assertExists(document.getElementById("solve")).addEventListener("click",r=>{const e=[];cubeColors.forEach(t=>{const n=[];t.forEach(i=>{const a=[];i.forEach(s=>{switch(s){case Color.BLACK:a.push(ColorNumber.BLACK);break;case Color.WHITE:a.push(ColorNumber.WHITE);break;case Color.RED:a.push(ColorNumber.RED);break;case Color.BLUE:a.push(ColorNumber.BLUE);break;case Color.GREEN:a.push(ColorNumber.GREEN);break;case Color.YELLOW:a.push(ColorNumber.YELLOW);break;case Color.ORANGE:a.push(ColorNumber.ORANGE);break}}),n.push(a)}),e.push(n)}),fetch("./Cube/Solve",{method:"POST",body:JSON.stringify(e),mode:"cors",headers:{"Content-type":"application/json; charset=UTF-8"}}).then(t=>{t.json().then(n=>{setupSequence(n.moves);const i=n.error;i?solveErrorElement.style.display="block":solveErrorElement.style.display="none",solveErrorElement.innerText=i})})})}const style="";function WorkerWrapper$1(){return new Worker("/assets/correction-worker-39cc1224.js")}function WorkerWrapper(){return new Worker("/assets/color-identifier-worker-bdba00ce.js")}const white="white",red="red",green="green",blue="blue",yellow="yellow",orange="orange",cornerPossibleColors=[[orange,green,yellow],[yellow,orange,green],[green,yellow,orange],[orange,yellow,blue],[yellow,blue,orange],[blue,orange,yellow],[orange,white,green],[white,green,orange],[green,orange,white],[orange,blue,white],[blue,white,orange],[white,orange,blue],[red,yellow,green],[yellow,green,red],[green,red,yellow],[red,blue,yellow],[blue,yellow,red],[yellow,red,blue],[red,green,white],[green,white,red],[white,red,green],[red,white,blue],[white,blue,red],[blue,red,white]],cornerColoredSidesList=[{layer:Layer.FRONT,cube:Cube.TOP_LEFT,sides:[Side.FRONT,Side.LEFT,Side.TOP]},{layer:Layer.FRONT,cube:Cube.TOP_RIGHT,sides:[Side.FRONT,Side.TOP,Side.RIGHT]},{layer:Layer.FRONT,cube:Cube.BOTTOM_LEFT,sides:[Side.FRONT,Side.BOTTOM,Side.LEFT]},{layer:Layer.FRONT,cube:Cube.BOTTOM_RIGHT,sides:[Side.FRONT,Side.RIGHT,Side.BOTTOM]},{layer:Layer.BACK,cube:Cube.TOP_LEFT,sides:[Side.BACK,Side.TOP,Side.LEFT]},{layer:Layer.BACK,cube:Cube.TOP_RIGHT,sides:[Side.BACK,Side.RIGHT,Side.TOP]},{layer:Layer.BACK,cube:Cube.BOTTOM_LEFT,sides:[Side.BACK,Side.LEFT,Side.BOTTOM]},{layer:Layer.BACK,cube:Cube.BOTTOM_RIGHT,sides:[Side.BACK,Side.BOTTOM,Side.RIGHT]}],edgePossibleColors=[[orange,yellow],[yellow,orange],[orange,white],[white,orange],[green,yellow],[yellow,green],[orange,green],[green,orange],[orange,blue],[blue,orange],[blue,yellow],[yellow,blue],[green,white],[white,green],[blue,white],[white,blue],[red,yellow],[yellow,red],[red,green],[green,red],[red,white],[white,red],[red,blue],[blue,red]],edgeColoredSidesList=[{layer:Layer.FRONT,cube:Cube.TOP,sides:[Side.FRONT,Side.TOP]},{layer:Layer.FRONT,cube:Cube.BOTTOM,sides:[Side.FRONT,Side.BOTTOM]},{layer:Layer.FRONT,cube:Cube.LEFT,sides:[Side.FRONT,Side.LEFT]},{layer:Layer.FRONT,cube:Cube.RIGHT,sides:[Side.FRONT,Side.RIGHT]},{layer:Layer.MIDDLE,cube:Cube.TOP_LEFT,sides:[Side.LEFT,Side.TOP]},{layer:Layer.MIDDLE,cube:Cube.TOP_RIGHT,sides:[Side.RIGHT,Side.TOP]},{layer:Layer.MIDDLE,cube:Cube.BOTTOM_LEFT,sides:[Side.LEFT,Side.BOTTOM]},{layer:Layer.MIDDLE,cube:Cube.BOTTOM_RIGHT,sides:[Side.RIGHT,Side.BOTTOM]},{layer:Layer.BACK,cube:Cube.TOP,sides:[Side.BACK,Side.TOP]},{layer:Layer.BACK,cube:Cube.BOTTOM,sides:[Side.BACK,Side.BOTTOM]},{layer:Layer.BACK,cube:Cube.LEFT,sides:[Side.BACK,Side.LEFT]},{layer:Layer.BACK,cube:Cube.RIGHT,sides:[Side.BACK,Side.RIGHT]}];function translateCountIdxToColor(r){switch(r){case 0:return white;case 1:return red;case 2:return green;case 3:return blue;case 4:return yellow;case 5:return orange}}function checkCounts(r){const e=new Array(6).fill(0);for(let t=0;t<3;t++)for(let n=0;n<9;n++)for(let i=0;i<6;i++)switch(r[t][n][i]){case white:e[0]++;break;case red:e[1]++;break;case green:e[2]++;break;case blue:e[3]++;break;case yellow:e[4]++;break;case orange:e[5]++;break}return e.filter(t=>t!==9).map((t,n)=>`<div>${translateCountIdxToColor(n)}: ${t}</div>`).join(`
`)}function translateCornerToString(r){switch(r.layer){case Layer.FRONT:switch(r.cube){case Cube.TOP_LEFT:return"Front top left";case Cube.TOP_RIGHT:return"Front top right";case Cube.BOTTOM_LEFT:return"Front bottom left";case Cube.BOTTOM_RIGHT:return"Front bottom right"}break;case Layer.BACK:switch(r.cube){case Cube.TOP_LEFT:return"Back top left";case Cube.TOP_RIGHT:return"Back top right";case Cube.BOTTOM_LEFT:return"Back bottom left";case Cube.BOTTOM_RIGHT:return"Back bottom right"}break}throw new Error}function checkCorners(r){return cornerColoredSidesList.filter(e=>{const t=r[e.layer][e.cube],n=e.sides,i=[t[n[0]],t[n[1]],t[n[2]]];return cornerPossibleColors.every(a=>{let s=0;for(;s<3&&i[s]==a[s];)s++;return s!==3})}).map(e=>`<div>${translateCornerToString(e)} corner</div>`).join(`
`)}function translateEdgeToString(r){switch(r.layer){case Layer.FRONT:switch(r.cube){case Cube.TOP:return"Front top";case Cube.BOTTOM:return"Front bottom";case Cube.LEFT:return"Front left";case Cube.RIGHT:return"Front right"}break;case Layer.MIDDLE:switch(r.cube){case Cube.TOP_LEFT:return"Middle top left";case Cube.TOP_RIGHT:return"Middle top right";case Cube.BOTTOM_LEFT:return"Middle bottom left";case Cube.BOTTOM_RIGHT:return"Middle bottom right"}break;case Layer.BACK:switch(r.cube){case Cube.TOP:return"Back top";case Cube.BOTTOM:return"Back bottom";case Cube.LEFT:return"Back left";case Cube.RIGHT:return"Back right"}break}throw new Error}function checkEdges(r){return edgeColoredSidesList.filter(e=>{const t=r[e.layer][e.cube],n=e.sides,i=[t[n[0]],t[n[1]]];return edgePossibleColors.every(a=>{let s=0;for(;s<2&&i[s]==a[s];)s++;return s!==2})}).map(e=>`<div>${translateEdgeToString(e)} edge</div>`).join(`
`)}function checkColors(r){const e=checkCounts(r),t=checkCorners(r),n=checkEdges(r),i=e===""?"":`
    <div>
        <h2>Wrong amount of colors:</h2>
        ${e}
    </div>`,a=t===""?"":`
    <div>
        <h2>Not possible corner colors:</h2>
        ${t}
    </div>`,s=n===""?"":`
    <div>
        <h2>Not possible edge colors:</h2>
        ${n}
    </div>`;return i+a+s}const identifiedColorsPopup=assertHTMLDialogElement(document.getElementById("identified-colors-dialog")),savedIdentifiedColorsPopup=assertHTMLDialogElement(document.getElementById("saved-identified-colors-dialog")),errorsElement=assertExists(document.getElementById("identified-colors-errors")),startIdentificationButton=assertExists(document.getElementById("start-identification")),identifiedColorSquares=document.querySelectorAll(".square"),video=assertHTMLVideoElement(document.getElementById("cube-video")),normalCanvas=assertHTMLCanvasElement(document.getElementById("normal-canvas")),normalCanvasOffscreen=normalCanvas.transferControlToOffscreen(),correctedCanvasOffscreen=assertHTMLCanvasElement(document.getElementById("corrected-canvas")).transferControlToOffscreen(),resultCanvasOffscreen=assertHTMLCanvasElement(document.getElementById("result-canvas")).transferControlToOffscreen(),popup=assertHTMLDialogElement(document.getElementById("color-identifier-dialog")),pNorm=assertHTMLInputElement(document.getElementById("p-norm")),exposure=assertHTMLInputElement(document.getElementById("exposure")),autoExposure=assertHTMLInputElement(document.getElementById("auto-exposure")),savedIdentifedColorSquares=document.querySelectorAll(".saved-identified-colors .square"),correctionWorker=new WorkerWrapper$1,identifierWorker=new WorkerWrapper,identifiedFaces=["Front","Right","Back","Left","Top","Bottom"],width=640,height=480;correctionWorker.postMessage({normalCanvas:normalCanvasOffscreen,correctedCanvas:correctedCanvasOffscreen,width,height},[normalCanvasOffscreen,correctedCanvasOffscreen]);identifierWorker.postMessage({resultCanvas:resultCanvasOffscreen,width,height},[resultCanvasOffscreen]);let identifiedCubeColors=[],identifiedInnerCubeMaterials=[],identifiedCubeColorStrings=[],identifiedColorStrings=[],faceIdx=0,stopped=!1,identifying=!1,recievedResponse=!0,autoColorIdentification=!0,selected="normal";assertExists(document.getElementById("normal-canvas-label")).addEventListener("click",r=>{selected="normal"});assertExists(document.getElementById("avg-canvas-label")).addEventListener("click",r=>{selected="avg-corrected"});assertExists(document.getElementById("max-canvas-label")).addEventListener("click",r=>{selected="max-corrected"});assertExists(document.getElementById("p-norm-canvas-label")).addEventListener("click",r=>{selected="p-norm-corrected"});assertExists(document.getElementById("auto-detect-label")).addEventListener("click",r=>{selected="auto-detect-start"});assertExists(document.getElementById("auto-detect")).addEventListener("click",r=>{correctionWorker.addEventListener("message",correctionWorkerMessageHandler),selected="auto-detect"});assertExists(document.getElementById("close-color-identifier")).addEventListener("click",r=>{endIdentification()});assertExists(document.getElementById("accept-colors")).addEventListener("click",r=>{setFaceColors(),setIdentifiedFaceText(),identifiedColorsPopup.close()});assertExists(document.getElementById("reject-colors")).addEventListener("click",r=>{identifying=!0,identifiedColorsPopup.close()});assertExists(document.getElementById("close-saved-identified-colors")).addEventListener("click",r=>{savedIdentifiedColorsPopup.close()});document.querySelectorAll("#saved-identified-colors-dialog .identify-color-button").forEach((r,e)=>{r.addEventListener("click",t=>{faceIdx=e,setIdentifiedFaceText(),savedIdentifiedColorsPopup.close(),popup.show()})});pNorm.addEventListener("input",r=>{correctionWorker.postMessage(parseInt(pNorm.value))});startIdentificationButton.addEventListener("click",r=>{identifying=!0});function endIdentification(){popup.close(),video.srcObject=null,video.currentTime=0,video.pause(),stopped=!0}function setIdentifiedFaceColors(){const r=[],e=[];layers.children.forEach(t=>{const n=[],i=[];t.children.forEach(a=>{const s=a.children.filter(o=>o.type=="Mesh");s[0]&&n.push(s[0]),s[1]&&i.push(s[1])}),r.push(n),e.push(i)});for(let t=0;t<identifiedCubeColors.length;t++){const n=identifiedCubeColors[t];for(let i=0;i<n.length;i++){const a=n[i],s=[];for(let o=0;o<6;o++)for(let l=0;l<6;l++)s.push(...a[o]);r[t][i].geometry.setAttribute("color",new Float32BufferAttribute(s,3)),e[t][i].material=identifiedInnerCubeMaterials[t][i]}}cubeColors.splice(0,cubeColors.length,...identifiedCubeColors),innerCubeMaterials.splice(0,innerCubeMaterials.length,...identifiedInnerCubeMaterials)}function translateStringColor(r){switch(r){case"white":return[Color.WHITE,innerCubeWhiteMaterial];case"red":return[Color.RED,innerCubeRedMaterial];case"blue":return[Color.BLUE,innerCubeBlueMaterial];case"yellow":return[Color.YELLOW,innerCubeYellowMaterial];case"green":return[Color.GREEN,innerCubeGreenMaterial];case"orange":return[Color.ORANGE,innerCubeOrangeMaterial];default:return[Color.BLACK,innerCubeBlackMaterial]}}function translateColorStrings(){return identifiedColorStrings.map(r=>translateStringColor(r))}function setSavedIdentifedColors(){for(let r=0;r<9;r++)savedIdentifedColorSquares[faceIdx*9+r].style.backgroundColor=identifiedColorStrings[r]}function setFrontFaceColors(){const r=translateColorStrings();for(let e=0;e<9;e++)identifiedCubeColors[Layer.FRONT][e][Side.FRONT]=r[e][0],identifiedInnerCubeMaterials[Layer.FRONT][e][Side.FRONT]=r[e][1],identifiedCubeColorStrings[Layer.FRONT][e][Side.FRONT]=identifiedColorStrings[e]}function setBackFaceColors(){const r=translateColorStrings();let e=0;for(let t=0;t<3;t++)for(let n=2;n>=0;n--)identifiedCubeColors[Layer.BACK][t*3+n][Side.BACK]=r[e][0],identifiedInnerCubeMaterials[Layer.BACK][t*3+n][Side.BACK]=r[e][1],identifiedCubeColorStrings[Layer.BACK][t*3+n][Side.BACK]=identifiedColorStrings[e],e++}function setLeftFaceColors(){const r=translateColorStrings();let e=0;for(let t=0;t<3;t++)for(let n=2;n>=0;n--)identifiedCubeColors[n][t*3][Side.LEFT]=r[e][0],identifiedInnerCubeMaterials[n][t*3][Side.LEFT]=r[e][1],identifiedCubeColorStrings[n][t*3][Side.LEFT]=identifiedColorStrings[e],e++}function setRightFaceColors(){const r=translateColorStrings();let e=0;for(let t=0;t<3;t++)for(let n=0;n<3;n++)identifiedCubeColors[n][t*3+2][Side.RIGHT]=r[e][0],identifiedInnerCubeMaterials[n][t*3+2][Side.RIGHT]=r[e][1],identifiedCubeColorStrings[n][t*3+2][Side.RIGHT]=identifiedColorStrings[e],e++}function setTopFaceColors(){const r=translateColorStrings();let e=0;for(let t=2;t>=0;t--)for(let n=2;n>=0;n--)identifiedCubeColors[n][t][Side.TOP]=r[e][0],identifiedInnerCubeMaterials[n][t][Side.TOP]=r[e][1],identifiedCubeColorStrings[n][t][Side.TOP]=identifiedColorStrings[e],e++}function setBottomFaceColors(){const r=translateColorStrings();let e=0;for(let t=6;t<9;t++)for(let n=2;n>=0;n--)identifiedCubeColors[n][t][Side.BOTTOM]=r[e][0],identifiedInnerCubeMaterials[n][t][Side.BOTTOM]=r[e][1],identifiedCubeColorStrings[n][t][Side.BOTTOM]=identifiedColorStrings[e],e++}function setIdentifiedFaceText(){startIdentificationButton.innerText=`Identify ${identifiedFaces[faceIdx]} Face`}function setFaceColors(){if(faceIdx==0?setFrontFaceColors():faceIdx==1?setRightFaceColors():faceIdx==2?setBackFaceColors():faceIdx==3?setLeftFaceColors():faceIdx==4?setTopFaceColors():faceIdx==5&&setBottomFaceColors(),setSavedIdentifedColors(),autoColorIdentification&&faceIdx++,faceIdx==6&&autoColorIdentification||!autoColorIdentification){autoColorIdentification=!1;const r=checkColors(identifiedCubeColorStrings);r?(errorsElement.innerHTML=r,savedIdentifiedColorsPopup.showModal()):(endIdentification(),setIdentifiedFaceColors())}}function showIdentifiedColors(){for(let r=0;r<9;r++)identifiedColorSquares[r].style.backgroundColor=identifiedColorStrings[r];identifiedColorsPopup.show()}identifierWorker.addEventListener("message",r=>{recievedResponse=!0;const e=r.data;e.every(t=>t!="")&&(identifiedColorStrings=e.map(t=>assertColorString(t)),showIdentifiedColors(),identifying=!1)});function correctionWorkerMessageHandler(r){if(stopped)return;const e=r.data;if(e.constructor===Uint8ClampedArray)correctionWorker.removeEventListener("message",correctionWorkerMessageHandler),identifierWorker.postMessage(e,[e.buffer]);else if(typeof e=="string"){correctionWorker.removeEventListener("message",correctionWorkerMessageHandler);const t=e.split("|");selected=t[0],assertExists(document.getElementById(`${selected.replace("-corrected","")}-canvas-label`)).click(),t.length>1&&(pNorm.value=t[1])}}function sendIdentifyRequest(){correctionWorker.addEventListener("message",correctionWorkerMessageHandler),correctionWorker.postMessage(selected)}function getWorkerMessage(r,e){return{bitmap:r,selectedVideo:e}}async function setFrame(r){await new Promise(t=>{correctionWorker.addEventListener("message",n=>{t(1)}),correctionWorker.postMessage(getWorkerMessage(r,selected),[r])})}function initColorIdentifier(){assertExists(document.getElementById("identify-colors")).addEventListener("click",r=>{autoColorIdentification=!0,faceIdx=0,identifiedCubeColors=[],identifiedInnerCubeMaterials=[],identifiedCubeColorStrings=[],setIdentifiedFaceText();for(let e=0;e<3;e++){const t=[],n=[],i=[];for(let a=0;a<9;a++){const s=[],o=[],l=[];for(let c=0;c<6;c++)s.push(Color.BLACK),o.push(innerCubeBlackMaterial),l.push("black");t.push(s),n.push(o),i.push(l)}identifiedCubeColors.push(t),identifiedInnerCubeMaterials.push(n),identifiedCubeColorStrings.push(i)}stopped=!1,navigator.mediaDevices.getUserMedia({audio:!1,video:{width,height}}).then(e=>{video.srcObject=e;const t=e.getTracks()[0];autoExposure.addEventListener("change",n=>{autoExposure.checked&&t.applyConstraints({advanced:[{exposureMode:"continuous"}]})}),exposure.addEventListener("input",n=>{autoExposure.checked=!1,t.applyConstraints({advanced:[{exposureMode:"manual"}]}).then(()=>{t.applyConstraints({advanced:[{exposureTime:exposure.value}]})})}),video.addEventListener("loadedmetadata",n=>{try{const i=async a=>{const s=await createImageBitmap(video);await setFrame(s),identifying&&recievedResponse&&(recievedResponse=!1,sendIdentifyRequest()),!video.ended&&!stopped&&video.requestVideoFrameCallback(i)};video.requestVideoFrameCallback(i),video.play(),popup.show()}catch{alert("Browser not supported")}})}).catch(e=>alert("No camera found"))})}const _changeEvent={type:"change"},_startEvent={type:"start"},_endEvent={type:"end"},_ray=new Ray,_plane=new Plane,TILT_LIMIT=Math.cos(70*MathUtils.DEG2RAD);class OrbitControls extends EventDispatcher{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new Vector3,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:MOUSE.ROTATE,MIDDLE:MOUSE.DOLLY,RIGHT:MOUSE.PAN},this.touches={ONE:TOUCH.ROTATE,TWO:TOUCH.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(R){R.addEventListener("keydown",M),this._domElementKeyEvents=R},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",M),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(_changeEvent),n.update(),a=i.NONE},this.update=function(){const R=new Vector3,J=new Quaternion().setFromUnitVectors(e.up,new Vector3(0,1,0)),de=J.clone().invert(),se=new Vector3,ue=new Quaternion,Ce=new Vector3,De=2*Math.PI;return function(){const le=n.object.position;R.copy(le).sub(n.target),R.applyQuaternion(J),o.setFromVector3(R),n.autoRotate&&a===i.NONE&&k(S()),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let G=n.minAzimuthAngle,te=n.maxAzimuthAngle;isFinite(G)&&isFinite(te)&&(G<-Math.PI?G+=De:G>Math.PI&&(G-=De),te<-Math.PI?te+=De:te>Math.PI&&(te-=De),G<=te?o.theta=Math.max(G,Math.min(te,o.theta)):o.theta=o.theta>(G+te)/2?Math.max(G,o.theta):Math.min(te,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.zoomToCursor&&A||n.object.isOrthographicCamera?o.radius=K(o.radius):o.radius=K(o.radius*c),R.setFromSpherical(o),R.applyQuaternion(de),le.copy(n.target).add(R),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0));let ce=!1;if(n.zoomToCursor&&A){let we=null;if(n.object.isPerspectiveCamera){const Ie=R.length();we=K(Ie*c);const Ge=Ie-we;n.object.position.addScaledVector(x,Ge),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const Ie=new Vector3(y.x,y.y,0);Ie.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),ce=!0;const Ge=new Vector3(y.x,y.y,0);Ge.unproject(n.object),n.object.position.sub(Ge).add(Ie),n.object.updateMatrixWorld(),we=R.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;we!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(we).add(n.object.position):(_ray.origin.copy(n.object.position),_ray.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(_ray.direction))<TILT_LIMIT?e.lookAt(n.target):(_plane.setFromNormalAndCoplanarPoint(n.object.up,n.target),_ray.intersectPlane(_plane,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),ce=!0);return c=1,A=!1,ce||se.distanceToSquared(n.object.position)>s||8*(1-ue.dot(n.object.quaternion))>s||Ce.distanceToSquared(n.target)>0?(n.dispatchEvent(_changeEvent),se.copy(n.object.position),ue.copy(n.object.quaternion),Ce.copy(n.target),ce=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Q),n.domElement.removeEventListener("pointerdown",Ae),n.domElement.removeEventListener("pointercancel",Ne),n.domElement.removeEventListener("wheel",L),n.domElement.removeEventListener("pointermove",Ee),n.domElement.removeEventListener("pointerup",Ne),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",M),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let a=i.NONE;const s=1e-6,o=new Spherical,l=new Spherical;let c=1;const u=new Vector3,h=new Vector2,d=new Vector2,f=new Vector2,g=new Vector2,_=new Vector2,m=new Vector2,p=new Vector2,v=new Vector2,T=new Vector2,x=new Vector3,y=new Vector2;let A=!1;const b=[],w={};function S(){return 2*Math.PI/60/60*n.autoRotateSpeed}function C(){return Math.pow(.95,n.zoomSpeed)}function k(R){l.theta-=R}function Z(R){l.phi-=R}const N=function(){const R=new Vector3;return function(de,se){R.setFromMatrixColumn(se,0),R.multiplyScalar(-de),u.add(R)}}(),B=function(){const R=new Vector3;return function(de,se){n.screenSpacePanning===!0?R.setFromMatrixColumn(se,1):(R.setFromMatrixColumn(se,0),R.crossVectors(n.object.up,R)),R.multiplyScalar(de),u.add(R)}}(),I=function(){const R=new Vector3;return function(de,se){const ue=n.domElement;if(n.object.isPerspectiveCamera){const Ce=n.object.position;R.copy(Ce).sub(n.target);let De=R.length();De*=Math.tan(n.object.fov/2*Math.PI/180),N(2*de*De/ue.clientHeight,n.object.matrix),B(2*se*De/ue.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(N(de*(n.object.right-n.object.left)/n.object.zoom/ue.clientWidth,n.object.matrix),B(se*(n.object.top-n.object.bottom)/n.object.zoom/ue.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function Y(R){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=R:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function H(R){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=R:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function V(R){if(!n.zoomToCursor)return;A=!0;const J=n.domElement.getBoundingClientRect(),de=R.clientX-J.left,se=R.clientY-J.top,ue=J.width,Ce=J.height;y.x=de/ue*2-1,y.y=-(se/Ce)*2+1,x.set(y.x,y.y,1).unproject(e).sub(e.position).normalize()}function K(R){return Math.max(n.minDistance,Math.min(n.maxDistance,R))}function j(R){h.set(R.clientX,R.clientY)}function F(R){V(R),p.set(R.clientX,R.clientY)}function X(R){g.set(R.clientX,R.clientY)}function oe(R){d.set(R.clientX,R.clientY),f.subVectors(d,h).multiplyScalar(n.rotateSpeed);const J=n.domElement;k(2*Math.PI*f.x/J.clientHeight),Z(2*Math.PI*f.y/J.clientHeight),h.copy(d),n.update()}function re(R){v.set(R.clientX,R.clientY),T.subVectors(v,p),T.y>0?Y(C()):T.y<0&&H(C()),p.copy(v),n.update()}function ee(R){_.set(R.clientX,R.clientY),m.subVectors(_,g).multiplyScalar(n.panSpeed),I(m.x,m.y),g.copy(_),n.update()}function fe(R){V(R),R.deltaY<0?H(C()):R.deltaY>0&&Y(C()),n.update()}function _e(R){let J=!1;switch(R.code){case n.keys.UP:R.ctrlKey||R.metaKey||R.shiftKey?Z(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(0,n.keyPanSpeed),J=!0;break;case n.keys.BOTTOM:R.ctrlKey||R.metaKey||R.shiftKey?Z(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(0,-n.keyPanSpeed),J=!0;break;case n.keys.LEFT:R.ctrlKey||R.metaKey||R.shiftKey?k(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(n.keyPanSpeed,0),J=!0;break;case n.keys.RIGHT:R.ctrlKey||R.metaKey||R.shiftKey?k(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(-n.keyPanSpeed,0),J=!0;break}J&&(R.preventDefault(),n.update())}function pe(){if(b.length===1)h.set(b[0].pageX,b[0].pageY);else{const R=.5*(b[0].pageX+b[1].pageX),J=.5*(b[0].pageY+b[1].pageY);h.set(R,J)}}function Le(){if(b.length===1)g.set(b[0].pageX,b[0].pageY);else{const R=.5*(b[0].pageX+b[1].pageX),J=.5*(b[0].pageY+b[1].pageY);g.set(R,J)}}function Ue(){const R=b[0].pageX-b[1].pageX,J=b[0].pageY-b[1].pageY,de=Math.sqrt(R*R+J*J);p.set(0,de)}function Se(){n.enableZoom&&Ue(),n.enablePan&&Le()}function O(){n.enableZoom&&Ue(),n.enableRotate&&pe()}function Fe(R){if(b.length==1)d.set(R.pageX,R.pageY);else{const de=W(R),se=.5*(R.pageX+de.x),ue=.5*(R.pageY+de.y);d.set(se,ue)}f.subVectors(d,h).multiplyScalar(n.rotateSpeed);const J=n.domElement;k(2*Math.PI*f.x/J.clientHeight),Z(2*Math.PI*f.y/J.clientHeight),h.copy(d)}function ge(R){if(b.length===1)_.set(R.pageX,R.pageY);else{const J=W(R),de=.5*(R.pageX+J.x),se=.5*(R.pageY+J.y);_.set(de,se)}m.subVectors(_,g).multiplyScalar(n.panSpeed),I(m.x,m.y),g.copy(_)}function xe(R){const J=W(R),de=R.pageX-J.x,se=R.pageY-J.y,ue=Math.sqrt(de*de+se*se);v.set(0,ue),T.set(0,Math.pow(v.y/p.y,n.zoomSpeed)),Y(T.y),p.copy(v)}function ve(R){n.enableZoom&&xe(R),n.enablePan&&ge(R)}function Be(R){n.enableZoom&&xe(R),n.enableRotate&&Fe(R)}function Ae(R){n.enabled!==!1&&(b.length===0&&(n.domElement.setPointerCapture(R.pointerId),n.domElement.addEventListener("pointermove",Ee),n.domElement.addEventListener("pointerup",Ne)),ie(R),R.pointerType==="touch"?z(R):Xe(R))}function Ee(R){n.enabled!==!1&&(R.pointerType==="touch"?ne(R):$e(R))}function Ne(R){me(R),b.length===0&&(n.domElement.releasePointerCapture(R.pointerId),n.domElement.removeEventListener("pointermove",Ee),n.domElement.removeEventListener("pointerup",Ne)),n.dispatchEvent(_endEvent),a=i.NONE}function Xe(R){let J;switch(R.button){case 0:J=n.mouseButtons.LEFT;break;case 1:J=n.mouseButtons.MIDDLE;break;case 2:J=n.mouseButtons.RIGHT;break;default:J=-1}switch(J){case MOUSE.DOLLY:if(n.enableZoom===!1)return;F(R),a=i.DOLLY;break;case MOUSE.ROTATE:if(R.ctrlKey||R.metaKey||R.shiftKey){if(n.enablePan===!1)return;X(R),a=i.PAN}else{if(n.enableRotate===!1)return;j(R),a=i.ROTATE}break;case MOUSE.PAN:if(R.ctrlKey||R.metaKey||R.shiftKey){if(n.enableRotate===!1)return;j(R),a=i.ROTATE}else{if(n.enablePan===!1)return;X(R),a=i.PAN}break;default:a=i.NONE}a!==i.NONE&&n.dispatchEvent(_startEvent)}function $e(R){switch(a){case i.ROTATE:if(n.enableRotate===!1)return;oe(R);break;case i.DOLLY:if(n.enableZoom===!1)return;re(R);break;case i.PAN:if(n.enablePan===!1)return;ee(R);break}}function L(R){n.enabled===!1||n.enableZoom===!1||a!==i.NONE||(R.preventDefault(),n.dispatchEvent(_startEvent),fe(R),n.dispatchEvent(_endEvent))}function M(R){n.enabled===!1||n.enablePan===!1||_e(R)}function z(R){switch(ae(R),b.length){case 1:switch(n.touches.ONE){case TOUCH.ROTATE:if(n.enableRotate===!1)return;pe(),a=i.TOUCH_ROTATE;break;case TOUCH.PAN:if(n.enablePan===!1)return;Le(),a=i.TOUCH_PAN;break;default:a=i.NONE}break;case 2:switch(n.touches.TWO){case TOUCH.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Se(),a=i.TOUCH_DOLLY_PAN;break;case TOUCH.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;O(),a=i.TOUCH_DOLLY_ROTATE;break;default:a=i.NONE}break;default:a=i.NONE}a!==i.NONE&&n.dispatchEvent(_startEvent)}function ne(R){switch(ae(R),a){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;Fe(R),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;ge(R),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ve(R),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Be(R),n.update();break;default:a=i.NONE}}function Q(R){n.enabled!==!1&&R.preventDefault()}function ie(R){b.push(R)}function me(R){delete w[R.pointerId];for(let J=0;J<b.length;J++)if(b[J].pointerId==R.pointerId){b.splice(J,1);return}}function ae(R){let J=w[R.pointerId];J===void 0&&(J=new Vector2,w[R.pointerId]=J),J.set(R.pageX,R.pageY)}function W(R){const J=R.pointerId===b[0].pointerId?b[1]:b[0];return w[J.pointerId]}n.domElement.addEventListener("contextmenu",Q),n.domElement.addEventListener("pointerdown",Ae),n.domElement.addEventListener("pointercancel",Ne),n.domElement.addEventListener("wheel",L,{passive:!1}),this.update()}}const ambientLight=new AmbientLight("white"),light1=new PointLight("white");light1.intensity=500;light1.position.set(5,5,5);const light2=new PointLight("white");light2.intensity=50;light2.position.set(-5,0,-1);const light3=new PointLight("lightpink");light3.intensity=50;light3.position.set(0,-3,-3);const scene=new Scene;scene.background=new Color$1().setColorName("mediumslateblue");scene.add(ambientLight,light1,light2,light3);const camera=new PerspectiveCamera(75,window.innerWidth/window.innerHeight,.1,1e3);camera.position.setZ(4.3);const canvas=document.getElementById("canvas");if(!canvas)throw new Error;const renderer=new WebGLRenderer({canvas,antialias:!0});renderer.setPixelRatio(window.devicePixelRatio);renderer.setSize(window.innerWidth,window.innerHeight);let hold;function setHold(r){hold=r}function clearHold(){clearInterval(hold)}for(let r=0;r<3;r++){const e=[],t=[];for(let n=0;n<9;n++){let i=Color.BLACK,a=Color.BLACK,s=Color.BLACK,o=Color.BLACK,l=Color.BLACK,c=Color.BLACK,u=innerCubeBlackMaterial,h=innerCubeBlackMaterial,d=innerCubeBlackMaterial,f=innerCubeBlackMaterial,g=innerCubeBlackMaterial,_=innerCubeBlackMaterial;n<3&&(s=Color.YELLOW,d=innerCubeYellowMaterial),n>5&&(o=Color.WHITE,f=innerCubeWhiteMaterial),n%3==0&&(a=Color.BLUE,h=innerCubeBlueMaterial),n%3==2&&(i=Color.GREEN,u=innerCubeGreenMaterial),r==0&&(l=Color.RED,g=innerCubeRedMaterial),r==2&&(c=Color.ORANGE,_=innerCubeOrangeMaterial),e.push([i,a,s,o,l,c]),t.push([u,h,d,f,g,_])}cubeColors.push(e),innerCubeMaterials.push(t)}const edgeWidth=.05,edgeOffset=.4851-2*edgeWidth/10,innerCubes=[];for(let r=0;r<3;r++){const e=new Group,t=cubeColors[r];for(let n=0;n<9;n++){const i=t[n],a=new BoxGeometry(1,1,1).toNonIndexed(),s=[];for(let d=0;d<6;d++)for(let f=0;f<6;f++)s.push(...i[d]);a.setAttribute("color",new Float32BufferAttribute(s,3));const o=new Group,l=new Mesh(a,cubeMaterials[r][n]),c=new BoxGeometry(.999,.999,.999);c.computeTangents();const u=new Mesh(c,assertExists(innerCubeMaterials[r][n]));o.add(l,u),u.visible=!1,innerCubes.push(u);const h=new Group;for(let d=0;d<12;d++){const f=new CubeEdge(.05);d<4&&(f.position.y+=edgeOffset,d==0&&(f.rotation.y+=Math.PI),f.meshes.splice(2,2),f.meshes.splice(4,2)),d>=4&&d<8&&(f.position.y-=edgeOffset,d==5&&(f.rotation.y+=Math.PI),f.meshes.splice(0,2),f.meshes.splice(2,2)),(d==0||d==4||d==8||d==10)&&(f.position.x-=edgeOffset),(d==1||d==5||d==9||d==11)&&(f.position.x+=edgeOffset),(d==2||d==6||d==8||d==9)&&(f.position.z-=edgeOffset),(d==3||d==7||d==10||d==11)&&(f.position.z+=edgeOffset),(d==6||d==3)&&(f.rotation.y-=Math.PI/2),(d==2||d==7)&&(f.rotation.y+=Math.PI/2),(d==9||d==10)&&(f.rotation.x-=Math.PI/2,d==9?(f.meshes.splice(2,2),f.meshes.splice(4,2)):(f.meshes.splice(0,2),f.meshes.splice(2,2))),(d==8||d==11)&&(f.rotation.x+=Math.PI/2,d==8?(f.meshes.splice(0,2),f.meshes.splice(2,2)):(f.meshes.splice(2,2),f.meshes.splice(4,2))),h.add(f)}o.add(h),n%3==0&&(o.position.x=-1),n%3==2&&(o.position.x=1),n<3&&(o.position.y=1),n>5&&(o.position.y=-1),e.add(o)}r==0?e.position.z=1:r==2&&(e.position.z=-1),layers.add(e)}scene.add(layers);scene.rotateX(.45);scene.rotateY(.5);const controls=new OrbitControls(camera,renderer.domElement);function animate(){requestAnimationFrame(animate),controls.update(),renderer.render(scene,camera)}animate();const transparentSlider=assertExists(document.getElementById("transparent"));transparentSlider.addEventListener("input",r=>{setOpacity(parseInt(r.target.value))});document.querySelectorAll("input[type=range]").forEach(r=>{r.addEventListener("input",e=>{const t=e.target,n=parseInt(t.min),i=parseInt(t.max),s=(parseInt(t.value)-n)*100/(i-n);t.style.backgroundSize=s+"% 100%"})});const size=1024*1024,opacityData=new Uint8Array(size*4),opacityDataTexture=new DataTexture(opacityData,1024,1024),position=new Vector2(0,0);function setOpacity(r){const e=opacityDataTexture.image.data,t=Math.floor(r/10*255);for(let n=0;n<size;n++){const i=n*4;e[i]=t,e[i+1]=t,e[i+2]=t,e[i+3]=1}renderer.copyTextureToTexture(position,opacityDataTexture,cubeAlphaMap)}function setParallax(){innerCubes.forEach(r=>{r.visible=!r.visible}),transparentSlider.value="0",transparentSlider.dispatchEvent(new Event("input")),setOpacity(0)}const cubeControls=assertExists(document.getElementById("cube-controls"));for(const r of cubeControls.children)for(const e of r.children)e.addEventListener("mousedown",()=>{turnCube(e.id),setHold(setInterval(()=>{turnCube(e.id)},2*turnTime*1e3))}),e.addEventListener("mouseup",()=>{clearHold()}),e.addEventListener("mouseleave",()=>{clearHold()});const layerControls=assertExists(document.getElementById("layer-controls"));for(const r of layerControls.children)for(const e of r.children){let t=e.id.split("-");e.addEventListener("click",()=>{turnEnabled&&turn(t[0],t[1])})}window.addEventListener("resize",()=>{camera.aspect=window.innerWidth/window.innerHeight,camera.updateProjectionMatrix(),renderer.setSize(window.innerWidth,window.innerHeight)});assertExists(document.getElementById("parallax")).addEventListener("click",setParallax);initCubeSolver();initColorIdentifier();
