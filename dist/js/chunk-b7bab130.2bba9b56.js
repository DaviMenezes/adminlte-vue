(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b7bab130"],{"7db0":function(e,a,n){"use strict";var i=n("23e7"),t=n("b727").find,o=n("44d2"),c=n("ae40"),l="find",r=!0,m=c(l);l in[]&&Array(1)[l]((function(){r=!1})),i({target:"Array",proto:!0,forced:r||!m},{find:function(e){return t(this,e,arguments.length>1?arguments[1]:void 0)}}),o(l)},"94cb":function(e,a,n){"use strict";n.r(a);var i=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("aside",{staticClass:"main-sidebar sidebar-dark-primary elevation-4"},[n("router-link",{staticClass:"brand-link",attrs:{to:e.getRoute("dashboard1")}},[n("img",{staticClass:"brand-image img-circle elevation-3",staticStyle:{opacity:".8"},attrs:{src:"/dist/img/dvi_logo.png",alt:"Dvi Logo"}}),n("span",{staticClass:"brand-text font-weight-light"},[e._v("AdminLTE 3")])]),n("div",{staticClass:"sidebar"},[n("div",{staticClass:"user-panel mt-3 pb-3 mb-3 d-flex"},[n("router-link",{staticClass:"d-flex align-items-center",attrs:{to:e.getRoute("profile")}},[n("div",{staticClass:"image"},[n("img",{staticClass:"img-circle elevation-2",attrs:{src:"/dist/img/user2-160x160.jpg",alt:"User Image"}})]),n("div",{staticClass:"info"},[n("span",{staticClass:"d-block"},[e._v("Alexander Pierce")])])])],1),n("nav",{staticClass:"mt-2"},[n("ul",{staticClass:"nav nav-pills nav-sidebar flex-column",attrs:{"data-widget":"treeview",role:"menu","data-accordion":"false"}},e._l(e.items(),(function(a,i){return n("li",{key:i,class:e.itemClass(a)},["header"===a.type?n("span",[e._v(e._s(a.label))]):a.items?n("a",{class:e.linkClass(a),attrs:{href:"#"}},[n("i",{class:a.icon}),n("p",[e._v(" "+e._s(a.label)+" "),n("i",{staticClass:"right fas fa-angle-left"})])]):e._e(),"header"===a.type||a.items?e._e():n("a-router-link",{attrs:{page:a.page||e.$route.params.page+"#",label:a.label,icon:a.icon,info_label:a.info?a.info.label:void 0,info_direction:a.info?a.info.direction:void 0,info_type:a.info?a.info.type:void 0}}),"header"!==a.type&&a.items?n("ul",{staticClass:"nav nav-treeview"},e._l(a.items,(function(a,t){return n("li",{key:i+"-"+t,staticClass:"nav-item"},[n("a-router-link",{attrs:{page:a.page?a.page:e.$route.params.page+"#",label:a.label,icon:a.icon,has_items:!!a.items}}),a.items?n("ul",{staticClass:"nav nav-treeview"},e._l(a.items,(function(a,i){return n("li",{key:t+"-"+i,staticClass:"nav-item"},[n("a-router-link",{attrs:{page:a.page||e.$route.params.page+"#",label:a.label,icon:a.icon,has_items:a.items&&a.items.length>0}})],1)})),0):e._e()],1)})),0):e._e()],1)})),0)])])],1)},t=[],o=(n("7db0"),function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("router-link",{class:e.isActive,attrs:{to:e.getRoute()}},[n("i",{class:"nav-icon "+e.icon}),n("p",[e._v(" "+e._s(e.label_local)+" "),e._t("info",[n("span",{class:e.infoClasses},[e._v(e._s(e.info_label))]),e.has_items?n("i",{staticClass:"right fas fa-angle-left"}):e._e()])],2)])}),c=[],l=(n("c975"),{name:"ARouterLink",data:function(){return{label_local:this.label}},props:{page:{type:String},label:{},has_items:{},info_label:{},info_direction:{type:String,default:"left",validator:function(e){return-1!==["left","right"].indexOf(e)}},icon:String,info_type:{type:String,default:"primary",validator:function(e){return-1!==["danger","dark","info","light","pill","primary","secondary","success","warning"].indexOf(e)}}},methods:{getRoute:function(){return"/layout/"+(this.$route.params.layout||"one")+"/"+this.page}},computed:{isActive:function(){return"nav-link"+(this.$route.params.page===this.page?" active":"")},infoClasses:function(){return"badge badge-"+this.info_type+" "+this.info_direction}}}),r=l,m=n("2877"),p=Object(m["a"])(r,o,c,!1,null,null,null),s=p.exports,f=n("879d"),u=n("33ca"),b=n("4a42"),v=n("7305"),d=n("75b6"),g=n("ae74"),y=n("346c"),h=n("0394"),_=n("1e7a"),C=n("8ff6"),k=n("0546"),L=n("c61b"),x=n("70c1"),w=n("fcd5"),E=n("8434"),S=n("fb6f"),j=n("a323"),A=n("b660"),P=n("4eb9"),R=n("95ac"),I=n("7957"),$=n("cd8f"),T=n("3c60"),D=n("8638"),M=n("eb7d"),F=n("27c0"),N=n("db52"),O=n("321d"),U=n("12c1"),G=n("b624"),B=n("d794"),J=n("fbcb"),V=n("6a8c"),W=n("9c13"),X=n("e05b"),q=n("d442"),z=n("7352"),H=n("c161"),K=n("b4f4"),Q=n("7a9b"),Y=n("afe7"),Z=n("9e17"),ee=n("7729"),ae=n("7cf9"),ne=n("307d"),ie=n("59fa"),te=n("b209"),oe=n("87be"),ce=n("5ca8"),le=n("1d59"),re=n("6472"),me=n("7c64"),pe=n("c1bc"),se=n("111e"),fe={components:{ARouterLink:s},data:function(){return{}},methods:{items:function(){return[{type:"menuitem",label:"Dashboard",icon:"nav-icon fas fa-tachometer-alt",items:[{type:"menuitem",page:"dashboard1",label:"Dashboard v1",icon:"far fa-circle nav-icon",component:f["a"]},{type:"menuitem",label:"Dashboard v2",page:"dashboard2",icon:"far fa-circle nav-icon",component:u["a"]},{type:"menuitem",label:"Dashboard v3",page:"dashboard3",icon:"far fa-circle nav-icon",component:b["a"]}]},{type:"menuitem",label:"Widgets",page:"widgets",icon:"fas fa-th",component:v["a"],info:{label:"New",direction:"right",type:"danger"}},{type:"menuitem",icon:"nav-icon fas fa-copy",label:"Layout Options",info:{label:6,direction:"right",type:"info"},items:[{type:"menuitem",label:"Top Navigation",icon:"far fa-circle nav-icon",page:"top-navigation",component:d["a"]},{type:"menuitem",label:"Top Navigation + Sidebar",icon:"far fa-circle nav-icon",page:"top-navigation-sidebar",component:g["a"]},{type:"menuitem",label:"Boxed",icon:"far fa-circle nav-icon",page:"boxed",component:y["a"]},{type:"menuitem",label:"Fixed Sidebar",icon:"far fa-circle nav-icon",page:"fixed-sidebar",component:h["a"]},{type:"menuitem",label:"Fixed Navbar",icon:"far fa-circle nav-icon",page:"fixed-navbar",component:_["a"]},{type:"menuitem",label:"Fixed Footer",icon:"far fa-circle nav-icon",page:"fixed-footer",component:C["a"]},{type:"menuitem",label:"Collapsed Sidebar",icon:"far fa-circle nav-icon",page:"layout-collapsed-sidebar",component:k["a"]}]},{type:"menuitem",label:"Charts",icon:"nav-icon fas fa-chart-pie",items:[{type:"menuitem",label:"ChartJS",icon:"far fa-circle nav-icon",page:"chart-js",component:L["a"]},{type:"menuitem",label:"Flot",icon:"far fa-circle nav-icon",page:"chart-flot",component:x["a"]},{type:"menuitem",label:"Inline",icon:"far fa-circle nav-icon",page:"chart-inline",component:w["a"]}]},{label:"UI Elements",icon:"nav-icon fas fa-tree",items:[{type:"menuitem",label:"General",icon:"far fa-circle nav-icon",page:"ui-element-general",component:E["a"]},{type:"menuitem",label:"Icons",icon:"far fa-circle nav-icon",page:"ui-element-icons",component:S["a"]},{type:"menuitem",label:"Buttons",icon:"far fa-circle nav-icon",page:"ui-element-buttons",component:j["a"]},{type:"menuitem",label:"Sliders",icon:"far fa-circle nav-icon",page:"ui-element-sliders",component:A["a"]},{type:"menuitem",label:"Modal & Alerts",icon:"far fa-circle nav-icon",page:"ui-element-modal-alert",component:P["a"]},{type:"menuitem",label:"Navbar & Tabs",icon:"far fa-circle nav-icon",page:"ui-element-navbar-tabs",component:R["a"]},{type:"menuitem",label:"Timeline",icon:"far fa-circle nav-icon",page:"ui-element-timeline",component:I["a"]},{type:"menuitem",label:"Ribbons",icon:"far fa-circle nav-icon",page:"ui-element-ribbons",component:$["a"]}]},{type:"menuitem",label:"Forms",icon:"nav-icon fas fa-edit",items:[{type:"menuitem",label:"General Elements",icon:"far fa-circle nav-icon",page:"form-general",component:T["a"]},{type:"menuitem",label:"Advanced Elements",icon:"far fa-circle nav-icon",page:"form-advanced",component:D["a"]},{type:"menuitem",label:"Editors",icon:"far fa-circle nav-icon",page:"form-editors",component:M["a"]},{type:"menuitem",label:"Validation",icon:"far fa-circle nav-icon",page:"form-validation",component:F["a"]}]},{type:"menuitem",label:"Tables",icon:"nav-icon fas fa-table",items:[{type:"menuitem",label:"Simple Tables",page:"table-simple",component:N["a"]},{type:"menuitem",label:"DataTables",page:"table-datatable",component:se["a"]},{type:"menuitem",label:"jsGrid",page:"js-grid",component:O["a"]}]},{type:"header",label:"EXAMPLES"},{type:"menuitem",label:"Calendar",icon:"nav-icon far fa-calendar-alt",info:{label:2,type:"info",direction:"right"},component:U["a"]},{type:"menuitem",page:"gallery",label:"Gallery",icon:"nav-icon far fa-image",component:G["a"]},{type:"menuitem",label:"Mailbox",icon:"nav-icon far fa-envelope",items:[{type:"menuitem",label:"Inbox",page:"mail-inbox",icon:"far fa-circle nav-icon",component:B["a"]},{type:"menuitem",label:"Compose",page:"mail-compose",icon:"far fa-circle nav-icon",component:J["a"]},{type:"menuitem",label:"Read",page:"mail-read",icon:"far fa-circle nav-icon",component:V["a"]}]},{type:"menuitem",label:"Pages",icon:"nav-icon fas fa-book",items:[{type:"menuitem",label:"Invoice",page:"invoice",icon:"far fa-circle nav-icon",component:W["a"]},{type:"menuitem",label:"Profile",page:"profile",icon:"far fa-circle nav-icon",component:X["a"]},{type:"menuitem",label:"Ecommerce",page:"ecommerce",icon:"far fa-circle nav-icon",component:q["a"]},{type:"menuitem",label:"Projects",page:"projects",icon:"far fa-circle nav-icon",component:z["a"]},{type:"menuitem",label:"Project Add",page:"project-add",icon:"far fa-circle nav-icon",component:H["a"]},{type:"menuitem",label:"Project Edit",page:"project-edit",icon:"far fa-circle nav-icon",component:K["a"]},{type:"menuitem",label:"Project Detail",page:"project-detail",icon:"far fa-circle nav-icon",component:Q["a"]},{type:"menuitem",label:"Contacts",page:"contact",icon:"far fa-circle nav-icon",component:Y["a"]}]},{type:"menuitem",label:"Extras",icon:"nav-icon far fa-plus-square",items:[{type:"menuitem",page:"login",label:"Login",icon:"far fa-circle nav-icon",component:Z["a"]},{type:"menuitem",page:"register",label:"Register",icon:"far fa-circle nav-icon",component:ee["a"]},{type:"menuitem",page:"forgot-password",label:"Forgot Password",icon:"far fa-circle nav-icon",component:ae["a"]},{type:"menuitem",page:"recover-password",label:"Recover Password",icon:"far fa-circle nav-icon",component:ne["a"]},{type:"menuitem",page:"lockscreen",label:"Lockscreen",icon:"far fa-circle nav-icon",component:ie["a"]},{type:"menuitem",page:"legacy-user-menu",label:"Legacy User Menu",icon:"far fa-circle nav-icon",component:te["a"]},{type:"menuitem",page:"language-menu",label:"Language Maneu",icon:"far fa-circle nav-icon",component:oe["a"]},{type:"menuitem",page:"error-404",label:"Error 404",icon:"far fa-circle nav-icon",component:ce["a"]},{type:"menuitem",page:"error-500",label:"Error 500",icon:"far fa-circle nav-icon",component:le["a"]},{type:"menuitem",page:"pace",label:"Pace",icon:"far fa-circle nav-icon",component:re["a"]},{type:"menuitem",page:"black",label:"Blank Page",icon:"far fa-circle nav-icon",component:me["a"]},{type:"menuitem",page:"starter",label:"Starter Page",icon:"far fa-circle nav-icon",component:pe["a"]}]},{type:"header",label:"MISCELLANEOUS"},{type:"menuitem",label:"Documentation",icon:"nav-icon fas fa-file"},{type:"header",label:"MULTI LEVEL EXAMPLE"},{type:"menuitem",label:"Level 1",icon:"far fa-circle nav-icon"},{type:"menuitem",label:"Level 1",icon:"far fa-circle nav-icon",items:[{type:"menuitem",label:"Level 2.1",icon:"fas fa-circle nav-icon"},{type:"menuitem",label:"Level 2.2",icon:"fas fa-circle nav-icon",items:[{type:"menuitem",label:"Level 3.1",icon:"far fa-dot-circle nav-icon"},{type:"menuitem",label:"Level 3.2",icon:"far fa-dot-circle nav-icon"},{type:"menuitem",label:"Level 3.3",icon:"far fa-dot-circle nav-icon"}]},{type:"menuitem",label:"Level 2.3",icon:"fas fa-circle nav-icon"}]},{type:"menuitem",label:"Level 1",icon:"far fa-circle nav-icon"},{type:"head",label:"Labels"},{type:"menuitem",label:"Important",icon:"nav-icon far fa-circle text-danger"},{type:"menuitem",label:"Warning",icon:"nav-icon far fa-circle text-warning"},{type:"menuitem",label:"Informational",icon:"nav-icon far fa-circle text-info"}]},getRoute:function(e){return"/layout/"+(this.$route.params.layout||"one")+"/"+e},itemClass:function(e){var a,n=this;if("header"===e.type)return"nav-header";var i="nav-item";if((null===(a=e.items)||void 0===a?void 0:a.length)>0){i+=" has-treeview";var t=e.items.find((function(e){return e.page===n.$route.params.page}));t&&(i+=" menu-open")}return i},linkClass:function(e){var a,n=this;return(null===(a=e.items)||void 0===a?void 0:a.find((function(e){return e.page===n.$route.params.page})))?"nav-link active":"nav-link"}}},ue=fe,be=Object(m["a"])(ue,i,t,!1,null,"33cc193b",null);a["default"]=be.exports}}]);
//# sourceMappingURL=chunk-b7bab130.2bba9b56.js.map