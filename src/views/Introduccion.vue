<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.pb-md-0
  
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.bgi.align-items-center
      .col-lg-12.col-12.px-lg-5.px-4.pb-4 
        .row.justify-content-center.align-items-center          
          .col-lg-12  
            .bg1.brad.p-4(data-aos="flip-down")           
              p(data-aos="fade-down").mb-0 El intercambio y manejo de información, es esencial en todos los aspectos, porque involucra los niveles operativos, económicos, culturales e intelectuales de la humanidad. 

            .row.justify-content-center.align-items-center        
              .col-lg-8.my-3
                .bg2.brad.p-4.mb-4
                  .row.justify-content-center.align-items-center        
                    .col-lg-auto.my-3                  
                      img.img-a.img-t(src='@/assets/curso/temas/2.png', alt='')         
                    .col.my-3
                      p(data-aos="fade-down") Como parte fundamental, son los sistemas de información, que se desarrollan para optimizar el cambio y almacenamiento de esta información.

                      p(data-aos="fade-down").mb-0 Sanz (2005), afirma que las pruebas de software son parte fundamental en el desarrollo de los sistemas de información, debido a que son el conjunto de procesos encaminados en encontrar posibles fallos de funcionamiento, usabilidad o configuración de un programa o aplicación                 
                      
                      
                p(data-aos="fade-down") Las pruebas de software, también conocidas como software testing, son la actividad de control de calidad más realizada en los proyectos de desarrollo o mantenimiento de software. En ellas se encuentran errores como los bugs, que a simple vista son insignificantes, pero pueden ser trágicos en los procesos que el programa desarrolla

                .row
                  .col-auto.bg3.px-2.m-1.p-1(data-aos="flip-down")
                    h5.text-center.mb-0 Bienvenido a este proceso de aprendizaje.     

              .col-lg-4.my-3
                img.img-a.img-t(src='@/assets/curso/temas/3.png', alt='')                         

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
