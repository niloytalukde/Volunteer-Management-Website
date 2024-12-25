import React from "react";
import bg from "../assets/6-270x340.jpg";
import bg1 from "../assets/event2.jpg";
import bg2 from "../assets/evant3.jpg";

const ExtraSection1 = () => {
  return (
    <div>
      <h1 className="text-3xl flex font-bold justify-center mt-5">
        Our Upcoming <span className="text-[#FF7C36]">Events</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-11/12 mx-auto mt-10">
        {/* card-1  */}
        <div className="card bg-base-100  shadow-xl">
        <figure>
          <img className="w-full h-[220px]" src={bg} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Energistically empower value-added action items</h2>
          <p>Enthusiastically optimize cooperative innovation and timely value. Dynamically syndicate corporate applications before orthogonal e-tailers. </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
{/* card-2  */}

<div className="card bg-base-100  shadow-xl">
        <figure>
          <img className="w-full h-[220px]" src={bg1} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Intrinsicly pontificate highly efficient testing </h2>
          <p>Intrinsicly pontificate highly efficient testing procedures via granular collaboration and idea-sharing. Enthusiastically drive functionalized schemas </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>

{/* card 3 */}
      <div className="card bg-base-100  shadow-xl">
        <figure>
          <img className="w-full h-[220px]" src={bg2} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">First Bionic Wireless Under Water Fish Drone</h2>
          <p>Distinctively reconceptualize backward-compatible internal or "organic" sources whereas an expanded array of channels. Quickly mesh front-end.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>

      </div>
    </div>
  );
};

export default ExtraSection1;
