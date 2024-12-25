import { format } from 'date-fns';
import React from 'react';
import { Link } from 'react-router-dom';

const VolunteerCard = ({data}) => {
    const {thumbnail, title, category,
        deadline,_id,
        volunteersNeeded
        }=data||{}
    return (
        <div className="card bg-base-100  shadow-xl">
  <figure>
    <img
    className='h-[190px] rounded-lg w-full'
    
      src={thumbnail}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <div className=''>
        <h3>Category : {category}</h3>
        
        <div>
      {volunteersNeeded > 0 ? (
        <h3>Volunteers Needed: {volunteersNeeded}</h3>
      ): <h3 className="text-red-400">Volunteers Needed:Already Fullfil </h3>}
    </div>
        <h3>Deadline :   {format(new Date(deadline), "P")}</h3>
    </div>
    <div className="card-actions justify-end">
      <Link to={`/details/${_id}`} className="btn bg-[#ff7f3a] text-white">View Details</Link>
    </div>
  </div>
</div>
    );
};

export default VolunteerCard;