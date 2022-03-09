<template>
{{coords}}
   <div 
    ref="mapDiv" 
    style="width: 100%; height: 80vh">
  </div>
</template>

<script setup>
//Dependencias
import { computed, ref, onMounted, inject } from "vue";
import { Loader }  from "@googlemaps/js-api-loader";


//Constante
const GOOGLE_MAPS_API_KEY ='AIzaSyDgpFxA83lfCwyjEn0o1g2Dw-OlLZPqHEE';
const coords = inject('coords');


//const coords = ref({ latitude: 42.87756680296138, longitude: -8.550073735931141 });
    const currPos = computed(() => ({
      lat: coords.value.latitude,
      lng: coords.value.longitude,
    }));

    const loader = new Loader ({ apiKey: GOOGLE_MAPS_API_KEY})
    const mapDiv = ref(null)
    onMounted(async() =>{
      await loader.load()
      new google.maps.Map(mapDiv.value,{
        center: currPos.value,
        zoom: 18
      })
    })

</script>
