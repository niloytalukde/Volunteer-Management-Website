import axios from "axios";
import React, { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthContext";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Helmet } from "react-helmet";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const AddVolunter = () => {

    const [startDate, setStartDate] = useState(new Date());
    const {user}=useContext(AuthContext)
    const navigate =useNavigate()
  const handleSubmit = async(e) => {
    e.preventDefault()
    const form =e.target
    const thumbnail=form.thumbnail.value
    const title=form.title.value
    const description=form.description.value
    const category=form.category.value
    const location=form.location.value
    const volunteersNeeded=form.volunteersNeeded.value
    const volunteersNeededNum=parseInt(volunteersNeeded)
    const deadline=startDate
    const organizerEmail=form.organizerEmail.value
    const organizerName=form.organizerName.value
    
   const VolunteerData ={thumbnail,title,description,category,location,volunteersNeeded:volunteersNeededNum,deadline,organizerName,organizerEmail}
    
try{
    const {data}= await axios.post(`${import.meta.env.VITE_API_URL}/volunteer`,VolunteerData)
    toast.success("Added Post Successfully")
    form.reset()
navigate('/')
}catch(err){
    console.log(err);
}
  };

  return (
    <div className="">
      <Helmet>
        <title> Volgistis | Add Volunteer </title>
      </Helmet>
      <form
        className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-lg space-y-4 mt-10"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl justify-center flex font-bold mb-4">Create Volunteer <span className="text-[#ff813e] ml-4">Need Post page</span>  </h2>
         
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
            className="w-full py-2 px-4 bg-[#ff813e] text-white font-semibold rounded-md focus:ring focus:ring-blue-300"
          >
            Add Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddVolunter;
