(this["webpackJsonpsidebar-menu"]=this["webpackJsonpsidebar-menu"]||[]).push([[0],{12:function(e,c,t){},13:function(e,c,t){},15:function(e,c,t){"use strict";t.r(c);var s=t(2),n=t.n(s),i=t(7),a=t.n(i),o=(t(12),t(13),t(3)),j=t(6),r=t(1),l=Object(s.createContext)(),b=function(e){var c=e.children,t=Object(s.useState)(!1),n=Object(j.a)(t,2),i=n[0],a=n[1],o=Object(s.useState)(!1),b=Object(j.a)(o,2),d=b[0],O=b[1];return Object(r.jsx)(l.Provider,{value:{isSidebarOpen:i,openSidebar:function(){a(!0)},closeSidebar:function(){a(!1)},ismodalOpen:d,openModal:function(){O(!0)},closeModal:function(){O(!1)}},children:c})},d=function(){var e=Object(s.useContext)(l),c=e.openSidebar,t=e.openModal;return Object(r.jsxs)("div",{children:[Object(r.jsx)("button",{className:"sidebar-toggle",onClick:c,children:Object(r.jsx)(o.i,{})}),Object(r.jsx)("button",{className:"modal-btn",onClick:t,children:"Show Modal"})]})},O=t(4),x=function(){var e=Object(s.useContext)(l),c=e.ismodalOpen,t=e.closeModal;return Object(r.jsx)("div",{className:"modal-overlay ".concat(c&&"show-modal"),children:Object(r.jsxs)("div",{className:"modal-container",children:[Object(r.jsx)("h3",{children:"Modal Content"}),Object(r.jsx)("button",{className:"close-modal-btn",onClick:t,children:Object(r.jsx)(O.a,{})})]})})},u=[{id:1,url:"/",text:"Home",icon:Object(r.jsx)(o.g,{})},{id:2,url:"/about",text:"about",icon:Object(r.jsx)(o.f,{})},{id:3,url:"/gallery",text:"Gallery",icon:Object(r.jsx)(o.j,{})},{id:4,url:"/services",text:"Services",icon:Object(r.jsx)(o.h,{})},{id:5,url:"/contact",text:"Contact",icon:Object(r.jsx)(o.e,{})}],h=[Object(r.jsx)(o.a,{}),Object(r.jsx)(o.b,{}),Object(r.jsx)(o.d,{}),Object(r.jsx)(o.c,{})],m=function(){var e=Object(s.useContext)(l),c=e.isSidebarOpen,t=e.closeSidebar;return Object(r.jsxs)("div",{className:"sidebar ".concat(c&&"show-sidebar"),children:[Object(r.jsxs)("div",{className:"sidebar-header",children:[Object(r.jsx)("img",{src:"./logo.svg",alt:"logo"}),Object(r.jsx)("button",{className:"sidebar-close",onClick:t,children:Object(r.jsx)(O.a,{})})]}),Object(r.jsx)("div",{className:"sidebar-links",children:u.map((function(e){return Object(r.jsxs)("a",{href:e.url,children:[e.icon,e.text]},e.id)}))}),Object(r.jsx)("div",{className:"social-icons",children:h.map((function(e){return Object(r.jsx)("a",{href:"#",className:"icon",children:e})}))})]})};var v=function(){return Object(r.jsx)("div",{className:"App",children:Object(r.jsxs)(b,{children:[Object(r.jsx)(d,{}),Object(r.jsx)(x,{}),Object(r.jsx)(m,{})]})})};a.a.render(Object(r.jsx)(n.a.StrictMode,{children:Object(r.jsx)(v,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.e4dcc22f.chunk.js.map