(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[4],{1434:function(e,n,t){"use strict";t.r(n);var i,c,r,o,l,d,a,s,j,b,u,x,h,p,O,m,f,g,v,w,C=t(13),y=t(0),F=t(5),k=t(3),P=t(23),S=t(404),D=t(8),A=t(79),R=t(274),E=t(1),L=function(e,n,t){return Object(F.d)(i||(i=Object(C.a)(["\n  width: 100%;\n  height: 20px;\n  clip-path: url(",");\n\n  background: ",";\n\n  & svg {\n    display: block;\n  }\n"])),n,(function(){return e.isDark?(null===t||void 0===t?void 0:t.dark)||(null===t||void 0===t?void 0:t.light)||e.colors.background:(null===t||void 0===t?void 0:t.light)||e.colors.background}))},B=Object(F.e)(k.f)(c||(c=Object(C.a)(["\n  ","\n  transform: ",";\n"])),(function(e){var n=e.theme,t=e.clipPath,i=e.clipFill;return L(n,t,i)}),(function(e){return"#bottomConcaveCurve"===e.clipPath?"translate(0, -13px)":"translate(0, 1px)"})),z=Object(F.e)(k.f)(r||(r=Object(C.a)(["\n  ","\n  transform: ",";\n"])),(function(e){var n=e.theme,t=e.clipPath,i=e.clipFill;return L(n,t,i)}),(function(e){return"#bottomConvexCurve"===e.clipPath?"translate(0, -13px)":"translate(0, -1px)"})),K=function(e){var n=e.clipFill;return Object(E.jsx)(z,{clipFill:n,clipPath:"#topConvexCurve",children:Object(E.jsx)("svg",{width:"0",height:"0",children:Object(E.jsx)("defs",{children:Object(E.jsx)("clipPath",{id:"topConvexCurve",clipPathUnits:"objectBoundingBox",children:Object(E.jsx)("path",{d:"M 0,1 L 0,0 L 1,0 L 1,1 C 0.75 0, .25 0, 0 1 Z"})})})})})},Q=function(e){var n=e.clipFill;return Object(E.jsx)(z,{clipFill:n,clipPath:"#bottomConvexCurve",children:Object(E.jsx)("svg",{width:"0",height:"0",children:Object(E.jsx)("defs",{children:Object(E.jsx)("clipPath",{id:"bottomConvexCurve",clipPathUnits:"objectBoundingBox",children:Object(E.jsx)("path",{d:"M 0,0 L 0,1 L 1,1 L 1,0 C .75 1, .25 1, 0 0 Z"})})})})})},I=function(e){var n=e.clipFill;return Object(E.jsx)(B,{clipFill:n,clipPath:"#topConcaveCurve",children:Object(E.jsx)("svg",{width:"0",height:"0",children:Object(E.jsx)("defs",{children:Object(E.jsx)("clipPath",{id:"topConcaveCurve",clipPathUnits:"objectBoundingBox",children:Object(E.jsx)("path",{d:"M 0,0 L 0,1 L 1,1 L 1,0 C .75 1, .25 1, 0 0 Z"})})})})})},T=function(e){var n=e.clipFill;return Object(E.jsx)(B,{clipFill:n,clipPath:"#bottomConcaveCurve",children:Object(E.jsx)("svg",{width:"0",height:"0",children:Object(E.jsx)("defs",{children:Object(E.jsx)("clipPath",{id:"bottomConcaveCurve",clipPathUnits:"objectBoundingBox",children:Object(E.jsx)("path",{d:"M 0,1 L 0,0 L 1,0 L 1,1 C .75 0.1, .25 0.1, 0 1 Z"})})})})})},H=F.e.div(o||(o=Object(C.a)(["\n  background: ",";\n  z-index: ",";\n  position: relative;\n  display: flex;\n  align-items: center;\n  width: 100%;\n"])),(function(e){var n=e.theme,t=e.dividerFill;return n.isDark?(null===t||void 0===t?void 0:t.dark)||(null===t||void 0===t?void 0:t.light)||"none":(null===t||void 0===t?void 0:t.light)||(null===t||void 0===t?void 0:t.dark)||"none"}),(function(e){return e.index})),M=F.e.div(l||(l=Object(C.a)(["\n  z-index: ",";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n"])),(function(e){return e.index+1})),U=function(e){var n=e.index,t=e.dividerPosition,i=e.dividerComponent,c=e.concave,r=e.clipFill,o=e.dividerFill,l="top"===t&&!c,d="bottom"===t&&!c,a="top"===t&&c,s="bottom"===t&&c;return Object(E.jsxs)(H,{index:n,dividerFill:o,children:[i&&Object(E.jsx)(M,{index:n,children:i}),Object(E.jsxs)(E.Fragment,{children:[a&&Object(E.jsx)(I,{clipFill:r}),s&&Object(E.jsx)(T,{clipFill:r})]}),Object(E.jsxs)(E.Fragment,{children:[l&&Object(E.jsx)(K,{clipFill:r}),d&&Object(E.jsx)(Q,{clipFill:r})]})]})},q=["children","background","svgFill","index","dividerComponent","dividerPosition","hasCurvedDivider","concaveDivider","clipFill","dividerFill","containerProps","innerProps"],Z=Object(F.e)(k.w)(d||(d=Object(C.a)(["\n  position: relative;\n  flex-direction: column;\n  align-items: center;\n  z-index: ",";\n  background: ",";\n"])),(function(e){return e.index-1}),(function(e){var n=e.background,t=e.theme;return n||t.colors.background})),J=Object(F.e)(R.a)(a||(a=Object(C.a)(["\n  min-height: auto;\n  padding-top: 16px;\n  padding-bottom: 16px;\n\n  "," {\n    padding-top: 32px;\n    z-index: 99999;\n    padding-bottom: 32px;\n  }\n\n  "," {\n    padding-top: 48px;\n    padding-bottom: 48px;\n  }\n"])),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.lg})),N=function(e){var n=e.children,t=e.background,i=e.svgFill,c=e.index,r=void 0===c?1:c,o=e.dividerComponent,l=e.dividerPosition,d=void 0===l?"bottom":l,a=e.hasCurvedDivider,s=void 0===a||a,j=e.concaveDivider,b=void 0!==j&&j,u=e.clipFill,x=e.dividerFill,h=e.containerProps,p=e.innerProps,O=Object(A.a)(e,q);return Object(E.jsxs)(k.f,Object(D.a)(Object(D.a)({},h),{},{children:[s&&"top"===d&&Object(E.jsx)(U,{svgFill:i,index:r,concave:b,dividerPosition:d,dividerComponent:o,clipFill:u,dividerFill:x}),Object(E.jsx)(Z,Object(D.a)(Object(D.a)({background:t,index:r,p:s?"bottom"===d?"48px 0 14px":"top"===d?"14px 0 48px":"48px 0":"48px 0"},O),{},{children:Object(E.jsx)(J,Object(D.a)(Object(D.a)({},p),{},{children:n}))})),s&&"bottom"===d&&Object(E.jsx)(U,{svgFill:i,index:r,concave:b,dividerPosition:d,dividerComponent:o,clipFill:u,dividerFill:x})]}))},W=t(125),G=t(15),V=["title","children"],Y=Object(F.e)(k.w)(s||(s=Object(C.a)(["\n  cursor: pointer;\n"]))),X=Object(F.e)(k.w)(j||(j=Object(C.a)(["\n  button {\n    align-items: center;\n    justify-content: flex-start;\n  }\n"]))),$=Object(F.e)(k.w)(b||(b=Object(C.a)(["\n  overflow: hidden;\n  height: ",";\n  padding-bottom: ",";\n  border-bottom: 1px solid ",";\n"])),(function(e){return e.isExpanded?"100%":"0px"}),(function(e){return e.isExpanded?"16px":"0px"}),(function(e){return e.theme.colors.inputSecondary})),_=function(e){var n=e.title,t=e.children,i=Object(A.a)(e,V),c=Object(P.b)().t,r=Object(y.useState)(!1),o=Object(G.a)(r,2),l=o[0],d=o[1];return Object(E.jsxs)(Y,Object(D.a)(Object(D.a)({},i),{},{flexDirection:"column",onClick:function(){return d(!l)},children:[Object(E.jsxs)(k.w,{justifyContent:"space-between",alignItems:"center",pb:"16px",children:[Object(E.jsx)(k.R,{fontWeight:"bold",children:n}),Object(E.jsx)(X,{children:Object(E.jsx)(k.u,{expanded:l,onClick:function(){return d(!l)},children:c(l?"Hide":"Details")})})]}),Object(E.jsx)($,{isExpanded:l,flexDirection:"column",children:t})]}))},ee="https://docs.google.com/forms/d/e/1FAIpQLScUkwbsMWwg7L5jjGjEcmv6RsoCNhFDkV3xEpRu2KcJrr47Sw/viewform",ne=Object(F.e)(k.k)(u||(u=Object(C.a)(["\n  flex: 1;\n  height: fit-content;\n"]))),te=Object(F.e)(k.C)(x||(x=Object(C.a)(["\n  display: inline;\n"]))),ie=F.e.ul(h||(h=Object(C.a)(["\n  list-style-position: outside;\n  padding: 0 24px;\n\n  li {\n    line-height: 1.5;\n    margin-bottom: 4px;\n  }\n\n  li::marker {\n    font-size: 12px;\n  }\n"]))),ce=F.e.li(p||(p=Object(C.a)(["\n  color: ",";\n"])),(function(e){return e.theme.colors.textSubtle})),re=function(){var e=Object(P.b)().t;return Object(E.jsxs)(k.w,{flexDirection:"column",children:[Object(E.jsx)(k.x,{color:"#280D5F",as:"h1",scale:"xxl",mb:"40px",children:e("FAQs")}),Object(E.jsxs)(k.w,{flexDirection:["column",null,null,null,"row"],children:[Object(E.jsxs)(ne,{mr:[null,null,null,null,"24px"],mb:["24px",null,null,null,"0"],children:[Object(E.jsx)(k.n,{children:Object(E.jsx)(k.x,{children:e("How does it work?")})}),Object(E.jsxs)(k.l,{p:"0 24px 24px",children:[Object(E.jsx)(_,{title:e("Step 1: Submit application"),mt:"24px",children:Object(E.jsxs)(k.f,{display:"inline",children:[Object(E.jsx)(k.R,{display:"inline",color:"textSubtle",children:e("Projects can submit an application to sponsor a yield farm and/or pool on PancakeSwap via the ")}),Object(E.jsx)(te,{href:ee,external:!0,children:e("Application Form")})]})}),Object(E.jsx)(_,{title:e("Step 2: Await whitelisting"),mt:"24px",children:Object(E.jsxs)(k.f,{color:"textSubtle",children:[Object(E.jsx)(k.R,{color:"textSubtle",mb:"4px",children:e("The PancakeSwap team will try to respond within a week.")}),Object(E.jsxs)(ie,{children:[Object(E.jsx)(ce,{children:e("Community Farm qualifiers will be asked to provide the address of the wallet which you\u2019ll use for bidding CAKE in the auction.")}),Object(E.jsx)(ce,{children:e("Core Farm/Pool qualifiers will receive further directions separately.")})]})]})}),Object(E.jsxs)(_,{title:e("Step 3: During the auction"),mt:"24px",children:[Object(E.jsx)(k.R,{color:"textSubtle",children:e("During the auction period, if you connect your project\u2019s whitelisted wallet to the Auction page, you\u2019ll see a \u201cPlace Bid\u201d button during when the auction is live.")}),Object(E.jsx)(k.R,{color:"textSubtle",children:e("You can then commit CAKE to bid during the auction, competing against other project for one of the available farms.")})]}),Object(E.jsxs)(_,{title:e("Step 4: After the auction"),mt:"24px",children:[Object(E.jsx)(k.R,{color:"textSubtle",children:e("If your bid was not successful, you can reclaim your CAKE on this page.")}),Object(E.jsx)(k.R,{color:"textSubtle",children:e("If your bid was successful, your farm will begin at the specified time. The CAKE you bid will not be returned to you and will be added to our weekly CAKE burn.")}),Object(E.jsx)(k.R,{color:"textSubtle",children:e("So long as you are whitelisted, you\u2019ll be able to participate in each new auction.")}),Object(E.jsx)(k.R,{color:"textSubtle",children:e("If two or more projects bid the exact same CAKE amount and are contending for a spot in the winning bidders, their bids may be invalidated.")})]})]})]}),Object(E.jsxs)(ne,{children:[Object(E.jsx)(k.n,{children:Object(E.jsx)(k.x,{children:e("Terms & Conditions")})}),Object(E.jsx)(k.l,{children:Object(E.jsxs)(k.w,{flexDirection:"column",children:[Object(E.jsx)(k.R,{mb:"4px",children:e("By participating in an Community Farm Auction, you agree to the following terms.")}),Object(E.jsxs)(ie,{children:[Object(E.jsx)("li",{children:e("A project being whitelisted for participation in an auction by PancakeSwap is in no way an endorsement or recommendation about said project.")}),Object(E.jsx)("li",{children:e("PancakeSwap strongly advise against sending funds to any projects which request donations.")}),Object(E.jsx)("li",{children:e("PancakeSwap reserves all rights to remove any project it deems to have acted with malicious or dangerous intent from auctions at any time.")})]})]})})]})]})]})},oe=Object(F.e)(k.k)(O||(O=Object(C.a)(["\n  flex: 1;\n"]))),le=Object(F.e)(k.k)(m||(m=Object(C.a)(["\n  flex: 2;\n"]))),de=Object(F.e)(k.w)(f||(f=Object(C.a)(["\n  flex-direction: column;\n  padding: 16px;\n  border-radius: ",";\n  background-color: ",";\n  border: 1px "," solid;\n"])),(function(e){return e.theme.radii.default}),(function(e){return e.theme.colors.background}),(function(e){return e.theme.colors.cardBorder})),ae=function(){var e=Object(P.b)().t;return Object(E.jsxs)(k.w,{width:"100%",flexDirection:["column",null,null,"row"],children:[Object(E.jsxs)(oe,{mr:[null,null,null,"24px"],mb:["24px",null,null,"0"],children:[Object(E.jsx)(k.n,{children:Object(E.jsx)(k.x,{children:e("Next Auction")})}),Object(E.jsxs)(k.l,{children:[Object(E.jsx)(k.R,{fontSize:"12px",bold:!0,color:"secondary",textTransform:"uppercase",mb:"8px",children:e("Auction Schedule")}),Object(E.jsxs)(de,{children:[Object(E.jsxs)(k.w,{justifyContent:"space-between",mb:"8px",children:[Object(E.jsx)(k.R,{color:"textSubtle",children:e("Auction duration")}),Object(E.jsxs)(k.R,{children:[" ",e("%numHours% hours",{numHours:"~24"})]})]}),Object(E.jsxs)(k.w,{justifyContent:"space-between",mb:"8px",children:[Object(E.jsx)(k.R,{color:"textSubtle",children:e("Start")}),Object(E.jsxs)(k.R,{children:[" ",e("To be announced")]})]}),Object(E.jsxs)(k.w,{justifyContent:"space-between",children:[Object(E.jsx)(k.R,{color:"textSubtle",children:e("End")}),Object(E.jsxs)(k.R,{children:[" ",e("To be announced")]})]})]})]})]}),Object(E.jsxs)(le,{children:[Object(E.jsx)(k.n,{variant:"bubblegum",children:Object(E.jsx)(k.x,{color:"#280D5F",children:e("Auction Leaderboard")})}),Object(E.jsx)(k.l,{children:Object(E.jsx)(k.w,{minHeight:"152px",flexDirection:"column",alignItems:"center",justifyContent:"center",children:Object(E.jsx)(k.R,{bold:!0,fontSize:"16px",color:"primary",textAlign:"center",children:e("Coming soon!")})})})]})]})},se=Object(F.e)(S.a)(g||(g=Object(C.a)(["\n  max-height: max-content;\n  margin-bottom: -40px;\n  padding-bottom: 20px;\n  overflow: hidden;\n  "," {\n    max-height: 392px;\n  }\n"])),(function(e){return e.theme.mediaQueries.md})),je=Object(F.e)(k.w)(v||(v=Object(C.a)(["\n  flex-direction: column;\n  flex: 1;\n"]))),be=Object(F.e)(k.w)(w||(w=Object(C.a)(["\n  align-items: center;\n  justify-content: center;\n  padding-left: 24px;\n  flex: 0.5;\n  & img {\n    height: 50%;\n    width: 50%;\n  }\n\n  "," {\n    & img {\n      height: auto;\n      width: auto;\n    }\n  }\n\n  "," {\n    & img {\n      height: 90%;\n      margin-top: -15%;\n    }\n  }\n\n  "," {\n    & img {\n      margin-top: -25%;\n    }\n  }\n"])),(function(e){return e.theme.mediaQueries.xs}),(function(e){return e.theme.mediaQueries.lg}),(function(e){return e.theme.mediaQueries.xl}));n.default=function(){var e=Object(P.b)().t,n=Object(W.a)().theme;return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(se,{children:Object(E.jsxs)(k.w,{flexDirection:["column-reverse","row"],children:[Object(E.jsxs)(je,{children:[Object(E.jsx)(k.x,{as:"h1",scale:"xxl",mb:"24px",children:e("Community Farm Auction")}),Object(E.jsx)(k.R,{bold:!0,fontSize:"16px",color:"textSubtle",mb:"24px",children:e("Each week, qualifying projects can bid CAKE for the right to host a 7-day Farm on PancakeSwap.")}),Object(E.jsx)(k.C,{external:!0,href:ee,children:Object(E.jsx)(k.g,{children:Object(E.jsx)(k.R,{color:"white",bold:!0,fontSize:"16px",mr:"4px",children:e("Apply for a Farm/Pool")})})})]}),Object(E.jsx)(be,{children:Object(E.jsx)("img",{src:"/images/decorations/auction-bunny.png",alt:"auction bunny"})})]})}),Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(N,{innerProps:{style:{margin:"0",width:"100%"}},background:n.colors.background,p:"24px 0",index:2,concaveDivider:!0,dividerPosition:"top",children:Object(E.jsx)(ae,{})}),Object(E.jsx)(N,{p:"24px 0",background:"linear-gradient(180deg, #CBD7EF 0%, #9A9FD0 100%)",index:3,hasCurvedDivider:!1,children:Object(E.jsx)(re,{})})]})]})}}}]);
//# sourceMappingURL=4.3ac1d5a5.chunk.js.map