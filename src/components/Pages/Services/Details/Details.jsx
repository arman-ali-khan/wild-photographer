import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { UserContext } from '../../../../Context/ContextProvider';
import AddReview from '../SingleService/AddReview';
import Review from '../SingleService/Review';
const Details = () => {
    const {user} = useContext(UserContext)
    const detailsOfService = useLoaderData()
    const [reviews,setReviews] = useState([])

   
    const {picture,name,about,_id} = detailsOfService

    useEffect(()=>{
        fetch(`http://localhost:5000/review/${_id}`)
        .then(res=>res.json())
        .then(data=>setReviews(data) )
    },[])


    return (
        <div>

            <div>
            <div className="p-5 mx-auto sm:p-10 md:p-16 bg-gray-100 text-gray-800">
	<div className="flex flex-col  mx-auto overflow-hidden rounded">
  
          <div className='flex justify-center'>
          <img src={picture} alt="" className="w-full h-[600px]  bg-gray-500" />
          </div>
		<div className='flex justify-center'>
        <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-gray-50">
			<div className="space-y-2">
				{name}
				<p className="text-xs text-gray-600">By
					<a rel="noopener noreferrer" href="#" className="text-xs hover:underline">Leroy Jenkins</a>
				</p>
			</div>
			<div className="text-gray-800">
				<p>{about}</p>
			</div>
		</div>
        </div>
	</div>
</div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3'>
             {
                reviews.length >0 ? <>  {
                    reviews.map(review => <Review key={review._id} review={review}/> )
                   }
                   </>
                   :
                   <>
                        <p></p>
                    <div className='my-8 text-center text-2xl'>
                        <p>No Review Added</p>
                    </div>
                    </>
             }
            </div>


        <div>
          {
            user?.email ?   <AddReview id={_id}/>
            :
            <p className='text-center text-3xl'>Please <Link className='text-info' to='/login'>Login</Link> to add review</p> 
          }
        </div>
        </div>
    );
};

export default Details;