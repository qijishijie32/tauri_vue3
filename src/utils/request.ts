import axios from 'axios';
import { ElMessage } from 'element-plus';

import { HTTP_STATUS, TOKEN_KEY } from '@/constants';
import { getToken } from '@/utils/auth';

const timeout = Number(import.meta.env.VITE_REQUEST_TIMEOUT ?? 10000);

export const request = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout
});

request.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers[TOKEN_KEY] = 'Bearer ' + token;
  }
  return config;
});

request.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error?.response?.status;
    if (status === HTTP_STATUS.UNAUTHORIZED) {
      ElMessage.error('登录状态已过期，请重新登录');
    } else {
      ElMessage.error(error?.response?.data?.message || error.message || '请求失败');
    }
    return Promise.reject(error);
  }
);
