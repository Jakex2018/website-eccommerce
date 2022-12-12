import React from 'react';
import { Navigate } from 'react-router-dom';
import UseAuth from '../custom-hooks/UseAuth';
import { Outlet } from 'react-router-dom';
const ProtectedRoute = () => {
    const {currentUser} = UseAuth();

    return currentUser ? <Outlet /> :<Navigate to="/login"/>
}

export default ProtectedRoute;
