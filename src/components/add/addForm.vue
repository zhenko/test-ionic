<template>
  <div class="container-desktop">
    <form @submit.prevent="submitFrom">
      <ion-list>
        <ion-item>
          <ion-label position="floating">{{ t("Title") }} </ion-label>
          <ion-input type="text" required v-model="title" />
        </ion-item>
        <ion-item>
          <ion-label position="floating"> {{ t("Description") }} </ion-label>
          <ion-textarea required v-model="description" />
        </ion-item>
        <ion-button type="submit" expand="full">{{ t("save") }}</ion-button>
      </ion-list>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import {
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonTextarea,
  IonButton,
} from "@ionic/vue";

const emits = defineEmits("save-item");

const { t } = useI18n();

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

<style scoped>
.container-desktop {
  max-width: 800px;
  margin: 0 auto;
}
</style>
