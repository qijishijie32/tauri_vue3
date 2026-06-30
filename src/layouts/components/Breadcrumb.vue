<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item v-for="item in breadcrumbList" :key="item.path">
      {{ t(String(item.meta?.title || 'route.untitled')) }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const { t } = useI18n();

const breadcrumbList = computed(() => route.matched.filter((item) => item.meta?.title));
</script>
