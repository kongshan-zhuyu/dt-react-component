"use strict";(self.webpackChunkdt_react_component=self.webpackChunkdt_react_component||[]).push([[2019,2321],{18406:function(I,_,e){e.r(_);var y=e(82548),p=e.n(y),h=e(58570),E=e(50959),o=e(9995),r=e(55437),n=e(3846),t=e(8950),f=e(83076),i=e(11527);_.default=function(){return(0,i.jsx)(r.MxGraphContainer,{style:{height:400},config:{tooltips:!0,highlight:!0},graphData:[{taskId:"test-1",taskName:"\u4F60\u597D-1",childNode:[{taskId:"test-11",taskName:"\u4F60\u597D-11",childNode:[]},{taskId:"test-12",taskName:"\u4F60\u597D-12",childNode:[{taskId:"test-21",taskName:"\u4F60\u597D-21",childNode:[{taskId:"test-31",taskName:"\u4F60\u597D-31",childNode:[]}]}]}]}],onDrawVertex:function(){return"whiteSpace=wrap;fillColor=#f5ffe6;strokeColor=#12bc6a;"},onRenderActions:function(m){return(0,i.jsxs)("div",{style:{display:"grid",gridGap:5,gridTemplateColumns:"15px 15px"},children:[(0,i.jsx)(h.default,{title:"\u653E\u5927",children:(0,i.jsx)(n.Z,{onClick:function(){return m.zoomIn()}})}),(0,i.jsx)(h.default,{title:"\u7F29\u5C0F",children:(0,i.jsx)(t.Z,{onClick:function(){return m.zoomOut()}})})]})},onRenderCell:function(m){if(m.vertex&&m.value){var g=m.value;if(g)return o.renderToString((0,i.jsxs)("div",{children:[(0,i.jsx)("span",{children:g.taskName}),(0,i.jsx)("br",{}),(0,i.jsx)("span",{children:g.taskId})]}))}return""},onRenderTooltips:function(m){return m.vertex&&m.value?m.value.taskName:""}})}},6972:function(I,_,e){e.r(_);var y=e(50959),p=e(9995),h=e(55437),E=e(83076),o=e(11527);_.default=function(){return(0,o.jsx)(h.MxGraphContainer,{style:{height:400},config:{tooltips:!1,highlight:!0},graphData:[{taskId:"test-1",taskName:"\u4F60\u597D-1",taskType:1,childNode:[{taskId:"test-11",taskName:"\u4F60\u597D-11",taskType:2,childNode:[]},{taskId:"test-12",taskName:"\u4F60\u597D-12",taskType:3,childNode:[{taskId:"test-21",taskName:"\u4F60\u597D-21",taskType:4,childNode:[{taskId:"test-31",taskName:"\u4F60\u597D-31",taskType:5,childNode:[]}]}]}]}],onDrawVertex:function(n){var t=["#fffbe6","#e6f6ff","#f5ffe6","#fff1f0","#e6e9f2"],f=["#fdb313","#3f87ff","#12bc6a","#fe615c","#5b6da6"];return"whiteSpace=wrap;fillColor="+t[n.taskType-1]+";strokeColor="+f[n.taskType-1]+";"},onContextMenu:function(n,t){var f=["\u6267\u884C\u4E2D","\u90E8\u7F72\u4E2D","\u53D6\u6D88\u4E2D","\u8FD0\u884C\u6210\u529F","\u8FD0\u884C\u5931\u8D25"];return t.vertex?[{id:"operation",title:f[n.taskType-1],callback:function(){alert("\u5F53\u524D vertex \u5904\u4E8E"+f[n.taskType-1])}},{id:"remove",title:"\u5220\u9664\u5F53\u524D\u8282\u70B9",callback:function(){console.log("\u5220\u9664")}}]:[{id:"remove",title:"\u5220\u9664\u8FDE\u7EBF",callback:function(){console.log("\u5220\u9664")}}]},onRenderCell:function(n){if(n.vertex&&n.value){var t=n.value;if(t)return p.renderToString((0,o.jsxs)("div",{children:[(0,o.jsx)("span",{children:t.taskName}),(0,o.jsx)("br",{}),(0,o.jsx)("span",{children:t.taskId})]}))}return""}})}},80753:function(I,_,e){e.r(_);var y=e(50959),p=e(9995),h=e(55437),E=e(83076),o=e(11527);_.default=function(){return(0,o.jsx)(h.MxGraphContainer,{enableDrag:!0,style:{height:400},config:{tooltips:!1,connectable:!0,highlight:!0},graphData:[{taskId:"test-1",taskName:"\u4F60\u597D-1",taskType:1,childNode:[{taskId:"test-11",taskName:"\u4F60\u597D-11",taskType:2,childNode:[]},{taskId:"test-12",taskName:"\u4F60\u597D-12",taskType:3,childNode:[{taskId:"test-21",taskName:"\u4F60\u597D-21",taskType:4,childNode:[{taskId:"test-31",taskName:"\u4F60\u597D-31",taskType:5,childNode:[]}]}]}]}],onDropWidgets:function(n,t,f,i,v){console.group("onDropWidgets"),console.log("node:",n),console.log("graph:",t),console.log("target:",f),console.log("x and y:",i,v),console.groupEnd();var m="randomId__"+new Date().valueOf();t.insertVertex(t.getDefaultParent(),m,{taskName:n.innerText,taskId:m},i,v,210,50,"whiteSpace=wrap;fillColor=#f5ffe6;strokeColor=#12bc6a;")},onCellsChanged:function(n){console.group("onCellsChanged"),console.log("cell:",n),console.groupEnd()},onDrawVertex:function(){return"whiteSpace=wrap;fillColor=#f5ffe6;strokeColor=#12bc6a;"},onRenderCell:function(n){if(n.vertex&&n.value){var t=n.value;if(t)return p.renderToString((0,o.jsxs)("div",{children:[(0,o.jsx)("span",{children:t.taskName}),(0,o.jsx)("br",{}),(0,o.jsx)("span",{children:t.taskId})]}))}return""},onGetPreview:function(n){var t=document.createElement("div");return t.style.width="210px",t.style.height="50px",t.style.border="1px solid #ddd",t.style.textAlign="center",t.dataset.name=n.innerText,t.innerHTML=p.renderToString((0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("span",{children:"\u65B0\u8282\u70B9"}),(0,o.jsx)("br",{}),(0,o.jsx)("span",{children:n.innerText})]})),t},onRenderWidgets:function(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{style:{height:20,background:"#ddd"},children:"\u62D6\u62FD\u7EC4\u4EF6"}),(0,o.jsxs)("ul",{style:{listStyle:"none",margin:0,padding:0},children:[(0,o.jsx)("li",{className:h.WIDGETS_PREFIX+"__",style:{cursor:"move",margin:"5px 0"},children:"\u4F60\u597D1"}),(0,o.jsx)("li",{className:h.WIDGETS_PREFIX+"__",style:{cursor:"move",margin:"5px 0"},children:"\u4F60\u597D2"}),(0,o.jsx)("li",{className:h.WIDGETS_PREFIX+"__",style:{cursor:"move",margin:"5px 0"},children:"\u4F60\u597D3"}),(0,o.jsx)("li",{className:h.WIDGETS_PREFIX+"__",style:{cursor:"move",margin:"5px 0"},children:"\u4F60\u597D4"})]})]})}})}},20286:function(I,_,e){e.r(_);var y=e(50959),p=e(9995),h=e(55437),E=e(83076),o=e(11527);_.default=function(){return(0,o.jsx)(h.MxGraphContainer,{style:{height:400},config:{tooltips:!1,highlight:!0},graphData:[{taskId:"test-1",taskName:"\u4F60\u597D-1",taskType:1,childNode:[{taskId:"test-11",taskName:"\u4F60\u597D-11",taskType:2,childNode:[]},{taskId:"test-12",taskName:"\u4F60\u597D-12",taskType:3,childNode:[{taskId:"test-21",taskName:"\u4F60\u597D-21",taskType:4,childNode:[{taskId:"test-31",taskName:"\u4F60\u597D-31",taskType:5,childNode:[]}]}]}]}],onClick:function(n,t,f){console.group("onClick"),console.log("\u5F53\u524D\u70B9\u51FB\u7684 cell \u662F:",n),console.log("\u5F53\u524D\u70B9\u51FB\u7684 graph \u662F:",t),console.log("\u5F53\u524D\u70B9\u51FB\u7684 dom \u662F:",f.target),console.groupEnd()},onDoubleClick:function(n,t,f){console.group("onDoubleClick"),console.log("\u5F53\u524D\u70B9\u51FB\u7684 cell \u662F:",n),console.log("\u5F53\u524D\u70B9\u51FB\u7684 graph \u662F:",t),console.log("\u5F53\u524D\u70B9\u51FB\u7684 dom \u662F:",f.target),console.groupEnd()},onContainerChanged:function(n){console.group("onContainerChanged"),console.log(n),console.groupEnd()},onKeyDown:function(){return[{id:"remove",method:"bindControlKey",keyCode:8,func:function(){alert("\u5220\u9664")}}]},onContextMenu:function(){return[{id:"remove",title:"\u5220\u9664"}]},onDrawVertex:function(){return"whiteSpace=wrap;fillColor=#f5ffe6;strokeColor=#12bc6a;"},onRenderCell:function(n){if(n.vertex&&n.value){var t=n.value;if(t)return p.renderToString((0,o.jsxs)("div",{children:[(0,o.jsx)("span",{children:t.taskName}),(0,o.jsx)("br",{}),(0,o.jsx)("span",{children:t.taskId})]}))}return""}})}},49636:function(I,_,e){e.r(_);var y=e(93525),p=e.n(y),h=e(57213),E=e.n(h),o=e(52510),r=e.n(o),n=e(54306),t=e.n(n),f=e(50959),i=e(9995),v=e(55437),m=e(83076),g=e(11527);_.default=function(){var R=(0,f.useState)(!1),S=t()(R,2),l=S[0],M=S[1],b=(0,f.useState)("b"),P=t()(b,2),k=P[0],j=P[1],U=(0,f.useState)([{metaId:"1",metaInfo:{name:"tableName",type:1,list:["a","b","c","d"]},childNode:[{metaId:"2",metaInfo:{name:"tableName",type:2,list:["1-c"]}},{metaId:"3",metaInfo:{name:"tableName",type:2,list:["1-c"]}}]}]),A=t()(U,2),O=A[0],L=A[1],D=function(a){return a.metaId==="1"?{width:194,height:120}:{width:196,height:54}};return(0,g.jsx)(v.MxGraphContainer,{direction:"west",loading:l,style:{height:400},vertexSize:{width:196,height:54},config:{tooltips:!1,connectable:!1,highlight:!1,vertexMovable:!1,defaultEdgeStyle:function(a){var s,c=a.mxConstants,u=a.mxEdgeStyle;return s={},r()(s,c.STYLE_ROUNDED,1),r()(s,c.STYLE_CURVED,0),r()(s,c.STYLE_EDGE,u.EntityRelation),s},getPortOffset:function(a,s){var c=a[s?"visibleSourceState":"visibleTargetState"].text.node.querySelectorAll("div")[1],u=c.querySelector("li[data-id="+k+"]")||c.querySelector("li");return u}},vertexKey:"metaId",onClick:function(a,s,c){a.value.metaId==="1"&&(M(!0),setTimeout(function(){var u,C=[E()(E()({},O[0]),{},{childNode:[],parentNode:[]})],x=Math.random()>.5?"childNode":"parentNode",N=Math.floor(Math.random()*5+1);(u=C[0][x]).push.apply(u,p()(new Array(N).fill({}).map(function(W,B){return{metaId:"1-"+B,metaInfo:{name:"tableName",type:2,list:["1-c"]}}})));var T=c.target;j(T.dataset.id),L(C),M(!1)},300))},onGetSize:D,graphData:O,onDrawVertex:function(){return"whiteSpace=wrap;fillColor=#ffffff;strokeColor=#7460EF;"},onDrawEdge:function(){return"whiteSpace=wrap;fillColor=#ffffff;strokeColor=#7460EF;"},onRenderCell:function(a){if(a.vertex&&a.value){var s=a.value;if(s){var c=D(s);return i.renderToString((0,g.jsxs)("div",{style:{overflow:"hidden",width:c.width,height:c.height},children:[s.metaInfo.name,(0,g.jsx)("hr",{style:{borderTop:"1px solid #ddd",margin:0}}),(0,g.jsx)("div",{style:{width:"100%",overflow:"auto"},children:(0,g.jsx)("ul",{style:{listStyle:"none",margin:0,padding:0},children:s.metaInfo.list.map(function(u){return(0,g.jsx)("li",{"data-id":u,style:{height:20,borderBottom:"1px solid #ddd",background:k===u?"red":"transparent"},children:u},u)})})})]}))}}return""}})}},68470:function(I,_,e){e.r(_),e.d(_,{default:function(){return M}});var y=e(51317),p=e(96169),h=e(82548),E=e(58570),o=e(52510),r=e.n(o),n=e(93525),t=e.n(n),f=e(54306),i=e.n(f),v=e(50959),m=e(9995),g=e(55437),R=[{metaId:"test-1",metaInfo:{name:"tableName",type:1},childNode:[{metaId:"test-2",metaInfo:{name:"tableName2",type:2}},{metaId:"test-3",metaInfo:{name:"tableName3",type:2}},{metaId:"test-4",metaInfo:{name:"tableName4",type:2}},{metaId:"test-5",metaInfo:{name:"tableName5",type:2}}],parentNode:[{metaId:"test-6",metaInfo:{name:"tableName6",type:3}},{metaId:"test-7",metaInfo:{name:"tableName7",type:3}},{metaId:"test-8",metaInfo:{name:"tableName8",type:3}},{metaId:"test-9",metaInfo:{name:"tableName9",type:3}}]}],S=e(83076),l=e(11527),M=function(){var b=(0,v.useState)(!1),P=i()(b,2),k=P[0],j=P[1],U=(0,v.useState)(t()(R)),A=i()(U,2),O=A[0],L=A[1];return(0,l.jsx)(g.MxGraphContainer,{direction:"west",loading:k,style:{height:300},vertexSize:{width:196,height:54},config:{tooltips:!1,connectable:!1,highlight:!1,toolbarStyle:{bottom:100,right:0,top:"initial"},defaultEdgeStyle:function(d){var a,s=d.mxConstants,c=d.mxEdgeStyle;return a={},r()(a,s.STYLE_ROUNDED,1),r()(a,s.STYLE_CURVED,0),r()(a,s.STYLE_EDGE,c.EntityRelation),a}},vertexKey:"metaId",onContextMenu:function(d,a){return a.vertex?[{id:"insert",title:"\u63D2\u5165"},{id:"remove",title:"\u5220\u9664"}]:[]},onClick:function(d,a,s){var c=s.target;c.closest(".loadData")&&(j(!0),setTimeout(function(){L(function(u){for(var C=t()(u);C.length;){var x=C.pop();if(x.metaId===d.value.metaId){var N="randomId__"+new Date().valueOf(),T=d.value.metaInfo.type===2?"childNode":"parentNode";x[T]=x[T]||[],x[T].push({metaId:N,metaInfo:{name:N+"tableName",type:x.metaInfo.type}});break}C.push.apply(C,t()(x.childNode||[])),C.push.apply(C,t()(x.parentNode||[]))}return t()(u)}),j(!1)},300))},graphData:O,onDrawVertex:function(d){return["","whiteSpace=wrap;fillColor=#ffffff;strokeColor=#3F87FF;","whiteSpace=wrap;fillColor=#ffffff;strokeColor=#7460EF;","whiteSpace=wrap;fillColor=#ffffff;strokeColor=#26D6AE;"][d.metaInfo.type]},onDrawEdge:function(d,a){return d.value.metaInfo.type===3?"whiteSpace=wrap;fillColor=#ffffff;strokeColor=#26D6AE;":a.value.metaInfo.type===2?"whiteSpace=wrap;fillColor=#ffffff;strokeColor=#7460EF;":"whiteSpace=wrap;fillColor=#ffffff;strokeColor=#3F87FF;"},onRenderActions:function(d,a){var s=a.mxOutline;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[(0,l.jsx)("button",{onClick:function(){return d.center(!0,!0)},children:(0,l.jsx)(E.default,{title:"\u5C45\u4E2D",children:"center"})}),(0,l.jsx)("button",{onClick:function(){return p.default.success("download successfully")},children:(0,l.jsx)(E.default,{title:"\u4E0B\u8F7D",children:"download"})})]}),(0,l.jsxs)("div",{style:{marginTop:10},children:[(0,l.jsx)("button",{onClick:function(){var u=document.getElementById("outline");u.innerHTML?u.innerHTML="":new s(d,u)},children:(0,l.jsx)(E.default,{title:"\u5BFC\u822A\u5668",children:"navigator"})}),(0,l.jsx)("div",{id:"outline"})]})]})},onRenderCell:function(d){if(d.vertex&&d.value){var a=d.value;if(a){var s,c=a.metaInfo.type===3,u=c?"left":"right";return m.renderToString((0,l.jsxs)("div",{style:{position:"relative",width:196,height:54,paddingTop:10},children:[(0,l.jsx)("span",{children:a.metaInfo.name}),a.metaInfo.type!==1&&(0,l.jsx)("img",{className:"loadData",width:14,height:14,style:(s={cursor:"pointer",position:"absolute"},r()(s,u,0),r()(s,"top","50%"),r()(s,"transform","translate("+(c?"-50%":"50%")+",-50%)"),s),src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAAXNSR0IArs4c6QAAADNQTFRFAAAAscTOtr/Isb7HsLzGsL7Frr3Fr73Gr7zFr73Frr3FrrzFrrzGrrzF5+vt5+vu////mHsMmQAAAA10Uk5TABocTmtum7bZ8vP8/XH+TQkAAACASURBVCjPdVLZAoAgCMMjb8r//9oOjazcnpApzAFRg7Y+pBS81TRCucwd2aknbyIPiObOL4VfKEu//8kfzPVGRf4hnn2cHLdNQnfoFD1cq4RZk+UZwZb8nPAU5kSg1PpWQVOQ/sTaCVgKNody4QdHS9bREmwitB0PCo8WL8NsfXarIha/m4rePQAAAABJRU5ErkJggg=="})]}))}}return""},children:function(){return(0,l.jsx)("div",{children:(0,l.jsxs)("ul",{style:{listStyle:"none",display:"flex",justifyContent:"center",gap:"15px"},children:[(0,l.jsxs)("li",{children:[(0,l.jsx)("div",{style:{display:"inline-block",width:12,height:12,marginRight:5,background:"rgb(38, 214, 174)"}}),"1"]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("div",{style:{display:"inline-block",width:12,height:12,marginRight:5,background:"rgb(63, 135, 255)"}}),"2"]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("div",{style:{display:"inline-block",width:12,height:12,marginRight:5,background:"rgb(116, 96, 239)"}}),"3"]})]})})}})}},83076:function(){}}]);
