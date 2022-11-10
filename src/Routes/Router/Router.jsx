import { createBrowserRouter } from "react-router-dom";
import Login from "../../components/Login/Login";
import EditReview from "../../components/Pages/Auth/EditReview";
import MyReview from "../../components/Pages/Auth/MyReview";
import Blog from "../../components/Pages/Blog/Blog";
import ErrorPage from "../../components/Pages/ErrorPage/ErrorPage";
import Home from "../../components/Pages/Home";
import AddService from "../../components/Pages/Services/AddService/AddService";
import Details from "../../components/Pages/Services/Details/Details";
import Services from "../../components/Pages/Services/Services";
import SingleService from "../../components/Pages/Services/SingleService/SingleService";
import Register from "../../components/Register/Register";
import Main from "../../Layout/Main";
import PrivateRouter from "../PrivateRouter/PrivateRouter";

export const  router = createBrowserRouter([
    {path:'/', element:<Main/>,errorElement:<ErrorPage/>,children:[
        {
            path:'/',
            loader:()=>fetch('https://assignment-11-server-smoky.vercel.app/homeServices'), 
            element:<Home/>
        },
        {
            path:'/services/',
            loader:()=>fetch('https://assignment-11-server-smoky.vercel.app/services'), 
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
            path:'/details/:id',
            loader:({params})=> {
           return fetch(`https://assignment-11-server-smoky.vercel.app/details/${params.id}`)
            }, element:<Details/>
        },
        {
            path:'/register', 
            element:<Register/>
        },
        {
            path:'/myreview', 
            element:<PrivateRouter><MyReview/></PrivateRouter>
        },
        {
            path:'/addservice', 
            element:<PrivateRouter><AddService/></PrivateRouter>
        },
        {
            path:'/blog', 
            element:<Blog/>
        },
        {
            path:'/edit/:id',
            element:<PrivateRouter><EditReview/></PrivateRouter>,
            loader: ({params})=> {
                return fetch(`https://assignment-11-server-smoky.vercel.app/edit/${params.id}`)
            }
        },
    ]}
])