(this.webpackJsonpdelvers=this.webpackJsonpdelvers||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),i=n(4),r=n.n(i),c=(n(14),n(5)),o=n(6),l=n(7),h=n(2),u=n(9),m=n(8),d=(n(15),n(0)),j=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={dimensions:50,maxTunnels:100,maxLength:10},a.onClick=a.onClick.bind(Object(h.a)(a)),a.onChange=a.onChange.bind(Object(h.a)(a)),a}return Object(l.a)(n,[{key:"createArray",value:function(e,t){for(var n=[],a=0;a<t;a++){n.push([]);for(var s=0;s<t;s++)n[a].push(e)}return n}},{key:"onChange",value:function(e){this.setState(Object(c.a)({},e.target.name,this.validator(e.target.value)))}},{key:"validator",value:function(e){var t=Number(e);return isNaN(t)?0:t}},{key:"generateMap",value:function(){for(var e,t=this.state.dimensions,n=this.state.maxTunnels,a=this.state.maxLength,s=this.createArray(1,t),i=Math.floor(Math.random()*t),r=Math.floor(Math.random()*t),c=[[-1,0],[1,0],[0,1],[0,-1]],o=[];n&&t&&a;){do{e=c[Math.floor(Math.random()*c.length)]}while(e[0]===-o[0]&&e[1]||e[0]===o[0]&&e[1]===o[1]);for(var l=Math.ceil(Math.random()*a),h=0;h<l&&!(0===i&&-1===e[0]||0===r&&-1===e[1]||i===t-1&&1===e[0]||r===t-1&&1===e[1]);)s[i][r]=0,i+=e[0],r+=e[1],h++;h&&(o=e,n--)}return s}},{key:"onClick",value:function(e){this.forceUpdate()}},{key:"render",value:function(){var e=this.generateMap();return Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:"form-group row text-center",children:[Object(d.jsxs)("div",{className:"inline",children:[Object(d.jsx)("label",{children:"dimensions"}),Object(d.jsx)("input",{className:"form-control",name:"dimensions",type:"text",maxLength:"2",value:this.state.dimensions,onChange:this.onChange})]}),Object(d.jsxs)("div",{className:"inline",children:[Object(d.jsx)("label",{children:"maxTunnels"}),Object(d.jsx)("input",{className:"form-control",name:"maxTunnels",type:"text",maxLength:"3",value:this.state.maxTunnels,onChange:this.onChange})]}),Object(d.jsxs)("div",{className:"inline",children:[Object(d.jsx)("label",{children:"maxLength"}),Object(d.jsx)("input",{className:"form-control",name:"maxLength",type:"text",maxLength:"3",value:this.state.maxLength,onChange:this.onChange})]})]}),Object(d.jsx)("table",{className:"grid",onClick:this.onClick,children:Object(d.jsx)("thead",{children:e.map((function(e,t){return Object(d.jsx)("tr",{children:e.map((function(e,t){return Object(d.jsx)("td",{className:1===e?"wall":"tunnel",children:" "},t)}))},t)}))})})]})}}]),n}(a.Component),b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),s(e),i(e),r(e)}))};r.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(j,{})}),document.getElementById("root")),b()}},[[17,1,2]]]);
//# sourceMappingURL=main.53ae871d.chunk.js.map