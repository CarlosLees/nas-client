mod command;
use command::connect::*;

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![connect_server, sys_info])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
