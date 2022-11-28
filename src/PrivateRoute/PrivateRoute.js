import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthUserContext } from '../Context/AuthContext';

const PrivateRoute = ({ children }) => {

    const { user, load } = useContext(AuthUserContext);
    const location = useLocation();

    if (load) {
        return <div className="flex items-center justify-center space-x-1 mt-[67px] h-[80vh]">
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-red-400"></div>
        </div>
    }

    if (user && user.uid) {
        return children;
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>

};

export default PrivateRoute;