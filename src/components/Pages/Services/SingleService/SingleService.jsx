import React, { useContext } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../../Context/ContextProvider';

const SingleService = ({service}) => {
  const {loading,setLoading} = useContext(UserContext)
    const {name,picture,about,_id,price} = service;
    setLoading(true)
    if(loading){
      return <div className="flex flex-col m-8 rounded shadow-md w-60 sm:w-80 animate-pulse h-96">
      <div className="h-48 rounded-t bg-gray-300"></div>
      <div className="flex-1 px-4 py-8 space-y-4 sm:p-8 bg-gray-50">
        <div className="w-full h-6 rounded bg-gray-300"></div>
        <div className="w-full h-6 rounded bg-gray-300"></div>
        <div className="w-3/4 h-6 rounded bg-gray-300"></div>
      </div>
    </div>
    }

    if(service){
      setLoading(false)
    }
    return (

    <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
         <PhotoProvider>
      <div className="foo">
          <PhotoView key={_id} className='w-full flex justify-center' src={picture}>
           <img src={picture} alt="" className="w-full h-96  bg-gray-500" />
          </PhotoView>
       
      </div>
    </PhotoProvider>
          
          <div className="p-5 border border-t-0">
          <p className="mb-3 text-lg font-semibold tracking-wide uppercase">
             
             Price:  {price}$
           
         </p>
            <p
              aria-label="Category"
              title={name}
              className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              {name}
            </p>
            <p className="mb-2 text-gray-700">
             {about.slice(0,100)}
            </p>
            <Link
              to={`/details/${_id}`}
              aria-label=""
              className="btn btn-success w-full font-bold"
            >
              Details
            </Link>
          </div>
        </div>
    );
};

export default SingleService;