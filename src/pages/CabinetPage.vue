<script setup>
import PersonalInfo from "../components/PersonalInfo/PersonalInfo.vue";
import Divider from "primevue/divider";
import AddressInfo from "../components/AddressInfo/AddressInfo.vue";
import InputSwitch from "primevue/inputswitch";
import Button from "primevue/button";
import { ref } from "vue";

const notifications = ref(false);

</script>

<template>
  <div class="mt-5">
    <span class="text-4xl font-bold">Личный кабинет</span>
  </div>

  <PersonalInfo />
  <Divider />
  <AddressInfo />
  <div class="mt-5 flex justify-between">
    <Button label="Сохранить" />

    <div class="flex items-center">
      <InputSwitch v-model="notifications" inputId="notifications" />
      <label for="notifications" class="ml-2"> Получать уведомления </label>
    </div>
  </div>
</template>
