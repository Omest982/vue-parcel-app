<script setup>
import { ref } from "vue";
import Toolbar from "primevue/toolbar";
import Button from "primevue/button";
</script>

<template>
  <Toolbar class="mt-5">
    <template #start>
      <Button label="Склад" text />
      <Button label="Боксы" text />
      <Button label="Посылки" text />
      <Button label="Лицевой счет" badge="2" text />
    </template>
  </Toolbar>
</template>

