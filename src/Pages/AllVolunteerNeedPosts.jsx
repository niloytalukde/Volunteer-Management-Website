import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllVolunteerNeedPosts = () => {
  const [volunteers, setVolunteers] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    fetchAll();
  }, [search]);
  const fetchAll = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/All-volunteer-data?search=${search}`
    );
    setVolunteers(data);
  };
  console.log(search);
  return (
    <div className="">
      <h1 className="flex justify-center mt-5 text-3xl font-bold">
        All Voluteer{" "}
        <span className="text-[#ff7f3a] ml-2"> Need Posts Page</span>
      </h1>
      <div className="flex justify-center mt-5 gap-4">
        <input
          type="text"
          placeholder="Search here"
          onChange={(e) => setSearch(e.target.value)}
          className="input input-bordered w-full max-w-xs"
        />
        <button className="btn px-5 bg-[#ff7f3a] text-white">Search</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-11/12 mx-auto mt-8">
        {volunteers.map((data) => (
          <div className="card bg-base-100  shadow-xl">
            <figure>
              <img
                className="h-[190px] rounded-lg w-full"
                src={data.thumbnail}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{data.title}</h2>
              <div className="">
                <h3>Category : {data.category}</h3>
                <div>
      {data.volunteersNeeded > 0 ? (
        <h3>Volunteers Needed: {data.volunteersNeeded}</h3>
      ): <h3 className="text-red-400">Volunteers Needed:Already Fullfil </h3>}
    </div>
                <h3>Deadline : {data.deadline}</h3>
              </div>
              <div className="card-actions justify-end">
                <Link
                  to={`/details/${data._id}`}
                  className="btn bg-[#ff7f3a] text-white"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllVolunteerNeedPosts;
