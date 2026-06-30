<template>
  <el-container class="layout-container">
    <el-aside class="layout-sidebar" :width="appStore.sidebarCollapsed ? '64px' : '220px'">
      <AppSidebar />
    </el-aside>
    <el-container>
      <el-header class="layout-header">
        <AppHeader />
      </el-header>
      <div class="layout-breadcrumb">
        <Breadcrumb />
      </div>
      <el-main class="layout-main">
        <router-view v-slot="{ Component }">
          <transition name="fade-slide" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import AppHeader from './components/AppHeader.vue';
import AppSidebar from './components/AppSidebar.vue';
import Breadcrumb from './components/Breadcrumb.vue';
import { useAppStore } from '@/stores/modules/app';

const appStore = useAppStore();
appStore.initTheme();
</script>

<style scoped lang="scss">
.layout-container {
  min-height: 100vh;
  background: var(--app-bg-color);
}

.layout-sidebar {
  border-right: 1px solid var(--app-border-color);
  transition: width 0.25s;
  overflow: hidden;
}

.layout-header {
  height: 56px;
  border-bottom: 1px solid var(--app-border-color);
  background: var(--app-card-bg);
}

.layout-breadcrumb {
  padding: 10px 16px;
  border-bottom: 1px solid var(--app-border-color);
  background: var(--app-card-bg);
}

.layout-main {
  padding: 16px;
}

.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.2s ease;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateX(10px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateX(-10px);
}
</style>
