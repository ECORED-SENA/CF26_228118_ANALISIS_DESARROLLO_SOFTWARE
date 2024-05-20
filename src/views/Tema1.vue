<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.pb-md-0
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 1
      h1 Generalidades de las pruebas de #[i software]

    .row.bg4.align-items-center
      .col-lg-12.col-12.px-lg-5.px-4.pb-4 
        .row.justify-content-center.align-items-center          
          .col-lg-12
            .row.justify-content-center.align-items-center         
              .col-lg-4.my-3
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/4.png', alt='')        

              .col-lg-8.my-3 
                .bg5.brad.px-4.mb-4(data-aos="fade-up")
                  .row.justify-content-center.align-items-center(data-aos="flip-down")           
                    .col-lg-auto.my-3
                      img.img-a.img-t(src='@/assets/curso/temas/5.png', alt='')       
                    .col.my-3  
                      p(data-aos="fade-down").mb-0 Las pruebas #[i software] son parte fundamental del proceso de calidad y adopción de buenas prácticas, estas deben realizarse en todo el proceso de desarrollo de #[i software].  
                                   
                .bloque-texto-d.color-secundario.p-4(data-aos="fade-left")
                  .bloque-texto-d__texto
                    i.fas.fa-quote-left
                    p.mb-0 Este proceso debe incluir revisión de los requerimientos, realización de análisis documentales, identificación de defectos, pruebas funcionales y no funcionales, pruebas dinámicas y estáticas, pruebas de integración, informes de confianza en el nivel de calidad, información para la toma de decisiones, planes de mejora continua. 
                    i.fas.fa-quote-right
                  .bloque-texto-d__autor 
                    .h5.mb-0 Mera (2016)   
    

                h5.t2(data-aos="fade-down") El mismo autor, afirma que dentro de las actividades de un proceso de prueba, se deben incluir las siguientes fases:       
      
          h5.t2(data-aos="fade-down") ¿Qué debemos tener en cuenta al momento de elaborar una lista de chequeo?      

          .row.justify-content-center.align-items-center
            .col-lg-8.my-3 
              ol.lista-ol--cuadro.fa-ul
                li 
                  .lista-ol--cuadro__vineta
                    span 1
                  span El control.
                li 
                  .lista-ol--cuadro__vineta
                    span 2
                  span Comprobación de resultados.
                li 
                  .lista-ol--cuadro__vineta
                    span 3
                  span Elaboración de informes de proceso.
                li 
                  .lista-ol--cuadro__vineta
                    span 4
                  span Aplicación objeto de las pruebas.
                li 
                  .lista-ol--cuadro__vineta
                    span 5
                  span Bitácoras de experiencias.             
              .bg2.brad.px-4.mb-4(data-aos="fade-up")
                .row.justify-content-center.align-items-center(data-aos="flip-down")           
                  .col-lg-auto.my-3
                    img.img-a.img-t(src='@/assets/curso/temas/7.png', alt='')       
                  .col.my-3  
                    p(data-aos="fade-down").mb-0 Es de suma importancia realizar una bitácora y una matriz, con el fin de ejecutar los casos de prueba y así concluir si el caso funciona como se esperaba, para agregarlo como una conformidad, o en su defecto, pasaría a ser una no conformidad.  

              p(data-aos="fade-down") Según la organización ISO (2020), estas pruebas se regulan por la norma ISO/IEC 25000 Sistemas y Requisitos de Calidad y Evaluación de #[i software] (SQuaRE).   
  
              .row.justify-content-center.align-items-center(data-aos="flip-down")           
                .col-lg-auto.my-3
                  img.img-a.img-t(src='@/assets/curso/temas/8.png', alt='')       
                .col.my-3  
                  h5.t2(data-aos="fade-down").mb-0 Las pruebas de #[i software] son aplicables a todos aquellos que deseen crear especificaciones de prueba, marcos correspondientes, o crear automatización de pruebas.          
            .col-lg-4.my-3
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/9.png', alt='')    
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
