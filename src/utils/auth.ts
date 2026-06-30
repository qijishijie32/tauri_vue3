import { STORAGE_KEYS } from '@/constants';
import { storage } from './storage';

export const getToken = () => storage.get<string>(STORAGE_KEYS.TOKEN);

export const setToken = (token: string) => storage.set(STORAGE_KEYS.TOKEN, token);

export const clearToken = () => storage.remove(STORAGE_KEYS.TOKEN);
