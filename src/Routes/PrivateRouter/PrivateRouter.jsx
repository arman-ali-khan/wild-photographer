import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom/dist';
import { UserContext } from '../../Context/ContextProvider';

const PrivateRouter = ({children}) => {
    const {user}= useContext(UserContext)
    if(user){
        return children
    }
    return <Navigate to='/login' state={{from: location}} replace/>
};

export default PrivateRouter;