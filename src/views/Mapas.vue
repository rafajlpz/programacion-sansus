<template>
  <div class="d-flex text-center" style="height: 20vh">
    <div class="m-auto">
      <h4>Tu posicion</h4>
    </div>
    <the-google-map></the-google-map>
  </div>





</template>

<script setup>
//Dependencias
import TheGoogleMap from '../components/TheGoogleMap.vue';
import { computed, ref,  provide } from "vue";
//import { useGeolocation } from "../useGeolocation";
const coords = ref({ latitude: 42.87756680296138, longitude: -8.550073735931141 });




// const arbol1 = ref({ latitude: 42.42877295, longitude: -8.547290 })


provide('coords', coords );

</script>

<style>
</style>
