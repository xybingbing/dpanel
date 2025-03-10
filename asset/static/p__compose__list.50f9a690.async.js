"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8022],{91806:function(D,p,t){t.d(p,{Z:function(){return C}});var A=t(87462),x=t(67294),v={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 64H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm-40 824H232V687h97.9c11.6 32.8 32 62.3 59.1 84.7 34.5 28.5 78.2 44.3 123 44.3s88.5-15.7 123-44.3c27.1-22.4 47.5-51.9 59.1-84.7H792v-63H643.6l-5.2 24.7C626.4 708.5 573.2 752 512 752s-114.4-43.5-126.5-103.3l-5.2-24.7H232V136h560v752zM320 341h384c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H320c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8zm0 160h384c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H320c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z"}}]},name:"container",theme:"outlined"},f=v,S=t(84089),g=function(w,z){return x.createElement(S.Z,(0,A.Z)({},w,{ref:z,icon:f}))},O=x.forwardRef(g),C=O},96781:function(D,p,t){var A=t(67294),x=(0,A.createContext)({});p.Z=x},83536:function(D,p,t){t.r(p),t.d(p,{default:function(){return Y}});var A=t(64599),x=t.n(A),v=t(15009),f=t.n(v),S=t(99289),g=t.n(S),O=t(80821),C=t(90098),F=t(43425),w=t(86548),z=t(23430),V=t(90078),K=t(78099),L=t(82346),M=t(28036),P=t(25593),b=t(42075),k=t(96074),$=t(83062),I=t(67294),G=t(94359),H=t(67255),J=t(93162),B=t(24963),j=t(66309),n=t(85893);function N(d){var Z=(0,L.useIntl)(),T=(0,I.useContext)(B.Z),h=T.lang,m;if(!d.type)m=(0,n.jsx)(j.Z,{children:h("compose.type.default")});else switch(d.type){case"remoteUrl":m=(0,n.jsx)(j.Z,{color:"cyan",children:h("compose.type.".concat(d.type))});break;case"serverPath":m=(0,n.jsx)(j.Z,{color:"blue",children:h("compose.type.".concat(d.type))});break;case"storagePath":m=(0,n.jsx)(j.Z,{color:"geekblue",children:h("compose.type.".concat(d.type))});break;case"outPath":m=(0,n.jsx)(j.Z,{color:"yellow",children:h("compose.type.".concat(d.type))});break;case"store":m=(0,n.jsx)(j.Z,{color:"green",children:h("compose.type.".concat(d.type))});break;case"dangling":m=(0,n.jsx)(j.Z,{color:"error",children:h("compose.type.".concat(d.type))});break;default:m=(0,n.jsx)(j.Z,{children:h("compose.type.".concat(d.type))})}return(0,n.jsx)($.Z,{title:d.tootip,children:m})}var U=t(96781),W=t(73587);function Y(){var d=(0,I.useContext)(U.Z),Z=d.listTableRef,T=(0,I.useContext)(B.Z),h=T.lang,m=T.notice,E=(0,I.useRef)();return(0,n.jsxs)(V._z,{header:{extra:[(0,n.jsx)(L.Link,{to:"/compose/create",reloadDocument:location.search.length>0,children:(0,n.jsx)(M.ZP,{type:"primary",children:"\u521B\u5EFA\u4EFB\u52A1"},"createCompose")},"create")]},children:[(0,n.jsx)(W.Z,{ref:E,onClose:function(){var o;!((o=Z.current)===null||o===void 0)&&o.reloadAndRest&&Z.current.reloadAndRest()}}),(0,n.jsx)(K.Z,{scroll:{x:"max-content"},request:function(){var u=g()(f()().mark(function o(e){var l;return f()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,(0,C.pm)({title:e.title,name:e.name});case 2:return l=a.sent,a.abrupt("return",{data:l.data.list,success:!0,total:l.data.list.length});case 4:case"end":return a.stop()}},o)}));return function(o){return u.apply(this,arguments)}}(),rowKey:"name",columns:[{title:"\u6807\u8BC6",dataIndex:"name",width:200,render:function(o,e,l,s,a){return(0,n.jsx)(P.Z.Link,{onClick:function(){if(e.setting.type=="dangling")m.info("\u65E0\u6CD5\u627E\u5230\u8BE5\u4EFB\u52A1\u7684 compose.yaml \u6587\u4EF6\uFF0C\u8BF7\u6302\u8F7D\u76F8\u5E94\u7684 compose \u6587\u4EF6\u6216\u662F\u5728\u9762\u677F\u7684 compose \u76EE\u5F55\u6DFB\u52A0\u540C\u6807\u8BC6\u7684\u4EFB\u52A1\u76EE\u5F55\u53CA compose.yaml \u6587\u4EF6");else{var c;(c=E.current)===null||c===void 0||c.show(e.id||e.name)}},children:e.name})},sorter:function(o,e){return o.name.localeCompare(e.name)},sortDirections:["descend","ascend"]},{title:"\u9879\u76EE\u540D\u79F0",dataIndex:"title",width:200},{title:"\u7C7B\u578B",width:150,search:!1,render:function(o,e,l,s,a){var i;return(0,n.jsx)(N,{tootip:(i=e.setting.uri)!==null&&i!==void 0?i:"",type:e.setting&&e.setting.type?e.setting.type:""})}},{title:"\u5BB9\u5668\u72B6\u6001",dataIndex:"status",search:!1,width:300,render:function(o,e,l,s,a){return(0,n.jsx)(b.Z,{children:e.setting.status.split(", ").map(function(i,c){var y="running",r=i.indexOf("(");return r>-1?y=i.slice(0,r):y=i,(0,n.jsx)(G.Z,{status:y,message:{content:h("compose.status.".concat(y),{count:i.slice(r+1,i.length-1)}),title:e.setting.message,placement:"top",showInTag:!0}},c)})})},sorter:function(o,e){return o.setting.status.localeCompare(e.setting.status)}},{title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"",search:!1,width:150,render:function(o,e,l,s,a){return e.setting.createdAt?new Date(e.setting.createdAt).toLocaleString():"-"},sorter:function(o,e){var l,s;return new Date((l=o.setting.createdAt)!==null&&l!==void 0?l:"").toLocaleString().localeCompare(new Date((s=e.setting.createdAt)!==null&&s!==void 0?s:"").toLocaleString())}},{title:"\u66F4\u65B0\u65F6\u95F4",dataIndex:"",search:!1,width:150,render:function(o,e,l,s,a){return e.setting.updatedAt?new Date(e.setting.updatedAt).toLocaleString():"-"},sorter:function(o,e){var l,s;return new Date((l=o.setting.updatedAt)!==null&&l!==void 0?l:"").toLocaleString().localeCompare(new Date((s=e.setting.updatedAt)!==null&&s!==void 0?s:"").toLocaleString())}},{title:"\u64CD\u4F5C",width:80,valueType:"option",fixed:"right",key:"option",render:function(o,e,l,s,a){return e.setting.type!="dangling"&&(0,n.jsxs)(b.Z,{split:(0,n.jsx)(k.Z,{type:"vertical"}),children:[(0,n.jsx)(P.Z.Link,{onClick:function(){var c;(c=E.current)===null||c===void 0||c.show(e.id||e.name)},children:(0,n.jsx)($.Z,{title:"\u90E8\u7F72",children:(0,n.jsx)(F.Z,{})})},"3"),(0,n.jsx)(L.Link,{to:"/compose/create?id="+(e.id||e.name),children:(0,n.jsx)($.Z,{title:"\u7F16\u8F91",children:(0,n.jsx)(w.Z,{})})},"4"),(0,n.jsx)(P.Z.Link,{onClick:g()(f()().mark(function i(){var c,y;return f()().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:return R.next=2,(0,C.tw)({id:e.id||e.name});case 2:c=R.sent,y=new Blob([c],{type:"application/zip"}),(0,J.saveAs)(y,"compose-"+e.name+".zip");case 5:case"end":return R.stop()}},i)})),children:(0,n.jsx)($.Z,{title:"\u4E0B\u8F7D",children:(0,n.jsx)(z.Z,{})})},"2")]})}}],rowSelection:{defaultSelectedRowKeys:[],alwaysShowAlert:!0,getCheckboxProps:function(o){return{disabled:o.setting.type=="dangling"||o.setting.type=="outPath"}}},tableAlertOptionRender:function(o){var e=o.selectedRows;return(0,n.jsx)(b.Z,{size:16,children:(0,n.jsx)(O.Z,{danger:!0,type:"primary",action:g()(f()().mark(function l(){var s,a,i,c;return f()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:r.prev=0,a=x()(e),r.prev=2,a.s();case 4:if((i=a.n()).done){r.next=11;break}return c=i.value,r.next=8,(0,C.mg)({id:c.id||c.name});case 8:s=r.sent;case 9:r.next=4;break;case 11:r.next=16;break;case 13:r.prev=13,r.t0=r.catch(2),a.e(r.t0);case 16:return r.prev=16,a.f(),r.finish(16);case 19:r.next=23;break;case 21:r.prev=21,r.t1=r.catch(0);case 23:return r.abrupt("return",(0,C.ik)({id:e.map(function(R){return R.id})}));case 24:case"end":return r.stop()}},l,null,[[0,21],[2,13,16,19]])})),onSuccess:function(){var s,a;return!((s=Z.current)===null||s===void 0)&&s.reloadAndRest&&((a=Z.current)===null||a===void 0||a.reloadAndRest()),!0},onError:function(){var s,a;return!((s=Z.current)===null||s===void 0)&&s.reset&&((a=Z.current)===null||a===void 0||a.reset()),!0},confirm:"notification.confirm.title",children:"\u6279\u91CF\u5220\u9664"})})},pagination:(0,H.O)(),search:{collapsed:!1},actionRef:Z,columnsState:(0,H.j)("compose-list")})]})}},67255:function(D,p,t){t.d(p,{O:function(){return A},j:function(){return x}});function A(){var v=localStorage.getItem("dpanel-pagesize");return v=="all"?!1:{showSizeChanger:!0,defaultPageSize:parseInt(v!=null?v:"20")}}function x(v){var f="dpanel-table-column-".concat(v),S={};if(localStorage.getItem(f)){var g;S=JSON.parse((g=localStorage.getItem(f))!==null&&g!==void 0?g:"{}")}return{defaultValue:S,onChange:function(C){localStorage.setItem("dpanel-table-column-".concat(v),JSON.stringify(C))}}}}}]);
