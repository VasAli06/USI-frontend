<script setup>
const props = defineProps(['data'])
</script>

<template>
    <article class="school-detail-box" v-if="props.data == null">
        <h3>Není vybrána žádná škola.</h3>
    </article>

    <article class="school-detail-box" v-else>
        <h3>{{ props.data.name }}</h3>
        <section>
            <div>
                <i class="fa-solid fa-map-pin"></i>
                <p>{{ props.data.address }}</p>

            </div>
            <div>
                <i class="fa-solid fa-user"></i>
                <p>{{ props.data.contactPerson }}</p>

            </div>
            <div>
                <i class="fa-solid fa-link"></i>
                <a :href="props.data.website">Web školy</a>
            </div>
        </section>
        <section>
            <p class="about-school-title">O škole</p>
            <p class="basic-text" v-for="paragraf in props.data.description.split('\n')" :key="paragraf">{{ paragraf }}
            </p>
        </section>
    </article>
</template>

<style scoped lang="scss">
@use "@/assets/variables.scss" as var;

.school-detail-box {
    background-color: #F8F8F8;
    padding: 40px;
    display: flex;
    margin-top: 40px;
    flex-direction: column;
    gap: 20px;
    border-radius: 40px;
    filter: drop-shadow(0 4px 4px rgba(0, 0, 0, 0.473));
    margin-bottom: 100px;
    @media (max-width: 600px) {
        padding: 30px;
        gap: 5px;
    }

    h3 {
        font-size: 40px;
        font-weight: 600;
        padding-bottom: 10px;

        @media (max-width: 600px) {
            font-size: 25px;
        }
    }

    section {
        display: flex;
        flex-direction: column;
        gap: 15px;
        margin-bottom: 10px;

        div {
            display: flex;
            flex-direction: row;
            align-items: center;
            font-size: 20px;

            @media (max-width: 600px) {
                font-size: 14px;
            }

            i {
                width: 40px;
                font-size: 25px;
                color: var.$accent-color;

                @media (max-width: 600px) {
                    font-size: 20px;
                    width: 30px;
                }
            }

            a {
                text-decoration: underline;
                color: black;
            }
        }

        .about-school-title {
            font-size: 30px;
            font-weight: 500;

            @media (max-width: 600px) {
                font-size: 20px;
            }
        }
    }
}
</style>