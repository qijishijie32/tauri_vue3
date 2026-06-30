pub mod commands;

use commands::{get_system_info, greet, read_text_file, write_text_file};

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_shell::init())
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![
            greet,
            get_system_info,
            read_text_file,
            write_text_file
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
