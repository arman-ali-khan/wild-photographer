import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';

const HomeService = ({service}) => {
    const {name,picture,about,_id} = service;
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
            <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
             
                traveling
              
              <span className="text-gray-600"> 28 Dec 2020</span>
            </p>
            <Link to={`/details/${_id}`}
              aria-label="Category"
              title={name}
              className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              {name}
            </Link>
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

export default HomeService;