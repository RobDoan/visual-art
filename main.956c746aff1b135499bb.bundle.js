webpackJsonp([1],{0:function(t,e,n){t.exports=n("cDNt")},cDNt:function(t,e,n){"use strict";function o(t){return i._17(0,[i._14(402653184,1,{cameraCanvas:0}),(t()(),i._3(0,null,null,3,"div",[["class","canvas-container"]],null,null,null,null,null)),(t()(),i._16(null,["\n  "])),(t()(),i._3(0,[[1,0],["camera",1]],null,0,"canvas",[["id","camera"]],null,null,null,null,null)),(t()(),i._16(null,["\n"])),(t()(),i._16(null,["\n\n"]))],null,null)}function r(t){return i._17(0,[(t()(),i._3(0,null,null,1,"app-root",[],null,null,null,o,p)),i._1(4243456,null,0,s,[u],null,null)],null,null)}Object.defineProperty(e,"__esModule",{value:!0});var i=n("/oeL"),a={production:!0},l=function(){function t(){}return t}(),c=n("ZGtO"),u=function(){function t(){THREEx.ArToolkitContext.baseURL="https://jeromeetienne.github.io/AR.js/"}return t.prototype.buildArToolkit=function(t,e,n){var o=this.createRenderer(e),r=this.createArToolKitSource(t,o),i=this.createARToolkitContext(n),a=function(){r.onResize(),r.copySizeTo(o.domElement),null!==i.arController&&r.copySizeTo(i.arController.canvas),r.onResizeElement(o.domElement)};return r.init(function(){r.copySizeTo(o.domElement),null!==i.arController&&r.copySizeTo(i.arController.canvas)}),window.addEventListener("resize",a),i.init(function(){n.projectionMatrix.copy(i.getProjectionMatrix())}),{renderer:o,arToolKitSource:r,arToolKitContext:i}},t.prototype.createArToolKitMarker=function(t,e){return new THREEx.ArMarkerControls(t,e,{type:"pattern",patternUrl:"https://s3.amazonaws.com/cop-test/pattern-visualart.patt"})},t.prototype.createSmoothedControls=function(t){return new THREEx.ArSmoothedControls(t,{lerpPosition:.4,lerpQuaternion:.3,lerpScale:1})},t.prototype.createArToolKitSource=function(t,e){return e&&e.domElement&&(t.displayWidth=e.domElement.width,t.displayHeight=e.domElement.height),new THREEx.ArToolkitSource(t)},t.prototype.createRenderer=function(t){var e=new c.j({canvas:t,alpha:!0,antialias:!0});return e.setClearColor(new c.b("lightgrey"),0),e.setSize(window.innerWidth,window.innerHeight),e.domElement.style.position="absolute",e.domElement.style.top="0px",e.domElement.style.left="0px",t.width=window.innerWidth,t.height=window.innerHeight,e},t.prototype.createARToolkitContext=function(t){var e=new THREEx.ArToolkitContext({cameraParametersUrl:THREEx.ArToolkitContext.baseURL+"data/data/camera_para.dat",detectionMode:"mono",maxDetectionRate:30,canvasWidth:240,canvasHeight:180});return e.init(function(){t.projectionMatrix.copy(e.getProjectionMatrix())}),e},t.ctorParameters=function(){return[]},t}(),s=function(){function t(t){this.arToolkitService=t,this.onRenderFcts=[],this.scene=new c.h,this.camera=new c.a,this.markerRoot=new c.d,this.smoothedRoot=new c.d,this.scene.add(this.camera),this.scene.add(this.markerRoot),this.scene.add(this.smoothedRoot)}return t.prototype.ngAfterViewInit=function(){var t=this,e=this.arToolkitService.buildArToolkit({sourceType:"webcam"},this.cameraCanvas.nativeElement,this.camera),n=e.renderer,o=e.arToolKitSource,r=e.arToolKitContext;this.onRenderFcts.push(function(){!1!==o.ready&&r.update(o.domElement)});var i=(this.arToolkitService.createArToolKitMarker(r,this.markerRoot),this.arToolkitService.createSmoothedControls(this.smoothedRoot));this.onRenderFcts.push(function(){i.update(t.markerRoot),n.render(t.scene,t.camera)}),this.createARObject();var a=null,l=function(e){requestAnimationFrame(l),a=a||e-1e3/60;var n=Math.min(200,e-a);a=e,t.onRenderFcts.forEach(function(t){t(n/1e3,e/1e3)})};window.requestAnimationFrame(l)},t.prototype.createARObject=function(){var t=new c.g(1,1,1),e=(new c.i).load("assets/Moon_Flower.jpg");e.needsUpdate=!0;var n=new c.f({map:e,side:c.c}),o=new c.e(t,n);o.rotation.x=-Math.PI/2,o.position.y=t.parameters.height/2,this.smoothedRoot.add(o)},t.ctorParameters=function(){return[{type:u}]},t}(),d=[".canvas-container[_ngcontent-%COMP%]{width:100%;height:50vh}"],h=[d],p=i._0({encapsulation:0,styles:h,data:{}}),m=i.Y("app-root",s,r,{},{},[]),_=n("qbdv"),f=n("fc+i"),w=i.Z(l,[s],function(t){return i._12([i._13(512,i.i,i.W,[[8,[m]],[3,i.i],i.x]),i._13(5120,i.v,i._11,[[3,i.v]]),i._13(4608,_.d,_.c,[i.v]),i._13(4608,i.h,i.h,[]),i._13(5120,i.a,i._4,[]),i._13(5120,i.t,i._9,[]),i._13(5120,i.u,i._10,[]),i._13(4608,f.b,f.s,[_.b]),i._13(6144,i.H,null,[f.b]),i._13(4608,f.e,f.f,[]),i._13(5120,f.c,function(t,e,n,o){return[new f.k(t),new f.o(e),new f.n(n,o)]},[_.b,_.b,_.b,f.e]),i._13(4608,f.d,f.d,[f.c,i.z]),i._13(135680,f.m,f.m,[_.b]),i._13(4608,f.l,f.l,[f.d,f.m]),i._13(6144,i.F,null,[f.l]),i._13(6144,f.p,null,[f.m]),i._13(4608,i.L,i.L,[i.z]),i._13(4608,f.g,f.g,[_.b]),i._13(4608,f.i,f.i,[_.b]),i._13(4608,u,u,[]),i._13(512,_.a,_.a,[]),i._13(1024,i.l,f.q,[]),i._13(1024,i.b,function(t,e){return[f.r(t,e)]},[[2,f.h],[2,i.y]]),i._13(512,i.c,i.c,[[2,i.b]]),i._13(131584,i._2,i._2,[i.z,i.X,i.r,i.l,i.i,i.c]),i._13(2048,i.e,null,[i._2]),i._13(512,i.d,i.d,[i.e]),i._13(512,f.a,f.a,[[3,f.a]]),i._13(512,l,l,[])])});a.production&&Object(i.R)(),Object(f.j)().bootstrapModuleFactory(w).catch(function(t){return console.log(t)})},gFIY:function(t,e){function n(t){return Promise.resolve().then(function(){throw new Error("Cannot find module '"+t+"'.")})}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id="gFIY"}},[0]);