<template>
    <article class="HR-container">

        <h2>Kontakt na HR manažery: </h2>

        <article class="cards-container">

            <section>
                <img src="/HR1.png" alt="">
                <p class="name">Radovan Kosík</p>
                <p class="email">kosik@unieskolinovativnich.cz</p>
            </section>
            <section>
                <img src="/HR1.png" alt="">
                <p class="name">Hynek Novák</p>
                <p class="email">novak@unieskolinovativnich.cz</p>
            </section>
        </article>

    </article>
</template>

<style lang="scss" scoped>
@use "@/assets/variables.scss" as var;


.HR-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 100px;
    margin-bottom: 100px;
 
    .cards-container {
        display: flex;
        flex-direction: row;
        gap: 30px;
        @media (max-width: 600px) {
            flex-direction: column;

    }
        section {
            display: flex;
            flex-direction: column;
            gap: 10px;
            background-color: #F8F8F8;
            padding: 30px;
            border-radius: 20px;
            border: 1.5px solid var.$primary-color;
            filter: drop-shadow(0 4px 3px rgba(0, 0, 0, 0.497));

            .name {
                text-align: center;
                font-size: 25px;
                font-weight: 500;
            }

            .email {
                text-align: center;
                padding-bottom: 20px;
            }

            img {
                border-radius: 10px;
            }
        }
    }

}
</style>