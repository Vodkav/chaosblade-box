(self.webpackChunk=self.webpackChunk||[]).push([[163],{4163:function(O,A,e){var _,h,m,c=e(24596),u=e(67394),g=e(93168),N=e(23587),j=e(83452),T=e(95315),S=e(63774),w=e(92937);(function(M,a){if(!0)!(h=[A,e(77809),e(81853),e(57379),e(91714),e(47701),e(87286),e(48492),e(94518),e(27378),e(68250),e(93525),e(98784),e(14798),e(7609),e(96291),e(99328),e(14870),e(42058)],_=a,m=typeof _=="function"?_.apply(A,h):_,m!==void 0&&(O.exports=m));else var D})(typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:this,function(M,a,D,l,W,C,B,Z,Y,o,H,Q,t,f,p,I,y,P,U){"use strict";var x=e(67971);u(M,"__esModule",{value:!0}),M.default=void 0,a=x(a),D=x(D),l=x(l),W=x(W),C=x(C),B=x(B),Z=x(Z),Y=x(Y),o=ee(o),H=x(H),Q=x(Q),t=x(t),f=x(f),p=x(p);function b(n){if(typeof g!="function")return null;var r=new g,i=new g;return(b=function(F){return F?i:r})(n)}function ee(n,r){if(!r&&n&&n.__esModule)return n;if(n===null||c(n)!=="object"&&typeof n!="function")return{default:n};var i=b(r);if(i&&i.has(n))return i.get(n);var d={},F=u&&N;for(var K in n)if(K!=="default"&&Object.prototype.hasOwnProperty.call(n,K)){var X=F?N(n,K):null;X&&(X.get||X.set)?u(d,K,X):d[K]=n[K]}return d.default=n,i&&i.set(n,d),d}function G(n,r){var i=j(n);if(T){var d=T(n);r&&(d=d.filter(function(F){return N(n,F).enumerable})),i.push.apply(i,d)}return i}function V(n){for(var r=1;r<arguments.length;r++){var i=arguments[r]!=null?arguments[r]:{};r%2?G(Object(i),!0).forEach(function(d){(0,l.default)(n,d,i[d])}):S?w(n,S(i)):G(Object(i)).forEach(function(d){u(n,d,N(i,d))})}return n}var J=C.default.Item,z=W.default.Item,L=function(){var r=(0,P.useDispatch)(),i=(0,U.useHistory)(),d=(0,P.useSelector)(function(E){return V(V({},E.experimentEditor),E.experimentDataSource)}),F=d.experiment,K=d.tags,X=(0,o.useState)(0),ae=(0,D.default)(X,2),$=ae[0],oe=ae[1],_e=(0,o.useState)(null),ie=(0,D.default)(_e,2),le=ie[0],me=ie[1],pe=(0,o.useState)(!1),de=(0,D.default)(pe,2),te=de[0],se=de[1],k=(0,y.parseQuery)();(0,o.useEffect)(function(){if(r.pageHeader.setTitle(f.default.t("Walkthrough configuration").toString()),r.pageHeader.setBreadCrumbItems(I.CHAOS_DEFAULT_BREADCRUMB_ITEM.concat([{key:"workspace",value:f.default.t("Space management").toString(),path:"/chaos/workspace/list"},{key:"experiment_editor",value:f.default.t("Walkthrough configuration").toString(),path:"/chaos/experiment/edtior"}])),!t.default.isEmpty(k)){r.experimentEditor.setClearExperiment();var E=k.id,q=k.expertiseId,ne=k.code;t.default.isEmpty(E)?q?(r.experimentEditor.setClearExperiment(),(0,a.default)(regeneratorRuntime.mark(function v(){return regeneratorRuntime.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,r.experimentEditor.getExperimentByExpertise({expertise_id:q});case 2:case"end":return s.stop()}},v)}))()):ne&&(r.experimentEditor.setClearExperiment(),(0,a.default)(regeneratorRuntime.mark(function v(){return regeneratorRuntime.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,r.experimentEditor.getExperimentByAppCode({appCode:ne});case 2:case"end":return s.stop()}},v)}))()):(me(E),se(!0),(0,a.default)(regeneratorRuntime.mark(function v(){return regeneratorRuntime.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,r.experimentEditor.getExperimentBaseInfo({experimentId:E});case 2:case"end":return s.stop()}},v)}))(),(0,a.default)(regeneratorRuntime.mark(function v(){return regeneratorRuntime.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,r.experimentEditor.getExperiment({experimentId:E},function(Be){var ve=Be.flowInfo;t.default.isEmpty(ve)||se(!0)});case 2:case"end":return s.stop()}},v)}))())}},[]);function Ee(){return o.default.createElement(Z.default,{baseInfo:t.default.get(F,"baseInfo",{}),onEditExperimentBaseInfo:Ae})}function Ae(){(0,y.pushUrl)(i,"/chaos/baseInfo/editor",{pass:"detail"})}function ce(E){r.experimentEditor.setUpdateBaseInfo(E)}function ge(E){(0,a.default)(regeneratorRuntime.mark(function q(){return regeneratorRuntime.wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,r.experimentDataSource.getTags(E);case 2:case"end":return v.stop()}},q)}))()}function xe(){ge({key:"",type:0})}function ue(){var E=$+1;oe(E>2?2:E)}function he(){var E=$-1;oe(E<0?0:E)}function fe(){r.experimentEditor.setClearExperiment(),(0,y.pushUrl)(i,"/chaos/experiment/detail")}function Ce(){if($===0)return o.default.createElement(H.default,{isEdit:te,onNext:ue,onBack:fe,isExpertise:!1});if($===1)return o.default.createElement(Q.default,{experimentId:le,isEdit:te,onNext:ue,onPrev:he,onBack:fe,isExpertise:!1})}return o.default.createElement("div",{className:p.default.experimentEditor},te?Ee():o.default.createElement(B.default,{onUpdateBasinfo:ce,tags:K,data:t.default.get(F,"baseInfo",{}),disabled:$===2,onFocusTags:xe}),o.default.createElement(C.default,{className:p.default.tabs,shape:"wrapped"},o.default.createElement(J,{title:f.default.t("Configure").toString()},o.default.createElement("div",{className:p.default.configureItem},o.default.createElement("div",null,o.default.createElement(W.default,{current:$,shape:"circle",labelPlacement:"hoz",className:p.default.steps},o.default.createElement(z,{title:f.default.t("Drill object").toString(),content:f.default.t("Applications and failures").toString()}),o.default.createElement(z,{title:f.default.t("Global configuration").toString(),content:f.default.t("Global parameter settings").toString()})),Ce()))),o.default.createElement(J,{title:f.default.t("Record").toString()},o.default.createElement(Y.default,{experimentId:le}))))},R=L;M.default=R})},87286:function(O,A,e){var _,h,m,c=e(24596),u=e(67394),g=e(93168),N=e(23587);(function(j,T){if(!0)!(h=[A,e(28757),e(8583),e(15286),e(81853),e(27378),e(98784),e(14798),e(68055),e(17268)],_=T,m=typeof _=="function"?_.apply(A,h):_,m!==void 0&&(O.exports=m));else var S})(typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:this,function(j,T,S,w,M,a,D,l,W,C){"use strict";var B=e(67971);u(j,"__esModule",{value:!0}),j.default=void 0,T=B(T),S=B(S),w=B(w),M=B(M),a=Y(a),D=B(D),l=B(l),W=B(W),C=B(C);function Z(t){if(typeof g!="function")return null;var f=new g,p=new g;return(Z=function(y){return y?p:f})(t)}function Y(t,f){if(!f&&t&&t.__esModule)return t;if(t===null||c(t)!=="object"&&typeof t!="function")return{default:t};var p=Z(f);if(p&&p.has(t))return p.get(t);var I={},y=u&&N;for(var P in t)if(P!=="default"&&Object.prototype.hasOwnProperty.call(t,P)){var U=y?N(t,P):null;U&&(U.get||U.set)?u(I,P,U):I[P]=t[P]}return I.default=t,p&&p.set(t,I),I}var o={labelCol:{span:2},wrapperCol:{span:6}};function H(t){var f=(0,a.useState)(!1),p=(0,M.default)(f,2),I=p[0],y=p[1],P=(0,a.useState)(!1),U=(0,M.default)(P,2),x=U[0],b=U[1];function ee(R){z("name",R)}function G(R){z("description",R)}function V(R){if(!D.default.isEmpty(R)&&R.length>5){y(!0);return}z("tags",R),y(!1),b(!1)}function J(){return I?l.default.t("Fill up to 5"):x?l.default.t("1 label can contain up to 30 characters"):""}function z(R,n){var r=t.data,i=t.onUpdateBasinfo;r[R]=n,i(r)}var L=t.data;return a.default.createElement("div",{className:C.default.warp},a.default.createElement(S.default,o,a.default.createElement(S.default.Item,{label:l.default.t("Drill name").toString(),required:!0,requiredTrigger:"onBlur"},a.default.createElement(w.default,{value:L&&L.name||"",className:C.default.experienceBase,maxLength:50,showLimitHint:!0,placeholder:l.default.t("Please enter a drill name").toString(),name:l.default.t("Drill name"),onChange:ee,disabled:t.disabled,"data-autolog":"text=".concat(l.default.t("Please enter a drill name").toString())})),a.default.createElement(S.default.Item,{label:l.default.t("Walkthrough Description").toString()},a.default.createElement(w.default.TextArea,{value:L&&L.description,className:C.default.experienceBaseDescribe,maxLength:1e3,showLimitHint:!0,placeholder:l.default.t("Please enter a walkthrough description").toString(),onChange:G,disabled:t.disabled,"data-autolog":"text=".concat(l.default.t("Please enter a walkthrough description").toString())})),a.default.createElement(S.default.Item,{label:l.default.t("Walkthrough Tags").toString()},a.default.createElement(T.default,{value:L&&L.tags,className:C.default.drillTag,onChange:V,showSearch:!0,dataSource:t.tags,mode:"tag",disabled:t.disabled,onFocus:t.onFocusTags,placeholder:l.default.t("Please enter a walkthrough tag").toString(),notFoundContent:l.default.t("After entering manually, click Enter to add").toString(),"data-autolog":"text=".concat(l.default.t("Enter a walkthrough tag")),locale:(0,W.default)().Select}),J()&&a.default.createElement("div",{className:C.default.errorMessage},J()))))}var Q=H;j.default=Q})},82239:(O,A,e)=>{"use strict";e.d(A,{Z:()=>g});var _=e(60994),h=e.n(_),m=e(93476),c=e.n(m),u=c()(h());u.push([O.id,`.index__experimentEditor__eFdlm {\r
  padding:16px 0px;\r
}\r
\r
.index__tabs__x28i0{\r
  margin-top: 16px;\r
}\r
\r
.index__tabs__x28i0 .index__configureItem__dZd7I {\r
  padding: 24px 24px 24px 0;\r
}\r
\r
.index__configureItem__dZd7I .index__noConfigContainer__Y5f7- {\r
  display: flex;\r
  align-items: center;\r
\r
}\r
\r
.index__configureItem__dZd7I .index__noConfigContainer__Y5f7- img {\r
  width: 213px;\r
  height: 150px;\r
}\r
\r
.index__configureItem__dZd7I .index__noConfigBox__TwKXb {\r
  margin-left: 40px;\r
  height: 104px;\r
\r
}\r
\r
.index__configureItem__dZd7I .index__noConfigBox__TwKXb .index__customCreate__5azRq {\r
  margin-left: 8px;\r
}\r
\r
.index__configureItem__dZd7I .index__noConfig__08sM5 {\r
  font-size: 18px;\r
  color: #111;\r
  font-weight: bold;\r
  line-height: 24px;\r
}\r
\r
.index__configureItem__dZd7I .index__noConfigTips__j9aTu {\r
  margin-top: 8px;\r
  margin-bottom: 24px;\r
  font-size: 12px;\r
  color: #333;\r
  line-height: 16px;\r
}\r
\r
.index__steps__op-Af {\r
  text-align: justify !important;\r
  margin-bottom: 21px;\r
}\r
`,"",{version:3,sources:["webpack://./pages/Chaos/Experiment/ExperimentEditor/index.css"],names:[],mappings:"AAAA;EACE,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,mBAAmB;;AAErB;;AAEA;EACE,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,iBAAiB;EACjB,aAAa;;AAEf;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,WAAW;EACX,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,mBAAmB;EACnB,eAAe;EACf,WAAW;EACX,iBAAiB;AACnB;;AAEA;EACE,8BAA8B;EAC9B,mBAAmB;AACrB",sourcesContent:[`.experimentEditor {\r
  padding:16px 0px;\r
}\r
\r
.tabs{\r
  margin-top: 16px;\r
}\r
\r
.tabs .configureItem {\r
  padding: 24px 24px 24px 0;\r
}\r
\r
.configureItem .noConfigContainer {\r
  display: flex;\r
  align-items: center;\r
\r
}\r
\r
.configureItem .noConfigContainer img {\r
  width: 213px;\r
  height: 150px;\r
}\r
\r
.configureItem .noConfigBox {\r
  margin-left: 40px;\r
  height: 104px;\r
\r
}\r
\r
.configureItem .noConfigBox .customCreate {\r
  margin-left: 8px;\r
}\r
\r
.configureItem .noConfig {\r
  font-size: 18px;\r
  color: #111;\r
  font-weight: bold;\r
  line-height: 24px;\r
}\r
\r
.configureItem .noConfigTips {\r
  margin-top: 8px;\r
  margin-bottom: 24px;\r
  font-size: 12px;\r
  color: #333;\r
  line-height: 16px;\r
}\r
\r
.steps {\r
  text-align: justify !important;\r
  margin-bottom: 21px;\r
}\r
`],sourceRoot:""}]),u.locals={experimentEditor:"index__experimentEditor__eFdlm",tabs:"index__tabs__x28i0",configureItem:"index__configureItem__dZd7I",noConfigContainer:"index__noConfigContainer__Y5f7-",noConfigBox:"index__noConfigBox__TwKXb",customCreate:"index__customCreate__5azRq",noConfig:"index__noConfig__08sM5",noConfigTips:"index__noConfigTips__j9aTu",steps:"index__steps__op-Af"};const g=u},424:(O,A,e)=>{"use strict";e.d(A,{Z:()=>g});var _=e(60994),h=e.n(_),m=e(93476),c=e.n(m),u=c()(h());u.push([O.id,`.index__warp__h61oO {\r
  width: 100%;\r
  padding-right: 25px;\r
\r
}\r
\r
.index__experienceBase__JMFre{\r
  width: 520px !important;\r
}\r
\r
.index__experienceBaseDescribe__rQAtr{\r
  width: 520px !important;\r
}\r
\r
.index__drillTag__fAFBO{\r
  width: 520px !important;\r
}\r
\r
.index__submit__Mxz1b{\r
  margin-top: 40px;\r
  border-top: 1px solid #DEDEDE;\r
  padding-top: 16px;\r
}\r
\r
.index__warp__h61oO.next-form-item-control{\r
  display: inline-block !important;\r
}\r
\r
.index__errorMessage__\\+7buf {\r
  width: 100%;\r
  height: 18px;\r
  font-size: 12px;\r
  color: #f5222d;\r
  margin-top: 3px;\r
}\r
`,"",{version:3,sources:["webpack://./pages/Chaos/common/BaseInfo/index.css"],names:[],mappings:"AAAA;EACE,WAAW;EACX,mBAAmB;;AAErB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,gBAAgB;EAChB,6BAA6B;EAC7B,iBAAiB;AACnB;;AAEA;EACE,gCAAgC;AAClC;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,eAAe;EACf,cAAc;EACd,eAAe;AACjB",sourcesContent:[`.warp {\r
  width: 100%;\r
  padding-right: 25px;\r
\r
}\r
\r
.experienceBase{\r
  width: 520px !important;\r
}\r
\r
.experienceBaseDescribe{\r
  width: 520px !important;\r
}\r
\r
.drillTag{\r
  width: 520px !important;\r
}\r
\r
.submit{\r
  margin-top: 40px;\r
  border-top: 1px solid #DEDEDE;\r
  padding-top: 16px;\r
}\r
\r
.warp:global(.next-form-item-control){\r
  display: inline-block !important;\r
}\r
\r
.errorMessage {\r
  width: 100%;\r
  height: 18px;\r
  font-size: 12px;\r
  color: #f5222d;\r
  margin-top: 3px;\r
}\r
`],sourceRoot:""}]),u.locals={warp:"index__warp__h61oO",experienceBase:"index__experienceBase__JMFre",experienceBaseDescribe:"index__experienceBaseDescribe__rQAtr",drillTag:"index__drillTag__fAFBO",submit:"index__submit__Mxz1b",errorMessage:"index__errorMessage__+7buf"};const g=u},7609:(O,A,e)=>{"use strict";e.r(A),e.d(A,{default:()=>g});var _=e(1892),h=e.n(_),m=e(82239),c={};c.insert="head",c.singleton=!1;var u=h()(m.Z,c);const g=m.Z.locals||{}},17268:(O,A,e)=>{"use strict";e.r(A),e.d(A,{default:()=>g});var _=e(1892),h=e.n(_),m=e(424),c={};c.insert="head",c.singleton=!1;var u=h()(m.Z,c);const g=m.Z.locals||{}}}]);

//# sourceMappingURL=163.bundle.js.map