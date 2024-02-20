<template>
  <layout :page-title="t('Add item')" show-back-button>
    <add-form @save-item="saveItem" />
  </layout>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { useI18n } from "vue-i18n";
import addForm from "@/components/add/addForm.vue";

const { t } = useI18n();

const store = useStore();

const router = useRouter();

const saveItem = (item) => {
  store.dispatch("addItem", item);
  router.replace("/");
};
</script>
