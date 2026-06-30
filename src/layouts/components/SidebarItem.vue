<template>
  <template v-if="hasChildren">
    <el-sub-menu :index="resolvePath(basePath, item.path)">
      <template #title>
        <SvgIcon :name="String(item.meta?.icon || 'i-ep-menu')" />
        <span>{{ t(String(item.meta?.title || 'route.untitled')) }}</span>
      </template>
      <SidebarItem
        v-for="child in item.children"
        :key="child.path"
        :item="child"
        :base-path="resolvePath(basePath, item.path)"
      />
    </el-sub-menu>
  </template>
  <el-menu-item v-else :index="resolvePath(basePath, item.path)">
    <SvgIcon :name="String(item.meta?.icon || 'i-ep-menu')" />
    <template #title>{{ t(String(item.meta?.title || 'route.untitled')) }}</template>
  </el-menu-item>
</template>

<script setup lang="ts">
import type { RouteRecordRaw } from 'vue-router';

import SvgIcon from '@/components/SvgIcon/index.vue';

const props = defineProps<{
  item: RouteRecordRaw;
  basePath: string;
}>();

const { t } = useI18n();

const hasChildren = computed(() => !!props.item.children?.length);

const resolvePath = (parent: string, current = '') => {
  if (current.startsWith('/')) return current;
  const raw = `${parent}/${current}`.replace(/\/+/g, '/');
  return raw.replace('//', '/');
};
</script>
