<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 4
      h1 Desarrollo guiado por pruebas

    .row.justify-content-center.align-items-center         
      .col-lg-4.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/53.png', alt='')        

      .col-lg-8.my-3
        p(data-aos="fade-down") El desarrollo de #[i software] dirigido por pruebas, es una técnica de programación en la cual las pruebas que normalmente son las unitarias, se escriben primero y luego se escribe el código que pase las pruebas. Con esta práctica se consigue, entre otras cosas, un código más robusto, más seguro, más mantenible y una mayor rapidez en el desarrollo.   
        .bg12.brad.px-4.mb-4(data-aos="fade-up")
          .row.justify-content-center.align-items-center(data-aos="flip-down")           
            .col-lg-auto.my-3
              img.img-a.img-t(src='@/assets/curso/temas/54.png', alt='')       
            .col.my-3  
              p(data-aos="fade-down").mb-0 Según Herranz (2021), cuando el TDD (Desarrollo Dirigido por Pruebas), se combina con el desarrollo ágil, tiene como consecuencia un espacio más amplio, el cual cubre el desarrollo de #[i software], hasta el diseño de #[i software], el cual propone el proceso denominado: 
    .row    
      .col-lg-4.my-1.col-md-6
        .crd_txt.text-white.brad.h-100.px-2
          .row(data-aos="flip-down")           
            .col-auto.my-2
              img.img-t(src='@/assets/curso/temas/55.png', alt='')       
            .col.my-2.j2
              p.mb-0 #[b Rojo.] Hacer que las pruebas fallen.   
      .col-lg-4.my-1.col-md-6
        .crd_txt.text-white.brad.h-100.px-2
          .row(data-aos="flip-down")           
            .col-auto.my-2
              img.img-t(src='@/assets/curso/temas/55.png', alt='')       
            .col.my-2.j2
              p.mb-0 #[b Verde.] Hacer que las pruebas pasen. 
      .col-lg-4.my-1.col-md-6
        .crd_txt.text-white.brad.h-100.px-2
          .row(data-aos="flip-down")           
            .col-auto.my-2
              img.img-t(src='@/assets/curso/temas/55.png', alt='')       
            .col.my-2.j2
              p.mb-0 #[b #[i Refactory].] Corregir errores lógicos.          

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8.my-3                  
        .bloque-texto-d.color-secundario.p-4(data-aos="fade-left")
          .bloque-texto-d__texto
            i.fas.fa-quote-left
            p.mb-0 Para usar TDD, el desarrollador de #[em software] tiene que cambiar su método de trabajo. Ahora, en vez de crear los casos de uso y después implementarlos, va a intentar convertir un caso de uso en un ejemplo. Si se realiza esto con todos los casos de uso, llegará un momento en el que los ejemplos describirán por sí solos la próxima tarea a implementar”.   
            i.fas.fa-quote-right
          .bloque-texto-d__autor 
            .h5.mb-0 Sánchez (2017)      
      .col-lg-4.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/56.png', alt='')   

    h5.t2.mb-5(data-aos="fade-down") El proceso de diseño de #[i software], combinando TDD con metodologías ágiles, sería el siguiente:

    .row.bg10.align-items-center.pt-3.mb-4
      .col-lg-12.col-12.px-lg-5.px-4.up
        .row.justify-content-center.align-items-center
          .col-md-6.col-lg-4.mb-4.mb-md-0.up.d-none.d-lg-block(data-aos="fade-right")
            img(src='@/assets/curso/temas/57.png', alt='')
          .col-md-11.col-lg-8.mb-4.mb-md-0.up(data-aos="fade-left")
            SlyderF.text-center.mb-3(columnas="col-lg-6")
              .tarjeta.bgcard.ts.h-100.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img.img-a.img-t(src='@/assets/curso/temas/58.png' alt='')
                h5 Historia del usuario 
                p.mb-0 El cliente escribe su historia de usuario.     

              .tarjeta.bgcard.ts.h-100.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img.img-a.img-t(src='@/assets/curso/temas/59.png' alt='')
                h5 Aceptación de la historia de usuario 
                p.mb-0 Se definen, en conjunto con el cliente, los criterios de aceptación de la historia de usuario, descomponiéndola todo lo que se pueda, para simplificar lo más posible.      

              .tarjeta.bgcard.ts.h-100.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img.img-a.img-t(src='@/assets/curso/temas/60.png' alt='')
                h5 Punto de aceptación 
                p.mb-0 Se selecciona el punto de aceptación más sencillo y se transforma en la prueba unitaria.     

              .tarjeta.bgcard.ts.h-100.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img.img-a.img-t(src='@/assets/curso/temas/61.png' alt='')
                h5 Verifica 
                p.mb-0 Se verifica que esta prueba falla.   

              .tarjeta.bgcard.ts.h-100.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img.img-a.img-t(src='@/assets/curso/temas/62.png' alt='')
                h5 Prueba correcta 
                p.mb-0 Se escriben las líneas de código para hacer que la prueba sea correcta.     

              .tarjeta.bgcard.ts.h-100.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img.img-a.img-t(src='@/assets/curso/temas/63.png' alt='')
                h5 Automático 
                p.mb-0 Se llevan a cabo todas las pruebas de carácter automático.   

              .tarjeta.bgcard.ts.h-100.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img.img-a.img-t(src='@/assets/curso/temas/64.png' alt='')
                h5 Vuelve 
                p.mb-0 Se vuelve a escribir el código para que quede limpio.     

              .tarjeta.bgcard.ts.h-100.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img.img-a.img-t(src='@/assets/curso/temas/65.png' alt='')
                h5 Volvamos al punto 3
                p.mb-0 Se debe regresar al paso número 3 en cuanto se detecten criterios de aceptación que hagan falta, y se debe repetir el ciclo una y otra vez hasta lograr la aplicación completa. 

    p(data-aos="fade-down").mb-5 Es de comentar que este es un proceso de desarrollo relativamente nuevo, el cual está comenzando a ganar terreno y ser conocido en el ámbito del desarrollo de #[i software] en las organizaciones a nivel mundial, el cual se basa en evidencias anecdóticas y una serie de evaluaciones empíricas. Hablando del desarrollo tradicional, las pruebas, se usan para validar y verificar la calidad del #[i software] y su creación se realiza después de que existe la funcionalidad.                    


    .bg1.px-3.brad.h-100.mb-5(data-aos="fade-left") 
      .row.justify-content-center.align-items-center
        .col-lg-auto.my-3        
          img.img-a.img-t(src='@/assets/curso/temas/66.png' alt='')      
        .col.my-3        
          .row
            .col-auto.t3.px-2.m-1.p-1
              h5.text-center.mb-0 Nota: 
          p.mb-0 En el TDD, las pruebas adicionales al tema de validación y verificación se usan con fines de especificar, donde primero se desarrolla la prueba y posteriormente la funcionalidad. Esto permite que la calidad del #[i software] aumente y la productividad del desarrollador mejore, dado que se lleva un mejor esfuerzo en depurar y se avanza rápidamente con el progreso del producto #[i software].  

    h5.t2.mb-5(data-aos="fade-down") A continuación, se pueden observar los beneficios del desarrollo guiado por pruebas: 

    .row.justify-content-center
      .col-lg-3.my-3.mov
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/67.png', alt='')      
      .col-lg-9.my-3(data-aos="fade-left")
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg6")
          div(titulo="TDD")
            p Permite una verificación de las funcionalidades desarrolladas en ciclos más pequeños, lo que permite la detección de errores y así mismo, su solución temprana.     

          div(titulo="Implementación")
            p La implementación de esta forma de trabajo permitirá elevar la fiabilidad del producto #[i software], no solo desde el punto de vista de errores funcionales, sino avanzar con las necesidades requeridas por el cliente.        

          div(titulo="Optimización")
            p Otro de los beneficios es la optimización y mejora en el rendimiento del código, dado que se hace énfasis en escribir solamente el código necesario para la resolución de la necesidad.     

          div(titulo="Implementación")
            p El proceso de realizar pruebas por cada nueva funcionalidad o requisito, facilita el proceso de desarrollo de forma modular, lo que permite la escalabilidad y el futuro mantenimiento del producto #[i software].

    .row.justify-content-start.mb-4
      .col-auto(data-aos="flip-down")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/icon.svg', alt='')
          .list__txt.bgicon.p-0.px-4.text-white
            h3.mb-0 Ciclo del desarrollo guiado por pruebas                                   

    p(data-aos="fade-down").mb-5 Ahora que se conocen los beneficios que implica aplicar TDD, es posible ver el ciclo completo del proceso, revisando cada uno de sus pasos. En la siguiente figura se presenta el flujo de manera gráfica.

    .titulo-sexto.color-acento-contenido
      h5 Figura 3.
      span Ciclo TDD
    .bgfig1.p-5(data-aos="zoom-in") 
      img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/68.svg', alt='Imagen del ciclo TDD (Desarrollo dirigido por pruebas), organizado en cuatro etapas: la prueba debe fallar, escribir el código, la prueba debe pasar y refactoring.')         
</template>

<script>
export default {
  name: 'Tema4',
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
