import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import AllVolunteerNeedPosts from "../Pages/AllVolunteerNeedPosts";
import Login from "../Components/Login";
import Register from "../Components/Register";
import AddVolunter from "../Components/AddVolunter";
import VolunteerDetiels from "../Components/VolunteerDetiels";
import ManageMyPost from "../Pages/ManageMyPost";
import Update from "../Components/Update";
import BeVolunteer from "../Components/BeVolunteer";
import Error from "../Components/Error";
import PrivateRoute from "../Routes/PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<Error></Error>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/AllVolunteer',
          element:<AllVolunteerNeedPosts></AllVolunteerNeedPosts>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/addVolunteer',
          element:<PrivateRoute><AddVolunter></AddVolunter></PrivateRoute>
        },
        {
          path:'/details/:id',
          element:<PrivateRoute><VolunteerDetiels></VolunteerDetiels></PrivateRoute>
        },
        {
          path:'/myPost',
          element:<ManageMyPost></ManageMyPost>
        },
        {
          path:'/update-data/:id',
          element:<Update></Update>
        },
        {
          path:'/volunteer/:id',
          element:<PrivateRoute><BeVolunteer></BeVolunteer></PrivateRoute> 
        },
      ]
    },
  ]);

  export default router