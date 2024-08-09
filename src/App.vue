<script setup>
import NavBar from './components/NavBar/NavBar.vue'
import MainPage from './pages/MainPage.vue'
import { RouterView } from 'vue-router'
</script>

<template>
<div class="container">
  <NavBar />
  <RouterView />
</div>
</template>

<style scoped>
.container {
  width: 70%;
  margin: 0 auto;
}
</style>
