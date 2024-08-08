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
import { getCarsData } from "../api/getCarsData";

const cars = ref([]);
const error = ref(null);

const loadCars = async () => {
  try {
    cars.value = await getCarsData();
  } catch (err) {
    error.value = err.message;
  }
};

onMounted(async () => {
  loadCars();
});


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
    value: "",
  },
});

function handleSave(newCar) {
  cars.value.push(newCar);
}

</script>

<template>
  <div class="flex items-center justify-between mt-5">
    <span class="text-4xl font-bold"> Склад </span>
    <div class="flex">
      <Button label="Add new" icon="pi pi-plus" severity="success" @click="visible = true" />

      <Button class="ml-5" icon="pi pi-box" label="Form box" />
    </div>
  </div>

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
          <InputText
            v-model="filters['global'].value"
            placeholder="Keyword Search"
          />
        </IconField>
      </div>
    </template>
    <template #empty> No cars found. </template>
    <template #loading> Loading cars data. Please wait. </template>
    <Column selectionMode="multiple" headerStyle="width: 1em"></Column>
    <Column field="vin" header="Vin"></Column>
    <Column field="year" sortable header="Year"></Column>
    <Column field="brand" header="Brand"></Column>
    <Column field="color" header="Color"></Column>
  </DataTable>

  <MyDialog v-model:visible="visible" :carKeys="carKeys" @save="handleSave" />
</template>
