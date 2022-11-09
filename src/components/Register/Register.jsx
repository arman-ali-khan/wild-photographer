import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { UserContext } from '../../Context/ContextProvider';

const Register = () => {
    const {createUser, updateUser} = useContext(UserContext)
    
    const handleUpdateProfile = (first,last)=>{
        const fullName = `${first} ${last}` 
        const profile ={ displayName: fullName}
        updateUser(profile)
        console.log(profile);
    }
    const handleOnSubmit = (event)=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const first = form.first_name.value;
        const last = form.last_name.value;
        const password = form.password.value;
        console.log(email,first, last, password);
        createUser(email,password)
        .then(result=>{
            const user = result.user;
            console.log(user);
            handleUpdateProfile(first,last)
        })
        .catch(err=>{
            console.error(err);
        })
  
    }
    return (      
      <section className="bg-white">
         <Helmet>
                <meta charSet="utf-8" />
                <title>Register || Wild Photography</title>
            </Helmet>
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
          <section
            className="relative flex h-32 items-end lg:col-span-5 lg:h-full xl:col-span-6"
          >
            <img
              alt="Night"
              src="https://images.unsplash.com/photo-1600409396055-e2f42d491271?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHdpbGQlMjBhbmltYWx8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"
              className="absolute inset-0 h-full w-full rounded-2xl object-cover opacity-80"
            />
      
            <div className="hidden lg:relative lg:block lg:p-12">
            
      
              <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                Welcome to Squid 🦑
              </h2>
      
              <p className="mt-4 leading-relaxed text-white/90">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam
                dolorum aliquam, quibusdam aperiam voluptatum.
              </p>
            </div>
          </section>
      
          <main
            aria-label="Main"
            className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6"
          >
            <div className="max-w-xl lg:max-w-3xl">
              <div className="relative -mt-16 block lg:hidden">
                <a
                  className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white text-blue-600 sm:h-20 sm:w-20"
                  href="/"
                >
                  <span className="sr-only">Home</span>
                
                </a>
      
                <h1
                  className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl"
                >
                  Welcome to Squid 🦑
                </h1>
      
                <p className="mt-4 leading-relaxed text-gray-500">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
                  nam dolorum aliquam, quibusdam aperiam voluptatum.
                </p>
              </div>
      
              <form onSubmit={handleOnSubmit} action="#" className="mt-8 grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="FirstName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    First Name
                  </label>
      
                  <input
                    type="text"
                    id="FirstName"
                    name="first_name"
                    className="mt-1 p-3 border-2 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>
      
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="LastName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Last Name
                  </label>
      
                  <input
                    type="text"
                    id="LastName"
                    name="last_name"
                    className="mt-1 p-3 border-2 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>
      
              
      
                <div className="col-span-6 sm:col-span-3">
                <label htmlFor="Email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
      
                  <input
                    type="email"
                    id="Email"
                    name="email"
                    className="mt-1 p-3 border-2 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>
      
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="Password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password 
                  </label>
      
                  <input
                    type="password"
                    id="Password"
                    name="password"
                    className="mt-1 p-3 border-2 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>
      
                {/* <div className="col-span-6">
                  <label htmlFor="MarketingAccept" className="flex gap-4">
                    <input
                      type="checkbox"
                      id="MarketingAccept"
                      name="marketing_accept"
                      className="h-5 p-3 border-2 w-5 rounded-md border-gray-200 bg-white shadow-sm"
                    />
      
                    <span className="text-sm text-gray-700">
                      I want to receive emails about events, product updates and
                      company announcements.
                    </span>
                  </label>
                </div> */}
      
      
                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                  <button type='submit'
                    className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                  >
                    Create an account
                  </button>
      
                  <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                    Already have an account?
                    <Link to="/login" className="text-gray-700 underline">Log in</Link>.
                  </p>
                </div>
              </form>
            </div>
          </main>
        </div>
      </section>
      
    );
};

export default Register;