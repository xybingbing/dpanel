"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8022],{91806:function(me,q,n){n.d(q,{Z:function(){return ee}});var ne=n(87462),s=n(67294),re={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 64H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm-40 824H232V687h97.9c11.6 32.8 32 62.3 59.1 84.7 34.5 28.5 78.2 44.3 123 44.3s88.5-15.7 123-44.3c27.1-22.4 47.5-51.9 59.1-84.7H792v-63H643.6l-5.2 24.7C626.4 708.5 573.2 752 512 752s-114.4-43.5-126.5-103.3l-5.2-24.7H232V136h560v752zM320 341h384c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H320c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8zm0 160h384c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H320c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z"}}]},name:"container",theme:"outlined"},P=re,V=n(84089),w=function(le,oe){return s.createElement(V.Z,(0,ne.Z)({},le,{ref:oe,icon:P}))},_=s.forwardRef(w),ee=_},60433:function(me,q,n){var ne=n(87462),s=n(67294),re=n(69782),P=n(84089),V=function(ee,ue){return s.createElement(P.Z,(0,ne.Z)({},ee,{ref:ue,icon:re.Z}))},w=s.forwardRef(V);q.Z=w},94979:function(me,q,n){n.r(q),n.d(q,{default:function(){return rt}});var ne=n(15009),s=n.n(ne),re=n(99289),P=n.n(re),V=n(80821),w=n(90098),_=n(43425),ee=n(86548),ue=n(23430),le=n(90078),oe=n(10641),te=n(82346),fe=n(28036),N=n(25593),G=n(42075),ae=n(96074),J=n(83062),c=n(67294),ve=n(94359),he=n(67255),Ze=n(93162),ie=n(24963),K=n(66309),e=n(85893);function Ce(u){var A=(0,te.useIntl)(),O=(0,c.useContext)(ie.Z),F=O.lang,D;if(!u.type)D=(0,e.jsx)(K.Z,{children:F("compose.type.default")});else switch(u.type){case"remoteUrl":D=(0,e.jsx)(K.Z,{color:"cyan",children:F("compose.type.".concat(u.type))});break;case"serverPath":D=(0,e.jsx)(K.Z,{color:"blue",children:F("compose.type.".concat(u.type))});break;case"storagePath":D=(0,e.jsx)(K.Z,{color:"geekblue",children:F("compose.type.".concat(u.type))});break;case"outPath":D=(0,e.jsx)(K.Z,{color:"yellow",children:F("compose.type.".concat(u.type))});break;case"store":D=(0,e.jsx)(K.Z,{color:"green",children:F("compose.type.".concat(u.type))});break;case"dangling":D=(0,e.jsx)(K.Z,{color:"error",children:F("compose.type.".concat(u.type))});break;default:D=(0,e.jsx)(K.Z,{children:F("compose.type.".concat(u.type))})}return(0,e.jsx)(J.Z,{title:u.tootip,children:D})}var pe=n(96781),Re=n(19632),De=n.n(Re),Se=n(5574),Q=n.n(Se),ge=n(74842),xe=n(48689),we=n(33160),Ee=n(87784),Pe=n(30159),X=n(38345),ce=n(97269),H=n(62370),Fe=n(85265),W=n(84567),$e=n(99861),Ie=n(91058),Ae=n(79245),Le=n(63490),Oe=n(55241),Te=n(78451),Be=n(37413),Ve=n(91806),be=n(60433),je=n(89035),ke=n(57716),Ue=n(78272),Ne=n(87662);function Ge(u){var A=(0,c.useState)(""),O=Q()(A,2),F=O[0],D=O[1],h=(0,c.useContext)(ie.Z),p=h.loading,x=h.lang,r=h.notice,l=h.message,f=(0,c.useRef)(),d=(0,c.useRef)(),j=(0,c.useState)(!1),o=Q()(j,2),t=o[0],E=o[1];return(0,c.useEffect)(function(){(0,Ne.EH)().then(function(g){D(g.data.ip)}),E(!1)},[u.containerList]),u.containerList&&(0,e.jsxs)(X.Z,{ghost:!0,title:(0,e.jsx)(Ve.Z,{}),subTitle:"\u5BB9\u5668\u5217\u8868",extra:u.enableSelectService&&(0,e.jsx)(W.Z,{onChange:function(M){E(M.target.checked)},children:"\u81EA\u5B9A\u4E49\u90E8\u7F72\u5BB9\u5668\u670D\u52A1\uFF1F"},"selectService"),children:[(0,e.jsx)(ke.Z,{ref:f}),(0,e.jsx)(Ue.Z,{ref:d}),(0,e.jsx)(Le.Z,{scroll:{x:"max-content"},rowKey:"service",pagination:!1,columns:[{title:"\u5BB9\u5668\u540D\u79F0",dataIndex:"name",width:200,render:function(M,m,b){return(0,e.jsx)(J.Z,{title:m.service,children:(0,e.jsx)(Te.Z,{content:m.name?m.name:m.service})})}},{title:"\u7AEF\u53E3",render:function(M,m,b){var L=[],T=[];return m.publishers&&m.publishers.map(function(I){I.publishedPort?L.push({PrivatePort:I.targetPort,Type:I.protocol,IP:I.url,PublicPort:I.publishedPort}):I.publishedPort&&T.push({PrivatePort:I.targetPort,Type:I.protocol,IP:I.url,PublicPort:I.publishedPort})}),(0,e.jsx)(Be.Z,{publicPort:L,privatePort:T,domain:[],serverIp:F})}},{title:"\u72B6\u6001",render:function(M,m,b){return(0,e.jsx)(ve.Z,{status:m.state,message:{content:x("container.status.".concat(m.state)),placement:"top",showInTag:!0}},m.name)}},{title:"\u64CD\u4F5C",fixed:"right",render:function(M,m,b){return(0,e.jsxs)(G.Z,{split:(0,e.jsx)(ae.Z,{type:"vertical"}),children:[m.name==""&&(0,e.jsx)(Oe.Z,{placement:"left",content:(0,e.jsx)(X.Z,{ghost:!0,title:"\u5BB9\u5668\u5185\u73AF\u5883\u53D8\u91CF",children:(0,e.jsx)(G.Z,{direction:"vertical",children:m.environment&&Object.keys(m.environment).map(function(L){if(m.environment&&m.environment[L])return(0,e.jsx)(N.Z.Text,{code:!0,children:"".concat(L,"=").concat(m.environment[L])},L)})})}),children:(0,e.jsx)(be.Z,{})}),m.name!=""&&(0,e.jsx)(N.Z.Link,{onClick:function(){var T;(T=d.current)===null||T===void 0||T.show(m.name)},children:(0,e.jsx)(_.Z,{})},"container"),m.state=="running"&&(0,e.jsx)(N.Z.Link,{onClick:function(){var T;(T=f.current)===null||T===void 0||T.show(m.name)},children:(0,e.jsx)(je.Z,{})},"console")]})}}],dataSource:u.containerList,rowSelection:t&&u.containerList?{defaultSelectedRowKeys:u.containerList.map(function(g){return g.service}),onChange:function(M,m,b){u.selectServiceFinish&&u.selectServiceFinish(M)}}:void 0})]})}var He=n(81146),Me=n(45742),ze=(0,c.forwardRef)(function(u,A){(0,c.useImperativeHandle)(A,function(){return{show:function(j){return P()(s()().mark(function o(){return s()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:l(u.composeItem),h(!0);case 2:case"end":return E.stop()}},o)}))()}}});var O=(0,c.useState)(!1),F=Q()(O,2),D=F[0],h=F[1],p=(0,c.useState)(),x=Q()(p,2),r=x[0],l=x[1],f=(0,c.useRef)();return(0,e.jsxs)(e.Fragment,{children:[u.showTriggerButton&&(0,e.jsx)(N.Z.Link,{onClick:P()(s()().mark(function d(){return s()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:l(u.composeItem),h(!0);case 2:case"end":return o.stop()}},d)})),children:(0,e.jsx)(J.Z,{title:"\u8FD0\u884C\u65E5\u5FD7",children:(0,e.jsx)(Me.Z,{})})},"log"),(0,e.jsx)(Fe.Z,{title:"\u4EFB\u52A1\u65E5\u5FD7",open:D,forceRender:!0,onClose:function(){h(!1)},afterOpenChange:function(j){if(j)setTimeout(function(){var t,E;(t=f.current)===null||t===void 0||t.start(),(E=f.current)===null||E===void 0||E.fit()},1e3);else{var o;(o=f.current)===null||o===void 0||o.close()}},width:800,children:r&&D&&(0,e.jsx)(He.Z,{ref:f,showInDrawer:!0,id:"compose:log:".concat(String(r.id||r.name)),request:function(){var d=P()(s()().mark(function j(o){var t;return s()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,(0,w.Yz)({id:r.id||r.name,lineTotal:o.lineTotal,download:(t=o.download)!==null&&t!==void 0?t:!1,showTime:o.showTime});case 2:case"end":return g.stop()}},j)}));return function(j){return d.apply(this,arguments)}}(),download:function(){var d=P()(s()().mark(function j(o){var t;return s()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,(0,w.vf)({id:r.id||r.name,lineTotal:o.lineTotal,showTime:o.showTime,download:!0});case 2:return t=g.sent,g.abrupt("return",{data:new Blob([t],{type:"text/plain"}),name:u.composeItem.name+"_"+new Date().toLocaleDateString()+".log"});case 4:case"end":return g.stop()}},j)}));return function(j){return d.apply(this,arguments)}}()})})]})}),Ye=ze,Ke=n(184),Qe=n(95213),We=n(95089),Je=n(92398);function Xe(u){var A=(0,c.useContext)(ie.Z),O=A.message,F=(0,c.useRef)();return u.composeItem.yamlList&&(0,e.jsx)(Ke.a,{title:"\u7F16\u8F91\u4EFB\u52A1 Yaml",formRef:F,trigger:(0,e.jsx)(N.Z.Link,{children:(0,e.jsx)(J.Z,{title:"Yaml",children:"Yaml"})}),onFinish:function(){var D=P()(s()().mark(function h(p){return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,(0,w.im)({id:String(u.composeItem.id?u.composeItem.id:u.composeItem.name),name:u.composeItem.name,type:u.composeItem.setting.type,yaml:p.yaml,yamlOverride:p.yamlOverride});case 2:return u.onFinish&&u.onFinish(),r.abrupt("return",!0);case 4:case"end":return r.stop()}},h)}));return function(h){return D.apply(this,arguments)}}(),children:(0,e.jsx)(X.Z,{ghost:!0,children:(0,e.jsx)(Je.Z,{items:u.composeItem.yamlList.map(function(D,h){var p=[{label:"Yaml \u6587\u4EF6",key:"yaml"},{label:"\u8986\u76D6 Yaml \u6587\u4EF6",key:"yamlOverride"}];return{label:p[h].label,key:p[h].key,children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(H.Z,{hidden:!0,name:p[h].key}),(0,e.jsx)(H.Z,{shouldUpdate:!0,children:function(r){return(0,e.jsx)(We.ZP,{onFocus:function(){if(p[h].key=="yaml"&&u.composeItem.setting.type=="remoteUrl"){O.error("\u8FDC\u7A0Byaml\u6587\u4EF6\u65E0\u6CD5\u4FEE\u6539\uFF0C\u8BF7\u901A\u8FC7\u3010\u8986\u76D6 yaml \u6587\u4EF6\u3011\u7684\u65B9\u5F0F\u4FEE\u6539\u5185\u5BB9\u3002");return}},readOnly:p[h].key=="yaml"&&u.composeItem.setting.type=="remoteUrl",theme:"dark",minHeight:"550px",value:D,onChange:function(f){r.setFieldValue(p[h].key,f)},extensions:[Qe.RI.yaml()]})}})]})}})})})})}var qe=n(54964),_e=(0,c.forwardRef)(function(u,A){(0,c.useImperativeHandle)(A,function(){return{show:function(){var l;x(!0),(l=F.current)===null||l===void 0||l.clear(),setTimeout(function(){var f;(f=F.current)===null||f===void 0||f.fit()},1e3)},close:function(){var l;x(!1),(l=F.current)===null||l===void 0||l.clear()}}});var O=(0,te.useModel)("subscriber"),F=(0,c.useRef)(),D=(0,c.useState)(!1),h=Q()(D,2),p=h[0],x=h[1];return O.addDataHandler("compose:"+u.id,function(r){var l;(l=F.current)===null||l===void 0||l.write(r.data)}),(0,e.jsx)(X.Z,{hidden:!p,ghost:!0,title:(0,e.jsx)(je.Z,{}),subTitle:"\u63A7\u5236\u53F0",extra:(0,e.jsx)(G.Z,{children:(0,e.jsx)(V.Z,{action:function(){var l;return(l=F.current)===null||l===void 0||l.clear(),(0,w.U_)({})},icon:(0,e.jsx)(xe.Z,{}),danger:!0,onSuccess:function(){},children:"\u4E2D\u6B62\u6267\u884C"},"kill")}),children:(0,e.jsx)(qe.Z,{height:"200px",style:{fontSize:12},ref:F})})}),et=_e,tt=(0,c.forwardRef)(function(u,A){(0,c.useImperativeHandle)(A,function(){return{show:function(i){return P()(s()().mark(function Z(){var v,a;return s()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return(v=z.current)===null||v===void 0||v.close(),C.prev=1,C.next=4,ye(i);case 4:h(!0),C.next=11;break;case 7:C.prev=7,C.t0=C.catch(1),h(!1),!((a=se.current)===null||a===void 0)&&a.reloadAndRest&&se.current.reloadAndRest();case 11:case"end":return C.stop()}},Z,null,[[1,7]])}))()}}});var O=(0,c.useState)(!1),F=Q()(O,2),D=F[0],h=F[1],p=(0,c.useContext)(ie.Z),x=p.loading,r=p.lang,l=p.notice,f=p.message,d=(0,te.useNavigate)(),j=(0,c.useState)(),o=Q()(j,2),t=o[0],E=o[1],g=(0,c.useState)(0),M=Q()(g,2),m=M[0],b=M[1],L=(0,c.useRef)(),T=(0,c.useRef)(),I=(0,c.useRef)(),de=(0,c.useRef)(),z=(0,c.useRef)(),at=(0,c.useContext)(pe.Z),se=at.listTableRef,it=function(){var y=P()(s()().mark(function i(Z){var v,a,S,C;return s()().wrap(function($){for(;;)switch($.prev=$.next){case 0:if((v=z.current)===null||v===void 0||v.show(),!Z.pullImageUseDPanel){$.next=5;break}return $.next=4,(S=de.current)===null||S===void 0?void 0:S.start();case 4:(C=de.current)===null||C===void 0||C.finish();case 5:return $.next=7,(0,w.Oh)(Z);case 7:(a=z.current)===null||a===void 0||a.close(),b(m+1);case 9:case"end":return $.stop()}},i)}));return function(Z){return y.apply(this,arguments)}}(),ye=function(){var y=P()(s()().mark(function i(Z){var v,a,S,C,k;return s()().wrap(function(U){for(;;)switch(U.prev=U.next){case 0:return x.show(),U.next=3,(0,w.Pn)({id:Z}).finally(P()(s()().mark(function B(){return s()().wrap(function(Y){for(;;)switch(Y.prev=Y.next){case 0:x.destroy();case 1:case"end":return Y.stop()}},B)}))).catch(function(B){throw B});case 3:v=U.sent,a=v.data.detail,a.setting.status&&a.setting.status.indexOf("running")>-1&&(a.isRunning=!0),a.setting.status&&a.setting.status.indexOf("paused")>-1&&(a.isPaused=!0),a.setting.status&&a.setting.status.indexOf("exited")>-1&&(a.isExited=!0),a.setting.status&&a.setting.status=="waiting"?a.isDeploy=!1:a.isDeploy=!0,a.setting.status&&a.setting.status.indexOf("created")>-1&&(a.isCreated=!0,a.isDeploy=!1),S=v.data.project,S&&(a.imageList=De()(new Set(Object.keys(S.services).map(function(B){var R;return(R=S.services[B].image)!==null&&R!==void 0?R:""})))),a.containerList=v.data.containerList,(!a.containerList||a.containerList.length==0)&&S&&S.services&&(a.containerList=Object.keys(S.services).map(function(B){return{name:"",service:B,publishers:S.services[B].ports?S.services[B].ports.map(function(R){var Y;return{url:"",targetPort:R.target,publishedPort:parseInt(R.published),protocol:(Y=R.protocol)!==null&&Y!==void 0?Y:""}}):[],state:"waiting",status:"",environment:S.services[B].environment}})),a.containerList&&((C=L.current)===null||C===void 0||C.setFieldValue("deployServiceName",v.data.detail.setting.deployServiceName)),a.yamlList=v.data.yaml,E(a),v.data.yaml&&v.data.yaml.map(function(B){(0,Ae.m)(B).map(function(R){a.setting.environment&&!a.setting.environment.find(function(Y){return Y.name==R.name})&&a.setting.environment.push(R)})}),v.data.detail.setting.environment&&((k=L.current)===null||k===void 0||k.setFieldValue("environment",v.data.detail.setting.environment));case 19:case"end":return U.stop()}},i)}));return function(Z){return y.apply(this,arguments)}}();return(0,c.useEffect)(function(){m>0&&t&&ye(t.id||t.name).catch(function(y){h(!1)})},[m]),(0,e.jsx)(Fe.Z,{width:800,forceRender:!0,extra:(0,e.jsxs)(G.Z,{split:(0,e.jsx)(ae.Z,{type:"vertical"}),children:[t&&t.isDeploy&&(0,e.jsx)(Ye,{composeItem:t,showTriggerButton:!0}),t&&(0,e.jsx)(Xe,{composeItem:t,onFinish:P()(s()().mark(function y(){return s()().wrap(function(Z){for(;;)switch(Z.prev=Z.next){case 0:f.info("\u4FEE\u6539 Yaml \u540E\u8BF7\u66F4\u65B0\u8BE5\u4EFB\u52A1\uFF0C\u5982\u679C\u5305\u542B\u73AF\u5883\u53D8\u91CF\u6539\u52A8\uFF0C\u8BF7\u91CD\u65B0\u90E8\u7F72"),b(m+1);case 2:case"end":return Z.stop()}},y)}))})]}),title:"\u5FEB\u6377\u67E5\u770B\u4EFB\u52A1 - ".concat(t==null?void 0:t.name),open:D,onClose:function(){var i;h(!1),E(void 0),!((i=se.current)===null||i===void 0)&&i.reloadAndRest&&se.current.reloadAndRest()},children:(0,e.jsxs)(X.Z,{direction:"column",ghost:!0,gutter:[10,10],children:[(0,e.jsx)(X.Z,{title:(0,e.jsx)(_.Z,{}),subTitle:"\u64CD\u4F5C - "+(t==null?void 0:t.name),ghost:!0,extra:(0,e.jsx)(e.Fragment,{children:t&&t.imageList&&t.imageList.length>0&&(0,e.jsx)($e.Z,{ref:de,image:t.imageList})}),children:t&&(0,e.jsxs)(G.Z,{wrap:!0,children:[(0,e.jsx)(V.Z,{icon:(0,e.jsx)(ge.Z,{}),type:"primary",confirm:(0,e.jsxs)(G.Z,{style:{width:300},direction:"vertical",children:[(0,e.jsx)(N.Z.Text,{children:"\u91CD\u65B0\u521B\u5EFA\u8BE5\u4EFB\u52A1\u4E0B\u7684\u5BB9\u5668\uFF1F"}),(0,e.jsxs)(ce.A,{name:"createForm",formRef:I,layout:"inline",submitter:!1,children:[(0,e.jsx)(H.Z,{initialValue:!1,name:"pullImageUseCommand",valuePropName:"checked",children:(0,e.jsx)(W.Z,{children:"\u4F7F\u7528\u547D\u4EE4\u62C9\u53D6\u955C\u50CF\uFF08\u9700\u914D\u7F6E\u547D\u4EE4\u4EE3\u7406\uFF09\uFF1F"})}),(0,e.jsx)(H.Z,{initialValue:!0,name:"pullImageUseDPanel",valuePropName:"checked",children:(0,e.jsx)(W.Z,{defaultChecked:!0,children:"\u4F7F\u7528\u9762\u677F\u62C9\u53D6\u955C\u50CF\uFF08\u9700\u914D\u7F6E\u4ED3\u5E93\u52A0\u901F\uFF09\uFF1F"})}),(0,e.jsx)(H.Z,{initialValue:!0,name:"createPath",valuePropName:"checked",children:(0,e.jsx)(W.Z,{defaultChecked:!0,children:"\u521B\u5EFA\u6302\u8F7D\u76EE\u5F55\uFF08\u4EC5\u9762\u677F\u975E\u5BB9\u5668\u90E8\u7F72\u751F\u6548\uFF09\uFF1F"})}),(0,e.jsx)(H.Z,{initialValue:!0,name:"removeOrphans",valuePropName:"checked",children:(0,e.jsx)(W.Z,{defaultChecked:!0,children:"\u6E05\u9664\u5DF2\u91CD\u547D\u540D\u6216\u662F\u88AB\u5220\u9664\u7684\u670D\u52A1\uFF1F"})})]})]}),action:P()(s()().mark(function y(){var i,Z,v,a,S,C,k,$,U;return s()().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:if($={id:t.id||t.name},(i=I.current)!==null&&i!==void 0&&i.getFieldValue&&I.current.getFieldValue("pullImageUseDPanel")&&($.pullImageUseDPanel=!0),$.environment=(Z=L.current)===null||Z===void 0?void 0:Z.getFieldValue("environment"),$.deployServiceName=(v=L.current)===null||v===void 0?void 0:v.getFieldValue("deployServiceName"),$.createPath=(a=(S=I.current)===null||S===void 0?void 0:S.getFieldValue("createPath"))!==null&&a!==void 0?a:!0,$.removeOrphans=(C=(k=I.current)===null||k===void 0?void 0:k.getFieldValue("removeOrphans"))!==null&&C!==void 0?C:!0,!(t!=null&&t.isDeploy)){R.next=10;break}if(!((U=I.current)!==null&&U!==void 0&&U.getFieldValue("pullImageUseCommand"))){R.next=10;break}return R.next=10,(0,w.GG)({id:t.id||t.name,op:"pull"});case 10:return R.abrupt("return",it($));case 11:case"end":return R.stop()}},y)})),children:t.isDeploy?"\u66F4\u65B0":"\u542F\u52A8"},"create"),(t.isDeploy||t.isCreated)&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(V.Z,{action:function(){var i;return(i=z.current)===null||i===void 0||i.show(),(0,w.mg)({id:t.id||t.name,deleteImage:!1,deleteData:!1,deleteVolume:!1,deletePath:!1})},onSuccess:function(){b(m+1)},type:"primary",danger:!0,confirm:"notification.confirm.title",icon:(0,e.jsx)(xe.Z,{}),children:t.setting.type=="outPath"?"\u5220\u9664\u4EFB\u52A1":"\u91CD\u65B0\u90E8\u7F72"}),(0,e.jsx)(ae.Z,{type:"vertical"})]}),t.isDeploy&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(V.Z,{icon:(0,e.jsx)(we.Z,{}),action:P()(s()().mark(function y(){var i;return s()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return(i=z.current)===null||i===void 0||i.show(),v.abrupt("return",(0,w.GG)({id:t.id||t.name,op:"restart"}));case 2:case"end":return v.stop()}},y)})),onSuccess:function(){b(m+1)},children:"\u91CD\u542F"},"restart"),(0,e.jsx)(V.Z,{action:function(){var i;return(i=z.current)===null||i===void 0||i.show(),(0,w.GG)({id:t.id||t.name,op:"stop"})},icon:(0,e.jsx)(Ee.Z,{}),disabled:t.isExited,onSuccess:function(){b(m+1)},children:"\u505C\u6B62"}),t.isPaused&&(0,e.jsx)(V.Z,{action:function(){var i;return(i=z.current)===null||i===void 0||i.show(),(0,w.GG)({id:t.id||t.name,op:"unpause"})},onSuccess:function(){b(m+1)},icon:(0,e.jsx)(ge.Z,{}),children:"\u6062\u590D"}),!t.isPaused&&(0,e.jsx)(V.Z,{action:function(){var i;return(i=z.current)===null||i===void 0||i.show(),(0,w.GG)({id:t.id||t.name,op:"pause"})},onSuccess:function(){b(m+1)},icon:(0,e.jsx)(Pe.Z,{}),disabled:!t.isRunning,children:"\u6682\u505C"})]}),(0,e.jsx)(ae.Z,{type:"vertical"}),(0,e.jsx)(te.Link,{to:"/compose/create?id="+(t.id||t.name),children:(0,e.jsx)(fe.ZP,{icon:(0,e.jsx)(ee.Z,{}),children:"\u7F16\u8F91\u4EFB\u52A1"})}),t.isDeploy&&t.id>0&&(0,e.jsx)(V.Z,{type:"primary",action:P()(s()().mark(function y(){var i,Z,v,a,S,C,k,$,U;return s()().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:return(i=z.current)===null||i===void 0||i.show(),R.next=3,(0,w.mg)({id:(Z=t==null?void 0:t.id)!==null&&Z!==void 0?Z:0,deleteImage:(v=(a=T.current)===null||a===void 0?void 0:a.getFieldValue("deleteImage"))!==null&&v!==void 0?v:!1,deleteData:!0,deleteVolume:(S=(C=T.current)===null||C===void 0?void 0:C.getFieldValue("deleteVolume"))!==null&&S!==void 0?S:!1,deletePath:(k=($=T.current)===null||$===void 0?void 0:$.getFieldValue("deletePath"))!==null&&k!==void 0?k:!1});case 3:U=R.sent;case 4:case"end":return R.stop()}},y)})),danger:!0,onSuccess:function(){d("/compose/list")},confirm:(0,e.jsxs)(G.Z,{style:{width:240},direction:"vertical",children:[(0,e.jsx)(N.Z.Text,{children:"\u4F1A\u540C\u65F6\u5220\u9664\u5BB9\u5668\u53CA\u90E8\u7F72\u76F8\u5173\u6570\u636E\uFF0C\u672A\u52FE\u9009\u5220\u9664 compose \u6587\u4EF6\u65F6 yaml \u6587\u4EF6\u5C06\u4F1A\u4FDD\u7559\uFF0C\u786E\u8BA4\u5417\uFF1F"}),(0,e.jsxs)(ce.A,{formRef:T,layout:"inline",submitter:!1,children:[(0,e.jsx)(H.Z,{initialValue:!1,name:"deleteImage",valuePropName:"checked",children:(0,e.jsx)(W.Z,{children:"\u5220\u9664\u955C\u50CF\uFF1F"})}),(0,e.jsx)(H.Z,{initialValue:!1,name:"deleteVolume",valuePropName:"checked",children:(0,e.jsx)(W.Z,{children:"\u5220\u9664\u5B58\u50A8\u5377\uFF1F"})}),(0,e.jsx)(H.Z,{initialValue:!1,name:"deletePath",valuePropName:"checked",children:(0,e.jsx)(W.Z,{children:"\u5220\u9664 Compose \u6587\u4EF6\u548C\u4EFB\u52A1\u76EE\u5F55\uFF1F"})})]})]}),children:"\u5220\u9664\u4EFB\u52A1"})]})},"operator"),t&&(0,e.jsx)(et,{ref:z,id:t.id||t.name}),t&&(0,e.jsx)(Ge,{containerList:t.containerList,enableSelectService:!t.isDeploy,selectServiceFinish:function(i){var Z;(Z=L.current)===null||Z===void 0||Z.setFieldValue("deployServiceName",i)}}),(0,e.jsxs)(ce.A,{submitter:!1,formRef:L,children:[(0,e.jsx)(H.Z,{name:"deployServiceName",hidden:!0}),!(t!=null&&t.isDeploy)&&(0,e.jsx)(X.Z,{title:"\u73AF\u5883\u53D8\u91CF",subTitle:"\u73AF\u5883\u53D8\u91CF\u4F1A\u8986\u76D6 .env \u6587\u4EF6",tooltip:"\u66B4\u9732\u73AF\u5883\u53D8\u91CF\u9700\u8981\u5728 yaml \u4E2D\u914D\u7F6E\u73AF\u5883\u53D8\u91CF",ghost:!0,children:(0,e.jsx)(Ie.Z,{showCardGhost:!0,name:"environment",showDisableName:!0,requireValue:!0,showDeleteButton:!1})})]})]})})}),nt=tt;function rt(){var u=(0,c.useContext)(pe.Z),A=u.listTableRef,O=(0,c.useContext)(ie.Z),F=O.lang,D=O.notice,h=(0,c.useRef)();return(0,e.jsxs)(le._z,{header:{extra:[(0,e.jsx)(te.Link,{to:"/compose/create",reloadDocument:location.search.length>0,children:(0,e.jsx)(fe.ZP,{type:"primary",children:"\u521B\u5EFA\u4EFB\u52A1"},"createCompose")},"create")]},children:[(0,e.jsx)(nt,{ref:h}),(0,e.jsx)(oe.Z,{scroll:{x:"max-content"},request:function(){var p=P()(s()().mark(function x(r){var l;return s()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,(0,w.pm)({title:r.title,name:r.name});case 2:return l=d.sent,d.abrupt("return",{data:l.data.list,success:!0,total:l.data.list.length});case 4:case"end":return d.stop()}},x)}));return function(x){return p.apply(this,arguments)}}(),rowKey:"name",columns:[{title:"\u6807\u8BC6",dataIndex:"name",width:200,render:function(x,r,l,f,d){return(0,e.jsx)(N.Z.Link,{onClick:function(){if(r.setting.type=="dangling")D.info("\u65E0\u6CD5\u627E\u5230\u8BE5\u4EFB\u52A1\u7684 compose.yaml \u6587\u4EF6\uFF0C\u8BF7\u6302\u8F7D\u76F8\u5E94\u7684 compose \u6587\u4EF6\u6216\u662F\u5728\u9762\u677F\u7684 compose \u76EE\u5F55\u6DFB\u52A0\u540C\u6807\u8BC6\u7684\u4EFB\u52A1\u76EE\u5F55\u53CA compose.yaml \u6587\u4EF6");else{var o;(o=h.current)===null||o===void 0||o.show(r.id||r.name)}},children:r.name})},sorter:function(x,r){return x.name.localeCompare(r.name)},sortDirections:["descend","ascend"]},{title:"\u9879\u76EE\u540D\u79F0",dataIndex:"title",width:200},{title:"\u7C7B\u578B",width:150,search:!1,render:function(x,r,l,f,d){var j;return(0,e.jsx)(Ce,{tootip:(j=r.setting.uri)!==null&&j!==void 0?j:"",type:r.setting&&r.setting.type?r.setting.type:""})}},{title:"\u5BB9\u5668\u72B6\u6001",dataIndex:"status",search:!1,width:300,render:function(x,r,l,f,d){return(0,e.jsx)(G.Z,{children:r.setting.status.split(", ").map(function(j,o){var t="running",E=j.indexOf("(");return E>-1?t=j.slice(0,E):t=j,(0,e.jsx)(ve.Z,{status:t,message:{content:F("compose.status.".concat(t),{count:j.slice(E+1,j.length-1)}),title:r.setting.message,placement:"top",showInTag:!0}},o)})})}},{title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"",search:!1,width:150,render:function(x,r,l,f,d){return r.setting.createdAt?new Date(r.setting.createdAt).toLocaleString():"-"}},{title:"\u66F4\u65B0\u65F6\u95F4",dataIndex:"",search:!1,width:150,render:function(x,r,l,f,d){return r.setting.updatedAt?new Date(r.setting.updatedAt).toLocaleString():"-"}},{title:"\u64CD\u4F5C",width:80,valueType:"option",fixed:"right",key:"option",render:function(x,r,l,f,d){return r.setting.type!="dangling"&&(0,e.jsxs)(G.Z,{split:(0,e.jsx)(ae.Z,{type:"vertical"}),children:[(0,e.jsx)(N.Z.Link,{onClick:function(){var o;(o=h.current)===null||o===void 0||o.show(r.id||r.name)},children:(0,e.jsx)(J.Z,{title:"\u90E8\u7F72",children:(0,e.jsx)(_.Z,{})})},"3"),(0,e.jsx)(te.Link,{to:"/compose/create?id="+(r.id||r.name),children:(0,e.jsx)(J.Z,{title:"\u7F16\u8F91",children:(0,e.jsx)(ee.Z,{})})},"4"),(0,e.jsx)(N.Z.Link,{onClick:P()(s()().mark(function j(){var o,t;return s()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,(0,w.tw)({id:r.id||r.name});case 2:o=g.sent,t=new Blob([o],{type:"application/zip"}),(0,Ze.saveAs)(t,"compose-"+r.name+".zip");case 5:case"end":return g.stop()}},j)})),children:(0,e.jsx)(J.Z,{title:"\u4E0B\u8F7D",children:(0,e.jsx)(ue.Z,{})})},"2")]})}}],rowSelection:{defaultSelectedRowKeys:[],alwaysShowAlert:!0,getCheckboxProps:function(x){return{disabled:x.setting.type=="dangling"||x.setting.type=="outPath"}}},tableAlertOptionRender:function(x){var r=x.selectedRows;return(0,e.jsx)(G.Z,{size:16,children:(0,e.jsx)(V.Z,{danger:!0,type:"primary",action:function(){return(0,w.ik)({id:r.map(function(f){return f.id})})},onSuccess:function(){var f,d;return!((f=A.current)===null||f===void 0)&&f.reloadAndRest&&((d=A.current)===null||d===void 0||d.reloadAndRest()),!0},onError:function(){var f,d;return!((f=A.current)===null||f===void 0)&&f.reset&&((d=A.current)===null||d===void 0||d.reset()),!0},confirm:"notification.confirm.title",children:"\u6279\u91CF\u5220\u9664"})})},pagination:(0,he.O)(),search:{collapsed:!1},actionRef:A,columnsState:(0,he.j)("compose-list")})]})}}}]);
