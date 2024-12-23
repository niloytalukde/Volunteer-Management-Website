import React, { useContext, useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthContext';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import toast from 'react-hot-toast';
const Update = () => {
const [data,setData]=useState({})
const [volunteers, setVolunteers] = useState([]);
    const [startDate, setStartDate] = useState(new Date());
        const {user}=useContext(AuthContext)
    const {id} =useParams()
    useEffect(() => {
      fetchAll();
    }, []);
    const fetchAll = async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/single-volunteer-data/${id}`
      );
      setVolunteers(data);
    };

const {category,deadline,description,location,thumbnail,title,volunteersNeeded
}=volunteers || {}
// Update Data 
    const handleSubmit = async(e)=>{
        e.preventDefault()
try{
    const updateData ={category,deadline,description,location,thumbnail,title,volunteersNeeded
    }
    const {data}= await axios.put(`${import.meta.env.VITE_API_URL}/update/${id}`,updateData)
    from.reset()
    toast.success("Update Post Successfully")
    
}catch(err){
    console.log(err);
}
    }
    return (
        <div className="">
             <form
               className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-lg space-y-4 mt-10"
               onSubmit={handleSubmit}
             >
               <h2 className="text-2xl justify-center flex font-bold mb-4">Create volunteer need post page</h2>
               {/* mother div  */}
               <div className="flex gap-2 justify-between">
                 {/* Thumbnail */}
                 <div className="w-1/2">
                   <label htmlFor="thumbnail" className="s font-medium text-gray-700">
                     Thumbnail (URL)
                   </label>
                   <input
                     type="url"
                     id="thumbnail"
                     defaultValue={thumbnail}
                     name="thumbnail"
                     className="mt-1 block w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
                   />
                 </div>
       
                 {/* Post Title */}
                 <div className="w-1/2">
                   <label htmlFor="title" className="block font-medium text-gray-700">
                     Post Title
                   </label>
                   <input
                     type="text"
                     id="title"
                     name="title"
                     defaultValue={title}
                     className="mt-1 block w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
                   />
                 </div>
               </div>
               {/* Description */}
               <div>
                 <label
                   htmlFor="description"
                   className="block font-medium text-gray-700"
                 >
                   Description
                 </label>
                 <textarea
                   id="description"
                   name="description"
                   defaultValue={description}
                   rows="4"
                   className="mt-1 block w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
                 />
               </div>
       
               {/* mother div  */}
               <div className="flex gap-2">
                 {/* Category */}
                 <div className="w-1/2">
                   <label
                     htmlFor="category"
                     className="block font-medium text-gray-700"
                   >
                     Category
                   </label>
                   <input
                     id="category"
                     name="category"
                     defaultValue={category}
                     className="mt-1 block w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
                   ></input>
                 </div>
                 {/* Location */}
                 <div className="w-1/2">
                   <label
                     htmlFor="location"
                     className="block font-medium text-gray-700"
                   >
                     Location
                   </label>
                   <input
                     type="text"
                     id="location"
                     name="location"
                     defaultValue={location}
                     className="mt-1 block w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
                   />
                 </div>
               </div>
       
               {/* mother div  */}
       
               <div className="flex gap-2">
                 {/* Number of Volunteers Needed */}
                 <div className="w-1/2">
                   <label
                     htmlFor="volunteersNeeded"
                     className="block font-medium text-gray-700"
                   >
                     No. of Volunteers Needed
                   </label>
                   <input
                     type="number"
                     id="volunteersNeeded"
                     defaultValue={volunteersNeeded}
                     name="volunteersNeeded"
                     className="mt-1 block w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
                   />
                 </div>
       
                 {/* Deadline */}
                 <div className="w-1/2">
                   <div className="flex flex-col gap-2 ">
                     <label className="text-gray-700">Deadline</label>
       
                     {/* Date Picker Input Field */}
                     <DatePicker
                       className="border p-2 rounded-md"
                       
                       selected={startDate}
                       onChange={(date) => setStartDate(date)}
                     />
                   </div>
                 </div>
               </div>
       
               <div className="flex gap-2">
                 {/* Organizer Name */}
                 <div className="w-1/2">
                   <label
                     htmlFor="organizerName"
                     className="block font-medium text-gray-700"
                   >
                     Organizer Name
                   </label>
                   <input
                     type="text"
                     id="organizerName"
                     defaultValue={user?.displayName}
                     readOnly
                     name="organizerName"
                     className="mt-1 block w-full p-2 bg-gray-100 border rounded-md"
                   />
                 </div>
       
                 {/* Organizer Email */}
                 <div className="w-1/2">
                   <label
                     htmlFor="organizerEmail"
                     className="block font-medium text-gray-700"
                   >
                     Organizer Email
                   </label>
                   <input
                     type="email"
                     id="organizerEmail"
                     name="organizerEmail"
                     defaultValue={user?.email}
                     readOnly
                     className="mt-1 block w-full p-2 bg-gray-100 border rounded-md"
                   />
                 </div>
               </div>
               {/* Submit Button */}
               <div>
                 <button
                   type="submit"
                   className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:ring focus:ring-blue-300"
                 >
                   Update Post
                 </button>
               </div>
             </form>
           </div>
    );
};

export default Update;