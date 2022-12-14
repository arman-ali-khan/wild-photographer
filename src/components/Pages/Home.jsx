import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useLoaderData } from 'react-router-dom';
import HomeService from './HomeService';
import LatestWork from './LatestWork/LatestWork';
import Newsletter from './Newsletter/Newsletter';
import Slider from './Slider/Slider';
import Spinner from './Spinner/Spinner';

const Home = () => {
  const [loading,setLoading] = useState(true)
    const [services,setServices] = useState([])

    useEffect(()=>{
      fetch('https://assignment-11-server-smoky.vercel.app/homeServices')
      .then(res=>res.json())
      .then(data=> {
        setServices(data)
        setLoading(false)
      })
    },[])
    return (
       <>
       {
        loading ? <Spinner />
        :
        <div className='container mx-auto'>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Home || Wild Photography</title>
        </Helmet>
        <Slider/>
      <div className='my-12 container mx-auto'>
        <h2 className='text-2xl ml-4 my-2 font-bold'>Services</h2>
    
      <div className="px-2 py-10 mx-auto md:px-24 lg:px-4 lg:py-2">
  <div className="grid gap-2 lg:grid-cols-3 ">

  {
        services.map(service => <HomeService setLoading={setLoading} key={service._id} service={service}/>)
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
       }
       </>
    );
};

export default Home;