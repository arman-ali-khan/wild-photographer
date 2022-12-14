import React, { useContext } from 'react';
import { Helmet } from "react-helmet";
import { Link, useNavigate } from 'react-router-dom';

import { useLocation } from 'react-router-dom/dist';
import { UserContext } from '../../Context/ContextProvider';

const Login = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const {loginUser,googleLogin,loading} = useContext(UserContext)

    if(loading){
      return <div className="flex justify-center flex-col items-center">
      <div className="spinner-border border-dashed border-primary animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
      </div>
        <span className="visually-hidden">Loading...</span>
    </div>
    }
    const handleLogin = (event)=>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        loginUser(email,password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            const currentUser = {email: user.email}
            fetch('https://assignment-11-server-smoky.vercel.app/jwt',{
            method:'POST',
            headers:{
              'content-type':'application/json'
            },
            body: JSON.stringify(currentUser)
            })
            .then(res=>res.json())
            .then(data =>{
              console.log(data);
              localStorage.setItem('token', data.token)
              navigate(from,{replace:true})
            })

        })
        .catch(err=>{
            console.error(err);
        })
    }

    const handleGoogleLogin = ()=>{
        googleLogin()
        .then(result=>{
            const user = result.user;
            const currentUser = {email: user.email}
            fetch('https://assignment-11-server-smoky.vercel.app/jwt',{
              method:'POST',
              headers:{
                'content-type':'application/json'
              },
              body: JSON.stringify(currentUser)
              })
              .then(res=>res.json())
              .then(data =>{
                console.log(data);
                localStorage.setItem('token', data.token)
                navigate(from,{replace:true})
              })
            console.log(user);
        })
        .catch(err=>{
            console.error(err);
        })
    }

    
    return (
      
      
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <Helmet>
                <meta charSet="utf-8" />
                <title>Login || Wild Photography</title>
            </Helmet>
        <div className="mx-auto max-w-lg">
          <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
            Get started today
          </h1>
      
          <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati sunt
            dolores deleniti inventore quaerat mollitia?
          </p>
      <div className="mt-6 mb-0 space-y-4 rounded-lg p-8 shadow-2xl">
          <form onSubmit={handleLogin} >
            <p className="text-lg font-medium">Sign in to your account</p>
      
            <div>
              <label htmlFor="email" className="text-sm font-medium">Email</label>
      
              <div className="relative mt-1">
                <input
                  type="email"
                  id="email"
                  className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                  placeholder="Enter email"
                />
      
                <span className="absolute inset-y-0 right-4 inline-flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                </span>
              </div>
            </div>
      
            <div>
              <label htmlFor="password" className="text-sm font-medium">Password</label>
      
              <div className="relative mt-1">
                <input
                  type="password"
                  id="password"
                  className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                  placeholder="Enter password"
                />
      
                <span className="absolute inset-y-0 right-4 inline-flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </span>
              </div>
            </div>
      
            <button
              type="submit"
              className="block w-full my-3 rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
            >
              Sign in
            </button>
            </form>
            <button onClick={handleGoogleLogin}
              className="block w-full btn-outline rounded-lg btn-error btn px-5 py-3 text-sm font-medium text-white"
            >
              Google Sign in
            </button>

      
            <p className="text-center text-sm text-gray-500">
              No account?
              <Link className="underline" to="/register">Sign up</Link>
            </p>
         
          </div>
        </div>
      </div>
      
    );
};

export default Login;