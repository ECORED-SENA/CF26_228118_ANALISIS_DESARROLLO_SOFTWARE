<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 2
      h1 Tipos de pruebas y sus características

    p(data-aos="fade-down") En los últimos años, se han propuesto algunos principios, con el fin de establecer pautas universales para que los programadores de #[i software] las adapten a sus procesos de pruebas. Mera (2016), lista los siguientes principios:

    .row.justify-content-center
      .col-lg-3.my-3.mov
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/10.png', alt='')      
      .col-lg-9.my-3(data-aos="fade-left")
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg6")
          div(titulo="Las pruebas muestran la presencia de defectos")
            p Las pruebas son herramientas que facilitan detectar defectos, no obstante, no garantizan que no haya defectos ocultos y no es una evidencia de que el #[i software] esté óptimo. 
          div(titulo="Pruebas tempranas")
            p Encontrar los errores en etapas tempranas, permite un importante ahorro de recursos.     
          div(titulo="No es posible realizar pruebas exhaustivas")
            p Hay que realizar un análisis de riesgos, para identificar prioridades y tener una óptima toma de decisiones, centralizando esfuerzos y utilizando el talento humano y recursos de manera correcta.             

    .row.justify-content-center.mb-4 
      .col-lg-9.my-3(data-aos="fade-left")
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg6")
          div(titulo="Las pruebas dependen del contexto")
            p Estas dependen del contexto en el cual se ejecutan, por lo cual, se debe dar más énfasis en las que sean para un sistema crítico, como un #[i software] financiero, para el cual se requiere realizar más pruebas, en comparación con otras aplicaciones con niveles críticos bajos.     
          div(titulo="Agrupación de defectos")
            p Las pruebas deben agruparse, la mayoría de fallos operativos se enfocan en un número reducido de módulos.  
          div(titulo="La paradoja de los pesticidas")
            p No hay que repetir la misma prueba varias veces, por lo cual es importante que los casos de prueba se revisen constantemente y escribir nuevos, con el fin de encontrar más defectos.     
          div(titulo="Ausencia de error")
            p De nada sirve corregir en el sistema si este no cumple con los requerimientos o necesidades del usuario.             
      .col-lg-3.my-3.mov
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/11.png', alt='')    

    h5.t2(data-aos="fade-down") Conozcamos cuáles son los tipos de pruebas que se pueden realizar. 

    Separador 
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 2.1 Pruebas funcionales 

    p(data-aos="fade-down") IBM (2021), plantea que estas pruebas se basan en la ejecución y revisión de las funciones y en su interoperabilidad con sistemas específicos, se llevan a cabo en todos los niveles de prueba. Buscan evaluar cada una de las opciones con las que cuenta el paquete informático, principalmente en el comportamiento externo del producto o aplicativo, también se las identifica como de tipo caja negra.

    .titulo-sexto.color-acento-contenido
      h5 Figura 1.
      span Pruebas funcionales
    .bgfig1.p-5.mb-5(data-aos="zoom-in") 
      img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/13.svg', alt='Esquema que señala diversos tipos de pruebas funcionales: pruebas de interfaz de usuario GUI, pruebas de interfaz de compatibilidad, pruebas de aceptación de usuario, pruebas de regresión, pruebas de instalación.')     

    Separador 
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 2.2 Pruebas unitarias

    p(data-aos="fade-down").mb-4 Las pruebas unitarias o como también se las conocen, #[i Unit testing], son pequeños #[i test], en los cuales se revisa que el comportamiento de un objeto y su lógica funcionen adecuadamente. Por lo general, se realiza durante la fase de desarrollo de las aplicaciones o #[i software], y es ejecutada por los programadores, aunque también pueden realizarlas los aseguradores de calidad. Las razones por las cuales se desarrollan este tipo de pruebas, son: 
    .row.bg7.align-items-center
      .col-lg-12.col-12.px-lg-5.px-4.pb-4 
        .row.justify-content-center.align-items-center          
          .col-lg-12
            .row.justify-content-center.mb-5
              .col-xl-3.col-md-6.col-11.mb-4.mb-xl-0.d-none.d-md-block
                .crd_hover_txt(data-aos="flip-left")
                  .crd_hover_txt--img
                    figure
                      img(src="@/assets/curso/temas/14.png", alt="alt")
                  .crd_hover_txt--body.text-white.text-center
                    h4.mb-3 Prueba uno 
                    p.mb-0 Son rápidas de realizar, por lo que se pueden realizar en gran cantidad.

              .col-xl-3.col-md-6.col-11.mb-4.mb-xl-0.d-none.d-md-block
                .crd_hover_txt(data-aos="flip-left")
                  .crd_hover_txt--img
                    figure
                      img(src="@/assets/curso/temas/15.png", alt="alt")
                  .crd_hover_txt--body.text-white.text-center
                    h4.mb-3 Prueba dos 
                    p.mb-0 Demuestran que la lógica del código funciona en todos los casos.    

              .col-xl-3.col-md-6.col-11.mb-4.mb-xl-0.d-none.d-md-block
                .crd_hover_txt(data-aos="flip-left")
                  .crd_hover_txt--img
                    figure
                      img(src="@/assets/curso/temas/16.png", alt="alt")
                  .crd_hover_txt--body.text-white.text-center
                    h4.mb-3 Prueba tres 
                    p.mb-0 Permite a los programadores entender bien el código base, lo que facilitará realizar cambios oportunos. 

              .col-xl-3.col-md-6.col-11.mb-4.mb-xl-0.d-none.d-md-block
                .crd_hover_txt(data-aos="flip-left")
                  .crd_hover_txt--img
                    figure
                      img(src="@/assets/curso/temas/17.png", alt="alt")
                  .crd_hover_txt--body.text-white.text-center
                    h4.mb-3 Prueba cuatro 
                    p.mb-0  Se obtendrá un código de calidad. 

              .col-xl-6.col-md-6.col-11.mb-4.mb-xl-0.d-block.d-md-none
                .crd_txt.text-white.brad.p-3.text-center.h-100
                  img.img-a.img-t.mb-4(src="@/assets/curso/temas/14.png", alt="alt")
                  h4.mb-3 Prueba uno 
                  p.mb-0 Son rápidas de realizar, por lo que se pueden realizar en gran cantidad.

              .col-xl-6.col-md-6.col-11.mb-4.mb-xl-0.d-block.d-md-none
                .crd_txt.text-white.brad.p-3.text-center.h-100
                  img.img-a.img-t.mb-4(src="@/assets/curso/temas/15.png", alt="alt")
                  h4.mb-3 Prueba dos 
                  p.mb-0 Demuestran que la lógica del código funciona en todos los casos.    

              .col-xl-6.col-md-6.col-11.mb-4.mb-xl-0.d-block.d-md-none
                .crd_txt.text-white.brad.p-3.text-center.h-100
                  img.img-a.img-t.mb-4(src="@/assets/curso/temas/16.png", alt="alt")
                  h4.mb-3 Prueba tres 
                  p.mb-0 Permite a los programadores entender bien el código base, lo que facilitará realizar cambios oportunos. 

              .col-xl-6.col-md-6.col-11.mb-4.mb-xl-0.d-block.d-md-none
                .crd_txt.text-white.brad.p-3.text-center.h-100
                  img.img-a.img-t.mb-4(src="@/assets/curso/temas/17.png", alt="alt")
                  h4.mb-3 Prueba cuatro 
                  p.mb-0  Se obtendrá un código de calidad.    

            .row.justify-content-center.mb-4    
              .col-lg-9.my-3 
                p(data-aos="fade-down").mb-0 En algunos casos, las pruebas pueden hacerse de manera manual, pero lo mejor es usar herramientas que permitan ejecutar el servicio de la mejor manera posible. Existen muchas herramientas en el mercado y estas varían en función del lenguaje de programación que se esté utilizando; a continuación, se mencionarán algunas de las más conocidas:   
              .col-lg-3.my-3
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/18.png', alt='')              


            .row.justify-content-center.text-center.mb-4 
              .col-lg-3.col-md-6.my-3
                .bg9.h-100
                  .bg8.p-4(data-aos="fade-down") 
                    img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/20.png', alt='')             

                  .p-4(data-aos="fade-up")
                    h5(data-aos="fade-down") xUnit
                    p(data-aos="fade-down").mb-0 Es una herramienta de pruebas unitarias para el framework.NET.

              .col-lg-3.col-md-6.my-3
                .bg9.h-100
                  .bg8.p-4(data-aos="fade-down") 
                    img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/21.png', alt='')             

                  .p-4(data-aos="fade-up")
                    h5(data-aos="fade-down") Junit
                    p(data-aos="fade-down").mb-0 Es una herramienta de pruebas de aplicaciones Java.

              .col-lg-3.col-md-6.my-3
                .bg9.h-100
                  .bg8.p-4(data-aos="fade-down") 
                    img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/22.png', alt='')             

                  .p-4(data-aos="fade-up")
                    h5(data-aos="fade-down") Nunit
                    p(data-aos="fade-down").mb-0 Es una herramienta de pruebas de plataformas .NET.

              .col-lg-3.col-md-6.my-3
                .bg9.h-100
                  .bg8.p-4(data-aos="fade-down") 
                    img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/23.png', alt='')             

                  .p-4(data-aos="fade-up")
                    h5(data-aos="fade-down") PHPUnit
                    p(data-aos="fade-down").mb-0 Es una herramienta de pruebas de programación PHP.      

            h5.t2(data-aos="fade-down") Para realizar las pruebas unitarias se deben tener en cuenta los siguientes criterios:
            .row.justify-content-center.mb-4 
              .col-lg-6.my-3
                .crd_txt.p-4.brad.h-100
                  ol.lista-ol--cuadro.fa-ul.mb-0
                    li 
                      .lista-ol--cuadro__vineta
                        span 1
                      span.text-white Probar un solo código a la vez.
                    li 
                      .lista-ol--cuadro__vineta
                        span 2
                      span.text-white Hay que realizar pruebas frecuentemente mientras se programa.
                    li 
                      .lista-ol--cuadro__vineta
                        span 3
                      span.text-white Corregir los #[i bugs] identificados en las pruebas antes de continuar.
                    li.mb-0 
                      .lista-ol--cuadro__vineta
                        span 4
                      span.text-white Cualquier cambio que se realice también debe pasar la prueba.
              .col-lg-6.my-3
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/24.png', alt='')   

    Separador 
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 2.3 Pruebas de integración

    p(data-aos="fade-down") De acuerdo con Mera (2016), estas pruebas son las encargadas de verificar el óptimo acople entre los componentes y probar las interfaces entre los módulos, como el sistema de archivos en integración con el #[i hardware] y el componente de validación de usuario con el sistema operativo.

    h5.t2(data-aos="fade-down") Se deben tener en cuenta los objetos típicos de prueba, los cuales son:

    .row.justify-content-center.mb-4 
      .col-lg-6.my-3
        .crd_txt.p-4.brad.h-100
          .row.justify-content-center
            .col-lg-7.j
              ol.lista-ol--cuadro.fa-ul.mb-0
                li 
                  .lista-ol--cuadro__vineta
                    span 1
                  span.text-white Bases de datos de subsistemas.
                li 
                  .lista-ol--cuadro__vineta
                    span 2
                  span.text-white Datos de configuración.
                li 
                  .lista-ol--cuadro__vineta
                    span 3
                  span.text-white Configuración del sistema.
                li 
                  .lista-ol--cuadro__vineta
                    span 4
                  span.text-white Infraestructura.

                li 
                  .lista-ol--cuadro__vineta
                    span 5
                  span.text-white Interfaces.
            .col-lg-5.j
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/25.png', alt='')       

      .col-lg-6.my-3
        .bg2.brad.p-4.h-100
          p(data-aos="fade-down") Ahora, las principales funcionalidades de las pruebas de integración, son: #[b verificar que un gran conjunto de partes de la aplicación funcionen juntas; verificar el correcto ensamble entre componentes, para que funcionen adecuadamente; no necesita resguardo, lo cual es un gran beneficio; se realiza en cada uno de los módulos del sistema y se inicia desde los módulos de abajo hacia arriba.]
          .row.justify-content-end
            .col-auto      
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/26.png', alt='')    

    p(data-aos="fade-down") El mismo autor argumenta que en las pruebas de integración se revisan las interfaces entre componentes o subsistemas, para cerciorarse de que son llamados cuando se necesite y que los datos o mensajes que se transmiten son los adecuados. #[b.t2 Existen los siguientes tipos de pruebas de integración:] 

    .row.justify-content-center
      .col-lg-3.my-3.mov
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/27.png', alt='')      
      .col-lg-9.my-3(data-aos="fade-left")
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg6")
          div(titulo="Integración incremental")
            p Se prueba el nuevo componente en conjunto con los que ya se probaron y se incrementa progresivamente con los nuevos componentes que se probarán.           
          div(titulo="Descendente")
            p También conocidas como #[i top down], se realizan siguiendo el flujo de control, ejemplo, desde el GUI o menú principal y los componentes o sistemas se sustituyen por stubs.        
          div(titulo="Ascendente")
            p También conocidas como #[i bottom-up], las pruebas se ejecutan desde la parte inferior del flujo hacia arriba y los componentes o sistemas se sustituyen por controladores.           
          div(titulo="Integración no incremental")
            p También conocida como #[i Big-bang], se prueba cada componente por separado y al final, se integran todos de una vez, realizando las pruebas pertinentes.    
          div(titulo="Combinadas")
            p Se desarrolla combinando el enfoque ascendente y descendente, pero hay que realizar una planificación, para que los componentes individuales se encuentren en el medio.     

    Separador 
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 2.4 Pruebas no funcionales

    p(data-aos="fade-down") En este tipo de pruebas se comprueban los requisitos basados en la operación de un #[i software], no en su funcionalidad. Estas pruebas pueden ayudar a establecer la carga que resiste el producto, si su rendimiento es el adecuado o si es estable a nivel de contacto con el servidor, en otras palabras, nos dice si tienen un bajo desempeño o rendimiento en la producción. #[b.t2 Aquí se encuentran:]     

    .row.bg10.align-items-center.pt-3.mb-4
      .col-lg-12.col-12.px-lg-5.px-4.up
        .row.justify-content-center.align-items-center
          .col-md-6.col-lg-4.mb-4.mb-md-0.up.d-none.d-lg-block(data-aos="fade-right")
            img(src='@/assets/curso/temas/29.png', alt='')
          .col-md-11.col-lg-8.mb-4.mb-md-0.up(data-aos="fade-left")
            SlyderF.text-center.mb-3(columnas="col-lg-6")
              .tarjeta.bgcard.ts.h-100.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img.img-a.img-t(src='@/assets/curso/temas/30.png' alt='')
                h5 Pruebas de carga 
                p.mb-0 Simulan la demanda esperada que puede tener una aplicación y mide el resultado.        
              .tarjeta.bgcard.ts.h-100.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img.img-a.img-t(src='@/assets/curso/temas/31.png' alt='')
                h5 Pruebas de rendimiento 
                p.mb-0 Se calcula la respuesta del programa con diferentes medidas de peticiones del usuario.        

              .tarjeta.bgcard.ts.h-100.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img.img-a.img-t(src='@/assets/curso/temas/32.png' alt='')
                h5 Pruebas de volumen 
                p.mb-0 Se prueba el funcionamiento del programa con ciertos volúmenes de datos.        
              .tarjeta.bgcard.ts.h-100.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img.img-a.img-t(src='@/assets/curso/temas/33.png' alt='')
                h5 Pruebas de estrés 
                p.mb-0 Cuántos usuarios o peticiones puede soportar el programa, con esta prueba se determina si el sistema es estable.   

              .tarjeta.bgcard.ts.h-100.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img.img-a.img-t(src='@/assets/curso/temas/34.png' alt='')
                h5 Pruebas de configuración 
                p.mb-0 Aquí se valida qué efectos en el desempeño tienen los cambios de configuración que se pueden aplicar, como en diferentes #[i hardware], #[i software], versiones y navegadores.        
              .tarjeta.bgcard.ts.h-100.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img.img-a.img-t(src='@/assets/curso/temas/35.png' alt='')
                h5 Prueba de resistencia 
                p.mb-0 Aquí se prueba cómo se comporta una aplicación luego de un uso prolongado.   

              .tarjeta.bgcard.ts.h-100.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img.img-a.img-t(src='@/assets/curso/temas/36.png' alt='')
                h5 Pruebas de evaluación 
                p.mb-0 Se evalúa si la aplicación cumple con los objetivos para la cual fue diseñada.        
              .tarjeta.bgcard.ts.h-100.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img.img-a.img-t(src='@/assets/curso/temas/37.png' alt='')
                h5 Pruebas de usabilidad 
                p.mb-0 Se centran en validar qué tan fácil se utiliza el programa en cuanto a facilidad de aprendizaje, eficiencia, memorización, errores y satisfacción.

    Separador 
    #t_2_5.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 2.5 Pruebas de rendimiento

    p(data-aos="fade-down") Según IBM (2021), estas pruebas sirven para evaluar lo rápido que el programa realiza una tarea en condiciones específicas de trabajo, también evalúa la escalabilidad, fiabilidad y uso de los recursos. #[b.t2 Los objetivos de estas pruebas son:]   

    .row.justify-content-center
      .col-lg-3.my-3.mov
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/38.png', alt='')      
      .col-lg-9.my-3(data-aos="fade-left")
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg6")
          div(titulo="Identificar y localizar problemas de rendimiento")
            p Es permitir encontrar un fallo en el rendimiento, y también ayudar a localizar en qué parte está ese problema de rendimiento, para poder solucionarlo. 
          div(titulo="Verificar el cumplimiento de los SLA ")
            p SLA - Acuerdos de Nivel de Servicio. Se utiliza para medir los tiempos de respuesta del #[i software] en condiciones y tiempos específicos. 
          div(titulo="Localizar cuellos de botella")
            p Ayudar a detallar en qué lugar se generan estos cuellos de botella, si se debe a problemas de #[i hardware] como CPU, memoria, o es el ancho de banda.  

    Separador 
    #t_2_6.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 2.6 Ventajas y desventajas de los tipos de pruebas

    p(data-aos="fade-down") Todo proceso tiene sus ventajas y desventajas, a continuación, se presentan cada una de ellas.

    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Pruebas funcionales" :icono="require('@/assets/curso/temas/44.svg')")
        .row.justify-content-center.p-4
          .col-lg-6.mb-4.mb-md-0
            .row.mb-4
              .col-auto.bg3.px-2.m-1.p-1
                h5.text-center.mb-0 Pruebas funcionales 
            ul.lista-ul--color.fa-ul.mb-0.ms-0
              li 
                i.fas.fa-code.color1
                | Optimiza las funcionalidades y la calidad del producto.
              li 
                i.fas.fa-code.color1
                | Verifica que la seguridad y la arquitectura sean las adecuadas.
              li 
                i.fas.fa-code.color1
                span Asegura que el comportamiento del #[i software] y de todas sus funciones sea el esperado.
              li 
                i.fas.fa-code.color1
                span Se asegura que el #[i software] o aplicación esté libre de errores. 
        
          .col-lg-5
            img.img-a.img-t(src='@/assets/curso/temas/40.png', alt='')   

      .py-4.py-md-5(titulo="Pruebas unitarias" :icono="require('@/assets/curso/temas/45.svg')")
        .row.justify-content-center.p-4
          .col-lg-6.mb-4.mb-md-0
            .row.mb-4
              .col-auto.bg3.px-2.m-1.p-1
                h5.text-center.mb-0 Pruebas unitarias 
            ul.lista-ul--color.fa-ul.mb-0.ms-0
              li 
                i.fas.fa-code.color1
                | Simplifica la integración y permite una buena documentación.
              li 
                i.fas.fa-code.color1
                | Funciona con el proceso de desarrollo ágil.
              li 
                i.fas.fa-code.color1
                | Detección temprana de errores en sus funcionalidades, lo que minimiza tiempo y costos.
              li 
                i.fas.fa-code.color1
                | Optimiza la efectividad del código.

        
          .col-lg-5
            img.img-a.img-t(src='@/assets/curso/temas/41.png', alt='')  

      .py-4.py-md-5(titulo="Pruebas de integración" :icono="require('@/assets/curso/temas/46.svg')")
        .row.justify-content-center.p-4
          .col-lg-6.mb-4.mb-md-0
            .row.mb-4
              .col-auto.bg3.px-2.m-1.p-1
                h5.text-center.mb-0 Pruebas de integración 
            ul.lista-ul--color.fa-ul.mb-0.ms-0
              li 
                i.fas.fa-code.color1
                | Detalla los errores y conflictos en cada módulo y en sus conexiones.
              li 
                i.fas.fa-code.color1
                | Mejora la calidad del código.
              li 
                i.fas.fa-code.color1
                span Garantiza que las funciones del #[i software] serán confiables y estables entre sus módulos.
              li 
                i.fas.fa-code.color1
                span Garantiza que todos los módulos del #[i software] estén correctamente integrados y funcionen en conjunto como se necesita. 
        
          .col-lg-5
            img.img-a.img-t(src='@/assets/curso/temas/42.png', alt='')  

      .py-4.py-md-5(titulo="Pruebas de rendimiento" :icono="require('@/assets/curso/temas/47.svg')")
        .row.justify-content-center.p-4
          .col-lg-6.mb-4.mb-md-0
            .row.mb-4
              .col-auto.bg3.px-2.m-1.p-1
                h5.text-center.mb-0 Pruebas de rendimiento 
            ul.lista-ul--color.fa-ul.mb-0.ms-0
              li 
                i.fas.fa-code.color1
                span Mejora las características del #[i software] o aplicación, perfeccionando el sistema.
              li 
                i.fas.fa-code.color1
                | Identifica errores que no se detectan en las pruebas funcionales.
              li 
                i.fas.fa-code.color1
                | Localiza los cuellos de botella para solucionarlos y optimizar su rendimiento.
              li 
                i.fas.fa-code.color1
                span Valora la escalabilidad y velocidad de la aplicación o #[i website]. 
        
          .col-lg-5
            img.img-a.img-t(src='@/assets/curso/temas/43.png', alt='')                                   
  
    .row.justify-content-center
      .col-lg-3.my-3.mov
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/48.png', alt='')      
      .col-lg-9.my-3
        .crd_txt.p-4.brad.h-100(data-aos="fade-left")  
          .row.mb-4
            .col-auto.t3.px-2.m-1.p-1
              h5.text-center.mb-0 Conclusión de los factores que afectan o determinan la calidad del #[i software]
          p.mb-0.text-white Por lo general, todas las pruebas de #[i software] traen beneficios al desarrollador, dependiendo del tipo de la prueba los beneficios pueden ser más altos y enfocados en un fin o propósito específico, dando como resultado una mejor calidad de producto, mejorando su funcionalidad, reduciendo costos, tiempos, recursos humanos y mejorando la experiencia del usuario. Se podría considerar como una desventaja, si se comparan los tipos de prueba, porque puede variar en tiempo, costo, esfuerzo, recursos humanos y exactitud de las pruebas. Sin embargo, la única desventaja de las pruebas de #[i software] es no hacerlas, porque el omitir este paso, desencadena una nefasta serie de errores como un producto no funcional y colocarían en tela de juicio la profesionalidad del programador y su equipo de trabajo.
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
