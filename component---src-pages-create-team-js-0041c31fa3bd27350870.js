"use strict";(self.webpackChunkcrick_it=self.webpackChunkcrick_it||[]).push([[52],{364:function(e,t,a){a.r(t),a.d(t,{default:function(){return c}});var l=a(7294),n=a(485);var r=function(){const{0:e,1:t}=(0,l.useState)(""),{0:a,1:r}=(0,l.useState)(null),{0:c,1:m}=(0,l.useState)(null),{0:s,1:u}=(0,l.useState)(null);(0,l.useEffect)((()=>{const e=localStorage.getItem("teamName"),a=localStorage.getItem("teamLogo");e&&t(e),a&&m(a)}),[]);const o=e=>{const t=e.target.files[0];if(t){const e=new FileReader;e.onloadend=()=>{m(e.result),r(t)},e.readAsDataURL(t)}},i=e=>{u(e.target.value)};return l.createElement(l.Fragment,null,l.createElement("div",{className:"mainsec"},l.createElement("h2",{className:n.WU},"Your Team's Profile"),l.createElement("div",{className:n.nC},e&&c?l.createElement("div",{className:n.Qx},l.createElement("h3",null,e),l.createElement("img",{src:c,alt:"Team Logo",className:n.GA})):l.createElement("form",{className:n.cr,onSubmit:t=>{t.preventDefault(),localStorage.setItem("teamName",e),localStorage.setItem("teamLogo",c),alert("Team details saved successfully!")}},l.createElement("div",{className:n.d7},l.createElement("label",{className:"labeltxt"},"Team Name"),l.createElement("input",{type:"text",value:e,onChange:e=>t(e.target.value),required:!0,className:n.input})),l.createElement("div",{className:n.d7},l.createElement("label",{className:"labeltxt"},"Team Logo"),l.createElement("div",{className:n.lB},l.createElement("input",{type:"file",accept:"image/*",onChange:o,className:n.w_}),l.createElement("div",{className:n.xk},c?l.createElement("img",{src:c,alt:"Logo Preview",className:n.GA}):l.createElement("p",null,"Click to upload team logo")))),l.createElement("div",{className:n.d7},l.createElement("label",{className:"labeltxt"},"Does Your Team Have Own Ground?"),l.createElement("div",{className:n.Oq},l.createElement("div",{className:n.q4},l.createElement("label",{className:"labeltxt",style:{marginBottom:"0px"}},"Yes"),l.createElement("input",{type:"radio",name:"ownGround",value:"yes",className:n.radioInput,onChange:i})),l.createElement("div",{className:n.q4},l.createElement("label",{className:"labeltxt",style:{marginBottom:"0px"}},"No"),l.createElement("input",{type:"radio",name:"ownGround",value:"no",className:n.radioInput,onChange:i})))),"yes"===s&&l.createElement(l.Fragment,null,l.createElement("div",{className:n.d7},l.createElement("label",{className:"labeltxt"},"Ground Description"),l.createElement("input",{type:"text",value:e,onChange:e=>t(e.target.value),required:!0,className:n.input})),l.createElement("div",{className:n.d7},l.createElement("label",{className:"labeltxt"},"Upload Ground Image"),l.createElement("div",{className:n.lB},l.createElement("input",{type:"file",accept:"image/*",onChange:o,className:n.w_}),l.createElement("div",{className:n.xk},c?l.createElement("img",{src:c,alt:"Logo Preview",className:n.GA}):l.createElement("p",null,"Click to upload team logo")))),l.createElement("div",{className:n.d7},l.createElement("label",{className:"labeltxt"},"Facilities"),l.createElement("input",{type:"text",value:e,onChange:e=>t(e.target.value),required:!0,className:n.input})),l.createElement("div",{className:n.d7},l.createElement("label",{className:"labeltxt"},"Ground Fees"),l.createElement("input",{type:"text",value:e,onChange:e=>t(e.target.value),required:!0,className:n.input}))),l.createElement("button",{type:"submit",className:"ipbtn"},"Save Team")))))};var c=function(){return l.createElement(l.Fragment,null,l.createElement(r,null))}},485:function(e,t,a){a.d(t,{BJ:function(){return E},GA:function(){return s},Oq:function(){return o},Qx:function(){return d},WU:function(){return n},cr:function(){return c},d7:function(){return m},lB:function(){return u},nC:function(){return l},q4:function(){return i},w_:function(){return r},xk:function(){return p}});var l="threecat-module--container--bc6f6",n="threecat-module--ctheader--33a6a",r="threecat-module--fileInput--c4792",c="threecat-module--form--3e248",m="threecat-module--inputGroup--6850b",s="threecat-module--logoPreview--a8d69",u="threecat-module--logoUploadContainer--a738f",o="threecat-module--radioGroup--9720d",i="threecat-module--radiocon--477d8",d="threecat-module--savedDataContainer--a6833",E="threecat-module--undercon--8004c",p="threecat-module--uploadText--fca93"}}]);
//# sourceMappingURL=component---src-pages-create-team-js-0041c31fa3bd27350870.js.map