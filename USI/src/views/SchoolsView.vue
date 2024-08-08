<script setup>
import ScrollingLogos from '@/components/home/ScrollingLogos.vue';
import SchoolsDetailBox from '@/components/schools/SchoolsDetailBox.vue';
import { useSchoolsStore } from '@/stores/schools';
import { czBoundary } from "../assets/geodata.js";
import { onMounted, ref, watch } from 'vue';

const schoolsData = useSchoolsStore();
let map = null;



const searchPhrase = ref('')
const logoLinks = ref([])

onMounted(() => {
  var options = {
    maxZoom: 15,
    minZoom: 7.4
  };
 
  map = L.map("map", options);

  var osm = new L.TileLayer.BoundaryCanvas("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    boundary: czBoundary,
  });
  map.addLayer(osm);

  map.fitBounds(L.geoJSON(czBoundary).getBounds());
  watch(() => schoolsData.schools, () => {

    if (schoolsData.schools && map) {

      logoLinks.value = []

      schoolsData.schools.forEach(school => {
        logoLinks.value.push(school.logoLink)
        L.marker([school.xCord, school.yCord]).bindPopup("<b>" + school.name + "</b><br><a href='#detail-box-link' id='schoolLink'>Klikněte zde pro informace o škole</a>").on('click', function () {
          schoolsData.selectedSchool = school;


        }).on('mouseover', function (e) {
          schoolsData.selectedSchool = school;
          this.openPopup();
        }).openPopup().addTo(map);

      });



    }
  }, { immediate: true });
})

</script>

<template>
  <main>
    <h1>Školy zapojené v UŠI</h1>
    <h2> <span>
        Interaktivní
      </span> mapa škol</h2>
  </main>

  <div id="map"></div>
  <article class="schoolslogos-in-USI-container">
    <ScrollingLogos :reverse="'normal'" :logoLinks="logoLinks"> </ScrollingLogos>
    <ScrollingLogos :reverse="'reverse'" :logoLinks="logoLinks"></ScrollingLogos>
  </article>
  <main>


    <article class="schools-list-container" id="detail-box-link">
      <h2>Seznam škol</h2>
      <div class="search-container">
        <i class="fa-solid fa-magnifying-glass"></i>
        <input type="text" placeholder="Hledat v seznamu" v-model="searchPhrase">
      </div>
      <article class="schools-list">
        <button
          v-for="school in schoolsData.schools.filter(school => school.name.toLowerCase().includes(searchPhrase.toLowerCase()))"
          :key="school.id"
          @click="schoolsData.selectedSchool === school ? schoolsData.selectedSchool = null : schoolsData.selectedSchool = school"
          :class="{ 'selected': schoolsData.selectedSchool === school }">{{
      school.name
    }}</button>
      </article>

      <SchoolsDetailBox :data=schoolsData.selectedSchool></SchoolsDetailBox>
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
  height: 75vh;
  width: 75%;
  border-radius: 24px;

  @media (max-width: 800px) {
    height: 65vh;
    width: 100%;
  }
}

@media (max-width: 768px) {


  .leaflet-control-attribution {
    font-size: 12px;
    /* Smaller attribution text on mobile */
  }

  .leaflet-popup-content {
    font-size: 14px;
    /* Adjust popup text size for mobile */
  }

  .leaflet-container {
    touch-action: auto;
    /* Enable pinch-to-zoom */
  }
}

h1 {
  margin-bottom: 20px;

  @media (max-width: 800px) {
    margin-bottom: 0px;
  }

}

main {
  margin-bottom: 0px;

  @media (max-width: 800px) {
    margin-bottom: 0px;
  }
}

h2 {
  margin-bottom: 10px;

  span {
    color: $accent-color;
  }
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

      @media (max-width: 600px) {
        font-size: 18px;
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

      @media (max-width: 600px) {
        padding: 0.4rem 0.8rem;
        font-size: 15px;
      }

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
  gap: 100px;
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
