import{j as v}from"./jsx-runtime-DEdD30eg.js";import{f as On}from"./index-C_FWhylE.js";import{r as T,R as Ye}from"./index-RYns6xqu.js";import{f as Z,B as Pn}from"./Button-sb2VQj2J.js";import{P as d}from"./index-rNTiGNI1.js";const En="_accordion_le2yr_2",In={accordion:En},Bt=T.createContext({}),Nn=Z(In),Xt=T.forwardRef(function({children:e,defaultExpanded:n=!1,expanded:a=n,variant:r="plain",color:i="gray",disabled:o=!1,className:s="",...l},c){const[u,p]=T.useState(a),m={expanded:u,toggle:()=>{p(b=>!b)},variant:r,color:i,disabled:o};return v.jsx(Bt.Provider,{value:m,children:v.jsx("div",{className:[Nn(["accordion"]),s].join(" "),ref:c,...l,children:e})})});Xt.__docgenInfo={description:"",methods:[],displayName:"Accordion",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"defaultExpanded = false",computed:!1}},defaultExpanded:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'plain' | 'outline' | 'soft' | 'solid'",elements:[{name:"literal",value:"'plain'"},{name:"literal",value:"'outline'"},{name:"literal",value:"'soft'"},{name:"literal",value:"'solid'"}]},description:"",defaultValue:{value:'"plain"',computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'gray' | 'red' | 'green' | 'blue' | 'orange' | 'pink'",elements:[{name:"literal",value:"'gray'"},{name:"literal",value:"'red'"},{name:"literal",value:"'green'"},{name:"literal",value:"'blue'"},{name:"literal",value:"'orange'"},{name:"literal",value:"'pink'"}]},description:"",defaultValue:{value:'"gray"',computed:!1}}},composes:["ComponentPropsWithoutRef"]};const Cn={prefix:"fas",iconName:"chevron-right",icon:[320,512,[9002],"f054","M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"]},ce=()=>{};let Gt={},We={},qe=null,Ue={mark:ce,measure:ce};try{typeof window<"u"&&(Gt=window),typeof document<"u"&&(We=document),typeof MutationObserver<"u"&&(qe=MutationObserver),typeof performance<"u"&&(Ue=performance)}catch{}const{userAgent:fe=""}=Gt.navigator||{},Y=Gt,g=We,ue=qe,ct=Ue;Y.document;const R=!!g.documentElement&&!!g.head&&typeof g.addEventListener=="function"&&typeof g.createElement=="function",$e=~fe.indexOf("MSIE")||~fe.indexOf("Trident/");var h="classic",He="duotone",_="sharp",O="sharp-duotone",Sn=[h,He,_,O],Tn={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},de={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Ln=["kit"],Mn=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,jn=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Fn={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},Rn={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},zn={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},Dn={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},Yn={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},Wn={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},Ve={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},qn=["solid","regular","light","thin","duotone","brands"],Be=[1,2,3,4,5,6,7,8,9,10],Un=Be.concat([11,12,13,14,15,16,17,18,19,20]),et={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},$n=[...Object.keys(Dn),...qn,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",et.GROUP,et.SWAP_OPACITY,et.PRIMARY,et.SECONDARY].concat(Be.map(t=>"".concat(t,"x"))).concat(Un.map(t=>"w-".concat(t))),Hn={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Vn={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},Bn={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},me={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const j="___FONT_AWESOME___",It=16,Xe="fa",Ge="svg-inline--fa",V="data-fa-i2svg",Nt="data-fa-pseudo-element",Xn="data-fa-pseudo-element-pending",Kt="data-prefix",Qt="data-icon",pe="fontawesome-i2svg",Gn="async",Kn=["HTML","HEAD","STYLE","SCRIPT"],Ke=(()=>{try{return!0}catch{return!1}})(),Qe=[h,_,O];function st(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[h]}})}const Je={...Ve};Je[h]={...Ve[h],...de.kit,...de["kit-duotone"]};const $=st(Je),Ct={...Wn};Ct[h]={...Ct[h],...me.kit,...me["kit-duotone"]};const it=st(Ct),St={...Yn};St[h]={...St[h],...Bn.kit};const H=st(St),Tt={...zn};Tt[h]={...Tt[h],...Vn.kit};const Qn=st(Tt),Jn=Mn,Ze="fa-layers-text",Zn=jn,ta={...Tn};st(ta);const ea=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],At=et,Q=new Set;Object.keys(it[h]).map(Q.add.bind(Q));Object.keys(it[_]).map(Q.add.bind(Q));Object.keys(it[O]).map(Q.add.bind(Q));const na=[...Ln,...$n],at=Y.FontAwesomeConfig||{};function aa(t){var e=g.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function ra(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}g&&typeof g.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,a]=e;const r=ra(aa(n));r!=null&&(at[a]=r)});const tn={styleDefault:"solid",familyDefault:"classic",cssPrefix:Xe,replacementClass:Ge,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};at.familyPrefix&&(at.cssPrefix=at.familyPrefix);const J={...tn,...at};J.autoReplaceSvg||(J.observeMutations=!1);const f={};Object.keys(tn).forEach(t=>{Object.defineProperty(f,t,{enumerable:!0,set:function(e){J[t]=e,rt.forEach(n=>n(f))},get:function(){return J[t]}})});Object.defineProperty(f,"familyPrefix",{enumerable:!0,set:function(t){J.cssPrefix=t,rt.forEach(e=>e(f))},get:function(){return J.cssPrefix}});Y.FontAwesomeConfig=f;const rt=[];function ia(t){return rt.push(t),()=>{rt.splice(rt.indexOf(t),1)}}const z=It,C={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function oa(t){if(!t||!R)return;const e=g.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=g.head.childNodes;let a=null;for(let r=n.length-1;r>-1;r--){const i=n[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=i)}return g.head.insertBefore(e,a),t}const sa="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ot(){let t=12,e="";for(;t-- >0;)e+=sa[Math.random()*62|0];return e}function tt(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Jt(t){return t.classList?tt(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function en(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function la(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(en(t[n]),'" '),"").trim()}function ht(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function Zt(t){return t.size!==C.size||t.x!==C.x||t.y!==C.y||t.rotate!==C.rotate||t.flipX||t.flipY}function ca(t){let{transform:e,containerWidth:n,iconWidth:a}=t;const r={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:l,path:c}}function fa(t){let{transform:e,width:n=It,height:a=It,startCentered:r=!1}=t,i="";return r&&$e?i+="translate(".concat(e.x/z-n/2,"em, ").concat(e.y/z-a/2,"em) "):r?i+="translate(calc(-50% + ".concat(e.x/z,"em), calc(-50% + ").concat(e.y/z,"em)) "):i+="translate(".concat(e.x/z,"em, ").concat(e.y/z,"em) "),i+="scale(".concat(e.size/z*(e.flipX?-1:1),", ").concat(e.size/z*(e.flipY?-1:1),") "),i+="rotate(".concat(e.rotate,"deg) "),i}var ua=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function nn(){const t=Xe,e=Ge,n=f.cssPrefix,a=f.replacementClass;let r=ua;if(n!==t||a!==e){const i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");r=r.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(a))}return r}let ge=!1;function kt(){f.autoAddCss&&!ge&&(oa(nn()),ge=!0)}var da={mixout(){return{dom:{css:nn,insertCss:kt}}},hooks(){return{beforeDOMElementCreation(){kt()},beforeI2svg(){kt()}}}};const F=Y||{};F[j]||(F[j]={});F[j].styles||(F[j].styles={});F[j].hooks||(F[j].hooks={});F[j].shims||(F[j].shims=[]);var S=F[j];const an=[],rn=function(){g.removeEventListener("DOMContentLoaded",rn),mt=1,an.map(t=>t())};let mt=!1;R&&(mt=(g.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(g.readyState),mt||g.addEventListener("DOMContentLoaded",rn));function ma(t){R&&(mt?setTimeout(t,0):an.push(t))}function lt(t){const{tag:e,attributes:n={},children:a=[]}=t;return typeof t=="string"?en(t):"<".concat(e," ").concat(la(n),">").concat(a.map(lt).join(""),"</").concat(e,">")}function he(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var wt=function(e,n,a,r){var i=Object.keys(e),o=i.length,s=n,l,c,u;for(a===void 0?(l=1,u=e[i[0]]):(l=0,u=a);l<o;l++)c=i[l],u=s(u,e[c],c,e);return u};function pa(t){const e=[];let n=0;const a=t.length;for(;n<a;){const r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){const i=t.charCodeAt(n++);(i&64512)==56320?e.push(((r&1023)<<10)+(i&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function Lt(t){const e=pa(t);return e.length===1?e[0].toString(16):null}function ga(t,e){const n=t.length;let a=t.charCodeAt(e),r;return a>=55296&&a<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function be(t){return Object.keys(t).reduce((e,n)=>{const a=t[n];return!!a.icon?e[a.iconName]=a.icon:e[n]=a,e},{})}function Mt(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:a=!1}=n,r=be(e);typeof S.hooks.addPack=="function"&&!a?S.hooks.addPack(t,be(e)):S.styles[t]={...S.styles[t]||{},...r},t==="fas"&&Mt("fa",e)}const{styles:U,shims:ha}=S,ba={[h]:Object.values(H[h]),[_]:Object.values(H[_]),[O]:Object.values(H[O])};let te=null,on={},sn={},ln={},cn={},fn={};const ya={[h]:Object.keys($[h]),[_]:Object.keys($[_]),[O]:Object.keys($[O])};function va(t){return~na.indexOf(t)}function xa(t,e){const n=e.split("-"),a=n[0],r=n.slice(1).join("-");return a===t&&r!==""&&!va(r)?r:null}const un=()=>{const t=a=>wt(U,(r,i,o)=>(r[o]=wt(i,a,{}),r),{});on=t((a,r,i)=>(r[3]&&(a[r[3]]=i),r[2]&&r[2].filter(s=>typeof s=="number").forEach(s=>{a[s.toString(16)]=i}),a)),sn=t((a,r,i)=>(a[i]=i,r[2]&&r[2].filter(s=>typeof s=="string").forEach(s=>{a[s]=i}),a)),fn=t((a,r,i)=>{const o=r[2];return a[i]=i,o.forEach(s=>{a[s]=i}),a});const e="far"in U||f.autoFetchSvg,n=wt(ha,(a,r)=>{const i=r[0];let o=r[1];const s=r[2];return o==="far"&&!e&&(o="fas"),typeof i=="string"&&(a.names[i]={prefix:o,iconName:s}),typeof i=="number"&&(a.unicodes[i.toString(16)]={prefix:o,iconName:s}),a},{names:{},unicodes:{}});ln=n.names,cn=n.unicodes,te=bt(f.styleDefault,{family:f.familyDefault})};ia(t=>{te=bt(t.styleDefault,{family:f.familyDefault})});un();function ee(t,e){return(on[t]||{})[e]}function Aa(t,e){return(sn[t]||{})[e]}function D(t,e){return(fn[t]||{})[e]}function dn(t){return ln[t]||{prefix:null,iconName:null}}function ka(t){const e=cn[t],n=ee("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function W(){return te}const ne=()=>({prefix:null,iconName:null,rest:[]});function bt(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=h}=e,a=$[n][t],r=it[n][t]||it[n][a],i=t in S.styles?t:null;return r||i||null}const wa={[h]:Object.keys(H[h]),[_]:Object.keys(H[_]),[O]:Object.keys(H[O])};function yt(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e,a={[h]:"".concat(f.cssPrefix,"-").concat(h),[_]:"".concat(f.cssPrefix,"-").concat(_),[O]:"".concat(f.cssPrefix,"-").concat(O)};let r=null,i=h;const o=Sn.filter(l=>l!==He);o.forEach(l=>{(t.includes(a[l])||t.some(c=>wa[l].includes(c)))&&(i=l)});const s=t.reduce((l,c)=>{const u=xa(f.cssPrefix,c);if(U[c]?(c=ba[i].includes(c)?Qn[i][c]:c,r=c,l.prefix=c):ya[i].indexOf(c)>-1?(r=c,l.prefix=bt(c,{family:i})):u?l.iconName=u:c!==f.replacementClass&&!o.some(p=>c===a[p])&&l.rest.push(c),!n&&l.prefix&&l.iconName){const p=r==="fa"?dn(l.iconName):{},m=D(l.prefix,l.iconName);p.prefix&&(r=null),l.iconName=p.iconName||m||l.iconName,l.prefix=p.prefix||l.prefix,l.prefix==="far"&&!U.far&&U.fas&&!f.autoFetchSvg&&(l.prefix="fas")}return l},ne());return(t.includes("fa-brands")||t.includes("fab"))&&(s.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(s.prefix="fad"),!s.prefix&&i===_&&(U.fass||f.autoFetchSvg)&&(s.prefix="fass",s.iconName=D(s.prefix,s.iconName)||s.iconName),!s.prefix&&i===O&&(U.fasds||f.autoFetchSvg)&&(s.prefix="fasds",s.iconName=D(s.prefix,s.iconName)||s.iconName),(s.prefix==="fa"||r==="fa")&&(s.prefix=W()||"fas"),s}class _a{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];const r=n.reduce(this._pullDefinitions,{});Object.keys(r).forEach(i=>{this.definitions[i]={...this.definitions[i]||{},...r[i]},Mt(i,r[i]);const o=H[h][i];o&&Mt(o,r[i]),un()})}reset(){this.definitions={}}_pullDefinitions(e,n){const a=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(a).map(r=>{const{prefix:i,iconName:o,icon:s}=a[r],l=s[2];e[i]||(e[i]={}),l.length>0&&l.forEach(c=>{typeof c=="string"&&(e[i][c]=s)}),e[i][o]=s}),e}}let ye=[],X={};const K={},Oa=Object.keys(K);function Pa(t,e){let{mixoutsTo:n}=e;return ye=t,X={},Object.keys(K).forEach(a=>{Oa.indexOf(a)===-1&&delete K[a]}),ye.forEach(a=>{const r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(i=>{typeof r[i]=="function"&&(n[i]=r[i]),typeof r[i]=="object"&&Object.keys(r[i]).forEach(o=>{n[i]||(n[i]={}),n[i][o]=r[i][o]})}),a.hooks){const i=a.hooks();Object.keys(i).forEach(o=>{X[o]||(X[o]=[]),X[o].push(i[o])})}a.provides&&a.provides(K)}),n}function jt(t,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];return(X[t]||[]).forEach(o=>{e=o.apply(null,[e,...a])}),e}function B(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];(X[t]||[]).forEach(i=>{i.apply(null,n)})}function q(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return K[t]?K[t].apply(null,e):void 0}function Ft(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||W();if(e)return e=D(n,e)||e,he(mn.definitions,n,e)||he(S.styles,n,e)}const mn=new _a,Ea=()=>{f.autoReplaceSvg=!1,f.observeMutations=!1,B("noAuto")},Ia={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return R?(B("beforeI2svg",t),q("pseudoElements2svg",t),q("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;f.autoReplaceSvg===!1&&(f.autoReplaceSvg=!0),f.observeMutations=!0,ma(()=>{Ca({autoReplaceSvgRoot:e}),B("watch",t)})}},Na={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:D(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=bt(t[0]);return{prefix:n,iconName:D(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(f.cssPrefix,"-"))>-1||t.match(Jn))){const e=yt(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||W(),iconName:D(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=W();return{prefix:e,iconName:D(e,t)||t}}}},P={noAuto:Ea,config:f,dom:Ia,parse:Na,library:mn,findIconDefinition:Ft,toHtml:lt},Ca=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=g}=t;(Object.keys(S.styles).length>0||f.autoFetchSvg)&&R&&f.autoReplaceSvg&&P.dom.i2svg({node:e})};function vt(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>lt(n))}}),Object.defineProperty(t,"node",{get:function(){if(!R)return;const n=g.createElement("div");return n.innerHTML=t.html,n.children}}),t}function Sa(t){let{children:e,main:n,mask:a,attributes:r,styles:i,transform:o}=t;if(Zt(o)&&n.found&&!a.found){const{width:s,height:l}=n,c={x:s/l/2,y:.5};r.style=ht({...i,"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")})}return[{tag:"svg",attributes:r,children:e}]}function Ta(t){let{prefix:e,iconName:n,children:a,attributes:r,symbol:i}=t;const o=i===!0?"".concat(e,"-").concat(f.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...r,id:o},children:a}]}]}function ae(t){const{icons:{main:e,mask:n},prefix:a,iconName:r,transform:i,symbol:o,title:s,maskId:l,titleId:c,extra:u,watchable:p=!1}=t,{width:m,height:b}=n.found?n:e,w=a==="fak",E=[f.replacementClass,r?"".concat(f.cssPrefix,"-").concat(r):""].filter(I=>u.classes.indexOf(I)===-1).filter(I=>I!==""||!!I).concat(u.classes).join(" ");let y={children:[],attributes:{...u.attributes,"data-prefix":a,"data-icon":r,class:E,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(m," ").concat(b)}};const A=w&&!~u.classes.indexOf("fa-fw")?{width:"".concat(m/b*16*.0625,"em")}:{};p&&(y.attributes[V]=""),s&&(y.children.push({tag:"title",attributes:{id:y.attributes["aria-labelledby"]||"title-".concat(c||ot())},children:[s]}),delete y.attributes.title);const x={...y,prefix:a,iconName:r,main:e,mask:n,maskId:l,transform:i,symbol:o,styles:{...A,...u.styles}},{children:k,attributes:M}=n.found&&e.found?q("generateAbstractMask",x)||{children:[],attributes:{}}:q("generateAbstractIcon",x)||{children:[],attributes:{}};return x.children=k,x.attributes=M,o?Ta(x):Sa(x)}function ve(t){const{content:e,width:n,height:a,transform:r,title:i,extra:o,watchable:s=!1}=t,l={...o.attributes,...i?{title:i}:{},class:o.classes.join(" ")};s&&(l[V]="");const c={...o.styles};Zt(r)&&(c.transform=fa({transform:r,startCentered:!0,width:n,height:a}),c["-webkit-transform"]=c.transform);const u=ht(c);u.length>0&&(l.style=u);const p=[];return p.push({tag:"span",attributes:l,children:[e]}),i&&p.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),p}function La(t){const{content:e,title:n,extra:a}=t,r={...a.attributes,...n?{title:n}:{},class:a.classes.join(" ")},i=ht(a.styles);i.length>0&&(r.style=i);const o=[];return o.push({tag:"span",attributes:r,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:_t}=S;function Rt(t){const e=t[0],n=t[1],[a]=t.slice(4);let r=null;return Array.isArray(a)?r={tag:"g",attributes:{class:"".concat(f.cssPrefix,"-").concat(At.GROUP)},children:[{tag:"path",attributes:{class:"".concat(f.cssPrefix,"-").concat(At.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(f.cssPrefix,"-").concat(At.PRIMARY),fill:"currentColor",d:a[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:e,height:n,icon:r}}const Ma={found:!1,width:512,height:512};function ja(t,e){!Ke&&!f.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function zt(t,e){let n=e;return e==="fa"&&f.styleDefault!==null&&(e=W()),new Promise((a,r)=>{if(n==="fa"){const i=dn(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&_t[e]&&_t[e][t]){const i=_t[e][t];return a(Rt(i))}ja(t,e),a({...Ma,icon:f.showMissingIcons&&t?q("missingIconAbstract")||{}:{}})})}const xe=()=>{},Dt=f.measurePerformance&&ct&&ct.mark&&ct.measure?ct:{mark:xe,measure:xe},nt='FA "6.6.0"',Fa=t=>(Dt.mark("".concat(nt," ").concat(t," begins")),()=>pn(t)),pn=t=>{Dt.mark("".concat(nt," ").concat(t," ends")),Dt.measure("".concat(nt," ").concat(t),"".concat(nt," ").concat(t," begins"),"".concat(nt," ").concat(t," ends"))};var re={begin:Fa,end:pn};const ut=()=>{};function Ae(t){return typeof(t.getAttribute?t.getAttribute(V):null)=="string"}function Ra(t){const e=t.getAttribute?t.getAttribute(Kt):null,n=t.getAttribute?t.getAttribute(Qt):null;return e&&n}function za(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(f.replacementClass)}function Da(){return f.autoReplaceSvg===!0?dt.replace:dt[f.autoReplaceSvg]||dt.replace}function Ya(t){return g.createElementNS("http://www.w3.org/2000/svg",t)}function Wa(t){return g.createElement(t)}function gn(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?Ya:Wa}=e;if(typeof t=="string")return g.createTextNode(t);const a=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(i){a.setAttribute(i,t.attributes[i])}),(t.children||[]).forEach(function(i){a.appendChild(gn(i,{ceFn:n}))}),a}function qa(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const dt={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(gn(n),e)}),e.getAttribute(V)===null&&f.keepOriginalSource){let n=g.createComment(qa(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~Jt(e).indexOf(f.replacementClass))return dt.replace(t);const a=new RegExp("".concat(f.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const i=n[0].attributes.class.split(" ").reduce((o,s)=>(s===f.replacementClass||s.match(a)?o.toSvg.push(s):o.toNode.push(s),o),{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}const r=n.map(i=>lt(i)).join(`
`);e.setAttribute(V,""),e.innerHTML=r}};function ke(t){t()}function hn(t,e){const n=typeof e=="function"?e:ut;if(t.length===0)n();else{let a=ke;f.mutateApproach===Gn&&(a=Y.requestAnimationFrame||ke),a(()=>{const r=Da(),i=re.begin("mutate");t.map(r),i(),n()})}}let ie=!1;function bn(){ie=!0}function Yt(){ie=!1}let pt=null;function we(t){if(!ue||!f.observeMutations)return;const{treeCallback:e=ut,nodeCallback:n=ut,pseudoElementsCallback:a=ut,observeMutationsRoot:r=g}=t;pt=new ue(i=>{if(ie)return;const o=W();tt(i).forEach(s=>{if(s.type==="childList"&&s.addedNodes.length>0&&!Ae(s.addedNodes[0])&&(f.searchPseudoElements&&a(s.target),e(s.target)),s.type==="attributes"&&s.target.parentNode&&f.searchPseudoElements&&a(s.target.parentNode),s.type==="attributes"&&Ae(s.target)&&~ea.indexOf(s.attributeName))if(s.attributeName==="class"&&Ra(s.target)){const{prefix:l,iconName:c}=yt(Jt(s.target));s.target.setAttribute(Kt,l||o),c&&s.target.setAttribute(Qt,c)}else za(s.target)&&n(s.target)})}),R&&pt.observe(r,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Ua(){pt&&pt.disconnect()}function $a(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((a,r)=>{const i=r.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(a[o]=s.join(":").trim()),a},{})),n}function Ha(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"";let r=yt(Jt(t));return r.prefix||(r.prefix=W()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=Aa(r.prefix,t.innerText)||ee(r.prefix,Lt(t.innerText))),!r.iconName&&f.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function Va(t){const e=tt(t.attributes).reduce((r,i)=>(r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r),{}),n=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return f.autoA11y&&(n?e["aria-labelledby"]="".concat(f.replacementClass,"-title-").concat(a||ot()):(e["aria-hidden"]="true",e.focusable="false")),e}function Ba(){return{iconName:null,title:null,titleId:null,prefix:null,transform:C,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function _e(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:a,rest:r}=Ha(t),i=Va(t),o=jt("parseNodeAttributes",{},t);let s=e.styleParser?$a(t):[];return{iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:a,transform:C,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:s,attributes:i},...o}}const{styles:Xa}=S;function yn(t){const e=f.autoReplaceSvg==="nest"?_e(t,{styleParser:!1}):_e(t);return~e.extra.classes.indexOf(Ze)?q("generateLayersText",t,e):q("generateSvgReplacementMutation",t,e)}let L=new Set;Qe.map(t=>{L.add("fa-".concat(t))});Object.keys($[h]).map(L.add.bind(L));Object.keys($[_]).map(L.add.bind(L));Object.keys($[O]).map(L.add.bind(L));L=[...L];function Oe(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!R)return Promise.resolve();const n=g.documentElement.classList,a=u=>n.add("".concat(pe,"-").concat(u)),r=u=>n.remove("".concat(pe,"-").concat(u)),i=f.autoFetchSvg?L:Qe.map(u=>"fa-".concat(u)).concat(Object.keys(Xa));i.includes("fa")||i.push("fa");const o=[".".concat(Ze,":not([").concat(V,"])")].concat(i.map(u=>".".concat(u,":not([").concat(V,"])"))).join(", ");if(o.length===0)return Promise.resolve();let s=[];try{s=tt(t.querySelectorAll(o))}catch{}if(s.length>0)a("pending"),r("complete");else return Promise.resolve();const l=re.begin("onTree"),c=s.reduce((u,p)=>{try{const m=yn(p);m&&u.push(m)}catch(m){Ke||m.name==="MissingIcon"&&console.error(m)}return u},[]);return new Promise((u,p)=>{Promise.all(c).then(m=>{hn(m,()=>{a("active"),a("complete"),r("pending"),typeof e=="function"&&e(),l(),u()})}).catch(m=>{l(),p(m)})})}function Ga(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;yn(t).then(n=>{n&&hn([n],e)})}function Ka(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const a=(e||{}).icon?e:Ft(e||{});let{mask:r}=n;return r&&(r=(r||{}).icon?r:Ft(r||{})),t(a,{...n,mask:r})}}const Qa=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=C,symbol:a=!1,mask:r=null,maskId:i=null,title:o=null,titleId:s=null,classes:l=[],attributes:c={},styles:u={}}=e;if(!t)return;const{prefix:p,iconName:m,icon:b}=t;return vt({type:"icon",...t},()=>(B("beforeDOMElementCreation",{iconDefinition:t,params:e}),f.autoA11y&&(o?c["aria-labelledby"]="".concat(f.replacementClass,"-title-").concat(s||ot()):(c["aria-hidden"]="true",c.focusable="false")),ae({icons:{main:Rt(b),mask:r?Rt(r.icon):{found:!1,width:null,height:null,icon:{}}},prefix:p,iconName:m,transform:{...C,...n},symbol:a,title:o,maskId:i,titleId:s,extra:{attributes:c,styles:u,classes:l}})))};var Ja={mixout(){return{icon:Ka(Qa)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=Oe,t.nodeCallback=Ga,t}}},provides(t){t.i2svg=function(e){const{node:n=g,callback:a=()=>{}}=e;return Oe(n,a)},t.generateSvgReplacementMutation=function(e,n){const{iconName:a,title:r,titleId:i,prefix:o,transform:s,symbol:l,mask:c,maskId:u,extra:p}=n;return new Promise((m,b)=>{Promise.all([zt(a,o),c.iconName?zt(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(w=>{let[E,y]=w;m([e,ae({icons:{main:E,mask:y},prefix:o,iconName:a,transform:s,symbol:l,maskId:u,title:r,titleId:i,extra:p,watchable:!0})])}).catch(b)})},t.generateAbstractIcon=function(e){let{children:n,attributes:a,main:r,transform:i,styles:o}=e;const s=ht(o);s.length>0&&(a.style=s);let l;return Zt(i)&&(l=q("generateAbstractTransformGrouping",{main:r,transform:i,containerWidth:r.width,iconWidth:r.width})),n.push(l||r.icon),{children:n,attributes:a}}}},Za={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return vt({type:"layer"},()=>{B("beforeDOMElementCreation",{assembler:t,params:e});let a=[];return t(r=>{Array.isArray(r)?r.map(i=>{a=a.concat(i.abstract)}):a=a.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(f.cssPrefix,"-layers"),...n].join(" ")},children:a}]})}}}},tr={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:a=[],attributes:r={},styles:i={}}=e;return vt({type:"counter",content:t},()=>(B("beforeDOMElementCreation",{content:t,params:e}),La({content:t.toString(),title:n,extra:{attributes:r,styles:i,classes:["".concat(f.cssPrefix,"-layers-counter"),...a]}})))}}}},er={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=C,title:a=null,classes:r=[],attributes:i={},styles:o={}}=e;return vt({type:"text",content:t},()=>(B("beforeDOMElementCreation",{content:t,params:e}),ve({content:t,transform:{...C,...n},title:a,extra:{attributes:i,styles:o,classes:["".concat(f.cssPrefix,"-layers-text"),...r]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:a,transform:r,extra:i}=n;let o=null,s=null;if($e){const l=parseInt(getComputedStyle(e).fontSize,10),c=e.getBoundingClientRect();o=c.width/l,s=c.height/l}return f.autoA11y&&!a&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,ve({content:e.innerHTML,width:o,height:s,transform:r,title:a,extra:i,watchable:!0})])}}};const nr=new RegExp('"',"ug"),Pe=[1105920,1112319],Ee={FontAwesome:{normal:"fas",400:"fas"},...Rn,...Fn,...Hn},Wt=Object.keys(Ee).reduce((t,e)=>(t[e.toLowerCase()]=Ee[e],t),{}),ar=Object.keys(Wt).reduce((t,e)=>{const n=Wt[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function rr(t){const e=t.replace(nr,""),n=ga(e,0),a=n>=Pe[0]&&n<=Pe[1],r=e.length===2?e[0]===e[1]:!1;return{value:Lt(r?e[0]:e),isSecondary:a||r}}function ir(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(e),r=isNaN(a)?"normal":a;return(Wt[n]||{})[r]||ar[n]}function Ie(t,e){const n="".concat(Xn).concat(e.replace(":","-"));return new Promise((a,r)=>{if(t.getAttribute(n)!==null)return a();const o=tt(t.children).filter(m=>m.getAttribute(Nt)===e)[0],s=Y.getComputedStyle(t,e),l=s.getPropertyValue("font-family"),c=l.match(Zn),u=s.getPropertyValue("font-weight"),p=s.getPropertyValue("content");if(o&&!c)return t.removeChild(o),a();if(c&&p!=="none"&&p!==""){const m=s.getPropertyValue("content");let b=ir(l,u);const{value:w,isSecondary:E}=rr(m),y=c[0].startsWith("FontAwesome");let A=ee(b,w),x=A;if(y){const k=ka(w);k.iconName&&k.prefix&&(A=k.iconName,b=k.prefix)}if(A&&!E&&(!o||o.getAttribute(Kt)!==b||o.getAttribute(Qt)!==x)){t.setAttribute(n,x),o&&t.removeChild(o);const k=Ba(),{extra:M}=k;M.attributes[Nt]=e,zt(A,b).then(I=>{const wn=ae({...k,icons:{main:I,mask:ne()},prefix:b,iconName:x,extra:M,watchable:!0}),xt=g.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(xt,t.firstChild):t.appendChild(xt),xt.outerHTML=wn.map(_n=>lt(_n)).join(`
`),t.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function or(t){return Promise.all([Ie(t,"::before"),Ie(t,"::after")])}function sr(t){return t.parentNode!==document.head&&!~Kn.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Nt)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Ne(t){if(R)return new Promise((e,n)=>{const a=tt(t.querySelectorAll("*")).filter(sr).map(or),r=re.begin("searchPseudoElements");bn(),Promise.all(a).then(()=>{r(),Yt(),e()}).catch(()=>{r(),Yt(),n()})})}var lr={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=Ne,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=g}=e;f.searchPseudoElements&&Ne(n)}}};let Ce=!1;var cr={mixout(){return{dom:{unwatch(){bn(),Ce=!0}}}},hooks(){return{bootstrap(){we(jt("mutationObserverCallbacks",{}))},noAuto(){Ua()},watch(t){const{observeMutationsRoot:e}=t;Ce?Yt():we(jt("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const Se=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,a)=>{const r=a.toLowerCase().split("-"),i=r[0];let o=r.slice(1).join("-");if(i&&o==="h")return n.flipX=!0,n;if(i&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(i){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},e)};var fr={mixout(){return{parse:{transform:t=>Se(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=Se(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:a,containerWidth:r,iconWidth:i}=e;const o={transform:"translate(".concat(r/2," 256)")},s="translate(".concat(a.x*32,", ").concat(a.y*32,") "),l="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),c="rotate(".concat(a.rotate," 0 0)"),u={transform:"".concat(s," ").concat(l," ").concat(c)},p={transform:"translate(".concat(i/2*-1," -256)")},m={outer:o,inner:u,path:p};return{tag:"g",attributes:{...m.outer},children:[{tag:"g",attributes:{...m.inner},children:[{tag:n.icon.tag,children:n.icon.children,attributes:{...n.icon.attributes,...m.path}}]}]}}}};const Ot={x:0,y:0,width:"100%",height:"100%"};function Te(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function ur(t){return t.tag==="g"?t.children:[t]}var dr={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),a=n?yt(n.split(" ").map(r=>r.trim())):ne();return a.prefix||(a.prefix=W()),t.mask=a,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:a,main:r,mask:i,maskId:o,transform:s}=e;const{width:l,icon:c}=r,{width:u,icon:p}=i,m=ca({transform:s,containerWidth:u,iconWidth:l}),b={tag:"rect",attributes:{...Ot,fill:"white"}},w=c.children?{children:c.children.map(Te)}:{},E={tag:"g",attributes:{...m.inner},children:[Te({tag:c.tag,attributes:{...c.attributes,...m.path},...w})]},y={tag:"g",attributes:{...m.outer},children:[E]},A="mask-".concat(o||ot()),x="clip-".concat(o||ot()),k={tag:"mask",attributes:{...Ot,id:A,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[b,y]},M={tag:"defs",children:[{tag:"clipPath",attributes:{id:x},children:ur(p)},k]};return n.push(M,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(x,")"),mask:"url(#".concat(A,")"),...Ot}}),{children:n,attributes:a}}}},mr={provides(t){let e=!1;Y.matchMedia&&(e=Y.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],a={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:{...a,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});const i={...r,attributeName:"opacity"},o={tag:"circle",attributes:{...a,cx:"256",cy:"364",r:"28"},children:[]};return e||o.children.push({tag:"animate",attributes:{...r,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...i,values:"1;0;1;1;0;1;"}}),n.push(o),n.push({tag:"path",attributes:{...a,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:e?[]:[{tag:"animate",attributes:{...i,values:"1;0;0;0;0;1;"}}]}),e||n.push({tag:"path",attributes:{...a,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...i,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},pr={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),a=n===null?!1:n===""?!0:n;return t.symbol=a,t}}}},gr=[da,Ja,Za,tr,er,lr,cr,fr,dr,mr,pr];Pa(gr,{mixoutsTo:P});P.noAuto;P.config;P.library;P.dom;const qt=P.parse;P.findIconDefinition;P.toHtml;const hr=P.icon;P.layer;P.text;P.counter;function Le(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function N(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Le(Object(n),!0).forEach(function(a){G(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Le(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function gt(t){"@babel/helpers - typeof";return gt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},gt(t)}function G(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function br(t,e){if(t==null)return{};var n={},a=Object.keys(t),r,i;for(i=0;i<a.length;i++)r=a[i],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function yr(t,e){if(t==null)return{};var n=br(t,e),a,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],!(e.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}function Ut(t){return vr(t)||xr(t)||Ar(t)||kr()}function vr(t){if(Array.isArray(t))return $t(t)}function xr(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Ar(t,e){if(t){if(typeof t=="string")return $t(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return $t(t,e)}}function $t(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function kr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function wr(t){var e,n=t.beat,a=t.fade,r=t.beatFade,i=t.bounce,o=t.shake,s=t.flash,l=t.spin,c=t.spinPulse,u=t.spinReverse,p=t.pulse,m=t.fixedWidth,b=t.inverse,w=t.border,E=t.listItem,y=t.flip,A=t.size,x=t.rotation,k=t.pull,M=(e={"fa-beat":n,"fa-fade":a,"fa-beat-fade":r,"fa-bounce":i,"fa-shake":o,"fa-flash":s,"fa-spin":l,"fa-spin-reverse":u,"fa-spin-pulse":c,"fa-pulse":p,"fa-fw":m,"fa-inverse":b,"fa-border":w,"fa-li":E,"fa-flip":y===!0,"fa-flip-horizontal":y==="horizontal"||y==="both","fa-flip-vertical":y==="vertical"||y==="both"},G(e,"fa-".concat(A),typeof A<"u"&&A!==null),G(e,"fa-rotate-".concat(x),typeof x<"u"&&x!==null&&x!==0),G(e,"fa-pull-".concat(k),typeof k<"u"&&k!==null),G(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(M).map(function(I){return M[I]?I:null}).filter(function(I){return I})}function _r(t){return t=t-0,t===t}function vn(t){return _r(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var Or=["style"];function Pr(t){return t.charAt(0).toUpperCase()+t.slice(1)}function Er(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var a=n.indexOf(":"),r=vn(n.slice(0,a)),i=n.slice(a+1).trim();return r.startsWith("webkit")?e[Pr(r)]=i:e[r]=i,e},{})}function xn(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var a=(e.children||[]).map(function(l){return xn(t,l)}),r=Object.keys(e.attributes||{}).reduce(function(l,c){var u=e.attributes[c];switch(c){case"class":l.attrs.className=u,delete e.attributes.class;break;case"style":l.attrs.style=Er(u);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?l.attrs[c.toLowerCase()]=u:l.attrs[vn(c)]=u}return l},{attrs:{}}),i=n.style,o=i===void 0?{}:i,s=yr(n,Or);return r.attrs.style=N(N({},r.attrs.style),o),t.apply(void 0,[e.tag,N(N({},r.attrs),s)].concat(Ut(a)))}var An=!1;try{An=!0}catch{}function Ir(){if(!An&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Me(t){if(t&&gt(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(qt.icon)return qt.icon(t);if(t===null)return null;if(t&&gt(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Pt(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?G({},t,e):{}}var je={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},oe=Ye.forwardRef(function(t,e){var n=N(N({},je),t),a=n.icon,r=n.mask,i=n.symbol,o=n.className,s=n.title,l=n.titleId,c=n.maskId,u=Me(a),p=Pt("classes",[].concat(Ut(wr(n)),Ut((o||"").split(" ")))),m=Pt("transform",typeof n.transform=="string"?qt.transform(n.transform):n.transform),b=Pt("mask",Me(r)),w=hr(u,N(N(N(N({},p),m),b),{},{symbol:i,title:s,titleId:l,maskId:c}));if(!w)return Ir("Could not find icon",u),null;var E=w.abstract,y={ref:e};return Object.keys(n).forEach(function(A){je.hasOwnProperty(A)||(y[A]=n[A])}),Nr(E[0],y)});oe.displayName="FontAwesomeIcon";oe.propTypes={beat:d.bool,border:d.bool,beatFade:d.bool,bounce:d.bool,className:d.string,fade:d.bool,flash:d.bool,mask:d.oneOfType([d.object,d.array,d.string]),maskId:d.string,fixedWidth:d.bool,inverse:d.bool,flip:d.oneOf([!0,!1,"horizontal","vertical","both"]),icon:d.oneOfType([d.object,d.array,d.string]),listItem:d.bool,pull:d.oneOf(["right","left"]),pulse:d.bool,rotation:d.oneOf([0,90,180,270]),shake:d.bool,size:d.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:d.bool,spinPulse:d.bool,spinReverse:d.bool,symbol:d.oneOfType([d.bool,d.string]),title:d.string,titleId:d.string,transform:d.oneOfType([d.string,d.object]),swapOpacity:d.bool};var Nr=xn.bind(null,Ye.createElement);const Cr="_header_1q9nq_1",Sr="_indicator_1q9nq_18",Tr={header:Cr,"header--left":"_header--left_1q9nq_6","header--right":"_header--right_1q9nq_10","header-children":"_header-children_1q9nq_14",indicator:Sr,"indicator--expanded":"_indicator--expanded_1q9nq_24","indicator--collapsed":"_indicator--collapsed_1q9nq_28"},Et=Z(Tr),se=T.forwardRef(function({children:e,indicatorPos:n="left",className:a,...r},i){const{expanded:o,disabled:s,variant:l,color:c="gray",toggle:u}=T.useContext(Bt);return v.jsxs(Pn,{ref:i,className:[Et(["header",`header--${n}`]),a].join(" "),onClick:u,disabled:s,variant:l,colorVariant:c,...r,children:[v.jsx("div",{className:Et(["header-children"]),children:e}),v.jsx("div",{className:Et(["indicator",`indicator--${o?"expanded":"collapsed"}`]),children:v.jsx(oe,{icon:Cn})})]})});se.__docgenInfo={description:"",methods:[],displayName:"AccordionHeader",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},indicatorPos:{required:!1,tsType:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:"",defaultValue:{value:'"left"',computed:!1}}},composes:["ComponentPropsWithoutRef"]};const Lr="_content_3di6z_1",Mr={content:Lr,"first-row":"_first-row_3di6z_7","content--collapsed":"_content--collapsed_3di6z_11","content--expanded":"_content--expanded_3di6z_15"},Fe=Z(Mr),le=T.forwardRef(function({children:e,className:n},a){const{expanded:r}=T.useContext(Bt);return v.jsx("div",{ref:a,className:[Fe(["content",`content--${r?"expanded":"collapsed"}`]),n].join(" "),children:v.jsx("div",{className:Fe(["first-row"]),children:e})})});le.__docgenInfo={description:"",methods:[],displayName:"AccordionContent",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const jr="_ul_1cbwh_1",Fr={ul:jr},Rr=Z(Fr),kn=T.forwardRef(function({children:e,className:n,unstyled:a=!1,...r},i){return v.jsx("ul",{ref:i,className:`${a?"":Rr(["ul"])} ${n}`,...r,children:e})});kn.__docgenInfo={description:"",methods:[],displayName:"List",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},unstyled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}},composes:["ComponentPropsWithoutRef"]};const zr="_li_1lqhj_1",Dr={li:zr},Yr=Z(Dr),Ht=T.forwardRef(function({children:e,className:n,...a},r){return v.jsx("li",{ref:r,className:[Yr(["li"]),n].join(" "),...a,children:e})});Ht.__docgenInfo={description:"",methods:[],displayName:"ListItem",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""}},composes:["ComponentPropsWithoutRef"]};const Wr="_button_1jbbe_1",qr={button:Wr,"variant--plain":"_variant--plain_1jbbe_13","variant--outline":"_variant--outline_1jbbe_22","variant--soft":"_variant--soft_1jbbe_29","variant--solid":"_variant--solid_1jbbe_35"},Ur=Z(qr),Vt=T.forwardRef(function({children:e,onClick:n,as:a="button",variant:r,className:i,...o},s){const l=c=>{n&&n(c)};return v.jsx(a,{ref:s,onClick:l,className:[Ur(["button"]),i,`variant--${r}`].join(" "),...o,children:e})});Vt.__docgenInfo={description:"",methods:[],displayName:"ListItemButton",props:{value:{required:!1,tsType:{name:"string"},description:""},as:{required:!1,tsType:{name:"T"},description:"",defaultValue:{value:'"button"',computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'plain' | 'outline' | 'soft' | 'solid'",elements:[{name:"literal",value:"'plain'"},{name:"literal",value:"'outline'"},{name:"literal",value:"'soft'"},{name:"literal",value:"'solid'"}]},description:""}},composes:["ComponentPropsWithoutRef"]};const Gr={title:"Accordion",component:Xt,subcomponents:{AccordionHeader:se,AccordionContent:le},parameters:{layout:"centered"},tags:["autodocs"],argTypes:{},args:{onClick:On()}},ft={render:t=>v.jsxs(Xt,{...t,style:{display:"flex",flexDirection:"column",alignItems:"stretch",justifyContent:"stretch"},children:[v.jsx(se,{children:"Header"}),v.jsx(le,{children:v.jsxs(kn,{children:[v.jsx(Ht,{children:v.jsx(Vt,{children:"Item 1"})}),v.jsx(Ht,{children:v.jsx(Vt,{children:"Item 2"})})]})})]})};var Re,ze,De;ft.parameters={...ft.parameters,docs:{...(Re=ft.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  render: (args: AccordionProps & RefAttributes<HTMLDivElement>) => <Accordion {...args} style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "stretch"
  }}>
      <AccordionHeader>Header</AccordionHeader>
      <AccordionContent>
        <List>
          <ListItem>
            <ListItemButton>Item 1</ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>Item 2</ListItemButton>
          </ListItem>
        </List>
      </AccordionContent>
    </Accordion>
}`,...(De=(ze=ft.parameters)==null?void 0:ze.docs)==null?void 0:De.source}}};const Kr=["OneItem"];export{ft as OneItem,Kr as __namedExportsOrder,Gr as default};
