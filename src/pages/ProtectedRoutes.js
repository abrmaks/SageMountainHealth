import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
// import LoginPage from './LoginPage';

export const useAuth = () => {
    // const user = { loggedIn: true };
    // return user && user.loggedIn;

    const isAuth = localStorage.getItem('isAuth');
    return isAuth;
};

const ProtectedRoutes = () => {
    const isAuth = useAuth();
    return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
