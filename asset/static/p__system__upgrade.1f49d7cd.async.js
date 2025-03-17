"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[992],{12044:function(k,B,e){e.d(B,{j:function(){return O}});var t=e(34155),c=typeof t!="undefined"&&t.versions!=null&&t.versions.node!=null,O=function(){return typeof window!="undefined"&&typeof window.document!="undefined"&&typeof window.matchMedia!="undefined"&&!c}},60933:function(k,B,e){e.r(B),e.d(B,{default:function(){return T}});var t=e(15009),c=e.n(t),O=e(99289),E=e.n(O),h=e(5574),b=e.n(h),j=e(2831),I=e(89035),S=e(90078),F=e(38345),$=e(38925),A=e(25593),M=e(67294),s=e(85893);function T(){var i=(0,M.useState)([]),x=b()(i,2),J=x[0],Y=x[1];(0,M.useEffect)(function(){q({})},[]);var q=function(){var H=E()(c()().mark(function G(V){var d,W,X,Q,Z;return c()().wrap(function(U){for(;;)switch(U.prev=U.next){case 0:return U.next=2,(0,j.d6)();case 2:d=U.sent,W="",d.data.info.Mounts.map(function(_){_.Type=="volume"&&(W=_.Name)}),X=Object.keys(d.data.info.HostConfig.PortBindings).map(function(_){return d.data.info.HostConfig.PortBindings[_].map(function(ee){return"-p ".concat(ee.HostPort,":").concat(String(parseInt(_)))})}),Q=!1,Z=d.data.info.HostConfig.Binds.map(function(_){return _.indexOf(":/dpanel")>-1&&(Q=!0),"-v ".concat(_)}),Q||(W="",d.data.info.Mounts.map(function(_){_.Type=="volume"&&(W=_.Name)}),Z.push("-v "+W+":/dpanel")),Y(["sudo docker stop ".concat(d.data.info.Name," && sudo docker rm ").concat(d.data.info.Name),"sudo docker pull ".concat(d.data.info.Config.Image),"sudo docker run -it -d --name ".concat(d.data.info.Name," --restart=always ").concat(X.join(" ")," ").concat(Z.join(" ")," ").concat(d.data.info.Config.Image)+(d.data.info.NetworkSettings.Networks["dpanel-local"]?" && docker network connect dpanel-local ".concat(d.data.info.Name):"")]);case 10:case"end":return U.stop()}},G)}));return function(V){return H.apply(this,arguments)}}();return(0,s.jsx)(S._z,{children:(0,s.jsxs)(F.Z,{direction:"column",children:[(0,s.jsx)($.Z,{message:"\u8BF7\u52A1\u5FC5\u4ED4\u7EC6\u9605\u8BFB",showIcon:!0,description:(0,s.jsxs)("ol",{style:{marginLeft:"-20px"},children:[(0,s.jsx)("li",{children:"\u66F4\u65B0\u9762\u677F\u65F6\uFF0C\u9700\u8981\u5728\u5BBF\u4E3B\u673A\u4E0A\u6267\u884C\u66F4\u65B0\u811A\u672C\u3002"}),(0,s.jsx)("li",{children:"\u66F4\u65B0\u811A\u672C\u652F\u6301\u66F4\u65B0\u548C\u65B0\u88C5\u9762\u677F\u5BB9\u5668\uFF0C\u66F4\u65B0\u65F6\u8BF7\u6307\u5B9A\u5F53\u524D\u9762\u677F\u5BB9\u5668\u7684\u540D\u79F0"}),(0,s.jsx)("li",{children:"\u66F4\u65B0\u8FC7\u7A0B\u4E2D\u4F1A\u5220\u9664\u3001\u91CD\u5EFA\u9762\u677F\u5BB9\u5668\u3002\u5BFC\u81F4\u7AD9\u70B9\u65E0\u6CD5\u8BBF\u95EE\uFF0C\u8BF7\u8C28\u614E\u64CD\u4F5C\u3002\uFF08Lite \u7248\u65E0\u5F71\u54CD\uFF09"}),(0,s.jsx)("li",{children:(0,s.jsx)(A.Z.Text,{type:"danger",children:"\u8BF7\u4FDD\u6301\u9762\u677F\u5BB9\u5668\u4E2D\u7684 /dpanel \u76EE\u5F55\u4E3A\u4E4B\u524D\u5B58\u50A8\u5377\u6216\u662F\u6302\u8F7D\u76EE\u5F55\uFF0C\u5426\u5219\u6570\u636E\u5C06\u4F1A\u4E22\u5931"})})]}),type:"warning",style:{marginBottom:"20px"}}),(0,s.jsxs)(F.Z,{ghost:!0,style:{paddingBottom:50},direction:"column",gutter:[10,50],children:[(0,s.jsx)(F.Z,{bordered:!0,headerBordered:!0,title:(0,s.jsx)(I.Z,{}),bodyStyle:{padding:"10px",background:"#24292f"},subTitle:(0,s.jsxs)(s.Fragment,{children:["\u4E00\u952E\u66F4\u65B0\u811A\u672C\uFF0C",(0,s.jsx)("a",{href:"https://dpanel.cc/#/zh-cn/install/shell",target:"_blank",children:"\u67E5\u770B\u6587\u6863"})]}),children:(0,s.jsx)(A.Z.Text,{copyable:!0,style:{color:"#ffffff"},children:"sudo curl -sSL https://dpanel.cc/quick.sh -o quick.sh && sudo bash quick.sh"})}),(0,s.jsx)(F.Z,{bordered:!0,headerBordered:!0,title:(0,s.jsx)(I.Z,{}),bodyStyle:{padding:"10px",background:"#24292f"},subTitle:(0,s.jsxs)(s.Fragment,{children:["\u624B\u52A8\u66F4\u65B0\u811A\u672C\uFF0C",(0,s.jsx)("a",{href:"https://dpanel.cc/#/zh-cn/manual/setting/upgrade",target:"_blank",children:"\u67E5\u770B\u6587\u6863"})]}),children:J.map(function(H){return(0,s.jsx)(A.Z.Paragraph,{copyable:!0,style:{color:"#ffffff"},children:H})})})]})]})})}},2831:function(k,B,e){e.d(B,{Ll:function(){return F},aF:function(){return b},d6:function(){return A},u5:function(){return I}});var t=e(15009),c=e.n(t),O=e(99289),E=e.n(O),h=e(82346);function b(){return j.apply(this,arguments)}function j(){return j=E()(c()().mark(function s(){return c()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,(0,h.request)("/api/common/home/info",{method:"POST"});case 2:return i.abrupt("return",i.sent);case 3:case"end":return i.stop()}},s)})),j.apply(this,arguments)}function I(){return S.apply(this,arguments)}function S(){return S=E()(c()().mark(function s(){return c()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,(0,h.request)("/api/common/home/check-new-version",{method:"POST"});case 2:return i.abrupt("return",i.sent);case 3:case"end":return i.stop()}},s)})),S.apply(this,arguments)}function F(){return $.apply(this,arguments)}function $(){return $=E()(c()().mark(function s(){return c()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,(0,h.request)("/api/common/home/usage",{method:"POST"});case 2:return i.abrupt("return",i.sent);case 3:case"end":return i.stop()}},s)})),$.apply(this,arguments)}function A(){return M.apply(this,arguments)}function M(){return M=E()(c()().mark(function s(){return c()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,(0,h.request)("/api/common/home/upgrade-script",{method:"POST"});case 2:return i.abrupt("return",i.sent);case 3:case"end":return i.stop()}},s)})),M.apply(this,arguments)}},38925:function(k,B,e){e.d(B,{Z:function(){return ce}});var t=e(67294),c=e(89739),O=e(4340),E=e(97937),h=e(21640),b=e(78860),j=e(93967),I=e.n(j),S=e(29372),F=e(64217),$=e(42550),A=e(96159),M=e(53124),s=e(11568),T=e(14747),i=e(83559);const x=(n,o,l,r,u)=>({background:n,border:`${(0,s.bf)(r.lineWidth)} ${r.lineType} ${o}`,[`${u}-icon`]:{color:l}}),J=n=>{const{componentCls:o,motionDurationSlow:l,marginXS:r,marginSM:u,fontSize:m,fontSizeLG:v,lineHeight:C,borderRadiusLG:P,motionEaseInOutCirc:y,withDescriptionIconSize:R,colorText:L,colorTextHeading:K,withDescriptionPadding:w,defaultPadding:f}=n;return{[o]:Object.assign(Object.assign({},(0,T.Wf)(n)),{position:"relative",display:"flex",alignItems:"center",padding:f,wordWrap:"break-word",borderRadius:P,[`&${o}-rtl`]:{direction:"rtl"},[`${o}-content`]:{flex:1,minWidth:0},[`${o}-icon`]:{marginInlineEnd:r,lineHeight:0},"&-description":{display:"none",fontSize:m,lineHeight:C},"&-message":{color:K},[`&${o}-motion-leave`]:{overflow:"hidden",opacity:1,transition:`max-height ${l} ${y}, opacity ${l} ${y},
        padding-top ${l} ${y}, padding-bottom ${l} ${y},
        margin-bottom ${l} ${y}`},[`&${o}-motion-leave-active`]:{maxHeight:0,marginBottom:"0 !important",paddingTop:0,paddingBottom:0,opacity:0}}),[`${o}-with-description`]:{alignItems:"flex-start",padding:w,[`${o}-icon`]:{marginInlineEnd:u,fontSize:R,lineHeight:0},[`${o}-message`]:{display:"block",marginBottom:r,color:K,fontSize:v},[`${o}-description`]:{display:"block",color:L}},[`${o}-banner`]:{marginBottom:0,border:"0 !important",borderRadius:0}}},Y=n=>{const{componentCls:o,colorSuccess:l,colorSuccessBorder:r,colorSuccessBg:u,colorWarning:m,colorWarningBorder:v,colorWarningBg:C,colorError:P,colorErrorBorder:y,colorErrorBg:R,colorInfo:L,colorInfoBorder:K,colorInfoBg:w}=n;return{[o]:{"&-success":x(u,r,l,n,o),"&-info":x(w,K,L,n,o),"&-warning":x(C,v,m,n,o),"&-error":Object.assign(Object.assign({},x(R,y,P,n,o)),{[`${o}-description > pre`]:{margin:0,padding:0}})}}},q=n=>{const{componentCls:o,iconCls:l,motionDurationMid:r,marginXS:u,fontSizeIcon:m,colorIcon:v,colorIconHover:C}=n;return{[o]:{"&-action":{marginInlineStart:u},[`${o}-close-icon`]:{marginInlineStart:u,padding:0,overflow:"hidden",fontSize:m,lineHeight:(0,s.bf)(m),backgroundColor:"transparent",border:"none",outline:"none",cursor:"pointer",[`${l}-close`]:{color:v,transition:`color ${r}`,"&:hover":{color:C}}},"&-close-text":{color:v,transition:`color ${r}`,"&:hover":{color:C}}}}},H=n=>({withDescriptionIconSize:n.fontSizeHeading3,defaultPadding:`${n.paddingContentVerticalSM}px 12px`,withDescriptionPadding:`${n.paddingMD}px ${n.paddingContentHorizontalLG}px`});var G=(0,i.I$)("Alert",n=>[J(n),Y(n),q(n)],H),V=function(n,o){var l={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&o.indexOf(r)<0&&(l[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var u=0,r=Object.getOwnPropertySymbols(n);u<r.length;u++)o.indexOf(r[u])<0&&Object.prototype.propertyIsEnumerable.call(n,r[u])&&(l[r[u]]=n[r[u]]);return l};const d={success:c.Z,info:b.Z,error:O.Z,warning:h.Z},W=n=>{const{icon:o,prefixCls:l,type:r}=n,u=d[r]||null;return o?(0,A.wm)(o,t.createElement("span",{className:`${l}-icon`},o),()=>({className:I()(`${l}-icon`,o.props.className)})):t.createElement(u,{className:`${l}-icon`})},X=n=>{const{isClosable:o,prefixCls:l,closeIcon:r,handleClose:u,ariaProps:m}=n,v=r===!0||r===void 0?t.createElement(E.Z,null):r;return o?t.createElement("button",Object.assign({type:"button",onClick:u,className:`${l}-close-icon`,tabIndex:0},m),v):null};var Z=t.forwardRef((n,o)=>{const{description:l,prefixCls:r,message:u,banner:m,className:v,rootClassName:C,style:P,onMouseEnter:y,onMouseLeave:R,onClick:L,afterClose:K,showIcon:w,closable:f,closeText:z,closeIcon:N,action:te,id:de}=n,me=V(n,["description","prefixCls","message","banner","className","rootClassName","style","onMouseEnter","onMouseLeave","onClick","afterClose","showIcon","closable","closeText","closeIcon","action","id"]),[re,fe]=t.useState(!1),se=t.useRef(null);t.useImperativeHandle(o,()=>({nativeElement:se.current}));const{getPrefixCls:pe,direction:_e,alert:a}=t.useContext(M.E_),p=pe("alert",r),[ge,he,ve]=G(p),Ee=g=>{var D;fe(!0),(D=n.onClose)===null||D===void 0||D.call(n,g)},ae=t.useMemo(()=>n.type!==void 0?n.type:m?"warning":"info",[n.type,m]),Ce=t.useMemo(()=>typeof f=="object"&&f.closeIcon||z?!0:typeof f=="boolean"?f:N!==!1&&N!==null&&N!==void 0?!0:!!(a!=null&&a.closable),[z,N,f,a==null?void 0:a.closable]),le=m&&w===void 0?!0:w,ye=I()(p,`${p}-${ae}`,{[`${p}-with-description`]:!!l,[`${p}-no-icon`]:!le,[`${p}-banner`]:!!m,[`${p}-rtl`]:_e==="rtl"},a==null?void 0:a.className,v,C,ve,he),Be=(0,F.Z)(me,{aria:!0,data:!0}),be=t.useMemo(()=>{var g,D;return typeof f=="object"&&f.closeIcon?f.closeIcon:z||(N!==void 0?N:typeof(a==null?void 0:a.closable)=="object"&&(!((g=a==null?void 0:a.closable)===null||g===void 0)&&g.closeIcon)?(D=a==null?void 0:a.closable)===null||D===void 0?void 0:D.closeIcon:a==null?void 0:a.closeIcon)},[N,f,z,a==null?void 0:a.closeIcon]),je=t.useMemo(()=>{const g=f!=null?f:a==null?void 0:a.closable;if(typeof g=="object"){const{closeIcon:D}=g;return V(g,["closeIcon"])}return{}},[f,a==null?void 0:a.closable]);return ge(t.createElement(S.ZP,{visible:!re,motionName:`${p}-motion`,motionAppear:!1,motionEnter:!1,onLeaveStart:g=>({maxHeight:g.offsetHeight}),onLeaveEnd:K},(g,D)=>{let{className:ie,style:De}=g;return t.createElement("div",Object.assign({id:de,ref:(0,$.sQ)(se,D),"data-show":!re,className:I()(ye,ie),style:Object.assign(Object.assign(Object.assign({},a==null?void 0:a.style),P),De),onMouseEnter:y,onMouseLeave:R,onClick:L,role:"alert"},Be),le?t.createElement(W,{description:l,icon:n.icon,prefixCls:p,type:ae}):null,t.createElement("div",{className:`${p}-content`},u?t.createElement("div",{className:`${p}-message`},u):null,l?t.createElement("div",{className:`${p}-description`},l):null),te?t.createElement("div",{className:`${p}-action`},te):null,t.createElement(X,{isClosable:Ce,prefixCls:p,closeIcon:be,handleClose:Ee,ariaProps:je}))}))}),ne=e(15671),U=e(43144),_=e(53640),ee=e(60136),ue=function(n){function o(){var l;return(0,ne.Z)(this,o),l=(0,_.Z)(this,o,arguments),l.state={error:void 0,info:{componentStack:""}},l}return(0,ee.Z)(o,n),(0,U.Z)(o,[{key:"componentDidCatch",value:function(r,u){this.setState({error:r,info:u})}},{key:"render",value:function(){const{message:r,description:u,id:m,children:v}=this.props,{error:C,info:P}=this.state,y=(P==null?void 0:P.componentStack)||null,R=typeof r=="undefined"?(C||"").toString():r,L=typeof u=="undefined"?y:u;return C?t.createElement(Z,{id:m,type:"error",message:R,description:t.createElement("pre",{style:{fontSize:"0.9em",overflowX:"auto"}},L)}):v}}])}(t.Component);const oe=Z;oe.ErrorBoundary=ue;var ce=oe},53640:function(k,B,e){e.d(B,{Z:function(){return E}});var t=e(61120),c=e(78814),O=e(82963);function E(h,b,j){return b=(0,t.Z)(b),(0,O.Z)(h,(0,c.Z)()?Reflect.construct(b,j||[],(0,t.Z)(h).constructor):b.apply(h,j))}}}]);
