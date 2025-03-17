"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[550],{98165:function(T,m,n){n.d(m,{Z:function(){return s}});var g=n(87462),i=n(67294),u={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M168 504.2c1-43.7 10-86.1 26.9-126 17.3-41 42.1-77.7 73.7-109.4S337 212.3 378 195c42.4-17.9 87.4-27 133.9-27s91.5 9.1 133.8 27A341.5 341.5 0 01755 268.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 003 14.1l175.7 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c0-6.7-7.7-10.5-12.9-6.3l-56.4 44.1C765.8 155.1 646.2 92 511.8 92 282.7 92 96.3 275.6 92 503.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8zm756 7.8h-60c-4.4 0-7.9 3.5-8 7.8-1 43.7-10 86.1-26.9 126-17.3 41-42.1 77.8-73.7 109.4A342.45 342.45 0 01512.1 856a342.24 342.24 0 01-243.2-100.8c-9.9-9.9-19.2-20.4-27.8-31.4l60.2-47a8 8 0 00-3-14.1l-175.7-43c-5-1.2-9.9 2.6-9.9 7.7l-.7 181c0 6.7 7.7 10.5 12.9 6.3l56.4-44.1C258.2 868.9 377.8 932 512.2 932c229.2 0 415.5-183.7 419.8-411.8a8 8 0 00-8-8.2z"}}]},name:"sync",theme:"outlined"},f=u,v=n(84089),h=function(e,R){return i.createElement(v.Z,(0,g.Z)({},e,{ref:R,icon:f}))},O=i.forwardRef(h),s=O},80821:function(T,m,n){n.d(m,{Z:function(){return D}});var g=n(5574),i=n.n(g),u=n(24963),f=n(86738),v=n(28036),h=n(83062),O=n(67294),s=n(85893);function D(e){var R=(0,O.useState)(!1),S=i()(R,2),I=S[0],E=S[1],j=(0,O.useContext)(u.Z),P=j.lang,b=j.notice,A=j.message,B=function(){E(!0);var M=e.action();M instanceof Promise?M.then(function(a){if(E(!1),a){typeof e.onSuccess=="function"&&e.onSuccess(a);var r="";e.messageSuccess?typeof e.messageSuccess=="function"?r=e.messageSuccess(a):r=e.messageSuccess.indexOf("notification.")==0?P(e.messageSuccess):e.messageSuccess:r=P("notification.finish"),e.asynced?A.info(r):A.success(r)}}).catch(function(a){E(!1),typeof e.onError=="function"&&e.onError(a)}):E(!1)};return e.confirm?(0,s.jsx)(f.Z,{style:{width:500},title:e.confirmTitle?e.confirmTitle:P("notification.title.tip"),description:typeof e.confirm=="string"&&e.confirm.indexOf("notification.")==0?P(e.confirm):e.confirm,onConfirm:B,okText:"Yes",cancelText:"No",onOpenChange:e.confirmOnOpenChange,children:(0,s.jsx)(v.ZP,{block:e.block,disabled:e.disabled,icon:e.icon,loading:I,danger:e.danger,type:e.type,children:e.children})}):(0,s.jsx)(h.Z,{title:e.tips,children:(0,s.jsx)(v.ZP,{block:e.block,style:e.ghost?{padding:0,height:"auto"}:{},disabled:e.disabled,icon:e.icon,loading:I,onClick:B,danger:e.danger,type:e.type,children:e.children})})}},24963:function(T,m,n){var g=n(67294),i=(0,g.createContext)({});m.Z=i},72340:function(T,m,n){n.r(m),n.d(m,{default:function(){return M}});var g=n(15009),i=n.n(g),u=n(99289),f=n.n(u),v=n(80821),h=n(82346);function O(a){return s.apply(this,arguments)}function s(){return s=f()(i()().mark(function a(r){return i()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,h.request)("/api/app/volume/get-backup-list",{method:"POST",data:r}));case 1:case"end":return t.stop()}},a)})),s.apply(this,arguments)}function D(a){return e.apply(this,arguments)}function e(){return e=f()(i()().mark(function a(r){return i()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,h.request)("/api/app/volume/delete-backup",{method:"POST",data:r}));case 1:case"end":return t.stop()}},a)})),e.apply(this,arguments)}function R(a){return S.apply(this,arguments)}function S(){return S=f()(i()().mark(function a(r){return i()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,h.request)("/api/app/volume/restore",{method:"POST",data:r}));case 1:case"end":return t.stop()}},a)})),S.apply(this,arguments)}var I=n(67255),E=n(98165),j=n(90078),P=n(78099),b=n(42075),A=n(96074),B=n(67294),o=n(85893);function M(){var a=(0,B.useRef)();return(0,o.jsx)(j._z,{header:{extra:[]},children:(0,o.jsx)(P.Z,{rowKey:"id",scroll:{x:"max-content"},columns:[{title:"\u6240\u5C5E\u5BB9\u5668",dataIndex:"containerId",width:150},{title:"\u5B58\u50A8\u8DEF\u5F84",search:!1,dataIndex:["setting","backupPath"],width:200,render:function(d,t,y,l){return(0,o.jsx)("span",{style:{wordBreak:"break-word"},children:t.setting.backupPath})}},{title:"\u6587\u4EF6\u540D\u79F0",search:!1,width:150,render:function(d,t,y,l,c){var x=t.setting.backupTar;return(0,o.jsx)("span",{style:{wordBreak:"break-word"},children:x.substring(x.lastIndexOf("/",x.lastIndexOf("/")-1))})}},{title:"\u5B58\u50A8\u5377\u8DEF\u5F84",search:!1,render:function(d,t,y,l,c){return(0,o.jsx)(b.Z,{wrap:!0,children:t.setting.volumePathList.map(function(x){return x})})}},{title:"\u5907\u4EFD\u65F6\u95F4",search:!1,width:200,render:function(d,t,y,l,c){return new Date(t.createdAt).toLocaleString()}},{title:"\u64CD\u4F5C",search:!1,width:100,fixed:"right",render:function(d,t,y,l,c){return(0,o.jsx)(b.Z,{split:(0,o.jsx)(A.Z,{}),children:(0,o.jsx)(v.Z,{tips:"\u6062\u590D",type:"link",action:function(){return R({id:t.id,containerMd5:t.containerId})},children:(0,o.jsx)(E.Z,{})})})}}],request:function(){var r=f()(i()().mark(function d(t,y,l){var c;return i()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.next=2,O({containerId:t.containerId,page:t.current,pageSize:t.pageSize});case 2:return c=C.sent,C.abrupt("return",{data:c.data.list,success:!0,total:c.data.list.length});case 4:case"end":return C.stop()}},d)}));return function(d,t,y){return r.apply(this,arguments)}}(),rowSelection:{defaultSelectedRowKeys:[],alwaysShowAlert:!0},actionRef:a,tableAlertOptionRender:function(d){var t=d.selectedRowKeys;return(0,o.jsx)(b.Z,{size:16,children:(0,o.jsx)(v.Z,{danger:!0,type:"primary",action:function(){return D({id:t})},onSuccess:function(){var l,c;return!((l=a.current)===null||l===void 0)&&l.reloadAndRest&&((c=a.current)===null||c===void 0||c.reloadAndRest()),!0},onError:function(){var l,c;return!((l=a.current)===null||l===void 0)&&l.reset&&((c=a.current)===null||c===void 0||c.reset()),!0},confirm:"notification.confirm.title",children:"\u6279\u91CF\u5220\u9664"})})},pagination:(0,I.O)()})})}},67255:function(T,m,n){n.d(m,{O:function(){return g},j:function(){return i}});function g(){var u=localStorage.getItem("dpanel-pagesize");return u=="all"?!1:{showSizeChanger:!0,defaultPageSize:parseInt(u!=null?u:"20")}}function i(u){var f="dpanel-table-column-".concat(u),v={};if(localStorage.getItem(f)){var h;v=JSON.parse((h=localStorage.getItem(f))!==null&&h!==void 0?h:"{}")}return{defaultValue:v,onChange:function(s){localStorage.setItem("dpanel-table-column-".concat(u),JSON.stringify(s))}}}}}]);
