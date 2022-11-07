import { createBrowserRouter } from "react-router-dom";
import Home from "../../components/Pages/Home";
import SingleService from "../../components/Pages/Services/SingleService/SingleService";
import Main from "../../Layout/Main";

export const  router = createBrowserRouter([
    {path:'/', element:<Main/>,children:[
        {path:'/', element:<Home/>},
        {path:'/service/:id', element:<SingleService/>},
    ]}
])