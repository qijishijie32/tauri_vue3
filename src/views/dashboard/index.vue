<template>
  <PageContainer :title="t('dashboard.title')" :description="t('dashboard.description')">
    <el-card shadow="never">
      <template #header>
        <div class="flex items-center justify-between">
          <span>{{ t('dashboard.welcome') }}</span>
          <el-button type="primary" @click="handleGreet">{{ t('dashboard.callGreet') }}</el-button>
        </div>
      </template>

      <el-space direction="vertical" fill>
        <el-alert :title="greetMessage || t('dashboard.greetPlaceholder')" type="success" :closable="false" />
        <el-descriptions :column="2" border>
          <el-descriptions-item :label="t('dashboard.os')">{{ systemInfo.os }}</el-descriptions-item>
          <el-descriptions-item :label="t('dashboard.arch')">{{ systemInfo.arch }}</el-descriptions-item>
          <el-descriptions-item :label="t('dashboard.version')">{{ systemInfo.version }}</el-descriptions-item>
          <el-descriptions-item :label="t('dashboard.hostname')">{{ systemInfo.hostname }}</el-descriptions-item>
          <el-descriptions-item :label="t('dashboard.family')">{{ systemInfo.family }}</el-descriptions-item>
          <el-descriptions-item :label="t('dashboard.locale')">{{ systemInfo.locale }}</el-descriptions-item>
        </el-descriptions>
      </el-space>
    </el-card>
  </PageContainer>
</template>

<script setup lang="ts">
import { ElMessage } from 'element-plus';

import PageContainer from '@/components/PageContainer/index.vue';
import { greet, getSystemInfo } from '@/utils/tauri';
import type { SystemInfo } from '@/types';

const { t } = useI18n();

const greetMessage = ref('');
const systemInfo = ref<SystemInfo>({
  os: '-',
  arch: '-',
  version: '-',
  hostname: '-',
  family: '-',
  locale: '-'
});

const handleGreet = async () => {
  greetMessage.value = await greet('Tauri Vue3');
  ElMessage.success(t('dashboard.greetDone'));
};

onMounted(async () => {
  systemInfo.value = await getSystemInfo();
});
</script>
