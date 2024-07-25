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
</style>