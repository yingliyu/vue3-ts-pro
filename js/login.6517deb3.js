(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["login"],{"8b9d":function(e,t,a){"use strict";var r=a("7a23");const n={class:"validate-input-wrapper"},i={for:"exampleInputEmail1",class:"form-label"},l={class:"invalid-feedback"};function c(e,t,a,c,s,o){return Object(r["t"])(),Object(r["e"])("div",n,[Object(r["i"])("label",i,Object(r["D"])(e.label),1),"textarea"!==e.tag?Object(r["J"])((Object(r["t"])(),Object(r["e"])("input",Object(r["n"])({key:0,class:["form-control",{"is-invalid":e.inputRef.error}],id:"exampleInputEmail1","aria-describedby":"emailHelp","onUpdate:modelValue":t[1]||(t[1]=t=>e.inputRef.val=t),onBlur:t[2]||(t[2]=(...t)=>e.validateHandle&&e.validateHandle(...t))},e.$attrs),null,16)),[[r["F"],e.inputRef.val]]):Object(r["J"])((Object(r["t"])(),Object(r["e"])("textarea",Object(r["n"])({key:1,class:["form-control",{"is-invalid":e.inputRef.error}],"onUpdate:modelValue":t[3]||(t[3]=t=>e.inputRef.val=t),onBlur:t[4]||(t[4]=(...t)=>e.validateHandle&&e.validateHandle(...t))},e.$attrs),null,16)),[[r["G"],e.inputRef.val]]),Object(r["i"])("div",l,Object(r["D"])(e.inputRef.message),1)])}var s=a("c54f"),o=/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,u=Object(r["j"])({name:"validate-input",props:{label:String,rules:Array,modelValue:String,tag:{type:String,default:"input"}},setup:function(e,t){var a=Object(r["x"])({val:Object(r["c"])({get:function(){return e.modelValue||""},set:function(e){t.emit("update:modelValue",e)}}),error:!1,message:""}),n=function(){if(e.rules){var t=e.rules.every((function(e){var t=!0;switch(a.message=e.message,e.type){case"required":t=!(""===a.val.trim());break;case"email":t=o.test(a.val);break;case"custom":t=!e.validator||e.validator();break;default:break}return t}));return a.error=!t,t}return!0};return Object(r["r"])((function(){s["b"].emit("form-item-created",n)})),{inputRef:a,validateHandle:n}}});u.render=c;t["a"]=u},"9ed6":function(e,t,a){"use strict";a.r(t);var r=a("7a23");const n={class:"index-wrapper"},i=Object(r["i"])("h2",{class:"pt-3"},"者也专栏登陆",-1),l={class:"mb-3"},c={class:"mb-3"},s=Object(r["i"])("div",{class:"mb-3 form-check"},[Object(r["i"])("input",{type:"checkbox",class:"form-check-input",id:"exampleCheck1"}),Object(r["i"])("label",{class:"form-check-label",for:"exampleCheck1"},"Check me out")],-1),o=Object(r["i"])("span",{class:"btn btn-primary"}," Submit ",-1);function u(e,t,a,u,b,m){const d=Object(r["B"])("validate-input"),p=Object(r["B"])("validate-form");return Object(r["t"])(),Object(r["e"])("div",n,[i,Object(r["i"])(p,{onFormSubmit:e.onFormSubmit,class:"pt-3"},{submit:Object(r["I"])(()=>[o]),default:Object(r["I"])(()=>[Object(r["i"])("div",l,[Object(r["i"])(d,{type:"email",label:"用户名/邮箱",placeholder:"请输入用户名/邮箱",modelValue:e.emailRef,"onUpdate:modelValue":t[1]||(t[1]=t=>e.emailRef=t),rules:e.emailRules},null,8,["modelValue","rules"])]),Object(r["i"])("div",c,[Object(r["i"])(d,{type:"password",label:"密码",placeholder:"请输入密码",modelValue:e.passwordVal,"onUpdate:modelValue":t[2]||(t[2]=t=>e.passwordVal=t),rules:e.passwordRules},null,8,["modelValue","rules"])]),s]),_:1},8,["onFormSubmit"])])}var b=a("6c02"),m=a("5502"),d=a("8b9d"),p=a("c54f"),f=a("5dd7"),j=Object(r["j"])({name:"Login",props:{},components:{ValidateForm:p["a"],ValidateInput:d["a"]},setup:function(){var e=Object(m["b"])(),t=Object(b["d"])(),a=Object(r["y"])(""),n=Object(r["y"])(""),i=[{type:"required",message:"电子邮箱地址不能为空"},{type:"email",message:" 请输入正确的电子邮箱格式"}],l=[{type:"required",message:"密码不能为空"}],c=function(r){var i={email:a.value,password:n.value};r&&e.dispatch("user/loginAndFetch",i,{root:!0}).then((function(a){console.log(e),Object(f["a"])("登陆成功 2s后跳转到首页","success"),setTimeout((function(){t.push("/")}),2e3)})).catch((function(e){console.log("login error: ",e)}))};return{passwordVal:n,passwordRules:l,emailRules:i,emailRef:a,onFormSubmit:c}}});j.render=u;t["default"]=j},c54f:function(e,t,a){"use strict";a.d(t,"b",(function(){return s}));var r=a("7a23");const n={class:"validate-form-wrapper"},i=Object(r["i"])("button",{type:"submit",class:"btn btn-primary"}," 提交 ",-1);function l(e,t,a,l,c,s){return Object(r["t"])(),Object(r["e"])("form",n,[Object(r["A"])(e.$slots,"default"),Object(r["i"])("div",{class:"submit-area pb-3",onClick:t[1]||(t[1]=Object(r["K"])((...t)=>e.submitForm&&e.submitForm(...t),["prevent"]))},[Object(r["A"])(e.$slots,"submit",{},()=>[i])])])}var c=function(e){return{all:e=e||new Map,on:function(t,a){var r=e.get(t);r&&r.push(a)||e.set(t,[a])},off:function(t,a){var r=e.get(t);r&&r.splice(r.indexOf(a)>>>0,1)},emit:function(t,a){(e.get(t)||[]).slice().map((function(e){e(a)})),(e.get("*")||[]).slice().map((function(e){e(t,a)}))}}},s=c(),o=Object(r["j"])({name:"ValidateForm",props:{},emits:["form-submit"],setup:function(e,t){var a=[],n=function(){var e=a.map((function(e){return e()})).every((function(e){return e}));t.emit("form-submit",e)},i=function(e){a.push(e)};return s.on("form-item-created",i),Object(r["s"])((function(){s.off("form-item-created",i),a=[]})),{submitForm:n}}});o.render=l;t["a"]=o}}]);
//# sourceMappingURL=login.6517deb3.js.map