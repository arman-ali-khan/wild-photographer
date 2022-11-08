import { createBrowserRouter } from "react-router-dom";
import Login from "../../components/Login/Login";
import ErrorPage from "../../components/Pages/ErrorPage/ErrorPage";
import Home from "../../components/Pages/Home";
import Details from "../../components/Pages/Services/Details/Details";
import Services from "../../components/Pages/Services/Services";
import SingleService from "../../components/Pages/Services/SingleService/SingleService";
import Register from "../../components/Register/Register";
import Main from "../../Layout/Main";

export const  router = createBrowserRouter([
    {path:'/', element:<Main/>,errorElement:<ErrorPage/>,children:[
        {
            path:'/',
            loader:()=>fetch('http://localhost:5000/homeServices'), 
            element:<Home/>
        },
        {
            path:'/services/',
            loader:()=>fetch('http://localhost:5000/services'), 
            element:<Services/>
        },
        {
            path:'/service/:id', 
            element:<SingleService/>
        },
        {
            path:'/login', 
            element:<Login/>
        },
        {
            path:'/login', 
            element:<Login/>
        },
        {
            path:'/details/:id',
            loader:({params})=> {
           return fetch(`http://localhost:5000/details/${params.id}`)
            }, element:<Details/>
        },
        {
            path:'/register', 
            element:<Register/>
        },
    ]}
])