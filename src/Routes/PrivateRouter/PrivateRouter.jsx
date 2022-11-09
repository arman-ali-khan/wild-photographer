import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom/dist';
import { UserContext } from '../../Context/ContextProvider';

const PrivateRouter = ({children}) => {
    const {user,loading}= useContext(UserContext)
    if(loading){
        return <div class="flex justify-center flex-col items-center">
        <div class="spinner-border border-dashed border-primary animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
        </div>
          <span class="visually-hidden">Loading...</span>
      </div>
    }
    if(user){
        return children
    }
    return <Navigate to='/login' state={{from: location}} replace/>
};

export default PrivateRouter;