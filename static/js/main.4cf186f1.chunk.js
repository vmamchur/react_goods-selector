(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{14:function(t,e,c){},16:function(t,e,c){"use strict";c.r(e);var s=c(4),o=c.n(s),n=c(5),a=c(6),r=c(8),i=c(7),d=c(1),l=c.n(d),u=(c(13),c(14),c(2)),b=c.n(u),j=c(0),h=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],m=function(t){Object(r.a)(c,t);var e=Object(i.a)(c);function c(){var t;Object(n.a)(this,c);for(var s=arguments.length,o=new Array(s),a=0;a<s;a++)o[a]=arguments[a];return(t=e.call.apply(e,[this].concat(o))).state={selectGood:"Jam"},t.addGood=function(e){t.setState({selectGood:e})},t.removeGood=function(){t.setState({selectGood:""})},t.classGood=function(t,e){return t===e&&"has-background-success-light"},t}return Object(a.a)(c,[{key:"render",value:function(){var t=this,e=this.state.selectGood,c=this.addGood,s=this.removeGood,o=this.classGood;return Object(j.jsxs)("main",{className:"section container",children:[Object(j.jsxs)("h1",{className:b()("title",{"is-flex":e},{"is-align-items-center":e}),children:[e?"".concat(e," is selected"):"No goods selected",e&&Object(j.jsx)("button",{"data-cy":"ClearButton",type:"button",className:"delete ml-3",onClick:function(){t.setState(s)}})]}),Object(j.jsx)("table",{className:"table",children:Object(j.jsx)("tbody",{children:h.map((function(t){return Object(j.jsxs)("tr",{"data-cy":"Good",className:b()(o(e,t)),children:[Object(j.jsx)("td",{children:Object(j.jsx)("button",{"data-cy":e===t?"RemoveButton":"AddButton",type:"button",className:b()("button",{"is-info":e===t}),onClick:e===t?s:function(){return c(t)},children:e===t?"-":"+"})}),Object(j.jsx)("td",{"data-cy":"GoodTitle",className:"is-vcentered",children:t})]},t)}))})})]})}}]),c}(l.a.Component);o.a.render(Object(j.jsx)(m,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.4cf186f1.chunk.js.map