(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[5],{1189:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return A}));var c,o,i=n(11),r=n(9),j=n(0),a=n(7),l=n(2),b=n(5),d=n(14),s=n(100),O=n(29),x=n(54),u=n(346),p=n(20),h=n(405),g=n(122),f=n(23),v=n(56),y=n(92),m=n(785),T=n(150),k=n(203),I=n(178),E=n(226),N=n(1);!function(e){e[e.TOKEN0=0]="TOKEN0",e[e.TOKEN1=1]="TOKEN1"}(o||(o={}));var S=Object(b.e)(l.k)(c||(c=Object(r.a)(["\n  background-color: ",";\n  color: ",";\n  box-shadow: none;\n  border-radius: 16px;\n"])),(function(e){return e.theme.colors.input}),(function(e){return e.theme.colors.text}));function A(){var e,t=Object(f.a)().account,n=Object(d.b)().t,c=Object(j.useState)(o.TOKEN1),r=Object(i.a)(c,2),b=r[0],A=r[1],C=Object(j.useState)(a.d),w=Object(i.a)(C,2),K=w[0],q=w[1],B=Object(j.useState)(null),L=Object(i.a)(B,2),X=L[0],D=L[1],F=Object(g.b)(null!==K&&void 0!==K?K:void 0,null!==X&&void 0!==X?X:void 0),J=Object(i.a)(F,2),M=J[0],P=J[1],G=Object(v.f)();Object(j.useEffect)((function(){P&&G(P)}),[P,G]);var R=M===g.a.NOT_EXISTS||Boolean(M===g.a.EXISTS&&P&&a.e.equal(P.reserve0.raw,a.e.BigInt(0))&&a.e.equal(P.reserve1.raw,a.e.BigInt(0))),V=Object(y.d)(null!==t&&void 0!==t?t:void 0,null===P||void 0===P?void 0:P.liquidityToken),W=Boolean(V&&a.e.greaterThan(V.raw,a.e.BigInt(0))),Y=Object(j.useCallback)((function(e){b===o.TOKEN0?q(e):D(e)}),[b]),_=Object(N.jsx)(s.b,{padding:"45px 10px",children:Object(N.jsx)(l.pb,{textAlign:"center",children:n(t?"Select a token to find your liquidity.":"Connect to a wallet to find pools")})}),z=Object(l.Fb)(Object(N.jsx)(h.a,{onCurrencySelect:Y,showCommonBases:!0,selectedCurrency:null!==(e=b===o.TOKEN0?X:K)&&void 0!==e?e:void 0}),!0,!0,"selectCurrencyModal"),H=Object(i.a)(z,1)[0];return Object(N.jsx)(E.a,{children:Object(N.jsxs)(I.a,{children:[Object(N.jsx)(I.b,{title:n("Import Pool"),subtitle:n("Import an existing pool"),backTo:"/pool"}),Object(N.jsxs)(O.a,{style:{padding:"1rem"},gap:"md",children:[Object(N.jsx)(S,{endIcon:Object(N.jsx)(l.x,{}),onClick:function(){H(),A(o.TOKEN0)},children:K?Object(N.jsxs)(p.d,{children:[Object(N.jsx)(x.a,{currency:K}),Object(N.jsx)(l.pb,{ml:"8px",children:K.symbol})]}):Object(N.jsx)(l.pb,{ml:"8px",children:n("Select a Token")})}),Object(N.jsx)(O.b,{children:Object(N.jsx)(l.a,{})}),Object(N.jsx)(S,{endIcon:Object(N.jsx)(l.x,{}),onClick:function(){H(),A(o.TOKEN1)},children:X?Object(N.jsxs)(p.d,{children:[Object(N.jsx)(x.a,{currency:X}),Object(N.jsx)(l.pb,{ml:"8px",children:X.symbol})]}):Object(N.jsx)(l.pb,{as:p.d,children:n("Select a Token")})}),W&&Object(N.jsxs)(O.b,{style:{justifyItems:"center",backgroundColor:"",padding:"12px 0px",borderRadius:"12px"},children:[Object(N.jsx)(l.pb,{textAlign:"center",children:n("Pool Found!")}),Object(N.jsx)(m.a,{to:"/pool",children:Object(N.jsx)(l.pb,{textAlign:"center",children:n("Manage this pool.")})})]}),K&&X?M===g.a.EXISTS?W&&P?Object(N.jsx)(u.a,{pair:P}):Object(N.jsx)(s.b,{padding:"45px 10px",children:Object(N.jsxs)(O.a,{gap:"sm",justify:"center",children:[Object(N.jsx)(l.pb,{textAlign:"center",children:n("You don\u2019t have liquidity in this pool yet.")}),Object(N.jsx)(m.a,{to:"/add/".concat(Object(T.a)(K),"/").concat(Object(T.a)(X)),children:Object(N.jsx)(l.pb,{textAlign:"center",children:n("Add Liquidity")})})]})}):R?Object(N.jsx)(s.b,{padding:"45px 10px",children:Object(N.jsxs)(O.a,{gap:"sm",justify:"center",children:[Object(N.jsx)(l.pb,{textAlign:"center",children:n("No pool found.")}),Object(N.jsx)(m.a,{to:"/add/".concat(Object(T.a)(K),"/").concat(Object(T.a)(X)),children:n("Create pool.")})]})}):M===g.a.INVALID?Object(N.jsx)(s.b,{padding:"45px 10px",children:Object(N.jsx)(O.a,{gap:"sm",justify:"center",children:Object(N.jsx)(l.pb,{textAlign:"center",fontWeight:500,children:n("Invalid pair.")})})}):M===g.a.LOADING?Object(N.jsx)(s.b,{padding:"45px 10px",children:Object(N.jsx)(O.a,{gap:"sm",justify:"center",children:Object(N.jsxs)(l.pb,{textAlign:"center",children:[n("Loading"),Object(N.jsx)(k.a,{})]})})}):null:_]})]})})}},785:function(e,t,n){"use strict";var c,o=n(9),i=n(82),r=n(5),j=Object(r.e)(i.a)(c||(c=Object(o.a)(["\n  text-decoration: none;\n  cursor: pointer;\n  color: ",";\n  font-weight: 500;\n\n  :hover {\n    text-decoration: underline;\n  }\n\n  :focus {\n    outline: none;\n    text-decoration: underline;\n  }\n\n  :active {\n    text-decoration: none;\n  }\n"])),(function(e){return e.theme.colors.primary}));t.a=j}}]);
//# sourceMappingURL=5.1e02e698.chunk.js.map