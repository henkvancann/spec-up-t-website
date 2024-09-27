"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9151],{3200:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var n=i(4848),r=i(8453);const o={sidebar_position:2},s="Term References",a={id:"various-roles/terminology-authors-guide/term-references",title:"Term References",description:"See the demo site.",source:"@site/docs/various-roles/terminology-authors-guide/term-references.md",sourceDirName:"various-roles/terminology-authors-guide",slug:"/various-roles/terminology-authors-guide/term-references",permalink:"/spec-up-t-website/docs/various-roles/terminology-authors-guide/term-references",draft:!1,unlisted:!1,editUrl:"https://github.com/blockchainbird/spec-up-t-website/tree/main/docs/various-roles/terminology-authors-guide/term-references.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Intro",permalink:"/spec-up-t-website/docs/various-roles/terminology-authors-guide/introduction"},next:{title:"External Term References",permalink:"/spec-up-t-website/docs/various-roles/terminology-authors-guide/external-term-references"}},d={},l=[{value:"Definition Lists",id:"definition-lists",level:2},{value:"What are the \u201c~\u201d ?",id:"what-are-the--",level:2},{value:"Table-defined Terms",id:"table-defined-terms",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"term-references",children:"Term References"}),"\n",(0,n.jsxs)(t.p,{children:["See the ",(0,n.jsx)(t.a,{href:"https://blockchainbird.github.io/spec-up-t-demo-on-documentation-website/#term:term-1",children:"demo site"}),"."]}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsx)(t.p,{children:"If you've been working with Spec-Up, it's good to know that adding a term file doesn't require adding it to the configuration file anymore; it's automatic now."})}),"\n",(0,n.jsx)(t.h2,{id:"definition-lists",children:"Definition Lists"}),"\n",(0,n.jsx)(t.p,{children:"Many specs may want to include a section for terminology references, and Definition Lists are a great way to do that. Here's how to leverage Spec-Up's automatic term reference features via Definition List markup:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-markdown",children:"[[def: Term 1, Term One]]:\n~ This is the first term we will define.\n\n~ Second paragraph\n\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Now let's refer to some of the terms defined above to show how the auto-linking of terms works. Additionally, as long as you define your terms using Definition Lists (as seen in the markdown above), you will be able to hover any reference to a term to see a tooltip with its definition. See the ",(0,n.jsx)(t.a,{href:"https://blockchainbird.github.io/spec-up-t-demo-on-documentation-website/#term:term-1",children:"demo site"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"what-are-the--",children:"What are the \u201c~\u201d ?"}),"\n",(0,n.jsx)(t.p,{children:"That is how Markdown indicates that it is a <dd></dd>, the definition part of a \u201cdefinition list.\u201d Just use it for each sentence. In the future, we want to catch this automated so that if you accidentally forget it, you still get it right."}),"\n",(0,n.jsx)(t.p,{children:"What goes wrong if you don't? You see, some things don't fold in and out properly, for example, because the structure of the HTML is no longer correct."}),"\n",(0,n.jsx)(t.h2,{id:"table-defined-terms",children:"Table-defined Terms"}),"\n",(0,n.jsx)(t.p,{children:"You can also reference table-oriented terms and definitions which are decomposed into heading-titled attributes in distinct cells:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-markdown",children:"Variable            | Default Value  | Max Value\n------------------- | -------------  | ---------\n[[def: Variable 1]] | 123            | 9999\n"})}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Variable"}),(0,n.jsx)(t.th,{children:"Default Value"}),(0,n.jsx)(t.th,{children:"Max Value"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"[[def: Variable 1]]"}),(0,n.jsx)(t.td,{children:"123"}),(0,n.jsx)(t.td,{children:"9999"})]})})]}),"\n",(0,n.jsx)(t.p,{children:"Anytime you add a definition of a term in the first column of a table, like [[ref: Variable 1]], it will link to the cell and display a tooltip with the entire set of row values when you hover the term."})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>s,x:()=>a});var n=i(6540);const r={},o=n.createContext(r);function s(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);