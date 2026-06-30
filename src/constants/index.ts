export const STORAGE_KEYS = {
  TOKEN: 'tauri_vue3_token',
  APP: 'tauri_vue3_app'
} as const;

export const TOKEN_KEY = 'Authorization';

export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500
} as const;
