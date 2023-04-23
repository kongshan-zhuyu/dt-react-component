"use strict";(self.webpackChunkdt_react_component=self.webpackChunkdt_react_component||[]).push([[6294,1755],{99783:function(R,l,e){e.r(l);var g=e(58383),U=e.n(g),E=e(43249),C=e(51317),s=e.n(C),f=e(96169),o=e(90650),W=e.n(o),d=e(35031),D=e(54306),P=e.n(D),r=e(50959),u=e(75997),M=e(8160),t=e(11527);l.default=function(){var O=u.Form.useForm(),A=P()(O,1),a=A[0],h=(0,r.useState)(!1),y=P()(h,2),I=y[0],T=y[1],i=function(){T(!0),(0,M.Z)().then(function(m){a.setFieldValue("data",m)}).finally(function(){T(!1)})},_=function(){a.validateFields().then(function(m){console.log(m)})};return(0,r.useEffect)(function(){i()},[]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(u.Form,{form:a,layout:"vertical",style:{height:400},children:(0,t.jsx)(u.Form.Table,{name:"data",loading:I,scroll:{y:280},columns:[{key:"name",title:"Name",dataIndex:"name",required:!0,rules:[{required:!0,message:"Please Input Name!"}],render:function(){return(0,t.jsx)(d.default,{placeholder:"Name"})}},{key:"gender",title:"gender",dataIndex:"gender",render:function(){return(0,t.jsx)(u.EllipsisText,{maxWidth:"95%"})}},{key:"address",title:"Address",dataIndex:"address",render:function(){return(0,t.jsx)(d.default,{placeholder:"Address"})}},{key:"company",title:"Company",dataIndex:"company",render:function(){return(0,t.jsx)(d.default,{placeholder:"Company"})}},{key:"op",title:"Configuration",render:function(m){var c=m.name;return(0,t.jsx)(E.default,{type:"link",onClick:function(){return f.default.info(JSON.stringify(a.getFieldValue(["data",c])))},children:"Configuration"})}}]})}),(0,t.jsx)(E.default,{type:"primary",onClick:_,style:{marginBottom:16},children:"Submit"})]})}},76204:function(R,l,e){e.r(l);var g=e(90650),U=e.n(g),E=e(35031),C=e(54306),s=e.n(C),f=e(50959),o=e(75997),W=e(8160),d=e(11527);l.default=function(){var D=o.Form.useForm(),P=s()(D,1),r=P[0],u=(0,f.useState)([]),M=s()(u,2),t=M[0],O=M[1],A=(0,f.useState)(!1),a=s()(A,2),h=a[0],y=a[1],I=function(){y(!0),(0,W.Z)().then(function(_){r.setFieldValue("data",_)}).finally(function(){y(!1)})};(0,f.useEffect)(function(){I()},[]);var T=(0,f.useMemo)(function(){return t.map(function(i){var _;return(_=r.getFieldsValue().data)===null||_===void 0?void 0:_.findIndex(function(n){return n.uuid===i})})},[t]);return(0,d.jsx)(o.Form,{form:r,layout:"vertical",style:{height:400},children:(0,d.jsx)(o.Form.Table,{name:"data",loading:h,scroll:{y:280},rowSelection:{selectedRowKeys:T,onChange:function(_){O(r.getFieldsValue().data.filter(function(n,m){return _.includes(m)}).map(function(n){return n.uuid}))}},columns:[{key:"name",title:"Name",dataIndex:"name",rules:[{required:!0,message:"Please Input Name!"}],render:function(_){var n=_.name;return(0,d.jsx)(E.default,{disabled:t.includes(r.getFieldValue(["data",n,"uuid"])),placeholder:"Name"})}},{key:"address",title:"Address",dataIndex:"address",render:function(){return(0,d.jsx)(E.default,{placeholder:"Address"})}},{key:"company",title:"Company",dataIndex:"company",render:function(){return(0,d.jsx)(E.default,{placeholder:"Company"})}}]})})}},37093:function(R,l,e){e.r(l);var g=e(58383),U=e.n(g),E=e(43249),C=e(51317),s=e.n(C),f=e(96169),o=e(91225),W=e.n(o),d=e(47715),D=e(90650),P=e.n(D),r=e(35031),u=e(54306),M=e.n(u),t=e(50959),O=e(75997),A=e(8160),a=e(11527);l.default=function(){var h=O.Form.useForm(),y=M()(h,1),I=y[0],T=(0,t.useState)(!1),i=M()(T,2),_=i[0],n=i[1],m=function(){n(!0),(0,A.Z)().then(function(v){I.setFieldValue("data",v)}).finally(function(){n(!1)})};return(0,t.useEffect)(function(){m()},[]),(0,a.jsx)(O.Form,{form:I,layout:"vertical",style:{height:400},children:(0,a.jsx)(O.Form.Table,{name:"data",loading:_,scroll:{y:280},columns:[{key:"name",title:"Name",dataIndex:"name",rules:[{required:!0,message:"Please Input Name!"}],render:function(){return(0,a.jsx)(r.default,{placeholder:"Name"})}},{key:"gender",title:"gender",dataIndex:"gender",required:!0,render:function(){return(0,a.jsx)(d.default,{options:[{label:"female",value:"female"},{label:"male",value:"male"}]})}},{key:"weight",title:"weight",dataIndex:"weight",dependencies:function(v){var K=M()(v,1),p=K[0];return[["data",p,"gender"]]},render:function(v,K,p){var L,B=v.name;return(p==null||(L=p.getFieldValue)===null||L===void 0?void 0:L.call(p,["data",B,"gender"]))==="female"?"--":(0,a.jsx)(O.EllipsisText,{maxWidth:"95%"})}},{key:"address",title:"Address",dataIndex:"address",render:function(){return(0,a.jsx)(r.default,{placeholder:"Address"})}},{key:"company",title:"Company",dataIndex:"company",render:function(){return(0,a.jsx)(r.default,{placeholder:"Company"})}},{key:"op",title:"Configuration",render:function(v){var K=v.name;return(0,a.jsx)(E.default,{type:"link",onClick:function(){return f.default.info(JSON.stringify(I.getFieldValue(["data",K])))},children:"Configuration"})}}]})})}},83522:function(R,l,e){e.r(l);var g=e(58383),U=e.n(g),E=e(43249),C=e(51317),s=e.n(C),f=e(96169),o=e(90650),W=e.n(o),d=e(35031),D=e(54306),P=e.n(D),r=e(50959),u=e(75997),M=e(8160),t=e(11527);l.default=function(){var O=u.Form.useForm(),A=P()(O,1),a=A[0],h=(0,r.useState)(!1),y=P()(h,2),I=y[0],T=y[1],i=function(){T(!0),(0,M.Z)().then(function(n){a.setFieldValue("data",n)}).finally(function(){T(!1)})};return(0,r.useEffect)(function(){i()},[]),(0,t.jsx)(u.Form,{form:a,layout:"vertical",style:{height:400},children:(0,t.jsx)(u.Form.Table,{name:"data",loading:I,scroll:{y:280},columns:[{key:"name",title:"Name",dataIndex:"name",required:!0,rules:[{required:!0,message:"Please Input Name!"}],render:function(){return(0,t.jsx)(d.default,{placeholder:"Name"})}},{key:"gender",title:"gender",dataIndex:"gender",render:function(){return(0,t.jsx)(u.EllipsisText,{maxWidth:"95%"})}},{key:"address",title:"Address",dataIndex:"address",required:!0,rules:[function(_,n){var m=_.getFieldValue,c=P()(n,1),v=c[0];return{required:m(["data",v,"gender"])==="male",message:"address is Required for male"}}],render:function(){return(0,t.jsx)(d.default,{placeholder:"Address"})}},{key:"company",title:"Company",dataIndex:"company",render:function(){return(0,t.jsx)(d.default,{placeholder:"Company"})}},{key:"op",title:"Configuration",render:function(n){var m=n.name;return(0,t.jsx)(E.default,{type:"link",onClick:function(){return f.default.info(JSON.stringify(a.getFieldValue(["data",m])))},children:"Configuration"})}}]})})}},8160:function(R,l,e){e.d(l,{Z:function(){return f}});var g=e(25359),U=e.n(g),E=e(49811),C=e.n(E),s=e(87955);function f(){return o.apply(this,arguments)}function o(){return o=C()(U()().mark(function W(){return U()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return D.abrupt("return",new Promise(function(P){setTimeout(function(){var r=Array.from({length:5}).map(function(){return{uuid:s.We.datatype.uuid(),name:s.We.internet.userName(),address:s.We.address.cityName(),company:s.We.company.bs(),gender:s.We.name.sex(),weight:s.We.datatype.number({max:200,min:80})}});P(r)},150)}));case 1:case"end":return D.stop()}},W)})),o.apply(this,arguments)}}}]);
