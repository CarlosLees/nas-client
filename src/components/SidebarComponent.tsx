import { FC } from 'react';
import { Link } from 'react-router-dom';

interface SidebarProps {
    name: string;
}

const SidebarComponent: FC<SidebarProps> = ({ name }) => {
    return (
        <>
            <div className="border rounded-lg p-2 bg-gray-100 dark:bg-gray-800">
                <Link
                    className="group flex items-center w-full h-9 rounded-md px-3 text-sm
                    font-medium transition-colors hover:bg-gray-100/50 hover:text-gray-900
                    dark:hover:bg-gray-800/50 dark:hover:text-gray-50"
                    to="/"
                >
                    <span className="truncate">{name}</span>
                </Link>
            </div>
        </>
    );
};

export default SidebarComponent;
