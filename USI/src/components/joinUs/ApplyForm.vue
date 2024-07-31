<template>
  <article class="form-container">
    <form @submit.prevent>

      <section>
        <h2>Žádost o připojení do UŠI:</h2>
        <p class="basic-text">Pro vyhodnocení vašeho přihlášení prosím vyplňte následující formulář.</p>
      </section>

      <div>
        <label for="school-name">Název Vaší školy:</label>
        <input type="text" id="school-name" v-model="formData.schoolName" @input="formErrors.schoolName = false">
        <p v-if="formErrors.schoolName" class="error"><i class="fa-solid fa-circle-xmark"></i> Název školy je povinný
        </p>
      </div>

      <div>
        <label for="students-contact">Kontakt na tři aktivní studenty:</label>
        <div class="row-flex">
          <p>1.</p> <input type="text" id="students-contact" v-model="formData.studentsContact[0]"
            @input="formErrors.studentsContact = false">
        </div>
        <div class="row-flex">
          <p>2.</p> <input type="text" v-model="formData.studentsContact[1]"
            @input="formErrors.studentsContact = false">
        </div>
        <div class="row-flex">
          <p>3.</p> <input type="text" v-model="formData.studentsContact[2]"
            @input="formErrors.studentsContact = false">
        </div>
        <p v-if="formErrors.studentsContact" class="error"><i class="fa-solid fa-circle-xmark"></i> Jeden nebo více
          e-mailů jsou neplatné</p>
      </div>

      <div>
        <label for="school-name">Stručně popište svou školu:</label>
        <textarea name="" id="" cols="30" rows="10" v-model="formData.schoolDescription"
          @input="formErrors.schoolDescription = false"></textarea>
        <p v-if="formErrors.schoolDescription" class="error"><i class="fa-solid fa-circle-xmark"></i> Popiš školy nemůže
          být prázdný</p>
      </div>

      <div>
        <label for="school-name">Zdůvodněte proč se chcete připojit k UŠI:</label>
        <textarea name="" id="" cols="30" rows="10" v-model="formData.reason"
          @input="formErrors.reason = false"></textarea>
        <p v-if="formErrors.reason" class="error"><i class="fa-solid fa-circle-xmark"></i> Důvod nemůže být prázdný</p>
      </div>

      <div>
        <label for="mail">E-mail, na který Vás kontaktujeme s rozhodnutím:</label>
        <input type="text" id="mail" v-model="formData.mail" @input="formErrors.mail = false">
        <p v-if="formErrors.mail" class="error"><i class="fa-solid fa-circle-xmark"></i> Poskytnut e-mail je neplatný
        </p>
      </div>

      <button type="submit" @click="submitForm">Odeslat žádost
        <LoadingSpinner v-if="loading" />
      </button>
      <p v-if="success" class="confirmation">Vaše žádost byla odeslána.</p>
    </form>

  </article>



</template>

<script setup>
import { ref, watch } from 'vue'
import axios from 'axios'
import Joi from 'joi'
import LoadingSpinner from '@/components/loadingSpinner.vue'

const verifyJoinUsSchema = Joi.object({
  schoolName: Joi.string().required(),
  studentsContact: Joi.array().items(Joi.string().email({ tlds: { allow: false } })).length(3).required(),
  schoolDescription: Joi.string().required(),
  reason: Joi.string().required(),
  mail: Joi.string().email({ tlds: { allow: false } }).required(),
}).unknown(true)

const formData = ref({
  schoolName: '',
  mail: '',
  studentsContact: [
    '',
    '',
    ''
  ],
  schoolDescription: '',
  reason: ''
})

const formErrors = ref({
  schoolName: false,
  mail: false,
  studentsContact: false,
  schoolDescription: false,
  reason: false
})
const loading = ref(false)
const success = ref(false)

async function submitForm() {
  const { error } = verifyJoinUsSchema.validate(formData.value)
  if (error) {
    //console.log(error.details[0].path[0])
    if (error.details[0].path[0] === 'schoolName') formErrors.value.schoolName = true;
    if (error.details[0].path[0] === 'studentsContact') formErrors.value.studentsContact = true;
    if (error.details[0].path[0] === 'schoolDescription') formErrors.value.schoolDescription = true;
    if (error.details[0].path[0] === 'reason') formErrors.value.reason = true;
    if (error.details[0].path[0] === 'mail') formErrors.value.mail = true;

    setTimeout(() => {
      const firstErrorElement = document.querySelector('.error');
      if (firstErrorElement) {
        firstErrorElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 100);
    return
  }
  try {
    loading.value = true
    const response = await axios.post('/joinus', { formData: formData.value })
    success.value = true
  } catch (error) {
    console.error(error);
    alert('Vaše žádost NEBYLA odeslána. Při odesílání nastala chyba. Při přetrvávajících problémech nás prosím kontaktujte.');
  }
  loading.value = false
}
</script>

<style lang="scss" scoped>
@use "@/assets/variables.scss" as *;

.confirmation {
  font-size: 1.5rem;
  color: $accent-color;
}
</style>