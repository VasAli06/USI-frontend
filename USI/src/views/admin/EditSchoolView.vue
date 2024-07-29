<template>
    <div v-if="school" class="edit-school">
        <form @submit.prevent>
            <input class="title" v-model="school.name" type="text" placeholder="Název školy" />
            <div class="address-wrapper">
                <div class="address input-wrapper">
                    <label for="address">Adresa</label>
                    <input id="address" type="text" v-model="school.address" placeholder="Adresa"
                        @input="updateCoordinates" />
                </div>
                <div class="coordinates">
                    <div class="coordinate input-wrapper">
                        <label for="xCord">Souřadnice x</label>
                        <input id="xCord" type="text" v-model="school.xCord" placeholder="Souřadnice x" />
                    </div>
                    <div class="coordinate input-wrapper">
                        <label for="yCord">Souřadnice y</label>
                        <input id="yCord" type="text" v-model="school.yCord" placeholder="Souřadnice y" />
                    </div>
                </div>
            </div>

            <div class="contact">
                <div class="contact-person input-wrapper">
                    <label for="contactPerson">Kontaktní osoba</label>
                    <input id="contactPerson" type="text" v-model="school.contactPerson"
                        placeholder="Kontaktní osoba" />
                </div>
                <div class="website input-wrapper">
                    <label for="website">Odkaz na stránku školy (adresa musí obsahovat "https://")</label>
                    <input id="website" type="text" v-model="school.website" placeholder="https://www.example.com" />
                </div>
            </div>

            <div class="description input-wrapper">
                <label for="description">Popis školy</label>
                <textarea id="description" v-model="school.description" placeholder="Popis školy"></textarea>
            </div>

            <div class="logo-wrapper">
                <div class="logo input-wrapper">
                    <label for="logo">Logo</label>
                    <input id="logo" type="file" @change="handleUpload" placeholder="Logo"
                        accept="image/png, image/jpeg, image/jpg, image/webp, image/svg+xml" />
                    <p v-if="uploading">
                        <LoadingSpinner /> Logo se nahrává
                    </p>
                </div>
                <div class="selected-logo">
                    <p>Vybrané logo:</p>
                    <img :src="school.logoLink" alt="Logo" />
                </div>
            </div>
            <div class="buttons">
                <button @click="deleteSchool" class="delete">
                    Smazat školu
                    <i class="fa-solid fa-trash-can"></i>
                </button>
                <button type="submit" @click="editSchool">
                    <LoadingSpinner class="" v-if="loading" />
                    <span>Upravit školu</span>
                </button>
            </div>
        </form>
    </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useSchoolsStore } from "@/stores/schools";
import { useRoute, onBeforeRouteLeave } from "vue-router";
import axios from 'axios';
import { useGlobalStore } from "@/stores/global";
import { cloneDeep } from 'lodash';
import LoadingSpinner from "@/components/loadingSpinner.vue";
import Joi from 'joi';
import { useRouter } from "vue-router";

const router = useRouter();
const globalStore = useGlobalStore();
const schoolsStore = useSchoolsStore();

const route = useRoute();
const id = route.params.id;

const school = ref(null);
const loading = ref(false);
const uploading = ref(false);

