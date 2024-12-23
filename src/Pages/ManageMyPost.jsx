import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthContext";
import axios from "axios";
import { MdDeleteForever } from "react-icons/md";
import { GrDocumentUpdate } from "react-icons/gr";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const ManageMyPost = () => {
  const { user } = useContext(AuthContext);
  const [volunteer, setVolunteer] = useState([]);
  useEffect(() => {
    if(user?.email){
      fetchAll();
    }
  }, [user]);
  const fetchAll = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/user-data/${user?.email}`
    );
    console.log(data);
    setVolunteer(data);
  };

 
  const handelDelete = async (id) => {
    const { data } = await axios.delete(
      `${import.meta.env.VITE_API_URL}/delete-data/${id}`
    );
    console.log(data);
  toast.success('Successfully Delete ')
    fetchAll()
  };

  return (
    <div className="container p-2 mx-auto sm:p-4 w-11/12 rounded-md text-gray-100 dark:text-gray-800 h-[calc(100vh-290px)]">
      <h2 className="mb-4 text-2xl font-semibold leading-tight">My Post </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-xs">
          <colgroup>
            <col />
            <col />
            <col />
            <col />
            <col />
            <col className="w-24" />
          </colgroup>
          <thead className="bg-gray-700 dark:bg-gray-300">
            <tr className="text-left">
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Deadline</th>
              <th className="p-3">No.of Volunteer</th>
              <th className="p-3 text-right">Delete</th>
              <th className="p-3 text-right">Update</th>
            </tr>
          </thead>
          <tbody>
            {volunteer.map((data) => (
              <tr key={data._id} className="border-b border-opacity-20 border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50">
                <td className="p-3">
                  <p>{data.organizerName}</p>
                </td>
                <td className="p-3">
                  <p>{data.organizerEmail}</p>
                </td>
                <td className="p-3">
                  <p>{data.deadline}</p>
                </td>
                <td className="p-3">
                  <p>{data.volunteersNeeded}</p>
                </td>

                <td className="p-3 text-right">
                  <span className="px-3 p-3 font-semibold rounded-md text-gray-900 dark:text-gray-50">
                    <button onClick={()=>handelDelete(data._id)} className="text-xl text-red-600">
                      <MdDeleteForever />
                    </button>
                  </span>
                </td>
                <td className="p-3 text-right">
                  <span className="px-3 p-3 font-semibold rounded-md text-gray-900 dark:text-gray-50">
                    <Link to={`/update-data/${data._id}`}><button className="text-xl text-[#ff9055]">
                      <GrDocumentUpdate />
                    </button></Link>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default ManageMyPost;
