<template>
  <el-config-provider :locale="elementLocale" :size="'default'">
    <router-view />
  </el-config-provider>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import { useAppStore } from '@/stores/modules/app';
import { elementLocales } from '@/locales';

const appStore = useAppStore();
const elementLocale = computed(() => elementLocales[appStore.language]);
</script>
