<template>
  <div class="login-page flex-center wh-full">
    <el-card class="login-card">
      <template #header>
        <div class="card-header">{{ t('login.title') }}</div>
      </template>

      <el-form ref="formRef" :model="form" :rules="rules" label-position="top">
        <el-form-item prop="username" :label="t('login.username')">
          <el-input v-model="form.username" :placeholder="t('login.usernamePlaceholder')" />
        </el-form-item>
        <el-form-item prop="password" :label="t('login.password')">
          <el-input
            v-model="form.password"
            show-password
            type="password"
            :placeholder="t('login.passwordPlaceholder')"
          />
        </el-form-item>
        <el-button type="primary" class="w-full" :loading="loading" @click="handleLogin">
          {{ t('login.submit') }}
        </el-button>
      </el-form>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ElMessage } from 'element-plus';
import type { FormInstance, FormRules } from 'element-plus';

import { useUserStore } from '@/stores/modules/user';

const router = useRouter();
const route = useRoute();
const userStore = useUserStore();
const { t } = useI18n();

const loading = ref(false);
const formRef = ref<FormInstance>();
const form = ref({
  username: 'admin',
  password: '123456'
});

const rules: FormRules = {
  username: [{ required: true, message: t('login.usernameRequired'), trigger: 'blur' }],
  password: [{ required: true, message: t('login.passwordRequired'), trigger: 'blur' }]
};

const handleLogin = async () => {
  const valid = await formRef.value?.validate().catch(() => false);
  if (!valid) return;

  loading.value = true;
  try {
    await userStore.login(form.value);
    ElMessage.success(t('login.success'));
    await router.push((route.query.redirect as string) || '/dashboard');
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped lang="scss">
.login-page {
  min-height: 100vh;
  background: linear-gradient(120deg, #e0f2fe, #f8fafc 45%, #ede9fe);
}

.dark .login-page {
  background: linear-gradient(120deg, #1f2937, #111827 45%, #0f172a);
}

.login-card {
  width: 420px;
}

.card-header {
  font-size: 18px;
  font-weight: 600;
  text-align: center;
}
</style>
