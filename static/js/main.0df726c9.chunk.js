(window.webpackJsonpsamegame=window.webpackJsonpsamegame||[]).push([[0],{103:function(e,t,n){e.exports=n.p+"static/media/red.fw.1ddc275d.png"},104:function(e,t,n){e.exports=n.p+"static/media/blue.fw.6c33a757.png"},105:function(e,t,n){e.exports=n.p+"static/media/green.fw.c857b8ef.png"},106:function(e,t,n){e.exports=n.p+"static/media/yellow.fw.57c30b6e.png"},107:function(e,t,n){e.exports=n.p+"static/media/orange.fw.5a79c073.png"},108:function(e,t,n){e.exports=n.p+"static/media/cyan.fw.d2cdd8c8.png"},109:function(e,t,n){e.exports=n.p+"static/media/purple.fw.661f2f96.png"},110:function(e,t,n){e.exports=n.p+"static/media/blank.fw.b8bd58ca.png"},128:function(e,t,n){e.exports=n(202)},133:function(e,t,n){},199:function(e,t,n){},202:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),i=n(4),o=n.n(i);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(133);var c=n(102),s=n(20),u=n(21),l=n(30),p=n(29),h=n(32),d=n(78),f=n(12),m=n.n(f),b=n(82),g=n(203),v=n(206),k=n(207),O=n(103),j=n.n(O),y=n(104),C=n.n(y),w=n(105),E=n.n(w),S=n(106),x=n.n(S),z=n(107),G=n.n(z),T=n(108),B=n.n(T),D=n(109),P=n.n(D),A=n(110),R=n.n(A),I=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e,t=this;switch(this.props.no){case 1:e=C.a;break;case 2:e=j.a;break;case 3:e=E.a;break;case 4:e=x.a;break;case 5:e=G.a;break;case 6:e=B.a;break;case 7:e=P.a;break;default:e=R.a}return a.createElement("td",null,a.createElement("img",{onClick:function(){return t.props.onClick(t.props.no)},src:e,alt:""+this.props.no}))}}]),t}(a.Component),M=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"onTileClick",value:function(e,t){this.props.onClick(e,t)}},{key:"render",value:function(){var e=this,t=[];return m.a.forEach(this.props.grid,(function(n,a){var i=[];m.a.forEach(n,(function(t,n){i.push(r.a.createElement(I,{onClick:function(){return e.onTileClick(a,n)},no:t,key:Math.pow(2,a)*Math.pow(3,n)}))})),t.push(r.a.createElement("tr",{key:a},i))})),r.a.createElement("table",{className:this.props.className},r.a.createElement("tbody",null,t))}}]),t}(r.a.Component),N=n(61),J=function(){function e(t){Object(s.a)(this,e),this.data=void 0,this.data=t}return Object(u.a)(e,[{key:"getData",value:function(){return m.a.cloneDeep(this.data)}},{key:"getAdjacentTiles",value:function(e,t){var n=this.data.length,a=[];return t>0&&a.push([e,t-1]),t<n-1&&a.push([e,t+1]),e>0&&a.push([e-1,t]),e<n-1&&a.push([e+1,t]),a}},{key:"select",value:function(t,n){var a=this.getData(),r=a[t][n];if(0===r)return new e(a);var i=this.getAdjacentTiles(t,n);if(0===(i=m.a.filter(i,(function(e){var t=Object(N.a)(e,2),n=t[0],i=t[1];return a[n][i]===r}))).length)return new e(a);for(var o=a.length,c=[[t,n]];c.length>0;){var s=c.pop();if(!s)break;var u=s,l=Object(N.a)(u,2),p=l[0],h=l[1];a[p][h]=0;var d=this.getAdjacentTiles(p,h);d=m.a.filter(d,(function(e){var t=Object(N.a)(e,2),n=t[0],i=t[1];return a[n][i]===r})),m.a.forEach(d,(function(e){return c.push(e)}))}a=m.a.unzip(a);for(var f=0;f<o;f++)for(var b=0,g=o-1;g>=0;g--)if(0===a[f][g])b++;else{var v=a[f][g];a[f][g]=0,a[f][g+b]=v}for(var k=0,O=o-1;O>=0;O--)if(0===m.a.reduce(a[O],(function(e,t){return e+t}),0))k++;else{var j=m.a.clone(a[O]);a[O]=m.a.map(a[O],(function(e){return 0})),a[O+k]=j}return new e(a=m.a.unzip(a))}}]),e}(),W=n(205),$=n(204),q=g.a.Text,F=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return a.createElement("div",null,a.createElement(W.a,{onClick:this.props.onRandomiseGridClick,type:"primary"},"Randomise grid"),a.createElement(v.a,null,a.createElement(k.a,{span:11},a.createElement(q,null,"Grid size (",this.props.gridSize,")"),a.createElement($.a,{min:3,max:15,onChange:this.props.onGridSizeChange,value:this.props.gridSize})),a.createElement(k.a,{span:2}),a.createElement(k.a,{span:11},a.createElement(q,null,"Block count (",this.props.blockCount,")"),a.createElement($.a,{min:2,max:7,onChange:this.props.onBlockCountChange,value:this.props.blockCount}))))}}]),t}(a.Component);n(199);function H(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function K(){var e=Object(d.a)(["\n    margin-top: 20px;\n"]);return K=function(){return e},e}function L(){var e=Object(d.a)(["\n    margin: 10px;\n"]);return L=function(){return e},e}var Q=g.a.Title,U=(g.a.Text,{display:"flex",justifyContent:"center"}),V=Object(b.a)(M)(L()),X=Object(b.a)(Q)(K()),Y=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(p.a)(t).call(this,e))).state={grid:void 0!==n.props.startingGrid?n.props.startingGrid:n.randomiseGrid(10,4,!0),gridSize:10,blockCount:4},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"randomiseGrid",value:function(e,t,n){for(var a=[],r=0;r<e;r++){a.push([]);for(var i=0;i<e;i++)a[r].push(m.a.random(1,t))}var o=new J(a);return n||this.setState({grid:new J(a)}),o}},{key:"onTileClick",value:function(e,t){this.setState(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?H(n,!0).forEach((function(t){Object(c.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):H(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},this.state,{grid:this.state.grid.select(e,t)}))}},{key:"onGridSizeChange",value:function(e){var t=parseInt(e.toString());this.randomiseGrid(t,this.state.blockCount,!1),this.setState({gridSize:t})}},{key:"onBlockCountChange",value:function(e){var t=parseInt(e.toString());this.randomiseGrid(this.state.gridSize,t,!1),this.setState({blockCount:t})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement(X,null,"SameGame for React"),r.a.createElement(Q,{level:2},"by Matthew Barnes"),r.a.createElement(v.a,null,r.a.createElement(k.a,{xs:0,md:4}),r.a.createElement(k.a,{xs:{span:24,pull:0},md:{span:6,push:10}},r.a.createElement(F,{gridSize:this.state.gridSize,blockCount:this.state.blockCount,onRandomiseGridClick:function(){return e.randomiseGrid(e.state.gridSize,e.state.blockCount,!1)},onGridSizeChange:this.onGridSizeChange.bind(this),onBlockCountChange:this.onBlockCountChange.bind(this)})),r.a.createElement(k.a,{xs:{span:24,push:0},md:{span:10,pull:6},style:U},r.a.createElement(V,{onClick:this.onTileClick.bind(this),grid:this.state.grid.getData()})),r.a.createElement(k.a,{xs:0,md:4})))}}]),t}(r.a.Component);n(201);o.a.render(r.a.createElement(Y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[128,1,2]]]);
//# sourceMappingURL=main.0df726c9.chunk.js.map