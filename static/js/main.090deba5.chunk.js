(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],{107:function(e,t,n){},14:function(e,t,n){e.exports={base:"PokemonDetails_base__4gi3D",pokemon_name:"PokemonDetails_pokemon_name__1CXrX",pokemon_info:"PokemonDetails_pokemon_info__2XFvk",dark:"PokemonDetails_dark__2UmHI",darker:"PokemonDetails_darker__1ilZm",container:"PokemonDetails_container__3yxyA"}},159:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(10),r=n.n(o),i=n(22),s=n(11),l=n(39),m=n(18),j=(n(107),n(2));var h=function(e){return Object(j.jsxs)("div",{className:"banner",children:[Object(j.jsx)("img",{className:"banner-image",alt:"Gif Pok\xe9mon",src:"https://media.giphy.com/media/mMvxVzlCFabUWnuyBA/source.gif"}),Object(j.jsx)("h1",{className:"banner-title",children:"Pok\xe9dex"})]})},u=n(201),d=n(192),p=n(92),b=n.n(p),f=n(93),O=n.n(f);var k=function(e){return Object(j.jsxs)(u.a,{exclusive:!0,"aria-label":"Tema",value:e.theme,onChange:function(t,n){localStorage.setItem("theme",n),e.changeTheme(n)},style:{margin:"16px"},children:[Object(j.jsx)(d.a,{value:"light","aria-label":"Tema claro",children:Object(j.jsx)(b.a,{})}),Object(j.jsx)(d.a,{value:"dark","aria-label":"Tema escuro",children:Object(j.jsx)(O.a,{})})]})},x=n(194),g=n(195),v=n(200),_=n(196),y=n(193),w=Object(y.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)}}}));var N=function(e){var t=w(),n=Object(a.useRef)();return Object(j.jsx)(x.a,{position:"sticky",children:Object(j.jsxs)(g.a,{children:[Object(j.jsx)(v.a,{id:"outlined-search",label:"Nome ou n\xfamero",type:"search",variant:"outlined",className:t.formControl,color:"secondary",defaultValue:"",inputRef:n}),Object(j.jsx)(_.a,{variant:"contained",color:"primary",onClick:function(t){e.setTextQuery(n.current.value),e.setOffset(0)},children:"BUSCAR"}),Object(j.jsx)(k,{theme:e.theme,changeTheme:e.changeTheme})]})})};var C=function(e){return Object(j.jsx)(_.a,{variant:"contained",color:"primary",disabled:e.endOflist,onClick:e.loadMore,children:"CARREGAR MAIS"})},P=n(20),T=n.n(P),S=n(197),E=n(161),A=n(198);var I=function(e){return Object(j.jsxs)("div",{className:[T.a.text_center,T.a.gutterBottom].join(" "),children:[Object(j.jsx)(S.a,{container:!0,justifyContent:"center",spacing:6,className:T.a.gutterBottom,children:e.pokemons.map((function(t){return parseInt(t.number||t.pokemon.url.split("/").filter((function(e){return""!==e})).pop())<899?Object(j.jsx)(S.a,{item:!0,children:Object(j.jsx)(i.b,{to:"/pokemon/".concat(t.name.toLowerCase()||t.pokemon.name.toLowerCase().replace(" ","-")),className:T.a.no_decoration,children:Object(j.jsxs)(E.a,{elevation:3,className:"dark"===e.theme?T.a.dark:T.a.light,children:[Object(j.jsx)("img",{src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/".concat(t.number||t.pokemon.url.split("/").filter((function(e){return""!==e})).pop(),".png"),alt:t.name||t.pokemon.name,style:{width:"340px"}}),Object(j.jsx)(A.a,{variant:"h6",className:"dark"===e.theme?[T.a.dark,T.a.pokemon_name].join(" "):[T.a.light,T.a.pokemon_name].join(" "),children:"".concat(t.name||t.pokemon.name," #").concat(t.number||t.pokemon.url.split("/").filter((function(e){return""!==e})).pop())})]})})},t.name||t.pokemon.name):""}))}),e.button&&Object(j.jsx)(C,{loadMore:e.loadMore,endOflist:e.endOflist})]})},B=n(94),D=n.n(B),M=n(95),R=n(199),U=n(33),z=n.n(U),F=Object(M.a)({palette:{primary:{main:"#2E5BA4"},secondary:{main:"#000000"}}});function H(e){return e.charAt(0).toUpperCase()+e.slice(1)}var W=function(e){var t=Object(a.useState)([]),n=Object(m.a)(t,2),o=n[0],r=n[1],i=Object(a.useState)(0),s=Object(m.a)(i,2),u=s[0],d=s[1],p=Object(a.useState)(!1),b=Object(m.a)(p,2),f=b[0],O=b[1],k=Object(a.useState)(localStorage.getItem("theme")||"light"),x=Object(m.a)(k,2),g=x[0],v=x[1],_=Object(a.useState)(""),y=Object(m.a)(_,2),w=y[0],C=y[1];return!localStorage.getItem("theme")&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(v("dark"),localStorage.setItem("theme","dark")),c.a.useEffect((function(){var e=48;0===u&&r([]),u>=864&&(O(!0),e=34),""!==w?(e=898,D.a.get("https://pokeapi.co/api/v2/pokemon/?limit=".concat(e,"&offset=").concat(u)).then((function(e){var t=e.data.results;(t=t.filter((function(e){return e.name.startsWith(w)||e.url.split("/").filter((function(e){return""!==e})).pop().startsWith(w)}))).forEach((function(e){r((function(t){return[].concat(Object(l.a)(t),[{name:H(e.name),number:e.url.split("/").filter((function(e){return""!==e})).pop()}])}))}))}))):z.a.Pokemon.list(e,u).then((function(e){console.log(e),e.results.forEach((function(e){r((function(t){return[].concat(Object(l.a)(t),[{name:H(e.name),number:e.url.split("/").filter((function(e){return""!==e})).pop()}])}))}))}))}),[u,w]),Object(j.jsx)(R.a,{theme:F,children:Object(j.jsxs)("div",{className:"dark"===g&&"dark",children:[Object(j.jsx)(h,{}),Object(j.jsx)(N,{theme:g,changeTheme:v,setTextQuery:C,setOffset:d}),Object(j.jsx)("div",{className:"content-wrapper ".concat("dark"===g&&"dark"),children:Object(j.jsx)(I,{theme:g,pokemons:o,endOflist:f,loadMore:function(){d(u+48)},button:!0})})]})})};var X=function(e){return Object(j.jsx)(x.a,{position:"sticky",style:{marginBottom:"16px"},children:Object(j.jsxs)(g.a,{children:[Object(j.jsx)(i.b,{to:"/",children:Object(j.jsx)(A.a,{variant:"h4",style:{color:"#fff"},children:"Pok\xe9dex"})}),Object(j.jsx)(k,{theme:e.theme,changeTheme:e.changeTheme})]})})},q=n(14),J=n.n(q);function L(e){return e.charAt(0).toUpperCase()+e.slice(1)}var V=function(e){var t=e.pokemonData;return console.log(t),Object(j.jsx)("div",{children:void 0!==t&&Object(j.jsx)("div",{className:J.a.base,style:{backgroundColor:"transparent"},children:Object(j.jsx)(E.a,{className:"dark"===e.theme&&J.a.dark,children:Object(j.jsxs)(S.a,{container:!0,justifyContent:"center",spacing:2,alignItems:"center",children:[Object(j.jsx)(S.a,{item:!0,style:{width:"50%"},children:Object(j.jsxs)(E.a,{style:{margin:"16px",backgroundImage:"url(https://i.imgur.com/Edg2E1y.jpg)"},children:[Object(j.jsx)("img",{style:{width:"100%"},src:t.sprite,alt:L(t.name)}),Object(j.jsx)(A.a,{variant:"h4",className:J.a.pokemon_name,children:L(t.name)})]})}),Object(j.jsx)(S.a,{item:!0,style:{width:"50%"},children:Object(j.jsxs)(E.a,{style:{padding:"16px",margin:"16px",backgroundColor:"#2E5BA4"},children:[Object(j.jsxs)(A.a,{variant:"h4",className:J.a.pokemon_info,children:["Peso:"," ",1!==t.weight?"".concat(t.weight," quilos"):"".concat(t.weight," quilo")]}),Object(j.jsxs)(A.a,{variant:"h4",className:J.a.pokemon_info,children:["Tamanho:"," ",1!==t.size?"".concat(t.size," metros"):"".concat(t.size," metro")]}),Object(j.jsxs)(A.a,{variant:"h4",className:J.a.pokemon_info,children:["Tipos:"," ",t.types.map((function(e,n){return n!==t.types.length-1?Object(j.jsxs)("span",{children:[Object(j.jsx)(i.b,{to:"/tipo/".concat(e),children:L(e)}),","," "]}):Object(j.jsx)(i.b,{to:"/tipo/".concat(e),children:L(e)})}))]}),Object(j.jsxs)(A.a,{variant:"h4",className:J.a.pokemon_info,children:["Habilidades:"," ",t.abilities.map((function(e,n){return n!==t.abilities.length-1?"".concat(L(e),", "):L(e)}))]}),Object(j.jsxs)(A.a,{variant:"h4",className:J.a.pokemon_info,children:["Velocidade:"," ",t.stats.find((function(e){return"speed"===e.name})).value]}),Object(j.jsxs)(A.a,{variant:"h4",className:J.a.pokemon_info,children:["Defesa:"," ",t.stats.find((function(e){return"defense"===e.name})).value]}),Object(j.jsxs)(A.a,{variant:"h4",className:J.a.pokemon_info,children:["Ataque:"," ",t.stats.find((function(e){return"attack"===e.name})).value]}),Object(j.jsxs)(A.a,{variant:"h4",className:J.a.pokemon_info,children:["HP: ",t.stats.find((function(e){return"hp"===e.name})).value]})]})})]})})})})},G=Object(M.a)({palette:{primary:{main:"#2E5BA4"},secondary:{main:"#000000"}}});var Q=function(e){var t=Object(a.useState)(),n=Object(m.a)(t,2),o=n[0],r=n[1],i=Object(a.useState)(localStorage.getItem("theme")||"light"),s=Object(m.a)(i,2),l=s[0],h=s[1];return c.a.useEffect((function(){z.a.Pokemon.resolve(window.location.href.split("/")[4]).then((function(e){r({sprite:e.sprites.other["official-artwork"].front_default,name:e.name,weight:e.weight/10,size:e.height/10,types:e.types.map((function(e){return e.type.name})),abilities:e.abilities.map((function(e){return e.ability.name})),stats:e.stats.map((function(e){return{name:e.stat.name,value:e.base_stat}}))})})).catch((function(e){console.log("Esse Pok\xe9mon n\xe3o existe \n"+e)}))}),[]),Object(j.jsx)(R.a,{theme:G,children:Object(j.jsxs)("div",{className:"".concat("dark"===l&&J.a.darker," ").concat(J.a.container),children:[Object(j.jsx)(X,{theme:l,changeTheme:h}),Object(j.jsx)(V,{pokemonData:o,theme:l})]})})};function K(e){return e.charAt(0).toUpperCase()+e.slice(1)}var Z=function(e){var t=Object(a.useState)([]),n=Object(m.a)(t,2),o=n[0],r=n[1],i=Object(a.useState)(localStorage.getItem("theme")||"light"),s=Object(m.a)(i,2),h=s[0],u=s[1];return c.a.useEffect((function(){z.a.Type.resolve(window.location.href.split("/")[4]).then((function(e){e.pokemon.forEach((function(e){r((function(t){return[].concat(Object(l.a)(t),[{name:K(e.pokemon.name),number:e.pokemon.url.split("/").filter((function(e){return""!==e})).pop()}])}))}))})).catch((function(e){console.log("Esse tipo n\xe3o existe"+e)}))}),[]),Object(j.jsxs)("div",{className:"dark"===h&&"dark",children:[Object(j.jsx)(X,{theme:h,changeTheme:u}),Object(j.jsxs)("div",{className:"content-wrapper ".concat("dark"===h&&"dark"),children:[Object(j.jsx)(A.a,{variant:"h4",className:"dark"===h&&"dark",children:K(window.location.href.split("/")[4])}),Object(j.jsx)(I,{pokemons:o,theme:h,changeTheme:u})]})]})};var Y=function(){return Object(j.jsxs)(s.c,{children:[Object(j.jsx)(s.a,{path:"/",exact:!0,children:Object(j.jsx)(W,{})}),Object(j.jsx)(s.a,{path:"/pokemon/:pokemon",children:Object(j.jsx)(Q,{})}),Object(j.jsx)(s.a,{path:"/tipo/:type",children:Object(j.jsx)(Z,{})}),Object(j.jsx)(s.a,{path:"/",children:Object(j.jsx)("div",{children:"Page not Found"})})]})};r.a.render(Object(j.jsx)(i.a,{children:Object(j.jsx)(Y,{})}),document.getElementById("root"))},20:function(e,t,n){e.exports={dark:"PokemonCard_dark__2woo1",pokemon_name:"PokemonCard_pokemon_name__3X1wH",gutterBottom:"PokemonCard_gutterBottom__13K6d",text_center:"PokemonCard_text_center__JLi0t",no_decoration:"PokemonCard_no_decoration__2l7vc",container:"PokemonCard_container__6h9nF"}}},[[159,1,2]]]);
//# sourceMappingURL=main.090deba5.chunk.js.map