// Windows 下发布构建关闭额外控制台窗口
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

fn main() {
    tauri_vue3_lib::run();
}
