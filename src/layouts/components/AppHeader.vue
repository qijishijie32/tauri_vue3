<template>
  <div class="header-wrap">
    <div class="header-left">
      <el-button text @click="appStore.toggleSidebar">
        <SvgIcon :name="appStore.sidebarCollapsed ? 'i-ep-expand' : 'i-ep-fold'" />
      </el-button>
      <img class="logo" :src="logoSrc" alt="logo" />
      <span class="title">{{ title }}</span>
    </div>

    <div class="header-right">
      <el-tooltip :content="t('app.toggleTheme')" placement="bottom">
        <el-button text @click="onToggleTheme">
          <SvgIcon :name="appStore.theme === 'light' ? 'i-ep-moon' : 'i-ep-sunny'" />
        </el-button>
      </el-tooltip>

      <el-tooltip :content="t('app.fullscreen')" placement="bottom">
        <el-button text @click="toggleFullscreen">
          <SvgIcon name="i-ep-full-screen" />
        </el-button>
      </el-tooltip>

      <el-dropdown @command="onLanguageChange">
        <el-button text>
          <SvgIcon name="i-ep-operation" />
        </el-button>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="zh-CN">中文</el-dropdown-item>
            <el-dropdown-item command="en">English</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>

      <el-dropdown @command="onUserCommand">
        <span class="user-entry">
          {{ userStore.userInfo?.nickname || 'Admin' }}
          <el-icon><ArrowDown /></el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="logout">{{ t('app.logout') }}</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArrowDown } from '@element-plus/icons-vue';
import { ElMessage } from 'element-plus';

import SvgIcon from '@/components/SvgIcon/index.vue';
import logoSrc from '@/assets/logo.svg';
import { i18n } from '@/locales';
import { useAppStore } from '@/stores/modules/app';
import { useUserStore } from '@/stores/modules/user';

const { t } = useI18n();
const router = useRouter();
const appStore = useAppStore();
const userStore = useUserStore();
const title = import.meta.env.VITE_APP_TITLE;

const onToggleTheme = () => {
  appStore.toggleTheme();
};

const toggleFullscreen = async () => {
  if (!document.fullscreenElement) {
    await document.documentElement.requestFullscreen();
    return;
  }
  await document.exitFullscreen();
};

const onLanguageChange = (language: 'zh-CN' | 'en') => {
  appStore.setLanguage(language);
  i18n.global.locale.value = language;
  ElMessage.success(t('app.languageSwitched'));
};

const onUserCommand = async (command: string) => {
  if (command !== 'logout') return;
  userStore.logout();
  ElMessage.success(t('app.logoutSuccess'));
  await router.push('/login');
};

</script>

<style scoped lang="scss">
.header-wrap {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header-left,
.header-right {
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo {
  width: 26px;
  height: 26px;
}

.title {
  font-weight: 600;
}

.user-entry {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
}
</style>
