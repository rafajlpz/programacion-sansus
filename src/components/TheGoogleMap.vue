<template>
  <!-- {{ coords }} -->
  <div ref="mapDiv" style="width: 100%; height: 80vh"></div>
</template>

<script setup>
//Dependencias
import { computed, ref, onMounted, inject } from "vue";
import { Loader } from "@googlemaps/js-api-loader";

//Constante
const GOOGLE_MAPS_API_KEY = "AIzaSyDgpFxA83lfCwyjEn0o1g2Dw-OlLZPqHEE";
const coords = inject("coords");

//const coords = ref({ latitude: 42.87756680296138, longitude: -8.550073735931141 });
const currPos = computed(() => ({
  lat: coords.value.latitude,
  lng: coords.value.longitude,
}));

const loader = new Loader({ apiKey: GOOGLE_MAPS_API_KEY });
const mapDiv = ref(null);
onMounted(async () => {
  await loader.load();
  const map = new google.maps.Map(mapDiv.value, {
    center: currPos.value,
    zoom: 18,
  });
  const image =
    "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png";
  const beachMarker = new google.maps.Marker({
    position: {
      lat: coords.value.latitude,
      lng: coords.value.longitude,
    },
    map,
    icon: image,
  })
  let marker1 = new google.maps.Marker({
    position:{
      lat: 42.87666667,
      lng:  -8.54722222
    },
    map,
    icon: image
  })
  // const marka1 = new google.maps.Marker({
  //   position: {
  //     lat: arbol1.value.latitude,
  //     lng: arbol1.value.longitude,
  //   },
  //   map,
  //   icon: image,
  // });
});

// This example adds a marker to indicate the position of Bondi Beach in Sydney,
// Australia.

// function initMap() {
//   const map = new google.maps.Map(document.getElementById("map"), {
//     zoom: 4,
//     center: { lat: -33, lng: 151 },
//   });
//   const image =
//     "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png";
//   const beachMarker = new google.maps.Marker({
//     position: { lat: -33.89, lng: 151.274 },
//     map,
//     icon: image,
//   });
// }

// const initMap = ()=> {
//   const arbol1 = { lat: -25.363, lng: 131.044 };
//   const map = new google.maps.Map(document.getElementById("map"), {
//     zoom: 4,
//     center: arbol1,
//   });

//   new google.maps.Marker({
//     position: arbol1,
//     map,
//     title: "Hello World!",
//   });
// }

// initMap()
</script>
