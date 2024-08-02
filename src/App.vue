<script setup>
import NavBar from './components/NavBar/NavBar.vue'
import MainPage from './pages/MainPage.vue'
</script>

<template>
<div class="container">
  <NavBar />
  <MainPage />
</div>
</template>

<style scoped>
.container {
  width: 70%;
  align-items: center;
  margin: 0 auto;
}
</style>
