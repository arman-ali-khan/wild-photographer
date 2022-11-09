import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, useLoaderData } from 'react-router-dom';
import HomeService from './HomeService';
import LatestWork from './LatestWork/LatestWork';
import Newsletter from './Newsletter/Newsletter';
import Slider from './Slider/Slider';

const Home = () => {
    const services = useLoaderData()
    return (
        <div className='container mx-auto'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home || Wild Photography</title>
            </Helmet>
            <Slider/>
          <div className='my-12 container mx-auto'>
            <h2 className='text-2xl ml-4 my-2 font-bold'>Services</h2>
        
          <div className="px-4 py-16 mx-auto md:px-24 lg:px-8 lg:py-2">
      <div className="grid gap-8 lg:grid-cols-3 ">

      {
            services.map(service => <HomeService key={service._id} service={service}/>)
         }
      </div>
    </div>
           <div className='flex justify-center my-3'>
           <Link to='/services' className='text-center btn btn-info font-bold'>See All</Link>
           </div>
          </div>
          <div>
            <h2 className='text-2xl ml-6 font-bold my-2'>My Latest Work</h2>
          <LatestWork/>
          </div>
          <div>
            <Newsletter/>
          </div>
        </div>
    );
};

export default Home;