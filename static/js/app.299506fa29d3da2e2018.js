webpackJsonp([1],{"06Pv":function(e,t){},"1USF":function(e,t){},"7zck":function(e,t){},GcXM:function(e,t){},IDCO:function(e,t){},NHnr:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r("7+uW"),s=r("kxiW"),n=r.n(s),o={name:"navbar",data:function(){return{sideNav:!1,isLoggedIn:!1,currentUser:!1}},created:function(){n.a.auth().currentUser&&(this.isLoggedIn=!0,this.currentUser=n.a.auth().currentUser.email)},methods:{go:function(e){this.$router.push(e)},logout:function(){var e=this;n.a.auth().signOut().then(function(){e.$router.go({path:"/"})})}}},i={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-navigation-drawer",{attrs:{temporary:"",app:""},model:{value:e.sideNav,callback:function(t){e.sideNav=t},expression:"sideNav"}},[r("v-list-item",[r("v-list-item-avatar",[r("v-icon",[e._v("fa fa-user")])],1),e._v(" "),r("v-list-item-content",[r("v-list-item-title",[e._v(e._s(e.currentUser))])],1)],1)],1),e._v(" "),r("v-app-bar",{attrs:{color:"teal",dark:"",app:""}},[r("v-app-bar-nav-icon",{staticClass:"d-flex d-sm-none",on:{click:function(t){e.sideNav=!e.sideNav}}}),e._v(" "),r("v-toolbar-title",[r("v-icon",{staticStyle:{"vertical-align":"unset"}},[e._v("fa fa-house-user")]),e._v(" "),r("span",{staticStyle:{"font-size":"1.5rem"}},[e._v("Rentii")])],1),e._v(" "),r("v-spacer"),e._v(" "),r("v-toolbar-items",{staticClass:"d-none d-sm-flex"},[r("v-btn",{attrs:{text:""},on:{click:function(t){return e.go("/")}}},[e._v("Home")]),e._v(" "),e.isLoggedIn?r("v-btn",{attrs:{text:""},on:{click:function(t){return e.go("/dashboard")}}},[e._v("Dashboard")]):e._e(),e._v(" "),e.isLoggedIn?r("v-btn",{attrs:{text:""},on:{click:e.logout}},[e._v("Logout")]):e._e(),e._v(" "),e.isLoggedIn?e._e():r("v-btn",{attrs:{text:""},on:{click:function(t){return e.go("/login")}}},[e._v("Login")])],1)],1)],1)},staticRenderFns:[]};var l={name:"app",components:{Navbar:r("VU/8")(o,i,!1,function(e){r("X2Ps")},"data-v-d3b21b30",null).exports}},u={render:function(){var e=this.$createElement,t=this._self._c||e;return t("v-app",{attrs:{id:"app"}},[t("Navbar",{key:this.$route.fullPath}),this._v(" "),t("v-content",[t("router-view")],1),this._v(" "),t("v-footer",{staticClass:"font-weight-medium",attrs:{absolute:"",app:""}},[t("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[this._v("\n      "+this._s((new Date).getFullYear())+" - "),t("strong",[this._v("Rentii")]),this._v(" - Luca Sett\n    ")])],1)],1)},staticRenderFns:[]};var c=r("VU/8")(l,u,!1,function(e){r("IDCO")},null,null).exports,d=r("/ocq"),v={render:function(){var e=this.$createElement,t=this._self._c||e;return t("v-container",[t("v-row",{staticStyle:{padding:"30px 0"}},[t("v-icon",{staticClass:"icon-padding-right",attrs:{color:"black"}},[this._v("fa fa-house-user")]),this._v(" "),t("h1",[this._v("Rentii")])],1),this._v(" "),t("p",[this._v("Here is some text")]),this._v(" "),t("p",[this._v("Here is some more")])],1)},staticRenderFns:[]};var m=r("VU/8")({name:"home"},v,!1,function(e){r("1USF")},null,null).exports,p=r("Dd8w"),f=r.n(p),h=(r("881v"),n.a.initializeApp({apiKey:"AIzaSyCs258nb8CiXa2q5swKc0zltWQDWexcEa4",authDomain:"rentapp-345bf.firebaseapp.com",databaseURL:"https://rentapp-345bf.firebaseio.com",projectId:"rentapp-345bf",storageBucket:"rentapp-345bf.appspot.com",messagingSenderId:"894591290837",appId:"1:894591290837:web:f9a32ea62123aa5374015c",measurementId:"G-FKFQY6F1RV"}).firestore()),g={name:"dashboard",data:function(){return{users:[],currentUser:{}}},created:function(){var e=this;h.collection("users").doc(n.a.auth().currentUser.uid).get().then(function(t){e.currentUser=t.data(),"admin"==e.currentUser.role?h.collection("users").orderBy("role").get().then(function(t){t.forEach(function(t){e.users.push(f()({id:t.id},t.data()))})}):e.currentUser.role}).catch(function(e){return console.log(e)})},methods:{formatRole:function(e){switch(e){case"admin":return"Admin";case"tenant":return"Tenant";case"landlord":return"Landlord";default:return"Unknown Role"}},editUser:function(e){this.$router.push("/edit_user/"+e)}}},_={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("v-row",{staticStyle:{padding:"30px 0"}},[r("v-icon",{staticClass:"icon-padding-right",attrs:{color:"black"}},[e._v("fa fa-tachometer-alt")]),e._v(" "),r("h1",[e._v("Dashboard")])],1),e._v(" "),r("v-row",[r("v-expansion-panels",{attrs:{accordion:""}},[r("v-expansion-panel",[r("v-expansion-panel-header",[r("v-row",[r("v-col",{attrs:{cols:"6"}},[r("v-row",[r("v-col",{attrs:{cols:"1"}},[r("v-icon",{attrs:{color:"black"}},[e._v("fa fa-user")])],1),e._v(" "),r("v-col",[r("h2",[e._v("Users")])])],1)],1)],1)],1),e._v(" "),r("v-expansion-panel-content",[r("v-list",{attrs:{"two-line":""}},e._l(e.users,function(t){return r("v-list-item",{key:t.id,on:{click:function(r){return e.editUser(t.id)}}},[r("v-list-item-avatar",{class:t.role},[r("span",{staticClass:"white--text",staticStyle:{"font-size":"1.5rem"}},[e._v("\n                  "+e._s(t.forename[0]+t.surname[0])+"\n                ")])]),e._v(" "),r("v-list-item-content",[r("v-list-item-title",{domProps:{textContent:e._s(t.forename+" "+t.surname)}}),e._v(" "),r("v-list-item-subtitle",{domProps:{textContent:e._s(e.formatRole(t.role))}})],1)],1)}),1)],1)],1),e._v(" "),r("v-expansion-panel",[r("v-expansion-panel-header",[r("v-row",[r("v-col",{attrs:{cols:"6"}},[r("v-row",[r("v-col",{attrs:{cols:"1"}},[r("v-icon",{attrs:{color:"black"}},[e._v("fa fa-home")])],1),e._v(" "),r("v-col",[r("h2",[e._v("Properties")])])],1)],1)],1)],1),e._v(" "),r("v-expansion-panel-content",[r("v-list",{attrs:{"two-line":"",dense:""}},e._l(e.users,function(t){return r("v-list-item",{key:t.id,on:{click:function(r){return e.editUser(t.id)}}},[r("v-list-item-avatar",[r("v-icon",{staticClass:"white--text",class:[t.role]},[e._v("fa-user")])],1),e._v(" "),r("v-list-item-content",[r("v-list-item-title",{domProps:{textContent:e._s(t.forename+" "+t.surname)}}),e._v(" "),r("v-list-item-subtitle",{domProps:{textContent:e._s(e.formatRole(t.role))}})],1)],1)}),1)],1)],1)],1)],1)],1)},staticRenderFns:[]};var b=r("VU/8")(g,_,!1,function(e){r("GcXM")},"data-v-b3a886fa",null).exports,w={name:"edit-user",data:function(){return{user:{}}},beforeRouteEnter:function(e,t,r){h.collection("users").doc(e.params.user_id).get().then(function(e){r(function(t){t.user=e.data()})})},methods:{updateUser:function(){var e=this;h.collection("users").doc(this.$route.params.user_id).set(this.user).then(function(){return e.goToDashboard()}).catch(function(e){return console.log(e)})},deleteUser:function(){var e=this;h.collection("users").doc(this.$route.params.user_id).delete().then(function(){return e.goToDashboard()}).catch(function(e){return console.log(e)})},goToDashboard:function(){this.$router.push("/dashboard")},getName:function(){var e="",t="",r="";return void 0!==this.user.forename&&(t+=this.user.forename),void 0!==this.user.surname&&(r+=this.user.surname),0!==t.length&&(e+=t),0!==t.length&&0!==r.length&&(e+=" "),0!==r.length&&(e+=r),""===e?"New User":e}}},$={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"edit-user"}},[r("v-row",{staticStyle:{padding:"30px 0"},attrs:{align:"center"}},[r("v-icon",{staticClass:"icon-padding-right",attrs:{color:"black"}},[e._v("fa fa-user")]),e._v(" "),r("h1",[e._v("Edit User")])],1),e._v(" "),r("v-card",[r("v-card-title",[r("v-list",{attrs:{dense:""}},[r("v-list-item",[e._v(e._s(e.getName()))])],1)],1),e._v(" "),r("v-card-text",[r("v-list",{attrs:{dense:""}},[r("v-form",[r("v-list-item",[r("v-list-item-content",[r("v-text-field",{attrs:{label:"Forename",required:""},model:{value:e.user.forename,callback:function(t){e.$set(e.user,"forename",t)},expression:"user.forename"}})],1)],1),e._v(" "),r("v-list-item",[r("v-list-item-content",[r("v-text-field",{attrs:{label:"Surname",required:""},model:{value:e.user.surname,callback:function(t){e.$set(e.user,"surname",t)},expression:"user.surname"}})],1)],1),e._v(" "),r("v-list-item",[r("v-list-item-content",[r("v-text-field",{attrs:{label:"Email Address",required:""},model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}})],1)],1),e._v(" "),r("v-list-item",[r("v-radio-group",{attrs:{row:""},model:{value:e.user.role,callback:function(t){e.$set(e.user,"role",t)},expression:"user.role"}},[r("v-radio",{attrs:{color:"#ee6e73",label:"Admin",value:"admin"}}),e._v(" "),r("v-radio",{attrs:{color:"#26a69a",label:"Landlord",value:"landlord"}}),e._v(" "),r("v-radio",{attrs:{color:"#eea86e",label:"Tenant",value:"tenant"}})],1)],1)],1)],1)],1),e._v(" "),r("v-card-actions",[r("v-list-item",[r("v-btn",{staticClass:"ma-3",staticStyle:{width:"12%","margin-left":"0 !important"},attrs:{color:"grey",dark:""},on:{click:e.goToDashboard}},[e._v("\n          Back\n          "),r("v-icon",{attrs:{right:""}},[e._v("fas fa-chevron-circle-left")])],1),e._v(" "),r("v-btn",{staticClass:"ma-3",staticStyle:{width:"12%"},attrs:{color:"rgb(212, 56, 56)",dark:""},on:{click:e.deleteUser}},[e._v("\n          Delete\n          "),r("v-icon",{attrs:{right:""}},[e._v("fas fa-trash")])],1),e._v(" "),r("v-btn",{staticClass:"ma-3",staticStyle:{width:"12%"},attrs:{color:"#26a69a",dark:""},on:{click:e.updateUser}},[e._v("\n          Submit\n          "),r("v-icon",{attrs:{right:""}},[e._v("fas fa-paper-plane")])],1)],1)],1)],1)],1)},staticRenderFns:[]};var x=r("VU/8")(w,$,!1,function(e){r("pRBP")},"data-v-329fc052",null).exports,C={name:"add-user",data:function(){return{user:{}}},methods:{addUser:function(){h.collection("users").add(this.user).then().catch(function(e){return console.log(e)}),this.goHome()},goHome:function(){this.$router.push("/")},getName:function(){var e="",t="",r="";return void 0!==this.user.forename&&(t+=this.user.forename),void 0!==this.user.surname&&(r+=this.user.surname),0!==t.length&&(e+=t),0!==t.length&&0!==r.length&&(e+=" "),0!==r.length&&(e+=r),""===e?"New User":e}}},k={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"add-user"}},[r("h3",[e._v("Add User")]),e._v(" "),r("ul",{staticClass:"card collection with-header"},[r("li",{staticClass:"collection-header"},[r("h5",[e._v(e._s(e.getName()))])]),e._v(" "),r("li",{staticClass:"collection-item"},[r("ul",{staticClass:"collection"},[r("div",{staticClass:"input-field"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.forename,expression:"user.forename"}],staticClass:"collection-item",attrs:{id:"forename",type:"text",value:""},domProps:{value:e.user.forename},on:{input:function(t){t.target.composing||e.$set(e.user,"forename",t.target.value)}}}),e._v(" "),r("label",{staticClass:"active",attrs:{for:"forename"}},[e._v("Forename")])]),e._v(" "),r("div",{staticClass:"input-field"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.surname,expression:"user.surname"}],staticClass:"collection-item",attrs:{id:"surname",type:"text",value:""},domProps:{value:e.user.surname},on:{input:function(t){t.target.composing||e.$set(e.user,"surname",t.target.value)}}}),e._v(" "),r("label",{staticClass:"active",attrs:{for:"surname"}},[e._v("Surname")])]),e._v(" "),r("div",{staticClass:"input-field"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.email,expression:"user.email"}],staticClass:"collection-item",attrs:{id:"email",type:"text",value:""},domProps:{value:e.user.email},on:{input:function(t){t.target.composing||e.$set(e.user,"email",t.target.value)}}}),e._v(" "),r("label",{staticClass:"active",attrs:{for:"email"}},[e._v("Email Address")])]),e._v(" "),r("div",{staticClass:"input-field row"},[r("p",{staticClass:"col"},[r("label",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.role,expression:"user.role"}],attrs:{name:"roleRadios",type:"radio",value:"admin",checked:""},domProps:{checked:e._q(e.user.role,"admin")},on:{change:function(t){return e.$set(e.user,"role","admin")}}}),e._v(" "),r("span",{staticClass:"black-text"},[e._v("Admin")])])]),e._v(" "),r("p",{staticClass:"col"},[r("label",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.role,expression:"user.role"}],attrs:{name:"roleRadios",type:"radio",value:"landlord"},domProps:{checked:e._q(e.user.role,"landlord")},on:{change:function(t){return e.$set(e.user,"role","landlord")}}}),e._v(" "),r("span",{staticClass:"black-text"},[e._v("Landlord")])])]),e._v(" "),r("p",{staticClass:"col"},[r("label",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.role,expression:"user.role"}],attrs:{name:"roleRadios",type:"radio",value:"tenant"},domProps:{checked:e._q(e.user.role,"tenant")},on:{change:function(t){return e.$set(e.user,"role","tenant")}}}),e._v(" "),r("span",{staticClass:"black-text"},[e._v("Tenant")])])])])])]),e._v(" "),r("li",{staticClass:"collection-item"},[r("button",{staticClass:"btn waves-effect waves-light back",on:{click:e.goHome}},[e._v("\n        Back\n        "),r("i",{staticClass:"fas fa-chevron-circle-left right"})]),e._v(" "),r("button",{staticClass:"btn waves-effect waves-light",on:{click:e.addUser}},[e._v("\n        Submit\n        "),r("i",{staticClass:"fas fa-paper-plane right"})])])])])},staticRenderFns:[]};var y=r("VU/8")(C,k,!1,function(e){r("06Pv")},"data-v-aa6e6470",null).exports,q=r("ESwS"),U=r("+cKO"),E={name:"register",mixins:[q.validationMixin],data:function(){return{password:"",passwordConfirm:"",user:{role:"landlord"},isLoading:!1,serverMessage:""}},methods:{register:function(e){var t=this;e.preventDefault(),this.$v.$touch(),this.$v.$invalid||(this.isLoading=!0,n.a.auth().createUserWithEmailAndPassword(this.user.email,this.password).then(function(e){h.collection("users").doc(n.a.auth().currentUser.uid).set(t.user).then(function(){t.isLoading=!1,t.$router.push("/dashboard")}).catch(function(e){console.log(e),t.isLoading=!1})},function(e){"auth/email-already-in-use"===e.code?t.serverMessage="There is already an account associated with this email address.":console.log(e),t.isLoading=!1}).catch(function(e){console.log(e),t.isLoading=!1}))},resized:function(){console.log("HIIII")}},validations:{user:{email:{required:U.required,email:U.email},forename:{required:U.required},surname:{required:U.required},telephone:{required:U.required}},password:{required:U.required,minLength:Object(U.minLength)(6)},passwordConfirm:{required:U.required,sameAsPassword:Object(U.sameAs)("password")}},computed:{numCols:function(){return window.innerWidth>=460?"6":"12"},emailErrors:function(){var e=[];return this.$v.user.email.$dirty?(!this.$v.user.email.email&&e.push("Must be a valid email"),!this.$v.user.email.required&&e.push("Email is required"),e):e},passwordErrors:function(){var e=[];return this.$v.password.$dirty?(!this.$v.password.required&&e.push("Password is required"),!this.$v.password.minLength&&e.push("Password must be at least 6 characters in length"),e):e},passwordConfirmErrors:function(){var e=[];return this.$v.passwordConfirm.$dirty?(!this.$v.passwordConfirm.required&&e.push("Please confirm your password"),!this.$v.passwordConfirm.sameAsPassword&&e.push("Passwords do not match"),e):e},forenameErrors:function(){var e=[];return this.$v.user.forename.$dirty?(!this.$v.user.forename.required&&e.push("Forename is required"),e):e},surnameErrors:function(){var e=[];return this.$v.user.surname.$dirty?(!this.$v.user.surname.required&&e.push("Surname is required"),e):e},telephoneErrors:function(){var e=[];return this.$v.user.telephone.$dirty?(!this.$v.user.telephone.required&&e.push("Mobile number is required"),e):e}}},L={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-form",[r("v-card-text",{staticStyle:{"padding-bottom":"0"}},[r("v-container",[r("v-text-field",{attrs:{type:"email",autocomplete:"email",label:"Email",color:"teal","error-messages":e.emailErrors},on:{input:function(t){return e.$v.user.email.$touch()},blur:function(t){return e.$v.user.email.$touch()}},model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}}),e._v(" "),r("v-row",[r("v-col",{staticStyle:{"padding-top":"0","padding-bottom":"0"},attrs:{cols:e.numCols}},[r("v-text-field",{attrs:{type:"password",autocomplete:"password",label:"Password",color:"teal","error-messages":e.passwordErrors},on:{input:function(t){return e.$v.password.$touch()},blur:function(t){return e.$v.password.$touch()}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),e._v(" "),r("v-col",{staticStyle:{"padding-top":"0","padding-bottom":"0"},attrs:{cols:e.numCols}},[r("v-text-field",{attrs:{type:"password",autocomplete:"password",label:"Confirm Password",color:"teal","error-messages":e.passwordConfirmErrors},on:{input:function(t){return e.$v.passwordConfirm.$touch()},blur:function(t){return e.$v.passwordConfirm.$touch()}},model:{value:e.passwordConfirm,callback:function(t){e.passwordConfirm=t},expression:"passwordConfirm"}})],1)],1),e._v(" "),r("v-row",[r("v-col",{staticStyle:{"padding-top":"0","padding-bottom":"0"},attrs:{cols:e.numCols}},[r("v-text-field",{attrs:{label:"Forename",color:"teal","error-messages":e.forenameErrors},on:{input:function(t){return e.$v.user.forename.$touch()},blur:function(t){return e.$v.user.forename.$touch()}},model:{value:e.user.forename,callback:function(t){e.$set(e.user,"forename",t)},expression:"user.forename"}})],1),e._v(" "),r("v-col",{staticStyle:{"padding-top":"0","padding-bottom":"0"},attrs:{cols:e.numCols}},[r("v-text-field",{attrs:{label:"Surname",color:"teal","error-messages":e.surnameErrors},on:{input:function(t){return e.$v.user.surname.$touch()},blur:function(t){return e.$v.user.surname.$touch()}},model:{value:e.user.surname,callback:function(t){e.$set(e.user,"surname",t)},expression:"user.surname"}})],1)],1),e._v(" "),r("v-text-field",{attrs:{label:"Mobile Number",color:"teal","error-messages":e.telephoneErrors},on:{input:function(t){return e.$v.user.telephone.$touch()},blur:function(t){return e.$v.user.telephone.$touch()}},model:{value:e.user.telephone,callback:function(t){e.$set(e.user,"telephone",t)},expression:"user.telephone"}}),e._v(" "),r("v-radio-group",{model:{value:e.user.role,callback:function(t){e.$set(e.user,"role",t)},expression:"user.role"}},[r("p",[e._v("I am a")]),e._v(" "),r("v-container",{staticStyle:{"padding-top":"0","padding-bottom":"0"}},[r("v-radio",{attrs:{color:"teal",label:"Landlord",value:"landlord"}}),e._v(" "),r("v-radio",{attrs:{color:"#eea86e",label:"Tenant",value:"tenant"}})],1)],1),e._v(" "),r("v-container",{staticStyle:{"padding-left":"0","padding-bottom":"0"}},[r("v-btn",{staticClass:"white--text",attrs:{loading:e.isLoading,disabled:e.isLoading,color:"teal",type:"submit",block:""},on:{click:e.register}},[e._v("\n          Register\n          "),r("v-icon",{attrs:{right:"",dark:""}},[e._v("fa fa-sign-in-alt")])],1),e._v(" "),r("p",{staticClass:"error--text",staticStyle:{"padding-top":"10px"}},[e._v("\n          "+e._s(e.serverMessage)+"\n        ")])],1)],1)],1)],1)},staticRenderFns:[]};var P=r("VU/8")(E,L,!1,function(e){r("WMId")},"data-v-4e166a9c",null).exports,S={name:"Luca",mixins:[q.validationMixin],data:function(){return{email:"",password:"",isLoading:!1,serverMessage:""}},methods:{login:function(e){var t=this;e.preventDefault(),this.$v.$touch(),this.serverMessage="",this.$v.$invalid||(this.isLoading=!0,n.a.auth().signInWithEmailAndPassword(this.email,this.password).then(function(e){t.isLoading=!1,t.$router.push("/dashboard")},function(e){"auth/user-not-found"===e.code?t.serverMessage="There is no account associated with "+t.email:"auth/wrong-password"===e.code?t.serverMessage="The password you have entered is incorrect.":"auth/too-many-requests"===e.code?t.serverMessage="Too many unsuccessful attempts. Please try again later.":console.log(e),t.isLoading=!1}).catch(function(e){t.isLoading=!1,console.log(e)}))}},validations:{email:{required:U.required},password:{required:U.required}},computed:{numCols:function(){return window.innerWidth>=460?"6":"12"},emailErrors:function(){var e=[];return this.$v.email.$dirty?(!this.$v.email.required&&e.push("Email is required"),e):e},passwordErrors:function(){var e=[];return this.$v.password.$dirty?(!this.$v.password.required&&e.push("Password is required"),e):e}}},R={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-form",[r("v-card-text",{staticStyle:{"padding-bottom":"0"}},[r("v-container",[r("v-text-field",{attrs:{type:"email",label:"Email",color:"teal","error-messages":e.emailErrors},on:{input:function(t){return e.$v.email.$touch()},blur:function(t){return e.$v.email.$touch()}},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),e._v(" "),r("v-text-field",{attrs:{type:"password",autocomplete:"password",label:"Password",color:"teal","error-messages":e.passwordErrors},on:{input:function(t){return e.$v.password.$touch()},blur:function(t){return e.$v.password.$touch()}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),e._v(" "),r("v-container",{staticStyle:{"padding-left":"0","padding-bottom":"0"}},[r("v-btn",{staticClass:"white--text",attrs:{loading:e.isLoading,disabled:e.isLoading,color:"teal",type:"submit",block:""},on:{click:e.login}},[e._v("\n          Login\n          "),r("v-icon",{attrs:{right:"",dark:""}},[e._v("fa fa-sign-in-alt")])],1),e._v(" "),r("p",{staticClass:"error--text",staticStyle:{"padding-top":"10px"}},[e._v("\n          "+e._s(e.serverMessage)+"\n        ")])],1)],1)],1)],1)},staticRenderFns:[]};var N={name:"login-register-form",components:{Register:P,Login:r("VU/8")(S,R,!1,function(e){r("NrZ1")},null,null).exports},data:function(){return{tab:null}}},A={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{staticClass:"fill-height"},[r("v-row",{attrs:{align:"center"}},[r("v-col",[r("v-card",{staticClass:"mx-auto maxWidth"},[r("v-tabs",{attrs:{"background-color":"teal",dark:""},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[r("v-tab",{attrs:{href:"#login"}},[e._v("Login")]),e._v(" "),r("v-tab",{attrs:{href:"#register"}},[e._v("Register")])],1),e._v(" "),r("v-tabs-items",{model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[r("v-tab-item",{attrs:{value:"register"}},[r("Register")],1),e._v(" "),r("v-tab-item",{attrs:{value:"login"}},[r("Login")],1)],1)],1)],1)],1)],1)},staticRenderFns:[]};var F=r("VU/8")(N,A,!1,function(e){r("vXwQ")},"data-v-14032af1",null).exports;a.default.use(d.a);var I=new d.a({routes:[{path:"/",name:"home",component:m},{path:"/dashboard",name:"dashboard",component:b,meta:{requiresAuth:!0}},{path:"/login",name:"login",component:F,meta:{requiresGuest:!0}},{path:"/edit_user/:user_id",name:"edit-user",component:x,meta:{requiresAuth:!0}},{path:"/add_user",name:"add-user",component:y,meta:{requiresAuth:!0}}]});I.beforeEach(function(e,t,r){e.matched.some(function(e){return e.meta.requiresAuth})?n.a.auth().currentUser?r():r({path:"/login",query:{redirect:e.fullPath}}):e.matched.some(function(e){return e.meta.requiresGuest})&&n.a.auth().currentUser?r({path:"/dashboard",query:{redirect:e.fullPath}}):r()});var M=I,D=(r("ao2D"),r("3EgV")),T=r.n(D);r("7zck");a.default.use(T.a);var V=new T.a({icons:{iconfont:"fa"}}),W=r("yviF"),H=r.n(W);r("dih4");a.default.config.productionTip=!1;var z=void 0;H.a.auth().onAuthStateChanged(function(e){z||(z=new a.default({el:"#app",router:M,components:{App:c},vuetify:V,template:"<App/>"}))})},NrZ1:function(e,t){},WMId:function(e,t){},X2Ps:function(e,t){},ao2D:function(e,t){},pRBP:function(e,t){},vXwQ:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.299506fa29d3da2e2018.js.map