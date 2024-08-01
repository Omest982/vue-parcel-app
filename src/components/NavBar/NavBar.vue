<script setup>
import { ref } from "vue";
import Toolbar from "primevue/toolbar";
import Button from "primevue/button";
import SplitButton from "primevue/splitbutton";
import IconField from "primevue/iconfield";
import InputIcon from "primevue/inputicon";
import InputText from "primevue/inputtext";

const items = ref([
  {
    label: "Update",
    icon: "pi pi-refresh",
  },
  {
    label: "Delete",
    icon: "pi pi-times",
  },
]);
</script>

<template>
  <Toolbar>
    <template #start>
      <Button label="Главная" text />
      <Button label="Боксы" text />
      <Button label="Посылки" text />
      <Button label="Лицевой счет" badge="2" text />
    </template>
  </Toolbar>
</template>
