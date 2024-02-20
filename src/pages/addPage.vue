<template>
  <layout :page-title="t('Add item')" show-back-button>
    <add-form @save-item="saveItem" />
  </layout>
</template>

<script setup>
import addForm from "@/components/add/addForm.vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();

import { useStore } from "vuex";

const store = useStore();

import { useRouter } from "vue-router";

const router = useRouter();

const saveItem = (item) => {
  store.dispatch("addItem", item);
  router.replace("/");
};
</script>
