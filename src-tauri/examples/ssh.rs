use std::io::{Read, stdin, stdout, Write};
use std::net::TcpStream;
use std::thread;
use ssh2::{PtyModeOpcode, PtyModes, Session};

#[tokio::main]
async fn main() {
    let tcp_stream = TcpStream::connect("82.156.175.47:22").unwrap();

    let mut session = Session::new().unwrap();
    session.set_tcp_stream(tcp_stream);
    session.handshake().unwrap();
    session.userauth_password("root","lsw@0516").unwrap();

    let mut channel = session.channel_session().unwrap();

    let mut mode = PtyModes::new();
    mode.set_boolean(PtyModeOpcode::ECHO,false);
    channel.request_pty("xterm", Some(mode), None).unwrap();
    channel.shell().unwrap();

    channel.handle_extended_data(ssh2::ExtendedData::Merge).unwrap();
    session.set_blocking(false);
    let mut ssh_stdin = channel.stream(0);

    let stdin_thread = thread::spawn(move || {
        let mut buf = [0; 1024];
        loop {
            let size = stdin().read(&mut buf).unwrap();
            ssh_stdin.write_all(&buf[..size]).unwrap();
        }
    });
    let stdout_thread = thread::spawn(move || {
        loop {
            let mut buf = [0; 1024];
            match channel.read(&mut buf) {
                Ok(c) if c > 0 => {
                    print!("{}", std::str::from_utf8(&buf).unwrap());
                    stdout().flush().unwrap();
                }
                Ok(0) => break,
                _ => (),
            }
        }
        channel.close().unwrap();
        print!("Exit: {}", channel.exit_status().unwrap());
    });

    stdin_thread.join().unwrap();
    stdout_thread.join().unwrap();
}