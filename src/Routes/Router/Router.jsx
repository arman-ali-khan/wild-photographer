import { createBrowserRouter } from "react-router-dom";
import Login from "../../components/Login/Login";
import ErrorPage from "../../components/Pages/ErrorPage/ErrorPage";
import Home from "../../components/Pages/Home";
import Services from "../../components/Pages/Services/Services";
import SingleService from "../../components/Pages/Services/SingleService/SingleService";
import Register from "../../components/Register/Register";
import Main from "../../Layout/Main";

export const  router = createBrowserRouter([
    {path:'/', element:<Main/>,errorElement:<ErrorPage/>,children:[
        {path:'/', element:<Home/>},
        {path:'/services/', element:<Services/>},
        {path:'/service/:id', element:<SingleService/>},
        {path:'/login', element:<Login/>},
        {path:'/login', element:<Login/>},
        {path:'/register', element:<Register/>},
    ]}
])