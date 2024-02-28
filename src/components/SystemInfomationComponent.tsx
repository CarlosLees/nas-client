import { FC } from 'react';

export const UnderLine = () => {
    return (
        <>
            <div
                data-orientation="horizontal"
                role="none"
                className="shrink-0 bg-gray-100 h-[1px] w-full"
            />
        </>
    );
};

interface HeaderProps {
    topDescription: string;
    bottomDescription: string;
}

export const SystemHeader: FC<HeaderProps> = ({ topDescription, bottomDescription }) => {
    return (
        <>
            <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">
                    {topDescription}
                </h3>
                <p className="text-sm text-muted-foreground">{bottomDescription}</p>
            </div>
        </>
    );
};

interface ContentComponentProps {
    svg: React.ReactNode;
    name: string;
    content: string;
}

export const ContentComponent: FC<ContentComponentProps> = ({ svg, name, content }) => {
    return (
        <>
            <div className="flex items-center gap-4">
                {svg}
                <div>
                    <h3 className="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">
                        {name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{content}</p>
                </div>
                <div className="w-full max-w-md" />
            </div>
        </>
    );
};
