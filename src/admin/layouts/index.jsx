import Header from "../layouts/Header";
import Sidebar from './Sidebar';
import { Outlet, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getProfile } from '../../services/CommonServices';
import { setLoading, setProfileData } from '../../store/slices/profileSlice';
import { logout } from '../../store/slices/authSlice';
import { setClearMessage } from '../../store/slices/alertMessageSlice';

const AdminMainLayout = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const { profileData } = useSelector((state) => state.profile);
    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/auth/login');
        }
    })


    useEffect(() => {
        if (!profileData) {
            const getProfileData = async () => {
                dispatch(setLoading(true));
                try {
                    const response = await getProfile();
                    if (response.status) {
                        dispatch(setProfileData(response?.data?.data ?? null))
                    }
                } catch (error) {
                    console.log("Error getting profile", error);
                }
                dispatch(setLoading(false));
            }
            getProfileData();
        }
    }, [profileData])
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