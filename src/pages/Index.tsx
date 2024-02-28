import { Button, Card, Input, InputRef } from 'antd';
import { useRef } from 'react';
import { invoke } from '@tauri-apps/api';

const Index = () => {
    const ipRef = useRef<InputRef>(null);
    const usernameRef = useRef<InputRef>(null);
    const passwordRef = useRef<InputRef>(null);

    const connect = async () => {
        const ipAddress = ipRef.current!.input!.value;
        const username = usernameRef.current!.input!.value;
        const password = passwordRef.current!.input!.value;

        if (ipAddress && username && password) {
            await invoke('connect_server', {
                ipAddress,
                username,
                password,
            });

            const res = await invoke('greet');
            console.log(res);
        }
    };

    const sysInfo = async () => {
        await invoke('sys_info');
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-400 via-blue-500 to-red-500 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <Card className="w-1/2 max-w-1/2 mx-auto">
                <div className="text-center">
                    <div className="text-3xl">连接到服务器</div>
                    <div className="mt-1">输入您的服务器详细信息以连接到服务器。</div>
                </div>
                <div className="space-y-4">
                    <div className="space-y-1">
                        <div>IP地址</div>
                        <Input
                            id="ip"
                            placeholder="192.168.1.100"
                            ref={ipRef}
                            value="82.156.175.47:22"
                        />
                    </div>
                    <div className="space-y-1">
                        <div>用户名</div>
                        <Input id="username" type="text" ref={usernameRef} value="root" />
                    </div>
                    <div className="space-y-1">
                        <div>密码</div>
                        <Input id="password" type="password" ref={passwordRef} value="lsw@0516" />
                    </div>
                </div>
                <div className="text-center mt-5">
                    <Button className="ml-auto" onClick={connect}>
                        连接
                    </Button>
                    <Button onClick={sysInfo}>sys_info</Button>
                </div>
            </Card>
        </div>
    );
};

export default Index;
