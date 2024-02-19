<template>
  <ion-item :router-link="`/item${item.id}`">
    <div
      class="ion-padding one"
      :style="
        item.status ? 'text-decoration: line-through' : 'text-decoration: none'
      "
    >
      {{ item.name }}
    </div>

    <div class="ion-padding two">{{ item.description }}</div>

    <div class="ion-padding three">
      <ion-checkbox label-placement="end" v-model="status"></ion-checkbox>
    </div>
  </ion-item>
</template>

<script setup>
const props = defineProps({
  item: {
    type: Object,
  },
});
import { computed } from "vue";
import { IonItem, IonCheckbox } from "@ionic/vue";
import { useStore } from "vuex";
const store = useStore();
const status = computed({
  get: () => props.item.status,
  set: (value) => {
    store.commit("updateItemStatus", { id: props.item.id, status: value });
  },
});
</script>

<style scoped>
.one {
  flex-basis: 30%;
}
.two {
  flex-basis: 55%;
}
.three {
  flex-basis: 15%;
}
</style>
