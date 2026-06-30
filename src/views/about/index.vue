<template>
  <PageContainer :title="t('about.title')" :description="t('about.description')">
    <el-card shadow="never">
      <el-table :data="techStack" border>
        <el-table-column prop="name" :label="t('about.name')" min-width="160" />
        <el-table-column prop="version" :label="t('about.version')" min-width="140" />
        <el-table-column prop="desc" :label="t('about.desc')" min-width="260" />
      </el-table>
    </el-card>
  </PageContainer>
</template>

<script setup lang="ts">
import PageContainer from '@/components/PageContainer/index.vue';

const { t } = useI18n();

const techStack = [
  { name: 'Tauri', version: '2.x', desc: 'Rust 驱动的跨平台桌面容器' },
  { name: 'Vue', version: '3.x', desc: 'Composition API + <script setup>' },
  { name: 'Vite', version: '5.x', desc: '极速开发与构建工具' },
  { name: 'TypeScript', version: '5.x', desc: '严格类型保障可维护性' },
  { name: 'Element Plus', version: '2.x', desc: '企业级 Vue3 UI 组件库' },
  { name: 'UnoCSS', version: '0.62+', desc: '高性能原子化 CSS 引擎' }
];
</script>
