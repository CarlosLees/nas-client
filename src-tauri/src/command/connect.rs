use std::{io::Read, net::TcpStream, str::Bytes};

use ssh2::Session;

#[tauri::command]
pub async fn connect_server(ip_address: String,username: String, password: String) {
    println!("{:?},{:?},{:?},",ip_address,username,password);
    let tcp = TcpStream::connect(ip_address.as_str()).unwrap();
    let mut session = Session::new().unwrap();
    session.set_tcp_stream(tcp);
    session.handshake().unwrap();
    session.userauth_password(username.as_str(), password.as_str()).unwrap();

    let mut channel = session.channel_session().unwrap();
    channel.exec("cd / && ls").unwrap();

    let mut vec = vec![];
    channel.read_to_end(&mut vec).unwrap();
    println!("{:?}",String::from_utf8_lossy(&vec));

    channel.wait_close().unwrap();
    println!("{:?}",channel.exit_status().unwrap());
}