<template>
  <ion-list>
    <my-li-item
      v-for="item in translatedItems"
      :key="item.id"
      :item="item"
    ></my-li-item>
  </ion-list>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
const store = useStore();

import { useI18n } from "vue-i18n";
const { t } = useI18n();
import myLiItem from "@/components/items/my-li-item.vue";
import { IonList } from "@ionic/vue";

const props = defineProps({
  items: {
    type: Object,
  },
});

const translatedItems = computed(() => {
  return store.state.items.map((item) => ({
    ...item,
    name: t(item.name),
    description: t(item.description),
  }));
});
</script>

<style></style>
