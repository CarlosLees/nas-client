import { useEffect } from 'react';

import { invoke } from '@tauri-apps/api';

import {
    CpuSvg,
    CpuUseComponentSvg,
    DiskSvg,
    DiskUseComponentSvg,
    MemorySvg,
    MemoryUseComponentSvg,
} from '@/components/SvgComponent';
import { ContentComponent, SystemHeader, UnderLine } from '@/components/SystemInfomationComponent';

const SystemInfomation = () => {
    useEffect(() => {
        invoke('sys_info')
            .then((res) => {
                console.log(res);
            })
            .catch((e) => {
                console.log(e);
            });
    }, []);

    return (
        <>
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm w-1/2">
                <SystemHeader
                    topDescription="Hardware Information"
                    bottomDescription="Detailed information about your hardware"
                />
                <div className="p-6 grid gap-2">
                    <div className="flex items-center gap-4">
                        <CpuSvg />
                        <div>
                            <h3 className="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">
                                Intel Core i9-11900K
                            </h3>
                            <div className="flex justify-between">
                                <p className="text-sm text-muted-foreground">3.50 GHz</p>
                                <p className="ml-auto w-24 text-right">4 Cores</p>
                                <p className="w-24 text-right">8 Threads</p>
                            </div>
                        </div>
                    </div>
                    <UnderLine />
                    <div className="flex items-center gap-4">
                        <MemorySvg />
                        <div>
                            <h3 className="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">
                                32GB DDR4
                            </h3>
                        </div>
                    </div>
                    <UnderLine />
                    <div className="flex items-center gap-4">
                        <DiskSvg />
                        <div>
                            <h3 className="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">
                                1TB NVMe SSD
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm w-1/2">
                <SystemHeader topDescription="Usage" bottomDescription="Current hardware usage" />
                <div className="p-6 grid gap-4">
                    <ContentComponent svg={<CpuUseComponentSvg />} name="CPU Usage" content="25%" />
                    <UnderLine />

                    <ContentComponent
                        svg={<MemoryUseComponentSvg />}
                        name="Memory Usage"
                        content="60%"
                    />
                    <UnderLine />
                    <ContentComponent
                        svg={<DiskUseComponentSvg />}
                        name="Disk Space"
                        content="50% Used"
                    />
                </div>
            </div>
        </>
    );
};

export default SystemInfomation;
