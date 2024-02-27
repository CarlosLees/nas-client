import { Button } from 'antd';

import SourceItemComponent from '@/components/SourceItemComponent';
import SidebarComponent from '@/components/SidebarComponent';

const HostList = () => {
    return (
        <div className="flex flex-col h-screen w-full">
            <div className="flex flex-1 min-h-0">
                <div className="hidden w-1/5 min-h-0 border-r bg-gray-100 md:flex dark:bg-gray-800">
                    <div className="flex flex-col w-64">
                        <div className="flex items-center h-1/7 px-3">
                            <TerminalIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                            <h1 className="ml-2 text-lg font-semibold dark:text-gray-50">
                                File Manager
                            </h1>
                        </div>
                        <div className="flex-1 min-h-0 overflow-auto">
                            <div className="grid gap-1 p-2">
                                <SidebarComponent name="Host" linkUrl="/" />
                                <SidebarComponent name="History" linkUrl="/" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-1 min-h-0">
                    <div className="flex flex-col h-full">
                        <div className="flex h-14 items-center border-b px-4 md:px-6">
                            <Button className="mr-4 md:hidden">
                                <MenuIcon className="w-6 h-6" />
                                <span className="sr-only">Toggle sidebar</span>
                            </Button>
                            <nav className="flex-1 min-w-0">
                                <h1 className="text-lg font-semibold">File Manager</h1>
                            </nav>
                            <div>
                                <div>
                                    <Button>
                                        <ChevronDownIcon className="w-4 h-4" />
                                        <span className="sr-only">Toggle user menu</span>
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 min-h-0 overflow-auto p-4 md:p-6">
                            <div className="flex flex-col gap-4">
                                <SourceItemComponent
                                    name="Documents"
                                    description="You have 23 documents in this folder."
                                />

                                <SourceItemComponent
                                    name="Pictures"
                                    description="You have 10 pictures in this folder."
                                />

                                <SourceItemComponent
                                    name="Music"
                                    description="You have 5 songs in this folder."
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HostList;

const ChevronDownIcon = (props: any) => {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m6 9 6 6 6-6" />
        </svg>
    );
};

const MenuIcon = (props: any) => {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
    );
};

const TerminalIcon = (props: any) => {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polyline points="4 17 10 11 4 5" />
            <line x1="12" x2="20" y1="19" y2="19" />
        </svg>
    );
};
