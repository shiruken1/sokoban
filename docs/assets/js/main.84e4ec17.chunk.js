(this["webpackJsonpreact-three-fiber-project"]=this["webpackJsonpreact-three-fiber-project"]||[]).push([[0],{167:function(t,e,n){},182:function(t,e,n){"use strict";n.r(e);var r={};n.r(r),n.d(r,"Cube",(function(){return w})),n.d(r,"Cylinder",(function(){return M})),n.d(r,"Cone",(function(){return S})),n.d(r,"Sphere",(function(){return E}));var o=n(10),i=n(17),c=n(14),a=n(128),s=n.n(a),u=n(0),j=n(43),l=n(30),b=n(198),h=n(195),d=(n(167),n(5)),f=n(12),O=function(t){var e=t.handleAddClick,n=Object(l.c)(),r=n.mouse,o=n.camera,i=Object(j.d)((function(){return{rotation:[-Math.PI/2,0,0]}})),a=Object(c.a)(i,1)[0];return Object(f.jsxs)("mesh",{ref:a,onClick:function(){var t=new d.Vector3(r.x,r.y,1);t.unproject(o);var n=t.sub(o.position).normalize(),i=-o.position.y/n.y,c=o.position.clone().add(n.multiplyScalar(i)),a=[c.x,5,c.z];e(a)},children:[Object(f.jsx)("meshStandardMaterial",{color:"#dddddd"}),Object(f.jsx)("planeGeometry",{attach:"geometry",args:[50,50]}),Object(f.jsx)("gridHelper",{position:[0,0,.005],args:[50,50,"blue","blue"],rotation:[-Math.PI/2,0,0]})]})},p=n(197),x=n(196),m=function(t){var e=t.handleMove,n=t.handleTurn,r=t.handleAdd,o=t.handleRemove;return Object(f.jsx)("div",{id:"panel",children:Object(f.jsxs)(p.a,{children:[Object(f.jsxs)(p.a.Menu,{position:"left",children:[Object(f.jsx)(x.a,{item:!0,text:"Move",upward:!0,options:[{key:1,text:"Up",onClick:function(){return e("Up")}},{key:2,text:"Right",onClick:function(){return e("Right")}},{key:3,text:"Down",onClick:function(){return e("Down")}},{key:4,text:"Left",onClick:function(){return e("Left")}}]}),Object(f.jsx)(x.a,{item:!0,text:"Turn",upward:!0,options:[{key:1,text:"Clockwise",onClick:function(){return n("CW")}},{key:2,text:"Counter-Clockwise",onClick:function(){return n("CCW")}}]})]}),Object(f.jsxs)(p.a.Menu,{position:"right",children:[Object(f.jsx)(x.a,{item:!0,text:"Add",upward:!0,options:[{key:1,text:"Cube",onClick:function(){return r("Cube")}},{key:2,text:"Cone",onClick:function(){return r("Cone")}},{key:3,text:"Sphere",onClick:function(){return r("Sphere")}},{key:4,text:"Cylinder",onClick:function(){return r("Cylinder")}}]}),Object(f.jsx)(x.a,{item:!0,text:"Remove",upward:!0,options:[{key:1,text:"Remove Current",onClick:function(){return o(!1)}},{key:2,text:"Remove All",onClick:function(){return o(!0)}}]})]})]})})},v=n(193),C=n(194),y=[0,0,0],g=[0,-Math.PI/2,0],k=[0,-Math.PI/2,0],P=[0,-Math.PI/2,-Math.PI/2],w=function(t){var e=t.movePosition,n=t.initPosition,r=t.rotation,o=t.highlightEdges,a=t.color,s=Object(j.b)((function(){return{mass:1,position:n,rotation:y}})),l=Object(c.a)(s,2),b=l[0],h=l[1],d=Object(u.useState)(),O=Object(c.a)(d,2),p=O[0],x=O[1];return Object(v.a)(p),Object(u.useEffect)((function(){var t,n=e.map((function(t){return 5*t}));(t=h.velocity).set.apply(t,Object(i.a)(n))}),[e]),Object(u.useEffect)((function(){h.rotation.set(0,r,0)}),[r]),Object(f.jsxs)("mesh",{ref:b,castShadow:!0,receiveShadow:!0,onPointerOver:function(){return x(!0)},onPointerOut:function(){return x(!1)},children:[Object(f.jsx)("boxGeometry",{attach:"geometry"}),Object(f.jsx)("meshLambertMaterial",{color:a}),Object(f.jsx)(C.a,{visible:o,scale:1.1,children:Object(f.jsx)("meshBasicMaterial",{transparent:!0,color:"#333",depthTest:!0})})]})},M=function(t){var e=t.movePosition,n=t.initPosition,r=t.rotation,o=t.highlightEdges,a=t.color,s=Object(j.c)((function(){return{mass:1,position:n,rotation:k}})),l=Object(c.a)(s,2),b=l[0],h=l[1],d=Object(u.useState)(),O=Object(c.a)(d,2),p=O[0],x=O[1];return Object(v.a)(p),Object(u.useEffect)((function(){var t,n=e.map((function(t){return 9*t}));(t=h.velocity).set.apply(t,Object(i.a)(n))}),[e]),Object(u.useEffect)((function(){h.rotation.set(0,r,0)}),[r]),Object(f.jsxs)("mesh",{ref:b,castShadow:!0,receiveShadow:!0,onPointerOver:function(){return x(!0)},onPointerOut:function(){return x(!1)},children:[Object(f.jsx)("cylinderGeometry",{args:[.5,.5,.75,12]}),Object(f.jsx)("meshLambertMaterial",{color:a}),Object(f.jsx)(C.a,{visible:o,scale:1.1,children:Object(f.jsx)("meshBasicMaterial",{transparent:!0,color:"#333",depthTest:!0})})]})},S=function(t){var e=t.movePosition,n=t.initPosition,r=t.rotation,o=t.highlightEdges,a=t.color,s=Object(j.c)((function(){return{mass:1,position:n,rotation:g,friction:1}})),l=Object(c.a)(s,2),b=l[0],h=l[1],d=Object(u.useState)(),O=Object(c.a)(d,2),p=O[0],x=O[1];return Object(v.a)(p),Object(u.useEffect)((function(){var t,n=e.map((function(t){return 9*t}));(t=h.velocity).set.apply(t,Object(i.a)(n))}),[e]),Object(u.useEffect)((function(){h.rotation.set(0,r,0)}),[r]),Object(f.jsxs)("mesh",{ref:b,castShadow:!0,receiveShadow:!0,onPointerOver:function(){return x(!0)},onPointerOut:function(){return x(!1)},children:[Object(f.jsx)("cylinderGeometry",{args:[0,1,2,16]}),Object(f.jsx)("meshLambertMaterial",{color:a}),Object(f.jsx)(C.a,{visible:o,scale:1.1,children:Object(f.jsx)("meshBasicMaterial",{transparent:!0,color:"#333",depthTest:!0})})]})},E=function(t){var e=t.movePosition,n=t.initPosition,r=t.rotation,o=t.highlightEdges,a=t.color,s=Object(j.e)((function(){return{mass:1,position:n,rotation:P,friction:1}})),l=Object(c.a)(s,2),b=l[0],h=l[1],d=Object(u.useState)(),O=Object(c.a)(d,2),p=O[0],x=O[1];return Object(v.a)(p),Object(u.useEffect)((function(){var t,n=e.map((function(t){return.1*t}));(t=h.velocity).set.apply(t,Object(i.a)(n))}),[e]),Object(u.useEffect)((function(){h.rotation.set(0,0,r)}),[r]),Object(f.jsxs)("mesh",{ref:b,castShadow:!0,receiveShadow:!0,onPointerOver:function(){return x(!0)},onPointerOut:function(){return x(!1)},children:[Object(f.jsx)("sphereGeometry",{}),Object(f.jsx)("meshLambertMaterial",{color:a}),Object(f.jsx)(C.a,{visible:o,scale:1.1,threshold:5,children:Object(f.jsx)("meshBasicMaterial",{transparent:!0,color:"#333",depthTest:!1})})]})};function L(){var t=Object(u.useState)(!1),e=Object(c.a)(t,2),n=e[0],a=e[1],d=Object(u.useState)([{rotation:0,type:"Cube",isCurrent:!0,color:"hotpink",id:s.a.generate(),initPosition:[0,3,0],movePosition:[0,0,0]}]),p=Object(c.a)(d,2),x=p[0],v=p[1],C={handleMove:function(t){var e=x.filter((function(t){return!t.isCurrent})),n=x.find((function(t){return t.isCurrent})),r=[0,0,0];switch(t){case"Up":r=[0,0,-1];break;case"Down":r=[0,0,1];break;case"Right":r=[1,0,0];break;case"Left":r=[-1,0,0]}n.movePosition=r,v([].concat(Object(i.a)(e),[n]))},handleTurn:function(t){var e=Math.PI/4,n=x.filter((function(t){return!t.isCurrent})),r=x.find((function(t){return t.isCurrent})),o=r.rotation;switch(t){case"CW":o+=e;break;case"CCW":o-=e}r.rotation=o,v([].concat(Object(i.a)(n),[r]))},handleAdd:function(t){n||a(t)},handleRemove:function(t){if(t||x.length<2)v([]);else{x.pop();var e=x.pop();e.isCurrent=!0,v([].concat(Object(i.a)(x),[e]))}}},y=x.map((function(t){var e=r[t.type];return Object(f.jsx)(e,Object(o.a)(Object(o.a)({},t),{},{highlightEdges:t.isCurrent}),t.id)}));return Object(f.jsxs)("div",{id:"app",children:[Object(f.jsxs)(l.a,{style:{cursor:n?"crosshair":"inherit"},shadows:!0,dpr:[1,2],gl:{alpha:!1},camera:{position:[0,10,0],fov:45},children:[Object(f.jsx)(b.a,{}),Object(f.jsx)(h.a,{}),Object(f.jsx)("ambientLight",{}),Object(f.jsx)("directionalLight",{position:[10,10,10],castShadow:!0,"shadow-mapSize":[2048,2048]}),Object(f.jsxs)(j.a,{children:[Object(f.jsx)(O,{handleAddClick:function(t){if(n){var e={rotation:0,initPosition:t,type:n,isCurrent:!0,id:s.a.generate(),movePosition:[0,0,0],color:16777215*Math.random()};if(0===x.length)v([e]);else{var r=x.pop();r.isCurrent=!1,v([].concat(Object(i.a)(x),[r,e]))}a(!1)}}}),y]}),Object(f.jsx)("color",{attach:"background",args:["lightblue"]})]}),Object(f.jsx)(m,Object(o.a)({id:"panel"},C))]})}var I=n(62),R=n.n(I);n(180);R.a.render(Object(f.jsx)(L,{}),document.getElementById("root"))}},[[182,1,2]]]);
//# sourceMappingURL=main.84e4ec17.chunk.js.map