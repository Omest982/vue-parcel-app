<script setup>
import { ref } from "vue";
import Toolbar from "primevue/toolbar";
import Button from "primevue/button";
</script>

<template>
  <Toolbar class="mt-5">
    <template #start>
      <router-link to="/"> <Button label="Склад" text /> </router-link>
      <router-link to="/about"> <Button label="Боксы" text /> </router-link>
      <Button label="Посылки" text />
      <Button label="Лицевой счет" badge="2" text />
    </template>
  </Toolbar>
</template>

