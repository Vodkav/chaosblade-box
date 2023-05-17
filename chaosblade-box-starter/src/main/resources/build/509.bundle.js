(self.webpackChunk=self.webpackChunk||[]).push([[509],{6184:function(P,f,e){var _,c,o,p=e(24596),d=e(67394),A=e(93168),M=e(23587);(function(B,x){if(!0)!(c=[f,e(77809),e(81853),e(27378),e(66697),e(14798),e(99501),e(73014),e(14870)],_=x,o=typeof _=="function"?_.apply(f,c):_,o!==void 0&&(P.exports=o));else var r})(typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:this,function(B,x,r,t,h,g,C,E,W){"use strict";var y=e(67971);d(B,"__esModule",{value:!0}),B.default=void 0,x=y(x),r=y(r),t=U(t),h=y(h),g=y(g),C=y(C);function u(n){if(typeof A!="function")return null;var l=new A,a=new A;return(u=function(m){return m?a:l})(n)}function U(n,l){if(!l&&n&&n.__esModule)return n;if(n===null||p(n)!=="object"&&typeof n!="function")return{default:n};var a=u(l);if(a&&a.has(n))return a.get(n);var s={},m=d&&M;for(var i in n)if(i!=="default"&&Object.prototype.hasOwnProperty.call(n,i)){var v=m?M(n,i):null;v&&(v.get||v.set)?d(s,i,v):s[i]=n[i]}return s.default=n,a&&a.set(n,s),s}var R=function(){var l=(0,W.useDispatch)(),a=(0,t.useState)(),s=(0,r.default)(a,2),m=s[0],i=s[1],v=(0,t.useState)([]),F=(0,r.default)(v,2),L=F[0],w=F[1];(0,t.useEffect)(function(){(0,x.default)(regeneratorRuntime.mark(function I(){var O,N;return regeneratorRuntime.wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return S.next=2,l.workspace.getExperimentSummary();case 2:O=S.sent,N=O.Data,N&&(i(N),z(N));case 5:case"end":return S.stop()}},I)}))()},[]);function z(I){var O=[];O.push({type:g.default.t("Not as expected"),content:I.unexpectedSize}),O.push({type:g.default.t("Number of successes"),content:I.successSize}),O.push({type:g.default.t("Total"),content:I.totalSize}),w(O)}return m?t.default.createElement("div",{className:C.default.right},t.default.createElement("div",{className:C.default.header},t.default.createElement(h.default,null,"Cumulative drill data statistics")),t.default.createElement("div",null,t.default.createElement(E.Chart,{data:L,height:150,padding:[0,60,0,90],forceFit:!0},t.default.createElement(E.Coord,{transpose:!0}),t.default.createElement(E.Axis,{name:"type"}),t.default.createElement(E.Axis,{name:"content",visible:!1}),t.default.createElement(E.Geom,{type:"interval",position:"type*content"},t.default.createElement(E.Label,{content:"content",offset:5})))),t.default.createElement("div",{className:C.default.bottom},t.default.createElement("div",null,t.default.createElement(h.default,null,"Cumulative success rate"),t.default.createElement("span",{className:C.default.value},m&&Number(m.successRatio*100).toFixed(),"%")),t.default.createElement("div",null,t.default.createElement(h.default,null,"Cumulative non-compliance rate"),t.default.createElement("span",{className:C.default.value},m&&Number(m.unexpectedRatio*100).toFixed(),"%")))):null},D=R;B.default=D})},55828:function(P,f,e){var _,c,o,p=e(24596),d=e(67394),A=e(93168),M=e(23587);(function(B,x){if(!0)!(c=[f,e(81853),e(27378),e(14798),e(73014)],_=x,o=typeof _=="function"?_.apply(f,c):_,o!==void 0&&(P.exports=o));else var r})(typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:this,function(B,x,r,t,h){"use strict";var g=e(67971);d(B,"__esModule",{value:!0}),B.default=void 0,x=g(x),r=E(r),t=g(t);function C(u){if(typeof A!="function")return null;var U=new A,R=new A;return(C=function(n){return n?R:U})(u)}function E(u,U){if(!U&&u&&u.__esModule)return u;if(u===null||p(u)!=="object"&&typeof u!="function")return{default:u};var R=C(U);if(R&&R.has(u))return R.get(u);var D={},n=d&&M;for(var l in u)if(l!=="default"&&Object.prototype.hasOwnProperty.call(u,l)){var a=n?M(u,l):null;a&&(a.get||a.set)?d(D,l,a):D[l]=u[l]}return D.default=u,R&&R.set(u,D),D}var W=function(U){var R=(0,r.useState)([]),D=(0,x.default)(R,2),n=D[0],l=D[1];(0,r.useEffect)(function(){a(U.data)},[U.data]);function a(s){var m=[];s.forEach(function(i){m.push({type:t.default.t("Number of drills per day"),content:i.totalSize,date:i.date}),m.push({type:t.default.t("Number of successes per day"),content:i.successSize,date:i.date}),m.push({type:t.default.t("A single day does not meet expectations"),content:i.unexpectedSize,date:i.date})}),l(m)}return r.default.createElement("div",{style:{marginTop:18}},r.default.createElement(h.Chart,{height:230,data:n,forceFit:!0,padding:"auto"},r.default.createElement(h.Legend,{marker:"circle"}),r.default.createElement(h.Axis,{name:"date"}),r.default.createElement(h.Axis,{name:"content"}),r.default.createElement(h.Tooltip,{crosshairs:{type:"y"}}),r.default.createElement(h.Geom,{type:"line",position:"date*content",size:2,color:"type"}),r.default.createElement(h.Geom,{type:"point",position:"date*content",size:4,shape:"circle",color:"type",style:{stroke:"#fff",lineWidth:1}})))},y=W;B.default=y})},97079:function(P,f,e){var _,c,o,p=e(24596),d=e(67394),A=e(93168),M=e(23587);(function(B,x){if(!0)!(c=[f,e(77809),e(81853),e(27378),e(55828),e(66697),e(98784),e(95492),e(14870)],_=x,o=typeof _=="function"?_.apply(f,c):_,o!==void 0&&(P.exports=o));else var r})(typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:this,function(B,x,r,t,h,g,C,E,W){"use strict";var y=e(67971);d(B,"__esModule",{value:!0}),B.default=void 0,x=y(x),r=y(r),t=U(t),h=y(h),g=y(g),C=y(C),E=y(E);function u(n){if(typeof A!="function")return null;var l=new A,a=new A;return(u=function(m){return m?a:l})(n)}function U(n,l){if(!l&&n&&n.__esModule)return n;if(n===null||p(n)!=="object"&&typeof n!="function")return{default:n};var a=u(l);if(a&&a.has(n))return a.get(n);var s={},m=d&&M;for(var i in n)if(i!=="default"&&Object.prototype.hasOwnProperty.call(n,i)){var v=m?M(n,i):null;v&&(v.get||v.set)?d(s,i,v):s[i]=n[i]}return s.default=n,a&&a.set(n,s),s}var R=function(){var l=(0,W.useDispatch)(),a=(0,t.useState)([]),s=(0,r.default)(a,2),m=s[0],i=s[1],v=(0,t.useState)(0),F=(0,r.default)(v,2),L=F[0],w=F[1],z=(0,t.useState)(0),I=(0,r.default)(z,2),O=I[0],N=I[1],Q=(0,t.useState)(0),S=(0,r.default)(Q,2),b=S[0],j=S[1];return(0,t.useEffect)(function(){(0,x.default)(regeneratorRuntime.mark(function Z(){var Y,X,T;return regeneratorRuntime.wrap(function(K){for(;;)switch(K.prev=K.next){case 0:return K.next=2,l.workspace.getExperimentSummaryDays();case 2:Y=K.sent,X=Y.Data,T=X===void 0?!1:X,T&&(i(C.default.get(T,"experimentSummaryInfoList",[])),w(C.default.get(T,"successSize",0)),N(C.default.get(T,"totalSize",0)),j(C.default.get(T,"unexpectedSize",0)));case 6:case"end":return K.stop()}},Z)}))()},[]),t.default.createElement("div",{className:E.default.left},t.default.createElement("div",{className:E.default.top},t.default.createElement("div",{className:E.default.header},t.default.createElement(g.default,null,"Exercise Execution Distribution (Last 30 Days)")),t.default.createElement("div",{className:E.default.total},t.default.createElement("span",{className:E.default.itemLeft},t.default.createElement(g.default,null,"Total")),t.default.createElement("span",{className:E.default.itemRight},O),t.default.createElement("span",{className:E.default.itemLeft,style:{width:45}},t.default.createElement(g.default,null,"Number of successes")),t.default.createElement("span",{className:E.default.itemRight},L),t.default.createElement("span",{className:E.default.itemLeft,style:{width:80}},t.default.createElement(g.default,null,"Not as expected")),t.default.createElement("span",{className:E.default.itemRight},b))),C.default.isEmpty(m)?t.default.createElement("div",{className:E.default.empty},t.default.createElement("img",{src:"https://img.alicdn.com/tfs/TB1fN8awFY7gK0jSZKzXXaikpXa-268-258.png"}),t.default.createElement("div",{className:E.default.info},t.default.createElement(g.default,null,"No drills performed within 30 days"))):t.default.createElement("div",{style:{height:200}},t.default.createElement(h.default,{data:m})))},D=R;B.default=D})},68509:function(P,f,e){var _,c,o,p=e(24596),d=e(67394),A=e(93168),M=e(23587);(function(B,x){if(!0)!(c=[f,e(6184),e(27378),e(97079),e(14798),e(43751),e(96291),e(99328),e(14870)],_=x,o=typeof _=="function"?_.apply(f,c):_,o!==void 0&&(P.exports=o));else var r})(typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:this,function(B,x,r,t,h,g,C,E,W){"use strict";var y=e(67971);d(B,"__esModule",{value:!0}),B.default=void 0,x=y(x),r=U(r),t=y(t),h=y(h),g=y(g);function u(n){if(typeof A!="function")return null;var l=new A,a=new A;return(u=function(m){return m?a:l})(n)}function U(n,l){if(!l&&n&&n.__esModule)return n;if(n===null||p(n)!=="object"&&typeof n!="function")return{default:n};var a=u(l);if(a&&a.has(n))return a.get(n);var s={},m=d&&M;for(var i in n)if(i!=="default"&&Object.prototype.hasOwnProperty.call(n,i)){var v=m?M(n,i):null;v&&(v.get||v.set)?d(s,i,v):s[i]=n[i]}return s.default=n,a&&a.set(n,s),s}var R=function(){var l=(0,W.useDispatch)();return(0,r.useEffect)(function(){l.pageHeader.setTitle(h.default.t("Space management").toString()),l.pageHeader.setBreadCrumbItems(C.CHAOS_DEFAULT_BREADCRUMB_ITEM.concat([{key:"expertise_admin",value:h.default.t("Space management").toString(),path:"/chaos/workspace/list"}]))},[]),(0,r.useEffect)(function(){(0,E.removeParams)("workspaceId")},[]),r.default.createElement("div",{style:{marginBottom:16}},r.default.createElement("div",{className:g.default.top},r.default.createElement(t.default,null),r.default.createElement(x.default,null)))},D=R;B.default=D})},15447:(P,f,e)=>{"use strict";e.d(f,{Z:()=>A});var _=e(60994),c=e.n(_),o=e(93476),p=e.n(o),d=p()(c());d.push([P.id,`.index__right__Qo2EX {\r
  width: 39.5%;\r
  height: 288px;\r
  padding: 16px;\r
  border: 1px solid #dedede;\r
\r
}\r
\r
  .index__right__Qo2EX .index__header__MPIaQ {\r
    color: #333333;\r
    font-size: 14px;\r
    font-weight: 700;\r
    margin-bottom: 18px;\r
  }\r
\r
  .index__right__Qo2EX .index__bottom__mPOdU {\r
    margin-top: 18px;\r
    color: #888888;\r
    font-size: 12px;\r
    line-height: 24px;\r
  }\r
\r
  .index__right__Qo2EX .index__bottom__mPOdU .index__value__EF47l {\r
      color: #333333;\r
      margin-left: 28px;\r
    }\r
`,"",{version:3,sources:["webpack://./pages/Chaos/WorkSpace/DrillTotalStatistics/index.css"],names:[],mappings:"AAAA;EACE,YAAY;EACZ,aAAa;EACb,aAAa;EACb,yBAAyB;;AAoB3B;;EAlBE;IACE,cAAc;IACd,eAAe;IACf,gBAAgB;IAChB,mBAAmB;EACrB;;EAEA;IACE,gBAAgB;IAChB,cAAc;IACd,eAAe;IACf,iBAAiB;EAKnB;;EAJE;MACE,cAAc;MACd,iBAAiB;IACnB",sourcesContent:[`.right {\r
  width: 39.5%;\r
  height: 288px;\r
  padding: 16px;\r
  border: 1px solid #dedede;\r
\r
  .header {\r
    color: #333333;\r
    font-size: 14px;\r
    font-weight: 700;\r
    margin-bottom: 18px;\r
  }\r
\r
  .bottom {\r
    margin-top: 18px;\r
    color: #888888;\r
    font-size: 12px;\r
    line-height: 24px;\r
    .value {\r
      color: #333333;\r
      margin-left: 28px;\r
    }\r
  }\r
\r
}\r
`],sourceRoot:""}]),d.locals={right:"index__right__Qo2EX",header:"index__header__MPIaQ",bottom:"index__bottom__mPOdU",value:"index__value__EF47l"};const A=d},4192:(P,f,e)=>{"use strict";e.d(f,{Z:()=>A});var _=e(60994),c=e.n(_),o=e(93476),p=e.n(o),d=p()(c());d.push([P.id,`.index__left__t\\+rbh {\r
  width: 60%;\r
  height: 288px;\r
  padding: 16px;\r
  border: 1px solid #dedede;\r
  margin-right: 16px;\r
}\r
\r
  .index__left__t\\+rbh .index__top__fwMvz {\r
    display: flex;\r
    justify-content: space-between;\r
  }\r
\r
  .index__left__t\\+rbh .index__header__tQubK {\r
    color: #333333;\r
    font-size: 14px;\r
    font-weight: 700;\r
  }\r
\r
  .index__left__t\\+rbh .index__total__88giU {\r
    color: #888888;\r
    font-size: 12px;\r
  }\r
\r
  .index__left__t\\+rbh .index__total__88giU .index__itemLeft__Rr7zU {\r
      display: inline-block;\r
      width: 36px;\r
    }\r
\r
  .index__left__t\\+rbh .index__total__88giU .index__itemRight__5TcKs {\r
      display: inline-block;\r
      margin-right: 8px;\r
      color: #333333;\r
    }\r
\r
.index__empty__8r2HA {\r
  margin-top: 60px;\r
  text-align: center;\r
}\r
\r
.index__empty__8r2HA img {\r
    width: 100px;\r
  }\r
\r
.index__empty__8r2HA .index__info__KOXKW {\r
    font-size: 14px;\r
    font-weight: 600;\r
  }\r
`,"",{version:3,sources:["webpack://./pages/Chaos/WorkSpace/TaskInfoDistribute/index.css"],names:[],mappings:"AAAA;EACE,UAAU;EACV,aAAa;EACb,aAAa;EACb,yBAAyB;EACzB,kBAAkB;AA0BpB;;EAxBE;IACE,aAAa;IACb,8BAA8B;EAChC;;EAEA;IACE,cAAc;IACd,eAAe;IACf,gBAAgB;EAClB;;EAEA;IACE,cAAc;IACd,eAAe;EAUjB;;EATE;MACE,qBAAqB;MACrB,WAAW;IACb;;EACA;MACE,qBAAqB;MACrB,iBAAiB;MACjB,cAAc;IAChB;;AAIJ;EACE,gBAAgB;EAChB,kBAAkB;AAQpB;;AAPE;IACE,YAAY;EACd;;AACA;IACE,eAAe;IACf,gBAAgB;EAClB",sourcesContent:[`.left {\r
  width: 60%;\r
  height: 288px;\r
  padding: 16px;\r
  border: 1px solid #dedede;\r
  margin-right: 16px;\r
\r
  .top {\r
    display: flex;\r
    justify-content: space-between;\r
  }\r
\r
  .header {\r
    color: #333333;\r
    font-size: 14px;\r
    font-weight: 700;\r
  }\r
\r
  .total {\r
    color: #888888;\r
    font-size: 12px;\r
    .itemLeft {\r
      display: inline-block;\r
      width: 36px;\r
    }\r
    .itemRight {\r
      display: inline-block;\r
      margin-right: 8px;\r
      color: #333333;\r
    }\r
  }\r
}\r
\r
.empty {\r
  margin-top: 60px;\r
  text-align: center;\r
  img {\r
    width: 100px;\r
  }\r
  .info {\r
    font-size: 14px;\r
    font-weight: 600;\r
  }\r
}\r
`],sourceRoot:""}]),d.locals={left:"index__left__t+rbh",top:"index__top__fwMvz",header:"index__header__tQubK",total:"index__total__88giU",itemLeft:"index__itemLeft__Rr7zU",itemRight:"index__itemRight__5TcKs",empty:"index__empty__8r2HA",info:"index__info__KOXKW"};const A=d},98472:(P,f,e)=>{"use strict";e.d(f,{Z:()=>A});var _=e(60994),c=e.n(_),o=e(93476),p=e.n(o),d=p()(c());d.push([P.id,`.index__top__HkYrd {\r
  display: flex;\r
}\r
\r
.index__header__tukDc {\r
  color: #333333;\r
  font-size: 14px;\r
  font-weight: 700;\r
}\r
\r
.index__workspace__UbNi5 {\r
  margin-top: 24px;\r
}\r
\r
.index__workspace__UbNi5 .index__line__XMk7X {\r
    width: 100%;\r
    height: 1px;\r
    background: #dedede;\r
    margin-top: 24px;\r
    margin-bottom: 8px;\r
  }\r
\r
.index__workspace__UbNi5 .index__info__n8lEg {\r
    margin-top: 16px;\r
    display: flex;\r
    margin-bottom: 8px;\r
  }\r
\r
.index__workspace__UbNi5 .index__cardContent__EN5Xp {\r
    display: flex;\r
    justify-content: flex-start;\r
    flex-wrap: wrap;\r
  }\r
\r
.index__workspace__UbNi5 .index__cardContent__EN5Xp .index__card__bV2OJ {\r
      width: 384px;\r
      border: 1px solid #dedede;\r
      padding: 14px 16px 16px;\r
      cursor: pointer;\r
      height: 176px;\r
      margin-right: 16px;\r
      margin-top: 16px;\r
    }\r
\r
.index__workspace__UbNi5 .index__cardContent__EN5Xp .index__card__bV2OJ:hover {\r
        border: 1px solid rgba(0, 112, 204, 0.36);\r
        box-shadow: 0 1px 8px 0 rgba(0, 112, 204, 0.36);\r
      }\r
\r
.index__workspace__UbNi5 .index__cardContent__EN5Xp .index__card__bV2OJ .index__name__c\\+YJe {\r
        color: #333333;\r
        font-size: 14px;\r
        font-weight: 700;\r
        display: flex;\r
        justify-content: space-between;\r
      }\r
\r
.index__workspace__UbNi5 .index__cardContent__EN5Xp .index__card__bV2OJ .index__desciption__QltSL {\r
        color: #555555;\r
        font-size: 12px;\r
        margin-bottom: 24px;\r
        margin-top: 15px;\r
        height: 52px;\r
        overflow: hidden;\r
        text-overflow: ellipsis;\r
        display: -webkit-box;\r
        -webkit-line-clamp: 3;\r
        -webkit-box-orient: vertical;\r
      }\r
\r
.index__workspace__UbNi5 .index__cardContent__EN5Xp .index__card__bV2OJ .index__bottomContent__hRJ1y {\r
        display: flex;\r
      }\r
\r
.index__workspace__UbNi5 .index__cardContent__EN5Xp .index__card__bV2OJ .index__bottomContent__hRJ1y .index__item__DdX5R {\r
          margin-right: 82px;\r
        }\r
\r
.index__admin__7ONcB {\r
  display: flex;\r
  margin-bottom: 35px;\r
}\r
\r
.index__admin__7ONcB .index__left__v7Un- {\r
    width: 48px;\r
    color: #333333;\r
  }\r
\r
.index__admin__7ONcB .index__right__Th6J\\+ {\r
    width: 200px;\r
    height: 20px;\r
    text-overflow: ellipsis;\r
    overflow: hidden;\r
  }\r
\r
.index__action__zl07t {\r
  color: #0070cc;\r
  cursor: pointer;\r
  font-size: 12px;\r
}\r
\r
/* \u8D44\u6E90\u5305\u5F39\u7A97 */\r
.index__GuidPaidDialog__01ABP {\r
  width: 800px;\r
  height: 224px;\r
  padding: 40px;\r
}\r
.index__GuidPaidDialog__01ABP .next-dialog-body {\r
    padding: 0px !important;\r
  }\r
.index__GuidPaidDialog__01ABP .index__dialogContent__XQQNh {\r
    width: 100%;\r
    display: flex;\r
    justify-content: flex-start;\r
  }\r
\r
.index__tips__4QNCS {\r
  font-family: PingFangSC-Regular;\r
  font-size: 12px;\r
  color: #333333;\r
  text-align: left;\r
  line-height: 20px; \r
}\r
\r
.index__bag__nv0gW {\r
  height: 20px;\r
  width: 44px;\r
  background: #0091FF;\r
  border-radius: 2px;\r
  background-color: #0091FF;\r
  padding: 0 2px;\r
  font-family: PingFangSC-Regular;\r
  font-size: 12px;\r
  color: #FFFFFF;\r
}\r
`,"",{version:3,sources:["webpack://./pages/Chaos/WorkSpace/index.css"],names:[],mappings:"AAAA;EACE,aAAa;AACf;;AAEA;EACE,cAAc;EACd,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;AA0DlB;;AAxDE;IACE,WAAW;IACX,WAAW;IACX,mBAAmB;IACnB,gBAAgB;IAChB,kBAAkB;EACpB;;AAEA;IACE,gBAAgB;IAChB,aAAa;IACb,kBAAkB;EACpB;;AACA;IACE,aAAa;IACb,2BAA2B;IAC3B,eAAe;EAuCjB;;AAtCE;MACE,YAAY;MACZ,yBAAyB;MACzB,uBAAuB;MACvB,eAAe;MACf,aAAa;MACb,kBAAkB;MAClB,gBAAgB;IA8BlB;;AA7BE;QACE,yCAAyC;QACzC,+CAA+C;MACjD;;AACA;QACE,cAAc;QACd,eAAe;QACf,gBAAgB;QAChB,aAAa;QACb,8BAA8B;MAChC;;AACA;QACE,cAAc;QACd,eAAe;QACf,mBAAmB;QACnB,gBAAgB;QAChB,YAAY;QACZ,gBAAgB;QAChB,uBAAuB;QACvB,oBAAoB;QACpB,qBAAqB;QACrB,4BAA4B;MAC9B;;AACA;QACE,aAAa;MAIf;;AAHE;UACE,kBAAkB;QACpB;;AAMR;EACE,aAAa;EACb,mBAAmB;AAWrB;;AAVE;IACE,WAAW;IACX,cAAc;EAChB;;AACA;IACE,YAAY;IACZ,YAAY;IACZ,uBAAuB;IACvB,gBAAgB;EAClB;;AAGF;EACE,cAAc;EACd,eAAe;EACf,eAAe;AACjB;;AAEA,UAAU;AACV;EACE,YAAY;EACZ,aAAa;EACb,aAAa;AAWf;AATE;IACE,uBAAuB;EACzB;AAEA;IACE,WAAW;IACX,aAAa;IACb,2BAA2B;EAC7B;;AAGF;EACE,+BAA+B;EAC/B,eAAe;EACf,cAAc;EACd,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,mBAAmB;EACnB,kBAAkB;EAClB,yBAAyB;EACzB,cAAc;EACd,+BAA+B;EAC/B,eAAe;EACf,cAAc;AAChB",sourcesContent:[`.top {\r
  display: flex;\r
}\r
\r
.header {\r
  color: #333333;\r
  font-size: 14px;\r
  font-weight: 700;\r
}\r
\r
.workspace {\r
  margin-top: 24px;\r
\r
  .line {\r
    width: 100%;\r
    height: 1px;\r
    background: #dedede;\r
    margin-top: 24px;\r
    margin-bottom: 8px;\r
  }\r
\r
  .info {\r
    margin-top: 16px;\r
    display: flex;\r
    margin-bottom: 8px;\r
  }\r
  .cardContent {\r
    display: flex;\r
    justify-content: flex-start;\r
    flex-wrap: wrap;\r
    .card {\r
      width: 384px;\r
      border: 1px solid #dedede;\r
      padding: 14px 16px 16px;\r
      cursor: pointer;\r
      height: 176px;\r
      margin-right: 16px;\r
      margin-top: 16px;\r
      &:hover {\r
        border: 1px solid rgba(0, 112, 204, 0.36);\r
        box-shadow: 0 1px 8px 0 rgba(0, 112, 204, 0.36);\r
      }\r
      .name {\r
        color: #333333;\r
        font-size: 14px;\r
        font-weight: 700;\r
        display: flex;\r
        justify-content: space-between;\r
      }\r
      .desciption {\r
        color: #555555;\r
        font-size: 12px;\r
        margin-bottom: 24px;\r
        margin-top: 15px;\r
        height: 52px;\r
        overflow: hidden;\r
        text-overflow: ellipsis;\r
        display: -webkit-box;\r
        -webkit-line-clamp: 3;\r
        -webkit-box-orient: vertical;\r
      }\r
      .bottomContent {\r
        display: flex;\r
        .item {\r
          margin-right: 82px;\r
        }\r
      }\r
    }\r
  }\r
}\r
\r
.admin {\r
  display: flex;\r
  margin-bottom: 35px;\r
  .left {\r
    width: 48px;\r
    color: #333333;\r
  }\r
  .right {\r
    width: 200px;\r
    height: 20px;\r
    text-overflow: ellipsis;\r
    overflow: hidden;\r
  }\r
}\r
\r
.action {\r
  color: #0070cc;\r
  cursor: pointer;\r
  font-size: 12px;\r
}\r
\r
/* \u8D44\u6E90\u5305\u5F39\u7A97 */\r
.GuidPaidDialog {\r
  width: 800px;\r
  height: 224px;\r
  padding: 40px;\r
\r
  :global(.next-dialog-body) {\r
    padding: 0px !important;\r
  }\r
\r
  .dialogContent {\r
    width: 100%;\r
    display: flex;\r
    justify-content: flex-start;\r
  }\r
}\r
\r
.tips {\r
  font-family: PingFangSC-Regular;\r
  font-size: 12px;\r
  color: #333333;\r
  text-align: left;\r
  line-height: 20px; \r
}\r
\r
.bag {\r
  height: 20px;\r
  width: 44px;\r
  background: #0091FF;\r
  border-radius: 2px;\r
  background-color: #0091FF;\r
  padding: 0 2px;\r
  font-family: PingFangSC-Regular;\r
  font-size: 12px;\r
  color: #FFFFFF;\r
}\r
`],sourceRoot:""}]),d.locals={top:"index__top__HkYrd",header:"index__header__tukDc",workspace:"index__workspace__UbNi5",line:"index__line__XMk7X",info:"index__info__n8lEg",cardContent:"index__cardContent__EN5Xp",card:"index__card__bV2OJ",name:"index__name__c+YJe",desciption:"index__desciption__QltSL",bottomContent:"index__bottomContent__hRJ1y",item:"index__item__DdX5R",admin:"index__admin__7ONcB",left:"index__left__v7Un-",right:"index__right__Th6J+",action:"index__action__zl07t",GuidPaidDialog:"index__GuidPaidDialog__01ABP",dialogContent:"index__dialogContent__XQQNh",tips:"index__tips__4QNCS",bag:"index__bag__nv0gW"};const A=d},99501:(P,f,e)=>{"use strict";e.r(f),e.d(f,{default:()=>A});var _=e(1892),c=e.n(_),o=e(15447),p={};p.insert="head",p.singleton=!1;var d=c()(o.Z,p);const A=o.Z.locals||{}},95492:(P,f,e)=>{"use strict";e.r(f),e.d(f,{default:()=>A});var _=e(1892),c=e.n(_),o=e(4192),p={};p.insert="head",p.singleton=!1;var d=c()(o.Z,p);const A=o.Z.locals||{}},43751:(P,f,e)=>{"use strict";e.r(f),e.d(f,{default:()=>A});var _=e(1892),c=e.n(_),o=e(98472),p={};p.insert="head",p.singleton=!1;var d=c()(o.Z,p);const A=o.Z.locals||{}}}]);

//# sourceMappingURL=509.bundle.js.map