<script setup>
import InputText from "primevue/inputtext";
import FloatLabel from "primevue/floatlabel";
import Button from "primevue/button";
import Checkbox from "primevue/checkbox";
import Password from "primevue/password";
import FileUpload from "primevue/fileupload";
import { ref } from "vue";

const name = ref("");
const surname = ref("");
const email = ref("");
const phone = ref("");
const company = ref("");
const newPassword = ref("");
const newPasswordConfirmation = ref("");
</script>

<template>
  <div class="mt-5">
    <span class="text-2xl font-bold">Личные данные</span>
    <div class="grid grid-cols-2 gap-x-10 gap-y-5 mt-5">
      <div class="info-input">
        <label for="name">Имя</label>
        <InputText id="name" v-model="name" />
      </div>
      <div class="info-input">
        <label for="surname">Фамилия</label>
        <InputText id="surname" v-model="surname" />
      </div>
      <div class="info-input">
        <label for="email">Почта</label>
        <InputText id="email" v-model="email" />
      </div>
      <div class="info-input">
        <label for="newPassword">Новый пароль</label>
        <Password
          inputClass="w-full"
          id="newPassword"
          toggleMask
          v-model="newPassword"
        />
      </div>
      <div class="info-input">
        <label for="phone">Телефон</label>
        <InputText id="phone" v-model="phone" />
      </div>
      <div class="info-input">
        <label for="newPasswordConfirmation">Подтвердите новый пароль</label>
        <Password
          inputClass="w-full"
          id="newPasswordConfirmation"
          toggleMask
          v-model="newPasswordConfirmation"
        />
      </div>
      <div class="info-input">
        <label for="company">Компания</label>
        <InputText id="company" v-model="company" />
      </div>
      <div class="info-input">
        <label for="document">Документ подтверждающий личность</label>
        <FileUpload
          id="document"
          mode="basic"
          url="/api/upload"
          accept="image/*"
          :maxFileSize="1000000"
          @upload="onUpload"
          :auto="true"
          chooseLabel="Выберите документ"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.info-input {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
</style>