let coordinatesAreUpdating = false;
async function updateCoordinates() {
    if (coordinatesAreUpdating) return;
    coordinatesAreUpdating = true;
    //console.log(school.value.address);
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(school.value.address)}`;
    try {
        const response = await axios.get(url);
        if (response.data.length > 0) {
            school.value.xCord = Number(response.data[0].lat);
            school.value.yCord = Number(response.data[0].lon);
        }
    } catch (error) {
        console.error('Při najímání souřadnic nastala chyba, zkuste znovu zadat adresu školy.');
        return;
    }
    coordinatesAreUpdating = false;
}

async function handleUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    uploading.value = true;
    const reader = new FileReader();

    return new Promise((resolve, reject) => {
        reader.onload = async function (event) {
            const rawImageData = event.target.result;

            try {
                const response = await axios.post('/image', { image: rawImageData });

                const imageUrl = `${globalStore.apiUrl}/image/${response.data.id}`;
                school.value.logoLink = imageUrl;
                resolve(imageUrl);
                uploading.value = false;
            } catch (error) {
                alert('Při nahrávání obrázku nastala chyba, zkuste obrázek zmenšit, zkontrolujte připojení k internetu nebo použijte jiný formát souboru.');
                reject(error);
                uploading.value = false;
            }
        };
        reader.onerror = reject;
        reader.readAsDataURL(file); // or reader.readAsBinaryString(file);
    });
}

async function editSchool() {
    school.value.xCord = Number(school.value.xCord);
    school.value.yCord = Number(school.value.yCord);

    try {
        loading.value = true;
        if (id === 'new') {
            const response = await axios.post('/school', { school: school.value });
            schoolsStore.schools.push(response.data.school);
            window.location.href = `/admin/school/${response.data.school.id}`; // using router doesn't really reload this component so the variables still have the old values
        } else {
            await axios.put(`/school/${school.value.id}`, { school: school.value });
            schoolsStore.schools = schoolsStore.schools.map(mappedSchool => mappedSchool.id === school.value.id ? school.value : mappedSchool);
        }
    } catch (error) {
        console.error(error);
    }
    loading.value = false;
}

watch(() => schoolsStore.schools, (newVal, oldVal) => {
    if (id === 'new') {
        if (school.value) return;
        school.value = {
            name: '',
            address: '',
            contactPerson: '',
            website: '',
            description: '',
            logoLink: '',
            xCord: '',
            yCord: ''
        }
        return;
    }

    const foundSchool = schoolsStore.schools.find(school => school.id === id);
    if (schoolsStore.schools.length !== 0 && !foundSchool) {
        router.push({ name: 'admin-schools' });
        return;
    }
    school.value = foundSchool ? cloneDeep(foundSchool) : null;
}, {
    immediate: true
});

onBeforeRouteLeave((to, from, next) => {
    const unsavedChanges = () => {
        school.value.xCord = Number(school.value.xCord);
        school.value.yCord = Number(school.value.yCord);

        if (id === 'new') return true;

        const originalSchool = schoolsStore.schools.find(foundSchool => foundSchool.id === school.value.id);
        if (!originalSchool) return false;

        return ['name', 'address', 'xCord', 'yCord', 'contactPerson', 'website', 'description', 'logoLink'].some(
            prop => originalSchool[prop] !== school.value[prop]
        );
    }
    if (unsavedChanges()) {
        const answer = window.confirm('Máte neuložené změny, opravdu chcete tuto stránku opustit?');
        if (answer) {
            next();
        } else {
            next(false);
        }
    } else {
        next();
    }
});

async function deleteSchool() {
    const answer = window.confirm('Opravdu chcete smazat tuto školu?');
    if (answer) {
        try {
            await axios.delete(`/school/${school.value.id}`);
            schoolsStore.schools = schoolsStore.schools.filter(filteredSchool => filteredSchool.id !== school.value.id);
            router.push({ name: 'admin-schools' });
        } catch (error) {
            console.error(error);
            alert('Při mazání školy nastala chyba, zkuste to znovu.');
        }
    }
}

</script>

<style lang="scss" scoped>
@use '../../assets/variables.scss' as *;

.edit-school {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 3rem;
    height: fit-content;

    form {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        .title {
            margin-bottom: 1rem;
        }

        .input-wrapper {
            display: flex;
            flex-direction: column;

            input:not(input[type="file"]),
            textarea {
                height: 3rem;
                background-color: rgba(220, 220, 220, 0.391);
                border-radius: 5px;
                padding: 0rem 1rem;

                &:focus {
                    color: $accent-color;
                    border-color: $accent-color;
                    outline: none;
                }
            }

            textarea {
                height: 15rem;
                padding: 1rem;

                &:focus {
                    color: black;
                    outline: 2px solid $accent-color;
                }
            }
        }

        .address-wrapper {
            display: flex;
            gap: 1rem;

            #address {
                width: 25rem;
            }

            .coordinates {
                display: flex;
                gap: 1rem;

                input {
                    width: 15rem;
                }
            }
        }

        .contact {
            display: flex;
            gap: 1rem;

            .contact-person {
                input {
                    width: 20rem;
                }
            }
        }

        .logo-wrapper {
            display: flex;
            gap: 1rem;

            .input-wrapper {
                p {
                    margin-top: 1rem;
                    display: flex;
                    align-items: center;
                    gap: 0.4rem;
                    color: $accent-color;
                }
            }

            .selected-logo {
                display: flex;
                flex-direction: column;
                gap: 1rem;

                p {
                    font-size: 1.2rem;
                }

                img {
                    padding: 2rem;
                    max-width: 15rem;
                    max-height: 15rem;
                    border-radius: 0.4rem;
                    border: 3px dashed $accent-color;
                }
            }
        }

        .buttons {
            display: flex;
            justify-content: space-between;
            width: 100%;

            button {
                background-color: $accent-color;
                color: white;
                border: none;
                padding: 1rem 2rem;
                border-radius: 5px;
                cursor: pointer;
                width: fit-content;
                align-self: flex-end;

                display: flex;
                align-items: center;
                gap: 1rem;

                &.delete {
                    background-color: rgba(128, 128, 128, 0.544);
                    padding: 1rem 1.3rem;
                    align-self: flex-start;
                    transition: background-color 0.3s;

                    &:hover {
                        background-color: $red;
                    }
                }
            }
        }
    }
}
</style>