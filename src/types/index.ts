export interface ApiResponse<T = unknown> {
  code: number;
  message: string;
  data: T;
}

export interface UserInfo {
  id: string;
  username: string;
  nickname: string;
  email: string;
  roles: string[];
}

export interface SystemInfo {
  os: string;
  arch: string;
  version: string;
  hostname: string;
  family: string;
  locale: string;
}
