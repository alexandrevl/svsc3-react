(this.webpackJsonpsvsc=this.webpackJsonpsvsc||[]).push([[0],{108:function(e,t){},111:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(9),s=a.n(r),i=(a(65),a(6)),c=(a(66),a(21),l.a.createContext()),m=a(45),o=a(46),u=a(57),E=a(47),d=a(58),v=a(48);n.Component,a(113);var g=a(119),f=a(118),w=l.a.createContext(),h=a(52),x=a.n(h);function b(){var e=Object(n.useContext)(c),t=Object(n.useContext)(w),a=Object(n.useState)(!1),r=Object(i.a)(a,2),s=r[0],m=r[1];function o(){m(!1)}return Object(n.useEffect)((function(){}),[e]),l.a.createElement("div",null,l.a.createElement(g.a,{variant:"outline-primary",onClick:function(){m(!0)}},"RESULTADO"),l.a.createElement(f.a,{show:s,onHide:o,animation:!1,size:"md","aria-labelledby":"contained-modal-title-vcenter",centered:!0},l.a.createElement(f.a.Header,{closeButton:!0},l.a.createElement(f.a.Title,{id:"contained-modal-title-vcenter"},l.a.createElement("div",{className:"text-center"},"Resultado da rodada ",e.round))),l.a.createElement(f.a.Body,null,l.a.createElement("div",{className:"text-center"},l.a.createElement("img",{src:x.a,width:"400vw",alt:"VS"}),l.a.createElement("br",null),l.a.createElement("h1",null,e.question.isStreamerWinner||e.question.isChatWinner?e.question.isStreamerWinner?"Streamer VENCEU":e.question.isChatWinner?"Chat VENCEU":void 0:"Ainda ningu\xe9m"))),l.a.createElement(f.a.Footer,null,l.a.createElement(g.a,{variant:"success",onClick:function(){(e.question.isStreamerWinner||e.question.isChatWinner)&&(o(),t.emit("nextQuestion"))}},"Pr\xf3xima Rodada"))))}var p=a(114),N=a(115),j=a(116);function y(){var e=Object(n.useContext)(w);return l.a.createElement("div",null,l.a.createElement(p.a,null,l.a.createElement(N.a,{className:"justify-content-md-center"},l.a.createElement(j.a,{xs:!0,lg:"12",className:"text-center"},l.a.createElement(g.a,{variant:"success",size:"lg",onClick:function(){e.emit("nextRound")}},"Iniciar rodada")))))}var q=a(117),O={"\ud83d\udc7d":"alien.svg","\ud83e\udd21":"clown_face.svg","\ud83d\udc51":"crown.svg","\ud83d\udc7b":"ghost.svg","\ud83c\udf47":"grapes.svg","\ud83c\udf54":"hamburguer.svg","\ud83d\udc8b":"kiss.svg","\ud83d\udc4c":"ok_hand.svg","\ud83d\udca9":"pile_of_poo.svg","\ud83c\udf4d":"pineapple.svg","\ud83c\udf57":"poutlry_leg.svg","\u2764\ufe0f":"red_heart.svg","\ud83d\udc8d":"ring.svg","\ud83e\udd16":"robot_face.svg","\ud83d\udc80":"skull.svg","\ud83d\ude0d":"smiling_face_with_heart_eyes.svg","\ud83d\ude0e":"smiling_face_with_sunglasses.svg","\ud83c\udf53":"strawberry.svg","\ud83d\udc4d":"thumbs_up.svg","\ud83c\udf49":"watermelon.svg"};function C(){var e=Object(n.useContext)(c),t=Object(n.useState)(null),a=Object(i.a)(t,2),r=a[0],s=a[1],m=Object(n.useState)({title:"Pause",variant:"outline-warning"}),o=Object(i.a)(m,2),u=o[0],E=o[1];function d(e){return"img/emojis/"+O[e]}return Object(n.useEffect)((function(){var t=null;t=!1===e.question.isPlay?{title:"Play",variant:"outline-primary"}:{title:"Pause",variant:"outline-warning"},E(t)}),[e]),e.question.isActive?l.a.createElement("div",null,l.a.createElement(c.Provider,{value:e},l.a.createElement(w.Consumer,null,(function(e){s(e)})),l.a.createElement(p.a,null,l.a.createElement(N.a,{className:"justify-content-md-center"},l.a.createElement("h4",null,e.question.title," (",e.question.totalVotes,")")),l.a.createElement(N.a,{className:"justify-content-md-center"},l.a.createElement(q.a,{striped:!0,bordered:!0,hover:!0,variant:"dark"},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",{className:"text-center align-middle"},l.a.createElement("img",{src:d(e.question.answers[0].emoji),width:"45vw",alt:"img1"})),l.a.createElement("td",{className:"text-left align-middle"},l.a.createElement("h4",null,e.question.answers[0].text)),l.a.createElement("td",{className:"text-left align-middle"},l.a.createElement("h4",null,e.question.answers[0].votes>0?(100*e.question.answers[0].votes/e.question.totalVotes).toFixed(1):0,"%")),l.a.createElement("td",{className:"text-center align-middle"},l.a.createElement("img",{src:d(e.question.answers[1].emoji),width:"45vw",alt:"img1"})),l.a.createElement("td",{className:"text-left align-middle"},l.a.createElement("h4",null,e.question.answers[1].text)),l.a.createElement("td",{className:"text-left align-middle"},l.a.createElement("h4",null,e.question.answers[1].votes>0?(100*e.question.answers[1].votes/e.question.totalVotes).toFixed(1):0,"%"))),l.a.createElement("tr",null,l.a.createElement("td",{className:"text-center align-middle"},l.a.createElement("img",{src:d(e.question.answers[2].emoji),width:"45vw",alt:"img1"})),l.a.createElement("td",{className:"text-left align-middle"},l.a.createElement("h4",null,e.question.answers[2].text)),l.a.createElement("td",{className:"text-left align-middle"},l.a.createElement("h4",null,e.question.answers[2].votes>0?(100*e.question.answers[2].votes/e.question.totalVotes).toFixed(1):0,"%")),l.a.createElement("td",{className:"text-center align-middle"},l.a.createElement("img",{src:d(e.question.answers[3].emoji),width:"45vw",alt:"img1"})),l.a.createElement("td",{className:"text-left align-middle"},l.a.createElement("h4",null,e.question.answers[3].text)),l.a.createElement("td",{className:"text-left align-middle"},l.a.createElement("h4",null,e.question.answers[3].votes>0?(100*e.question.answers[3].votes/e.question.totalVotes).toFixed(1):0,"%")))))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(N.a,{className:"justify-content-md-center"},l.a.createElement(j.a,{xs:!0,lg:"6",className:"text-center"},l.a.createElement(g.a,{variant:u.variant,onClick:function(){var t=null;t=!1===!e.question.isPlay?{title:"Play",variant:"outline-primary"}:{title:"Pause",variant:"outline-warning"},E(t),r.emit("pause-play")}},u.title)),l.a.createElement(j.a,{xs:!0,lg:"6",className:"text-center"},l.a.createElement(b,{gameSettings:e})))))):l.a.createElement("div",null,l.a.createElement(y,{gameSettings:e}))}var S=a(54),_=a.n(S),k=a(55),P=a.n(k),V=a(120);function B(){var e=Object(n.useContext)(c);return e?l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement(p.a,{fluid:!0},l.a.createElement(N.a,null,l.a.createElement(j.a,{xs:!0,lg:"5"},l.a.createElement(V.a,{style:{height:"30px"}},l.a.createElement(V.a,{variant:"danger",now:e.lifeBar.LIFE_STREAMER-e.lifeBar.lifeStreamer,key:1}),l.a.createElement(V.a,{variant:"warning",now:e.lifeBar.lifeStreamer,key:2}))),l.a.createElement(j.a,{xs:!0,lg:"2"},l.a.createElement("img",{src:P.a,width:"45vw",alt:"VS"})),l.a.createElement(j.a,{xs:!0,lg:"5"},l.a.createElement(V.a,{style:{height:"30px"}},l.a.createElement(V.a,{variant:"warning",now:e.lifeBar.lifeChat,key:1}),l.a.createElement(V.a,{variant:"danger",now:e.lifeBar.LIFE_CHAT-e.lifeBar.lifeChat,key:2})))),l.a.createElement(N.a,null,l.a.createElement(j.a,{xs:!0,lg:"2",className:"text-left"},l.a.createElement("h4",null,"Streamer")),l.a.createElement(j.a,{xs:!0,lg:"3",className:"text-right"}),l.a.createElement(j.a,{xs:!0,lg:"2",className:"text-center"},l.a.createElement("h4",null,e.winner?"FINAL":"Round "+e.round)),l.a.createElement(j.a,{xs:!0,lg:"3",className:"text-left"}),l.a.createElement(j.a,{xs:!0,lg:"2",className:"text-right"},l.a.createElement("h4",null,"Chat"))))):"Alow"}var A=a(56),F=a.n(A);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement((function(){var e=Object(n.useState)(null),t=Object(i.a)(e,2),a=t[0],r=t[1],s=Object(n.useState)(null),m=Object(i.a)(s,2),o=m[0],u=m[1],E=Object(n.useState)(!1),d=Object(i.a)(E,2),v=d[0],g=d[1],f=Object(n.useState)(!1),h=Object(i.a)(f,2),x=h[0],b=h[1];return Object(n.useEffect)((function(){var e=window.location.pathname.split("/")[1];console.log(window.location);var t;t="https://localhost:21211?idLive="+e,console.log(t);var a=_()(t);b(!0),r(a),a.on("gameSettings",(function(e){console.log(e),u(e),g(!0)})),a.on("youtubeOff",(function(){b(!0),g(!1)}))}),[]),v?o.winner?l.a.createElement("div",{className:"App"},l.a.createElement(c.Provider,{value:o},l.a.createElement(w.Provider,{value:a},l.a.createElement(B,{gameSettings:o}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(p.a,{fluid:!0},l.a.createElement(N.a,{className:"justify-content-md-center"},l.a.createElement(j.a,null,l.a.createElement("img",{src:F.a,width:"600vw",alt:"VS"}))),l.a.createElement("br",null),l.a.createElement(N.a,{className:"justify-content-md-center"},l.a.createElement(j.a,null,l.a.createElement("h1",null,l.a.createElement("b",null,"O "+o.winner+" VENCEU")))))))):l.a.createElement("div",{className:"App"},l.a.createElement(c.Provider,{value:o},l.a.createElement(w.Provider,{value:a},l.a.createElement(B,{gameSettings:o}),l.a.createElement(p.a,{fluid:!0},l.a.createElement(N.a,{className:"justify-content-md-center"}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(N.a,{className:"justify-content-md-center"},l.a.createElement(j.a,null,l.a.createElement(C,null))))))):l.a.createElement("div",null,x?"Utilize http://"+window.location.hostname+"/IDLIVEYOUTUBE":"Carregando...")}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},52:function(e,t,a){e.exports=a.p+"static/media/trophy.d9db92ab.gif"},55:function(e,t,a){e.exports=a.p+"static/media/vs.2433496f.png"},56:function(e,t,a){e.exports=a.p+"static/media/victory.59d065af.gif"},60:function(e,t,a){e.exports=a(111)},65:function(e,t,a){},66:function(e,t,a){}},[[60,1,2]]]);
//# sourceMappingURL=main.8a4f8faf.chunk.js.map