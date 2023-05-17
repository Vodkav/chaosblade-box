(self.webpackChunk=self.webpackChunk||[]).push([[32],{11032:function(B,A,t){var o,x,m,c=t(24596),E=t(67394),v=t(93168),S=t(23587);(function(U,C){if(!0)!(x=[A,t(75453),t(36939),t(77809),t(72153),t(81853),t(50585),t(32722),t(27378),t(66697),t(98784),t(14798),t(28790),t(96291),t(99328),t(14870),t(42058),t(49729)],o=C,m=typeof o=="function"?o.apply(A,x):o,m!==void 0&&(B.exports=m));else var P})(typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:this,function(U,C,P,D,M,y,T,O,e,s,d,h,n,X,Z,W,Q,$){"use strict";var u=t(67971);E(U,"__esModule",{value:!0}),U.default=void 0,C=u(C),P=u(P),D=u(D),M=u(M),y=u(y),T=u(T),O=u(O),e=V(e),s=u(s),d=u(d),h=u(h),n=u(n);function j(l){if(typeof v!="function")return null;var i=new v,_=new v;return(j=function(R){return R?_:i})(l)}function V(l,i){if(!i&&l&&l.__esModule)return l;if(l===null||c(l)!=="object"&&typeof l!="function")return{default:l};var _=j(i);if(_&&_.has(l))return _.get(l);var p={},R=E&&S;for(var f in l)if(f!=="default"&&Object.prototype.hasOwnProperty.call(l,f)){var I=R?S(l,f):null;I&&(I.get||I.set)?E(p,f,I):p[f]=l[f]}return p.default=l,_&&_.set(l,p),p}var G=function(){var i=(0,W.useDispatch)(),_=(0,$.useQuery)("expertiseId"),p=(0,Q.useHistory)(),R=(0,e.useState)(!1),f=(0,y.default)(R,2),I=f[0],Y=f[1],k=(0,e.useState)(null),w=(0,y.default)(k,2),H=w[0],L=w[1],q=(0,W.useSelector)(function(r){return{expertiseInfo:r.expertises.expertiseInfo}}),g=q.expertiseInfo,ee=d.default.get(g,"basic_info.state",0);(0,e.useEffect)(function(){i.pageHeader.setNameSpace(!1),i.pageHeader.setTitle(e.default.createElement(s.default,null,"Drill experience details page")),i.pageHeader.setHeaderExtra(e.default.createElement("div",{style:{textAlign:"right"}},ee?e.default.createElement(M.default,{type:"primary",onClick:te},e.default.createElement(s.default,null,"create drill")):null)),i.pageHeader.showBackArrow(!0),i.pageHeader.setBreadCrumbItems(X.CHAOS_DEFAULT_BREADCRUMB_ITEM.concat([{key:"expertise_list",value:h.default.t("drill experience library"),path:"/chaos/expertise/list"},{key:"expertise_detail",value:h.default.t("Drill experience details page"),path:"/chaos/expertise/detail"}]))},[]),(0,e.useEffect)(function(){_&&(0,D.default)(regeneratorRuntime.mark(function r(){return regeneratorRuntime.wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.next=2,i.expertises.getExpertiseDetail({expertise_id:_});case 2:case"end":return b.stop()}},r)}))()},[]);function te(){i.experimentEditor.setClearExperiment(),(0,Z.pushUrl)(p,"/chaos/experiment/editor",{expertiseId:_})}function ne(r){L(r),Y(!0)}function le(){L(null),Y(!1)}var a=d.default.get(g,"basic_info",null),z=d.default.get(g,"executable_info",null),K=d.default.get(g,"evaluation_info",{items:[]}),ae=d.default.get(z,"flow.runMode",""),F=d.default.get(z,"run_time","");return e.default.createElement("div",{className:n.default.warp},e.default.createElement("div",{className:n.default.baseInfo},e.default.createElement("div",{className:n.default.title},e.default.createElement(s.default,null,"Basic Information")),e.default.createElement("div",null,e.default.createElement("div",{className:n.default.baseInfoItem},e.default.createElement("div",{className:n.default.label},e.default.createElement(s.default,null,"Experience name")),e.default.createElement("div",{className:n.default.value,title:a&&a.name},a&&a.name)),e.default.createElement("div",{className:n.default.baseInfoItem},e.default.createElement("div",{className:n.default.label},e.default.createElement(s.default,null,"Experience description")),e.default.createElement("div",{className:n.default.value,title:a&&a.function_desc},a&&a.function_desc)),e.default.createElement("div",{className:n.default.baseInfoItem},e.default.createElement("div",{className:n.default.label},e.default.createElement(s.default,null,"Tag")),e.default.createElement("div",{className:n.default.value},!d.default.isEmpty(a)&&a.tags.map(function(r){return e.default.createElement(P.default,{type:"primary",size:"small",key:r,className:n.default.tagCss},r)}))),e.default.createElement("div",{className:n.default.baseInfoItem},e.default.createElement("div",{className:n.default.label},e.default.createElement(s.default,null,"background")),e.default.createElement("div",{className:n.default.value,title:a&&a.background_desc},a&&a.background_desc)),e.default.createElement("div",{className:n.default.baseInfoItem},e.default.createElement("div",{className:n.default.label},e.default.createElement(s.default,null,"Architectural Weaknesses")),e.default.createElement("div",{className:n.default.value,title:a&&a.design_concept},a&&a.design_concept)))),e.default.createElement("div",{className:n.default.flows},e.default.createElement("div",{className:n.default.title},e.default.createElement(s.default,null,"Exercise process")),e.default.createElement("div",{className:n.default.runEnvironment},e.default.createElement("div",{className:n.default.runTitle},e.default.createElement(s.default,null,"Operating environment")),e.default.createElement("div",null,!d.default.isEmpty(F)&&F.items.map(function(r){return e.default.createElement(P.default,{type:"primary",size:"small",key:r,className:n.default.tagCss},r)}))),e.default.createElement("div",null,!d.default.isEmpty(g)&&e.default.createElement(O.default,{isExpertise:!0,experiment:z,runMode:ae,onNodeClick:function(N){return ne(N)}}))),e.default.createElement("div",null,e.default.createElement("div",{className:n.default.title},e.default.createElement(s.default,null,"Other information")),e.default.createElement("div",{className:n.default.baseInfoItem},e.default.createElement("div",{className:n.default.label},e.default.createElement(s.default,null,"evaluating")),e.default.createElement("div",{className:n.default.value},!d.default.isEmpty(K)&&(0,C.default)(K.items).map(function(r,N){return e.default.createElement("li",{className:n.default.valueItem,key:N,title:r.desc},r.desc)})))),H&&e.default.createElement(T.default,{disabled:!0,readOnly:!0,isExpertise:!0,visible:I,data:H,onClose:le}))},J=G;U.default=J})},63030:(B,A,t)=>{"use strict";t.d(A,{Z:()=>v});var o=t(60994),x=t.n(o),m=t(93476),c=t.n(m),E=c()(x());E.push([B.id,`.index__warp__zTAyY .index__baseInfo__jIe1u {\r
    padding-bottom: 16px;\r
    border-bottom: 1px solid #dedede;\r
    margin-bottom: 24px;\r
  }\r
\r
  .index__warp__zTAyY .index__flows__ExfNM {\r
    padding-bottom: 24px;\r
    margin-bottom: 24px;\r
    border-bottom: 1px solid #dedede;\r
  }\r
\r
  .index__warp__zTAyY .index__title__Hs68- {\r
    font-size: 14px;\r
    color: #333333;\r
    line-height: 32px;\r
    margin-bottom: 8px;\r
  }\r
\r
  .index__warp__zTAyY .index__baseInfoItem__TEz6H {\r
    font-size: 12px;\r
    color: #555555;\r
    line-height: 20px;\r
    margin-bottom: 12px;\r
    display: flex;\r
    justify-content: flex-start;\r
  }\r
\r
  .index__warp__zTAyY .index__baseInfoItem__TEz6H .index__label__UTQof {\r
      min-width: 100px;\r
    }\r
\r
  .index__warp__zTAyY .index__baseInfoItem__TEz6H .index__value__-hm27 {\r
      width: 80%;\r
    }\r
\r
  .index__warp__zTAyY .index__tagCss__ecFuk {\r
    margin-right: 5px;\r
  }\r
\r
  .index__warp__zTAyY .index__runEnvironment__TAvua {\r
    display: flex;\r
    justify-content: flex-start;\r
    margin-bottom: 16px;\r
  }\r
\r
  .index__warp__zTAyY .index__runEnvironment__TAvua .index__runTitle__j\\+yvR {\r
      width: 100px;\r
      font-size: 12px;\r
      color: #555;\r
    }\r
\r
  .index__warp__zTAyY .index__valueItem__1pX4S {\r
    line-height: 18px;\r
    width: 90%;\r
    white-space: nowrap;\r
    text-overflow: ellipsis;\r
    margin-bottom: 6px;\r
    list-style: circle;\r
  }`,"",{version:3,sources:["webpack://./pages/Chaos/ExpertiseList/ExpertiseDetail/index.css"],names:[],mappings:"AAEE;IACE,oBAAoB;IACpB,gCAAgC;IAChC,mBAAmB;EACrB;;EAEA;IACE,oBAAoB;IACpB,mBAAmB;IACnB,gCAAgC;EAClC;;EAEA;IACE,eAAe;IACf,cAAc;IACd,iBAAiB;IACjB,kBAAkB;EACpB;;EAEA;IACE,eAAe;IACf,cAAc;IACd,iBAAiB;IACjB,mBAAmB;IACnB,aAAa;IACb,2BAA2B;EAS7B;;EAPE;MACE,gBAAgB;IAClB;;EAEA;MACE,UAAU;IACZ;;EAGF;IACE,iBAAiB;EACnB;;EAEA;IACE,aAAa;IACb,2BAA2B;IAC3B,mBAAmB;EAOrB;;EALE;MACE,YAAY;MACZ,eAAe;MACf,WAAW;IACb;;EAGF;IACE,iBAAiB;IACjB,UAAU;IACV,mBAAmB;IACnB,uBAAuB;IACvB,kBAAkB;IAClB,kBAAkB;EACpB",sourcesContent:[`.warp {\r
\r
  .baseInfo {\r
    padding-bottom: 16px;\r
    border-bottom: 1px solid #dedede;\r
    margin-bottom: 24px;\r
  }\r
  \r
  .flows {\r
    padding-bottom: 24px;\r
    margin-bottom: 24px;\r
    border-bottom: 1px solid #dedede;\r
  }\r
\r
  .title {\r
    font-size: 14px;\r
    color: #333333;\r
    line-height: 32px;\r
    margin-bottom: 8px;\r
  }\r
\r
  .baseInfoItem {\r
    font-size: 12px;\r
    color: #555555;\r
    line-height: 20px;\r
    margin-bottom: 12px;\r
    display: flex;\r
    justify-content: flex-start;\r
\r
    .label {\r
      min-width: 100px;\r
    }\r
\r
    .value {\r
      width: 80%;\r
    }\r
  }\r
\r
  .tagCss {\r
    margin-right: 5px;\r
  }\r
\r
  .runEnvironment {\r
    display: flex;\r
    justify-content: flex-start;\r
    margin-bottom: 16px;\r
\r
    .runTitle {\r
      width: 100px;\r
      font-size: 12px;\r
      color: #555;\r
    }\r
  }\r
\r
  .valueItem {\r
    line-height: 18px;\r
    width: 90%;\r
    white-space: nowrap;\r
    text-overflow: ellipsis;\r
    margin-bottom: 6px;\r
    list-style: circle;\r
  }\r
}`],sourceRoot:""}]),E.locals={warp:"index__warp__zTAyY",baseInfo:"index__baseInfo__jIe1u",flows:"index__flows__ExfNM",title:"index__title__Hs68-",baseInfoItem:"index__baseInfoItem__TEz6H",label:"index__label__UTQof",value:"index__value__-hm27",tagCss:"index__tagCss__ecFuk",runEnvironment:"index__runEnvironment__TAvua",runTitle:"index__runTitle__j+yvR",valueItem:"index__valueItem__1pX4S"};const v=E},28790:(B,A,t)=>{"use strict";t.r(A),t.d(A,{default:()=>v});var o=t(1892),x=t.n(o),m=t(63030),c={};c.insert="head",c.singleton=!1;var E=x()(m.Z,c);const v=m.Z.locals||{}}}]);

//# sourceMappingURL=32.bundle.js.map