(self.webpackChunk=self.webpackChunk||[]).push([[333],{6885:function(Rt,J,t){var R,G,M,ot=t(24596),A=t(67394),x=t(93168),rt=t(23587);(function(k,o){if(!0)!(G=[J,t(42499),t(17534),t(77809),t(17225),t(81853),t(57379),t(27378),t(66697),t(98784),t(60042),t(74590),t(14798),t(68055),t(52181),t(61253),t(9644),t(73262),t(99328),t(14870),t(42058)],R=o,M=typeof R=="function"?R.apply(J,G):R,M!==void 0&&(Rt.exports=M));else var I})(typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:this,function(k,o,I,b,v,P,L,n,a,e,r,F,U,at,i,z,_,it,yt,ct,$){"use strict";var S=t(67971);A(k,"__esModule",{value:!0}),k.default=void 0,o=S(o),I=S(I),b=S(b),v=S(v),P=S(P),L=S(L),n=h(n),a=S(a),e=S(e),r=S(r),F=S(F),U=S(U),at=S(at),i=S(i),z=h(z),_=S(_);var _t,y;function Ut(l){if(typeof x!="function")return null;var s=new x,u=new x;return(Ut=function(E){return E?u:s})(l)}function h(l,s){if(!s&&l&&l.__esModule)return l;if(l===null||ot(l)!=="object"&&typeof l!="function")return{default:l};var u=Ut(s);if(u&&u.has(l))return u.get(l);var m={},E=A&&rt;for(var T in l)if(T!=="default"&&Object.prototype.hasOwnProperty.call(l,T)){var j=E?rt(l,T):null;j&&(j.get||j.set)?A(m,T,j):m[T]=l[T]}return m.default=l,u&&u.set(l,m),m}var ft=(0,r.default)((_t={},(0,L.default)(_t,i.default.v_a_b,!0),(0,L.default)(_t,i.default.mr10,!0),_t)),Q=(0,r.default)((y={},(0,L.default)(y,i.default.v_a_b,!0),(0,L.default)(y,i.default.mr10,!0),(0,L.default)(y,i.default.red,!0),y));function f(l){var s=(0,$.useHistory)(),u=(0,ct.useDispatch)(),m=(0,n.useRef)({}),E=(0,n.useRef)({}),T=(0,n.useState)(!1),j=(0,P.default)(T,2),q=j[0],mt=j[1],Tt=(0,n.useState)(""),Bt=(0,P.default)(Tt,2),Dt=Bt[0],zt=Bt[1],Kt=(0,n.useState)(!1),Nt=(0,P.default)(Kt,2),Wt=Nt[0],Ct=Nt[1],st=(0,n.useState)(""),Ot=(0,P.default)(st,2),Ft=Ot[0],Yt=Ot[1],Ht=(0,n.useState)(NaN),Zt=(0,P.default)(Ht,2),Jt=Zt[0],kt=Zt[1],Qt=(0,n.useState)(function(){var H=l.data.partNodes,c=H===void 0?[]:H;return c||[]}),pt=(0,P.default)(Qt,2),lt=pt[0],Mt=pt[1],Xt=l.getData,wt=function(c){if(c===it.AGENT_STATUS.ONLINE)return n.default.createElement("span",null,n.default.createElement(v.default,{type:"select",className:(0,r.default)(i.default.onLineState,i.default.icon)}),n.default.createElement(a.default,null,"Online"));if(c===it.AGENT_STATUS.WAIT_INSTALL)return n.default.createElement("span",null,n.default.createElement(v.default,{type:"minus-circle-fill",className:(0,r.default)(i.default.icon,i.default.notInstall)}),n.default.createElement(a.default,null,"Not Installed"));if(c===it.AGENT_STATUS.OFFLINE)return n.default.createElement("span",null,n.default.createElement(v.default,{type:"exclamationcircle-f",className:(0,r.default)(i.default.icon,i.default.offLineState)}),n.default.createElement(a.default,null,"Offline"))},Gt=function(c,B,p){return n.default.createElement("span",{className:i.default.href,onClick:function(){(0,yt.pushUrl)(s,"/chaos/experiment/scope/detail",{id:p.configurationId,type:it.SCOPE_TYPE.K8S})}},c)},bt=(0,n.useCallback)(function(){var H=(0,b.default)(regeneratorRuntime.mark(function c(B,p){var Y,Z,w,nt;return regeneratorRuntime.wrap(function(Et){for(;;)switch(Et.prev=Et.next){case 0:return Et.next=2,u.agentSetting.getUninstallPlugin({ConfigurationId:B});case 2:Y=Et.sent,Z=Y.Data,w=Z===void 0?!1:Z,w&&(nt=e.default.cloneDeep(lt),nt.forEach(function(gt){gt.deviceId===p&&(gt.pluginStatus=4)}),Mt(nt),m.current[p]=setInterval(function(){St(lt,p)},2e3),setTimeout(function(){tt(lt,p)},61e3));case 6:case"end":return Et.stop()}},c)}));return function(c,B){return H.apply(this,arguments)}}(),[lt]),tt=function(c,B){if(!m.current[B])return;X(c,B,999),clearInterval(m.current[B]),clearInterval(E.current[B])},X=function(c,B,p){var Y=e.default.cloneDeep(c),Z=p||-1;Y.forEach(function(w){w.deviceId===B&&(w.pluginStatus=Z)}),Mt(Y)},St=function(){var H=(0,b.default)(regeneratorRuntime.mark(function c(B,p){var Y,Z,w,nt,ht;return regeneratorRuntime.wrap(function(gt){for(;;)switch(gt.prev=gt.next){case 0:return gt.next=2,u.agentSetting.getQueryPluginStatus({Loop:!0,InstanceId:p});case 2:Y=gt.sent,Z=Y.Data,w=Z===void 0?{}:Z,e.default.isEmpty(w)||(nt=w,ht=e.default.cloneDeep(B),ht.forEach(function(K){K.deviceId===nt.deviceId&&(K.pluginStatus=nt.pluginStatus)}),Mt(ht),nt.pluginStatus===0&&(clearInterval(m.current[p]),m.current[p]=null),(nt.pluginStatus===2||nt.pluginStatus===-1)&&(clearInterval(E.current[p]),E.current[p]=null,Xt()));case 6:case"end":return gt.stop()}},c)}));return function(B,p){return H.apply(this,arguments)}}(),dt=function(c,B,p,Y){mt(!q),zt(c),Ct(B),Yt(p),kt(Y)},et=(0,n.useCallback)(function(){var H=(0,b.default)(regeneratorRuntime.mark(function c(B){var p,Y,Z,w,nt,ht,Et;return regeneratorRuntime.wrap(function(K){for(;;)switch(K.prev=K.next){case 0:return K.next=2,u.agentSetting.getInstallPlugin({InstanceId:B});case 2:p=K.sent,Y=p.Data,Z=Y===void 0?!1:Y,w=p.Code,nt=w===void 0?"":w,Z?(ht=e.default.cloneDeep(lt),ht.forEach(function($t){$t.deviceId===B&&($t.pluginStatus=1)}),Mt(ht),E.current[B]=setInterval(function(){St(lt,B)},2e3)):(Et=U.default.t("Operation failed"),nt==="plugin.instance.not.exist"&&(Et=U.default.t("The current instance does not exist, please select an available instance")),I.default.error(Et));case 8:case"end":return K.stop()}},c)}));return function(c){return H.apply(this,arguments)}}(),[lt]),At=function(c,B,p){var Y=p.osType,Z=p.pluginStatus,w=p.configurationId,nt=p.pluginType,ht=p.deviceId,Et=p.canAutoInstall,gt={installBtn:n.default.createElement("span",{className:i.default.red},n.default.createElement("a",{className:i.default.ml10,onClick:function(){return et(ht)},style:{cursor:"pointer"}},n.default.createElement(a.default,null,"Click install"))),clinkInstallBtn:n.default.createElement("span",{className:i.default.red},n.default.createElement("a",{className:i.default.ml10,onClick:function(){return dt(nt,!1,w,Y)},style:{cursor:"pointer"}},n.default.createElement(a.default,null,"Manual installation"))),tryBtn:n.default.createElement(z.LinkButton,{onClick:function(){return bt(w,ht)}},n.default.createElement(a.default,null,"Retry")),uninstallSuccess:n.default.createElement("span",{className:ft},n.default.createElement(a.default,null,"Uninstalled successfully")," ",n.default.createElement(v.default,{type:"success",size:"small"})),installLoading:n.default.createElement("span",{className:i.default.mr10},n.default.createElement(a.default,null,"Installing")," ",n.default.createElement(v.default,{type:"loading",size:"small"})),uninstallLoading:n.default.createElement("span",{className:ft},n.default.createElement(a.default,null,"Uninstalling")," ",n.default.createElement(v.default,{type:"loading",size:"small"})),uninstallFault:n.default.createElement("span",{className:Q},n.default.createElement(a.default,null,"Uninstall failed")," ",n.default.createElement(v.default,{type:"error",size:"small"})),outTime:n.default.createElement("span",{className:Q},n.default.createElement(a.default,null,"Uninstall Timeout")," ",n.default.createElement(v.default,{type:"error",size:"small"}))},K=[];switch(Z){case 0:K=["monitorBtn","uninstallSuccess"];break;case 1:K=["monitorBtn","installLoading"];break;case 2:K=["monitorBtn"],/CHAOS_AGENT/i.test(nt)&&K.push("startOrStopBtn"),K.push(Et?"autoUninstallBtn":"clickUninstallBtn");break;case 3:K=["monitorBtn"],K.push(Et?"installBtn":"clinkInstallBtn");break;case 4:K=["monitorBtn","uninstallLoading"];break;case 5:K=["monitorBtn","uninstallFault","tryBtn","clickUninstallBtn"];break;case 999:K=["monitorBtn","outTime","tryBtn","clickUninstallBtn"];break;case-1:K=["monitorBtn","uninstallFault","tryBtn","clinkInstallBtn"];break;default:break}return n.default.createElement(z.default,{style:{justifyContent:"center"}},K.map(function($t){return gt[$t]}))};return n.default.createElement(n.default.Fragment,null,n.default.createElement(o.default,{dataSource:lt,hasBorder:!1,locale:(0,at.default)().Table},n.default.createElement(o.default.Column,{title:"",dataIndex:"deviceId",width:50,cell:null}),n.default.createElement(o.default.Column,{title:U.default.t("Node IP").toString(),dataIndex:"privateIp",cell:Gt}),n.default.createElement(o.default.Column,{title:U.default.t("Node connection time").toString(),dataIndex:"connectTime",cell:F.default}),n.default.createElement(o.default.Column,{title:U.default.t("Device ID").toString(),dataIndex:"configurationId"}),n.default.createElement(o.default.Column,{title:U.default.t("Node Probe Version").toString(),dataIndex:"agentVersion"}),n.default.createElement(o.default.Column,{title:U.default.t("Node Probe Status").toString(),dataIndex:"agentStatus",cell:wt}),n.default.createElement(o.default.Column,{title:"",lock:"right",align:"center",width:160,cell:At})),q&&n.default.createElement(_.default,{pluginType:Dt,isUninstall:Wt,configurationId:Ft,onClose:function(){return mt(!1)},ostype:Jt}))}var C=(0,n.memo)(f);k.default=C})},87641:function(Rt,J,t){var R,G,M,ot=t(24596),A=t(67394),x=t(93168),rt=t(23587);(function(k,o){if(!0)!(G=[J,t(93484),t(42499),t(94188),t(17225),t(17534),t(77809),t(81853),t(57379),t(27378),t(66697),t(98784),t(60042),t(74590),t(14798),t(68055),t(52181),t(61253),t(9644),t(73262),t(99328),t(42058),t(14870)],R=o,M=typeof R=="function"?R.apply(J,G):R,M!==void 0&&(Rt.exports=M));else var I})(typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:this,function(k,o,I,b,v,P,L,n,a,e,r,F,U,at,i,z,_,it,yt,ct,$,S,_t){"use strict";var y=t(67971);A(k,"__esModule",{value:!0}),k.default=void 0,o=y(o),I=y(I),b=y(b),v=y(v),P=y(P),L=y(L),n=y(n),a=y(a),e=Q(e),r=y(r),F=y(F),U=y(U),at=y(at),i=y(i),z=y(z),_=y(_),it=Q(it),yt=y(yt);var Ut,h;function ft(u){if(typeof x!="function")return null;var m=new x,E=new x;return(ft=function(j){return j?E:m})(u)}function Q(u,m){if(!m&&u&&u.__esModule)return u;if(u===null||ot(u)!=="object"&&typeof u!="function")return{default:u};var E=ft(m);if(E&&E.has(u))return E.get(u);var T={},j=A&&rt;for(var q in u)if(q!=="default"&&Object.prototype.hasOwnProperty.call(u,q)){var mt=j?rt(u,q):null;mt&&(mt.get||mt.set)?A(T,q,mt):T[q]=u[q]}return T.default=u,E&&E.set(u,T),T}var f=(0,U.default)((Ut={},(0,a.default)(Ut,_.default.v_a_b,!0),(0,a.default)(Ut,_.default.mr10,!0),Ut)),C=(0,U.default)((h={},(0,a.default)(h,_.default.v_a_b,!0),(0,a.default)(h,_.default.mr10,!0),(0,a.default)(h,_.default.red,!0),h)),l=function(m){var E=m.currTab,T=m.empty,j=m.changeSuccessNumber,q=10,mt=(0,e.useState)(1),Tt=(0,n.default)(mt,2),Bt=Tt[0],Dt=Tt[1],zt=(0,e.useState)(0),Kt=(0,n.default)(zt,2),Nt=Kt[0],Wt=Kt[1],Ct=(0,e.useState)("0"),st=(0,n.default)(Ct,2),Ot=st[0],Ft=st[1],Yt=(0,e.useState)(""),Ht=(0,n.default)(Yt,2),Zt=Ht[0],Jt=Ht[1],kt=(0,e.useState)([]),Qt=(0,n.default)(kt,2),pt=Qt[0],lt=Qt[1],Mt=(0,e.useState)(!1),Xt=(0,n.default)(Mt,2),wt=Xt[0],Gt=Xt[1],bt=(0,e.useState)(""),tt=(0,n.default)(bt,2),X=tt[0],St=tt[1],dt=(0,e.useState)(!1),et=(0,n.default)(dt,2),At=et[0],H=et[1],c=(0,e.useState)(void 0),B=(0,n.default)(c,2),p=B[0],Y=B[1],Z=(0,e.useState)(""),w=(0,n.default)(Z,2),nt=w[0],ht=w[1],Et=(0,e.useState)(NaN),gt=(0,n.default)(Et,2),K=gt[0],$t=gt[1],jt=(0,e.useRef)({}),qt=(0,e.useRef)({}),ie=(0,_t.useSelector)(function(N){return{loading:N.loading.effects["scopesControl/getExperimentScopes"]}}),ne=ie.loading,te=(0,_t.useDispatch)(),ae=(0,S.useHistory)();(0,e.useEffect)(function(){Dt(1)},[E]),(0,e.useEffect)(function(){if(E!==ct.SCOPE_TYPE.HOST)return;ee()},[E,Bt,Ot,Zt]),(0,e.useEffect)(function(){var N=pt.filter(function(g){return g.agentStatus===ct.AGENT_STATUS.ONLINE}).length;j(E,"".concat(N,"/").concat(Nt))},[Nt]);var ee=function(){var N=(0,L.default)(regeneratorRuntime.mark(function g(){var O,d,D,ut;return regeneratorRuntime.wrap(function(W){for(;;)switch(W.prev=W.next){case 0:return W.next=2,te.scopesControl.getExperimentScopes({scope_type:E,filter:{type:Ot,key:Zt},size:q,page:Bt});case 2:O=W.sent,d=O.Data,D=d===void 0?!1:d,ut=F.default.get(D,"data",[]),lt(ut),Wt((D==null?void 0:D.total)||0);case 8:case"end":return W.stop()}},g)}));return function(){return N.apply(this,arguments)}}(),le=(0,e.useCallback)(function(){var N=(0,L.default)(regeneratorRuntime.mark(function g(O,d){var D,ut,V,W;return regeneratorRuntime.wrap(function(Pt){for(;;)switch(Pt.prev=Pt.next){case 0:return Pt.next=2,te.agentSetting.getUninstallPlugin({ConfigurationId:O});case 2:D=Pt.sent,ut=D.Data,V=ut===void 0?!1:ut,V&&(W=F.default.cloneDeep(pt),W.forEach(function(xt){xt.deviceId===d&&(xt.pluginStatus=4)}),lt(W),jt.current[d]=setInterval(function(){ue(pt,d)},2e3),setTimeout(function(){fe(pt,d)},61e3));case 6:case"end":return Pt.stop()}},g)}));return function(g,O){return N.apply(this,arguments)}}(),[pt]),fe=function(g,O){if(!jt.current[O])return;se(g,O,999),clearInterval(jt.current[O]),clearInterval(qt.current[O])},se=function(g,O,d){var D=F.default.cloneDeep(g),ut=d||-1;D.forEach(function(V){V.deviceId===O&&(V.pluginStatus=ut)}),lt(D)},ue=function(){var N=(0,L.default)(regeneratorRuntime.mark(function g(O,d){var D,ut,V,W,It;return regeneratorRuntime.wrap(function(xt){for(;;)switch(xt.prev=xt.next){case 0:return xt.next=2,te.agentSetting.getQueryPluginStatus({Loop:!0,InstanceId:d});case 2:D=xt.sent,ut=D.Data,V=ut===void 0?{}:ut,F.default.isEmpty(V)||(W=V,It=F.default.cloneDeep(O),It.forEach(function(Lt){Lt.deviceId===W.deviceId&&(Lt.pluginStatus=W.pluginStatus)}),lt(It),W.pluginStatus===0&&(clearInterval(jt.current[d]),jt.current[d]=null,ee()),(W.pluginStatus===2||W.pluginStatus===-1)&&(clearInterval(qt.current[d]),qt.current[d]=null,ee()));case 6:case"end":return xt.stop()}},g)}));return function(O,d){return N.apply(this,arguments)}}(),re=function(g,O,d,D){Gt(!wt),St(g),H(O),ht(d),$t(D)},de=(0,e.useCallback)(function(){var N=(0,L.default)(regeneratorRuntime.mark(function g(O){var d,D,ut,V,W,It,Pt;return regeneratorRuntime.wrap(function(Lt){for(;;)switch(Lt.prev=Lt.next){case 0:return Lt.next=2,te.agentSetting.getInstallPlugin({InstanceId:O});case 2:d=Lt.sent,D=d.Data,ut=D===void 0?!1:D,V=d.Code,W=V===void 0?"":V,ut?(It=F.default.cloneDeep(pt),It.forEach(function(vt){vt.deviceId===O&&(vt.pluginStatus=1)}),lt(It),qt.current[O]=setInterval(function(){ue(pt,O)},2e3)):(Pt=e.default.createElement(r.default,null," Operation failed"),W==="plugin.instance.not.exist"&&(Pt=e.default.createElement(r.default,null,"The current instance does not exist, please select an available instance")),P.default.error(Pt));case 8:case"end":return Lt.stop()}},g)}));return function(g){return N.apply(this,arguments)}}(),[pt]),oe=function(g,O,d,D){re(g,!1,d,D),Y(!0)},Ee=function(g,O,d){var D=d.osType,ut=d.pluginStatus,V=d.configurationId,W=d.pluginType,It=d.deviceId,Pt=d.canAutoInstall,xt=d.installMode,Lt={clickUninstallBtn:e.default.createElement(it.LinkButton,{onClick:function(){return re(W,!0,V,D)}},e.default.createElement(r.default,null,"Uninstall manually")),autoUninstallBtn:e.default.createElement(it.LinkButton,{onClick:function(){return le(V,It)}},e.default.createElement(r.default,null,"Uninstall")),installBtn:e.default.createElement("span",{className:_.default.red},e.default.createElement("a",{className:_.default.ml10,onClick:function(){return de(It)},style:{cursor:"pointer"}},e.default.createElement(r.default,null,"Click install"))),clinkInstallBtn:e.default.createElement("span",{className:_.default.red},e.default.createElement("a",{className:_.default.ml10,onClick:function(){return oe(W,!1,V,D)},style:{cursor:"pointer"}},e.default.createElement(r.default,null,"Manual installation"))),tryBtn:e.default.createElement(it.LinkButton,{onClick:function(){return le(V,It)}},e.default.createElement(r.default,null,"Retry")),uninstallSuccess:e.default.createElement("span",{className:f},e.default.createElement(r.default,null,"Uninstalled successfully")," ",e.default.createElement(v.default,{type:"success",size:"small"})),installLoading:e.default.createElement("span",{className:_.default.mr10},e.default.createElement(r.default,null,"Installing")," ",e.default.createElement(v.default,{type:"loading",size:"small"})),uninstallLoading:e.default.createElement("span",{className:f},e.default.createElement(r.default,null,"Uninstalling")," ",e.default.createElement(v.default,{type:"loading",size:"small"})),uninstallFault:e.default.createElement("span",{className:C},e.default.createElement(r.default,null,"Uninstall failed")," ",e.default.createElement(v.default,{type:"error",size:"small"})),outTime:e.default.createElement("span",{className:C},e.default.createElement(r.default,null,"Uninstall Timeout")," ",e.default.createElement(v.default,{type:"error",size:"small"}))},vt=[];switch(ut){case 0:vt=["uninstallSuccess"];break;case 1:vt=["installLoading"];break;case 2:vt=["monitorBtn"],/CHAOS_AGENT/i.test(W)&&vt.push("startOrStopBtn"),vt.push(Pt?"autoUninstallBtn":"clickUninstallBtn");break;case 3:vt.push(Pt?"installBtn":"clinkInstallBtn");break;case 4:vt=["uninstallLoading"];break;case 5:vt=["uninstallFault","tryBtn","clickUninstallBtn"];break;case 999:vt=["outTime","tryBtn","clickUninstallBtn"];break;case-1:vt=["uninstallFault","tryBtn","clinkInstallBtn"];break;default:break}return e.default.createElement(it.default,{style:{justifyContent:"center"}},vt.map(function(Vt){return Lt[Vt]}),e.default.createElement(it.LinkButton,{onClick:function(){(0,$.pushUrl)(ae,"/chaos/agentmanage/setting/tools",{id:V,mode:xt})}},e.default.createElement(r.default,null,"Install the walkthrough tool")))};function ce(N){Ft(N),Dt(1)}function me(N){Jt(N),Dt(1)}var pe=function(g,O,d){return e.default.createElement("span",{className:_.default.href,onClick:function(){(0,$.pushUrl)(ae,"/chaos/experiment/scope/detail",{id:d.configurationId}),(0,$.removeParams)("configurationId")}},g)},ge=function(g){return g?i.default.t("Yes"):i.default.t("No")},ve=function(g){if(g===ct.AGENT_STATUS.ONLINE)return e.default.createElement("span",null,e.default.createElement(v.default,{type:"select",className:(0,U.default)(_.default.onLineState,_.default.icon)}),e.default.createElement(r.default,null,"Online"));if(g===ct.AGENT_STATUS.WAIT_INSTALL)return e.default.createElement("span",null,e.default.createElement(v.default,{type:"minus-circle-fill",className:(0,U.default)(_.default.icon,_.default.notInstall)}),e.default.createElement(r.default,null,"Not Installed"));if(g===ct.AGENT_STATUS.OFFLINE)return e.default.createElement("span",null,e.default.createElement(v.default,{type:"exclamationcircle-f",className:(0,U.default)(_.default.icon,_.default.offLineState)}),e.default.createElement(r.default,null,"Offline"))};return e.default.createElement("div",{className:_.default.tabContent},e.default.createElement(b.default,{shape:"simple",className:_.default.searchContent,onFilterChange:ce,onSearch:me,filter:ct.FILTER_TYPE,filterValue:Ot}),e.default.createElement(I.default,{primaryKey:"deviceId",dataSource:ne?[]:pt,hasBorder:!1,emptyContent:T,loading:ne,locale:(0,z.default)().Table},e.default.createElement(I.default.Column,{title:i.default.t("Host name").toString(),dataIndex:"hostName",width:280,cell:pe}),e.default.createElement(I.default.Column,{title:i.default.t("IP").toString(),dataIndex:"privateIp",width:160}),e.default.createElement(I.default.Column,{title:i.default.t("Has it been drilled").toString(),dataIndex:"isExperimented",width:100,cell:ge}),e.default.createElement(I.default.Column,{title:i.default.t("Version").toString(),dataIndex:"agentVersion",width:100}),e.default.createElement(I.default.Column,{title:i.default.t("Start Time").toString(),dataIndex:"connectTime",width:180,cell:at.default}),e.default.createElement(I.default.Column,{title:i.default.t("Probe Status").toString(),dataIndex:"agentStatus",width:80,cell:ve}),e.default.createElement(I.default.Column,{title:i.default.t("Operation").toString(),lock:"right",align:"center",width:200,cell:Ee})),e.default.createElement(o.default,{className:_.default.pagination,current:Bt,total:Nt,pageSize:q,locale:(0,z.default)().Pagination,onChange:function(g){return Dt(g)}}),wt&&e.default.createElement(yt.default,{pluginType:X,isUninstall:At,isInstall:p,configurationId:nt,onClose:function(){return Gt(!1)},ostype:K}))},s=l;k.default=s})},2333:function(Rt,J,t){var R,G,M,ot=t(24596),A=t(67394),x=t(93168),rt=t(23587),k=t(83452),o=t(95315),I=t(63774),b=t(92937);(function(v,P){if(!0)!(G=[J,t(47701),t(57379),t(72153),t(81853),t(27378),t(66697),t(14798),t(52181),t(73262),t(96291),t(99328),t(14870),t(42058),t(87641),t(44255),t(39620)],R=P,M=typeof R=="function"?R.apply(J,G):R,M!==void 0&&(Rt.exports=M));else var L})(typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:this,function(v,P,L,n,a,e,r,F,U,at,i,z,_,it,yt,ct,$){"use strict";var S=t(67971);A(v,"__esModule",{value:!0}),v.default=void 0,P=S(P),L=S(L),n=S(n),a=S(a),e=y(e),r=S(r),F=S(F),U=S(U),yt=S(yt),ct=S(ct),$=S($);function _t(f){if(typeof x!="function")return null;var C=new x,l=new x;return(_t=function(u){return u?l:C})(f)}function y(f,C){if(!C&&f&&f.__esModule)return f;if(f===null||ot(f)!=="object"&&typeof f!="function")return{default:f};var l=_t(C);if(l&&l.has(f))return l.get(f);var s={},u=A&&rt;for(var m in f)if(m!=="default"&&Object.prototype.hasOwnProperty.call(f,m)){var E=u?rt(f,m):null;E&&(E.get||E.set)?A(s,m,E):s[m]=f[m]}return s.default=f,l&&l.set(f,s),s}function Ut(f,C){var l=k(f);if(o){var s=o(f);C&&(s=s.filter(function(u){return rt(f,u).enumerable})),l.push.apply(l,s)}return l}function h(f){for(var C=1;C<arguments.length;C++){var l=arguments[C]!=null?arguments[C]:{};C%2?Ut(Object(l),!0).forEach(function(s){(0,L.default)(f,s,l[s])}):I?b(f,I(l)):Ut(Object(l)).forEach(function(s){A(f,s,rt(l,s))})}return f}var ft=function(){var C,l=(0,_.useDispatch)(),s=(0,it.useHistory)(),u=(C=(0,z.getParams)("type"))!==null&&C!==void 0?C:at.SCOPE_TYPE.HOST,m=(0,e.useState)({}),E=(0,a.default)(m,2),T=E[0],j=E[1],q=(0,e.useState)(!1),mt=(0,a.default)(q,2),Tt=mt[0],Bt=mt[1];(0,e.useEffect)(function(){var st=F.default.t("Probe Management");l.pageHeader.setTitle(st),l.pageHeader.setBreadCrumbItems(i.CHAOS_DEFAULT_BREADCRUMB_ITEM.concat([{key:"scope_control",value:st,path:"/chaos/scope/control"}]))},[]);function Dt(st){(0,z.pushUrl)(s,"/chaos/experiment/scope/control",{type:st})}function zt(){(0,z.pushUrl)(s,"/chaos/agentmanage/setting/step",{iis:1})}function Kt(){return e.default.createElement("div",{className:U.default.extra},e.default.createElement("div",null,Number(u)===at.SCOPE_TYPE.HOST?e.default.createElement("div",null,e.default.createElement(r.default,null,"Number of online probes/total number of ECS"),":",T[u]||"0/0"):e.default.createElement("div",null,e.default.createElement(r.default,null,"Number of online probes/total number of Kubernetes nodes"),":",T[u]||"0/0")),e.default.createElement("div",{style:{marginTop:"-4px"}},e.default.createElement(n.default,{type:"primary",onClick:function(){return Bt(!0)}},e.default.createElement(r.default,null,"Automatically install probes")),"\xA0\xA0",e.default.createElement(n.default,{type:"primary",onClick:function(){return(0,z.pushUrl)(s,"/chaos/agentmanage/setting/step",{iis:"1"})}},e.default.createElement(r.default,null,"Manually install probes"))))}var Nt=e.default.createElement("div",null,e.default.createElement(r.default,null,"There are currently no probes"),"\uFF0C",e.default.createElement("span",{className:U.default.href,onClick:zt},e.default.createElement(r.default,null,"Access now"))),Wt=function(Ot,Ft){var Yt=h(h({},T),{},(0,L.default)({},Ot,Ft));j(Yt)},Ct={currTab:Number(u)||0,changeSuccessNumber:Wt,empty:Nt};return e.default.createElement("div",{className:U.default.warp},e.default.createElement(P.default,{activeKey:u,shape:"wrapped",onChange:Dt,extra:Kt(),navClassName:U.default.tabStyle},e.default.createElement(P.default.Item,{title:F.default.t("Host").toString(),key:at.SCOPE_TYPE.HOST},e.default.createElement(yt.default,Ct)),e.default.createElement(P.default.Item,{title:F.default.t("Kubernetes").toString(),key:at.SCOPE_TYPE.K8S},e.default.createElement(ct.default,Ct))),Tt&&e.default.createElement($.default,{onClose:function(){return Bt(!1)}}))},Q=ft;v.default=Q})},44255:function(Rt,J,t){var R,G,M,ot=t(24596),A=t(67394),x=t(93168),rt=t(23587);(function(k,o){if(!0)!(G=[J,t(42499),t(17225),t(35049),t(77809),t(81853),t(6885),t(9644),t(27378),t(66697),t(14798),t(68055),t(98784),t(60042),t(52181),t(61253),t(73262),t(99328),t(42058),t(14870)],R=o,M=typeof R=="function"?R.apply(J,G):R,M!==void 0&&(Rt.exports=M));else var I})(typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:this,function(k,o,I,b,v,P,L,n,a,e,r,F,U,at,i,z,_,it,yt,ct){"use strict";var $=t(67971);A(k,"__esModule",{value:!0}),k.default=void 0,o=$(o),I=$(I),b=$(b),v=$(v),P=$(P),L=$(L),n=$(n),a=_t(a),e=$(e),r=$(r),F=$(F),U=$(U),at=$(at),i=$(i),z=_t(z);function S(h){if(typeof x!="function")return null;var ft=new x,Q=new x;return(S=function(C){return C?Q:ft})(h)}function _t(h,ft){if(!ft&&h&&h.__esModule)return h;if(h===null||ot(h)!=="object"&&typeof h!="function")return{default:h};var Q=S(ft);if(Q&&Q.has(h))return Q.get(h);var f={},C=A&&rt;for(var l in h)if(l!=="default"&&Object.prototype.hasOwnProperty.call(h,l)){var s=C?rt(h,l):null;s&&(s.get||s.set)?A(f,l,s):f[l]=h[l]}return f.default=h,Q&&Q.set(h,f),f}var y=function(ft){var Q=ft.currTab,f=ft.empty,C=ft.changeSuccessNumber,l=(0,ct.useDispatch)(),s=(0,a.useState)(!1),u=(0,P.default)(s,2),m=u[0],E=u[1],T=(0,a.useState)([]),j=(0,P.default)(T,2),q=j[0],mt=j[1],Tt=1,Bt=(0,a.useState)(0),Dt=(0,P.default)(Bt,2),zt=Dt[0],Kt=Dt[1],Nt=(0,a.useState)([]),Wt=(0,P.default)(Nt,2),Ct=Wt[0],st=Wt[1],Ot=(0,a.useState)(!1),Ft=(0,P.default)(Ot,2),Yt=Ft[0],Ht=Ft[1],Zt=(0,a.useState)(""),Jt=(0,P.default)(Zt,2),kt=Jt[0],Qt=Jt[1],pt=(0,yt.useHistory)();(0,a.useEffect)(function(){if(Q!==_.SCOPE_TYPE.K8S)return;lt()},[Q,Tt]),(0,a.useEffect)(function(){var tt=0,X=0;for(var St in q){var dt=q[St],et=dt.nodeCount,At=dt.onlineCount;tt+=et,X+=At}C(Q,"".concat(X,"/").concat(tt))},[zt]);var lt=function(){var tt=(0,v.default)(regeneratorRuntime.mark(function X(){var St,dt,et,At;return regeneratorRuntime.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return E(!0),c.next=3,l.scopesControl.getListExperimentClusters();case 3:St=c.sent,dt=St.Data,et=dt===void 0?[]:dt,mt(et||[]),At=et==null?void 0:et.length,Kt(At),E(!1),U.default.isEmpty(et)&&At>0&&Mt(et[0]);case 11:case"end":return c.stop()}},X)}));return function(){return tt.apply(this,arguments)}}();function Mt(tt){var X=tt.clusterId;Ct.includes(X)?st(Ct.filter(function(St){return St!==X})):(Ct.push(X),st((0,b.default)(Ct)))}function Xt(tt){return a.default.createElement(L.default,{data:tt,getData:lt})}var wt=function(X){return X?a.default.createElement("span",null,a.default.createElement(I.default,{type:"select",className:(0,at.default)(i.default.onLineState,i.default.icon)}),a.default.createElement(e.default,null,"Consistent")):a.default.createElement("span",null,a.default.createElement(I.default,{type:"exclamationcircle-f",className:(0,at.default)(i.default.icon,i.default.offLineState)}),a.default.createElement(e.default,null,"inconsistent"))},Gt=function(X){Ht(!Yt),Qt(X)},bt=function(X,St,dt){var et=dt.clusterId,At=dt.onlineCount,H=dt.pluginType,c=dt.installMode,B=a.default.createElement(z.LinkButton,{onClick:function(Z){Gt(H),Z.stopPropagation()}},a.default.createElement(e.default,null,"Uninstall manually")),p=a.default.createElement(z.LinkButton,{onClick:function(Z){(0,it.pushUrl)(pt,"/chaos/agentmanage/setting/tools",{id:et,mode:c}),Z.stopPropagation()}},a.default.createElement(e.default,null,"Install the drill tool"));return a.default.createElement(z.default,null,At&&At>0&&B,p)};return a.default.createElement("div",{className:i.default.tabContent},a.default.createElement(o.default,{dataSource:q||[],hasBorder:!1,emptyContent:f,loading:m,expandedIndexSimulate:!0,primaryKey:"clusterId",openRowKeys:Ct,expandedRowIndent:[0,0],onRowClick:Mt,onRowOpen:function(X,St,dt,et){Mt(et)},expandedRowRender:Xt,locale:(0,F.default)().Table},a.default.createElement(o.default.Column,{title:r.default.t("Cluster ID").toString(),dataIndex:"clusterId"}),a.default.createElement(o.default.Column,{title:r.default.t("Cluster name").toString(),dataIndex:"clusterName"}),a.default.createElement(o.default.Column,{title:r.default.t("Number of cluster nodes").toString(),dataIndex:"nodeCount"}),a.default.createElement(o.default.Column,{title:r.default.t("Node Probe Version Consistency").toString(),dataIndex:"agentConsistency",cell:wt}),a.default.createElement(o.default.Column,{title:r.default.t("Operation").toString(),cell:bt})),Yt&&a.default.createElement(n.default,{pluginType:kt,isUninstall:!0,isClusterUninstall:!0,onClose:function(){return Ht(!1)}}))},Ut=y;k.default=Ut})},74590:function(Rt,J,t){var R,G,M,ot=t(67394);(function(A,x){if(!0)!(G=[J,t(61320)],R=x,M=typeof R=="function"?R.apply(J,G):R,M!==void 0&&(Rt.exports=M));else var rt})(typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:this,function(A,x){"use strict";var rt=t(67971);ot(A,"__esModule",{value:!0}),A.default=void 0,x=rt(x);var k=function(b){return b?(0,x.default)(b).format("YYYY-MM-DD HH:mm:ss"):""},o=k;A.default=o})},73805:(Rt,J,t)=>{"use strict";t.d(J,{Z:()=>x});var R=t(60994),G=t.n(R),M=t(93476),ot=t.n(M),A=ot()(G());A.push([Rt.id,`.index__warp__36Zri .index__tabStyle__iDOA5 {\r
    position: relative;\r
  }\r
\r
    .index__warp__36Zri .index__tabStyle__iDOA5 .next-tabs-tab {\r
      min-width: 118px !important;\r
      text-align: center;\r
    }\r
\r
    .index__warp__36Zri .index__tabStyle__iDOA5 .next-tabs-nav-extra {\r
      width: 77% !important;\r
      z-index: 5 !important;\r
    }\r
  .index__warp__36Zri .index__tabContent__bdo8t {\r
    margin-top: 8px;\r
  }\r
  .index__warp__36Zri .index__tabContent__bdo8t .index__searchContent__5Khmv {\r
      margin-bottom: 8px;\r
    }\r
  .index__warp__36Zri .index__tabContent__bdo8t .index__searchContent__5Khmv .next-search-input {\r
        width: 360px;\r
      }\r
  .index__warp__36Zri .index__href__hzb1z {\r
    color: #0070cc;\r
    cursor: pointer;\r
  }\r
  .index__warp__36Zri .index__href__hzb1z:hover {\r
      text-decoration: underline;\r
    }\r
  .index__warp__36Zri .index__extra__gdCJM {\r
    display: flex;\r
    justify-content: space-between;\r
  }\r
  .index__warp__36Zri .index__pagination__PdFaW {\r
    margin-top: 8px;\r
    text-align: right;\r
  }\r
  .index__warp__36Zri .index__icon__8g2Mp {\r
    font-size: 14px;\r
    margin-right: 8px;\r
  }\r
  .index__warp__36Zri .index__icon__8g2Mp::before{\r
      font-size: 14px !important;\r
      width: 14px !important;\r
    }\r
  .index__warp__36Zri .index__onLineState__BIMgf {\r
    color: #1E8E3E;\r
  }\r
  .index__warp__36Zri .index__notInstall__eJaqN {\r
    color: #888;\r
  }\r
  .index__warp__36Zri .index__offLineState__nk8gz {\r
    color: #D93026;\r
  }\r
\r
.index__paginationK8s__YXp49 {\r
  margin: 8px 0px;\r
  text-align: right;\r
}\r
\r
.index__content__qHBtw .index__ml10__8lipo {\r
    margin-left: 10px;\r
  }\r
\r
.index__content__qHBtw .index__mr10__Pq3eQ {\r
    margin-right: 10px;\r
  }\r
\r
.index__content__qHBtw .index__red__xmT3P {\r
    color: red;\r
  }\r
\r
.index__content__qHBtw .index__v_a_b__KYB\\+i {\r
    vertical-align: bottom;\r
  }\r
`,"",{version:3,sources:["webpack://./pages/Chaos/ScopesControl/index.css"],names:[],mappings:"AACE;IACE,kBAAkB;EAWpB;;IATE;MACE,2BAA2B;MAC3B,kBAAkB;IACpB;;IAEA;MACE,qBAAqB;MACrB,qBAAqB;IACvB;EAGF;IACE,eAAe;EASjB;EAPE;MACE,kBAAkB;IAKpB;EAHE;QACE,YAAY;MACd;EAIJ;IACE,cAAc;IACd,eAAe;EAKjB;EAHE;MACE,0BAA0B;IAC5B;EAGF;IACE,aAAa;IACb,8BAA8B;EAChC;EAEA;IACE,eAAe;IACf,iBAAiB;EACnB;EAEA;IACE,eAAe;IACf,iBAAiB;EAMnB;EAJE;MACE,0BAA0B;MAC1B,sBAAsB;IACxB;EAGF;IACE,cAAc;EAChB;EAEA;IACE,WAAW;EACb;EAEA;IACE,cAAc;EAChB;;AAGF;EACE,eAAe;EACf,iBAAiB;AACnB;;AAIE;IACE,iBAAiB;EACnB;;AAEA;IACE,kBAAkB;EACpB;;AAEA;IACE,UAAU;EACZ;;AAEA;IACE,sBAAsB;EACxB",sourcesContent:[`.warp {\r
  .tabStyle {\r
    position: relative;\r
\r
    :global(.next-tabs-tab) {\r
      min-width: 118px !important;\r
      text-align: center;\r
    }\r
\r
    :global(.next-tabs-nav-extra) {\r
      width: 77% !important;\r
      z-index: 5 !important;\r
    }\r
  }\r
\r
  .tabContent {\r
    margin-top: 8px;\r
\r
    .searchContent {\r
      margin-bottom: 8px;\r
\r
      :global(.next-search-input) {\r
        width: 360px;\r
      }\r
    }\r
  }\r
\r
  .href {\r
    color: #0070cc;\r
    cursor: pointer;\r
\r
    &:hover {\r
      text-decoration: underline;\r
    }\r
  }\r
\r
  .extra {\r
    display: flex;\r
    justify-content: space-between;\r
  }\r
\r
  .pagination {\r
    margin-top: 8px;\r
    text-align: right;\r
  }\r
\r
  .icon {\r
    font-size: 14px;\r
    margin-right: 8px;\r
\r
    &::before{\r
      font-size: 14px !important;\r
      width: 14px !important;\r
    }\r
  }\r
\r
  .onLineState {\r
    color: #1E8E3E;\r
  }\r
\r
  .notInstall {\r
    color: #888;\r
  }\r
\r
  .offLineState {\r
    color: #D93026;\r
  }\r
}\r
\r
.paginationK8s {\r
  margin: 8px 0px;\r
  text-align: right;\r
}\r
\r
.content {\r
\r
  .ml10 {\r
    margin-left: 10px;\r
  }\r
\r
  .mr10 {\r
    margin-right: 10px;\r
  }\r
\r
  .red {\r
    color: red;\r
  }\r
\r
  .v_a_b {\r
    vertical-align: bottom;\r
  }\r
\r
}\r
`],sourceRoot:""}]),A.locals={warp:"index__warp__36Zri",tabStyle:"index__tabStyle__iDOA5",tabContent:"index__tabContent__bdo8t",searchContent:"index__searchContent__5Khmv",href:"index__href__hzb1z",extra:"index__extra__gdCJM",pagination:"index__pagination__PdFaW",icon:"index__icon__8g2Mp",onLineState:"index__onLineState__BIMgf",notInstall:"index__notInstall__eJaqN",offLineState:"index__offLineState__nk8gz",paginationK8s:"index__paginationK8s__YXp49",content:"index__content__qHBtw",ml10:"index__ml10__8lipo",mr10:"index__mr10__Pq3eQ",red:"index__red__xmT3P",v_a_b:"index__v_a_b__KYB+i"};const x=A},52181:(Rt,J,t)=>{"use strict";t.r(J),t.d(J,{default:()=>x});var R=t(1892),G=t.n(R),M=t(73805),ot={};ot.insert="head",ot.singleton=!1;var A=G()(M.Z,ot);const x=M.Z.locals||{}}}]);

//# sourceMappingURL=333.bundle.js.map