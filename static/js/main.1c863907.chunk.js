(this.webpackJsonpavax3dnfts=this.webpackJsonpavax3dnfts||[]).push([[0],{31:function(e,t,n){},43:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var a=n(6),i=n.n(a),o=n(32),r=n.n(o),s=(n(31),n(1)),c=n(2),l=n(3),u=n(4),d=(n(43),n(35)),v=n(11),h=n(65),g=n(64),m=n(10),f=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(m.jsx)(h.a,{children:Object(m.jsxs)(g.a,{container:!0,children:[Object(m.jsx)(g.a,{item:!0,md:2,xs:6,children:Object(m.jsx)("div",{children:Object(m.jsx)("h1",{children:"Header"})})}),Object(m.jsx)(g.a,{item:!0,md:9,xs:!1}),Object(m.jsx)(g.a,{item:!0,md:1,xs:6,children:Object(m.jsx)("div",{children:Object(m.jsx)("h1",{children:"Wallet"})})})]})})}}]),n}(i.a.Component),x=f,j=n(8),y=n(13),p=n(0),b=new p.c,w=(i.a.Component,n(29)),P=n(20),O=n(19),z=new p.c,C=(i.a.Component,new p.c),S=(i.a.Component,new p.c),M=(i.a.Component,new p.c),F=(i.a.Component,new p.c),W=(i.a.Component,n(34)),k=n.p+"static/media/empty_warehouse_01_2k.37cf0892.hdr",R=(new W.a).load(k,(function(){R.mapping=p.j})),I=new p.c,E=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={shouldStopAutoRotate:!1},a.start=a.start.bind(Object(j.a)(a)),a.stop=a.stop.bind(Object(j.a)(a)),a.animate=a.animate.bind(Object(j.a)(a)),a.onWindowResize=a.onWindowResize.bind(Object(j.a)(a)),a.getControls1=a.getControls1.bind(Object(j.a)(a)),a.getControls2=a.getControls2.bind(Object(j.a)(a)),a.getCamera1=a.getCamera1.bind(Object(j.a)(a)),a.getCamera2=a.getCamera2.bind(Object(j.a)(a)),a.getScene1=a.getScene1.bind(Object(j.a)(a)),a.getLight1=a.getLight1.bind(Object(j.a)(a)),a.getSizes=a.getSizes.bind(Object(j.a)(a)),a.getWater=a.getWater.bind(Object(j.a)(a)),a.getRenderer=a.getRenderer.bind(Object(j.a)(a)),a.getEffectComposer=a.getEffectComposer.bind(Object(j.a)(a)),a}return Object(c.a)(n,[{key:"onWindowResize",value:function(){null!=this.mount&&(this.camera.aspect=this.mount.clientWidth/this.mount.clientHeight,this.camera.updateProjectionMatrix(),this.camera2.aspect=this.mount.clientWidth/this.mount.clientHeight,this.camera2.updateProjectionMatrix(),this.renderer.setSize(this.mount.clientWidth,this.mount.clientHeight))}},{key:"getControls1",value:function(e,t){var n=new y.a(e,t);return n.enableDamping=!0,n.minPolarAngle=Math.PI/5,n.maxPolarAngle=Math.PI/2.5,n.minDistance=1,n.maxDistance=2,n.rotateSpeed=1,n.enablePan=!1,n.autoRotate=!0,n}},{key:"getControls2",value:function(e,t){var n=new y.a(e,t);return n.enableDamping=!0,n.maxDistance=19,n.minDistance=15,n.minPolarAngle=1.19,n.maxPolarAngle=.6*Math.PI,n.enablePan=!1,n}},{key:"getCamera1",value:function(e){var t=new p.z(75,e.width/e.height,.1,100);return t.position.set(1,.01,1),t}},{key:"getCamera2",value:function(e){var t=new p.z(75,e.width/e.height,.1,100);return t.position.set(0,0,15),t}},{key:"getScene1",value:function(){var e=new p.G,t="#FFFFFF";return e.fog=new p.o(t,.1,5),e.background=new p.d(t),e}},{key:"getSizes",value:function(){var e={width:this.mount.clientWidth,height:this.mount.clientHeight};return window.addEventListener("resize",this.onWindowResize,!1),e}},{key:"getLight1",value:function(){var e=new p.h("#FFFFFF",1);return e.position.set(-1,2,4),e}},{key:"getWater",value:function(e,t){var n=new p.A(2,2,512,512),a=new p.H({vertexShader:"#define GLSLIFY 1\nuniform float uBigWavesElevation;\nuniform vec2 uBigWavesFrequency;\nuniform float uTime;\nuniform float uBigWavesSpeed;\nvarying float vElevation;\n\nuniform float uSmallWavesElevation;\nuniform float uSmallWavesFrequency;\nuniform float uSmallWavesSpeed;\nuniform float uSmallIterations;\n\nvec4 permute(vec4 x)\n{\n    return mod(((x*34.0)+1.0)*x, 289.0);\n}\nvec4 taylorInvSqrt(vec4 r)\n{\n    return 1.79284291400159 - 0.85373472095314 * r;\n}\nvec3 fade(vec3 t)\n{\n    return t*t*t*(t*(t*6.0-15.0)+10.0);\n}\n\nfloat cnoise(vec3 P)\n{\n    vec3 Pi0 = floor(P); \n    vec3 Pi1 = Pi0 + vec3(1.0); \n    Pi0 = mod(Pi0, 289.0);\n    Pi1 = mod(Pi1, 289.0);\n    vec3 Pf0 = fract(P); \n    vec3 Pf1 = Pf0 - vec3(1.0);\n    vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\n    vec4 iy = vec4(Pi0.yy, Pi1.yy);\n    vec4 iz0 = Pi0.zzzz;\n    vec4 iz1 = Pi1.zzzz;\n\n    vec4 ixy = permute(permute(ix) + iy);\n    vec4 ixy0 = permute(ixy + iz0);\n    vec4 ixy1 = permute(ixy + iz1);\n\n    vec4 gx0 = ixy0 / 7.0;\n    vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;\n    gx0 = fract(gx0);\n    vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\n    vec4 sz0 = step(gz0, vec4(0.0));\n    gx0 -= sz0 * (step(0.0, gx0) - 0.5);\n    gy0 -= sz0 * (step(0.0, gy0) - 0.5);\n\n    vec4 gx1 = ixy1 / 7.0;\n    vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;\n    gx1 = fract(gx1);\n    vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\n    vec4 sz1 = step(gz1, vec4(0.0));\n    gx1 -= sz1 * (step(0.0, gx1) - 0.5);\n    gy1 -= sz1 * (step(0.0, gy1) - 0.5);\n\n    vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);\n    vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);\n    vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);\n    vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);\n    vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);\n    vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);\n    vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);\n    vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);\n\n    vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\n    g000 *= norm0.x;\n    g010 *= norm0.y;\n    g100 *= norm0.z;\n    g110 *= norm0.w;\n    vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\n    g001 *= norm1.x;\n    g011 *= norm1.y;\n    g101 *= norm1.z;\n    g111 *= norm1.w;\n\n    float n000 = dot(g000, Pf0);\n    float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\n    float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\n    float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\n    float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\n    float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\n    float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\n    float n111 = dot(g111, Pf1);\n\n    vec3 fade_xyz = fade(Pf0);\n    vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\n    vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\n    float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); \n    return 2.2 * n_xyz;\n}\nvoid main()\n{\n    vec4 modelPosition = modelMatrix * vec4(position, 1.0);\n\n    float elevation = sin(modelPosition.x * uBigWavesFrequency.x + uTime * uBigWavesSpeed) * sin(modelPosition.z * uBigWavesFrequency.y + uTime * uBigWavesSpeed) * uBigWavesElevation;\n\n    elevation -= abs(cnoise(vec3(modelPosition.xz * 3.0, uTime * 0.2)) * 0.15);\n\n    for(float i = 1.0; i <= uSmallIterations; i++)\n    {\n        elevation -= abs(cnoise(vec3(modelPosition.xz * uSmallWavesFrequency * i, uTime * uSmallWavesSpeed)) * uSmallWavesElevation / i);\n    }\n    modelPosition.y += elevation;\n    vec4 viewPosition = viewMatrix * modelPosition;\n    vec4 projectedPosition = projectionMatrix * viewPosition;\n\n    gl_Position = projectedPosition;\n    vElevation = elevation;\n\n}",fragmentShader:"#define GLSLIFY 1\nuniform vec3 uDepthColor;\nuniform vec3 uSurfaceColor;\nvarying float vElevation;\nuniform float uColorOffset;\nuniform float uColorMultiplier;\n\nuniform vec3 fogColor;\n    uniform float fogNear;\n    uniform float fogFar;\nvoid main()\n{\n   float mixStrength = (vElevation + uColorOffset) * uColorMultiplier;\n    vec3 color = mix(uDepthColor, uSurfaceColor, mixStrength);\n\n    gl_FragColor = vec4(color, 1.0);\n    float depth = gl_FragCoord.z / gl_FragCoord.w;\n    float fogFactor = smoothstep( fogNear, fogFar, depth );\n    gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n\n}",uniforms:{uBigWavesElevation:{value:t},uBigWavesFrequency:{value:new p.N(1.826,.743)},uTime:{value:0},uBigWavesSpeed:{value:.75},uDepthColor:{value:new p.d("#517acd")},uSurfaceColor:{value:new p.d("#c9cfe8")},uColorOffset:{value:.028},uColorMultiplier:{value:3.45},uSmallWavesElevation:{value:.105},uSmallWavesFrequency:{value:3},uSmallWavesSpeed:{value:.1},uSmallIterations:{value:4},fogColor:{type:"c",value:e.fog.color},fogNear:{type:"f",value:e.fog.near},fogFar:{type:"f",value:e.fog.far}},fog:!0}),i=new p.u(n,a);return i.rotation.x=.5*-Math.PI,i.scale.x=8,i.scale.y=8,i}},{key:"getRenderer",value:function(e){var t=new p.Q({antialias:!0,alpha:!0});return t.setClearColor(0,0),t.setSize(e.width,e.height),t.setPixelRatio(Math.min(window.devicePixelRatio,2)),t}},{key:"getEffectComposer",value:function(e,t,n,a){var i=new p.P(800,600,{minFilter:p.r,magFilter:p.r,format:p.C}),o=new P.a(e,i);o.setSize(t.width,t.height),o.setPixelRatio(Math.min(window.devicePixelRatio,2));var r=new O.a(n,a);return o.addPass(r),o}},{key:"getRounderdCornersGeometry",value:function(){for(var e,t,n,a,i,o=.5,r=18,s=7.5,c=4.5,l=o/9,u=8.5/9,d=o/16,v=.96875,h=[-4,-8,0,4,-8,0,4,8,0,-4,-8,0,4,8,0,-4,8,0,-c,-s,0,-4,-s,0,-4,s,0,-c,-s,0,-4,s,0,-c,s,0,4,-s,0,c,-s,0,c,s,0,4,-s,0,c,s,0,4,s,0],g=[l,0,u,0,u,1,l,0,u,1,l,1,0,d,l,d,l,v,0,d,l,v,0,v,u,d,1,d,1,v,u,d,1,v,u,v],m=0,f=0;f<72;f++)e=2*Math.PI*(f+1)/72,t=f<r||f>=54?4:-4,n=f<36?s:-s,h.push(t,n,0,t+o*Math.cos(m),n+o*Math.sin(m),0,t+o*Math.cos(e),n+o*Math.sin(e),0),a=t=f<r||f>=54?u:l,i=f<36?v:d,g.push(a,i,a+l*Math.cos(m),i+d*Math.sin(m),a+l*Math.cos(e),i+d*Math.sin(e)),m=e;var x=new p.b;return x.setAttribute("position",new p.a(new Float32Array(h),3)),x.setAttribute("uv",new p.a(new Float32Array(g),2)),x}},{key:"getPlaneRoundedCorners",value:function(e){var t=new p.v({map:e.texture}),n=this.getRounderdCornersGeometry(),a=new p.u(n,t);return a.material.side=p.i,a.receiveShadow=!1,a}},{key:"getPlaneRoundedCornersTransparent",value:function(){var e=new p.w({transmission:1,thickness:3,roughness:0,envMapIntensity:1.5,envMap:R}),t=new p.I,n=1e-5,a=1-n;t.absarc(n,n,n,-Math.PI/2,-Math.PI,!0),t.absarc(n,14.00002,n,Math.PI,Math.PI/2,!0),t.absarc(8.00002,14.00002,n,Math.PI/2,0,!0),t.absarc(8.00002,n,n,0,-Math.PI/2,!0);var i=new p.l(t,{amount:.01,bevelEnabled:!0,bevelSegments:40,steps:1,bevelSize:a,bevelThickness:1,curveSegments:20});i.center();var o=new p.u(i,e);return o.material.side=p.i,o}},{key:"componentDidMount",value:function(){var e=this.getSizes(),t=this.getRenderer(e),n=t.domElement,a=this.getScene1(),i=this.getLight1(),o=this.getWater(a,.191),r=this.getWater(a,.291),s=this.getWater(a,.391),c=this.getCamera1(e),l=this.getControls1(c,n);a.add(o),a.add(r),a.add(s),a.add(i),a.add(c);var u=new p.G,d=this.getCamera2(e),v=this.getEffectComposer(t,e,u,d),h=this.getControls2(d,n),g=new p.P(512,512),m=this.getPlaneRoundedCorners(g),f=this.getPlaneRoundedCornersTransparent();if(u.add(i),u.add(f),u.add(m),this.props.hasRandomInitialPosition){var x=Math.ceil(5*Math.random())*(Math.round(Math.random())?1:-1),j=Math.ceil(3*Math.random())*(Math.round(Math.random())?1:-1);d.position.set(x,j,15)}this.scene=a,this.camera=c,this.camera2=d,this.renderer=t,this.water=o,this.water2=r,this.water3=s,this.plane=m,this.controls=l,this.controls2=h,this.renderTarget=g,this.effectComposer=v,this.mount.appendChild(this.renderer.domElement),this.start()}},{key:"componentWillUnmount",value:function(){this.stop(),this.mount.removeChild(this.renderer.domElement)}},{key:"start",value:function(){this.frameId||(this.frameId=requestAnimationFrame(this.animate))}},{key:"stop",value:function(){cancelAnimationFrame(this.frameId)}},{key:"animate",value:function(){var e=I.getElapsedTime();this.water.material.uniforms.uTime.value=2*e,this.water2.material.uniforms.uTime.value=1.3*e,this.water3.material.uniforms.uTime.value=e,this.controls.update(),this.controls2.update(),this.props.shouldRotateAutomatically&&!this.state.shouldStopAutoRotate&&(this.camera2.position.x=3*Math.sin(1.35*e)),this.renderScene(),this.frameId=window.requestAnimationFrame(this.animate)}},{key:"renderScene",value:function(){this.renderer.setRenderTarget(this.renderTarget),this.renderer.render(this.scene,this.camera,this.renderTarget),this.renderer.setRenderTarget(null),this.renderer.setClearColor(0,0),this.effectComposer.render()}},{key:"render",value:function(){var e=this;return Object(m.jsx)("div",{onMouseDown:function(){return e.setState({shouldStopAutoRotate:!0})},style:{width:"100%",height:"100%"},ref:function(t){e.mount=t}})}}]),n}(i.a.Component),_=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(x,{}),Object(m.jsx)(h.a,{maxWidth:"sm",children:Object(m.jsxs)(g.a,{container:!0,children:[Object(m.jsx)(g.a,{item:!0,md:4,xs:10,children:Object(m.jsx)("div",{style:{height:"360px",width:"100%"},children:Object(m.jsx)(E,{shouldRotateAutomatically:!0,hasRandomInitialPosition:!0})})}),Object(m.jsx)(g.a,{item:!0,md:4,xs:10,children:Object(m.jsx)("div",{style:{height:"360px",width:"100%"},children:Object(m.jsx)(E,{shouldRotateAutomatically:!0,hasRandomInitialPosition:!0})})}),Object(m.jsx)(g.a,{item:!0,md:4,xs:10,children:Object(m.jsx)("div",{style:{height:"360px",width:"100%"},children:Object(m.jsx)(E,{shouldRotateAutomatically:!0,hasRandomInitialPosition:!0})})})]})})]})}}]),n}(i.a.Component),A=_,T=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(m.jsx)("div",{style:{height:"100vh"},children:Object(m.jsx)(E,{})})}}]),n}(i.a.Component),q=T,B=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(m.jsx)(d.a,{children:Object(m.jsxs)(v.c,{children:[Object(m.jsx)(v.a,{exact:!0,path:"/",element:Object(m.jsx)(A,{})}),Object(m.jsx)(v.a,{exact:!0,path:"/home",element:Object(m.jsx)(A,{})}),Object(m.jsx)(v.a,{path:"/token/:id",element:Object(m.jsx)(q,{})}),Object(m.jsx)(v.a,{render:function(){return Object(m.jsx)("h1",{children:"Not Found"})}})]})})}}]),n}(i.a.Component),D=B,L=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(m.jsx)(D,{})}}]),n}(i.a.Component),G=L;r.a.render(Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsx)(G,{})}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.1c863907.chunk.js.map