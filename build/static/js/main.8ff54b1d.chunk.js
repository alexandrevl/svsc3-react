(this.webpackJsonpsvsc=this.webpackJsonpsvsc||[]).push([[0],{108:function(e,t){},111:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(10),s=a.n(i),r=(a(65),a(7)),c=(a(66),a(26),a(15)),o=a(16),m=a(18),u=a(17),d=a(19),g=a(50),E=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={gameSettings:a.props.gameSettings},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentWillUpdate",value:function(e){this.state.gameSettings.question.id!==e.gameSettings.question.id&&this.setState({gameSettings:e.gameSettings})}},{key:"_onReady",value:function(e){}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(g.a,{videoId:this.state.gameSettings.question.idVideo,opts:{height:"450",width:"800",playerVars:{autoplay:0,controls:1}},onReady:this._onReady}))}}]),t}(n.Component),h=a(118),f=a(117),v=l.a.createContext(),w=l.a.createContext(),b=a(53),p=a.n(b);function S(){var e=Object(n.useContext)(w),t=Object(n.useContext)(v),a=Object(n.useState)(!1),i=Object(r.a)(a,2),s=i[0],c=i[1];function o(){c(!1)}return Object(n.useEffect)((function(){}),[e]),l.a.createElement("div",null,l.a.createElement(h.a,{variant:"outline-primary",onClick:function(){c(!0)}},"RESULTADO"),l.a.createElement(f.a,{show:s,onHide:o,animation:!1,size:"md","aria-labelledby":"contained-modal-title-vcenter",centered:!0},l.a.createElement(f.a.Header,{closeButton:!0},l.a.createElement(f.a.Title,{id:"contained-modal-title-vcenter"},l.a.createElement("div",{className:"text-center"},"Resultado da rodada ",e.round))),l.a.createElement(f.a.Body,null,l.a.createElement("div",{className:"text-center"},l.a.createElement("img",{src:p.a,width:"400vw",alt:"VS"}),l.a.createElement("br",null),l.a.createElement("h1",null,e.question.isStreamerWinner||e.question.isChatWinner?e.question.isStreamerWinner?"Streamer VENCEU":e.question.isChatWinner?"Chat VENCEU":void 0:"Ainda ningu\xe9m"))),l.a.createElement(f.a.Footer,null,l.a.createElement(h.a,{variant:"success",onClick:function(){(e.question.isStreamerWinner||e.question.isChatWinner)&&(o(),t.emit("nextQuestion"))}},"Pr\xf3xima Rodada"))))}var j=a(9),x=a(113),y=a(114),O=a(115),q=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={showModal:!1,socket:null},a.startRound=a.startRound.bind(Object(j.a)(a)),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"startRound",value:function(){this.state.socket.emit("nextRound")}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement(v.Consumer,null,(function(t){e.state.socket!==t&&e.setState({socket:t})})),l.a.createElement(w.Consumer,null,(function(t){e.state.gameSettings?e.state.gameSettings.question.totalVotes!==t.question.totalVotes&&e.setState({gameSettings:t}):e.setState({gameSettings:t})})),l.a.createElement(x.a,null,l.a.createElement(y.a,{className:"justify-content-md-center"},l.a.createElement(O.a,{xs:!0,lg:"12",className:"text-center"},l.a.createElement(h.a,{variant:"success",size:"lg",onClick:this.startRound},"Iniciar rodada")))))}}]),t}(n.Component),N=a(116),k={"\ud83d\udc7e":"alien-monster","\ud83d\udca3":"bomb","\ud83e\udd21":"clown-face","\ud83d\udca8":"dash-symbol","\ud83d\udc7d":"extraterrestrial-alien","\ud83d\ude31":"face-screaming-in-fear","\ud83e\udd20":"face-with-cowboy-hat","\ud83e\udd76":"freezing-face","\u2b50":"white-medium-star","\ud83e\udd29":"grinning-face-with-star-eyes","\ud83d\udca5":"collision-symbol","\ud83e\udd17":"hugging-face","\ud83d\udcaf":"hundred-points-symbol","\ud83d\udc7a":"japanese-goblin","\ud83d\udc79":"japanese-ogre","\ud83d\udc8c":"love-letter","\ud83e\udd22":"nauseated-face","\ud83d\udca9":"pile-of-poo","\ud83e\udd16":"robot-face","\ud83e\udd2c":"serious-face-with-symbols-covering-mouth","\u2620\ufe0f":"skull-and-crossbones","\ud83d\udc80":"skull","\ud83d\ude07":"smiling-face-with-halo","\ud83d\ude08":"smiling-face-with-horns","\ud83d\ude4a":"speak-no-evil-monkey","\ud83d\udca6":"splashing-sweat-symbol","\ud83e\udd14":"thinking-face","\ud83d\udc84":"lipstick","\ud83d\ude43":"upside-down-face","\ud83d\udc4b":"waving-hand-sign","\ud83c\udd71\ufe0f":"negative-squared-latin-capital-letter","\ud83d\udea8":"police-cars-revolving-light"};function C(){var e=Object(n.useContext)(w),t=Object(n.useState)(null),a=Object(r.a)(t,2),i=a[0],s=a[1],c=Object(n.useState)({title:"Pause",variant:"outline-warning"}),o=Object(r.a)(c,2),m=o[0],u=o[1];function d(e){return"img/emojis/"+k[e]+".png"}return Object(n.useEffect)((function(){var t=null;t=!1===e.question.isPlay?{title:"Play",variant:"outline-primary"}:{title:"Pause",variant:"outline-warning"},u(t)}),[e]),e.question.isActive?l.a.createElement("div",null,l.a.createElement(w.Provider,{value:e},l.a.createElement(v.Consumer,null,(function(e){s(e)})),l.a.createElement(x.a,null,l.a.createElement(y.a,{className:"justify-content-md-center"},l.a.createElement("h4",null,e.question.title," (",e.question.totalVotes,")")),l.a.createElement(y.a,{className:"justify-content-md-center"},l.a.createElement(N.a,{striped:!0,bordered:!0,hover:!0,variant:"dark"},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",{className:"text-center align-middle"},l.a.createElement("img",{src:d(e.question.answers[0].emoji),width:"45vw",alt:"img1"})),l.a.createElement("td",{className:"text-left align-middle"},l.a.createElement("h4",null,e.question.answers[0].text)),l.a.createElement("td",{className:"text-left align-middle"},l.a.createElement("h4",null,e.question.answers[0].votes>0?(100*e.question.answers[0].votes/e.question.totalVotes).toFixed(1):0,"%")),l.a.createElement("td",{className:"text-center align-middle"},l.a.createElement("img",{src:d(e.question.answers[1].emoji),width:"45vw",alt:"img1"})),l.a.createElement("td",{className:"text-left align-middle"},l.a.createElement("h4",null,e.question.answers[1].text)),l.a.createElement("td",{className:"text-left align-middle"},l.a.createElement("h4",null,e.question.answers[1].votes>0?(100*e.question.answers[1].votes/e.question.totalVotes).toFixed(1):0,"%"))),l.a.createElement("tr",null,l.a.createElement("td",{className:"text-center align-middle"},l.a.createElement("img",{src:d(e.question.answers[2].emoji),width:"45vw",alt:"img1"})),l.a.createElement("td",{className:"text-left align-middle"},l.a.createElement("h4",null,e.question.answers[2].text)),l.a.createElement("td",{className:"text-left align-middle"},l.a.createElement("h4",null,e.question.answers[2].votes>0?(100*e.question.answers[2].votes/e.question.totalVotes).toFixed(1):0,"%")),l.a.createElement("td",{className:"text-center align-middle"},l.a.createElement("img",{src:d(e.question.answers[3].emoji),width:"45vw",alt:"img1"})),l.a.createElement("td",{className:"text-left align-middle"},l.a.createElement("h4",null,e.question.answers[3].text)),l.a.createElement("td",{className:"text-left align-middle"},l.a.createElement("h4",null,e.question.answers[3].votes>0?(100*e.question.answers[3].votes/e.question.totalVotes).toFixed(1):0,"%")))))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(y.a,{className:"justify-content-md-center"},l.a.createElement(O.a,{xs:!0,lg:"6",className:"text-center"},l.a.createElement(h.a,{variant:m.variant,onClick:function(){var t=null;t=!1===!e.question.isPlay?{title:"Play",variant:"outline-primary"}:{title:"Pause",variant:"outline-warning"},u(t),i.emit("pause-play")}},m.title)),l.a.createElement(O.a,{xs:!0,lg:"6",className:"text-center"},l.a.createElement(S,{gameSettings:e})))))):l.a.createElement("div",null,l.a.createElement(q,{gameSettings:e}))}var V=a(56),P=a.n(V),R=a(57),B=a.n(R),W=a(119),U=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={gameSettings:a.props.gameSettings},a.round=a.round.bind(Object(j.a)(a)),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"round",value:function(){return this.state.gameSettings.winner?"FINAL":"Round "+this.state.gameSettings.round}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement(w.Consumer,null,(function(t){e.state.gameSettings?e.state.gameSettings.question.totalVotes!==t.question.totalVotes&&e.setState({gameSettings:t}):e.setState({gameSettings:t})})),l.a.createElement(x.a,{fluid:!0},l.a.createElement(y.a,null,l.a.createElement(O.a,{xs:!0,lg:"5"},l.a.createElement(W.a,{style:{height:"30px"}},l.a.createElement(W.a,{variant:"danger",now:100-this.state.gameSettings.lifeBar.lifeStreamer,key:1}),l.a.createElement(W.a,{variant:"warning",now:this.state.gameSettings.lifeBar.lifeStreamer,key:2}))),l.a.createElement(O.a,{xs:!0,lg:"2"},l.a.createElement("img",{src:B.a,width:"45vw",alt:"VS"})),l.a.createElement(O.a,{xs:!0,lg:"5"},l.a.createElement(W.a,{style:{height:"30px"}},l.a.createElement(W.a,{variant:"warning",now:this.state.gameSettings.lifeBar.lifeChat,key:1}),l.a.createElement(W.a,{variant:"danger",now:100-this.state.gameSettings.lifeBar.lifeChat,key:2})))),l.a.createElement(y.a,null,l.a.createElement(O.a,{xs:!0,lg:"5",className:"text-left"},l.a.createElement("h4",null,"Streamer")),l.a.createElement(O.a,{xs:!0,lg:"2",className:"text-center"},l.a.createElement("h4",null,this.round())),l.a.createElement(O.a,{xs:!0,lg:"5",className:"text-right"},l.a.createElement("h4",null,"Chat")))))}}]),t}(n.Component),I=a(58),A=a.n(I);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement((function(){var e=Object(n.useState)(null),t=Object(r.a)(e,2),a=t[0],i=t[1],s=Object(n.useState)({display:"flex",justifyContent:"center",alignItems:"center",width:"..",height:".."}),c=Object(r.a)(s,1)[0],o=Object(n.useState)(null),m=Object(r.a)(o,2),u=m[0],d=m[1],g=Object(n.useState)(!1),h=Object(r.a)(g,2),f=h[0],b=h[1],p=Object(n.useState)(!1),S=Object(r.a)(p,2),j=S[0],q=S[1];return Object(n.useEffect)((function(){var e=window.location.pathname.split("/")[2];console.log(window.location);var t="http://localhost:21227?idLive="+e+"&now="+Date.now();window.location.hostname.includes("mrguinas")&&(t=window.location.protocol+"//mrguinas.com.br:21227?idLive="+e+"&now="+Date.now()),console.log(t);var a=P()(t);q(!0),i(a),a.on("gameSettings",(function(e){console.log(e),d(e),b(!0)})),a.on("youtubeOff",(function(){q(!0),b(!1)}))}),[]),f?u.winner?l.a.createElement("div",{className:"App"},l.a.createElement(w.Provider,{value:u},l.a.createElement(v.Provider,{value:a},l.a.createElement(U,{gameSettings:u}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(x.a,{fluid:!0},l.a.createElement(y.a,{className:"justify-content-md-center"},l.a.createElement(O.a,null,l.a.createElement("img",{src:A.a,width:"600vw",alt:"VS"}))),l.a.createElement("br",null),l.a.createElement(y.a,{className:"justify-content-md-center"},l.a.createElement(O.a,null,l.a.createElement("h1",null,l.a.createElement("b",null,function(){return"O "+this.state.gameSettings.winner+" VENCEU"}())))))))):l.a.createElement("div",{className:"App"},l.a.createElement(w.Provider,{value:u},l.a.createElement(v.Provider,{value:a},l.a.createElement(U,{gameSettings:u}),l.a.createElement(x.a,{fluid:!0},l.a.createElement(y.a,{className:"justify-content-md-center"},l.a.createElement(O.a,null,l.a.createElement(E,{gameSettings:u,style:c}))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(y.a,{className:"justify-content-md-center"},l.a.createElement(O.a,null,l.a.createElement(C,{gameSettings:u}))))))):l.a.createElement("div",null,j?"Utilize http://"+window.location.hostname+"/streamervschat/IDLIVEYOUTUBE":"Carregando...")}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},53:function(e,t,a){e.exports=a.p+"static/media/trophy.d9db92ab.gif"},57:function(e,t,a){e.exports=a.p+"static/media/vs.2433496f.png"},58:function(e,t,a){e.exports=a.p+"static/media/victory.59d065af.gif"},60:function(e,t,a){e.exports=a(111)},65:function(e,t,a){},66:function(e,t,a){}},[[60,1,2]]]);
//# sourceMappingURL=main.8ff54b1d.chunk.js.map