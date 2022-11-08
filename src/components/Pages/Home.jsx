import React from 'react';
import { Link } from 'react-router-dom';
import LatestWork from './LatestWork/LatestWork';
import Newsletter from './Newsletter/Newsletter';
import Services from './Services/Services';
import Slider from './Slider/Slider';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <Slider/>
          <div className='my-12 container mx-auto'>
            <h2 className='text-2xl ml-4 my-2 font-bold'>Services</h2>
          <Services/>
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