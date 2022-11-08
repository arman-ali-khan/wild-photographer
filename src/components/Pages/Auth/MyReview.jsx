import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../Context/ContextProvider';
import SingleOrder from './SingleOrder';

const MyReview = () => {
    const [myOrders,setMyOrders] = useState([])
    const {user} = useContext(UserContext)
    useEffect(()=>{
        fetch('http://localhost:5000/myReview',{
            headers:{
                email: user?.email
            }
           
        })
        .then(res=> res.json())
        .then(data => setMyOrders(data))
    },[user?.email])

    console.log(myOrders);
    return (
        <div className=" w-full  p-6  divide-y rounded-md divide-gray-300 bg-gray-50 text-gray-800">
<div className='grid grid-cols-1 md:grid-cols-3 gap-3 '>
{
    myOrders.map(myorder => <SingleOrder key={myorder._id} myorder={myorder}/>)
}
	
</div>
</div>
    );
};

export default MyReview;