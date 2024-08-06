<script setup>
import { onMounted, ref } from "vue";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Button from "primevue/button";
import MyDialog from "../components/MyDialog/MyDialog.vue";
import { computed } from "vue";

const cars = ref([
  { vin: "A123", year: 2020, brand: "Toyota", color: "Red" },
  { vin: "B456", year: 2019, brand: "Honda", color: "Blue" },
  { vin: "C789", year: 2021, brand: "Ford", color: "Green" },
]);

const carKeys = computed(() => {
  if (cars.value.length > 0) {
    return Object.keys(cars.value[0]);
  }
  return [];
});

const selectedCars = ref([]);

const visible = ref(false);

function handleSave(newCar) {
  cars.value.push(newCar);
}

</script>

<template>
  <Button class="mb-10 mt-10" label="Add new" @click="visible = true" />

  <DataTable v-model:selection="selectedCars" :value="cars">
    <Column selectionMode="multiple" headerStyle="width: 1rem"></Column>
    <Column field="vin" header="Vin"></Column>
    <Column field="year" header="Year"></Column>
    <Column field="brand" header="Brand"></Column>
    <Column field="color" header="Color"></Column>
  </DataTable>

  <MyDialog v-model:visible="visible" :carKeys="carKeys" @save="handleSave" />

</template>
