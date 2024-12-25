import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthContext";
import axios from "axios";
import { MdDeleteForever } from "react-icons/md";
import { GrDocumentUpdate } from "react-icons/gr";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { ImCancelCircle } from "react-icons/im";
import { LuTableOfContents } from "react-icons/lu";
import { BsGrid3X3Gap, BsListNested } from "react-icons/bs";
import { format } from "date-fns";

const ManageMyPost = () => {
  const [myData, setmyData] = useState([]);
  const { user } = useContext(AuthContext);
  const [volunteer, setVolunteer] = useState([]);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if (user?.email) {
      fetchAll();
    }
  }, [user]);
  const fetchAll = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/user-data/${user?.email}`
    );

    setVolunteer(data);
  };

  const handelDelete = async (id) => {
    const { data } = await axios.delete(
      `${import.meta.env.VITE_API_URL}/delete-data/${id}`
    );

    fetchAll();
  };

  // delete message 1
  const deleteMessage1 = (id) => {
    toast((t) => (
      <div className="gap-5">
        <h1>Are You Sure??</h1>
        <div className="mt-5">
          <button
            className="btn-sm mr-4 text-white rounded-md bg-red-500"
            onClick={() => handelDelete(id)}
          >
            Delete
          </button>
          <button
            className="btn-sm text-white rounded-md bg-[#ff803d] "
            onClick={() => toast.dismiss(t.id)}
          >
            Dismiss
          </button>
        </div>
      </div>
    ));
  };

  // my volunteer data
  useEffect(() => {
    if (user?.email) {
      myRequestData();
    }
  }, [user]);
  const myRequestData = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/my-request-data/${user?.email}`
    );
    {
      setmyData(data);
    }
  };

  const handelDelete2 = async (id) => {
    const { data } = await axios.delete(
      `${import.meta.env.VITE_API_URL}/delete-request/${id}`
    );

    myRequestData();
  };

  // delete message 1
  const deleteMessage = (id) => {
    toast((t) => (
      <div className="gap-5">
        <h1>Are You Sure??</h1>
        <div className="mt-5">
          <button
            className="btn-sm mr-4 text-white rounded-md bg-red-500"
            onClick={() => handelDelete2(id)}
          >
            Delete
          </button>
          <button
            className="btn-sm rounded-md text-white bg-[#ff803d] "
            onClick={() => toast.dismiss(t.id)}
          >
            Dismiss
          </button>
        </div>
      </div>
    ));
  };

  const toggleEvant = () => {
    setToggle(!toggle);
  };

  return (
    <div className="">
      <div className=" w-11/12 mx-auto mt-10">
        <div className="text-3xl justify-end flex">
          {toggle ? (
            <button onClick={toggleEvant} className="">
              {" "}
              <BsGrid3X3Gap />
            </button>
          ) : (
            <button onClick={toggleEvant}>
              <LuTableOfContents />{" "}
            </button>
          )}
        </div>
      </div>
      <div>
        {toggle ? (
          <div className="container p-2 mx-auto sm:p-4 w-11/12 rounded-md text-gray-100 dark:text-gray-800 ">
            {/* My volunteer need post */}
            <h2 className="mb-4 text-3xl font-semibold flex justify-center leading-tight">
              My Volunteer{" "}
              <span className="text-[#FF803D] ml-4">Need Post</span>{" "}
            </h2>
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
                    <tr
                      key={data._id}
                      className="border-b border-opacity-20 border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50"
                    >
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
                          <button
                            onClick={() => deleteMessage1(data._id)}
                            className="text-xl text-red-600"
                          >
                            <MdDeleteForever />
                          </button>
                        </span>
                      </td>
                      <td className="p-3 text-right">
                        <span className="px-3 p-3 font-semibold rounded-md text-gray-900 dark:text-gray-50">
                          <Link to={`/update-data/${data._id}`}>
                            <button className="text-xl text-[#ff9055]">
                              <GrDocumentUpdate />
                            </button>
                          </Link>
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* My Volunteer Request Post */}

            <h2 className="mb-4 text-3xl font-semibold flex justify-center leading-tight mt-10 ">
              My Volunteer{" "}
              <span className="text-[#FF803D] ml-4 ">Request Post</span>{" "}
            </h2>
            <div className="overflow-x-auto mt-5">
              <table className="min-w-full text-xs">
                <colgroup>
                  <col />
                  <col />
                  <col />
                  <col />

                  <col className="w-24" />
                </colgroup>
                <thead className="bg-gray-700 dark:bg-gray-300">
                  <tr className="text-left">
                    <th className="p-3">OrganizerEmail</th>
                    <th className="p-3">category</th>
                    <th className="p-3">status</th>
                    <th className="p-3">location</th>
                    <th className="p-3 text-right">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {myData.map((data2) => (
                    <tr
                      key={data2._id}
                      className="border-b border-opacity-20 border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50"
                    >
                      <td className="p-3">
                        <p>{data2.organizerEmail}</p>
                      </td>
                      <td className="p-3">
                        <p>{data2.category}</p>
                      </td>
                      <td className="p-3">
                        <p>{data2.status}</p>
                      </td>
                      <td className="p-3">
                        <p>{data2.location}</p>
                      </td>

                      <td className="p-3 text-right">
                        <span className="px-3 p-3 font-semibold rounded-md text-gray-900 dark:text-gray-50">
                          <button
                            onClick={() => deleteMessage(data2._id)}
                            className="text-xl text-red-600"
                          >
                            <ImCancelCircle />
                          </button>
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div>
            {/* child grid 1 */}
            <h2 className="mb-4 text-3xl font-semibold flex justify-center leading-tight mt-10 ">
              My Volunteer{" "}
              <span className="text-[#FF803D] ml-4 ">Need Post</span>{" "}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-11/12 mx-auto">
              {volunteer.map((vol) => (
                <div key={vol._id} className="card bg-base-100  shadow-xl">
                  <figure>
                    <img
                      className="h-[190px] rounded-lg w-full"
                      src={vol.thumbnail}
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{vol.title}</h2>
                    <div className="">
                      <h3>Category : {vol.category}</h3>
                      <h3>Deadline : {format(new Date(vol.deadline), "P")}</h3>
                    </div>
                    <div className="card-actions justify-end">
                      <button
                        onClick={() => deleteMessage1(vol._id)}
                        className="text-white bg-red-400 btn"
                      >
                        Delete
                      </button>

                      {/* update button  */}
                      <Link to={`/update-data/${vol._id}`}>
                        <button className="text-white bg-[#ff9055] btn">
                          Update
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* child grid 1 End */}
            {/* child grid 2 */}
            <div>
              <div>
                <h2 className="mb-4 text-3xl font-semibold flex justify-center leading-tight mt-10 ">
                  My Volunteer{" "}
                  <span className="text-[#FF803D] ml-4 ">Request Post</span>{" "}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-11/12 mx-auto">
                  {myData.map((voler) => (
                    <div
                      key={voler._id}
                      className="card bg-base-100  shadow-xl"
                    >
                      <figure>
                        <img
                          className="h-[190px] rounded-lg w-full"
                          src={voler.thumbnail}
                          alt="Shoes"
                        />
                      </figure>
                      <div className="card-body">
                        <h2 className="card-title">{voler.title}</h2>
                        <div className="">
                          <h3>Category : {voler.category}</h3>
                          <h3>
                            Deadline : {format(new Date(voler.deadline), "P")}
                          </h3>
                        </div>
                        <div className="card-actions justify-end">
                          <button
                            onClick={() => deleteMessage(voler._id)}
                            className="btn bg-[#ff7f3a] text-white"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* child grid 2  End*/}
          </div>
        )}
      </div>

      {/* main grid  */}
    </div>
  );
};

export default ManageMyPost;
