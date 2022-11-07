import React from 'react';
import Services from './Services/Services';
import Slider from './Slider/Slider';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <Slider/>
            <Services/>
            <Services/>
        </div>
    );
};

export default Home;