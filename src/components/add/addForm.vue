<template>
  <form @submit.prevent="submitFrom">
    <ion-list>
      <ion-item>
        <ion-label position="floating"> Title </ion-label>
        <ion-input type="text" required v-model="title" />
      </ion-item>
      <ion-item>
        <ion-label position="floating"> Description </ion-label>
        <ion-textarea required v-model="description" />
      </ion-item>
      <ion-button type="submit" expand="full">Save</ion-button>
    </ion-list>
  </form>
</template>

<script setup>
import { ref } from "vue";

import {
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonTextarea,
  IonButton,
} from "@ionic/vue";

const emits = defineEmits("save-item");

const title = ref("");
const description = ref("");

const submitFrom = () => {
  const enteredItem = {
    name: title.value,
    description: description.value,
    status: false,
  };
  emits("save-item", enteredItem);
};
</script>
