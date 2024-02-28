use std::{io::Read, net::TcpStream};

use ssh2::Session;
use sysinfo::{Components, Disks, Networks, System};

#[tauri::command]
pub fn connect_server(ip_address: String, username: String, password: String) {
    let tcp = TcpStream::connect(ip_address.as_str()).unwrap();
    let mut session = Session::new().unwrap();
    session.set_tcp_stream(tcp);
    session.handshake().unwrap();
    session
        .userauth_password(username.as_str(), password.as_str())
        .unwrap();

    let mut channel = session.channel_session().unwrap();
    channel.exec("cd / && ls").unwrap();

    let mut vec = vec![];
    channel.read_to_end(&mut vec).unwrap();
    println!("{:?}", String::from_utf8_lossy(&vec));

    channel.wait_close().unwrap();
    println!("{:?}", channel.exit_status().unwrap());
}

#[tauri::command]
pub fn sys_info() {
    let mut sys_info = System::new_all();
    sys_info.refresh_all();

    // RAM and swap information:
    println!("total memory: {} bytes", sys_info.total_memory());
    println!("used memory : {} bytes", sys_info.used_memory());
    println!("total swap  : {} bytes", sys_info.total_swap());
    println!("used swap   : {} bytes", sys_info.used_swap());

    // Display system information:
    println!("System name:             {:?}", System::name());
    println!("System kernel version:   {:?}", System::kernel_version());
    println!("System OS version:       {:?}", System::os_version());
    println!("System host name:        {:?}", System::host_name());

    // Number of CPUs:
    println!("NB CPUs: {}", sys_info.cpus().len());

    // Display processes ID, name na disk usage:
    // for (pid, process) in sys_info.processes() {
    //     println!("[{pid}] {} {:?}", process.name(), process.disk_usage());
    // }

    // // We display all disks' information:
    // println!("=> disks:");
    // let disks = Disks::new_with_refreshed_list();
    // for disk in &disks {
    //     println!("{disk:?}");
    // }

    // // Network interfaces name, data received and data transmitted:
    // let networks = Networks::new_with_refreshed_list();
    // println!("=> networks:");
    // for (interface_name, data) in &networks {
    //     println!(
    //         "{interface_name}: {}/{} B",
    //         data.received(),
    //         data.transmitted()
    //     );
    // }

    // // Components temperature:
    // let components = Components::new_with_refreshed_list();
    // println!("=> components:");
    // for component in &components {
    //     println!("{component:?}");
    // }

    // loop {
    //     sys_info.refresh_cpu(); // Refreshing CPU information.
    //     for cpu in sys_info.cpus() {
    //         print!("{}% ", cpu.cpu_usage());
    //     }
    //     // Sleeping to let time for the system to run for long
    //     // enough to have useful information.
    //     std::thread::sleep(sysinfo::MINIMUM_CPU_UPDATE_INTERVAL);
    // }
}