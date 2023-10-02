(this.webpackJsonpprotfolio_nicolas_beckerich=this.webpackJsonpprotfolio_nicolas_beckerich||[]).push([[0],{28:function(e,t,i){},32:function(e,t,i){},33:function(e,t,i){},35:function(e,t,i){},36:function(e,t,i){},37:function(e,t,i){},38:function(e,t,i){},39:function(e,t,i){},40:function(e,t,i){},41:function(e,t,i){},42:function(e,t,i){},44:function(e,t,i){"use strict";i.r(t);var n=i(9),c=i(3),s=i(1),a=i(0),o=Object(s.createContext)(),l=function(e){var t=e.children,i=Object(s.useState)("light"),n=Object(c.a)(i,2),l=n[0],r=n[1];Object(s.useEffect)((function(){var e=window.matchMedia("(prefers-color-scheme: dark)");r(e.matches?"dark":"light"),e.addEventListener("change",(function(e){r(e.matches?"dark":"light")}))}),[]);return Object(a.jsx)(o.Provider,{value:[{themeName:l,toggleTheme:function(){var e="dark"===l?"light":"dark";localStorage.setItem("themeName",e),r(e)}}],children:t})},r="https://nicolasbeckerich.github.io/Portfolio_Nicolas_Beckerich",u="NB.",d={name:"Nicolas Beckerich",role:"D\xe9veloppeur Web Junior",description:"Form\xe9 pendant 8 mois avec OpenClassrooms dans le domaine du d\xe9veloppement Web.",social:{github:"https://github.com/NicolasBeckerich"}},j=[{name:"Kasa",description:"R\xe9alisation de la plateforme Web Kasa en utilisant React pour les composants, React Router pour la navigation, Sass pour le style et les animations.\n\nDifficult\xe9 : Gestion de l'interactivit\xe9 des \xe9l\xe9ments d\xe9roulants (Collapse).\n\nSolution : Utilisation du hook useState pour g\xe9rer l'\xe9tat ouvert/ferm\xe9 du composant Collapse et du Sass pour les styles de transitions.",stack:["React","SASS"],sourceCode:"https://github.com/NicolasBeckerich/Kasa",livePreview:"https://nicolasbeckerich.github.io/Kasa"},{name:"Sophie Bluel Portfolio",description:"R\xe9alisation d'un site portfolio pour une architecte, int\xe9grant une page de pr\xe9sentation, une interface de connexion administrateur et une modale d'upload d'images.\n\n Difficult\xe9: Communication avec l'API pour manipulation des donn\xe9es.\n\nSolution: Ma\xeetrise de fetch en Javascript pour effectuer des requ\xeates GET, PUT et autres m\xe9thodes afin d'optimiser la communication avec l'API. ",stack:["JavaScript","HTML","CSS"],sourceCode:"https://github.com/NicolasBeckerich/Sophie_Bluel"},{name:"Nina Carducci",description:"Optimisation du site de Photographe de Nina Carducci pour am\xe9liorer le SEO, l'accessibilit\xe9, le r\xe9f\xe9rencement, la performance et correction des bugs sp\xe9cifiques.\n\nDifficult\xe9 : Int\xe9gration de Schema.org pour le r\xe9f\xe9rencement local.\n\n Solution: Utilisation de documentation sp\xe9cifiques pour simplifier le processus ",stack:["JavaScript","HTML","CSS"],sourceCode:"https://github.com/NicolasBeckerich/Nina_Carducci",livePreview:"https://nicolasbeckerich.github.io/Nina_Carducci/"},{name:"Booki",description:"R\xe9alisation du site de voyage Booki en HTML et CSS.\n\nDifficult\xe9: Mettre le site en responsive durant le projet.\n\nSolution: Utilisation de m\xe9dia queries pour faire correspondre le site au format tablette et mobile.",stack:["HTML","CSS"],sourceCode:"https://github.com/NicolasBeckerich/Booki",livePreview:"https://nicolasbeckerich.github.io/Booki"},{name:"Mon vieux grimoire",description:"R\xe9alisation de l'API back-end pour le site de r\xe9f\xe9rencement et de notation de livres Mon Vieux grimoire en prenant en compte les pratiques du Green Code.\n\n Difficult\xe9 : L'optimisation et la conversion des images upload par l'utilisateur.\n\nSolution : Utilisation de Sharp dans le middleware de traitement d'images afin de les convertir en format .webp et les optimiser.",stack:["Node.js","Express.js","MongoDB"],sourceCode:"https://github.com/NicolasBeckerich/Mon_Vieux_Grimoire"},{name:"Menu Maker By Qwenta",description:"Pr\xe9paration et planification du d\xe9veloppement du site Menu Maker by Qwenta en effectuant une veille, en d\xe9finissant les sp\xe9cifications techniques et en organisant la gestion de projet.\n\nDifficult\xe9 : D\xe9terminer la temporalit\xe9 des phases de d\xe9veloppement.\n\n Solution : Etablissement d'un tableau Kanban pour planifier et suivre les t\xe2ches du projet, permettant ainsi une gestion efficace du calendrier de d\xe9veloppement.",stack:["Trello"]}],h=["JavaScript","HTML","CSS","React","SASS","Express.js","Node.js","Sharp","MongoDB","Trello","Git","Figma","Visual Studio Code"],b="beckerichnicolas@gmail.com",m=i(16),p=i.n(m),f=i(14),O=i.n(f),x=i(18),k=i.n(x),v=i(17),N=i.n(v),g=(i(28),function(){var e=Object(s.useContext)(o),t=Object(c.a)(e,1)[0],i=t.themeName,n=t.toggleTheme,l=Object(s.useState)(!1),r=Object(c.a)(l,2),u=r[0],d=r[1],m=function(){return d(!u)};return Object(a.jsxs)("nav",{className:"center nav",children:[Object(a.jsxs)("ul",{style:{display:u?"flex":null},className:"nav__list",children:[j.length?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#projects",onClick:m,className:"link link--nav",children:"Projets"})}):null,h.length?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#skills",onClick:m,className:"link link--nav",children:"Comp\xe9tences"})}):null,b?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#contact",onClick:m,className:"link link--nav",children:"Contact"})}):null]}),Object(a.jsx)("button",{type:"button",onClick:n,className:"btn btn--icon nav__theme","aria-label":"toggle theme",children:"dark"===i?Object(a.jsx)(O.a,{}):Object(a.jsx)(p.a,{})}),Object(a.jsx)("button",{type:"button",onClick:m,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:u?Object(a.jsx)(N.a,{}):Object(a.jsx)(k.a,{})})]})}),_=(i(32),function(){var e=r,t=u;return Object(a.jsxs)("header",{className:"header center",children:[Object(a.jsx)("h3",{children:e?Object(a.jsx)("a",{href:e,className:"link",children:t}):t}),Object(a.jsx)(g,{})]})}),S=i(11),C=i.n(S),B=i(19),w=i.n(B),M=(i(33),function(){var e=d.name,t=d.role,i=d.description,n=d.resume,c=d.social;return Object(a.jsxs)("div",{className:"about center",children:[e&&Object(a.jsxs)("h1",{children:["Bonjour, je suis ",Object(a.jsxs)("span",{className:"about__name",children:[e,"."]})]}),t&&Object(a.jsxs)("h2",{className:"about__role",children:[" ",t,"."]}),Object(a.jsx)("p",{className:"about__desc",children:i&&i}),Object(a.jsxs)("div",{className:"about__contact center",children:[n&&Object(a.jsx)("a",{href:n,children:Object(a.jsx)("span",{type:"button",className:"btn btn--outline",children:"CV"})}),c&&Object(a.jsxs)(a.Fragment,{children:[c.github&&Object(a.jsx)("a",{href:c.github,"aria-label":"github",className:"link link--icon",children:Object(a.jsx)(C.a,{})}),c.linkedin&&Object(a.jsx)("a",{href:c.linkedin,"aria-label":"linkedin",className:"link link--icon",children:Object(a.jsx)(w.a,{})})]})]})]})}),P=i(7),y=i.n(P),E=i(20),T=i.n(E),D=(i(35),function(e){var t=e.project;return Object(a.jsxs)("div",{className:"project",children:[Object(a.jsx)("h3",{children:t.name}),Object(a.jsx)("p",{className:"project__description",children:t.description}),t.stack&&Object(a.jsx)("ul",{className:"project__stack",children:t.stack.map((function(e){return Object(a.jsx)("li",{className:"project__stack-item",children:e},y()())}))}),t.sourceCode&&Object(a.jsx)("a",{href:t.sourceCode,"aria-label":"source code",className:"link link--icon",children:Object(a.jsx)(C.a,{})}),t.livePreview&&Object(a.jsx)("a",{href:t.livePreview,"aria-label":"live preview",className:"link link--icon",children:Object(a.jsx)(T.a,{})})]})}),L=(i(36),function(){return j.length?Object(a.jsxs)("section",{id:"projects",className:"section projects",children:[Object(a.jsx)("h2",{className:"section__title",children:"Projets"}),Object(a.jsx)("div",{className:"projects__grid",children:j.map((function(e){return Object(a.jsx)(D,{project:e},y()())}))})]}):null}),R=(i(37),function(){return h.length?Object(a.jsxs)("section",{className:"section skills",id:"skills",children:[Object(a.jsx)("h2",{className:"section__title",children:"Comp\xe9tences"}),Object(a.jsx)("ul",{className:"skills__list",children:h.map((function(e){return Object(a.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},y()())}))})]}):null}),J=i(21),q=i.n(J),I=(i(38),function(){var e=Object(s.useState)(!1),t=Object(c.a)(e,2),i=t[0],n=t[1];return Object(s.useEffect)((function(){var e=function(){return window.pageYOffset>500?n(!0):n(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),i?Object(a.jsx)("div",{className:"scroll-top",children:Object(a.jsx)("a",{href:"#top",children:Object(a.jsx)(q.a,{fontSize:"large"})})}):null}),A=(i(39),function(){return b?Object(a.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(a.jsx)("h2",{className:"section__title",children:"Contact"}),Object(a.jsx)("a",{href:"mailto:".concat(b),children:Object(a.jsx)("span",{type:"button",className:"btn btn--outline",children:"e-mail"})})]}):null}),G=(i(40),function(){return Object(a.jsx)("footer",{className:"footer",children:Object(a.jsx)("a",{href:"https://github.com/NicolasBeckerich/Portfolio_Nicolas_Beckerich",className:"link footer__link",children:"Created By Nicolas Beckerich"})})}),H=(i(41),function(){var e=Object(s.useContext)(o),t=Object(c.a)(e,1)[0].themeName;return Object(a.jsxs)("div",{id:"top",className:"".concat(t," app"),children:[Object(a.jsx)(_,{}),Object(a.jsxs)("main",{children:[Object(a.jsx)(M,{}),Object(a.jsx)(L,{}),Object(a.jsx)(R,{}),Object(a.jsx)(A,{})]}),Object(a.jsx)(I,{}),Object(a.jsx)(G,{})]})});i(42);Object(n.render)(Object(a.jsx)(l,{children:Object(a.jsx)(H,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.ee29d3e6.chunk.js.map