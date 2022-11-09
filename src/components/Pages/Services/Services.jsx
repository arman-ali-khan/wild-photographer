import React from 'react';
import { Helmet } from 'react-helmet';
import 'react-photo-view/dist/react-photo-view.css';
import { useLoaderData } from 'react-router-dom';
import SingleService from './SingleService/SingleService';

const Services = () => {
  const services = useLoaderData()
    return (
        <div>
           <Helmet>
                <meta charSet="utf-8" />
                <title>Services || Wild Photography</title>
            </Helmet>
      <div className="px-4 py-16 mx-auto md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-8 lg:grid-cols-3 ">

        {
          services.map(service => <SingleService key={service._id} service={service}/>)
        }
      </div>
    </div>
       
      </div>
    );
};

export default Services;