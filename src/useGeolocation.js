import { onUnmounted, onMounted, ref } from "vue";

export function useGeolocation() {
  const coords = ref({ latitude: 0, longitude: 0 });
//   const punto1 = ref({ latitude: 42.87, longitude: -8.55 });
  const isSupported = "navigator" in window && "geolocation" in navigator;

  let watcher = null;

  onMounted(() => {
    if (isSupported)
      watcher = navigator.geolocation.watchPosition(
        (position) => (coords.value = position.coords)
      );
  });

  onUnmounted(() => {
    if (watcher) navigator.geolocation.clearWatch(watcher);
  });


  // function initMap() {
  //   const myLatLng = { lat: -25.363, lng: 131.044 };
  //   const map = new google.maps.Map(document.getElementById("map"), {
  //     zoom: 4,
  //     center: myLatLng,
  //   });
  
  //   new google.maps.Marker({
  //     position: myLatLng,
  //     map,
  //     title: "Hello World!",
  //   });
  
  



  return {
    coords,
    isSupported
  };
}
