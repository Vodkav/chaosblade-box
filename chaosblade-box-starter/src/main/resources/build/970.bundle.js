(self.webpackChunk=self.webpackChunk||[]).push([[970],{30553:(N,m,e)=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0});var c=e(30156);m.default=c.Radio},19e3:function(N,m,e){var c,R,A,v=e(24596),p=e(67394),h=e(93168),Y=e(23587),J=e(83452),z=e(95315),H=e(63774),te=e(92937);(function(T,t){if(!0)!(R=[m,e(17225),e(28757),e(35049),e(77809),e(57379),e(81853),e(27378),e(66697),e(14798),e(68055),e(14870),e(73262),e(74427)],c=t,A=typeof c=="function"?c.apply(m,R):c,A!==void 0&&(N.exports=A));else var u})(typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:this,function(T,t,u,w,L,Q,a,n,y,$,ne,se,le,l){"use strict";var i=e(67971);p(T,"__esModule",{value:!0}),T.default=void 0,t=i(t),u=i(u),w=i(w),L=i(L),Q=i(Q),a=i(a),n=C(n),y=i(y),$=i($),ne=i(ne),l=i(l);function g(r){if(typeof h!="function")return null;var f=new h,o=new h;return(g=function(E){return E?o:f})(r)}function C(r,f){if(!f&&r&&r.__esModule)return r;if(r===null||v(r)!=="object"&&typeof r!="function")return{default:r};var o=g(f);if(o&&o.has(r))return o.get(r);var _={},E=p&&Y;for(var S in r)if(S!=="default"&&Object.prototype.hasOwnProperty.call(r,S)){var W=E?Y(r,S):null;W&&(W.get||W.set)?p(_,S,W):_[S]=r[S]}return _.default=r,o&&o.set(r,_),_}function K(r,f){var o=J(r);if(z){var _=z(r);f&&(_=_.filter(function(E){return Y(r,E).enumerable})),o.push.apply(o,_)}return o}function U(r){for(var f=1;f<arguments.length;f++){var o=arguments[f]!=null?arguments[f]:{};f%2?K(Object(o),!0).forEach(function(_){(0,Q.default)(r,_,o[_])}):H?te(r,H(o)):K(Object(o)).forEach(function(_){p(r,_,Y(o,_))})}return r}var I=function(f){var o=f.params,_=f.value,E=f.appInfo,S=f.placeholder,W=f.onChange,oe=(0,se.useDispatch)(),G=(0,n.useState)([]),ue=(0,a.default)(G,2),D=ue[0],k=ue[1],x=(0,n.useRef)(1),q=(0,n.useRef)(!1),X=(0,n.useState)(!1),O=(0,a.default)(X,2),Z=O[0],V=O[1],P=(0,n.useState)(0),ie=(0,a.default)(P,2),F=ie[0],Ce=ie[1],Re=(0,n.useState)(""),ce=(0,a.default)(Re,2),me=ce[0],pe=ce[1],ye=(0,n.useState)(!1),Ee=(0,a.default)(ye,2),Ue=Ee[0],Be=Ee[1],Se=(0,n.useState)(_),Ae=(0,a.default)(Se,2),Oe=Ae[0],ve=Ae[1],he=(0,n.useRef)(U({},o));(0,n.useEffect)(function(){ve(f.value),pe("")},[f.value]);var fe=function(){var s=function(){var ee=(0,L.default)(regeneratorRuntime.mark(function b(){var j,M,de,Pe;return regeneratorRuntime.wrap(function(re){for(;;)switch(re.prev=re.next){case 0:return V(!0),re.next=3,oe.experimentDataSource.getApplication(U(U({},he.current),{},{page:x.current,size:11,key:me}));case 3:j=re.sent,M=j.data,de=j.pages,Pe=j.total,(M==null?void 0:M.length)>0?(M==null||M.map(function(B){return B.value=B.app_id,B.label=B.app_name,B.scopesType=B.scope_type,B.appType=B.app_type,B.osType=B.os_type,B}),k(function(B){return[].concat((0,w.default)(B),(0,w.default)(M))})):Pe===0&&k([]),Ce(de),V(!1),q.current=!1;case 9:case"end":return re.stop()}},b)}));return function(){return ee.apply(this,arguments)}}();(o.appType!==void 0||o.osType!==void 0&&!isNaN(o.osType))&&s()};(0,n.useEffect)(function(){fe()},[me]),(0,n.useEffect)(function(){x.current=1,he.current=o,k([]),fe()},[o.osType,o.appType]),(0,n.useEffect)(function(){var d=document.querySelector("#selectScroll .next-menu");return setTimeout(function(){var s;d=document.querySelector("#selectScroll .next-menu"),(s=d)===null||s===void 0||s.addEventListener("scroll",ge)},300),function(){var s;(s=d)===null||s===void 0||s.removeEventListener("scroll",ge)}},[Ue]);var ge=function(s){var ee=s.target,b=ee||{},j=b.scrollTop,M=b.offsetHeight,de=b.scrollHeight;ee&&j+M>60&&j+M>de&&(!q.current&&x.current<F&&(x.current=x.current+1,q.current=!0,fe()))};function _e(d,s){return s===le.SCOPE_TYPE.HOST?d===le.OS_TYPE.LINUX?$.default.t("Host-linux"):$.default.t("Host"):s===le.SCOPE_TYPE.K8S?$.default.t("Kubernetes"):""}function De(d){return n.default.createElement("div",{className:l.default.itemContent,title:d&&d.label},n.default.createElement("div",{className:l.default.appName},d&&d.label),n.default.createElement("div",{className:l.default.scopeTip},_e(d.os_type,d.scope_type)))}return n.default.createElement(n.default.Fragment,null,n.default.createElement(u.default,{className:l.default.appSelect,showSearch:!0,filterLocal:!1,style:{width:"100%"},value:Oe,placeholder:S||"",onChange:function(s,ee){var b=D.find(function(j){return j.app_id===s});ve(s),W==null||W(s,ee,b)},fillProps:"app_id",onFocus:function(){return Be(!0)},onSearch:function(s){V(!0),x.current=1,k([]),pe(s)},dataSource:D,popupContainer:"selectScroll",itemRender:function(s){return De(s)},locale:(0,ne.default)().Select},D==null?void 0:D.map(function(d,s){return n.default.createElement(u.default.Option,{value:d.app_id,key:s},n.default.createElement("div",{className:l.default.itemContent,title:d.label},n.default.createElement("div",{className:l.default.appName},d.label),n.default.createElement("div",{className:l.default.scopeTip},_e(d.os_type,d.scope_type))))}),(D==null?void 0:D.length)===0&&(E==null?void 0:E.appId)&&n.default.createElement(u.default.Option,{value:E.appId},n.default.createElement("div",{className:l.default.itemContent,title:E.appName},n.default.createElement("div",{className:l.default.appName},E.appName),n.default.createElement("div",{className:l.default.scopeTip},_e(E.osType,E.scopeType)))),Z&&n.default.createElement(u.default.Option,{value:"more",key:"more"},n.default.createElement("div",{style:{color:"#0064C8"}},n.default.createElement(t.default,{size:"small",type:"loading"}),"\xA0\xA0",n.default.createElement(y.default,null,"Load more options...")))),n.default.createElement("div",{id:"selectScroll"}))},ae=I;T.default=ae})},9644:function(N,m,e){var c,R,A,v=e(24596),p=e(67394),h=e(93168),Y=e(23587);(function(J,z){if(!0)!(R=[m,e(12955),e(17534),e(77809),e(81853),e(27378),e(66697),e(36012),e(14798),e(68055),e(34480),e(14870)],c=z,A=typeof c=="function"?c.apply(m,R):c,A!==void 0&&(N.exports=A));else var H})(typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:this,function(J,z,H,te,T,t,u,w,L,Q,a,n){"use strict";var y=e(67971);p(J,"__esModule",{value:!0}),J.default=void 0,z=y(z),H=y(H),te=y(te),T=y(T),t=ne(t),u=y(u),w=y(w),L=y(L),Q=y(Q),a=y(a);function $(l){if(typeof h!="function")return null;var i=new h,g=new h;return($=function(K){return K?g:i})(l)}function ne(l,i){if(!i&&l&&l.__esModule)return l;if(l===null||v(l)!=="object"&&typeof l!="function")return{default:l};var g=$(i);if(g&&g.has(l))return g.get(l);var C={},K=p&&Y;for(var U in l)if(U!=="default"&&Object.prototype.hasOwnProperty.call(l,U)){var I=K?Y(l,U):null;I&&(I.get||I.set)?p(C,U,I):C[U]=l[U]}return C.default=l,g&&g.set(l,C),C}var se=function(i){var g=i.pluginType,C=i.isUninstall,K=i.configurationId,U=i.onClose,I=i.isInstall,ae=i.isClusterUninstall,r=i.ostype,f=(0,n.useDispatch)(),o=(0,t.useState)(""),_=(0,T.default)(o,2),E=_[0],S=_[1],W=(0,t.useState)(""),oe=(0,T.default)(W,2),G=oe[0],ue=oe[1],D=(0,t.useCallback)((0,te.default)(regeneratorRuntime.mark(function X(){var O,Z,V,P;return regeneratorRuntime.wrap(function(F){for(;;)switch(F.prev=F.next){case 0:if(Z={Mode:"host",OsType:r},C?O="QueryUninstallCommand":O="QueryInstallCommand",I||(Z.ConfigurationId=K),!ae){F.next=7;break}S("helm delete --purge agent"),F.next=14;break;case 7:return F.next=9,f.agentSetting.getQueryUninstallAndInstallCommand(O,Z);case 9:V=F.sent,P=V.Data,P&&P.command_install&&S(P&&P.command_install),P&&P.command_uninstall&&S(P&&P.command_uninstall),P&&P.command_file_download&&ue(P&&P.command_file_download);case 14:case"end":return F.stop()}},X)})),[g,C,K,ae]);(0,t.useEffect)(function(){((g==null?void 0:g.toUpperCase())==="CHAOS_AGENT"||I)&&D()},[D]);function k(){if(!C)return t.default.createElement("div",null,t.default.createElement("div",{className:a.default.title},t.default.createElement(u.default,null,"Before. If probes were installed")),t.default.createElement("div",{className:a.default.title},"1. ",t.default.createElement(u.default,null,"Download")),t.default.createElement("div",{className:a.default.item},t.default.createElement(u.default,null,"Download link:")," ",t.default.createElement("a",{href:G,download:!0,target:"_blank"},G)),t.default.createElement("div",{className:a.default.title},"2. ",t.default.createElement(u.default,null,"Decompress")),t.default.createElement("div",{className:a.default.title},"3. ",t.default.createElement(u.default,null,"Start the probe")),t.default.createElement("div",{className:a.default.code},E),t.default.createElement("div",{className:a.default.title},t.default.createElement(u.default,null,"Parameter Description"),":"),t.default.createElement("div",{className:a.default.item},"\xB7 appInstance\uFF1A",t.default.createElement(u.default,null,"Application name, you can customize")),t.default.createElement("div",{className:a.default.item},"\xB7 appGroup\uFF1A ",t.default.createElement(u.default,null,"Application group name, you can customize it")),t.default.createElement("div",{className:a.default.code},t.default.createElement("div",{className:a.default.command},t.default.createElement("span",null,"5928 RDP-Tcp#16"),t.default.createElement("span",null,"2\u2003\u2003\u200323,428 K"))));if(I||C&&!ae)return t.default.createElement("div",{style:{position:"relative"}},t.default.createElement("div",{className:a.default.copyBtn},t.default.createElement("a",{onClick:function(){return q(E)}},t.default.createElement(u.default,null,"Click to copy"))),t.default.createElement("div",{style:{paddingTop:20}},E));var X=`blades=($(kubectl get blade | grep -v NAME | awk '{print $1}' | tr '
' ' ')) && kubectl patch blade $blades --type merge -p '{"metadata":{"finalizers":[]}}'`;return t.default.createElement("div",null,t.default.createElement("div",{className:a.default.item},"1. ",t.default.createElement(u.default,null,"Execute the following Helm command to uninstall the probe")),x("helm un agent -n chaosblade",!0),t.default.createElement("div",{className:a.default.item},"2. ",t.default.createElement(u.default,null,"After the uninstallation is complete, execute the following command to check whether the probe pod in the command space has been uninstalled")),x("kubectl get pods -n chaosblade",!0),t.default.createElement("div",{className:a.default.item},"3. ",t.default.createElement(u.default,null,"If the uninstallation is abnormal, after ensuring that all the drills have been terminated, execute the following command to delete the drill in the abnormal state")),x(X,!0),t.default.createElement("div",{className:a.default.item},"4. ",t.default.createElement(u.default,null,"After execution, execute the following command to confirm that all chaosblade resources are deleted"),t.default.createElement("a",{href:G,download:!0,target:"_blank"},G)),x("kubectl get chaosblade",!0))}var x=function(O,Z){return t.default.createElement("div",{className:a.default.code},Z&&t.default.createElement("div",{className:a.default.copyBtn},t.default.createElement("a",{onClick:function(){return q(O)}},t.default.createElement(u.default,null,"Click to copy"))),O)},q=function(O){(0,w.default)(O),H.default.success(L.default.t("Copy successfully"))};return t.default.createElement(z.default,{visible:!0,title:C?L.default.t("Manually uninstall the plug-in").toString():L.default.t("Manually install the plug-in on a single machine").toString(),footerActions:["cancel"],style:{minWidth:"600px"},onClose:U,onCancel:U,shouldUpdatePosition:!0,locale:(0,Q.default)().Dialog},t.default.createElement("div",{className:a.default.content},k()))},le=(0,t.memo)(se);J.default=le})},78576:(N,m,e)=>{"use strict";e.d(m,{Z:()=>h});var c=e(60994),R=e.n(c),A=e(93476),v=e.n(A),p=v()(R());p.push([N.id,`.index__itemContent__z8YF9 {\r
  display: flex;\r
  justify-content: space-between;\r
  align-items: center;\r
}\r
\r
.index__scopeTip__JF-e2 {\r
  color: #c1c1c1;\r
  margin-right: 8px;\r
}\r
\r
.index__appName__CfdNm {\r
  overflow: hidden;\r
  text-overflow: ellipsis;\r
  width: 100%;\r
}\r
.index__appSelect__cjp84 em {\r
    display: block;\r
    width: 100%;\r
  }\r
.index__appSelect__cjp84 .index__scopeTip__JF-e2{\r
    display: none;\r
  }`,"",{version:3,sources:["webpack://./pages/Chaos/Experiment/common/CustomSelect/index.css"],names:[],mappings:"AAAA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,cAAc;EACd,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;EAChB,uBAAuB;EACvB,WAAW;AACb;AAEE;IACE,cAAc;IACd,WAAW;EACb;AACA;IACE,aAAa;EACf",sourcesContent:[`.itemContent {\r
  display: flex;\r
  justify-content: space-between;\r
  align-items: center;\r
}\r
\r
.scopeTip {\r
  color: #c1c1c1;\r
  margin-right: 8px;\r
}\r
\r
.appName {\r
  overflow: hidden;\r
  text-overflow: ellipsis;\r
  width: 100%;\r
}\r
.appSelect {\r
  em {\r
    display: block;\r
    width: 100%;\r
  }\r
  .scopeTip{\r
    display: none;\r
  }\r
}`],sourceRoot:""}]),p.locals={itemContent:"index__itemContent__z8YF9",scopeTip:"index__scopeTip__JF-e2",appName:"index__appName__CfdNm",appSelect:"index__appSelect__cjp84"};const h=p},91814:(N,m,e)=>{"use strict";e.d(m,{Z:()=>h});var c=e(60994),R=e.n(c),A=e(93476),v=e.n(A),p=v()(R());p.push([N.id,`.index__content__ChFWv {\r
  display: block;\r
  padding: 9.5px;\r
  margin: 0 0 10px;\r
  font-size: 13px;\r
  line-height: 1.428571429;\r
  color: #333333;\r
  word-break: break-all;\r
  word-wrap: break-word;\r
  border: 1px solid #cccccc;\r
}\r
\r
.index__title__nSbjq {\r
  color: #000;\r
  font-size: 14px; \r
  margin-bottom: 6px;\r
}\r
\r
.index__item__A8j2M {\r
  font-size: 12px;\r
  line-height: 22px;\r
  color: #333333;\r
  margin-bottom: 4px;\r
}\r
\r
.index__code__ezF32 {\r
  width: 100%;\r
  padding: 18px 12px;\r
  background: #f9f9f9;\r
  border: 1px solid #e8e8e8;\r
  margin-bottom: 16px;\r
  position: relative;\r
}\r
.index__copyBtn__usM0e {\r
  font-size: 12px;\r
  float: right;\r
  position: absolute;\r
  right: 8px;\r
  top: 4px;\r
  cursor: pointer;\r
}\r
\r
.index__command__bQlmQ {\r
  width: 70%;\r
  margin-top: 16px;\r
  display: flex;\r
  justify-content: space-between;\r
}`,"",{version:3,sources:["webpack://./pages/Manage/AgentSetting/common/ManualDialog/index.css"],names:[],mappings:"AAAA;EACE,cAAc;EACd,cAAc;EACd,gBAAgB;EAChB,eAAe;EACf,wBAAwB;EACxB,cAAc;EACd,qBAAqB;EACrB,qBAAqB;EACrB,yBAAyB;AAC3B;;AAEA;EACE,WAAW;EACX,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,cAAc;EACd,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,mBAAmB;EACnB,yBAAyB;EACzB,mBAAmB;EACnB,kBAAkB;AACpB;AACA;EACE,eAAe;EACf,YAAY;EACZ,kBAAkB;EAClB,UAAU;EACV,QAAQ;EACR,eAAe;AACjB;;AAEA;EACE,UAAU;EACV,gBAAgB;EAChB,aAAa;EACb,8BAA8B;AAChC",sourcesContent:[`.content {\r
  display: block;\r
  padding: 9.5px;\r
  margin: 0 0 10px;\r
  font-size: 13px;\r
  line-height: 1.428571429;\r
  color: #333333;\r
  word-break: break-all;\r
  word-wrap: break-word;\r
  border: 1px solid #cccccc;\r
}\r
\r
.title {\r
  color: #000;\r
  font-size: 14px; \r
  margin-bottom: 6px;\r
}\r
\r
.item {\r
  font-size: 12px;\r
  line-height: 22px;\r
  color: #333333;\r
  margin-bottom: 4px;\r
}\r
\r
.code {\r
  width: 100%;\r
  padding: 18px 12px;\r
  background: #f9f9f9;\r
  border: 1px solid #e8e8e8;\r
  margin-bottom: 16px;\r
  position: relative;\r
}\r
.copyBtn {\r
  font-size: 12px;\r
  float: right;\r
  position: absolute;\r
  right: 8px;\r
  top: 4px;\r
  cursor: pointer;\r
}\r
\r
.command {\r
  width: 70%;\r
  margin-top: 16px;\r
  display: flex;\r
  justify-content: space-between;\r
}`],sourceRoot:""}]),p.locals={content:"index__content__ChFWv",title:"index__title__nSbjq",item:"index__item__A8j2M",code:"index__code__ezF32",copyBtn:"index__copyBtn__usM0e",command:"index__command__bQlmQ"};const h=p},74427:(N,m,e)=>{"use strict";e.r(m),e.d(m,{default:()=>h});var c=e(1892),R=e.n(c),A=e(78576),v={};v.insert="head",v.singleton=!1;var p=R()(A.Z,v);const h=A.Z.locals||{}},34480:(N,m,e)=>{"use strict";e.r(m),e.d(m,{default:()=>h});var c=e(1892),R=e.n(c),A=e(91814),v={};v.insert="head",v.singleton=!1;var p=R()(A.Z,v);const h=A.Z.locals||{}}}]);

//# sourceMappingURL=970.bundle.js.map