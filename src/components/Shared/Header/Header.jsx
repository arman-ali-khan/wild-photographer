import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../Context/ContextProvider';

const Header = () => {
  const {user,logOut} = useContext(UserContext)

  const handleLogOut = ()=>{
    const accept= window.confirm('You want to Logout?')
    if(accept){
      logOut()
    }
  }
    return (<div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li><Link to='/blog'>Blog</Link></li>
              
              <li><Link to='/services'>Services</Link></li>
            </ul>
          </div>
          <Link to='/' className=" normal-case text-xl"><img src='/logo.png' className='h-12'/></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li><Link to='/blog'>Blog</Link></li>
            <li><Link to='/services'>Services</Link></li>
          </ul>
        </div>
        <svg className="spinner" viewBox="0 0 50 50">
  <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
</svg>
        <div className="navbar-end">
          
        {
          user ? 
          <>
          <Link className='btn btn-error btn-outline mx-3' to='/myreview'>My Review</Link>
          <Link className='btn btn-success' to='/addservice'>Add Service</Link>
          <button className='btn btn-info mx-3' onClick={handleLogOut}>Logout</button>
          </>
          :
          <>
           <Link to='/login' className='btn btn-md btn-info mx-1 sm:mx-2'>Login</Link>

          <Link to='/register' className='btn btn-md btn-info mx-1 sm:mx-2'>Register</Link>
          </>
        }
        </div>
      </div>
      
    );
};

export default Header;