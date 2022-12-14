import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const SingleReview = ({myReview}) => {
    const {reviewText,_id,review_id} = myReview;
	const [service,setService] = useState({})

	useEffect(()=>{
		fetch(`https://assignment-11-server-smoky.vercel.app/details/${review_id}`)
		.then(res=>res.json())
		.then(data => setService(data))
	},[])

	const handleDelete=(id)=>{
		const accept = window.confirm('Are you sure to Delete?')
		if(accept){
			fetch(`https://assignment-11-server-smoky.vercel.app/delete/${id}`,{
				method:'DELETE'
			})
			.then(res=> res.json())
			.then(data => {
				if(data.deletedCount >0){
					alert('delete Successfull')
					console.log(data);
				}
			})
			

		}
		
	}
    return (
		<div className='border-4 rounded-lg'>
        <div className="flex justify-between p-4 ">
		<div className="flex space-x-4">
			<div>
				<img src={service?.picture || 'https://avatars.githubusercontent.com/u/74469015?v=4'} alt="" className="object-cover w-12 h-12 rounded-xl bg-gray-500" />
			</div>
			<div>
				<h4 className="font-bold">{service.name}</h4>
				<Link to={`/edit/${_id}`} className='btn btn-xs mx-1 btn-success'>Edit</Link>
				<button onClick={()=>handleDelete(_id)} className='btn btn-xs mx-1 btn-error'>Delete</button>
               
				
			</div>
		</div>
		<div className="flex items-center space-x-2 text-yellow-500">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
				<path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
			</svg>
			<span className="text-xl font-bold">4.5</span>
		</div>
	</div>
    <div className="p-4 space-y-2 text-sm text-gray-600">
    <p>{reviewText}</p>
</div>
</div>
    );
};

export default SingleReview;