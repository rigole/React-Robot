(this["webpackJsonpmonsters-rolodex"]=this["webpackJsonpmonsters-rolodex"]||[]).push([[0],[,,,,,,,,,,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},,function(e,n,t){},function(e,n,t){"use strict";t.r(n);var i=t(1),a=t.n(i),r=t(4),c=t.n(r),s=(t(13),t(5)),o=t(6),l=t(2),h=t(8),u=t(7),d=(t(14),t(15),t(16),t(0)),j=function(e){return Object(d.jsxs)("div",{className:"card-container",children:[Object(d.jsx)("img",{alt:"monster",src:"https://robohash.org/".concat(e.billionaire.id,"1?set=set2&size=180x180")}),Object(d.jsxs)("h2",{children:[" ",e.billionaire.name," "]}),Object(d.jsxs)("p",{children:[" ",e.billionaire.email," "]})]})},b=function(e){return Object(d.jsx)("div",{className:"card-list",children:e.billionaires.map((function(e){return Object(d.jsx)(j,{billionaire:e},e.id)}))})},f=(t(18),function(e){var n=e.placeholder,t=e.handleChange;return Object(d.jsx)("input",{className:"search",type:"search",placeholder:n,onChange:t})}),p=function(e){Object(h.a)(t,e);var n=Object(u.a)(t);function t(){var e;return Object(s.a)(this,t),(e=n.call(this)).state={billionaires:[],searchField:""},e.handleChange=e.handleChange.bind(Object(l.a)(e)),e}return Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(n){return e.setState({billionaires:n})}))}},{key:"handleChange",value:function(e){this.setState({searchField:e.target.value})}},{key:"render",value:function(){var e=this.state,n=e.billionaires,t=e.searchField,i=n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"Monsters Rolodex"}),Object(d.jsx)(f,{type:"search",placeholder:"Search monsters",handleChange:this.handleChange}),Object(d.jsx)(b,{billionaires:i})]})}}]),t}(i.Component),m=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,20)).then((function(n){var t=n.getCLS,i=n.getFID,a=n.getFCP,r=n.getLCP,c=n.getTTFB;t(e),i(e),a(e),r(e),c(e)}))};c.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(p,{})}),document.getElementById("root")),m()}],[[19,1,2]]]);
//# sourceMappingURL=main.306c2c26.chunk.js.map