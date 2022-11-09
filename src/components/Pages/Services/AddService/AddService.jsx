import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AddService = () => {

    const notify = () => toast.success("Service Added!");


    const handleAddService = event =>{
        event.preventDefault()
        const form = event.target;
        const name = form.serviceName.value;
        const picture = form.serviceUrl.value;
        const price = form.price.value;
        const about = form.aboutService.value;
        const service ={name:name, price:price, picture:picture,about:about};
        console.log(service);
        fetch('http://localhost:5000/services',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(service)
        })
        .then(res=>res.json())
        .then(data => console.log(data))
        form.reset();
        notify()
    }
    return (
        <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-gray-100 text-gray-800">
            
        <div className="flex flex-col justify-between">
            <div className="space-y-2">
            <ToastContainer />
                <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Add Service</h2>
                <div className="text-gray-600">Add Your Service</div>
            </div>
            <img src="service.png" alt="" className="p-6 " />
        </div>
        <form noValidate="" onSubmit={handleAddService} className="space-y-6 ng-untouched ng-pristine ng-valid">
            <div>
                <label htmlFor="name" className="text-sm">Service Name</label>
                <input required name='serviceName' id="name" type="text" placeholder="" className="w-full p-3 border-4 rounded bg-gray-100" />
            </div>
            <div>
                <label htmlFor="url" className="text-sm">Serevice Image  Url</label>
                <input required id="url" type="url" name='serviceUrl' className="w-full p-3 border-4 rounded bg-gray-100" />
            </div>
            <div className='flex'>
                <div>
                <label htmlFor="number" className="text-sm">Serevice Price</label>
                <input required id="number" type="number" name='price' className="w-full p-3 border-4 rounded bg-gray-100" />
                </div>
                {/* <div>
                <label htmlFor="number" className="text-sm">Serevice Price</label>
                <input required id="number" type="number" name='price' className="w-full p-3 border-4 rounded bg-gray-100" />
                </div> */}
            </div>
            <div>
                <label htmlFor="message" className="text-sm">About Service</label>
                <textarea id="message" name='aboutService' rows="3" className="w-full p-3 border-4 rounded bg-gray-100"></textarea>
            </div>
            <button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-violet-600 text-gray-50">Add Service</button>
        </form>
    </div>
    );
};

export default AddService;