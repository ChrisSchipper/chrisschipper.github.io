(function(e){function t(t){for(var a,s,r=t[0],c=t[1],l=t[2],u=0,v=[];u<r.length;u++)s=r[u],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&v.push(i[s][0]),i[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);d&&d(t);while(v.length)v.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,r=1;r<n.length;r++){var c=n[r];0!==i[c]&&(a=!1)}a&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},i={app:0},o=[];function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=t,r=r.slice();for(var l=0;l<r.length;l++)t(r[l]);var d=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"0c74":function(e,t,n){},"173f":function(e,t,n){},"27d0":function(e,t,n){},"5c0b":function(e,t,n){"use strict";var a=n("7694"),i=n.n(a);i.a},7694:function(e,t,n){},"8f33":function(e,t,n){e.exports=n.p+"img/profile-pic.0751b2b9.png"},"93ac":function(e,t,n){"use strict";var a=n("27d0"),i=n.n(a);i.a},a889:function(e,t,n){"use strict";var a=n("b6cb"),i=n.n(a);i.a},b6cb:function(e,t,n){},ba25:function(e,t,n){"use strict";var a=n("173f"),i=n.n(a);i.a},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-main",[n("v-container",[n("v-row",{attrs:{id:"personal-overview"}},[n("v-col",{attrs:{md:"7"}},[n("div",{staticClass:"title-line"})]),n("v-col",{staticClass:"subtitle-col-top",attrs:{"align-self":"end",cols:"12",md:"4"}},[n("p",{staticClass:"title-text"},[e._v("Christopher Schipper")])])],1),n("v-row",[n("v-col",{staticClass:"subtitle-col-bottom",attrs:{"offset-md":"7",cols:"12",md:"4"}},[n("p",{staticClass:"subtitle-text"},[e._v("Software Developer")])])],1)],1),n("Index")],1),n("v-bottom-navigation",{attrs:{value:e.activeBtn,color:"#4CBDD5",fixed:""}},[n("v-btn",{on:{click:function(t){return e.goToLink("#personal-overview")}}},[n("span",[e._v("Overview")]),n("v-icon",[e._v("mdi-account")])],1),n("v-btn",{on:{click:function(t){return e.goToLink("#personal-experience-section")}}},[n("span",[e._v("Experience")]),n("v-icon",[e._v("mdi-code-braces")])],1),n("v-btn",{attrs:{href:"mailto:cschipper08@gmail.com"}},[n("span",[e._v("Email")]),n("v-icon",[e._v("mdi-email")])],1),n("v-btn",{attrs:{href:"https://www.linkedin.com/in/christopher-schipper-44666796/",target:"_blank",rel:"nofollow noopener noreferrer"}},[n("span",[e._v("LinkedIn")]),n("v-icon",[e._v("mdi-linkedin")])],1),n("v-btn",{attrs:{href:"https://github.com/ChrisSchipper/personal-website",target:"_blank",rel:"nofollow noopener noreferrer"}},[n("span",[e._v("GitHub")]),n("v-icon",[e._v("mdi-github")])],1)],1),n("div",{staticClass:"filler"})],1)},o=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("bio"),n("v-btn",{staticClass:"contact-btn",attrs:{outlined:"",color:"#4CBDD5",large:"",href:"mailto:cschipper08@gmail.com"}},[e._v("Get in Touch")]),n("top-three",{staticClass:"section-divider"}),n("experience",{staticClass:"section-divider",attrs:{id:"personal-experience-section"}})],1)},r=[],c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-main",[a("v-row",[a("v-col",{staticClass:"profile-picture",attrs:{cols:"12","offset-md":"2",md:"2",sm:"12"}},[a("v-avatar",{attrs:{size:"250"}},[a("img",{attrs:{src:n("8f33")}})])],1),a("v-col",{staticClass:"bio-card",attrs:{md:"6"}},[a("v-card",{attrs:{color:"#1B998B",shaped:""}},[a("v-card-text",[a("v-card",{attrs:{color:"#17161E",shaped:""}},[a("v-card-text",[a("p",{staticClass:"section-text"},[e._v("I am a full stack developer, but have found myself primarily working on the front-end as of late. I have experience with distributed architectures/cloud-based software systems as well as API and SPA development.")]),a("p",{staticClass:"section-text"},[e._v("Additionally, I have experience building and maintaining CI/CD pipelines via Azure DevOps, and hosting and maintaining applications via IIS.")])])],1)],1)],1),a("div",{staticClass:"fading-effect"})],1)],1)],1)},l=[],d=a["a"].extend({name:"Bio",data:function(){return{}}}),u=d,v=(n("93ac"),n("2877")),p=n("6544"),f=n.n(p),m=n("8212"),h=n("b0af"),b=n("99d9"),C=n("62ad"),g=n("f6c4"),y=n("0fd9"),_=Object(v["a"])(u,c,l,!1,null,"adc86860",null),w=_.exports;f()(_,{VAvatar:m["a"],VCard:h["a"],VCardText:b["b"],VCol:C["a"],VMain:g["a"],VRow:y["a"]});var x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-main",[n("v-row",[n("v-col",{staticClass:"about-section",attrs:{cols:"12",md:"4",sm:"12"}},[n("div",{staticClass:"icon-center"},[n("v-list-item-icon",[n("v-icon",{staticClass:"section-icon"},[e._v("mdi-school")])],1),n("div",{staticClass:"divider"}),n("div",{staticClass:"section-text-block"},[n("div",{staticClass:"section-text"},[e._v("Miami University - Oxford, OH")]),n("div",{staticClass:"section-text"},[e._v("College of Engineering and Computing")]),n("div",{staticClass:"section-text"},[e._v("Bachelor of Science in Computer Science | May 2017")])])],1)]),n("v-col",{staticClass:"about-section",attrs:{cols:"12",md:"4",sm:"12"}},[n("div",{staticClass:"icon-center"},[n("v-list-item-icon",[n("v-icon",{staticClass:"section-icon"},[e._v("mdi-briefcase")])],1),n("div",{staticClass:"divider"}),n("div",{staticClass:"section-text-block"},[n("div",{staticClass:"section-text"},[e._v("Projetech, Inc. - Cincinnati OH")]),n("div",{staticClass:"section-text"},[e._v("Software Developer")])])],1)]),n("v-col",{staticClass:"about-section",attrs:{cols:"12",md:"4",sm:"12"}},[n("div",{staticClass:"icon-center"},[n("v-list-item-icon",[n("v-icon",{staticClass:"section-icon"},[e._v("mdi-code-tags")])],1),n("div",{staticClass:"divider"}),n("div",{staticClass:"section-text-block"},[n("div",{staticClass:"section-text"},[e._v("Vue.JS | TypeScript | SASS | Jest")]),n("div",{staticClass:"section-text"},[e._v(".Net Core | XUnit")]),n("div",{staticClass:"section-text"},[e._v("SQL Server | MongoDB")])])],1)])],1)],1)},S=[],O=a["a"].extend({name:"TopThree",data:function(){return{}}}),k=O,V=(n("ba25"),n("132d")),j=n("34c3"),I=Object(v["a"])(k,x,S,!1,null,"4dcc3751",null),D=I.exports;f()(I,{VCol:C["a"],VIcon:V["a"],VListItemIcon:j["a"],VMain:g["a"],VRow:y["a"]});var E=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-main",[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("p",{staticClass:"experience-title"},[e._v("A bit of what I've accomplished...")])])],1),n("v-row",[n("v-col",{attrs:{cols:"12","offset-md":"1",md:"10"}},[n("v-timeline",{attrs:{dense:e.smallScreen}},e._l(e.experiences,(function(t){return n("v-timeline-item",{key:t.id,scopedSlots:e._u([{key:"icon",fn:function(){},proxy:!0}],null,!0)},[n("span",{attrs:{slot:"opposite"},slot:"opposite"},[e._v(e._s(t.date))]),n("v-card",{staticClass:"timeline-card",attrs:{color:"#17161E",outlined:"",id:"timeline-"+t.id}},[n("v-card-title",{staticClass:"timeline-card-title"},[e._v(e._s(t.company))]),n("v-card-subtitle",[e._v(e._s(t.title)+" "),e.smallScreen?n("div",[e._v(e._s(t.date)+" ")]):e._e()]),n("v-card-text",e._l(t.notes,(function(t,a){return n("p",{key:a},[e._v(e._s(t))])})),0)],1)],1)})),1)],1)],1)],1)},M=[],T=(n("4160"),n("159b"),n("bee2")),P=n("262e"),A=n("2caf"),B=n("d4ec"),L=function e(){Object(B["a"])(this,e)},J=function(e){Object(P["a"])(n,e);var t=Object(A["a"])(n);function n(e){var a;Object(B["a"])(this,n),a=t.call(this),a._element=e;var i={root:null,rootMargin:"0px",threshold:[.5,.6,.7]};return a._observer=new IntersectionObserver(a.handleIntersect,i),a}return Object(T["a"])(n,[{key:"Observe",value:function(){this._observer.observe(this._element)}},{key:"Disconnect",value:function(){this._observer.disconnect()}},{key:"handleIntersect",value:function(e,t){e.forEach((function(e){null!==e.target&&void 0!==e.target?e.intersectionRatio>=.6&&(e.target.classList.add("reveal-element-popup"),t.disconnect()):t.disconnect()}))}}]),n}(L),$=function e(){Object(B["a"])(this,e)},N=function(e){Object(P["a"])(n,e);var t=Object(A["a"])(n);function n(){return Object(B["a"])(this,n),t.apply(this,arguments)}return Object(T["a"])(n,[{key:"Create",value:function(e){return new J(e)}}]),n}($),R=a["a"].extend({name:"Experience",data:function(){return{experiences:[{id:"projetech",company:"Projetech Inc.",title:"Software Developer",date:"2017 - Present",notes:["Developing full stack business software in Vue.JS, C#/.Net Core, Node.JS and Python/Jython with a focus on front-end development.","Lead the front-end development on one of our primary software development projects","Design and maintain many of the continuous deployment/integration pipelines and processes used across six separate projects.","Led the agile/scrum processes for many of our software development projects.","Assisted in running the Software Developer co-op program and provided mentorship/leadership for co-ops throughout their term"]},{id:"miami2",company:"Miami University",title:"Research Assistant",date:"2016 - 2017",notes:["Developed a sound localization application for the Microsoft HoloLens using Unity and C# to assist users that suffer from hearing disabilities.","More about this can be read in my published paper:","https://dl.acm.org/doi/10.1145/3132525.3134786"]},{id:"marathon",company:"Marathon Petroleum Corporation",title:"Pipeline Applications Intern",date:"Summer 2016",notes:["Developed a full stack application using C#/.Net that gathered data and generated basic reports.","Made enhancements to an existing Java application to enhance its usability and modernize its apperance.","Managed an intern and two summer helpers in a small project involving a third-party application.","Designed user tests for a third-party application and lead testing meetings with business users to determine whether the software was ready for production."]},{id:"miami1",company:"Miami University",title:"Teaching Assistant",date:"2015-2017",notes:["CSE 174 - Fundamentals of Programming and Problem Solving","CSE 274 - Data Abstraction and Data Structures","CSE 283 - Data Communications and Networks"]},{id:"smuckers",company:"The J.M. Smucker Company",title:"IS Intern",date:"Summer 2015",notes:["Created pages within the transportation department's web application using Oracle's APEX software.","Handled low priority tasks in the change management system including SQL changes and system fixes."]}],observers:[]}},computed:{smallScreen:function(){return this.$vuetify.breakpoint.smAndDown}},mounted:function(){var e=this,t=new N;this.experiences.forEach((function(n){var a="timeline-".concat(n.id),i=document.getElementById(a),o=t.Create(i);o.Observe(),e.observers.push(o)}))},beforeDestroy:function(){this.observers.forEach((function(e){e.Disconnect()}))}}),H=R,U=(n("a889"),n("8414")),z=n("1e06"),G=Object(v["a"])(H,E,M,!1,null,"74a6da53",null),Q=G.exports;f()(G,{VCard:h["a"],VCardSubtitle:b["a"],VCardText:b["b"],VCardTitle:b["c"],VCol:C["a"],VMain:g["a"],VRow:y["a"],VTimeline:U["a"],VTimelineItem:z["a"]});var X=a["a"].extend({name:"Index",components:{Bio:w,TopThree:D,Experience:Q},data:function(){return{}}}),F=X,q=(n("ced8"),n("8336")),K=n("a523"),W=Object(v["a"])(F,s,r,!1,null,"ba5d6406",null),Y=W.exports;f()(W,{VBtn:q["a"],VContainer:K["a"]});var Z=a["a"].extend({name:"App",components:{Index:Y},data:function(){return{activeBtn:0}},methods:{goToLink:function(e){try{this.$vuetify.goTo(e,{})}catch(t){}}}}),ee=Z,te=(n("5c0b"),n("7496")),ne=n("b81c"),ae=Object(v["a"])(ee,i,o,!1,null,null,null),ie=ae.exports;f()(ae,{VApp:te["a"],VBottomNavigation:ne["a"],VBtn:q["a"],VCol:C["a"],VContainer:K["a"],VIcon:V["a"],VMain:g["a"],VRow:y["a"]});var oe=n("8c4f");a["a"].use(oe["a"]);var se=[],re=new oe["a"]({routes:se}),ce=re,le=n("2f62");a["a"].use(le["a"]);var de=new le["a"].Store({state:{},mutations:{},actions:{},modules:{}}),ue=n("f309");a["a"].use(ue["a"]);var ve=new ue["a"]({theme:{dark:!0,themes:{dark:{primary:"#17161E",secondary:"#1B998B",accent:"#7A6171"}}}});a["a"].config.productionTip=!1,new a["a"]({router:ce,store:de,vuetify:ve,render:function(e){return e(ie)}}).$mount("#app")},ced8:function(e,t,n){"use strict";var a=n("0c74"),i=n.n(a);i.a}});
//# sourceMappingURL=app.2ba2741a.js.map