<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 3
      h1 Los casos de pruebas

    .row.justify-content-center.align-items-center.bg11.brad.mb-4(data-aos="flip-down")           
      .col-lg-3.p-0.d-none.d-lg-block  
        img.img-t(src='@/assets/curso/temas/50.png', alt='')       
      .col-lg-9
        p(data-aos="fade-down").py-3.mb-0.text-white Son los documentos de los productos que se generan al momento de realizar una prueba de #[i software], en los cuales se plasman las precondiciones, entradas y resultados esperados, incluyendo la implementación correcta, la identificación de errores, el chequeo de la calidad y otras informaciones consideradas importantes. En general, no hay una plantilla específica, solo la bitácora, listas de chequeo e imágenes en las que se registran las no conformidades que se encuentran en las pruebas. A continuación se presenta un esquema de casos de prueba. 

    .titulo-sexto.color-acento-contenido
      h5 Figura 2.
      span Esquema de casos de prueba
    .bgfig1.p-5.mb-5(data-aos="zoom-in") 
      img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/51.svg', alt='Imagen que ilustra el desarrollo de un caso de prueba, que inicia desde el rol de líder de proyecto con la creación de un plan de prueba, avanzando sobre las tareas del especialista en pruebas, con la ejecución del caso de prueba y los registros y acciones correspondientes.')     

    .row.justify-content-center.mb-4    
      .col-lg-9.my-3 
        p(data-aos="fade-down").mb-0 En el diseño de las pruebas de #[i software], se deben identificar y describir casos de prueba, por lo tanto, para documentar un caso de prueba se debe comprender que este contiene un conjunto de variables o condiciones, en el cual un #[i tester] determina si un sistema funciona según lo esperado; así mismo, cabe resaltar que la documentación de un caso de prueba se convierte en una actividad sin dificultad, si se tiene la información necesaria para su proceso de elaboración, teniendo en cuenta que al momento de probar un #[i software], es de mucho aporte, puesto que se transforma en una herramienta esencial en el proceso de registro, seguimiento y control. #[b.t2 A continuación, se nombran los elementos principales que debe contener un caso de prueba.]
      .col-lg-3.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/52.png', alt='')     

    .titulo-sexto.color-acento-contenido(data-aos="fade-down")
      h5 Tabla 1.
      span Elementos de un caso de prueba

    .tabla-a.color-acento-contenido(data-aos="fade-down")
      table
        thead.bgh
          tr
            th(style="width: 240px") Elemento
            th Descripción 
        tbody.bgb  
          tr
            td.text-bold Identificador
            td Puede ser alfanumérico o numérico.
          tr
            td.text-bold Nombre
            td Nombre del caso de prueba de manera concisa.
          tr
            td.text-bold Descripción
            td Objetivo del caso de prueba, también describe qué probará, en ciertas ocasiones se incluye el ambiente de pruebas.
          tr
            td.text-bold Número de orden de ejecución
            td Orden en la cual se ejecuta el caso de prueba, en la situación donde se tengan múltiples casos de prueba. 
          tr
            td.text-bold Requerimiento asociado
            td Si se plantea un caso de prueba, se debe saber a qué requerimiento va asociado, para mantener la trazabilidad.
          tr
            td.text-bold Precondición
            td Estado en el cual se debe encontrar el sistema antes de comenzar la prueba. 
          tr
            td.text-bold Postcondición
            td El estado en que debe encontrarse el sistema luego de ejecutar la prueba.
          tr
            td.text-bold Resultado esperado
            td Objetivo que debe ser alcanzado, posterior a la ejecución de la prueba.
</template>

<script>
export default {
  name: 'Tema3',
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
