<template>
    <section class="login-view form-container">
        <form @submit.prevent>
            <section>
                <h2>Přihlášení</h2>
                <p class="basic-text">Pro přístup do administrace zadejte heslo:</p>
            </section>

            <div>
                <label for="password">Heslo</label>
                <input name="password" type="password" v-model="password" placeholder="Super tajné heslo :-D">
                <p v-if="wrongPassword" class="error">Špatné heslo</p>
            </div>

            <button @click="login" type="submit">
                <LoadingSpinner v-if="isLoading" />
                Přihlásit se
            </button>
        </form>
    </section>
</template>

<script setup>
import { ref } from 'vue';
import axios from "axios";
import { useGlobalStore } from '@/stores/global';
import LoadingSpinner from '../components/loadingSpinner.vue';
import { useRouter } from 'vue-router';

const globalStore = useGlobalStore();
const router = useRouter();

const password = ref('');
const wrongPassword = ref(false);
const isLoading = ref(false);

async function login() {
    isLoading.value = true;
    wrongPassword.value = false;
    try {
        const response = await axios.post('/verify', { password: password.value });
        globalStore.userId = response.data.id;
        //console.log(globalStore.userId);
        router.push('/admin');
    } catch (error) {
        if (error.response.data.message === "Wrong password") {
            wrongPassword.value = true;
        } else {
            console.error(error);
        }
    }
    isLoading.value = false;
}

</script>

<style lang="scss" scoped>
.login-view{
    margin-top: 80Px;
    margin-bottom: 80px;
    width: 75%;
}
</style>