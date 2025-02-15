import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import {  useNavigate, useParams } from "react-router-dom";

const VolunteerDetiels = () => {
  const navigate =useNavigate()
  const { id } = useParams();
  const [volunteers, setVolunteers] = useState([]);
  useEffect(() => {
    fetchAll();
  }, []);
  const fetchAll = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/single-volunteer-data/${id}`
    );
    setVolunteers(data);
  };

  const {
    category,
    deadline,
    description,
    location,
    organizerEmail,
    organizerName,
    thumbnail,
    title,
    volunteersNeeded,
    _id
  } = volunteers || {};


  // check Volunteer need or Not 

  const checking =(id)=>{
if(volunteersNeeded == 0 ){
  return toast.error('Already Fillup ')
}else{
navigate(`/volunteer/${id}`)
}
  }
 
  return (
    <div className="h-[calc(100vh-290px)] py-10  w-10/12 mx-auto ">
      <div className="card card-side bg-base-100 mt-10 shadow-xl  ">
        <figure>
          <img className="h-96" src={thumbnail} alt="Movie" />
        </figure>
        <div className="ml-12 ">
          <h1 className="card-title text-2xl font-bold">{title}</h1>
          <p className="text-xl font-semibold">Category : {category}</p>
          <h2 className="text-xl font-semibold">Deadline : {deadline}</h2>
          <h2 className="text-xl font-semibold">Location : {location}</h2>
          <div>
      {volunteersNeeded > 0 ? (
        <h3 className="text-xl font-semibold">Volunteers Needed: {volunteersNeeded}</h3>
      ): <h3 className="text-red-400 text-xl font-semibold">Volunteers Needed:Already Fullfil </h3>}
    </div>
          <h2 className="text-xl font-semibold">
            organizerEmail : {organizerEmail}
          </h2>
          <h2 className="text-xl font-semibold">
            organizerName : {organizerName}
          </h2>
          <p className="w-[500px]">{description}</p>

          <div className="card-actions justify-end">
            <button onClick={()=>checking(_id)} className="btn bg-[#ff7f3a] text-white mt-5">
              Be a Volunteer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerDetiels;
