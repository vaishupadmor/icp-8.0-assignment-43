import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from "./view/home/home";
import Add from "./view/add/add";
import Show from "./view/show/show";
import { Toaster } from 'react-hot-toast';


const root = ReactDOM.createRoot(document.getElementById('root'));

 const router=createBrowserRouter([
  {
    path:"/",
    element:< Home/>
  },
  {
    path:"/add",
    element:<Add/>

  },
  {
    path:"/show",
    element:<Show/>
  },
  {
    path:"*",
    element:<h1> 404 Not found</h1>
  }
 ])
root.render( 
<div>
  <RouterProvider router={router} /> 
  <Toaster/>
  </div>
);
 

