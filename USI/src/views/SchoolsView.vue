<script setup>
import ScrollingLogos from '@/components/home/ScrollingLogos.vue';
import SchoolsDetailBox from '@/components/schools/SchoolsDetailBox.vue';
import { useSchoolsStore } from '@/stores/schools';
import SchoolListItem from '@/components/schools/SchoolListItem.vue';
import { czBoundary } from "../assets/geodata.js";
import { onMounted, ref, watch } from 'vue';

const schoolsData = useSchoolsStore();
let map = null;

watch(() => schoolsData.schools, () => {
  if (schoolsData.schools && map) {
    // remove all markers
    map.eachLayer((layer) => {
      if (layer instanceof L.Marker) {
        map.removeLayer(layer);
      }
    });

    schoolsData.schools.forEach(school => {
      L.marker([school.xCord, school.yCord]).addTo(map);
    });
  }
}, { immediate: true });

const selectedSchool = ref(null)
const searchPhrase = ref('')

onMounted(() => {
  var options = {
    maxZoom: 15,
    minZoom: 8
  };

  map = L.map("map", options);

  var osm = new L.TileLayer.BoundaryCanvas("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    boundary: czBoundary,
  });
  map.addLayer(osm);
  map.fitBounds(L.geoJSON(czBoundary).getBounds());

  var greenIcon = L.icon({
    iconUrl: '/Icon-school.png',

    iconSize: [50, 50], // size of the icon
    iconAnchor: [25, 25], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
  });

  // remove all markers
  map.eachLayer((layer) => {
    if (layer instanceof L.Marker) {
      map.removeLayer(layer);
    }
  });

  schoolsData.schools.forEach(school => {
    L.marker([school.xCord, school.yCord]).addTo(map);
  });

  // function getCoordinates(address) {
  //   const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`;

  //   fetch(url)
  //     .then(response => response.json())
  //     .then(data => {
  //       if (data.length > 0) {
  //         const latitude = data[0].lat;
  //         const longitude = data[0].lon;
  //         console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
  //         // Příklad, jak přidat marker na mapu s Leafletem
  //         L.marker([latitude, longitude]).addTo(map);
  //       } else {
  //         console.log('Adresa nenalezena');
  //       }
  //     })
  //     .catch(error => console.error('Chyba při získávání souřadnic:', error));
  // }

  // Příklad použití
  // getCoordinates("Preslova Praha 5, Česká republika");
  // getCoordinates("Gymnazium Jana Keplera, Česká republika");

  /*
  var map = L.map("map");
  
  
    var osm = new L.TileLayer.BoundaryCanvas("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      //boundary: czBoundary,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });
    map.addLayer(osm);
  
   // map.fitBounds(czBoundary);
  */
})
</script>

<template>
  <main>
    <h1>Školy zapojené v UŠI</h1>
    <h2>Interaktivní mapa škol</h2>
  </main>

  <div id="map"></div>

  <main>
    <article class="schoolslogos-in-USI-container">
      <ScrollingLogos reverse="false"> </ScrollingLogos>
      <ScrollingLogos reverse="true"></ScrollingLogos>
    </article>

    <article class="schools-list-container">
      <h2>Seznam škol</h2>
      <div class="search-container">
        <i class="fa-solid fa-magnifying-glass"></i>
        <input type="text" placeholder="Hledat v seznamu" v-model="searchPhrase">
      </div>

      <article class="schools-list">
        <button
          v-for="school in schoolsData.schools.filter(school => school.name.toLowerCase().includes(searchPhrase.toLowerCase()))"
          :key="school.id" @click="selectedSchool === school ? selectedSchool = null : selectedSchool = school"
          :class="{ 'selected': selectedSchool === school }">{{
          school.name
        }}</button>
      </article>

      <SchoolsDetailBox :data=selectedSchool></SchoolsDetailBox>
    </article>
  </main>



</template>
<style lang="scss" scoped>
@use "@/assets/variables.scss" as *;

.leaflet-container {
  background: #ffffff;
  outline: 0;
}

#map {
  border: 4px solid $primary-color;
  height: 90vh;
  width: 100%;

}

h1 {
  margin-bottom: 60px
}

h2 {
  margin-bottom: 20px;
}

.leaflet-interactive {
  pointer-events: none;
  /* Disable interaction with the map outside the desired area */
}

.map-container {
  display: flex;
  flex-direction: column;
  gap: 20px;

}

.schools-list-container {
  margin-top: 300px;

  .search-container {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 1.7rem;
    font-size: 1.2rem;

    input {
      &:focus {
        outline: none;
      }
    }
  }

  .schools-list {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 1rem;

    button {
      padding: 0.7rem 1rem;
      border-radius: 17px;
      background: #d7d7d7;
      color: $primary-color;
      transition: 0.3s;

      &:hover {
        background: #c7c7c7;
        transform: scale(1.05);
      }

      &.selected {
        background: $primary-color;
        color: #ffffff;
      }
    }
  }
}

.schoolslogos-in-USI-container {
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  gap: 40px;
  height: 1px;
  width: 100%;
  margin-bottom: 200px;

  section {
    margin-top: 20px;
    margin-bottom: 20px;
  }

  h2 {
    margin-bottom: 60px;
    text-align: center;

  }

}
</style>
