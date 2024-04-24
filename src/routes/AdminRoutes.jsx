import AdminMainLayout from '../admin/layouts/index';
import Dashboard from '../admin/Dashboard';
import UserList from '../admin/UserList';
import ManagerList from '../admin/ManagerList';

const AdminRoutes = {
    path: '/',
    element: <AdminMainLayout />,
    children: [
        { path: '/', element: <Dashboard /> },
        { path: '/dashboard', element: <Dashboard /> },
        { path: '/user-list', element: <UserList /> },
        { path: '/manager-list', element: <ManagerList /> },
    ]
};

// Add prefix "admin" to all paths
const prefixedAdminRoutes = {
    ...AdminRoutes,
    children: AdminRoutes.children.map(route => ({
        ...route,
        path: '/admin' + route.path
    }))
};
export default prefixedAdminRoutes;