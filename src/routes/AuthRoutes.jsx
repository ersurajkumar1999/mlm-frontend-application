import React from 'react';
// import Page404 from '../Home/Page404';
// import Signup from '../Auth/Signup';
import Login from '../auth/Login';
import AuthMainLayout from '../auth/AuthMainLayout';
import Signup from '../auth/Signup';


const AuthRoutes = {
    path: '/',
    element: <AuthMainLayout />,
    children: [
        { path: '/auth', element: <Login /> },
        { path: '/auth/login', element: <Login /> },
        { path: '/auth/signup', element: <Signup /> },
        // { path: '*', element: <Page404 /> },
    ]
};


export default AuthRoutes;