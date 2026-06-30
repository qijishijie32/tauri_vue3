use std::{env, fs};

use serde::Serialize;

#[derive(Debug, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct SystemInfo {
    pub os: String,
    pub arch: String,
    pub version: String,
    pub hostname: String,
    pub family: String,
    pub locale: String,
}

#[tauri::command]
pub fn greet(name: String) -> String {
    format!("你好，{name}！欢迎使用 Tauri 2 + Vue 3 脚手架。")
}

#[tauri::command]
pub fn get_system_info() -> SystemInfo {
    let info = os_info::get();
    let hostname = hostname::get()
        .ok()
        .and_then(|value| value.into_string().ok())
        .unwrap_or_else(|| "unknown".to_string());

    let locale = env::var("LANG")
        .or_else(|_| env::var("LC_ALL"))
        .or_else(|_| env::var("LANGUAGE"))
        .unwrap_or_else(|_| "unknown".to_string());

    SystemInfo {
        os: info.os_type().to_string(),
        arch: env::consts::ARCH.to_string(),
        version: info.version().to_string(),
        hostname,
        family: env::consts::FAMILY.to_string(),
        locale,
    }
}

#[tauri::command]
pub fn read_text_file(path: String) -> Result<String, String> {
    fs::read_to_string(path).map_err(|e| format!("读取文件失败: {e}"))
}

#[tauri::command]
pub fn write_text_file(path: String, contents: String) -> Result<(), String> {
    fs::write(path, contents).map_err(|e| format!("写入文件失败: {e}"))
}
