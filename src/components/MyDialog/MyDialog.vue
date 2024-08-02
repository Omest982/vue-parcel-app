<script setup>
import { onMounted, ref } from "vue";
import Dialog from "primevue/dialog";
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import { defineProps, defineEmits } from "vue";

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

const emit = defineEmits(["save", "update:visible"]);

const newCar = ref({});

function initialize(newCar) {
  newCar.value = props.carKeys.reduce((acc, key) => {
    acc[key] = ''; // Initialize each key with an empty string
    return acc;
  }, {});
}
onMounted(() => {
  initialize(newCar);
});

function handleCancel() {
    initialize(newCar);
    emit('update:visible', false);
}

function handleSave() {
  emit('save', {...newCar.value});
  emit('update:visible', false);
  initialize(newCar);
}

</script>

<template>
  <Dialog
    :visible="props.visible"
    modal
    @update:visible="emit('update:visible', $event)"
    header="Add a new car"
    :style="{ width: '25rem' }"
  >
    <div v-for="(key, index) in carKeys" :key="index" class="flex align-items-center gap-3 mb-3" :class="{'mb-5': index === carKeys.length - 1}">
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
