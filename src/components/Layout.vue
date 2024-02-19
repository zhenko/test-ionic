<template>
  <ion-page>
    <ion-content>
      <ion-header>
        <ion-toolbar>
          <ion-fab-button
            v-if="showBackButton"
            slot="start"
            @click="router.go(-1)"
          >
            <ion-icon :icon="arrowBack"></ion-icon>
          </ion-fab-button>

          <ion-title> {{ t(pageTitle) }} </ion-title>
          <ion-buttons slot="end">
            <slot name="action-end"></slot>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <slot />
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonIcon,
  IonFabButton,
} from "@ionic/vue";

import { useRouter } from "vue-router";

import { arrowBack } from "ionicons/icons";

import { useI18n } from "vue-i18n";
const { t } = useI18n();

const props = defineProps({
  pageTitle: {
    type: String,
    default: "",
  },
  showBackButton: {
    type: Boolean,
    default: false,
  },
});

const router = useRouter();
</script>
