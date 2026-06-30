<template>
  <div class="h-[calc(100vh-120px)] flex-center">
    <el-result icon="warning" :title="t('error.notFound')" :sub-title="t('error.notFoundDesc')">
      <template #extra>
        <el-button type="primary" @click="router.push('/dashboard')">{{ t('error.backHome') }}</el-button>
      </template>
    </el-result>
  </div>
</template>

<script setup lang="ts">
const router = useRouter();
const { t } = useI18n();
</script>
