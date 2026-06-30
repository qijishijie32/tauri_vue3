import type { UserInfo } from '@/types';

export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  token: string;
}

export interface UserInfoResponse extends UserInfo {}
