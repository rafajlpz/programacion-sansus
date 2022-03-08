<template>
  <div class="d-flex text-center" style="height: 20vh">
    <div class="m-auto">
      <h4>Tu posicion</h4>
      Latitud: {{currPos.lat.toFixed(2)}}, Longitud:
      {{ currPos.lng.toFixed(2) }}
    </div>
  </div>
  <div ref="mapDiv" style="width: 100%; height: 80vh"></div>
</template>

<script>
 /* eslint-disable no-undef */
import { computed, ref, onMounted } from "vue";
import { useGeolocation } from "../useGeolocation";
import { Loader }  from "@googlemaps/js-api-loader";

const GOOGLE_MAPS_API_KEY ='AIzaSyDgpFxA83lfCwyjEn0o1g2Dw-OlLZPqHEE'

export default {
  name: "App",
  setup() {
    const { coords } = useGeolocation();
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
        zoom: 7
      })
    })



    return { currPos, mapDiv };
  },
}
</script>

<style>
</style>
