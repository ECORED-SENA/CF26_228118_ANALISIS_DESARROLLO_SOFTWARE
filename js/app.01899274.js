(function(e){function a(a){for(var t,o,c=a[0],s=a[1],u=a[2],d=0,l=[];d<c.length;d++)o=c[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&l.push(i[o][0]),i[o]=0;for(t in s)Object.prototype.hasOwnProperty.call(s,t)&&(e[t]=s[t]);f&&f(a);while(l.length)l.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,a=0;a<r.length;a++){for(var n=r[a],t=!0,o=1;o<n.length;o++){var c=n[o];0!==i[c]&&(t=!1)}t&&(r.splice(a--,1),e=s(s.s=n[0]))}return e}var t={},o={app:0},i={app:0},r=[];function c(e){return s.p+"js/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3",tema4:"tema4"}[e]||e)+"."+{actividad:"ec0b98b8","chunk-0206bfa0":"07f4fcb8","chunk-110f1f0b":"c729ecf3","chunk-13a6037e":"725eca6a","chunk-179248a2":"0882ec97","chunk-18f95272":"bb47be6d","chunk-2a9fce91":"79146cce","chunk-2c06842c":"f5617033","chunk-2d0c5615":"01eba69d","chunk-2d0e96ec":"ec734bee","chunk-2d208d90":"ab67193c","chunk-2d21d0e2":"f77c22e4","chunk-2d22c123":"c9115eca","chunk-2e80bb9a":"b3e4ecbc","chunk-319206de":"06f535cf","chunk-36769079":"0093655a","chunk-4cdd78c0":"b1eae698","chunk-515a8379":"471b9110","chunk-53ccb27e":"03f89fab","chunk-55d286b8":"69a8245e","chunk-59974754":"d7b5c639","chunk-5d1ce150":"33dbeb12","chunk-60cbc06b":"e7f70342","chunk-623f2040":"f9fac6f0","chunk-659152b8":"3f7b8817","chunk-6a43ec24":"3e891bb4","chunk-6e1e538a":"034b6f92","chunk-6e613899":"2a976d39","chunk-766a929b":"1ae4942d","chunk-7794bb60":"f954ae38","chunk-c796899c":"ed37a8e2","chunk-e8a7823a":"c0dd9220","chunk-fde47172":"7ec6a62b",comple:"589bc0db",creditos:"a69d078c",glosario:"77c7c1ac",intro:"5a0ce72c",referencias:"ac81ac0a",sintesis:"585aae43",tema1:"a3e63b7d",tema2:"a0c7def9",tema3:"b6c7cee2",tema4:"aa892ef1"}[e]+".js"}function s(a){if(t[a])return t[a].exports;var n=t[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var a=[],n={"chunk-110f1f0b":1,"chunk-179248a2":1,"chunk-2a9fce91":1,"chunk-515a8379":1,"chunk-59974754":1,"chunk-5d1ce150":1,"chunk-60cbc06b":1,"chunk-623f2040":1,"chunk-6a43ec24":1,"chunk-6e1e538a":1,"chunk-6e613899":1,"chunk-766a929b":1,"chunk-7794bb60":1,comple:1,creditos:1,glosario:1,referencias:1};o[e]?a.push(o[e]):0!==o[e]&&n[e]&&a.push(o[e]=new Promise((function(a,n){for(var t="css/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3",tema4:"tema4"}[e]||e)+"."+{actividad:"31d6cfe0","chunk-0206bfa0":"31d6cfe0","chunk-110f1f0b":"52141945","chunk-13a6037e":"31d6cfe0","chunk-179248a2":"52141945","chunk-18f95272":"31d6cfe0","chunk-2a9fce91":"52141945","chunk-2c06842c":"31d6cfe0","chunk-2d0c5615":"31d6cfe0","chunk-2d0e96ec":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2e80bb9a":"31d6cfe0","chunk-319206de":"31d6cfe0","chunk-36769079":"31d6cfe0","chunk-4cdd78c0":"31d6cfe0","chunk-515a8379":"144fe8e0","chunk-53ccb27e":"31d6cfe0","chunk-55d286b8":"31d6cfe0","chunk-59974754":"a40274bd","chunk-5d1ce150":"52141945","chunk-60cbc06b":"09438581","chunk-623f2040":"52141945","chunk-659152b8":"31d6cfe0","chunk-6a43ec24":"52141945","chunk-6e1e538a":"3ba0a060","chunk-6e613899":"52141945","chunk-766a929b":"3f6e7581","chunk-7794bb60":"52141945","chunk-c796899c":"31d6cfe0","chunk-e8a7823a":"31d6cfe0","chunk-fde47172":"31d6cfe0",comple:"cd8c6689",creditos:"bc78b515",glosario:"e41e9b6e",intro:"31d6cfe0",referencias:"dacc3e1a",sintesis:"31d6cfe0",tema1:"31d6cfe0",tema2:"31d6cfe0",tema3:"31d6cfe0",tema4:"31d6cfe0"}[e]+".css",i=s.p+t,r=document.getElementsByTagName("link"),c=0;c<r.length;c++){var u=r[c],d=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(d===t||d===i))return a()}var l=document.getElementsByTagName("style");for(c=0;c<l.length;c++){u=l[c],d=u.getAttribute("data-href");if(d===t||d===i)return a()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=a,f.onerror=function(a){var t=a&&a.target&&a.target.src||i,r=new Error("Loading CSS chunk "+e+" failed.\n("+t+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=t,delete o[e],f.parentNode.removeChild(f),n(r)},f.href=i;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){o[e]=0})));var t=i[e];if(0!==t)if(t)a.push(t[2]);else{var r=new Promise((function(a,n){t=i[e]=[a,n]}));a.push(t[2]=r);var u,d=document.createElement("script");d.charset="utf-8",d.timeout=120,s.nc&&d.setAttribute("nonce",s.nc),d.src=c(e);var l=new Error;u=function(a){d.onerror=d.onload=null,clearTimeout(f);var n=i[e];if(0!==n){if(n){var t=a&&("load"===a.type?"missing":a.type),o=a&&a.target&&a.target.src;l.message="Loading chunk "+e+" failed.\n("+t+": "+o+")",l.name="ChunkLoadError",l.type=t,l.request=o,n[1](l)}i[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:d})}),12e4);d.onerror=d.onload=u,document.head.appendChild(d)}return Promise.all(a)},s.m=e,s.c=t,s.d=function(e,a,n){s.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,a){if(1&a&&(e=s(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var t in e)s.d(n,t,function(a){return e[a]}.bind(null,t));return n},s.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(a,"a",a),a},s.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},s.p="",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=a,u=u.slice();for(var l=0;l<u.length;l++)a(u[l]);var f=d;r.push([0,"chunk-vendors"]),n()})({0:function(e,a,n){e.exports=n("56d7")},"4c29":function(e,a,n){e.exports=n.p+"img/2.8fb26574.png"},"52e5":function(e,a,n){e.exports=n.p+"img/cc.58a75e32.svg"},"56d7":function(e,a,n){"use strict";n.r(a);n("e260"),n("e6cf"),n("cca6"),n("a79d");var t=n("68f3"),o=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"app",attrs:{id:"app"}},[n("Header"),n("div",{staticClass:"contenedor-principal"},[n("AsideMenu"),n("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[n("router-view")],1)],1),n("BarraAvance"),n("Accesibilidad")],1)},i=[],r={name:"App",data:function(){return{menuOpen:!1}},computed:{menuState:function(){return this.$store.getters.isMenuOpen}},mounted:function(){this.$aos.init({offset:100})}},c=r,s=n("2877"),u=Object(s["a"])(c,o,i,!1,null,null,null),d=u.exports,l=(n("d3b7"),n("3ca3"),n("ddb0"),n("b0c0"),n("2b0e")),f=n("8c4f"),m=n("ae58"),p=n("7e58");l["a"].use(f["a"]);var b=new f["a"]({routes:[{path:"/",name:"inicio",component:m["a"]},{path:"/introduccion",name:"introduccion",component:function(){return n.e("intro").then(n.bind(null,"5167"))}},{path:"/curso",name:"curso",component:p["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return n.e("tema1").then(n.bind(null,"02c8"))}},{path:"tema2",name:"tema2",component:function(){return n.e("tema2").then(n.bind(null,"fd11"))}},{path:"tema3",name:"tema3",component:function(){return n.e("tema3").then(n.bind(null,"eb46"))}},{path:"tema4",name:"tema4",component:function(){return n.e("tema4").then(n.bind(null,"3eb5"))}}]},{path:"/actividad",name:"actividad",component:function(){return n.e("actividad").then(n.bind(null,"4298"))}},{path:"/glosario",name:"glosario",component:function(){return n.e("glosario").then(n.bind(null,"69a7"))}},{path:"/complementario",name:"complementario",component:function(){return n.e("comple").then(n.bind(null,"dd8c"))}},{path:"/referencias",name:"referencias",component:function(){return n.e("referencias").then(n.bind(null,"64ef"))}},{path:"/sintesis",name:"sintesis",component:function(){return n.e("sintesis").then(n.bind(null,"15a3"))}},{path:"/creditos",name:"creditos",component:function(){return n.e("creditos").then(n.bind(null,"2e81"))}}],scrollBehavior:function(e,a){if(e.hash){var n={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===a.name?n:new Promise((function(e){setTimeout((function(){e(n)}),500)}))}setTimeout((function(){window.scrollTo({left:0,top:0,behavior:"auto"})}),100)}}),h=b,g=n("1c2c"),v=(n("a3a0"),{global:{componenteFormativo:"Las pruebas de <i>software</i>",descripcionCurso:"Las pruebas de <i>software</i> evalúan la calidad del código a través de diversos métodos. Las pruebas funcionales, unitarias y de integración se enfocan en la funcionalidad y la interacción de componentes. Por otro lado, las pruebas no funcionales y de rendimiento miden aspectos como la escalabilidad y la eficiencia. Cada tipo tiene ventajas, como la precisión, y desventajas, como el tiempo requerido.",imagenBannerPrincipal:n("74b5"),fondoBannerPrincipal:n("ce7c"),imagenesDecorativasBanner:[{clases:["banner-principal-decorativo-1","d-none","d-lg-block"],imagen:n("c9c7")},{clases:["banner-principal-decorativo-2"],imagen:n("4c29")},{clases:["banner-principal-decorativo-3"],imagen:n("cd2b")}]},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"introduccion",icono:"fas fa-info-circle",titulo:"Introducción",desarrolloContenidos:!0},{nombreRuta:"tema1",numero:"1",titulo:"Generalidades de las pruebas de <i>software</i>",desarrolloContenidos:!0},{nombreRuta:"tema2",numero:"2",titulo:"Tipos de pruebas y sus características",desarrolloContenidos:!0,subMenu:[{numero:"2.1",titulo:"Pruebas funcionales",hash:"t_2_1"},{numero:"2.2",titulo:"Pruebas unitarias",hash:"t_2_2"},{numero:"2.3",titulo:"Pruebas de integración",hash:"t_2_3"},{numero:"2.4",titulo:"Pruebas no funcionales",hash:"t_2_4"},{numero:"2.5",titulo:"Pruebas de rendimiento",hash:"t_2_5"},{numero:"2.6",titulo:"Ventajas y desventajas de los tipos de pruebas",hash:"t_2_6"}]},{nombreRuta:"tema3",numero:"3",titulo:"Los casos de pruebas",desarrolloContenidos:!0},{nombreRuta:"tema4",numero:"4",titulo:"Desarrollo guiado por pruebas",desarrolloContenidos:!0}],subMenu:[{icono:"fas fa-sitemap",titulo:"Síntesis",nombreRuta:"sintesis",desarrolloContenidos:!0},{nombreRuta:"actividad",icono:"far fa-question-circle",titulo:"Actividad didáctica",desarrolloContenidos:!0},{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-file-pdf",titulo:"Descargar PDF",download:"downloads/228118_CF26_DU.pdf"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},complementario:[{tema:"Tipos de pruebas y sus características",referencia:"IBM. (2021). <i>Pruebas funcionales</i>. ",tipo:"Página web",link:"https://www.ibm.com/docs/es/rtw/9.1.0?topic=SSBLQQ_9.1.0/com.ibm.rational.test.ft.doc/topics/Getting_Started_With_Ivory.html"},{tema:"Tipos de pruebas y sus características",referencia:"IBM. (2021). <i>Pruebas de rendimiento</i>. ",tipo:"Página web",link:"https://www.ibm.com/docs/es/rtw/9.0.0?topic=phases-performance-testing"}],glosario:[{termino:"<i>Bottom-up</i>",significado:"pruebas ascendentes."},{termino:"QA (<i>Quality Assurance</i>)",significado:"especialistas en pruebas de <i>software</i>, verifican que un <i>software</i> no contenga fallos."},{termino:"<i>Refactory</i>",significado:"acción de limpiar o reconstruir el código de una aplicación."},{termino:"TDD",significado:"desarrollo dirigido por pruebas. "},{termino:"<i>Top-down</i>",significado:"pruebas descendentes."}],referencias:[{referencia:"Herranz, J.I. (2021). TDD como metodología de diseño de software.",link:"https://www.paradigmadigital.com/dev/tdd-como-metodologia-de-diseno-de-software/"},{referencia:"IBM (2021). Pruebas de rendimiento.",link:"https://www.ibm.com/docs/es/rtw/9.0.0?topic=phases-performance-testing"},{referencia:"IBM (2021). Pruebas funcionales.",link:"https://www.ibm.com/docs/es/rtw/9.1.0?topic=SSBLQQ_9.1.0/com.ibm.rational.test.ft.doc/topics/Getting_Started_With_Ivory.html"},{referencia:"Mera Paz, J. A. (2016). Análisis del proceso de pruebas de calidad de software. Ingeniería solidaria, 12 (20)."},{referencia:"Organización ISO. (2020). Ingeniería de sistemas y software - Requisitos de calidad y evaluación de sistemas y software (SQuaRE) - Guía de SQuaRE.",link:"https://www.iso.org/standard/64764.html"},{referencia:"Sánchez, A.F (2017). Agile Testing. Estado del arte. Su aplicación en empresas TIC de Extremadura. Universidad De Extremadura."},{referencia:"Sanz, L. F. (2005). Un sondeo sobre la práctica actual de pruebas de software en España. REICIS. Revista Española de Innovación, Calidad e Ingeniería del Software,1(2), pp. 43-54."}],creditos:[{titulo:"ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES",autores:[{nombre:"Milady Tatiana Villamil Castellanos",cargo:"Responsable del Ecosistema",centro:"Dirección General"},{nombre:"Olga Constanza Bermúdez Jaimes",cargo:"Responsable de Línea de Producción",centro:"Centro de Servicios de Salud - Regional Antioquia"}]},{titulo:"CONTENIDO INSTRUCCIONAL",autores:[{nombre:"Mario Fernando Meneses Calvache",cargo:"Experto Temático",centro:"Centro de Teleinformática y Producción Industrial - Regional Cauca"},{nombre:"Carlos Hernán Muñoz",cargo:"Experto Temático",centro:"Centro de Teleinformática y Producción Industrial - Regional Cauca"},{nombre:"Ana Catalina Córdoba Sus",cargo:"Evaluadora instruccional",centro:"Centro de Servicios de Salud - Regional Antioquia"}]},{titulo:"DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES",autores:[{nombre:"Yerson Fabian Zarate Saavedra",cargo:"Diseñador de Contenidos Digitales",centro:"Centro de Servicios de Salud - Regional Antioquia"},{nombre:"Edward Leonardo Pico Cabra",cargo:"Desarrollador Fullstack",centro:"Centro de Servicios de Salud - Regional Antioquia"},{nombre:"Edgar Mauricio Cortes Garcia",cargo:"Actividad Didáctica",centro:"Centro de Servicios de Salud - Regional Antioquia"}]},{titulo:"VALIDACIÓN RECURSO EDUCATIVO DIGITAL",autores:[{nombre:"Jaime Hernán Tejada Llano",cargo:"Validador de Recursos Educativos Digitales",centro:"Centro de Servicios de Salud - Regional Antioquia"},{nombre:"Daniel Ricardo Mutis Gómez",cargo:"Evaluador para contenidos inclusivos y accesibles",centro:"Centro de Servicios de Salud - Regional Antioquia"},{nombre:"Margarita Marcela Medrano Gómez",cargo:"Evaluador para contenidos inclusivos y accesibles",centro:"Centro de Servicios de Salud - Regional Antioquia"}]}],creditosAdicionales:{imagenes:'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',creativeCommons:'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>'}});t["a"].prototype.$config=v;var k=n("9224");t["a"].prototype.$package=k,new t["a"]({router:h,store:g["a"],render:function(e){return e(d)}}).$mount("#app")},"74b5":function(e,a,n){e.exports=n.p+"img/banner-princiapal.cbab0d2c.png"},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-2021","version":"7.0.2","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"ecored-base-pkg":"6.0.2","vue":"^2.6.14","vue-router":"^3.5.2","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.13","@vue/cli-plugin-eslint":"^4.5.13","@vue/cli-plugin-router":"^4.5.13","@vue/cli-plugin-vuex":"^4.5.13","@vue/cli-service":"^4.5.13","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.4.1","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.6.14"}}')},a00a:function(e,a,n){e.exports=n.p+"img/logo-sena.47d29d11.svg"},a3a0:function(e,a,n){},c9c7:function(e,a,n){e.exports=n.p+"img/1.33efdd96.png"},cd2b:function(e,a,n){e.exports=n.p+"img/3.c92de591.png"},ce7c:function(e,a,n){e.exports=n.p+"img/fondo-banner-principal.ef4a5b8f.png"}});
//# sourceMappingURL=app.01899274.js.map