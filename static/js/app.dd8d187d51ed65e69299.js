webpackJsonp([1],{"06Pv":function(e,t){},"7zck":function(e,t){},AEaO:function(e,t){},LMri:function(e,t){},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("7+uW"),n=a("kxiW"),s=a.n(n),i={name:"navbar",data:function(){return{isLoggedIn:!1,currentUser:!1}},created:function(){s.a.auth().currentUser&&(this.isLoggedIn=!0,this.currentUser=s.a.auth().currentUser.email)},methods:{go:function(e){this.$router.push(e)},logout:function(){var e=this;s.a.auth().signOut().then(function(){return e.$router.push("/")})}}},o={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app-bar",{attrs:{color:"#26a69a",dark:"",app:""}},[a("v-toolbar-title",[a("v-btn",{attrs:{text:"",id:"toolbar-title"},on:{click:function(t){return e.go("/")}}},[a("v-icon",{staticClass:"icon-padding-right"},[e._v("fa fa-house-user")]),e._v(" "),a("h2",[e._v("Rent App")])],1)],1),e._v(" "),a("v-spacer"),e._v(" "),a("v-toolbar-items",[a("v-btn",{attrs:{text:""},on:{click:function(t){return e.go("/")}}},[e._v("Home")]),e._v(" "),e.isLoggedIn?a("v-btn",{attrs:{text:""},on:{click:function(t){return e.go("/dashboard")}}},[e._v("Dashboard")]):e._e(),e._v(" "),e.isLoggedIn?a("v-btn",{attrs:{text:""},on:{click:e.logout}},[e._v("Logout")]):e._e(),e._v(" "),e.isLoggedIn?e._e():a("v-btn",{attrs:{text:""},on:{click:function(t){return e.go("/login")}}},[e._v("Login")]),e._v(" "),e.isLoggedIn?e._e():a("v-btn",{attrs:{text:""},on:{click:function(t){return e.go("/register")}}},[e._v("Register")])],1)],1)},staticRenderFns:[]};var l={name:"app",components:{Navbar:a("VU/8")(i,o,!1,function(e){a("TXU5")},"data-v-4e9a312e",null).exports}},c={render:function(){var e=this.$createElement,t=this._self._c||e;return t("v-app",{attrs:{id:"app"}},[t("Navbar",{key:this.$route.fullPath}),this._v(" "),t("v-content",{staticClass:"my-container"},[t("v-container",{attrs:{fluid:""}},[t("router-view")],1)],1),this._v(" "),t("v-footer",{staticClass:"font-weight-medium",attrs:{absolute:"",app:""}},[t("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[this._v("\n      "+this._s((new Date).getFullYear())+" -\n      "),t("strong",[this._v("Rent App")])])],1)],1)},staticRenderFns:[]};var u=a("VU/8")(l,c,!1,function(e){a("bcSy")},null,null).exports,d=a("/ocq"),v={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("h1",[this._v("Home")])])}]};var m=a("VU/8")({name:"home"},v,!1,function(e){a("AEaO")},null,null).exports,f=a("Dd8w"),p=a.n(f),h=(a("881v"),s.a.initializeApp({apiKey:"AIzaSyCs258nb8CiXa2q5swKc0zltWQDWexcEa4",authDomain:"rentapp-345bf.firebaseapp.com",databaseURL:"https://rentapp-345bf.firebaseio.com",projectId:"rentapp-345bf",storageBucket:"rentapp-345bf.appspot.com",messagingSenderId:"894591290837",appId:"1:894591290837:web:f9a32ea62123aa5374015c",measurementId:"G-FKFQY6F1RV"}).firestore()),_={name:"dashboard",data:function(){return{users:[]}},created:function(){var e=this;h.collection("users").orderBy("role").get().then(function(t){t.forEach(function(t){e.users.push(p()({id:t.id},t.data()))})})},methods:{formatRole:function(e){switch(e){case"admin":return"Admin";case"tenant":return"Tenant";case"landlord":return"Landlord";default:return"Unknown Role"}},newUser:function(){this.$router.push("/new_user")},editUser:function(e){this.$router.push("/edit_user/"+e)}}},g={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"dashboard"}},[a("v-row",{staticStyle:{padding:"30px 0"},attrs:{align:"center"}},[a("v-icon",{staticClass:"icon-padding-right",attrs:{color:"black"}},[e._v("fa fa-tachometer-alt")]),e._v(" "),a("h1",[e._v("Dashboard")])],1),e._v(" "),a("v-row",[a("v-expansion-panels",{attrs:{accordion:""}},[a("v-expansion-panel",[a("v-expansion-panel-header",[a("v-row",[a("v-col",{attrs:{cols:"6"}},[a("v-row",[a("v-col",{attrs:{cols:"1"}},[a("v-icon",{attrs:{color:"black"}},[e._v("fa fa-user")])],1),e._v(" "),a("v-col",[a("h2",[e._v("Users")])])],1)],1)],1)],1),e._v(" "),a("v-expansion-panel-content",[a("v-list",{attrs:{"two-line":"",dense:""}},[a("v-list-item",[a("v-list-item-content",[a("v-col",{staticStyle:{padding:"0"}},[a("v-btn",{staticClass:"white--text",attrs:{color:"#26a69a"},on:{click:e.newUser}},[e._v("\n                    Add User\n                    "),a("v-icon",{attrs:{color:"white",right:""}},[e._v("fa fa-plus")])],1)],1)],1)],1),e._v(" "),e._l(e.users,function(t){return a("v-list-item",{key:t.id,on:{click:function(a){return e.editUser(t.id)}}},[a("v-list-item-avatar",[a("v-icon",{staticClass:"white--text",class:[t.role],staticStyle:{"font-style":"normal"}},[e._v(e._s(t.forename[0])+e._s(t.surname[0]))])],1),e._v(" "),a("v-list-item-content",[a("v-list-item-title",{domProps:{textContent:e._s(t.forename+" "+t.surname)}}),e._v(" "),a("v-list-item-subtitle",{domProps:{textContent:e._s(e.formatRole(t.role))}})],1)],1)})],2)],1)],1),e._v(" "),a("v-expansion-panel",[a("v-expansion-panel-header",[a("v-row",[a("v-col",{attrs:{cols:"6"}},[a("v-row",[a("v-col",{attrs:{cols:"1"}},[a("v-icon",{attrs:{color:"black"}},[e._v("fa fa-home")])],1),e._v(" "),a("v-col",[a("h2",[e._v("Properties")])])],1)],1)],1)],1),e._v(" "),a("v-expansion-panel-content",[a("v-list",{attrs:{"two-line":"",dense:""}},[a("v-list-item",[a("v-list-item-content",[a("v-col",{staticStyle:{padding:"0"}},[a("v-btn",{staticClass:"white--text",attrs:{color:"#26a69a"},on:{click:e.newUser}},[e._v("\n                    Add User\n                    "),a("v-icon",{attrs:{color:"white",right:""}},[e._v("fa fa-plus")])],1)],1)],1)],1),e._v(" "),e._l(e.users,function(t){return a("v-list-item",{key:t.id,on:{click:function(a){return e.editUser(t.id)}}},[a("v-list-item-avatar",[a("v-icon",{staticClass:"white--text",class:[t.role]},[e._v("fa-user")])],1),e._v(" "),a("v-list-item-content",[a("v-list-item-title",{domProps:{textContent:e._s(t.forename+" "+t.surname)}}),e._v(" "),a("v-list-item-subtitle",{domProps:{textContent:e._s(e.formatRole(t.role))}})],1)],1)})],2)],1)],1)],1)],1)],1)},staticRenderFns:[]};var b=a("VU/8")(_,g,!1,function(e){a("unk3")},"data-v-8050660e",null).exports,w={name:"edit-user",data:function(){return{user:{}}},beforeRouteEnter:function(e,t,a){h.collection("users").doc(e.params.user_id).get().then(function(e){a(function(t){t.user=p()({id:e.id},e.data())})})},methods:{updateUser:function(){h.collection("users").doc(this.$route.params.user_id).set(this.user).then().catch(function(e){return console.log(e)}),this.goToDashboard()},deleteUser:function(){h.collection("users").doc(this.$route.params.user_id).delete().then().catch(function(e){return console.log(e)}),this.goToDashboard()},goToDashboard:function(){this.$router.push("/dashboard")},getName:function(){var e="",t="",a="";return void 0!==this.user.forename&&(t+=this.user.forename),void 0!==this.user.surname&&(a+=this.user.surname),0!==t.length&&(e+=t),0!==t.length&&0!==a.length&&(e+=" "),0!==a.length&&(e+=a),""===e?"New User":e}}},x={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"edit-user"}},[a("v-row",{staticStyle:{padding:"30px 0"},attrs:{align:"center"}},[a("v-icon",{staticClass:"icon-padding-right",attrs:{color:"black"}},[e._v("fa fa-user")]),e._v(" "),a("h1",[e._v("Edit User")])],1),e._v(" "),a("v-card",[a("v-card-title",[a("v-list",{attrs:{dense:""}},[a("v-list-item",[e._v(e._s(e.getName()))])],1)],1),e._v(" "),a("v-card-text",[a("v-list",{attrs:{dense:""}},[a("v-form",[a("v-list-item",[a("v-list-item-content",[a("v-text-field",{attrs:{label:"Forename",required:""},model:{value:e.user.forename,callback:function(t){e.$set(e.user,"forename",t)},expression:"user.forename"}})],1)],1),e._v(" "),a("v-list-item",[a("v-list-item-content",[a("v-text-field",{attrs:{label:"Surname",required:""},model:{value:e.user.surname,callback:function(t){e.$set(e.user,"surname",t)},expression:"user.surname"}})],1)],1),e._v(" "),a("v-list-item",[a("v-list-item-content",[a("v-text-field",{attrs:{label:"Email Address",required:""},model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}})],1)],1),e._v(" "),a("v-list-item",[a("v-radio-group",{attrs:{row:""},model:{value:e.user.role,callback:function(t){e.$set(e.user,"role",t)},expression:"user.role"}},[a("v-radio",{attrs:{color:"#ee6e73",label:"Admin",value:"admin"}}),e._v(" "),a("v-radio",{attrs:{color:"#26a69a",label:"Landlord",value:"landlord"}}),e._v(" "),a("v-radio",{attrs:{color:"#eea86e",label:"Tenant",value:"tenant"}})],1)],1)],1)],1)],1),e._v(" "),a("v-card-actions",[a("v-list-item",[a("v-btn",{staticClass:"ma-3",staticStyle:{width:"12%","margin-left":"0 !important"},attrs:{color:"grey",dark:""},on:{click:e.goToDashboard}},[e._v("\n          Back\n          "),a("v-icon",{attrs:{right:""}},[e._v("fas fa-chevron-circle-left")])],1),e._v(" "),a("v-btn",{staticClass:"ma-3",staticStyle:{width:"12%"},attrs:{color:"rgb(212, 56, 56)",dark:""},on:{click:e.deleteUser}},[e._v("\n          Delete\n          "),a("v-icon",{attrs:{right:""}},[e._v("fas fa-trash")])],1),e._v(" "),a("v-btn",{staticClass:"ma-3",staticStyle:{width:"12%"},attrs:{color:"#26a69a",dark:""},on:{click:e.updateUser}},[e._v("\n          Submit\n          "),a("v-icon",{attrs:{right:""}},[e._v("fas fa-paper-plane")])],1)],1)],1)],1)],1)},staticRenderFns:[]};var k=a("VU/8")(w,x,!1,function(e){a("eQGD")},"data-v-aaa6579c",null).exports,C={name:"add-user",data:function(){return{user:{}}},methods:{addUser:function(){h.collection("users").add(this.user).then().catch(function(e){return console.log(e)}),this.goHome()},goHome:function(){this.$router.push("/")},getName:function(){var e="",t="",a="";return void 0!==this.user.forename&&(t+=this.user.forename),void 0!==this.user.surname&&(a+=this.user.surname),0!==t.length&&(e+=t),0!==t.length&&0!==a.length&&(e+=" "),0!==a.length&&(e+=a),""===e?"New User":e}}},U={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"add-user"}},[a("h3",[e._v("Add User")]),e._v(" "),a("ul",{staticClass:"card collection with-header"},[a("li",{staticClass:"collection-header"},[a("h5",[e._v(e._s(e.getName()))])]),e._v(" "),a("li",{staticClass:"collection-item"},[a("ul",{staticClass:"collection"},[a("div",{staticClass:"input-field"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.user.forename,expression:"user.forename"}],staticClass:"collection-item",attrs:{id:"forename",type:"text",value:""},domProps:{value:e.user.forename},on:{input:function(t){t.target.composing||e.$set(e.user,"forename",t.target.value)}}}),e._v(" "),a("label",{staticClass:"active",attrs:{for:"forename"}},[e._v("Forename")])]),e._v(" "),a("div",{staticClass:"input-field"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.user.surname,expression:"user.surname"}],staticClass:"collection-item",attrs:{id:"surname",type:"text",value:""},domProps:{value:e.user.surname},on:{input:function(t){t.target.composing||e.$set(e.user,"surname",t.target.value)}}}),e._v(" "),a("label",{staticClass:"active",attrs:{for:"surname"}},[e._v("Surname")])]),e._v(" "),a("div",{staticClass:"input-field"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.user.email,expression:"user.email"}],staticClass:"collection-item",attrs:{id:"email",type:"text",value:""},domProps:{value:e.user.email},on:{input:function(t){t.target.composing||e.$set(e.user,"email",t.target.value)}}}),e._v(" "),a("label",{staticClass:"active",attrs:{for:"email"}},[e._v("Email Address")])]),e._v(" "),a("div",{staticClass:"input-field row"},[a("p",{staticClass:"col"},[a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.user.role,expression:"user.role"}],attrs:{name:"roleRadios",type:"radio",value:"admin",checked:""},domProps:{checked:e._q(e.user.role,"admin")},on:{change:function(t){return e.$set(e.user,"role","admin")}}}),e._v(" "),a("span",{staticClass:"black-text"},[e._v("Admin")])])]),e._v(" "),a("p",{staticClass:"col"},[a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.user.role,expression:"user.role"}],attrs:{name:"roleRadios",type:"radio",value:"landlord"},domProps:{checked:e._q(e.user.role,"landlord")},on:{change:function(t){return e.$set(e.user,"role","landlord")}}}),e._v(" "),a("span",{staticClass:"black-text"},[e._v("Landlord")])])]),e._v(" "),a("p",{staticClass:"col"},[a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.user.role,expression:"user.role"}],attrs:{name:"roleRadios",type:"radio",value:"tenant"},domProps:{checked:e._q(e.user.role,"tenant")},on:{change:function(t){return e.$set(e.user,"role","tenant")}}}),e._v(" "),a("span",{staticClass:"black-text"},[e._v("Tenant")])])])])])]),e._v(" "),a("li",{staticClass:"collection-item"},[a("button",{staticClass:"btn waves-effect waves-light back",on:{click:e.goHome}},[e._v("\n        Back\n        "),a("i",{staticClass:"fas fa-chevron-circle-left right"})]),e._v(" "),a("button",{staticClass:"btn waves-effect waves-light",on:{click:e.addUser}},[e._v("\n        Submit\n        "),a("i",{staticClass:"fas fa-paper-plane right"})])])])])},staticRenderFns:[]};var y=a("VU/8")(C,U,!1,function(e){a("06Pv")},"data-v-aa6e6470",null).exports,$={name:"login",data:function(){return{email:"",password:""}},methods:{login:function(e){var t=this;e.preventDefault(),s.a.auth().signInWithEmailAndPassword(this.email,this.password).then(function(e){return t.$router.push("/dashboard")},function(e){return alert(e.message)})}}},A={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h1",[e._v("Login")]),e._v(" "),a("v-text-field",{attrs:{type:"email",label:"Email",required:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),e._v(" "),a("v-text-field",{attrs:{type:"password",label:"Password",required:""},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),e._v(" "),a("v-btn",{on:{click:e.login}},[e._v("Log In")])],1)},staticRenderFns:[]};var E=a("VU/8")($,A,!1,function(e){a("fVom")},null,null).exports,R={name:"register",data:function(){return{email:"",password:""}},methods:{register:function(e){var t=this;e.preventDefault(),s.a.auth().createUserWithEmailAndPassword(this.email,this.password).then(function(e){return t.$router.push("/dashboard")},function(e){return alert(e.message)})}}},q={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h1",[e._v("Register")]),e._v(" "),a("v-text-field",{attrs:{type:"email",label:"Email",required:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),e._v(" "),a("v-text-field",{attrs:{type:"password",label:"Password",required:""},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),e._v(" "),a("v-btn",{on:{click:e.register}},[e._v("Register")])],1)},staticRenderFns:[]};var P=a("VU/8")(R,q,!1,function(e){a("LMri")},null,null).exports;r.default.use(d.a);var D=new d.a({routes:[{path:"/",name:"home",component:m},{path:"/dashboard",name:"dashboard",component:b,meta:{requiresAuth:!0}},{path:"/login",name:"login",component:E,meta:{requiresGuest:!0}},{path:"/register",name:"register",component:P,meta:{requiresGuest:!0}},{path:"/edit_user/:user_id",name:"edit-user",component:k,meta:{requiresAuth:!0}},{path:"/add_user",name:"add-user",component:y,meta:{requiresAuth:!0}}]});D.beforeEach(function(e,t,a){e.matched.some(function(e){return e.meta.requiresAuth})?s.a.auth().currentUser?a():a({path:"/login",query:{redirect:e.fullPath}}):e.matched.some(function(e){return e.meta.requiresGuest})&&s.a.auth().currentUser?a({path:"/dashboard",query:{redirect:e.fullPath}}):a()});var S=D,L=(a("ao2D"),a("3EgV")),N=a.n(L);a("7zck");r.default.use(N.a);var F=new N.a({icons:{iconfont:"fa"}});r.default.config.productionTip=!1;var I=void 0;s.a.auth().onAuthStateChanged(function(e){I||(I=new r.default({el:"#app",router:S,components:{App:u},vuetify:F,template:"<App/>"}))})},TXU5:function(e,t){},ao2D:function(e,t){},bcSy:function(e,t){},eQGD:function(e,t){},fVom:function(e,t){},unk3:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.dd8d187d51ed65e69299.js.map