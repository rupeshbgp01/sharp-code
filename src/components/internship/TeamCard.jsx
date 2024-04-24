import React from "react";
import { team } from "../../dummydata";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import './team.css';

const TeamCard = () => {
  return (
    <>
      {team.map((val) => (
        <div className="flip-box" key={val.id}>
          <div className='items shadow flip-box-inner'>
            <div className='img flip-box-front'>
              <img src={val.cover} alt='' />
            </div>
            <div className='details flip-box-back'>
              <h2>{val.name}</h2>
              <p>{val.details}</p>
            </div>
            <div className="buttonprice">
              {/* Pass course details as URL parameters */}
              <Link to={`/registration?courseName=${val.name}&courseDescription=${val.details}&courseDuration=${val.duration}&courseDetails=${val.details}&coursePrice=${val.price}&courseStartingDate=${val.startingDate}`}>
                <button>Apply</button>
                <span className="price">₹1000</span>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default TeamCard;
