<template>
  <layout v-if="item" :page-title="item.name" show-back-button>
    <ion-card>
      <img
        alt="Silhouette of mountains"
        src="https://ionicframework.com/docs/img/demos/card-media.png"
      />
      <ion-card-header>
        <ion-card-title color="secondary">{{ item.name }}</ion-card-title>
        <ion-card-subtitle color="tertiary">{{ item.name }}</ion-card-subtitle>
      </ion-card-header>

      <ion-card-content>
        {{ item.description }}
      </ion-card-content>
      <ion-card-content>
        <div>{{ t("isDone") }}:</div>
        <ion-checkbox label-placement="end" v-model="status"></ion-checkbox>
      </ion-card-content>
    </ion-card>
  </layout>
</template>

<script setup>
import {
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardTitle,
  IonCardSubtitle,
  IonCheckbox,
} from "@ionic/vue";
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

import { useI18n } from "vue-i18n";
const { t } = useI18n();

const route = useRouter();
const store = useStore();

const props = defineProps({
  pageTitle: {
    type: String,
    default: "",
  },
});

const item = ref(null);
const status = ref(false);

watch(
  () => {
    const itemId = Number(route.currentRoute.value.params.id);
    const currentItem = store.getters.item(itemId);

    if (currentItem) {
      item.value = {
        ...currentItem,
        name: t(currentItem.name),
        description: t(currentItem.description),
      };
      status.value = currentItem.status;
    }
  },
  { immediate: true }
);

watch(status, (newValue) => {
  if (item.value) {
    store.commit("updateItemStatus", { id: item.value.id, status: newValue });
  }
});
</script>

<style>
ion-card-content {
  display: flex;
  justify-content: space-between;
}
</style>
