<script setup>
import { onMounted, ref } from "vue";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Button from "primevue/button";
import MyDialog from "../components/MyDialog/MyDialog.vue";
import { computed } from "vue";
import InputText from "primevue/inputtext";
import IconField from "primevue/iconfield";
import InputIcon from "primevue/inputicon";

const cars = ref([
  { vin: "A123", year: 2020, brand: "Toyota", color: "Red" },
  { vin: "B456", year: 2019, brand: "Honda", color: "Blue" },
  { vin: "C789", year: 2021, brand: "Ford", color: "Green" },
  { vin: "D012", year: 2022, brand: "BMW", color: "Black" },
  { vin: "E345", year: 2023, brand: "Tesla", color: "White" },
  { vin: "F678", year: 2022, brand: "Mercedes", color: "Silver" },
  { vin: "G901", year: 2021, brand: "Audi", color: "Gray" },
  { vin: "H234", year: 2020, brand: "Chevrolet", color: "Yellow" },
  { vin: "I567", year: 2019, brand: "Nissan", color: "Orange" },
  { vin: "J890", year: 2022, brand: "Volkswagen", color: "Brown" },
  { vin: "K123", year: 2021, brand: "Hyundai", color: "Purple" },
  { vin: "L456", year: 2020, brand: "Kia", color: "Pink" },
  { vin: "M789", year: 2019, brand: "Mazda", color: "Cyan" },
  { vin: "N012", year: 2022, brand: "Subaru", color: "Lime" },
]);

const carKeys = computed(() => {
  if (cars.value.length > 0) {
    return Object.keys(cars.value[0]);
  }
  return [];
});

const selectedCars = ref([]);

const visible = ref(false);

const filters = ref({
  global: {
    value: ""
  }
});

function handleSave(newCar) {
  cars.value.push(newCar);
}
</script>

<template>
  <Button class="mb-5 mt-5" label="Add new" @click="visible = true" />

  <Button class="mb-5 mt-5 ml-5" label="Form box" />

  <DataTable
    v-model:selection="selectedCars"
    :value="cars"
    removableSort
    stripedRows
    paginator
    :rows="5"
    :rowsPerPageOptions="[5, 10, 20, 50]"
    :globalFilterFields="['vin', 'year', 'brand', 'color']"
    :filters="filters"
  >
   <template #header>
        <div class="flex justify-end">
            <IconField iconPosition="left">
                <InputIcon>
                    <i class="pi pi-search" />
                </InputIcon>
                <InputText v-model="filters['global'].value" placeholder="Keyword Search" />
            </IconField>
        </div>
    </template>
    <template #empty> No cars found. </template>
    <template #loading> Loading cars data. Please wait. </template>
    <Column selectionMode="multiple" headerStyle="width: 1%"></Column>
    <Column field="vin" header="Vin"></Column>
    <Column field="year" sortable header="Year"></Column>
    <Column field="brand" header="Brand"></Column>
    <Column field="color" header="Color"></Column>
  </DataTable>

  <MyDialog v-model:visible="visible" :carKeys="carKeys" @save="handleSave" />
</template>
