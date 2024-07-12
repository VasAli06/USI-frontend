<script setup>
import ScrollingLogos from '@/components/home/ScrollingLogos.vue';
import SchoolsDetialBox from '@/components/schools/SchoolsDetialBox.vue';

import { useSchoolsStore } from '@/stores/schools';
const schoolsData = useSchoolsStore();

import SchoolListItem from '@/components/schools/SchoolListItem.vue';

import { czBoundary } from "../assets/geodata.js";
import { onMounted,ref } from 'vue';
const data_for_infobox = ref({
  name: "",
  address: "",
  contact_person: "",
  website: "",
  about_school: ""
});

const InfoBoxDataSetter = (school) => {
  data_for_infobox.value = {
    name: school.name,
    address: school.address,
    contact_person: school.contact_person,
    website: school.website,
    about_school: school.about_school
  };
};
onMounted(() => {
  var options = {
    maxZoom: 15,
    minZoom: 8
  };


  var map = L.map("map", options);

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
  function getCoordinates(address) {
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.length > 0) {
          const latitude = data[0].lat;
          const longitude = data[0].lon;
          console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
          // Příklad, jak přidat marker na mapu s Leafletem
          L.marker([latitude, longitude]).addTo(map);
        } else {
          console.log('Adresa nenalezena');
        }
      })
      .catch(error => console.error('Chyba při získávání souřadnic:', error));
  }

  // Příklad použití
  getCoordinates("Preslova Praha 5, Česká republika");

  getCoordinates("Gymnazium Jana Keplera, Česká republika");





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
      <input type="text" placeholder="Hledat v seznamu">
      <article class="schools-list-row">

        <section>
          <SchoolListItem v-for="school in schoolsData.schools.slice(0, schoolsData.schools.length / 2) " :data=school
            @click="InfoBoxDataSetter(school)">
          </SchoolListItem>

        </section>
        <section>

          <SchoolListItem
            v-for="school in schoolsData.schools.slice(schoolsData.schools.length / 2, schoolsData.schools.length) "
            :data=school @click="InfoBoxDataSetter(school)"></SchoolListItem>

        </section>

      </article>


      <SchoolsDetialBox :data=data_for_infobox></SchoolsDetialBox>

    </article>

  </main>



</template>
<style lang="scss" scoped>
@use "@/assets/variables.scss" as var;

.leaflet-container {
  background: #ffffff;
  outline: 0;
}

#map {
  border: 4px solid var.$primary-color;
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

  .schools-list-row {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;

    section {
      display: flex;
      flex-direction: column;
      gap: 10px;
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
