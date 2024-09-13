"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7948],{3327:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>p,frontMatter:()=>d,metadata:()=>l,toc:()=>a});var s=i(4848),t=i(8453);const d={sidebar_position:2},o="Updating",l={id:"various-roles/admins-guide/updating",title:"Updating",description:"Updating Spec-Up-T means two things:",source:"@site/docs/various-roles/admins-guide/updating.md",sourceDirName:"various-roles/admins-guide",slug:"/various-roles/admins-guide/updating",permalink:"/spec-up-t-website/docs/various-roles/admins-guide/updating",draft:!1,unlisted:!1,editUrl:"https://github.com/blockchainbird/spec-up-t-website/tree/main/docs/various-roles/admins-guide/updating.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Intro",permalink:"/spec-up-t-website/docs/various-roles/admins-guide/introduction"},next:{title:"Extra Tools",permalink:"/spec-up-t-website/docs/various-roles/admins-guide/tools"}},r={},a=[{value:"Updating the npm package called Spec-Up-T",id:"updating-the-npm-package-called-spec-up-t",level:2},{value:"Updating your installation",id:"updating-your-installation",level:2},{value:"Source files in the Installer",id:"source-files-in-the-installer",level:3},{value:"<code>package.json</code>",id:"packagejson",level:3},{value:"Copy the following files to the root of your installation:",id:"copy-the-following-files-to-the-root-of-your-installation",level:3},{value:"GitHub token",id:"github-token",level:3},{value:"Terms",id:"terms",level:3},{value:"&quot;terms-and-definitions-intro.md\u201d",id:"terms-and-definitions-intromd",level:3},{value:"<code>npm update</code>",id:"npm-update",level:3},{value:"Done",id:"done",level:3}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"updating",children:"Updating"}),"\n",(0,s.jsx)(n.p,{children:"Updating Spec-Up-T means two things:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Updating the ",(0,s.jsx)(n.strong,{children:"npm package called Spec-Up-T"})]}),"\n",(0,s.jsxs)(n.li,{children:["Updating ",(0,s.jsx)(n.strong,{children:"your own installation"}),", which you did via the installer, uses the Spec-Up-T npm package."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"updating-the-npm-package-called-spec-up-t",children:"Updating the npm package called Spec-Up-T"}),"\n",(0,s.jsxs)(n.p,{children:["If you installed Spec-Up-T, you probably did so via the installer. This installer uses the Spec-Up-T npm package via the ",(0,s.jsx)(n.code,{children:"node_modules"})," directory in which Spec-Up-T is installed. To update the package, you can use the standard procedure at the command line:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm update\n"})}),"\n",(0,s.jsx)(n.h2,{id:"updating-your-installation",children:"Updating your installation"}),"\n",(0,s.jsx)(n.p,{children:"Updating your installation requires manually copying and updating files (an automated update script may be made in the future)."}),"\n",(0,s.jsx)(n.p,{children:"Here is a step-by-step description:"}),"\n",(0,s.jsx)(n.h3,{id:"source-files-in-the-installer",children:"Source files in the Installer"}),"\n",(0,s.jsxs)(n.p,{children:["The information (files, code) to be copied to your existing Spec-Up-T installation can be found in the ",(0,s.jsxs)(n.a,{href:"https://github.com/blockchainbird/spec-up-t-starter-pack/tree/main/spec-up-t-starterpack",children:["directory ",(0,s.jsx)(n.code,{children:"spec-up-t-starterpack"})," of the installer"]}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"packagejson",children:(0,s.jsx)(n.code,{children:"package.json"})}),"\n",(0,s.jsxs)(n.p,{children:["Copy the following information from the ",(0,s.jsx)(n.code,{children:"package.json"})," file in the aforementioned installer files into the ",(0,s.jsx)(n.code,{children:"package.json"})," of your Spec-Up-T installation:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Overwrite the entire ",(0,s.jsx)(n.code,{children:"scripts"})," section"]}),"\n",(0,s.jsxs)(n.li,{children:["Update the ",(0,s.jsx)(n.code,{children:"dependencies"})," as follows:"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'"dependencies": {\n    "dotenv": "^16.4.5",\n    "spec-up-t": "^1.0.8"\n  }\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Change version:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'  "version": "1.0.49"\n'})}),"\n",(0,s.jsx)(n.h3,{id:"copy-the-following-files-to-the-root-of-your-installation",children:"Copy the following files to the root of your installation:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"main.sh"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"remove-xref.js"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"postinstall-message.js"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"help.txt"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"logo.svg"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:".env.example"})}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"github-token",children:"GitHub token"}),"\n",(0,s.jsxs)(n.p,{children:["If you have a GitHub Token, rename ",(0,s.jsx)(n.code,{children:".env.example"})," to ",(0,s.jsx)(n.code,{children:".env"}),", then put it in ",(0,s.jsx)(n.code,{children:".env"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"terms",children:"Terms"}),"\n",(0,s.jsxs)(n.p,{children:["You should place the terms in their own directory. This directory is defined in ",(0,s.jsx)(n.code,{children:"specs.json"}),' as "spec_terms_directory".']}),"\n",(0,s.jsxs)(n.p,{children:["A JSON file containing the references to these files should also exist. This file should be called ",(0,s.jsx)(n.code,{children:"term-index.json"}),"."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Create ",(0,s.jsx)(n.code,{children:"term-index.json"})," in the root"]}),"\n",(0,s.jsxs)(n.li,{children:['Move everything with "term-definitions" over to ',(0,s.jsx)(n.code,{children:"term-index.json"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'[\n  "terms-definitions/aal.md",\n  "terms-definitions/abac.md",\n  "terms-definitions/acceptance.md",\n  "terms-definitions/acceptance-network.md",\n  "terms-definitions/access-control.md",\n  ... etc.\n]\n'})}),"\n",(0,s.jsx)(n.h3,{id:"terms-and-definitions-intromd",children:'"terms-and-definitions-intro.md\u201d'}),"\n",(0,s.jsx)(n.p,{children:'The "terms-and-definitions-intro.md" file is needed as a pointer for Spec-Up-T where to place the term files in the generated specification file.'}),"\n",(0,s.jsxs)(n.p,{children:['Make sure there is an entry "terms-and-definitions-intro.md" in specs.json and create it as a file in the directory called ',(0,s.jsx)(n.code,{children:"/specs"}),". It's okay if it is empty, but it can also contain an intro text."]}),"\n",(0,s.jsx)(n.h3,{id:"npm-update",children:(0,s.jsx)(n.code,{children:"npm update"})}),"\n",(0,s.jsxs)(n.p,{children:["Run ",(0,s.jsx)(n.code,{children:"npm update"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm update\n"})}),"\n",(0,s.jsx)(n.h3,{id:"done",children:"Done"}),"\n",(0,s.jsx)(n.p,{children:"Now you have an updated Spec-Up-T installation."})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>l});var s=i(6540);const t={},d=s.createContext(t);function o(e){const n=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);