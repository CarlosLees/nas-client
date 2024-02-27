import { Button, Card, Input } from 'antd';

const Index = () => {
    // const nameRef = useRef<InputRef>(null);
    // const passwordRef = useRef<InputRef>(null);
    //
    // const navigate = useNavigate();
    //
    // const joinRoom = async () => {
    //     const username = nameRef.current!.input!.value;
    //     const password = passwordRef.current!.input!.value;
    //
    //     navigate('/chat', {
    //         state: {
    //             username,
    //             password,
    //         },
    //     });
    // };

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
                        <Input id="ip" placeholder="192.168.1.100" />
                    </div>
                    <div className="space-y-1">
                        <div>用户名</div>
                        <Input id="username" />
                    </div>
                    <div className="space-y-1">
                        <div>密码</div>
                        <Input id="password" type="password" />
                    </div>
                </div>
                <div className="text-center mt-5">
                    <Button className="ml-auto">连接</Button>
                </div>
            </Card>
        </div>
    );
};

export default Index;
