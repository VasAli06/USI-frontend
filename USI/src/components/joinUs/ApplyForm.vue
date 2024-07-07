<template>
 <article class="form-container">
      <form action="">

        <section>
          <h2>Žádost o připojení do UŠI:</h2>
          <p class="basic-text">Pro vyhodnocení vašeho přihlášení prosím vyplňte následující formulář.</p>
        </section>

        <div>
          <label for="school-name">Název Vaší školy:</label>
          <input type="text" id="school-name">


        </div>

        <div>
          <label for="students-contact">Kontakt na tři aktivní studenty:</label>
          <div class="row-flex">
            <p>1.</p> <input type="text" id="students-contact">
          </div>

          <div class="row-flex">
            <p>2.</p> <input type="text" id="students-contact">
          </div>
          <div class="row-flex">
            <p>3.</p> <input type="text" id="students-contact">
          </div>
        </div>

        <div>

          <label for="school-name">Stručně popište svou školu:</label>
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>

        <div>
          <label for="school-name">Zdůvodněte proč se chcete připojit k UŠI:</label>
          <textarea name="" id="" cols="30" rows="10"></textarea>

        </div>
        <input type="submit">
      </form>

    </article>



</template>
<style lang="scss" scoped>
@use "@/assets/variables.scss" as var;
.form-container {
  background-color: var.$primary-color;
  color: white;
  padding: 50px;
  border-radius: 20px;
  margin-top: 100px;

  form {
    display: flex;
    flex-direction: column;
    gap: 30px;

    section {
      p {
        font-weight: 300;
      }
    }

    div {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    input {
      border: none;
      padding: 10px;
      padding-top: 13px;
      padding-bottom:13px;
      border-radius: 5px;
      font-size: 16px;
      width: 65%;
    }

    label {
      font-size: 25px;
      font-weight: 400;
    }

    input[type=submit] {
      background-color: var.$accent-color;
      color: white;
      border: none;
      width: 25%;
      font-size: 25px;
      border-radius: 100px;
    }

    .row-flex {
      display: flex;
      flex-direction: row;
      position: relative;

      p {
        position: absolute;
        left: -25px;
        font-size: 20px;
        top: 50%;
      }
    }
    textarea{
      border: none;
      padding: 10px;
      border-radius: 5px;
      resize: none;


      padding: 10px;
      padding-top: 13px;
      padding-bottom:13px;
      font-size: 16px;
    }
  }
}

</style>