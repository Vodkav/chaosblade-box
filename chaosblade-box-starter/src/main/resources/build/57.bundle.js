(self.webpackChunk=self.webpackChunk||[]).push([[57],{91714:function(f,A,e){"use strict";var o=this&&this.__assign||function(){return o=Object.assign||function(p){for(var n,t=1,y=arguments.length;t<y;t++){n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(p[r]=n[r])}return p},o.apply(this,arguments)},u=this&&this.__importDefault||function(p){return p&&p.__esModule?p:{default:p}};Object.defineProperty(A,"__esModule",{value:!0});var s=u(e(27378)),c=e(30156),l=u(e(55839)),d=e(46949),I=function(p){return s.default.createElement(c.Step,o({stretch:!0},p))};l.default(I,c.Step),A.default=d.withThemeClass(I)},39257:function(f,A,e){var o,u,s,c=e(67394);(function(l,d){if(!0)!(u=[A,e(91714),e(17225),e(17534),e(27378),e(66697),e(98784),e(36012),e(14798),e(16818),e(99328),e(42058)],o=d,s=typeof o=="function"?o.apply(A,u):o,s!==void 0&&(f.exports=s));else var I})(typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:this,function(l,d,I,p,n,t,y,r,a,i,U,m){"use strict";var E=e(67971);c(l,"__esModule",{value:!0}),l.default=void 0,d=E(d),I=E(I),p=E(p),n=E(n),t=E(t),y=E(y),r=E(r),a=E(a),i=E(i);function j(w){var z=w.way,D=w.language,Q=(0,m.useHistory)();function _(){var x=document.getElementById("code").innerText;(0,r.default)(x)?p.default.success(a.default.t("Copy successfully")):p.default.error(a.default.t("Replication failed"))}function v(x){return n.default.createElement("div",{className:i.default.codeContent},n.default.createElement("span",{id:"code"},x.map(function(h){return n.default.createElement("div",{className:i.default.codeLine},h)})),n.default.createElement("div",{className:i.default.copy,onClick:_},n.default.createElement(I.default,{type:"copy",className:i.default.copyIcon})))}function C(){return n.default.createElement("div",null,n.default.createElement("p",null,n.default.createElement(t.default,null,"AppName can only contain letters, numbers and special characters _-")),v([a.default.t("-Dproject.name=application name -Dproject.group.name=application group name")]),n.default.createElement("div",{className:i.default.jvmParam},n.default.createElement(t.default,null,"Please replace the above values according to the actual situation. The default values of the above configuration are as follows"),": "),n.default.createElement("ul",{className:i.default.ulList},n.default.createElement("li",null,"project.name: ",n.default.createElement(t.default,null,"Defaults value")," chaos-default-app"),n.default.createElement("li",null,"project.group.name: ",n.default.createElement(t.default,null,"Defaults value")," chaos-default-app-group")),n.default.createElement(p.default,{title:"",type:"warning",className:i.default.jvmWaring},n.default.createElement(t.default,null,'   "Note: On the machine where the fault rehearsal probe has been deployed, modify the JVM startup parameters and restart, the application will automatically recognize and take effect without redeploying the fault rehearsal probe"')))}function g(){return n.default.createElement("div",null,n.default.createElement("p",null,n.default.createElement(t.default,null,"The value of the tag can only contain letters, numbers and special characters_-")),n.default.createElement("div",{className:i.default.podWord},n.default.createElement(t.default,null,"In the template (YAML format) add the following labels configuration to the spec > template < labels level"),": "),v(["labels:","chaos/app-instance: ".concat(a.default.t("ApplicationName")),"chaos/app-group: ".concat(a.default.t("Application group name"))]),n.default.createElement("div",{className:i.default.podWord},n.default.createElement(t.default,null,"Replace the above values according to the actual situation. If you do not configure the above values, it will be recognized again whether it contains"),n.default.createElement("span",{className:i.default.tag},"app-group-name(",n.default.createElement(t.default,null,"Container Service Application Configuration"),")"),"\u3001",n.default.createElement("span",{className:i.default.tag},"app.kubernetes.io/name"),"\u3001",n.default.createElement("span",{className:i.default.tag},"app"),"\u3001",n.default.createElement("span",{className:i.default.tag},"k8s-app"),n.default.createElement(t.default,null,"The label configuration is used as the application name, and the default application group name format is"),": ",n.default.createElement("span",{className:i.default.nameStyle},n.default.createElement(t.default,null,"Application name-group")),"\u3002"),n.default.createElement("div",{className:i.default.podWord,style:{margin:"14px 0"}},n.default.createElement(t.default,null,"According to the label identification application, the label priority is as follows"),": chaos/app-instance ",">"," app-group-name ",">"," app.kubernetes.io/name ",">"," k8s-app ",">"," app\u3002"),n.default.createElement("div",{className:i.default.podWord},n.default.createElement("span",{className:i.default.nameStyle},n.default.createElement(t.default,null,"Notice"),": "),n.default.createElement(t.default,null,"The default application attribution is no longer supported in kubernetes mode, please follow the prompts above to configure the label")))}function W(x){(0,U.pushUrl)(Q,"/manage/setting",x)}function b(){var x;return z==="k8s"?x=[{title:a.default.t("Configure Pod Labels"),content:g()},{title:a.default.t("Use the chart package to automatically install fault drill probes"),content:n.default.createElement("div",{className:i.default.imageContent},n.default.createElement("img",{src:e(67421)}))}]:D==="java"?x=[{title:a.default.t("Configure JVM startup parameters"),content:C()},{title:a.default.t("Just start the app"),content:""},{title:n.default.createElement("span",null,n.default.createElement(t.default,null,"Enter the probe management page, click"),n.default.createElement("a",{onClick:function(){return W({region:"public"})},target:"_black"},n.default.createElement(t.default,null,"Install the Troubleshooting Probe"))),content:n.default.createElement("div",{className:i.default.imageContent},n.default.createElement("img",{src:e(30158)}))},{title:a.default.t("Fill in the application, application group information, IP, ssh user, and ssh password. If you already have an application, select the application name and application group, and click Install"),content:n.default.createElement("div",{className:i.default.imageContent},n.default.createElement("img",{src:e(12561)}))}]:x=[{title:n.default.createElement("span",null,n.default.createElement(t.default,null,"Enter the probe management page, click"),n.default.createElement("a",{onClick:function(){return W({})},target:"_black"},n.default.createElement(t.default,null,"Install the Troubleshooting Probe"))),content:n.default.createElement("div",{className:i.default.imageContent},n.default.createElement("img",{src:e(30158)}))},{title:a.default.t("Fill in the application, application group information, IP, ssh user, and ssh password. If you already have an application, select the application name and application group, and click Install"),content:n.default.createElement("div",{className:i.default.imageContent},n.default.createElement("img",{src:e(12561)}))}],y.default.map(x,function(h,R){return n.default.createElement(d.default.Item,{key:R,title:h.title,content:h.content})})}return n.default.createElement("div",{className:i.default.stepContent},n.default.createElement(d.default,{direction:"ver",shape:"circle",animation:!1,readOnly:!0},b()))}var P=j;l.default=P})},69057:function(f,A,e){var o,u,s,c=e(24596),l=e(67394),d=e(93168),I=e(23587);(function(p,n){if(!0)!(u=[A,e(17534),e(81853),e(39257),e(27378),e(66697),e(60042),e(14798),e(78571),e(96291),e(14870)],o=n,s=typeof o=="function"?o.apply(A,u):o,s!==void 0&&(f.exports=s));else var t})(typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:this,function(p,n,t,y,r,a,i,U,m,E,j){"use strict";var P=e(67971);l(p,"__esModule",{value:!0}),p.default=void 0,n=P(n),t=P(t),y=P(y),r=z(r),a=P(a),i=P(i),U=P(U),m=P(m);function w(_){if(typeof d!="function")return null;var v=new d,C=new d;return(w=function(W){return W?C:v})(_)}function z(_,v){if(!v&&_&&_.__esModule)return _;if(_===null||c(_)!=="object"&&typeof _!="function")return{default:_};var C=w(v);if(C&&C.has(_))return C.get(_);var g={},W=l&&I;for(var b in _)if(b!=="default"&&Object.prototype.hasOwnProperty.call(_,b)){var x=W?I(_,b):null;x&&(x.get||x.set)?l(g,b,x):g[b]=_[b]}return g.default=_,C&&C.set(_,g),g}function D(){var _=(0,j.useDispatch)(),v=(0,r.useState)("host"),C=(0,t.default)(v,2),g=C[0],W=C[1],b=(0,r.useState)("java"),x=(0,t.default)(b,2),h=x[0],R=x[1];(0,r.useEffect)(function(){_.pageHeader.setTitle(r.default.createElement(a.default,null,"Application access")),_.pageHeader.setBreadCrumbItems(E.CHAOS_DEFAULT_BREADCRUMB_ITEM.concat([{key:"application",value:U.default.t("Application management"),path:"/chaos/application"},{key:"freshapplication_access",value:U.default.t("Application access"),path:"/chaos/freshapplication/access"}]))},[]);function N(B,M){B==="way"?(W(M),R("java")):B==="language"&&R(M)}function T(B,M,F,O,V){var S,L,X=M;return(B===g||B===h)&&(S=m.default.chioseCard,L=m.default.chioseName,X=F),r.default.createElement("div",{className:(0,i.default)(m.default.card,S),key:B,onClick:function(){return N(V,B)}},r.default.createElement("img",{src:X,className:m.default.img}),r.default.createElement("div",{className:(0,i.default)(m.default.name,L)},O))}function k(B,M,F){return r.default.createElement("div",{className:m.default.cardContent},T(B[0],B[1],B[2],B[3],F),T(M[0],M[1],M[2],M[3],F))}function Y(){return r.default.createElement("div",null,r.default.createElement("div",{className:m.default.contentChiose},r.default.createElement("div",{className:m.default.title},r.default.createElement(a.default,null,"Application management, please select application language")),k(["java","https://img.alicdn.com/tfs/TB18mMPJ7L0gK0jSZFtXXXQCXXa-24-32.png","https://img.alicdn.com/tfs/TB1gSMWJ7T2gK0jSZFkXXcIQFXa-24-32.png","Java"],["other","https://img.alicdn.com/tfs/TB1OT.TJ.Y1gK0jSZFCXXcwqXXa-26-30.png","https://img.alicdn.com/tfs/TB18U4dbP39YK4jSZPcXXXrUFXa-26-30.png","\u5176\u5B83"],"language")),h==="java"&&r.default.createElement("div",{className:m.default.guide},r.default.createElement(a.default,null,"Specify the application and application group by configuring the JVM startup parameters, which is used to accurately divide the application / application group to which the machine belongs (it does not conflict with the application / application group specified when installing the probe). The configuration steps are as follows:")),r.default.createElement(y.default,{way:g,language:h}))}return r.default.createElement("div",{className:m.default.appAccess},r.default.createElement("div",{className:m.default.contentChiose},r.default.createElement("div",{className:m.default.title},r.default.createElement(a.default,null,"Please select application deployment method")),k(["host","https://img.alicdn.com/tfs/TB1TV0WaDM11u4jSZPxXXahcXXa-28-28.png","https://img.alicdn.com/tfs/TB15tsRJ.Y1gK0jSZFMXXaWcVXa-28-28.png","host"],["k8s","https://img.alicdn.com/tfs/TB1T5UQJVP7gK0jSZFjXXc5aXXa-30-30.png","https://img.alicdn.com/tfs/TB1k7J4fycKOu4jSZKbXXc19XXa-30-30.png","Kubernetes"],"way")),g==="host"?Y():r.default.createElement("div",null,r.default.createElement("div",{className:m.default.guide},r.default.createElement(a.default,null,"Identify the application / application group to which it belongs through the pod tag. The configuration is as follows:")),r.default.createElement(y.default,{way:g,language:h}),r.default.createElement(n.default,{title:"",type:"warning",className:m.default.jvmWaring},r.default.createElement(a.default,null,"In the cluster where the fault drill probe has been deployed, modifying the pod tag can take effect without redeploying the fault drill probe."))))}var Q=D;p.default=Q})},10975:(f,A,e)=>{"use strict";e.d(A,{Z:()=>d});var o=e(60994),u=e.n(o),s=e(93476),c=e.n(s),l=c()(u());l.push([f.id,`  .index__codeContent__U53LG {\r
    width: 100%;\r
    padding: 16px 0 16px 24px;\r
    background: #F2F4F5;\r
    font-size: 12px;\r
    color: #333333;\r
    display: flex;\r
    justify-content: space-between;\r
    align-items: center;\r
    margin-bottom: 16px;\r
    position: relative;\r
}\r
\r
.index__copy__YQczU {\r
      cursor: pointer;\r
      width: 48px;\r
      height: 36px;\r
      background: #dedede;\r
      padding: 10px 17px;\r
      position: absolute;\r
      top: 0;\r
      right: 0;\r
    }\r
\r
.index__copy__YQczU .index__copyIcon__2gTPa {\r
        width: 14px !important;\r
        height: 16px !important;\r
      }\r
\r
.index__copy__YQczU .index__copyIcon__2gTPa::before{\r
          width: 14px !important;\r
          height: 16px !important;\r
          color: #fff;\r
        }\r
\r
  .index__codeLine__TDTbc {\r
    line-height: 20px;\r
  }\r
\r
  .index__jvmParam__lQsfu {\r
    font-size: 12px;\r
    color: #333333;\r
    font-family: PingFangSC-Medium;\r
    margin-bottom: 6px;\r
  }\r
  .index__jvmWaring__bBbW\\+ {\r
    margin-top: 16px;\r
  }\r
\r
  .index__podWord__a6Eha {\r
    font-size: 12px;\r
    color: #333333;\r
    line-height: 22px;\r
  }\r
\r
  .index__podWord__a6Eha .index__tag__tPkcQ {\r
      display: inline-block;\r
      height: 20px;\r
      padding: 0 8px;\r
      color: #333;\r
      background: #f5f5f5;\r
      border: 1px solid #ccc;\r
      border-radius: 2px;\r
      -webkit-border-radius: 2px;\r
      -moz-border-radius: 2px;\r
      -ms-border-radius: 2px;\r
      -o-border-radius: 2px;\r
      margin: 0 2px;\r
    }\r
\r
  .index__podWord__a6Eha .index__nameStyle__W5eSA {\r
      font-family: PingFangSC-Medium;\r
      font-size: 12px;\r
      color: #333333;\r
    }\r
\r
  .index__imageContent__iH4Zj {\r
    width: 960px;\r
    min-height: 154px;\r
  }\r
\r
  .index__imageContent__iH4Zj img {\r
      width: 100%;\r
      height: 100%;\r
    }\r
\r
  .index__altWord__VheTV {\r
    font-size: 12px;\r
    color: #555;\r
    line-height: 24px;\r
  }\r
\r
  .index__guide__wKpbn {\r
    font-size: 12px;\r
    color: #333;\r
    margin-top: 24px;\r
    font-family: PingFangSC-Regular;\r
  }\r
\r
.index__ulList__nGFf9 {\r
    margin-top: 6px;\r
  }\r
\r
.index__ulList__nGFf9 li {\r
      line-height: 22px;\r
    }\r
\r
.index__ulList__nGFf9 li:before {\r
        content: "";\r
        width: 4px;\r
        height: 4px;\r
        display: inline-block;\r
        border-radius: 50%;\r
        background: #0070cc;\r
        vertical-align: middle;\r
        margin-right: 6px;\r
        }\r
\r
\r
.index__stepContent__isqPV {\r
    margin-top: 24px; \r
  }\r
\r
\r
.index__stepContent__isqPV .next-step-item-wait .next-step-item-container .next-step-item-node-placeholder .next-step-item-node .next-step-item-node-circle {\r
      background: #0070cc;\r
      border-color: #0070cc;\r
      color: #fff;\r
    }\r
\r
\r
.index__stepContent__isqPV .next-step-item-wait .next-step-item-body .next-step-item-title {\r
      color: #333;\r
    }`,"",{version:3,sources:["webpack://./pages/Chaos/Application/AccessStepComponent/index.css"],names:[],mappings:"EAAE;IACE,WAAW;IACX,yBAAyB;IACzB,mBAAmB;IACnB,eAAe;IACf,cAAc;IACd,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;MACM,eAAe;MACf,WAAW;MACX,YAAY;MACZ,mBAAmB;MACnB,kBAAkB;MAClB,kBAAkB;MAClB,MAAM;MACN,QAAQ;IAYV;;AAVE;QACE,sBAAsB;QACtB,uBAAuB;MAOzB;;AALE;UACE,sBAAsB;UACtB,uBAAuB;UACvB,WAAW;QACb;;EAIN;IACE,iBAAiB;EACnB;;EAEA;IACE,eAAe;IACf,cAAc;IACd,8BAA8B;IAC9B,kBAAkB;EACpB;EACA;IACE,gBAAgB;EAClB;;EAEA;IACE,eAAe;IACf,cAAc;IACd,iBAAiB;EAsBnB;;EApBE;MACE,qBAAqB;MACrB,YAAY;MACZ,cAAc;MACd,WAAW;MACX,mBAAmB;MACnB,sBAAsB;MACtB,kBAAkB;MAClB,0BAA0B;MAC1B,uBAAuB;MACvB,sBAAsB;MACtB,qBAAqB;MACrB,aAAa;IACf;;EAEA;MACE,8BAA8B;MAC9B,eAAe;MACf,cAAc;IAChB;;EAGF;IACE,YAAY;IACZ,iBAAiB;EAMnB;;EAJE;MACE,WAAW;MACX,YAAY;IACd;;EAGF;IACE,eAAe;IACf,WAAW;IACX,iBAAiB;EACnB;;EAEA;IACE,eAAe;IACf,WAAW;IACX,gBAAgB;IAChB,+BAA+B;EACjC;;AAEF;IACI,eAAe;EAejB;;AAdE;MACE,iBAAiB;IAYnB;;AAVE;QACE,WAAW;QACX,UAAU;QACV,WAAW;QACX,qBAAqB;QACrB,kBAAkB;QAClB,mBAAmB;QACnB,sBAAsB;QACtB,iBAAiB;QACjB;;;AAKR;IACI,gBAAgB;EAWlB;;;AATE;MACE,mBAAmB;MACnB,qBAAqB;MACrB,WAAW;IACb;;;AAEA;MACE,WAAW;IACb",sourcesContent:[`  .codeContent {\r
    width: 100%;\r
    padding: 16px 0 16px 24px;\r
    background: #F2F4F5;\r
    font-size: 12px;\r
    color: #333333;\r
    display: flex;\r
    justify-content: space-between;\r
    align-items: center;\r
    margin-bottom: 16px;\r
    position: relative;\r
}\r
\r
.copy {\r
      cursor: pointer;\r
      width: 48px;\r
      height: 36px;\r
      background: #dedede;\r
      padding: 10px 17px;\r
      position: absolute;\r
      top: 0;\r
      right: 0;\r
\r
      .copyIcon {\r
        width: 14px !important;\r
        height: 16px !important;\r
\r
        &::before{\r
          width: 14px !important;\r
          height: 16px !important;\r
          color: #fff;\r
        }\r
      }\r
    }\r
\r
  .codeLine {\r
    line-height: 20px;\r
  }\r
\r
  .jvmParam {\r
    font-size: 12px;\r
    color: #333333;\r
    font-family: PingFangSC-Medium;\r
    margin-bottom: 6px;\r
  }\r
  .jvmWaring {\r
    margin-top: 16px;\r
  }\r
\r
  .podWord {\r
    font-size: 12px;\r
    color: #333333;\r
    line-height: 22px;\r
\r
    .tag {\r
      display: inline-block;\r
      height: 20px;\r
      padding: 0 8px;\r
      color: #333;\r
      background: #f5f5f5;\r
      border: 1px solid #ccc;\r
      border-radius: 2px;\r
      -webkit-border-radius: 2px;\r
      -moz-border-radius: 2px;\r
      -ms-border-radius: 2px;\r
      -o-border-radius: 2px;\r
      margin: 0 2px;\r
    }\r
\r
    .nameStyle {\r
      font-family: PingFangSC-Medium;\r
      font-size: 12px;\r
      color: #333333;\r
    }\r
  }\r
\r
  .imageContent {\r
    width: 960px;\r
    min-height: 154px;\r
\r
    img {\r
      width: 100%;\r
      height: 100%;\r
    }\r
  }\r
\r
  .altWord {\r
    font-size: 12px;\r
    color: #555;\r
    line-height: 24px;\r
  }\r
\r
  .guide {\r
    font-size: 12px;\r
    color: #333;\r
    margin-top: 24px;\r
    font-family: PingFangSC-Regular;\r
  }\r
\r
.ulList {\r
    margin-top: 6px;\r
    li {\r
      line-height: 22px;\r
\r
      &:before {\r
        content: "";\r
        width: 4px;\r
        height: 4px;\r
        display: inline-block;\r
        border-radius: 50%;\r
        background: #0070cc;\r
        vertical-align: middle;\r
        margin-right: 6px;\r
        }\r
    }\r
  }\r
\r
\r
.stepContent {\r
    margin-top: 24px;\r
\r
    :global(.next-step-item-wait .next-step-item-container .next-step-item-node-placeholder .next-step-item-node .next-step-item-node-circle) {\r
      background: #0070cc;\r
      border-color: #0070cc;\r
      color: #fff;\r
    } \r
\r
    :global(.next-step-item-wait .next-step-item-body .next-step-item-title) {\r
      color: #333;\r
    } \r
  }`],sourceRoot:""}]),l.locals={codeContent:"index__codeContent__U53LG",copy:"index__copy__YQczU",copyIcon:"index__copyIcon__2gTPa",codeLine:"index__codeLine__TDTbc",jvmParam:"index__jvmParam__lQsfu",jvmWaring:"index__jvmWaring__bBbW+",podWord:"index__podWord__a6Eha",tag:"index__tag__tPkcQ",nameStyle:"index__nameStyle__W5eSA",imageContent:"index__imageContent__iH4Zj",altWord:"index__altWord__VheTV",guide:"index__guide__wKpbn",ulList:"index__ulList__nGFf9",stepContent:"index__stepContent__isqPV"};const d=l},29316:(f,A,e)=>{"use strict";e.d(A,{Z:()=>d});var o=e(60994),u=e.n(o),s=e(93476),c=e.n(s),l=c()(u());l.push([f.id,`.index__warp__TrTm0 .index__cardContent__mLHmz {\r
    display: flex;\r
    justify-content: flex-start;\r
    flex-wrap: wrap;\r
  }\r
  .index__warp__TrTm0 .index__pagination__xwPyo {\r
    text-align: right;\r
    margin-top: 16px;\r
  }\r
  .index__warp__TrTm0 .index__emptyData__xV52H {\r
    display: flex;\r
    align-items: center;\r
    justify-self: start;\r
    margin: auto;\r
    margin-top: 10%;\r
  }\r
  .index__warp__TrTm0 .index__emptyData__xV52H img {\r
      width: 137px;\r
      height: 130px;\r
      margin-right: 30px;\r
    }\r
  .index__warp__TrTm0 .index__emptyData__xV52H div .index__title__BqeBz {\r
        font-family: PingFangSC-Medium;\r
        font-size: 18px;\r
        color: #222222;\r
        margin-bottom: 8px;\r
      }\r
  .index__warp__TrTm0 .index__emptyData__xV52H div .index__hrefAction__pC7Qd {\r
        font-family: PingFangSC-Regular;\r
        font-size: 12px;\r
        color: #0070CC;\r
        cursor: pointer;\r
      }\r
  .index__warp__TrTm0 .index__emptyData__xV52H div div {\r
        line-height: 20px;\r
      }\r
\r
.index__card__wphgI {\r
  width: 384px;\r
  height: 136px;\r
  border: 1px solid #dedede;\r
  padding: 14px 16px 16px;\r
  margin-top: 16px;\r
  position: relative;\r
  cursor: pointer;\r
  margin-right: 16px;\r
\r
}\r
\r
.index__card__wphgI:hover {\r
    border: 1px solid rgba(0,112,204,0.36);\r
    box-shadow: 0 1px 8px 0 rgba(0,112,204,0.36);\r
  }\r
\r
.index__card__wphgI .index__defaultIcon__nebiS {\r
    width: 28px;\r
    height: 28px;\r
    position: absolute;\r
    top: 0px;\r
    right: 0px;\r
  }\r
\r
.index__card__wphgI .index__topContent__XOQUb {\r
    display: flex;\r
    justify-content: space-between;\r
    margin-bottom: 27px;\r
    line-height: 22px;\r
  }\r
\r
.index__card__wphgI .index__topContent__XOQUb .index__cardTitle__LIfnN {\r
      font-size: 14px;\r
      color: #333;\r
      width: 205px;\r
      overflow: hidden;\r
      text-overflow: ellipsis;\r
      white-space:nowrap;\r
    }\r
\r
.index__card__wphgI .index__topContent__XOQUb .index__cardTitle__LIfnN .index__tipIcon__8c1JC {\r
        margin-left: 8px;\r
      }\r
\r
.index__card__wphgI .index__topContent__XOQUb .index__cardTitle__LIfnN .index__tipIcon__8c1JC i {\r
          font-size: 16px;\r
        }\r
\r
.index__card__wphgI .index__topContent__XOQUb .index__cardTitle__LIfnN .index__tipIcon__8c1JC i::before {\r
            width: 16px;\r
            height: 16px;\r
            font-size: 16px;\r
            vertical-align: inherit;\r
          }\r
\r
.index__card__wphgI .index__topContent__XOQUb .index__typeTip__vBJEO {\r
      font-size: 12px;\r
      color: #c1c1c1;\r
    }\r
\r
.index__card__wphgI .index__bottomContent__tpr9a {\r
    display: flex;\r
    justify-content: space-between;\r
  }\r
\r
.index__card__wphgI .index__bottomContent__tpr9a .index__item__DdRxj .index__label__slw\\+k {\r
        font-size: 12px;\r
        color: #555;\r
        margin-bottom: 4px;\r
      }\r
\r
.index__card__wphgI .index__bottomContent__tpr9a .index__item__DdRxj .index__value__MEW8U {\r
        font-size: 28px;\r
        color: #333;\r
\r
      }\r
\r
.index__actionContent__G0HXA {\r
  display: flex;\r
  justify-content: space-between;\r
  align-items: center;\r
}\r
\r
.index__actionContent__G0HXA .index__searchContent__Y4lcx {\r
    width: 460px;\r
    margin-bottom: 8px;\r
  }\r
\r
.index__appBase__uDJKb {\r
  width: 100%;\r
  height: 132px;\r
  border: 1px solid #dedede;\r
  padding: 16px;\r
\r
}\r
\r
.index__appBase__uDJKb .index__baseTitle__571Bf {\r
    font-size: 14px;\r
    color: #333;\r
    margin-bottom: 24px;\r
  }\r
\r
.index__appBase__uDJKb .index__content__mmGfW {\r
    display: flex;\r
    justify-content: space-between;\r
  }\r
\r
.index__appBase__uDJKb .index__content__mmGfW .index__leftContent__hZ2Jh .index__topLine__RZ8sR {\r
        display: flex;\r
        justify-content: space-between;\r
        margin-bottom: 8px;\r
        line-height: 20px;\r
      }\r
\r
.index__appBase__uDJKb .index__content__mmGfW .index__leftContent__hZ2Jh .index__bottomLine__t6LZw {\r
        display: flex;\r
        justify-content: flex-start;\r
        line-height: 20px;\r
      }\r
\r
.index__appBase__uDJKb .index__content__mmGfW .index__leftContent__hZ2Jh .index__lineItem__a9S7Q .index__lineLabel__rFDDI {\r
          font-size: 12px;\r
          color: #888;\r
          display: inline-block;\r
          width: 108px;\r
        }\r
\r
.index__appBase__uDJKb .index__content__mmGfW .index__leftContent__hZ2Jh .index__lineItem__a9S7Q .index__lineValue__xUi3Q {\r
          font-size: 12px;\r
          color: #333;\r
          display: inline-block;\r
          width: 181px;\r
          margin-left: 8px;\r
        }\r
\r
.index__appBase__uDJKb .index__content__mmGfW .index__rightContent__Z1N5a {\r
      display: flex;\r
      flex: 1;\r
      justify-content: space-around;\r
    }\r
\r
.index__appBase__uDJKb .index__content__mmGfW .index__rightContent__Z1N5a .index__label__slw\\+k {\r
        font-size: 12px;\r
        color: #555;\r
        margin-bottom: 14px;\r
      }\r
\r
.index__appBase__uDJKb .index__content__mmGfW .index__rightContent__Z1N5a .index__value__MEW8U {\r
        font-size: 28px;\r
        color: #333;\r
      }\r
\r
.index__appBase__uDJKb .index__content__mmGfW .index__rightContent__Z1N5a .index__groupItem__bQvEA {\r
        width: 272px;\r
      }\r
\r
.index__unit__n84gK {\r
  margin-left: 8px;\r
  font-size: 12px;\r
  color: #888;\r
}\r
\r
.index__moreTag__TDApc {\r
  font-size: 12px;\r
  color: #0070cc;\r
  cursor: pointer;\r
}\r
\r
.index__icon__m1SVF {\r
  font-size: 14px;\r
  margin-right: 8px;\r
}\r
\r
.index__icon__m1SVF::before{\r
    font-size: 14px !important;\r
    width: 14px !important;\r
  }\r
\r
.index__onLineState__3TH3R {\r
  color: #1E8E3E;\r
}\r
\r
.index__notInstall__x9rH6 {\r
  color: #888;\r
}\r
\r
.index__offLineState__HlF9j {\r
  color: #D93026;\r
}\r
\r
.index__interrupt__zzMsc {\r
  color: #FFC440;\r
}\r
\r
.index__loading__ieVUv {\r
  color: #888;\r
}\r
\r
.index__appAccess__FPVdH {\r
  font-family: PingFangSC-Regular;\r
}\r
\r
.index__appAccess__FPVdH .index__title__BqeBz {\r
    font-size: 14px;\r
    color: #333;\r
  }\r
\r
.index__appAccess__FPVdH .index__contentChiose__5dGbe {\r
    margin-top: 20px;\r
  }\r
\r
.index__appAccess__FPVdH .index__cardContent__mLHmz {\r
    display: flex;\r
    justify-content: flex-start;\r
    align-items: center;\r
  }\r
\r
.index__appAccess__FPVdH .index__card__wphgI {\r
    width: 180px;\r
    height: 72px;\r
    background: #F7F9FF;\r
    border: 1px solid #dedede;\r
    padding-top: 20px;\r
    padding-left: 25px;\r
    display: flex;\r
    justify-content: flex-start;\r
    align-items: center;\r
    margin-right: 16px;\r
  }\r
\r
.index__appAccess__FPVdH .index__card__wphgI .index__img__gmZIV {\r
      width: 28px;\r
      height: 28px;\r
      margin-right: 10px;\r
    }\r
\r
.index__appAccess__FPVdH .index__card__wphgI .index__name__foEnk {\r
      font-size: 16px;\r
      color: #555;\r
    }\r
\r
.index__appAccess__FPVdH .index__chioseCard__TviQG {\r
    background: #F3FAFF;\r
    border: 1px solid #0070CC;\r
    color: #0070CC;\r
  }\r
\r
.index__appAccess__FPVdH .index__chioseCard__TviQG .index__chioseName__OY437 {\r
      color: #0070cc;\r
    }\r
\r
.index__appAccess__FPVdH .index__stepContent__gtqNI {\r
    margin-top: 24px; \r
  }\r
\r
.index__appAccess__FPVdH .index__stepContent__gtqNI .next-step-item-wait .next-step-item-container .next-step-item-node-placeholder .next-step-item-node .next-step-item-node-circle {\r
      background: #0070cc;\r
      border-color: #0070cc;\r
      color: #fff;\r
    }\r
\r
.index__appAccess__FPVdH .index__stepContent__gtqNI .next-step-item-wait .next-step-item-body .next-step-item-title {\r
      color: #333;\r
    }\r
\r
.index__appAccess__FPVdH .index__codeContent__yzU75 {\r
    width: 100%;\r
    padding: 16px 0 16px 24px;\r
    background: #F2F4F5;\r
    font-size: 12px;\r
    color: #333333;\r
    display: flex;\r
    justify-content: space-between;\r
    align-items: center;\r
    margin-bottom: 16px;\r
    position: relative;\r
  }\r
\r
.index__appAccess__FPVdH .index__codeContent__yzU75 .index__copy__wQghF {\r
      cursor: pointer;\r
      width: 48px;\r
      height: 36px;\r
      background: #dedede;\r
      padding: 10px 17px;\r
      position: absolute;\r
      top: 0;\r
      right: 0;\r
    }\r
\r
.index__appAccess__FPVdH .index__codeContent__yzU75 .index__copy__wQghF .index__copyIcon__Cf84d {\r
        width: 14px !important;\r
        height: 16px !important;\r
      }\r
\r
.index__appAccess__FPVdH .index__codeContent__yzU75 .index__copy__wQghF .index__copyIcon__Cf84d::before{\r
          width: 14px !important;\r
          height: 16px !important;\r
          color: #fff;\r
        }\r
\r
.index__appAccess__FPVdH .index__codeLine__a1thc {\r
    line-height: 20px;\r
  }\r
\r
.index__appAccess__FPVdH .index__jvmParam__FtgLJ {\r
    font-size: 12px;\r
    color: #333333;\r
    font-family: PingFangSC-Medium;\r
    margin-bottom: 6px;\r
  }\r
\r
.index__appAccess__FPVdH .index__ulList__ZhGD3 {\r
    margin-top: 6px;\r
  }\r
\r
.index__appAccess__FPVdH .index__ulList__ZhGD3 li {\r
      line-height: 22px;\r
    }\r
\r
.index__appAccess__FPVdH .index__ulList__ZhGD3 li:before {\r
        content: "";\r
        width: 4px;\r
        height: 4px;\r
        display: inline-block;\r
        border-radius: 50%;\r
        background: #0070cc;\r
        vertical-align: middle;\r
        margin-right: 6px;\r
        }\r
\r
.index__appAccess__FPVdH .index__jvmWaring__UhCGO {\r
    margin-top: 16px;\r
  }\r
\r
.index__appAccess__FPVdH .index__podWord__Rji3T {\r
    font-size: 12px;\r
    color: #333333;\r
    line-height: 22px;\r
  }\r
\r
.index__appAccess__FPVdH .index__podWord__Rji3T .index__tag__t0aBK {\r
      display: inline-block;\r
      height: 20px;\r
      padding: 0 8px;\r
      color: #333;\r
      background: #f5f5f5;\r
      border: 1px solid #ccc;\r
      border-radius: 2px;\r
      -webkit-border-radius: 2px;\r
      -moz-border-radius: 2px;\r
      -ms-border-radius: 2px;\r
      -o-border-radius: 2px;\r
      margin: 0 2px;\r
    }\r
\r
.index__appAccess__FPVdH .index__podWord__Rji3T .index__nameStyle__eeJ-1 {\r
      font-family: PingFangSC-Medium;\r
      font-size: 12px;\r
      color: #333333;\r
    }\r
\r
.index__appAccess__FPVdH .index__imageContent__QeJ0A {\r
    width: 960px;\r
    min-height: 154px;\r
  }\r
\r
.index__appAccess__FPVdH .index__imageContent__QeJ0A img {\r
      width: 100%;\r
      height: 100%;\r
    }\r
\r
.index__appAccess__FPVdH .index__altWord__8m9mu {\r
    font-size: 12px;\r
    color: #555;\r
    line-height: 24px;\r
  }\r
\r
.index__appAccess__FPVdH .index__guide__teIpm {\r
    font-size: 12px;\r
    color: #333;\r
    margin-top: 24px;\r
    font-family: PingFangSC-Regular;\r
  }\r
\r
.index__loading__ieVUv {\r
  padding: 15% 45%;\r
}\r
\r
.index__nodeTags__TUos\\+ {\r
  margin-right: 4px;\r
  margin-bottom: 2px;\r
}\r
\r
.index__setItem__zDdi\\+ {\r
  margin-bottom: 4px;\r
  display: flex;\r
  justify-content: flex-start;\r
  align-items: center;\r
  line-height: 28px;\r
}\r
\r
.index__setItem__zDdi\\+ .index__label__slw\\+k {\r
    width: 80px;\r
    margin-right: 10px;\r
    font-size: 12px;\r
  }\r
\r
.index__setItem__zDdi\\+ .index__value__MEW8U {\r
    font-size: 12px;\r
    width: 466px;\r
  }\r
\r
.index__setItem__zDdi\\+ .index__valueComponent__YDwag {\r
    padding-top: 10px;\r
    width: 300px;\r
  }\r
\r
.index__drawerSumit__iMvQH {\r
  margin-right: 8px !important;\r
}\r
\r
.index__empIds__lJa-C {\r
  margin-bottom: 30px;\r
}\r
\r
.index__empIds__lJa-C li {\r
    height: 28px;\r
    display: flex;\r
    justify-content: flex-start;\r
    align-items: center;\r
  }\r
\r
.index__delete__QF9zh {\r
  color: #0070cc;\r
  cursor: pointer;\r
  margin-left: 20px;\r
}\r
\r
.index__drawerContent__f6juk {\r
  padding: 20px;\r
}\r
\r
.index__drawerContent__f6juk .index__label__slw\\+k {\r
    font-size: 12px;\r
    color: #000;\r
    line-height: 26px;\r
  }\r
\r
.index__drawerContent__f6juk .index__labelTitle__CyL6d {\r
    font-size: 12px;\r
    color: #000;\r
    line-height: 26px;\r
    margin-bottom: 5px;\r
  }\r
\r
.index__drawerContent__f6juk .index__description__HqEjg {\r
    color: #555;\r
    line-height: 20px;\r
  }\r
\r
.index__drawerContent__f6juk .index__value__MEW8U {\r
    width: 100%;\r
    margin-bottom: 20px;\r
  }`,"",{version:3,sources:["webpack://./pages/Chaos/Application/ApplicationAccess/index.css"],names:[],mappings:"AACE;IACE,aAAa;IACb,2BAA2B;IAC3B,eAAe;EACjB;EAEA;IACE,iBAAiB;IACjB,gBAAgB;EAClB;EAEA;IACE,aAAa;IACb,mBAAmB;IACnB,mBAAmB;IACnB,YAAY;IACZ,eAAe;EA4BjB;EA1BE;MACE,YAAY;MACZ,aAAa;MACb,kBAAkB;IACpB;EAIE;QACE,8BAA8B;QAC9B,eAAe;QACf,cAAc;QACd,kBAAkB;MACpB;EAEA;QACE,+BAA+B;QAC/B,eAAe;QACf,cAAc;QACd,eAAe;MACjB;EAEA;QACE,iBAAiB;MACnB;;AAKN;EACE,YAAY;EACZ,aAAa;EACb,yBAAyB;EACzB,uBAAuB;EACvB,gBAAgB;EAChB,kBAAkB;EAClB,eAAe;EACf,kBAAkB;;AAuEpB;;AArEE;IACE,sCAAsC;IACtC,4CAA4C;EAC9C;;AAEA;IACE,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,QAAQ;IACR,UAAU;EACZ;;AAEA;IACE,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,iBAAiB;EA8BnB;;AA5BE;MACE,eAAe;MACf,WAAW;MACX,YAAY;MACZ,gBAAgB;MAChB,uBAAuB;MACvB,kBAAkB;IAgBpB;;AAdE;QACE,gBAAgB;MAYlB;;AAVE;UACE,eAAe;QAQjB;;AANE;YACE,WAAW;YACX,YAAY;YACZ,eAAe;YACf,uBAAuB;UACzB;;AAKN;MACE,eAAe;MACf,cAAc;IAChB;;AAGF;IACE,aAAa;IACb,8BAA8B;EAgBhC;;AAZI;QACE,eAAe;QACf,WAAW;QACX,kBAAkB;MACpB;;AAEA;QACE,eAAe;QACf,WAAW;;MAEb;;AAMN;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AAMrB;;AAJE;IACE,YAAY;IACZ,kBAAkB;EACpB;;AAGF;EACE,WAAW;EACX,aAAa;EACb,yBAAyB;EACzB,aAAa;;AAoEf;;AAlEE;IACE,eAAe;IACf,WAAW;IACX,mBAAmB;EACrB;;AAEA;IACE,aAAa;IACb,8BAA8B;EAwDhC;;AApDI;QACE,aAAa;QACb,8BAA8B;QAC9B,kBAAkB;QAClB,iBAAiB;MACnB;;AAEA;QACE,aAAa;QACb,2BAA2B;QAC3B,iBAAiB;MACnB;;AAGE;UACE,eAAe;UACf,WAAW;UACX,qBAAqB;UACrB,YAAY;QACd;;AAEA;UACE,eAAe;UACf,WAAW;UACX,qBAAqB;UACrB,YAAY;UACZ,gBAAgB;QAClB;;AAKJ;MACE,aAAa;MACb,OAAO;MACP,6BAA6B;IAgB/B;;AAdE;QACE,eAAe;QACf,WAAW;QACX,mBAAmB;MACrB;;AAEA;QACE,eAAe;QACf,WAAW;MACb;;AAEA;QACE,YAAY;MACd;;AAMN;EACE,gBAAgB;EAChB,eAAe;EACf,WAAW;AACb;;AAEA;EACE,eAAe;EACf,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,iBAAiB;AAMnB;;AAJE;IACE,0BAA0B;IAC1B,sBAAsB;EACxB;;AAGF;EACE,cAAc;AAChB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,+BAA+B;AAsLjC;;AApLE;IACE,eAAe;IACf,WAAW;EACb;;AAEA;IACE,gBAAgB;EAClB;;AAEA;IACE,aAAa;IACb,2BAA2B;IAC3B,mBAAmB;EACrB;;AAEA;IACE,YAAY;IACZ,YAAY;IACZ,mBAAmB;IACnB,yBAAyB;IACzB,iBAAiB;IACjB,kBAAkB;IAClB,aAAa;IACb,2BAA2B;IAC3B,mBAAmB;IACnB,kBAAkB;EAYpB;;AAVE;MACE,WAAW;MACX,YAAY;MACZ,kBAAkB;IACpB;;AAEA;MACE,eAAe;MACf,WAAW;IACb;;AAGF;IACE,mBAAmB;IACnB,yBAAyB;IACzB,cAAc;EAKhB;;AAHE;MACE,cAAc;IAChB;;AAGF;IACE,gBAAgB;EAWlB;;AATE;MACE,mBAAmB;MACnB,qBAAqB;MACrB,WAAW;IACb;;AAEA;MACE,WAAW;IACb;;AAGF;IACE,WAAW;IACX,yBAAyB;IACzB,mBAAmB;IACnB,eAAe;IACf,cAAc;IACd,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,mBAAmB;IACnB,kBAAkB;EAuBpB;;AArBE;MACE,eAAe;MACf,WAAW;MACX,YAAY;MACZ,mBAAmB;MACnB,kBAAkB;MAClB,kBAAkB;MAClB,MAAM;MACN,QAAQ;IAYV;;AAVE;QACE,sBAAsB;QACtB,uBAAuB;MAOzB;;AALE;UACE,sBAAsB;UACtB,uBAAuB;UACvB,WAAW;QACb;;AAKN;IACE,iBAAiB;EACnB;;AAEA;IACE,eAAe;IACf,cAAc;IACd,8BAA8B;IAC9B,kBAAkB;EACpB;;AAEA;IACE,eAAe;EAejB;;AAdE;MACE,iBAAiB;IAYnB;;AAVE;QACE,WAAW;QACX,UAAU;QACV,WAAW;QACX,qBAAqB;QACrB,kBAAkB;QAClB,mBAAmB;QACnB,sBAAsB;QACtB,iBAAiB;QACjB;;AAIN;IACE,gBAAgB;EAClB;;AAEA;IACE,eAAe;IACf,cAAc;IACd,iBAAiB;EAsBnB;;AApBE;MACE,qBAAqB;MACrB,YAAY;MACZ,cAAc;MACd,WAAW;MACX,mBAAmB;MACnB,sBAAsB;MACtB,kBAAkB;MAClB,0BAA0B;MAC1B,uBAAuB;MACvB,sBAAsB;MACtB,qBAAqB;MACrB,aAAa;IACf;;AAEA;MACE,8BAA8B;MAC9B,eAAe;MACf,cAAc;IAChB;;AAGF;IACE,YAAY;IACZ,iBAAiB;EAMnB;;AAJE;MACE,WAAW;MACX,YAAY;IACd;;AAGF;IACE,eAAe;IACf,WAAW;IACX,iBAAiB;EACnB;;AAEA;IACE,eAAe;IACf,WAAW;IACX,gBAAgB;IAChB,+BAA+B;EACjC;;AAGF;EACE,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,2BAA2B;EAC3B,mBAAmB;EACnB,iBAAiB;AAiBnB;;AAfE;IACE,WAAW;IACX,kBAAkB;IAClB,eAAe;EACjB;;AAEA;IACE,eAAe;IACf,YAAY;EACd;;AAEA;IACE,iBAAiB;IACjB,YAAY;EACd;;AAGF;EACE,4BAA4B;AAC9B;;AAEA;EACE,mBAAmB;AAQrB;;AANE;IACE,YAAY;IACZ,aAAa;IACb,2BAA2B;IAC3B,mBAAmB;EACrB;;AAGF;EACE,cAAc;EACd,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,aAAa;AAwBf;;AAtBE;IACE,eAAe;IACf,WAAW;IACX,iBAAiB;EACnB;;AAEA;IACE,eAAe;IACf,WAAW;IACX,iBAAiB;IACjB,kBAAkB;EACpB;;AAEA;IACE,WAAW;IACX,iBAAiB;EACnB;;AAEA;IACE,WAAW;IACX,mBAAmB;EACrB",sourcesContent:[`.warp {\r
  .cardContent {\r
    display: flex;\r
    justify-content: flex-start;\r
    flex-wrap: wrap;\r
  }\r
\r
  .pagination {\r
    text-align: right;\r
    margin-top: 16px;\r
  }\r
\r
  .emptyData {\r
    display: flex;\r
    align-items: center;\r
    justify-self: start;\r
    margin: auto;\r
    margin-top: 10%;\r
\r
    img {\r
      width: 137px;\r
      height: 130px;\r
      margin-right: 30px;\r
    }\r
\r
    div {\r
\r
      .title {\r
        font-family: PingFangSC-Medium;\r
        font-size: 18px;\r
        color: #222222;\r
        margin-bottom: 8px;\r
      }\r
\r
      .hrefAction {\r
        font-family: PingFangSC-Regular;\r
        font-size: 12px;\r
        color: #0070CC;\r
        cursor: pointer;\r
      }\r
\r
      div {\r
        line-height: 20px;\r
      }\r
    }\r
  }\r
}\r
\r
.card {\r
  width: 384px;\r
  height: 136px;\r
  border: 1px solid #dedede;\r
  padding: 14px 16px 16px;\r
  margin-top: 16px;\r
  position: relative;\r
  cursor: pointer;\r
  margin-right: 16px;\r
  \r
  &:hover {\r
    border: 1px solid rgba(0,112,204,0.36);\r
    box-shadow: 0 1px 8px 0 rgba(0,112,204,0.36);\r
  }\r
\r
  .defaultIcon {\r
    width: 28px;\r
    height: 28px;\r
    position: absolute;\r
    top: 0px;\r
    right: 0px;\r
  }\r
\r
  .topContent {\r
    display: flex;\r
    justify-content: space-between;\r
    margin-bottom: 27px;\r
    line-height: 22px;\r
\r
    .cardTitle {\r
      font-size: 14px;\r
      color: #333;\r
      width: 205px;\r
      overflow: hidden;\r
      text-overflow: ellipsis;\r
      white-space:nowrap;\r
\r
      .tipIcon {\r
        margin-left: 8px;\r
\r
        i {\r
          font-size: 16px;\r
\r
          &::before {\r
            width: 16px;\r
            height: 16px;\r
            font-size: 16px;\r
            vertical-align: inherit;\r
          }\r
        }\r
      }\r
    }\r
\r
    .typeTip {\r
      font-size: 12px;\r
      color: #c1c1c1;\r
    }\r
  }\r
\r
  .bottomContent {\r
    display: flex;\r
    justify-content: space-between;\r
\r
    .item {\r
\r
      .label {\r
        font-size: 12px;\r
        color: #555;\r
        margin-bottom: 4px;\r
      }\r
\r
      .value {\r
        font-size: 28px;\r
        color: #333;\r
\r
      }\r
    }\r
  }\r
\r
}\r
\r
.actionContent {\r
  display: flex;\r
  justify-content: space-between;\r
  align-items: center;\r
\r
  .searchContent {\r
    width: 460px;\r
    margin-bottom: 8px;\r
  }\r
}\r
\r
.appBase {\r
  width: 100%;\r
  height: 132px;\r
  border: 1px solid #dedede;\r
  padding: 16px;\r
\r
  .baseTitle {\r
    font-size: 14px;\r
    color: #333;\r
    margin-bottom: 24px;\r
  }\r
\r
  .content {\r
    display: flex;\r
    justify-content: space-between;\r
\r
    .leftContent {\r
  \r
      .topLine {\r
        display: flex;\r
        justify-content: space-between;\r
        margin-bottom: 8px;\r
        line-height: 20px;\r
      }\r
  \r
      .bottomLine {\r
        display: flex;\r
        justify-content: flex-start;\r
        line-height: 20px;\r
      }\r
  \r
      .lineItem {\r
        .lineLabel {\r
          font-size: 12px;\r
          color: #888;\r
          display: inline-block;\r
          width: 108px;\r
        }\r
        \r
        .lineValue {\r
          font-size: 12px;\r
          color: #333;\r
          display: inline-block;\r
          width: 181px;\r
          margin-left: 8px;\r
        }\r
      }\r
  \r
    }\r
  \r
    .rightContent {\r
      display: flex;\r
      flex: 1;\r
      justify-content: space-around;\r
  \r
      .label {\r
        font-size: 12px;\r
        color: #555;\r
        margin-bottom: 14px;\r
      }\r
\r
      .value {\r
        font-size: 28px;\r
        color: #333;\r
      }\r
\r
      .groupItem {\r
        width: 272px;\r
      }\r
    }\r
  }\r
\r
}\r
\r
.unit {\r
  margin-left: 8px;\r
  font-size: 12px;\r
  color: #888;\r
}\r
\r
.moreTag {\r
  font-size: 12px;\r
  color: #0070cc;\r
  cursor: pointer;\r
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
\r
.interrupt {\r
  color: #FFC440;\r
}\r
\r
.loading {\r
  color: #888;\r
}\r
\r
.appAccess {\r
  font-family: PingFangSC-Regular;\r
\r
  .title {\r
    font-size: 14px;\r
    color: #333;\r
  }\r
  \r
  .contentChiose {\r
    margin-top: 20px;\r
  }\r
\r
  .cardContent {\r
    display: flex;\r
    justify-content: flex-start;\r
    align-items: center;\r
  }\r
\r
  .card {\r
    width: 180px;\r
    height: 72px;\r
    background: #F7F9FF;\r
    border: 1px solid #dedede;\r
    padding-top: 20px;\r
    padding-left: 25px;\r
    display: flex;\r
    justify-content: flex-start;\r
    align-items: center;\r
    margin-right: 16px;\r
\r
    .img {\r
      width: 28px;\r
      height: 28px;\r
      margin-right: 10px;\r
    }\r
\r
    .name {\r
      font-size: 16px;\r
      color: #555;\r
    }\r
  }\r
\r
  .chioseCard {\r
    background: #F3FAFF;\r
    border: 1px solid #0070CC;\r
    color: #0070CC;\r
\r
    .chioseName {\r
      color: #0070cc;\r
    }\r
  }\r
\r
  .stepContent {\r
    margin-top: 24px;\r
\r
    :global(.next-step-item-wait .next-step-item-container .next-step-item-node-placeholder .next-step-item-node .next-step-item-node-circle) {\r
      background: #0070cc;\r
      border-color: #0070cc;\r
      color: #fff;\r
    } \r
\r
    :global(.next-step-item-wait .next-step-item-body .next-step-item-title) {\r
      color: #333;\r
    } \r
  }\r
\r
  .codeContent {\r
    width: 100%;\r
    padding: 16px 0 16px 24px;\r
    background: #F2F4F5;\r
    font-size: 12px;\r
    color: #333333;\r
    display: flex;\r
    justify-content: space-between;\r
    align-items: center;\r
    margin-bottom: 16px;\r
    position: relative;\r
\r
    .copy {\r
      cursor: pointer;\r
      width: 48px;\r
      height: 36px;\r
      background: #dedede;\r
      padding: 10px 17px;\r
      position: absolute;\r
      top: 0;\r
      right: 0;\r
\r
      .copyIcon {\r
        width: 14px !important;\r
        height: 16px !important;\r
\r
        &::before{\r
          width: 14px !important;\r
          height: 16px !important;\r
          color: #fff;\r
        }\r
      }\r
    }\r
  }\r
\r
  .codeLine {\r
    line-height: 20px;\r
  }\r
\r
  .jvmParam {\r
    font-size: 12px;\r
    color: #333333;\r
    font-family: PingFangSC-Medium;\r
    margin-bottom: 6px;\r
  }\r
\r
  .ulList {\r
    margin-top: 6px;\r
    li {\r
      line-height: 22px;\r
\r
      &:before {\r
        content: "";\r
        width: 4px;\r
        height: 4px;\r
        display: inline-block;\r
        border-radius: 50%;\r
        background: #0070cc;\r
        vertical-align: middle;\r
        margin-right: 6px;\r
        }\r
    }\r
  }\r
\r
  .jvmWaring {\r
    margin-top: 16px;\r
  }\r
\r
  .podWord {\r
    font-size: 12px;\r
    color: #333333;\r
    line-height: 22px;\r
\r
    .tag {\r
      display: inline-block;\r
      height: 20px;\r
      padding: 0 8px;\r
      color: #333;\r
      background: #f5f5f5;\r
      border: 1px solid #ccc;\r
      border-radius: 2px;\r
      -webkit-border-radius: 2px;\r
      -moz-border-radius: 2px;\r
      -ms-border-radius: 2px;\r
      -o-border-radius: 2px;\r
      margin: 0 2px;\r
    }\r
\r
    .nameStyle {\r
      font-family: PingFangSC-Medium;\r
      font-size: 12px;\r
      color: #333333;\r
    }\r
  }\r
\r
  .imageContent {\r
    width: 960px;\r
    min-height: 154px;\r
\r
    img {\r
      width: 100%;\r
      height: 100%;\r
    }\r
  }\r
\r
  .altWord {\r
    font-size: 12px;\r
    color: #555;\r
    line-height: 24px;\r
  }\r
\r
  .guide {\r
    font-size: 12px;\r
    color: #333;\r
    margin-top: 24px;\r
    font-family: PingFangSC-Regular;\r
  }\r
}\r
\r
.loading {\r
  padding: 15% 45%;\r
}\r
\r
.nodeTags {\r
  margin-right: 4px;\r
  margin-bottom: 2px;\r
}\r
\r
.setItem {\r
  margin-bottom: 4px;\r
  display: flex;\r
  justify-content: flex-start;\r
  align-items: center;\r
  line-height: 28px;\r
\r
  .label {\r
    width: 80px;\r
    margin-right: 10px;\r
    font-size: 12px;\r
  }\r
\r
  .value {\r
    font-size: 12px;\r
    width: 466px;\r
  }\r
\r
  .valueComponent {\r
    padding-top: 10px;\r
    width: 300px;\r
  }\r
}\r
\r
.drawerSumit {\r
  margin-right: 8px !important;\r
}\r
\r
.empIds {\r
  margin-bottom: 30px;\r
\r
  li {\r
    height: 28px;\r
    display: flex;\r
    justify-content: flex-start;\r
    align-items: center;\r
  }\r
}\r
\r
.delete {\r
  color: #0070cc;\r
  cursor: pointer;\r
  margin-left: 20px;\r
}\r
\r
.drawerContent {\r
  padding: 20px;\r
\r
  .label {\r
    font-size: 12px;\r
    color: #000;\r
    line-height: 26px;\r
  }\r
\r
  .labelTitle {\r
    font-size: 12px;\r
    color: #000;\r
    line-height: 26px;\r
    margin-bottom: 5px;\r
  }\r
\r
  .description {\r
    color: #555;\r
    line-height: 20px;\r
  }\r
\r
  .value {\r
    width: 100%;\r
    margin-bottom: 20px;\r
  }\r
}`],sourceRoot:""}]),l.locals={warp:"index__warp__TrTm0",cardContent:"index__cardContent__mLHmz",pagination:"index__pagination__xwPyo",emptyData:"index__emptyData__xV52H",title:"index__title__BqeBz",hrefAction:"index__hrefAction__pC7Qd",card:"index__card__wphgI",defaultIcon:"index__defaultIcon__nebiS",topContent:"index__topContent__XOQUb",cardTitle:"index__cardTitle__LIfnN",tipIcon:"index__tipIcon__8c1JC",typeTip:"index__typeTip__vBJEO",bottomContent:"index__bottomContent__tpr9a",item:"index__item__DdRxj",label:"index__label__slw+k",value:"index__value__MEW8U",actionContent:"index__actionContent__G0HXA",searchContent:"index__searchContent__Y4lcx",appBase:"index__appBase__uDJKb",baseTitle:"index__baseTitle__571Bf",content:"index__content__mmGfW",leftContent:"index__leftContent__hZ2Jh",topLine:"index__topLine__RZ8sR",bottomLine:"index__bottomLine__t6LZw",lineItem:"index__lineItem__a9S7Q",lineLabel:"index__lineLabel__rFDDI",lineValue:"index__lineValue__xUi3Q",rightContent:"index__rightContent__Z1N5a",groupItem:"index__groupItem__bQvEA",unit:"index__unit__n84gK",moreTag:"index__moreTag__TDApc",icon:"index__icon__m1SVF",onLineState:"index__onLineState__3TH3R",notInstall:"index__notInstall__x9rH6",offLineState:"index__offLineState__HlF9j",interrupt:"index__interrupt__zzMsc",loading:"index__loading__ieVUv",appAccess:"index__appAccess__FPVdH",contentChiose:"index__contentChiose__5dGbe",img:"index__img__gmZIV",name:"index__name__foEnk",chioseCard:"index__chioseCard__TviQG",chioseName:"index__chioseName__OY437",stepContent:"index__stepContent__gtqNI",codeContent:"index__codeContent__yzU75",copy:"index__copy__wQghF",copyIcon:"index__copyIcon__Cf84d",codeLine:"index__codeLine__a1thc",jvmParam:"index__jvmParam__FtgLJ",ulList:"index__ulList__ZhGD3",jvmWaring:"index__jvmWaring__UhCGO",podWord:"index__podWord__Rji3T",tag:"index__tag__t0aBK",nameStyle:"index__nameStyle__eeJ-1",imageContent:"index__imageContent__QeJ0A",altWord:"index__altWord__8m9mu",guide:"index__guide__teIpm",nodeTags:"index__nodeTags__TUos+",setItem:"index__setItem__zDdi+",valueComponent:"index__valueComponent__YDwag",drawerSumit:"index__drawerSumit__iMvQH",empIds:"index__empIds__lJa-C",delete:"index__delete__QF9zh",drawerContent:"index__drawerContent__f6juk",labelTitle:"index__labelTitle__CyL6d",description:"index__description__HqEjg"};const d=l},16818:(f,A,e)=>{"use strict";e.r(A),e.d(A,{default:()=>d});var o=e(1892),u=e.n(o),s=e(10975),c={};c.insert="head",c.singleton=!1;var l=u()(s.Z,c);const d=s.Z.locals||{}},78571:(f,A,e)=>{"use strict";e.r(A),e.d(A,{default:()=>d});var o=e(1892),u=e.n(o),s=e(29316),c={};c.insert="head",c.singleton=!1;var l=u()(s.Z,c);const d=s.Z.locals||{}},12561:(f,A,e)=>{"use strict";f.exports=e.p+"agentApp.733f5e1f..png"},30158:(f,A,e)=>{"use strict";f.exports=e.p+"agentHostAuto.e46e63f9..png"},67421:(f,A,e)=>{"use strict";f.exports=e.p+"agentK8s.a8329761..png"}}]);

//# sourceMappingURL=57.bundle.js.map