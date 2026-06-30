import type { LoginRequest, LoginResponse, UserInfoResponse } from './types';
import { request } from '@/utils/request';

export const loginApi = async (payload: LoginRequest): Promise<LoginResponse> => {
  try {
    const { data } = await request.post<LoginResponse>('/auth/login', payload);
    return data;
  } catch {
    // 本地脚手架默认提供可直接登录体验，真实项目可替换为真实 API
    return {
      token: `${payload.username}-token`
    };
  }
};

export const getUserInfoApi = async (): Promise<UserInfoResponse> => {
  try {
    const { data } = await request.get<UserInfoResponse>('/auth/user-info');
    return data;
  } catch {
    return {
      id: '1',
      username: 'admin',
      nickname: '管理员',
      email: 'admin@example.com',
      roles: ['admin']
    };
  }
};
