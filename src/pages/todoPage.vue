<template>
  <layout page-title="Just do it" :show-back-button="false">
    <ion-item>
      <ion-label class="custom-label">{{ t("Your language is") }}: </ion-label>
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
import { computed, ref } from "vue";
import { useStore } from "vuex";
import { useI18n } from "vue-i18n";
import {
  IonIcon,
  IonFabButton,
  IonItem,
  IonToggle,
  IonLabel,
} from "@ionic/vue";
import myUlList from "@/components/items/my-ul-list.vue";
import { add } from "ionicons/icons";
import { watch } from "vue";

const { locale } = useI18n();
const { t } = useI18n();

const store = useStore();

const toggle = ref(false);

const items = computed(() => {
  return store.state.items;
});

watch(toggle, () => {
  locale.value === "en" ? (locale.value = "ua") : (locale.value = "en");
  localStorage.setItem("lang", locale.value);
});
</script>

<style scoped>
ion-checkbox {
  --border-width: 40px;
  --size: 32px;
  --checkbox-background-checked: #6815ec;
}

ion-checkbox::part(container) {
  border-radius: 6px;
  border: 2px solid #6815ec;
}

.custom-label {
  white-space: nowrap;
}
</style>
