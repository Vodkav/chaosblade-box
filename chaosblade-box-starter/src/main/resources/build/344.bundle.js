(self.webpackChunk=self.webpackChunk||[]).push([[344],{70343:function(k,E,e){var i,h,d,p=e(67394);(function(l,n){if(!0)!(h=[E,e(14798)],i=n,d=typeof i=="function"?i.apply(E,h):i,d!==void 0&&(k.exports=d));else var a})(typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:this,function(l,n){"use strict";var a=e(67971);p(l,"__esModule",{value:!0}),l.SearchOptions=l.SearchOptDict=l.ExperimentConstants=void 0,n=a(n);var o={EXPERIMENT_STATE_DRAFT:"DRAFT",EXPERIMENT_STATE_READY:"READY",EXPERIMENT_STATE_RUNNING:"RUNNING",EXPERIMENT_STATE_SYNC:"SYNC_WAIT_EDIT",EXPERIMENT_TASK_RESULT_SUCCESS:"SUCCESS",EXPERIMENT_TASK_RESULT_FAILED:"FAILED",EXPERIMENT_TASK_RESULT_REJECTED:"REJECTED",EXPERIMENT_TASK_RESULT_ERROR:"ERROR",EXPERIMENT_TASK_RESULT_STOPPED:"STOPPED",EXPERIMENT_TASK_STATE_FINISHED:"FINISHED",EXPERIMENT_TASK_STATE_RUNNING:"RUNNING",EXPERIMENT_TASK_STATE_STOPPING:"STOPPING",EXPERIMENT_TASK_STATE_READY:"READY",EXPERIMENT_ACTIVITY_TASK_USER_CHECK_STATE_WAITING:"USER_CHECK_STATE_WAITING",EXPERIMENT_ACTIVITY_TASK_USER_CHECK_STATE_PASSED:"USER_CHECK_STATE_PASSED",EXPERIMENT_ACTIVITY_TASK_USER_CHECK_STATE_FAILED:"USER_CHECK_STATE_FAILED",EXPERIMENT_RELATION_TYPE_EMERGENCY_SCENE:"emergency_scene",EXPERIMENT_RELATION_TYPE_OWNER:"owner",ERROR:n.default.t("Abnormal"),FAILED:n.default.t("Not as expected"),STOPPED:n.default.t("Interrupt"),SUCCESS:n.default.t("Success"),EXCEPTION:n.default.t("Abnormal"),TOTAL:n.default.t("Number of drills")};l.ExperimentConstants=o;var u={1:{name:n.default.t("Success"),status:o.EXPERIMENT_TASK_STATE_FINISHED,results:[o.EXPERIMENT_TASK_RESULT_SUCCESS]},2:{name:n.default.t("In progress"),status:o.EXPERIMENT_TASK_STATE_RUNNING,results:[]},3:{name:n.default.t("Interrupt"),value:"3",status:o.EXPERIMENT_TASK_STATE_FINISHED,results:[o.EXPERIMENT_TASK_RESULT_REJECTED,o.EXPERIMENT_TASK_RESULT_STOPPED]},4:{name:n.default.t("Not as expected"),value:"4",status:o.EXPERIMENT_TASK_STATE_FINISHED,results:[o.EXPERIMENT_TASK_RESULT_FAILED]},5:{name:n.default.t("Abnormal"),status:o.EXPERIMENT_TASK_STATE_FINISHED,results:[o.EXPERIMENT_TASK_RESULT_ERROR]}};l.SearchOptDict=u;var O=[{label:n.default.t("All")},{label:n.default.t("Success"),state:o.EXPERIMENT_TASK_STATE_FINISHED,results:[o.EXPERIMENT_TASK_RESULT_SUCCESS]},{label:n.default.t("In progress"),state:o.EXPERIMENT_TASK_STATE_RUNNING,results:[]},{label:n.default.t("Interrupt"),state:o.EXPERIMENT_TASK_STATE_FINISHED,results:[o.EXPERIMENT_TASK_RESULT_REJECTED,o.EXPERIMENT_TASK_RESULT_STOPPED]},{label:n.default.t("Not as expected"),state:o.EXPERIMENT_TASK_STATE_FINISHED,results:[o.EXPERIMENT_TASK_RESULT_FAILED]},{label:n.default.t("Abnormal"),state:o.EXPERIMENT_TASK_STATE_FINISHED,results:[o.EXPERIMENT_TASK_RESULT_ERROR]}];l.SearchOptions=O})},95001:function(k,E,e){var i,h,d,p=e(24596),l=e(67394),n=e(93168),a=e(23587);(function(o,u){if(!0)!(h=[E,e(17534),e(12955),e(28757),e(77809),e(81853),e(27378),e(66697),e(14798),e(68055),e(29522),e(99328),e(14870)],i=u,d=typeof i=="function"?i.apply(E,h):i,d!==void 0&&(k.exports=d));else var O})(typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:this,function(o,u,O,H,W,z,A,w,S,te,D,ne,j){"use strict";var Y=e(67971);l(o,"__esModule",{value:!0}),o.default=void 0,u=Y(u),O=Y(O),H=Y(H),W=Y(W),z=Y(z),A=t(A),w=Y(w),S=Y(S),te=Y(te),D=Y(D);function q(c){if(typeof n!="function")return null;var s=new n,T=new n;return(q=function(R){return R?T:s})(c)}function t(c,s){if(!s&&c&&c.__esModule)return c;if(c===null||p(c)!=="object"&&typeof c!="function")return{default:c};var T=q(s);if(T&&T.has(c))return T.get(c);var v={},R=l&&a;for(var L in c)if(L!=="default"&&Object.prototype.hasOwnProperty.call(c,L)){var oe=R?a(c,L):null;oe&&(oe.get||oe.set)?l(v,L,oe):v[L]=c[L]}return v.default=c,T&&T.set(c,v),v}var M=function(s){var T=(0,ne.getParams)("workspaceId"),v=(0,j.useDispatch)(),R=(0,A.useState)([]),L=(0,z.default)(R,2),oe=L[0],r=L[1],me=(0,A.useState)([]),he=(0,z.default)(me,2),N=he[0],de=he[1],se=(0,A.useState)(""),_e=(0,z.default)(se,2),ue=_e[0],Ne=_e[1],ce=(0,A.useState)(1),Be=(0,z.default)(ce,2),Re=Be[0],pe=Be[1];(0,A.useEffect)(function(){(0,W.default)(regeneratorRuntime.mark(function re(){var y,$,x;return regeneratorRuntime.wrap(function(K){for(;;)switch(K.prev=K.next){case 0:if(!(T&&s.visible)){K.next=7;break}return K.next=3,v.experimentList.searchExperiments({searchKey:ue,page:Re,workspaceId:T});case 3:y=K.sent,$=y.Data,x=$===void 0?!1:$,x&&r(oe.concat(x));case 7:case"end":return K.stop()}},re)}))()},[ue,Re,s.visible]);function V(){return P.apply(this,arguments)}function P(){return P=(0,W.default)(regeneratorRuntime.mark(function re(){var y,$,x;return regeneratorRuntime.wrap(function(K){for(;;)switch(K.prev=K.next){case 0:return K.next=2,v.experimentList.addWorkspaceExperiment({workspaceId:T,workspaceExperimentList:N});case 2:y=K.sent,$=y.Success,x=y.Data,$&&(x.duplicateExperiments.length!==0?u.default.error(S.default.t("This walkthrough already exists, please do not add it again")):(u.default.success(S.default.t("Added successfully")),s.getExperimentTotals()));case 6:case"end":return K.stop()}},re)})),P.apply(this,arguments)}function ee(re){return A.default.createElement("div",null,A.default.createElement("div",null,re.label),A.default.createElement("div",{className:D.default.workspaceName},A.default.createElement(w.default,null,"From space"),": ",re.workspaceName))}function Ee(re,y,$){de($.map(function(x){return{experimentId:x.value,experimentName:x.label}}))}function Pe(re){Ne(re)}function ye(re){var y=re.target.scrollHeight,$=re.target.clientHeight,x=re.target.scrollTop;x+$===y&&pe(Re+1)}function Fe(){V(),s.onCancel&&s.onCancel()}return A.default.createElement(O.default,{visible:s.visible,title:S.default.t("Add walkthrough").toString(),onOk:Fe,onCancel:s.onCancel,onClose:s.onCancel,locale:(0,te.default)().Dialog},A.default.createElement("div",{className:D.default.warp},A.default.createElement("div",{className:D.default.top},A.default.createElement(w.default,null,"Walkthroughs can be selected to add to this space from other spaces with Edit Walkthrough permissions")),A.default.createElement("div",{className:D.default.item},A.default.createElement("span",{className:D.default.left},A.default.createElement(w.default,null,"Choose a walkthrough")),A.default.createElement(H.default,{autoHighlightFirstItem:!1,placeholder:S.default.t("Please select the drill you want to add").toString(),className:D.default.select,notFoundContent:S.default.t("There are currently no exercises to choose from").toString(),mode:"multiple",showSearch:!0,dataSource:oe.map(function(re){return{label:re.experimentName,value:re.experimentId,workspaceName:re.workspaceName}}),itemRender:ee,popupClassName:D.default.popup,onChange:Ee,onSearch:Pe,menuProps:{onScroll:ye},locale:(0,te.default)().Select}))))},m=M;o.default=m})},31157:function(k,E,e){var i,h,d,p=e(24596),l=e(67394),n=e(93168),a=e(23587);(function(o,u){if(!0)!(h=[E,e(92243),e(17534),e(15286),e(72153),e(81853),e(27378),e(66697),e(14798),e(53256)],i=u,d=typeof i=="function"?i.apply(E,h):i,d!==void 0&&(k.exports=d));else var O})(typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:this,function(o,u,O,H,W,z,A,w,S,te){"use strict";var D=e(67971);l(o,"__esModule",{value:!0}),o.default=void 0,u=D(u),O=D(O),H=D(H),W=D(W),z=D(z),A=j(A),w=D(w),S=D(S),te=D(te);function ne(t){if(typeof n!="function")return null;var M=new n,m=new n;return(ne=function(s){return s?m:M})(t)}function j(t,M){if(!M&&t&&t.__esModule)return t;if(t===null||p(t)!=="object"&&typeof t!="function")return{default:t};var m=ne(M);if(m&&m.has(t))return m.get(t);var c={},s=l&&a;for(var T in t)if(T!=="default"&&Object.prototype.hasOwnProperty.call(t,T)){var v=s?a(t,T):null;v&&(v.get||v.set)?l(c,T,v):c[T]=t[T]}return c.default=t,m&&m.set(t,c),c}var Y=function(M){var m=M.experiment,c=m.experimentId,s=m.name,T=(0,A.useState)(!1),v=(0,z.default)(T,2),R=v[0],L=v[1],oe=(0,A.useState)("".concat(S.default.t("[copy]")).concat(s)),r=(0,z.default)(oe,2),me=r[0],he=r[1];return A.default.createElement(u.default,{visible:R,trigger:A.default.createElement(W.default,{disabled:M.disable,className:te.default.opt,onClick:function(){return L(!R)},text:!0,type:"primary"},A.default.createElement(w.default,null,"Copy")),triggerType:"click",needAdjust:!0,closable:!1},A.default.createElement("p",{className:te.default.cloneTitle},A.default.createElement(w.default,null,"Drill name")),A.default.createElement(H.default,{hasClear:!0,maxLength:20,onChange:function(de){return he(de)},value:me}),A.default.createElement("div",{className:te.default.cloneBtnRow},A.default.createElement(W.default,{type:"primary",onClick:function(){me?(M.onSubmit({experimentId:c,name:me}),L(!1)):O.default.error(S.default.t("Please enter a drill name").toString())}},A.default.createElement(w.default,null,"Confirm")),A.default.createElement(W.default,{type:"normal",onClick:function(){return L(!1)}},A.default.createElement(w.default,null,"cancel"))))},q=Y;o.default=q})},2484:function(k,E,e){var i,h,d,p=e(67394),l=e(83452),n=e(95315),a=e(23587),o=e(63774),u=e(92937);(function(O,H){if(!0)!(h=[E,e(75453),e(17534),e(93484),e(12955),e(72153),e(17225),e(36939),e(92243),e(77809),e(57379),e(42499),e(31157),e(27378),e(66697),e(98784),e(60042),e(14798),e(68055),e(9394),e(53256),e(70343),e(99328),e(17640),e(14870),e(42058)],i=H,d=typeof i=="function"?i.apply(E,h):i,d!==void 0&&(k.exports=d));else var W})(typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:this,function(O,H,W,z,A,w,S,te,D,ne,j,Y,q,t,M,m,c,s,T,v,R,L,oe,r,me,he){"use strict";var N=e(67971);p(O,"__esModule",{value:!0}),O.default=void 0,H=N(H),W=N(W),z=N(z),A=N(A),w=N(w),S=N(S),te=N(te),D=N(D),ne=N(ne),j=N(j),Y=N(Y),q=N(q),t=N(t),M=N(M),m=N(m),c=N(c),s=N(s),T=N(T),v=N(v),R=N(R);function de(pe,V){var P=l(pe);if(n){var ee=n(pe);V&&(ee=ee.filter(function(Ee){return a(pe,Ee).enumerable})),P.push.apply(P,ee)}return P}function se(pe){for(var V=1;V<arguments.length;V++){var P=arguments[V]!=null?arguments[V]:{};V%2?de(Object(P),!0).forEach(function(ee){(0,j.default)(pe,ee,P[ee])}):o?u(pe,o(P)):de(Object(P)).forEach(function(ee){p(pe,ee,a(P,ee))})}return pe}var _e=Y.default.Column,ue=2,Ne=(0,v.default)({count:26,hue:"#00C1DE"}),ce=function(){console.log()},Be=function(V){var P=(0,he.useHistory)(),ee=(0,me.useDispatch)(),Ee=(0,oe.getParams)("workspaceId"),Pe=(0,me.useSelector)(function(C){return se(se({},C.experimentList.experiments),{},{loading:C.loading.effects["experimentList/getExperimentList"]})}),ye=Pe.data,Fe=Pe.total,re=Pe.loading;function y(C){return $.apply(this,arguments)}function $(){return $=(0,ne.default)(regeneratorRuntime.mark(function C(_){var g,B;return regeneratorRuntime.wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return I.next=2,ee.experimentList.startExperiment({experimentId:_});case 2:g=I.sent,B=g.Data.taskId,B&&V.getExperimentTotals();case 5:case"end":return I.stop()}},C)})),$.apply(this,arguments)}function x(C){return Z.apply(this,arguments)}function Z(){return Z=(0,ne.default)(regeneratorRuntime.mark(function C(_){var g,B;return regeneratorRuntime.wrap(function(I){for(;;)switch(I.prev=I.next){case 0:if(m.default.isEmpty(Ee)){I.next=7;break}return I.next=3,ee.experimentList.deleteWorkspaceExperiment({workspaceId:Ee,workspaceExperimentList:[{experimentId:_}]});case 3:g=I.sent,g.Success&&(W.default.success(s.default.t("Successfully deleted").toString()),V.getExperimentTotals()),I.next=11;break;case 7:return I.next=9,ee.experimentList.deleteExperiment({experimentId:_});case 9:B=I.sent,B.Success&&(W.default.success(s.default.t("Successfully deleted").toString()),V.getExperimentTotals());case 11:case"end":return I.stop()}},C)})),Z.apply(this,arguments)}function K(C){return le.apply(this,arguments)}function le(){return le=(0,ne.default)(regeneratorRuntime.mark(function C(_){var g;return regeneratorRuntime.wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,ee.experimentList.stopExperiment({taskId:_});case 2:g=f.sent,g.Success&&V.getExperimentTotals();case 4:case"end":return f.stop()}},C)})),le.apply(this,arguments)}function Ie(C){return Se.apply(this,arguments)}function Se(){return Se=(0,ne.default)(regeneratorRuntime.mark(function C(_){var g,B,f,I,G;return regeneratorRuntime.wrap(function(b){for(;;)switch(b.prev=b.next){case 0:if(g="",!Ee){b.next=9;break}return b.next=4,ee.experimentList.workspaceCloneExperiment(se(se({},_),{},{workspaceId:Ee}));case 4:B=b.sent,f=B.Data,g=f,b.next=14;break;case 9:return b.next=11,ee.experimentList.cloneExperiment(_);case 11:I=b.sent,G=I.Data,g=G;case 14:g&&(W.default.success(s.default.t("Copy successfully").toString()),V.getExperimentTotals());case 15:case"end":return b.stop()}},C)})),Se.apply(this,arguments)}function Xe(C,_){return Te.apply(this,arguments)}function Te(){return Te=(0,ne.default)(regeneratorRuntime.mark(function C(_,g){var B,f,I,G,ae;return regeneratorRuntime.wrap(function(fe){for(;;)switch(fe.prev=fe.next){case 0:return fe.next=2,ee.experimentList.queryExperimentAmount({experimentId:_});case 2:if(B=fe.sent,f=B.Data,I=f.remainingAmount,G=f.forecastAmount,!(isNaN(I)||isNaN(G))){fe.next=9;break}return A.default.alert({title:s.default.t("Failed to query resource").toString(),content:s.default.t("Please try again").toString(),messageProps:{type:"error"},locale:(0,T.default)().Dialog}),fe.abrupt("return");case 9:ae=A.default.alert({style:{width:480},title:s.default.t("Start the exercise").toString(),content:ge(g),locale:(0,T.default)().Dialog,footer:t.default.createElement("span",null,t.default.createElement(w.default,{onClick:function(){ae.hide()},style:{marginRight:8}},t.default.createElement(M.default,null,"cancel")),t.default.createElement(w.default,{type:"primary",onClick:function(){ae.hide(),y(_)}},t.default.createElement(M.default,null,"Confirm"))),onCancel:ce});case 10:case"end":return fe.stop()}},C)})),Te.apply(this,arguments)}var ge=function(_){var g=m.default.get(_,"experimentAppRisks",[]);return m.default.isEmpty(g)?t.default.createElement("span",{style:{fontSize:12,color:"#555",fontWeight:"normal",lineHeight:"20px"}},t.default.createElement(M.default,null,"After the drill starts, operations such as fault injection will be performed on the specified target (host, etc.), which may make the target (host, etc.) service unavailable. Confirm whether to start the execution")):t.default.createElement("span",{style:{fontSize:12,color:"#555",fontWeight:"normal"}},t.default.createElement("p",null,t.default.createElement(M.default,null,"After the drill starts, operations such as fault injection will be performed on the specified target (host, etc.), which may make the target (host, etc.) service unavailable. Are you sure to start the execution")),t.default.createElement("span",{className:R.default.warnContent},t.default.createElement("p",null,t.default.createElement(M.default,null,"Scenarios included in the walkthrough, the following issues may arise")),t.default.createElement("ul",{className:R.default.tipsContent},m.default.map(g,function(B){return t.default.createElement("li",{className:R.default.startTipsList},t.default.createElement("span",null,B&&B.appName,"\uFF1A"),B&&B.message)}))))},Me=function(_,g,B){var f=B.experiment,I,G=!1;m.default.isEmpty(f)||(I=f.description,G=f.schedulerConfig&&f.schedulerConfig.cronExpression);var ae=f.experimentId,b=f.state,fe=m.default.get(f.task,"taskId",""),De=t.default.createElement("a",{onClick:function(){b!==L.ExperimentConstants.EXPERIMENT_TASK_STATE_RUNNING?(0,oe.pushUrl)(P,"/chaos/experiment/detail",{id:ae}):(0,oe.pushUrl)(P,"/chaos/experiment/task",{id:fe})},className:R.default.title},G&&t.default.createElement("img",{src:"https://img.alicdn.com/tfs/TB1Ffk2iAcx_u4jSZFlXXXnUFXa-16-16.svg",className:R.default.listIcon,title:s.default.t("Timed task").toString()}),t.default.createElement("span",{className:R.default.displayTitle},_));return t.default.createElement(D.default,{trigger:De,closable:!1},m.default.isEmpty(I)?_:I)},ke=function(_){return t.default.createElement("div",null,!m.default.isEmpty(_)&&m.default.map(_,function(g,B){return t.default.createElement(D.default,{closable:!1,trigger:t.default.createElement(te.default,{key:"user-experiments-tag-".concat(B),style:{maxWidth:200,marginTop:"2px",marginBottom:"2px"},size:"small",onClick:function(){V.handleTagChange&&V.handleTagChange(g)}},g),key:B},g)}))},Oe=function(){var _=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],g=_.length>ue;return _=_.map(function(B){var f=B.split(/\./g);return f.length>1?f[1]:B}),t.default.createElement("div",{className:R.default.apps},!m.default.isEmpty(_)&&m.default.map(g?m.default.slice(_,0,ue):_,function(B,f){var I=m.default.upperFirst(B).charAt(0),G=Ne[I.charCodeAt(0)-65];return t.default.createElement(D.default,{key:"user-experiments-app-".concat(f),trigger:t.default.createElement("div",{className:R.default.app,style:{backgroundColor:G}},I),closable:!1},m.default.upperCase(B))}),g?t.default.createElement(D.default,{trigger:t.default.createElement("div",{className:R.default.app,style:{backgroundColor:"#E5E5E5"}},"..."),closable:!1},m.default.join(m.default.map(m.default.slice(_,ue),m.default.upperCase),",")):"")},ve=function(_,g,B){var f=B.experiment,I=f.taskState,G=f.taskResult,ae,b="";return f.state===L.ExperimentConstants.EXPERIMENT_STATE_DRAFT?b="- - -":f.state===L.ExperimentConstants.EXPERIMENT_TASK_STATE_RUNNING?(ae=t.default.createElement(S.default,{type:"loading",size:"small",style:{marginRight:5}}),I===L.ExperimentConstants.EXPERIMENT_TASK_STATE_STOPPING?b=s.default.t("Stopping"):f.taskUserCheckState===L.ExperimentConstants.EXPERIMENT_ACTIVITY_TASK_USER_CHECK_STATE_WAITING?b=s.default.t("Wait for user confirmation"):b=s.default.t("In progress")):I===L.ExperimentConstants.EXPERIMENT_TASK_STATE_FINISHED&&(G===L.ExperimentConstants.EXPERIMENT_TASK_RESULT_SUCCESS&&(ae=t.default.createElement(S.default,{type:"success",style:{color:"#1F8E3D",marginRight:6},size:"small"}),b=s.default.t("Success")),G===L.ExperimentConstants.EXPERIMENT_TASK_RESULT_FAILED&&(ae=t.default.createElement(S.default,{type:"warning",style:{color:"#D93026",marginRight:6},size:"small"}),b=s.default.t("Not as expected")),G===L.ExperimentConstants.EXPERIMENT_TASK_RESULT_ERROR&&(ae=t.default.createElement(S.default,{type:"warning",style:{color:"#D93026",marginRight:6},size:"small"}),b=s.default.t("Abnormal")),(G===L.ExperimentConstants.EXPERIMENT_TASK_RESULT_STOPPED||f.taskResult===L.ExperimentConstants.EXPERIMENT_TASK_RESULT_REJECTED)&&(ae=t.default.createElement(S.default,{type:"minus-circle-fill",style:{color:"#FFC440",marginRight:6},size:"small"}),b=s.default.t("Interrupt"))),t.default.createElement("div",null,ae,t.default.createElement("span",null,b))},je=function(_){return _.map(function(g,B){return t.default.createElement("span",{key:g.name},g.name,_.length-1!==B&&"\u3001")})};function Ye(C,_){return Ue.apply(this,arguments)}function Ue(){return Ue=(0,ne.default)(regeneratorRuntime.mark(function C(_,g){var B,f,I,G;return regeneratorRuntime.wrap(function(b){for(;;)switch(b.prev=b.next){case 0:if(B=[],!m.default.isEmpty(Ee)){b.next=7;break}return b.next=4,ee.experimentList.getWorkspaceByExperimentId({experimentId:g});case 4:f=b.sent,I=f.Data,B=I;case 7:G=A.default.alert({title:s.default.t("Warn").toString(),content:t.default.createElement("div",{className:R.default.deleteTips},Ee&&"".concat(s.default.t("Remove walkthrough"),"\uFF08").concat(_,",").concat(s.default.t("will remove it from this space"),"\uFF08").concat(V.workspaceName,"\uFF09").concat(s.default.t("connection relation. OK to remove")),!Ee&&t.default.createElement("div",null,m.default.isEmpty(B)?t.default.createElement("div",null," ",s.default.t("The walkthrough").toString(),"\uFF08",_,"\uFF09",s.default.t("It only exists in my space, are you sure you want to delete it?").toString()):t.default.createElement("div",null,s.default.t("Delete walkthrough"),"\uFF08",_,"\uFF09\uFF0C",s.default.t("Will delete all associated spaces"),"\uFF08",je(B)," ",s.default.t("This walkthrough in , OK to delete"),"\uFF1F"))),footer:t.default.createElement(t.default.Fragment,null,t.default.createElement(w.default,{type:"primary",onClick:function(){x(g),G.hide()}},t.default.createElement(M.default,null,"Confirm")),t.default.createElement(w.default,{onClick:function(){return G.hide()}}," ",t.default.createElement(M.default,null,"cancel"))),locale:(0,T.default)().Dialog});case 8:case"end":return b.stop()}},C)})),Ue.apply(this,arguments)}function we(C,_,g){return t.default.createElement(w.default,{className:(0,c.default)(R.default.opt,(0,r.handleIsAdmin)(g,2)?R.default.warning:"",(0,r.handleIsAdmin)(g,2)?"":R.default.disable),disabled:!(0,r.handleIsAdmin)(g,2),style:{marginLeft:0},text:!0,onClick:function(f){f.stopPropagation(),Ye(C,_)},type:"primary"},Ee?s.default.t("Remove").toString():s.default.t("Delete").toString())}function ze(C){var _=m.default.get(C,"blockReasons",[]);return t.default.createElement("ul",{className:R.default.ulList},(0,H.default)(_).map(function(g){return t.default.createElement("li",{key:g,className:R.default.baoollnList},g)}))}function $e(C){var _=C.experimentId,g=C.state,B=C.name,f=C.opLevel,I=C.taskState,G=C.permission,ae=G===void 0?0:G,b=m.default.get(C,"task.taskId","");return f?t.default.createElement(t.default.Fragment,null,t.default.createElement(D.default,{trigger:t.default.createElement(S.default,{type:"help",size:"xs",className:R.default.helpIcon}),closable:!1},ze(C)),t.default.createElement(w.default,{disabled:f!==1||!(0,r.handleIsAdmin)(ae,4),className:R.default.opt,text:!0,type:"primary"},t.default.createElement(M.default,null,"Drill"))):g!==L.ExperimentConstants.EXPERIMENT_TASK_STATE_RUNNING?g===L.ExperimentConstants.EXPERIMENT_STATE_SYNC?t.default.createElement(D.default,{trigger:t.default.createElement("span",{className:(0,c.default)(R.default.opt,R.default.disable)},"  ",t.default.createElement(M.default,null,"Drill")),closable:!1},t.default.createElement(M.default,null,"Run after editing")):t.default.createElement(w.default,{disabled:!(0,r.handleIsAdmin)(ae,4),className:R.default.opt,text:!0,onClick:function(){return Xe(_,C)},type:"primary"},t.default.createElement(M.default,null,"Drill")):I===L.ExperimentConstants.EXPERIMENT_TASK_STATE_STOPPING?t.default.createElement(D.default,{trigger:t.default.createElement("span",{className:(0,c.default)(R.default.opt,R.default.disable)}," ",t.default.createElement(M.default,null,"Stop")),closable:!1},t.default.createElement(M.default,null,"Rehearsal is in progress")):t.default.createElement(w.default,{className:(0,c.default)(R.default.opt,(0,r.handleIsAdmin)(ae,4)&&R.default.warning),disabled:!(0,r.handleIsAdmin)(ae,4),text:!0,onClick:function(){A.default.confirm({title:s.default.t("Stop the drill").toString(),content:"".concat(s.default.t("Are you sure to stop the exercise [drill name"),": ").concat(B,"]\uFF1F"),locale:(0,T.default)().Dialog,onOk:function(){return K(b)}})}},t.default.createElement(M.default,null,"Stop"))}var We=function(_){var g=_.experimentId,B=_.state,f=_.name,I=_.permission,G=I===void 0?0:I;return t.default.createElement("div",{className:R.default.optGroup},$e(_),t.default.createElement("span",{style:{marginRight:8,color:"#d8d8d8"}},"|"),t.default.createElement(q.default,{experiment:_,disable:!(0,r.handleIsAdmin)(G,2),onSubmit:Ie}),t.default.createElement("span",{style:{marginRight:8,color:"#d8d8d8"}},"|"),B!==L.ExperimentConstants.EXPERIMENT_TASK_STATE_RUNNING?we(f,g,G):t.default.createElement(D.default,{trigger:t.default.createElement("span",{className:(0,c.default)(R.default.opt,R.default.disable)},Ee?s.default.t("Remove").toString():s.default.t("Delete").toString()),closable:!1},t.default.createElement(M.default,null,"On-going drills are prohibited from deletion")))};return t.default.createElement("div",{className:R.default.container},t.default.createElement(Y.default,{primaryKey:"experimentId",hasBorder:!1,dataSource:!V.running&&re||!(0,r.handleIsAdmin)(V.permission,1)?[]:ye,loading:V.running?!1:re,onFilter:function(){return console.log(1)},locale:(0,T.default)().Table},t.default.createElement(_e,{title:s.default.t("Drill name").toString(),dataIndex:"experiment.name",cell:Me,width:"16%"}),t.default.createElement(_e,{title:s.default.t("Tag").toString(),dataIndex:"experiment.tags",cell:ke,width:"16%"}),t.default.createElement(_e,{title:s.default.t("Scenes").toString(),dataIndex:"experiment.miniAppDesc",cell:Oe}),t.default.createElement(_e,{title:s.default.t("Create Time").toString(),dataIndex:"experiment.createTime",width:"13%"}),t.default.createElement(_e,{title:s.default.t("Timed task").toString(),dataIndex:"experiment.schedulerConfig.cronExpression"}),t.default.createElement(_e,{title:s.default.t("Latest running status").toString(),dataIndex:"experiment.state",cell:ve,width:"9%"}),t.default.createElement(_e,{title:s.default.t("Last running time").toString(),dataIndex:"experiment.taskStartTime",width:"13%"}),t.default.createElement(_e,{title:s.default.t("Operation").toString(),width:"12%",lock:"right",dataIndex:"experiment",cell:We})),t.default.createElement(z.default,{className:R.default.homePagination,shape:"arrow-only",pageSizePosition:"start",current:V.page,total:Fe,locale:(0,T.default)().Pagination,onChange:V.handlePageChange,hideOnlyOnePage:!0}))},Re=Be;O.default=Re})},25300:function(k,E,e){var i,h,d,p=e(67394);(function(l,n){if(!0)!(h=[E,e(12955),e(83086),e(27378),e(14798),e(68055),e(88972)],i=n,d=typeof i=="function"?i.apply(E,h):i,d!==void 0&&(k.exports=d));else var a})(typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:this,function(l,n,a,o,u,O,H){"use strict";var W=e(67971);p(l,"__esModule",{value:!0}),l.default=void 0,n=W(n),a=W(a),o=W(o),u=W(u),O=W(O),H=W(H);var z=function(S){return o.default.createElement(n.default,{title:u.default.t("Exception Injection").toString(),visible:S.visible,onClose:S.handleClose,className:H.default.DialogExperience,footer:!1,locale:(0,O.default)().Dialog},o.default.createElement("div",{className:H.default.warp},o.default.createElement(a.default,{onEmpty:S.onEmpty,hideEmpty:S.hideEmpty,noFooter:!0,onChose:S.handleChoseCreate})))},A=z;l.default=A})},45919:function(k,E,e){var i,h,d,p=e(67394);(function(l,n){if(!0)!(h=[E,e(17225),e(27378),e(66697),e(65328)],i=n,d=typeof i=="function"?i.apply(E,h):i,d!==void 0&&(k.exports=d));else var a})(typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:this,function(l,n,a,o,u){"use strict";var O=e(67971);p(l,"__esModule",{value:!0}),l.default=void 0,n=O(n),a=O(a),o=O(o),u=O(u);var H=function(A){var w=A.statisitcInfo,S=w===void 0?{}:w,te=S.total,D=S.active,ne=S.running,j=S.failure,Y=S.success,q=S.idle;function t(){return a.default.createElement("svg",{width:"70px",height:"18px",viewBox:"0 0 70 18",version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},a.default.createElement("g",{id:"Page-1",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},a.default.createElement("g",{id:"\u6545\u969C\u6F14\u7EC3\u5217\u8868",transform:"translate(-639.000000, -154.000000)"},a.default.createElement("g",{id:"\u6F14\u7EC3\u72B6\u6001",transform:"translate(639.000000, 154.000000)"},a.default.createElement("path",{d:"M-1.42108547e-14,0 L70,0 L65.813729,15.0705755 C65.3328182,16.8018545 63.7564886,18 61.9596574,18 L8.0403426,18 C6.24351138,18 4.66718181,16.8018545 4.18627096,15.0705755 L-1.42108547e-14,0 L-1.42108547e-14,0 Z",id:"Rectangle",fill:"#A5C3DE"}),a.default.createElement("text",{fontFamily:"PingFangSC-Regular, PingFang SC",fontSize:"12",fontWeight:"normal",fill:"#FFFFFF"},a.default.createElement("tspan",{x:"11",y:"14"},a.default.createElement(o.default,null,"Drill status")))))))}return a.default.createElement("div",{className:u.default.wrapper},a.default.createElement("div",{className:u.default.statisticDone},a.default.createElement("div",{className:u.default.doneBox},a.default.createElement("div",{className:u.default.title},a.default.createElement(o.default,null,"Exercises performed")),a.default.createElement("span",{className:u.default.number},D)),a.default.createElement("div",{className:u.default.separator}),a.default.createElement("div",{className:u.default.detailBox},a.default.createElement("div",{className:u.default.topTip},t()),a.default.createElement("div",{className:u.default.failedBox},a.default.createElement(n.default,{type:"exclamation-circle",className:u.default.icon,size:"small"}),a.default.createElement("span",null,a.default.createElement(o.default,null,"Fail"),":"),a.default.createElement("span",{className:u.default.detailFont},j)),a.default.createElement("div",{className:u.default.runningBox},a.default.createElement(n.default,{type:"clock",className:u.default.icon,size:"small"}),a.default.createElement("span",null,a.default.createElement(o.default,null,"Running"),":"),a.default.createElement("span",{className:u.default.detailFont},ne)),a.default.createElement("div",{className:u.default.successBox},a.default.createElement(n.default,{type:"check-circle",className:u.default.icon,size:"small"}),a.default.createElement("span",null,a.default.createElement(o.default,null,"Success"),":"),a.default.createElement("span",{className:u.default.detailFont},Y)))),a.default.createElement("div",{className:u.default.statisticUnDone},a.default.createElement("div",{className:u.default.title},a.default.createElement(o.default,null,"Exercises not performed")),a.default.createElement("span",{className:u.default.number},q)),a.default.createElement("div",{className:u.default.statisticTotal},a.default.createElement("div",{className:u.default.title},a.default.createElement(o.default,null,"General drill total")),a.default.createElement("span",{className:u.default.number},te)))},W=H;l.default=W})},49789:function(k,E,e){var i,h,d,p=e(24596),l=e(67394),n=e(93168),a=e(23587),o=e(83452),u=e(95315),O=e(63774),H=e(92937);(function(W,z){if(!0)!(h=[E,e(75453),e(32186),e(83452),e(79566),e(73915),e(94188),e(28757),e(12955),e(34132),e(85645),e(72153),e(17225),e(17534),e(35049),e(57379),e(77809),e(81853),e(95001),e(2484),e(25300),e(27378),e(45919),e(58184),e(66697),e(98784),e(14798),e(68055),e(18390),e(96291),e(99328),e(70343),e(14870),e(42058),e(49729)],i=z,d=typeof i=="function"?i.apply(E,h):i,d!==void 0&&(k.exports=d));else var A})(typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:this,function(W,z,A,w,S,te,D,ne,j,Y,q,t,M,m,c,s,T,v,R,L,oe,r,me,he,N,de,se,_e,ue,Ne,ce,Be,Re,pe,V){"use strict";var P=e(67971);l(W,"__esModule",{value:!0}),W.default=void 0,z=P(z),A=P(A),w=P(w),S=P(S),te=P(te),D=P(D),ne=P(ne),j=P(j),Y=P(Y),q=P(q),t=P(t),M=P(M),m=P(m),c=P(c),s=P(s),T=P(T),v=P(v),R=P(R),L=P(L),oe=P(oe),r=Ee(r),me=P(me),he=P(he),N=P(N),de=P(de),se=P(se),_e=P(_e),ue=P(ue);function ee(y){if(typeof n!="function")return null;var $=new n,x=new n;return(ee=function(K){return K?x:$})(y)}function Ee(y,$){if(!$&&y&&y.__esModule)return y;if(y===null||p(y)!=="object"&&typeof y!="function")return{default:y};var x=ee($);if(x&&x.has(y))return x.get(y);var Z={},K=l&&a;for(var le in y)if(le!=="default"&&Object.prototype.hasOwnProperty.call(y,le)){var Ie=K?a(y,le):null;Ie&&(Ie.get||Ie.set)?l(Z,le,Ie):Z[le]=y[le]}return Z.default=y,x&&x.set(y,Z),Z}function Pe(y,$){var x=o(y);if(u){var Z=u(y);$&&(Z=Z.filter(function(K){return a(y,K).enumerable})),x.push.apply(x,Z)}return x}function ye(y){for(var $=1;$<arguments.length;$++){var x=arguments[$]!=null?arguments[$]:{};$%2?Pe(Object(x),!0).forEach(function(Z){(0,s.default)(y,Z,x[Z])}):O?H(y,O(x)):Pe(Object(x)).forEach(function(Z){l(y,Z,a(x,Z))})}return y}var Fe=function($){var x=(0,Re.useDispatch)(),Z=(0,pe.useHistory)(),K=(0,ce.getParams)("workspaceId"),le=(0,ce.getParams)("_st"),Ie=(0,Re.useSelector)(function(X){return{loading:X.loading.effects["experimentList/getExperimentList"],chaosContext:X.loginUser}}),Se=Ie.chaosContext,Xe=(0,r.useState)(),Te=(0,v.default)(Xe,2),ge=Te[0],Me=Te[1],ke=(0,r.useState)(""),Oe=(0,v.default)(ke,2),ve=Oe[0],je=Oe[1],Ye=(0,r.useState)((le==null?void 0:le.split(","))||[]),Ue=(0,v.default)(Ye,2),we=Ue[0],ze=Ue[1],$e=(0,r.useState)((le==null?void 0:le.split(","))||[]),We=(0,v.default)($e,2),C=We[0],_=We[1],g=(0,r.useState)(1),B=(0,v.default)(g,2),f=B[0],I=B[1],G=(0,r.useState)([]),ae=(0,v.default)(G,2),b=ae[0],fe=ae[1],De=(0,r.useState)([]),Ze=(0,v.default)(De,2),xe=Ze[0],He=Ze[1],Et=(0,r.useState)(!1),et=(0,v.default)(Et,2),Ge=et[0],tt=et[1],pt=(0,r.useState)(!1),nt=(0,v.default)(pt,2),Je=nt[0],rt=nt[1],mt=(0,r.useState)(!1),at=(0,v.default)(mt,2),lt=at[0],ct=at[1],gt=(0,r.useState)(7),it=(0,v.default)(gt,2),ht=it[0],st=it[1],xt=(0,r.useState)(!1),dt=(0,v.default)(xt,2),Ct=dt[0],Bt=dt[1],Rt=(0,r.useState)(!1),ot=(0,v.default)(Rt,2),Le=ot[0],Pt=ot[1],It=(0,r.useState)(!1),ut=(0,v.default)(It,2),Ke=ut[0],St=ut[1],vt=(0,r.useState)(!1),At=(0,v.default)(vt,2),yt=At[0],Tt=At[1];(0,r.useEffect)(function(){x.pageHeader.setTitle(se.default.t("Walkthrough List").toString()),x.pageHeader.setBreadCrumbItems(Ne.CHAOS_DEFAULT_BREADCRUMB_ITEM.concat([{key:"experimentlist",value:se.default.t("Walkthrough List").toString(),path:"/chaos"}]))},[]),(0,r.useEffect)(function(){(0,T.default)(regeneratorRuntime.mark(function X(){return regeneratorRuntime.wrap(function(U){for(;;)switch(U.prev=U.next){case 0:return U.next=2,x.expertises.getExpertiseBase({page:1,size:10});case 2:case"end":return U.stop()}},X)}))()},[]),(0,r.useEffect)(function(){(0,T.default)(regeneratorRuntime.mark(function X(){var F,U,Q,ie;return regeneratorRuntime.wrap(function(J){for(;;)switch(J.prev=J.next){case 0:if(de.default.isEmpty(K)){J.next=8;break}return J.next=3,x.experimentList.getGeneralWorkSpaceStatInfo({workspaceId:K});case 3:F=J.sent,U=F.Data,Me(U),J.next=13;break;case 8:return J.next=10,x.experimentList.getExperimentTaskStatistic();case 10:Q=J.sent,ie=Q.Data,Me(ie);case 13:case"end":return J.stop()}},X)}))()},[Ge,K]),(0,r.useEffect)(function(){var X=_t(),F=X.status,U=X.results;(0,T.default)(regeneratorRuntime.mark(function Q(){var ie,Ce,J;return regeneratorRuntime.wrap(function(Ae){for(;;)switch(Ae.prev=Ae.next){case 0:if(!(!de.default.isEmpty(K)&&!de.default.isEmpty(Se))){Ae.next=10;break}return ie={searchKey:ve,states:F,results:U,page:f,size:10,tagNames:xe,workspaceId:K},Ce=Se.userId,Le&&(ie.filterUserId=Ce),Ae.next=6,x.experimentList.getPageableGeneralExperiments(ye({},ie));case 6:J=Ae.sent,st(J),Ae.next=12;break;case 10:return Ae.next=12,x.experimentList.getExperimentList({searchKey:ve,states:F,results:U,page:f,size:10,tagNames:xe,scheduler:Ke});case 12:case"end":return Ae.stop()}},Q)}))()},[ve,C,f,xe,K,Ct,Le,Ke]),(0,V.useInterval)(function(){ge&&ge.running&&be()},ge&&ge.running?5e3:null);var _t=function(){if(C.length===0)return{status:[],results:[]};var F=[],U=[];return C.map(function(Q){var ie=Be.SearchOptDict[Q]||{},Ce=ie.status,J=ie.results;return F.push(Ce),U=[].concat((0,c.default)(U),(0,c.default)(J)),Q}),{status:(0,z.default)(new A.default(F)),results:(0,z.default)(new A.default(U))}};function be(){return Qe.apply(this,arguments)}function Qe(){return Qe=(0,T.default)(regeneratorRuntime.mark(function X(){var F,U,Q,ie,Ce,J;return regeneratorRuntime.wrap(function(Ae){for(;;)switch(Ae.prev=Ae.next){case 0:if(F=_t(),U=F.status,Q=F.results,de.default.isEmpty(K)){Ae.next=12;break}return ie={searchKey:ve,states:U||[],results:Q,page:f,size:10,tagNames:xe,workspaceId:K},Ce=Se.userId,Le&&(ie.filterUserId=Ce),Ae.next=7,x.experimentList.getPageableGeneralExperiments(ye({},ie));case 7:J=Ae.sent,st(J),tt(!Ge),Ae.next=15;break;case 12:return Ae.next=14,x.experimentList.getExperimentList({searchKey:ve,states:U,results:Q,page:f,size:10,tagNames:xe,scheduler:Ke});case 14:tt(!Ge);case 15:case"end":return Ae.stop()}},X)})),Qe.apply(this,arguments)}function Ut(){return Ve.apply(this,arguments)}function Ve(){return Ve=(0,T.default)(regeneratorRuntime.mark(function X(){var F,U,Q,ie;return regeneratorRuntime.wrap(function(J){for(;;)switch(J.prev=J.next){case 0:if(de.default.isEmpty(K)){J.next=8;break}return J.next=3,x.experimentList.listGeneralWorkspaceExperimentTags({workspaceId:K});case 3:F=J.sent,U=F.Data,de.default.isEmpty(U)||fe(U),J.next=13;break;case 8:return J.next=10,x.experimentList.getListExperimentTags();case 10:Q=J.sent,ie=Q.Data,de.default.isEmpty(ie)||fe(ie);case 13:case"end":return J.stop()}},X)})),Ve.apply(this,arguments)}(0,r.useEffect)(function(){_((le==null?void 0:le.split(","))||[]),I(1)},[le]);function Dt(){(0,ce.pushUrl)(Z,"/chaos/workspace/owner",{_st:we.join(",")})}function Nt(X){je(X),I(1)}function Ft(X){I(X)}function Mt(X){He(X),I(1)}function Ot(){return qe.apply(this,arguments)}function qe(){return qe=(0,T.default)(regeneratorRuntime.mark(function X(){var F;return regeneratorRuntime.wrap(function(Q){for(;;)switch(Q.prev=Q.next){case 0:return Q.next=2,x.experimentList.stopAllExperimentTasks();case 2:F=Q.sent,F.Success&&be();case 4:case"end":return Q.stop()}},X)})),qe.apply(this,arguments)}function wt(){x.experimentEditor.setClearExperiment(),rt(!Je)}function Wt(){(0,ce.pushUrl)(Z,"/chaos/experiment/editor")}function Lt(X){var F=X.expertise_id,U=de.default.get(X,"scope_type",[]),Q=[];U.forEach(function(ie){ie===0&&Q.push(se.default.t("Host")),ie===2&&Q.push(se.default.t("Kubernetes"))}),m.default.show({type:"notice",title:r.default.createElement("div",null,"".concat(se.default.t("Supported by current experience")).concat(Q.join(",")).concat(se.default.t("Application type")))}),(0,ce.pushUrl)(Z,"/chaos/experiment/editor",{expertiseId:F})}function Kt(){(0,ce.pushUrl)(Z,"/chaos/freshapplication/access")}var bt=function(F){x.experimentEditor.setClearExperiment(),F==="-1"?rt(!Je):(0,ce.pushUrl)(Z,F)};function Xt(){var X=ge&&ge.running;return r.default.createElement("div",{className:ue.default.operations},r.default.createElement("div",{style:{display:"flex"}},r.default.createElement(Y.default,{onVisibleChange:function(U){return Tt(U)},trigger:r.default.createElement(t.default,{className:ue.default.createButton,type:"primary"},r.default.createElement(N.default,null,"New drill")," ",r.default.createElement(M.default,{type:yt?"angle-down":"angle-right"}))},r.default.createElement(q.default,{className:ue.default.createMenu,onItemClick:function(U){return bt(U)}},r.default.createElement(q.default.Item,{key:"/chaos/experiment/editor"},r.default.createElement(N.default,null,"New Blank Walkthrough")),r.default.createElement(q.default.Item,{key:"-1"},r.default.createElement(N.default,null,"New from experience base")))),K&&r.default.createElement(t.default,{style:{marginLeft:8},onClick:ft},r.default.createElement(N.default,null,"Add walkthrough")),r.default.createElement(t.default,{className:ue.default.stopButton,warning:!0,disabled:X===0,onClick:function(){j.default.confirm({title:se.default.t("Stop all drills").toString(),content:"".concat(se.default.t("Currently has")).concat(X).concat(se.default.t("Drills are in progress, are they all stopped")),locale:(0,_e.default)().Dialog,onOk:function(){return Ot()}})}},r.default.createElement(N.default,null,"Stop all")),r.default.createElement(ne.default,{placeholder:se.default.t("Please select a status").toString(),className:ue.default.select,mode:"multiple",tagInline:!0,maxTagPlaceholder:function(){return""},onChange:function(U){return ze(U)},onBlur:Dt,value:we,locale:(0,_e.default)().Select},(0,w.default)(Be.SearchOptDict).map(function(F){var U=Be.SearchOptDict[F]||{},Q=U.name;return r.default.createElement(ne.default.Option,{key:F,value:F},Q)})),r.default.createElement(he.default,{data:b,onSubmit:Mt,tagNames:xe,onFocus:Ut}),r.default.createElement(D.default,{shape:"simple",className:ue.default.search,placeholder:"\u8BF7\u8F93\u5165\u6F14\u7EC3\u540D\u79F0",onChange:Nt}),K&&r.default.createElement("div",{className:ue.default.switch},r.default.createElement("span",null,r.default.createElement(N.default,null,"Show only your own walkthrough")),r.default.createElement(te.default,{size:"small",checked:Le,onChange:function(U){return Pt(U)}})),r.default.createElement(S.default,{className:ue.default.schedulerCb,checked:Ke,onChange:function(U){return St(U)}},r.default.createElement(N.default,null,"Just watch timed drills"))),r.default.createElement("span",null,r.default.createElement(t.default,{type:"primary",text:!0,onClick:Kt},r.default.createElement(N.default,null,"Application access"))))}function ft(){ct(!lt)}function kt(){Bt(!0)}function jt(X){if(!xe.includes(X))He([].concat((0,c.default)(xe),[X]));else{var F=de.default.pull(xe,X);He((0,c.default)(F))}}return r.default.createElement("div",{style:{marginBottom:16}},r.default.createElement(me.default,{statisitcInfo:ge}),Xt(),r.default.createElement(L.default,{workspaceName:$.workspaceName,running:ge&&ge.running,permission:ht,handlePageChange:Ft,handleTagChange:jt,page:f,getExperimentTotals:be,getExperienceBag:kt}),r.default.createElement(oe.default,{visible:Je,hideEmpty:!0,handleClose:wt,onEmpty:Wt,handleChoseCreate:Lt}),r.default.createElement(R.default,{getExperimentTotals:be,visible:lt,onCancel:ft}))},re=Fe;W.default=re})},87344:function(k,E,e){var i,h,d,p=e(24596),l=e(67394),n=e(93168),a=e(23587);(function(o,u){if(!0)!(h=[E,e(49789),e(27378),e(14798),e(96291),e(99328),e(14870)],i=u,d=typeof i=="function"?i.apply(E,h):i,d!==void 0&&(k.exports=d));else var O})(typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:this,function(o,u,O,H,W,z,A){"use strict";var w=e(67971);l(o,"__esModule",{value:!0}),o.default=void 0,u=w(u),O=te(O),H=w(H);function S(j){if(typeof n!="function")return null;var Y=new n,q=new n;return(S=function(M){return M?q:Y})(j)}function te(j,Y){if(!Y&&j&&j.__esModule)return j;if(j===null||p(j)!=="object"&&typeof j!="function")return{default:j};var q=S(Y);if(q&&q.has(j))return q.get(j);var t={},M=l&&a;for(var m in j)if(m!=="default"&&Object.prototype.hasOwnProperty.call(j,m)){var c=M?a(j,m):null;c&&(c.get||c.set)?l(t,m,c):t[m]=j[m]}return t.default=j,q&&q.set(j,t),t}var D=function(){var Y=(0,A.useDispatch)();return(0,O.useEffect)(function(){Y.pageHeader.setTitle(H.default.t("My space").toString()),Y.pageHeader.setBreadCrumbItems(W.CHAOS_DEFAULT_BREADCRUMB_ITEM.concat([{key:"workspace_detail",value:H.default.t("My space").toString(),path:""}]))}),(0,O.useEffect)(function(){(0,z.removeParams)("id"),(0,z.removeParams)("permission"),(0,z.removeParams)("expertiseId")},[]),O.default.createElement(u.default,{workspaceName:""})},ne=D;o.default=ne})},17640:function(k,E,e){var i,h,d,p=e(67394);(function(l,n){if(!0)!(h=[E],i=n,d=typeof i=="function"?i.apply(E,h):i,d!==void 0&&(k.exports=d));else var a})(typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:this,function(l){"use strict";p(l,"__esModule",{value:!0}),l.handleIsAdmin=void 0;var n=function(o,u){return(o&u)===u};l.handleIsAdmin=n})},93705:(k,E,e)=>{"use strict";e.d(E,{Z:()=>n});var i=e(60994),h=e.n(i),d=e(93476),p=e.n(d),l=p()(h());l.push([k.id,`.index__warp__QeSbE {\r
  width: 500px;\r
}\r
  .index__warp__QeSbE .index__top__dMmY3 {\r
    height: 36px;\r
    background: #f7f7f7;\r
    color: #555555;\r
    line-height: 5px;\r
    padding: 16px;\r
    margin-bottom: 16px;\r
    font-size: 12px;\r
  }\r
  .index__warp__QeSbE .index__item__KFeZ3 {\r
    display: flex;\r
  }\r
  .index__warp__QeSbE .index__item__KFeZ3 .index__left__H07-S {\r
      font-size: 12px;\r
      color: #555555;\r
      line-height: 32px;\r
      width: 20%;\r
    }\r
  .index__warp__QeSbE .index__select__WAuqz {\r
    width: 80%;\r
  }\r
\r
.index__popup__6bVA1 .next-menu-item-inner {\r
    height: 60px;\r
  }\r
\r
.index__popup__6bVA1 .index__workspaceName__WP\\+ov {\r
    font-size: 12px;\r
    color: #888888;\r
  }\r
`,"",{version:3,sources:["webpack://./pages/Chaos/ExperimentList/AddExperiment/index.css"],names:[],mappings:"AAAA;EACE,YAAY;AAsBd;EArBE;IACE,YAAY;IACZ,mBAAmB;IACnB,cAAc;IACd,gBAAgB;IAChB,aAAa;IACb,mBAAmB;IACnB,eAAe;EACjB;EACA;IACE,aAAa;EAOf;EANE;MACE,eAAe;MACf,cAAc;MACd,iBAAiB;MACjB,UAAU;IACZ;EAEF;IACE,UAAU;EACZ;;AAIA;IACE,YAAY;EACd;;AACA;IACE,eAAe;IACf,cAAc;EAChB",sourcesContent:[`.warp {\r
  width: 500px;\r
  .top {\r
    height: 36px;\r
    background: #f7f7f7;\r
    color: #555555;\r
    line-height: 5px;\r
    padding: 16px;\r
    margin-bottom: 16px;\r
    font-size: 12px;\r
  }\r
  .item {\r
    display: flex;\r
    .left {\r
      font-size: 12px;\r
      color: #555555;\r
      line-height: 32px;\r
      width: 20%;\r
    }\r
  }\r
  .select {\r
    width: 80%;\r
  }\r
}\r
\r
.popup {\r
  :global(.next-menu-item-inner) {\r
    height: 60px;\r
  }\r
  .workspaceName {\r
    font-size: 12px;\r
    color: #888888;\r
  }\r
}\r
`],sourceRoot:""}]),l.locals={warp:"index__warp__QeSbE",top:"index__top__dMmY3",item:"index__item__KFeZ3",left:"index__left__H07-S",select:"index__select__WAuqz",popup:"index__popup__6bVA1",workspaceName:"index__workspaceName__WP+ov"};const n=l},46812:(k,E,e)=>{"use strict";e.d(E,{Z:()=>n});var i=e(60994),h=e.n(i),d=e(93476),p=e.n(d),l=p()(h());l.push([k.id,`.index__container__5pnJG tr, .index__container__5pnJG td {\r
    padding: 0 !important;\r
    margin: 0 !important;\r
    height: 50px;\r
  }\r
  /* :global(.next-table-cell-wrapper) {\r
    font-size: 14px !important;\r
  } */\r
  .index__container__5pnJG tr > th > .next-table-cell-wrapper {\r
    padding: 0 0 0 16px !important;\r
    /* font-size: 14px !important;\r
    font-weight: bold !important; */\r
    height: 52px !important;\r
    line-height: 52px !important;\r
    background-color: #fafafa;\r
  }\r
  .index__container__5pnJG tr > td > .next-table-cell-wrapper {\r
    padding: 0 0 0 16px !important;\r
  }\r
  .index__container__5pnJG tr td:first-child:hover {\r
    cursor: pointer;\r
  }\r
  .index__container__5pnJG a {\r
    text-decoration: none;\r
  }\r
  .index__container__5pnJG title {\r
    display: flex;\r
    flex-direction: row;\r
    justify-content: flex-start;\r
    align-items: center;\r
    height: $rowHeight;\r
    line-height: 22px;\r
  }\r
  .index__container__5pnJG .index__listIcon__5VGEE {\r
      position: relative;\r
      bottom: 0;\r
      margin-right: 3px;\r
    }\r
  .index__container__5pnJG .index__title__utO2v:hover {\r
    text-decoration: none;\r
    opacity: .8;\r
  }\r
  .index__container__5pnJG .index__displayTitle__LuH1p {\r
    /* display: inline-block; */\r
    color: #0070CC;\r
  }\r
  .index__container__5pnJG .index__apps__Km2AZ {\r
    display: flex;\r
    flex-direction: row;\r
    justify-content: flex-start;\r
    align-items: center;\r
  }\r
  .index__container__5pnJG .index__app__QY2yH {\r
    width: 25px;\r
    height: 25px;\r
    border-radius: 50%;\r
    display: flex;\r
    flex-direction: row;\r
    justify-content: center;\r
    align-items: center;\r
    font-family: PingFangSC-Medium;\r
    color: #FFFFFF;\r
    margin-right: 5px;\r
    cursor: pointer;\r
  }\r
  .index__container__5pnJG .index__homePagination__\\+jylf {\r
    text-align: right;\r
    margin-top: 16px;\r
    margin-right: 16px;\r
    margin-bottom: 30px;\r
  }\r
  .index__container__5pnJG .index__optGroup__PlYxl {\r
    display: flex;\r
    flex-direction: row;\r
    flex-wrap: wrap;\r
    justify-content: flex-start;\r
    align-items: center;\r
  }\r
  .index__container__5pnJG .index__opt__XATIF {\r
    /* font-family: PingFangSC-Regular; */\r
    /* font-size: 14px; */\r
    /* color: #0066CC; */\r
    /* letter-spacing: 0; */\r
    /* cursor: pointer; */\r
    margin-right: 8px;\r
  }\r
  /* &.disable {\r
      color: #BFBFBF;\r
      cursor: not-allowed;\r
    } */\r
  .index__container__5pnJG .index__opt__XATIF.index__warning__OIkiA {\r
      color: #FF4F4C;\r
    }\r
  .index__container__5pnJG .index__opt__XATIF:first-child {\r
    margin-left: 0;\r
  }\r
\r
.index__cloneTitle__1xIZC {\r
  opacity: 0.65;\r
  font-size: 14px;\r
  color: #000000;\r
  letter-spacing: 0;\r
}\r
\r
.index__cloneBtnRow__8k53- {\r
  margin-top: 8px;\r
}\r
\r
.index__cloneBtnRow__8k53- .next-btn {\r
    padding: 0;\r
    width: 48px;\r
    height: 24px;\r
    text-align: center;\r
    line-height: 24px;\r
  }\r
\r
.index__cloneBtnRow__8k53- .next-btn-normal {\r
    margin-left: 8px;\r
  }\r
\r
.index__helpIcon__KbxL0 {\r
  color: #D93026;\r
  cursor: pointer;\r
  margin-right: 4px;\r
}\r
\r
.index__optYellow__ZlCap {\r
  font-family: PingFangSC-Regular;\r
  font-size: 14px;\r
  color: #0066CC;\r
  letter-spacing: 0;\r
  cursor: pointer;\r
}\r
\r
.index__disable__FXeNR {\r
  color: #BFBFBF;\r
  cursor: not-allowed;\r
}\r
\r
.index__ulList__ebeQV {\r
  list-style-type: square;\r
  padding-left: 10px;\r
}\r
\r
.index__ulList__ebeQV .index__baoollnList__Z4HhB {\r
    line-height: 32px;\r
  }\r
\r
.index__deleteTips__wj5Ms {\r
  width: 400px;\r
  line-height: 24px;\r
}\r
\r
/* \u6F14\u7EC3\u8D44\u6E90\u5305\u90E8\u5206 */\r
.index__paidTips__jUmR3 {\r
  font-size: 12px;\r
  color: #333;\r
}\r
\r
.index__packName__aWYnq {\r
  display: inline-block;\r
  padding: 2px 2px;\r
  height: 16px;\r
  width: 44px;\r
  background: #0091FF;\r
  border-radius: 2px;\r
  background-color: #0091FF;\r
  font-family: PingFangSC-Regular;\r
  color: #fff;\r
}\r
\r
.index__action__bBvr7 {\r
  color: #0070CC;\r
  cursor: pointer;\r
}\r
\r
.index__tipsContent__OPmgX {\r
  padding-left: 20px;\r
  list-style: disc;\r
}\r
\r
.index__tipsContent__OPmgX .index__startTipsList__IZGyD {\r
    min-height: 22px;\r
    line-height: 22px;\r
  }\r
\r
.index__warnContent__I1koO {\r
  display: inline-block;\r
  width: 100%;\r
  padding: 15px;\r
  background: #FFF7DB;\r
}`,"",{version:3,sources:["webpack://./pages/Chaos/ExperimentList/Experiments/index.css"],names:[],mappings:"AACE;IACE,qBAAqB;IACrB,oBAAoB;IACpB,YAAY;EACd;EAEA;;KAEG;EAEH;IACE,8BAA8B;IAC9B;mCAC+B;IAC/B,uBAAuB;IACvB,4BAA4B;IAC5B,yBAAyB;EAC3B;EAEA;IACE,8BAA8B;EAChC;EAEA;IACE,eAAe;EACjB;EAEA;IACE,qBAAqB;EACvB;EAEA;IACE,aAAa;IACb,mBAAmB;IACnB,2BAA2B;IAC3B,mBAAmB;IACnB,kBAAkB;IAClB,iBAAiB;EACnB;EAEC;MACG,kBAAkB;MAClB,SAAS;MACT,iBAAiB;IACnB;EAEF;IACE,qBAAqB;IACrB,WAAW;EACb;EAEA;IACE,2BAA2B;IAC3B,cAAc;EAChB;EAEA;IACE,aAAa;IACb,mBAAmB;IACnB,2BAA2B;IAC3B,mBAAmB;EACrB;EAEA;IACE,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,mBAAmB;IACnB,8BAA8B;IAC9B,cAAc;IACd,iBAAiB;IACjB,eAAe;EACjB;EAEA;IACE,iBAAiB;IACjB,gBAAgB;IAChB,kBAAkB;IAClB,mBAAmB;EACrB;EAEA;IACE,aAAa;IACb,mBAAmB;IACnB,eAAe;IACf,2BAA2B;IAC3B,mBAAmB;EACrB;EAEA;IACE,qCAAqC;IACrC,qBAAqB;IACrB,oBAAoB;IACpB,uBAAuB;IACvB,qBAAqB;IACrB,iBAAiB;EAUnB;EARE;;;OAGG;EAEH;MACE,cAAc;IAChB;EAEF;IACE,cAAc;EAChB;;AAGF;EACE,aAAa;EACb,eAAe;EACf,cAAc;EACd,iBAAiB;AACnB;;AAEA;EACE,eAAe;AAajB;;AAXE;IACE,UAAU;IACV,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,iBAAiB;EACnB;;AAEA;IACE,gBAAgB;EAClB;;AAGF;EACE,cAAc;EACd,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,+BAA+B;EAC/B,eAAe;EACf,cAAc;EACd,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,cAAc;EACd,mBAAmB;AACrB;;AAEA;EACE,uBAAuB;EACvB,kBAAkB;AAKpB;;AAHE;IACE,iBAAiB;EACnB;;AAGF;EACE,YAAY;EACZ,iBAAiB;AACnB;;AAEA,YAAY;AACZ;EACE,eAAe;EACf,WAAW;AACb;;AAEA;EACE,qBAAqB;EACrB,gBAAgB;EAChB,YAAY;EACZ,WAAW;EACX,mBAAmB;EACnB,kBAAkB;EAClB,yBAAyB;EACzB,+BAA+B;EAC/B,WAAW;AACb;;AAEA;EACE,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;AAMlB;;AAJE;IACE,gBAAgB;IAChB,iBAAiB;EACnB;;AAGF;EACE,qBAAqB;EACrB,WAAW;EACX,aAAa;EACb,mBAAmB;AACrB",sourcesContent:[`.container {\r
  tr, td {\r
    padding: 0 !important;\r
    margin: 0 !important;\r
    height: 50px;\r
  }\r
\r
  /* :global(.next-table-cell-wrapper) {\r
    font-size: 14px !important;\r
  } */\r
\r
  tr > th > :global(.next-table-cell-wrapper) {\r
    padding: 0 0 0 16px !important;\r
    /* font-size: 14px !important;\r
    font-weight: bold !important; */\r
    height: 52px !important;\r
    line-height: 52px !important;\r
    background-color: #fafafa;\r
  }\r
\r
  tr > td > :global(.next-table-cell-wrapper) {\r
    padding: 0 0 0 16px !important;\r
  }\r
\r
  tr td:first-child:hover {\r
    cursor: pointer;\r
  }\r
\r
  a {\r
    text-decoration: none;\r
  }\r
\r
  title {\r
    display: flex;\r
    flex-direction: row;\r
    justify-content: flex-start;\r
    align-items: center;\r
    height: $rowHeight;\r
    line-height: 22px;\r
  }\r
\r
   .listIcon {\r
      position: relative;\r
      bottom: 0;\r
      margin-right: 3px;\r
    }\r
  \r
  .title:hover {\r
    text-decoration: none;\r
    opacity: .8;\r
  }\r
\r
  .displayTitle {\r
    /* display: inline-block; */\r
    color: #0070CC;\r
  }\r
\r
  .apps {\r
    display: flex;\r
    flex-direction: row;\r
    justify-content: flex-start;\r
    align-items: center;\r
  }\r
\r
  .app {\r
    width: 25px;\r
    height: 25px;\r
    border-radius: 50%;\r
    display: flex;\r
    flex-direction: row;\r
    justify-content: center;\r
    align-items: center;\r
    font-family: PingFangSC-Medium;\r
    color: #FFFFFF;\r
    margin-right: 5px;\r
    cursor: pointer;\r
  }\r
\r
  .homePagination {\r
    text-align: right;\r
    margin-top: 16px;\r
    margin-right: 16px;\r
    margin-bottom: 30px;\r
  }\r
\r
  .optGroup {\r
    display: flex;\r
    flex-direction: row;\r
    flex-wrap: wrap;\r
    justify-content: flex-start;\r
    align-items: center;\r
  }\r
  \r
  .opt {\r
    /* font-family: PingFangSC-Regular; */\r
    /* font-size: 14px; */\r
    /* color: #0066CC; */\r
    /* letter-spacing: 0; */\r
    /* cursor: pointer; */\r
    margin-right: 8px;\r
  \r
    /* &.disable {\r
      color: #BFBFBF;\r
      cursor: not-allowed;\r
    } */\r
  \r
    &.warning {\r
      color: #FF4F4C;\r
    }\r
  }\r
  .opt:first-child {\r
    margin-left: 0;\r
  }\r
}\r
\r
.cloneTitle {\r
  opacity: 0.65;\r
  font-size: 14px;\r
  color: #000000;\r
  letter-spacing: 0;\r
}\r
\r
.cloneBtnRow {\r
  margin-top: 8px;\r
\r
  :global(.next-btn) {\r
    padding: 0;\r
    width: 48px;\r
    height: 24px;\r
    text-align: center;\r
    line-height: 24px;\r
  }\r
\r
  :global(.next-btn-normal) {\r
    margin-left: 8px;\r
  }\r
}\r
\r
.helpIcon {\r
  color: #D93026;\r
  cursor: pointer;\r
  margin-right: 4px;\r
}\r
\r
.optYellow {\r
  font-family: PingFangSC-Regular;\r
  font-size: 14px;\r
  color: #0066CC;\r
  letter-spacing: 0;\r
  cursor: pointer;\r
}\r
\r
.disable {\r
  color: #BFBFBF;\r
  cursor: not-allowed;\r
}\r
\r
.ulList {\r
  list-style-type: square;\r
  padding-left: 10px;\r
  \r
  .baoollnList {\r
    line-height: 32px;\r
  }\r
}\r
\r
.deleteTips {\r
  width: 400px;\r
  line-height: 24px;\r
}\r
\r
/* \u6F14\u7EC3\u8D44\u6E90\u5305\u90E8\u5206 */\r
.paidTips {\r
  font-size: 12px;\r
  color: #333;\r
}\r
\r
.packName {\r
  display: inline-block;\r
  padding: 2px 2px;\r
  height: 16px;\r
  width: 44px;\r
  background: #0091FF;\r
  border-radius: 2px;\r
  background-color: #0091FF;\r
  font-family: PingFangSC-Regular;\r
  color: #fff;\r
}\r
\r
.action {\r
  color: #0070CC;\r
  cursor: pointer;\r
}\r
\r
.tipsContent {\r
  padding-left: 20px;\r
  list-style: disc;\r
\r
  .startTipsList {\r
    min-height: 22px;\r
    line-height: 22px;\r
  }\r
}\r
\r
.warnContent {\r
  display: inline-block;\r
  width: 100%;\r
  padding: 15px;\r
  background: #FFF7DB;\r
}`],sourceRoot:""}]),l.locals={container:"index__container__5pnJG",listIcon:"index__listIcon__5VGEE",title:"index__title__utO2v",displayTitle:"index__displayTitle__LuH1p",apps:"index__apps__Km2AZ",app:"index__app__QY2yH",homePagination:"index__homePagination__+jylf",optGroup:"index__optGroup__PlYxl",opt:"index__opt__XATIF",warning:"index__warning__OIkiA",cloneTitle:"index__cloneTitle__1xIZC",cloneBtnRow:"index__cloneBtnRow__8k53-",helpIcon:"index__helpIcon__KbxL0",optYellow:"index__optYellow__ZlCap",disable:"index__disable__FXeNR",ulList:"index__ulList__ebeQV",baoollnList:"index__baoollnList__Z4HhB",deleteTips:"index__deleteTips__wj5Ms",paidTips:"index__paidTips__jUmR3",packName:"index__packName__aWYnq",action:"index__action__bBvr7",tipsContent:"index__tipsContent__OPmgX",startTipsList:"index__startTipsList__IZGyD",warnContent:"index__warnContent__I1koO"};const n=l},49162:(k,E,e)=>{"use strict";e.d(E,{Z:()=>n});var i=e(60994),h=e.n(i),d=e(93476),p=e.n(d),l=p()(h());l.push([k.id,`.index__DialogExperience__F7tpR {\r
  width: 80%;\r
}\r
  .index__DialogExperience__F7tpR .next-dialog-body {\r
    height: 600px;\r
    overflow-y: scroll;\r
    padding-top: 0px;\r
    width: 100%;\r
  }\r
\r
.index__warp__QFAzX {\r
  width: 100%;\r
  padding: 0px 0px 16px 16px;\r
}\r
\r
.index__warp__QFAzX .index__search__v-tVI {\r
    width: 33.8%;\r
  }\r
\r
.index__warp__QFAzX .index__TemplatesContent__v05S\\+ {\r
    width: 100%;\r
    margin-top: 16px;\r
    display: flex;\r
    justify-content: flex-start;\r
    flex-wrap: wrap; \r
  }\r
\r
.index__warp__QFAzX .index__TemplatesContent__v05S\\+ .index__cardList__FSpmZ {\r
      width: 23.5%;\r
      height: 26.9%; \r
      margin-right: 16px;\r
      margin-bottom: 16px;\r
\r
    }\r
\r
.index__warp__QFAzX .index__TemplatesContent__v05S\\+ .index__cardList__FSpmZ:nth-child(4n) {\r
        margin-right: 0px !important;\r
      }\r
\r
.index__warp__QFAzX .index__Pagination__2lgT6 {\r
    margin-top: 20px;\r
    float: right;\r
  }\r
\r
.index__warp__QFAzX .index__textCenter__P2ZYK {\r
    margin-left: 45%;\r
    margin-top: 20%;\r
  }\r
\r
.index__warp__QFAzX .index__emptyCard__JbFcB {\r
    padding: 16px;\r
    border: 1px solid #dedede;\r
    cursor: pointer;\r
    width: 23.5%;\r
    /* height: 262px; */\r
    margin-right: 16px;\r
    margin-bottom: 16px;\r
    display: flex;\r
    align-items: center;\r
    justify-content: center;\r
\r
  }\r
\r
.index__warp__QFAzX .index__emptyCard__JbFcB:hover {\r
      border: 1px solid #0070CC;\r
      box-shadow: 0 0 4px 0 #0070CC;\r
      border-radius: 3px;\r
    }\r
\r
.index__warp__QFAzX .index__emptyCard__JbFcB .index__iconContent__NxmAv {\r
      text-align: center;\r
      color: #888;\r
    }\r
\r
.index__warp__QFAzX .index__emptyCard__JbFcB .index__addIcon__bksA0 {\r
      font-size: 36px;\r
      margin-bottom: 5px;\r
    }\r
\r
.index__warp__QFAzX .index__emptyCard__JbFcB .index__addIcon__bksA0::before {\r
        width: 36px !important;\r
        height: 36px !important;\r
        font-size: 36px !important;\r
      }`,"",{version:3,sources:["webpack://./pages/Chaos/ExperimentList/ExpertiseCard/index.css"],names:[],mappings:"AAAA;EACE,UAAU;AAOZ;EANE;IACE,aAAa;IACb,kBAAkB;IAClB,gBAAgB;IAChB,WAAW;EACb;;AAGF;EACE,WAAW;EACX,0BAA0B;AAsE5B;;AApEE;IACE,YAAY;EACd;;AAEA;IACE,WAAW;IACX,gBAAgB;IAChB,aAAa;IACb,2BAA2B;IAC3B,eAAe;EAajB;;AAXE;MACE,YAAY;MACZ,aAAa;MACb,kBAAkB;MAClB,mBAAmB;;IAMrB;;AAJE;QACE,4BAA4B;MAC9B;;AAKJ;IACE,gBAAgB;IAChB,YAAY;EACd;;AAEA;IACE,gBAAgB;IAChB,eAAe;EACjB;;AAEA;IACE,aAAa;IACb,yBAAyB;IACzB,eAAe;IACf,YAAY;IACZ,mBAAmB;IACnB,kBAAkB;IAClB,mBAAmB;IACnB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;;EAuBzB;;AArBE;MACE,yBAAyB;MACzB,6BAA6B;MAC7B,kBAAkB;IACpB;;AAEA;MACE,kBAAkB;MAClB,WAAW;IACb;;AAEA;MACE,eAAe;MACf,kBAAkB;IAMpB;;AALE;QACE,sBAAsB;QACtB,uBAAuB;QACvB,0BAA0B;MAC5B",sourcesContent:[`.DialogExperience {\r
  width: 80%;\r
  :global(.next-dialog-body) {\r
    height: 600px;\r
    overflow-y: scroll;\r
    padding-top: 0px;\r
    width: 100%;\r
  }\r
}\r
\r
.warp {\r
  width: 100%;\r
  padding: 0px 0px 16px 16px;\r
\r
  .search {\r
    width: 33.8%;\r
  }\r
\r
  .TemplatesContent {\r
    width: 100%;\r
    margin-top: 16px;\r
    display: flex;\r
    justify-content: flex-start;\r
    flex-wrap: wrap;\r
\r
    .cardList {\r
      width: 23.5%;\r
      height: 26.9%; \r
      margin-right: 16px;\r
      margin-bottom: 16px;\r
\r
      &:nth-child(4n) {\r
        margin-right: 0px !important;\r
      }\r
\r
    } \r
  }\r
\r
  .Pagination {\r
    margin-top: 20px;\r
    float: right;\r
  }\r
\r
  .textCenter {\r
    margin-left: 45%;\r
    margin-top: 20%;\r
  }\r
\r
  .emptyCard {\r
    padding: 16px;\r
    border: 1px solid #dedede;\r
    cursor: pointer;\r
    width: 23.5%;\r
    /* height: 262px; */\r
    margin-right: 16px;\r
    margin-bottom: 16px;\r
    display: flex;\r
    align-items: center;\r
    justify-content: center;\r
\r
    &:hover {\r
      border: 1px solid #0070CC;\r
      box-shadow: 0 0 4px 0 #0070CC;\r
      border-radius: 3px;\r
    }\r
\r
    .iconContent {\r
      text-align: center;\r
      color: #888;\r
    }\r
\r
    .addIcon {\r
      font-size: 36px;\r
      margin-bottom: 5px;\r
      &::before {\r
        width: 36px !important;\r
        height: 36px !important;\r
        font-size: 36px !important;\r
      }\r
    }\r
\r
  }\r
}`],sourceRoot:""}]),l.locals={DialogExperience:"index__DialogExperience__F7tpR",warp:"index__warp__QFAzX",search:"index__search__v-tVI",TemplatesContent:"index__TemplatesContent__v05S+",cardList:"index__cardList__FSpmZ",Pagination:"index__Pagination__2lgT6",textCenter:"index__textCenter__P2ZYK",emptyCard:"index__emptyCard__JbFcB",iconContent:"index__iconContent__NxmAv",addIcon:"index__addIcon__bksA0"};const n=l},82457:(k,E,e)=>{"use strict";e.d(E,{Z:()=>n});var i=e(60994),h=e.n(i),d=e(93476),p=e.n(d),l=p()(h());l.push([k.id,`.index__wrapper__The9Y {\r
  width: 100%;\r
  display: flex;\r
  background: #fff;\r
}\r
\r
.index__icon__Dyzo\\+ {\r
  margin-right: 8px;\r
  position: relative;\r
  bottom: 1px;\r
}\r
\r
.index__statisticDone__CPORB,\r
.index__statisticUnDone__0FPod,\r
.index__statisticTotal__KkmUb {\r
  height: 80px;\r
  border: 1px solid #ebebeb;\r
}\r
\r
/* .doneBox {\r
  width: 240px;\r
} */\r
\r
.index__statisticTotal__KkmUb,\r
.index__doneBox__9mMUs {\r
  display: flex;\r
  flex-direction: row;\r
  justify-content: space-between;\r
}\r
\r
.index__statisticTotal__KkmUb {\r
  flex-grow: 1;\r
  margin-left: 20px;\r
}\r
\r
.index__statisticUnDone__0FPod {\r
  width: 22%;\r
  display: flex;\r
  justify-content: space-between;\r
}\r
\r
.index__statisticDone__CPORB {\r
  width: 60%;\r
  display: flex;\r
  /* flex-direction: row; */\r
  margin-right: 20px;\r
}\r
\r
.index__statisticDone__CPORB .index__doneBox__9mMUs {\r
    width: 30%;\r
  }\r
\r
.index__statisticDone__CPORB .index__separator__6PDZS {\r
    margin-top: 20px;\r
    width: 1px;\r
    height: 40px;\r
    background: #d8d8d8;\r
  }\r
\r
.index__statisticDone__CPORB .index__detailBox__wOtJm {\r
    position: relative;\r
    flex-grow: 1;\r
    display: flex;\r
    flex-direction: row;\r
    justify-content: space-between;\r
  }\r
\r
.index__statisticDone__CPORB .index__topTip__adgqN {\r
    position: absolute;\r
    top: 0;\r
    width: 100%;\r
    height: 18px;\r
    text-align: center;\r
  }\r
\r
.index__statisticDone__CPORB .index__failedBox__HiUdy,\r
  .index__statisticDone__CPORB .index__runningBox__m4W6g,\r
  .index__statisticDone__CPORB .index__successBox__Ryvd9 {\r
    padding-left: 26px;\r
    padding-top: 30px;\r
    font-family: PingFangSC-Regular;\r
    font-size: 16px;\r
    color: #333333;\r
    letter-spacing: -0.23px;\r
  }\r
\r
.index__statisticDone__CPORB .index__successBox__Ryvd9 {\r
    padding-right: 26px;\r
  }\r
\r
.index__statisticDone__CPORB .index__detailFont__0DeNJ {\r
    font-weight: 700;\r
  }\r
\r
.index__title__AnCHZ {\r
  font-family: PingFangSC-Regular;\r
  font-size: 16px;\r
  color: #333333;\r
  position: relative;\r
  margin: auto 0;\r
  padding-left: 16px;\r
}\r
\r
.index__title__AnCHZ:before {\r
  position: relative;\r
  top: -1px;\r
  margin-right: 5px;\r
  content: "";\r
  display: inline-block;\r
  width: 8px;\r
  height: 8px;\r
  border-radius: 4px;\r
}\r
\r
.index__statisticDone__CPORB .index__title__AnCHZ:before {\r
  background: #0070cc;\r
}\r
\r
.index__statisticUnDone__0FPod .index__title__AnCHZ:before {\r
  background: #aaa;\r
}\r
\r
.index__statisticTotal__KkmUb .index__title__AnCHZ:before {\r
  background: #a5c3de;\r
}\r
\r
.index__number__\\+s3d3 {\r
  margin-right: 24px;\r
  font-family: PingFangSC-Semibold;\r
  font-size: 28px;\r
  color: #333;\r
  letter-spacing: 0;\r
  text-align: right;\r
  line-height: 80px;\r
}\r
`,"",{version:3,sources:["webpack://./pages/Chaos/ExperimentList/Statistic/index.css"],names:[],mappings:"AAAA;EACE,WAAW;EACX,aAAa;EACb,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;EAClB,WAAW;AACb;;AAEA;;;EAGE,YAAY;EACZ,yBAAyB;AAC3B;;AAEA;;GAEG;;AAEH;;EAEE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;AAChC;;AAEA;EACE,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,UAAU;EACV,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,UAAU;EACV,aAAa;EACb,yBAAyB;EACzB,kBAAkB;AA+CpB;;AA7CE;IACE,UAAU;EACZ;;AAEA;IACE,gBAAgB;IAChB,UAAU;IACV,YAAY;IACZ,mBAAmB;EACrB;;AAEA;IACE,kBAAkB;IAClB,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,8BAA8B;EAChC;;AAEA;IACE,kBAAkB;IAClB,MAAM;IACN,WAAW;IACX,YAAY;IACZ,kBAAkB;EACpB;;AAEA;;;IAGE,kBAAkB;IAClB,iBAAiB;IACjB,+BAA+B;IAC/B,eAAe;IACf,cAAc;IACd,uBAAuB;EACzB;;AAEA;IACE,mBAAmB;EACrB;;AAEA;IACE,gBAAgB;EAClB;;AAGF;EACE,+BAA+B;EAC/B,eAAe;EACf,cAAc;EACd,kBAAkB;EAClB,cAAc;EACd,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,iBAAiB;EACjB,WAAW;EACX,qBAAqB;EACrB,UAAU;EACV,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,gCAAgC;EAChC,eAAe;EACf,WAAW;EACX,iBAAiB;EACjB,iBAAiB;EACjB,iBAAiB;AACnB",sourcesContent:[`.wrapper {\r
  width: 100%;\r
  display: flex;\r
  background: #fff;\r
}\r
\r
.icon {\r
  margin-right: 8px;\r
  position: relative;\r
  bottom: 1px;\r
}\r
\r
.statisticDone,\r
.statisticUnDone,\r
.statisticTotal {\r
  height: 80px;\r
  border: 1px solid #ebebeb;\r
}\r
\r
/* .doneBox {\r
  width: 240px;\r
} */\r
\r
.statisticTotal,\r
.doneBox {\r
  display: flex;\r
  flex-direction: row;\r
  justify-content: space-between;\r
}\r
\r
.statisticTotal {\r
  flex-grow: 1;\r
  margin-left: 20px;\r
}\r
\r
.statisticUnDone {\r
  width: 22%;\r
  display: flex;\r
  justify-content: space-between;\r
}\r
\r
.statisticDone {\r
  width: 60%;\r
  display: flex;\r
  /* flex-direction: row; */\r
  margin-right: 20px;\r
\r
  .doneBox {\r
    width: 30%;\r
  }\r
\r
  .separator {\r
    margin-top: 20px;\r
    width: 1px;\r
    height: 40px;\r
    background: #d8d8d8;\r
  }\r
\r
  .detailBox {\r
    position: relative;\r
    flex-grow: 1;\r
    display: flex;\r
    flex-direction: row;\r
    justify-content: space-between;\r
  }\r
\r
  .topTip {\r
    position: absolute;\r
    top: 0;\r
    width: 100%;\r
    height: 18px;\r
    text-align: center;\r
  }\r
\r
  .failedBox,\r
  .runningBox,\r
  .successBox {\r
    padding-left: 26px;\r
    padding-top: 30px;\r
    font-family: PingFangSC-Regular;\r
    font-size: 16px;\r
    color: #333333;\r
    letter-spacing: -0.23px;\r
  }\r
\r
  .successBox {\r
    padding-right: 26px;\r
  }\r
\r
  .detailFont {\r
    font-weight: 700;\r
  }\r
}\r
\r
.title {\r
  font-family: PingFangSC-Regular;\r
  font-size: 16px;\r
  color: #333333;\r
  position: relative;\r
  margin: auto 0;\r
  padding-left: 16px;\r
}\r
\r
.title:before {\r
  position: relative;\r
  top: -1px;\r
  margin-right: 5px;\r
  content: "";\r
  display: inline-block;\r
  width: 8px;\r
  height: 8px;\r
  border-radius: 4px;\r
}\r
\r
.statisticDone .title:before {\r
  background: #0070cc;\r
}\r
\r
.statisticUnDone .title:before {\r
  background: #aaa;\r
}\r
\r
.statisticTotal .title:before {\r
  background: #a5c3de;\r
}\r
\r
.number {\r
  margin-right: 24px;\r
  font-family: PingFangSC-Semibold;\r
  font-size: 28px;\r
  color: #333;\r
  letter-spacing: 0;\r
  text-align: right;\r
  line-height: 80px;\r
}\r
`],sourceRoot:""}]),l.locals={wrapper:"index__wrapper__The9Y",icon:"index__icon__Dyzo+",statisticDone:"index__statisticDone__CPORB",statisticUnDone:"index__statisticUnDone__0FPod",statisticTotal:"index__statisticTotal__KkmUb",doneBox:"index__doneBox__9mMUs",separator:"index__separator__6PDZS",detailBox:"index__detailBox__wOtJm",topTip:"index__topTip__adgqN",failedBox:"index__failedBox__HiUdy",runningBox:"index__runningBox__m4W6g",successBox:"index__successBox__Ryvd9",detailFont:"index__detailFont__0DeNJ",title:"index__title__AnCHZ",number:"index__number__+s3d3"};const n=l},36398:(k,E,e)=>{"use strict";e.d(E,{Z:()=>n});var i=e(60994),h=e.n(i),d=e(93476),p=e.n(d),l=p()(h());l.push([k.id,`.index__dingtalkIcon__Wkb3L {\r
  width: 20px;\r
  height: 20px;\r
  margin-right: 8px;\r
}\r
\r
.index__operations__mSWGw {\r
  padding: 24px 0px 14px 0px;\r
  display: flex;\r
  flex-direction: row;\r
  justify-content: space-between;\r
  align-items: center;\r
}\r
\r
.index__operations__mSWGw .index__stopButton__GIXli {\r
    width: 88px;\r
    background-color: #d93026;\r
    margin-left: 4px;\r
    color: #ffffff;\r
  }\r
\r
.index__operations__mSWGw .index__createButton__KR9AA,\r
  .index__operations__mSWGw .index__stopButton__GIXli {\r
    /* font-family: PingFangSC-Regular; */\r
    letter-spacing: -0.2px;\r
    line-height: 32px;\r
  }\r
\r
.index__operations__mSWGw .index__search__gexSl {\r
    width: 260px;\r
    margin-left: 4px;\r
  }\r
\r
.index__operations__mSWGw .index__select__56xJp {\r
    width: 240px;\r
    margin-left: 4px;\r
    margin-right: 6px;\r
  }\r
\r
.index__operations__mSWGw .index__schedulerCb__1Fuym {\r
    font-weight: 400;\r
    height: 32px;\r
    line-height: 32px;\r
    cursor: pointer;\r
    \r
    margin-left: 8px;\r
  }\r
\r
.index__operations__mSWGw .index__schedulerCb__1Fuym > span {\r
      color: #333!important;\r
    }\r
\r
.index__message__kxpNb {\r
  background: #fff;\r
  padding: 4px 8px;\r
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.13);\r
  border-style: solid;\r
  border-color: #ffffff;\r
  border-radius: 2px;\r
}\r
\r
.index__switch__tPTAO {\r
  line-height: 32px;\r
  margin-left: 8px;\r
}\r
\r
.index__switch__tPTAO .next-switch {\r
    position: relative;\r
    top: 3px;\r
    left: 2px;\r
  }\r
\r
.index__getHref__6HW46 {\r
  color: '#0070cc';\r
}\r
\r
.index__getHref__6HW46:hover {\r
    text-decoration: underline;\r
    cursor: pointer;\r
  }\r
/* .createButton {\r
  &:hover > i {\r
    transform: rotate(90deg);\r
  }\r
} */\r
.index__createMenu__IQjeU > li:hover {\r
    background: #bee2ff!important;\r
  }\r
.index__createMenu__IQjeU > li:last-child {\r
    border-top: 1px solid #ddd;\r
    margin: 4px 0;\r
  }`,"",{version:3,sources:["webpack://./pages/Chaos/ExperimentList/index.css"],names:[],mappings:"AAAA;EACE,WAAW;EACX,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,0BAA0B;EAC1B,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,mBAAmB;AAoCrB;;AAlCE;IACE,WAAW;IACX,yBAAyB;IACzB,gBAAgB;IAChB,cAAc;EAChB;;AAEA;;IAEE,qCAAqC;IACrC,sBAAsB;IACtB,iBAAiB;EACnB;;AACA;IACE,YAAY;IACZ,gBAAgB;EAClB;;AAEA;IACE,YAAY;IACZ,gBAAgB;IAChB,iBAAiB;EACnB;;AACA;IACE,gBAAgB;IAChB,YAAY;IACZ,iBAAiB;IACjB,eAAe;;IAEf,gBAAgB;EAIlB;;AAHE;MACE,qBAAqB;IACvB;;AAIJ;EACE,gBAAgB;EAChB,gBAAgB;EAChB,+CAA+C;EAC/C,mBAAmB;EACnB,qBAAqB;EACrB,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;AAMlB;;AALE;IACE,kBAAkB;IAClB,QAAQ;IACR,SAAS;EACX;;AAGF;EACE,gBAAgB;AAMlB;;AAJE;IACE,0BAA0B;IAC1B,eAAe;EACjB;AAEF;;;;GAIG;AAED;IACE,6BAA6B;EAC/B;AACA;IACE,0BAA0B;IAC1B,aAAa;EACf",sourcesContent:[`.dingtalkIcon {\r
  width: 20px;\r
  height: 20px;\r
  margin-right: 8px;\r
}\r
\r
.operations {\r
  padding: 24px 0px 14px 0px;\r
  display: flex;\r
  flex-direction: row;\r
  justify-content: space-between;\r
  align-items: center;\r
\r
  .stopButton {\r
    width: 88px;\r
    background-color: #d93026;\r
    margin-left: 4px;\r
    color: #ffffff;\r
  }\r
\r
  .createButton,\r
  .stopButton {\r
    /* font-family: PingFangSC-Regular; */\r
    letter-spacing: -0.2px;\r
    line-height: 32px;\r
  }\r
  .search {\r
    width: 260px;\r
    margin-left: 4px;\r
  }\r
\r
  .select {\r
    width: 240px;\r
    margin-left: 4px;\r
    margin-right: 6px;\r
  }\r
  .schedulerCb {\r
    font-weight: 400;\r
    height: 32px;\r
    line-height: 32px;\r
    cursor: pointer;\r
    \r
    margin-left: 8px;\r
    > span {\r
      color: #333!important;\r
    }\r
  }\r
}\r
\r
.message {\r
  background: #fff;\r
  padding: 4px 8px;\r
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.13);\r
  border-style: solid;\r
  border-color: #ffffff;\r
  border-radius: 2px;\r
}\r
\r
.switch {\r
  line-height: 32px;\r
  margin-left: 8px;\r
  :global(.next-switch) {\r
    position: relative;\r
    top: 3px;\r
    left: 2px;\r
  }\r
}\r
\r
.getHref {\r
  color: '#0070cc';\r
\r
  &:hover {\r
    text-decoration: underline;\r
    cursor: pointer;\r
  }\r
}\r
/* .createButton {\r
  &:hover > i {\r
    transform: rotate(90deg);\r
  }\r
} */\r
.createMenu {\r
  > li:hover {\r
    background: #bee2ff!important;\r
  }\r
  > li:last-child {\r
    border-top: 1px solid #ddd;\r
    margin: 4px 0;\r
  }\r
}`],sourceRoot:""}]),l.locals={dingtalkIcon:"index__dingtalkIcon__Wkb3L",operations:"index__operations__mSWGw",stopButton:"index__stopButton__GIXli",createButton:"index__createButton__KR9AA",search:"index__search__gexSl",select:"index__select__56xJp",schedulerCb:"index__schedulerCb__1Fuym",message:"index__message__kxpNb",switch:"index__switch__tPTAO",getHref:"index__getHref__6HW46",createMenu:"index__createMenu__IQjeU"};const n=l},29522:(k,E,e)=>{"use strict";e.r(E),e.d(E,{default:()=>n});var i=e(1892),h=e.n(i),d=e(93705),p={};p.insert="head",p.singleton=!1;var l=h()(d.Z,p);const n=d.Z.locals||{}},53256:(k,E,e)=>{"use strict";e.r(E),e.d(E,{default:()=>n});var i=e(1892),h=e.n(i),d=e(46812),p={};p.insert="head",p.singleton=!1;var l=h()(d.Z,p);const n=d.Z.locals||{}},88972:(k,E,e)=>{"use strict";e.r(E),e.d(E,{default:()=>n});var i=e(1892),h=e.n(i),d=e(49162),p={};p.insert="head",p.singleton=!1;var l=h()(d.Z,p);const n=d.Z.locals||{}},65328:(k,E,e)=>{"use strict";e.r(E),e.d(E,{default:()=>n});var i=e(1892),h=e.n(i),d=e(82457),p={};p.insert="head",p.singleton=!1;var l=h()(d.Z,p);const n=d.Z.locals||{}},18390:(k,E,e)=>{"use strict";e.r(E),e.d(E,{default:()=>n});var i=e(1892),h=e.n(i),d=e(36398),p={};p.insert="head",p.singleton=!1;var l=h()(d.Z,p);const n=d.Z.locals||{}}}]);

//# sourceMappingURL=344.bundle.js.map