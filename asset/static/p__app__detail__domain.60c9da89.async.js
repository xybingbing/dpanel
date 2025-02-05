"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3146],{31199:function(Ce,I,e){var r=e(1413),f=e(45987),S=e(67294),F=e(35510),A=e(85893),y=["fieldProps","min","proFieldProps","max"],K=function(u,j){var N=u.fieldProps,z=u.min,L=u.proFieldProps,Z=u.max,J=(0,f.Z)(u,y);return(0,A.jsx)(F.Z,(0,r.Z)({valueType:"digit",fieldProps:(0,r.Z)({min:z,max:Z},N),ref:j,filedConfig:{defaultProps:{width:"100%"}},proFieldProps:L},J))},E=S.forwardRef(K);I.Z=E},52688:function(Ce,I,e){var r=e(1413),f=e(45987),S=e(67294),F=e(35510),A=e(85893),y=["fieldProps","unCheckedChildren","checkedChildren","proFieldProps"],K=S.forwardRef(function(E,Y){var u=E.fieldProps,j=E.unCheckedChildren,N=E.checkedChildren,z=E.proFieldProps,L=(0,f.Z)(E,y);return(0,A.jsx)(F.Z,(0,r.Z)({valueType:"switch",fieldProps:(0,r.Z)({unCheckedChildren:j,checkedChildren:N},u),ref:Y,valuePropName:"checked",proFieldProps:z,filedConfig:{valuePropName:"checked",ignoreWidth:!0,customLightMode:!0}},L))});I.Z=K},90672:function(Ce,I,e){var r=e(1413),f=e(45987),S=e(67294),F=e(35510),A=e(85893),y=["fieldProps","proFieldProps"],K=function(Y,u){var j=Y.fieldProps,N=Y.proFieldProps,z=(0,f.Z)(Y,y);return(0,A.jsx)(F.Z,(0,r.Z)({ref:u,valueType:"textarea",fieldProps:j,proFieldProps:N},z))};I.Z=S.forwardRef(K)},80821:function(Ce,I,e){e.d(I,{Z:function(){return Y}});var r=e(5574),f=e.n(r),S=e(24963),F=e(86738),A=e(28036),y=e(83062),K=e(67294),E=e(85893);function Y(u){var j=(0,K.useState)(!1),N=f()(j,2),z=N[0],L=N[1],Z=(0,K.useContext)(S.Z),J=Z.lang,V=Z.notice,U=Z.message,Fe=function(){L(!0),u.action().then(function(he){if(L(!1),typeof u.onSuccess=="function"&&u.onSuccess(he),u.messageSuccess){var oe="";typeof u.messageSuccess=="function"?oe=u.messageSuccess(he):oe=u.messageSuccess,oe=J("notification.finish"),u.asynced?U.info(oe):U.success(oe)}}).catch(function(he){L(!1),typeof u.onError=="function"&&u.onError(he)})};return u.confirm?(0,E.jsx)(F.Z,{style:{width:500},title:u.confirmTitle?u.confirmTitle:J("notification.title.tip"),description:u.confirm,onConfirm:Fe,okText:"Yes",cancelText:"No",children:(0,E.jsx)(A.ZP,{disabled:u.disabled,icon:u.icon,loading:z,danger:u.danger,type:u.type,children:u.children})}):(0,E.jsx)(y.Z,{title:u.tips,children:(0,E.jsx)(A.ZP,{style:u.ghost?{padding:0,height:"auto"}:{},disabled:u.disabled,icon:u.icon,loading:z,onClick:Fe,danger:u.danger,type:u.type,children:u.children})})}},54964:function(Ce,I,e){e.d(I,{a:function(){return u}});var r=e(78267),f=e.n(r),S=e(75458),F=e.n(S),A=e(67294),y=e(12320),K=e.n(y),E=e(89629),Y=e(85893),u={convertEol:!0,fontFamily:'Menlo, Monaco, "Courier New", monospace',fontWeight:400,fontSize:16,cursorStyle:"block",cursorBlink:!0,theme:{foreground:"#bfbfbf",cursor:"gray",selectionForeground:"#ffffff"}},j=new y.Terminal(u),N=new S.SearchAddon,z=new r.FitAddon,L=(0,A.forwardRef)(function(Z,J){return(0,A.useEffect)(function(){window.addEventListener("resize",function(){Z.showInModal||z.fit()}),Z.style&&Z.style.fontSize&&(j.options.fontSize=Z.style.fontSize),j.loadAddon(z),j.loadAddon(N),j.open(document.getElementById("terminal-container")),Z.showInModal||z.fit()},[]),(0,A.useImperativeHandle)(J,function(){return{write:function(U){j.write(U)},clear:function(){j.clear()},getTerminal:function(){return j},findNext:function(U){N.findNext(U)},findPrev:function(U){N.findPrevious(U)},fit:function(){z.fit()},onData:function(U){j.onData(U)}}}),(0,Y.jsx)("div",{id:"terminal-container",style:{width:Z.width?Z.width:"100%",height:Z.height?Z.height:"500px"}})});I.Z=L},24963:function(Ce,I,e){var r=e(67294),f=(0,r.createContext)({});I.Z=f},68496:function(Ce,I,e){e.r(I),e.d(I,{default:function(){return qe}});var r=e(15009),f=e.n(r),S=e(99289),F=e.n(S),A=e(5574),y=e.n(A),K=e(24963),E=e(63713);function Y(c){return u.apply(this,arguments)}function u(){return u=F()(f()().mark(function c(g){return f()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.abrupt("return",(0,E.request)("/api/app/site/get-domain-list",{method:"POST",data:g}));case 1:case"end":return d.stop()}},c)})),u.apply(this,arguments)}function j(c){return N.apply(this,arguments)}function N(){return N=F()(f()().mark(function c(g){return f()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.abrupt("return",(0,E.request)("/api/app/site/create-domain",{method:"POST",data:g}));case 1:case"end":return d.stop()}},c)})),N.apply(this,arguments)}function z(c){return L.apply(this,arguments)}function L(){return L=F()(f()().mark(function c(g){return f()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.abrupt("return",(0,E.request)("/api/app/site/update-domain",{method:"POST",data:g}));case 1:case"end":return d.stop()}},c)})),L.apply(this,arguments)}function Z(c){return J.apply(this,arguments)}function J(){return J=F()(f()().mark(function c(g){return f()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.abrupt("return",(0,E.request)("/api/app/site/delete-domain",{method:"POST",data:g}));case 1:case"end":return d.stop()}},c)})),J.apply(this,arguments)}function V(c){return U.apply(this,arguments)}function U(){return U=F()(f()().mark(function c(g){return f()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.abrupt("return",(0,E.request)("/api/app/site/get-domain-detail",{method:"POST",data:g}));case 1:case"end":return d.stop()}},c)})),U.apply(this,arguments)}function Fe(c){return Be.apply(this,arguments)}function Be(){return Be=F()(f()().mark(function c(g){return f()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.abrupt("return",(0,E.request)("/api/app/site/apply-domain-cert",{method:"POST",data:g}));case 1:case"end":return d.stop()}},c)})),Be.apply(this,arguments)}function he(){return oe.apply(this,arguments)}function oe(){return oe=F()(f()().mark(function c(){return f()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return D.abrupt("return",(0,E.request)("/api//app/site/restart-nginx",{method:"POST"}));case 1:case"end":return D.stop()}},c)})),oe.apply(this,arguments)}var Ae=e(184),Oe=e(5966),Te=e(62370),ae=e(52688),$e=e(42075),De=e(66309),Ve=e(34041),be=e(71230),fe=e(15746),n=e(25449),l=e(67294),O=e(54964),t=e(85893),C=(0,l.forwardRef)(function(c,g){var D=(0,l.useContext)(K.Z),d=D.notice,M=D.message,b=D.lang,P=(0,E.useModel)("subscriber"),Q=(0,l.useRef)(),X=(0,l.useState)(),m=y()(X,2),B=m[0],Pe=m[1],R=(0,l.useState)(!1),h=y()(R,2),ye=h[0],k=h[1],pe=(0,l.useRef)();return P.addDataHandler("domain:apply",function(de){var ie;(ie=pe.current)===null||ie===void 0||ie.write(de.data)}),(0,l.useImperativeHandle)(g,function(){return{apply:function(ie){var ne,ge,xe;if(ie.length==0)return d.error("\u8BF7\u5148\u5728\u57DF\u540D\u5217\u8868\u52FE\u9009\u5F85\u7533\u8BF7\u7684\u57DF\u540D\uFF0C\u591A\u4E2A\u57DF\u540D\u53EF\u4EE5\u5171\u7528\u540C\u4E00\u5F20\u8BC1\u4E66"),!1;(ne=Q.current)===null||ne===void 0||ne.setFieldsValue({email:(ge=localStorage.getItem("email"))!==null&&ge!==void 0?ge:""}),(xe=pe.current)===null||xe===void 0||xe.clear(),Pe(ie),k(!0)}}}),(0,t.jsxs)(Ae.a,{drawerProps:{forceRender:!0},formRef:Q,open:ye,onOpenChange:function(ie){k(ie)},onFinish:function(){var de=F()(f()().mark(function ie(ne){var ge,xe;return f()().wrap(function(je){for(;;)switch(je.prev=je.next){case 0:return localStorage.setItem("email",ne.email),je.next=3,Fe({id:B?B.map(function(re){return re.id}):[],email:ne.email,certServer:ne.certServer,autoUpgrade:ne.autoUpgrade,renew:ne.renew,debug:ne.debug});case 3:return xe=je.sent,xe.data=="success"&&setTimeout(F()(f()().mark(function re(){var et;return f()().wrap(function(He){for(;;)switch(He.prev=He.next){case 0:return He.next=2,he();case 2:et=He.sent;case 3:case"end":return He.stop()}},re)})),5e3),(ge=Q.current)===null||ge===void 0||ge.resetFields(),c.onFinish&&c.onFinish(),je.abrupt("return",!0);case 8:case"end":return je.stop()}},ie)}));return function(ie){return de.apply(this,arguments)}}(),children:[(0,t.jsx)(n.Z,{label:"\u57DF\u540D\u5217\u8868",name:"serverName",children:(0,t.jsx)($e.Z,{children:B==null?void 0:B.map(function(de){return(0,t.jsx)(De.Z,{children:de.serverName},de.id)})})}),(0,t.jsx)(Oe.Z,{label:"\u90AE\u7BB1",name:"email",placeholder:"\u8BF7\u8F93\u5165\u7533\u8BF7\u7684\u90AE\u7BB1"}),(0,t.jsx)(Te.Z,{label:"\u7B7E\u53D1\u670D\u52A1",name:"certServer",initialValue:"letsencrypt",children:(0,t.jsx)(Ve.Z,{options:[{value:"letsencrypt",label:"Let's Encrypt"},{value:"zerossl",label:"ZeroSSL"}]})}),(0,t.jsxs)(be.Z,{gutter:[20,10],children:[(0,t.jsx)(fe.Z,{children:(0,t.jsx)(ae.Z,{label:"\u81EA\u52A8\u7EED\u7B7E",name:"autoUpgrade",initialValue:!0})}),(0,t.jsx)(fe.Z,{children:(0,t.jsx)(ae.Z,{tooltip:"\u901A\u5E38\u60C5\u51B5\u7CFB\u7EDF\u4F1A\u81EA\u52A8\u7EED\u7B7E\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u5F00\u542F\u6B64\u9879\u5F3A\u5236\u7EED\u7B7E",label:"\u7ACB\u5373\u7EED\u7B7E",name:"renew",initialValue:!1})}),(0,t.jsx)(fe.Z,{children:(0,t.jsx)(ae.Z,{tooltip:"\u663E\u793A\u5B8C\u6574\u7684\u9519\u8BEF\u4FE1\u606F\uFF0C\u65B9\u4FBF\u6392\u67E5",label:"Debug",name:"debug",initialValue:!1})}),(0,t.jsx)(fe.Z,{})]}),(0,t.jsx)(O.Z,{showInModal:!0,width:"100%",height:"300px",style:{fontSize:12},ref:pe})]})}),a=C,o=e(31199),s=e(1413),i=e(45987),v=e(66758),x=e(35510),W=["proFieldProps","fieldProps"],$="date",_=l.forwardRef(function(c,g){var D=c.proFieldProps,d=c.fieldProps,M=(0,i.Z)(c,W),b=(0,l.useContext)(v.Z);return(0,t.jsx)(x.Z,(0,s.Z)({ref:g,valueType:$,fieldProps:(0,s.Z)({getPopupContainer:b.getPopupContainer},d),proFieldProps:D,filedConfig:{valueType:$,customLightMode:!0}},M))}),G=_,H=["proFieldProps","fieldProps"],te="dateMonth",le=l.forwardRef(function(c,g){var D=c.proFieldProps,d=c.fieldProps,M=(0,i.Z)(c,H),b=(0,l.useContext)(v.Z);return(0,t.jsx)(x.Z,(0,s.Z)({ref:g,valueType:te,fieldProps:(0,s.Z)({getPopupContainer:b.getPopupContainer},d),proFieldProps:D,filedConfig:{valueType:te,customLightMode:!0}},M))}),Ee=le,w=["fieldProps"],me="dateQuarter",se=l.forwardRef(function(c,g){var D=c.fieldProps,d=(0,i.Z)(c,w),M=(0,l.useContext)(v.Z);return(0,t.jsx)(x.Z,(0,s.Z)({ref:g,valueType:me,fieldProps:(0,s.Z)({getPopupContainer:M.getPopupContainer},D),filedConfig:{valueType:me,customLightMode:!0}},d))}),Ze=se,q=["proFieldProps","fieldProps"],Me="dateWeek",Ne=l.forwardRef(function(c,g){var D=c.proFieldProps,d=c.fieldProps,M=(0,i.Z)(c,q),b=(0,l.useContext)(v.Z);return(0,t.jsx)(x.Z,(0,s.Z)({ref:g,valueType:Me,fieldProps:(0,s.Z)({getPopupContainer:b.getPopupContainer},d),proFieldProps:D,filedConfig:{valueType:Me,customLightMode:!0}},M))}),Ke=Ne,Le=["proFieldProps","fieldProps"],Ie="dateYear",ze=l.forwardRef(function(c,g){var D=c.proFieldProps,d=c.fieldProps,M=(0,i.Z)(c,Le),b=(0,l.useContext)(v.Z);return(0,t.jsx)(x.Z,(0,s.Z)({ref:g,valueType:Ie,fieldProps:(0,s.Z)({getPopupContainer:b.getPopupContainer},d),proFieldProps:D,filedConfig:{valueType:Ie,customLightMode:!0}},M))}),p=ze,T=G;T.Week=Ke,T.Month=Ee,T.Quarter=Ze,T.Year=p,T.displayName="ProFormComponent";var Ue=T,Re=e(90672),ve=e(95089),We=e(28036),ue=e(92398),we=e(38925),Se=(0,l.forwardRef)(function(c,g){var D=(0,l.useState)(!1),d=y()(D,2),M=d[0],b=d[1],P=(0,l.useRef)(),Q=(0,l.useState)(),X=y()(Q,2),m=X[0],B=X[1];return(0,l.useImperativeHandle)(g,function(){return{showEdit:function(R){V({id:R.id}).then(function(h){var ye;if((ye=P.current)===null||ye===void 0||ye.setFieldsValue({serverName:R.serverName,port:R.setting.port,enableBlockCommonExploits:R.setting.enableBlockCommonExploits,enableAssetCache:R.setting.enableAssetCache,enableWs:R.setting.enableWs,extraNginx:R.setting.extraNginx,vhost:h.data.vhost,sslCrt:h.data.domain.setting.sslCrt,sslKey:h.data.domain.setting.sslKey,hostname:h.data.domain.setting.serverAddress}),R.setting.sslCrtRenewTime){var k;(k=P.current)===null||k===void 0||k.setFieldValue("sslCrtRenewTime",h.data.domain.setting.sslCrtRenewTime)}B(h.data),b(!0)})}}}),(0,t.jsx)(Ae.a,{drawerProps:{forceRender:!0},open:M,onOpenChange:function(R){b(R)},title:"\u57DF\u540D\u7BA1\u7406",trigger:(0,t.jsx)(We.ZP,{onClick:function(){var R;B(void 0),(R=P.current)===null||R===void 0||R.resetFields()},type:"primary",children:"\u7ED1\u5B9A\u57DF\u540D"}),formRef:P,onFinish:function(){var Pe=F()(f()().mark(function R(h){var ye,k,pe,de,ie,ne,ge,xe,_e;return f()().wrap(function(re){for(;;)switch(re.prev=re.next){case 0:if(!(m&&(m==null?void 0:m.domain.id)>0)){re.next=6;break}return re.next=3,z({id:m==null?void 0:m.domain.id,port:h.port,enableBlockCommonExploits:h.enableBlockCommonExploits,enableAssetCache:h.enableAssetCache,enableWs:h.enableWs,extraNginx:h.extraNginx,sslCrt:(k=h.sslCrt)!==null&&k!==void 0?k:"",sslKey:(pe=h.sslKey)!==null&&pe!==void 0?pe:"",sslCrtRenewTime:(de=h.sslCrtRenewTime)!==null&&de!==void 0?de:"",hostname:h.hostname});case 3:ie=re.sent,re.next=9;break;case 6:return re.next=8,j({containerId:c.containerId,serverName:h.serverName,hostname:h.hostname,port:h.port,enableBlockCommonExploits:h.enableBlockCommonExploits,enableAssetCache:h.enableAssetCache,enableWs:h.enableWs,extraNginx:h.extraNginx,sslCrt:(ne=h.sslCrt)!==null&&ne!==void 0?ne:"",sslKey:(ge=h.sslKey)!==null&&ge!==void 0?ge:"",sslCrtRenewTime:(xe=h.sslCrtRenewTime)!==null&&xe!==void 0?xe:""});case 8:_e=re.sent;case 9:return(ye=P.current)===null||ye===void 0||ye.resetFields(),c.onFinish(),re.abrupt("return",!0);case 12:case"end":return re.stop()}},R)}));return function(R){return Pe.apply(this,arguments)}}(),children:(0,t.jsx)(ue.Z,{items:[{key:"1",label:"\u914D\u7F6E\u57DF\u540D",children:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(Oe.Z,{width:"lg",label:"\u57DF\u540D",tooltip:"\u6307\u5B9A\u8981\u7ED1\u5B9A\u7684\u57DF\u540D,\u5E76\u5C06\u8BE5\u57DF\u540D\u89E3\u6790\u5230\u5F53\u524D\u670D\u52A1\u5668",name:"serverName",placeholder:"\u8BF7\u6307\u5B9A\u8981\u7ED1\u5B9A\u7684\u57DF\u540D\uFF0C\u4F8B\u5982 www.explame.com, test.explame.com",rules:[{required:!0}],disabled:m&&m.domain.id>0}),(0,t.jsx)(Oe.Z,{width:"lg",label:"\u8F6C\u53D1Ip\u6216\u662F\u5BB9\u5668",tooltip:"\u914D\u7F6E\u9700\u8981\u8F6C\u53D1\u7684\u5BB9\u5668\u6216\u662FIp\uFF0C\u7559\u7A7A\u4E3A\u5F53\u524D\u5BB9\u5668",name:"hostname",placeholder:"\u6307\u5B9A\u5BB9\u5668\u540D\u79F0\u6216\u662FIp\uFF0C\u9ED8\u8BA4\u4E3A\u5F53\u524D\u5BB9\u5668"}),(0,t.jsx)(o.Z,{label:"\u5BB9\u5668\u5185\u7684\u7AEF\u53E3",name:"port",placeholder:"\u8F6C\u53D1\u5230\u76EE\u6807\u5BB9\u5668\u4E2D\u7684\u7AEF\u53E3\uFF0C\u4E00\u822C\u4E3A80",required:!0,rules:[{required:!0}]}),(0,t.jsxs)(be.Z,{children:[(0,t.jsx)(fe.Z,{span:12,children:(0,t.jsx)(ae.Z,{label:"\u963B\u6B62\u5E38\u89C1\u6F0F\u6D1E\u5229\u7528",name:"enableBlockCommonExploits"})}),(0,t.jsx)(fe.Z,{children:(0,t.jsx)(ae.Z,{width:"md",label:"\u9759\u6001\u8D44\u6E90\u7F13\u5B58",name:"enableAssetCache"})})]}),(0,t.jsx)(be.Z,{children:(0,t.jsx)(fe.Z,{span:12,children:(0,t.jsx)(ae.Z,{label:"\u652F\u6301 Websocket",name:"enableWs",initialValue:!0})})}),(0,t.jsx)(Te.Z,{name:"extraNginx",label:"\u81EA\u5B9A\u4E49\u6269\u5C55\u914D\u7F6E",tooltip:"\u81EA\u5B9A\u4E49\u6269\u5C55\u7F51\u7AD9 Vhost \u914D\u7F6E\u5185\u5BB9",children:(0,t.jsx)(ve.ZP,{height:"300px",theme:"dark",style:{backgroundColor:"#282c34"}})})]})},{key:"2",label:"SSL",children:(0,t.jsxs)(t.Fragment,{children:[m&&m.domain.setting.autoSsl&&(0,t.jsx)(we.Z,{message:"\u5F53\u524D\u8BC1\u4E66\u4E3A\u81EA\u52A8\u7B7E\u53D1\uFF0C\u8BF7\u52FF\u4FEE\u6539\u3002\u8BC1\u4E66\u8DEF\u5F84\u4E3A\uFF1A/dpanel/cert \u76EE\u5F55",style:{margin:"15px 0"}}),(0,t.jsx)(Ue,{label:"\u8BC1\u4E66\u5230\u671F\u65F6\u95F4",name:"sslCrtRenewTime",width:"lg",required:!0,disabled:m&&m.domain.setting.autoSsl}),(0,t.jsx)(Re.Z,{fieldProps:{autoSize:{minRows:10}},label:"\u8BC1\u4E66\u5185\u5BB9 .crt ",name:"sslCrt",tooltip:"1.\u901A\u5E38\u8BC1\u4E66\u662F\u4EE5 .crt \u6216 .pem \u7B49\u4E3A\u6269\u5C55\u540D\u7684\u6587\u4EF6\uFF0C\u8BF7\u4F7F\u7528\u76F8\u5E94\u6587\u672C\u7F16\u8F91\u5668\u6253\u5F00\u8BC1\u4E66\u6587\u4EF6\u3002 2.\u8BC1\u4E66\u683C\u5F0F\u4EE5\u201C-----BEGIN CERTIFICATE-----\u201D\u5F00\u5934\uFF0C\u4EE5\u201C-----END CERTIFICATE-----\u201D\u7ED3\u5C3E\u3002 3.\u8BC1\u4E66\u5185\u5BB9\u8BF7\u5305\u542B\u5B8C\u6574\u7684\u8BC1\u4E66\u94FE\u3002",placeholder:"-----BEGIN CERTIFICATE-----",disabled:m&&m.domain.setting.autoSsl,required:!0},"sslCrt"),(0,t.jsx)(Re.Z,{fieldProps:{autoSize:{minRows:10}},label:"\u79C1\u94A5\u5185\u5BB9 .key ",name:"sslKey",tooltip:"1.\u901A\u5E38\u79C1\u94A5\u662F\u4EE5 .key \u6216 .pem \u7B49\u4E3A\u6269\u5C55\u540D\u7684\u6587\u4EF6\uFF0C\u8BF7\u4F7F\u7528\u76F8\u5E94\u6587\u672C\u7F16\u8F91\u5668\u6253\u5F00\u79C1\u94A5\u6587\u4EF6\u3002 2.\u79C1\u94A5\u683C\u5F0F\u4EE5\u201C-----BEGIN PRIVATE KEY-----\u201D\u5F00\u5934\uFF0C\u4EE5\u201C-----END PRIVATE KEY-----\u201D\u7ED3\u5C3E\u3002",placeholder:"-----BEGIN PRIVATE KEY-----",disabled:m&&m.domain.setting.autoSsl,required:!0},"sslKey")]})},{key:"3",label:"\u67E5\u770B vhost \u914D\u7F6E",children:(0,t.jsx)(Te.Z,{name:"vhost",label:" ",children:(0,t.jsx)(ve.ZP,{height:"600px",theme:"dark",readOnly:!0,style:{backgroundColor:"#282c34"}})})}]})})}),Ge=Se,Qe=e(80821),Xe=e(67255),ke=e(43425),ee=e(10641),ce=e(96074),Ye=e(25593),Je=e(83062);function qe(){var c=(0,E.useParams)(),g=(0,l.useRef)(),D=(0,l.useRef)(),d=(0,l.useRef)();return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a,{ref:d,onFinish:function(){var b,P;!((b=g.current)===null||b===void 0)&&b.reloadAndRest&&((P=g.current)===null||P===void 0||P.reloadAndRest())}}),(0,t.jsx)(ee.Z,{scroll:{x:"max-content"},rowKey:"id",actionRef:g,columns:[{title:"\u57DF\u540D",dataIndex:"serverName",render:function(b,P,Q,X,m){return(0,t.jsx)("a",{href:"".concat(P.setting.enableSSL?"https":"http","://").concat(P.serverName),target:"_blank",children:P.serverName})}},{title:"\u5BB9\u5668\u5185\u7AEF\u53E3",dataIndex:["setting","port"],search:!1},{title:"SSL\u8BC1\u4E66",search:!1,render:function(b,P,Q,X,m){var B;return P.setting.enableSSL?(0,t.jsxs)(De.Z,{color:"success",children:["\u8BC1\u4E66\u6709\u6548\u81F3\uFF1A",new Date((B=P.setting.sslCrtRenewTime)!==null&&B!==void 0?B:"").toLocaleDateString()]}):(0,t.jsx)(De.Z,{color:"red",children:"\u5426"})}},{title:"\u521B\u5EFA\u65F6\u95F4",search:!1,width:180,ellipsis:!0,dataIndex:"createdAt",render:function(b,P,Q,X,m){return new Date(P.createdAt).toLocaleString()}},{title:"\u64CD\u4F5C",valueType:"option",key:"option",width:50,render:function(b,P,Q,X){return(0,t.jsx)($e.Z,{split:(0,t.jsx)(ce.Z,{type:"vertical"}),children:(0,t.jsx)(Ye.Z.Link,{onClick:function(){var B;return(B=D.current)===null||B===void 0||B.showEdit(P),!0},children:(0,t.jsx)(Je.Z,{title:"\u7BA1\u7406\u57DF\u540D",children:(0,t.jsx)(ke.Z,{})})})})}}],request:function(){var M=F()(f()().mark(function b(P,Q,X){var m,B,Pe,R,h;return f()().wrap(function(k){for(;;)switch(k.prev=k.next){case 0:return k.next=2,Y({containerId:(m=(B=c.id)!==null&&B!==void 0?B:"")!==null&&m!==void 0?m:"",pageSize:(Pe=P.pageSize)!==null&&Pe!==void 0?Pe:10,page:(R=P.current)!==null&&R!==void 0?R:1,serverName:P.serverName,port:P.port});case 2:return h=k.sent,k.abrupt("return",{data:h.data.list.map(function(pe){return pe.setting||(pe.setting={autoSsl:!1}),pe}),success:!0,total:h.data.list.length});case 4:case"end":return k.stop()}},b)}));return function(b,P,Q){return M.apply(this,arguments)}}(),toolBarRender:function(){var b;return[(0,t.jsx)(Ge,{ref:D,containerId:(b=c.id)!==null&&b!==void 0?b:"",onFinish:function(){var Q,X;!((Q=g.current)===null||Q===void 0)&&Q.reloadAndRest&&((X=g.current)===null||X===void 0||X.reloadAndRest())}})]},rowSelection:{defaultSelectedRowKeys:[],alwaysShowAlert:!0},tableAlertOptionRender:function(b){var P=b.selectedRowKeys,Q=b.selectedRows;return(0,t.jsxs)($e.Z,{size:16,children:[(0,t.jsx)(Qe.Z,{danger:!0,type:"primary",action:function(){return Z({id:P})},onSuccess:function(){var m,B;return!((m=g.current)===null||m===void 0)&&m.reloadAndRest&&((B=g.current)===null||B===void 0||B.reloadAndRest()),!0},onError:function(){var m,B;return!((m=g.current)===null||m===void 0)&&m.reset&&((B=g.current)===null||B===void 0||B.reset()),!0},messageSuccess:"delete",children:"\u6279\u91CF\u5220\u9664"}),(0,t.jsx)(We.ZP,{onClick:function(){var m;(m=d.current)===null||m===void 0||m.apply(Q)},children:"\u514D\u8D39\u8BC1\u4E66"})]})},pagination:(0,Xe.O)()})]})}},67255:function(Ce,I,e){e.d(I,{O:function(){return r},j:function(){return f}});function r(){var S=localStorage.getItem("dpanel-pagesize");return S=="all"?!1:{showSizeChanger:!0,defaultPageSize:parseInt(S!=null?S:"20")}}function f(S){var F="dpanel-table-column-".concat(S),A={};if(localStorage.getItem(F)){var y;A=JSON.parse((y=localStorage.getItem(F))!==null&&y!==void 0?y:"{}")}return{defaultValue:A,onChange:function(E){localStorage.setItem("dpanel-table-column-".concat(S),JSON.stringify(E))}}}},38925:function(Ce,I,e){e.d(I,{Z:function(){return C}});var r=e(67294),f=e(89739),S=e(4340),F=e(97937),A=e(21640),y=e(78860),K=e(93967),E=e.n(K),Y=e(29372),u=e(64217),j=e(42550),N=e(96159),z=e(53124),L=e(11568),Z=e(14747),J=e(83559);const V=(a,o,s,i,v)=>({background:a,border:`${(0,L.bf)(i.lineWidth)} ${i.lineType} ${o}`,[`${v}-icon`]:{color:s}}),U=a=>{const{componentCls:o,motionDurationSlow:s,marginXS:i,marginSM:v,fontSize:x,fontSizeLG:W,lineHeight:$,borderRadiusLG:_,motionEaseInOutCirc:G,withDescriptionIconSize:H,colorText:te,colorTextHeading:le,withDescriptionPadding:Ee,defaultPadding:w}=a;return{[o]:Object.assign(Object.assign({},(0,Z.Wf)(a)),{position:"relative",display:"flex",alignItems:"center",padding:w,wordWrap:"break-word",borderRadius:_,[`&${o}-rtl`]:{direction:"rtl"},[`${o}-content`]:{flex:1,minWidth:0},[`${o}-icon`]:{marginInlineEnd:i,lineHeight:0},"&-description":{display:"none",fontSize:x,lineHeight:$},"&-message":{color:le},[`&${o}-motion-leave`]:{overflow:"hidden",opacity:1,transition:`max-height ${s} ${G}, opacity ${s} ${G},
        padding-top ${s} ${G}, padding-bottom ${s} ${G},
        margin-bottom ${s} ${G}`},[`&${o}-motion-leave-active`]:{maxHeight:0,marginBottom:"0 !important",paddingTop:0,paddingBottom:0,opacity:0}}),[`${o}-with-description`]:{alignItems:"flex-start",padding:Ee,[`${o}-icon`]:{marginInlineEnd:v,fontSize:H,lineHeight:0},[`${o}-message`]:{display:"block",marginBottom:i,color:le,fontSize:W},[`${o}-description`]:{display:"block",color:te}},[`${o}-banner`]:{marginBottom:0,border:"0 !important",borderRadius:0}}},Fe=a=>{const{componentCls:o,colorSuccess:s,colorSuccessBorder:i,colorSuccessBg:v,colorWarning:x,colorWarningBorder:W,colorWarningBg:$,colorError:_,colorErrorBorder:G,colorErrorBg:H,colorInfo:te,colorInfoBorder:le,colorInfoBg:Ee}=a;return{[o]:{"&-success":V(v,i,s,a,o),"&-info":V(Ee,le,te,a,o),"&-warning":V($,W,x,a,o),"&-error":Object.assign(Object.assign({},V(H,G,_,a,o)),{[`${o}-description > pre`]:{margin:0,padding:0}})}}},Be=a=>{const{componentCls:o,iconCls:s,motionDurationMid:i,marginXS:v,fontSizeIcon:x,colorIcon:W,colorIconHover:$}=a;return{[o]:{"&-action":{marginInlineStart:v},[`${o}-close-icon`]:{marginInlineStart:v,padding:0,overflow:"hidden",fontSize:x,lineHeight:(0,L.bf)(x),backgroundColor:"transparent",border:"none",outline:"none",cursor:"pointer",[`${s}-close`]:{color:W,transition:`color ${i}`,"&:hover":{color:$}}},"&-close-text":{color:W,transition:`color ${i}`,"&:hover":{color:$}}}}},he=a=>({withDescriptionIconSize:a.fontSizeHeading3,defaultPadding:`${a.paddingContentVerticalSM}px 12px`,withDescriptionPadding:`${a.paddingMD}px ${a.paddingContentHorizontalLG}px`});var oe=(0,J.I$)("Alert",a=>[U(a),Fe(a),Be(a)],he),Ae=function(a,o){var s={};for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&o.indexOf(i)<0&&(s[i]=a[i]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var v=0,i=Object.getOwnPropertySymbols(a);v<i.length;v++)o.indexOf(i[v])<0&&Object.prototype.propertyIsEnumerable.call(a,i[v])&&(s[i[v]]=a[i[v]]);return s};const Oe={success:f.Z,info:y.Z,error:S.Z,warning:A.Z},Te=a=>{const{icon:o,prefixCls:s,type:i}=a,v=Oe[i]||null;return o?(0,N.wm)(o,r.createElement("span",{className:`${s}-icon`},o),()=>({className:E()(`${s}-icon`,o.props.className)})):r.createElement(v,{className:`${s}-icon`})},ae=a=>{const{isClosable:o,prefixCls:s,closeIcon:i,handleClose:v,ariaProps:x}=a,W=i===!0||i===void 0?r.createElement(F.Z,null):i;return o?r.createElement("button",Object.assign({type:"button",onClick:v,className:`${s}-close-icon`,tabIndex:0},x),W):null};var De=r.forwardRef((a,o)=>{const{description:s,prefixCls:i,message:v,banner:x,className:W,rootClassName:$,style:_,onMouseEnter:G,onMouseLeave:H,onClick:te,afterClose:le,showIcon:Ee,closable:w,closeText:me,closeIcon:se,action:Ze,id:q}=a,Me=Ae(a,["description","prefixCls","message","banner","className","rootClassName","style","onMouseEnter","onMouseLeave","onClick","afterClose","showIcon","closable","closeText","closeIcon","action","id"]),[Ne,Ke]=r.useState(!1),Le=r.useRef(null);r.useImperativeHandle(o,()=>({nativeElement:Le.current}));const{getPrefixCls:Ie,direction:ze,alert:p}=r.useContext(z.E_),T=Ie("alert",i),[Ue,Re,ve]=oe(T),We=ee=>{var ce;Ke(!0),(ce=a.onClose)===null||ce===void 0||ce.call(a,ee)},ue=r.useMemo(()=>a.type!==void 0?a.type:x?"warning":"info",[a.type,x]),we=r.useMemo(()=>typeof w=="object"&&w.closeIcon||me?!0:typeof w=="boolean"?w:se!==!1&&se!==null&&se!==void 0?!0:!!(p!=null&&p.closable),[me,se,w,p==null?void 0:p.closable]),Se=x&&Ee===void 0?!0:Ee,Ge=E()(T,`${T}-${ue}`,{[`${T}-with-description`]:!!s,[`${T}-no-icon`]:!Se,[`${T}-banner`]:!!x,[`${T}-rtl`]:ze==="rtl"},p==null?void 0:p.className,W,$,ve,Re),Qe=(0,u.Z)(Me,{aria:!0,data:!0}),Xe=r.useMemo(()=>{var ee,ce;return typeof w=="object"&&w.closeIcon?w.closeIcon:me||(se!==void 0?se:typeof(p==null?void 0:p.closable)=="object"&&(!((ee=p==null?void 0:p.closable)===null||ee===void 0)&&ee.closeIcon)?(ce=p==null?void 0:p.closable)===null||ce===void 0?void 0:ce.closeIcon:p==null?void 0:p.closeIcon)},[se,w,me,p==null?void 0:p.closeIcon]),ke=r.useMemo(()=>{const ee=w!=null?w:p==null?void 0:p.closable;if(typeof ee=="object"){const{closeIcon:ce}=ee;return Ae(ee,["closeIcon"])}return{}},[w,p==null?void 0:p.closable]);return Ue(r.createElement(Y.ZP,{visible:!Ne,motionName:`${T}-motion`,motionAppear:!1,motionEnter:!1,onLeaveStart:ee=>({maxHeight:ee.offsetHeight}),onLeaveEnd:le},(ee,ce)=>{let{className:Ye,style:Je}=ee;return r.createElement("div",Object.assign({id:q,ref:(0,j.sQ)(Le,ce),"data-show":!Ne,className:E()(Ge,Ye),style:Object.assign(Object.assign(Object.assign({},p==null?void 0:p.style),_),Je),onMouseEnter:G,onMouseLeave:H,onClick:te,role:"alert"},Qe),Se?r.createElement(Te,{description:s,icon:a.icon,prefixCls:T,type:ue}):null,r.createElement("div",{className:`${T}-content`},v?r.createElement("div",{className:`${T}-message`},v):null,s?r.createElement("div",{className:`${T}-description`},s):null),Ze?r.createElement("div",{className:`${T}-action`},Ze):null,r.createElement(ae,{isClosable:we,prefixCls:T,closeIcon:Xe,handleClose:We,ariaProps:ke}))}))}),Ve=e(15671),be=e(43144),fe=e(53640),n=e(60136),O=function(a){function o(){var s;return(0,Ve.Z)(this,o),s=(0,fe.Z)(this,o,arguments),s.state={error:void 0,info:{componentStack:""}},s}return(0,n.Z)(o,a),(0,be.Z)(o,[{key:"componentDidCatch",value:function(i,v){this.setState({error:i,info:v})}},{key:"render",value:function(){const{message:i,description:v,id:x,children:W}=this.props,{error:$,info:_}=this.state,G=(_==null?void 0:_.componentStack)||null,H=typeof i=="undefined"?($||"").toString():i,te=typeof v=="undefined"?G:v;return $?r.createElement(De,{id:x,type:"error",message:H,description:r.createElement("pre",{style:{fontSize:"0.9em",overflowX:"auto"}},te)}):W}}])}(r.Component);const t=De;t.ErrorBoundary=O;var C=t},66309:function(Ce,I,e){e.d(I,{Z:function(){return fe}});var r=e(67294),f=e(93967),S=e.n(f),F=e(98423),A=e(98787),y=e(69760),K=e(96159),E=e(45353),Y=e(53124),u=e(11568),j=e(10274),N=e(14747),z=e(83262),L=e(83559);const Z=n=>{const{paddingXXS:l,lineWidth:O,tagPaddingHorizontal:t,componentCls:C,calc:a}=n,o=a(t).sub(O).equal(),s=a(l).sub(O).equal();return{[C]:Object.assign(Object.assign({},(0,N.Wf)(n)),{display:"inline-block",height:"auto",marginInlineEnd:n.marginXS,paddingInline:o,fontSize:n.tagFontSize,lineHeight:n.tagLineHeight,whiteSpace:"nowrap",background:n.defaultBg,border:`${(0,u.bf)(n.lineWidth)} ${n.lineType} ${n.colorBorder}`,borderRadius:n.borderRadiusSM,opacity:1,transition:`all ${n.motionDurationMid}`,textAlign:"start",position:"relative",[`&${C}-rtl`]:{direction:"rtl"},"&, a, a:hover":{color:n.defaultColor},[`${C}-close-icon`]:{marginInlineStart:s,fontSize:n.tagIconSize,color:n.colorTextDescription,cursor:"pointer",transition:`all ${n.motionDurationMid}`,"&:hover":{color:n.colorTextHeading}},[`&${C}-has-color`]:{borderColor:"transparent",[`&, a, a:hover, ${n.iconCls}-close, ${n.iconCls}-close:hover`]:{color:n.colorTextLightSolid}},"&-checkable":{backgroundColor:"transparent",borderColor:"transparent",cursor:"pointer",[`&:not(${C}-checkable-checked):hover`]:{color:n.colorPrimary,backgroundColor:n.colorFillSecondary},"&:active, &-checked":{color:n.colorTextLightSolid},"&-checked":{backgroundColor:n.colorPrimary,"&:hover":{backgroundColor:n.colorPrimaryHover}},"&:active":{backgroundColor:n.colorPrimaryActive}},"&-hidden":{display:"none"},[`> ${n.iconCls} + span, > span + ${n.iconCls}`]:{marginInlineStart:o}}),[`${C}-borderless`]:{borderColor:"transparent",background:n.tagBorderlessBg}}},J=n=>{const{lineWidth:l,fontSizeIcon:O,calc:t}=n,C=n.fontSizeSM;return(0,z.IX)(n,{tagFontSize:C,tagLineHeight:(0,u.bf)(t(n.lineHeightSM).mul(C).equal()),tagIconSize:t(O).sub(t(l).mul(2)).equal(),tagPaddingHorizontal:8,tagBorderlessBg:n.defaultBg})},V=n=>({defaultBg:new j.C(n.colorFillQuaternary).onBackground(n.colorBgContainer).toHexString(),defaultColor:n.colorText});var U=(0,L.I$)("Tag",n=>{const l=J(n);return Z(l)},V),Fe=function(n,l){var O={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&l.indexOf(t)<0&&(O[t]=n[t]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var C=0,t=Object.getOwnPropertySymbols(n);C<t.length;C++)l.indexOf(t[C])<0&&Object.prototype.propertyIsEnumerable.call(n,t[C])&&(O[t[C]]=n[t[C]]);return O},he=r.forwardRef((n,l)=>{const{prefixCls:O,style:t,className:C,checked:a,onChange:o,onClick:s}=n,i=Fe(n,["prefixCls","style","className","checked","onChange","onClick"]),{getPrefixCls:v,tag:x}=r.useContext(Y.E_),W=le=>{o==null||o(!a),s==null||s(le)},$=v("tag",O),[_,G,H]=U($),te=S()($,`${$}-checkable`,{[`${$}-checkable-checked`]:a},x==null?void 0:x.className,C,G,H);return _(r.createElement("span",Object.assign({},i,{ref:l,style:Object.assign(Object.assign({},t),x==null?void 0:x.style),className:te,onClick:W})))}),oe=e(98719);const Ae=n=>(0,oe.Z)(n,(l,O)=>{let{textColor:t,lightBorderColor:C,lightColor:a,darkColor:o}=O;return{[`${n.componentCls}${n.componentCls}-${l}`]:{color:t,background:a,borderColor:C,"&-inverse":{color:n.colorTextLightSolid,background:o,borderColor:o},[`&${n.componentCls}-borderless`]:{borderColor:"transparent"}}}});var Oe=(0,L.bk)(["Tag","preset"],n=>{const l=J(n);return Ae(l)},V);function Te(n){return typeof n!="string"?n:n.charAt(0).toUpperCase()+n.slice(1)}const ae=(n,l,O)=>{const t=Te(O);return{[`${n.componentCls}${n.componentCls}-${l}`]:{color:n[`color${O}`],background:n[`color${t}Bg`],borderColor:n[`color${t}Border`],[`&${n.componentCls}-borderless`]:{borderColor:"transparent"}}}};var $e=(0,L.bk)(["Tag","status"],n=>{const l=J(n);return[ae(l,"success","Success"),ae(l,"processing","Info"),ae(l,"error","Error"),ae(l,"warning","Warning")]},V),De=function(n,l){var O={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&l.indexOf(t)<0&&(O[t]=n[t]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var C=0,t=Object.getOwnPropertySymbols(n);C<t.length;C++)l.indexOf(t[C])<0&&Object.prototype.propertyIsEnumerable.call(n,t[C])&&(O[t[C]]=n[t[C]]);return O};const be=r.forwardRef((n,l)=>{const{prefixCls:O,className:t,rootClassName:C,style:a,children:o,icon:s,color:i,onClose:v,bordered:x=!0,visible:W}=n,$=De(n,["prefixCls","className","rootClassName","style","children","icon","color","onClose","bordered","visible"]),{getPrefixCls:_,direction:G,tag:H}=r.useContext(Y.E_),[te,le]=r.useState(!0),Ee=(0,F.Z)($,["closeIcon","closable"]);r.useEffect(()=>{W!==void 0&&le(W)},[W]);const w=(0,A.o2)(i),me=(0,A.yT)(i),se=w||me,Ze=Object.assign(Object.assign({backgroundColor:i&&!se?i:void 0},H==null?void 0:H.style),a),q=_("tag",O),[Me,Ne,Ke]=U(q),Le=S()(q,H==null?void 0:H.className,{[`${q}-${i}`]:se,[`${q}-has-color`]:i&&!se,[`${q}-hidden`]:!te,[`${q}-rtl`]:G==="rtl",[`${q}-borderless`]:!x},t,C,Ne,Ke),Ie=ve=>{ve.stopPropagation(),v==null||v(ve),!ve.defaultPrevented&&le(!1)},[,ze]=(0,y.Z)((0,y.w)(n),(0,y.w)(H),{closable:!1,closeIconRender:ve=>{const We=r.createElement("span",{className:`${q}-close-icon`,onClick:Ie},ve);return(0,K.wm)(ve,We,ue=>({onClick:we=>{var Se;(Se=ue==null?void 0:ue.onClick)===null||Se===void 0||Se.call(ue,we),Ie(we)},className:S()(ue==null?void 0:ue.className,`${q}-close-icon`)}))}}),p=typeof $.onClick=="function"||o&&o.type==="a",T=s||null,Ue=T?r.createElement(r.Fragment,null,T,o&&r.createElement("span",null,o)):o,Re=r.createElement("span",Object.assign({},Ee,{ref:l,className:Le,style:Ze}),Ue,ze,w&&r.createElement(Oe,{key:"preset",prefixCls:q}),me&&r.createElement($e,{key:"status",prefixCls:q}));return Me(p?r.createElement(E.Z,{component:"Tag"},Re):Re)});be.CheckableTag=he;var fe=be},53640:function(Ce,I,e){e.d(I,{Z:function(){return F}});var r=e(61120),f=e(78814),S=e(82963);function F(A,y,K){return y=(0,r.Z)(y),(0,S.Z)(A,(0,f.Z)()?Reflect.construct(y,K||[],(0,r.Z)(A).constructor):y.apply(A,K))}}}]);
