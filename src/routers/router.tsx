import { Navigate } from 'react-router-dom';

import Index from '@/pages/Index';
import HostList from '@/pages/HostList';

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
        path: '/',
        element: <Navigate to="/index" />,
    },
];
