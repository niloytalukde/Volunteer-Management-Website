import axios from "axios";
import { useContext, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { useParams } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthContext";
import toast from "react-hot-toast";

const BeVolunteer = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);

  const [startDate, setStartDate] = useState(new Date());
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
    thumbnail,
    title,
    volunteersNeeded,
    _id,
    organizerEmail,
  } = volunteers || {};

  // Create Volunteer data and save new database
  const handleSubmit = async (e) => {
    e.preventDefault();
    const Suggestion = e.target.Suggestion.value;
    console.log(Suggestion);
    const clickId = _id;
    const volunteer = {
      category,
      deadline,
      description,
      location,
      thumbnail,
      title,
      status: "requested",
      Suggestion,
      clickId,
      organizerEmail,
      userEmail: user?.email,
    };
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/request-data`,
        volunteer
      );
      toast.success("Request Successful");

      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="">
      <div className="">
        <form
          className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-lg space-y-4 mt-10"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl justify-center flex font-bold mb-4">
            Update Volunteer{" "}
            <span className="text-[#FF813E] ml-4 ">Need Post Page</span>
          </h2>
          {/* mother div  */}
          <div className="flex gap-2 justify-between">
            {/* Thumbnail */}
            <div className="w-1/2">
              <label
                htmlFor="thumbnail"
                className="s font-medium text-gray-700"
              >
                Thumbnail (URL)
              </label>
              <input
                type="url"
                id="thumbnail"
                defaultValue={thumbnail}
                readOnly
                name="thumbnail"
                className="mt-1 block w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
              />
            </div>

            {/* Post Title */}
            <div className="w-1/2">
              <label
                htmlFor="title"
                className="block font-medium text-gray-700"
              >
                Post Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                defaultValue={title}
                readOnly
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
              readOnly
              rows="4"
              className="mt-1 block w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
            />
          </div>
          {/* Suggeetion  */}
          <div>
            <label
              htmlFor="description"
              className="block font-medium text-gray-700"
            >
              Suggestion
            </label>
            <textarea
              id="description"
              name="Suggestion"
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
                readOnly
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
                readOnly
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
                readOnly
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
                User Email
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
              className="w-full py-2 px-4  bg-[#ff813e] text-white font-semibold rounded-md  focus:ring focus:ring-blue-300"
            >
              Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BeVolunteer;
