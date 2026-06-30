<template>
  <div class="sidebar-wrap">
    <el-menu
      :default-active="activeMenu"
      :collapse="appStore.sidebarCollapsed"
      :unique-opened="true"
      router
      class="menu"
    >
      <SidebarItem v-for="menuItem in sidebarRoutes" :key="menuItem.path" :item="menuItem" :base-path="menuItem.path" />
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

import SidebarItem from './SidebarItem.vue';
import { routes } from '@/router/routes';
import { useAppStore } from '@/stores/modules/app';

const route = useRoute();
const appStore = useAppStore();

const activeMenu = computed(() => route.path);
const sidebarRoutes = computed(() =>
  routes
    .filter((item) => item.path === '/')
    .flatMap((item) => item.children ?? [])
    .filter((item) => !item.meta?.hidden)
);
</script>

<style scoped lang="scss">
.sidebar-wrap {
  height: 100%;
  background: var(--app-card-bg);
}

.menu {
  border-right: none;
}
</style>
