"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8838],{2234:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>c});var r=i(4848),s=i(8453);const t={sidebar_position:3},d="General Guide",o={id:"various-roles/general-guide",title:"General Guide",description:"These are general instructions.",source:"@site/docs/various-roles/general-guide.md",sourceDirName:"various-roles",slug:"/various-roles/general-guide",permalink:"/spec-up-t-website/docs/various-roles/general-guide",draft:!1,unlisted:!1,editUrl:"https://github.com/blockchainbird/spec-up-t-website/tree/main/docs/various-roles/general-guide.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Technical skills needed",permalink:"/spec-up-t-website/docs/various-roles/technical-skills-needed"},next:{title:"Content Authors Guide",permalink:"/spec-up-t-website/docs/category/content-authors-guide"}},l={},c=[{value:"Look up xrefs",id:"look-up-xrefs",level:4},{value:"Create index.html",id:"create-indexhtml",level:4},{value:"You are ready",id:"you-are-ready",level:4},{value:"View your specification",id:"view-your-specification",level:4},{value:"Three different modes",id:"three-different-modes",level:4},{value:"Automation",id:"automation",level:4}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h4:"h4",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"general-guide",children:"General Guide"}),"\n",(0,r.jsx)(n.p,{children:"These are general instructions."}),"\n",(0,r.jsx)(n.h4,{id:"look-up-xrefs",children:"Look up xrefs"}),"\n",(0,r.jsx)(n.p,{children:"Xrefs are [To Do: write explanation]"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"npm run xrefs\n"})}),"\n",(0,r.jsx)(n.p,{children:"Now the references to external specs are generated, if any."}),"\n",(0,r.jsx)(n.h4,{id:"create-indexhtml",children:"Create index.html"}),"\n",(0,r.jsxs)(n.p,{children:["The final result will be just one file: ",(0,r.jsx)(n.code,{children:"index.html"}),". This file is rendered or rerendered with the following command:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"npm run render\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Now an index.html file is created in the ",(0,r.jsx)(n.code,{children:"docs"})," directory. This is the default directory, specified in the ",(0,r.jsx)(n.code,{children:"specs.json"})," file."]}),"\n",(0,r.jsx)(n.h4,{id:"you-are-ready",children:"You are ready"}),"\n",(0,r.jsxs)(n.p,{children:["Now you have a basic Spec-Up-T specification file (",(0,r.jsx)(n.code,{children:"index.html"}),") with the following content:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["a ",(0,r.jsx)(n.code,{children:"specs.json"})," file"]}),"\n",(0,r.jsxs)(n.li,{children:["a ",(0,r.jsx)(n.code,{children:"spec/"})," directory with a sample markdown files"]}),"\n",(0,r.jsxs)(n.li,{children:["a ",(0,r.jsx)(n.code,{children:"docs"})," directory with a sample index.html file"]}),"\n",(0,r.jsxs)(n.li,{children:["a ",(0,r.jsx)(n.code,{children:"node_modules"})," directory, a ",(0,r.jsx)(n.code,{children:"package.json"})," file and a ",(0,r.jsx)(n.code,{children:"package-lock.json"})," file (these three elements belong to the ",(0,r.jsx)(n.code,{children:"npm"})," system)"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"view-your-specification",children:"View your specification"}),"\n",(0,r.jsxs)(n.p,{children:["So the ",(0,r.jsx)(n.code,{children:"index.html"})," is the endresult. You should view it in a browser. Er zijn twee manieren om dit te doen:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["via ",(0,r.jsx)(n.code,{children:"http://"})]}),"\n",(0,r.jsxs)(n.li,{children:["via ",(0,r.jsx)(n.code,{children:"file:///"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["The simplest way to do so is via ",(0,r.jsx)(n.code,{children:"file:///"}),": go to the ",(0,r.jsx)(n.code,{children:"index.html"})," file with your Explorer, Finder or other file manager, and double-click on it. Usually it now opens in your browser."]}),"\n",(0,r.jsx)(n.p,{children:"If not, go to the browser, and try to open the file from the browser menu."}),"\n",(0,r.jsxs)(n.p,{children:["This way you open the ",(0,r.jsx)(n.code,{children:"index.html"})," file via the ",(0,r.jsx)(n.code,{children:"file protocol"})," (\u201c",(0,r.jsx)(n.code,{children:"file:///"}),"\u201d)."]}),"\n",(0,r.jsxs)(n.p,{children:["What you can also do is access it via ",(0,r.jsx)(n.code,{children:"HTTP"}),". You then need to place the ",(0,r.jsx)(n.code,{children:"index.html"})," file on a web server and access it through a browser using the url under which the file is accessible."]}),"\n",(0,r.jsx)(n.p,{children:"This way you can share it with the world by sharing the url."}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:"HTTP stands for HyperText Transfer Protocol. It is the foundation of any data exchange on the Web and it is a protocol used for transmitting hypertext requests and information on the internet. HTTP is used by the World Wide Web and defines how messages are formatted and transmitted, and how web servers and browsers should respond to various commands."})}),"\n",(0,r.jsx)(n.h4,{id:"three-different-modes",children:"Three different modes"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"npm run render"})," is not the only way to go. There are three different modes for rendering the specification:"]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"command"}),(0,r.jsx)(n.th,{children:"behavior"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"npm run edit"})}),(0,r.jsxs)(n.td,{children:["after rendering, this will stay running and the ",(0,r.jsx)(n.code,{children:"gulp"})," library will watch the source files in your spec directory/ies for changes and re-render any time you save a file. Opening these rendered files in a browser and refreshing them will keep you up to date."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"npm run render"})}),(0,r.jsx)(n.td,{children:"this renders the site once and does not keep a gulpy watch on the underlying files."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"npm run dev"})}),(0,r.jsx)(n.td,{children:"this enables debugging features."})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"automation",children:"Automation"}),"\n",(0,r.jsxs)(n.p,{children:["The above scripts can easily be triggered by ",(0,r.jsx)(n.a,{href:"../glossary#github-actions",children:"github actions"}),".  See ",(0,r.jsx)(n.a,{href:"https://github.com/decentralized-identity/spec-up/blob/master/.github/workflows/render-specs.yml",children:"this repo's example"})]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>d,x:()=>o});var r=i(6540);const s={},t=r.createContext(s);function d(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);