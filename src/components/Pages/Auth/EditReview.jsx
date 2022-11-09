import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserContext } from '../../../Context/ContextProvider';


const EditReview = () => {
   const reviewEdit = useLoaderData();
   const {user} = useContext(UserContext)
   const [review, setReview] = useState({})
   const notify = () => toast.info("Review Updated !");

   const id = reviewEdit[0]._id

   const handleOnSubmit=(event)=>{
    event.preventDefault()
    
    
    setReview({review})
    fetch(`http://localhost:5000/edit/${id}`,{
        method:'PUT',
        headers:{
            'content-type':'application/json'
        },
        body: JSON.stringify(review)
    })
    .then(res=>res.json())
    .then(data => {
        notify()
        console.log(data)
    })
   }
   const handleOnChenge = event =>{
    const email = reviewEdit[0].email
    const image = reviewEdit[0].image
    const fullName = reviewEdit[0].fullName
    const reviewText = event.target.value;
    const newReview = {email,image,fullName,reviewText}
    setReview(newReview);
   }

   console.log(review);
    return (
        <div>
            <section className="p-6 text-gray-800">
            <ToastContainer />
	<form onSubmit={handleOnSubmit} className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow bg-gray-50 ng-untouched ng-pristine ng-valid">
		<h2 className="w-full text-3xl font-bold leading-tight">Update Review</h2>
		
		<div>
			<label htmlFor="message" className="block mb-1 ml-1">Review</label>
			<textarea onChange={handleOnChenge} name='reviewText' rows='5' defaultValue={reviewEdit[0].reviewText} id="message" type="text" placeholder="Message..." className="block border-4 w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-600 bg-gray-100"></textarea>
		</div>
		<div>
			<button type="submit" className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 bg-violet-600 focus:ring-violet-600 hover:ring-violet-600 text-gray-50">Update</button>
		</div>
	</form>
</section>
        </div>
    );
};

export default EditReview;