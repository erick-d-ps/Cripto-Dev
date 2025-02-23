import { createBrowserRouter } from "react-router-dom";

import { Home } from "./pages/home";
import { Detail } from "./pages/detail"; 
import { Notfound } from "./pages/notfound/indes";  
import { Layout } from "./components/layout";                                          


const Router = createBrowserRouter([
    {
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path:"/detail/:cripto",
                element: <Detail/>
            },
            {
                path:"*",
                element: <Notfound/> 
            }  
        ]
    }
])

export { Router }