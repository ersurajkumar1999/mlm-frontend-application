
import { Outlet } from 'react-router-dom'
import Header from "../layouts/Header";
import Sidebar from './Sidebar';
const AdminMainLayout = () => {
    return (
        <>
            <Header />
            <Sidebar />
            <main id="main" className="main">
                <Outlet />
            </main>
        </>
    )
}

export default AdminMainLayout