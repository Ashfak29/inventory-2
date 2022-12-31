import React, {useContext, useEffect, useState} from 'react';
import { Navigate, useLocation } from 'react-router-dom';
const PrivateRoute = ({ children }) => {
    const location = useLocation();
    const [user, setUser] = useState(true)

    useEffect(()=>{
        if (localStorage.user == undefined || localStorage.user == false){
            setUser(false)
        }
    }, [])

    if (!user) {
        return <Navigate to={'/login'}></Navigate>
    }
    return children
};

export default PrivateRoute;