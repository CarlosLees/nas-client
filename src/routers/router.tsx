import { Navigate } from 'react-router-dom';

import Index from '@/pages/Index';
import HostList from '@/pages/HostList';
import SystemInfomation from '@/pages/SystemInfomation';

export default [
    {
        path: '/index',
        element: <Index />,
    },
    {
        path: 'host',
        element: <HostList />,
    },
    {
        path: 'system',
        element: <SystemInfomation />,
    },
    {
        path: '/',
        element: <Navigate to="/host" />,
    },
];
