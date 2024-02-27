import { FC } from 'react';

interface SourceItemProps {
    name: string;
    description: string;
}

const SourceItemComponent: FC<SourceItemProps> = ({ name, description }) => {
    return (
        <div className="border rounded-lg p-4 bg-gray-100 dark:bg-gray-800">
            <div className="grid gap-2">
                <h2 className="text-lg font-semibold">{name}</h2>
                <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default SourceItemComponent;
