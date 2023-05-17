(self.webpackChunk=self.webpackChunk||[]).push([[990],{16664:function(T,l,e){"use strict";var o=this&&this.__assign||function(){return o=Object.assign||function(p){for(var u,A=1,s=arguments.length;A<s;A++){u=arguments[A];for(var n in u)Object.prototype.hasOwnProperty.call(u,n)&&(p[n]=u[n])}return p},o.apply(this,arguments)},m=this&&this.__rest||function(p,u){var A={};for(var s in p)Object.prototype.hasOwnProperty.call(p,s)&&u.indexOf(s)<0&&(A[s]=p[s]);if(p!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,s=Object.getOwnPropertySymbols(p);n<s.length;n++)u.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(p,s[n])&&(A[s[n]]=p[s[n]]);return A},c=this&&this.__importDefault||function(p){return p&&p.__esModule?p:{default:p}};Object.defineProperty(l,"__esModule",{value:!0});var x=c(e(27378)),d=c(e(23615)),t=c(e(60042)),C=e(30156),a=e(66693),g=function(p){var u=p.type,A=p.className,s=m(p,["type","className"]);return x.default.createElement(C.Tag,o({},s,{className:t.default(a.COLORED_CLASS_NAME,a.COLORED_CLASS_NAME+"-"+u,A)}))};g.propTypes=o(o({},C.Tag.propTypes),{type:d.default.oneOf(Object.values(a.Color)),className:d.default.string}),g.defaultProps={type:a.Color.LIGHT_STEEL_BLUE},g[a.PROTECTED_TYPE]="Tag",l.default=g},79148:function(T,l,e){"use strict";var o=this&&this.__assign||function(){return o=Object.assign||function(r){for(var i,f=1,B=arguments.length;f<B;f++){i=arguments[f];for(var S in i)Object.prototype.hasOwnProperty.call(i,S)&&(r[S]=i[S])}return r},o.apply(this,arguments)},m=this&&this.__createBinding||(Object.create?function(r,i,f,B){B===void 0&&(B=f),Object.defineProperty(r,B,{enumerable:!0,get:function(){return i[f]}})}:function(r,i,f,B){B===void 0&&(B=f),r[B]=i[f]}),c=this&&this.__setModuleDefault||(Object.create?function(r,i){Object.defineProperty(r,"default",{enumerable:!0,value:i})}:function(r,i){r.default=i}),x=this&&this.__importStar||function(r){if(r&&r.__esModule)return r;var i={};if(r!=null)for(var f in r)f!=="default"&&Object.hasOwnProperty.call(r,f)&&m(i,r,f);return c(i,r),i},d=this&&this.__importDefault||function(r){return r&&r.__esModule?r:{default:r}};Object.defineProperty(l,"__esModule",{value:!0});var t=x(e(27378)),C=d(e(23615)),a=d(e(60042)),g=e(30156),p=d(e(16664)),u=e(66693),A=g.Tag.Group,s=[u.Color.LIGHT_STEEL_BLUE,u.Color.PLUM,u.Color.MISTY_ROSE,u.Color.LIGHT_GOLDENROD_YELLOW,u.Color.PALE_GREEN],n=function(r){var i=r.className,f=r.style,B=r.avaliableColors,S=B===void 0?s:B,_=r.children;return t.default.createElement(A,{className:a.default(u.COLORED_GROUP_CLASS_NAME,i),style:f},t.Children.map(_,function(I,Y){var L=I;try{var W=I.type[u.PROTECTED_TYPE];W==="Tag"&&(L=t.default.createElement(p.default,o({},I.props,{type:S[Y%5]})))}catch(F){}return L}))};n.propTypes={className:C.default.string,style:C.default.objectOf(C.default.any),avaliableColors:C.default.arrayOf(C.default.string),children:C.default.node},l.default=n},66693:(T,l)=>{"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.PROTECTED_TYPE=l.COLORED_GROUP_CLASS_NAME=l.COLORED_CLASS_NAME=l.Color=void 0,l.Color={LIGHT_STEEL_BLUE:"light-steel-blue",PLUM:"plum",MISTY_ROSE:"misty-rose",LIGHT_GOLDENROD_YELLOW:"light-goldenrod-yellow",PALE_GREEN:"pale-green",SILVER:"silver",GRAY:"gray"},l.COLORED_CLASS_NAME="wind-tag-colored",l.COLORED_GROUP_CLASS_NAME=l.COLORED_CLASS_NAME+"-group",l.PROTECTED_TYPE="__WIND_TAG_"},51834:function(T,l,e){"use strict";var o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(l,"__esModule",{value:!0}),l.wrap=void 0;var m=e(66693),c=o(e(16664)),x=o(e(79148));function d(t){return t.Colored=c.default,t.ColoredGroup=x.default,t[m.PROTECTED_TYPE]="Tag",t}l.wrap=d},36939:function(T,l,e){"use strict";var o=this&&this.__assign||function(){return o=Object.assign||function(A){for(var s,n=1,r=arguments.length;n<r;n++){s=arguments[n];for(var i in s)Object.prototype.hasOwnProperty.call(s,i)&&(A[i]=s[i])}return A},o.apply(this,arguments)},m=this&&this.__rest||function(A,s){var n={};for(var r in A)Object.prototype.hasOwnProperty.call(A,r)&&s.indexOf(r)<0&&(n[r]=A[r]);if(A!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(A);i<r.length;i++)s.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(A,r[i])&&(n[r[i]]=A[r[i]]);return n},c=this&&this.__importDefault||function(A){return A&&A.__esModule?A:{default:A}};Object.defineProperty(l,"__esModule",{value:!0});var x=e(30156),d=c(e(27378)),t=e(46949),C=c(e(55839)),a=e(51834),g=e(67056),p=c(e(60042)),u=a.wrap(t.withThemeClass(d.default.forwardRef(function(A,s){var n,r=A.children,i=A.color,f=A.prefix,B=f===void 0?"next-":f,S=A.className,_=m(A,["className"]),I=g.useCssVar("--alicloudfe-components-theme").trim();return I==="hybridcloud"||I==="hybridcloud-dark"||I==="yunxiao"||I==="yunxiao-dark"?d.default.createElement(x.Tag,o({ref:s,className:p.default((n={},n[B+"tag-custom-"+i]=!0,n),S)},_),r):d.default.createElement(x.Tag,o({},A,{ref:s}),r)})));C.default(u,x.Tag),u.displayName=x.Tag.displayName,l.default=u},70343:function(T,l,e){var o,m,c,x=e(67394);(function(d,t){if(!0)!(m=[l,e(14798)],o=t,c=typeof o=="function"?o.apply(l,m):o,c!==void 0&&(T.exports=c));else var C})(typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:this,function(d,t){"use strict";var C=e(67971);x(d,"__esModule",{value:!0}),d.SearchOptions=d.SearchOptDict=d.ExperimentConstants=void 0,t=C(t);var a={EXPERIMENT_STATE_DRAFT:"DRAFT",EXPERIMENT_STATE_READY:"READY",EXPERIMENT_STATE_RUNNING:"RUNNING",EXPERIMENT_STATE_SYNC:"SYNC_WAIT_EDIT",EXPERIMENT_TASK_RESULT_SUCCESS:"SUCCESS",EXPERIMENT_TASK_RESULT_FAILED:"FAILED",EXPERIMENT_TASK_RESULT_REJECTED:"REJECTED",EXPERIMENT_TASK_RESULT_ERROR:"ERROR",EXPERIMENT_TASK_RESULT_STOPPED:"STOPPED",EXPERIMENT_TASK_STATE_FINISHED:"FINISHED",EXPERIMENT_TASK_STATE_RUNNING:"RUNNING",EXPERIMENT_TASK_STATE_STOPPING:"STOPPING",EXPERIMENT_TASK_STATE_READY:"READY",EXPERIMENT_ACTIVITY_TASK_USER_CHECK_STATE_WAITING:"USER_CHECK_STATE_WAITING",EXPERIMENT_ACTIVITY_TASK_USER_CHECK_STATE_PASSED:"USER_CHECK_STATE_PASSED",EXPERIMENT_ACTIVITY_TASK_USER_CHECK_STATE_FAILED:"USER_CHECK_STATE_FAILED",EXPERIMENT_RELATION_TYPE_EMERGENCY_SCENE:"emergency_scene",EXPERIMENT_RELATION_TYPE_OWNER:"owner",ERROR:t.default.t("Abnormal"),FAILED:t.default.t("Not as expected"),STOPPED:t.default.t("Interrupt"),SUCCESS:t.default.t("Success"),EXCEPTION:t.default.t("Abnormal"),TOTAL:t.default.t("Number of drills")};d.ExperimentConstants=a;var g={1:{name:t.default.t("Success"),status:a.EXPERIMENT_TASK_STATE_FINISHED,results:[a.EXPERIMENT_TASK_RESULT_SUCCESS]},2:{name:t.default.t("In progress"),status:a.EXPERIMENT_TASK_STATE_RUNNING,results:[]},3:{name:t.default.t("Interrupt"),value:"3",status:a.EXPERIMENT_TASK_STATE_FINISHED,results:[a.EXPERIMENT_TASK_RESULT_REJECTED,a.EXPERIMENT_TASK_RESULT_STOPPED]},4:{name:t.default.t("Not as expected"),value:"4",status:a.EXPERIMENT_TASK_STATE_FINISHED,results:[a.EXPERIMENT_TASK_RESULT_FAILED]},5:{name:t.default.t("Abnormal"),status:a.EXPERIMENT_TASK_STATE_FINISHED,results:[a.EXPERIMENT_TASK_RESULT_ERROR]}};d.SearchOptDict=g;var p=[{label:t.default.t("All")},{label:t.default.t("Success"),state:a.EXPERIMENT_TASK_STATE_FINISHED,results:[a.EXPERIMENT_TASK_RESULT_SUCCESS]},{label:t.default.t("In progress"),state:a.EXPERIMENT_TASK_STATE_RUNNING,results:[]},{label:t.default.t("Interrupt"),state:a.EXPERIMENT_TASK_STATE_FINISHED,results:[a.EXPERIMENT_TASK_RESULT_REJECTED,a.EXPERIMENT_TASK_RESULT_STOPPED]},{label:t.default.t("Not as expected"),state:a.EXPERIMENT_TASK_STATE_FINISHED,results:[a.EXPERIMENT_TASK_RESULT_FAILED]},{label:t.default.t("Abnormal"),state:a.EXPERIMENT_TASK_STATE_FINISHED,results:[a.EXPERIMENT_TASK_RESULT_ERROR]}];d.SearchOptions=p})},67990:function(T,l,e){var o,m,c,x=e(24596),d=e(67394),t=e(93168),C=e(23587);(function(a,g){if(!0)!(m=[l,e(36939),e(17225),e(77809),e(81853),e(92243),e(27378),e(66697),e(98784),e(60042),e(74590),e(14798),e(38403),e(70343),e(73262),e(96291),e(14870),e(49729)],o=g,c=typeof o=="function"?o.apply(l,m):o,c!==void 0&&(T.exports=c));else var p})(typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:this,function(a,g,p,u,A,s,n,r,i,f,B,S,_,I,Y,L,W,F){"use strict";var R=e(67971);d(a,"__esModule",{value:!0}),a.default=void 0,g=R(g),p=R(p),u=R(u),A=R(A),s=R(s),n=X(n),r=R(r),i=R(i),f=R(f),B=R(B),S=R(S),_=R(_);function z(h){if(typeof t!="function")return null;var N=new t,v=new t;return(z=function(O){return O?v:N})(h)}function X(h,N){if(!N&&h&&h.__esModule)return h;if(h===null||x(h)!=="object"&&typeof h!="function")return{default:h};var v=z(N);if(v&&v.has(h))return v.get(h);var P={},O=d&&C;for(var E in h)if(E!=="default"&&Object.prototype.hasOwnProperty.call(h,E)){var D=O?C(h,E):null;D&&(D.get||D.set)?d(P,E,D):P[E]=h[E]}return P.default=h,v&&v.set(h,P),P}var K=s.default.Tooltip,G=function(){var N=(0,F.useQuery)("appId"),v=(0,W.useDispatch)(),P=(0,n.useState)(),O=(0,A.default)(P,2),E=O[0],D=O[1];(0,n.useEffect)(function(){v.pageHeader.setTitle(n.default.createElement(r.default,null,"Application Overview")),v.pageHeader.setBreadCrumbItems(L.CHAOS_DEFAULT_BREADCRUMB_ITEM.concat([{key:"application",value:S.default.t("Application Management"),path:"/chaos/application"},{key:"applicationDetail",value:S.default.t("Application Overview"),path:"/chaos/application/detail"}]))},[]),(0,n.useEffect)(function(){(0,u.default)(regeneratorRuntime.mark(function y(){var M,b,j;return regeneratorRuntime.wrap(function(U){for(;;)switch(U.prev=U.next){case 0:return U.next=2,v.application.getApplicationBasic({app_id:N});case 2:M=U.sent,b=M.Data,j=b===void 0?!1:b,j&&D(j);case 6:case"end":return U.stop()}},y)}))()},[]);function Z(){var y=i.default.get(E,"app_type","");return y===Y.SCOPE_TYPE.HOST?S.default.t("Host"):"Kubernetes"}function k(){var y=i.default.get(E,"task");if(!i.default.isEmpty(y)){var M=i.default.get(y,"state",""),b=i.default.get(y,"result","");if(M===I.ExperimentConstants.EXPERIMENT_TASK_STATE_FINISHED){if(b===I.ExperimentConstants.EXPERIMENT_TASK_RESULT_SUCCESS)return n.default.createElement("span",null,n.default.createElement(p.default,{type:"select",className:(0,f.default)(_.default.onLineState,_.default.icon)}),n.default.createElement(r.default,null,"Success"));if(b===I.ExperimentConstants.EXPERIMENT_TASK_RESULT_FAILED)return n.default.createElement("span",null,n.default.createElement(p.default,{type:"exclamationcircle-f",className:(0,f.default)(_.default.icon,_.default.offLineState)}),n.default.createElement(r.default,null,"Not as expected"));if(b===I.ExperimentConstants.EXPERIMENT_TASK_RESULT_ERROR)return n.default.createElement("span",null,n.default.createElement(p.default,{type:"minus-circle-fill",className:(0,f.default)(_.default.icon,_.default.notInstall)}),n.default.createElement(r.default,null,"Abnormal"));if(b===I.ExperimentConstants.EXPERIMENT_TASK_RESULT_STOPPED)return n.default.createElement("span",null,n.default.createElement(p.default,{type:"minus-circle-fill",className:(0,f.default)(_.default.icon,_.default.interrupt)}),n.default.createElement(r.default,null,"Interrupt"))}return n.default.createElement("span",null,n.default.createElement(p.default,{type:"loading",className:(0,f.default)(_.default.icon,_.default.loading)}),n.default.createElement(r.default,null,"In execution"))}return"-"}var w=i.default.get(E,"task","");return n.default.createElement("div",{className:_.default.warp},n.default.createElement("div",{className:_.default.appBase},n.default.createElement("div",{className:_.default.baseTitle},n.default.createElement(r.default,null,"Basic information")),n.default.createElement("div",null,n.default.createElement("div",{className:_.default.lineItem},n.default.createElement("span",{className:_.default.lineLabel},n.default.createElement(r.default,null,"Application name"),":"),n.default.createElement("span",{className:_.default.lineValueTitle},i.default.get(E,"app_name",""))),n.default.createElement("div",{className:_.default.content},n.default.createElement("div",{className:_.default.leftContent},n.default.createElement("div",{className:_.default.topLine},n.default.createElement("div",{className:_.default.lineItem},n.default.createElement("span",{className:_.default.lineLabel},n.default.createElement(r.default,null,"Application type"),":"),n.default.createElement("span",{className:_.default.lineValue},Z()))),n.default.createElement("div",{className:_.default.bottomLine},n.default.createElement("div",{className:_.default.lineItem},n.default.createElement("span",{className:_.default.lineLabel},n.default.createElement(r.default,null,"Last drill time"),":"),n.default.createElement("span",{className:_.default.lineValue},i.default.isEmpty(w)?"-":(0,B.default)(i.default.get(w,"startTime","")))),n.default.createElement("div",{className:_.default.lineItem},n.default.createElement("span",{className:_.default.lineLabel},n.default.createElement(r.default,null,"Results of the last drill"),":"),n.default.createElement("span",{className:_.default.lineValue},i.default.isEmpty(E)?"-":k())))),n.default.createElement("div",{className:_.default.rightContent},n.default.createElement("div",{className:_.default.groupItem},n.default.createElement("div",{className:_.default.label},n.default.createElement(r.default,null,"Machine grouping")),n.default.createElement("div",null,E&&E.app_groups&&E.app_groups.slice(0,2).map(function(y,M){return n.default.createElement(g.default,{type:"primary",style:{marginRight:8},key:"".concat(y).concat(M)},y)}),!i.default.isEmpty(w)&&n.default.createElement(K,{trigger:E&&E.app_groups&&E.app_groups.length-2>0&&n.default.createElement("span",{className:_.default.moreTag},"\u4F59\u4E0B",E&&E.app_groups&&E.app_groups.length-2,"\u4E2A"),align:"b"},E&&E.app_groups&&E.app_groups.slice(2,E&&E.app_groups&&E.app_groups.length).map(function(y,M){return n.default.createElement(g.default,{type:"primary",style:{marginRight:8,marginBottom:8},key:"".concat(y).concat(M)},y)})))),n.default.createElement("div",{className:_.default.item},n.default.createElement("div",{className:_.default.label},n.default.createElement(r.default,null,"Machine")),n.default.createElement("div",{className:_.default.value},E&&E.machine_count||"-",n.default.createElement("span",{className:_.default.unit},"\u53F0"))),n.default.createElement("div",{className:_.default.item},n.default.createElement("div",{className:_.default.label},n.default.createElement(r.default,null,"General drill")),n.default.createElement("div",{className:_.default.value},E&&E.experiment_task_count||"-",n.default.createElement("span",{className:_.default.unit},n.default.createElement(r.default,null,"Count")))))))))},Q=G;a.default=Q})},74590:function(T,l,e){var o,m,c,x=e(67394);(function(d,t){if(!0)!(m=[l,e(61320)],o=t,c=typeof o=="function"?o.apply(l,m):o,c!==void 0&&(T.exports=c));else var C})(typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:this,function(d,t){"use strict";var C=e(67971);x(d,"__esModule",{value:!0}),d.default=void 0,t=C(t);var a=function(u){return u?(0,t.default)(u).format("YYYY-MM-DD HH:mm:ss"):""},g=a;d.default=g})},51296:(T,l,e)=>{"use strict";e.d(l,{Z:()=>t});var o=e(60994),m=e.n(o),c=e(93476),x=e.n(c),d=x()(m());d.push([T.id,`.index__warp__OOrD1 .index__cardContent__9bR-1 {\r
    display: flex;\r
    justify-content: flex-start;\r
    flex-wrap: wrap;\r
  }\r
\r
  .index__warp__OOrD1 .index__pagination__9v4TT {\r
    text-align: right;\r
    margin-top: 16px;\r
  }\r
\r
  .index__warp__OOrD1 .index__emptyData__dQr6Z {\r
    display: flex;\r
    align-items: center;\r
    justify-self: start;\r
    margin: auto;\r
    margin-top: 10%;\r
  }\r
\r
  .index__warp__OOrD1 .index__emptyData__dQr6Z img {\r
      width: 137px;\r
      height: 130px;\r
      margin-right: 30px;\r
    }\r
\r
  .index__warp__OOrD1 .index__emptyData__dQr6Z div .index__title__Hyw4j {\r
        font-family: PingFangSC-Medium;\r
        font-size: 18px;\r
        color: #222222;\r
        margin-bottom: 8px;\r
      }\r
\r
  .index__warp__OOrD1 .index__emptyData__dQr6Z div .index__hrefAction__X6jKl {\r
        font-family: PingFangSC-Regular;\r
        font-size: 12px;\r
        color: #0070CC;\r
        cursor: pointer;\r
      }\r
\r
  .index__warp__OOrD1 .index__emptyData__dQr6Z div div {\r
        line-height: 20px;\r
      }\r
\r
.index__card__OgNA4 {\r
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
.index__card__OgNA4:hover {\r
    border: 1px solid rgba(0,112,204,0.36);\r
    box-shadow: 0 1px 8px 0 rgba(0,112,204,0.36);\r
  }\r
\r
.index__card__OgNA4 .index__defaultIcon__\\+oGG4 {\r
    width: 28px;\r
    height: 28px;\r
    position: absolute;\r
    top: 0px;\r
    right: 0px;\r
  }\r
\r
.index__card__OgNA4 .index__topContent__Z5cAy {\r
    display: flex;\r
    justify-content: space-between;\r
    margin-bottom: 27px;\r
    line-height: 22px;\r
  }\r
\r
.index__card__OgNA4 .index__topContent__Z5cAy .index__cardTitle__mk5dY {\r
      font-size: 14px;\r
      color: #333;\r
      width: 205px;\r
      overflow: hidden;\r
      text-overflow: ellipsis;\r
      white-space:nowrap;\r
    }\r
\r
.index__card__OgNA4 .index__topContent__Z5cAy .index__cardTitle__mk5dY .index__tipIcon__yNbVs {\r
        margin-left: 8px;\r
      }\r
\r
.index__card__OgNA4 .index__topContent__Z5cAy .index__cardTitle__mk5dY .index__tipIcon__yNbVs i {\r
          font-size: 16px;\r
        }\r
\r
.index__card__OgNA4 .index__topContent__Z5cAy .index__cardTitle__mk5dY .index__tipIcon__yNbVs i::before {\r
            width: 16px;\r
            height: 16px;\r
            font-size: 16px;\r
            vertical-align: inherit;\r
          }\r
\r
.index__card__OgNA4 .index__topContent__Z5cAy .index__typeTip__fMO4g {\r
      font-size: 12px;\r
      color: #c1c1c1;\r
    }\r
\r
.index__card__OgNA4 .index__bottomContent__BFixj {\r
    display: flex;\r
    justify-content: space-between;\r
  }\r
\r
.index__card__OgNA4 .index__bottomContent__BFixj .index__item__knPmi .index__label__HlqTg {\r
        font-size: 12px;\r
        color: #555;\r
        margin-bottom: 4px;\r
      }\r
\r
.index__card__OgNA4 .index__bottomContent__BFixj .index__item__knPmi .index__value__51G4n {\r
        font-size: 28px;\r
        color: #333;\r
\r
      }\r
\r
.index__actionContent__yOsCm {\r
  display: flex;\r
  justify-content: space-between;\r
  align-items: center;\r
}\r
\r
.index__actionContent__yOsCm .index__searchContent__K8s\\+t {\r
    width: 460px;\r
    margin-bottom: 8px;\r
  }\r
\r
.index__appBase__0v8MS {\r
  width: 100%;\r
  height: auto;\r
  border: 1px solid #dedede;\r
  padding: 16px;\r
\r
}\r
\r
.index__appBase__0v8MS .index__baseTitle__1JOkG {\r
    font-size: 14px;\r
    color: #333;\r
    margin-bottom: 24px;\r
  }\r
\r
.index__appBase__0v8MS .index__content__Vs6zt {\r
    display: flex;\r
    justify-content: space-between;\r
    margin-top: 10px;\r
  }\r
\r
.index__appBase__0v8MS .index__content__Vs6zt .index__leftContent__y\\+lRE .index__topLine__cjId0 {\r
        display: flex;\r
        justify-content: space-between;\r
        margin-bottom: 8px;\r
        line-height: 20px;\r
      }\r
\r
.index__appBase__0v8MS .index__content__Vs6zt .index__leftContent__y\\+lRE .index__bottomLine__42EJ5 {\r
        display: flex;\r
        justify-content: flex-start;\r
        line-height: 20px;\r
      }\r
\r
.index__appBase__0v8MS .index__content__Vs6zt .index__rightContent__nw20M {\r
      display: flex;\r
      flex: 1;\r
      justify-content: space-around;\r
    }\r
\r
.index__appBase__0v8MS .index__content__Vs6zt .index__rightContent__nw20M .index__label__HlqTg {\r
        font-size: 12px;\r
        color: #555;\r
        margin-bottom: 14px;\r
      }\r
\r
.index__appBase__0v8MS .index__content__Vs6zt .index__rightContent__nw20M .index__value__51G4n {\r
        font-size: 28px;\r
        color: #333;\r
      }\r
\r
.index__appBase__0v8MS .index__content__Vs6zt .index__rightContent__nw20M .index__groupItem__fCg0u {\r
        width: 272px;\r
      }\r
\r
.index__appBase__0v8MS .index__lineValueTitle__SM5IL {\r
    font-size: 12px;\r
    color: #333;\r
    display: inline-block;\r
    margin-left: 8px;\r
    width: 80%;\r
  }\r
\r
.index__appBase__0v8MS .index__lineItem__Dv\\+M- .index__lineLabel__\\+cEZ7 {\r
      font-size: 12px;\r
      color: #888;\r
      display: inline-block;\r
      width: 108px;\r
    }\r
\r
.index__appBase__0v8MS .index__lineItem__Dv\\+M- .index__lineValue__TxYjF {\r
      font-size: 12px;\r
      color: #333;\r
      display: inline-block;\r
      width: 181px;\r
      margin-left: 8px;\r
    }\r
\r
.index__unit__msi4N {\r
  margin-left: 8px;\r
  font-size: 12px;\r
  color: #888;\r
}\r
\r
.index__moreTag__OTjvN {\r
  font-size: 12px;\r
  color: #0070cc;\r
  cursor: pointer;\r
}\r
\r
.index__icon__KXNEa {\r
  font-size: 14px;\r
  margin-right: 8px;\r
}\r
\r
.index__icon__KXNEa::before{\r
    font-size: 14px !important;\r
    width: 14px !important;\r
  }\r
\r
.index__onLineState__buA\\+J {\r
  color: #1E8E3E;\r
}\r
\r
.index__notInstall__emMvL {\r
  color: #888;\r
}\r
\r
.index__offLineState__Soqy6 {\r
  color: #D93026;\r
}\r
\r
.index__interrupt__aaTea {\r
  color: #FFC440;\r
}\r
\r
.index__loading__7U83b {\r
  color: #888;\r
}\r
\r
.index__appAccess__73Y7S {\r
  padding: 0 35px 45px 25px;\r
  font-family: PingFangSC-Regular;\r
}\r
\r
.index__appAccess__73Y7S .index__title__Hyw4j {\r
    font-size: 14px;\r
    color: #333;\r
  }\r
\r
.index__appAccess__73Y7S .index__contentChiose__IAHSW {\r
    margin-top: 20px;\r
  }\r
\r
.index__appAccess__73Y7S .index__cardContent__9bR-1 {\r
    display: flex;\r
    justify-content: flex-start;\r
    align-items: center;\r
  }\r
\r
.index__appAccess__73Y7S .index__card__OgNA4 {\r
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
.index__appAccess__73Y7S .index__card__OgNA4 .index__img__zA\\+c4 {\r
      width: 28px;\r
      height: 28px;\r
      margin-right: 10px;\r
    }\r
\r
.index__appAccess__73Y7S .index__card__OgNA4 .index__name__maBgT {\r
      font-size: 16px;\r
      color: #555;\r
    }\r
\r
.index__appAccess__73Y7S .index__chioseCard__45S4E {\r
    background: #F3FAFF;\r
    border: 1px solid #0070CC;\r
    color: #0070CC;\r
  }\r
\r
.index__appAccess__73Y7S .index__chioseCard__45S4E .index__chioseName__ars2M {\r
      color: #0070cc;\r
    }\r
\r
.index__appAccess__73Y7S .index__stepContent__q3lZ7 {\r
    margin-top: 24px; \r
  }\r
\r
.index__appAccess__73Y7S .index__stepContent__q3lZ7 .next-step-item-wait .next-step-item-container .next-step-item-node-placeholder .next-step-item-node .next-step-item-node-circle {\r
      background: #0070cc;\r
      border-color: #0070cc;\r
      color: #fff;\r
    }\r
\r
.index__appAccess__73Y7S .index__stepContent__q3lZ7 .next-step-item-wait .next-step-item-body .next-step-item-title {\r
      color: #333;\r
    }\r
\r
.index__appAccess__73Y7S .index__codeContent__5LicS {\r
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
.index__appAccess__73Y7S .index__codeContent__5LicS .index__copy__w7qsY {\r
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
.index__appAccess__73Y7S .index__codeContent__5LicS .index__copy__w7qsY .index__copyIcon__zctG8 {\r
        width: 14px !important;\r
        height: 16px !important;\r
      }\r
\r
.index__appAccess__73Y7S .index__codeContent__5LicS .index__copy__w7qsY .index__copyIcon__zctG8::before{\r
          width: 14px !important;\r
          height: 16px !important;\r
          color: #fff;\r
        }\r
\r
.index__appAccess__73Y7S .index__codeLine__Ua500 {\r
    line-height: 20px;\r
  }\r
\r
.index__appAccess__73Y7S .index__jvmParam__o8idg {\r
    font-size: 12px;\r
    color: #333333;\r
    font-family: PingFangSC-Medium;\r
    margin-bottom: 6px;\r
  }\r
\r
.index__appAccess__73Y7S .index__ulList__2Bd8w {\r
    margin-top: 6px;\r
  }\r
\r
.index__appAccess__73Y7S .index__ulList__2Bd8w li {\r
      line-height: 22px;\r
    }\r
\r
.index__appAccess__73Y7S .index__ulList__2Bd8w li:before {\r
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
.index__appAccess__73Y7S .index__jvmWaring__3L7wM {\r
    margin-top: 16px;\r
  }\r
\r
.index__appAccess__73Y7S .index__podWord__yuYh4 {\r
    font-size: 12px;\r
    color: #333333;\r
    line-height: 22px;\r
  }\r
\r
.index__appAccess__73Y7S .index__podWord__yuYh4 .index__tag__WriXy {\r
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
.index__appAccess__73Y7S .index__podWord__yuYh4 .index__nameStyle__L3hnk {\r
      font-family: PingFangSC-Medium;\r
      font-size: 12px;\r
      color: #333333;\r
    }\r
\r
.index__appAccess__73Y7S .index__imageContent__fCZko {\r
    width: 960px;\r
    min-height: 154px;\r
  }\r
\r
.index__appAccess__73Y7S .index__imageContent__fCZko img {\r
      width: 100%;\r
      height: 100%;\r
    }\r
\r
.index__appAccess__73Y7S .index__altWord__ge5mR {\r
    font-size: 12px;\r
    color: #555;\r
    line-height: 24px;\r
  }\r
\r
.index__appAccess__73Y7S .index__guide__5ZSqG {\r
    font-size: 12px;\r
    color: #333;\r
    margin-top: 24px;\r
    font-family: PingFangSC-Regular;\r
  }\r
\r
/* .loading {\r
  padding: 15% 45%;\r
} */\r
\r
.index__nodeTags__AscjM {\r
  margin-right: 4px;\r
  margin-bottom: 2px;\r
}\r
\r
.index__setItem__s6Im4 {\r
  margin-bottom: 4px;\r
  display: flex;\r
  justify-content: flex-start;\r
  align-items: center;\r
  line-height: 28px;\r
}\r
\r
.index__setItem__s6Im4 .index__label__HlqTg {\r
    width: 80px;\r
    margin-right: 10px;\r
    font-size: 12px;\r
  }\r
\r
.index__setItem__s6Im4 .index__value__51G4n {\r
    font-size: 12px;\r
    width: 466px;\r
  }\r
\r
.index__setItem__s6Im4 .index__valueComponent__Vvz0O {\r
    padding-top: 10px;\r
    width: 300px;\r
  }\r
\r
.index__drawerSumit__4ZDse {\r
  margin-right: 8px !important;\r
}\r
\r
.index__empIds__brVOW {\r
  margin-bottom: 30px;\r
}\r
\r
.index__empIds__brVOW li {\r
    height: 28px;\r
    display: flex;\r
    justify-content: flex-start;\r
    align-items: center;\r
  }\r
\r
.index__delete__2hnXR {\r
  color: #0070cc;\r
  cursor: pointer;\r
  margin-left: 20px;\r
}\r
\r
.index__drawerContent__vm8fA {\r
  padding: 20px;\r
}\r
\r
.index__drawerContent__vm8fA .index__label__HlqTg {\r
    font-size: 12px;\r
    color: #000;\r
    line-height: 26px;\r
  }\r
\r
.index__drawerContent__vm8fA .index__labelTitle__RFIqx {\r
    font-size: 12px;\r
    color: #000;\r
    line-height: 26px;\r
    margin-bottom: 5px;\r
  }\r
\r
.index__drawerContent__vm8fA .index__description__88iUE {\r
    color: #555;\r
    line-height: 20px;\r
  }\r
\r
.index__drawerContent__vm8fA .index__value__51G4n {\r
    width: 100%;\r
    margin-bottom: 20px;\r
  }`,"",{version:3,sources:["webpack://./pages/Chaos/Application/ApplicationDetail/index.css"],names:[],mappings:"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",sourcesContent:[`.warp {\r
\r
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
  height: auto;\r
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
    margin-top: 10px;\r
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
  .lineValueTitle {\r
    font-size: 12px;\r
    color: #333;\r
    display: inline-block;\r
    margin-left: 8px;\r
    width: 80%;\r
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
  padding: 0 35px 45px 25px;\r
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
/* .loading {\r
  padding: 15% 45%;\r
} */\r
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
}`],sourceRoot:""}]),d.locals={warp:"index__warp__OOrD1",cardContent:"index__cardContent__9bR-1",pagination:"index__pagination__9v4TT",emptyData:"index__emptyData__dQr6Z",title:"index__title__Hyw4j",hrefAction:"index__hrefAction__X6jKl",card:"index__card__OgNA4",defaultIcon:"index__defaultIcon__+oGG4",topContent:"index__topContent__Z5cAy",cardTitle:"index__cardTitle__mk5dY",tipIcon:"index__tipIcon__yNbVs",typeTip:"index__typeTip__fMO4g",bottomContent:"index__bottomContent__BFixj",item:"index__item__knPmi",label:"index__label__HlqTg",value:"index__value__51G4n",actionContent:"index__actionContent__yOsCm",searchContent:"index__searchContent__K8s+t",appBase:"index__appBase__0v8MS",baseTitle:"index__baseTitle__1JOkG",content:"index__content__Vs6zt",leftContent:"index__leftContent__y+lRE",topLine:"index__topLine__cjId0",bottomLine:"index__bottomLine__42EJ5",rightContent:"index__rightContent__nw20M",groupItem:"index__groupItem__fCg0u",lineValueTitle:"index__lineValueTitle__SM5IL",lineItem:"index__lineItem__Dv+M-",lineLabel:"index__lineLabel__+cEZ7",lineValue:"index__lineValue__TxYjF",unit:"index__unit__msi4N",moreTag:"index__moreTag__OTjvN",icon:"index__icon__KXNEa",onLineState:"index__onLineState__buA+J",notInstall:"index__notInstall__emMvL",offLineState:"index__offLineState__Soqy6",interrupt:"index__interrupt__aaTea",loading:"index__loading__7U83b",appAccess:"index__appAccess__73Y7S",contentChiose:"index__contentChiose__IAHSW",img:"index__img__zA+c4",name:"index__name__maBgT",chioseCard:"index__chioseCard__45S4E",chioseName:"index__chioseName__ars2M",stepContent:"index__stepContent__q3lZ7",codeContent:"index__codeContent__5LicS",copy:"index__copy__w7qsY",copyIcon:"index__copyIcon__zctG8",codeLine:"index__codeLine__Ua500",jvmParam:"index__jvmParam__o8idg",ulList:"index__ulList__2Bd8w",jvmWaring:"index__jvmWaring__3L7wM",podWord:"index__podWord__yuYh4",tag:"index__tag__WriXy",nameStyle:"index__nameStyle__L3hnk",imageContent:"index__imageContent__fCZko",altWord:"index__altWord__ge5mR",guide:"index__guide__5ZSqG",nodeTags:"index__nodeTags__AscjM",setItem:"index__setItem__s6Im4",valueComponent:"index__valueComponent__Vvz0O",drawerSumit:"index__drawerSumit__4ZDse",empIds:"index__empIds__brVOW",delete:"index__delete__2hnXR",drawerContent:"index__drawerContent__vm8fA",labelTitle:"index__labelTitle__RFIqx",description:"index__description__88iUE"};const t=d},38403:(T,l,e)=>{"use strict";e.r(l),e.d(l,{default:()=>t});var o=e(1892),m=e.n(o),c=e(51296),x={};x.insert="head",x.singleton=!1;var d=m()(c.Z,x);const t=c.Z.locals||{}}}]);

//# sourceMappingURL=990.bundle.js.map