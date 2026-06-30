import { invoke } from '@tauri-apps/api/core';

import type { SystemInfo } from '@/types';

export const tauriInvoke = async <T>(command: string, payload?: Record<string, unknown>) =>
  invoke<T>(command, payload);

export const greet = (name: string) => tauriInvoke<string>('greet', { name });

export const getSystemInfo = () => tauriInvoke<SystemInfo>('get_system_info');

export const readTextFile = (path: string) => tauriInvoke<string>('read_text_file', { path });

export const writeTextFile = (path: string, contents: string) =>
  tauriInvoke<void>('write_text_file', { path, contents });
