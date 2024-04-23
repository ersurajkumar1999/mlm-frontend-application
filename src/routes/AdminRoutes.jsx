import AdminMainLayout from '../admin/layouts/index';
import Dashboard from '../admin/Dashboard';

const AdminRoutes = {
    path: '/',
    element: <AdminMainLayout />,
    children: [
        { path: '/', element: <Dashboard /> },
        { path: '/dashboard', element: <Dashboard /> },
        // { path: '/user-list', element: <UserList /> },
    ]
};


export default AdminRoutes;