<template>
  <layout page-title="Just do it" :show-back-button="false">
    <ion-item>
      <ion-label style="white-space: nowrap"
        >{{ t("Your language is") }}:
      </ion-label>
      <ion-toggle
        label-placement="center"
        :enable-on-off-labels="true"
        v-model="toggle"
      >
        {{ locale === "en" ? "en" : "ua" }}
      </ion-toggle>
    </ion-item>
    <template v-slot:action-end>
      <ion-fab-button router-link="/add">
        <ion-icon :icon="add"></ion-icon>
      </ion-fab-button>
    </template>
    <my-ul-list :items="items"></my-ul-list>
  </layout>
</template>

<script setup>
import {
  IonIcon,
  IonFabButton,
  IonItem,
  IonToggle,
  IonLabel,
} from "@ionic/vue";
import { useI18n } from "vue-i18n";
const { locale } = useI18n();
const { t } = useI18n();

import myUlList from "@/components/items/my-ul-list.vue";
import { computed, ref } from "vue";
import { useStore } from "vuex";

const store = useStore();

const toggle = ref(false);

const items = computed(() => {
  return store.state.items;
});

import { add } from "ionicons/icons";
import { watch } from "vue";

watch(toggle, () => {
  locale.value === "en" ? (locale.value = "ua") : (locale.value = "en");
});
</script>

<style>
ion-checkbox {
  --border-width: 40px;
  --size: 32px;
  --checkbox-background-checked: #6815ec;
}

ion-checkbox::part(container) {
  border-radius: 6px;
  border: 2px solid #6815ec;
}
</style>
