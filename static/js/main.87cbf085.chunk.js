(this["webpackJsonpmemory-card"]=this["webpackJsonpmemory-card"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},,,,function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),a=c(8),r=c.n(a),i=(c(13),c(2)),o=(c(14),c(15),c(0)),l=function(e){var t=e.score,c=e.bestScore;return Object(o.jsxs)("header",{className:"header",children:[Object(o.jsxs)("h1",{className:"logo",children:["Memories of the ",Object(o.jsx)("span",{className:"y-logo",children:"Stone"})]}),Object(o.jsxs)("p",{className:"score",children:["Score: ",t," / BestScore: ",c]})]})},j=c(3),b=function(e){var t=Object(s.useState)(""),c=Object(i.a)(t,2),n=c[0],a=c[1],r=Object(s.useState)(!1),o=Object(i.a)(r,2),l=o[0],j=o[1],b="omgvamp-hearthstone-v1.p.rapidapi.com",u="20fde01268msh5d8c0da7c757035p132b89jsn333820d9cc7b";return Object(s.useEffect)((function(){j(!0),fetch(e,{method:"GET",headers:{"x-rapidapi-key":u,"x-rapidapi-host":b}}).then((function(e){return e.json()})).then((function(e){j(!1),a(e)})).catch((function(e){j(!1),console.error(e)}))}),[e,b,u]),[l,n]},u=function(e,t){var c=Object(s.useState)(null),n=Object(i.a)(c,2),a=n[0],r=n[1],o=Object(s.useState)(0),l=Object(i.a)(o,2),b=l[0],u=l[1],h=Object(s.useState)(!1),d=Object(i.a)(h,2),m=d[0],O=d[1],A=Object(s.useState)(!1),f=Object(i.a)(A,2),x=f[0],g=f[1];return Object(s.useEffect)((function(){if(m&&a){for(var e=Object(j.a)(a),t=[],c=0;c<a.length;c++){var s=Math.floor(Math.random()*e.length),n=e.splice(s,1)[0];t.push(n)}r([].concat(t)),O(!1)}}),[m,a]),{deck:a,setDeck:r,isDefeated:x,clickHandler:function(c){O(!0),c?g(!0):(t(),b+1>=a.length?(u(0),e(!0),r(null)):u((function(e){return e+1})))}}},h=(c(17),c(18),function(e){var t=e.cardUrl,c=e.cardName,n=e.clickHandler,a=Object(s.useState)(!1),r=Object(i.a)(a,2),l=r[0],j=r[1];return Object(o.jsxs)("div",{onClick:function(){l?n(!0):(j(!0),n(!1))},className:"card",children:[Object(o.jsx)("img",{src:t,alt:c,className:"card-img"}),Object(o.jsx)("h3",{className:"card-name",children:c}),Object(o.jsx)("div",{className:"vector"})]})}),d=function(e){var t=e.reset,c=e.setIsReset;return Object(o.jsx)("button",{onClick:function(){c(!0),t()},className:"again",children:"Play Again"})},m=function(e){var t=e.reset,c=e.setIsReset;return Object(o.jsxs)("div",{className:"text-box",children:[Object(o.jsx)("h3",{className:"lose",children:"Defeat!"}),Object(o.jsx)("p",{className:"sm-txt",children:"You are now just a memory of what you were one time!"}),Object(o.jsx)(d,{reset:t,setIsReset:c})]})},O=(c(19),function(){var e=["You are so wise!","Your memory is as good as said in the legends.","What a Legend!","Your name will be remembered for centuries!","Exactly as the old scrolls. Amazing!","This memory power is unbelievable."];return Object(o.jsxs)("div",{className:"text-box",children:[Object(o.jsx)("h3",{className:"level-up",children:function(){var t=Math.floor(Math.random()*e.length);return e[t]}()}),Object(o.jsx)("p",{className:"sm-txt",children:"LEVEL UP!"})]})}),A=(c(20),function(){return Object(o.jsx)("div",{className:"loadingBox",children:Object(o.jsx)("div",{className:"loading"})})}),f=function(e){var t=e.reset,c=e.setIsReset;return Object(o.jsxs)("div",{className:"text-box",children:[Object(o.jsx)("h3",{className:"end",children:"Awesome Your name is bigger then all the Legends."}),Object(o.jsx)(d,{reset:t,setIsReset:c})]})},x=function(e){var t=e.isLevelUp,c=e.setIsLevelUp,n=e.level,a=e.score,r=e.setScore,l=e.bestScore,d=e.setBestScore,x=e.reset,g=e.setIsReset,v=b("https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/sets/Classic"),I=Object(i.a)(v,2),N=I[0],p=I[1],B=Object(s.useState)(null),k=Object(i.a)(B,2),M=k[0],D=k[1],w=u(c,(function(){a>=l&&d(a+1),r((function(e){return e+1}))})),G=w.deck,S=w.setDeck,E=w.isDefeated,T=w.clickHandler;return Object(s.useEffect)((function(){if(p&&!M){var e=p.filter((function(e){return e.imgGold}));D(Object(j.a)(e))}}),[p,M]),Object(s.useEffect)((function(){if(!G&&M){for(var e=Object(j.a)(M),t=[],c=0;c<4*n;c++){var s=Math.floor(Math.random()*e.length),a=e.splice(s,1)[0];t.push(a)}S([].concat(t)),D(Object(j.a)(e))}}),[n,M,S]),N?Object(o.jsx)(A,{}):E?Object(o.jsx)(m,{reset:x,setIsReset:g}):n>5?Object(o.jsx)(f,{reset:x,setIsReset:g}):t?n<=4?Object(o.jsx)(O,{}):Object(o.jsx)(f,{reset:x,setIsReset:g}):Object(o.jsxs)("main",{className:"main-content",children:[Object(o.jsxs)("h2",{className:"level",children:["Choose a card! Level ",n,"!"]}),Object(o.jsx)("div",{className:"cards-box",children:G?G.map((function(e){return Object(o.jsx)(h,{cardUrl:e.imgGold,cardName:e.name,clickHandler:T},e.cardId)})):null})]})},g=(c(21),function(){return Object(o.jsxs)("footer",{className:"footer",children:[Object(o.jsx)("p",{children:"Made by Gabriel Lima"}),Object(o.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://github.com/gabriellima77",children:Object(o.jsx)("img",{alt:"github logo",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MzlFQkFERkU4NkJCMTFFM0FBNTJFRTMzNTJEMUJDNDYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MzlFQkFERkQ4NkJCMTFFM0FBNTJFRTMzNTJEMUJDNDYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU1MTc4QTJFOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU1MTc4QTJGOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Kk5lQwAABYxJREFUeNrkm29oVXUYx3+7bM3V1FnbqlltrtXWtYRa1nqxooY5E7EhKWGuaTDBagol9SIMDCKICASj+cISw/DPi16ZBakrUBnoC7nNoTMWy6I1c+LmVq6t78N9jpyu555znt855+536IHPi939/jzP95zznN+/kzc1NaUitirwJJgPasF94DZQDG7hMqNgBFwEZ5kU+AH0R+lcXgQCJMBT4EXwLKgM2N7P4FvwJegCk6YKUA5eB23grogu2C/gc7AN/GGKABTsZtAOZqjc2DjYAT5kUfSNBNCkAGwGo1PTZ6PsQ4FuHLp3QD3YDR5QZtgZsAac1ElYokcGbATHDApesS/kUwf7GEkOKAK7wAvKbNsPXgZjYQowG3wNnlDxsONgCbgchgAU/GHwiIqXUT5o8hLBKwfcDA7FMHgrUR/iGLQEoGTyBWhQ8bUGjiFPR4A3QIuKv7VwLKIcQMnue5Dv0fjT/IwtAM3g+RyMBmkU+BXf3qc5Rx3xqDPBE7LjfkaCheCcj1HYKYe6JeBt8GcEo75L3HaJQ7+nfNQ/x7H9p67TFX4L1Pi4EocdfhsGH4BPwVbwqu0xGwI/8vT2N/77Gv+vAJSCO3n6PJ//Vjz72w62cPtORnfAwx7+1nBsW93ugGow7vOKtPkYa9eDl0Clxji9kuvW+yjb5tPncY7xet3MhjoFt2RzgIlU2DQL/O6017W/Be4BawXJqMCgTH+ToOxajvWG1+AmYVBlBglQKrxwmzIFoB9XCzt91CABpL6sti62JcBiXtKS2GMGCSD1pZxjvi7AKmED9PraYJAAG2yvVL+2yi7AImHl90C3QQJ03/B+97ZF1lCYVlN6BBV/BffykNQkoyF4H5grqJOkO6BR2NF2A4O35gifCOs0JjTW9vYaPPPbJ11LJAFqBRVoDf68wQLQI3BBUL424XPiY1lvDOb/ZwRla0iAOYIKv8dAgEFB2VtJgJmCChMxEEAyHigmAQoFFWbFQIDZgrKF0p2hmTEQQOQjCTAmKD8vBgJUCcqOkQBXBBXosEORwcEXKdmBjCskwICgQr5h0+BMW6i8V7LtNkAC9As7WWqwAM8Jy/cnhBMhspVKvq2eC0uwbxLrSWhMa+dpdJQLW6mRpLtpOlyuMcL7CTwErhoSPG2ApjQEuD3BQ0fp0ZJqlT6pZYpt0wieYh60nuWDGp2+At4xIPgt7IvU0jHzBkFdgD27HWDGNGyGFHHfulaXuTN0IkBjZ8EykJeDwKmPFtAXwN8TTltjrVkKfwcawXJW3G3v8DTYCKoiCLwGvAl6QthpbnU6J5jP2f1uh1Wgxbbxwv0qvT/vtZRGA6wuzs50+Pkb8JdgQtPMq1VJld7bnxtSzhjgJD5hzwEW611OZK6xlSvzeYbAsl3Cx4PK7ozodOl6t93hfJByqbzOVnYh+MdHhxfBLI1bnuoMhRx8imPMKgDR5LG/nrSVfddHpx8HeO4/ClmApsw+snXsdk7gYMat+r5Hp0sDCLAkxOA7nfrI1nGxx2tmQUb5x8FuzgvD4Dw4wNm2MIAA1SEF38cx+RaAeBCMZGlwb44GOyUhBD/CsTj24TatpddXq3L+RIVmXnE4QzjJMaSylvBxFdqzKHsVrDD8Dmj36sOvIx0unewHDRENg4MI0BH2FyP0RcZOlzW3Ib7VLvPqDK0z1PEq7bDmLVwCLgnr0AhvnUp/0eJp0k9m6HO4fUp2nGZODgUY5PzUJVlHkxg1TEfnjxqY8I6yb12SSjqLm7T9/Ax4TaW/+JxuIx862KcL4toBk1QFT1omXZLRHQHaL3Npl/r8jH3QjiGsbJ3kGd/fDo6WBWi31KG9a9xXMgzfw35tVfCR9l52dk8Ibe7htnq57YowfY7i4+lYWUL9z+1fAQYACqstE4NCc18AAAAASUVORK5CYII=",className:"logo-github"})})]})});var v=function(){var e=Object(s.useState)(0),t=Object(i.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(0),r=Object(i.a)(a,2),j=r[0],b=r[1],u=Object(s.useState)(1),h=Object(i.a)(u,2),d=h[0],m=h[1],O=Object(s.useState)(!1),A=Object(i.a)(O,2),f=A[0],v=A[1],I=Object(s.useState)(!1),N=Object(i.a)(I,2),p=N[0],B=N[1];return Object(s.useEffect)((function(){var e;return f&&(e=setTimeout((function(){v(!1),m((function(e){return e+1}))}),2e3)),function(){return clearTimeout(e)}}),[f]),Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(l,{score:c,bestScore:j}),p?null:Object(o.jsx)(x,{isLevelUp:f,level:d,setIsLevelUp:v,score:c,setScore:n,setBestScore:b,bestScore:j,reset:function(){n(0),m(1),v(!1),setTimeout((function(){return B(!1)}),0)},setIsReset:B}),Object(o.jsx)(g,{})]})},I=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,26)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),s(e),n(e),a(e),r(e)}))};c(22).config(),r.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(v,{})}),document.getElementById("root")),I()}],[[25,1,2]]]);
//# sourceMappingURL=main.87cbf085.chunk.js.map