import { useEffect, useState } from "react";
import Banner from "../Components/Banner";
import axios from "axios";
import VolunteerCard from "../Components/VolunteerCard";
import { Link } from "react-router-dom";
import PageTitle from "../Components/PageTitle";
import ExtraSection1 from "../Components/ExtraSection1";
import { Helmet } from "react-helmet";

const Home = () => {
  const [volunteers, setVolunteers] = useState([]);
  useEffect(() => {
    fetchAll();
  }, []);
  const fetchAll = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/volunteer-data`
    );

    setVolunteers(data);
  };
  return (
    <div className="">
      <Helmet>
        <title> Volgistis | Home</title>
      </Helmet>
      <PageTitle title="Home"></PageTitle>
      <Banner></Banner>
      <h1 className="flex justify-center text-3xl font-bold mt-10 ">
        Volunteer <span className="text-[#ff7f3a] ml-2">Needs Now</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 w-11/12 mx-auto mt-10">
        {volunteers?.map((data) => (
          <VolunteerCard key={data._id} data={data}></VolunteerCard>
        ))}
      </div>
      <button className="btn flex justify-center flex-grow mx-auto px-10 bg-[#ff7f3a] text-white mt-5">
        <Link to={"/AllVolunteer"}>See All</Link>
      </button>

      <ExtraSection1></ExtraSection1>
    </div>
  );
};

export default Home;
