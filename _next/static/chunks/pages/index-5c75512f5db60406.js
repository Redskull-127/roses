(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(9037)}])},9037:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return j}});var t=s(5893),i=s(9008),a=s.n(i);s(5675);var r=s(4298),l=s.n(r),c=s(7160),o=s.n(c),m=s(6546),d=s.n(m),h=s(6794),_=s.n(h);function u(){return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("a",{className:_().card,children:(0,t.jsxs)("p",{children:[(0,t.jsx)("i",{className:"fa-solid fa-shuffle"})," Shuffle"]})})})}var f=s(7294);function x(e){let{song:n}=e;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("img",{src:n.track.album.images[2].url,style:{borderRadius:"7px"},alt:"name"}),(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[(0,t.jsx)("audio",{style:{height:"20px",width:"20px"},src:n.track.preview_url,controls:!0,children:"Error Occured"}),(0,t.jsxs)("p",{children:[n.track.name," - ",n.track.album.artists[0].name]})]}),(0,t.jsxs)("a",{href:n.track.uri,children:[" ",(0,t.jsx)("i",{className:"fa fa-spotify",style:{fontSize:"30px"},"aria-hidden":"true"})," "]})]})}function j(){let[e,n]=(0,f.useState)(!1),[s,i]=(0,f.useState)([]),[r,c]=(0,f.useState)(),[m,h]=(0,f.useState)(!1);return(0,f.useEffect)(()=>{document.getElementById("sammygif")&&(document.getElementById("sammygif"),console.log("gif.style.animation")),fetch("/songsRes.json").then(e=>e.json()).then(e=>{i(e.items),c(Math.floor(Math.random()*e.items.length))}).catch(e=>console.log(e))},[]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:o().container,children:[(0,t.jsxs)(a(),{children:[(0,t.jsx)("title",{children:"R O S E S"}),(0,t.jsx)("meta",{name:"description",content:"Meer's Playlist bruh!"}),(0,t.jsx)("link",{rel:"icon",href:"https://img.icons8.com/cute-clipart/64/null/rose.png"})]}),(0,t.jsx)(l(),{src:"https://kit.fontawesome.com/b601b88d20.js",crossOrigin:"anonymous"}),(0,t.jsxs)("main",{className:o().main,children:[(0,t.jsxs)("h1",{className:o().title,children:["Cause she don't like"," ",(0,t.jsx)("a",{href:"https://meertarbani.dev",children:"Roses\uD83C\uDF39"})]}),(0,t.jsx)("div",{className:o().sammy,children:(0,t.jsx)("div",{id:"sammygif",className:o().sammyGif,children:(0,t.jsx)("img",{src:"sammy.gif",alt:"gsif"})})}),(0,t.jsx)("p",{className:o().description,children:"Start listening by clicking below button!"}),s.length>0&&null!=s?(0,t.jsx)("div",{onClick(){n(!0),c(Math.floor(Math.random()*s.length))},children:(0,t.jsx)(u,{})}):null]})]}),(0,t.jsx)("div",{className:d().container,children:(0,t.jsx)("div",{className:d().playbar,children:!1==e?(0,t.jsx)("div",{style:{width:"100%"},children:(0,t.jsx)("h1",{style:{textAlign:"center"},children:"Nothing to play"})}):s.length>0&&null!=s?(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(x,{song:{...s[r]}})}):null})})]})}s(1766),s(7005)},6794:function(e){e.exports={card:"Button_card__VIbN4"}},7160:function(e){e.exports={container:"Home_container__bCOhY",main:"Home_main__nLjiQ",sammy:"Home_sammy__i44kc",sammyGif:"Home_sammyGif__IZhQ7",footer:"Home_footer____T7K",title:"Home_title__T09hD",description:"Home_description__41Owk",code:"Home_code__suPER",grid:"Home_grid__GxQ85",card:"Home_card___LpL1",logo:"Home_logo__27_tb"}},6546:function(e){e.exports={container:"Playbar_container__TAfA1",playbar:"Playbar_playbar__knVTE"}}},function(e){e.O(0,[883,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);