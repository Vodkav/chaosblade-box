(self.webpackChunk=self.webpackChunk||[]).push([[313],{17047:function(V,f,e){var A,x,u,B=e(67394);(function(i,d){if(!0)!(x=[f,e(14798)],A=d,u=typeof A=="function"?A.apply(f,x):A,u!==void 0&&(V.exports=u));else var M})(typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:this,function(i,d){"use strict";var M=e(67971);B(i,"__esModule",{value:!0}),i.TASK=i.RECOVER=i.OBSERVER=i.NodeRunResult=i.NORMAL=i.ExperimentConstants=void 0,d=M(d);var y={EXPERIMENT_STATE_DRAFT:"DRAFT",EXPERIMENT_STATE_READY:"READY",EXPERIMENT_STATE_RUNNING:"RUNNING",EXPERIMENT_STATE_SYNC:"SYNC_WAIT_EDIT",EXPERIMENT_TASK_RESULT_SUCCESS:"SUCCESS",EXPERIMENT_TASK_RESULT_FAILED:"FAILED",EXPERIMENT_TASK_RESULT_REJECTED:"REJECTED",EXPERIMENT_TASK_RESULT_ERROR:"ERROR",EXPERIMENT_TASK_RESULT_STOPPED:"STOPPED",EXPERIMENT_TASK_STATE_FINISHED:"FINISHED",EXPERIMENT_TASK_STATE_RUNNING:"RUNNING",EXPERIMENT_TASK_STATE_STOPPING:"STOPPING",EXPERIMENT_TASK_STATE_READY:"READY",EXPERIMENT_ACTIVITY_TASK_USER_CHECK_STATE_WAITING:"USER_CHECK_STATE_WAITING",EXPERIMENT_ACTIVITY_TASK_USER_CHECK_STATE_PASSED:"USER_CHECK_STATE_PASSED",EXPERIMENT_ACTIVITY_TASK_USER_CHECK_STATE_FAILED:"USER_CHECK_STATE_FAILED",EXPERIMENT_RELATION_TYPE_EMERGENCY_SCENE:"emergency_scene",EXPERIMENT_RELATION_TYPE_OWNER:"owner",ERROR:d.default.t("Abnormal"),FAILED:d.default.t("Not as expected"),STOPPED:d.default.t("Interrupt"),SUCCESS:d.default.t("Success"),EXCEPTION:d.default.t("Abnormal"),TOTAL:d.default.t("Number of drills")};i.ExperimentConstants=y;var E={REJECTED:"REJECTED",SUCCESS:"SUCCESS",FAILED:["FAILED","SOPPED_FAILED","ERROR","STOPPED"]};i.NodeRunResult=E;var C=-1;i.NORMAL=C;var Ae=0;i.OBSERVER=Ae;var T=1;i.RECOVER=T;var c=2;i.TASK=c})},96042:function(V,f,e){var A,x,u,B=e(24596),i=e(67394),d=e(93168),M=e(23587),y=e(41281),E=e(50093),C=e(59396),Ae=e(75453);(function(T,c){if(!0)!(x=[f,e(73220),e(12955),e(93484),e(94188),e(17225),e(72153),e(77809),e(81853),e(85645),e(27378),e(66697),e(98784),e(14798),e(68055),e(54581),e(73262),e(14870)],A=c,u=typeof A=="function"?A.apply(f,x):A,u!==void 0&&(V.exports=u));else var n})(typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:this,function(T,c,n,p,F,ee,R,l,s,le,a,ne,Z,te,me,k,t,H){"use strict";var _=e(67971);i(T,"__esModule",{value:!0}),T.default=void 0,c=_(c),n=_(n),p=_(p),F=_(F),ee=_(ee),R=_(R),l=_(l),s=_(s),le=_(le),a=_e(a),ne=_(ne),Z=_(Z),te=_(te),me=_(me),k=_(k);function $(r){if(typeof d!="function")return null;var P=new d,m=new d;return($=function(D){return D?m:P})(r)}function _e(r,P){if(!P&&r&&r.__esModule)return r;if(r===null||B(r)!=="object"&&typeof r!="function")return{default:r};var m=$(P);if(m&&m.has(r))return m.get(r);var re={},D=i&&M;for(var G in r)if(G!=="default"&&Object.prototype.hasOwnProperty.call(r,G)){var Ee=D?M(r,G):null;Ee&&(Ee.get||Ee.set)?i(re,G,Ee):re[G]=r[G]}return re.default=r,m&&m.set(r,re),re}function K(r,P){var m=typeof y!="undefined"&&r[E]||r["@@iterator"];if(!m){if(C(r)||(m=se(r))||P&&r&&typeof r.length=="number"){m&&(r=m);var re=0,D=function(){};return{s:D,n:function(){return re>=r.length?{done:!0}:{done:!1,value:r[re++]}},e:function(w){throw w},f:D}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var G=!0,Ee=!1,Re;return{s:function(){m=m.call(r)},n:function(){var w=m.next();return G=w.done,w},e:function(w){Ee=!0,Re=w},f:function(){try{!G&&m.return!=null&&m.return()}finally{if(Ee)throw Re}}}}function se(r,P){if(!r)return;if(typeof r=="string")return we(r,P);var m=Object.prototype.toString.call(r).slice(8,-1);if(m==="Object"&&r.constructor&&(m=r.constructor.name),m==="Map"||m==="Set")return Ae(r);if(m==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(m))return we(r,P)}function we(r,P){(P==null||P>r.length)&&(P=r.length);for(var m=0,re=new Array(P);m<P;m++)re[m]=r[m];return re}var Te=le.default.SubMenu,Ie=le.default.Item;function We(r){var P=(0,H.useDispatch)(),m=(0,a.useState)([]),re=(0,s.default)(m,2),D=re[0],G=re[1],Ee=(0,a.useState)(""),Re=(0,s.default)(Ee,2),O=Re[0],w=Re[1],v=(0,a.useState)(1),Ne=(0,s.default)(v,2),xe=Ne[0],ve=Ne[1],De=(0,a.useState)(1),ge=(0,s.default)(De,2),Me=ge[0],Pe=ge[1],Oe=(0,a.useState)(1),Se=(0,s.default)(Oe,2),ie=Se[0],Q=Se[1],Fe=(0,a.useState)(null),Y=(0,s.default)(Fe,2),o=Y[0],z=Y[1],ue=(0,a.useState)([]),oe=(0,s.default)(ue,2),I=oe[0],J=oe[1],ke=(0,a.useState)(""),Be=(0,s.default)(ke,2),fe=Be[0],ce=Be[1],Ke=(0,a.useState)([]),L=(0,s.default)(Ke,2),N=L[0],j=L[1],de=(0,a.useState)(!1),he=(0,s.default)(de,2),pe=he[0],Le=he[1],Ze=(0,a.useState)(!1),Xe=(0,s.default)(Ze,2),Ve=Xe[0],He=Xe[1];(0,a.useEffect)(function(){r.visible||(G([]),w(""),ve(1),z(null),J([]),ce(""),j([]),Le(!1))},[r.visible]),(0,a.useEffect)(function(){if(ve(1),G([]),w(""),J([]),z(null),j([]),pe){var g=r.phase,S=r.scopeType,W=r.k8sResourceType;(0,l.default)(regeneratorRuntime.mark(function X(){return regeneratorRuntime.wrap(function(q){for(;;)switch(q.prev=q.next){case 0:return q.next=2,P.experimentScene.searchFunctions({key:fe,phase:g,page:1,scopeType:S,k8sResourceType:W},function(h){var U=h.data,b=U===void 0?[]:U,Ce=h.pageSize,Ue=Ce===void 0?1:Ce,Ye=h.total,ye=Ye===void 0?1:Ye;Q(ye),Pe(Ue),J(b)});case 2:case"end":return q.stop()}},X)}))()}else ce("")},[pe,Ve]),(0,a.useEffect)(function(){if(!r.visible)return;if(!pe){var g=r.phase,S=r.scopeType,W=r.nodeType,X=r.cloudServiceType,ae=r.osType;W===t.NODE_TYPE.OBSERVER?(0,l.default)(regeneratorRuntime.mark(function q(){return regeneratorRuntime.wrap(function(U){for(;;)switch(U.prev=U.next){case 0:return U.next=2,P.experimentScene.getGlobalCategories(function(b){Z.default.isEqual(D,b)||G(b)});case 2:case"end":return U.stop()}},q)}))():W===t.NODE_TYPE.RECOVER?(0,l.default)(regeneratorRuntime.mark(function q(){return regeneratorRuntime.wrap(function(U){for(;;)switch(U.prev=U.next){case 0:return U.next=2,P.experimentScene.getGuardCategories(function(b){Z.default.isEqual(D,b)||G(b)});case 2:case"end":return U.stop()}},q)}))():(0,l.default)(regeneratorRuntime.mark(function q(){var h;return regeneratorRuntime.wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.next=2,P.experimentScene.getCategories({phase:g,scopeType:S,filterNoChild:!0,cloudServiceType:X,osType:ae});case 2:h=b.sent,Z.default.isEqual(D,h)||G(h);case 4:case"end":return b.stop()}},q)}))()}},[r.visible,r.phase,r.scopeType,r.nodeType,pe,r.osType]),(0,a.useEffect)(function(){if(D.length>0){for(var g=D[0];g.children&&g.children.length>0;)g=g.children[0];w(g.categoryId)}},[D]),(0,a.useEffect)(function(){ve(1);var g=[];S(D,g),g.length>0?j([].concat(g)):D.length>0&&j([D[0].categoryId]);function S(W,X){var ae=K(W),q;try{for(ae.s();!(q=ae.n()).done;){var h=q.value;if(h.children&&h.children.length>0){if(X.push(h.categoryId),S(h.children,X))return!0;X.pop()}else{if(h.categoryId!==O)continue;return!0}}}catch(U){ae.e(U)}finally{ae.f()}return!1}},[O]),(0,a.useEffect)(function(){if(!r.visible)return;var g=r.phase,S=r.scopeType,W=r.k8sResourceType,X=r.osType;pe?(0,l.default)(regeneratorRuntime.mark(function ae(){return regeneratorRuntime.wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,P.experimentScene.searchFunctions({key:fe,phase:g,page:xe,scopeType:S,k8sResourceType:W,osType:X},function(U){var b=U.data,Ce=b===void 0?[]:b,Ue=U.total,Ye=Ue===void 0?1:Ue,ye=U.pageSize,je=ye===void 0?1:ye;Q(Ye),Pe(je),Z.default.isEqual(I,Ce)||J(Ce)});case 2:case"end":return h.stop()}},ae)}))():O&&xe&&(0,l.default)(regeneratorRuntime.mark(function ae(){return regeneratorRuntime.wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,P.experimentScene.getFunctionsByCategoryId({page:xe,categoryId:O,phase:g,scopeType:S,k8sResourceType:W,size:12,osType:X},function(U){if(U){var b=U.data,Ce=U.total,Ue=U.pageSize;Q(Ce),Pe(Ue),Z.default.isEqual(I,b)||J(b)}});case 2:case"end":return h.stop()}},ae)}))()},[r.phase,r.scopeType,O,xe,r.k8sResourceType,r.osType]),(0,a.useEffect)(function(){I.length>0?z(I[0]):z(null)},[I]);var ze=function(){r.onClose()},$e=function(S){return ce(S)},Ge=function(){Le(!0),He(!Ve)},Qe=function(){Le(!pe)},Je=function(S){S!==O&&w(S)},qe=function(S){var W=I.filter(function(X){return X.functionId===S});W.length>0&&z(W[0])},en=function(S){ve(S)},nn=function(S){return a.default.createElement(le.default,{className:k.default.categoryList,selectMode:"single",defaultOpenKeys:N,selectedKeys:O,hasSelectedIcon:!1,onItemClick:Je,inlineIndent:10},tn(S))},tn=function g(S){var W=[],X=K(S),ae;try{for(X.s();!(ae=X.n()).done;){var q=ae.value,h=q.categoryId,U=q.name,b=q.children;b&&b.length>0?W.push(a.default.createElement(Te,{key:h,label:U},g(b))):W.push(a.default.createElement(Ie,{key:h},U))}}catch(Ce){X.e(Ce)}finally{X.f()}return W},rn=function(){var g=(0,l.default)(regeneratorRuntime.mark(function S(){var W,X,ae;return regeneratorRuntime.wrap(function(h){for(;;)switch(h.prev=h.next){case 0:if(W=r.phase,!(W&&o&&!o.arguments||W&&!o)){h.next=6;break}return h.next=4,new c.default(function(U,b){var Ce=Z.default.get(o,"functionId","");(0,l.default)(regeneratorRuntime.mark(function Ue(){return regeneratorRuntime.wrap(function(ye){for(;;)switch(ye.prev=ye.next){case 0:return ye.next=2,P.experimentScene.getFunctionParameters({functionId:Ce},function(je,an){je?b(je):U(an)});case 2:case"end":return ye.stop()}},Ue)}))()});case 4:X=h.sent,Z.default.set(o,"arguments",X);case 6:ae=r.onSelect,ae(Z.default.cloneDeep(o)),ze();case 9:case"end":return h.stop()}},S)}));return function(){return g.apply(this,arguments)}}();return a.default.createElement(n.default,{title:r.title,visible:r.visible,footer:a.default.createElement("div",{className:k.default.btnRow},a.default.createElement(R.default,{className:k.default.btn,type:"primary",disabled:I.length===0,onClick:rn,"data-autolog":"text=".concat(te.default.t("Confirm selection of applet").toString())},a.default.createElement(ne.default,null,"Confirm")),a.default.createElement(R.default,{className:k.default.btn,type:"normal",onClick:ze,"data-autolog":"".concat(te.default.t("Deselect applet"))},a.default.createElement(ne.default,null,"cancel"))),onCancel:ze,onClose:ze,style:{minWidth:968},locale:(0,me.default)().Dialog},a.default.createElement("div",{className:k.default.container},r.searchable?a.default.createElement("div",{className:k.default.searchBox},a.default.createElement(ee.default,{type:"search",size:"xs",className:k.default.icon}),a.default.createElement(F.default,{className:k.default.search,value:fe,onChange:$e,onSearch:Ge,placeholder:te.default.t("Search for fault titles").toString(),searchText:te.default.t("Search").toString(),hasIcon:!1})):null,a.default.createElement("div",{className:k.default.contentBox},a.default.createElement("div",{className:k.default.categoryBox},!pe&&N.length>0&&nn(D),pe&&a.default.createElement("p",null,a.default.createElement("span",null,a.default.createElement(ne.default,null,"Search results"),":"),a.default.createElement("span",{className:k.default.clearSearch,onClick:Qe},a.default.createElement(ne.default,null,"Empty")))),a.default.createElement("div",{className:k.default.listBox},a.default.createElement("ul",{className:k.default.functionList},Z.default.isEmpty(I)?a.default.createElement("div",null,a.default.createElement(ne.default,null,"There is no scene in the current category")):I.map(function(g){var S=g.name,W=g.functionId,X=!1;return o&&(o.functionId===W&&(X=!0)),a.default.createElement("li",{className:X?k.default.selectedFunc:void 0,key:W,onClick:function(){return qe(W)},"data-autolog":"text=".concat(te.default.t("Click the applet").toString())},S)})),a.default.createElement(p.default,{shape:"arrow-only",current:xe,total:ie,pageSize:Me,hideOnlyOnePage:!0,locale:(0,me.default)().Pagination,onChange:function(S){return en(S)}}),o?a.default.createElement("div",{className:k.default.descriptionBox},a.default.createElement("p",null,o.description)):a.default.createElement("div",{style:{minHeight:220}})))))}var be=We;T.default=be})},63835:function(V,f,e){var A,x,u,B=e(67394);(function(i,d){if(!0)!(x=[f,e(93080),e(59607),e(32186),e(27378)],A=d,u=typeof A=="function"?A.apply(f,x):A,u!==void 0&&(V.exports=u));else var M})(typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:this,function(i,d,M,y,E){"use strict";var C=e(67971);B(i,"__esModule",{value:!0}),i.default=void 0,d=C(d),M=C(M),y=C(y),E=C(E);var Ae=["type","children"],T=new y.default,c=function(ee){var R=ee.scriptUrl,l=ee.extraCommonProps,s=l===void 0?{}:l;if(typeof document!="undefined"&&typeof window!="undefined"&&typeof document.createElement=="function"&&typeof R=="string"&&R.length&&!T.has(R)){var le=document.createElement("script");le.setAttribute("src",R),le.setAttribute("data-namespace",R),T.add(R),document.body.appendChild(le)}var a=function(Z){var te=Z.type,me=Z.children,k=(0,M.default)(Z,Ae),t=null;return Z.type&&(t=E.default.createElement("use",{xlinkHref:"#".concat(te)})),me&&(t=me),E.default.createElement("svg",(0,d.default)({},k,s),t)};return a.displayName="Iconfont",a},n=c({scriptUrl:"//at.alicdn.com/t/font_976326_mtiq05ajtqs.js"}),p=n;i.default=p})},76313:function(V,f,e){var A,x,u,B=e(24596),i=e(67394),d=e(93168),M=e(23587);(function(y,E){if(!0)!(x=[f,e(17225),e(81853),e(96042),e(9577),e(27378),e(89724),e(98784),e(14798),e(39725)],A=E,u=typeof A=="function"?A.apply(f,x):A,u!==void 0&&(V.exports=u));else var C})(typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:this,function(y,E,C,Ae,T,c,n,p,F,ee){"use strict";var R=e(67971);i(y,"__esModule",{value:!0}),y.default=void 0,E=R(E),C=R(C),Ae=R(Ae),T=R(T),c=s(c),n=R(n),p=R(p),F=R(F),ee=R(ee);function l(t){if(typeof d!="function")return null;var H=new d,_=new d;return(l=function(_e){return _e?_:H})(t)}function s(t,H){if(!H&&t&&t.__esModule)return t;if(t===null||B(t)!=="object"&&typeof t!="function")return{default:t};var _=l(H);if(_&&_.has(t))return _.get(t);var $={},_e=i&&M;for(var K in t)if(K!=="default"&&Object.prototype.hasOwnProperty.call(t,K)){var se=_e?M(t,K):null;se&&(se.get||se.set)?i($,K,se):$[K]=t[K]}return $.default=t,_&&_.set(t,$),$}var le=16,a=16,ne=244,Z=0,te=0;function me(t){var H=(0,c.useRef)(null),_;t.editable?te=48:te=29,t.deletable?Z=32:Z=0;var $=(0,c.useState)(0),_e=(0,C.default)($,2),K=_e[0],se=_e[1],we=(0,c.useState)(NaN),Te=(0,C.default)(we,2),Ie=Te[0],We=Te[1],be=(0,c.useState)(),r=(0,C.default)(be,2),P=r[0],m=r[1],re=(0,c.useState)(),D=(0,C.default)(re,2),G=D[0],Ee=D[1],Re=(0,c.useState)(!1),O=(0,C.default)(Re,2),w=O[0],v=O[1];(0,c.useEffect)(function(){Ne(),xe()},[]),(0,c.useEffect)(function(){return function(){_&&clearTimeout(_)}},[]);function Ne(){var Y=t.editable,o=H.current&&H.current.scrollWidth-(Y?le*2:0);o!==K&&se(o)}function xe(){var Y=1e3;_&&clearTimeout(_),_=setTimeout(function(){Ne(),xe()},Y)}var ve=function(o,z){var ue=t.onNodeAdding;ue&&ue();var oe;o?o.phase===1<<1?z?z.phase===1<<3?oe=1<<2|1<<3:z.phase&&(oe=z.phase):oe=1<<2|1<<3:o.phase&&(oe=o.phase):oe=1<<0,m(o),Ee(z),We(oe),v(!0)};function De(){v(!1)}function ge(Y){var o;switch(Ie){case 1<<0:o="prepare";break;case 1<<1:o="attack";break;case 1<<2:o="check";break;case 1<<3:o="recover";break;default:o=void 0;break}if(!o){var z=p.default.get(Y,"phaseFlag");z&&((z&8)===8?o="recover":o="check")}Y.stage=o,P?P.insertAfter(Y):G&&G.insertBefore(Y);var ue=t.onNodeAdd;ue&&ue(Y)}function Me(Y,o){var z=t.editable,ue=Y-Z,oe=z?a+ne+te:ne+te,I=0;if(ue>=oe){I=1;for(var J=ue-oe;J>=te+ne;)++I,J-=te+ne;J>ne&&o>I+1&&++I}return I}function Pe(Y){var o=t.editable,z=t.selectedNode,ue=t.isExpertise,oe=t.running,I=Me(K,Y.length),J=ne/2+(o?a:0),ke=(ne+te)*(I-1),Be=[];return K>0&&I>0&&p.default.forEach(Y,function(fe,ce){var Ke=fe.id,L=fe.activityId,N=z&&fe.id===z.id,j=ce===0,de=ce!==0&&(ce+1)%I===1,he=ce!==Y.length-1&&(ce+1)%I===0,pe=ce===Y.length-1;Be.push(c.default.createElement(T.default,{key:Ke||L,data:fe,editable:o,isExpertise:ue,selected:N,isHead:j,isLineFirst:de,isLineLast:he,isLast:pe,onClick:t.onNodeClick,onNodeAddClick:ve,onNodeDeleteClick:t.onNodeDelete,onTryAgainClick:t.onTryAgain,running:oe,onCheck:t.onCheck,permission:t.permission})),he&&Be.push(c.default.createElement(n.default,{key:ce,data:fe,editable:o,lineWidth:ke,padding:J,onNodeAddClick:ve}))}),Be}var Oe=t.editable,Se=t.nodes,ie=t.scopeType,Q=t.deletable,Fe=Oe?ee.default.boxContainer:ee.default.boxContainerReadOnly;return p.default.isEmpty(Se)?null:c.default.createElement("div",{className:Fe},c.default.createElement("div",{ref:H,className:ee.default.box},Pe(Se)),Q&&c.default.createElement("div",{className:ee.default.deleteFlowBox,onClick:t.onDelete,"data-autolog":"text=".concat(F.default.t("Delete walkthrough group"))},c.default.createElement(E.default,{type:"ashbin",size:"small",style:{color:"#888"},"data-autolog":"text=".concat(F.default.t("Delete walkthrough group"))})),c.default.createElement(Ae.default,{title:F.default.t("Choose a walkthrough node").toString(),searchable:!0,visible:w,phase:Ie,scopeType:ie,onClose:De,onSelect:ge}))}var k=me;y.default=k})},89724:function(V,f,e){var A,x,u,B=e(67394);(function(i,d){if(!0)!(x=[f,e(17225),e(63835),e(27378),e(1918)],A=d,u=typeof A=="function"?A.apply(f,x):A,u!==void 0&&(V.exports=u));else var M})(typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:this,function(i,d,M,y,E){"use strict";var C=e(67971);B(i,"__esModule",{value:!0}),i.default=Ae,d=C(d),M=C(M),y=C(y),E=C(E);function Ae(T){function c(R,l){var s=T.onNodeAddClick;s&&s(R,l)}var n=T.data,p=T.editable,F=T.lineWidth,ee=T.padding;return y.default.createElement("div",{className:E.default.switchArrowContainer,style:{width:"100%",paddingLeft:ee}},y.default.createElement("div",{className:E.default.switchArrowDownContainer},y.default.createElement("div",{className:E.default.switchArrowDown}),y.default.createElement(d.default,{className:E.default.switchArrowDownIcon,type:"caret-down",size:"small"})),y.default.createElement("div",{className:E.default.switchArrowLine,style:{width:F}}),y.default.createElement("div",{className:E.default.switchArrowUpContainer},y.default.createElement("div",{className:E.default.switchArrowUp}),p&&y.default.createElement(M.default,{className:E.default.switchArrowIcon,type:"icon-tianjia2",onClick:function(){return c(n,n.next)}})))}})},9577:function(V,f,e){var A,x,u,B=e(24596),i=e(67394),d=e(93168),M=e(23587);(function(y,E){if(!0)!(x=[f,e(72153),e(17225),e(57379),e(81853),e(63835),e(27378),e(66697),e(98784),e(60042),e(14798),e(1918),e(17047),e(17640)],A=E,u=typeof A=="function"?A.apply(f,x):A,u!==void 0&&(V.exports=u));else var C})(typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:this,function(y,E,C,Ae,T,c,n,p,F,ee,R,l,s,le){"use strict";var a=e(67971);i(y,"__esModule",{value:!0}),y.default=k,E=a(E),C=a(C),Ae=a(Ae),T=a(T),c=a(c),n=Z(n),p=a(p),F=a(F),ee=a(ee),R=a(R),l=a(l);function ne(t){if(typeof d!="function")return null;var H=new d,_=new d;return(ne=function(_e){return _e?_:H})(t)}function Z(t,H){if(!H&&t&&t.__esModule)return t;if(t===null||B(t)!=="object"&&typeof t!="function")return{default:t};var _=ne(H);if(_&&_.has(t))return _.get(t);var $={},_e=i&&M;for(var K in t)if(K!=="default"&&Object.prototype.hasOwnProperty.call(t,K)){var se=_e?M(t,K):null;se&&(se.get||se.set)?i($,K,se):$[K]=t[K]}return $.default=t,_&&_.set(t,$),$}var te={prepare:"#FFDDB2",attack:"#79B3F3",check:"#BAB1EA",recover:"#2A828A"},me={0:{tag:"#EDF7ED",word:"#629962"},1:{tag:"#EDF3F7",word:"#628099"},2:{tag:"#F0EDF7",word:"#746299"},3:{tag:"#F7EDED",word:"#996262"},4:{tag:"#F7F6ED",word:"#999062"}};function k(t){var H=t.permission,_=(0,n.useState)(!1),$=(0,T.default)(_,2),_e=$[0],K=$[1],se=(0,n.useState)(!1),we=(0,T.default)(se,2),Te=we[0],Ie=we[1],We=(0,n.useState)(!1),be=(0,T.default)(We,2),r=be[0],P=be[1],m=function(){var N=t.data,j=t.onClick;F.default.isEmpty(N)||j&&j(N)},re=function(N){N.stopPropagation();var j=t.data,de=t.onNodeDeleteClick;de&&de(j)},D=function(N,j){var de=t.onNodeAddClick;de&&de(N,j)},G=function(N){if(P(!0),N.stopPropagation(),!(0,le.handleIsAdmin)(H,4))return;var j=t.data,de=t.onTryAgainClick;F.default.isEmpty(j)||de&&de(j,function(){P(!1)})},Ee=function(N,j){if(j?K(!0):Ie(!0),N.stopPropagation(),!(0,le.handleIsAdmin)(H,4))return;var de=t.data,he=t.onCheck;F.default.isEmpty(de)||he&&he(j,de,function(){j?K(!1):Ie(!1)})};function Re(){var L=t.data,N=!1;if(!F.default.isEmpty(L)){var j=L.arguments||L.args;F.default.isEmpty(j)||j.forEach(function(de){var he;(he=de.argumentList)===null||he===void 0||he.forEach(function(pe){var Le=pe.component;F.default.isEmpty(Le)||Le.required&&(N=!0)})})}return N}var O=t.isExpertise,w=t.editable,v=t.data,Ne=t.isHead,xe=t.isLineFirst,ve=t.isLineLast,De=t.isLast,ge=t.selected,Me=v.stage,Pe=v.activityName,Oe=v.name,Se=v.miniAppName,ie=v.state,Q=v.runResult,Fe=v.retryable,Y=v.userCheckState,o=v.nodeType,z=v.hostPercent,ue=v.hosts,oe=Pe||Oe||Se,I=Re(),J=(0,Ae.default)({},l.default.nodeBox,!0),ke=t.hasOwnProperty("deletable")?t.deletable:v.deletable,Be,fe;o!==s.NORMAL&&o!==s.TASK?(fe=null,Be=l.default.globalNodeContainer):(fe=w?l.default.tailBox:l.default.tailBoxReadOnly,Be=l.default.normalNodeContainer),ge&&(J[l.default.selectedNode]=!0),v.hasOwnProperty("argsValid")&&(w&&!v.argsValid&&!O&&(J[l.default.selectedNode]=!1,J[l.default.errorNode]=!0)),ie==="RUNNING"&&!ge?J[l.default.activityRunning]=!0:ie==="FINISHED"&&!ge&&(Q&&Q===s.NodeRunResult.SUCCESS?J[l.default.activitySuccess]=!0:Q&&Q===s.NodeRunResult.REJECTED?J[l.default.activityRejected]=!0:J[l.default.activityFailed]=!0);function ce(L){return me[L%5].tag||""}function Ke(L){return me[L%5].word||""}return n.default.createElement("div",{className:Be},w&&Ne&&n.default.createElement("div",{className:l.default.headBox},n.default.createElement(c.default,{className:l.default.iconHead,type:"icon-tianjia2",onClick:function(){return D(null,v)},"data-autolog":"text=".concat(R.default.t("Add a walkthrough node"))}),n.default.createElement("div",{className:l.default.arrowLineHead})),xe&&w&&n.default.createElement("div",{className:l.default.firstBox}),n.default.createElement("div",{title:Pe||Oe||Se,className:(0,ee.default)(J),onClick:m},n.default.createElement("div",{className:l.default.topLayer},n.default.createElement("div",{className:l.default.topLeftBox},n.default.createElement("div",{className:l.default.stageIcon,style:{backgroundColor:te[Me]}}),n.default.createElement("span",{title:oe,className:l.default.nodeName},oe)),n.default.createElement("div",{className:l.default.topRightBox},w&&!O&&v.argsValid===!1&&n.default.createElement(C.default,{type:"delete-filling",size:"xs",style:{color:"#D93026",marginRight:12}}),Q&&Q===s.NodeRunResult.SUCCESS&&n.default.createElement(C.default,{type:"success-filling",size:"small",style:{color:"#1E8E3E",marginRight:12}}),Q&&F.default.indexOf(s.NodeRunResult.FAILED,Q)>=0&&n.default.createElement(C.default,{type:"delete-filling",size:"small",style:{color:"#D93026",marginRight:12}}),ie==="RUNNING"&&n.default.createElement(C.default,{type:"loading",size:"small",style:{marginRight:12}}),!w&&v.groupOrder&&n.default.createElement("div",{className:l.default.groupOrderBox,style:{backgroundColor:ce(v.groupOrder)}},n.default.createElement("span",{style:{color:Ke(v.groupOrder)}},"\u5206\u7EC4",v.groupOrder)))),n.default.createElement("div",{className:l.default.bottomLayer},n.default.createElement("div",{className:l.default.bottomLeftBox},n.default.createElement("div",{className:l.default.parameterInfo},!O&&w&&!ie&&n.default.createElement(n.default.Fragment,null,n.default.createElement("span",null,n.default.createElement(p.default,null,"Required parameters"),": "),(I||o===s.RECOVER)&&n.default.createElement("span",{style:{color:"#D93026"}},n.default.createElement(p.default,null,"Have")),!I&&o!==s.RECOVER&&n.default.createElement("span",null,n.default.createElement(p.default,null,"None"))),!O&&!w&&!ie&&o!==s.NORMAL&&n.default.createElement(n.default.Fragment,null,n.default.createElement("span",null,n.default.createElement(p.default,null,"Required parameters"),": "),(I||o===s.RECOVER)&&n.default.createElement("span",{style:{color:"#D93026"}},n.default.createElement(p.default,null,"Have")),!I&&o!==s.RECOVER&&n.default.createElement(p.default,null,"None")),O&&!w&&!ie&&n.default.createElement(n.default.Fragment,null,n.default.createElement("span",null,n.default.createElement(p.default,null,"Required parameters"),": "),(I||o===s.RECOVER)&&n.default.createElement("span",{style:{color:"#D93026"}},n.default.createElement(p.default,null,"Have")),!I&&o!==s.RECOVER&&n.default.createElement(p.default,null,"None")),!O&&!w&&o===s.NORMAL&&!ie&&n.default.createElement(n.default.Fragment,null,n.default.createElement("span",null,n.default.createElement(p.default,null,"Involving machines"),": "),z&&z!==0&&!ue?n.default.createElement("span",{style:{color:"#0070cc"}},z,"%"):n.default.createElement("span",null),ue&&n.default.createElement("span",{style:{color:"#0070cc"}},"".concat(v.hosts," ").concat(R.default.t("Number")))),Y===s.ExperimentConstants.EXPERIMENT_ACTIVITY_TASK_USER_CHECK_STATE_WAITING&&n.default.createElement("span",null,n.default.createElement(p.default,null,"To be pushed manually")),Q&&Q===s.NodeRunResult.SUCCESS&&n.default.createElement("span",null,n.default.createElement(p.default,null,"Node executes successfully")),Q&&F.default.indexOf(s.NodeRunResult.FAILED,Q)>=0&&n.default.createElement("span",null,n.default.createElement(p.default,null,"Node execution failed")),Q&&Q===s.NodeRunResult.REJECTED&&n.default.createElement("span",null,n.default.createElement(p.default,null,"Node execution is skipped")),ie&&ie==="RUNNING"&&n.default.createElement("span",null,n.default.createElement(p.default,null,"Node is executing...")))),n.default.createElement("div",{className:l.default.bottomRightBox},n.default.createElement("div",{className:l.default.userAction},Fe&&n.default.createElement("span",{className:l.default.contiueTryIcon,onClick:function(N){return G(N)}},n.default.createElement(E.default,{type:"primary",loading:r,text:!0,className:l.default.action,disabled:!(0,le.handleIsAdmin)(H,4)},n.default.createElement(p.default,null,"Retry"))),Y===s.ExperimentConstants.EXPERIMENT_ACTIVITY_TASK_USER_CHECK_STATE_WAITING?n.default.createElement("span",{className:l.default.userCheck},n.default.createElement("span",{className:l.default.contiueTryIcon,onClick:function(N){return Ee(N,!0)}},n.default.createElement(E.default,{type:"primary",loading:_e,text:!0,className:l.default.action,disabled:!(0,le.handleIsAdmin)(H,4)},n.default.createElement(p.default,null,"Continue"))),n.default.createElement("span",{onClick:function(N){return Ee(N,!1)}},n.default.createElement(E.default,{type:"primary",loading:Te,text:!0,className:l.default.action,disabled:!(0,le.handleIsAdmin)(H,4)},n.default.createElement(p.default,null,"Termination")))):n.default.createElement("span",null)))),ie?ge&&n.default.createElement("div",{className:l.default.selectedTriangle}):ge&&v.argsValid&&n.default.createElement("div",{className:l.default.selectedTriangle}),w&&ke&&!ie&&n.default.createElement(C.default,{type:"ashbin",size:"small",style:{position:"absolute",top:16,right:12,color:"#888"},onClick:function(N){return re(N)},"data-autolog":"text=".concat(R.default.t("Delete walkthrough node"))}),ie&&ie==="RUNNING"&&n.default.createElement("div",null)),!ve&&!De&&n.default.createElement("div",{className:fe},o===s.NORMAL||o===s.TASK?n.default.createElement(n.default.Fragment,null,n.default.createElement("div",{className:l.default.arrowLineTail}),n.default.createElement(C.default,{type:"caret-right",size:"small"})):null,o===s.NORMAL&&w&&n.default.createElement(c.default,{className:l.default.iconTail,type:"icon-tianjia2",onClick:function(){return D(v,v.next)},"data-autolog":"text=".concat(R.default.t("Add a walkthrough node"))})),De&&w&&n.default.createElement("div",{className:fe},o===s.NORMAL||o===s.TASK?n.default.createElement(n.default.Fragment,null,n.default.createElement("div",{className:l.default.arrowLineTail}),n.default.createElement(C.default,{type:"caret-right",size:"small"})):null,n.default.createElement(c.default,{className:l.default.iconTail,type:"icon-tianjia2",onClick:function(){return D(v,v.next)},"data-autolog":"text=".concat(R.default.t("Add a walkthrough node"))})))}})},17640:function(V,f,e){var A,x,u,B=e(67394);(function(i,d){if(!0)!(x=[f],A=d,u=typeof A=="function"?A.apply(f,x):A,u!==void 0&&(V.exports=u));else var M})(typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:this,function(i){"use strict";B(i,"__esModule",{value:!0}),i.handleIsAdmin=void 0;var d=function(y,E){return(y&E)===E};i.handleIsAdmin=d})},94539:(V,f,e)=>{"use strict";e.d(f,{Z:()=>d});var A=e(60994),x=e.n(A),u=e(93476),B=e.n(u),i=B()(x());i.push([V.id,`.index__container__-R1ZY {\r
  max-width: 968px;\r
  overflow: hidden;\r
}\r
\r
.index__searchBox__4itYE {\r
  position: relative;\r
  width: 950px;\r
  margin-bottom: 22px;\r
}\r
\r
.index__searchBox__4itYE .index__icon__Yrchm {\r
  position: absolute;\r
  opacity: 0.5;\r
  color: #888;\r
  top: 8px;\r
  left: 17px;\r
}\r
\r
.index__search__PJKPg {\r
  width: 100%;\r
}\r
\r
.index__search__PJKPg .next-input input {\r
    padding-left: 33px;\r
  }\r
\r
.index__search__PJKPg .next-input-group .next-input:hover {\r
    position: inherit !important;\r
  }\r
\r
.index__search__PJKPg.next-search-btn {\r
  font-size: 12px !important;\r
}\r
\r
.index__contentBox__lWDuC {\r
  /* margin-top: 22px; */\r
  height: 510px;\r
  /* max-height: 530px; */\r
  display: flex;\r
  flex-direction: row;\r
}\r
\r
.index__categoryBox__PsQka {\r
  width: 160px;\r
  min-width: 160px;\r
  overflow-x: hidden;\r
  overflow-y: auto;\r
}\r
\r
.index__categoryBox__PsQka .index__categoryList__8lpnx {\r
  height: 100%;\r
  padding-top: 0;\r
  border: none;\r
  border-right: 1px solid #dedede;\r
}\r
\r
.index__categoryBox__PsQka .index__categoryList__8lpnx.next-selected {\r
  border-right: 2px solid #0070cc;\r
}\r
\r
.index__categoryBox__PsQka .index__categoryList__8lpnx li.index__selectedCate__fNyLs {\r
  border-right: 2px solid #0070cc;\r
}\r
\r
.index__clearSearch__GLS\\+S {\r
  margin-left: 10px;\r
  color: #0070cc;\r
  cursor: pointer;\r
}\r
\r
.index__listBox__2s\\+St {\r
  position: relative;\r
  overflow: hidden;\r
  flex-grow: 1;\r
  padding-left: 4px;\r
}\r
\r
.index__listBox__2s\\+St .index__functionList__8\\+lTI {\r
    list-style: none;\r
    overflow: hidden;\r
    min-height: 224px;\r
  }\r
\r
.index__listBox__2s\\+St .index__functionList__8\\+lTI li {\r
    width: 257px;\r
    height: 40px;\r
    font-size: 12px;\r
    line-height: 40px;\r
    text-align: center;\r
    border: 1px solid #dedede;\r
    margin: 0 8px 16px 0;\r
    cursor: pointer;\r
    float: left;\r
  }\r
\r
.index__listBox__2s\\+St .next-pagination {\r
    float: none;\r
    text-align: right;\r
    margin-bottom: 8px;\r
    margin-top: -8px;\r
    margin-right: 17px;\r
  }\r
\r
.index__listBox__2s\\+St .index__functionList__8\\+lTI li.index__selectedFunc__SnSVV {\r
  color: #0070cc;\r
  border: 1px solid #0070cc;\r
}\r
\r
.index__loading__IvmoD {\r
  width: 100%;\r
}\r
\r
.index__descriptionBox__KVOZB {\r
  margin-right: 16px;\r
  padding: 5px;\r
  height: 220px;\r
  overflow-y: auto;\r
  font-size: 12px;\r
  color: #000;\r
  letter-spacing: 0;\r
  line-height: 18px;\r
  border: 1px solid #dedede;\r
}\r
\r
.index__btnRow__f0\\+Nv {\r
  text-align: right;\r
}\r
\r
.index__btn__5PaRI {\r
  margin-left: 8px;\r
}\r
`,"",{version:3,sources:["webpack://./pages/Chaos/Experiment/common/AddFunction/index.css"],names:[],mappings:"AAAA;EACE,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,WAAW;EACX,QAAQ;EACR,UAAU;AACZ;;AAEA;EACE,WAAW;AAOb;;AANE;IACE,kBAAkB;EACpB;;AACA;IACE,4BAA4B;EAC9B;;AAGF;EACE,0BAA0B;AAC5B;;AAEA;EACE,sBAAsB;EACtB,aAAa;EACb,uBAAuB;EACvB,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,gBAAgB;EAChB,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,cAAc;EACd,YAAY;EACZ,+BAA+B;AACjC;;AAEA;EACE,+BAA+B;AACjC;;AAEA;EACE,+BAA+B;AACjC;;AAEA;EACE,iBAAiB;EACjB,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,YAAY;EACZ,iBAAiB;AA2BnB;;AAzBE;IACE,gBAAgB;IAChB,gBAAgB;IAChB,iBAAiB;EACnB;;AAEA;IACE,YAAY;IACZ,YAAY;IACZ,eAAe;IACf,iBAAiB;IACjB,kBAAkB;IAClB,yBAAyB;IACzB,oBAAoB;IACpB,eAAe;IACf,WAAW;EACb;;AAEA;IACE,WAAW;IACX,iBAAiB;IACjB,kBAAkB;IAClB,gBAAgB;IAChB,kBAAkB;EACpB;;AAGF;EACE,cAAc;EACd,yBAAyB;AAC3B;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,gBAAgB;EAChB,eAAe;EACf,WAAW;EACX,iBAAiB;EACjB,iBAAiB;EACjB,yBAAyB;AAC3B;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;AAClB",sourcesContent:[`.container {\r
  max-width: 968px;\r
  overflow: hidden;\r
}\r
\r
.searchBox {\r
  position: relative;\r
  width: 950px;\r
  margin-bottom: 22px;\r
}\r
\r
.searchBox .icon {\r
  position: absolute;\r
  opacity: 0.5;\r
  color: #888;\r
  top: 8px;\r
  left: 17px;\r
}\r
\r
.search {\r
  width: 100%;\r
  :global(.next-input input) {\r
    padding-left: 33px;\r
  }\r
  :global(.next-input-group .next-input:hover) {\r
    position: inherit !important;\r
  }\r
}\r
\r
.search:global(.next-search-btn) {\r
  font-size: 12px !important;\r
}\r
\r
.contentBox {\r
  /* margin-top: 22px; */\r
  height: 510px;\r
  /* max-height: 530px; */\r
  display: flex;\r
  flex-direction: row;\r
}\r
\r
.categoryBox {\r
  width: 160px;\r
  min-width: 160px;\r
  overflow-x: hidden;\r
  overflow-y: auto;\r
}\r
\r
.categoryBox .categoryList {\r
  height: 100%;\r
  padding-top: 0;\r
  border: none;\r
  border-right: 1px solid #dedede;\r
}\r
\r
.categoryBox .categoryList:global(.next-selected) {\r
  border-right: 2px solid #0070cc;\r
}\r
\r
.categoryBox .categoryList li.selectedCate {\r
  border-right: 2px solid #0070cc;\r
}\r
\r
.clearSearch {\r
  margin-left: 10px;\r
  color: #0070cc;\r
  cursor: pointer;\r
}\r
\r
.listBox {\r
  position: relative;\r
  overflow: hidden;\r
  flex-grow: 1;\r
  padding-left: 4px;\r
\r
  .functionList {\r
    list-style: none;\r
    overflow: hidden;\r
    min-height: 224px;\r
  }\r
\r
  .functionList li {\r
    width: 257px;\r
    height: 40px;\r
    font-size: 12px;\r
    line-height: 40px;\r
    text-align: center;\r
    border: 1px solid #dedede;\r
    margin: 0 8px 16px 0;\r
    cursor: pointer;\r
    float: left;\r
  }\r
\r
  :global(.next-pagination) {\r
    float: none;\r
    text-align: right;\r
    margin-bottom: 8px;\r
    margin-top: -8px;\r
    margin-right: 17px;\r
  }\r
}\r
\r
.listBox .functionList li.selectedFunc {\r
  color: #0070cc;\r
  border: 1px solid #0070cc;\r
}\r
\r
.loading {\r
  width: 100%;\r
}\r
\r
.descriptionBox {\r
  margin-right: 16px;\r
  padding: 5px;\r
  height: 220px;\r
  overflow-y: auto;\r
  font-size: 12px;\r
  color: #000;\r
  letter-spacing: 0;\r
  line-height: 18px;\r
  border: 1px solid #dedede;\r
}\r
\r
.btnRow {\r
  text-align: right;\r
}\r
\r
.btn {\r
  margin-left: 8px;\r
}\r
`],sourceRoot:""}]),i.locals={container:"index__container__-R1ZY",searchBox:"index__searchBox__4itYE",icon:"index__icon__Yrchm",search:"index__search__PJKPg",contentBox:"index__contentBox__lWDuC",categoryBox:"index__categoryBox__PsQka",categoryList:"index__categoryList__8lpnx",selectedCate:"index__selectedCate__fNyLs",clearSearch:"index__clearSearch__GLS+S",listBox:"index__listBox__2s+St",functionList:"index__functionList__8+lTI",selectedFunc:"index__selectedFunc__SnSVV",loading:"index__loading__IvmoD",descriptionBox:"index__descriptionBox__KVOZB",btnRow:"index__btnRow__f0+Nv",btn:"index__btn__5PaRI"};const d=i},87223:(V,f,e)=>{"use strict";e.d(f,{Z:()=>d});var A=e(60994),x=e.n(A),u=e(93476),B=e.n(u),i=B()(x());i.push([V.id,`.index__boxContainer__yI63h, .index__boxContainerReadOnly__rLzIJ {\r
  display: flex;\r
  background-color: #f7f7f7;\r
  margin-right: 70px;\r
}\r
\r
.index__boxContainerReadOnly__rLzIJ {\r
  background-color: transparent;\r
}\r
\r
.index__boxContainerReadOnly__rLzIJ .index__box__9KijU {\r
  padding: 0;\r
}\r
\r
.index__boxContainer__yI63h {\r
  margin-top: 20px;\r
}\r
\r
.index__box__9KijU {\r
  padding: 24px 23px;\r
  display: flex;\r
  flex-grow: 1;\r
  flex-direction: row;\r
  flex-wrap: wrap;\r
}\r
\r
.index__deleteFlowBox__AXAIQ {\r
  width: 32px;\r
  display: flex;\r
  justify-content: center;\r
  align-items: center;\r
  cursor: pointer;\r
  flex-shrink: 0;\r
}`,"",{version:3,sources:["webpack://./pages/Chaos/common/MiniFlow/index.css"],names:[],mappings:"AAAA;EACE,aAAa;EACb,yBAAyB;EACzB,kBAAkB;AACpB;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,YAAY;EACZ,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;EACf,cAAc;AAChB",sourcesContent:[`.boxContainer, .boxContainerReadOnly {\r
  display: flex;\r
  background-color: #f7f7f7;\r
  margin-right: 70px;\r
}\r
\r
.boxContainerReadOnly {\r
  background-color: transparent;\r
}\r
\r
.boxContainerReadOnly .box {\r
  padding: 0;\r
}\r
\r
.boxContainer {\r
  margin-top: 20px;\r
}\r
\r
.box {\r
  padding: 24px 23px;\r
  display: flex;\r
  flex-grow: 1;\r
  flex-direction: row;\r
  flex-wrap: wrap;\r
}\r
\r
.deleteFlowBox {\r
  width: 32px;\r
  display: flex;\r
  justify-content: center;\r
  align-items: center;\r
  cursor: pointer;\r
  flex-shrink: 0;\r
}`],sourceRoot:""}]),i.locals={boxContainer:"index__boxContainer__yI63h",boxContainerReadOnly:"index__boxContainerReadOnly__rLzIJ",box:"index__box__9KijU",deleteFlowBox:"index__deleteFlowBox__AXAIQ"};const d=i},7137:(V,f,e)=>{"use strict";e.d(f,{Z:()=>d});var A=e(60994),x=e.n(A),u=e(93476),B=e.n(u),i=B()(x());i.push([V.id,`.index__normalNodeContainer__Vy6PM,\r
.index__globalNodeContainer__c2iqs {\r
  position: relative;\r
  display: flex;\r
  flex-direction: row;\r
  justify-content: flex-start;\r
  cursor: pointer;\r
}\r
\r
.index__globalNodeContainer__c2iqs {\r
  margin-right: 29px;\r
  margin-bottom: 8px;\r
}\r
\r
.index__nodeBox__L575N {\r
  transition: all .3s;\r
  position: relative;\r
  padding: 5px 0;\r
  width: 244px;\r
  height: 64px;\r
  border: 1px solid #dedede;\r
  border-radius: 3px;\r
  text-align: center;\r
  background: #fff;\r
  position: relative;\r
  overflow: hidden;\r
}\r
\r
.index__nodeBox__L575N .index__topLayer__YoyPy, .index__bottomLayer__EGcfl {\r
  height: 50%;\r
  overflow: hidden;\r
  display: flex;\r
  justify-content: space-between;\r
  align-items: center;\r
}\r
\r
.index__nodeBox__L575N:hover,\r
.index__selectedNode__NNk6g {\r
  border: 1px solid #0070CC;\r
  box-shadow: 0 0 4px 0 rgba(0,112,204,0.75);\r
}\r
\r
.index__errorNode__SEDtu,\r
.index__errorNode__SEDtu:hover {\r
  border: 1px solid #D93026;\r
  box-shadow: 0 0 4px 0 rgba(217,48,38,0.75);\r
}\r
\r
.index__nodeBox__L575N .next-icon-ashbin {\r
  display: none;\r
}\r
.index__nodeBox__L575N:hover .next-icon-ashbin {\r
  display: block;\r
}\r
\r
.index__selectedTriangle__Oqr\\+U {\r
  position: absolute;\r
  left: 0;\r
  bottom: 0;\r
  width: 0;\r
  height: 0;\r
  border-style: solid;\r
  border-width: 10px 0 0 10px;\r
  border-color: transparent transparent transparent #0070cc;\r
}\r
\r
.index__Icon__xQT\\+I {\r
  margin-right: 8px;\r
}\r
\r
.index__topLeftBox__9moQS,\r
.index__topRightBox__4A70p,\r
.index__bottomLeftBox__nTv\\+6,\r
.index__bottomRightBox__RUa5D {\r
  display: flex;\r
  align-items: center;\r
  margin: 0;\r
  height: 100%;\r
}\r
\r
.index__topLeftBox__9moQS .index__stageIcon__tpXvL {\r
  margin-left: 12px;\r
  margin-right: 4px;\r
  width: 10px;\r
  height: 10px;\r
  border-radius: 5px;\r
}\r
\r
.index__topLeftBox__9moQS .index__nodeName__wTYa9 {\r
  display: block;\r
  max-width: 140px;\r
  color: #333;\r
  overflow: hidden;\r
  text-overflow: ellipsis;\r
  white-space: nowrap;\r
}\r
\r
.index__bottomLeftBox__nTv\\+6 .index__parameterInfo__96vV4 {\r
  width: 100px;\r
  overflow: hidden;\r
  margin-left: 12px;\r
  color: #888;\r
  text-overflow: ellipsis;\r
  white-space: nowrap;\r
}\r
\r
.index__firstBox__pQ99F {\r
  width: 16px;\r
  min-width: 16px;\r
}\r
\r
.index__headBox__qFHO8, .index__tailBox__9yi1O {\r
  position: relative;\r
  height: 64px;\r
  display: flex;\r
  flex-direction: row;\r
  align-items: center;\r
}\r
\r
.index__iconHead__vySzz, .index__iconTail__LXrO0, .index__switchArrowIcon__FaGZ0 {\r
  position: absolute;\r
  top: 25px;\r
  width: 14px;\r
  height: 14px;\r
  cursor: pointer;\r
  color: #0070cc;\r
  font-weight: bold;\r
}\r
\r
.index__iconHead__vySzz {\r
  left: -6px;\r
}\r
\r
.index__iconTail__LXrO0 {\r
  left: 15px;\r
}\r
\r
.index__tailBox__9yi1O,\r
.index__tailBoxReadOnly__0sFpl {\r
  display: flex;\r
  justify-content: flex-start;\r
  align-items: center;\r
}\r
\r
.index__tailBox__9yi1O,\r
.index__tailBoxReadOnly__0sFpl .next-icon-caret-right {\r
  color: #ebebeb;\r
  margin-right: -5px;\r
}\r
\r
.index__tailBox__9yi1O {\r
  width: 48px;\r
}\r
\r
.index__tailBoxReadOnly__0sFpl {\r
  width: 29px;\r
}\r
\r
.index__circle__vnKfM {\r
  margin-left: -3px;\r
  width: 5px;\r
  height: 5px;\r
  border-radius: 5px;\r
  background-color: #fff;\r
  border: 1px solid #dedede;\r
}\r
\r
.index__lastCircle__2Ijzo {\r
  position: absolute;\r
  left: 124px;\r
  bottom: -2px;\r
}\r
\r
.index__arrowLineHead__IKRb5,\r
.index__arrowLineTail__Qew1w {\r
  height: 2px;\r
  background-color: #ebebeb;\r
}\r
\r
.index__arrowLineHead__IKRb5 {\r
  width: 16px;\r
}\r
\r
.index__arrowLineTail__Qew1w {\r
  flex-grow: 1;\r
  margin-right: -5px;\r
}\r
\r
.index__switchArrowContainer__g-hjn {\r
  position: relative;\r
  height: 38px;\r
  display: flex;\r
  flex-direction: row;\r
  align-items: center;\r
}\r
\r
.index__switchArrowDownContainer__YPtrF {\r
  position: relative;\r
  width: 2px;\r
  height: 100%;\r
}\r
\r
.index__switchArrowDown__9Y1gq, .index__switchArrowUp__S4BW8 {\r
  position: absolute;\r
  left: 0;\r
  width: 2px;\r
  height: 20px;\r
  background-color: #ebebeb;\r
}\r
\r
.index__switchArrowDown__9Y1gq {\r
  bottom: 0;\r
}\r
\r
.index__switchArrowUp__S4BW8 {\r
  top: 0;\r
}\r
\r
.index__switchArrowDownIcon__zWpXt {\r
  position: absolute;\r
  left: -7px;\r
  bottom: -3px;\r
  color: #ebebeb;\r
}\r
\r
.index__switchArrowDownIcon__zWpXt:before {\r
  height: 16px !important;\r
}\r
\r
.index__switchArrowLine__wWH4C {\r
  height: 2px;\r
  background-color: #ebebeb;\r
}\r
\r
.index__switchArrowUpContainer__6UWN4 {\r
  position: relative;\r
  width: 1px;\r
  height: 100%;\r
}\r
\r
.index__switchArrowIcon__FaGZ0 {\r
  top: 12px;\r
  left: -7px;\r
}\r
\r
.index__groupOrderBox__3NNud {\r
  margin-right: 12px;\r
  display: flex;\r
  justify-content: center;\r
  align-items: center;\r
  font-size: 12px;\r
  width: 45px;\r
  height: 20px;\r
  border-radius: 10px;\r
  background-color: #ebebeb;\r
  color: #c1c1c1;\r
}\r
\r
.index__action__MfFWc {\r
  font-size: 12px;\r
  color: #0070CC;\r
  cursor: pointer;\r
}\r
\r
.index__userCheck__yrAUG {\r
  font-size: 12px;\r
  color: #0070CC;\r
  cursor: pointer;\r
  z-index: 99;\r
}\r
\r
.index__userAction__dOpzq {\r
  margin-left: 5px;\r
  margin-right: 10px;\r
}\r
\r
.index__userAction__dOpzq .index__contiueTryIcon__19jn4 {\r
    margin-right: 10px;\r
  }\r
\r
/* \u6267\u884C\u8282\u70B9\u6837\u5F0F */\r
.index__activityRunning__zKrBm {\r
  border: 1px solid #DEDEDE;\r
}\r
\r
.index__activityRejected__GBzVm {\r
  border: 1px solid #86D8F8;\r
}\r
\r
.index__activitySuccess__p4-Rg {\r
  border: 1px solid #1E8E3E;\r
}\r
\r
.index__activityFailed__RckCx {\r
  border: 1px solid #D93026;\r
}`,"",{version:3,sources:["webpack://./pages/Chaos/common/Node/index.css"],names:[],mappings:"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",sourcesContent:[`.normalNodeContainer,\r
.globalNodeContainer {\r
  position: relative;\r
  display: flex;\r
  flex-direction: row;\r
  justify-content: flex-start;\r
  cursor: pointer;\r
}\r
\r
.globalNodeContainer {\r
  margin-right: 29px;\r
  margin-bottom: 8px;\r
}\r
\r
.nodeBox {\r
  transition: all .3s;\r
  position: relative;\r
  padding: 5px 0;\r
  width: 244px;\r
  height: 64px;\r
  border: 1px solid #dedede;\r
  border-radius: 3px;\r
  text-align: center;\r
  background: #fff;\r
  position: relative;\r
  overflow: hidden;\r
}\r
\r
.nodeBox .topLayer, .bottomLayer {\r
  height: 50%;\r
  overflow: hidden;\r
  display: flex;\r
  justify-content: space-between;\r
  align-items: center;\r
}\r
\r
.nodeBox:hover,\r
.selectedNode {\r
  border: 1px solid #0070CC;\r
  box-shadow: 0 0 4px 0 rgba(0,112,204,0.75);\r
}\r
\r
.errorNode,\r
.errorNode:hover {\r
  border: 1px solid #D93026;\r
  box-shadow: 0 0 4px 0 rgba(217,48,38,0.75);\r
}\r
\r
.nodeBox :global(.next-icon-ashbin) {\r
  display: none;\r
}\r
.nodeBox:hover :global(.next-icon-ashbin) {\r
  display: block;\r
}\r
\r
.selectedTriangle {\r
  position: absolute;\r
  left: 0;\r
  bottom: 0;\r
  width: 0;\r
  height: 0;\r
  border-style: solid;\r
  border-width: 10px 0 0 10px;\r
  border-color: transparent transparent transparent #0070cc;\r
}\r
\r
.Icon {\r
  margin-right: 8px;\r
}\r
\r
.topLeftBox,\r
.topRightBox,\r
.bottomLeftBox,\r
.bottomRightBox {\r
  display: flex;\r
  align-items: center;\r
  margin: 0;\r
  height: 100%;\r
}\r
\r
.topLeftBox .stageIcon {\r
  margin-left: 12px;\r
  margin-right: 4px;\r
  width: 10px;\r
  height: 10px;\r
  border-radius: 5px;\r
}\r
\r
.topLeftBox .nodeName {\r
  display: block;\r
  max-width: 140px;\r
  color: #333;\r
  overflow: hidden;\r
  text-overflow: ellipsis;\r
  white-space: nowrap;\r
}\r
\r
.bottomLeftBox .parameterInfo {\r
  width: 100px;\r
  overflow: hidden;\r
  margin-left: 12px;\r
  color: #888;\r
  text-overflow: ellipsis;\r
  white-space: nowrap;\r
}\r
\r
.firstBox {\r
  width: 16px;\r
  min-width: 16px;\r
}\r
\r
.headBox, .tailBox {\r
  position: relative;\r
  height: 64px;\r
  display: flex;\r
  flex-direction: row;\r
  align-items: center;\r
}\r
\r
.iconHead, .iconTail, .switchArrowIcon {\r
  position: absolute;\r
  top: 25px;\r
  width: 14px;\r
  height: 14px;\r
  cursor: pointer;\r
  color: #0070cc;\r
  font-weight: bold;\r
}\r
\r
.iconHead {\r
  left: -6px;\r
}\r
\r
.iconTail {\r
  left: 15px;\r
}\r
\r
.tailBox,\r
.tailBoxReadOnly {\r
  display: flex;\r
  justify-content: flex-start;\r
  align-items: center;\r
}\r
\r
.tailBox,\r
.tailBoxReadOnly :global(.next-icon-caret-right) {\r
  color: #ebebeb;\r
  margin-right: -5px;\r
}\r
\r
.tailBox {\r
  width: 48px;\r
}\r
\r
.tailBoxReadOnly {\r
  width: 29px;\r
}\r
\r
.circle {\r
  margin-left: -3px;\r
  width: 5px;\r
  height: 5px;\r
  border-radius: 5px;\r
  background-color: #fff;\r
  border: 1px solid #dedede;\r
}\r
\r
.lastCircle {\r
  position: absolute;\r
  left: 124px;\r
  bottom: -2px;\r
}\r
\r
.arrowLineHead,\r
.arrowLineTail {\r
  height: 2px;\r
  background-color: #ebebeb;\r
}\r
\r
.arrowLineHead {\r
  width: 16px;\r
}\r
\r
.arrowLineTail {\r
  flex-grow: 1;\r
  margin-right: -5px;\r
}\r
\r
.switchArrowContainer {\r
  position: relative;\r
  height: 38px;\r
  display: flex;\r
  flex-direction: row;\r
  align-items: center;\r
}\r
\r
.switchArrowDownContainer {\r
  position: relative;\r
  width: 2px;\r
  height: 100%;\r
}\r
\r
.switchArrowDown, .switchArrowUp {\r
  position: absolute;\r
  left: 0;\r
  width: 2px;\r
  height: 20px;\r
  background-color: #ebebeb;\r
}\r
\r
.switchArrowDown {\r
  bottom: 0;\r
}\r
\r
.switchArrowUp {\r
  top: 0;\r
}\r
\r
.switchArrowDownIcon {\r
  position: absolute;\r
  left: -7px;\r
  bottom: -3px;\r
  color: #ebebeb;\r
}\r
\r
.switchArrowDownIcon:before {\r
  height: 16px !important;\r
}\r
\r
.switchArrowLine {\r
  height: 2px;\r
  background-color: #ebebeb;\r
}\r
\r
.switchArrowUpContainer {\r
  position: relative;\r
  width: 1px;\r
  height: 100%;\r
}\r
\r
.switchArrowIcon {\r
  top: 12px;\r
  left: -7px;\r
}\r
\r
.groupOrderBox {\r
  margin-right: 12px;\r
  display: flex;\r
  justify-content: center;\r
  align-items: center;\r
  font-size: 12px;\r
  width: 45px;\r
  height: 20px;\r
  border-radius: 10px;\r
  background-color: #ebebeb;\r
  color: #c1c1c1;\r
}\r
\r
.action {\r
  font-size: 12px;\r
  color: #0070CC;\r
  cursor: pointer;\r
}\r
\r
.userCheck {\r
  font-size: 12px;\r
  color: #0070CC;\r
  cursor: pointer;\r
  z-index: 99;\r
}\r
\r
.userAction {\r
  margin-left: 5px;\r
  margin-right: 10px;\r
\r
  .contiueTryIcon {\r
    margin-right: 10px;\r
  }\r
}\r
\r
/* \u6267\u884C\u8282\u70B9\u6837\u5F0F */\r
.activityRunning {\r
  border: 1px solid #DEDEDE;\r
}\r
\r
.activityRejected {\r
  border: 1px solid #86D8F8;\r
}\r
\r
.activitySuccess {\r
  border: 1px solid #1E8E3E;\r
}\r
\r
.activityFailed {\r
  border: 1px solid #D93026;\r
}`],sourceRoot:""}]),i.locals={normalNodeContainer:"index__normalNodeContainer__Vy6PM",globalNodeContainer:"index__globalNodeContainer__c2iqs",nodeBox:"index__nodeBox__L575N",topLayer:"index__topLayer__YoyPy",bottomLayer:"index__bottomLayer__EGcfl",selectedNode:"index__selectedNode__NNk6g",errorNode:"index__errorNode__SEDtu",selectedTriangle:"index__selectedTriangle__Oqr+U",Icon:"index__Icon__xQT+I",topLeftBox:"index__topLeftBox__9moQS",topRightBox:"index__topRightBox__4A70p",bottomLeftBox:"index__bottomLeftBox__nTv+6",bottomRightBox:"index__bottomRightBox__RUa5D",stageIcon:"index__stageIcon__tpXvL",nodeName:"index__nodeName__wTYa9",parameterInfo:"index__parameterInfo__96vV4",firstBox:"index__firstBox__pQ99F",headBox:"index__headBox__qFHO8",tailBox:"index__tailBox__9yi1O",iconHead:"index__iconHead__vySzz",iconTail:"index__iconTail__LXrO0",switchArrowIcon:"index__switchArrowIcon__FaGZ0",tailBoxReadOnly:"index__tailBoxReadOnly__0sFpl",circle:"index__circle__vnKfM",lastCircle:"index__lastCircle__2Ijzo",arrowLineHead:"index__arrowLineHead__IKRb5",arrowLineTail:"index__arrowLineTail__Qew1w",switchArrowContainer:"index__switchArrowContainer__g-hjn",switchArrowDownContainer:"index__switchArrowDownContainer__YPtrF",switchArrowDown:"index__switchArrowDown__9Y1gq",switchArrowUp:"index__switchArrowUp__S4BW8",switchArrowDownIcon:"index__switchArrowDownIcon__zWpXt",switchArrowLine:"index__switchArrowLine__wWH4C",switchArrowUpContainer:"index__switchArrowUpContainer__6UWN4",groupOrderBox:"index__groupOrderBox__3NNud",action:"index__action__MfFWc",userCheck:"index__userCheck__yrAUG",userAction:"index__userAction__dOpzq",contiueTryIcon:"index__contiueTryIcon__19jn4",activityRunning:"index__activityRunning__zKrBm",activityRejected:"index__activityRejected__GBzVm",activitySuccess:"index__activitySuccess__p4-Rg",activityFailed:"index__activityFailed__RckCx"};const d=i},54581:(V,f,e)=>{"use strict";e.r(f),e.d(f,{default:()=>d});var A=e(1892),x=e.n(A),u=e(94539),B={};B.insert="head",B.singleton=!1;var i=x()(u.Z,B);const d=u.Z.locals||{}},39725:(V,f,e)=>{"use strict";e.r(f),e.d(f,{default:()=>d});var A=e(1892),x=e.n(A),u=e(87223),B={};B.insert="head",B.singleton=!1;var i=x()(u.Z,B);const d=u.Z.locals||{}},1918:(V,f,e)=>{"use strict";e.r(f),e.d(f,{default:()=>d});var A=e(1892),x=e.n(A),u=e(7137),B={};B.insert="head",B.singleton=!1;var i=x()(u.Z,B);const d=u.Z.locals||{}}}]);

//# sourceMappingURL=313.bundle.js.map