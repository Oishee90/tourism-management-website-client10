import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root.jsx';
import Home from './Pages/Home/Home.jsx';
import Error from './Components/Error/Error.jsx';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute.jsx';
import Login from './Pages/Login.jsx';
import Register from './Pages/Register.jsx';
import FirebaseProvider from './Components/FirebaseProvider/FirebaseProvider.jsx';
import ADDTouristSpot from './Pages/ADDTouristSpot.jsx';
import MyList from './Pages/MyList.jsx';
import AllTouristSpot from './Pages/AllTouristSpot.jsx';
import Update from './Pages/Update.jsx';
import SpotDetails from './Pages/SpotDetails.jsx';
import { HelmetProvider } from 'react-helmet-async';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element:<Home></Home> ,
      },
      {
        path: "/addtourist",
        element:<PrivateRoute>
          <ADDTouristSpot></ADDTouristSpot>
        </PrivateRoute>,
       
      },
      {
        path: "/alltouristspot",
        element:
          <AllTouristSpot></AllTouristSpot>
       ,
       
      },
      {
        path: "/mylist",
        element:<PrivateRoute>
         <MyList></MyList>
        </PrivateRoute>,
       
      },
      {
        path: "/update/:id",
        element:
        <PrivateRoute>
      <Update></Update>
      </PrivateRoute>
       ,
       
      },
      {
        path: "/singleProduct/:id",
        element:
        <PrivateRoute>
     <SpotDetails></SpotDetails>
      </PrivateRoute>
       ,
       
      },
      {
        path: "/login",
        element:<Login></Login> ,
      },
      {
        path: "/register",
        element:<Register></Register> ,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider> 
  <FirebaseProvider>

  <RouterProvider router={router} />
  </FirebaseProvider>
   
  </HelmetProvider> 
 
  </React.StrictMode>,
)
