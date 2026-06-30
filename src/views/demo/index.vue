<template>
  <PageContainer :title="t('demo.title')" :description="t('demo.description')">
    <el-row :gutter="16">
      <el-col :span="12">
        <el-card shadow="never" class="mb-4">
          <template #header>{{ t('demo.httpDemo') }}</template>
          <el-space direction="vertical" fill>
            <el-button type="primary" @click="handleHttp">{{ t('demo.sendRequest') }}</el-button>
            <el-input v-model="httpResult" type="textarea" :rows="6" readonly />
          </el-space>
        </el-card>

        <el-card shadow="never">
          <template #header>{{ t('demo.piniaDemo') }}</template>
          <el-space>
            <el-tag>{{ t('demo.count') }}: {{ appStore.count }}</el-tag>
            <el-button @click="appStore.increment">+1</el-button>
            <el-button @click="appStore.decrement">-1</el-button>
          </el-space>
        </el-card>
      </el-col>

      <el-col :span="12">
        <el-card shadow="never">
          <template #header>{{ t('demo.fileDemo') }}</template>
          <el-space direction="vertical" fill>
            <el-input v-model="filePath" :placeholder="t('demo.filePathPlaceholder')" />
            <el-input v-model="fileContent" type="textarea" :rows="6" :placeholder="t('demo.fileContent')" />
            <el-space>
              <el-button type="primary" @click="handleWrite">{{ t('demo.writeFile') }}</el-button>
              <el-button @click="handleRead">{{ t('demo.readFile') }}</el-button>
            </el-space>
          </el-space>
        </el-card>
      </el-col>
    </el-row>
  </PageContainer>
</template>

<script setup lang="ts">
import { ElMessage } from 'element-plus';

import PageContainer from '@/components/PageContainer/index.vue';
import { request } from '@/utils/request';
import { readTextFile, writeTextFile } from '@/utils/tauri';
import { useAppStore } from '@/stores/modules/app';

const { t } = useI18n();
const appStore = useAppStore();

const httpResult = ref('');
const filePath = ref('demo.txt');
const fileContent = ref('Hello from Tauri + Vue3');

const handleHttp = async () => {
  try {
    const res = await request.get('/get', {
      params: { from: 'tauri_vue3_demo' }
    });
    httpResult.value = JSON.stringify(res.data, null, 2);
  } catch {
    httpResult.value = t('demo.httpFailed');
  }
};

const handleWrite = async () => {
  await writeTextFile(filePath.value, fileContent.value);
  ElMessage.success(t('demo.writeSuccess'));
};

const handleRead = async () => {
  fileContent.value = await readTextFile(filePath.value);
  ElMessage.success(t('demo.readSuccess'));
};
</script>
