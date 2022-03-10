<!-- 
    Vista donde mostraremos la información de una "árbore senlleria"
    Módulos: @/components/~/ImagesSenlleiras.vue
 -->
<template>
    <div class="p-3">
        <template v-if="senlleira">
                <h2 class="ficha-tittle">Ficha del arbol</h2>
                <!-- ficha tecnica -->
                <table class="ficha-tecnica-table">
                    <tr>
                        <th>Nombre del árbol:</th>
                        <td>{{ senlleira.nombreComun }}</td>
                    </tr>
                    <tr>
                        <th>Especie:</th>
                        <td>{{ senlleira.genus }} {{ senlleira.specie }}</td>
                    </tr>
                    <tr>
                        <th>Tipo de hoja:</th>
                        <td>Desconocida</td>
                    </tr>
                    <tr>
                        <th>Ubicación:</th>
                        <td>{{ senlleira.lugar }}</td>
                    </tr>
                    <tr>
                        <th>Edad estimada:</th>
                        <td>Desconocida</td>
                    </tr>
                    <tr>
                        <th>Altura estimada:</th>
                        <td>Desconocida</td>
                    </tr>
                </table>
                <images-senlleiras :id="$route.params.id"></images-senlleiras>
                        </template>
                    </div>
                    <table class="ficha-tecnica-table-description">
                        <tr>
                <th colspan="2">Historias leyendas y curiosidades</th>
                        </tr>
                <tr>
                    <td colspan="2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto rem voluptate ipsum dignissimos sit doloribus alias, distinctio voluptatem, quaerat, debitis aliquam. Ullam animi suscipit ea atque aliquid vero, quaerat quas esse consequuntur sit ipsum dolorum et optio! Laboriosam accusamus culpa eos, sequi id sed quas neque dignissimos, dolores iure dolorem maiores sapiente? Esse non magnam quibusdam a aliquam eum unde. Sed ab adipisci, minus fugit provident delectus aut est temporibus numquam accusamus inventore totam optio. Numquam itaque assumenda tempora voluptates doloribus ducimus, eveniet perferendis eos adipisci doloremque libero totam rerum odio aut aperiam eius asperiores sequi nihil tenetur! Consequatur, accusamus!</td>
                </tr>
                <tr>
                <td class="table-usuario" colspan="2">Ficha subida por: <span id="name-user">Manuel Rivas</span></td>
                        </tr>
                    </table>
                    <iframe class="mapa-arbore" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2923.4105678315673!2d-8.519189784223519!3d42.885283709762156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2effba9a8d6f4d%3A0xac240e9b947de9ac!2sCERSIA%20Empresa!5e0!3m2!1ses!2ses!4v1646815173635!5m2!1ses!2ses" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>       
</template>

<script setup>
//Dependencias
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import { computed, provide } from 'vue';
import ImagesSenlleiras from '@/components/senlleira-components/ImagesSenlleiras.vue';
//Cargamos el store y el route
const store = useStore();
const route = useRoute();

//Ciclo de vida onCreated
store.dispatch('senlleiras/setSenlleira', route.params.id);

//Varibables
/**
 * Obtenemos el Objeto con todos los datos "da árbore senlleira"
 */
const senlleira = computed(() => {
    if (!store.state.senlleira) { //Si la propiedad "senlleira" es null en el store
        store.dispatch('senlleiras/listSenlleiras');
        store.dispatch('senlleiras/setSenlleira', route.params.id);
    }
    return store.state.senlleiras.senlleira;
});

provide('senlleira', senlleira);
</script>

<style scoped lang="scss">
@import url(../../assets/scss/mostrar.scss);
</style>