<script setup>
import { ref } from "vue";
import Toolbar from "primevue/toolbar";
import Button from "primevue/button";
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
