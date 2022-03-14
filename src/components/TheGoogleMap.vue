<template>
  <!-- Pintamos el mapa y le damos estilo(ajuste) -->
  <div ref="mapDiv" style="width: 100%; height: 80vh"></div>
</template>

<script setup>
//Importaciones
import { computed, ref, onMounted, inject, reactive } from "vue";
//Importamos la libreria de googlemaps instalada previamente con npm install.
import { Loader } from "@googlemaps/js-api-loader";

//APIKEY creada en la cuenta de google.
const GOOGLE_MAPS_API_KEY = "AIzaSyDgpFxA83lfCwyjEn0o1g2Dw-OlLZPqHEE";
//Inyectamos las las coordenadas de useGeolocation.js
const coords = inject("coords");

//Hacemos reactivo el el array de objetos.
let dataArray = reactive([]);
//Enlazamos la BBDD de firebase para pintar las propiedades en data y si hay algun error.
const arboles = async () => {
  try {
    const respuesta = await fetch(
      "https://altas-senlleiras-default-rtdb.europe-west1.firebasedatabase.app/senlleiras.json"
    );
    const data = await respuesta.json();
    for (let propiedad in data) {
      dataArray.push(data[propiedad]);
    }
    console.log(data);
  } catch (error) {
    console.log("HAY UN ERROR AQUI", error);
  }
};

//Posicion inicio-central del mapa.
const currPos = computed(() => ({
  lat: 42.8804,
  lng: -8.5463,
}));

//Cargamos la APIKEY
const loader = new Loader({ apiKey: GOOGLE_MAPS_API_KEY });
//Hacemos el mapa reactivo.
const mapDiv = ref(null);

onMounted(async () => {
  await arboles();
  await loader.load();
  const map = new google.maps.Map(mapDiv.value, {
    center: currPos.value,
    zoom: 18,
  });
  const image = "https://cdn-icons-png.flaticon.com/128/490/490091.png";

  //Recorremos las propiedades de dataArray y pintamos la marca
  for (let item of dataArray) {
    new google.maps.Marker({
      position: {
        lat: item.location.latitude,
        lng: item.location.longitude,
      },
      map,
      icon: image,
    });
  }
});
</script>
