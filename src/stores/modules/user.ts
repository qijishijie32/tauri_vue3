import { defineStore } from 'pinia';

import { loginApi, getUserInfoApi } from '@/api/user';
import { TOKEN_KEY } from '@/constants';
import type { UserInfo } from '@/types';
import { clearToken, getToken, setToken } from '@/utils/auth';

interface LoginPayload {
  username: string;
  password: string;
}

interface UserState {
  token: string;
  userInfo: UserInfo | null;
}

export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    token: getToken() ?? '',
    userInfo: null
  }),
  persist: {
    key: TOKEN_KEY,
    paths: ['token']
  },
  actions: {
    async login(payload: LoginPayload) {
      const { token } = await loginApi(payload);
      this.token = token;
      setToken(token);
      this.userInfo = await getUserInfoApi();
    },
    async fetchUserInfo() {
      this.userInfo = await getUserInfoApi();
    },
    logout() {
      this.token = '';
      this.userInfo = null;
      clearToken();
    }
  }
});
