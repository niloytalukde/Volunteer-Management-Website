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
          element:<AddVolunter></AddVolunter>
        },
        {
          path:'/details/:id',
          element:<VolunteerDetiels></VolunteerDetiels>
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
          element:<BeVolunteer></BeVolunteer>
        },
      ]
    },
  ]);

  export default router