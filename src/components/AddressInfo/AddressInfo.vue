<script setup>
import InputText from "primevue/inputtext";
import FloatLabel from "primevue/floatlabel";
import Button from "primevue/button";
import Checkbox from "primevue/checkbox";
import InputSwitch from "primevue/inputswitch";
import Password from "primevue/password";
import Dropdown from "primevue/dropdown";
import { ref } from "vue";

const selectedCountry = ref(null);
const countries = [
  { name: "Australia", code: "AU" },
  { name: "Brazil", code: "BR" },
  { name: "China", code: "CN" },
  { name: "Egypt", code: "EG" },
  { name: "France", code: "FR" },
  { name: "Germany", code: "DE" },
  { name: "India", code: "IN" },
  { name: "Japan", code: "JP" },
  { name: "Spain", code: "ES" },
  { name: "United States", code: "US" },
];
const city = ref("");
const street = ref("");
const house = ref("");
const flat = ref("");
</script>

<template>
  <div class="mt-5">
    <span class="text-2xl font-bold">Адресные данные</span>
    <div class="grid grid-cols-2 gap-x-10 gap-y-5 mt-5">
      <div class="info-input">
        <label for="country">Страна</label>
        <Dropdown
          v-model="selectedCountry"
          :options="countries"
          optionLabel="name"
          placeholder="Select a Country"
          checkmark
          filter
          :highlightOnSelect="false"
        />
      </div>
      <div class="info-input">
        <label for="city">Город</label>
        <InputText id="city" v-model="city" />
      </div>
      <div class="info-input">
        <label for="street">Улица</label>
        <InputText id="street" v-model="street" />
      </div>
      <div class="info-input">
        <label for="house">Дом</label>
        <InputText id="house" v-model="house" />
      </div>
      <div class="info-input">
        <label for="flat">Квартира</label>
        <InputText id="flat" v-model="flat" />
        <small>Если у вас частный дом, оставьте поле пустым</small>
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
