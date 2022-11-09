
import React, { useContext, useEffect, useState } from 'react';
import simpleDate from 'simple-date';
import { UserContext } from '../../../../Context/ContextProvider';

const AddReview = ({id}) => {
    const [reviewItem, setReviewItem] = useState({})
    useEffect(()=>{
        fetch(`http://localhost:5173/details/${id}`)
        .then(res=>res.json())
        .then(data=> console.log(data))
    },[])
console.log(`http://localhost:5173/details/${id}`);


    const current_date = new Date();
    
    const date = simpleDate.format(current_date, 'dashed');
    console.log(date); 
    const {user} = useContext(UserContext)
    const handleOnSubmit = (e)=>{
        e.preventDefault();
        const inputText = e.target.review.value;
        const _id = id;
        const email = user.email;
        const fullName = e.target.reviewerName.value;
        const userPhoto = e.target.reviewerPhoto.value;
        const inputReview = {review_id:_id, reviewText:inputText, email: email, fullName: fullName, image:userPhoto,date:date};
        fetch('http://localhost:5000/review',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(inputReview)
        })
        .then(res=> res.json())
        .then(data=> {
            e.target.reset()
            console.log(data)})
        console.log(inputText);
    }

   
    return (
        <div className='flex justify-center'>
        <div className="flex flex-col  p-8 shadow-sm w-full rounded-xl lg:p-12 bg-gray-50 text-gray-800">
  <div className="flex flex-col items-center w-full">
      <h2 className="text-3xl font-semibold text-center">Your opinion matters!</h2>
      <div className="flex flex-col items-center py-6 space-y-3">
          <span className="text-center">How was your experience?</span>
          <div className="flex space-x-3">
              <button type="button" title="Rate 1 stars" aria-label="Rate 1 stars">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 text-yellow-500">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
              </button>
              <button type="button" title="Rate 2 stars" aria-label="Rate 2 stars">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 text-yellow-500">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
              </button>
              <button type="button" title="Rate 3 stars" aria-label="Rate 3 stars">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 text-yellow-500">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
              </button>
              <button type="button" title="Rate 4 stars" aria-label="Rate 4 stars">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 text-yellow-500">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
              </button>
              <button type="button" title="Rate 5 stars" aria-label="Rate 5 stars">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 text-gray-400">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
              </button>
          </div>
      </div>
      <div className="flex flex-col w-full">
         <form onSubmit={handleOnSubmit}>

       <div className='flex justify-center w-1/2 mx-auto'>
       <input name='reviewerName' className='p-4 w-full flex justify-center mx-auto border-4 rounded-md resize-none text-gray-800 bg-gray-50' defaultValue={user.displayName} type='text' required/>
       <input name='reviewerPhoto' className='p-4 w-full flex justify-center  mx-auto border-4 rounded-md resize-none text-gray-800 bg-gray-50' type='url' defaultValue={user?.photoURL? user?.photoURL : '' } placeholder='Add Photo Url'  required/>
       </div>
        <textarea name='review' rows="3" cols='49' placeholder="Message..." className="p-4 flex justify-center md:w-1/2 mx-auto border-4 rounded-md resize-none text-gray-800 bg-gray-50"></textarea>
       
        <div className='flex justify-center'>
        <button type="submit" className="py-4 w-64  my-8 font-semibold rounded-md text-gray-50 bg-violet-600">Leave feedback</button>
        </div>
         </form>
      </div>
  </div>
</div>
        </div>
    );
};

export default AddReview;