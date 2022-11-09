import React from 'react';
import { useLoaderData } from 'react-router-dom';

const EditReview = () => {
    const edit = useLoaderData()
    console.log(edit);
    return (
        <div>
            
        </div>
    );
};

export default EditReview;