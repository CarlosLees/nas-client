mod command;

use crate::command::cli::*;

#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![greet,test])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
