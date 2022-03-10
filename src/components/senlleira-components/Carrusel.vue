<template>
    <section class="gallery">
        <div class="header-carrusel-app">
            <!-- galeria -->
            <ul class="carrusel-images-galery ficha-tecnica-galery">
                <li v-for="(item, index) in images" :key="index" :class="item.clases">
                    <img :src="item.url" alt="texto-ejemplo"/>
                    <p v-if="showlegend" class="carrusel-description">{{ item.text }}</p>
                </li>
            </ul>
            <!-- botones -->
            <div>
                <a @click.prevent="turnLeft" href="#" class="carrusel-button carrusel-prev">
                    <i class="fas fa-chevron-circle-left"></i>
                </a>
                <a @click.prevent="turnRight" href="#" class="carrusel-button carrusel-next">
                    <i class="fas fa-chevron-circle-right"></i>
                </a>
            </div>
            <!-- indicador de posicion -->
        <ul class="div-carrusel-position">
            <li @click="change(index)" v-for="(item, index) in images" :key="index">
                <i class="fas fa-circle carrusel-position" :class="item.puntos"></i>
            </li>
        </ul>
        </div>
        
        <!-- <div class="carrusel-txt">{{ carruseltext }}</div> -->
    </section>
</template>

<script setup>
import { onMounted, defineProps } from 'vue';

const props = defineProps({
    /**
     * Array de objetos. Formato:
    [
        {
            url: './conxo.jpg',
            text: 'Carballo del Bosque del Banquete de Conxo',
            clases: { 'carrusel-image': true, 'carruselmostrado': true },//El primero mostrado
            puntos: { 'posicionado': true },
        },
    ]
     */
    images: {
        type: Array
    },
    /**
     * {Boolean} Muestra o no la leyenda de foto de la página
     */
    showlegend: {
        type: Boolean,
        default: true
    },
    carruseltext: {
        type: String,
        default: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quidem nam quae libero beatae tenetur earum dolore ea minus, laboriosam conseqe nam!'
    }

});



let contador = 0;

const change = i => {
    limpiar();
    contador = i;
    props.images[i].clases['carruselmostrado'] = true;
    props.images[i].puntos['posicionado'] = true;
}

const turnLeft = () => {
    limpiar();
    contador--;
    //console.log(contador)
    if (contador < 0) {
        contador = props.images.length - 1;
        //console.log(contador)
    }
    props.images[contador].clases['carruselmostrado'] = true;
    props.images[contador].puntos['posicionado'] = true;
}

const turnRight = () => {
    limpiar();
    contador++
    if (contador > props.images.length - 1) {
        contador = 0
        //console.log(contador)
    }
    props.images[contador].clases['carruselmostrado'] = true;
    props.images[contador].puntos['posicionado'] = true;
}

const limpiar = () => {
    for (let i = 0, tam = props.images.length; i < tam; i++) {
        props.images[i].clases['carruselmostrado'] = false;
        props.images[i].puntos['posicionado'] = false;
    }
}
onMounted(() => {
    setInterval(() => {
        contador++;
        if (contador > props.images.length - 1) {
            contador = 0;
        }
        limpiar();
        props.images[contador].clases['carruselmostrado'] = true;
        props.images[contador].puntos['posicionado'] = true;
    }, 12000)
});

</script>


<style scoped lang="scss">
    @import url(../../assets/scss/carrusel.scss);
</style>