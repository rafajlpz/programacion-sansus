<template>
    <thead role="rowgroup">
        <tr role="row">
            <th></th>
            <th role="columnheader">
                <a 
                href="#"
                @click.prevent="filtrar('genus')"
                >Género</a>
                y
                 <a 
                href="#"
                @click.prevent="filtrar('specie')"
                >especie</a> </th>
            <th role="columnheader">
                 <a 
                href="#"
                @click.prevent="filtrar('nombreComun')"
                >Nombres comunes</a>
            </th>
            <th role="columnheader">
                 <a 
                href="#"
                @click.prevent="filtrar('nombreReferencia')"
                >Referencia</a>
                </th>
            <th role="columnheader">
                 <a 
                href="#"
                @click.prevent="filtrar('concello')"
                >Ayuntamiento</a>
            </th>
            <th role="columnheader">Información</th>
        </tr>
    </thead>
</template>

<script setup>
//Dependencias
import { reactive } from 'vue';
import { useStore } from 'vuex';
//Carga de vuex/store
const store = useStore();
//Variables
const orden = reactive({
    genus: true,
    specie: true,
    nombreComun: true,
    nombreReferencia: true,
    concello: true,
})

/**
 * Método que obtiene los registros de una "Senlleira"
 * @returns Género, especie, nombre común, nombre de referencia, localidad
 */
const filtrar = (genus) => {
    orden[genus] = !orden[genus];
    store.dispatch('senlleiras/senlleiraSort',{field:genus,sort:orden[genus]})
};
</script>