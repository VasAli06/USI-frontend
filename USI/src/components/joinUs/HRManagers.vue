<template>
    <article class="HR-container">

        <h2>Kontakt na HR manažery: </h2>

        <article class="cards-container">

            <section>
                <img src="/HR1.png" alt="HR-manager-foto">
                <p class="name">Radovan Kosík</p>
                <p class="email">kosik@unieskolinovativnich.cz</p>
            </section>
            <section>
                <img src="/HR2.png" alt="HR-manager-foto">
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

        @media (max-width: 700px) {
            flex-direction: column;
            align-items: center;

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

            @media (max-width: 700px) {

                max-width: 250px;
                padding: 20px;
                border-radius: 10px;
            }

            @media (max-width: 600px) {
                max-width: 320px;
            }

            .name {
                text-align: center;
                font-size: 25px;
                font-weight: 500;


                @media (max-width: 500px) {
                    font-size: 20px;
                }

            }

            .email {
                text-align: center;
                padding-bottom: 20px;

                @media (max-width: 500px) {
                    font-size: 15px;
                }
            }

            img {
                border-radius: 10px;
            }
        }
    }

}
</style>