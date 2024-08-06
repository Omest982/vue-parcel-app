<script setup>
import { onMounted, ref } from "vue";
import Dialog from "primevue/dialog";
import InputText from "primevue/inputtext";
import Button from "primevue/button";

const props = defineProps({
  carKeys: {
    type: Array,
    required: true
  },
  visible: {
    type: Boolean,
    required: true
  }
});

const emit = defineEmits({
  "update:visible": null,
  save: (newCar) => {
    if (newCar.vin && newCar.year && newCar.brand && newCar.color) {
      return true;
    }
    console.warn('Please fill in all fields!');
    return false;
  }
});

const newCar = ref(null);

function initialize(newCar) {
  newCar.value = props.carKeys.reduce((acc, key) => {
    acc[key] = ''; // Initialize each key with an empty string
    return acc;
  }, {});
};

onMounted(() => {
  initialize(newCar);
});

function handleCancel() {
    initialize(newCar);
    emit('update:visible', false);
};

function handleSave() {
  const isValid = emit('save', { ...newCar.value });
  if (!isValid) return;
  emit('update:visible', false);
  initialize(newCar);
};

const lastIndex = (index) => {
  return {
    'mb-5': index === props.carKeys.length - 1
  }
};

</script>

<template>
  <Dialog
    :visible="props.visible"
    modal
    @update:visible="emit('update:visible', $event)"
    header="Add a new car"
    class="dialog"
  >
    <div v-for="(key, index) in carKeys" :key="index" class="flex align-items-center gap-3 mb-3" :class="lastIndex(index)">
      <label :for="key" class="font-semibold w-6rem">{{ key }}</label>
      <InputText v-model="newCar[key]" :id="key" class="flex-auto" autocomplete="off" />
    </div>
    <div class="flex justify-content-end gap-3">
      <Button
        type="button"
        label="Cancel"
        severity="secondary"
        @click="handleCancel"
      ></Button>
      <Button type="button" label="Save" @click="handleSave"></Button>
    </div>
  </Dialog>
</template>

<style scoped>

.dialog {
  width: 25rem;
}

</style>
