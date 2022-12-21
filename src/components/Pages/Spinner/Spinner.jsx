import React from 'react';

const Spinner = () => {
    return (
        <div className='w-full absolute top-0 bg-white flex justify-center h-screen items-center'>
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-rose-600"></div>
        </div>
    );
};

export default Spinner;