(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{428:function(t,e,r){"use strict";r.r(e);var o={props:{title:{type:String,default:""},items:{type:Array,default:function(){return[]}}},data:function(){return{monthName:"",day:""}},mounted:function(){var t=new Date;this.monthName=["Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек"][t.getMonth()],this.day=t.getDate()}},n=r(2),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"kt-subheader   kt-grid__item",attrs:{id:"kt_subheader"}},[r("div",{staticClass:"kt-container  kt-container--fluid "},[r("div",{staticClass:"kt-subheader__main"},[r("h3",{staticClass:"kt-subheader__title"},[t._v(t._s(t._f("capitalize")(t.title)))]),t._v(" "),r("span",{staticClass:"kt-subheader__separator kt-hidden"}),t._v(" "),r("div",{staticClass:"kt-subheader__breadcrumbs"},[r("n-link",{staticClass:"kt-subheader__breadcrumbs-home",attrs:{to:{path:"/"}}},[r("i",{staticClass:"flaticon2-shelter"})]),t._v(" "),t._l(t.items,(function(e,i){return[r("span",{staticClass:"kt-subheader__breadcrumbs-separator"}),t._v(" "),r("n-link",{staticClass:"kt-subheader__breadcrumbs-link",attrs:{to:{name:e.name,params:e.params}}},[t._v("\n                    "+t._s(t._f("capitalize")(e.title))+" ")])]}))],2)]),t._v(" "),r("div",{staticClass:"kt-subheader__toolbar"},[r("div",{staticClass:"kt-subheader__wrapper"},[r("a",{staticClass:"btn btn-sm btn-elevate btn-brand btn-elevate",attrs:{href:"#",id:"kt_dashboard_daterangepicker","data-toggle":"kt-tooltip",title:"","data-placement":"left","data-original-title":"Йо! Это я, сегодняшняя дата!"}},[r("span",{staticClass:"kt-opacity-7",attrs:{id:"kt_dashboard_daterangepicker_title"}},[t._v("Сегодня:")]),t._v(" \n                    "),r("span",{staticClass:"kt-font-bold",attrs:{id:"kt_dashboard_daterangepicker_date"}},[t._v(t._s(t.monthName)+" "+t._s(t.day))]),t._v(" "),r("i",{staticClass:"flaticon-calendar-with-a-clock-time-tools kt-padding-l-5 kt-padding-r-0"})])])])])])}),[],!1,null,"06a05328",null);e.default=component.exports},429:function(t,e,r){"use strict";r.d(e,"a",(function(){return l}));var o=r(430),n=r(431),l=function(){function t(){Object(o.a)(this,t),this.errors={}}return Object(n.a)(t,[{key:"get",value:function(t){if(this.errors[t])return this.errors[t][0]}},{key:"record",value:function(t){this.errors=t.errors}}]),t}()},450:function(t,e,r){"use strict";(function(t){r(220),r(31),r(14),r(25);var o=r(3),n=r(433),l=r(428),c=r(429);e.a={middleware:"auth",components:{Breadcrumbs:l.default,"my-upload":n.a},data:function(){return{breadcrumbsItems:[{title:"Platform Users",name:"platform-users"},{title:"Create",name:"platform-users-create"}],user:{},profile:{},avatar:"",socialLinks:[{id:1,url:""}],newSocial:"",platforms:[],roles:[],types:[],statuses:[],loading:!1,loadingOptions:!1,errors:new c.a,platformEndpoint:this.$store.state.auth.user.profile.platform.endpoint,optionsGender:["male","female"],show:!1,showPhoto:!1,params:{name:"avatar"},mediaServerUrl:t.env.mediaUrl}},fetch:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.$permission(["user_platform_create"])||t.$router.push({name:"index"}),e.next=3,t.getItemOptionsData();case 3:case"end":return e.stop()}}),e)})))()},methods:{getItemOptionsData:function(){var t=this;this.loadingOptions=!0,this.$axios.get("".concat(this.platformEndpoint,"/users/create/data")).then((function(e){var data=e.data.data;t.platforms=data.platform,t.roles=data.role,t.types=data.type,t.statuses=data.status})).catch((function(t){console.log(t)})).finally((function(){t.loadingOptions=!1}))},store:function(){var t=this;this.loading=!0,this.$axios.$post("".concat(this.platformEndpoint,"/users"),{name:this.user.name,email:this.user.email,password:this.user.password,type:this.user.type,status:this.user.status,profile:this.profile,roles:this.user.role,socials:this.socialLinks}).then((function(e){var data=e.data;"success"===data.status&&(t.$message({showClose:!0,message:"Successfully created",type:"success",center:!0}),t.avatar?t.submitFiles(data.user_id,data.profile_id):t.$router.push({name:"platform-users"}))})).catch((function(e){return t.errors.record(e.response.data)})).finally((function(){t.loading=!1}))},submitFiles:function(t,e){var r=new FormData;r.append("avatar",this.avatar),r.append("id",t),r.append("item","user"),this.$axios.post(this.mediaServerUrl+"/api/avatar/update/"+t,r,{headers:{"Content-Type":"multipart/form-data"}}).then(function(r){this.afterSubmitSave(r.data.path,t,e),console.log("success")}.bind(this)).catch((function(data){console.log("error")}))},afterSubmitSave:function(data,t,e){var r=this;this.$axios.patch("".concat(this.platformEndpoint,"/users/").concat(t),{profile:{id:e||"",avatar:data}}).then((function(t){r.$router.push({name:"platform-users"})}))},addSocialLink:function(){var t=this.socialLinks.length;this.socialLinks.push({id:t+1,url:""}),this.newSocial=""},removeSocialLink:function(t){this.socialLinks.splice(t,1)},toggleShow:function(){this.show=!this.show},cropSuccess:function(t){this.avatar=t,console.log(this.urltoFile(this.avatar)),this.showPhoto=!0},urltoFile:function(t,e,r){return r=r||(t.match(/^data:([^;]+);/)||"")[1],fetch(t).then((function(t){return t.arrayBuffer()})).then((function(t){return new File([t],e,{type:r})}))}}}}).call(this,r(107))},451:function(t,e,r){var content=r(537);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(8).default)("461981fe",content,!0,{sourceMap:!1})},536:function(t,e,r){"use strict";var o=r(451);r.n(o).a},537:function(t,e,r){(e=r(7)(!1)).push([t.i,".item__error[data-v-3683bb99]{color:#f56c6c;font-size:11px;line-height:1;padding-top:4px;position:absolute}",""]),t.exports=e},570:function(t,e,r){"use strict";r.r(e);var o=r(450).a,n=(r(536),r(2)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("Breadcrumbs",{attrs:{title:"Users",items:t.breadcrumbsItems}}),t._v(" "),r("div",{staticClass:"kt-container  kt-container--fluid  kt-grid__item kt-grid__item--fluid"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12"},[r("div",{staticClass:"kt-portlet"},[t._m(0),t._v(" "),r("form",{directives:[{name:"loading",rawName:"v-loading",value:t.loadingOptions,expression:"loadingOptions"}],staticClass:"kt-form",attrs:{role:"form"},on:{submit:function(e){return e.preventDefault(),t.store(e)}}},[r("div",{staticClass:"kt-portlet__body"},[r("div",{directives:[{name:"show",rawName:"v-show",value:t.showPhoto,expression:"showPhoto"}],staticClass:"row"},[r("div",{staticClass:"col-md-2"},[r("img",{staticStyle:{"border-radius":"50%",width:"100%",height:"auto"},attrs:{src:t.avatar}})])]),t._v(" "),r("br",{directives:[{name:"show",rawName:"v-show",value:t.showPhoto,expression:"showPhoto"}]}),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-2"},[r("a",{staticClass:"btn btn-success btn-sm btn-block",staticStyle:{color:"white"},on:{click:t.toggleShow}},[t._v("Set Avatar")])]),t._v(" "),r("br"),t._v(" "),r("my-upload",{attrs:{field:"img",width:300,height:300,params:t.params,langType:"en"},on:{"crop-success":t.cropSuccess},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}})],1),t._v(" "),r("br"),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-2"},[r("div",{staticClass:"form-group"},[r("el-select",{attrs:{filterable:"",placeholder:"Choose Type"},model:{value:t.user.type,callback:function(e){t.$set(t.user,"type",e)},expression:"user.type"}},t._l(t.types,(function(t){return r("el-option",{key:t,attrs:{label:t,value:t}})})),1),t._v(" "),r("div",{staticClass:"item__error"},[t._v("\n                                            "+t._s(t.errors.get("type"))+"\n                                        ")])],1)]),t._v(" "),r("div",{staticClass:"col-md-2"},[r("div",{staticClass:"form-group"},[r("el-select",{attrs:{filterable:"",placeholder:"Choose status"},model:{value:t.user.status,callback:function(e){t.$set(t.user,"status",e)},expression:"user.status"}},t._l(t.statuses,(function(t){return r("el-option",{key:t,attrs:{label:t,value:t}})})),1),t._v(" "),r("div",{staticClass:"item__error"},[t._v("\n                                            "+t._s(t.errors.get("status"))+"\n                                        ")])],1)]),t._v(" "),r("div",{staticClass:"col-md-2"},[r("div",{staticClass:"form-group"},[r("el-select",{attrs:{filterable:"",placeholder:"Choose Gender"},model:{value:t.profile.gender,callback:function(e){t.$set(t.profile,"gender",e)},expression:"profile.gender"}},t._l(t.optionsGender,(function(t){return r("el-option",{key:t,attrs:{label:t,value:t}})})),1),t._v(" "),r("div",{staticClass:"item__error"},[t._v("\n                                            "+t._s(t.errors.get("gender"))+"\n                                        ")])],1)])]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-4"},[r("div",{staticClass:"form-group"},[r("label",[t._v("Name")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.user.name,expression:"user.name"}],class:t.errors.get("name")?"form-control is-invalid":"form-control",attrs:{type:"text",placeholder:"Enter name"},domProps:{value:t.user.name},on:{input:function(e){e.target.composing||t.$set(t.user,"name",e.target.value)}}}),t._v(" "),r("div",{staticClass:"invalid-feedback"},[t._v(t._s(t.errors.get("name")))])])]),t._v(" "),r("div",{staticClass:"col-md-4"},[r("div",{staticClass:"form-group"},[r("label",[t._v("Email")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.user.email,expression:"user.email"}],class:t.errors.get("email")?"form-control is-invalid":"form-control",attrs:{type:"email",placeholder:"Enter email"},domProps:{value:t.user.email},on:{input:function(e){e.target.composing||t.$set(t.user,"email",e.target.value)}}}),t._v(" "),r("div",{staticClass:"invalid-feedback"},[t._v(t._s(t.errors.get("email")))])])]),t._v(" "),r("div",{staticClass:"col-md-4"},[r("div",{staticClass:"form-group"},[r("label",[t._v("Password")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],class:t.errors.get("password")?"form-control is-invalid":"form-control",attrs:{type:"text",placeholder:"Enter password",minlength:"8"},domProps:{value:t.user.password},on:{input:function(e){e.target.composing||t.$set(t.user,"password",e.target.value)}}}),t._v(" "),r("div",{staticClass:"invalid-feedback"},[t._v(t._s(t.errors.get("password")))])])])]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-4"},[r("div",{staticClass:"form-group"},[r("label",[t._v("Last name")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.profile.last_name,expression:"profile.last_name"}],class:t.errors.get("last_name")?"form-control is-invalid":"form-control",attrs:{type:"text",placeholder:"Enter last name"},domProps:{value:t.profile.last_name},on:{input:function(e){e.target.composing||t.$set(t.profile,"last_name",e.target.value)}}}),t._v(" "),r("div",{staticClass:"invalid-feedback"},[t._v(t._s(t.errors.get("last_name")))])])])]),t._v(" "),r("hr"),t._v(" "),r("div",{staticClass:"form-group row"},[r("label",{staticClass:"col-md-1 col-form-label"},[t._v("Social links")]),t._v(" "),r("div",{staticClass:"col-md-5"},[r("div",{staticClass:"kt-repeater"},[r("div",{attrs:{"data-repeater-list":"demo1"}},t._l(t.socialLinks,(function(e,o){return r("div",{key:e.id,staticClass:"kt-repeater__item",attrs:{"data-repeater-item":""}},[r("div",{staticClass:"input-group"},[t._m(1,!0),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.url,expression:"socialLink.url"}],class:t.errors.get("socials."+o+".url")?"form-control is-invalid":"form-control",attrs:{type:"text",placeholder:"Enter social url"},domProps:{value:e.url},on:{input:function(r){r.target.composing||t.$set(e,"url",r.target.value)}}}),t._v(" "),r("div",{staticClass:"invalid-feedback"},[t._v(t._s(t.errors.get("socials."+o+".url")))]),t._v(" "),r("div",{staticClass:"input-group-append"},[r("button",{staticClass:"btn btn-danger btn-icon",attrs:{"data-repeater-delete":""},on:{click:function(e){return t.removeSocialLink(o)}}},[r("i",{staticClass:"la la-close kt-font-light"})])])]),t._v(" "),r("div",{staticClass:"kt-separator kt-separator--space-sm"})])})),0),t._v(" "),r("div",{staticClass:"kt-repeater__add-data"},[r("span",{staticClass:"btn btn-info btn-sm",attrs:{"data-repeater-create":""},on:{click:t.addSocialLink}},[r("i",{staticClass:"la la-plus"}),t._v(" Add\n                                    ")])])])])])]),t._v(" "),r("div",{staticClass:"kt-portlet__foot"},[r("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"kt-form__actions"},[r("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Submit")])])])])])])])])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"kt-portlet__head"},[e("div",{staticClass:"kt-portlet__head-label"},[e("h3",{staticClass:"kt-portlet__head-title"},[this._v("New User")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"input-group-prepend"},[e("span",{staticClass:"input-group-text"},[e("i",{staticClass:"la la-chain"})])])}],!1,null,"3683bb99",null);e.default=component.exports;installComponents(component,{Breadcrumbs:r(428).default})}}]);