/* eslint-disable */
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import FormsPage from './FormsPage';
import AppointmentPage from './AppointmentsPage';
import AdminAppointmentPage from './AdminAppointmentsPage';
import CertificatesPage from './CertificatesPage';
import LoginPage from './LoginPage';
import ProtectedRoutes from './ProtectedRoutes';

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/certificates" element={<CertificatesPage />} />

            <Route path="/forms" element={<FormsPage />} />
            <Route path="/appointment" element={<AppointmentPage />} />
            <Route element={<ProtectedRoutes />}>
                <Route path="/admin" element={<AdminAppointmentPage />} />
            </Route>
            <Route path="/login" element={<LoginPage />} />
        </Routes>
    );
};
export default Router;
