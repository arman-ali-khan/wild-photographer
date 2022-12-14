import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from "react-helmet";

import { UserContext } from '../../../Context/ContextProvider';
import SingleReview from './SingleReview';


const MyReview = () => {
    const [myReview,setMyReview,logOut] = useState([])

    const {user} = useContext(UserContext)
    useEffect(()=>{
        fetch(`https://assignment-11-server-smoky.vercel.app/myReview?email=${user?.email}`,{
            headers:{
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(res=> {
            if(res.status === 401){
               return logOut()
              }
            return res.json()})
        .then(data =>{
            setMyReview(data)
           
            })
    },[user?.uid,myReview])

    return (
        <div className=" w-full  p-6  divide-y rounded-md divide-gray-300 bg-gray-50 text-gray-800">
            
              <Helmet>
                <meta charSet="utf-8" />
                <title>My Review || Wild Photography</title>
            </Helmet>
<div className='grid grid-cols-1 md:grid-cols-3 gap-3 '>
{
  myReview.length >0 ?   myReview.map(myReview => <SingleReview key={myReview._id} myReview={myReview}/>) : <>
  <p></p>
  <p className='text-center text-3xl'>No Review Added</p>
  </>
}
	
</div>
</div>
    );
};

export default MyReview;