"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[337],{80821:function(R,o,n){n.d(o,{Z:function(){return B}});var d=n(5574),i=n.n(d),_=n(24963),E=n(86738),f=n(28036),m=n(83062),g=n(67294),s=n(85893);function B(e){var h=(0,g.useState)(!1),P=i()(h,2),O=P[0],r=P[1],l=(0,g.useContext)(_.Z),t=l.lang,a=l.notice,D=l.message,M=function(){r(!0),e.action().then(function(c){if(r(!1),typeof e.onSuccess=="function"&&e.onSuccess(c),e.messageSuccess){var u="";typeof e.messageSuccess=="function"?u=e.messageSuccess(c):u=e.messageSuccess,u=t("notification.finish"),e.asynced?D.info(u):D.success(u)}}).catch(function(c){r(!1),typeof e.onError=="function"&&e.onError(c)})};return e.confirm?(0,s.jsx)(E.Z,{style:{width:500},title:e.confirmTitle?e.confirmTitle:t("notification.title.tip"),description:e.confirm,onConfirm:M,okText:"Yes",cancelText:"No",children:(0,s.jsx)(f.ZP,{disabled:e.disabled,icon:e.icon,loading:O,danger:e.danger,type:e.type,children:e.children})}):(0,s.jsx)(m.Z,{title:e.tips,children:(0,s.jsx)(f.ZP,{style:e.ghost?{padding:0,height:"auto"}:{},disabled:e.disabled,icon:e.icon,loading:O,onClick:M,danger:e.danger,type:e.type,children:e.children})})}},24963:function(R,o,n){var d=n(67294),i=(0,d.createContext)({});o.Z=i},87038:function(R,o,n){n.r(o),n.d(o,{default:function(){return O}});var d=n(15009),i=n.n(d),_=n(99289),E=n.n(_),f=n(90078),m=n(10641),g=n(67294),s=n(34185),B=n(80821),e=n(67255),h=n(85893),P=[{title:"\u7C7B\u578B",ellipsis:!0,dataIndex:"type",search:!1,width:200},{title:"\u6807\u9898",ellipsis:!0,dataIndex:"title",width:200},{title:"\u8BE6\u60C5",search:!1,dataIndex:"message"},{title:"\u65F6\u95F4",ellipsis:!0,search:!1,dataIndex:"createdAt",width:200,render:function(l,t,a,D,M){return new Date(t.createdAt).toLocaleString()}}];function O(){var r=(0,g.useRef)();return(0,h.jsx)(f._z,{header:{extra:[(0,h.jsx)(B.Z,{action:function(){return(0,s.bJ)({action:"clear"})},onSuccess:function(){var t,a;return!((t=r.current)===null||t===void 0)&&t.reloadAndRest&&((a=r.current)===null||a===void 0||a.reloadAndRest()),!0},onError:function(){var t,a;return!((t=r.current)===null||t===void 0)&&t.reset&&((a=r.current)===null||a===void 0||a.reset()),!0},messageSuccess:"clear",confirm:"\u662F\u5426\u8981\u6807\u8BB0\u6240\u6709\u901A\u77E5\u5DF2\u8BFB",danger:!0,type:"primary",children:"\u6807\u8BB0\u6D88\u606F\u5DF2\u8BFB"},"clear")]},children:(0,h.jsx)(m.Z,{scroll:{x:"max-content"},columns:P,rowKey:"id",request:function(){var l=E()(i()().mark(function t(a,D,M){var C,c,u;return i()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,(0,s.vo)({page:(C=a.current)!==null&&C!==void 0?C:1,pageSize:(c=a.pageSize)!==null&&c!==void 0?c:10,type:a.type});case 2:return u=v.sent,v.abrupt("return",{data:u.data.list,success:!0,total:u.data.total});case 4:case"end":return v.stop()}},t)}));return function(t,a,D){return l.apply(this,arguments)}}(),pagination:(0,e.O)(),actionRef:r})})}},67255:function(R,o,n){n.d(o,{O:function(){return d},j:function(){return i}});function d(){var _=localStorage.getItem("dpanel-pagesize");return _=="all"?!1:{showSizeChanger:!0,defaultPageSize:parseInt(_!=null?_:"20")}}function i(_){var E="dpanel-table-column-".concat(_),f={};if(localStorage.getItem(E)){var m;f=JSON.parse((m=localStorage.getItem(E))!==null&&m!==void 0?m:"{}")}return{defaultValue:f,onChange:function(s){localStorage.setItem("dpanel-table-column-".concat(_),JSON.stringify(s))}}}}}]);
