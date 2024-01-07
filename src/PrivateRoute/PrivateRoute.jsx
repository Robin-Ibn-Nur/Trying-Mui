// import React,{ useContext, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
// import { AuthContext } from '../Provider/AuthProvider';
// import { Progress } from '@nextui-org/react';


const PrivateRoute = ({ children }) => {
    // const { user, loading } = useContext(AuthContext)
    const user = null;
    const location = useLocation()
    if (loading) {
        return <div>Loading...</div>
    }

    if (user) {
        return children;
    } else {
        alert('Please log in first')
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;